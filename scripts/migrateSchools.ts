import "dotenv/config";
import { PrismaClient, ContentStatus } from "@prisma/client";

import { commerceSchool } from "../src/data/programs/schools/commerce";
import { pharmacySchool } from "../src/data/programs/schools/pharmacy";
import { healthSciencesSchool } from "../src/data/programs/schools/healthSciences";
import { hospitalitySchool } from "../src/data/programs/schools/hospitality";
import { forensicSciencesSchool } from "../src/data/programs/schools/forensicSciences";
import { lawSchool } from "../src/data/programs/schools/law";
import { agricultureSchool } from "../src/data/programs/schools/agriculture";
import { humanitiesSchool } from "../src/data/programs/schools/humanities";
import { computerScienceSchool } from "../src/data/programs/schools/computerScience";
import { spBansalSchool } from "../src/data/programs/schools/spBansal";
import { nursingSchool } from "../src/data/programs/schools/nursing";
import type { ProgramPageData } from "../src/data/programs/types";

const isDryRun = process.argv.includes("--dry-run");
const prisma = new PrismaClient();

const schoolDataList: ProgramPageData[] = [
  commerceSchool,
  pharmacySchool,
  healthSciencesSchool,
  hospitalitySchool,
  forensicSciencesSchool,
  lawSchool,
  agricultureSchool,
  humanitiesSchool,
  computerScienceSchool,
  spBansalSchool,
  nursingSchool,
];

async function migrateSchool(data: ProgramPageData) {
  const slug = data.slug;
  const name = data.name || data.hero?.title || slug;
  const shortName = data.shortName || name;
  const summary = data.intro?.eyebrow || data.hero?.eyebrow || data.seo?.description || "";

  if (isDryRun) {
    console.log(`[DRY RUN] Would migrate school: "${name}" (${slug})`);
    return;
  }

  // 1. Create or Update SEO Metadata
  let seoId: string | null = null;
  if (data.seo) {
    const seo = await prisma.seoMetadata.create({
      data: {
        title: data.seo.title || name,
        description: data.seo.description || "",
        keywords: data.seo.keywords ? JSON.stringify(data.seo.keywords) : undefined,
      },
    });
    seoId = seo.id;
  }

  // 2. Create or Update Hero Media Asset if URL exists
  let heroImageId: string | null = null;
  if (data.hero?.image) {
    const existingMedia = await prisma.mediaAsset.findFirst({
      where: { url: data.hero.image },
    });
    if (existingMedia) {
      heroImageId = existingMedia.id;
    } else {
      const storageKey = `hero-${slug}-${Date.now()}.webp`;
      const newMedia = await prisma.mediaAsset.create({
        data: {
          fileName: `${slug}-hero.webp`,
          storageKey,
          url: data.hero.image,
          mimeType: "image/webp",
          sizeBytes: 1024,
          altText: data.hero.title || `${name} Hero Image`,
        },
      });
      heroImageId = newMedia.id;
    }
  }

  // 3. Upsert Department / School Record
  const department = await prisma.department.upsert({
    where: { slug },
    create: {
      name,
      shortName,
      slug,
      summary,
      body: JSON.parse(JSON.stringify(data)),
      status: ContentStatus.PUBLISHED,
      publishedAt: new Date(),
      heroImageId,
      seoId,
    },
    update: {
      name,
      shortName,
      summary,
      body: JSON.parse(JSON.stringify(data)),
      status: ContentStatus.PUBLISHED,
      heroImageId: heroImageId ?? undefined,
      seoId: seoId ?? undefined,
    },
  });

  // 4. Migrate Faculty Members associated with school
  if (Array.isArray(data.faculty)) {
    for (let i = 0; i < data.faculty.length; i++) {
      const f = data.faculty[i];
      if (!f.name) continue;
      const facultySlug = `${slug}-${f.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
      await prisma.facultyMember.upsert({
        where: { slug: facultySlug },
        create: {
          name: f.name,
          slug: facultySlug,
          designation: f.designation || f.role || "Faculty",
          qualification: f.qualification || "",
          bio: f.description || f.desc || "",
          sortOrder: i,
          status: ContentStatus.PUBLISHED,
          departmentId: department.id,
        },
        update: {
          name: f.name,
          designation: f.designation || f.role || "Faculty",
          departmentId: department.id,
        },
      });
    }
  }

  // 5. Migrate Programs associated with school
  if (Array.isArray(data.courses)) {
    let orderIndex = 0;
    for (const cat of data.courses) {
      const items = cat.items || cat.programs || [];
      for (const item of items) {
        const progName = item.name || item.program;
        if (!progName) continue;
        const progSlug = item.href ? item.href.replace("/programs/", "").split("/")[1] || `${slug}-${progName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}` : `${slug}-${progName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

        await prisma.program.upsert({
          where: { slug: progSlug },
          create: {
            departmentId: department.id,
            name: progName,
            slug: progSlug,
            level: cat.level || cat.title || "Undergraduate",
            duration: item.duration || cat.duration || "",
            eligibility: item.eligibility || cat.eligibility || "",
            overview: JSON.parse(JSON.stringify({ details: item.details || cat.details || null })),
            status: ContentStatus.PUBLISHED,
            sortOrder: orderIndex++,
            publishedAt: new Date(),
          },
          update: {
            name: progName,
            departmentId: department.id,
            duration: item.duration || cat.duration || "",
            eligibility: item.eligibility || cat.eligibility || "",
          },
        });
      }
    }
  }

  console.log(`Migrated school '${name}' (${slug}) to MySQL database.`);
}

async function main() {
  console.log(`Starting School Migration (${isDryRun ? "DRY RUN MODE" : "LIVE MODE"})...`);
  for (const schoolData of schoolDataList) {
    await migrateSchool(schoolData);
  }
  console.log(`\nMigration completed successfully. Total schools processed: ${schoolDataList.length}`);
}

main()
  .catch((err) => {
    console.error("Migration failed:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
