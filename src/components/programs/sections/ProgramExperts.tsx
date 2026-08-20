"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  GraduationCap,
  BookOpen,
  HardHat,
  Check,
  type LucideIcon,
} from "lucide-react";
import type { ProgramExpertsData, ExpertCategoryItem } from "../types";
import SectionHeading from "../shared/SectionHeading";

interface ProgramExpertsProps {
  data: ProgramExpertsData | ExpertCategoryItem[];
}

const defaultIcons: Record<string, LucideIcon> = {
  TrendingUp,
  Users,
  GraduationCap,
  BookOpen,
  HardHat,
};

function resolveExpertIcon(icon?: LucideIcon | string, index: number = 0): LucideIcon {
  if (typeof icon === "string" && defaultIcons[icon]) {
    return defaultIcons[icon];
  }
  if (icon && typeof icon !== "string") {
    return icon;
  }
  const fallbackList = [TrendingUp, Users, GraduationCap, BookOpen, HardHat];
  return fallbackList[index % fallbackList.length];
}

const defaultRibbons = ["#0A1F44", "#0F2A56", "#1B4B8F", "#2E63B8", "#5B8FD9"];

export default function ProgramExperts({ data }: ProgramExpertsProps) {
  const categories: ExpertCategoryItem[] = Array.isArray(data) ? data : data?.categories || [];

  if (!categories || categories.length === 0) {
    return null;
  }

  const eyebrow = (!Array.isArray(data) && data?.eyebrow) || "INDUSTRY & ACADEMIC ECOSYSTEM";
  const title = (!Array.isArray(data) && data?.title) || "Learn from 5 Categories of Experts";
  const subtitle =
    (!Array.isArray(data) && data?.subtitle) ||
    "A multi-dimensional teaching model connecting core faculty, technical hubs, finishing school trainers, and seasoned corporate leaders.";

  return (
    <section className="w-full relative overflow-hidden bg-[#FBF8F1] py-20 md:py-24 lg:py-28 font-sans">
      {/* Texture */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(13,48,83,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(13,48,83,0.04)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,transparent,black_16%,black_82%,transparent)]" />
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
        />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10">
          {categories.map((category: ExpertCategoryItem, index: number) => {
            const Icon = resolveExpertIcon(category.icon, index);
            const formattedNumber = (category.number || index + 1).toString().padStart(2, "0");
            const ribbonColor = category.ribbonColor || defaultRibbons[index % defaultRibbons.length];

            return (
              <motion.article
                key={`${category.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className="group relative flex flex-col rounded-[22px] border border-[#E8EDF5] bg-white p-7 sm:p-8 shadow-[0_10px_30px_rgba(15,45,82,0.06)] hover:shadow-[0_20px_45px_rgba(15,45,82,0.12)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
              >
                {/* Top Ribbon Strip */}
                <div
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ backgroundColor: ribbonColor }}
                />

                {/* Card Header (Icon + Number) */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-md transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: ribbonColor }}
                  >
                    <Icon size={22} strokeWidth={2} />
                  </div>

                  <span className="font-serif text-[28px] sm:text-[32px] font-black text-[#0F2D52]/20">
                    {formattedNumber}
                  </span>
                </div>

                {/* Card Copy */}
                <h3 className="font-serif text-[22px] sm:text-[24px] font-black text-[#0B2948] leading-[1.2]">
                  {category.title}
                </h3>

                <p className="text-[13px] font-bold uppercase tracking-wider text-[#D89A2B] mt-2 mb-6">
                  {category.subtitle}
                </p>

                {/* Divider */}
                <div className="h-px w-full bg-[#E8EDF5] mb-6" />

                {/* Points List */}
                <ul className="space-y-3 mt-auto">
                  {category.points.map((point: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-left">
                      <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#D99A24]/15 text-[#D99A24]">
                        <Check size={11} strokeWidth={3.5} />
                      </div>
                      <span className="text-[14px] sm:text-[15px] font-medium leading-[1.5] text-[#536176]">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
