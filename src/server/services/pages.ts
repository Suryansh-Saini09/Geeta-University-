import { ContentStatus, type Prisma } from "@prisma/client";

import { prisma } from "@/server/db/client";

export async function getAdminPages(filters: { query?: string; status?: ContentStatus | "ALL"; page?: number } = {}) {
  const where: Prisma.PageWhereInput = {};
  const query = filters.query?.trim();
  if (query) where.OR = [{ title: { contains: query } }, { slug: { contains: query } }];
  if (filters.status && filters.status !== "ALL") where.status = filters.status;

  const page = Math.max(1, filters.page ?? 1);
  const pageSize = 10;
  const [pages, totalCount] = await Promise.all([
    prisma.page.findMany({ where, include: { updatedBy: { select: { name: true } }, _count: { select: { revisions: true } } }, orderBy: { updatedAt: "desc" }, skip: (page - 1) * pageSize, take: pageSize }),
    prisma.page.count({ where }),
  ]);
  return { pages, totalCount, page, totalPages: Math.max(1, Math.ceil(totalCount / pageSize)) };
}

export function getAdminPageById(id: string) {
  return prisma.page.findUnique({
    where: { id },
    include: {
      seo: true,
      revisions: { orderBy: { createdAt: "desc" }, take: 10, include: { createdBy: { select: { name: true } } } },
    },
  });
}

export function getPublishedPageBySlug(slug: string) {
  return prisma.page.findFirst({
    where: { slug, status: ContentStatus.PUBLISHED, publishedAt: { not: null } },
    include: { seo: true },
  });
}
