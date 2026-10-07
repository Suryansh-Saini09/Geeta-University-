import { NextResponse } from "next/server";
import { prisma } from "@/server/db/client";

export const dynamic = "force-dynamic";

export async function GET() {
  const rawUrl = process.env.DATABASE_URL;

  const result: Record<string, any> = {
    databaseUrlPresent: Boolean(rawUrl),
    databaseHost: "missing",
    databasePort: "missing",
    databaseName: "missing",
    nodeEnv: process.env.NODE_ENV || "unknown",
    prismaInitialized: false,
    tcpConnection: "FAIL",
    prismaQuery: "FAIL",
    errorClassification: "NONE",
    errorMessage: null,
  };

  if (!rawUrl) {
    result.errorClassification = "Missing DATABASE_URL in environment";
    return NextResponse.json(result, { status: 500 });
  }

  try {
    const parsed = new URL(rawUrl);
    result.databaseHost = parsed.hostname;
    result.databasePort = parsed.port || "3306";
    result.databaseName = parsed.pathname.replace(/^\//, "");
  } catch (err) {
    result.databaseHost = "parse_error";
  }

  try {
    result.prismaInitialized = true;
    await prisma.$queryRawUnsafe("SELECT 1");
    result.tcpConnection = "PASS";

    await prisma.page.count();
    result.prismaQuery = "PASS";
  } catch (err: any) {
    const errMsg = err?.message ? String(err.message) : String(err);
    const sanitizedMsg = errMsg.replace(/:[^:@]+@/, ":****@");
    result.errorMessage = sanitizedMsg;

    if (errMsg.includes("ENOTFOUND") || errMsg.includes("getaddrinfo")) {
      result.errorClassification = "DNS error";
    } else if (errMsg.includes("CERT_") || errMsg.includes("TLS") || errMsg.includes("SSL") || errMsg.includes("self-signed certificate") || errMsg.includes("leaf signature")) {
      result.errorClassification = "TLS/certificate error";
    } else if (errMsg.includes("Access denied") || errMsg.includes("Authentication failed") || errMsg.includes("1045")) {
      result.errorClassification = "Authentication error";
    } else if (errMsg.includes("ECONNREFUSED")) {
      result.errorClassification = "Connection refused";
    } else if (errMsg.includes("ETIMEDOUT") || errMsg.includes("timeout")) {
      result.errorClassification = "Connection timeout";
    } else if (errMsg.includes("PrismaClientInitializationError") || errMsg.includes("Initialization")) {
      result.errorClassification = "Prisma initialization error";
    } else if (errMsg.includes("Table") && errMsg.includes("doesn't exist")) {
      result.errorClassification = "Schema mismatch";
    } else {
      result.errorClassification = "Other database runtime error";
    }
  }

  const statusCode = result.prismaQuery === "PASS" ? 200 : 500;
  return NextResponse.json(result, { status: statusCode });
}
