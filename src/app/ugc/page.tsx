import React from "react";
import type { Metadata } from "next";

import UGCHero from "@/components/ugc/UGCHero";
import UGCDocumentsGrid from "@/components/ugc/UGCDocumentsGrid";
import IndustryEcosystemSection from "@/components/industry-integration/IndustryEcosystemSection";
import UGCCalloutCTA from "@/components/ugc/UGCCalloutCTA";

import { getPageSectionsAdmin } from "@/server/services/pages";

export const dynamic = "force-dynamic";

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

export default async function UGCPage() {
  const { sections } = await getPageSectionsAdmin("ugc");

  const heroSec = sections.hero?.body;
  const docsSec = sections.documents?.body;
  const approvalsSec = sections.approvals?.body;
  const ctaSec = sections.callout_cta?.body;


  return (
    <main className="min-h-screen bg-[#F7F9FC] text-[#0A1F44]">
      {/* Hero Section */}
      <UGCHero data={heroSec} />

      {/* Official Inspection Documents & Statutory Approvals Grid */}
      <UGCDocumentsGrid docsData={docsSec} approvalsData={approvalsSec} />

      {/* Legacy & Ecosystem Section */}
      <IndustryEcosystemSection />

      {/* Contact & Statutory Callout Banner */}
      <UGCCalloutCTA data={ctaSec} />
    </main>
  );
}
