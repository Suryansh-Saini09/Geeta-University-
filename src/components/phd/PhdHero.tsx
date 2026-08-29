"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, Award, BookOpen, Clock } from "lucide-react";

export default function PhdHero() {
  return (
    <section className="w-full bg-white">
      {/* 1. Large Top Banner with Promo Badge */}
      <div className="relative w-full overflow-hidden bg-[#0A1F44]">
        <div className="relative h-[280px] sm:h-[380px] md:h-[480px] lg:h-[560px] xl:h-[620px] w-full">
          <Image
            src="https://geetauniversity.edu.in/uploads/all/1871/Ph.d.webp"
            alt="PhD Admissions at Geeta University"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Dark gradient overlay for text protection */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/90 via-[#0A1F44]/40 to-transparent" />

          {/* Overlay Promo Badge */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 text-center sm:bottom-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#BC7A3E]/95 px-5 py-2 sm:px-8 sm:py-3 shadow-2xl backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-white animate-pulse shrink-0" />
              <span className="text-[13px] sm:text-[16px] md:text-[18px] font-bold text-white tracking-wide">
                Part Time for Working Professionals in Corporate &amp; Academia
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Hero Header & Overview */}
      <div className="gu-container py-12 sm:py-16 md:py-20 lg:py-24 border-b border-[#E2E8F0]">
        <div className="max-w-5xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#E8871A]" />
            <span className="text-[12px] sm:text-[14px] font-extrabold uppercase tracking-[3px] text-[#E8871A]">
              Doctoral Admissions 2026-27
            </span>
          </div>

          <h1 className="font-serif text-[36px] sm:text-[46px] md:text-[54px] lg:text-[60px] font-black text-[#0A1F44] leading-[1.14] tracking-[-1.5px]">
            Explore Doctoral Programs (Ph.D.) at{" "}
            <span className="text-[#E8871A]">Geeta University</span>
          </h1>

          <div className="mt-6 space-y-4 text-[17px] sm:text-[19px] md:text-[20px] leading-[1.8] text-[#334155]">
            <p>
              Enroll in a UGC-compliant Ph.D. at a leading multidisciplinary state private university with expert faculty,
              advanced research computing, high-tech labs, and interdisciplinary collaboration. Geeta University offers
              flexible full-time and part-time doctoral tracks designed for scholars, industry leaders, and academicians.
            </p>
          </div>

          {/* Key Metric Highlights */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 pt-4">
            <div className="rounded-[16px] border border-[#E2E8F0] bg-[#F8FAFC] p-4 sm:p-5 text-center">
              <div className="font-serif text-[28px] sm:text-[34px] font-bold text-[#0A1F44]">₹40,000</div>
              <div className="text-[13px] sm:text-[14px] font-semibold text-[#64748B] mt-1">Monthly Stipend</div>
            </div>
            <div className="rounded-[16px] border border-[#E2E8F0] bg-[#F8FAFC] p-4 sm:p-5 text-center">
              <div className="font-serif text-[28px] sm:text-[34px] font-bold text-[#0A1F44]">10+</div>
              <div className="text-[13px] sm:text-[14px] font-semibold text-[#64748B] mt-1">Research Disciplines</div>
            </div>
            <div className="rounded-[16px] border border-[#E2E8F0] bg-[#F8FAFC] p-4 sm:p-5 text-center">
              <div className="font-serif text-[28px] sm:text-[34px] font-bold text-[#0A1F44]">Hybrid</div>
              <div className="text-[13px] sm:text-[14px] font-semibold text-[#64748B] mt-1">Weekend Coursework</div>
            </div>
            <div className="rounded-[16px] border border-[#E2E8F0] bg-[#F8FAFC] p-4 sm:p-5 text-center">
              <div className="font-serif text-[28px] sm:text-[34px] font-bold text-[#0A1F44]">UGC</div>
              <div className="text-[13px] sm:text-[14px] font-semibold text-[#64748B] mt-1">Compliant Framework</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
