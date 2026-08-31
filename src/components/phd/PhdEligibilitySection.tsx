"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle, ShieldAlert, ArrowUpRight, FileSpreadsheet, HelpCircle } from "lucide-react";

export default function PhdEligibilitySection() {
  return (
    <section id="eligibility" className="w-full bg-[#F3F5F6] py-14 sm:py-18 md:py-22 border-b border-[#E2E8F0]">
      <div className="gu-container space-y-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#E8871A]" />
            <span className="text-[12px] font-extrabold uppercase tracking-[3px] text-[#E8871A]">
              Admission Guidelines
            </span>
            <span className="h-[2px] w-8 bg-[#E8871A]" />
          </div>
          <h2 className="font-serif text-[32px] sm:text-[42px] font-black text-[#0A1F44]">
            Eligibility &amp; Selection Criteria
          </h2>
          <p className="mt-2 text-[16px] text-[#64748B]">
            Please review the minimum academic qualifications, selection procedure, and test exemption rules.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Card 1: Eligibility Criteria */}
          <div className="rounded-[22px] bg-white p-7 sm:p-10 border border-[#E2E8F0] shadow-sm">
            <h3 className="font-serif text-[24px] sm:text-[26px] font-bold text-[#0E395C] mb-4">
              Eligibility Criteria
            </h3>
            <p className="text-[16px] font-semibold text-[#0A1F44] mb-3">
              Eligibility criteria for admission to the Ph.D. Programme:
            </p>
            <ul className="space-y-4 text-[15.5px] leading-relaxed text-[#334155]">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0E395C] text-xs font-bold text-white">1</span>
                <div>
                  Candidates who have completed: A 1-year/2-semester Master’s degree programme after a 4-year/8-semester bachelor’s degree programme, or a 2-year/4-semester Master’s degree programme after a 3-year bachelor’s degree programme, or qualifications declared equivalent to the master’s degree by the corresponding statutory regulatory body, with at least <strong>55% marks in aggregate</strong> (or equivalent grade on a point scale).
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0E395C] text-xs font-bold text-white">2</span>
                <div>
                  Or equivalent qualification from a foreign educational institution accredited by an assessment and accreditation agency which is approved, recognized or authorized by an authority, established or incorporated under a law in its home country.
                </div>
              </li>
            </ul>

            <div className="mt-6 rounded-[14px] bg-[#FFF8F2] border border-[#FFD9B3] p-4.5 text-[14.5px] text-[#8C4300] space-y-2">
              <p>
                <strong>4-Year Bachelor's Degree Pathway:</strong> A candidate seeking admission after a 4-year/8-semester bachelor’s degree programme with research should have a minimum of <strong>75% marks in aggregate</strong> or its equivalent grade on a point scale.
              </p>
              <p>
                <strong>Foreign/NRI Applicants:</strong> Applicants with a Master’s degree from a foreign university must apply with an equivalent certificate of AIU along with the online application.
              </p>
              <p>
                <strong>*Ph.D. in Agriculture:</strong> As per ICAR guidelines and norms.
              </p>
            </div>
          </div>

          {/* Card 2: Admission Selection Criteria */}
          <div className="rounded-[22px] bg-white p-7 sm:p-10 border border-[#E2E8F0] shadow-sm">
            <h3 className="font-serif text-[24px] sm:text-[26px] font-bold text-[#0E395C] mb-4">
              Admission Selection Criteria
            </h3>
            <ul className="space-y-3.5 text-[15.5px] text-[#334155] leading-relaxed">
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-[#E8871A] mt-2.5 shrink-0" />
                <div>
                  An <strong>Entrance Test</strong> will be conducted, followed by an interview. The Entrance Test syllabus shall consist of <strong>50% Research Methodology</strong> and <strong>50% Subject-Specific</strong> content.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-[#E8871A] mt-2.5 shrink-0" />
                <div>
                  An applicant will be shortlisted for an interview based on his/her score in the Ph.D. entrance examination conducted by Geeta University. Students securing at least <strong>50% marks</strong> in the entrance test are eligible to be called for the interview.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-[#E8871A] mt-2.5 shrink-0" />
                <div>
                  The final selection for Ph.D. will be based on: <strong>Entrance Test (70% weightage)</strong> + <strong>Interview (30% weightage)</strong>.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-[#E8871A] mt-2.5 shrink-0" />
                <div>
                  Applicants seeking Ph.D. entrance examination exemption are also required to fill the Ph.D. application form and appear for the interview round.
                </div>
              </li>
            </ul>
          </div>

          {/* Card 3: Exemption Criteria */}
          <div className="rounded-[22px] bg-white p-7 sm:p-10 border border-[#E2E8F0] shadow-sm">
            <h3 className="font-serif text-[24px] sm:text-[26px] font-bold text-[#0E395C] mb-4">
              Exemption Criteria
            </h3>
            <ul className="space-y-3 text-[15.5px] text-[#334155] leading-relaxed">
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-[#10B981] mt-2.5 shrink-0" />
                <div>
                  Candidates who have successfully cleared <strong>NET (UGC/CSIR)</strong>, <strong>GATE</strong>, or <strong>GPAT</strong> in the relevant field, shall be exempted from the Geeta University Ph.D. Entrance Test as per the validity of score/result mentioned in their certificate. They will be required to appear in the interview round only.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-[#10B981] mt-2.5 shrink-0" />
                <div>
                  For consideration of exemption, candidates must timely submit a scanned copy of the official certificate along with the application form or via mail, not later than two days prior to the entrance exam.
                </div>
              </li>
            </ul>
          </div>

          {/* Card 4: How to Apply */}
          <div className="rounded-[22px] bg-[#0A1F44] p-7 sm:p-10 text-white shadow-xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/15">
              <div>
                <h3 className="font-serif text-[26px] sm:text-[30px] font-bold text-white">
                  How to Apply?
                </h3>
                <p className="mt-1 text-[15px] text-[#E2E8F0]">
                  Applicants must apply only through the online admissions portal:
                </p>
              </div>

              <a
                href="https://admissions.geetauniversity.edu.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[12px] bg-[#FF5F19] px-6 py-3 text-[15px] font-bold text-white shadow-lg transition-all hover:bg-[#E04B09] hover:scale-105"
              >
                <span>Apply Online Portal</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-6 space-y-3 text-[14.5px] text-[#E2E8F0]">
              <p className="font-bold text-white">While completing the online application, candidates should note:</p>
              <ul className="space-y-2 pl-4 list-disc">
                <li>Applicants are required to provide their CGPA or percentage of marks exactly as issued by their respective institute/university.</li>
                <li>Once the online application is submitted, it will be treated as final and binding. Requests for corrections or modifications will not be entertained.</li>
                <li>Each application must be accompanied by a non-refundable application fee of <strong>Rs. 1500/-</strong>.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
