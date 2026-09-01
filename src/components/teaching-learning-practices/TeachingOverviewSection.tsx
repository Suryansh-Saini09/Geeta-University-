"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Award } from "lucide-react";
import { teachingOverview } from "@/data/teachingLearningPractices";

export default function TeachingOverviewSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#E8871A]/10 px-3.5 py-1 text-xs font-semibold text-[#E8871A]">
              <Award className="h-3.5 w-3.5" />
              <span>World-Class Mentorship</span>
            </div>

            <h2 className="font-serif text-3xl font-extrabold sm:text-4xl md:text-5xl text-[#0A1F44]">
              <span className="text-[#E8871A]">{teachingOverview.headingOrange}</span>{" "}
              <span>{teachingOverview.headingBlack}</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-sans">
              {teachingOverview.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-slate-100">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-[#0A1F44]">
                <CheckCircle2 className="h-5 w-5 text-[#E8871A] shrink-0" />
                <span>IIT, IISc & IIM Faculty Lineup</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-[#0A1F44]">
                <ShieldCheck className="h-5 w-5 text-[#E8871A] shrink-0" />
                <span>Army-Grade Mental Resilience</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-[#0A1F44]">
                <CheckCircle2 className="h-5 w-5 text-[#E8871A] shrink-0" />
                <span>XEDGE Learning for Life</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-[#0A1F44]">
                <ShieldCheck className="h-5 w-5 text-[#E8871A] shrink-0" />
                <span>Complete Corporate Citizens</span>
              </div>
            </div>
          </div>

          {/* Right Image Feature */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-2xl transition-all duration-300 hover:shadow-amber-500/10">
              <img
                src={teachingOverview.image}
                alt="Teaching Practice at Geeta University"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg">
                <p className="text-xs font-bold text-[#0A1F44] uppercase tracking-wider">
                  Interactive Learning Hub
                </p>
                <p className="text-xs text-slate-600">
                  Student-Centric Classroom Environment & Experiential Learning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
