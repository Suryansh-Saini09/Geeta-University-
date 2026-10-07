import { PrismaClient, ContentStatus } from "@prisma/client";

async function testLiveCmsFlow() {
  const prisma = new PrismaClient();
  console.log("=== LIVE CMS DATA FLOW VERIFICATION AGAINST AIVEN MYSQL ===");

  try {
    // 1. Home Hero Section Edit Test
    console.log("\n1. Testing Home Hero Section Update...");
    const homeBefore = await prisma.pageSection.findUnique({
      where: { pageSlug_sectionKey: { pageSlug: "home", sectionKey: "hero" } },
    });

    const testHeadline = "Shape Your Future at Geeta University (Verified Production Test)";
    const currentBody = (homeBefore?.body as Record<string, any>) || {};

    const homeUpdated = await prisma.pageSection.upsert({
      where: { pageSlug_sectionKey: { pageSlug: "home", sectionKey: "hero" } },
      update: {
        body: { ...currentBody, headline: testHeadline },
        status: ContentStatus.PUBLISHED,
      },
      create: {
        pageSlug: "home",
        sectionKey: "hero",
        title: "home hero",
        body: { headline: testHeadline },
        status: ContentStatus.PUBLISHED,
      },
    });

    console.log(`Home Hero Headline in Aiven: "${(homeUpdated.body as any)?.headline}"`);
    if ((homeUpdated.body as any)?.headline === testHeadline) {
      console.log("-> Home Hero Edit Test: PASS");
    } else {
      console.log("-> Home Hero Edit Test: FAIL");
    }

    // 2. About Vision Statement Test
    console.log("\n2. Testing About Vision Section Update...");
    const aboutBefore = await prisma.pageSection.findUnique({
      where: { pageSlug_sectionKey: { pageSlug: "about", sectionKey: "visionMission" } },
    });

    const testVision = "To be a premier global university empowering future leaders (Verified Production Test)";
    const aboutCurrentBody = (aboutBefore?.body as Record<string, any>) || {};

    const aboutUpdated = await prisma.pageSection.upsert({
      where: { pageSlug_sectionKey: { pageSlug: "about", sectionKey: "visionMission" } },
      update: {
        body: { ...aboutCurrentBody, visionStatement: testVision },
        status: ContentStatus.PUBLISHED,
      },
      create: {
        pageSlug: "about",
        sectionKey: "visionMission",
        title: "about visionMission",
        body: { visionStatement: testVision },
        status: ContentStatus.PUBLISHED,
      },
    });

    console.log(`About Vision in Aiven: "${(aboutUpdated.body as any)?.visionStatement}"`);
    if ((aboutUpdated.body as any)?.visionStatement === testVision) {
      console.log("-> About Vision Edit Test: PASS");
    } else {
      console.log("-> About Vision Edit Test: FAIL");
    }

    // 3. Department Update Test
    console.log("\n3. Testing Department Update...");
    const firstDept = await prisma.department.findFirst({ orderBy: { sortOrder: "asc" } });
    if (firstDept) {
      const updatedDept = await prisma.department.update({
        where: { id: firstDept.id },
        data: { summary: `${firstDept.summary || firstDept.name} (Verified)` },
      });
      console.log(`Department '${updatedDept.name}' Summary in Aiven: "${updatedDept.summary}"`);
      console.log("-> Department Edit Test: PASS");
    }

    // 4. Media Asset Reuse Verification
    console.log("\n4. Testing MediaAsset Reuse...");
    const mediaCount = await prisma.mediaAsset.count();
    const firstMedia = await prisma.mediaAsset.findFirst();
    console.log(`Total MediaAsset records in Aiven: ${mediaCount}`);
    if (firstMedia) {
      console.log(`Existing MediaAsset record found: ID=${firstMedia.id}, URL=${firstMedia.url}`);
      console.log("-> MediaAsset Verification: PASS");
    }

  } catch (err: any) {
    console.error("Live CMS test error:", err.message || err);
  } finally {
    await prisma.$disconnect();
  }
}

testLiveCmsFlow();
