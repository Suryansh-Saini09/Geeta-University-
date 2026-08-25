"use client";

import React from "react";
import Image from "next/image";

interface LegacyEcosystemProps {
  id?: string;
  contextText?: string;
}

export default function LegacyEcosystem({
  id = "legacy-ecosystem",
  contextText = "Students benefit from the integrated ecosystem of:",
}: LegacyEcosystemProps) {
  return (
    <section id={id} className="scroll-mt-[190px] bg-white py-20 lg:py-24 border-t border-[#E2E8F0]">
      <div className="gu-container">
        {/* Section Header with exact site typography */}
        <div className="mx-auto mb-14 max-w-4xl text-center md:mb-16">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#E8871A]" />
            <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#E8871A]">
              Institutional Heritage
            </span>
            <span className="h-px w-9 bg-[#E8871A]" />
          </div>

          <h2 className="font-serif text-[42px] font-black leading-[1.05] tracking-[-1.5px] text-[#0A1F44] sm:text-[50px] md:text-[58px]">
            Legacy &amp; <span className="text-[#E8871A]">Ecosystem</span>
          </h2>
        </div>

        {/* 50/50 Balanced Grid */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Content Column */}
          <div className="lg:col-span-6 xl:col-span-6">
            <p className="text-[16px] leading-[1.8] text-[#64748B] md:text-[17px]">
              Founded in 1985, the{" "}
              <strong className="font-bold text-[#0A1F44]">
                Geeta Group of Institutions
              </strong>{" "}
              has emerged as a major educational hub with institutions spanning
              school education to doctoral programs. {contextText}
            </p>

            {/* List of 3 Ecosystem Cards */}
            <div className="mt-8 flex flex-col gap-4">
              {/* Item 1: Orange */}
              <div className="group flex items-stretch gap-2.5">
                <div className="flex-1 rounded-[14px] bg-[#E85C2D] p-5 shadow-[0_4px_12px_rgba(232,92,45,0.18)] transition-transform duration-200 group-hover:-translate-y-0.5 sm:p-6">
                  <h3 className="font-serif text-[22px] font-black text-white">
                    Geeta University
                  </h3>
                  <p className="mt-1 text-[14.5px] font-medium leading-[1.6] text-[#fff5f2]">
                    AI-enabled multidisciplinary campus
                  </p>
                </div>
                <div className="w-1.5 shrink-0 rounded-full bg-[#E85C2D]" />
              </div>

              {/* Item 2: Blue */}
              <div className="group flex items-stretch gap-2.5">
                <div className="flex-1 rounded-[14px] bg-[#07589f] p-5 shadow-[0_4px_12px_rgba(7,88,159,0.18)] transition-transform duration-200 group-hover:-translate-y-0.5 sm:p-6">
                  <h3 className="font-serif text-[22px] font-black text-white">
                    Geeta Finishing School (GFS)
                  </h3>
                  <p className="mt-1 text-[14.5px] font-medium leading-[1.6] text-[#e6f0fa]">
                    Communication &amp; Corporate Readiness
                  </p>
                </div>
                <div className="w-1.5 shrink-0 rounded-full bg-[#07589f]" />
              </div>

              {/* Item 3: Teal */}
              <div className="group flex items-stretch gap-2.5">
                <div className="flex-1 rounded-[14px] bg-[#013d55] p-5 shadow-[0_4px_12px_rgba(1,61,85,0.18)] transition-transform duration-200 group-hover:-translate-y-0.5 sm:p-6">
                  <h3 className="font-serif text-[22px] font-black text-white">
                    Geeta Technical Hub (GTH)
                  </h3>
                  <p className="mt-1 text-[14.5px] font-medium leading-[1.6] text-[#e0f7fa]">
                    Advanced Technology, Certifications, and Industry Skills
                  </p>
                </div>
                <div className="w-1.5 shrink-0 rounded-full bg-[#013d55]" />
              </div>
            </div>
          </div>

          {/* Right Campus Image (Increased size, static without animation) */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[22px] border border-[#E2E8F0] shadow-[0_15px_40px_rgba(0,0,0,0.10)] sm:min-h-[420px]">
              <Image
                src="/campus-life/ecosystem-campus.webp"
                alt="Geeta Group Campus"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}