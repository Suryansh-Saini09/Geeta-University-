import fs from "fs";

function parseEnv(filename) {
  if (!fs.existsSync(filename)) return null;
  const content = fs.readFileSync(filename, "utf8");
  const match = content.match(/DATABASE_URL="?([^"\n]+)"?/);
  if (!match) return null;
  try {
    const url = new URL(match[1]);
    return {
      filename,
      host: url.hostname,
      port: url.port || "3306",
      database: url.pathname.slice(1),
      sslcert: url.searchParams.get("sslcert"),
    };
  } catch (err) {
    return { filename, error: err.message };
  }
}

console.log("Environment Configurations (Masked):");
console.log(".env:", parseEnv(".env"));
console.log(".env.local:", parseEnv(".env.local"));
console.log(".env.example:", parseEnv(".env.example"));
