import React from "react";
import type { Metadata } from "next";
import PhdHero from "@/components/phd/PhdHero";
import PhdAboutAndEnquiry from "@/components/phd/PhdAboutAndEnquiry";
import PhdImportantDates from "@/components/phd/PhdImportantDates";
import PhdCourseworkFramework from "@/components/phd/PhdCourseworkFramework";
import AwardsRankingsSection from "@/components/about/AwardsRankingsSection";
import PhdVirtualCampusTour from "@/components/phd/PhdVirtualCampusTour";
import PhdEligibilitySection from "@/components/phd/PhdEligibilitySection";
import PhdSyllabusSection from "@/components/phd/PhdSyllabusSection";
import PhdNoticeAndContact from "@/components/phd/PhdNoticeAndContact";
import FAQSection from "@/components/programs/FAQSection";
import LegacyEcosystem from "@/components/about/LegacyEcosystem";
import { phdFaqsData } from "@/data/phdData";

export const metadata: Metadata = {
  title: "PhD in Private University in India | Best Research Programs at GU",
  description:
    "Enroll in a UGC-compliant PhD at a leading private university with expert faculty, advanced labs, and interdisciplinary research opportunities. Apply Now!",
  keywords: [
    "PhD in Private University in India",
    "Best Research Programs at GU",
    "Pursue Cutting-Edge Research with Ph.D. Admissions 2026",
    "Geeta University Panipat",
    "phd in computer science",
    "phd in management",
    "phd in pharmacy",
    "phd in agriculture",
  ],
  openGraph: {
    title: "PhD in Private University in India | Best Research Programs at GU",
    description:
      "Enroll in a UGC-compliant PhD at a leading private university with expert faculty, advanced labs, and interdisciplinary research opportunities. Apply Now!",
    url: "https://geetauniversity.edu.in/phd",
    type: "website",
    images: [
      {
        url: "https://geetauniversity.edu.in/uploads/all/1871/Ph.d.webp",
        width: 1200,
        height: 630,
        alt: "PhD Admissions at Geeta University",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PhD in Private University in India | Best Research Programs at GU",
    description:
      "Enroll in a UGC-compliant PhD at a leading private university with expert faculty, advanced labs, and interdisciplinary research opportunities. Apply Now!",
    images: ["https://geetauniversity.edu.in/uploads/all/1871/Ph.d.webp"],
  },
  alternates: {
    canonical: "https://geetauniversity.edu.in/phd",
  },
};

export default function PhdPage() {
  return (
    <div className="min-w-0 overflow-x-hidden bg-white text-[#0A1F44]">
      {/* 1. Hero Banner */}
      <PhdHero />

      {/* 2. About Program & Disciplines with Lead Enquiry Form */}
      <PhdAboutAndEnquiry />

      {/* 3. Important Dates & Schedule Table */}
      <PhdImportantDates />

      {/* 4. Coursework Framework for Part-Time/International & Fellowship/Stipend */}
      <PhdCourseworkFramework />

      {/* 5. Awards, Rankings & THE Impact Section */}
      <AwardsRankingsSection />

      {/* 6. Virtual Campus Tour with Modal */}
      <PhdVirtualCampusTour />

      {/* 7. Eligibility, Selection, Exemption & How to Apply */}
      <PhdEligibilitySection />

      {/* 8. Ph.D. Entrance Syllabus (13 subjects / PDFs) */}
      <PhdSyllabusSection />

      {/* 9. Important Notice & Ph.D. Cell Contact Box */}
      <PhdNoticeAndContact />

      {/* 10. Frequently Asked Questions */}
      <section id="faqs" className="w-full scroll-mt-20">
        <FAQSection
          title="FAQs – Ph.D. at Geeta University"
          subtitle="Clear your doubts about Ph.D. eligibility, entrance examination structure, fellowships, exemptions, and coursework delivery."
          faqs={phdFaqsData}
        />
      </section>

      {/* 11. Legacy & Ecosystem Section */}
      <LegacyEcosystem
        id="legacy-ecosystem"
        contextText="Ph.D. scholars benefit from the integrated ecosystem of:"
      />
    </div>
  );
}
