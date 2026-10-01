"use server";

import { AuditAction } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { assertPermission } from "@/server/auth/permissions";
import { requireAdminSession } from "@/server/auth/session";
import { prisma } from "@/server/db/client";
import { CONTACT_SETTINGS_KEY } from "@/server/services/siteSettings";
import { contactSettingsSchema } from "@/validations/siteSettings";

export async function updateContactSettingsAction(formData: FormData) {
  const session = await requireAdminSession();
  assertPermission(session.user.role, "manageSettings");
  const parsed = contactSettingsSchema.safeParse(Object.fromEntries(
    Object.keys(contactSettingsSchema.shape).map((key) => [key, formData.get(key)])
  ));
  if (!parsed.success) {
    redirect(`/admin/settings?error=${encodeURIComponent(parsed.error.issues[0]?.message ?? "Invalid contact details.")}`);
  }

  await prisma.$transaction(async (tx) => {
    const previous = await tx.siteSetting.findUnique({ where: { key: CONTACT_SETTINGS_KEY } });
    const setting = await tx.siteSetting.upsert({
      where: { key: CONTACT_SETTINGS_KEY },
      create: { key: CONTACT_SETTINGS_KEY, value: parsed.data, description: "Public contact page details" },
      update: { value: parsed.data },
    });
    await tx.auditLog.create({
      data: {
        actorId: session.user.id,
        action: previous ? AuditAction.UPDATE : AuditAction.CREATE,
        entityType: "SiteSetting",
        entityId: setting.id,
        before: previous?.value ?? undefined,
        after: parsed.data,
      },
    });
  });
  revalidatePath("/contact-us");
  revalidatePath("/admin/settings");
  redirect("/admin/settings?saved=1");
}
