import { prisma } from "../src/server/db/client";
import { translateText, translateObject } from "../src/server/services/translation";

interface ModelMigrationConfig {
  modelName: string;
  translatableFields?: string[];
  isStructuredJson?: boolean;
}

const MODELS_TO_MIGRATE: ModelMigrationConfig[] = [
  {
    modelName: "awardRanking",
    translatableFields: ["title", "presentedBy", "designation", "category"],
  },
  {
    modelName: "recruiter",
    translatableFields: ["name"],
  },
  {
    modelName: "testimonial",
    translatableFields: ["name", "package", "testimonial"],
  },
  {
    modelName: "starPerformance",
    translatableFields: ["name"],
  },
  {
    modelName: "leadershipMember",
    translatableFields: ["name", "role", "message", "quote"],
  },
  {
    modelName: "governanceDocument",
    translatableFields: ["title", "description"],
  },
  {
    modelName: "recognition",
    translatableFields: ["name", "fullName"],
  },
  {
    modelName: "industryPartner",
    translatableFields: ["name"],
  },
  {
    modelName: "department",
    translatableFields: ["name", "shortName", "summary"],
    isStructuredJson: true, // body field is JSON
  },
  {
    modelName: "program",
    translatableFields: ["name", "level", "duration", "eligibility"],
    isStructuredJson: true, // overview and feeData are JSON
  },
  {
    modelName: "pageSection",
    translatableFields: ["title"],
    isStructuredJson: true, // body field is JSON
  },
  {
    modelName: "seoMetadata",
    translatableFields: ["title", "description", "ogTitle"],
  },
  {
    modelName: "siteSetting",
    isStructuredJson: true, // value field is JSON
  },
  {
    modelName: "navigationItem",
    translatableFields: ["label"],
  },
];

const LOCALES = ["hi", "fr"] as const;

async function migrateModel(config: ModelMigrationConfig, isApply: boolean) {
  const { modelName, translatableFields = [], isStructuredJson } = config;
  const dbModel = (prisma as any)[modelName];
  if (!dbModel) {
    console.warn(`Model '${modelName}' not found on Prisma Client.`);
    return;
  }

  const records = await dbModel.findMany();
  let totalRecords = records.length;
  let frMissing = 0;
  let hiMissing = 0;
  let frCreated = 0;
  let hiCreated = 0;
  let frPreserved = 0;
  let hiPreserved = 0;
  let failedCount = 0;

  await Promise.all(
    records.map(async (record: any) => {
      const existingTranslations: any = record.translations || {};
      let updatedTranslations = { ...existingTranslations };
      let hasChanges = false;

      for (const locale of LOCALES) {
        if (
          existingTranslations[locale] &&
          (existingTranslations[locale].status === "PUBLISHED" ||
            existingTranslations[locale].name ||
            existingTranslations[locale].title ||
            existingTranslations[locale].body)
        ) {
          if (locale === "fr") frPreserved++;
          if (locale === "hi") hiPreserved++;
          continue;
        }

        if (locale === "fr") frMissing++;
        if (locale === "hi") hiMissing++;

        if (!isApply) continue;

        try {
          const localeData: Record<string, any> = {
            status: "PUBLISHED",
            updatedAt: new Date().toISOString(),
          };

          // 1. Field-level scalar translations
          for (const field of translatableFields) {
            const canonicalVal = record[field];
            if (
              canonicalVal &&
              typeof canonicalVal === "string" &&
              canonicalVal.trim() !== ""
            ) {
              localeData[field] = await translateText(canonicalVal, locale);
            }
          }

          // 2. Structured JSON translations (body, value, overview)
          if (isStructuredJson) {
            if (modelName === "pageSection" || modelName === "department") {
              if (record.body) {
                localeData.body = await translateObject(record.body, locale);
              }
            } else if (modelName === "program") {
              if (record.overview) {
                localeData.overview = await translateObject(record.overview, locale);
              }
              if (record.feeData) {
                localeData.feeData = await translateObject(record.feeData, locale);
              }
            } else if (modelName === "siteSetting") {
              if (record.value) {
                localeData.value = await translateObject(record.value, locale);
              }
            }
          }

          updatedTranslations[locale] = localeData;
          hasChanges = true;
          if (locale === "fr") frCreated++;
          if (locale === "hi") hiCreated++;
        } catch (err) {
          failedCount++;
          console.error(
            `Failed translating ${modelName} ID ${record.id} for locale ${locale}:`,
            err
          );
        }
      }

      if (isApply && hasChanges) {
        await dbModel.update({
          where: { id: record.id },
          data: { translations: updatedTranslations },
        });
      }
    })
  );

  console.log(`\n========================================`);
  console.log(`MODEL: ${modelName.toUpperCase()}`);
  console.log(`TOTAL RECORDS: ${totalRecords}`);
  console.log(`FR MISSING: ${frMissing} | FR PRESERVED: ${frPreserved} | FR CREATED: ${frCreated}`);
  console.log(`HI MISSING: ${hiMissing} | HI PRESERVED: ${hiPreserved} | HI CREATED: ${hiCreated}`);
  if (failedCount > 0) console.log(`FAILED: ${failedCount}`);
  console.log(`========================================`);
}

async function main() {
  const isApply = process.argv.includes("--apply");
  const isDryRun = process.argv.includes("--dry-run") || !isApply;

  console.log(`\n***************************************************`);
  console.log(`TRANSLATION DATA MIGRATION — MODE: ${isDryRun ? "DRY RUN" : "APPLY"}`);
  console.log(`***************************************************\n`);

  for (const config of MODELS_TO_MIGRATE) {
    await migrateModel(config, isApply);
  }

  console.log(`\nMigration completed.`);
}

if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("Migration failed:", err);
      process.exit(1);
    });
}
