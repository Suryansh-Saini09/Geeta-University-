import React from "react";
import { Clock, Info, Mail, BookOpen, ShieldCheck } from "lucide-react";
import {
  libraryHoursAndPolicyData,
  libraryLoanTableData,
} from "@/data/libraryData";

export default function LibraryInfoAndPolicy() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-[#0A1F44]/5 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0A1F44]">
            Timings & Rules
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[#0A1F44] sm:text-4xl">
            Library Operating Hours & Borrowing Policy
          </h2>
          <p className="mt-3 text-base text-slate-600 font-sans">
            Guaranteed 360-day operational commitment for Geeta University students, scholars, and faculty.
          </p>
        </div>

        {/* 3 Information Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Hours */}
          <div className="rounded-3xl border border-slate-200 bg-[#F7F9FC] p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A1F44] text-[#E8871A]">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#0A1F44]">
                    Library Hours
                  </h3>
                  <span className="text-xs font-bold text-[#E8871A]">
                    {libraryHoursAndPolicyData.workingDaysPerYear} Operational
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-sm font-sans pt-2 border-t border-slate-200/80">
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500 font-semibold">Operating Days:</span>
                  <span className="font-bold text-[#0A1F44]">{libraryHoursAndPolicyData.operatingDays}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500 font-semibold">Daily Timing:</span>
                  <span className="font-bold text-[#E8871A]">{libraryHoursAndPolicyData.timings}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500 font-semibold">Working Days / Year:</span>
                  <span className="font-bold text-[#0A1F44]">{libraryHoursAndPolicyData.workingDaysPerYear}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Important Info */}
          <div className="rounded-3xl border border-slate-200 bg-[#F7F9FC] p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A1F44] text-[#E8871A]">
                  <Info className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#0A1F44]">
                    Important Information
                  </h3>
                  <span className="text-xs font-bold text-[#E8871A]">
                    Guidelines
                  </span>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-700 font-sans pt-2 border-t border-slate-200/80">
                {libraryHoursAndPolicyData.importantInfo.map((info, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#E8871A] font-bold">•</span>
                    <span>{info}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 3: Support */}
          <div className="rounded-3xl border border-slate-200 bg-[#F7F9FC] p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A1F44] text-[#E8871A]">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#0A1F44]">
                    Library Contact Support
                  </h3>
                  <span className="text-xs font-bold text-[#E8871A]">
                    Helpdesk
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-600 font-sans mb-4 pt-2 border-t border-slate-200/80">
                For book requests, e-database login support, or research assistance, write directly to:
              </p>

              <a
                href={`mailto:${libraryHoursAndPolicyData.supportEmail}`}
                className="inline-flex items-center gap-2 rounded-xl bg-[#0A1F44] px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#E8871A]"
                style={{ color: "#ffffff" }}
              >
                <Mail className="h-4 w-4 text-white" style={{ color: "#ffffff" }} />
                <span style={{ color: "#ffffff" }}>{libraryHoursAndPolicyData.supportEmail}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Library Loan Details Table */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-lg">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-[#E8871A] mb-2">
                <BookOpen className="h-3.5 w-3.5" />
                <span>Borrowing Rules</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0A1F44]">
                Library Loan & Circulation Details
              </h3>
            </div>
            <p className="text-xs text-slate-500 font-sans max-w-md">
              The table below outlines the maximum borrowing limits and loan duration based on member categories.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-[#0A1F44] text-xs font-bold uppercase tracking-wider text-white">
                <tr>
                  <th scope="col" className="px-6 py-4">SN.</th>
                  <th scope="col" className="px-6 py-4">Category of Members</th>
                  <th scope="col" className="px-6 py-4 text-center">No. of Books Issued</th>
                  <th scope="col" className="px-6 py-4 text-right">Loan Period</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-sans">
                {libraryLoanTableData.map((row) => (
                  <tr key={row.sn} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-bold text-[#0A1F44]">{row.sn}</td>
                    <td className="px-6 py-4 font-semibold text-[#0A1F44]">{row.category}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-[#E8871A]">
                        {row.booksIssued}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-slate-800">{row.loanPeriod}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
