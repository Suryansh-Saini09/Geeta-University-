"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, HelpCircle, Search } from "lucide-react";
import { faqHeroData } from "@/data/faqData";

interface FAQHeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function FAQHero({ searchQuery, setSearchQuery }: FAQHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#0A1F44] text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={faqHeroData.heroImage}
          alt="Geeta University Campus"
          className="h-full w-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-[#0A1F44]/90 to-[#0A1F44]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-28">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-300 sm:text-sm"
        >
          {faqHeroData.breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={crumb.label}>
              {idx > 0 && <ChevronRight className="h-3.5 w-3.5 text-slate-400" />}
              {idx === faqHeroData.breadcrumbs.length - 1 ? (
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

        {/* Hero Content */}
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E8871A]/40 bg-[#E8871A]/10 px-3.5 py-1.5 text-xs font-semibold text-[#E8871A] backdrop-blur-sm sm:text-sm">
            <HelpCircle className="h-4 w-4" />
            <span>Help Center & Information</span>
          </div>

          {/* Heading */}
          <h1 className="mb-4 font-serif text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15]">
            Geeta University <span className="text-[#E8871A]">FAQs</span>
          </h1>

          {/* Subtitle */}
          <p className="mb-6 text-lg font-medium text-amber-200/90 sm:text-xl md:text-2xl font-serif">
            {faqHeroData.subtitle}
          </p>

          {/* Description */}
          <p className="mb-8 text-base text-slate-200 sm:text-lg leading-relaxed max-w-2xl font-sans">
            {faqHeroData.description}
          </p>

          {/* Search Box */}
          <div className="relative max-w-xl">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions e.g. scholarships, hostel fees, CSE eligibility..."
              className="w-full rounded-2xl border border-white/20 bg-white/10 py-4 pl-12 pr-4 text-sm text-white placeholder-slate-300 backdrop-blur-md outline-none transition-all focus:border-[#E8871A] focus:bg-white/20 focus:ring-2 focus:ring-[#E8871A]/30 sm:text-base"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
