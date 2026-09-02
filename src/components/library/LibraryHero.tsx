import React from "react";
import Link from "next/link";
import { ChevronRight, BookOpen, Clock, ShieldCheck } from "lucide-react";
import { libraryHeroData } from "@/data/libraryData";

export default function LibraryHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0A1F44] text-white">
      {/* Background Overlay Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={libraryHeroData.heroImage}
          alt="Geeta University Central Library"
          className="h-full w-full object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-[#0A1F44]/90 to-[#0A1F44]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-transparent to-[#0A1F44]/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-28">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-300 sm:text-sm"
        >
          {libraryHeroData.breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={crumb.label}>
              {idx > 0 && <ChevronRight className="h-3.5 w-3.5 text-slate-400" />}
              {idx === libraryHeroData.breadcrumbs.length - 1 ? (
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

        {/* Hero Title & Badges */}
        <div className="max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E8871A]/40 bg-[#E8871A]/10 px-3.5 py-1.5 text-xs font-semibold text-[#E8871A] backdrop-blur-sm sm:text-sm">
            <BookOpen className="h-4 w-4" />
            <span>Knowledge Resource Center (KRC)</span>
          </div>

          <h1 className="mb-4 font-serif text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15]">
            Central <span className="text-[#E8871A]">Library</span>
          </h1>

          <p className="mb-6 text-lg font-medium text-amber-200/90 sm:text-xl font-serif">
            {libraryHeroData.subtitle}
          </p>

          <p className="text-base text-slate-200 sm:text-lg leading-relaxed font-sans max-w-3xl">
            {libraryHeroData.description}
          </p>

          {/* Quick Hours Indicator */}
          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-white/15 pt-6 text-xs sm:text-sm text-slate-300 font-sans">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#E8871A]" />
              <span>Operating Hours: <strong>9:00 AM - 10:00 PM</strong> (Mon - Sun)</span>
            </div>
            <span className="hidden sm:inline text-white/30">•</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>Working Days: <strong>360 Days / Year</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
