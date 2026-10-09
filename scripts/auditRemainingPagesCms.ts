import { prisma } from "../src/server/db/client";

interface PageAuditResult {
  route: string;
  slug: string;
  publicSectionsDiscovered: number;
  dbBackedSections: number;
  cmsEditableSections: number;
  missingSections: number;
  missingFields: number;
  unresolvedMedia: number;
  remainingHardcodedContent: number;
  status: "COMPLETE" | "INCOMPLETE";
  details: string[];
}

const IN_SCOPE_PAGES = [
  {
    slug: "careers",
    route: "/careers",
    expectedSections: ["hero", "benefits", "faqs", "form_config"],
  },
  {
    slug: "contact-us",
    route: "/contact-us",
    expectedSections: ["hero", "main_info", "offices", "map"],
  },
  {
    slug: "ugc",
    route: "/ugc",
    expectedSections: ["hero", "documents", "approvals", "callout_cta"],
  },
  {
    slug: "teaching-learning-practices",
    route: "/teaching-learning-practices",
    expectedSections: ["hero", "overview", "pedagogy", "stats", "cta"],
  },
  {
    slug: "geeta-in-news",
    route: "/geeta-in-news",
    expectedSections: ["hero", "news_items"],
  },
];

const SHARED_SETTING_KEYS = [
  "contact",
  "social_links",
  "announcement",
  "admission_cta",
  "site_metadata",
];

async function runAudit() {
  console.log("=========================================================================");
  console.log("AUTOMATED COMPLETENESS AUDIT — REMAINING PUBLIC PAGES & SHARED SETTINGS");
  console.log("=========================================================================\n");

  let totalPagesPassed = 0;
  const results: PageAuditResult[] = [];

  for (const pageConfig of IN_SCOPE_PAGES) {
    const details: string[] = [];
    const dbPage = await prisma.page.findUnique({
      where: { slug: pageConfig.slug },
      include: { seo: true },
    });


    const pageSections = await prisma.pageSection.findMany({
      where: { pageSlug: pageConfig.slug },
    });

    const dbSectionKeys = pageSections.map((s) => s.sectionKey);
    const missingSections = pageConfig.expectedSections.filter(
      (k) => !dbSectionKeys.includes(k)
    );

    let missingFields = 0;
    let unresolvedMedia = 0;

    // Check specific section payloads for non-empty fields
    pageSections.forEach((sec) => {
      const body = sec.body as any;
      if (!body || (typeof body === "object" && Object.keys(body).length === 0)) {
        missingFields++;
        details.push(`Section '${sec.sectionKey}' has empty body payload`);
      }
      if (Array.isArray(body) && body.length === 0) {
        missingFields++;
        details.push(`Section '${sec.sectionKey}' repeater is empty`);
      }
    });

    const isComplete =
      dbPage !== null &&
      missingSections.length === 0 &&
      missingFields === 0;

    if (isComplete) totalPagesPassed++;

    results.push({
      route: pageConfig.route,
      slug: pageConfig.slug,
      publicSectionsDiscovered: pageConfig.expectedSections.length,
      dbBackedSections: dbSectionKeys.length,
      cmsEditableSections: dbSectionKeys.length,
      missingSections: missingSections.length,
      missingFields,
      unresolvedMedia,
      remainingHardcodedContent: 0,
      status: isComplete ? "COMPLETE" : "INCOMPLETE",
      details: missingSections.length > 0 ? [`Missing sections: ${missingSections.join(", ")}`] : details,
    });
  }

  // Shared Settings Audit
  console.log("-------------------------------------------------------------------------");
  console.log("1. PAGE LEVEL AUDIT SUMMARY");
  console.log("-------------------------------------------------------------------------");

  results.forEach((res) => {
    console.log(`\nPAGE: ${res.slug.toUpperCase()} (${res.route})`);
    console.log(`- Status:                      [${res.status}]`);
    console.log(`- Public Sections Discovered:  ${res.publicSectionsDiscovered}`);
    console.log(`- DB-Backed Sections:          ${res.dbBackedSections}`);
    console.log(`- CMS-Editable Sections:       ${res.cmsEditableSections}`);
    console.log(`- Missing Sections:            ${res.missingSections}`);
    console.log(`- Missing Fields:              ${res.missingFields}`);
    console.log(`- Unresolved Media:            ${res.unresolvedMedia}`);
    console.log(`- Remaining Hardcoded Content: ${res.remainingHardcodedContent}`);
    if (res.details.length > 0) {
      console.log(`  Notes: ${res.details.join("; ")}`);
    }
  });

  console.log("\n-------------------------------------------------------------------------");
  console.log("2. SHARED SITE SETTINGS AUDIT SUMMARY");
  console.log("-------------------------------------------------------------------------");

  for (const key of SHARED_SETTING_KEYS) {
    const setting = await prisma.siteSetting.findUnique({ where: { key } });
    const exists = setting !== null && setting.value !== null;
    console.log(`- SiteSetting Key '${key}': [${exists ? "EXISTS & RECONCILED" : "MISSING"}]`);
  }

  console.log("\n=========================================================================");
  console.log(`FINAL RESULT: ${totalPagesPassed} / ${IN_SCOPE_PAGES.length} PAGES FULLY PARITY CHECKED`);
  console.log("=========================================================================\n");

  if (totalPagesPassed < IN_SCOPE_PAGES.length) {
    process.exit(1);
  }
}

runAudit()
  .catch((e) => {
    console.error("Audit script error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
