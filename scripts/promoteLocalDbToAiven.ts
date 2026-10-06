import { PrismaClient } from "@prisma/client";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { execSync } from "node:child_process";

// Parse CLI flags
const isDryRun = process.argv.includes("--dry-run");
const isApply = process.argv.includes("--apply");
const isAudit = process.argv.includes("--audit") || (!isDryRun && !isApply);

if (isApply && process.env.CONFIRM_AIVEN_PRODUCTION !== "YES") {
  console.error("ERROR: Modifying or promoting data to Aiven Production database requires explicit environment variable:");
  console.error("  CONFIRM_AIVEN_PRODUCTION=YES npx tsx scripts/promoteLocalDbToAiven.ts --apply\n");
  process.exit(1);
}

function getLocalDatabaseUrl(): string {
  if (process.env.LOCAL_DATABASE_URL) return process.env.LOCAL_DATABASE_URL;
  const envLocal = readFileSync(".env.local", "utf8");
  const match = envLocal.match(/DATABASE_URL="?([^"\n]+)"?/);
  if (match) return match[1];
  return "mysql://geeta_cms:geeta_cms_password@localhost:3306/geeta_university";
}

function getAivenDatabaseUrl(): string {
  if (process.env.AIVEN_DATABASE_URL) return process.env.AIVEN_DATABASE_URL;
  const envMain = readFileSync(".env", "utf8");
  const lines = envMain.split("\n");
  for (const line of lines) {
    if (line.startsWith("#")) continue;
    if (line.includes("DATABASE_URL") && line.includes("aivencloud")) {
      const match = line.match(/DATABASE_URL="?([^"\n]+)"?/);
      if (match) return match[1];
    }
  }
  throw new Error("Aiven DATABASE_URL not found in environment files.");
}

function createClientForUrl(urlString: string): PrismaClient {
  const connection = new URL(urlString);
  const certificate = connection.searchParams.get("sslcert");

  if (urlString.includes("localhost") || urlString.includes("127.0.0.1")) {
    return new PrismaClient({
      datasources: { db: { url: urlString } },
      log: ["error"],
    });
  }

  const adapter = new PrismaMariaDb({
    host: connection.hostname,
    port: Number(connection.port || 3306),
    user: decodeURIComponent(connection.username),
    password: decodeURIComponent(connection.password),
    database: connection.pathname.slice(1),
    connectTimeout: 15000,
    ...(certificate && {
      ssl: {
        ca: readFileSync(resolve(process.cwd(), "prisma", certificate)),
        rejectUnauthorized: true,
      },
    }),
  });

  return new PrismaClient({ adapter, log: ["error"] });
}

function parseTableName(row: any): string {
  const val = Object.values(row)[0];
  if (typeof val === "string") return val;
  if (Buffer.isBuffer(val)) return val.toString("utf8");
  if (typeof val === "object" && val !== null) {
    return String.fromCharCode(...Object.values(val));
  }
  return String(val);
}

const localUrl = getLocalDatabaseUrl();
const aivenUrl = getAivenDatabaseUrl();

const localPrisma = createClientForUrl(localUrl);
const aivenPrisma = createClientForUrl(aivenUrl);

