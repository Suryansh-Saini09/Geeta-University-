"use client";

import React from "react";
import Link from "next/link";
import { ugSchoolsData } from "@/data/programsAfter12";
import ScholarshipCalculator from "./ScholarshipCalculator";

export default function ProgramsListSection() {
  const col1Schools = ugSchoolsData.slice(0, 5); // CSE, Pharmacy, Law, Health, Sciences
  const col2Schools = ugSchoolsData.slice(5); // Commerce, Humanities, Agriculture, Hospitality

  return (
    <section id="programs-catalog" className="scroll-mt-20 bg-[#F3F5F6] py-12 sm:py-16">
      <div className="gu-container">
        {/* Main 2-Column Section Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Left Side: Schools in 2 Sub-Columns (8 cols) */}
          <div className="lg:col-span-8 xl:col-span-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Sub-Column 1 */}
              <div className="space-y-6">
                {col1Schools.map((school, index) => (
                  <div
                    key={index}
                    className="rounded-[24px] bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.1)] transition-shadow duration-200 hover:shadow-md"
                  >
                    <h3 className="font-serif text-[19px] sm:text-[20px] font-bold text-[#0B2D4C] mb-3 leading-snug">
                      {school.schoolName}
                    </h3>

                    <ul className="space-y-2 pl-5 list-disc marker:text-[#06355F]">
                      {school.programs.map((program, pIdx) => (
                        <li key={pIdx}>
                          <Link
                            href={program.href}
                            className="font-sans text-[15px] sm:text-[16px] text-[#06355F] hover:text-[#E8871A] hover:underline transition-colors leading-snug block"
                          >
                            {program.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Sub-Column 2 */}
              <div className="space-y-6">
                {col2Schools.map((school, index) => (
                  <div
                    key={index}
                    className="rounded-[24px] bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.1)] transition-shadow duration-200 hover:shadow-md"
                  >
                    <h3 className="font-serif text-[19px] sm:text-[20px] font-bold text-[#0B2D4C] mb-3 leading-snug">
                      {school.schoolName}
                    </h3>

                    <ul className="space-y-2 pl-5 list-disc marker:text-[#06355F]">
                      {school.programs.map((program, pIdx) => (
                        <li key={pIdx}>
                          <Link
                            href={program.href}
                            className="font-sans text-[15px] sm:text-[16px] text-[#06355F] hover:text-[#E8871A] hover:underline transition-colors leading-snug block"
                          >
                            {program.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Scholarship Calculator & Key Achievements (4 cols) */}
          <div id="fee-calculator" className="space-y-6 lg:col-span-4 xl:col-span-4">
            {/* 1. Calculator Card */}
            <ScholarshipCalculator />

            {/* 2. Key Placement Records */}
            <div className="space-y-4 pt-2">
              {/* Card 1: 40 LPA */}
              <div className="rounded-[24px] bg-[#0B2D4C] p-7 text-center text-white shadow-md">
                <div className="font-serif text-[42px] font-bold text-white leading-none mb-1">
                  40 LPA
                </div>
                <div className="text-[16px] uppercase tracking-wider text-white font-medium">
                  Highest Package
                </div>
              </div>

              {/* Card 2: 550+ */}
              <div className="rounded-[24px] bg-[#0B2D4C] p-7 text-center text-white shadow-md">
                <div className="font-serif text-[42px] font-bold text-white leading-none mb-1">
                  550+
                </div>
                <div className="text-[16px] uppercase tracking-wider text-white font-medium">
                  Top Recruiters
                </div>
              </div>

              {/* Card 3: 3500+ */}
              <div className="rounded-[24px] bg-[#0B2D4C] p-7 text-center text-white shadow-md">
                <div className="font-serif text-[42px] font-bold text-white leading-none mb-1">
                  3500+
                </div>
                <div className="text-[16px] uppercase tracking-wider text-white font-medium">
                  Job Offers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
