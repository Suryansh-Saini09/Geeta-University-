"use client";

import type { ProgramPageData } from "@/data/programs/types";

import ProgramHero from "./ProgramHero";
import ProgramIntro from "./ProgramIntro";
import DeanMessage from "./DeanMessage";
import ProgramCourses from "./ProgramCourses";
import CareerPathway from "./CareerPathway";
import FAQSection from "./FAQSection";
import LegacyEcosystem from "./LegacyEcosystem";

interface ProgramPageProps {
  data: ProgramPageData;
}

export default function ProgramPage({
  data,
}: ProgramPageProps) {
  return (
    <main>
      <ProgramHero {...data.hero} />

      {data.intro && (
        <ProgramIntro {...data.intro} />
      )}

      {data.dean && (
        <DeanMessage {...data.dean} />
      )}

      {data.courses && (
        <ProgramCourses
          courses={data.courses}
        />
      )}

      {data.career && (
        <CareerPathway
          data={data.career}
        />
      )}

      {data.faqs && (
        <FAQSection
          faqs={data.faqs}
        />
      )}

      {data.legacy && (
        <LegacyEcosystem
          data={data.legacy}
        />
      )}
    </main>
  );
}