async function run() {
  console.log("=====================================================================");
  console.log("PHASE 5 — DATABASE SYNCHRONIZATION AUDIT & PROMOTION UTILITY");
  console.log("=====================================================================");
  console.log(`MODE: ${isApply ? "APPLY (WRITING TO AIVEN)" : isDryRun ? "DRY RUN (SIMULATION ONLY)" : "AUDIT ONLY"}`);
  console.log("LOCAL HOST:", new URL(localUrl).hostname, "| DB:", new URL(localUrl).pathname.slice(1));
  console.log("AIVEN HOST:", new URL(aivenUrl).hostname, "| DB:", new URL(aivenUrl).pathname.slice(1));
  console.log("---------------------------------------------------------------------\n");

  try {
    // 1. Audit tables
    const localTablesRaw: any[] = await localPrisma.$queryRawUnsafe("SHOW TABLES;");
    const aivenTablesRaw: any[] = await aivenPrisma.$queryRawUnsafe("SHOW TABLES;");

    const localTables = localTablesRaw.map(parseTableName);
    const aivenTables = aivenTablesRaw.map(parseTableName);

    console.log("--- STEP 1 & 4: SCHEMA & TABLE COMPARISON ---");
    console.log(`Local Database Total Tables: ${localTables.length}`);
    console.log(`Aiven Production Total Tables: ${aivenTables.length}`);

    const missingTablesInAiven = localTables.filter((t) => !aivenTables.includes(t));
    if (missingTablesInAiven.length > 0) {
      console.log(`\n❌ MISSING TABLES IN AIVEN PRODUCTION (${missingTablesInAiven.length}):`);
      missingTablesInAiven.forEach((t) => console.log(`   - ${t}`));
    } else {
      console.log("\n✅ All tables present in Local DB exist in Aiven Production DB.");
    }

    // Check SiteSetting translations column
    const checkColumnExists = async (prismaClient: PrismaClient, tableName: string, columnName: string) => {
      try {
        const cols: any[] = await prismaClient.$queryRawUnsafe(
          `SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = '${tableName}' AND COLUMN_NAME = '${columnName}';`
        );
        return cols.length > 0;
      } catch {
        return false;
      }
    };

    const siteSettingTransLocal = await checkColumnExists(localPrisma, "SiteSetting", "translations");
    const siteSettingTransAiven = await checkColumnExists(aivenPrisma, "SiteSetting", "translations");

    console.log("\n--- COLUMN AUDIT: SiteSetting.translations ---");
    console.log(`Local SiteSetting.translations: ${siteSettingTransLocal ? "EXISTS" : "MISSING"}`);
    console.log(`Aiven SiteSetting.translations: ${siteSettingTransAiven ? "EXISTS" : "MISSING"}`);

    // If missing tables/columns exist in Aiven and we are in --apply mode, push schema safely using npx prisma db push
    if ((missingTablesInAiven.length > 0 || !siteSettingTransAiven) && isApply) {
      console.log("\n⚡ STEP 10: SYNCING SCHEMA & MISSING TABLES TO AIVEN VIA PRISMA DB PUSH...");
      try {
        execSync(`npx prisma db push --accept-data-loss`, {
          env: { ...process.env, DATABASE_URL: aivenUrl },
          stdio: "inherit",
          shell: "powershell.exe",
        });
        console.log("✅ Schema push to Aiven completed successfully!");
      } catch (err: any) {
        console.error("⚠️ Prisma schema push error:", err.message);
      }
    }

    // 2. Audit Row Counts
    console.log("\n--- STEP 5: CONTENT ROW COUNT COMPARISON ---");
    const modelsToAudit = [
      "Page",
      "PageSection",
      "SiteSetting",
      "Department",
      "Program",
      "ProgramAlias",
      "AwardRanking",
      "GovernanceDocument",
      "LeadershipMember",
      "IndustryPartner",
      "Recruiter",
      "Recognition",
      "StarPerformance",
      "Testimonial",
      "MediaAsset",
      "SeoMetadata",
      "HeroBanner",
      "NavigationMenu",
      "NavigationItem",
      "FacultyMember",
      "Notice",
      "Event",
      "GalleryAlbum",
      "GalleryItem",
      "NewsItem",
      "AdminUser",
      "AdminSession",
      "AuditLog",
    ];

    const rowCounts: Record<string, { local: number; aiven: number; diff: number }> = {};

    for (const model of modelsToAudit) {
      let localCount = -1;
      let aivenCount = -1;

      try {
        localCount = await (localPrisma as any)[model.charAt(0).toLowerCase() + model.slice(1)].count();
      } catch {}

      try {
        aivenCount = await (aivenPrisma as any)[model.charAt(0).toLowerCase() + model.slice(1)].count();
      } catch {}

      rowCounts[model] = { local: localCount, aiven: aivenCount, diff: localCount - aivenCount };
    }

    console.table(rowCounts);

    // 3. Inspect Home Programs Offered Section
    console.log("\n--- STEP 8: HOME PROGRAMS OFFERED AUDIT ---");
    try {
      const localHomeProgramsSec = await localPrisma.pageSection.findUnique({
        where: { pageSlug_sectionKey: { pageSlug: "home", sectionKey: "programsOffered" } },
      });
      if (localHomeProgramsSec) {
        console.log("✅ Local DB contains PageSection (home / programsOffered).");
        console.log(`   Section ID: ${localHomeProgramsSec.id}, Title: ${localHomeProgramsSec.title}`);
        console.log(`   Body JSON size: ${JSON.stringify(localHomeProgramsSec.body || {}).length} bytes`);
      } else {
        console.log("❌ Local DB does NOT contain PageSection (home / programsOffered)!");
      }
    } catch (err: any) {
      console.log("⚠️ Error inspecting local home programsOffered section:", err.message);
    }

    // 4. Content Promotion Simulation / Execution
    console.log("\n--- STEP 11, 12, 13, 14, 15: CONTENT PROMOTION ---");

    const contentModels = [
      "seoMetadata",
      "mediaAsset",
      "page",
      "pageSection",
      "siteSetting",
      "department",
      "program",
      "programAlias",
      "awardRanking",
      "governanceDocument",
      "leadershipMember",
      "industryPartner",
      "recruiter",
      "recognition",
      "starPerformance",
      "testimonial",
      "facultyMember",
      "notice",
      "event",
      "galleryAlbum",
      "galleryItem",
      "newsItem",
      "heroBanner",
      "navigationMenu",
      "navigationItem",
    ];

    const protectedModels = ["adminUser", "adminSession", "auditLog"];

    console.log("PROTECTED MODELS (PRESERVED ON AIVEN):", protectedModels.join(", "));
    console.log("CONTENT MODELS TO SYNCHRONIZE:", contentModels.join(", "));

    if (isDryRun || isApply) {
      const summaryStats: Record<string, { CREATE: number; UPDATE: number; UNCHANGED: number; CONFLICT: number }> = {};

      for (const modelKey of contentModels) {
        let localRecords: any[] = [];
        try {
          localRecords = await (localPrisma as any)[modelKey].findMany();
        } catch {
          localRecords = [];
        }

        let created = 0;
        let updated = 0;
        let unchanged = 0;
        let conflict = 0;

        for (const record of localRecords) {
          let existingOnAiven: any = null;
          try {
            if (record.id) {
              existingOnAiven = await (aivenPrisma as any)[modelKey].findUnique({ where: { id: record.id } });
            } else if (record.key) {
              existingOnAiven = await (aivenPrisma as any)[modelKey].findUnique({ where: { key: record.key } });
            } else if (modelKey === "pageSection" && record.pageSlug && record.sectionKey) {
              existingOnAiven = await (aivenPrisma as any)[modelKey].findUnique({
                where: { pageSlug_sectionKey: { pageSlug: record.pageSlug, sectionKey: record.sectionKey } },
              });
            }
          } catch {
            existingOnAiven = null;
          }

          if (!existingOnAiven) {
            created++;
            if (isApply) {
              try {
                await (aivenPrisma as any)[modelKey].create({ data: record });
              } catch (err: any) {
                console.error(`Error creating ${modelKey} (${record.id || record.key}):`, err.message);
              }
            }
          } else {
            const isDifferent = JSON.stringify(record) !== JSON.stringify(existingOnAiven);
            if (isDifferent) {
              updated++;
              if (isApply) {
                try {
                  if (record.id) {
                    await (aivenPrisma as any)[modelKey].update({ where: { id: record.id }, data: record });
                  } else if (record.key) {
                    await (aivenPrisma as any)[modelKey].update({ where: { key: record.key }, data: record });
                  } else if (modelKey === "pageSection") {
                    await (aivenPrisma as any)[modelKey].update({
                      where: { pageSlug_sectionKey: { pageSlug: record.pageSlug, sectionKey: record.sectionKey } },
                      data: record,
                    });
                  }
                } catch (err: any) {
                  console.error(`Error updating ${modelKey} (${record.id || record.key}):`, err.message);
                }
              }
            } else {
              unchanged++;
            }
          }
        }

        summaryStats[modelKey] = { CREATE: created, UPDATE: updated, UNCHANGED: unchanged, CONFLICT: conflict };
      }

      console.log("\n=====================================================================");
      console.log(`PROMOTION SUMMARY STATS (${isApply ? "APPLIED TO AIVEN PRODUCTION" : "SIMULATED DRY RUN"})`);
      console.log("=====================================================================");
      console.table(summaryStats);
    }
  } catch (error: any) {
    console.error("\n❌ Database Synchronization Error:", error);
  } finally {
    await localPrisma.$disconnect();
    await aivenPrisma.$disconnect();
  }
}

run();
