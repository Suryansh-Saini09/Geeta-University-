import React from "react";
import type { Metadata } from "next";
import FeeHero from "@/components/fee-and-scholarship/FeeHero";
import ScholarshipPredictorSection from "@/components/fee-and-scholarship/ScholarshipPredictorSection";
import TransportAndHostelPredictor from "@/components/fee-and-scholarship/TransportAndHostelPredictor";
import LegacyEcosystemSection from "@/components/fee-and-scholarship/LegacyEcosystemSection";
import FeeFaqAndCTA from "@/components/fee-and-scholarship/FeeFaqAndCTA";

export const metadata: Metadata = {
  title: "Fees & Scholarships | Affordable Quality Education at Geeta University",
  description:
    "Explore Geeta University fee structure and scholarship options offering financial support, merit-based benefits, hostel charges, and affordable quality education.",
  keywords: [
    "Fee Scholarship",
    "Geeta University Fees",
    "Scholarship Predictor",
    "Hostel Fee",
    "Transport Fee",
    "Geeta University Admissions 2026-27",
  ],
  alternates: {
    canonical: "https://geetauniversity.edu.in/fee-and-scholarship",
  },
};

export default function FeeAndScholarshipPage() {
  return (
    <div className="min-w-0 overflow-x-hidden bg-white text-[#0A1F44]">
      <FeeHero />
      <ScholarshipPredictorSection />
      <TransportAndHostelPredictor />
      <LegacyEcosystemSection />
      <FeeFaqAndCTA />
    </div>
  );
}
