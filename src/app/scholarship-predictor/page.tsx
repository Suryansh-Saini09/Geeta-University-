import React from "react";
import type { Metadata } from "next";
import ScholarshipPredictorHero from "@/components/scholarship-predictor/ScholarshipPredictorHero";
import ScholarshipCalculator from "@/components/scholarship-predictor/ScholarshipCalculator";
import ScholarshipTypesOverview from "@/components/scholarship-predictor/ScholarshipTypesOverview";
import ScholarshipPredictorFAQ from "@/components/scholarship-predictor/ScholarshipPredictorFAQ";
import LegacyEcosystem from "@/components/about/LegacyEcosystem";

export const metadata: Metadata = {
  title: "Scholarship Predictor Form - Geeta University",
  description:
    "Use the scholarship predictor form to find financial aid opportunities, calculate tuition fee waivers, and estimate eligible scholarship amounts at Geeta University.",
  keywords: [
    "Scholarship Predictor",
    "Geeta University Scholarship",
    "GUTS Scholarship Calculator",
    "Tuition Fee Waiver",
    "Haryana Scholarship Predictor",
  ],
};

export default function ScholarshipPredictorPage() {
  return (
    <div className="min-w-0 overflow-x-hidden bg-[#F8FAFC] text-[#0A1F44]">
      {/* Hero Banner */}
      <ScholarshipPredictorHero />

      {/* Interactive Scholarship Calculator */}
      <ScholarshipCalculator />

      {/* Overview of Financial Aid Schemes */}
      <ScholarshipTypesOverview />

      {/* Legacy & Ecosystem */}
      <LegacyEcosystem
        id="legacy-ecosystem"
        contextText="Scholarship students benefit from the integrated ecosystem of:"
      />

      {/* FAQ Section */}
      <ScholarshipPredictorFAQ />
    </div>
  );
}
