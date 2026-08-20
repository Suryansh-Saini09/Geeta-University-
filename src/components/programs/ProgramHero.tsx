"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import type { ProgramPageData } from "@/data/programs/types";

interface ProgramHeroProps {
  hero: ProgramPageData["hero"];
}

const heroContent: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const heroImage: Variants = {
  hidden: { opacity: 0, scale: 1.03 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease: "easeOut" },
  },
};

export default function ProgramHero({ hero }: ProgramHeroProps) {
  if (hero.bannerOnly) {
    return (
      <div className="relative w-full min-h-[92vh] lg:h-[calc(100vh-80px)] overflow-hidden flex flex-col">
        <Image
          src={hero.image}
          alt={hero.title || "School Banner"}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
    );
  }

  return (
    <section className="relative isolate overflow-hidden bg-[#0A1F44] text-white">
      {/* Background Image */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={heroImage}
        className="absolute inset-0"
      >
        <Image
          src={hero.image}
          alt={hero.title || "School Banner"}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Image Overlays */}
      <div className="absolute inset-0 bg-[#0A1F44]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071832] via-[#0A1F44]/90 to-[#0A1F44]/40" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#071832]/80 to-transparent" />

      {/* Content */}
      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex min-h-[560px] items-center py-24 md:min-h-[620px] lg:py-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroContent}
            className="max-w-4xl"
          >
            {/* Eyebrow */}
            {hero.eyebrow && (
              <div className="mb-6 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#D89A2B]" />
                <span className="text-[12px] font-bold uppercase tracking-[3px] text-[#D89A2B]">
                  {hero.eyebrow}
                </span>
              </div>
            )}

            {/* Heading */}
            {hero.title && (
              <h1 className="font-['Zilla_Slab',serif] text-[40px] font-extrabold leading-[1.05] tracking-[-1px] text-white sm:text-[52px] md:text-[62px] lg:text-[68px]">
                {hero.title}
              </h1>
            )}

            {/* Gold Accent */}
            <div className="mt-6 h-[3px] w-20 bg-[#D89A2B] rounded-full" />

            {/* Description */}
            {hero.description && (
              <p className="mt-6 max-w-2xl font-['Source_Sans_3',sans-serif] text-[17px] leading-[1.8] text-white/85 md:text-[19px]">
                {hero.description}
              </p>
            )}

            {/* Actions */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#admissions"
                className="group inline-flex items-center gap-3 rounded-full bg-[#D89A2B] px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(216,154,43,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#bf7a19]"
              >
                Enquire Now
                <ArrowUpRight
                  size={17}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="#specialisations"
                className="group inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/20"
              >
                Explore Specialisations
                <ArrowDownRight
                  size={17}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}