"use client";

import React from "react";
import {
  CheckCircle2,
  BookOpen,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import type {
  CourseOverview,
  CourseAdmissionProcess,
} from "@/data/programs/courses/types";

interface CourseMainSectionProps {
  overview?: CourseOverview;
  takeaways?: string[];
  subjects?: string[];
  learningOutcomes?: string[];
  admission?: CourseAdmissionProcess;
  programName?: string;
}

export default function CourseMainSection({
  overview,
  takeaways = [],
  subjects = [],
  learningOutcomes = [],
  admission,
  programName,
}: CourseMainSectionProps) {
  const title = overview?.title || programName || "Course Overview";

  return (
    <section className="w-full bg-[#FFFFFF] py-12 md:py-16 border-b border-slate-200/80">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* 1. Overview Header & Paragraphs (Exact style as ProgramAbout.tsx) */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8871A]/10 text-[#E8871A] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles size={13} />
              Course Curriculum & Overview
            </div>
            <h1
              style={{
                fontSize: 44,
                fontWeight: 800,
                color: "#0A1F44",
                lineHeight: 1.15,
                letterSpacing: "-1px",
                marginBottom: 24,
              }}
            >
              {title}
            </h1>

            {overview?.paragraphs && overview.paragraphs.length > 0 && (
              <div className="space-y-4">
                {overview.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: 16.5,
                      color: "#4A5568",
                      lineHeight: 1.8,
                      fontWeight: 450,
                    }}
                    className="text-justify"
                  >
                    {p}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* 2. Important Takeaways (Styled with Left Accent Border like ProgramSpecialisations) */}
          {takeaways.length > 0 && (
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: 16,
                padding: "28px 26px",
                border: "1px solid #E2E8F0",
                borderLeft: "5px solid #E8871A",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
              }}
            >
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  color: "#0A1F44",
                  marginBottom: 16,
                  lineHeight: 1.3,
                }}
              >
                Important Takeaways
              </h3>
              <ul className="space-y-3">
                {takeaways.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[#334155] text-[15px] leading-relaxed"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-[#E8871A] shrink-0 mt-1"
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
                borderRadius: 16,
                padding: "28px 26px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-100">
                <BookOpen size={22} className="text-[#0A1F44]" />
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: "#0A1F44",
                    margin: 0,
                  }}
                >
                  Key Subjects Covered
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {subjects.map((sub, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-slate-200/80 text-[#1E293B] text-[14.5px] font-semibold transition-all hover:bg-amber-50/60 hover:border-[#E8871A]/40"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#E8871A] shrink-0" />
                    <span>{sub}</span>
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
                borderRadius: 16,
                padding: "28px 26px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-100">
                <GraduationCap size={22} className="text-[#0A1F44]" />
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: "#0A1F44",
                    margin: 0,
                  }}
                >
                  Program Learning Outcomes
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {learningOutcomes.map((outcome, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[#334155] text-sm leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0A1F44] shrink-0 mt-2" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. Admission Process & Eligibility */}
          {admission && (
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: 16,
                padding: "28px 26px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
              }}
            >
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  color: "#0A1F44",
                  marginBottom: 14,
                  lineHeight: 1.3,
                }}
              >
                {admission.whyChooseHeading || "Admission Process"}
              </h3>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-[#0A1F44] text-[15px] font-medium leading-relaxed mb-6">
                <span className="font-bold text-[#E8871A] mr-1.5">
                  Eligibility:
                </span>
                {admission.eligibility}
              </div>

              {admission.whyChooseParagraphs &&
                admission.whyChooseParagraphs.length > 0 && (
                  <div className="space-y-3.5">
                    {admission.whyChooseParagraphs.map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 text-[#334155] text-[15px] leading-relaxed transition-all hover:border-[#E8871A]/40"
                      >
                        <div className="w-7 h-7 rounded-full bg-[#0A1F44] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <div className="font-medium">{step}</div>
                      </div>
                    ))}
                  </div>
                )}
            </div>
          )}

          {/* 6. Design Your Own Degree with GU */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: 20,
              padding: "32px 28px",
              border: "1px solid #E2E8F0",
              boxShadow: "0 4px 24px rgba(0, 0, 0, 0.04)",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "clamp(20px, 2.4vw, 26px)",
                fontWeight: 800,
                color: "#0A1F44",
                lineHeight: 1.25,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              DESIGN YOUR OWN DEGREE WITH GU
            </h3>

            <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden bg-[#F8FAFC] border border-slate-100 p-4 sm:p-6 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://geetauniversity.edu.in/uploads/all/1830/1__1_-removebg-preview.png"
                alt="Design Your Own Degree With GU - Industry Ready Curriculum"
                className="w-full h-auto max-h-[500px] object-contain block mx-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
