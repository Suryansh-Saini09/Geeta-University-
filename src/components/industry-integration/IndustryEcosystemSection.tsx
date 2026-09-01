"use client";

import React from "react";
import { legacyEcosystemData } from "@/data/industryIntegration";

export default function IndustryEcosystemSection() {
  const getCardStyles = (accent: "saffron" | "blue" | "navy") => {
    switch (accent) {
      case "saffron":
        return {
          cardBg: "bg-[#E85C2D]",
          textColor: "text-[#FFF5F2]",
          barBg: "bg-[#E85C2D]",
        };
      case "blue":
        return {
          cardBg: "bg-[#07589F]",
          textColor: "text-[#E6F0FA]",
          barBg: "bg-[#07589F]",
        };
      case "navy":
        return {
          cardBg: "bg-[#013D55]",
          textColor: "text-[#E0F7FA]",
          barBg: "bg-[#013D55]",
        };
      default:
        return {
          cardBg: "bg-[#0A1F44]",
          textColor: "text-slate-100",
          barBg: "bg-[#0A1F44]",
        };
    }
  };

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="mb-2 inline-block rounded-full bg-[#0A1F44]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0A1F44]">
            Group Heritage & Synergy
          </span>
          <h2 className="font-serif text-3xl font-extrabold text-[#0A1F44] sm:text-4xl md:text-5xl">
            {legacyEcosystemData.title}
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-12">
          {/* Left Column - Ecosystem Cards */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
              {legacyEcosystemData.intro}
            </p>

            <div className="space-y-4 pt-2">
              {legacyEcosystemData.items.map((item) => {
                const styles = getCardStyles(item.accent);
                return (
                  <div
                    key={item.id}
                    className="group flex items-stretch gap-3 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div
                      className={`flex-grow rounded-xl p-5 sm:p-6 shadow-md transition-all ${styles.cardBg}`}
                    >
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className={`text-sm sm:text-base font-medium ${styles.textColor}`}>
                        {item.subtitle}
                      </p>
                    </div>
                    <div
                      className={`w-2.5 rounded-full opacity-75 transition-opacity group-hover:opacity-100 ${styles.barBg}`}
                    />
                  </div>
                );
              })}
            </div>

            <p className="pt-4 text-base sm:text-lg font-semibold text-slate-700 font-sans border-t border-slate-100">
              {legacyEcosystemData.closing}
            </p>
          </div>

          {/* Right Column - Campus Image */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-2xl transition-all duration-300 hover:shadow-amber-500/10">
              <div className="aspect-square w-full">
                <img
                  src={legacyEcosystemData.image}
                  alt="Geeta Group Campus"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg">
                <p className="text-xs font-bold text-[#0A1F44] uppercase tracking-wider">
                  Geeta University Panipat
                </p>
                <p className="text-xs text-slate-600">
                  Multidisciplinary Smart Campus & Research Facilities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
