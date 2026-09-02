import React from "react";
import type { Metadata } from "next";

import ContactHero from "@/components/contact-us/ContactHero";
import ContactMainCards from "@/components/contact-us/ContactMainCards";
import ContactFormSection from "@/components/contact-us/ContactFormSection";
import ContactOfficesGrid from "@/components/contact-us/ContactOfficesGrid";
import ContactMapSection from "@/components/contact-us/ContactMapSection";
import IndustryEcosystemSection from "@/components/industry-integration/IndustryEcosystemSection";

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

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-[#F7F9FC] text-[#0A1F44]">
      {/* Hero Section */}
      <ContactHero />

      {/* Main Info Cards (Location, Phone, Email) */}
      <ContactMainCards />

      {/* Interactive Enquiry / Contact Form */}
      <ContactFormSection />

      {/* Regional Admission Offices Grid */}
      <ContactOfficesGrid />

      {/* Google Maps Location */}
      <ContactMapSection />

      {/* Legacy & Ecosystem Section */}
      <IndustryEcosystemSection />
    </main>
  );
}
