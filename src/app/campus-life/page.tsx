"use client";

import React, { useState, useEffect } from "react";
import CampusLifeHero from "@/components/campus-life/CampusLifeHero";
import CampusLifeNav from "@/components/campus-life/CampusLifeNav";
import InfrastructureSection from "@/components/campus-life/InfrastructureSection";
import SportsFacilitiesSection from "@/components/campus-life/SportsFacilitiesSection";
import CampusEventsSection from "@/components/campus-life/CampusEventsSection";
import EminentPersonalitiesSection from "@/components/campus-life/EminentPersonalitiesSection";
import LegacyEcosystem from "@/components/about/LegacyEcosystem";
import FAQSection from "@/components/programs/FAQSection";
import VideoModal from "@/components/campus-life/VideoModal";
import { campusFaqs } from "@/data/campusLife";

export default function CampusLifePage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [videoConfig, setVideoConfig] = useState({
    videoId: "arnFS6rf454",
    title: "Geeta University Virtual Campus Tour",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "instant" });
      if (window.location.hash) {
        window.history.replaceState(null, "", "/campus-life");
      }
    }
  }, []);

  const openVirtualTourModal = () => {
    setVideoConfig({
      videoId: "arnFS6rf454",
      title: "Geeta University Virtual Campus Tour",
    });
    setIsVideoModalOpen(true);
  };

  const openEventsVideoModal = () => {
    setVideoConfig({
      videoId: "D-TW0dcqMDA",
      title: "Geeta University Campus Events Glimpse",
    });
    setIsVideoModalOpen(true);
  };

  const formattedFaqs = campusFaqs.map((faq) => ({
    q: faq.question,
    a: faq.answer,
    category: "Campus Life",
  }));

  return (
    <div className="min-w-0 overflow-x-hidden bg-[#F7F9FC] text-[#0A1F44]">
      {/* 1. Hero Banner & Overview */}
      <CampusLifeHero onOpenVirtualTour={openVirtualTourModal} />

      {/* 2. Sticky Sub Navigation */}
      <CampusLifeNav />

      {/* 3. World Class Infrastructure (with 3-Card Infinite/Sliding Carousel) */}
      <InfrastructureSection onOpenVirtualTour={openVirtualTourModal} />

      {/* 4. Sports Facilities (with 3-Card Carousel) */}
      <SportsFacilitiesSection />

      {/* 5. Campus Events & Fests (with Video Spotlight & 3-Card Carousel) */}
      <CampusEventsSection onOpenEventsVideo={openEventsVideoModal} />

      {/* 6. Eminent Personalities at GU (with 2-Card Carousel) */}
      <EminentPersonalitiesSection />

      {/* 7. Legacy & Ecosystem (Canonical Website Component) */}
      <LegacyEcosystem />

      {/* 8. Frequently Asked Questions (Canonical Website Component) */}
      <div id="faqs" className="scroll-mt-[190px]">
        <FAQSection
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about hostel accommodation, sports facilities, security, and vibrant student life at Geeta University."
          faqs={formattedFaqs}
        />
      </div>

      {/* Responsive Video Modal Player */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId={videoConfig.videoId}
        title={videoConfig.title}
      />
    </div>
  );
}
