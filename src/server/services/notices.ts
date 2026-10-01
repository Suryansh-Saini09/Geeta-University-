import { ContentStatus, type Prisma } from "@prisma/client";

import { prisma } from "@/server/db/client";

export async function getAdminNotices(filters: { query?: string; status?: ContentStatus | "ALL"; page?: number } = {}) {
  const where: Prisma.NoticeWhereInput = {};
  const query = filters.query?.trim();

  if (query) {
    where.OR = [
      { title: { contains: query } },
      { slug: { contains: query } },
      { summary: { contains: query } },
    ];
  }
  if (filters.status && filters.status !== "ALL") where.status = filters.status;

  const page = Math.max(1, filters.page ?? 1);
  const pageSize = 10;
  const [notices, totalCount] = await Promise.all([
    prisma.notice.findMany({
      where,
      orderBy: [{ updatedAt: "desc" }],
      skip: (page - 1) * pageSize,
      take: pageSize,
    }),
    prisma.notice.count({ where }),
  ]);

  return { notices, totalCount, page, totalPages: Math.max(1, Math.ceil(totalCount / pageSize)) };
}

export function getAdminNoticeById(id: string) {
  return prisma.notice.findUnique({ where: { id } });
}
