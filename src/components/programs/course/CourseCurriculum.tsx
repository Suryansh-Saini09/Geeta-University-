"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { CourseCurriculum as CourseCurriculumType, CourseCurriculumSection } from "@/data/programs/courses/types";

interface CourseCurriculumProps {
  curriculum: CourseCurriculumType;
}

export default function CourseCurriculum({ curriculum }: CourseCurriculumProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!curriculum || !curriculum.sections) return null;

  return (
    <section className="w-full bg-white py-14 md:py-20 border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="mb-10">
          <span className="text-xs uppercase tracking-widest text-amber-600 font-semibold">
            Curriculum Structure
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0A1F44] mt-1">
            {curriculum.title}
          </h2>
          {curriculum.description && (
            <p className="text-slate-600 text-base mt-2 max-w-2xl">
              {curriculum.description}
            </p>
          )}
        </div>

        <div className="space-y-4 max-w-4xl">
          {curriculum.sections.map((sec: CourseCurriculumSection, idx: number) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-lg overflow-hidden bg-slate-50"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 flex items-center justify-between text-left font-serif font-bold text-lg text-[#0A1F44]"
                >
                  <span>{sec.title}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      isOpen ? "rotate-180 text-amber-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="p-5 border-t border-slate-200 bg-white">
                    {sec.description && (
                      <p className="text-slate-600 text-sm mb-4">
                        {sec.description}
                      </p>
                    )}
                    <ul className="space-y-2">
                      {sec.items.map((item: string, itemIdx: number) => (
                        <li
                          key={itemIdx}
                          className="flex items-center gap-2 text-slate-800 text-sm font-medium"
                        >
                          <span className="text-amber-600 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
