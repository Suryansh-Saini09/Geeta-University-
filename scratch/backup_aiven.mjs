import fs from "fs";
import { resolve } from "path";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "@prisma/client";

function getAivenUrl() {
  const envMain = fs.readFileSync(".env", "utf8");
  for (const line of envMain.split("\n")) {
    if (line.startsWith("#")) continue;
    if (line.includes("DATABASE_URL") && line.includes("aivencloud")) {
      const match = line.match(/DATABASE_URL="?([^"\n]+)"?/);
      if (match) return match[1];
    }
  }
  throw new Error("Aiven DATABASE_URL not found");
}

const urlString = getAivenUrl();
const connection = new URL(urlString);
const certificate = connection.searchParams.get("sslcert");

const adapter = new PrismaMariaDb({
  host: connection.hostname,
  port: Number(connection.port || 3306),
  user: decodeURIComponent(connection.username),
  password: decodeURIComponent(connection.password),
  database: connection.pathname.slice(1),
  connectTimeout: 15000,
  ...(certificate && {
    ssl: {
      ca: fs.readFileSync(resolve(process.cwd(), "prisma", certificate)),
      rejectUnauthorized: true,
    },
  }),
});

const prisma = new PrismaClient({ adapter, log: ["error"] });
const dumpFile = "scratch/aiven_prod_backup_before_phase5.sql";

function parseTableName(row) {
  const val = Object.values(row)[0];
  if (typeof val === "string") return val;
  if (Buffer.isBuffer(val)) return val.toString("utf8");
  if (typeof val === "object" && val !== null) {
    return String.fromCharCode(...Object.values(val));
  }
  return String(val);
}

async function backup() {
  console.log(`Starting Node-native Aiven DB Backup to ${dumpFile}...`);
  const tablesRaw = await prisma.$queryRawUnsafe("SHOW TABLES;");
  const tables = tablesRaw.map(parseTableName);

  let dumpContent = `-- AIVEN PRODUCTION DB BACKUP\n-- TIMESTAMP: ${new Date().toISOString()}\n-- DATABASE: ${connection.pathname.slice(1)}\n\n`;

  for (const table of tables) {
    console.log(`Backing up table: ${table}...`);
    try {
      const createTableRaw = await prisma.$queryRawUnsafe(`SHOW CREATE TABLE \`${table}\`;`);
      const createSql = createTableRaw[0]["Create Table"];
      dumpContent += `DROP TABLE IF EXISTS \`${table}\`;\n${createSql};\n\n`;

      const rows = await prisma.$queryRawUnsafe(`SELECT * FROM \`${table}\`;`);
      for (const row of rows) {
        const keys = Object.keys(row).map((k) => `\`${k}\``).join(", ");
        const values = Object.values(row).map((v) => {
          if (v === null || v === undefined) return "NULL";
          if (typeof v === "number" || typeof v === "boolean") return String(v);
          if (v instanceof Date) return `'${v.toISOString().slice(0, 19).replace("T", " ")}'`;
          if (typeof v === "object") return `'${JSON.stringify(v).replace(/'/g, "\\'")}'`;
          return `'${String(v).replace(/'/g, "\\'")}'`;
        }).join(", ");
        dumpContent += `INSERT INTO \`${table}\` (${keys}) VALUES (${values});\n`;
      }
      dumpContent += "\n";
    } catch (err) {
      console.error(`Failed to dump table ${table}:`, err.message);
    }
  }

  fs.writeFileSync(dumpFile, dumpContent, "utf8");
  const stat = fs.statSync(dumpFile);
  console.log(`\n=====================================================================`);
  console.log(`BACKUP CREATED = YES`);
  console.log(`Backup File: ${dumpFile} | Size: ${(stat.size / 1024).toFixed(2)} KB`);
  console.log(`=====================================================================\n`);
  await prisma.$disconnect();
}

backup();
