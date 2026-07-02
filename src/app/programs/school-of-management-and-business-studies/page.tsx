"use client";

import React from "react";
import Image from "next/image";
import { TrendingUp, Users, GraduationCap, BookOpen, HardHat } from "lucide-react";

const categories = [
  {
    number: 1,
    title: "Core Business Faculty",
    subtitle: "Building Strong Management Foundations",
    points: [
      "Experienced academicians and researchers",
      "Management, Finance, Marketing & HR Experts",
      "Industry-aligned, case-based learning",
      "Academic and career mentoring",
    ],
    icon: TrendingUp,
    ribbon: "#0A1F44",
  },
  {
    number: 2,
    title: "Interdisciplinary Faculty",
    subtitle: "Learning Beyond Business",
    points: [
      "Faculty from diverse disciplines",
      "Exposure to Psychology, Technology & Design Thinking",
      "Cross-functional problem-solving approach",
      "Broader perspective for modern business challenges",
    ],
    icon: Users,
    ribbon: "#0F2A56",
  },
  {
    number: 3,
    title: "Geeta Technical Hub (GTH)",
    subtitle: "Future-Ready Technical Skills",
    points: [
      "Hands-on workshops and live projects",
      "AI & Generative AI applications",
      "Excel, Data Analytics & Power BI",
      "Digital Marketing and Automation Tools",
    ],
    icon: GraduationCap,
    ribbon: "#1B4B8F",
  },
  {
    number: 4,
    title: "Geeta Finishing School",
    subtitle: "Career Readiness & Professional Development",
    points: [
      "Communication and business etiquette",
      "Aptitude and analytical skills",
      "Personality development and confidence building",
      "Interview and placement preparation",
    ],
    icon: BookOpen,
    ribbon: "#2E63B8",
  },
  {
    number: 5,
    title: "Industry Practitioners",
    subtitle: "Learning Directly from Industry",
    points: [
      "Corporate leaders and domain experts",
      "Industry-aligned, skill-based learning",
      "Entrepreneurship and family business insights",
      "Data Analytics, Python & Digital Marketing",
    ],
    icon: HardHat,
    ribbon: "#5B8FD9",
  },
];

