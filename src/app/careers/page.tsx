import React from "react";
import type { Metadata } from "next";
import CareersHero from "@/components/careers/CareersHero";
import CareersBenefits from "@/components/careers/CareersBenefits";
import CareersForm from "@/components/careers/CareersForm";
import CareersFAQ from "@/components/careers/CareersFAQ";
import LegacyEcosystem from "@/components/about/LegacyEcosystem";
import { getPageSectionsAdmin } from "@/server/services/pages";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Careers at Geeta University | Join Top Private University in Haryana",
  description:
    "Explore career opportunities at Geeta University. Join our team of educators, researchers, and professionals in a top private university in Haryana, Delhi NCR. Apply online now!",
  keywords: ["Careers", "Faculty jobs", "Geeta University Careers", "Jobs in Panipat", "Teaching Jobs Haryana"],
};

export default async function CareersPage() {
  const { sections } = await getPageSectionsAdmin("careers");

  const heroSec = sections.hero?.body;
  const benefitsSec = sections.benefits?.body;
  const faqsSec = sections.faqs?.body;
  const formSec = sections.form_config?.body;


  return (
    <div className="min-w-0 overflow-x-hidden bg-[#F8FAFC] text-[#0A1F44]">
      {/* Hero Banner Section */}
      <CareersHero data={heroSec} />

      {/* Employee Benefits & Culture Section */}
      <CareersBenefits data={benefitsSec} />

      {/* Main Career Registration Form Section */}
      <CareersForm data={formSec} />

      {/* FAQ Accordion Section */}
      <CareersFAQ data={faqsSec} />

      {/* Legacy & Ecosystem Section */}
      <LegacyEcosystem
        id="legacy-ecosystem"
        contextText="Faculty and staff benefit from the integrated ecosystem of:"
      />
    </div>
  );
}
