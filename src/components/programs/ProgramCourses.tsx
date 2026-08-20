"use client";

import React from "react";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import type { ProgramCoursesData, CourseCategoryItem } from "./types";
import SectionHeading from "./shared/SectionHeading";

interface ProgramCoursesProps {
  data?: ProgramCoursesData;
  courses?: CourseCategoryItem[];
}

const cardContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function ProgramCourses({
  data,
  courses,
}: ProgramCoursesProps) {
  const categories = data?.categories || courses || [];

  if (!categories || categories.length === 0) {
    return null;
  }

  const eyebrow = data?.eyebrow || "Academics";
  const title = data?.title || "Programs Offered";
  const subtitle = data?.subtitle || "Explore degrees designed to connect academic learning with the opportunities of tomorrow.";

  return (
    <section
      id="programs"
      className="overflow-hidden bg-[#F7F9FC] py-20 md:py-24 lg:py-28 font-sans"
    >
      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
        />

        {/* Categories Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          variants={cardContainer}
          className="grid gap-6 md:grid-cols-2 lg:gap-8 max-w-5xl mx-auto"
        >
          {categories.map((category: CourseCategoryItem, categoryIndex: number) => (
            <motion.article
              key={category.title}
              variants={cardItem}
              className="group relative overflow-hidden rounded-[20px] border border-[#DCE2EB] bg-white p-6 sm:p-8 shadow-[0_8px_30px_rgba(10,31,68,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D99A24]/40 hover:shadow-[0_18px_45px_rgba(10,31,68,0.09)]"
            >
              {/* Top Accent Line */}
              <span className="absolute left-0 top-0 h-[3px] w-0 bg-[#D99A24] transition-all duration-500 group-hover:w-full" />

              {/* Category Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-[#0A1F44] text-[#D99A24] transition-all duration-300 group-hover:bg-[#D99A24] group-hover:text-white">
                    <BookOpen size={22} strokeWidth={1.8} />
                  </div>

                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-[2px] text-[#94A3B8]">
                      {String(categoryIndex + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-1 font-serif text-[22px] sm:text-[24px] font-black leading-tight text-[#0A1F44]">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {(category.duration || category.eligibility) && (
                  <div className="hidden sm:flex flex-col items-end text-right">
                    {category.duration && (
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#D99A24]">
                        {category.duration}
                      </span>
                    )}
                    {category.eligibility && (
                      <span className="text-[12px] text-[#64748B] mt-0.5">
                        {category.eligibility}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Program List */}
              <div className="mt-7 space-y-3">
                {category.programs.map((program, programIndex) => (
                  <div
                    key={program.name}
                    className="group/program flex items-center justify-between gap-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 transition-all duration-300 hover:border-[#D99A24]/40 hover:bg-white hover:shadow-[0_6px_20px_rgba(10,31,68,0.06)]"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0A1F44]/5 text-[11px] font-bold text-[#64748B] transition-colors duration-300 group-hover/program:bg-[#D99A24]/15 group-hover/program:text-[#D99A24]">
                        {String(programIndex + 1).padStart(2, "0")}
                      </span>

                      <span className="truncate text-[14px] sm:text-[15px] font-semibold text-[#334155] transition-colors duration-300 group-hover/program:text-[#0A1F44]">
                        {program.name}
                      </span>
                    </div>

                    {program.href ? (
                      <a
                        href={program.href}
                        aria-label={`View ${program.name}`}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#DCE2EB] text-[#94A3B8] transition-all duration-300 hover:border-[#D99A24] hover:bg-[#D99A24] hover:text-white"
                      >
                        <ArrowUpRight size={16} strokeWidth={2} />
                      </a>
                    ) : (
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#DCE2EB] text-[#94A3B8] transition-all duration-300 group-hover/program:border-[#D99A24]/40 group-hover/program:text-[#D99A24]">
                        <ArrowUpRight size={16} strokeWidth={2} />
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom Accent Line */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#0A1F44] transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}