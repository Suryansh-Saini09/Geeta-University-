"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Compass,
  Search,
  CheckSquare,
  BarChart2,
  Brain,
  GraduationCap,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

export default function ConfusedContentSections() {
  return (
    <div className="w-full">
      {/* 1. Eye-Opening Statistics & Career Reality Check */}
      <section className="bg-[#F3F5F6] py-14 sm:py-20 border-b border-[#E2E8F0]">
        <div className="gu-container">
          <div className="mx-auto max-w-3xl text-center mb-10">
            <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[38px] font-black text-[#0A1F44] leading-tight">
              The Reality of Career Decisions in India
            </h2>
            <p className="mt-3 text-[16px] sm:text-[17px] text-[#64748B]">
              Why taking informed, data-backed career decisions early matters more than ever.
            </p>
          </div>

          {/* 3 Reality Check Stat Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-[24px] bg-white p-8 shadow-[0_2px_10px_rgba(0,0,0,0.06)] border border-[#E2E8F0] text-center">
              <div className="font-serif text-[42px] sm:text-[48px] font-black text-[#E8871A] leading-none mb-2">
                99%
              </div>
              <div className="font-bold text-[16px] uppercase tracking-wider text-[#0A1F44] mb-2">
                Medical &amp; IIT Aspirants
              </div>
              <p className="text-[15px] leading-relaxed text-[#475569]">
                fail in medical entrance exams each year, and 99.2% do not reach top IITs, highlighting the need to explore diverse degree alternatives.
              </p>
            </div>

            <div className="rounded-[24px] bg-white p-8 shadow-[0_2px_10px_rgba(0,0,0,0.06)] border border-[#E2E8F0] text-center">
              <div className="font-serif text-[42px] sm:text-[48px] font-black text-[#0A1F44] leading-none mb-2">
                600+
              </div>
              <div className="font-bold text-[16px] uppercase tracking-wider text-[#0A1F44] mb-2">
                Career Options
              </div>
              <p className="text-[15px] leading-relaxed text-[#475569]">
                diverse and high-growth professional fields are available after 12th across technology, management, law, health sciences, and design.
              </p>
            </div>

            <div className="rounded-[24px] bg-white p-8 shadow-[0_2px_10px_rgba(0,0,0,0.06)] border border-[#E2E8F0] text-center">
              <div className="font-serif text-[42px] sm:text-[48px] font-black text-[#E8871A] leading-none mb-2">
                90%+
              </div>
              <div className="font-bold text-[16px] uppercase tracking-wider text-[#0A1F44] mb-2">
                Unplanned Choices
              </div>
              <p className="text-[15px] leading-relaxed text-[#475569]">
                of students in India choose their career randomly based purely on peer pressure or casual advice without scientific aptitude testing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Four-Step Decision Framework */}
      <section className="bg-white py-16 sm:py-24 border-b border-[#E2E8F0]">
        <div className="gu-container">
          <div className="mb-12 max-w-3xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#E8871A]" />
              <span className="text-[12.5px] font-extrabold uppercase tracking-[2.5px] text-[#E8871A]">
                Structured Framework
              </span>
            </div>
            <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[46px] font-black leading-tight text-[#0A1F44]">
              What you decide today will affect your FUTURE B&apos;coz it&apos;s a BIG DEAL
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
            {/* Step 1 */}
            <div className="rounded-[24px] bg-[#F7F9FC] p-8 border border-[#E2E8F0] shadow-sm transition-all duration-200 hover:shadow-md">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#0A1F44] px-3.5 py-1 text-[12px] font-bold text-white uppercase tracking-wider" style={{ color: "#ffffff" }}>
                <Compass size={14} className="text-white" />
                Step 1
              </div>
              <h3 className="font-serif text-[22px] font-bold text-[#0A1F44] mb-4">
                Explore Yourself — Ask
              </h3>
              <ul className="space-y-2.5 pl-5 list-disc marker:text-[#E8871A] text-[15.5px] leading-relaxed text-[#334155]">
                <li>What are my core interests, values, skills, personality, and natural strengths?</li>
                <li>Which top 3 career options do I genuinely prefer?</li>
                <li>Which subjects do I passionately want to major in?</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="rounded-[24px] bg-[#F7F9FC] p-8 border border-[#E2E8F0] shadow-sm transition-all duration-200 hover:shadow-md">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#0A1F44] px-3.5 py-1 text-[12px] font-bold text-white uppercase tracking-wider" style={{ color: "#ffffff" }}>
                <Search size={14} className="text-white" />
                Step 2
              </div>
              <h3 className="font-serif text-[22px] font-bold text-[#0A1F44] mb-4">
                Workout Career Options — Research
              </h3>
              <ul className="space-y-2.5 pl-5 list-disc marker:text-[#E8871A] text-[15.5px] leading-relaxed text-[#334155]">
                <li>Look within your mentors, family &amp; industry professionals.</li>
                <li>Look for emerging careers having a high global scope.</li>
                <li>Look for specializations within chosen majors as per upcoming market trends.</li>
                <li>Look for self-employment &amp; entrepreneurship opportunities.</li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="rounded-[24px] bg-[#F7F9FC] p-8 border border-[#E2E8F0] shadow-sm transition-all duration-200 hover:shadow-md">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#0A1F44] px-3.5 py-1 text-[12px] font-bold text-white uppercase tracking-wider" style={{ color: "#ffffff" }}>
                <CheckSquare size={14} className="text-white" />
                Step 3
              </div>
              <h3 className="font-serif text-[22px] font-bold text-[#0A1F44] mb-4">
                Making a Decision
              </h3>
              <ul className="space-y-2.5 pl-5 list-disc marker:text-[#E8871A] text-[15.5px] leading-relaxed text-[#334155]">
                <li>List down at least 3 viable career options.</li>
                <li>Match them directly with your skills, interests, personality, &amp; long-term goals.</li>
                <li>List down any limitations or constraints which may obstruct your milestones.</li>
              </ul>
            </div>

            {/* Step 4 */}
            <div className="rounded-[24px] bg-[#F7F9FC] p-8 border border-[#E2E8F0] shadow-sm transition-all duration-200 hover:shadow-md">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#0A1F44] px-3.5 py-1 text-[12px] font-bold text-white uppercase tracking-wider" style={{ color: "#ffffff" }}>
                <BarChart2 size={14} className="text-white" />
                Step 4
              </div>
              <h3 className="font-serif text-[22px] font-bold text-[#0A1F44] mb-4">
                Evaluate the Decision
              </h3>
              <ul className="space-y-2.5 pl-5 list-disc marker:text-[#E8871A] text-[15.5px] leading-relaxed text-[#334155]">
                <li>Peek inside authentic student feedback, placement records, and online reviews.</li>
                <li>Discuss directly with current university students and alumni through open forums.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 1st Most Important Decision: Choosing the Right Course */}
      <section className="bg-[#F3F5F6] py-16 sm:py-24 border-b border-[#E2E8F0]">
        <div className="gu-container">
          <div className="rounded-[32px] bg-white p-8 sm:p-12 md:p-14 shadow-md border border-[#E2E8F0]">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#E8871A]" />
              <span className="text-[12.5px] font-extrabold uppercase tracking-[2.5px] text-[#E8871A]">
                Key Milestone #1
              </span>
            </div>

            <h2 className="font-serif text-[28px] sm:text-[36px] md:text-[42px] font-black text-[#0A1F44] leading-tight mb-8">
              1st Most Important Decision: Choosing the Right Course for Higher Education
            </h2>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              {/* Image Column (5 cols) - Complete, Unclipped Image */}
              <div className="lg:col-span-5 flex justify-center items-start">
                <div className="w-full max-w-[460px] overflow-hidden rounded-[24px] shadow-md border border-[#E2E8F0] bg-white p-2">
                  <Image
                    src="/courses/career-advice.jpg"
                    alt="Career Advice from Family, Teachers, and Counsellors"
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain block rounded-[18px]"
                  />
                </div>
              </div>

              {/* Text Column (7 cols) */}
              <div className="lg:col-span-7 space-y-4 text-[17px] sm:text-[18px] leading-[1.85] text-[#334155]">
                <p>
                  Which course will be the best for you? When and how to choose the right course? Which career path after 12th is the best?
                  Well, these are a few questions that might have haunted you after crossing your milestones. To be honest, these queries are universal among students and you are not the only one facing them.
                </p>
                <p>
                  Many students fail to recognize the importance of choosing the right career and regret it later. Without structured career guidance and deep awareness of modern emerging disciplines, there is a high probability of choosing a career pathway randomly.
                </p>
              </div>
            </div>

            {/* Two Pillars Subsection */}
            <div className="mt-14 pt-10 border-t border-[#E2E8F0]">
              <h3 className="font-serif text-[24px] sm:text-[28px] font-bold text-[#0A1F44] mb-8">
                Two Pillars in Finding the Right Course for You
              </h3>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {/* Pillar 1: Career Counselling */}
                <div className="rounded-[24px] bg-[#F7F9FC] p-8 border border-[#E2E8F0]">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A1F44] text-white shadow-sm" style={{ color: "#ffffff" }}>
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  <h4 className="font-serif text-[21px] font-bold text-[#0A1F44] mb-3">
                    1. Career Counselling
                  </h4>
                  <p className="text-[15.5px] leading-relaxed text-[#475569]">
                    Getting the right career guidance and being aware of the available options helps you make informed choices rather than picking randomly.
                  </p>
                  <p className="mt-3 text-[15.5px] leading-relaxed text-[#475569]">
                    For in-person career counselling, visit the Geeta University campus during working hours where our <strong>Team of Expert Counsellors</strong> guides students to identify their best-fit career with world-class assessment tools and personalized mentorship.
                  </p>
                </div>

                {/* Pillar 2: Psychometric Test */}
                <div className="rounded-[24px] bg-[#F7F9FC] p-8 border border-[#E2E8F0]">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8871A] text-white shadow-sm" style={{ color: "#ffffff" }}>
                    <Brain size={24} className="text-white" />
                  </div>
                  <h4 className="font-serif text-[21px] font-bold text-[#0A1F44] mb-3">
                    2. Psychometric Career Test
                  </h4>
                  <p className="text-[15.5px] leading-relaxed text-[#475569]">
                    Psychometric assessments are standard scientific tests used to measure mental capabilities, cognitive abilities, behavioral style, and stream suitability based on personality characteristics.
                  </p>
                  <p className="mt-3 text-[15.5px] leading-relaxed text-[#475569]">
                    GU&apos;s Psychometric Test is fine-tuned to global standards by psychologists and research teams to deliver easy-to-understand actionable recommendations.
                  </p>
                  <div className="mt-6">
                    <a
                      href="https://psychometrictest.in/career/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#E8871A] hover:bg-[#c9710f] !text-white px-6 py-3 text-[14.5px] font-bold shadow-md transition-all hover:scale-[1.02]"
                      style={{ color: "#ffffff" }}
                    >
                      <span>Take Free Career Test</span>
                      <ExternalLink size={15} className="!text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 2nd Most Important Decision: Choosing the Right Institution */}
      <section className="bg-white py-16 sm:py-24 border-b border-[#E2E8F0]">
        <div className="gu-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Checklist (7 cols) */}
            <div className="lg:col-span-7">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#E8871A]" />
                <span className="text-[12.5px] font-extrabold uppercase tracking-[2.5px] text-[#E8871A]">
                  Key Milestone #2
                </span>
              </div>

              <h2 className="font-serif text-[30px] sm:text-[38px] md:text-[44px] font-black text-[#0A1F44] leading-tight">
                2nd Most Important Decision: Choosing the Right Institution
              </h2>

              <p className="mt-5 text-[17px] sm:text-[18px] leading-[1.8] text-[#334155]">
                Your career graph and future opportunities greatly rely on the university from which you earn your degree. While many focus only on reputation, evaluate these critical parameters before finalizing:
              </p>

              <ul className="mt-7 space-y-3.5">
                {[
                  "Approvals, Affiliations, Rankings, Recognition & Accreditation (UGC, PCI, BCI, etc.)",
                  "Updated Syllabus as per Modern Industry Needs & 21st-Century Frameworks",
                  "Global Industry Linkages & Active Corporate Tie-ups",
                  "State-of-the-Art Infrastructure, High-Tech Labs & Experienced Faculty",
                  "Transparent Fee Structure with up to 100% Merit & Test Scholarships",
                  "Career Progression Opportunities in Research, Innovation & Incubation",
                  "Proven Placement Track Record with 550+ Top Recruiters & Highest Package of 40 LPA",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[16px] text-[#1E293B]">
                    <CheckCircle2 size={20} className="shrink-0 text-[#E8871A] mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/programs-after-12th"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#E8871A] hover:bg-[#c9710f] !text-white px-7 py-3.5 text-[15px] font-bold shadow-md transition-all hover:scale-[1.02]"
                  style={{ color: "#ffffff" }}
                >
                  <span>Explore UG Programs</span>
                  <ArrowRight size={16} className="!text-white" />
                </Link>

                <Link
                  href="/post-graduate-programs"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0A1F44] hover:bg-[#1A3A6B] !text-white px-7 py-3.5 text-[15px] font-bold shadow-md transition-all hover:scale-[1.02]"
                  style={{ color: "#ffffff" }}
                >
                  <span>Explore PG Programs</span>
                </Link>
              </div>
            </div>

            {/* Right Family Illustration (5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[440px] overflow-hidden rounded-[28px] shadow-lg border border-[#E2E8F0]">
                <Image
                  src="/courses/confused-family.webp"
                  alt="Career Guidance for Students and Parents at Geeta University"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
