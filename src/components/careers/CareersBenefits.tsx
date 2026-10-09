"use client";

import React from "react";
import { Microscope, Cpu, TrendingUp, Award, CheckCircle2 } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Microscope,
  Cpu,
  TrendingUp,
  Award,
};

export default function CareersBenefits({ data }: { data?: any }) {
  const title = data?.title || "Why Work at Geeta University?";
  const subtitle =
    data?.subtitle ||
    "Institutional grants, competitive compensation, professional growth & AI-enabled labs";
  const items = data?.items || [];

  if (!items || items.length === 0) return null;

  return (
    <section className="bg-white py-12 md:py-16 border-t border-slate-200">
      <div className="gu-container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[2px] text-[#E8871A]">
            Employee Benefits & Culture
          </span>
          <h2 className="mt-2 font-serif text-[32px] font-black text-[#0A1F44] sm:text-[40px]">
            {title}
          </h2>
          <p className="mt-2 text-[15px] text-[#64748B]">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item: any, idx: number) => {
            const IconComponent = iconMap[item.icon] || CheckCircle2;
            return (
              <div
                key={idx}
                className="group rounded-2xl border border-slate-200 bg-[#F7F9FC] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#E8871A]/40 hover:bg-white hover:shadow-xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-[#E8871A] transition-colors group-hover:bg-[#E8871A] group-hover:text-white">
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0A1F44] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
