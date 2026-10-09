"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { teachingHero } from "@/data/teachingLearningPractices";

export default function TeachingHero({ data }: { data?: any }) {
  const title = data?.title || teachingHero.title;
  const description = data?.description || teachingHero.description;
  const heroImage = data?.heroImage || teachingHero.heroImage;
  const breadcrumbs = data?.breadcrumbs || teachingHero.breadcrumbs;

  return (
    <section className="relative w-full overflow-hidden bg-[#0A1F44] text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt={title}
          className="h-full w-full object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44]/90 via-[#0A1F44]/65 to-[#0A1F44]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/75 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-28">
        {/* Breadcrumb Navigation */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-300 sm:text-sm"
          >
            {breadcrumbs.map((crumb: any, idx: number) => (
              <React.Fragment key={crumb.label || idx}>
                {idx > 0 && <ChevronRight className="h-3.5 w-3.5 text-slate-400" />}
                {idx === breadcrumbs.length - 1 ? (
                  <span className="text-[#E8871A] font-semibold">{crumb.label}</span>
                ) : (
                  <Link
                    href={crumb.href || "#"}
                    className="transition-colors hover:text-white"
                  >
                    {crumb.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Hero Main Content */}
        <div className="max-w-3xl">
          {/* Heading */}
          <h1 className="mb-4 font-serif text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15]">
            {title.includes("Learning") ? (
              <>
                {title.split("Learning")[0]}
                <span className="text-[#E8871A]">Learning Practices</span>
              </>
            ) : (
              title
            )}
          </h1>

          {/* Description */}
          <p className="mb-8 text-base text-slate-200 sm:text-lg leading-relaxed max-w-2xl font-sans">
            {description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://admissions.geetauniversity.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#E8871A] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-[#F5A623] hover:shadow-amber-500/25 active:scale-95"
            >
              <span>Apply Now</span>
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
