"use client";

import React from "react";
import Image from "next/image";

import Link from "next/link";
import { QrCode, Award, TrendingUp, Users, Settings, BookOpen, HardHat } from "lucide-react";
import { Inter } from "next/font/google";

const NumberRibbon = ({ number, mainColor, foldColor }: { number: string; mainColor: string; foldColor: string }) => (
  <div className="absolute top-5 sm:top-6 -left-3 sm:-left-4 z-20 drop-shadow-md group-hover:-translate-y-1 transition-transform duration-300">
    {/* Main ribbon */}
    <div
      className="text-white w-12 h-16 sm:w-14 sm:h-20 flex flex-col items-center justify-start pt-2 sm:pt-3 text-3xl sm:text-4xl font-black rounded-tr-md transition-colors duration-300"
      style={{ backgroundColor: mainColor, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)' }}
    >
      {number}
    </div>
    {/* Fold */}
    <div
      className="absolute top-full left-0 w-3 sm:w-4 h-3 sm:h-4 transition-colors duration-300"
      style={{ backgroundColor: foldColor, clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
    ></div>
  </div>
);

const ExpertCard = ({ number, title, subtitle, items, Icon }: any) => {
  return (
    <div className="bg-white rounded-[1.5rem] p-8 sm:p-10 shadow-[0_8px_40px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(10,31,68,0.08)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col border border-slate-100 group relative h-full">
      {/* Watermark Icon - Restricted to card via absolute positioning within rounded container */}
      <div className="absolute overflow-hidden inset-0 rounded-[1.5rem] pointer-events-none z-0">
        <div className="absolute -right-6 -bottom-6 opacity-[0.03] text-[#3B82F6] transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-700">
          <Icon size={240} />
        </div>
      </div>

      <div className="relative z-10 flex flex-col w-full h-full">
        
        {/* Top Header Row with Number and Icon */}
        <div className="flex justify-between items-start mb-6">
          <NumberRibbon number={number} />
          <div className="hidden sm:flex text-slate-200 shrink-0 group-hover:text-blue-100 transition-colors duration-500">
            <Icon size={48} strokeWidth={1.5} />
          </div>
        </div>

        {/* Titles */}
        <div className="mb-6">
          <h3 className="text-[#0A1F44] text-xl sm:text-2xl font-black mb-2 leading-tight group-hover:text-[#3B82F6] transition-colors duration-300">{title}</h3>
          <p className="text-[#3B82F6] text-sm sm:text-base font-bold tracking-wide leading-relaxed">{subtitle}</p>
        </div>
        
        {/* Sleek Divider */}
        <div className="w-full border-t-2 border-dashed border-slate-200 mb-8 mt-auto"></div>
        
        {/* List items */}
        <ul className="space-y-4">
          {items.map((item: string, i: number) => (
            <li key={i} className="flex items-start text-slate-600 font-medium text-[15px] sm:text-[17px] leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
              <span className="text-[#3B82F6] mr-3.5 mt-1.5 text-xs shrink-0">▷</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const expertsData = [
  {
    number: "1",
    title: "Core Business Faculty",
    subtitle: "Building Strong Management Foundations",
    items: [
      "Experienced academicians and researchers",
      "Management, Finance, Marketing & HR Experts",
      "Industry-aligned, case-based learning",
      "Academic and career mentoring"
    ],
    Icon: TrendingUp
  },
  {
    number: "2",
    title: "Interdisciplinary Faculty",
    subtitle: "Learning Beyond Business",
    items: [
      "Faculty from diverse disciplines",
      "Exposure to Psychology, Technology & Design Thinking",
      "Cross-functional problem-solving approach",
      "Broader perspective for modern business challenges"
    ],
    Icon: Users
  },
  {
    number: "3",
    title: "Geeta Technical Hub (GTH) Trainers",
    subtitle: "Future-Ready Technical Skills",
    items: [
      "Hands-on workshops and live projects",
      "AI & Generative AI applications",
      "Excel, Data Analytics & Power BI",
      "Digital Marketing and Automation Tools"
    ],
    Icon: Settings
  },
  {
    number: "4",
    title: "Geeta Finishing School (GFS) Experts",
    subtitle: "Career Readiness & Professional Development",
    items: [
      "Communication and business etiquette",
      "Aptitude and analytical skills",
      "Personality development and confidence building",
      "Interview and placement preparation"
    ],
    Icon: BookOpen
  },
  {
    number: "5",
    title: "Industry Practitioners & Vocational Experts",
    subtitle: "Learning Directly from Industry",
    items: [
      "Corporate leaders and domain experts",
      "Industry-aligned, skill-based learning",
      "Entrepreneurship and family business insights",
      "Data Analytics, Python & Digital Marketing"
    ],
    Icon: HardHat
  }
];

export default function SchoolOfManagementAndBusinessStudies() {
  return (
    <div className="w-full bg-white">
      {/* ── BANNER IMAGE SECTION ── */}
      <div className="relative w-full min-h-[92vh] lg:h-[calc(100vh-80px)] overflow-hidden">
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
        <br></br>
        <div className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-tight tracking-tight max-w-4xl mx-auto">
            <span className="text-blue-400 font-serif mr-2">&ldquo;</span> Your Future in <br className="hidden sm:inline" />
            Business Starts Here
          </h2>
          <br />
          <div className="space-y-6 text-blue-100/80 text-lg sm:text-xl font-bold max-w-3xl mx-auto leading-relaxed">
            <p>
              Take the next step towards a successful and future-ready career with the School of Commerce &amp; Business Management at Geeta University.
            </p>
            <p>
              Join an ecosystem that blends academic excellence, innovation, industry exposure, leadership development, and career-focused education.
            </p>
          </div>
          <br />
          <br />

          {/* How to Apply Content */}
          <div className="w-full max-w-lg mx-auto flex flex-col items-center justify-center">
            <h3 className="text-3xl sm:text-4xl font-black tracking-wider uppercase mb-3">
              HOW TO APPLY
            </h3>
            <p className="text-blue-200/70 text-base sm:text-lg font-bold uppercase tracking-widest mb-8">
              Ready to take the next step?
            </p>
            <br></br>
            <br></br>

            {/* Styled QR Code Box */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-xl flex items-center justify-center w-20 h-20 sm:w-40 sm:h-40 transition-transform duration-200 hover:scale-[1.03] select-none">
              <img src="/qr.png" alt="Apply QR Code" className="w-full h-full object-contain rounded-2xl" />
            </div>
            <br></br>
            {/* Apply Now Link */}
          
             
            <p className="text-blue-500 text-2xl font-bold font-sans">  Apply Now </p> 
            
          </div>
          <br />
          <br />

          {/* Other Programs Section */}
          <div className="w-full flex flex-col items-center justify-center text-center px-4">
            <h6 className="text-xl font-extrabold mb-8 uppercase tracking-widest text-white">
              OTHER PROGRAMS OFFERED AT GU
            </h6>
            <br></br>
            <div className="flex flex-col items-center justify-center gap-6 text-base sm:text-lg md:text-md font-bold text-blue-100/90 w-full">
              {/* Row 1 */}
              <div className="flex flex-row flex-wrap items-center justify-center gap-x-4 gap-y-3 w-full">
                <span className="text-center whitespace-nowrap">Engineering</span>
                <span className="text-[#3B82F6] font-normal select-none">|</span>
                <span className="text-center whitespace-nowrap">Computer Applications</span>
                <span className="text-[#3B82F6] font-normal select-none">|</span>
                <span className="text-center whitespace-nowrap">Forensic Science</span>
              </div>
              
              {/* Row 2 */}
              <div className="flex flex-row flex-wrap items-center justify-center gap-x-4 gap-y-3 w-full">
                <span className="text-center whitespace-nowrap">Nutrition &amp; Dietetics</span>
                <span className="text-[#3B82F6] font-normal select-none">|</span>
                <span className="text-center whitespace-nowrap">Hotel Management</span>
                <span className="text-[#3B82F6] font-normal select-none">|</span>
                <span className="text-center whitespace-nowrap">Humanities</span>
              </div>
              
              {/* Row 3 */}
              <div className="flex flex-row flex-wrap items-center justify-center gap-x-4 gap-y-3 w-full">
                <span className="text-center whitespace-nowrap">Pharmacy</span>
                <span className="text-[#3B82F6] font-normal select-none">|</span>
                <span className="text-center whitespace-nowrap">Law</span>
                <span className="text-[#3B82F6] font-normal select-none">|</span>
                <span className="text-center whitespace-nowrap">Agriculture</span>
                <span className="text-[#3B82F6] font-normal select-none">|</span>
                <span className="text-center whitespace-nowrap">Psychology</span>
              </div>
            </div>
          </div>
        <br />
        </div>
      </section>

      {/* ── EXPERTS SECTION ── */}
      <section className="w-full bg-slate-50 py-24 lg:py-32 relative flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 flex flex-col items-center justify-center">
          
          {/* Section Header */}
          <div className="text-center mb-16 flex flex-col items-center justify-center w-full">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0A1F44] mb-6 inline-flex items-start justify-center gap-4 text-center">
              <span className="text-[#3B82F6] font-serif text-6xl sm:text-7xl -mt-2 sm:-mt-4">&ldquo;</span>
              <span>Learn from <br className="hidden sm:inline" /> 5 Categories of Experts</span>
            </h2>
            
            {/* Dashed divider */}
            <div className="my-10 flex justify-center w-full">
               <div className="border-t-[3px] border-dashed border-gray-300 w-40 mx-auto"></div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-5 text-center mt-6 w-full">
              <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-100 text-[#0A1F44] shadow-sm shrink-0">
                <Award size={40} strokeWidth={2.5} />
              </div>
              <div className="text-center md:text-left flex flex-col items-center md:items-start justify-center">
                 <p className="text-gray-800 font-bold text-xl md:text-2xl mb-1">One Program. Five Learning Ecosystems.</p>
                 <p className="text-[#0A1F44] font-black text-2xl md:text-3xl tracking-tight">Unlimited Career Opportunities</p>
              </div>
            </div>
          </div>

          {/* Cards Container */}
          <div className="flex flex-col items-center justify-center gap-10 sm:gap-12 w-full mt-8">
             {/* Row 1: Cards 1 & 2 */}
             <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-10 sm:gap-12 w-full">
               <div className="w-full flex-1 max-w-[430px] flex">
                 <ExpertCard {...expertsData[0]} />
               </div>
               <div className="w-full flex-1 max-w-[430px] flex">
                 <ExpertCard {...expertsData[1]} />
               </div>
             </div>

             {/* Row 2: Cards 3, 4, & 5 */}
             <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-10 sm:gap-12 w-full">
               <div className="w-full flex-1 max-w-[430px] flex">
                 <ExpertCard {...expertsData[2]} />
               </div>
               <div className="w-full flex-1 max-w-[430px] flex">
                 <ExpertCard {...expertsData[3]} />
               </div>
               <div className="w-full lg:w-[calc(33.333%-1.75rem)]">
                 <ExpertCard {...expertsData[4]} />
               </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}