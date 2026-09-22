"use server";

import { AuditAction, ContentStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { prisma } from "@/server/db/client";
import { assertPermission } from "@/server/auth/permissions";
import { requireAdminSession } from "@/server/auth/session";
import {
  departmentCreateSchema,
  departmentUpdateSchema,
} from "@/validations/department";

export async function createDepartmentAction(formData: FormData) {
  const session = await requireAdminSession();
  assertPermission(session.user.role, "manageContent");

  const parsed = departmentCreateSchema.safeParse({
    name: formData.get("name"),
    shortName: formData.get("shortName") || undefined,
    slug: formData.get("slug"),
    summary: formData.get("summary") || undefined,
    status: formData.get("status"),
    sortOrder: formData.get("sortOrder") || 0,
  });

  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? "Invalid department data.";
    redirect(`/admin/departments/new?error=${encodeURIComponent(message)}`);
  }

  const existing = await prisma.department.findUnique({
    where: { slug: parsed.data.slug },
    select: { id: true },
  });

  if (existing) {
    redirect(
      `/admin/departments/new?error=${encodeURIComponent("This slug is already in use.")}`
    );
  }

  const department = await prisma.department.create({
    data: {
      name: parsed.data.name,
      shortName: parsed.data.shortName || null,
      slug: parsed.data.slug,
      summary: parsed.data.summary || null,
      status: parsed.data.status,
      sortOrder: parsed.data.sortOrder,
      publishedAt:
        parsed.data.status === "PUBLISHED" ? new Date() : null,
    },
  });

  await prisma.auditLog.create({
    data: {
      actorId: session.user.id,
      action: AuditAction.CREATE,
      entityType: "Department",
      entityId: department.id,
      after: department,
    },
  });

  revalidatePath("/admin");
  revalidatePath("/admin/departments");
  redirect("/admin/departments?created=1");
}

export async function updateDepartmentAction(formData: FormData) {
  const session = await requireAdminSession();
  assertPermission(session.user.role, "manageContent");

  const parsed = departmentUpdateSchema.safeParse({
    id: formData.get("id"),
    name: formData.get("name"),
    shortName: formData.get("shortName") || undefined,
    slug: formData.get("slug"),
    summary: formData.get("summary") || undefined,
    status: formData.get("status"),
    sortOrder: formData.get("sortOrder") || 0,
  });

  if (!parsed.success) {
    const message =
      parsed.error.issues[0]?.message ?? "Invalid department data.";
    redirect(
      `/admin/departments/${formData.get("id")}/edit?error=${encodeURIComponent(message)}`
    );
  }

  const existing = await prisma.department.findUnique({
    where: { id: parsed.data.id },
  });

  if (!existing) {
    redirect("/admin/departments?error=not-found");
  }

  const slugOwner = await prisma.department.findUnique({
    where: { slug: parsed.data.slug },
    select: { id: true },
  });

  if (slugOwner && slugOwner.id !== parsed.data.id) {
    redirect(
      `/admin/departments/${parsed.data.id}/edit?error=${encodeURIComponent("This slug is already in use.")}`
    );
  }

  const department = await prisma.department.update({
    where: { id: parsed.data.id },
    data: {
      name: parsed.data.name,
      shortName: parsed.data.shortName || null,
      slug: parsed.data.slug,
      summary: parsed.data.summary || null,
      status: parsed.data.status,
      sortOrder: parsed.data.sortOrder,
      publishedAt:
        parsed.data.status === "PUBLISHED"
          ? existing.publishedAt ?? new Date()
          : null,
    },
  });

  await prisma.auditLog.create({
    data: {
      actorId: session.user.id,
      action: AuditAction.UPDATE,
      entityType: "Department",
      entityId: department.id,
      before: existing,
      after: department,
    },
  });

  revalidatePath("/admin");
  revalidatePath("/admin/departments");
  revalidatePath(`/admin/departments/${department.id}/edit`);
  redirect("/admin/departments?updated=1");
}

export async function archiveDepartmentAction(formData: FormData) {
  const session = await requireAdminSession();
  assertPermission(session.user.role, "deleteContent");

  const id = String(formData.get("id") ?? "");

  if (!id) {
    redirect("/admin/departments?error=not-found");
  }

  const existing = await prisma.department.findUnique({
    where: { id },
  });

  if (!existing) {
    redirect("/admin/departments?error=not-found");
  }

  const department = await prisma.department.update({
    where: { id },
    data: {
      status: ContentStatus.ARCHIVED,
      publishedAt: null,
    },
  });

  await prisma.auditLog.create({
    data: {
      actorId: session.user.id,
      action: AuditAction.UPDATE,
      entityType: "Department",
      entityId: department.id,
      before: existing,
      after: department,
    },
  });

  revalidatePath("/admin");
  revalidatePath("/admin/departments");
  redirect("/admin/departments?archived=1");
}
