"use client";

import React from "react";
import Image from "next/image";
import { TrendingUp, Users, GraduationCap, BookOpen, HardHat, Award } from "lucide-react";

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
    ribbon: "#172A4F",
    ribbonDark: "#0A1428", // Darker shade for the 3D fold
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
    ribbon: "#22447A",
    ribbonDark: "#102342",
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
    ribbon: "#2D62B5",
    ribbonDark: "#15315E",
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
    ribbon: "#427FD9",
    ribbonDark: "#1E4175",
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
    ribbon: "#659CE8",
    ribbonDark: "#2B4B7A",
  },
];

function ExpertCard({ category }: { category: any }) {
  const Icon = category.icon;
  return (
    // The generous padding-left (pl-[84px]) guarantees the text will NEVER overlap with the ribbon
    <div className="relative bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-[#EDF1F7] p-6 lg:p-7 pl-[84px] lg:pl-[96px] h-full flex flex-col mt-4 ml-4 transition-transform hover:-translate-y-1 duration-300">
      
      {/* Main Ribbon Body */}
      <div
        className="absolute top-6 -left-4 w-[72px] h-[80px] shadow-lg flex items-center justify-center rounded-r-md"
        style={{ backgroundColor: category.ribbon }}
      >
        {/* 3D Ribbon Fold (Connecting Ribbon to Card back) */}
        <div 
          className="absolute -top-4 left-0 w-0 h-0 border-b-[16px] border-l-[16px] border-l-transparent"
          style={{ borderBottomColor: category.ribbonDark }}
        />
        
        <span className="text-white text-3xl font-black">{category.number}</span>
      </div>

      {/* Content wrapper */}
      <div className="flex flex-col h-full w-full min-w-0">
        
        {/* Title */}
        <h3 className="text-[#0A1F44] font-extrabold text-[1.1rem] leading-tight mb-1 break-words">
          {category.title}
        </h3>

        {/* Subtitle with border line */}
        <p className="text-[#4A78C4] text-[0.85rem] font-semibold mb-4 pb-3 border-b border-[#E7ECF4]">
          {category.subtitle}
        </p>

        {/* Points & Icon Container */}
        <div className="flex justify-between items-end gap-3 flex-grow">
          <ul className="space-y-2.5 flex-1 min-w-0">
            {category.points.map((point: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-[0.8rem] text-[#33415C]">
                <span className="text-[#4A78C4] mt-[3px] font-bold text-[0.65rem] flex-shrink-0">▷</span>
                <span className="leading-snug break-words">{point}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex-shrink-0 ml-1 opacity-20">
            <Icon className="w-10 h-10 text-[#0A1F44]" strokeWidth={2} />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default function SchoolOfManagementAndBusinessStudies() {
  const [row1, row2] = [categories.slice(0, 2), categories.slice(2, 5)];

  return (
    <div className="bg-white min-h-screen text-[#1A1A2E] overflow-x-hidden selection:bg-[#E8871A] selection:text-white font-sans">
      
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
      <section className="w-full bg-[#0A1F44] text-white min-h-[92vh] lg:min-h-[calc(100vh-80px)] py-20 lg:py-28 flex flex-col items-center justify-center relative overflow-hidden">
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
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERTS SECTION ── */}
      <section className="w-full bg-[#FAFCFF] py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          
          {/* Header Area */}
          <div className="text-center mb-8">
            <h2 className="text-[#0A1F44] font-extrabold text-3xl sm:text-4xl leading-tight inline-flex items-start justify-center">
              <span className="text-[#4A78C4] text-5xl mr-3 font-serif leading-[0.8] mt-1">“</span>
              <span className="text-left">
                Learn from <br />
                5 Categories of Experts
              </span>
            </h2>
            <div className="mx-auto mt-10 w-32 border-t-2 border-dashed border-[#C9D5E8]" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Award className="w-12 h-12 text-[#0A1F44] flex-shrink-0" strokeWidth={1.5} />
            <div className="text-center sm:text-left">
              <span className="block text-[#33415C] text-lg font-medium">
                One Program. Five Learning Ecosystems.
              </span>
              <span className="block text-[#0A1F44] font-black text-2xl tracking-wide">
                Unlimited Career Opportunities
              </span>
            </div>
          </div>

          {/* Row 1 - 2 cards centered */}
          <div className="w-full max-w-4xl mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {row1.map((cat) => (
                <ExpertCard key={cat.number} category={cat} />
              ))}
            </div>
          </div>

          {/* Row 2 - 3 cards */}
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {row2.map((cat) => (
                <ExpertCard key={cat.number} category={cat} />
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

