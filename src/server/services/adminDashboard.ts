import { prisma } from "@/server/db/client";

export async function getAdminDashboardStats() {
  try {
    const [
      pages,
      departments,
      programs,
      submissions,
      mediaAssets,
      adminUsers,
    ] = await Promise.all([
      prisma.page.count(),
      prisma.department.count(),
      prisma.program.count(),
      prisma.contactSubmission.count(),
      prisma.mediaAsset.count(),
      prisma.adminUser.count(),
    ]);

    return {
      pages,
      departments,
      programs,
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
      submissions: 0,
      mediaAssets: 0,
      adminUsers: 0,
    };
  }
}
