import React from "react";
import type { Metadata } from "next";
import CareersHero from "@/components/careers/CareersHero";
import CareersWhyUs from "@/components/careers/CareersWhyUs";
import CareersForm from "@/components/careers/CareersForm";
import CareersFAQ from "@/components/careers/CareersFAQ";
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

      {/* Why Join Us / Benefits Section */}
      <CareersWhyUs />

      {/* Main Career Registration Form Section */}
      <CareersForm />

      {/* Legacy & Ecosystem Section */}
      <LegacyEcosystem
        id="legacy-ecosystem"
        contextText="Faculty and staff benefit from the integrated ecosystem of:"
      />

      {/* Frequently Asked Questions */}
      <CareersFAQ />
    </div>
  );
}
