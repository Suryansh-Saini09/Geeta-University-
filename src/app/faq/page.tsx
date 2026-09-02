import React from "react";
import type { Metadata } from "next";

import FAQClientWrapper from "./FAQClientWrapper";
import IndustryEcosystemSection from "@/components/industry-integration/IndustryEcosystemSection";
import FAQContactBanner from "@/components/faq/FAQContactBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://geetauniversity.edu.in"),
  title: "Geeta University FAQs | Admission, Courses & Programs",
  description:
    "Find answers to common questions about admissions, courses, scholarships, campus life, hostels, fees, and placements at Geeta University, Haryana & Delhi NCR.",
  keywords: [
    "FAQ",
    "Geeta University FAQ",
    "Geeta University Admissions",
    "Geeta University Fees",
    "Geeta University Scholarships",
    "Geeta University Placements",
    "Geeta University Hostel Transport",
  ],
  openGraph: {
    title: "Geeta University FAQs | Admission, Courses & Programs",
    description:
      "Find answers to common questions about admissions, courses, scholarships, campus life, and academics at Geeta University.",
    images: ["/faq/hero-faq.webp"],
  },
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#F7F9FC] text-[#0A1F44]">
      {/* Interactive FAQ Search & Accordion Section */}
      <FAQClientWrapper />

      {/* Group Legacy & Ecosystem */}
      <IndustryEcosystemSection />

      {/* Contact & Support Banner */}
      <FAQContactBanner />
    </main>
  );
}
