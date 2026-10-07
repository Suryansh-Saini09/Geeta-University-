import { ContentStatus, type Prisma } from "@prisma/client";

import { prisma } from "@/server/db/client";

export async function getAdminNews(filters: { query?: string; status?: ContentStatus | "ALL"; page?: number } = {}) {
  const where: Prisma.NewsArticleWhereInput = {};
  const query = filters.query?.trim();
  if (query) {
    where.OR = [
      { title: { contains: query } },
      { slug: { contains: query } },
      { excerpt: { contains: query } },
    ];
  }
  if (filters.status && filters.status !== "ALL") where.status = filters.status;

  const page = Math.max(1, filters.page ?? 1);
  const pageSize = 10;
  const [articles, totalCount] = await Promise.all([
    prisma.newsArticle.findMany({
      where,
      orderBy: { updatedAt: "desc" },
      skip: (page - 1) * pageSize,
      take: pageSize,
    }),
    prisma.newsArticle.count({ where }),
  ]);
  return { articles, totalCount, page, totalPages: Math.max(1, Math.ceil(totalCount / pageSize)) };
}

export function getAdminNewsById(id: string) {
  return prisma.newsArticle.findUnique({ where: { id }, include: { seo: true } });
}

export function getPublishedNews(page = 1) {
  const safePage = Math.max(1, page);
  const pageSize = 12;
  const where: Prisma.NewsArticleWhereInput = {
    status: ContentStatus.PUBLISHED,
    publishedAt: { not: null, lte: new Date() },
  };
  return Promise.all([
    prisma.newsArticle.findMany({ where, orderBy: { publishedAt: "desc" }, skip: (safePage - 1) * pageSize, take: pageSize }),
    prisma.newsArticle.count({ where }),
  ]).then(([articles, totalCount]) => ({ articles, totalCount, page: safePage, totalPages: Math.max(1, Math.ceil(totalCount / pageSize)) }));
}

export function getPublishedNewsBySlug(slug: string) {
  return prisma.newsArticle.findFirst({
    where: { slug, status: ContentStatus.PUBLISHED, publishedAt: { not: null, lte: new Date() } },
    include: { seo: true },
  });
}
