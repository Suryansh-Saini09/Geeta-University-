"use client";

import HomeHeroSection from "@/components/home/HomeHeroSection";
import SmartCampusSection from "@/components/home/SmartCampusSection";
import HomeStatsSection from "@/components/home/HomeStatsSection";
import TopRecruitersSection from "@/components/home/TopRecruitersSection";
import VirtualCampusTourSection from "@/components/home/VirtualCampusTourSection";
import HomeProgramsSection from "@/components/home/HomeProgramsSection";
import AwardsRankingsSection from "@/components/about/AwardsRankingsSection";
import HomeFeedbackSection from "@/components/home/HomeFeedbackSection";
import HomeGlobalEducationSection from "@/components/home/HomeGlobalEducationSection";
import HomeUniverseSection from "@/components/home/HomeUniverseSection";
import HomeUpdatesSection from "@/components/home/HomeUpdatesSection";
import WhyJoinGeetaSection from "@/components/home/WhyJoinGeetaSection";
import ScholarshipsSection from "@/components/home/ScholarshipsSection";
import IndustryIntegrationSection from "@/components/home/IndustryIntegrationSection";
import StarPerformancesSection from "@/components/home/StarPerformancesSection";

export default function Home() {
  return (
    <main className="bg-white">
      <HomeHeroSection />

      <SmartCampusSection />

      <HomeStatsSection />

      <TopRecruitersSection />

      <VirtualCampusTourSection />

      <HomeProgramsSection />

      <AwardsRankingsSection />

      <HomeFeedbackSection />

      <HomeGlobalEducationSection />

      <HomeUniverseSection />

      <HomeUpdatesSection />

      <WhyJoinGeetaSection />

      <ScholarshipsSection />

      <IndustryIntegrationSection />

      <StarPerformancesSection />
    </main>
  );
}