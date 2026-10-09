"use client";

import React from "react";
import { teachingStats } from "@/data/teachingLearningPractices";

export default function TeachingStats({ data }: { data?: any }) {
  const title = data?.title || "Academic & Life-Skill Highlights";
  const statsList = data?.stats || teachingStats;

  if (!statsList || statsList.length === 0) return null;

  return (
    <section className="w-full bg-[#0A1F44] py-14 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statsList.map((stat: any, idx: number) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm"
            >
              <div className="font-serif text-3xl sm:text-4xl font-black text-[#E8871A] mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-white mb-1">{stat.label}</div>
              <div className="text-xs text-slate-300 leading-normal">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
