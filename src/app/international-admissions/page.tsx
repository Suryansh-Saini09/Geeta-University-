import React from "react";
import type { Metadata } from "next";

import InternationalHero from "@/components/international-admissions/InternationalHero";
import InternationalLogoMarquee from "@/components/international-admissions/InternationalLogoMarquee";
import UniverseOfGUSection from "@/components/international-admissions/UniverseOfGUSection";
import LeadershipSpotlightSection from "@/components/international-admissions/LeadershipSpotlightSection";
import InternationalTestimonials from "@/components/international-admissions/InternationalTestimonials";
import InternationalVideoSection from "@/components/international-admissions/InternationalVideoSection";
import InternationalProgramsAccordion from "@/components/international-admissions/InternationalProgramsAccordion";
import LegacyEcosystem from "@/components/about/LegacyEcosystem";

export const metadata: Metadata = {
  metadataBase: new URL("https://geetauniversity.edu.in"),
  title: "International Admissions 2026 | Geeta University",
  description:
    "Geeta University offers international students a quality education, recognised degrees, student support, and multicultural campus life in India",
  keywords: [
    "International Admissions",
    "Geeta University International",
    "Study in India",
    "Global University MoUs",
    "Geeta University Delhi NCR Panipat",
  ],
  openGraph: {
    title: "International Admissions 2026 | Geeta University",
    description:
      "Join a lively global community representing 31+ countries & 22 Indian states at Geeta University.",
    images: ["/international-admissions/hero.jpg"],
  },
};

export default function InternationalAdmissionsPage() {
  return (
    <main className="min-h-screen bg-[#F7F9FC] text-[#0A1F44]">
      {/* Hero Banner */}
      <InternationalHero />

      {/* Partner Flags / Logos Ticker Marquee */}
      <InternationalLogoMarquee />

      {/* Universe of GU Narrative & Enquiry Form */}
      <UniverseOfGUSection />

      {/* Leadership Spotlight */}
      <LeadershipSpotlightSection />

      {/* International Student Testimonials */}
      <InternationalTestimonials />

      {/* Campus Life & Virtual Campus Tour Videos */}
      <InternationalVideoSection />

      {/* Programs Offered Accordion Catalog */}
      <InternationalProgramsAccordion />

      {/* Legacy & Ecosystem */}
      <LegacyEcosystem />
    </main>
  );
}
