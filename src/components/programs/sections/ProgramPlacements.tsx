"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  Building2,
  BriefcaseBusiness,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import type { ProgramPlacementData, PlacementStat, PlacementRecruiter } from "../types";

interface ProgramPlacementsProps {
  data?: ProgramPlacementData;
}

const iconMap: Record<string, LucideIcon> = {
  Award,
  Building2,
  BriefcaseBusiness,
  TrendingUp,
};

function resolveStatIcon(icon?: LucideIcon | string): LucideIcon {
  if (!icon) return Award;
  if (typeof icon === "string") {
    return iconMap[icon] || Award;
  }
  return icon;
}

export default function ProgramPlacements({ data }: ProgramPlacementsProps) {
  if (!data) return null;

  const eyebrow = data.eyebrow || "CAREER & PLACEMENTS";
  const title = data.title || "Where Ambition Meets Opportunity";
  const description =
    data.description ||
    "Geeta University empowers students with career-defining corporate connections, stellar packages, and comprehensive finishing school training.";

  const heroImage = data.heroImage || "/placements.jpg";
  const note = data.note || {
    headline: "Transforming Potential into Performance",
    subline: "Top Recruiters · Global Opportunities · 100% Placement Support",
  };

  const defaultStats: PlacementStat[] = [
    { value: "40 LPA", label: "Highest Package", icon: Award },
    { value: "550+", label: "Recruiters", icon: Building2 },
    { value: "3500+", label: "Job Offers", icon: BriefcaseBusiness },
  ];

  const stats = data.stats && data.stats.length > 0 ? data.stats : defaultStats;
  const recruiters = data.recruiters || [];
  const packageBars = data.packageBars || [];
  const sectorLegend = data.sectorLegend || [];

  return (
    <section id="placements" className="w-full bg-white font-sans overflow-hidden">
      
      {/* ── PLACEMENT HERO BLOCK ── */}
      <div className="relative overflow-hidden bg-white py-20 md:py-24 border-b border-[#E8EDF4]">
        <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] items-center gap-12 lg:gap-16">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-3 text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#D89A2B] mb-4">
              <span className="w-8 h-[2px] rounded-full bg-[#D89A2B]" />
              {eyebrow}
            </div>

            <h2 className="font-serif text-[36px] sm:text-[46px] md:text-[54px] font-black leading-[1.05] tracking-[-0.04em] text-[#0F2D52]">
              {title}
            </h2>

            <p className="mt-6 text-[16px] sm:text-[18px] font-medium leading-[1.7] text-[#5E6B82] max-w-xl">
              {description}
            </p>
          </motion.div>

          {/* Right Visual Frame */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="relative"
          >
            <div className="relative overflow-hidden min-h-[380px] sm:min-h-[440px] rounded-[28px] border border-[#E8EDF4] bg-[#F8FAFC] shadow-[0_24px_70px_rgba(15,45,82,0.12)]">
              <Image
                src={heroImage}
                alt="Placement at Geeta University"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2D52]/80 via-[#0F2D52]/20 to-transparent" />

              {/* Floating Note */}
              <div className="absolute right-6 bottom-6 left-6 sm:left-auto sm:max-w-[300px] z-10 border border-white/30 rounded-2xl bg-white/90 p-5 shadow-[0_18px_45px_rgba(15,45,82,0.16)] backdrop-blur-md">
                <strong className="block text-[#0F2D52] font-black text-[15px] sm:text-[16px] leading-[1.3]">
                  {note.headline}
                </strong>
                <span className="block text-[#5E6B82] text-[13px] font-semibold leading-[1.5] mt-2">
                  {note.subline}
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── PLACEMENT STATS GRID ── */}
      {stats.length > 0 && (
        <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((stat: PlacementStat, index: number) => {
              const Icon = resolveStatIcon(stat.icon);
              return (
                <motion.div
                  key={`${stat.label}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  className="group relative overflow-hidden min-h-[240px] rounded-[22px] border border-[#E8EDF4] bg-white p-8 sm:p-10 shadow-[0_10px_30px_rgba(15,45,82,0.06)] hover:shadow-[0_20px_45px_rgba(15,45,82,0.12)] hover:-translate-y-1.5 transition-all duration-300"
                >
                  {/* Icon Box */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-white bg-gradient-to-br from-[#0F2D52] to-[#1E4E8C] shadow-[0_12px_26px_rgba(15,45,82,0.18)]">
                    <Icon size={26} strokeWidth={2} />
                  </div>

                  {/* Stat Number */}
                  <div className="mt-8 font-serif text-[42px] sm:text-[50px] font-black text-[#0F2D52] leading-none tracking-[-0.04em]">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <p className="mt-3 text-[15px] sm:text-[16px] font-bold text-[#5E6B82]">
                    {stat.label}
                  </p>

                  {/* Large Watermark Background */}
                  <span className="absolute right-4 bottom-2 text-[#0F2D52]/[0.045] font-black text-[96px] sm:text-[110px] leading-none pointer-events-none select-none tracking-tighter">
                    {index + 1}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── RECRUITERS GRID ── */}
      {recruiters.length > 0 && (
        <div className="w-full bg-[#F8FAFC] py-16 md:py-20 border-y border-[#E8EDF4]">
          <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h3 className="font-serif text-[28px] sm:text-[34px] font-black text-[#0F2D52]">
                Our Leading Corporate Recruiters
              </h3>
              <p className="text-[16px] text-[#5E6B82] mt-3">
                Top national and multinational organizations actively hire graduates from Geeta University.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {recruiters.map((recruiter: PlacementRecruiter, index: number) => (
                <div
                  key={`${recruiter.name}-${index}`}
                  className="h-28 flex items-center justify-center rounded-2xl border border-[#E8EDF4] bg-white p-4 shadow-[0_4px_14px_rgba(15,45,82,0.03)] hover:shadow-[0_12px_30px_rgba(15,45,82,0.08)] hover:-translate-y-1 transition-all duration-300"
                >
                  {recruiter.logo ? (
                    <div className="relative w-full h-12">
                      <Image
                        src={recruiter.logo}
                        alt={recruiter.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 50vw, 16vw"
                      />
                    </div>
                  ) : (
                    <span
                      className="font-extrabold text-[16px] text-center"
                      style={{ color: recruiter.color || "#0F2D52" }}
                    >
                      {recruiter.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── PACKAGE DISTRIBUTION & SECTOR ANALYSIS ── */}
      {(packageBars.length > 0 || sectorLegend.length > 0) && (
        <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Package Distribution Bars */}
            {packageBars.length > 0 && (
              <div className="flex flex-col bg-[#F8FAFC] rounded-3xl p-8 sm:p-10 border border-[#E8EDF4]">
                <h4 className="font-serif text-[24px] sm:text-[26px] font-black text-[#0F2D52] mb-6">
                  Salary Package Analytics
                </h4>
                <div className="space-y-6">
                  {packageBars.map((bar, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center text-[15px] font-bold text-[#0F2D52] mb-2">
                        <span>{bar.label}</span>
                        <span className="text-[#D89A2B]">{bar.value} Offers</span>
                      </div>
                      <div className="w-full h-3.5 bg-white rounded-full overflow-hidden border border-[#E8EDF4]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: bar.width }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                          className="h-full bg-gradient-to-r from-[#0F2D52] to-[#245FA8] rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Sector Analysis Legend */}
            {sectorLegend.length > 0 && (
              <div className="flex flex-col bg-[#F8FAFC] rounded-3xl p-8 sm:p-10 border border-[#E8EDF4]">
                <h4 className="font-serif text-[24px] sm:text-[26px] font-black text-[#0F2D52] mb-6">
                  Sector-Wise Placement Share
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {sectorLegend.map((sec, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E8EDF4]"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="w-3.5 h-3.5 rounded-full shrink-0"
                          style={{ backgroundColor: sec.color }}
                        />
                        <span className="text-[14px] font-semibold text-[#334155]">
                          {sec.label}
                        </span>
                      </div>
                      <span className="font-extrabold text-[14px] text-[#0F2D52]">
                        {sec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
