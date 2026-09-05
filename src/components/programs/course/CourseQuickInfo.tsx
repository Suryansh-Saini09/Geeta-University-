"use client";

import React from "react";
import type { CourseQuickInfo as CourseQuickInfoType } from "@/data/programs/courses/types";

interface CourseQuickInfoProps {
  quickInfo: CourseQuickInfoType;
}

export default function CourseQuickInfo({ quickInfo }: CourseQuickInfoProps) {
  return (
    <section className="w-full bg-[#0A1F44] text-white py-8 border-b border-slate-800">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-700/60">
          {/* Program */}
          <div className="pt-4 md:pt-0 md:pr-6">
            <span className="block text-xs uppercase tracking-widest text-amber-400 font-semibold mb-1">
              PROGRAMME
            </span>
            <h2 className="text-xl md:text-2xl font-bold font-serif text-white tracking-tight">
              {quickInfo.program}
            </h2>
          </div>

          {/* Duration */}
          <div className="pt-4 md:pt-0 md:px-6">
            <span className="block text-xs uppercase tracking-widest text-amber-400 font-semibold mb-1">
              DURATION
            </span>
            <p className="text-xl md:text-2xl font-semibold text-slate-100">
              {quickInfo.duration}
            </p>
          </div>

          {/* Eligibility */}
          <div className="pt-4 md:pt-0 md:pl-6">
            <span className="block text-xs uppercase tracking-widest text-amber-400 font-semibold mb-1">
              ELIGIBILITY
            </span>
            <p className="text-sm md:text-base text-slate-200 leading-relaxed">
              {quickInfo.eligibility}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
