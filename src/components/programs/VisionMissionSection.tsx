"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { mission as defaultMission, vision as defaultVision } from "@/data/about";
import type { VisionMissionData } from "@/data/programs/types";

interface VisionMissionSectionProps {
  data?: VisionMissionData;
  schoolName?: string;
}

export default function VisionMissionSection({
  data,
}: VisionMissionSectionProps = {}) {
  const [openSection, setOpenSection] = useState<"vision" | "mission">("vision");

  const rawVision = data?.vision || defaultVision;
  const cleanVision = rawVision ? rawVision.trim().replace(/^["“]+|["”]+$/g, "").trim() : "";

  const rawMissionItems =
    data?.mission && data.mission.length > 0 ? data.mission : defaultMission;
  const missionItems = (rawMissionItems || []).map((m) =>
    m.trim().replace(/^["“]+|["”]+$/g, "").trim()
  );

  if (!cleanVision && (!missionItems || missionItems.length === 0)) {
    return null;
  }

  const toggleSection = (section: "vision" | "mission") => {
    setOpenSection((prev) =>
      prev === section ? (section === "vision" ? "mission" : "vision") : section
    );
  };

  return (
    <section id="vision-mission" className="w-full py-6 md:py-8 bg-slate-50/50">
      <div id="VisionMission" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stacked Dropdown (Accordion) Container */}
        <div className="flex flex-col gap-4 sm:gap-5">
          {/* ==================== OUR VISION ACCORDION ITEM ==================== */}
          <div
            className={`rounded-3xl border transition-all duration-300 overflow-hidden shadow-lg ${
              openSection === "vision"
                ? "bg-[#0B1B3D] border-[#0B1B3D] text-white shadow-xl shadow-[#0B1B3D]/10"
                : "bg-white border-slate-200 text-[#0B1B3D] hover:border-amber-300 shadow-slate-200/50"
            }`}
          >
            {/* Header Trigger */}
            <button
              type="button"
              onClick={() => toggleSection("vision")}
              className="w-full px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between gap-4 text-left transition-colors"
              aria-expanded={openSection === "vision"}
            >
              <div className="flex flex-col">
                <h3
                  className={`text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-wide ${
                    openSection === "vision" ? "text-[#E8871A]" : "text-[#0B1B3D]"
                  }`}
                >
                  Our Vision
                </h3>
                {openSection !== "vision" && (
                  <p className="text-xs sm:text-sm text-slate-500 line-clamp-1 mt-1 font-normal">
                    “{cleanVision.substring(0, 90)}...”
                  </p>
                )}
              </div>

              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  openSection === "vision"
                    ? "bg-white/10 text-white rotate-180"
                    : "bg-slate-100 text-slate-600 hover:bg-amber-100 hover:text-[#E8871A]"
                }`}
              >
                <ChevronDown className="w-5 h-5 transition-transform duration-300" />
              </div>
            </button>

            {/* Dropdown Content */}
            <AnimatePresence initial={false}>
              {openSection === "vision" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2 border-t border-white/10 relative">
                    {/* Background Accent Glow */}
                    <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-[#162A52] pointer-events-none opacity-80" />

                    <p className="relative z-10 text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
                      “{cleanVision}”
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ==================== OUR MISSION ACCORDION ITEM ==================== */}
          <div
            className={`rounded-3xl border transition-all duration-300 overflow-hidden shadow-lg ${
              openSection === "mission"
                ? "bg-[#0B1B3D] border-[#0B1B3D] text-white shadow-xl shadow-[#0B1B3D]/10"
                : "bg-white border-slate-200 text-[#0B1B3D] hover:border-amber-300 shadow-slate-200/50"
            }`}
          >
            {/* Header Trigger */}
            <button
              type="button"
              onClick={() => toggleSection("mission")}
              className="w-full px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between gap-4 text-left transition-colors"
              aria-expanded={openSection === "mission"}
            >
              <div className="flex flex-col">
                <h3
                  className={`text-lg sm:text-xl md:text-2xl font-extrabold uppercase tracking-wide ${
                    openSection === "mission" ? "text-[#E8871A]" : "text-[#0B1B3D]"
                  }`}
                >
                  Our Mission
                </h3>
                {openSection !== "mission" && missionItems.length > 0 && (
                  <p className="text-xs sm:text-sm text-slate-500 line-clamp-1 mt-1 font-normal">
                    {missionItems[0]}
                  </p>
                )}
              </div>

              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  openSection === "mission"
                    ? "bg-white/10 text-white rotate-180"
                    : "bg-slate-100 text-slate-600 hover:bg-amber-100 hover:text-[#E8871A]"
                }`}
              >
                <ChevronDown className="w-5 h-5 transition-transform duration-300" />
              </div>
            </button>

            {/* Dropdown Content */}
            <AnimatePresence initial={false}>
              {openSection === "mission" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2 border-t border-white/10 relative">
                    <ul className="space-y-3.5 sm:space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed">
                      {missionItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3.5">
                          <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#E8871A]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
