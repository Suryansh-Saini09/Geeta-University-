import React from "react";
import type { Metadata } from "next";

import ReachHero from "@/components/how-to-reach-us/ReachHero";
import ReachInfographicSection from "@/components/how-to-reach-us/ReachInfographicSection";
import ReachTransportCards from "@/components/how-to-reach-us/ReachTransportCards";
import ContactMapSection from "@/components/contact-us/ContactMapSection";
import IndustryEcosystemSection from "@/components/industry-integration/IndustryEcosystemSection";

export const metadata: Metadata = {
  metadataBase: new URL("https://geetauniversity.edu.in"),
  title: "How to Reach Geeta University | Address & Transport Guide",
  description:
    "Get directions to Geeta University. Find transport options, campus location details, and travel tips for a hassle-free visit.",
  keywords: [
    "How to Reach Us?",
    "How to reach Geeta University",
    "Geeta University address",
    "Geeta University location",
    "Geeta University directions Panipat",
    "Geeta University transport options",
  ],
  alternates: {
    canonical: "https://geetauniversity.edu.in/how-to-reach-us/",
  },
  openGraph: {
    title: "How to Reach Geeta University | Address & Transport Guide",
    description:
      "Get directions to Geeta University. Find transport options, campus location details, and travel tips for a hassle-free visit.",
    images: ["/how-to-reach-us.png"],
  },
};

export default function HowToReachUsPage() {
  return (
    <main className="min-h-screen bg-[#F7F9FC] text-[#0A1F44]">
      {/* Hero Header */}
      <ReachHero />

      {/* Official Route Diagram & Distance Timeline */}
      <ReachInfographicSection />

      {/* Detailed Travel Modes Grid (Air, Train, Bus, Car) */}
      <ReachTransportCards />

      {/* Google Maps Location Embed */}
      <ContactMapSection />

      {/* Legacy & Ecosystem Section */}
      <IndustryEcosystemSection />
    </main>
  );
}
