"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

interface CuetSchoolProgram {
  id: string;
  schoolName: string;
  programs: { name: string; href: string }[];
}

const CUET_SCHOOLS: CuetSchoolProgram[] = [
  {
    id: "cse",
    schoolName: "Computer Science & Engineering",
    programs: [
      { name: "B.Tech Hons. CSE (Computer Science & Engineering)", href: "/programs/school-of-computer-science-and-engineering" },
      { name: "B.Tech Hons. CSE (AI & Machine Learning)", href: "/programs/school-of-computer-science-and-engineering" },
      { name: "B.Tech Hons. CSE (Cyber Security)", href: "/programs/school-of-computer-science-and-engineering" },
      { name: "B.Tech Hons. CSE (Full Stack Web Development)", href: "/programs/school-of-computer-science-and-engineering" },
      { name: "B.Tech Hons. CSE (Data Science & Analytics)", href: "/programs/school-of-computer-science-and-engineering" },
      { name: "M.Tech CSE", href: "/programs/school-of-computer-science-and-engineering" },
      { name: "Ph.D. CSE", href: "/phd" },
    ],
  },
  {
    id: "bca",
    schoolName: "Computer Applications",
    programs: [
      { name: "BCA Hons. (Computer Applications)", href: "/programs/school-of-computer-science-and-engineering" },
      { name: "BCA Hons. (AI & Machine Learning)", href: "/programs/school-of-computer-science-and-engineering" },
      { name: "BCA Hons. (Cyber Security)", href: "/programs/school-of-computer-science-and-engineering" },
      { name: "BCA Hons. (Data Science & Business Analytics)", href: "/programs/school-of-computer-science-and-engineering" },
      { name: "MCA (Master of Computer Applications)", href: "/programs/school-of-computer-science-and-engineering" },
      { name: "Ph.D. (Computer Applications)", href: "/phd" },
    ],
  },
  {
    id: "management",
    schoolName: "Business Management",
    programs: [
      { name: "BBA Hons. (Bachelor of Business Administration)", href: "/programs/school-of-commerce-and-business-management" },
      { name: "BBA Hons. (FinTech)", href: "/programs/school-of-commerce-and-business-management" },
      { name: "BBA Hons. (Digital Marketing)", href: "/programs/school-of-commerce-and-business-management" },
      { name: "BBA Hons. (International Accounting with ACCA UK)", href: "/programs/school-of-commerce-and-business-management" },
      { name: "MBA (Finance / Marketing / HR / Supply Chain)", href: "/programs/school-of-commerce-and-business-management" },
      { name: "Ph.D. (Business & Management)", href: "/phd" },
    ],
  },
  {
    id: "commerce",
    schoolName: "Commerce",
    programs: [
      { name: "B.Com Hons. (Bachelor of Commerce)", href: "/programs/school-of-commerce-and-business-management" },
      { name: "B.Com Hons. (Auditing & Taxation)", href: "/programs/school-of-commerce-and-business-management" },
      { name: "B.Com Hons. (Banking & Insurance)", href: "/programs/school-of-commerce-and-business-management" },
      { name: "M.Com (Master of Commerce)", href: "/programs/school-of-commerce-and-business-management" },
      { name: "Ph.D. (Commerce)", href: "/phd" },
    ],
  },
  {
    id: "pharmacy",
    schoolName: "Pharmacy",
    programs: [
      { name: "D.Pharm (Diploma in Pharmacy)", href: "/programs/geeta-institute-of-pharmacy" },
      { name: "B.Pharm (Bachelor of Pharmacy)", href: "/programs/geeta-institute-of-pharmacy" },
      { name: "M.Pharm (Pharmaceutics)", href: "/programs/geeta-institute-of-pharmacy" },
      { name: "Ph.D. (Pharmaceutical Sciences)", href: "/phd" },
    ],
  },
  {
    id: "agriculture",
    schoolName: "Agricultural Sciences",
    programs: [
      { name: "B.Sc Hons. (Agriculture)", href: "/programs/school-of-agricultural-studies" },
      { name: "M.Sc Agriculture (Agronomy)", href: "/programs/school-of-agricultural-studies" },
      { name: "Ph.D. (Agriculture)", href: "/phd" },
    ],
  },
  {
    id: "law",
    schoolName: "Law",
    programs: [
      { name: "BA LL.B (Hons.) 5 Years Integrated", href: "/programs/geeta-global-law-school" },
      { name: "BBA LL.B (Hons.) 5 Years Integrated", href: "/programs/geeta-global-law-school" },
      { name: "LL.M (Master of Law)", href: "/programs/geeta-global-law-school" },
      { name: "Ph.D. (Law)", href: "/phd" },
    ],
  },
  {
    id: "hotel",
    schoolName: "Hospitality & Hotel Management",
    programs: [
      { name: "Diploma in Hotel Management", href: "/programs/school-of-hospitality-and-hotel-management" },
      { name: "B.Sc Hons. (Hotel Management)", href: "/programs/school-of-hospitality-and-hotel-management" },
      { name: "M.Sc (Hotel Management)", href: "/programs/school-of-hospitality-and-hotel-management" },
    ],
  },
  {
    id: "nutrition",
    schoolName: "Nutrition & Dietetics",
    programs: [
      { name: "B.Sc Hons. (Nutrition & Dietetics)", href: "/programs/school-of-health-and-allied-sciences" },
      { name: "M.Sc (Nutrition & Dietetics)", href: "/programs/school-of-health-and-allied-sciences" },
      { name: "Ph.D. (Nutrition & Dietetics)", href: "/phd" },
    ],
  },
  {
    id: "humanities",
    schoolName: "Humanities & Social Sciences",
    programs: [
      { name: "B.Sc Hons. (Psychology)", href: "/programs/school-of-humanities-and-social-science" },
      { name: "BA Hons. (Political Science)", href: "/programs/school-of-humanities-and-social-science" },
      { name: "BA Hons. (Economics)", href: "/programs/school-of-humanities-and-social-science" },
      { name: "BA Hons. (English)", href: "/programs/school-of-humanities-and-social-science" },
      { name: "M.A. (Psychology / Economics / English / Political Science)", href: "/programs/school-of-humanities-and-social-science" },
    ],
  },
  {
    id: "forensic",
    schoolName: "Forensic Science",
    programs: [
      { name: "B.Sc Hons. (Forensic Sciences)", href: "/programs/school-of-forensic-sciences" },
      { name: "M.Sc (Forensic Sciences)", href: "/programs/school-of-forensic-sciences" },
      { name: "Ph.D. (Forensic Sciences)", href: "/phd" },
    ],
  },
  {
    id: "nursing",
    schoolName: "Nursing & Health Sciences",
    programs: [
      { name: "B.Sc Nursing (4 Years)", href: "/programs/school-of-health-and-allied-sciences" },
      { name: "GNM (General Nursing & Midwifery)", href: "/programs/school-of-health-and-allied-sciences" },
    ],
  },
];

