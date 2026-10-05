import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

function createPrismaClient() {
  const url = process.env.DATABASE_URL;
  const log =
    process.env.NODE_ENV === "development"
      ? (["query", "error", "warn"] as const)
      : (["error"] as const);

  if (!url) {
    return new PrismaClient({ log: [...log] });
  }

  const connection = new URL(url);
  const certificate = connection.searchParams.get("sslcert");
  const adapter = new PrismaMariaDb({
    host: connection.hostname,
    port: Number(connection.port || 3306),
    user: decodeURIComponent(connection.username),
    password: decodeURIComponent(connection.password),
    database: connection.pathname.slice(1),
    connectTimeout: 10000,
    ...(certificate && {
      ssl: {
        ca: readFileSync(resolve(process.cwd(), "prisma", certificate)),
        rejectUnauthorized: true,
      },
    }),
  });

  return new PrismaClient({ adapter, log: [...log] });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
