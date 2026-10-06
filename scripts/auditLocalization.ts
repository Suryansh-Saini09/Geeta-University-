import { prisma } from "../src/server/db/client";
import { calculateTranslationCompleteness } from "../src/lib/i18n/localization";

async function auditLocalization() {
  console.log("=========================================");
  console.log("    LOCALIZATION ARCHITECTURE AUDIT     ");
  console.log("=========================================\n");

  // 1. Audit PageSections
  const pageSections = await prisma.pageSection.findMany();
  console.log(`[PageSection] Total rows: ${pageSections.length}`);
  let totalSections = pageSections.length;
  let hiTranslatedCount = 0;
  let frTranslatedCount = 0;

  for (const ps of pageSections) {
    const translations = (ps.translations as Record<string, any>) || {};
    const hiStatus = translations.hi?.status || "NOT_TRANSLATED";
    const frStatus = translations.fr?.status || "NOT_TRANSLATED";
    
    if (hiStatus === "PUBLISHED") hiTranslatedCount++;
    if (frStatus === "PUBLISHED") frTranslatedCount++;

    const hiCompleteness = calculateTranslationCompleteness(ps.body, translations.hi?.body);
    const frCompleteness = calculateTranslationCompleteness(ps.body, translations.fr?.body);

    console.log(
      ` - ${ps.pageSlug}/${ps.sectionKey} | EN ✓ | HI: ${hiStatus} (${hiCompleteness}%) | FR: ${frStatus} (${frCompleteness}%)`
    );
  }

  // 2. Audit Departments
  const departments = await prisma.department.findMany();
  console.log(`\n[Department] Total rows: ${departments.length}`);
  for (const dept of departments) {
    const translations = (dept.translations as Record<string, any>) || {};
    const hiStatus = translations.hi?.status || "NOT_TRANSLATED";
    const frStatus = translations.fr?.status || "NOT_TRANSLATED";

    console.log(` - ${dept.slug} | EN ✓ | HI: ${hiStatus} | FR: ${frStatus}`);
  }

  // 3. Audit Programs
  const programCount = await prisma.program.count();
  console.log(`\n[Program] Total DB rows: ${programCount}`);

  // 4. Audit SiteSettings
  const siteSettings = await prisma.siteSetting.findMany();
  console.log(`\n[SiteSetting] Total rows: ${siteSettings.length}`);

  // Summary Metrics
  console.log("\n=========================================");
  console.log("    LOCALIZATION COVERAGE SUMMARY       ");
  console.log("=========================================");
  console.log(`English Coverage: 100% (Canonical Source)`);
  console.log(`Hindi Coverage:   ${Math.round((hiTranslatedCount / totalSections) * 100)}%`);
  console.log(`French Coverage:  ${Math.round((frTranslatedCount / totalSections) * 100)}%`);
  console.log("=========================================\n");
}

auditLocalization()
  .catch((err) => {
    console.error("Audit failed:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
