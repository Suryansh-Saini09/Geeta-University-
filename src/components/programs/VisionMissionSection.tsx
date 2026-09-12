"use client";

import React from "react";
import { Compass, Target, Lightbulb } from "lucide-react";
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

              {/* Subtitle */}
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E8871A] mb-2.5">
                OUR VISION
              </p>

              {/* Heading */}
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-6 tracking-tight">
                Academic Excellence
              </h3>

              {/* Thin Divider Line */}
              <div className="w-full h-[1px] bg-white/15 mb-6" />

              {/* Vision Text */}
              <p className="text-slate-200 text-base md:text-[17px] leading-relaxed font-normal">
                “{visionText}”
              </p>
            </div>

            {/* Footer Tag */}
            <div className="relative z-10 mt-8 pt-4 flex items-center gap-2.5 text-[#E8871A] font-semibold text-sm">
              <Target className="w-4 h-4 shrink-0" />
              <span>Nation-building through education</span>
            </div>
          </div>

          {/* Mission Card (White) */}
          <div className="bg-white rounded-3xl p-8 md:p-10 flex flex-col justify-between border border-slate-100 shadow-xl shadow-slate-200/40">
            <div>
              {/* Card Header with Subtitle, Heading and Lightbulb Icon */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E8871A] mb-2.5">
                    OUR MISSION
                  </p>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#0B1B3D] tracking-tight">
                    Turning Purpose Into Action
                  </h3>
                </div>

                <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-5 h-5 text-[#E8871A]" />
                </div>
              </div>

              {/* Mission Bullet Points */}
              <ul className="space-y-4 md:space-y-5 text-slate-600 text-sm md:text-[15px] leading-relaxed mt-8">
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
