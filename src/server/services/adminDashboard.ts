import { prisma } from "@/server/db/client";

async function queryStatsBatch() {
  return prisma.$transaction([
    prisma.page.count(),
    prisma.department.count(),
    prisma.program.count(),
    prisma.facultyMember.count(),
    prisma.notice.count(),
    prisma.newsArticle.count(),
    prisma.event.count(),
    prisma.galleryAlbum.count(),
    prisma.contactSubmission.count(),
    prisma.mediaAsset.count(),
    prisma.adminUser.count(),
  ]);
}

export async function getAdminDashboardStats() {
  try {
    let results;
    try {
      results = await queryStatsBatch();
    } catch (firstError) {
      console.warn("First attempt to query admin dashboard stats failed, retrying...", firstError);
      // Wait briefly before retrying in case of a transient connection drop
      await new Promise((resolve) => setTimeout(resolve, 500));
      results = await queryStatsBatch();
    }

    const [
      pages,
      departments,
      programs,
      faculty,
      notices,
      news,
      events,
      galleryAlbums,
      submissions,
      mediaAssets,
      adminUsers,
    ] = results;

    return {
      pages,
      departments,
      programs,
      faculty,
      notices,
      news,
      events,
      galleryAlbums,
      submissions,
      mediaAssets,
      adminUsers,
    };
  } catch (error) {
    console.error("Failed to query admin dashboard stats:", error);
    return {
      pages: 0,
      departments: 0,
      programs: 0,
      faculty: 0,
      notices: 0,
      news: 0,
      events: 0,
      galleryAlbums: 0,
      submissions: 0,
      mediaAssets: 0,
      adminUsers: 0,
    };
  }
}

