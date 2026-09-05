"use client";

import React from "react";
import type { CoursePageData } from "@/data/programs/courses/types";
import type { ProgramPageData } from "@/data/programs/types";

import CourseHero from "./CourseHero";
import CourseQuickInfo from "./CourseQuickInfo";
import CourseOverview from "./CourseOverview";
import CourseTakeaways from "./CourseTakeaways";
import CourseSubjects from "./CourseSubjects";
import CourseLearningOutcomes from "./CourseLearningOutcomes";
import CourseAdmission from "./CourseAdmission";
import CourseCareer from "./CourseCareer";
import CourseWhyGeeta from "./CourseWhyGeeta";
import CourseTestimonials from "./CourseTestimonials";
import CourseLearningSpaces from "./CourseLearningSpaces";
import CourseVirtualCampus from "./CourseVirtualCampus";
import CourseScholarships from "./CourseScholarships";
import CourseFaculty from "./CourseFaculty";
import CourseFAQ from "./CourseFAQ";
import LegacyEcosystem from "@/components/about/LegacyEcosystem";
import CourseCTA from "./CourseCTA";

interface CoursePageProps {
  course: CoursePageData;
  school?: ProgramPageData;
}

export default function CoursePage({ course, school }: CoursePageProps) {
  const schoolName = school?.name || school?.shortName || "Geeta University School";

  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      {/* 1. Hero Section (Image Only Banner) */}
      <CourseHero
        hero={course.hero}
        schoolName={schoolName}
        schoolSlug={course.schoolSlug}
      />

      {/* 2. Quick Info Strip */}
      {course.quickInfo && <CourseQuickInfo quickInfo={course.quickInfo} />}

      {/* 3. Course Overview */}
      {course.overview && <CourseOverview overview={course.overview} />}

      {/* 4. Important Takeaways */}
      {course.takeaways && course.takeaways.length > 0 && (
        <CourseTakeaways takeaways={course.takeaways} />
      )}

      {/* 5. Subjects Section */}
      {course.subjects && course.subjects.length > 0 && (
        <CourseSubjects subjects={course.subjects} />
      )}

      {/* 6. Learning Outcomes */}
      {course.learningOutcomes && course.learningOutcomes.length > 0 && (
        <CourseLearningOutcomes learningOutcomes={course.learningOutcomes} />
      )}

      {/* 7. Admission & Why Choose Programme */}
      {course.admission && <CourseAdmission admission={course.admission} />}

      {/* 8. Career Opportunities */}
      {course.career && <CourseCareer career={course.career} />}

      {/* 9. Why Geeta University */}
      {course.whyGeeta && <CourseWhyGeeta whyGeeta={course.whyGeeta} />}

      {/* 10. Student Testimonials (Placed before Highlights of Our Learning Spaces) */}
      {course.testimonials && course.testimonials.length > 0 && (
        <CourseTestimonials testimonials={course.testimonials} />
      )}

      {/* 11. Highlights of Our Learning Spaces (Redesigned in Carousel format) */}
      {course.learningSpaces && (
        <CourseLearningSpaces learningSpaces={course.learningSpaces} />
      )}

      {/* 12. Virtual Campus Tour (Placed before Scholarships & GUTS) */}
      <CourseVirtualCampus />

      {/* 13. Scholarships & GUTS */}
      {course.scholarships && (
        <CourseScholarships scholarships={course.scholarships} />
      )}

      {/* 14. Faculty Mentors */}
      {course.faculty && course.faculty.length > 0 && (
        <CourseFaculty faculty={course.faculty} />
      )}

      {/* 15. Frequently Asked Questions */}
      {course.faqs && course.faqs.length > 0 && (
        <CourseFAQ faqs={course.faqs} />
      )}

      {/* 16. Legacy & Ecosystem Section (Placed above Footer/CTA) */}
      <LegacyEcosystem contextText="Students benefit from the integrated ecosystem of:" />

      {/* 17. Course CTA */}
      {course.cta && <CourseCTA cta={course.cta} />}
    </main>
  );
}
