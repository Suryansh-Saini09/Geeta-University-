import { ContentStatus, type Prisma } from "@prisma/client";

import { prisma } from "@/server/db/client";

export async function getAdminAlbums(filters: { query?: string; status?: ContentStatus | "ALL"; page?: number } = {}) {
  const where: Prisma.GalleryAlbumWhereInput = {};
  const query = filters.query?.trim();
  if (query) where.OR = [{ title: { contains: query } }, { slug: { contains: query } }];
  if (filters.status && filters.status !== "ALL") where.status = filters.status;
  const page = Math.max(1, filters.page ?? 1);
  const pageSize = 10;
  const [albums, totalCount] = await Promise.all([
    prisma.galleryAlbum.findMany({ where, include: { _count: { select: { images: true } }, images: { take: 1, orderBy: { sortOrder: "asc" }, include: { media: { select: { url: true, altText: true } } } } }, orderBy: [{ sortOrder: "asc" }, { updatedAt: "desc" }], skip: (page - 1) * pageSize, take: pageSize }),
    prisma.galleryAlbum.count({ where }),
  ]);
  return { albums, totalCount, page, totalPages: Math.max(1, Math.ceil(totalCount / pageSize)) };
}

export function getAdminAlbumById(id: string) {
  return prisma.galleryAlbum.findUnique({ where: { id }, include: { images: { orderBy: { sortOrder: "asc" }, select: { mediaId: true } } } });
}

export async function getGalleryMediaOptions(selectedIds: string[] = []) {
  const select = { id: true, fileName: true, url: true, altText: true } as const;
  const [recent, selected] = await Promise.all([
    prisma.mediaAsset.findMany({ where: { mimeType: { startsWith: "image/" } }, select, orderBy: { createdAt: "desc" }, take: 200 }),
    selectedIds.length ? prisma.mediaAsset.findMany({ where: { id: { in: selectedIds } }, select }) : Promise.resolve([]),
  ]);
  return [...new Map([...recent, ...selected].map((asset) => [asset.id, asset])).values()];
}

export function getPublishedAlbums() {
  return prisma.galleryAlbum.findMany({ where: { status: ContentStatus.PUBLISHED, publishedAt: { not: null, lte: new Date() } }, include: { _count: { select: { images: true } }, images: { take: 1, orderBy: { sortOrder: "asc" }, include: { media: { select: { url: true, altText: true } } } } }, orderBy: [{ sortOrder: "asc" }, { publishedAt: "desc" }] });
}

export function getPublishedAlbumBySlug(slug: string) {
  return prisma.galleryAlbum.findFirst({ where: { slug, status: ContentStatus.PUBLISHED, publishedAt: { not: null, lte: new Date() } }, include: { images: { orderBy: { sortOrder: "asc" }, include: { media: { select: { url: true, altText: true, caption: true } } } } } });
}
