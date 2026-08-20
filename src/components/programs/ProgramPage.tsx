"use client";

import React from "react";
import type { ProgramData } from "./types";
import type { ProgramPageData } from "@/data/programs/types";

import ProgramHero from "./ProgramHero";
import ProgramIntro from "./ProgramIntro";
import ProgramSpecialisations from "./sections/ProgramSpecialisations";
import ProgramCourses from "./ProgramCourses";
import ProgramMentors from "./sections/ProgramMentors";
import ProgramPlacements from "./sections/ProgramPlacements";
import ProgramExperts from "./sections/ProgramExperts";
import CareerPathway from "./CareerPathway";
import DeanMessage from "./DeanMessage";
import LegacyEcosystem from "./LegacyEcosystem";
import FAQSection from "./FAQSection";
import ProgramFinalCTA from "./sections/ProgramFinalCTA";

interface ProgramPageProps {
  data?: ProgramData | ProgramPageData;
  program?: ProgramData | ProgramPageData;
}

export default function ProgramPage({ data, program }: ProgramPageProps) {
  // Support both `data` and `program` prop conventions
  const currentProgram = (program || data) as any;

  if (!currentProgram) {
    return null;
  }

  // Normalize legacy data fields
  const heroData = currentProgram.hero;
  const introData = currentProgram.intro;
  const specialisationsData = currentProgram.specialisations;
  const coursesData = currentProgram.courses;
  const mentorsData = currentProgram.mentors || currentProgram.faculty;
  const placementData = currentProgram.placement;
  const expertsData = currentProgram.experts;
  const careerData = currentProgram.careerPathway || currentProgram.career;
  const deanData = currentProgram.deanMessage || currentProgram.dean;
  const legacyData = currentProgram.legacy;
  const faqsData = currentProgram.faqs;
  const ctaData = currentProgram.cta;

  return (
    <main className="w-full flex-1 block bg-white min-h-screen text-[#1A1A2E] overflow-x-hidden font-sans">
      {/* 01. Hero Banner */}
      {heroData && <ProgramHero data={heroData} />}

      {/* 02. About School / Program Intro */}
      {introData && <ProgramIntro data={introData} />}

      {/* 03. Specialisations Directory */}
      {specialisationsData && (
        <ProgramSpecialisations data={specialisationsData} />
      )}

      {/* 04. Academics / Programs Offered */}
      {coursesData && (
        <ProgramCourses
          data={Array.isArray(coursesData) ? undefined : coursesData}
          courses={Array.isArray(coursesData) ? coursesData : undefined}
        />
      )}

      {/* 05. Faculty & Mentors Carousel */}
      {mentorsData && <ProgramMentors data={mentorsData} />}

      {/* 06. Placement Excellence */}
      {placementData && <ProgramPlacements data={placementData} />}

      {/* 07. Expert Ecosystem (5 Categories of Experts) */}
      {expertsData && <ProgramExperts data={expertsData} />}

      {/* 08. Career Pathway */}
      {careerData && <CareerPathway data={careerData} />}

      {/* 09. Dean's Leadership Message */}
      {deanData && <DeanMessage data={deanData} />}

      {/* 10. Institutional Legacy & Ecosystem */}
      {legacyData && <LegacyEcosystem data={legacyData} />}

      {/* 11. FAQ Accordion */}
      {faqsData && (
        <FAQSection
          data={Array.isArray(faqsData) ? undefined : faqsData}
          faqs={Array.isArray(faqsData) ? faqsData : undefined}
        />
      )}

      {/* 12. Final Admissions CTA */}
      <ProgramFinalCTA
        data={ctaData}
        programName={currentProgram.name || currentProgram.hero?.title}
      />
    </main>
  );
}