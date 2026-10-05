import HomeHeroSection from "@/components/home/HomeHeroSection";
import SmartCampusSection from "@/components/home/SmartCampusSection";
import HomeStatsSection from "@/components/home/HomeStatsSection";
import HomeProgramsSection from "@/components/home/HomeProgramsSection";
import TopRecruitersSection from "@/components/home/TopRecruitersSection";
import VirtualCampusTourSection from "@/components/home/VirtualCampusTourSection";
import AwardsRankingsSection from "@/components/about/AwardsRankingsSection";
import HomeFeedbackSection from "@/components/home/HomeFeedbackSection";
import HomeGlobalEducationSection from "@/components/home/HomeGlobalEducationSection";
import HomeUniverseSection from "@/components/home/HomeUniverseSection";
import HomeUpdatesSection from "@/components/home/HomeUpdatesSection";
import WhyJoinGeetaSection from "@/components/home/WhyJoinGeetaSection";
import ScholarshipsSection from "@/components/home/ScholarshipsSection";
import IndustryIntegrationSection from "@/components/home/IndustryIntegrationSection";
import StarPerformancesSection from "@/components/home/StarPerformancesSection";
import { getHomepageEvents } from "@/server/services/events";

export const dynamic = "force-dynamic";

const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "Asia/Kolkata",
});

export default async function Home() {
  const events = await getHomepageEvents();
  const eventUpdates = events.map((event) => ({
    title: event.title,
    description: event.endsAt && dateFormatter.format(event.endsAt) !== dateFormatter.format(event.startsAt)
      ? `${dateFormatter.format(event.startsAt)} – ${dateFormatter.format(event.endsAt)}`
      : dateFormatter.format(event.startsAt),
    href: `/events/${event.slug}`,
  }));

  return (
    <main className="bg-white">
      <HomeHeroSection />

      <SmartCampusSection />

      <HomeStatsSection />

      <TopRecruitersSection />

      <HomeProgramsSection />

      <AwardsRankingsSection />

      <HomeFeedbackSection />

      <HomeGlobalEducationSection />

      <HomeUniverseSection />

      <HomeUpdatesSection eventUpdates={eventUpdates} />

      <WhyJoinGeetaSection />

      <ScholarshipsSection />

      <IndustryIntegrationSection />

      <VirtualCampusTourSection />
      
      <StarPerformancesSection />
    </main>
  );
}
