import React from "react";
import type { Metadata } from "next";

import ContactHero from "@/components/contact-us/ContactHero";
import ContactMainCards from "@/components/contact-us/ContactMainCards";
import ContactOfficesGrid from "@/components/contact-us/ContactOfficesGrid";
import ContactMapSection from "@/components/contact-us/ContactMapSection";
import IndustryEcosystemSection from "@/components/industry-integration/IndustryEcosystemSection";
import { getPageSectionsAdmin } from "@/server/services/pages";
import { getContactSettings } from "@/server/services/siteSettings";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: new URL("https://geetauniversity.edu.in"),
  title: "Contact Us - Best Private University in Haryana Delhi NCR - Geeta University",
  description:
    "Contact Geeta University main campus in Panipat or visit any of our regional admission offices across Sonipat, Shamli, Karnal, Delhi NCR, Guwahati, and Kurukshetra.",
  keywords: [
    "Contact Us",
    "Geeta University contact",
    "Geeta University admission offices",
    "Geeta University Panipat address",
    "Geeta University phone number",
    "Geeta University Delhi office",
  ],
  openGraph: {
    title: "Contact Us - Best Private University in Haryana Delhi NCR - Geeta University",
    description:
      "Contact Geeta University main campus in Panipat or visit our regional admission offices.",
    images: ["/contact-us/hero-bg.webp"],
  },
};

export default async function ContactUsPage() {
  const [pageData, contact] = await Promise.all([
    getPageSectionsAdmin("contact-us"),
    getContactSettings(),
  ]);

  const sections = pageData.sections;
  const heroSec = sections.hero?.body;
  const mainCardsSec = sections.main_info?.body || contact;
  const officesSec = sections.offices?.body;
  const mapSec = sections.map?.body;


  return (
    <main className="min-h-screen bg-[#F7F9FC] text-[#0A1F44]">
      {/* Hero Section */}
      <ContactHero data={heroSec} />

      {/* Main Info Cards (Location, Phone, Email) */}
      <ContactMainCards contact={mainCardsSec} />

      {/* Regional Admission Offices Grid */}
      <ContactOfficesGrid data={officesSec} />

      {/* Google Maps Location */}
      <ContactMapSection data={mapSec} />

      {/* Legacy & Ecosystem Section */}
      <IndustryEcosystemSection />
    </main>
  );
}
