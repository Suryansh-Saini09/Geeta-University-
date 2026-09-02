import React from "react";
import type { Metadata } from "next";

import LibraryHero from "@/components/library/LibraryHero";
import LibraryStatCards from "@/components/library/LibraryStatCards";
import LibraryOverview from "@/components/library/LibraryOverview";
import LibraryDigitalResources from "@/components/library/LibraryDigitalResources";
import LibraryInfoAndPolicy from "@/components/library/LibraryInfoAndPolicy";
import LibraryContactLibrarian from "@/components/library/LibraryContactLibrarian";
import LibraryFaqAccordion from "@/components/library/LibraryFaqAccordion";

export const metadata: Metadata = {
  metadataBase: new URL("https://geetauniversity.edu.in"),
  title: "Central Library & Knowledge Resource Center - Geeta University",
  description:
    "Explore Geeta University Central Library. Access over 25,000 physical books, 1,00,000+ e-books, and 1,000+ subscribed IEEE, ASME, and ELSEVIER e-journals.",
  keywords: [
    "Central Library Geeta University",
    "GU Library Panipat",
    "Knowledge Resource Center",
    "E-Library IEEE ASME",
    "NDLI Geeta University",
    "Library Timings Naultha",
  ],
  openGraph: {
    title: "Central Library & Knowledge Resource Center - Geeta University",
    description:
      "25,000+ physical books, 1,00,000+ e-books, and 1,000+ global e-journals open 360 days a year.",
    images: ["/library/hero-bg.webp"],
  },
};

export default function LibraryPage() {
  return (
    <main className="min-h-screen bg-[#F7F9FC] text-[#0A1F44]">
      {/* Hero Banner */}
      <LibraryHero />

      {/* Resource Metrics Cards (Physical Books, E-Books, E-Journals) */}
      <LibraryStatCards />

      {/* Main Overview & History Section */}
      <LibraryOverview />

      {/* Digital Resources & E-Library Portals */}
      <LibraryDigitalResources />

      {/* Timings, Guidelines, and Circulation Rules Table */}
      <LibraryInfoAndPolicy />

      {/* Librarian Contact Details */}
      <LibraryContactLibrarian />

      {/* FAQs */}
      <LibraryFaqAccordion />
    </main>
  );
}
