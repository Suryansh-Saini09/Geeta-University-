"use server";

import path from "node:path";
import { AuditAction } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { assertPermission } from "@/server/auth/permissions";
import { requireAdminSession } from "@/server/auth/session";
import { prisma } from "@/server/db/client";
import { detectMediaFormat, MAX_MEDIA_BYTES, removeMedia, saveMedia } from "@/server/media/storage";
import { mediaMetadataSchema } from "@/validations/media";

function errorUrl(pathname: string, message: string) {
  return `${pathname}?error=${encodeURIComponent(message)}`;
}

function metadata(formData: FormData) {
  return mediaMetadataSchema.safeParse({
    altText: formData.get("altText") || undefined,
    caption: formData.get("caption") || undefined,
  });
}

export async function uploadMediaAction(formData: FormData) {
  const session = await requireAdminSession();
  assertPermission(session.user.role, "manageContent");
  const pathname = "/admin/media";
  const file = formData.get("file");
  const parsed = metadata(formData);
  if (!parsed.success) redirect(errorUrl(pathname, parsed.error.issues[0]?.message ?? "Invalid media details."));
  if (!(file instanceof File) || file.size === 0) redirect(errorUrl(pathname, "Choose a file to upload."));
  if (file.size > MAX_MEDIA_BYTES) redirect(errorUrl(pathname, "Files must be 10 MB or smaller."));

  const bytes = Buffer.from(await file.arrayBuffer());
  const format = detectMediaFormat(bytes);
  if (!format) redirect(errorUrl(pathname, "Upload a JPEG, PNG, GIF, WebP, or PDF file."));
  if (format.mimeType.startsWith("image/") && !parsed.data.altText) redirect(errorUrl(pathname, "Alt text is required for images."));
  const fileName = path.basename(file.name).slice(0, 255) || `upload.${format.extension}`;

  const key = await saveMedia(bytes, format.extension);
  try {
    await prisma.$transaction(async (tx) => {
      const asset = await tx.mediaAsset.create({
        data: {
          fileName, storageKey: key, url: `/api/media/${key}`,
          mimeType: format.mimeType, sizeBytes: bytes.length,
          altText: parsed.data.altText || null, caption: parsed.data.caption || null,
          createdById: session.user.id,
        },
      });
      await tx.auditLog.create({ data: { actorId: session.user.id, action: AuditAction.CREATE, entityType: "MediaAsset", entityId: asset.id, after: asset } });
    });
  } catch (error) {
    await removeMedia(key).catch(() => {});
    throw error;
  }
  revalidatePath("/admin/media");
  redirect("/admin/media?uploaded=1");
}

export async function updateMediaAction(formData: FormData) {
  const session = await requireAdminSession();
  assertPermission(session.user.role, "manageContent");
  const id = String(formData.get("id") ?? "");
  const pathname = `/admin/media/${id}/edit`;
  const parsed = metadata(formData);
  if (!parsed.success) redirect(errorUrl(pathname, parsed.error.issues[0]?.message ?? "Invalid media details."));
  const existing = await prisma.mediaAsset.findUnique({ where: { id } });
  if (!existing) redirect("/admin/media?error=not-found");
  if (existing.mimeType.startsWith("image/") && !parsed.data.altText) redirect(errorUrl(pathname, "Alt text is required for images."));
  await prisma.$transaction(async (tx) => {
    const updated = await tx.mediaAsset.update({ where: { id }, data: { altText: parsed.data.altText || null, caption: parsed.data.caption || null } });
    await tx.auditLog.create({ data: { actorId: session.user.id, action: AuditAction.UPDATE, entityType: "MediaAsset", entityId: id, before: existing, after: updated } });
  });
  revalidatePath("/admin/media");
  redirect("/admin/media?updated=1");
}

export async function deleteMediaAction(formData: FormData) {
  const session = await requireAdminSession();
  assertPermission(session.user.role, "deleteContent");
  const id = String(formData.get("id") ?? "");
  const existing = await prisma.mediaAsset.findUnique({
    where: { id },
    include: { _count: { select: { galleryImages: true, departmentsAsHero: true, programsAsHero: true, facultyPortraits: true, heroBanners: true, downloads: true } } },
  });
  if (!existing) redirect("/admin/media?error=not-found");
  if (Object.values(existing._count).some((count) => count > 0)) redirect(errorUrl("/admin/media", "This file is in use and cannot be deleted."));

  await prisma.$transaction(async (tx) => {
    await tx.mediaAsset.delete({ where: { id } });
    await tx.auditLog.create({ data: { actorId: session.user.id, action: AuditAction.DELETE, entityType: "MediaAsset", entityId: id, before: existing } });
  });
  await removeMedia(existing.storageKey).catch((error) => console.error("Failed to remove media file:", error));
  revalidatePath("/admin/media");
  redirect("/admin/media?deleted=1");
}
