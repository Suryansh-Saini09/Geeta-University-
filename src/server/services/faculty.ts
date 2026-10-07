import { ContentStatus, type Prisma } from "@prisma/client";

import { prisma } from "@/server/db/client";

export async function getAdminFaculty(filters: { query?: string; status?: ContentStatus | "ALL"; departmentId?: string; page?: number } = {}) {
  const where: Prisma.FacultyMemberWhereInput = {};
  const query = filters.query?.trim();
  if (query) where.OR = [{ name: { contains: query } }, { slug: { contains: query } }, { designation: { contains: query } }, { department: { name: { contains: query } } }];
  if (filters.status && filters.status !== "ALL") where.status = filters.status;
  if (filters.departmentId) where.departmentId = filters.departmentId;
  const page = Math.max(1, filters.page ?? 1);
  const pageSize = 10;
  const [faculty, totalCount] = await Promise.all([
    prisma.facultyMember.findMany({ where, include: { department: { select: { name: true } }, programs: { include: { program: { select: { id: true, name: true } } } } }, orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }], skip: (page - 1) * pageSize, take: pageSize }),
    prisma.facultyMember.count({ where }),
  ]);
  return { faculty, totalCount, page, totalPages: Math.max(1, Math.ceil(totalCount / pageSize)) };
}

export function getAdminFacultyById(id: string) {
  return prisma.facultyMember.findUnique({ where: { id }, include: { programs: { select: { programId: true } } } });
}

export async function getFacultyOptions() {
  const [departments, programs] = await Promise.all([
    prisma.department.findMany({ where: { status: { not: ContentStatus.ARCHIVED } }, select: { id: true, name: true }, orderBy: { name: "asc" } }),
    prisma.program.findMany({ where: { status: { not: ContentStatus.ARCHIVED } }, select: { id: true, name: true, departmentId: true }, orderBy: { name: "asc" } }),
  ]);
  return { departments, programs };
}
