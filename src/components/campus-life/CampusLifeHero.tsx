"use client";

import React from "react";
import Image from "next/image";
import { campusLifeHeroData } from "@/data/campusLife";

interface CampusLifeHeroProps {
  onOpenVirtualTour?: () => void;
}

export default function CampusLifeHero({ onOpenVirtualTour }: CampusLifeHeroProps) {
  return (
    <section className="w-full bg-white">
      {/* 1. Crisp, Full-Width Top Banner Image (No blue overlays) */}
      <div className="relative aspect-[21/9] min-h-[260px] w-full sm:min-h-[360px] lg:min-h-[480px]">
        <Image
          src={campusLifeHeroData.bannerImage}
          alt="Geeta University Campus Life - Modern Classroom"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* 2. Clean Title & Intro Description */}
      <div className="gu-container py-8 sm:py-10">
        <div className="max-w-4xl">
          <h1 className="font-serif text-[36px] font-bold text-[#0A1F44] sm:text-[44px] md:text-[50px]">
            Campus Life
          </h1>

          <p className="mt-3 text-[16px] leading-[1.75] text-[#4b5563] sm:text-[18px]">
            {campusLifeHeroData.description}
          </p>
        </div>
      </div>
    </section>
  );
}
