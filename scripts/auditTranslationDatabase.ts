import { prisma } from "../src/server/db/client";

const LOCALIZED_MODELS = [
  "awardRanking",
  "recruiter",
  "testimonial",
  "starPerformance",
  "leadershipMember",
  "governanceDocument",
  "recognition",
  "industryPartner",
  "department",
  "program",
  "pageSection",
  "seoMetadata",
  "siteSetting",
  "navigationItem",
];

async function main() {
  console.log("=================================================");
  console.log("    DATABASE TRANSLATION AUDIT REPORT");
  console.log("=================================================\n");

  let grandTotalRecords = 0;
  let grandTotalFrMissing = 0;
  let grandTotalHiMissing = 0;
  let totalMalformedOrNull = 0;

  for (const modelName of LOCALIZED_MODELS) {
    const dbModel = (prisma as any)[modelName];
    if (!dbModel) {
      console.warn(`Model '${modelName}' not found on Prisma Client.`);
      continue;
    }

    const records = await dbModel.findMany();
    const total = records.length;
    grandTotalRecords += total;

    let frMissing = 0;
    let hiMissing = 0;
    let malformedOrNull = 0;
    let missingStatusCount = 0;

    for (const record of records) {
      const rawTr = record.translations;
      if (!rawTr || typeof rawTr !== "object" || Object.keys(rawTr).length === 0) {
        frMissing++;
        hiMissing++;
        malformedOrNull++;
        continue;
      }

      // Check FR
      if (!rawTr.fr || typeof rawTr.fr !== "object") {
        frMissing++;
      } else if (!rawTr.fr.status && !rawTr.fr._status) {
        missingStatusCount++;
      }

      // Check HI
      if (!rawTr.hi || typeof rawTr.hi !== "object") {
        hiMissing++;
      } else if (!rawTr.hi.status && !rawTr.hi._status) {
        missingStatusCount++;
      }
    }

    grandTotalFrMissing += frMissing;
    grandTotalHiMissing += hiMissing;
    totalMalformedOrNull += malformedOrNull;

    console.log(`[MODEL] ${modelName.toUpperCase()}`);
    console.log(`  - Total Records: ${total}`);
    console.log(`  - FR Missing:    ${frMissing}`);
    console.log(`  - HI Missing:    ${hiMissing}`);
    console.log(`  - Null/Empty:    ${malformedOrNull}`);
    if (missingStatusCount > 0) {
      console.log(`  - Missing Status:${missingStatusCount}`);
    }
    console.log("-------------------------------------------------");
  }

  console.log("\n=================================================");
  console.log(`  GRAND TOTAL RECORDS AUDITED : ${grandTotalRecords}`);
  console.log(`  TOTAL FR TRANSLATIONS MISSING: ${grandTotalFrMissing}`);
  console.log(`  TOTAL HI TRANSLATIONS MISSING: ${grandTotalHiMissing}`);
  console.log(`  TOTAL NULL / EMPTY DB ENTRIES: ${totalMalformedOrNull}`);
  console.log("=================================================");
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Database audit failed:", err);
    process.exit(1);
  });
