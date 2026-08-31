"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Award } from "lucide-react";

export default function FeeHero() {
  return (
    <section className="w-full bg-white">
      {/* 1. Large Top Banner Image */}
      <div className="relative w-full overflow-hidden bg-[#0A1F44]">
        <div className="relative h-[220px] sm:h-[320px] md:h-[400px] lg:h-[460px] xl:h-[500px] w-full">
          <Image
            src="/fee-and-scholarship/scholarship-hero.jpg"
            alt="Fee Structure & Scholarships at Geeta University"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Subtle gradient overlay to ensure seamless blending */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/40 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* 2. Structured Hero Content Section */}
      <div className="gu-container py-12 sm:py-16 md:py-20 border-b border-[#E2E8F0]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading & Mission statement */}
          <div className="lg:col-span-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#E8871A]" />
              <span className="text-[12px] sm:text-[13px] font-extrabold uppercase tracking-[2.5px] text-[#E8871A]">
                Admissions 2026–27
              </span>
            </div>

            <h1 className="font-serif text-[34px] sm:text-[44px] md:text-[52px] font-black text-[#0A1F44] leading-[1.15] tracking-[-1px]">
              Fee Structure &amp; <span className="text-[#E8871A]">Scholarships</span>
            </h1>

            <p className="mt-6 text-[17px] sm:text-[19px] md:text-[20px] leading-[1.8] text-[#334155] font-normal">
              Geeta University (GU) strongly believes that monetary constraints should never be an obstacle for an ambitious student to have access to world-class, transformative education. We offer an extensive range of merit, entrance test, sports, and social responsibility scholarships covering up to <strong>100% tuition fee waiver</strong>.
            </p>

            {/* Quick Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#scholarship-calculator"
                className="inline-flex items-center gap-2 rounded-[8px] bg-[#E8871A] px-6 py-3.5 text-[15px] font-bold text-white shadow-md transition-all hover:bg-[#D47309] hover:shadow-lg"
              >
                <span>Calculate My Scholarship</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#hostel-transport-calculator"
                className="inline-flex items-center gap-2 rounded-[8px] border-2 border-[#0A1F44] bg-white px-6 py-3 text-[15px] font-bold text-[#0A1F44] transition-all hover:bg-[#F8FAFC]"
              >
                <span>Hostel &amp; Bus Charges</span>
              </a>
            </div>
          </div>

          {/* Right Column: Key Highlights Card */}
          <div className="lg:col-span-4">
            <div className="rounded-[20px] bg-gradient-to-br from-[#06355F] to-[#0A1F44] p-6 sm:p-8 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/15">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8871A] text-white">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-serif text-[19px] font-bold text-white">
                    Scholarship Highlights
                  </h3>
                  <p className="text-[12px] text-white/70">
                    Transparent &amp; Merit-Driven
                  </p>
                </div>
              </div>

              <ul className="space-y-4 text-[14px] leading-snug">
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E8871A]/20 text-[#E8871A]">
                    ✓
                  </div>
                  <span className="text-white/90">
                    Up to <strong>100% Tuition Fee Waiver</strong> based on Qualifying Exam / GUTS / CUET.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E8871A]/20 text-[#E8871A]">
                    ✓
                  </div>
                  <span className="text-white/90">
                    Special <strong>Pragati Scholarship</strong> for HP, J&amp;K, Ladakh &amp; NE states.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E8871A]/20 text-[#E8871A]">
                    ✓
                  </div>
                  <span className="text-white/90">
                    Social grants for <strong>Defense, Freedom Fighters &amp; Single Mother child</strong>.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E8871A]/20 text-[#E8871A]">
                    ✓
                  </div>
                  <span className="text-white/90">
                    Dedicated <strong>Hostel &amp; Transport Predictor</strong> for accurate annual budgeting.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
