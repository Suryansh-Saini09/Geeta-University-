import { AdminRole, AdminUserStatus, type Prisma } from "@prisma/client";

import { prisma } from "@/server/db/client";

export async function getAdminUsers(filters: { query?: string; role?: AdminRole | "ALL"; status?: AdminUserStatus | "ALL"; page?: number } = {}) {
  const where: Prisma.AdminUserWhereInput = {};
  const query = filters.query?.trim();
  if (query) where.OR = [{ name: { contains: query } }, { email: { contains: query } }];
  if (filters.role && filters.role !== "ALL") where.role = filters.role;
  if (filters.status && filters.status !== "ALL") where.status = filters.status;
  const page = Math.max(1, filters.page ?? 1);
  const pageSize = 20;
  const [users, totalCount] = await Promise.all([
    prisma.adminUser.findMany({ where, select: { id: true, name: true, email: true, role: true, status: true, lastLoginAt: true, createdAt: true, updatedAt: true }, orderBy: { createdAt: "desc" }, skip: (page - 1) * pageSize, take: pageSize }),
    prisma.adminUser.count({ where }),
  ]);
  return { users, totalCount, page, totalPages: Math.max(1, Math.ceil(totalCount / pageSize)) };
}

export function getAdminUserById(id: string) {
  return prisma.adminUser.findUnique({ where: { id }, select: { id: true, name: true, email: true, role: true, status: true, lastLoginAt: true, createdAt: true } });
}
