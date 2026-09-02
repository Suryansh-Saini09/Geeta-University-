import React from "react";
import Link from "next/link";
import { ChevronRight, ShieldCheck, FileCheck2, Award } from "lucide-react";
import { ugcHeroData } from "@/data/ugcData";

export default function UGCHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0A1F44] text-white">
      {/* Background Campus Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/ugc/campus-ecosystem.webp"
          alt="Geeta University Campus UGC Inspection"
          className="h-full w-full object-cover object-right opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-[#0A1F44]/85 to-[#0A1F44]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-transparent to-[#0A1F44]/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-28">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-300 sm:text-sm"
        >
          {ugcHeroData.breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={crumb.label}>
              {idx > 0 && <ChevronRight className="h-3.5 w-3.5 text-slate-400" />}
              {idx === ugcHeroData.breadcrumbs.length - 1 ? (
                <span className="text-[#E8871A] font-semibold">{crumb.label}</span>
              ) : (
                <Link
                  href={crumb.href}
                  className="transition-colors hover:text-white"
                >
                  {crumb.label}
                </Link>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Hero Title & Subtitle */}
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E8871A]/40 bg-[#E8871A]/10 px-3.5 py-1.5 text-xs font-semibold text-[#E8871A] backdrop-blur-sm sm:text-sm">
            <ShieldCheck className="h-4 w-4" />
            <span>Official UGC Compliance & Public Disclosure</span>
          </div>

          <h1 className="mb-4 font-serif text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15]">
            UGC-Approved <span className="text-[#E8871A]">University</span>
          </h1>

          <p className="mb-6 text-lg font-medium text-amber-200/90 sm:text-xl font-serif">
            {ugcHeroData.subtitle}
          </p>

          <p className="mb-8 text-base text-slate-200 sm:text-lg leading-relaxed max-w-3xl font-sans">
            {ugcHeroData.description}
          </p>

          {/* Virtual Inspection Announcement Banner */}
          <div className="relative overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent p-5 sm:p-6 backdrop-blur-md">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8871A] text-white shadow-md">
                <FileCheck2 className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#E8871A]">
                  Official UGC Notice & Virtual Inspection
                </span>
                <p className="mt-1 font-serif text-base font-bold text-white sm:text-lg leading-snug">
                  "{ugcHeroData.inspectionTitle}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
