"use client";

import React from "react";
import { cuetWhyBenefits, cuetStats } from "@/data/cuetData";
import { Award, Zap, BookOpen, Headphones, Briefcase, Building2, Users, Trophy } from "lucide-react";

export default function CuetWhyAndStats() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "award":
        return <Award className="h-7 w-7 text-[#E8871A]" />;
      case "zap":
        return <Zap className="h-7 w-7 text-[#E8871A]" />;
      case "book-open":
        return <BookOpen className="h-7 w-7 text-[#E8871A]" />;
      case "headphones":
        return <Headphones className="h-7 w-7 text-[#E8871A]" />;
      case "briefcase":
        return <Briefcase className="h-7 w-7 text-[#E8871A]" />;
      default:
        return <Award className="h-7 w-7 text-[#E8871A]" />;
    }
  };

  return (
    <section className="w-full bg-[#F8FAFC] py-14 sm:py-18 md:py-22 border-b border-[#E2E8F0]">
      <div className="gu-container space-y-16">
        {/* 1. Why Apply Through CUET */}
        <div>
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-[2px] w-8 bg-[#E8871A]" />
              <span className="text-[12px] font-extrabold uppercase tracking-[3px] text-[#E8871A]">
                The Geeta Advantage
              </span>
              <span className="h-[2px] w-8 bg-[#E8871A]" />
            </div>
            <h2 className="font-serif text-[30px] sm:text-[38px] md:text-[42px] font-black text-[#0A1F44]">
              Why Apply Through <span className="text-[#E8871A]">CUET</span> at Geeta?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {cuetWhyBenefits.map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center justify-center rounded-[20px] bg-white border border-[#E2E8F0] p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E8871A] hover:shadow-md"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF8F2] border border-[#FFD9B3] shadow-sm transition-transform group-hover:scale-110">
                  {getIcon(item.iconName)}
                </div>
                <h4 className="font-serif text-[17px] font-bold text-[#0A1F44] leading-snug">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Key Placement Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-[22px] bg-white border border-[#90CAF9] p-8 text-center shadow-sm transition-all hover:shadow-md">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#EFF6FF] text-[#0284C7]">
              <Trophy className="h-8 w-8" />
            </div>
            <div className="font-serif text-[38px] sm:text-[44px] font-black text-[#E8871A] leading-tight">
              40 LPA
            </div>
            <h3 className="text-[14px] font-bold uppercase tracking-wider text-[#0A1F44] mt-2">
              Highest Package
            </h3>
          </div>

          <div className="rounded-[22px] bg-[#FFF5F0] border-2 border-[#FF8D5B] p-8 text-center shadow-md transition-all hover:shadow-lg">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#E8871A] shadow-sm">
              <Building2 className="h-8 w-8" />
            </div>
            <div className="font-serif text-[38px] sm:text-[44px] font-black text-[#E8871A] leading-tight">
              550+
            </div>
            <h3 className="text-[14px] font-bold uppercase tracking-wider text-[#0A1F44] mt-2">
              Recruiters
            </h3>
          </div>

          <div className="rounded-[22px] bg-white border border-[#90CAF9] p-8 text-center shadow-sm transition-all hover:shadow-md">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#EFF6FF] text-[#0284C7]">
              <Users className="h-8 w-8" />
            </div>
            <div className="font-serif text-[38px] sm:text-[44px] font-black text-[#E8871A] leading-tight">
              3500+
            </div>
            <h3 className="text-[14px] font-bold uppercase tracking-wider text-[#0A1F44] mt-2">
              Job Offers
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
