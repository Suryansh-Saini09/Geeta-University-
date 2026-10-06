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

async function check() {
  const res = await prisma.$queryRawUnsafe("SHOW TABLES;");
  console.log("Raw SHOW TABLES result:", JSON.stringify(res, null, 2));
  await prisma.$disconnect();
}

check();
