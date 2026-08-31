"use client";

import React from "react";
import { cuetTimelineSteps } from "@/data/cuetData";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function CuetAdmissionProcess() {
  return (
    <section id="cuet-process" className="w-full bg-[#F9F6F2] py-14 sm:py-18 md:py-22 border-b border-[#E8E1D9]">
      <div className="gu-container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#E8871A]" />
            <span className="text-[12px] font-extrabold uppercase tracking-[3px] text-[#E8871A]">
              Online &amp; Fast-Track
            </span>
            <span className="h-[2px] w-8 bg-[#E8871A]" />
          </div>
          <h2 className="font-serif text-[30px] sm:text-[38px] md:text-[44px] font-black text-[#0A1F44] leading-tight">
            CUET Admission Process at Geeta University
          </h2>
          <p className="mt-2 text-[16px] text-[#64748B]">
            Simple, transparent, and fully online 6-step admission procedure for CUET UG candidates.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative max-w-4xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cuetTimelineSteps.map((step) => {
              const isHighlight = step.isHighlight;
              return (
                <div
                  key={step.stepNumber}
                  className={`rounded-[20px] p-6 sm:p-7 transition-all duration-300 ${
                    isHighlight
                      ? "bg-white border-2 border-[#E8871A] shadow-[0_10px_30px_rgba(232,135,26,0.15)]"
                      : "bg-white border border-[#E2E8F0] shadow-sm hover:border-[#CBD5E1]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-[15px] font-black ${
                        isHighlight ? "bg-[#E8871A] text-white" : "bg-[#0A1F44] text-white"
                      }`}
                    >
                      {step.stepNumber}
                    </div>
                    <span
                      className={`text-[11px] font-extrabold uppercase tracking-wider ${
                        isHighlight ? "text-[#E8871A]" : "text-[#64748B]"
                      }`}
                    >
                      Step 0{step.stepNumber}
                    </span>
                  </div>

                  <h3 className="font-serif text-[20px] font-bold text-[#0A1F44] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[14.5px] leading-relaxed text-[#475569]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#enquire"
            className="inline-flex items-center gap-2 rounded-full bg-[#E8871A] px-8 py-3.5 text-sm font-bold !text-white shadow-md transition-all hover:bg-[#D47309] hover:shadow-lg active:scale-95"
          >
            <span>Start CUET Application</span>
            <ArrowRight className="h-4 w-4 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}
