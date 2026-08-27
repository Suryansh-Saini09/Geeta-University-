import React from "react";
import type { Metadata } from "next";
import PostGraduateHero from "@/components/post-graduate-programs/PostGraduateHero";
import PostGraduateListSection from "@/components/post-graduate-programs/PostGraduateListSection";
import FAQSection from "@/components/programs/FAQSection";
import LegacyEcosystem from "@/components/about/LegacyEcosystem";
import { pgFaqsData } from "@/data/postGraduatePrograms";

export const metadata: Metadata = {
  title: "Post Graduate & Master's Degree Programs in Delhi NCR | Apply Now | Geeta University",
  description:
    "PG & master's degree programs in Delhi NCR at GU, the best university in Haryana. Apply now for admissions with top placements & scholarships.",
  openGraph: {
    title: "Post Graduate & Master's Degree Programs in Delhi NCR | Apply Now | Geeta University",
    description:
      "PG & master's degree programs in Delhi NCR at GU, the best university in Haryana. Apply now for admissions with top placements & scholarships.",
    url: "https://geetauniversity.edu.in/post-graduate-programs",
    type: "website",
  },
};

export default function PostGraduateProgramsPage() {
  return (
    <div className="min-w-0 overflow-x-hidden bg-white text-[#0A1F44]">
      {/* 1. Full-Width Banner & Introduction */}
      <PostGraduateHero />

      {/* 2. Programs by School & Fee/Scholarship Calculator */}
      <PostGraduateListSection />

      {/* 3. Frequently Asked Questions (Canonical Shared FAQ Template) */}
      <section id="faqs" className="w-full scroll-mt-20">
        <FAQSection
          title="Frequently Asked Questions (FAQs)"
          subtitle="Find answers to common questions about postgraduate admissions, eligibility, master's courses, and scholarship opportunities at Geeta University."
          faqs={pgFaqsData}
        />
      </section>

      {/* 4. Legacy & Ecosystem Section (Shared Component) */}
      <LegacyEcosystem
        id="legacy-ecosystem"
        contextText="PG students benefit from the integrated ecosystem of:"
      />
    </div>
  );
}
