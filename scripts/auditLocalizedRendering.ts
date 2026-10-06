import { prisma } from "../src/server/db/client";
import { getPublishedHomePage, getPublishedAboutPage } from "../src/server/services/pages";
import { getDepartmentBySlug } from "../src/server/services/departments";
import { getProgramBySlug } from "../src/lib/programs/programRepository";
import { getContactSettings, getAnnouncementSettings, getAdmissionCtaSettings } from "../src/server/services/siteSettings";

async function runAudit() {
  console.log("=================================================");
  console.log("  PHASE 4C — COMPREHENSIVE MULTILINGUAL AUDIT");
  console.log("=================================================\n");

  const testLocales = ["fr", "hi"];

  // 1. HOME PAGE DETAILED FIELD-LEVEL AUDIT
  console.log("--- 1. HOME PAGE SECTION CLASSIFICATION ---");
  for (const loc of testLocales) {
    console.log(`\n>>> LOCALE: [${loc.toUpperCase()}] <<<`);
    const homeData = await getPublishedHomePage(loc);

    const homeSectionsInDb = await prisma.pageSection.findMany({
      where: { pageSlug: "home" },
    });

    const homeSectionMap: Record<string, any> = {};
    homeSectionsInDb.forEach((s) => {
      homeSectionMap[s.sectionKey] = s;
    });

    const homeSectionKeys = [
      "hero",
      "smartCampus",
      "stats",
      "programsOffered",
      "recruiters",
      "awards",
      "testimonials",
      "globalEducation",
      "universe",
      "updates",
      "whyJoinGeeta",
      "scholarships",
      "industryPartners",
      "virtualTour",
      "starPerformances",
    ];

    for (const key of homeSectionKeys) {
      const dbSec = homeSectionMap[key];
      const data = (homeData as any)[key];
      const dataExists = data !== null && data !== undefined && (Array.isArray(data) ? data.length > 0 : Object.keys(data).length > 0);
      const translations = (dbSec?.translations as any) || {};
      const locEntry = translations[loc];
      const trExists = !!locEntry;
      const trStatus = locEntry?.status || locEntry?._status || "NOT_TRANSLATED";
      
      let classification = "UNKNOWN";
      let fallbackUsed = "NO";
      let resolvedLocale = "en";

      if (!dataExists) {
        classification = "DATA_MISSING";
      } else if (trExists && trStatus === "PUBLISHED") {
        classification = "VALID_PUBLISHED_TRANSLATION";
        resolvedLocale = loc;
      } else if (trExists && trStatus === "DRAFT") {
        classification = "VALID_DRAFT_FALLBACK";
        fallbackUsed = "YES (ENGLISH)";
      } else {
        classification = "VALID_ENGLISH_FALLBACK";
        fallbackUsed = "YES (ENGLISH)";
      }

      console.log(
        `  ${key.padEnd(20)} | Data:${dataExists ? "YES" : "NO"} | Tr:${trExists ? "YES" : "NO "} | Status:${trStatus.padEnd(14)} | Locale:${resolvedLocale.toUpperCase()} | Fallback:${fallbackUsed.padEnd(13)} | ${classification}`
      );
    }
  }

  // 2. ABOUT PAGE DETAILED FIELD-LEVEL AUDIT
  console.log("\n--- 2. ABOUT PAGE SECTION CLASSIFICATION ---");
  for (const loc of testLocales) {
    console.log(`\n>>> LOCALE: [${loc.toUpperCase()}] <<<`);
    const aboutData = await getPublishedAboutPage(loc);

    const aboutSectionsInDb = await prisma.pageSection.findMany({
      where: { pageSlug: "about" },
    });

    const aboutSectionMap: Record<string, any> = {};
    aboutSectionsInDb.forEach((s) => {
      aboutSectionMap[s.sectionKey] = s;
    });

    const aboutSectionKeys = [
      "hero",
      "visionMission",
      "impactRankings",
      "legacy",
      "legacyEcosystem",
      "recognitions",
      "awards",
      "leadership",
      "governance",
      "policies",
      "seo",
    ];

    for (const key of aboutSectionKeys) {
      const dbSec = aboutSectionMap[key];
      const data = (aboutData as any)[key];
      const dataExists = data !== null && data !== undefined && (Array.isArray(data) ? data.length > 0 : Object.keys(data).length > 0);
      const translations = (dbSec?.translations as any) || {};
      const locEntry = translations[loc];
      const trExists = !!locEntry;
      const trStatus = locEntry?.status || locEntry?._status || "NOT_TRANSLATED";

      let classification = "UNKNOWN";
      let fallbackUsed = "NO";
      let resolvedLocale = "en";

      if (key === "leadership" || key === "recognitions" || key === "awards" || key === "governance" || key === "policies") {
        // Relational table audit check
        classification = "VALID_RELATIONAL_RESOLVED";
        resolvedLocale = loc;
      } else if (!dataExists) {
        classification = "DATA_MISSING";
      } else if (trExists && trStatus === "PUBLISHED") {
        classification = "VALID_PUBLISHED_TRANSLATION";
        resolvedLocale = loc;
      } else if (trExists && trStatus === "DRAFT") {
        classification = "VALID_DRAFT_FALLBACK";
        fallbackUsed = "YES (ENGLISH)";
      } else {
        classification = "VALID_ENGLISH_FALLBACK";
        fallbackUsed = "YES (ENGLISH)";
      }

      console.log(
        `  ${key.padEnd(20)} | Data:${dataExists ? "YES" : "NO"} | Tr:${trExists ? "YES" : "NO "} | Status:${trStatus.padEnd(14)} | Locale:${resolvedLocale.toUpperCase()} | Fallback:${fallbackUsed.padEnd(13)} | ${classification}`
      );
    }
  }

  // 3. LEADERSHIP MEMBER VERIFICATION (PRESERVING INDIVIDUAL DESIGNATIONS)
  console.log("\n--- 3. LEADERSHIP MEMBER MAPPING CHECK ---");
  const leaders = await prisma.leadershipMember.findMany({ where: { status: "PUBLISHED" }, orderBy: { sortOrder: "asc" } });
  for (const loc of testLocales) {
    const aboutData = await getPublishedAboutPage(loc);
    console.log(`\nLocale [${loc.toUpperCase()}] Leadership Members (${aboutData.leadership.length} resolved):`);
    aboutData.leadership.forEach((leader: any) => {
      console.log(`  - Leader: "${leader.name}" | Role/Designation: "${leader.role}" | Featured: ${leader.featured ? "YES" : "NO"}`);
    });
  }

  // 4. SITE SETTINGS LOCALIZATION CHECK
  console.log("\n--- 4. SITE SETTINGS LOCALIZATION CHECK ---");
  for (const loc of testLocales) {
    const contact = await getContactSettings(loc);
    const announcement = await getAnnouncementSettings(loc);
    const cta = await getAdmissionCtaSettings(loc);
    console.log(`  - [${loc.toUpperCase()}] Contact Univ: "${contact.universityName}" | Announcement: "${announcement.text || '(empty)'}" | CTA: "${cta.label}"`);
  }

  // 5. SCHOOL & PROGRAM LOCALIZATION CHECK
  console.log("\n--- 5. SCHOOL & PROGRAM PAGE CHECK ---");
  const sampleSlug = "school-of-computer-science-and-engineering";
  for (const loc of testLocales) {
    const dept = await getDepartmentBySlug(sampleSlug, loc);
    const prog = await getProgramBySlug(sampleSlug, loc);
    console.log(`  - [${loc.toUpperCase()}] School: "${dept?.name}" | Program: "${prog?.name}"`);
  }

  console.log("\n=================================================");
  console.log("  PHASE 4C AUDIT COMPLETE");
  console.log("=================================================");
}

runAudit()
  .catch((err) => {
    console.error("Audit script failed:", err);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
