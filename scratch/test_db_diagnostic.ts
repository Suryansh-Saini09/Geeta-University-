import { prisma } from "../src/server/db/client";
import { PrismaClient } from "@prisma/client";

async function main() {
  console.log("=== DB DIAGNOSTIC TEST ===");
  console.log("DATABASE_URL:", process.env.DATABASE_URL?.replace(/:[^:@]+@/, ":***@"));

  console.log("\n--- Testing src/server/db/client.ts (shared singleton) ---");
  const start = Date.now();
  try {
    const results = await Promise.all([
      prisma.page.count(),
      prisma.pageSection.count(),
      prisma.siteSetting.count(),
      prisma.department.count(),
      prisma.program.count(),
      prisma.awardRanking.count(),
      prisma.governanceDocument.count(),
      prisma.leadershipMember.count(),
      prisma.industryPartner.count(),
      prisma.recruiter.count(),
      prisma.recognition.count(),
      prisma.starPerformance.count(),
      prisma.testimonial.count(),
      prisma.mediaAsset.count(),
      prisma.seoMetadata.count(),
      prisma.facultyMember.count(),
    ]);
    console.log("Concurrent query results (counts):", {
      Page: results[0],
      PageSection: results[1],
      SiteSetting: results[2],
      Department: results[3],
      Program: results[4],
      AwardRanking: results[5],
      GovernanceDocument: results[6],
      LeadershipMember: results[7],
      IndustryPartner: results[8],
      Recruiter: results[9],
      Recognition: results[10],
      StarPerformance: results[11],
      Testimonial: results[12],
      MediaAsset: results[13],
      SeoMetadata: results[14],
      FacultyMember: results[15],
    });
    console.log(`Success in ${Date.now() - start}ms`);
  } catch (err: any) {
    console.error("Error in shared client queries:", err.message);
  }

  console.log("\n--- Testing standard PrismaClient without adapter ---");
  const nativePrisma = new PrismaClient({ log: ["error"] });
  const startNative = Date.now();
  try {
    const nativeResults = await Promise.all([
      nativePrisma.page.count(),
      nativePrisma.pageSection.count(),
      nativePrisma.siteSetting.count(),
      nativePrisma.department.count(),
      nativePrisma.program.count(),
      nativePrisma.awardRanking.count(),
      nativePrisma.governanceDocument.count(),
      nativePrisma.leadershipMember.count(),
      nativePrisma.industryPartner.count(),
      nativePrisma.recruiter.count(),
      nativePrisma.recognition.count(),
      nativePrisma.starPerformance.count(),
      nativePrisma.testimonial.count(),
      nativePrisma.mediaAsset.count(),
      nativePrisma.seoMetadata.count(),
      nativePrisma.facultyMember.count(),
    ]);
    console.log("Native Prisma query results (counts):", nativeResults.length, "queries passed");
    console.log(`Native Prisma success in ${Date.now() - startNative}ms`);
  } catch (err: any) {
    console.error("Error in native Prisma queries:", err.message);
  } finally {
    await nativePrisma.$disconnect();
  }
}

main().catch(console.error);
