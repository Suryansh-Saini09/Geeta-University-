import React from "react";
import type { Metadata } from "next";

import TeachingHero from "@/components/teaching-learning-practices/TeachingHero";
import TeachingOverviewSection from "@/components/teaching-learning-practices/TeachingOverviewSection";
import TeachingPedagogyGrid from "@/components/teaching-learning-practices/TeachingPedagogyGrid";
import TeachingStats from "@/components/teaching-learning-practices/TeachingStats";
import IndustryEcosystemSection from "@/components/industry-integration/IndustryEcosystemSection";
import TeachingCTA from "@/components/teaching-learning-practices/TeachingCTA";
import { getPageSectionsAdmin } from "@/server/services/pages";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: new URL("https://geetauniversity.edu.in"),
  title: "Teaching & Learning Practices | Geeta University",
  description:
    "Discover innovative teaching and learning practices at Geeta University including active learning, flipped classrooms, concept mapping, and peer instruction.",
  keywords: [
    "Teaching Learning Practices",
    "Teaching learning practices at Geeta University",
    "Active Learning Haryana",
    "Flipped Classroom Pedagogy",
    "Peer Instruction",
    "XEDGE Geeta University",
    "Geeta University Panipat Delhi NCR",
  ],
  openGraph: {
    title: "Teaching & Learning Practices | Geeta University",
    description:
      "Transforming higher education with student-oriented learning, IIT/IIM faculty mentorship, and active learning frameworks.",
    images: ["/teaching-learning-practices/hero-f-block.webp"],
  },
};

export default async function TeachingLearningPracticesPage() {
  const { sections } = await getPageSectionsAdmin("teaching-learning-practices");
  const heroData = sections.hero?.body;
  const overviewData = sections.overview?.body;
  const pedagogyData = sections.pedagogy?.body;
  const statsData = sections.stats?.body;
  const ctaData = sections.cta?.body;

  return (
    <main className="min-h-screen bg-[#F7F9FC] text-[#0A1F44]">
      {/* Hero Section */}
      <TeachingHero data={heroData} />

      {/* Main Teaching Practice Overview */}
      <TeachingOverviewSection data={overviewData} />

      {/* Grid of 7 Pedagogical Methods */}
      <TeachingPedagogyGrid data={pedagogyData} />

      {/* Teaching Statistics */}
      {statsData && <TeachingStats data={statsData} />}

      {/* Group Ecosystem */}
      <IndustryEcosystemSection />

      {/* Call to Action */}
      <TeachingCTA data={ctaData} />
    </main>
  );
}

