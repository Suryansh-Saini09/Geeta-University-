import React from "react";
import { BookOpenCheck, History, Award, Bookmark } from "lucide-react";
import { libraryOverviewData } from "@/data/libraryData";

export default function LibraryOverview() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Main Overview Content */}
          <div className="lg:col-span-8 space-y-6">
            <span className="inline-block rounded-full bg-[#E8871A]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#E8871A]">
              About Central Library
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#0A1F44] leading-tight">
              {libraryOverviewData.title}
            </h2>

            <div className="space-y-4 text-base text-slate-700 leading-relaxed font-sans">
              {libraryOverviewData.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Reference Section Callout Box */}
            <div className="mt-8 rounded-2xl border-l-4 border-[#E8871A] bg-amber-50/60 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A1F44] text-[#E8871A]">
                  <Bookmark className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#0A1F44]">
                    {libraryOverviewData.referenceSection.title}
                  </h3>
                  <span className="text-xs font-bold text-[#E8871A]">
                    {libraryOverviewData.referenceSection.count}
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed font-sans">
                {libraryOverviewData.referenceSection.description}
              </p>
            </div>
          </div>

          {/* Right Highlights & Stats Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-[#F7F9FC] p-6 sm:p-8 shadow-sm space-y-6">
              <h3 className="font-serif text-xl font-bold text-[#0A1F44] border-b border-slate-200 pb-3">
                Key Highlights
              </h3>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0A1F44] text-[#E8871A]">
                  <History className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0A1F44]">15+ Years of Legacy</h4>
                  <p className="text-xs text-slate-600 font-sans mt-0.5">
                    Functional since 2008, initially as Geeta Engineering College library, expanded into GU Central Library in 2022.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0A1F44] text-[#E8871A]">
                  <BookOpenCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0A1F44]">20+ Print Journals</h4>
                  <p className="text-xs text-slate-600 font-sans mt-0.5">
                    Subscriptions to leading national & international print journals and peer-reviewed magazines.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0A1F44] text-[#E8871A]">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0A1F44]">Equal Access Policy</h4>
                  <p className="text-xs text-slate-600 font-sans mt-0.5">
                    Every student, scholar, faculty, and administrative staff member is entitled to full library privileges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
