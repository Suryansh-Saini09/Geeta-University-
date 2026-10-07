import { PrismaClient } from "@prisma/client";

async function diagnose() {
  const rawUrl = process.env.DATABASE_URL;

  console.log("DATABASE CONFIGURATION");
  console.log("----------------------");

  if (!rawUrl) {
    console.log("Protocol: missing");
    console.log("Hostname: missing");
    console.log("Port: missing");
    console.log("Database: missing");
    console.log(`Environment: ${process.env.NODE_ENV || "development"}`);

    console.log("\nCONNECTIVITY");
    console.log("------------");
    console.log("TCP/DB connection: FAIL");
    console.log("Prisma query: FAIL");

    console.log("\nERROR CLASSIFICATION");
    console.log("--------------------");
    console.log("Missing DATABASE_URL");
    process.exit(1);
  }

  let protocol = "";
  let hostname = "";
  let port = "";
  let database = "";

  try {
    const parsed = new URL(rawUrl);
    protocol = parsed.protocol.replace(":", "");
    hostname = parsed.hostname;
    port = parsed.port || "3306";
    database = parsed.pathname.replace(/^\//, "");
  } catch (err) {
    console.log("Parsing DATABASE_URL failed");
  }

  console.log(`Protocol: ${protocol}`);
  console.log(`Hostname: ${hostname}`);
  console.log(`Port: ${port}`);
  console.log(`Database: ${database}`);
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);

  let tcpPass = false;
  let prismaPass = false;
  let connectionError: Error | null = null;
  let errorClassification = "";

  const prisma = new PrismaClient({
    log: ["error"],
  });

  try {
    await prisma.$queryRawUnsafe("SELECT 1");
    tcpPass = true;
  } catch (err: any) {
    connectionError = err;
  }

  if (tcpPass) {
    try {
      await prisma.page.count();
      prismaPass = true;
    } catch (err: any) {
      if (!connectionError) {
        connectionError = err;
      }
    }
  }

  console.log("\nCONNECTIVITY");
  console.log("------------");
  console.log(`TCP/DB connection: ${tcpPass ? "PASS" : "FAIL"}`);
  console.log(`Prisma query: ${prismaPass ? "PASS" : "FAIL"}`);

  console.log("\nERROR CLASSIFICATION");
  console.log("--------------------");

  if (tcpPass && prismaPass) {
    console.log("NONE");
  } else {
    const errMsg = connectionError ? connectionError.message || String(connectionError) : "Unknown error";

    if (errMsg.includes("ENOTFOUND") || errMsg.includes("getaddrinfo")) {
      errorClassification = "DNS error";
    } else if (errMsg.includes("CERT_") || errMsg.includes("TLS") || errMsg.includes("SSL") || errMsg.includes("self-signed certificate")) {
      errorClassification = "TLS/certificate error";
    } else if (errMsg.includes("Access denied") || errMsg.includes("Authentication failed") || errMsg.includes("1045")) {
      errorClassification = "Authentication error";
    } else if (errMsg.includes("ECONNREFUSED")) {
      errorClassification = "Connection refused";
    } else if (errMsg.includes("ETIMEDOUT") || errMsg.includes("timeout")) {
      errorClassification = "Connection timeout";
    } else if (errMsg.includes("PrismaClientInitializationError") || errMsg.includes("Initialization")) {
      errorClassification = "Prisma initialization error";
    } else if (errMsg.includes("Table") && errMsg.includes("doesn't exist")) {
      errorClassification = "Schema mismatch";
    } else {
      errorClassification = "Other";
    }

    const sanitizedMsg = errMsg.replace(/:[^:@]+@/, ":****@");

    console.log(errorClassification);
    console.log(`Details: ${sanitizedMsg}`);
  }

  await prisma.$disconnect();

  if (!tcpPass || !prismaPass) {
    process.exit(1);
  }
}

diagnose().catch((err) => {
  console.error("Unhandled diagnostic exception:", err.message || err);
  process.exit(1);
});
