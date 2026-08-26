"use client";

import React, { useState, useEffect } from "react";
import PlacementHero from "@/components/placements/PlacementHero";
import PlacementNav from "@/components/placements/PlacementNav";
import TopRecruiters from "@/components/programs/TopRecruiters";
import CareerDevelopmentCell from "@/components/placements/CareerDevelopmentCell";
import PlacementSnapshotSection from "@/components/placements/PlacementSnapshotSection";
import StudentSuccessStories from "@/components/placements/StudentSuccessStories";
import PlacementDrivesSection from "@/components/placements/PlacementDrivesSection";
import RecruiterVoicesSection from "@/components/placements/RecruiterVoicesSection";
import PlacementDayGallery from "@/components/placements/PlacementDayGallery";
import LegacyEcosystem from "@/components/about/LegacyEcosystem";
import FAQSection from "@/components/programs/FAQSection";
import PlacementCTA from "@/components/placements/PlacementCTA";
import VideoModal from "@/components/campus-life/VideoModal";
import { placementFaqs } from "@/data/placements";

export default function PlacementsPage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [videoConfig, setVideoConfig] = useState({
    videoId: "LqKxm1hUDbQ",
    title: "Infosys Campus Recruitment Drive at Geeta University",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, []);

  const handleOpenVideoModal = (videoId: string, title: string) => {
    setVideoConfig({
      videoId,
      title,
    });
    setIsVideoModalOpen(true);
  };

  return (
    <div className="min-w-0 overflow-x-clip bg-[#F7F9FC] text-[#0A1F44]">
      {/* 1. Hero Section & Stats */}
      <PlacementHero />

      {/* 2. Sticky Sub Navigation (Cleaned & uncrowded) */}
      <PlacementNav />

      {/* 3. Top Recruiters Marquee */}
      <div id="recruiters" className="scroll-mt-[190px]">
        <TopRecruiters
          title="Where Talent Meets Global Industry Leaders"
          badgeText="🏆 445+ Recruiting Partners Across 10+ Sectors"
        />
      </div>

      {/* 4. Career Development Cell (CDC) */}
      <CareerDevelopmentCell />

      {/* 5. Placement Snapshot 2025–26 & Searchable Company Directory */}
      <PlacementSnapshotSection />

      {/* 6. Student Success Stories (Campus to Corporate) */}
      <StudentSuccessStories />

      {/* 7. Placement Drives & Featured Videos */}
      <PlacementDrivesSection onOpenVideoModal={handleOpenVideoModal} />

      {/* 8. HR & Recruiter Testimonials */}
      <RecruiterVoicesSection />

      {/* 9. Placement Day Celebrations & Gallery */}
      <PlacementDayGallery />

      {/* 10. Canonical Legacy & Ecosystem */}
      <LegacyEcosystem
        id="legacy-ecosystem"
        contextText="Students and recruiters benefit from the integrated ecosystem of:"
      />

      {/* 11. Frequently Asked Questions (FAQs) */}
      <section id="faqs" className="w-full scroll-mt-[190px]">
        <FAQSection
          title="Frequently Asked Questions (FAQs)"
          subtitle="Everything you need to know about campus placements, packages, recruiting companies, and career support at Geeta University."
          faqs={placementFaqs}
        />
      </section>

      {/* 12. Final Placement & Admissions CTA */}
      <PlacementCTA />

      {/* Video Modal Player */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId={videoConfig.videoId}
        title={videoConfig.title}
      />
    </div>
  );
}
