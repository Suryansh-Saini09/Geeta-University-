"use server";

import { redirect } from "next/navigation";
import { AdminUserStatus, AuditAction } from "@prisma/client";

import { prisma } from "@/server/db/client";
import {
  clearAdminSessionCookie,
  createAdminSession,
  revokeCurrentAdminSession,
  setAdminSessionCookie,
} from "@/server/auth/session";
import { verifyPassword } from "@/server/auth/password";
import { adminLoginSchema } from "@/validations/adminAuth";

export async function loginAction(formData: FormData) {
  const parsed = adminLoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    redirect("/admin/login?error=invalid-input");
  }

  let user = null;
  let passwordMatches = false;

  try {
    user = await prisma.adminUser.findUnique({
      where: { email: parsed.data.email.toLowerCase() },
    });

    if (user && user.status === AdminUserStatus.ACTIVE) {
      passwordMatches = await verifyPassword(
        parsed.data.password,
        user.passwordHash
      );
    }
  } catch (error) {
    console.error("Database connection error during login:", error);
    redirect("/admin/login?error=database-error");
  }

  if (!user || user.status !== AdminUserStatus.ACTIVE || !passwordMatches) {
    redirect("/admin/login?error=invalid-credentials");
  }

  try {
    const session = await createAdminSession(user.id);

    await prisma.adminUser.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() },
    });

    await prisma.auditLog.create({
      data: {
        actorId: user.id,
        action: AuditAction.LOGIN,
        entityType: "AdminUser",
        entityId: user.id,
      },
    });

    await setAdminSessionCookie(session.token, session.expiresAt);
  } catch (error) {
    console.error("Session creation error during login:", error);
    redirect("/admin/login?error=session-error");
  }

  redirect("/admin");
}

export async function logoutAction() {
  try {
    await revokeCurrentAdminSession();
    await clearAdminSessionCookie();
  } catch (error) {
    console.error("Logout action error:", error);
  }
  redirect("/admin/login");
}
