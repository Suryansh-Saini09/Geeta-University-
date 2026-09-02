import React from "react";
import type { Metadata } from "next";

import UGCHero from "@/components/ugc/UGCHero";
import UGCStatutoryApprovals from "@/components/ugc/UGCStatutoryApprovals";
import UGCDocumentsGrid from "@/components/ugc/UGCDocumentsGrid";
import IndustryEcosystemSection from "@/components/industry-integration/IndustryEcosystemSection";
import UGCCalloutCTA from "@/components/ugc/UGCCalloutCTA";

export const metadata: Metadata = {
  metadataBase: new URL("https://geetauniversity.edu.in"),
  title: "UGC-Approved University | Geeta University Accreditation & Recognition",
  description:
    "Explore Geeta University’s UGC-approved status, statutory council recognitions, virtual inspection performas, and academic accreditation documents.",
  keywords: [
    "UGC Approved University",
    "Geeta University UGC",
    "UGC Documents",
    "UGC Inspection Performa",
    "State Private University Haryana",
    "PCI BCI Approval",
  ],
  openGraph: {
    title: "UGC-Approved University | Geeta University Accreditation & Recognition",
    description:
      "Explore Geeta University’s UGC-approved status, accreditation details, and statutory recognition documents.",
    images: ["/ugc/campus-ecosystem.webp"],
  },
};

export default function UGCPage() {
  return (
    <main className="min-h-screen bg-[#F7F9FC] text-[#0A1F44]">
      {/* Hero Section */}
      <UGCHero />

      {/* Statutory Recognitions Grid */}
      <UGCStatutoryApprovals />

      {/* Official Inspection Documents & Downloads */}
      <UGCDocumentsGrid />

      {/* Legacy & Ecosystem Section */}
      <IndustryEcosystemSection />

      {/* Contact & Statutory Callout Banner */}
      <UGCCalloutCTA />
    </main>
  );
}
