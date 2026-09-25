"use client";

import React from "react";
import { Briefcase, Building2, CheckCircle2 } from "lucide-react";
import type {
  CourseCareerPathways,
  CourseWhyGeeta,
} from "@/data/programs/courses/types";

interface CourseCareerSectionProps {
  career?: CourseCareerPathways;
  whyGeeta?: CourseWhyGeeta;
}

export default function CourseCareerSection({
  career,
  whyGeeta,
}: CourseCareerSectionProps) {
  if (!career && !whyGeeta) return null;

  const roles = career?.roles || [];
  const recruiters = career?.recruiters || [];
  const govtRoles = career?.govtRoles || [];
  const privateRoles = career?.privateRoles || [];

  return (
    <section
      id="CareerOpportunities"
      className="w-full bg-[#FFFFFF] py-14 sm:py-16 border-t border-slate-200/80"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* ── 1. Career Opportunities & Placement Support ── */}
        {career && (
          <div className="mb-14">
            <h2
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "clamp(26px, 3vw, 36px)",
                fontWeight: 800,
                color: "#0A1F44",
                lineHeight: 1.25,
                letterSpacing: "-0.5px",
                marginBottom: 16,
              }}
            >
              {career.title}
            </h2>

            {career.intro && (
              <p className="text-[#334155] text-[15.5px] sm:text-[16px] leading-relaxed mb-8 max-w-4xl font-normal">
                {career.intro}
              </p>
            )}

            {/* Top Job Roles Grid */}
            {roles.length > 0 && (
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase size={20} className="text-[#E8871A]" />
                  <h3
                    style={{
                      fontFamily: "var(--font-serif), Georgia, serif",
                      fontSize: "20px",
                      fontWeight: 800,
                      color: "#0A1F44",
                      margin: 0,
                    }}
                  >
                    {career.rolesTitle || "Top Job Roles"}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {roles.map((role, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200/90 text-[#1E293B] text-[14.5px] font-semibold transition-all hover:bg-amber-50/60 hover:border-[#E8871A]/40"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#E8871A] shrink-0" />
                      <span>{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Top Recruiters Grid */}
            {recruiters.length > 0 && (
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                  <Building2 size={20} className="text-[#E8871A]" />
                  <h3
                    style={{
                      fontFamily: "var(--font-serif), Georgia, serif",
                      fontSize: "20px",
                      fontWeight: 800,
                      color: "#0A1F44",
                      margin: 0,
                    }}
                  >
                    {career.recruitersTitle || "Top Recruiters includes:"}
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                  {recruiters.map((recruiter, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200/80 text-[#0A1F44] text-[15px] font-bold tracking-wide shadow-sm transition-all hover:border-[#E8871A]/50 hover:bg-white"
                    >
                      {recruiter.name}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Milestone Stats Cards (550+ Recruiters & 3500+ Job Offers) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto my-10">
              {/* Card 1: 550+ Recruiters */}
              <div className="rounded-2xl bg-[#0D2738] p-7 text-center shadow-lg border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="text-[38px] sm:text-[44px] font-black text-[#E8871A] leading-tight mb-1.5">
                  550+
                </div>
                <div className="text-[17px] sm:text-[18px] font-extrabold text-white uppercase tracking-wider">
                  Recruiters
                </div>
              </div>

              {/* Card 2: 3500+ Job Offers */}
              <div className="rounded-2xl bg-[#0D2738] p-7 text-center shadow-lg border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="text-[38px] sm:text-[44px] font-black text-[#E8871A] leading-tight mb-1.5">
                  3500+
                </div>
                <div className="text-[17px] sm:text-[18px] font-extrabold text-white uppercase tracking-wider">
                  Job Offers
                </div>
              </div>
            </div>

            {/* Domain Roles if present */}
            {(govtRoles.length > 0 || privateRoles.length > 0) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {govtRoles.length > 0 && (
                  <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                    <h4 className="font-bold text-[#0A1F44] text-base mb-3 pb-2 border-b border-slate-200">
                      Public & Government Domain
                    </h4>
                    <ul className="space-y-3">
                      {govtRoles.map((r, i) => (
                        <li key={i} className="text-sm">
                          <span className="font-bold text-slate-800 block">
                            {r.title}
                          </span>
                          {r.description && (
                            <span className="text-slate-600 text-xs mt-0.5 block">
                              {r.description}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {privateRoles.length > 0 && (
                  <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                    <h4 className="font-bold text-[#0A1F44] text-base mb-3 pb-2 border-b border-slate-200">
                      Corporate & Private Sector
                    </h4>
                    <ul className="space-y-3">
                      {privateRoles.map((r, i) => (
                        <li key={i} className="text-sm">
                          <span className="font-bold text-slate-800 block">
                            {r.title}
                          </span>
                          {r.description && (
                            <span className="text-slate-600 text-xs mt-0.5 block">
                              {r.description}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ── 2. Reasons to choose Geeta University ── */}
        {whyGeeta && (
          <div className="pt-8 border-t border-slate-200/80">
            <h2
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "clamp(24px, 2.8vw, 32px)",
                fontWeight: 800,
                color: "#0A1F44",
                lineHeight: 1.3,
                letterSpacing: "-0.5px",
                marginBottom: 16,
              }}
            >
              {whyGeeta.title}
            </h2>

            {/* Paragraphs */}
            {whyGeeta.paragraphs && whyGeeta.paragraphs.length > 0 ? (
              <div className="space-y-4 max-w-4xl text-[#334155] text-[15.5px] sm:text-[16px] leading-relaxed font-normal">
                {whyGeeta.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-justify">
                    {p}
                  </p>
                ))}
              </div>
            ) : whyGeeta.intro ? (
              <p className="max-w-4xl text-[#334155] text-[15.5px] sm:text-[16px] leading-relaxed font-normal mb-6 text-justify">
                {whyGeeta.intro}
              </p>
            ) : null}

            {/* Feature reason cards if present */}
            {whyGeeta.reasons && whyGeeta.reasons.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {whyGeeta.reasons.map((reason, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 transition-all hover:border-[#E8871A]/40"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 size={18} className="text-[#E8871A] shrink-0" />
                      <h4 className="font-bold text-[#0A1F44] text-[15px]">
                        {reason.title}
                      </h4>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
