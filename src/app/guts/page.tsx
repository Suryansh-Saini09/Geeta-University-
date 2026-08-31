import React from "react";
import type { Metadata } from "next";
import GutsHero from "@/components/guts/GutsHero";
import GutsScholarshipSlabs from "@/components/guts/GutsScholarshipSlabs";
import GutsSyllabusSection from "@/components/guts/GutsSyllabusSection";
import GutsAdmissionProcess from "@/components/guts/GutsAdmissionProcess";
import GutsProgramsApplicable from "@/components/guts/GutsProgramsApplicable";
import GutsVideoBanner from "@/components/guts/GutsVideoBanner";
import GutsVirtualCampus from "@/components/guts/GutsVirtualCampus";
import FAQSection from "@/components/programs/FAQSection";
import LegacyEcosystem from "@/components/about/LegacyEcosystem";
import { gutsFaqsData } from "@/data/gutsData";

export const metadata: Metadata = {
  title: "GUTS Scholarship Test 2026 | Get Up to 100% Scholarship | GU",
  description:
    "Want scholarships in Haryana? Apply for GUTS 2026 at Geeta University & get up to 100% scholarship for UG & PG courses with top placement.",
  keywords: [
    "GUTS",
    "GUTS - Geeta University Test Series",
    "Geeta University Test of Scholarship",
    "Scholarships in Haryana",
    "100% Scholarship Test",
    "Geeta University Admissions 2026",
  ],
  openGraph: {
    title: "GUTS Scholarship Test 2026 | Get Up to 100% Scholarship | GU",
    description:
      "Want scholarships in Haryana? Apply for GUTS 2026 at Geeta University & get up to 100% scholarship for UG & PG courses with top placement.",
    url: "https://geetauniversity.edu.in/guts",
    type: "website",
    images: [
      {
        url: "https://geetauniversity.edu.in/uploads/all/1912/Guts_banner.jpg",
        width: 1200,
        height: 630,
        alt: "GUTS - Geeta University Test of Scholarship",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GUTS Scholarship Test 2026 | Get Up to 100% Scholarship | GU",
    description:
      "Want scholarships in Haryana? Apply for GUTS 2026 at Geeta University & get up to 100% scholarship for UG & PG courses with top placement.",
    images: ["https://geetauniversity.edu.in/uploads/all/1912/Guts_banner.jpg"],
  },
  alternates: {
    canonical: "https://geetauniversity.edu.in/guts",
  },
};

export default function GutsPage() {
  return (
    <div className="min-w-0 overflow-x-hidden bg-white text-[#0A1F44]">
      {/* 1. Hero Banner, Benefits & Lead Enquiry Form */}
      <GutsHero />

      {/* 2. Scholarship Slabs & Exam Pattern */}
      <GutsScholarshipSlabs />

      {/* 3. Download Subject-Wise Syllabus (14 Subjects) */}
      <GutsSyllabusSection />

      {/* 4. Step-by-Step Admission Process & Exam Guidelines */}
      <GutsAdmissionProcess />

      {/* 5. Programs Applicable Under GUTS */}
      <GutsProgramsApplicable />

      {/* 6. GUTS Video Walkthrough Banner */}
      <GutsVideoBanner />

      {/* 7. Frequently Asked Questions (Unified Design) */}
      <section id="faqs" className="w-full scroll-mt-20">
        <FAQSection
          title="Frequently Asked Questions (FAQs)"
          subtitle="Find answers to common questions about GUTS eligibility, registration, examination mode, and scholarships."
          faqs={gutsFaqsData}
        />
      </section>

      {/* 8. Virtual Campus Tour Video */}
      <GutsVirtualCampus />

      {/* 9. Legacy & Ecosystem Section */}
      <LegacyEcosystem
        id="legacy-ecosystem"
        contextText="GUTS scholarship scholars benefit from the integrated ecosystem of:"
      />
    </div>
  );
}

