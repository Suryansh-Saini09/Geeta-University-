"use client";

import React from "react";
import type { ProgramPageData } from "@/data/programs/types";

import ProgramHero from "./ProgramHero";
import ProgramAbout from "./ProgramAbout";
import ProgramSpecialisations from "./ProgramSpecialisations";
import ProgramFeaturedPrograms from "./ProgramFeaturedPrograms";
import ProgramMentors from "./ProgramMentors";
import ProgramPlacement from "./ProgramPlacement";
import ProgramExperts from "./ProgramExperts";
import ProgramCourses from "./ProgramCourses";
import DeanMessage from "./DeanMessage";
import FAQSection from "./FAQSection";
import ProgramFinalCTA from "./ProgramFinalCTA";

interface ProgramPageProps {
  data?: ProgramPageData;
  program?: ProgramPageData;
}

export default function ProgramPage({ data, program }: ProgramPageProps) {
  const pageData = data || program;
  if (!pageData) return null;

  return (
    <div className="w-full flex-1 block bg-white min-h-screen text-[#1A1A2E] overflow-x-hidden selection:bg-[#E8871A] selection:text-white font-sans">
      {/* 1. HERO BANNER SECTION */}
      {pageData.hero && <ProgramHero hero={pageData.hero} />}

      {/* 2. ABOUT THE SCHOOL SECTION */}
      {(pageData.about || pageData.intro) && (
        <ProgramAbout about={pageData.about} intro={pageData.intro} />
      )}

      {/* 3. EXPLORE SPECIALISATIONS / PROGRAMS DIRECTORY */}
      {pageData.specialisations && (
        <ProgramSpecialisations specialisations={pageData.specialisations} />
      )}

      {/* 4. FEATURED PROGRAMS (COMMERCE / DEGREE HIGHLIGHTS) */}
      {pageData.featuredPrograms && (
        <ProgramFeaturedPrograms featuredPrograms={pageData.featuredPrograms} />
      )}

      {/* 5. MEET OUR MENTORS (INFINITE FACULTY CAROUSEL) */}
      {(pageData.mentorsSection || pageData.faculty) && (
        <ProgramMentors mentorsSection={pageData.mentorsSection} faculty={pageData.faculty} />
      )}

      {/* 6. PLACEMENT EXCELLENCE & ANALYTICS */}
      <ProgramPlacement placement={pageData.placement} />

      {/* 7. 5 CATEGORIES OF EXPERTS */}
      <ProgramExperts experts={pageData.experts} />

      {/* 8. ACADEMIC DEGREE COURSES (IF CONFIGURED) */}
      {/* {pageData.courses && <ProgramCourses courses={pageData.courses} />} */}

      {/* 9. DEAN'S MESSAGE (IF CONFIGURED) */}
      {/* {pageData.dean && <DeanMessage dean={pageData.dean} />} */}

      {/* 10. FAQS (IF CONFIGURED) */}
      {/* {pageData.faqs && <FAQSection faqs={pageData.faqs} />} */}

      {/* 11. FINAL CTA & APPLICATION SECTION */}
      <ProgramFinalCTA cta={pageData.cta} />
    </div>
  );
}