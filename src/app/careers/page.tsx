import React from "react";
import type { Metadata } from "next";
import CareersHero from "@/components/careers/CareersHero";
import CareersForm from "@/components/careers/CareersForm";
import LegacyEcosystem from "@/components/about/LegacyEcosystem";

export const metadata: Metadata = {
  title: "Careers at Geeta University | Join Top Private University in Haryana",
  description:
    "Explore career opportunities at Geeta University. Join our team of educators, researchers, and professionals in a top private university in Haryana, Delhi NCR. Apply online now!",
  keywords: ["Careers", "Faculty jobs", "Geeta University Careers", "Jobs in Panipat", "Teaching Jobs Haryana"],
};

export default function CareersPage() {
  return (
    <div className="min-w-0 overflow-x-hidden bg-[#F8FAFC] text-[#0A1F44]">
      {/* Hero Banner Section */}
      <CareersHero />

      {/* Main Career Registration Form Section */}
      <CareersForm />

      {/* Legacy & Ecosystem Section */}
      <LegacyEcosystem
        id="legacy-ecosystem"
        contextText="Faculty and staff benefit from the integrated ecosystem of:"
      />
    </div>
  );
}
