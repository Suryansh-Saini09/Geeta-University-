import { PrismaClient } from "@prisma/client";

async function testConnection(url: string, name: string) {
  console.log(`\n=== Testing Native PrismaClient with ${name} ===`);
  console.log("URL:", url.replace(/:[^:@]+@/, ":***@"));

  const client = new PrismaClient({
    datasources: {
      db: { url },
    },
    log: ["error"],
  });

  const start = Date.now();
  try {
    const results = await Promise.all([
      client.page.count(),
      client.pageSection.count(),
      client.siteSetting.count(),
      client.department.count(),
      client.program.count(),
      client.awardRanking.count(),
      client.governanceDocument.count(),
      client.leadershipMember.count(),
      client.industryPartner.count(),
      client.recruiter.count(),
      client.recognition.count(),
      client.starPerformance.count(),
      client.testimonial.count(),
      client.mediaAsset.count(),
      client.seoMetadata.count(),
      client.facultyMember.count(),
    ]);

    console.log(`✅ Success for ${name} in ${Date.now() - start}ms!`);
    console.log("Sample counts:", {
      Page: results[0],
      PageSection: results[1],
      SiteSetting: results[2],
      Department: results[3],
      Program: results[4],
      Recruiter: results[9],
      Testimonial: results[12],
    });
  } catch (err: any) {
    console.error(`❌ Connection error for ${name}:`, err.message);
  } finally {
    await client.$disconnect();
  }
}

async function main() {
  const localUrl = "mysql://geeta_cms:geeta_cms_password@localhost:3306/geeta_university";
  const aivenUrl = process.env.DATABASE_URL!;

  await testConnection(localUrl, "LOCAL DOCKER MYSQL");
  await testConnection(aivenUrl, "AIVEN PRODUCTION MYSQL");
}

main().catch(console.error);
