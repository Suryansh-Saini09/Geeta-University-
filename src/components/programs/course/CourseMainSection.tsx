"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  BookOpen,
  GraduationCap,
  ChevronDown,
} from "lucide-react";
import type {
  CourseOverview,
  CourseAdmissionProcess,
} from "@/data/programs/courses/types";
import AdmissionFormWrapper from "../AdmissionFormWrapper";

interface CourseMainSectionProps {
  overview?: CourseOverview;
  takeaways?: string[];
  subjects?: string[];
  subjectsTitle?: string;
  subjectsParagraphs?: string[];
  learningOutcomes?: string[];
  admission?: CourseAdmissionProcess;
  programName?: string;
}

export default function CourseMainSection({
  overview,
  takeaways = [],
  subjects = [],
  subjectsTitle,
  subjectsParagraphs = [],
  learningOutcomes = [],
  admission,
  programName,
}: CourseMainSectionProps) {
  const title = overview?.title || programName || "Course Overview";
  const [isAdmissionExpanded, setIsAdmissionExpanded] = useState(false);

  return (
    <section className="w-full bg-[#FFFFFF] py-8 md:py-10 border-b border-slate-200/80">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Course Curriculum & Details */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-4 sm:space-y-5">
            {/* 1. Overview Header & Paragraphs */}
            <div>
              <h1
                style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: "clamp(26px, 3.2vw, 36px)",
                  fontWeight: 800,
                  color: "#0A1F44",
                  lineHeight: 1.2,
                  letterSpacing: "-0.5px",
                  marginBottom: 12,
                }}
              >
                {title}
              </h1>

              {overview?.paragraphs && overview.paragraphs.length > 0 && (
                <div className="space-y-3">
                  {overview.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      style={{
                        fontSize: 15.5,
                        color: "#4A5568",
                        lineHeight: 1.7,
                        fontWeight: 400,
                      }}
                      className="text-justify"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* 2. Important Takeaways */}
            {takeaways.length > 0 && (
              <div
                style={{
                  background: "#FFFFFF",
                  borderRadius: 14,
                  padding: "18px 20px",
                  border: "1px solid #E2E8F0",
                  borderLeft: "4px solid #E8871A",
                  boxShadow: "0 2px 12px rgba(0, 0, 0, 0.02)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-serif), Georgia, serif",
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#0A1F44",
                    marginBottom: 10,
                    lineHeight: 1.25,
                  }}
                >
                  Important Takeaways
                </h3>
                <ul className="space-y-2">
                  {takeaways.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2.5 text-[#334155] text-[14px] sm:text-[14.5px] leading-relaxed"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-[#E8871A] shrink-0 mt-0.5"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          {/* 3. Key Subjects & Curriculum */}
          {subjects.length > 0 && (
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: 14,
                padding: "18px 20px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 2px 12px rgba(0, 0, 0, 0.02)",
              }}
            >
              <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-slate-100">
                <BookOpen size={18} className="text-[#0A1F44]" />
                <h3
                  style={{
                    fontFamily: "var(--font-serif), Georgia, serif",
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#0A1F44",
                    margin: 0,
                  }}
                >
                  {subjectsTitle || "Key Subjects Covered"}
                </h3>
              </div>
              {subjectsParagraphs.length > 0 && (
                <div className="mb-3.5 space-y-2 text-[#4A5568] text-[14.5px] sm:text-[15px] leading-relaxed">
                  {subjectsParagraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {subjects.map((sub, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 py-2 px-3 rounded-lg bg-[#F8FAFC] border border-slate-200/80 text-[#1E293B] text-[13px] sm:text-[13.5px] font-semibold transition-all hover:bg-amber-50/60 hover:border-[#E8871A]/40 min-h-[38px]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8871A] shrink-0" />
                    <span className="leading-snug">{sub}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. Program Learning Outcomes */}
          {learningOutcomes.length > 0 && (
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: 14,
                padding: "18px 20px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 2px 12px rgba(0, 0, 0, 0.02)",
              }}
            >
              <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-slate-100">
                <GraduationCap size={18} className="text-[#0A1F44]" />
                <h3
                  style={{
                    fontFamily: "var(--font-serif), Georgia, serif",
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#0A1F44",
                    margin: 0,
                  }}
                >
                  Program Learning Outcomes
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {learningOutcomes.map((outcome, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 py-2 px-3 rounded-lg bg-[#F8FAFC] border border-slate-200 text-[#334155] text-[13px] sm:text-[13.5px] leading-snug min-h-[38px]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0A1F44] shrink-0 mt-1" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. Admission Process & Eligibility (Entire card revealed on Read More) */}
          {admission && isAdmissionExpanded && (
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: 14,
                border: "1px solid #E2E8F0",
                boxShadow: "0 2px 12px rgba(0, 0, 0, 0.02)",
                padding: "18px 20px",
              }}
              className="animate-in fade-in slide-in-from-top-2 duration-300 space-y-3.5"
            >
              <div className="flex items-center gap-2.5 pb-2.5 border-b border-slate-100">
                <GraduationCap size={18} className="text-[#0A1F44] shrink-0" />
                <h3
                  style={{
                    fontFamily: "var(--font-serif), Georgia, serif",
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#0A1F44",
                    margin: 0,
                  }}
                >
                  {admission.whyChooseHeading || "Admission Process"}
                </h3>
              </div>

              <div className="p-3.5 rounded-lg bg-amber-50 border border-amber-200 text-[#0A1F44] text-[13.5px] sm:text-[14px] font-medium leading-relaxed">
                <span className="font-bold text-[#E8871A] mr-1.5">
                  Eligibility:
                </span>
                {admission.eligibility}
              </div>

              {admission.whyChooseParagraphs &&
                admission.whyChooseParagraphs.length > 0 && (
                  <div className="space-y-2 pt-0.5">
                    {admission.whyChooseParagraphs.map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-lg bg-[#F8FAFC] border border-slate-200 text-[#334155] text-[13.5px] sm:text-[14px] leading-relaxed transition-all hover:border-[#E8871A]/40"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#0A1F44] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <div className="font-medium">{step}</div>
                      </div>
                    ))}
                  </div>
                )}
            </div>
          )}

          {/* Centered Read More / Read Less button matching live Geeta University structure */}
          {admission && (
            <div className="text-center pt-1">
              <button
                type="button"
                onClick={() => setIsAdmissionExpanded((prev) => !prev)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-[#0A1F44] font-bold text-xs sm:text-[13.5px] shadow-sm hover:border-[#E8871A] hover:text-[#E8871A] transition-all duration-200 cursor-pointer active:scale-95"
              >
                <span>{isAdmissionExpanded ? "Read Less" : "Read More"}</span>
                <span className="text-[13px] font-bold">
                  {isAdmissionExpanded ? "↑" : "↓"}
                </span>
              </button>
            </div>
          )}
        </div>

        {/* Right Column: Sticky Enquire Now Admission Form & Degree Design Banner */}
        <div className="lg:col-span-5 xl:col-span-5 space-y-6 lg:sticky lg:top-24">
          <AdmissionFormWrapper
            initialDiscipline="School of Computer Science and Engineering"
            initialCourse={programName || title}
          />

          {/* Design Your Own Degree with GU - Below Inquiry Form */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: 20,
              padding: "24px 20px",
              border: "1px solid #E2E8F0",
              boxShadow: "0 4px 24px rgba(0, 0, 0, 0.04)",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: 18,
                fontWeight: 800,
                color: "#0A1F44",
                lineHeight: 1.25,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              DESIGN YOUR OWN DEGREE WITH GU
            </h3>

            <div className="relative w-full rounded-xl overflow-hidden bg-[#F8FAFC] border border-slate-100 p-3 sm:p-4 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://geetauniversity.edu.in/uploads/all/1830/1__1_-removebg-preview.png"
                alt="Design Your Own Degree With GU - Industry Ready Curriculum"
                className="w-full h-auto object-contain block mx-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}
