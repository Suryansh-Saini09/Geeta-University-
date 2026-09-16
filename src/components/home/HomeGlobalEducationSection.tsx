"use client";

import Image from "next/image";

export default function HomeGlobalEducationSection() {
  return (
    <section
      aria-label="Globally benchmarked education reach"
      className="relative overflow-hidden bg-white py-8 md:py-12"
    >
      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* Map area */}
        <div className="relative overflow-hidden rounded-3xl border border-[#082B82]/30 bg-[#072577] shadow-xl">
          {/* Top accent */}
          <div className="absolute left-0 right-0 top-0 z-10 h-1.5 bg-[#F28C18]" />

          {/* Decorative subtle background accents */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-10 -top-10 h-44 w-44 rounded-full bg-[#F28C18]/10 blur-2xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-10 -right-10 h-52 w-52 rounded-full bg-[#00A3FF]/10 blur-2xl"
          />

          {/* Map container with full width display */}
          <div className="relative mx-auto flex w-full items-center justify-center p-2 sm:p-4 md:p-6">
            <Image
              src="/home/global-benchmark.png"
              alt="Geeta University global education reach map"
              width={1600}
              height={750}
              sizes="100vw"
              className="h-auto w-full rounded-2xl object-contain"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}