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

  const user = await prisma.adminUser.findUnique({
    where: { email: parsed.data.email.toLowerCase() },
  });

  if (!user || user.status !== AdminUserStatus.ACTIVE) {
    redirect("/admin/login?error=invalid-credentials");
  }

  const passwordMatches = await verifyPassword(
    parsed.data.password,
    user.passwordHash
  );

  if (!passwordMatches) {
    redirect("/admin/login?error=invalid-credentials");
  }

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

  redirect("/admin");
}

export async function logoutAction() {
  await revokeCurrentAdminSession();
  await clearAdminSessionCookie();
  redirect("/admin/login");
}