function ExpertCard({ category }: { category: any }) {
  const Icon = category.icon;
  return (
    <div className="w-full bg-white rounded-xl shadow-[0_2px_20px_rgba(10,31,68,0.06)] hover:shadow-[0_8px_30px_rgba(10,31,68,0.1)] border border-[#EDF1F7] p-5 sm:p-6 flex gap-4 sm:gap-5 h-full transition-all hover:-translate-y-1 duration-300">
      
      {/* V-Cut Ribbon Container */}
      <div className="flex-shrink-0 w-16 sm:w-[72px] flex flex-col">
        <div
          className="w-full h-24 flex items-start justify-center pt-4 shadow-sm"
          style={{
            backgroundColor: category.ribbon,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 82%, 0 100%)",
          }}
        >
          <span className="text-white text-3xl sm:text-4xl font-extrabold">{category.number}</span>
        </div>
      </div>

      {/* Text Content Area */}
      <div className="flex-1 min-w-0 flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-[#0A1F44] font-extrabold text-[1.05rem] lg:text-[1.1rem] leading-snug break-words">
            {category.title}
          </h3>
        </div>

        <p className="text-[#4A78C4] text-[0.85rem] lg:text-[0.9rem] font-semibold mb-4 pb-3 border-b border-[#E7ECF4]">
          {category.subtitle}
        </p>

        <div className="flex justify-between items-end gap-3 flex-grow">
          <ul className="space-y-2.5 flex-1 min-w-0 pr-2">
            {category.points.map((point: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-[0.8rem] lg:text-[0.85rem] text-[#33415C]">
                <span className="text-[#4A78C4] mt-[3px] font-bold text-[0.65rem] flex-shrink-0">▷</span>
                <span className="leading-snug break-words">{point}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex-shrink-0 opacity-20">

          </div>
        </div>
      </div>
      
    </div>
  );
}

export default function SchoolOfManagementAndBusinessStudies() {
  return (
    <div className="w-full flex-1 block bg-white min-h-screen text-[#1A1A2E] overflow-x-hidden selection:bg-[#E8871A] selection:text-white font-sans">
      
      {/* ── BANNER IMAGE SECTION ── */}
      <div className="relative w-full min-h-[92vh] lg:h-[calc(100vh-80px)] overflow-hidden flex flex-col">
        <Image
          src="/bba%20banner.jpeg"
          alt="School of Commerce & Business Management"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* ── BLUE SECTION ── */}
      <section className="w-full flex flex-col items-center justify-center bg-[#0A1F44] text-white min-h-[92vh] lg:min-h-[calc(100vh-80px)] py-20 lg:py-28 relative overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-tight tracking-tight max-w-4xl mx-auto mt-4">
            <span className="text-blue-400 font-serif mr-2">&ldquo;</span> Your Future in <br className="hidden sm:inline" />
            Business Starts Here
          </h2>
          
          <div className="space-y-6 text-blue-100/80 text-lg sm:text-xl font-bold max-w-3xl mx-auto leading-relaxed mb-16 mt-4">
            <p>Take the next step towards a successful and future-ready career with the School of Commerce &amp; Business Management at Geeta University.</p>
            <p>Join an ecosystem that blends academic excellence, innovation, industry exposure, leadership development, and career-focused education.</p>
          </div>

          <div className="w-full max-w-lg mx-auto flex flex-col items-center justify-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-black tracking-wider uppercase mb-3">HOW TO APPLY</h3>
            <p className="text-blue-200/70 text-base sm:text-lg font-bold uppercase tracking-widest mb-10">Ready to take the next step?</p>
            <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-xl flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 transition-transform duration-200 hover:scale-[1.03] select-none mb-6">
              <img src="/qr.png" alt="Apply QR Code" className="w-full h-full object-contain rounded-2xl" />
            </div>
            <p className="text-blue-500 text-2xl font-bold font-sans hover:text-blue-400 cursor-pointer transition-colors duration-200">Apply Now</p> 
          </div>

          <div className="w-full flex flex-col items-center justify-center text-center px-4 mt-4">
            <h6 className="text-xl font-extrabold mb-10 uppercase tracking-widest text-white">OTHER PROGRAMS OFFERED AT GU</h6>
            <div className="flex flex-col items-center justify-center gap-6 text-base sm:text-lg md:text-md font-bold text-blue-100/90 w-full mb-8">
              <div className="flex flex-row flex-wrap items-center justify-center gap-x-4 gap-y-3 w-full">
                <span className="text-center whitespace-nowrap">Engineering</span><span className="text-[#3B82F6] font-normal select-none">|</span>
                <span className="text-center whitespace-nowrap">Computer Applications</span><span className="text-[#3B82F6] font-normal select-none">|</span>
                <span className="text-center whitespace-nowrap">Forensic Science</span>
              </div>
              <div className="flex flex-row flex-wrap items-center justify-center gap-x-4 gap-y-3 w-full">
                <span className="text-center whitespace-nowrap">Nutrition &amp; Dietetics</span><span className="text-[#3B82F6] font-normal select-none">|</span>
                <span className="text-center whitespace-nowrap">Hotel Management</span><span className="text-[#3B82F6] font-normal select-none">|</span>
                <span className="text-center whitespace-nowrap">Humanities</span>
              </div>
              <div className="flex flex-row flex-wrap items-center justify-center gap-x-4 gap-y-3 w-full">
                <span className="text-center whitespace-nowrap">Pharmacy</span><span className="text-[#3B82F6] font-normal select-none">|</span>
                <span className="text-center whitespace-nowrap">Law</span><span className="text-[#3B82F6] font-normal select-none">|</span>
                <span className="text-center whitespace-nowrap">Agriculture</span><span className="text-[#3B82F6] font-normal select-none">|</span>
                <span className="text-center whitespace-nowrap">Psychology</span>
              </div>
              <br />
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERTS SECTION ── */}
      <section className="w-full flex flex-col items-center justify-center bg-[#FAFCFF] py-24 px-4 sm:px-8">
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
          <br />
          
          {/* Main Title Section */}
          <div className="text-center mb-10">
            <h2 className="text-[#0A1F44] font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight inline-flex items-start justify-center">
              <span className="text-[#4A78C4] text-5xl mr-3 font-serif leading-[0.8] mt-1">“</span>
              <span className="text-left">
                Learn from 5 Categories of Experts
              </span>
            </h2>
            <br />
            <div className="mx-auto mt-10 w-32 border-t-2 border-dashed border-[#C9D5E8]" />
          </div>

          {/* 🔥 THE PERFECT RED BOX LAYOUT 🔥 */}
          <div className="w-full flex flex-col items-center justify-center text-center mb-16">
            <span className="block text-[#1B4B8F] text-xl sm:text-xl font-semibold tracking-wide mb-2">
              One Program. Five Learning Ecosystems.
            </span>
            <span className="block text-[#0A1F44] font-black text-3xl sm:text-4xl lg:text-[2.5rem] tracking-tight">
              Unlimited Career Opportunities
            </span>
            <br />
          </div>

          {/* 🔥 THE BERSERK MODE, UNBREAKABLE GRID 🔥 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full relative">
            
            {/* Top 4 Cards */}
            <div className="w-full"><ExpertCard category={categories[0]} /></div>
            <div className="w-full"><ExpertCard category={categories[1]} /></div>
            <div className="w-full"><ExpertCard category={categories[2]} /></div>
            <div className="w-full"><ExpertCard category={categories[3]} /></div>

            {/* The 5th Card - FORCED to span both columns and center perfectly */}
            <div className="w-full md:col-span-2 flex justify-center items-center">
              
              {/* Desktop & Tablet: Hardcoded math to exactly match 1 column width */}
              <div className="hidden md:block w-full" style={{ maxWidth: 'calc(50% - 16px)' }}>
                <ExpertCard category={categories[4]} />
              </div>
              
              {/* Mobile: Full width stacking */}
              <div className="block md:hidden w-full">
                <ExpertCard category={categories[4]} />
              </div>

            </div>
            <br />

          </div>

        </div>
      </section>
    </div>
  );
}