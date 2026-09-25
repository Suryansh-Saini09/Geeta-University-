"use client";

import React from "react";
import type { CoursePageData } from "@/data/programs/courses/types";
import type { ProgramPageData } from "@/data/programs/types";

import CourseHero from "./CourseHero";
import CourseQuickInfo from "./CourseQuickInfo";
import CourseMainSection from "./CourseMainSection";
import CourseVirtualCampus from "./CourseVirtualCampus";
import CourseScholarships from "./CourseScholarships";
import CourseTestimonials from "./CourseTestimonials";
import CourseCareerSection from "./CourseCareerSection";

// Directly reuse existing premium components from the main school page
import ProgramMentors from "../ProgramMentors";
import LearningSpaces from "../LearningSpaces";
import FAQSection from "../FAQSection";
import LegacyEcosystem from "@/components/about/LegacyEcosystem";
import ProgramFinalCTA from "../ProgramFinalCTA";

interface CoursePageProps {
  course: CoursePageData;
  school?: ProgramPageData;
}

export default function CoursePage({ course, school }: CoursePageProps) {
  const schoolName =
    school?.name || school?.shortName || "Geeta University";

  return (
    <main
      style={{
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        color: "#1A1A2E",
        background: "#F7F9FC",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* 1. Hero Section (Banner Image) */}
      <CourseHero
        hero={course.hero}
        schoolName={schoolName}
        schoolSlug={course.schoolSlug}
      />

      {/* 2. Quick Info Strip (Program, Duration, Eligibility) */}
      {course.quickInfo && <CourseQuickInfo quickInfo={course.quickInfo} />}

      {/* 3. Main 2-Column Course Details & Sticky Admission Form */}
      <CourseMainSection
        overview={course.overview}
        takeaways={course.takeaways}
        subjects={course.subjects}
        learningOutcomes={course.learningOutcomes}
        admission={course.admission}
        programName={course.hero?.title || course.quickInfo?.program}
      />

      {/* 4. Meet Our Mentors (Reusing main school ProgramMentors component) */}
      {course.faculty && course.faculty.length > 0 && (
        <ProgramMentors
          title="Meet Our Mentors"
          faculty={course.faculty}
        />
      )}

      {/* 5. Virtual Campus Tour */}
      <CourseVirtualCampus />

      {/* 6. Scholarships & GUTS */}
      {course.scholarships && (
        <CourseScholarships scholarships={course.scholarships} />
      )}

      {/* 7. Student Testimonials */}
      {course.testimonials && course.testimonials.length > 0 && (
        <CourseTestimonials testimonials={course.testimonials} />
      )}

      {/* 8. Highlights of Our Learning Spaces (Reusing main school LearningSpaces carousel) */}
      {course.learningSpaces && course.learningSpaces.spaces?.length > 0 && (
        <LearningSpaces
          title={course.learningSpaces.title || "Highlights of Our Learning Spaces"}
          spaces={course.learningSpaces.spaces}
        />
      )}

      {/* 9. Career Opportunities & Why Choose GU + Achievement Cards */}
      {(course.career || course.whyGeeta) && (
        <CourseCareerSection
          career={course.career}
          whyGeeta={course.whyGeeta}
        />
      )}

      {/* 10. Frequently Asked Questions (Reusing main school FAQSection) */}
      {course.faqs && course.faqs.length > 0 && (
        <FAQSection
          title="Frequently Asked Questions"
          faqs={course.faqs}
        />
      )}

      {/* 11. Legacy & Ecosystem */}
      <LegacyEcosystem contextText="Students benefit from the integrated ecosystem of:" />

      {/* 12. Final CTA & Application Footer */}
      {course.cta && (
        <ProgramFinalCTA cta={course.cta} schoolName={schoolName} />
      )}
    </main>
  );
}
