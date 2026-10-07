import { ContentStatus, type Prisma } from "@prisma/client";

import { prisma } from "@/server/db/client";

export interface AdminProgramFilters {
  query?: string;
  status?: ContentStatus | "ALL";
  departmentId?: string | "ALL";
  page?: number;
  pageSize?: number;
}

export async function getAdminPrograms(filters: AdminProgramFilters = {}) {
  const where: Prisma.ProgramWhereInput = {};
  const query = filters.query?.trim();
  const page = Math.max(filters.page ?? 1, 1);
  const pageSize = Math.min(Math.max(filters.pageSize ?? 10, 1), 50);
  const skip = (page - 1) * pageSize;

  if (query) {
    where.OR = [
      { name: { contains: query } },
      { slug: { contains: query } },
      { level: { contains: query } },
      { duration: { contains: query } },
      { eligibility: { contains: query } },
      { department: { name: { contains: query } } },
    ];
  }

  if (filters.status && filters.status !== "ALL") {
    where.status = filters.status;
  }

  if (filters.departmentId && filters.departmentId !== "ALL") {
    where.departmentId = filters.departmentId;
  }

  const [programs, totalCount] = await Promise.all([
    prisma.program.findMany({
      where,
      skip,
      take: pageSize,
      orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
      include: {
        department: {
          select: {
            id: true,
            name: true,
            shortName: true,
          },
        },
        _count: {
          select: {
            faculty: true,
            aliases: true,
          },
        },
      },
    }),
    prisma.program.count({ where }),
  ]);

  return {
    programs,
    totalCount,
    page,
    pageSize,
    totalPages: Math.max(Math.ceil(totalCount / pageSize), 1),
  };
}

export async function getAdminProgramById(id: string) {
  return prisma.program.findUnique({
    where: { id },
    include: {
      department: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
}

export async function getProgramDepartmentOptions() {
  return prisma.department.findMany({
    where: {
      status: {
        not: ContentStatus.ARCHIVED,
      },
    },
    orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
    select: {
      id: true,
      name: true,
      shortName: true,
    },
  });
}
