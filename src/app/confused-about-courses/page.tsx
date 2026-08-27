import React from "react";
import type { Metadata } from "next";
import ConfusedHero from "@/components/confused-about-courses/ConfusedHero";
import ConfusedContentSections from "@/components/confused-about-courses/ConfusedContentSections";
import LegacyEcosystem from "@/components/about/LegacyEcosystem";

export const metadata: Metadata = {
  title: "Are You Confused About Courses? | Geeta University Career Guidance",
  description:
    "Confused about courses? Geeta University guides you to the best programs in engineering, management, law, and more. Find your perfect career fit now!",
  openGraph: {
    title: "Are You Confused About Courses? | Geeta University Career Guidance",
    description:
      "Confused about courses? Geeta University guides you to the best programs in engineering, management, law, and more. Find your perfect career fit now!",
    url: "https://geetauniversity.edu.in/confused-about-courses",
    type: "website",
  },
};

export default function ConfusedAboutCoursesPage() {
  return (
    <div className="min-w-0 overflow-x-hidden bg-white text-[#0A1F44]">
      {/* 1. Full-Width Career Guidance Hero Banner */}
      <ConfusedHero />

      {/* 2. Structured Decision Framework & Institutional Guidance */}
      <ConfusedContentSections />

      {/* 3. Shared Legacy & Ecosystem Section */}
      <LegacyEcosystem
        id="legacy-ecosystem"
        contextText="Students at Geeta University benefit from the integrated ecosystem of:"
      />
    </div>
  );
}
