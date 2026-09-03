"use client";

import React, { useEffect } from "react";
import { useLenis } from "lenis/react";
import type { ProgramPageData } from "@/data/programs/types";

import ProgramHero from "./ProgramHero";
import TopRecruiters from "./TopRecruiters";
import RankingsAccreditations from "./RankingsAccreditations";
import ProgramAbout from "./ProgramAbout";
import DeanMessage from "./DeanMessage";
import ProgramFeaturedPrograms from "./ProgramFeaturedPrograms";
import ProgramMentors from "./ProgramMentors";
import ProgramCourses from "./ProgramCourses";
import DepartmentHighlights from "./DepartmentHighlights";
import BrochureDownload from "./BrochureDownload";
import ProgramSpecialisations from "./ProgramSpecialisations";
import ProgramExperts from "./ProgramExperts";
import InternationalPartners from "./InternationalPartners";
import ProgramPlacement from "./ProgramPlacement";
import LearningSpaces from "./LearningSpaces";
import CareerPathways from "./CareerPathways";
import FAQSection from "./FAQSection";
import ProgramFinalCTA from "./ProgramFinalCTA";

interface ProgramPageProps {
  data?: ProgramPageData;
  program?: ProgramPageData;
}

export default function ProgramPage({ data, program }: ProgramPageProps) {
  const pageData = data || program;
  const lenis = useLenis();

  // Handle hash-based navigation from outside (e.g. quick-nav links)
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const timer = setTimeout(() => {
        if (lenis) {
          lenis.scrollTo(`#${hash}`, { offset: -130 });
        } else {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [lenis]);

  if (!pageData) return null;

  const schoolTitle = pageData.name || pageData.shortName || pageData.hero?.title || "Geeta University";

  const hasMentors = Boolean(
    (pageData.mentorsSection?.faculty && pageData.mentorsSection.faculty.length > 0) ||
    (pageData.faculty && pageData.faculty.length > 0) ||
    (pageData.mentors && pageData.mentors.length > 0)
  );

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", color: "#1A1A2E", background: "#F7F9FC", minHeight: "100vh" }}>
      {/* 1. HERO BANNER & ADMISSIONS */}
      <ProgramHero hero={pageData.hero} />

      {/* 2. TOP RECRUITERS MARQUEE (Only if recruiters data is provided for this school) */}
      <TopRecruiters
        title="100+ Companies. Endless Possibilities."
        badgeText="Top Industry Recruiters"
        recruiters={pageData.placement?.recruiters}
      />

      {/* 3. RANKINGS & ACCREDITATIONS (University-wide UGC/CSR/AAA accreditations) */}
      <RankingsAccreditations rankings={pageData.rankings} />

      {/* 4. ABOUT THE SCHOOL */}
      {(pageData.about || pageData.intro) && (
        <ProgramAbout
          about={pageData.about}
          intro={pageData.intro}
          visionMission={pageData.visionMission}
        />
      )}

      {/* 5. DEAN / PRINCIPAL LEADERSHIP MESSAGE */}
      {/* {pageData.dean && (
        <DeanMessage dean={pageData.dean} schoolName={schoolTitle} />
      )} */}

      {/* 6. FEATURED PROGRAMS (If school defines prominent degree tiers) */}
      {/* {pageData.featuredPrograms && (
        <ProgramFeaturedPrograms featuredPrograms={pageData.featuredPrograms} />
      )} */}

      {/* 7. PROGRAMS / COURSES OFFERED */}
      {pageData.courses && pageData.courses.length > 0 && (
        <ProgramCourses courses={pageData.courses} />
      )}

      {/* 8. DEPARTMENT HIGHLIGHTS (Rendered strictly when school-specific highlights are provided) */}
      {pageData.departmentHighlights && pageData.departmentHighlights.length > 0 && (
        <DepartmentHighlights highlights={pageData.departmentHighlights} />
      )}

      {/* 9. SPECIALISATIONS DIRECTORY */}
      {pageData.specialisations && (
        <ProgramSpecialisations specialisations={pageData.specialisations} />
      )}

      {/* 10. MEET OUR MENTORS (Rendered strictly when school-specific faculty are provided) */}
      {hasMentors && (
        <ProgramMentors
          mentorsSection={pageData.mentorsSection}
          faculty={pageData.faculty || pageData.mentors}
        />
      )}

      {/* 11. EXPERTS & PILLARS OF EXCELLENCE (Rendered only when school provides expert streams or GTH) */}
      {(pageData.experts || pageData.gth) && (
        <ProgramExperts experts={pageData.experts} gth={pageData.gth} />
      )}

      {/* 12. INTERNATIONAL & INDUSTRY PARTNERS (Rendered strictly when school partners exist) */}
      {pageData.partners && pageData.partners.length > 0 && (
        <InternationalPartners partners={pageData.partners} />
      )}

      {/* 13. PLACEMENT ANALYTICS & TESTIMONIALS */}
      {(pageData.placement || (pageData.testimonials && pageData.testimonials.length > 0)) && (
        <ProgramPlacement
          // placement={pageData.placement}
          testimonials={pageData.testimonials}
        />
      )}

      {/* 14. LEARNING SPACES & INFRASTRUCTURE */}
      {pageData.learningSpaces && (
        <LearningSpaces
          title={pageData.learningSpaces?.title}
          subtitle={pageData.learningSpaces?.description}
          spaces={pageData.learningSpaces?.spaces}
          gallery={pageData.learningSpaces?.gallery}
          closingNote={pageData.learningSpaces?.closingNote}
        />
      )}

      {/* 15. CAREER PATHWAYS */}
      {pageData.careerPathways && (
        <CareerPathways
          title={pageData.careerPathways?.title}
          subtitle={pageData.careerPathways?.description}
          pathways={pageData.careerPathways?.pathways}
          notableRoles={pageData.careerPathways?.notableRoles}
        />
      )}

      {/* 16. BROCHURE DOWNLOAD */}
      {pageData.brochure && (
        <BrochureDownload
          title={pageData.brochure?.title}
          description={pageData.brochure?.description}
          fileUrl={pageData.brochure?.fileUrl}
          fileName={pageData.brochure?.fileName || `${pageData.slug}_brochure.pdf`}
        />
      )}

      {/* 17. FAQS */}
      {pageData.faqs && pageData.faqs.length > 0 && (
        <FAQSection faqs={pageData.faqs} />
      )}

      {/* 18. FINAL CTA & APPLICATION FOOTER */}
      <ProgramFinalCTA cta={pageData.cta} schoolName={schoolTitle} />
    </div>
  );
}