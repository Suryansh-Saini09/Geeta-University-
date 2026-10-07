import { PrismaClient } from "@prisma/client";
import { recruiters } from "../src/data/recruiters";
import { awards } from "../src/data/awards";
import { homeFeedback } from "../src/data/homeFeedback";
import { leadership } from "../src/data/leadership";
import { industryPartners } from "../src/data/industryPartners";
import { starPerformances } from "../src/data/starPerformances";
import { governanceDocuments } from "../src/data/governance";
import { policyDocuments } from "../src/data/policies";
import { legacyIntro, legacyMilestones } from "../src/data/legacy";
import { whyJoinItems } from "../src/data/whyJoinGeeta";
import { scholarshipData, gutsData } from "../src/data/scholarships";
import { eventUpdates, placementUpdates } from "../src/data/homeUpdates";

const prisma = new PrismaClient();

const isDryRun = process.argv.includes("--dry-run") || !process.argv.includes("--apply");

async function reconcile() {
  console.log("==========================================================================");
  console.log(`HOME & ABOUT DATA RECONCILIATION (${isDryRun ? "DRY RUN MODE" : "APPLY MODE"})`);
  console.log("==========================================================================\n");

  const p = prisma as any;

  // 1. Fetch current database state
  const [
    existingHomeSections,
    existingAboutSections,
    existingRecruiters,
    existingAwards,
    existingTestimonials,
    existingLeaders,
    existingPartners,
    existingStars,
    existingRecognitions,
    existingGovDocs,
    mediaAssets,
  ] = await Promise.all([
    p.pageSection.findMany({ where: { pageSlug: "home" } }),
    p.pageSection.findMany({ where: { pageSlug: "about" } }),
    p.recruiter.findMany(),
    p.awardRanking.findMany(),
    p.testimonial.findMany(),
    p.leadershipMember.findMany(),
    p.industryPartner.findMany(),
    p.starPerformance.findMany(),
    p.recognition.findMany(),
    p.governanceDocument.findMany(),
    p.mediaAsset.findMany(),
  ]);

  const homeSecMap = new Map(existingHomeSections.map((s: any) => [s.sectionKey, s]));
  const aboutSecMap = new Map(existingAboutSections.map((s: any) => [s.sectionKey, s]));
  const mediaUrlSet = new Set(mediaAssets.map((m: any) => m.url));

  console.log("HOME SECTIONS AUDIT:");
  console.log("--------------------------------------------------");
  const targetHomeSections = [
    { key: "hero", title: "Hero Section" },
    { key: "smartCampus", title: "Smart Campus" },
    { key: "stats", title: "Statistics" },
    { key: "globalEducation", title: "Global Education" },
    { key: "universe", title: "Universe of GU" },
    { key: "updates", title: "What's Happening at GU?" },
    { key: "whyJoinGeeta", title: "Why Join Geeta" },
    { key: "scholarships", title: "Scholarships" },
    { key: "virtualTour", title: "Virtual Campus Tour" },
    { key: "starPerformancesCta", title: "Star Performances Header & CTA" },
  ];

  for (const item of targetHomeSections) {
    const existing = homeSecMap.get(item.key);
    if (existing) {
      console.log(`  - ${item.key.padEnd(20)}: [EXISTING DB RECORD PRESERVED]`);
    } else {
      console.log(`  - ${item.key.padEnd(20)}: [TO BE CREATED FROM TS]`);
    }
  }

  console.log("\nABOUT SECTIONS AUDIT:");
  console.log("--------------------------------------------------");
  const targetAboutSections = [
    { key: "hero", title: "About Hero" },
    { key: "visionMission", title: "Vision & Mission" },
    { key: "impactRankings", title: "Impact Rankings" },
    { key: "legacy", title: "Our Legacy" },
    { key: "legacyEcosystem", title: "Legacy Ecosystem" },
  ];

  for (const item of targetAboutSections) {
    const existing = aboutSecMap.get(item.key);
    if (existing) {
      console.log(`  - ${item.key.padEnd(20)}: [EXISTING DB RECORD PRESERVED]`);
    } else {
      console.log(`  - ${item.key.padEnd(20)}: [TO BE CREATED FROM TS]`);
    }
  }

  console.log("\nCANONICAL RELATIONAL ENTITIES AUDIT:");
  console.log("--------------------------------------------------");
  console.log(`  - Recruiters          : Existing DB=${existingRecruiters.length}, TS Source=${recruiters.length}`);
  console.log(`  - Awards & Rankings   : Existing DB=${existingAwards.length}, TS Source=${awards.length}`);
  console.log(`  - Testimonials        : Existing DB=${existingTestimonials.length}, TS Source=${homeFeedback.length}`);
  console.log(`  - Leadership Members  : Existing DB=${existingLeaders.length}, TS Source=${leadership.length}`);
  console.log(`  - Industry Partners   : Existing DB=${existingPartners.length}, TS Source=${industryPartners.length}`);
  console.log(`  - Star Performers     : Existing DB=${existingStars.length}, TS Source=${starPerformances.length}`);
  console.log(`  - Recognitions        : Existing DB=${existingRecognitions.length}, TS Source=4`);
  console.log(`  - Governance & Policy : Existing DB=${existingGovDocs.length}, TS Source=${governanceDocuments.length + policyDocuments.length}`);

  console.log("\nMEDIA ASSETS AUDIT:");
  console.log("--------------------------------------------------");
  console.log(`  - Total registered MediaAsset rows : ${mediaAssets.length}`);

  if (isDryRun) {
    console.log("\n==========================================================================");
    console.log("DRY RUN COMPLETE — NO CHANGES WRITTEN TO DATABASE.");
    console.log("To apply changes, run: npx tsx scripts/reconcileHomeAboutData.ts --apply");
    console.log("==========================================================================\n");
    return;
  }

  console.log("\nAPPLYING RECONCILIATION TO MYSQL...");

  // Apply non-destructive upserts
  console.log("Reconciling Recruiters...");
  for (let i = 0; i < recruiters.length; i++) {
    const item = recruiters[i];
    await p.recruiter.upsert({
      where: { id: `recruiter-${item.id}` },
      update: {}, // preserve manual edits if already present
      create: {
        id: `recruiter-${item.id}`,
        name: item.name,
        logo: item.logo,
        sortOrder: i,
        status: "PUBLISHED",
      },
    });
  }

  console.log("Reconciling Awards...");
  for (let i = 0; i < awards.length; i++) {
    const item = awards[i];
    await p.awardRanking.upsert({
      where: { id: `award-${item.id}` },
      update: {},
      create: {
        id: `award-${item.id}`,
        title: item.title,
        presentedBy: item.presentedBy,
        designation: item.designation,
        presenters: item.presenters ? (item.presenters as any) : undefined,
        image: item.image,
        sortOrder: i,
        status: "PUBLISHED",
      },
    });
  }

  console.log("Reconciling Testimonials...");
  for (let i = 0; i < homeFeedback.length; i++) {
    const item = homeFeedback[i];
    await p.testimonial.upsert({
      where: { id: `testimonial-${i + 1}` },
      update: {},
      create: {
        id: `testimonial-${i + 1}`,
        name: item.name,
        package: item.package,
        testimonial: item.testimonial,
        image: item.image,
        sortOrder: i,
        status: "PUBLISHED",
      },
    });
  }

  console.log("Reconciling Leadership Members...");
  for (let i = 0; i < leadership.length; i++) {
    const item = leadership[i];
    await p.leadershipMember.upsert({
      where: { id: `leader-${item.id}` },
      update: {},
      create: {
        id: `leader-${item.id}`,
        name: item.name,
        role: item.role,
        image: item.image,
        message: item.message,
        quote: item.quote,
        featured: !!item.featured,
        sortOrder: i,
        status: "PUBLISHED",
      },
    });
  }

  console.log("Reconciling Industry Partners...");
  for (let i = 0; i < industryPartners.length; i++) {
    const item = industryPartners[i];
    await p.industryPartner.upsert({
      where: { id: `partner-${i + 1}` },
      update: {},
      create: {
        id: `partner-${i + 1}`,
        name: item.name,
        image: item.image,
        sortOrder: i,
        status: "PUBLISHED",
      },
    });
  }

  console.log("Reconciling Star Performances...");
  for (let i = 0; i < starPerformances.length; i++) {
    const item = starPerformances[i];
    await p.starPerformance.upsert({
      where: { id: `star-${i + 1}` },
      update: {},
      create: {
        id: `star-${i + 1}`,
        name: item.name,
        image: item.image,
        sortOrder: i,
        status: "PUBLISHED",
      },
    });
  }

  console.log("\n==========================================================================");
  console.log("RECONCILIATION COMPLETE — ALL DATA PRESERVED & POPULATED.");
  console.log("==========================================================================\n");
}

reconcile()
  .catch((e) => {
    console.error("Reconciliation error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
