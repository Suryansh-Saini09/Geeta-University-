import { PrismaClient } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";

const prisma = new PrismaClient();

const EXPECTED_HOME_SECTIONS = [
  "hero",
  "smartCampus",
  "stats",
  "globalEducation",
  "universe",
  "updates",
  "whyJoinGeeta",
  "scholarships",
  "virtualTour",
  "starPerformancesCta",
];

const EXPECTED_ABOUT_SECTIONS = [
  "hero",
  "visionMission",
  "impactRankings",
  "legacy",
  "legacyEcosystem",
];

interface SectionRecord {
  sectionKey: string;
  body?: any;
}

async function main() {
  console.log("==================================================");
  console.log("HOME & ABOUT CMS AUDIT REPORT");
  console.log("==================================================\n");

  const p = prisma as any;

  // 1. PAGE RECORD & SECTION QUERY
  const [homeSections, aboutSections, homePage, aboutPage] = await Promise.all([
    p.pageSection.findMany({ where: { pageSlug: "home" } }),
    p.pageSection.findMany({ where: { pageSlug: "about" } }),
    prisma.page.findUnique({ where: { slug: "home" }, include: { seo: true } }),
    prisma.page.findUnique({ where: { slug: "about" }, include: { seo: true } }),
  ]);

  console.log("--- 1. PAGE & PAGESECTION RECORD AUDIT ---");
  console.log(`Page: "home" status: ${homePage ? homePage.status : "MISSING"} (SEO ID: ${homePage?.seoId || "NONE"})`);
  console.log(`Page: "about" status: ${aboutPage ? aboutPage.status : "MISSING"} (SEO ID: ${aboutPage?.seoId || "NONE"})`);

  console.log("\nHOME PageSection Records:");
  const homeKeys = new Set((homeSections as SectionRecord[]).map((s) => s.sectionKey));
  for (const key of EXPECTED_HOME_SECTIONS) {
    const exists = homeKeys.has(key);
    const sec = (homeSections as SectionRecord[]).find((s) => s.sectionKey === key);
    const bodyKeys = sec?.body ? Object.keys(sec.body as object).length : 0;
    console.log(`  - ${key.padEnd(20)} : ${exists ? `[OK] (${bodyKeys} body keys)` : "[MISSING]"}`);
  }

  console.log("\nABOUT PageSection Records:");
  const aboutKeys = new Set((aboutSections as SectionRecord[]).map((s) => s.sectionKey));
  for (const key of EXPECTED_ABOUT_SECTIONS) {
    const exists = aboutKeys.has(key);
    const sec = (aboutSections as SectionRecord[]).find((s) => s.sectionKey === key);
    const bodyKeys = sec?.body ? Object.keys(sec.body as object).length : 0;
    console.log(`  - ${key.padEnd(20)} : ${exists ? `[OK] (${bodyKeys} body keys)` : "[MISSING]"}`);
  }

  // 2. CANONICAL RELATIONAL ENTITIES
  const [
    recruiterCount,
    awardCount,
    testimonialCount,
    leaderCount,
    partnerCount,
    starCount,
    recognitionCount,
    govDocCount,
  ] = await Promise.all([
    p.recruiter.count(),
    p.awardRanking.count(),
    p.testimonial.count(),
    p.leadershipMember.count(),
    p.industryPartner.count(),
    p.starPerformance.count(),
    p.recognition.count(),
    p.governanceDocument.count(),
  ]);

  console.log("\n--- 2. CANONICAL RELATIONAL ENTITIES AUDIT ---");
  console.log(`  - Recruiters          : ${recruiterCount} records`);
  console.log(`  - Awards & Rankings   : ${awardCount} records (shared Home & About)`);
  console.log(`  - Testimonials        : ${testimonialCount} records`);
  console.log(`  - Leadership Members  : ${leaderCount} records`);
  console.log(`  - Industry Partners   : ${partnerCount} records`);
  console.log(`  - Star Performers     : ${starCount} records`);
  console.log(`  - Recognitions        : ${recognitionCount} records`);
  console.log(`  - Governance & Policy : ${govDocCount} records`);

  // 3. CODEBASE IMPORT SCAN (STATIC BYPASS DETECTION)
  console.log("\n--- 3. COMPONENT DATA SOURCE AUDIT ---");
  const componentDirs = [
    path.join(process.cwd(), "src/components/home"),
    path.join(process.cwd(), "src/components/about"),
  ];

  let totalBypasses = 0;
  for (const dir of componentDirs) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (!file.endsWith(".tsx") && !file.endsWith(".ts")) continue;
      const filePath = path.join(dir, file);
      const content = fs.readFileSync(filePath, "utf-8");
      
      const hasStaticImport = /import\s+.*from\s+["']@\/data\//.test(content);
      const acceptsDataProp = /data[?:]/.test(content);

      if (hasStaticImport) {
        console.log(`  - [STATIC BYPASS WARNING] ${file} still imports static @/data/*`);
        totalBypasses++;
      } else {
        console.log(`  - [OK DB-DRIVEN] ${file} (data prop: ${acceptsDataProp ? "YES" : "NO"})`);
      }
    }
  }

  console.log("\n==================================================");
  console.log(`AUDIT SUMMARY: ${totalBypasses === 0 ? "PASSED - ALL HOME/ABOUT COMPONENTS ARE DB-DRIVEN" : `WARNING - ${totalBypasses} static bypasses detected`}`);
  console.log("==================================================");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
