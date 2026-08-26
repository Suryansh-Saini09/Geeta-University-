"use client";

import React from "react";
import Image from "next/image";
import { placementStats } from "@/data/placements";

export default function PlacementHero() {
  return (
    <section className="w-full bg-white">
      {/* 1. Crisp, Full-Width Top Banner Image */}
      <div className="relative aspect-[21/9] min-h-[280px] w-full sm:min-h-[380px] lg:min-h-[440px] max-h-[500px]">
        <Image
          src="/placements/placement-banner.jpg"
          alt="Geeta University Campus Placements"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_25%]"
        />
      </div>

      {/* 2. Clean Title & Intro Description */}
      <div className="gu-container py-8 sm:py-10">
        <div className="max-w-4xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF3E2] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[2px] text-[#E8871A]">
              <span className="h-2 w-2 rounded-full bg-[#E8871A] animate-pulse" />
              Corporate Placements 2025–26
            </span>
          </div>

          <h1 className="font-serif text-[36px] font-bold text-[#0A1F44] sm:text-[44px] md:text-[50px] leading-[1.12]">
            Placements &amp; Career Development
          </h1>

          <p className="mt-3 text-[16px] leading-[1.75] text-[#4b5563] sm:text-[18px]">
            Geeta University stands among the premier private universities in Haryana and Delhi NCR, renowned for exceptional placement tracks, high-package corporate offers up to ₹1.4 Crore, and 100% structured career development training.
          </p>
        </div>

        {/* 4 Key Stat Cards in Canonical Theme */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {placementStats.map((stat, idx) => (
            <div
              key={idx}
              className="group rounded-[18px] border border-[#E2E8F0] bg-[#F7F9FC] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E8871A]/40 hover:bg-white hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#E8871A]">
                  {stat.label}
                </span>
                <span className="h-2 w-2 rounded-full bg-[#E8871A]" />
              </div>

              <div className="mt-2 font-serif text-[28px] font-black text-[#0A1F44] sm:text-[34px] leading-tight">
                {stat.value}
              </div>

              <p className="mt-1 text-[13px] leading-snug text-[#64748B]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
