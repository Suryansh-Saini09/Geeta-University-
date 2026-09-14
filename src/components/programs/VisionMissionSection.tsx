"use client";

import React from "react";
import { Compass, Lightbulb } from "lucide-react";
import { mission as defaultMission, vision as defaultVision } from "@/data/about";
import type { VisionMissionData } from "@/data/programs/types";

interface VisionMissionSectionProps {
  data?: VisionMissionData;
  schoolName?: string;
}

export default function VisionMissionSection({
  data,
  schoolName,
}: VisionMissionSectionProps = {}) {
  const visionText = data?.vision || defaultVision;
  const missionItems =
    data?.mission && data.mission.length > 0 ? data.mission : defaultMission;

  if (!visionText && (!missionItems || missionItems.length === 0)) {
    return null;
  }

  return (
    <section id="vision-mission" className="w-full py-12 md:py-16 bg-slate-50/50">
      <div id="VisionMission" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Vision Card (Dark Navy) */}
          <div className="bg-[#0B1B3D] text-white rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden shadow-xl">
            {/* Top Right Decorative Background Shape */}
            <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-[#162A52] pointer-events-none opacity-80" />

            <div className="relative z-10">
              {/* Compass Icon Badge */}
              <div className="w-12 h-12 rounded-2xl bg-[#E8871A] flex items-center justify-center mb-8 shadow-md">
                <Compass className="w-6 h-6 text-white" />
              </div>

              {/* Heading */}
              <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide text-[#E8871A] mb-5">
                OUR VISION
              </h2>

              {/* Vision Text */}
              <p className="text-slate-200 text-base md:text-[17px] leading-relaxed font-normal">
                “{visionText}”
              </p>
            </div>
          </div>

          {/* Mission Card (White) */}
          <div className="bg-white rounded-3xl p-8 md:p-10 flex flex-col justify-between border border-slate-100 shadow-xl shadow-slate-200/40">
            <div>
              {/* Card Header with Heading and Lightbulb Icon */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide text-[#E8871A]">
                  OUR MISSION
                </h2>

                <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-5 h-5 text-[#E8871A]" />
                </div>
              </div>

              {/* Mission Bullet Points */}
              <ul className="space-y-4 md:space-y-5 text-slate-600 text-sm md:text-[15px] leading-relaxed mt-6">
                {missionItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#E8871A]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
