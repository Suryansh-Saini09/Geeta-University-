import { prisma } from "../src/server/db/client";
import { getPublishedHomePage, getPublishedAboutPage } from "../src/server/services/pages";

async function main() {
  console.log("=== STEP 4 & 5: RAW DATABASE COUNTS ===");

  try {
    const pageSections = await prisma.pageSection.findMany();
    console.log(`PageSection Total Count: ${pageSections.length}`);
    const homeSections = pageSections.filter(s => s.pageSlug === "home");
    const aboutSections = pageSections.filter(s => s.pageSlug === "about");
    console.log(` - Home PageSections: ${homeSections.length} (keys: ${homeSections.map(s => s.sectionKey).join(", ")})`);
    console.log(` - About PageSections: ${aboutSections.length} (keys: ${aboutSections.map(s => s.sectionKey).join(", ")})`);

    const recruiters = await prisma.recruiter.findMany();
    console.log(`Recruiters Total: ${recruiters.length} (published: ${recruiters.filter(r => r.status === "PUBLISHED").length})`);

    const awards = await prisma.awardRanking.findMany();
    console.log(`Awards Total: ${awards.length} (published: ${awards.filter(a => a.status === "PUBLISHED").length})`);

    const testimonials = await prisma.testimonial.findMany();
    console.log(`Testimonials Total: ${testimonials.length} (published: ${testimonials.filter(t => t.status === "PUBLISHED").length})`);

    const industryPartners = await prisma.industryPartner.findMany();
    console.log(`IndustryPartners Total: ${industryPartners.length} (published: ${industryPartners.filter(p => p.status === "PUBLISHED").length})`);

    const starPerformances = await prisma.starPerformance.findMany();
    console.log(`StarPerformances Total: ${starPerformances.length} (published: ${starPerformances.filter(s => s.status === "PUBLISHED").length})`);

    const recognitions = await prisma.recognition.findMany();
    console.log(`Recognitions Total: ${recognitions.length} (published: ${recognitions.filter(r => r.status === "PUBLISHED").length})`);

    const leadership = await prisma.leadershipMember.findMany();
    console.log(`LeadershipMember Total: ${leadership.length} (published: ${leadership.filter(l => l.status === "PUBLISHED").length})`);

    const governance = await prisma.governanceDocument.findMany();
    console.log(`GovernanceDocument Total: ${governance.length} (published: ${governance.filter(g => g.status === "PUBLISHED").length})`);

    const pages = await prisma.page.findMany();
    console.log(`Pages Total: ${pages.length} (slugs: ${pages.map(p => p.slug).join(", ")})`);

    console.log("\n=== STEP 6: TESTING getPublishedHomePage IN ALL LOCALES ===");
    for (const locale of ["en", "hi", "fr"]) {
      const hp = await getPublishedHomePage(locale);
      console.log(`\n--- LOCALE: ${locale.toUpperCase()} ---`);
      console.log(`hero: ${hp.hero ? "EXISTS" : "NULL"}`);
      console.log(`smartCampus: ${hp.smartCampus ? "EXISTS" : "NULL"}`);
      console.log(`stats: ${hp.stats ? "EXISTS" : "NULL"}`);
      console.log(`programsOffered: ${hp.programsOffered ? "EXISTS" : "NULL"}`);
      console.log(`recruiters count: ${hp.recruiters ? hp.recruiters.length : "NULL"}`);
      console.log(`awards count: ${hp.awards ? hp.awards.length : "NULL"}`);
      console.log(`testimonials count: ${hp.testimonials ? hp.testimonials.length : "NULL"}`);
      console.log(`globalEducation: ${hp.globalEducation ? "EXISTS" : "NULL"}`);
      console.log(`universe: ${hp.universe ? "EXISTS" : "NULL"}`);
      console.log(`updates: ${hp.updates ? "EXISTS" : "NULL"}`);
      console.log(`whyJoinGeeta: ${hp.whyJoinGeeta ? "EXISTS" : "NULL"}`);
      console.log(`scholarships: ${hp.scholarships ? "EXISTS" : "NULL"}`);
      console.log(`industryPartners count: ${hp.industryPartners ? hp.industryPartners.length : "NULL"}`);
      console.log(`virtualTour: ${hp.virtualTour ? "EXISTS" : "NULL"}`);
      console.log(`starPerformances count: ${hp.starPerformances ? hp.starPerformances.length : "NULL"}`);
    }

    console.log("\n=== STEP 6: TESTING getPublishedAboutPage IN ALL LOCALES ===");
    for (const locale of ["en", "hi", "fr"]) {
      const ap = await getPublishedAboutPage(locale);
      console.log(`\n--- LOCALE: ${locale.toUpperCase()} ---`);
      console.log(`hero: ${ap.hero ? "EXISTS" : "NULL"}`);
      console.log(`visionMission: ${ap.visionMission ? "EXISTS" : "NULL"}`);
      console.log(`impactRankings: ${ap.impactRankings ? "EXISTS" : "NULL"}`);
      console.log(`legacy: ${ap.legacy ? "EXISTS" : "NULL"}`);
      console.log(`legacyEcosystem: ${ap.legacyEcosystem ? "EXISTS" : "NULL"}`);
      console.log(`recognitions count: ${ap.recognitions ? ap.recognitions.length : "NULL"}`);
      console.log(`awards count: ${ap.awards ? ap.awards.length : "NULL"}`);
      console.log(`leadership count: ${ap.leadership ? ap.leadership.length : "NULL"}`);
      console.log(`governance count: ${ap.governance ? ap.governance.length : "NULL"}`);
      console.log(`policies count: ${ap.policies ? ap.policies.length : "NULL"}`);
    }

  } catch (err) {
    console.error("DIAGNOSTIC ERROR:", err);
  } finally {
    await prisma.$disconnect();
  }
}

main();
