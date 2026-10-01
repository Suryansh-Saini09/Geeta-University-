"use server";

import { AuditAction, ContentStatus, Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { assertPermission } from "@/server/auth/permissions";
import { requireAdminSession } from "@/server/auth/session";
import { prisma } from "@/server/db/client";
import { pageSchema, type PageInput } from "@/validations/page";

function payload(formData: FormData) {
  let sections: unknown;
  try {
    sections = JSON.parse(String(formData.get("sections") ?? ""));
  } catch {
    sections = null;
  }
  return {
    title: formData.get("title"),
    slug: formData.get("slug"),
    sections,
    status: formData.get("status"),
    seoTitle: formData.get("seoTitle"),
    seoDescription: formData.get("seoDescription"),
    noIndex: formData.get("noIndex") === "on",
    revisionNote: formData.get("revisionNote") || undefined,
  };
}

function errorUrl(path: string, message: string) {
  return `${path}?error=${encodeURIComponent(message)}`;
}

function pageData(input: PageInput, publishedAt?: Date | null) {
  return {
    title: input.title,
    slug: input.slug,
    template: "STANDARD",
    sections: input.sections,
    status: input.status,
    publishedAt: input.status === ContentStatus.PUBLISHED ? publishedAt ?? new Date() : null,
  };
}

function snapshot(input: PageInput): Prisma.InputJsonObject {
  return {
    title: input.title,
    slug: input.slug,
    template: "STANDARD",
    sections: input.sections,
    status: input.status,
    seo: { title: input.seoTitle, description: input.seoDescription, noIndex: input.noIndex },
  };
}

export async function createPageAction(formData: FormData) {
  const session = await requireAdminSession();
  assertPermission(session.user.role, "manageContent");
  const path = "/admin/pages/new";
  const parsed = pageSchema.safeParse(payload(formData));
  if (!parsed.success) redirect(errorUrl(path, parsed.error.issues[0]?.message ?? "Invalid page data."));
  if (parsed.data.status === ContentStatus.PUBLISHED) assertPermission(session.user.role, "publishContent");
  if (parsed.data.status === ContentStatus.ARCHIVED) assertPermission(session.user.role, "deleteContent");

  const owner = await prisma.page.findUnique({ where: { slug: parsed.data.slug }, select: { id: true } });
  if (owner) redirect(errorUrl(path, "This slug is already in use."));

  await prisma.$transaction(async (tx) => {
    const page = await tx.page.create({
      data: {
        ...pageData(parsed.data),
        createdBy: { connect: { id: session.user.id } },
        updatedBy: { connect: { id: session.user.id } },
        seo: { create: { title: parsed.data.seoTitle, description: parsed.data.seoDescription, noIndex: parsed.data.noIndex } },
      },
    });
    await tx.contentRevision.create({ data: { pageId: page.id, snapshot: snapshot(parsed.data), note: parsed.data.revisionNote || null, createdById: session.user.id } });
    await tx.auditLog.create({ data: { actorId: session.user.id, action: page.status === ContentStatus.PUBLISHED ? AuditAction.PUBLISH : AuditAction.CREATE, entityType: "Page", entityId: page.id, after: snapshot(parsed.data) } });
  });
  revalidatePath("/admin/pages");
  revalidatePath("/admin");
  revalidatePath(`/pages/${parsed.data.slug}`);
  redirect("/admin/pages?created=1");
}

export async function updatePageAction(formData: FormData) {
  const session = await requireAdminSession();
  assertPermission(session.user.role, "manageContent");
  const id = String(formData.get("id") ?? "");
  const path = `/admin/pages/${id}/edit`;
  const parsed = pageSchema.safeParse(payload(formData));
  if (!parsed.success) redirect(errorUrl(path, parsed.error.issues[0]?.message ?? "Invalid page data."));
  const existing = await prisma.page.findUnique({ where: { id }, include: { seo: true } });
  if (!existing) redirect("/admin/pages?error=not-found");
  if (parsed.data.status === ContentStatus.PUBLISHED || existing.status === ContentStatus.PUBLISHED) assertPermission(session.user.role, "publishContent");
  if (parsed.data.status === ContentStatus.ARCHIVED && existing.status !== ContentStatus.ARCHIVED) assertPermission(session.user.role, "deleteContent");
  const owner = await prisma.page.findUnique({ where: { slug: parsed.data.slug }, select: { id: true } });
  if (owner && owner.id !== id) redirect(errorUrl(path, "This slug is already in use."));

  await prisma.$transaction(async (tx) => {
    const updated = await tx.page.update({
      where: { id },
      data: {
        ...pageData(parsed.data, existing.publishedAt),
        updatedBy: { connect: { id: session.user.id } },
        seo: existing.seoId
          ? { update: { title: parsed.data.seoTitle, description: parsed.data.seoDescription, noIndex: parsed.data.noIndex } }
          : { create: { title: parsed.data.seoTitle, description: parsed.data.seoDescription, noIndex: parsed.data.noIndex } },
      },
    });
    await tx.contentRevision.create({ data: { pageId: id, snapshot: snapshot(parsed.data), note: parsed.data.revisionNote || null, createdById: session.user.id } });
    const action = existing.status !== ContentStatus.PUBLISHED && updated.status === ContentStatus.PUBLISHED
      ? AuditAction.PUBLISH
      : existing.status === ContentStatus.PUBLISHED && updated.status !== ContentStatus.PUBLISHED
        ? AuditAction.UNPUBLISH
        : AuditAction.UPDATE;
    await tx.auditLog.create({ data: { actorId: session.user.id, action, entityType: "Page", entityId: id, before: { title: existing.title, slug: existing.slug, sections: existing.sections, status: existing.status, seo: existing.seo ? { title: existing.seo.title, description: existing.seo.description, noIndex: existing.seo.noIndex } : null }, after: snapshot(parsed.data) } });
  });
  revalidatePath("/admin/pages");
  revalidatePath("/admin");
  revalidatePath(`/pages/${existing.slug}`);
  revalidatePath(`/pages/${parsed.data.slug}`);
  redirect("/admin/pages?updated=1");
}

export async function archivePageAction(formData: FormData) {
  const session = await requireAdminSession();
  assertPermission(session.user.role, "deleteContent");
  const id = String(formData.get("id") ?? "");
  const existing = await prisma.page.findUnique({ where: { id } });
  if (!existing) redirect("/admin/pages?error=not-found");

  await prisma.$transaction(async (tx) => {
    const updated = await tx.page.update({ where: { id }, data: { status: ContentStatus.ARCHIVED, publishedAt: null, updatedById: session.user.id } });
    await tx.contentRevision.create({ data: { pageId: id, snapshot: { title: updated.title, slug: updated.slug, sections: updated.sections, status: updated.status }, note: "Archived", createdById: session.user.id } });
    await tx.auditLog.create({ data: { actorId: session.user.id, action: existing.status === ContentStatus.PUBLISHED ? AuditAction.UNPUBLISH : AuditAction.UPDATE, entityType: "Page", entityId: id, before: existing, after: updated } });
  });
  revalidatePath("/admin/pages");
  revalidatePath("/admin");
  revalidatePath(`/pages/${existing.slug}`);
  redirect("/admin/pages?archived=1");
}
