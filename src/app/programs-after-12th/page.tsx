import React from "react";
import type { Metadata } from "next";
import ProgramsAfter12Hero from "@/components/programs-after-12th/ProgramsAfter12Hero";
import ProgramsListSection from "@/components/programs-after-12th/ProgramsListSection";
import FAQSection from "@/components/programs/FAQSection";
import LegacyEcosystem from "@/components/about/LegacyEcosystem";
import { ugFaqsData } from "@/data/programsAfter12";

export const metadata: Metadata = {
  title: "UG & Diploma Programs After 12th in Delhi NCR | Apply Now | Geeta University",
  description:
    "Undergraduate & diploma programs at GU, the best university in Haryana. Get 100% scholarships, global internships & high placement packages.",
  openGraph: {
    title: "UG & Diploma Programs After 12th in Delhi NCR | Apply Now | Geeta University",
    description:
      "Undergraduate & diploma programs at GU, the best university in Haryana. Get 100% scholarships, global internships & high placement packages.",
    url: "https://geetauniversity.edu.in/programs-after-12th",
    type: "website",
  },
};

export default function ProgramsAfter12Page() {
  return (
    <div className="min-w-0 overflow-x-hidden bg-white text-[#0A1F44]">
      {/* 1. Full-Width Banner & Introduction */}
      <ProgramsAfter12Hero />

      {/* 2. Programs by School & Fee/Scholarship Calculator */}
      <ProgramsListSection />

      {/* 3. Frequently Asked Questions (Canonical Shared FAQ Template) */}
      <section id="faqs" className="w-full scroll-mt-20">
        <FAQSection
          title="Frequently Asked Questions (FAQs)"
          subtitle="Everything you need to know about undergraduate admissions, eligibility criteria, scholarships, and academic pathways after 12th."
          faqs={ugFaqsData}
        />
      </section>

      {/* 4. Legacy & Ecosystem Section (Shared Component) */}
      <LegacyEcosystem
        id="legacy-ecosystem"
        contextText="UG students benefit from the integrated ecosystem of:"
      />
    </div>
  );
}
