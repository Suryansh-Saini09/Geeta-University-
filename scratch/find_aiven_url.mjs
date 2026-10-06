import fs from "fs";

function checkEnvFile(filename) {
  if (!fs.existsSync(filename)) return;
  const content = fs.readFileSync(filename, "utf8");
  const lines = content.split("\n");
  for (const line of lines) {
    if (line.includes("aiven") || line.includes("aivencloud") || line.includes("DATABASE_URL")) {
      const match = line.match(/^([^=]+)=(.*)$/);
      if (match) {
        const key = match[1].trim();
        const val = match[2].trim();
        try {
          const url = new URL(val.replace(/^"/, "").replace(/"$/, ""));
          console.log(`[${filename}] Found ${key}: host=${url.hostname}, port=${url.port || 3306}, db=${url.pathname.slice(1)}, sslcert=${url.searchParams.get("sslcert")}`);
        } catch (e) {
          console.log(`[${filename}] Found ${key}: (not a valid URL string)`);
        }
      }
    }
  }
}

checkEnvFile(".env");
checkEnvFile(".env.local");
checkEnvFile(".env.production");
checkEnvFile(".env.staging");
