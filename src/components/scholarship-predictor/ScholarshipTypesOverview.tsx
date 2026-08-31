"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  Trophy,
  Users,
  Shield,
  BookOpen,
} from "lucide-react";

const SCHOLARSHIP_TYPES = [
  {
    icon: GraduationCap,
    title: "GUTS Test Scholarship",
    subtitle: "Up to 100% Tuition Waiver",
    description: "Geeta University Test of Scholarship offered for eligible undergraduate applicants based on entrance performance.",
    color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  },
  {
    icon: Award,
    title: "Merit Scholarship",
    subtitle: "Up to 100% Tuition Waiver",
    description: "Awarded based on percentage in qualifying board or university examinations (>=95% gets 100% tuition waiver).",
    color: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  },
  {
    icon: Trophy,
    title: "CUET UG / PG Scholarship",
    subtitle: "Up to 100% Tuition Waiver",
    description: "Exclusive fee concessions for top percentile performers in Common University Entrance Test (CUET).",
    color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  },
  {
    icon: Shield,
    title: "Sports Scholarship",
    subtitle: "30% - 100% Concession",
    description: "Dedicated to international players (100%), national medalists (50%), and national participants (30%).",
    color: "bg-purple-500/10 text-purple-600 border-purple-500/20",
  },
  {
    icon: Users,
    title: "Social Responsibility",
    subtitle: "10% - 50% Concession",
    description: "Concessions for Defense wards, Freedom Fighter descendants, Divyangjan, Single Mother, and Orphan students.",
    color: "bg-rose-500/10 text-rose-600 border-rose-500/20",
  },
  {
    icon: BookOpen,
    title: "National Test Ranks",
    subtitle: "Up to 50% Concession",
    description: "Special scholarships for high rank holders in JEE Main, NEET, CAT, XAT, MAT, NIFT, NID, and CLAT.",
    color: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20",
  },
];

export default function ScholarshipTypesOverview() {
  return (
    <section className="bg-[#F8FAFC] py-20 lg:py-24 border-t border-[#E2E8F0]">
      <div className="gu-container">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#E8871A]" />
            <span className="text-[12px] font-bold uppercase tracking-[2.5px] text-[#E8871A]">
              Scholarship Programs
            </span>
            <span className="h-px w-8 bg-[#E8871A]" />
          </div>
          <h2 className="font-serif text-[36px] font-black text-[#0A1F44] sm:text-[42px] md:text-[48px]">
            Comprehensive <span className="text-[#E8871A]">Financial Aid</span>
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7] text-[#64748B] sm:text-[17px]">
            Geeta University ensures no deserving student is deprived of quality higher education due to financial constraints.
          </p>
        </div>

        {/* Grid of Scholarship Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SCHOLARSHIP_TYPES.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative flex flex-col rounded-[16px] border border-[#E2E8F0] bg-white p-7 shadow-[0_4px_20px_rgba(10,31,68,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E8871A]/40 hover:shadow-[0_12px_30px_rgba(232,135,26,0.1)]"
              >
                <div className={`mb-5 flex h-13 w-13 items-center justify-center rounded-[12px] border ${item.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-[12px] font-bold uppercase tracking-[1.5px] text-[#E8871A]">
                  {item.subtitle}
                </span>
                <h3 className="mt-1 font-serif text-[20px] font-extrabold text-[#0A1F44] transition-colors group-hover:text-[#E8871A]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.65] text-[#64748B]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
