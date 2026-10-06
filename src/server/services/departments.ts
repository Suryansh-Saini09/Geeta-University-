import { prisma } from "@/server/db/client";
import { ContentStatus, type Prisma } from "@prisma/client";
import { getLocalizedBody, getLocalizedField, DEFAULT_LOCALE } from "@/lib/i18n/localization";

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
      { name: { contains: query } },
      { shortName: { contains: query } },
      { slug: { contains: query } },
      { summary: { contains: query } },
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


export async function getDepartmentBySlug(slug: string, locale: string = DEFAULT_LOCALE) {
  const dept = await prisma.department.findUnique({
    where: { slug },
    include: {
      heroImage: true,
      seo: true,
    },
  });

  if (!dept) return null;

  return {
    ...dept,
    name: getLocalizedField(dept, "name", locale),
    summary: getLocalizedField(dept, "summary", locale),
    body: getLocalizedBody(dept.body, (dept as any).translations, locale),
    seo: dept.seo
      ? {
          ...dept.seo,
          title: getLocalizedField(dept.seo, "title", locale),
          description: getLocalizedField(dept.seo, "description", locale),
        }
      : null,
  };
}

export async function getAdminDepartmentById(id: string) {
  return prisma.department.findUnique({
    where: { id },
    include: {
      heroImage: true,
      seo: true,
    },
  });
}
