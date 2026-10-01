"use server";

import { AuditAction, ContentStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { prisma } from "@/server/db/client";
import { assertPermission } from "@/server/auth/permissions";
import { requireAdminSession } from "@/server/auth/session";
import {
  programCreateSchema,
  programUpdateSchema,
} from "@/validations/program";

export async function createProgramAction(formData: FormData) {
  const session = await requireAdminSession();
  assertPermission(session.user.role, "manageContent");

  const parsed = programCreateSchema.safeParse(getProgramPayload(formData));

  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? "Invalid program data.";
    redirect(`/admin/programs/new?error=${encodeURIComponent(message)}`);
  }

  const department = await prisma.department.findUnique({
    where: { id: parsed.data.departmentId },
    select: { id: true },
  });

  if (!department) {
    redirect(
      `/admin/programs/new?error=${encodeURIComponent("Selected department does not exist.")}`
    );
  }

  const existing = await prisma.program.findUnique({
    where: { slug: parsed.data.slug },
    select: { id: true },
  });

  if (existing) {
    redirect(
      `/admin/programs/new?error=${encodeURIComponent("This slug is already in use.")}`
    );
  }

  const program = await prisma.program.create({
    data: toProgramWriteData(parsed.data),
  });

  await prisma.auditLog.create({
    data: {
      actorId: session.user.id,
      action: AuditAction.CREATE,
      entityType: "Program",
      entityId: program.id,
      after: program,
    },
  });

  revalidatePath("/admin");
  revalidatePath("/admin/programs");
  redirect("/admin/programs?created=1");
}

export async function updateProgramAction(formData: FormData) {
  const session = await requireAdminSession();
  assertPermission(session.user.role, "manageContent");

  const parsed = programUpdateSchema.safeParse({
    id: formData.get("id"),
    ...getProgramPayload(formData),
  });

  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? "Invalid program data.";
    redirect(
      `/admin/programs/${formData.get("id")}/edit?error=${encodeURIComponent(message)}`
    );
  }

  const existing = await prisma.program.findUnique({
    where: { id: parsed.data.id },
  });

  if (!existing) {
    redirect("/admin/programs?error=not-found");
  }

  const department = await prisma.department.findUnique({
    where: { id: parsed.data.departmentId },
    select: { id: true },
  });

  if (!department) {
    redirect(
      `/admin/programs/${parsed.data.id}/edit?error=${encodeURIComponent("Selected department does not exist.")}`
    );
  }

  const slugOwner = await prisma.program.findUnique({
    where: { slug: parsed.data.slug },
    select: { id: true },
  });

  if (slugOwner && slugOwner.id !== parsed.data.id) {
    redirect(
      `/admin/programs/${parsed.data.id}/edit?error=${encodeURIComponent("This slug is already in use.")}`
    );
  }

  const program = await prisma.program.update({
    where: { id: parsed.data.id },
    data: toProgramWriteData(parsed.data, existing.publishedAt),
  });

  await prisma.auditLog.create({
    data: {
      actorId: session.user.id,
      action: AuditAction.UPDATE,
      entityType: "Program",
      entityId: program.id,
      before: existing,
      after: program,
    },
  });

  revalidatePath("/admin");
  revalidatePath("/admin/programs");
  revalidatePath(`/admin/programs/${program.id}/edit`);
  redirect("/admin/programs?updated=1");
}

export async function archiveProgramAction(formData: FormData) {
  const session = await requireAdminSession();
  assertPermission(session.user.role, "deleteContent");

  const id = String(formData.get("id") ?? "");

  if (!id) {
    redirect("/admin/programs?error=not-found");
  }

  const existing = await prisma.program.findUnique({
    where: { id },
  });

  if (!existing) {
    redirect("/admin/programs?error=not-found");
  }

  const program = await prisma.program.update({
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
      entityType: "Program",
      entityId: program.id,
      before: existing,
      after: program,
    },
  });

  revalidatePath("/admin");
  revalidatePath("/admin/programs");
  redirect("/admin/programs?archived=1");
}

function getProgramPayload(formData: FormData) {
  return {
    departmentId: formData.get("departmentId"),
    name: formData.get("name"),
    slug: formData.get("slug"),
    level: formData.get("level") || undefined,
    duration: formData.get("duration") || undefined,
    eligibility: formData.get("eligibility") || undefined,
    status: formData.get("status"),
    sortOrder: formData.get("sortOrder") || 0,
  };
}

function toProgramWriteData(
  data: {
    departmentId: string;
    name: string;
    slug: string;
    level?: string;
    duration?: string;
    eligibility?: string;
    status: ContentStatus;
    sortOrder: number;
  },
  existingPublishedAt?: Date | null
) {
  return {
    departmentId: data.departmentId,
    name: data.name,
    slug: data.slug,
    level: data.level || null,
    duration: data.duration || null,
    eligibility: data.eligibility || null,
    status: data.status,
    sortOrder: data.sortOrder,
    publishedAt:
      data.status === ContentStatus.PUBLISHED
        ? existingPublishedAt ?? new Date()
        : null,
  };
}
