"use client";

import React, { useState } from "react";
import { Calendar, Clock } from "lucide-react";
import { day1Schedule, day2Schedule } from "@/data/icnfprData";

export default function IcnfprSchedule() {
  const [activeTab, setActiveTab] = useState<"day1" | "day2">("day1");

  return (
    <section id="schedule" className="py-20 lg:py-24 bg-[#FDF1D6] text-[#0A1F44] border-t border-b border-[#E8871A]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-3 text-[#E8871A] font-extrabold text-xs tracking-widest uppercase">
            <Calendar size={16} />
            <span>Program Timeline</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1F44] tracking-tight">
            Schedule of <span className="text-[#E8871A]">Conference</span>
          </h2>
          <p className="mt-3 text-[#475569] text-sm sm:text-base font-medium">
            Detailed itinerary across the two-day international conference (1st – 2nd May 2026).
          </p>

          {/* Day Selection Tabs for Mobile/Tablet */}
          <div className="inline-flex p-1.5 rounded-2xl bg-white/90 border border-slate-200 mt-8 shadow-sm">
            <button
              onClick={() => setActiveTab("day1")}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${
                activeTab === "day1"
                  ? "bg-[#0A1F44] text-white shadow-md"
                  : "text-slate-600 hover:text-[#0A1F44]"
              }`}
            >
              Day 1 (1st May 2026)
            </button>
            <button
              onClick={() => setActiveTab("day2")}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${
                activeTab === "day2"
                  ? "bg-[#0A1F44] text-white shadow-md"
                  : "text-slate-600 hover:text-[#0A1F44]"
              }`}
            >
              Day 2 (2nd May 2026)
            </button>
          </div>
        </div>

        {/* Schedule Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Day 1 Panel */}
          <div
            className={`bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_8px_30px_rgba(10,31,68,0.05)] ${
              activeTab === "day1" ? "block" : "hidden lg:block"
            }`}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#E8871A] border border-amber-200/60 flex items-center justify-center">
                  <Calendar size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#0A1F44]">
                    1st May 2026 — DAY 1
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">Inauguration, Keynotes &amp; Presentations</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-100 text-[#E8871A] font-bold text-xs uppercase tracking-wider">
                9 Sessions
              </span>
            </div>

            <div className="divide-y divide-slate-100">
              {day1Schedule.map((item, idx) => (
                <div key={idx} className="py-3.5 flex items-start gap-4 hover:bg-slate-50 px-2.5 rounded-xl transition-colors">
                  <div className="w-28 shrink-0 flex items-center gap-1.5 text-xs font-bold text-[#E8871A] pt-0.5">
                    <Clock size={13} />
                    <span>{item.timing}</span>
                  </div>
                  <div className="text-sm font-semibold text-[#0A1F44] flex-1 leading-snug">
                    {item.event}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Day 2 Panel */}
          <div
            className={`bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_8px_30px_rgba(10,31,68,0.05)] ${
              activeTab === "day2" ? "block" : "hidden lg:block"
            }`}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0A1F44] border border-blue-200/60 flex items-center justify-center">
                  <Calendar size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#0A1F44]">
                    2nd May 2026 — DAY 2
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">Technical Tracks &amp; Valedictory</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-blue-100 text-[#0A1F44] font-bold text-xs uppercase tracking-wider">
                7 Sessions
              </span>
            </div>

            <div className="divide-y divide-slate-100">
              {day2Schedule.map((item, idx) => (
                <div key={idx} className="py-3.5 flex items-start gap-4 hover:bg-slate-50 px-2.5 rounded-xl transition-colors">
                  <div className="w-28 shrink-0 flex items-center gap-1.5 text-xs font-bold text-[#0A1F44] pt-0.5">
                    <Clock size={13} />
                    <span>{item.timing}</span>
                  </div>
                  <div className="text-sm font-semibold text-[#0A1F44] flex-1 leading-snug">
                    {item.event}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
