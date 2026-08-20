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
  data?: ProgramData | ProgramPageData;
  program?: ProgramData | ProgramPageData;
}

export default function ProgramPage({ data }: ProgramPageProps) {
  return (
    <div className="w-full flex-1 block bg-white min-h-screen text-[#1A1A2E] overflow-x-hidden selection:bg-[#E8871A] selection:text-white font-sans">
      {/* 1. HERO BANNER SECTION */}
      {data.hero && <ProgramHero hero={data.hero} />}

      {/* 2. ABOUT THE SCHOOL SECTION */}
      {(data.about || data.intro) && (
        <ProgramAbout about={data.about} intro={data.intro} />
      )}

      {/* 3. EXPLORE SPECIALISATIONS / PROGRAMS DIRECTORY */}
      {data.specialisations && (
        <ProgramSpecialisations specialisations={data.specialisations} />
      )}

      {/* 4. FEATURED PROGRAMS (COMMERCE / DEGREE HIGHLIGHTS) */}
      {data.featuredPrograms && (
        <ProgramFeaturedPrograms featuredPrograms={data.featuredPrograms} />
      )}

      {/* 5. MEET OUR MENTORS (INFINITE FACULTY CAROUSEL) */}
      {(data.mentorsSection || data.faculty) && (
        <ProgramMentors mentorsSection={data.mentorsSection} faculty={data.faculty} />
      )}

      {/* 6. PLACEMENT EXCELLENCE & ANALYTICS */}
      <ProgramPlacement placement={data.placement} />

      {/* 7. 5 CATEGORIES OF EXPERTS */}
      <ProgramExperts experts={data.experts} />

      {/* 8. ACADEMIC DEGREE COURSES (IF CONFIGURED) */}
      {data.courses && <ProgramCourses courses={data.courses} />}

      {/* 9. DEAN'S MESSAGE (IF CONFIGURED) */}
      {data.dean && <DeanMessage dean={data.dean} />}

      {/* 10. FAQS (IF CONFIGURED) */}
      {data.faqs && <FAQSection faqs={data.faqs} />}

      {/* 11. FINAL CTA & APPLICATION SECTION */}
      <ProgramFinalCTA cta={data.cta} />
    </div>
  );
}