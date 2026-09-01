import React from "react";
import type { Metadata } from "next";

import IndustryIntegrationHero from "@/components/industry-integration/IndustryIntegrationHero";
import IndustryImpactStats from "@/components/industry-integration/IndustryImpactStats";
import IndustryPartnersGrid from "@/components/industry-integration/IndustryPartnersGrid";
import IndustryPillarsSection from "@/components/industry-integration/IndustryPillarsSection";
import IndustryEcosystemSection from "@/components/industry-integration/IndustryEcosystemSection";
import IndustryIntegrationCTA from "@/components/industry-integration/IndustryIntegrationCTA";

export const metadata: Metadata = {
  metadataBase: new URL("https://geetauniversity.edu.in"),
  title: "Industry Integration | Geeta University",
  description:
    "Discover how Geeta University integrates with leading industries, tech hubs, and agricultural research societies for student success and corporate readiness.",
  keywords: [
    "Industry Integration",
    "Geeta University Corporate Tie-ups",
    "iNurture Geeta University",
    "Cellstrat Hub AI",
    "ImaginXP Full Stack",
    "AgriTech Research Panipat",
    "Geeta Finishing School",
    "Geeta Technical Hub",
  ],
  openGraph: {
    title: "Industry Integration | Geeta University",
    description:
      "Explore industry-integrated degree pathways, corporate certifications, startup seed funding, and live projects at Geeta University.",
    images: ["/industry-integration/hero-building.webp"],
  },
};

export default function IndustryIntegrationPage() {
  return (
    <main className="min-h-screen bg-[#F7F9FC] text-[#0A1F44]">
      {/* Hero Section */}
      <IndustryIntegrationHero />

      {/* Impact Stats Banner */}
      <IndustryImpactStats />

      {/* Main Partners & Programs Grid */}
      <IndustryPartnersGrid />

      {/* Four Pillars of Integration */}
      <IndustryPillarsSection />

      {/* Legacy & Ecosystem Section */}
      <IndustryEcosystemSection />

      {/* Call to Action */}
      <IndustryIntegrationCTA />
    </main>
  );
}
