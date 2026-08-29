"use client";

import React, { useState } from "react";
import Link from "next/link";
import { gutsApplicablePrograms } from "@/data/gutsData";
import { ChevronDown, ArrowRight, BookOpen } from "lucide-react";

export default function GutsProgramsApplicable() {
  const [openSchool, setOpenSchool] = useState<string | null>("cse");

  const toggleSchool = (id: string) => {
    setOpenSchool((prev) => (prev === id ? null : id));
  };

  return (
    <section id="programs-applicable" className="w-full bg-[#EBF2FA] py-14 sm:py-18 md:py-22 border-b border-[#D6E4F0]">
      <div className="gu-container">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#E8871A]" />
            <span className="text-[12px] font-extrabold uppercase tracking-[3px] text-[#E8871A]">
              Course Eligibility
            </span>
            <span className="h-[2px] w-8 bg-[#E8871A]" />
          </div>
          <h2 className="font-serif text-[32px] sm:text-[42px] font-black text-[#0A1F44]">
            Programs Applicable Under GUTS
          </h2>
          <p className="mt-2 text-[16px] text-[#64748B]">
            Explore all undergraduate, diploma, and postgraduate programs eligible for tuition fee scholarships through GUTS score.
          </p>
        </div>

        {/* 2-Column Responsive Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">
          {gutsApplicablePrograms.map((school) => {
            const isOpen = openSchool === school.id;
            return (
              <div
                key={school.id}
                className="overflow-hidden rounded-[16px] border border-[#CAD3DA] bg-white shadow-sm transition-all duration-200"
              >
                <button
                  onClick={() => toggleSchool(school.id)}
                  className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-[#F8FAFC]"
                >
                  <span className="font-serif text-[17px] sm:text-[18px] font-bold text-[#0C2E4C] leading-snug">
                    {school.schoolName}
                  </span>
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full bg-[#F1F5F9] text-[#0A1F44] transition-transform duration-200 shrink-0 ml-3 ${
                      isOpen ? "rotate-180 bg-[#E8871A] text-white" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-[#F1F5F9] bg-[#FAFBFD] p-5">
                    <ul className="space-y-2.5">
                      {school.programs.map((prog, pIdx) => (
                        <li key={pIdx}>
                          <Link
                            href={prog.href}
                            className="group flex items-center justify-between text-[14.5px] font-semibold text-[#06355F] hover:text-[#E8871A] transition-colors"
                          >
                            <span>• {prog.name}</span>
                            <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                          </Link>
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
