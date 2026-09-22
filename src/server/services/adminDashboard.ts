import { prisma } from "@/server/db/client";

export async function getAdminDashboardStats() {
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
}
