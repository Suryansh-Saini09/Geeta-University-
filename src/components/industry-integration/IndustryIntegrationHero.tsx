"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Building2, Sparkles } from "lucide-react";
import { industryIntegrationHero } from "@/data/industryIntegration";

export default function IndustryIntegrationHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0A1F44] text-white">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={industryIntegrationHero.heroImage}
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
          {industryIntegrationHero.breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={crumb.label}>
              {idx > 0 && <ChevronRight className="h-3.5 w-3.5 text-slate-400" />}
              {idx === industryIntegrationHero.breadcrumbs.length - 1 ? (
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

        {/* Hero Main Content */}
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E8871A]/40 bg-[#E8871A]/10 px-3.5 py-1.5 text-xs font-semibold text-[#E8871A] backdrop-blur-sm sm:text-sm">
            <Building2 className="h-4 w-4" />
            <span>Corporate Alliances & Industry Hubs</span>
          </div>

          {/* Heading */}
          <h1 className="mb-4 font-serif text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15]">
            Industry <span className="text-[#E8871A]">Integration</span>
          </h1>

          {/* Subtitle */}
          <p className="mb-6 text-lg font-medium text-amber-200/90 sm:text-xl md:text-2xl font-serif">
            {industryIntegrationHero.subtitle}
          </p>

          {/* Description */}
          <p className="mb-8 text-base text-slate-200 sm:text-lg leading-relaxed max-w-2xl font-sans">
            {industryIntegrationHero.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://admissions.geetauniversity.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#E8871A] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-[#F5A623] hover:shadow-amber-500/25 active:scale-95"
            >
              <span>Explore Programs</span>
              <ChevronRight className="h-4 w-4" />
            </a>
            <a
              href="#partners-grid"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/50 active:scale-95"
            >
              <Sparkles className="h-4 w-4 text-[#E8871A]" />
              <span>View Industry Partners</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
