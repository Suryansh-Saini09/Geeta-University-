"use client";

import React from "react";
import Image from "next/image";

export default function ProgramsAfter12Hero() {
  return (
    <section className="w-full bg-white">
      {/* 1. Large, Impactful Top Banner Image */}
      <div className="relative w-full overflow-hidden bg-[#0A1F44]">
        <div className="relative h-[340px] sm:h-[440px] md:h-[540px] lg:h-[640px] xl:h-[720px] w-full">
          <Image
            src="/programs/ug-banner.webp"
            alt="Explore Undergraduate & Diploma Programs at Geeta University"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* 2. Spacious Hero Header & Overview Description */}
      <div className="gu-container py-16 sm:py-20 md:py-24 lg:py-28 border-b border-[#E2E8F0]">
        <div className="max-w-5xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#E8871A]" />
            <span className="text-[13px] sm:text-[14px] font-extrabold uppercase tracking-[3px] text-[#E8871A]">
              Undergraduate Admissions
            </span>
          </div>

          <h1 className="font-serif text-[38px] sm:text-[48px] md:text-[56px] lg:text-[62px] font-black text-[#0A1F44] leading-[1.12] tracking-[-1.5px]">
            Explore Undergraduate &amp; Diploma Programs at{" "}
            <span className="text-[#E8871A]">Geeta University</span>
          </h1>

          <div className="mt-8 space-y-5 text-[18px] sm:text-[20px] md:text-[21px] leading-[1.85] text-[#334155]">
            <p>
              Geeta University offers a wide array of industry-focused undergraduate programs tailored for
              students after 12th. With strong academic frameworks, experiential learning, and cutting-edge
              specializations like AI, Cyber Security, and Forensic Science, GU empowers students to achieve career
              excellence.
            </p>
            <p>
              International internships, top-notch faculty, and global exposure ensure students graduate with a
              competitive edge. Enroll in our 21st-century UG &amp; Diploma courses that promise innovation,
              entrepreneurship, and employment-readiness from day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
