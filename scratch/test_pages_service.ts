import { getPublishedHomePage, getPublishedAboutPage } from "../src/server/services/pages";

async function main() {
  console.log("=== TESTING PAGES SERVICE WITH LOCAL DB ===");
  const homeData = await getPublishedHomePage("en");
  console.log("Home Sections loaded:", {
    hero: !!homeData.hero,
    smartCampus: !!homeData.smartCampus,
    stats: !!homeData.stats,
    programsOffered: !!homeData.programsOffered,
    recruitersCount: homeData.recruiters.length,
    awardsCount: homeData.awards.length,
    testimonialsCount: homeData.testimonials.length,
    industryPartnersCount: homeData.industryPartners.length,
    starPerformancesCount: homeData.starPerformances.length,
  });

  const aboutData = await getPublishedAboutPage("en");
  console.log("About Sections loaded:", {
    hero: !!aboutData.hero,
    visionMission: !!aboutData.visionMission,
    recognitionsCount: aboutData.recognitions.length,
    awardsCount: aboutData.awards.length,
    leadershipCount: aboutData.leadership.length,
    governanceCount: aboutData.governance.length,
    policiesCount: aboutData.policies.length,
  });
}

main().catch(console.error);
