"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export default function CareerDevelopmentCell() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="cdc" className="scroll-mt-[190px] bg-[#F7F9FC] py-20 lg:py-24 border-t border-[#E2E8F0]">
      <div className="gu-container">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-4xl text-center md:mb-16">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#E8871A]" />
            <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#E8871A]">
              Empowerment &amp; Mentorship
            </span>
            <span className="h-px w-9 bg-[#E8871A]" />
          </div>

          <h2 className="font-serif text-[38px] font-black leading-[1.08] tracking-[-1.5px] text-[#0A1F44] sm:text-[46px] md:text-[52px]">
            Career Development <span className="text-[#E8871A]">Cell (CDC)</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-[16px] leading-[1.8] text-[#64748B] md:text-[17px]">
            Nurturing student potential into industry-ready leadership through personalized training, corporate networking, and multi-tier placement support.
          </p>
        </div>

        {/* 2-Column Balanced Grid */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Description, Pillars & Director Box */}
          <div className="lg:col-span-7">
            <div className="rounded-[24px] border border-[#E2E8F0] bg-white p-7 shadow-sm sm:p-9">
              <h3 className="font-serif text-[24px] font-bold text-[#0A1F44] sm:text-[28px]">
                Bridging Campus Ambition with Corporate Excellence
              </h3>

              <p className="mt-4 text-[16px] leading-[1.8] text-[#64748B]">
                We support students in their quest for an exciting and rewarding professional career after graduation by providing a strong foundation of skills, guidance, and opportunities. The <strong className="font-bold text-[#0A1F44]">Career Development Cell (CDC)</strong> plays a pivotal role in ensuring the holistic development of students by offering structured placement training programs that focus on aptitude building, technical proficiency, communication skills, and personality development. Regular workshops, mock interviews, group discussions, and industry interaction sessions are conducted to prepare students to confidently face recruitment processes.
              </p>

              {/* 3 Core Pillars Cards */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-[16px] border border-[#E2E8F0] bg-[#F7F9FC] p-4 text-center transition-all hover:border-[#E8871A]/40 hover:bg-[#FFF7ED]">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#0A1F44] text-white text-xs font-bold">
                    01
                  </span>
                  <h4 className="mt-2 text-[14px] font-bold text-[#0A1F44]">
                    Skill Development
                  </h4>
                  <p className="mt-1 text-[12px] text-[#64748B]">
                    Aptitude, coding &amp; soft skills
                  </p>
                </div>

                <div className="rounded-[16px] border border-[#E2E8F0] bg-[#F7F9FC] p-4 text-center transition-all hover:border-[#E8871A]/40 hover:bg-[#FFF7ED]">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#E8871A] text-white text-xs font-bold">
                    02
                  </span>
                  <h4 className="mt-2 text-[14px] font-bold text-[#0A1F44]">
                    Corporate Connect
                  </h4>
                  <p className="mt-1 text-[12px] text-[#64748B]">
                    Industry interaction &amp; drives
                  </p>
                </div>

                <div className="rounded-[16px] border border-[#E2E8F0] bg-[#F7F9FC] p-4 text-center transition-all hover:border-[#E8871A]/40 hover:bg-[#FFF7ED]">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#07589F] text-white text-xs font-bold">
                    03
                  </span>
                  <h4 className="mt-2 text-[14px] font-bold text-[#0A1F44]">
                    Higher Studies
                  </h4>
                  <p className="mt-1 text-[12px] text-[#64748B]">
                    Counseling &amp; exam mentorship
                  </p>
                </div>
              </div>

              {/* Expandable Text */}
              {isExpanded && (
                <div className="mt-6 border-t border-[#E2E8F0] pt-6 text-[15px] leading-[1.8] text-[#64748B] space-y-4">
                  <p>
                    In addition to placement support, CDC also guides students who aspire to pursue higher education by offering counseling, entrance exam preparation support, and mentorship to help them choose the right academic path. This dual focus ensures that every student is well-prepared for both professional and academic growth after graduation.
                  </p>
                  <p>
                    Geeta Group of Institutions (GGI) has consistently maintained an inspiring and commendable placement record over the years, reflecting its commitment to excellence. Students have been successfully placed across a wide range of industrial verticals, including IT, management, healthcare, hospitality, engineering, and emerging technologies. The institute has built strong relationships with leading organizations and top multinational companies (MNCs), enabling students to secure promising career opportunities.
                  </p>
                </div>
              )}

              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-bold text-[#E8871A] hover:text-[#d97706] transition-colors"
              >
                <span>{isExpanded ? "Read Less" : "Read More Details"}</span>
                <span>{isExpanded ? "↑" : "↓"}</span>
              </button>

              {/* Director Profile Card */}
              <div className="mt-8 rounded-[20px] border border-[#E2E8F0] bg-[#F7F9FC] p-5 sm:p-6 shadow-sm">
                <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center">
                  <div className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-[16px] border-2 border-[#E8871A] shadow-md">
                    <Image
                      src="/placements/amit-kumar-verma.webp"
                      alt="Amit Kumar Verma - Sr. Director Training & Placement"
                      fill
                      sizes="112px"
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="text-center sm:text-left">
                    <span className="inline-flex rounded-full bg-[#FFF3E2] px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#E8871A]">
                      CDC Leadership
                    </span>
                    <h4 className="mt-1 font-serif text-[22px] font-bold text-[#0A1F44]">
                      Amit Kumar Verma
                    </h4>
                    <p className="text-[14px] font-semibold text-[#07589F]">
                      Sr. Director — Training &amp; Placement
                    </p>

                    <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-[13px] text-[#64748B] sm:justify-start">
                      <a
                        href="mailto:sr.director.tp@geetauniversity.edu.in"
                        className="inline-flex items-center gap-1.5 hover:text-[#0A1F44] transition-colors"
                      >
                        <Mail className="h-4 w-4 text-[#E8871A]" />
                        <span>sr.director.tp@geetauniversity.edu.in</span>
                      </a>
                      <span className="hidden sm:inline text-slate-300">•</span>
                      <a
                        href="tel:+918684489100"
                        className="inline-flex items-center gap-1.5 hover:text-[#0A1F44] transition-colors"
                      >
                        <Phone className="h-4 w-4 text-[#E8871A]" />
                        <span>+91 8684489100 / 9911613975</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Overview Image */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white p-3 shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px] bg-slate-100 sm:min-h-[380px]">
                <Image
                  src="/placements/cdc-overview.webp"
                  alt="Career Development Cell at Geeta University"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-[center_15%]"
                />
              </div>

              <div className="p-4 text-center">
                <p className="font-serif text-[18px] font-bold text-[#0A1F44]">
                  Continuous Industry Engagement
                </p>
                <p className="mt-1 text-[13px] text-[#64748B]">
                  Dedicated training sessions, mock interviews &amp; corporate immersion workshops.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
