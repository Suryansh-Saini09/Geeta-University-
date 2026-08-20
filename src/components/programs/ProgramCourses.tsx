"use client";

import React from "react";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import type { CourseCategory } from "@/data/programs/types";

interface ProgramCoursesProps {
  data?: ProgramCoursesData;
  courses?: CourseCategoryItem[];
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const cardContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function ProgramCourses({ courses }: ProgramCoursesProps) {
  if (!courses || courses.length === 0) return null;

  return (
    <section className="overflow-hidden bg-[#F8FAFC] py-20 md:py-24 lg:py-28" id="courses">
      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mb-12 max-w-3xl md:mb-14"
        >
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-9 bg-[#D89A2B]" />
            <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#D89A2B]">
              Academics &amp; Degrees
            </span>
          </div>

          <h2 className="mt-5 font-['Zilla_Slab',serif] text-[36px] font-extrabold leading-[1.08] tracking-[-1px] text-[#0A1F44] sm:text-[44px] md:text-[50px]">
            Academic Programs <span className="text-[#D89A2B]">Offered</span>
          </h2>

          <div className="mt-5 flex items-center gap-2">
            <span className="h-[3px] w-12 bg-[#D89A2B] rounded-full" />
            <span className="h-[3px] w-3 bg-[#0A1F44] rounded-full" />
          </div>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={cardContainer}
          className="grid gap-6 md:grid-cols-2 lg:gap-8 max-w-5xl mx-auto"
        >
          {categories.map((category: CourseCategoryItem, categoryIndex: number) => (
            <motion.article
              key={category.title}
              variants={cardItem}
              className="group relative overflow-hidden rounded-[20px] border border-[#E2E8F0] bg-white p-6 shadow-[0_8px_30px_rgba(10,31,68,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D89A2B]/40 hover:shadow-[0_16px_38px_rgba(10,31,68,0.08)] md:p-8"
            >
              <span className="absolute left-0 top-0 h-[3px] w-0 bg-[#D89A2B] transition-all duration-500 group-hover:w-full" />

              <div className="flex items-start justify-between gap-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#0A1F44] text-[#D89A2B] transition-all duration-300 group-hover:bg-[#D89A2B] group-hover:text-white">
                    <BookOpen size={22} strokeWidth={1.8} />
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#94A3B8]">
                      Degree Level {String(categoryIndex + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-1 font-['Zilla_Slab',serif] text-[24px] font-bold leading-tight text-[#0A1F44] md:text-[26px]">
                      {category.title}
                    </h3>
                  </div>
                </div>

              {category.duration && (
                <div className="mt-4 flex flex-wrap gap-2 text-[13px] font-semibold text-[#64748B]">
                  <span className="rounded-md bg-[#F1F5F9] px-3 py-1 text-[#0F2D52]">
                    Duration: {category.duration}
                  </span>
                </div>
              )}

              {category.eligibility && (
                <p className="mt-3 text-[14px] leading-relaxed text-[#64748B]">
                  <strong className="text-[#334155]">Eligibility:</strong> {category.eligibility}
                </p>
              )}

              <div className="mt-6 space-y-3">
                {category.programs.map((program, programIndex) => (
                  <div
                    key={program.name}
                    className="group/program flex items-center justify-between gap-4 rounded-[12px] border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 transition-all duration-300 hover:border-[#D89A2B]/40 hover:bg-white hover:shadow-[0_6px_20px_rgba(10,31,68,0.05)]"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0A1F44]/5 text-[11px] font-bold text-[#64748B] transition-colors duration-300 group-hover/program:bg-[#D89A2B]/10 group-hover/program:text-[#D89A2B]">
                        {String(programIndex + 1).padStart(2, "0")}
                      </span>

                      <span className="truncate text-[15px] font-semibold text-[#334155] transition-colors duration-300 group-hover/program:text-[#0A1F44]">
                        {program.name}
                      </span>
                    </div>

                    {program.href ? (
                      <a
                        href={program.href}
                        aria-label={`View ${program.name}`}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#DCE2EB] text-[#94A3B8] transition-all duration-300 hover:border-[#D89A2B] hover:bg-[#D89A2B] hover:text-white"
                      >
                        <ArrowUpRight size={16} strokeWidth={1.8} />
                      </a>
                    ) : (
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#DCE2EB] text-[#94A3B8] transition-all duration-300 group-hover/program:border-[#D89A2B]/40 group-hover/program:text-[#D89A2B]">
                        <ArrowUpRight size={16} strokeWidth={1.8} />
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}