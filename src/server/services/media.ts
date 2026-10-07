import { type Prisma } from "@prisma/client";

import { prisma } from "@/server/db/client";

export async function getAdminMedia(filters: { query?: string; kind?: "ALL" | "IMAGE" | "PDF"; page?: number } = {}) {
  const where: Prisma.MediaAssetWhereInput = {};
  const query = filters.query?.trim();
  if (query) where.OR = [{ fileName: { contains: query } }, { altText: { contains: query } }, { caption: { contains: query } }];
  if (filters.kind === "IMAGE") where.mimeType = { startsWith: "image/" };
  if (filters.kind === "PDF") where.mimeType = "application/pdf";
  const page = Math.max(1, filters.page ?? 1);
  const pageSize = 20;
  const [assets, totalCount] = await Promise.all([
    prisma.mediaAsset.findMany({ where, orderBy: { createdAt: "desc" }, skip: (page - 1) * pageSize, take: pageSize, include: { createdBy: { select: { name: true } }, _count: { select: { galleryImages: true, departmentsAsHero: true, programsAsHero: true, facultyPortraits: true, heroBanners: true, downloads: true } } } }),
    prisma.mediaAsset.count({ where }),
  ]);
  return { assets, totalCount, page, totalPages: Math.max(1, Math.ceil(totalCount / pageSize)) };
}

export function getAdminMediaById(id: string) {
  return prisma.mediaAsset.findUnique({ where: { id } });
}
