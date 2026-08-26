"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PlacementCTA() {
  return (
    <section className="bg-white py-16 sm:py-20 border-t border-[#E2E8F0]">
      <div className="gu-container">
        <div className="relative overflow-hidden rounded-[28px] bg-[#0A1F44] p-8 sm:p-12 lg:p-16 shadow-[0_20px_50px_rgba(10,31,68,0.15)] text-white">
          {/* Decorative background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#E8871A]/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -bottom-24 h-80 w-80 rounded-full bg-[#07589F]/30 blur-3xl"
          />

          <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="inline-flex rounded-full bg-[#E8871A] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[2px] text-white">
                Admissions Open 2026–2027
              </span>

              <h2 className="mt-4 font-serif text-[32px] font-black leading-[1.1] text-white sm:text-[42px] lg:text-[48px]">
                Ready to Launch Your High-Growth Career?
              </h2>

              <p className="mt-4 max-w-2xl text-[16px] leading-[1.75] text-slate-200 sm:text-[17px]">
                Join Geeta University to gain industry-aligned practical training, global certifications at Geeta Technical Hub, and guaranteed placement mentorship through CDC.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 lg:col-span-4 justify-center">
              <a
                href="https://admissions.geetauniversity.edu.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E8871A] px-8 py-3.5 text-[14px] font-bold text-white shadow-lg shadow-[#E8871A]/30 transition-all hover:bg-[#d97706] hover:scale-[1.02]"
              >
                <span>Apply for Admission</span>
                <ArrowRight size={16} />
              </a>

              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-3.5 text-[14px] font-bold text-white transition-all hover:bg-white/20"
              >
                <span>Explore University</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
