import { ContentStatus, type Prisma } from "@prisma/client";

import { prisma } from "@/server/db/client";

export interface AdminDepartmentFilters {
  query?: string;
  status?: ContentStatus | "ALL";
  page?: number;
  pageSize?: number;
}

export async function getAdminDepartments(filters: AdminDepartmentFilters = {}) {
  const where: Prisma.DepartmentWhereInput = {};
  const query = filters.query?.trim();
  const page = Math.max(filters.page ?? 1, 1);
  const pageSize = Math.min(Math.max(filters.pageSize ?? 10, 1), 50);
  const skip = (page - 1) * pageSize;

  if (query) {
    where.OR = [
      { name: { contains: query, mode: "insensitive" } },
      { shortName: { contains: query, mode: "insensitive" } },
      { slug: { contains: query, mode: "insensitive" } },
      { summary: { contains: query, mode: "insensitive" } },
    ];
  }

  if (filters.status && filters.status !== "ALL") {
    where.status = filters.status;
  }

  const [departments, totalCount] = await Promise.all([
    prisma.department.findMany({
      where,
      skip,
      take: pageSize,
      orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
      include: {
        _count: {
          select: {
            programs: true,
            faculty: true,
          },
        },
      },
    }),
    prisma.department.count({ where }),
  ]);

  return {
    departments,
    totalCount,
    page,
    pageSize,
    totalPages: Math.max(Math.ceil(totalCount / pageSize), 1),
  };
}

export async function getDepartmentBySlug(slug: string) {
  return prisma.department.findUnique({
    where: { slug },
  });
}

export async function getAdminDepartmentById(id: string) {
  return prisma.department.findUnique({
    where: { id },
  });
}
