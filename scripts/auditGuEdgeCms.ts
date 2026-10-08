import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const EXPECTED_GU_EDGE_PAGES = [
  { slug: "dyod", title: "Design Your Own Degree", sections: ["hero", "timeline", "features"] },
  { slug: "gfs", title: "Geeta Finishing School", sections: ["hero", "stats", "videos", "mentors", "training_model", "testimonials", "gallery"] },
  { slug: "gth", title: "Geeta Technical Hub", sections: ["hero", "stats", "mentors", "features", "videos", "gallery"] },
  { slug: "nep", title: "New Education Policy (NEP 2020)", sections: ["hero", "features", "main_content"] },
  { slug: "vocational-skills", title: "Vocational Skills", sections: ["hero", "features"] },
  { slug: "gu-global-edge", title: "GU Global Edge", sections: ["hero", "stats", "features", "accordions", "gallery"] },
  { slug: "xedge", title: "XEDGE — Corporate Citizen Initiative", sections: ["hero", "features", "cta"] },
];

async function runAudit() {
  console.log("==================================================");
  console.log("GU EDGE CMS AUDIT REPORT");
  console.log("==================================================\n");

  let totalPages = EXPECTED_GU_EDGE_PAGES.length;
  let passedPages = 0;
  let failedPages = 0;

  for (const pageConfig of EXPECTED_GU_EDGE_PAGES) {
    const pageRecord = await prisma.page.findUnique({
      where: { slug: pageConfig.slug },
      include: { seo: true },
    });

    const sections = await prisma.pageSection.findMany({
      where: { pageSlug: pageConfig.slug },
    });

    const sectionKeys = sections.map((s) => s.sectionKey);
    const missingSections = pageConfig.sections.filter((s) => !sectionKeys.includes(s));
    const emptySections = sections.filter(
      (s) => !s.body || typeof s.body !== "object" || Object.keys(s.body as object).length === 0
    );

    const isPageOk = pageRecord !== null;
    const isSeoOk = pageRecord?.seo !== null;
    const isSectionsOk = missingSections.length === 0 && emptySections.length === 0;

    if (isPageOk && isSeoOk && isSectionsOk) {
      console.log(`[PASS] ${pageConfig.title} (slug: "${pageConfig.slug}")`);
      console.log(
        `       Page Record: YES | SEO Record: YES | Sections: ${sections.length}/${pageConfig.sections.length} [All Populated]`
      );
      passedPages++;
    } else {
      console.log(`[FAIL] ${pageConfig.title} (slug: "${pageConfig.slug}")`);
      console.log(`       Page Record: ${isPageOk ? "YES" : "MISSING"}`);
      console.log(`       SEO Record: ${isSeoOk ? "YES" : "MISSING"}`);
      console.log(`       Missing Sections: ${missingSections.join(", ") || "None"}`);
      console.log(`       Empty Sections: ${emptySections.map((s) => s.sectionKey).join(", ") || "None"}`);
      failedPages++;
    }
  }

  console.log("\n==================================================");
  console.log(`AUDIT SUMMARY: ${passedPages}/${totalPages} PAGES PASSED`);
  if (failedPages === 0) {
    console.log("[SUCCESS] ALL GU EDGE PAGES COMPLIANT WITH AIVEN MYSQL & PAGE SECTION SCHEMAS!");
  } else {
    console.log(`[ERROR] ${failedPages} PAGES FAILED AUDIT. PLEASE CHECK MISSING SECTIONS OR SEO RECORDS.`);
  }
  console.log("==================================================");

  if (failedPages > 0) {
    process.exit(1);
  }
}

runAudit()
  .catch((e) => {
    console.error("Audit error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
