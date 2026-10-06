import { prisma } from "../src/server/db/client";

function parseDatabaseUrl(url: string | undefined) {
  if (!url) return null;
  try {
    // Basic regex or URL parsing to safely extract host, port, dbname, ssl without exposing credentials
    const matches = url.match(/mysql:\/\/[^:]+:([^@]+)@([^:/]+)(?::(\d+))?\/([^?]+)(?:\?(.*))?/);
    if (matches) {
      const host = matches[2];
      const port = matches[3] || "3306";
      const database = matches[4];
      const params = matches[5] || "";
      const ssl = params.includes("ssl-mode=") || params.includes("sslmode=");
      return { host, port, database, ssl: ssl ? "enabled" : "disabled" };
    }
    // Fallback standard URL parser
    const parsed = new URL(url);
    const ssl = parsed.search.includes("ssl-mode=") || parsed.search.includes("sslmode=");
    return {
      host: parsed.hostname,
      port: parsed.port || "3306",
      database: parsed.pathname.replace(/^\//, ""),
      ssl: ssl ? "enabled" : "disabled",
    };
  } catch (err) {
    return { host: "unknown", port: "unknown", database: "unknown", ssl: "unknown" };
  }
}

async function inspectDatabaseTarget() {
  console.log("=================================================");
  console.log("    DATABASE TARGET DIAGNOSTIC (SAFE OUTPUT)");
  console.log("=================================================\n");

  const env = process.env.NODE_ENV || "development";
  const rawUrl = process.env.DATABASE_URL;
  const parsed = parseDatabaseUrl(rawUrl);

  console.log(`Environment:      ${env}`);
  if (parsed) {
    console.log(`Database Host:    ${parsed.host}`);
    console.log(`Database Port:    ${parsed.port}`);
    console.log(`Database Name:    ${parsed.database}`);
    console.log(`SSL Mode:         ${parsed.ssl}`);
  } else {
    console.log("DATABASE_URL:     [NOT SET]");
  }

  console.log("\nAttempting connection test via Prisma Client...");

  try {
    await prisma.$connect();
    console.log("Connection Status: SUCCESS\n");

    console.log("--- MODEL RECORD COUNTS ---");
    const counts = await Promise.all([
      prisma.page.count().then((c) => ["Page", c]),
      prisma.pageSection.count().then((c) => ["PageSection", c]),
      prisma.siteSetting.count().then((c) => ["SiteSetting", c]),
      prisma.department.count().then((c) => ["Department", c]),
      prisma.program.count().then((c) => ["Program", c]),
      prisma.awardRanking.count().then((c) => ["AwardRanking", c]),
      prisma.governanceDocument.count().then((c) => ["GovernanceDocument", c]),
      prisma.leadershipMember.count().then((c) => ["LeadershipMember", c]),
      prisma.industryPartner.count().then((c) => ["IndustryPartner", c]),
      prisma.recruiter.count().then((c) => ["Recruiter", c]),
      prisma.recognition.count().then((c) => ["Recognition", c]),
      prisma.starPerformance.count().then((c) => ["StarPerformance", c]),
      prisma.testimonial.count().then((c) => ["Testimonial", c]),
      prisma.mediaAsset.count().then((c) => ["MediaAsset", c]),
      prisma.seoMetadata.count().then((c) => ["SeoMetadata", c]),
      prisma.facultyMember.count().then((c) => ["FacultyMember", c]),
    ]);

    counts.forEach(([model, count]) => {
      console.log(`  - ${String(model).padEnd(20)} : ${count} records`);
    });

    console.log("\n=================================================");
    console.log("  DATABASE TARGET DIAGNOSTIC COMPLETED");
    console.log("=================================================");
  } catch (err: any) {
    console.error("\nConnection Status: FAILED");
    console.error("Error details:", err.message || err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

inspectDatabaseTarget();
