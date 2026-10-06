import { prisma } from "../src/server/db/client";

function getStatus(translations: any, loc: string): { exists: boolean; status: string } {
  if (!translations || typeof translations !== "object") {
    return { exists: false, status: "MISSING" };
  }
  const entry = translations[loc];
  if (!entry || typeof entry !== "object") {
    return { exists: false, status: "MISSING" };
  }
  const status = entry.status || entry._status || "DRAFT";
  return { exists: true, status };
}

async function auditProductionTranslations() {
  console.log("=================================================");
  console.log("   PRODUCTION TRANSLATION PARITY AUDIT (AIVEN)");
  console.log("=================================================\n");

  // 1. PAGE SECTIONS
  console.log("--- 1. PAGE SECTIONS ---");
  const sections = await prisma.pageSection.findMany({ orderBy: { pageSlug: "asc" } });
  sections.forEach((sec) => {
    const hi = getStatus(sec.translations, "hi");
    const fr = getStatus(sec.translations, "fr");
    console.log(
      `  [${sec.pageSlug.padEnd(6)}] ${sec.sectionKey.padEnd(20)} | EN: YES | HI: ${hi.status.padEnd(10)} | FR: ${fr.status.padEnd(10)}`
    );
  });

  // 2. LEADERSHIP MEMBERS
  console.log("\n--- 2. LEADERSHIP MEMBERS ---");
  const leaders = await prisma.leadershipMember.findMany({ orderBy: { sortOrder: "asc" } });
  leaders.forEach((l) => {
    const hi = getStatus(l.translations, "hi");
    const fr = getStatus(l.translations, "fr");
    console.log(
      `  [Leader] ${l.name.padEnd(25)} | EN: YES | HI: ${hi.status.padEnd(10)} | FR: ${fr.status.padEnd(10)}`
    );
  });

  // 3. RECOGNITIONS
  console.log("\n--- 3. RECOGNITIONS ---");
  const recognitions = await prisma.recognition.findMany({ orderBy: { sortOrder: "asc" } });
  recognitions.forEach((r) => {
    const hi = getStatus(r.translations, "hi");
    const fr = getStatus(r.translations, "fr");
    console.log(
      `  [Recognition] ${r.name.padEnd(22)} | EN: YES | HI: ${hi.status.padEnd(10)} | FR: ${fr.status.padEnd(10)}`
    );
  });

  // 4. AWARD RANKINGS
  console.log("\n--- 4. AWARD RANKINGS ---");
  const awards = await prisma.awardRanking.findMany({ orderBy: { sortOrder: "asc" } });
  awards.forEach((a) => {
    const hi = getStatus(a.translations, "hi");
    const fr = getStatus(a.translations, "fr");
    console.log(
      `  [Award] ${(a.title || a.id).padEnd(25)} | EN: YES | HI: ${hi.status.padEnd(10)} | FR: ${fr.status.padEnd(10)}`
    );
  });

  // 5. GOVERNANCE DOCUMENTS
  console.log("\n--- 5. GOVERNANCE DOCUMENTS ---");
  const govDocs = await prisma.governanceDocument.findMany({ orderBy: { sortOrder: "asc" } });
  govDocs.forEach((g) => {
    const hi = getStatus(g.translations, "hi");
    const fr = getStatus(g.translations, "fr");
    console.log(
      `  [GovDoc] ${g.title.padEnd(25)} | EN: YES | HI: ${hi.status.padEnd(10)} | FR: ${fr.status.padEnd(10)}`
    );
  });

  // 6. RECRUITERS
  console.log("\n--- 6. RECRUITERS ---");
  const recruiters = await prisma.recruiter.findMany({ orderBy: { sortOrder: "asc" }, take: 10 });
  recruiters.forEach((rc) => {
    const hi = getStatus(rc.translations, "hi");
    const fr = getStatus(rc.translations, "fr");
    console.log(
      `  [Recruiter] ${rc.name.padEnd(22)} | EN: YES | HI: ${hi.status.padEnd(10)} | FR: ${fr.status.padEnd(10)}`
    );
  });

  // 7. INDUSTRY PARTNERS
  console.log("\n--- 7. INDUSTRY PARTNERS ---");
  const partners = await prisma.industryPartner.findMany({ orderBy: { sortOrder: "asc" } });
  partners.forEach((ip) => {
    const hi = getStatus(ip.translations, "hi");
    const fr = getStatus(ip.translations, "fr");
    console.log(
      `  [Partner] ${ip.name.padEnd(22)} | EN: YES | HI: ${hi.status.padEnd(10)} | FR: ${fr.status.padEnd(10)}`
    );
  });

  // 8. TESTIMONIALS
  console.log("\n--- 8. TESTIMONIALS ---");
  const testimonials = await prisma.testimonial.findMany({ orderBy: { sortOrder: "asc" } });
  testimonials.forEach((t) => {
    const hi = getStatus(t.translations, "hi");
    const fr = getStatus(t.translations, "fr");
    console.log(
      `  [Testimonial] ${(t.name || t.id).padEnd(20)} | EN: YES | HI: ${hi.status.padEnd(10)} | FR: ${fr.status.padEnd(10)}`
    );
  });

  // 9. STAR PERFORMANCES
  console.log("\n--- 9. STAR PERFORMANCES ---");
  const stars = await prisma.starPerformance.findMany({ orderBy: { sortOrder: "asc" } });
  stars.forEach((sp) => {
    const hi = getStatus(sp.translations, "hi");
    const fr = getStatus(sp.translations, "fr");
    console.log(
      `  [StarPerf] ${(sp.name || sp.id).padEnd(22)} | EN: YES | HI: ${hi.status.padEnd(10)} | FR: ${fr.status.padEnd(10)}`
    );
  });

  console.log("\n=================================================");
  console.log("   TRANSLATION PARITY AUDIT COMPLETED");
  console.log("=================================================");
}

auditProductionTranslations()
  .catch((err) => {
    console.error("Audit failed:", err);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
