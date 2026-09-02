"use client";

import React from "react";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { industryPartners } from "@/data/industryIntegration";

export default function IndustryPartnersGrid() {
  return (
    <section id="partners-grid" className="w-full bg-[#F7F9FC] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#0A1F44]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0A1F44]">
            Strategic Collaborations
          </div>
          <h2 className="font-serif text-3xl font-extrabold text-[#0A1F44] sm:text-4xl md:text-5xl">
            Industry Integrated <span className="text-[#E8871A]">Programs & Partners</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Empowering students with hands-on training, industry certifications, cutting-edge labs, and seed-funded research opportunities.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industryPartners.map((partner) => (
            <div
              key={partner.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-slate-300"
            >
              {/* Top Colored Accent Bar */}
              <div
                className="absolute top-0 left-0 right-0 h-2 transition-all duration-300 group-hover:h-2.5"
                style={{ backgroundColor: partner.accent }}
              />

              <div>
                {/* Header Tag / Badge */}
                <div className="mb-6 flex items-center justify-between">
                  <span
                    className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm"
                    style={{ backgroundColor: partner.accent }}
                  >
                    {partner.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    {partner.category}
                  </span>
                </div>

                {/* Logo Area */}
                <div className="mb-6 flex h-36 w-full items-center justify-center rounded-xl bg-slate-50 p-4 border border-slate-100 transition-colors group-hover:bg-amber-50/30">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-24 max-w-[200px] object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Partner Name & Tagline */}
                <h3 className="font-serif text-xl font-bold text-[#0A1F44] sm:text-2xl leading-snug">
                  {partner.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-slate-600 line-clamp-2">
                  {partner.tagline}
                </p>

                {/* Divider */}
                <div className="my-5 h-px w-full bg-slate-100" />

                {/* Benefits List */}
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Key Highlights & Benefits
                  </span>
                  <ul className="space-y-2.5">
                    {partner.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-sans"
                      >
                        <CheckCircle2
                          className="h-4 w-4 shrink-0 mt-0.5"
                          style={{ color: partner.accent }}
                        />
                        <span className="leading-snug">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">
                  GU Integrated Track
                </span>
                <a
                  href="https://admissions.geetauniversity.edu.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold transition-all hover:gap-2"
                  style={{ color: partner.accent }}
                >
                  <span>Apply Now</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