export default function CuetProgramsOffered() {
  const [openSchool, setOpenSchool] = useState<string | null>("cse");

  const toggleSchool = (id: string) => {
    setOpenSchool((prev) => (prev === id ? null : id));
  };

  return (
    <section id="programs-offered" className="w-full bg-[#FFFFFF] py-14 sm:py-18 md:py-22 border-b border-[#E2E8F0]">
      <div className="gu-container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#E8871A]" />
            <span className="text-[12px] font-extrabold uppercase tracking-[3px] text-[#E8871A]">
              70+ Study Programs
            </span>
            <span className="h-[2px] w-8 bg-[#E8871A]" />
          </div>
          <h2 className="font-serif text-[32px] sm:text-[42px] font-black text-[#0A1F44]">
            Programs Offered Under CUET
          </h2>
          <p className="mt-2 text-[16px] text-[#64748B]">
            Explore diploma, undergraduate, and postgraduate programs across 12 distinct academic faculties.
          </p>
        </div>

        {/* 2-Column Accordion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">
          {CUET_SCHOOLS.map((school) => {
            const isOpen = openSchool === school.id;
            return (
              <div
                key={school.id}
                className="overflow-hidden rounded-[16px] border border-[#CBD5E1] bg-white shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleSchool(school.id)}
                  className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-[#F8FAFC]"
                >
                  <span className="font-serif text-[17px] sm:text-[18px] font-bold text-[#0A1F44] leading-snug">
                    {school.schoolName}
                  </span>
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full bg-[#F1F5F9] text-[#0A1F44] transition-transform duration-200 shrink-0 ml-3 ${
                      isOpen ? "rotate-180 bg-[#E8871A] text-white" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-[#F1F5F9] bg-[#FAFBFD] p-5">
                    <ul className="space-y-2.5">
                      {school.programs.map((prog, pIdx) => (
                        <li key={pIdx}>
                          <Link
                            href={prog.href}
                            className="group flex items-center justify-between text-[14.5px] font-semibold text-[#06355F] hover:text-[#E8871A] transition-colors"
                          >
                            <span>• {prog.name}</span>
                            <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
