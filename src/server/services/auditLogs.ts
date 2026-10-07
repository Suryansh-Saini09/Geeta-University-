import { AuditAction, type Prisma } from "@prisma/client";

import { prisma } from "@/server/db/client";

export async function getAuditLogs(filters: { action?: AuditAction | "ALL"; entityType?: string; page?: number } = {}) {
  const where: Prisma.AuditLogWhereInput = {};
  if (filters.action && filters.action !== "ALL") where.action = filters.action;
  if (filters.entityType) where.entityType = filters.entityType;
  const page = Math.max(1, filters.page ?? 1);
  const pageSize = 25;
  const [logs, totalCount] = await Promise.all([
    prisma.auditLog.findMany({ where, include: { actor: { select: { name: true, email: true } } }, orderBy: { createdAt: "desc" }, skip: (page - 1) * pageSize, take: pageSize }),
    prisma.auditLog.count({ where }),
  ]);
  return { logs, totalCount, page, totalPages: Math.max(1, Math.ceil(totalCount / pageSize)) };
}

export async function recordAuditLog(data: {
  actorId: string;
  action: AuditAction | string;
  entityType: string;
  entityId: string;
  before?: any;
  after?: any;
}) {
  return prisma.auditLog.create({
    data: {
      actorId: data.actorId,
      action: data.action as AuditAction,
      entityType: data.entityType,
      entityId: data.entityId,
      before: data.before ?? undefined,
      after: data.after ?? undefined,
    },
  });
}

