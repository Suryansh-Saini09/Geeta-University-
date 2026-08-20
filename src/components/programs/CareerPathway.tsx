"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import type { CareerPathwayData } from "./types";
import SectionHeading from "./shared/SectionHeading";

interface CareerPathwayProps {
  data: CareerPathwayData;
}

const cardContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardItem: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function CareerPathway({ data }: CareerPathwayProps) {
  if (!data) return null;

  const eyebrow = data.eyebrow || "CAREER OPPORTUNITIES";
  const title = data.title || "Career Pathways & Professional Growth";
  const description = data.description;
  const highlights = data.highlights || [];
  const recruiters = data.recruiters || [];

  return (
    <section className="relative overflow-hidden bg-[#0A1F44] py-20 md:py-24 lg:py-28 text-white font-sans">
      {/* Background Decorative Rings */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#D99A24]/10" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full border border-white/5" />

      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={description}
          theme="dark"
        />

        {/* Highlights Cards */}
        {highlights.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={cardContainer}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-14"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={`${highlight.label}-${index}`}
                variants={cardItem}
                className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.05] p-7 sm:p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#D99A24]/40 hover:bg-white/[0.08]"
              >
                {/* Number Badge */}
                <span className="text-[10px] font-extrabold uppercase tracking-[2px] text-white/35">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Value */}
                <div className="mt-4 font-serif text-[40px] sm:text-[46px] font-black leading-none text-[#D99A24]">
                  {highlight.value}
                </div>

                {/* Label */}
                <div className="mt-3 text-[12px] sm:text-[13px] font-bold uppercase tracking-[1.5px] text-white/70">
                  {highlight.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Recruiter Badges */}
        {recruiters.length > 0 && (
          <div className="mt-14 pt-10 border-t border-white/10 text-center">
            <p className="text-[12px] font-extrabold uppercase tracking-[2px] text-[#D99A24] mb-6">
              Leading Hiring Partners
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {recruiters.map((recruiter, index) => (
                <span
                  key={index}
                  className="px-5 py-2.5 rounded-full border border-white/15 bg-white/5 text-[14px] font-medium text-white/80 backdrop-blur-sm hover:border-[#D99A24]/40 hover:text-white transition-all"
                >
                  {recruiter}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}