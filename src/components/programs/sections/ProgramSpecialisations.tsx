"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  TrendingUp,
  BrainCircuit,
  WalletCards,
  Megaphone,
  Globe2,
  Lightbulb,
  BookOpenCheck,
  Landmark,
  Target,
  UsersRound,
  GraduationCap,
  Award,
  BookOpen,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { SpecialisationsData, SpecialisationItem } from "../types";
import SectionHeading from "../shared/SectionHeading";

interface ProgramSpecialisationsProps {
  data: SpecialisationsData;
}

const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  BrainCircuit,
  WalletCards,
  Megaphone,
  Globe2,
  Lightbulb,
  BookOpenCheck,
  Landmark,
  Target,
  UsersRound,
  GraduationCap,
  Award,
  BookOpen,
  Sparkles,
};

function resolveIcon(icon?: LucideIcon | string): LucideIcon {
  if (!icon) return Sparkles;
  if (typeof icon === "string") {
    return iconMap[icon] || Sparkles;
  }
  return icon;
}

export default function ProgramSpecialisations({
  data,
}: ProgramSpecialisationsProps) {
  if (!data || !data.items || data.items.length === 0) {
    return null;
  }

  const eyebrow = data.eyebrow || "EXPLORE YOUR SPECIALISATION";
  const title = data.title || "Programs Designed for Future Leaders";
  const subtitle = data.subtitle;
  const items = data.items;

  return (
    <section
      id="specialisations"
      className="w-full relative font-sans overflow-hidden py-20 md:py-24 lg:py-28"
      style={{
        background: `
          radial-gradient(circle at 90% 10%, rgba(36,95,168,0.06), transparent 25%),
          radial-gradient(circle at 10% 90%, rgba(217,154,36,0.05), transparent 25%),
          linear-gradient(180deg, #FCFDFE 0%, #F5F8FC 100%)
        `,
      }}
    >
      {/* Decorative Texture */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#0F3763_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.025]" />
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
        />

        {/* Directory Grid */}
        <div className="relative w-full max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-2">
          {/* Center Vertical Divider (Desktop Only) */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-[rgba(15,45,82,0.10)] pointer-events-none z-0"
          />

          {items.map((spec: SpecialisationItem, idx: number) => {
            const Icon = resolveIcon(spec.icon);
            const formattedNumber = (idx + 1).toString().padStart(2, "0");
            const isOdd = (idx + 1) % 2 !== 0; // Left column
            const isLast = idx === items.length - 1 && items.length % 2 !== 0;

            return (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (idx % 2) * 0.1, ease: "easeOut" }}
                className={`group relative flex flex-col border-b border-[rgba(15,45,82,0.10)] py-9 md:py-10 ${
                  isLast
                    ? "md:col-span-2 md:justify-self-center md:max-w-[540px] md:px-0"
                    : isOdd
                    ? "md:pl-6 md:pr-14"
                    : "md:pl-14 md:pr-6"
                }`}
              >
                {/* Large Decorative Ghost Number */}
                <div className="absolute top-8 right-6 md:right-8 pointer-events-none select-none z-0 text-[64px] sm:text-[72px] font-black leading-none text-[#0F2D52]/[0.06]">
                  {formattedNumber}
                </div>

                <div className="relative z-10 w-full flex flex-col items-start text-left">
                  {/* Header (Icon + Title) */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center shrink-0 w-12 h-12 rounded-[14px] bg-[#EDF4FC] group-hover:bg-[#0F3763] border border-[#DDE8F4] transition-colors duration-300">
                      <Icon
                        size={24}
                        className="text-[#245FA8] group-hover:text-[#D99A24] transition-colors duration-300"
                      />
                    </div>
                    <h4 className="text-[22px] sm:text-[25px] font-black leading-[1.2] text-[#0B2948] group-hover:text-[#245FA8] transition-colors duration-300">
                      {spec.title}
                    </h4>
                  </div>

                  {/* Gold Underline */}
                  <div className="h-[2px] w-12 group-hover:w-20 bg-[#D99A24] my-5 transition-all duration-300 ease-out" />

                  {/* Learning Outcomes */}
                  <ul className="flex flex-col gap-3">
                    {spec.points.map((point: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-left">
                        <CheckCircle2
                          size={17}
                          className="text-[#2E67AE] shrink-0 mt-1"
                          strokeWidth={2.5}
                        />
                        <span className="text-[15px] sm:text-[16px] font-medium leading-[1.55] text-[#536176]">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
