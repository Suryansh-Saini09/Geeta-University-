"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import type { ProgramHeroData } from "./types";

interface ProgramHeroProps {
  data?: ProgramHeroData;
  // Flat props for backward compatibility
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  enquireHref?: string;
  exploreHref?: string;
}

const heroContent: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

const heroImage: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.04,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.1,
      ease: "easeOut",
    },
  },
};

export default function ProgramHero(props: ProgramHeroProps) {
  const hero = props.data || props;
  const image = hero.image || "/bba%20banner.jpeg";
  const title = hero.title || "Academic Program";
  const eyebrow = hero.eyebrow || "Geeta University · School of Excellence";
  const description = hero.description;
  const subtitle = hero.subtitle;
  const enquireHref = hero.enquireHref || "#enquiry";
  const exploreHref = hero.exploreHref || "#programs";

  return (
    <section className="relative isolate overflow-hidden bg-[#0A1F44] text-white">
      {/* ====================================================
          BACKGROUND IMAGE
      ==================================================== */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={heroImage}
        className="absolute inset-0"
      >
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* ====================================================
          IMAGE OVERLAY
      ==================================================== */}
      <div className="absolute inset-0 bg-[#0A1F44]/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071832] via-[#0A1F44]/90 to-[#0A1F44]/35" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#071832]/80 to-transparent" />

      {/* ====================================================
          CONTENT
      ==================================================== */}
      <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="flex min-h-[580px] items-center py-24 md:min-h-[640px] lg:min-h-[calc(100vh-140px)] lg:py-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroContent}
            className="max-w-4xl"
          >
            {/* Eyebrow */}
            {eyebrow && (
              <div className="mb-6 flex items-center gap-3">
                <span className="h-0.5 w-10 bg-[#D99A24]" />
                <span className="text-[11px] md:text-[12px] font-extrabold uppercase tracking-[3px] text-[#D99A24]">
                  {eyebrow}
                </span>
              </div>
            )}

            {/* Heading */}
            <h1 className="font-serif text-[40px] sm:text-[52px] md:text-[62px] lg:text-[72px] font-black leading-[1.03] tracking-[-1.5px] text-white">
              {title}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p className="mt-4 text-[20px] sm:text-[24px] font-bold text-[#D99A24]">
                {subtitle}
              </p>
            )}

            {/* Gold Accent Line */}
            <div className="mt-7 h-[3px] w-20 bg-[#D99A24]" />

            {/* Description */}
            {description && (
              <p className="mt-7 max-w-2xl text-[16px] md:text-[18px] leading-[1.8] text-white/85">
                {description}
              </p>
            )}

            {/* Actions */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={enquireHref}
                className="group inline-flex items-center gap-3 rounded-full bg-[#D99A24] px-7 py-4 text-[14px] font-bold text-white shadow-[0_10px_30px_rgba(217,154,36,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c2871b]"
              >
                Enquire Now
                <ArrowUpRight
                  size={18}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href={exploreHref}
                className="group inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-[14px] font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/20"
              >
                Explore Programs
                <ArrowDownRight
                  size={18}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom meta */}
        <div className="absolute bottom-6 left-5 right-5 hidden items-center justify-between border-t border-white/10 pt-4 sm:flex sm:px-8 lg:px-10">
          <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-white/50">
            Geeta University
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#D99A24]">
            Panipat · Delhi NCR
          </span>
        </div>
      </div>
    </section>
  );
}