import React from "react";
import { ShieldCheck, FileSpreadsheet, PhoneCall, ArrowRight } from "lucide-react";

export default function UGCCalloutCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0A1F44] py-16 text-white md:py-20">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 h-80 w-80 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#E8871A]/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 -translate-x-1/3 translate-y-1/3 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md lg:flex-row lg:p-12">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#E8871A]/20 px-3.5 py-1 text-xs font-semibold text-[#E8871A]">
              <ShieldCheck className="h-4 w-4" />
              <span>Public Self-Disclosure & Compliance</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
              Have Questions Regarding <span className="text-[#E8871A]">Approvals & Verification?</span>
            </h2>
            <p className="mt-3 text-base text-slate-300 sm:text-lg font-sans">
              Our Academic Affairs and Registrar’s Office maintain transparent disclosures. Contact our official desk or explore the UGC Samadhaan Portal for statutory inquiries.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
            <a
              href="https://admissions.geetauniversity.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E8871A] px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-[#F5A623] hover:shadow-amber-500/25 active:scale-95"
            >
              <span>Apply for Admission</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="tel:+919278768000"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95"
            >
              <PhoneCall className="h-5 w-5 text-[#E8871A]" />
              <span>Call Helpline: +91 92787 68000</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
