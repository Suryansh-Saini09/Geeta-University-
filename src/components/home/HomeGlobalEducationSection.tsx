"use client";

import Image from "next/image";

export default function HomeGlobalEducationSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-24">
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-180px] top-20 h-80 w-80 rounded-full bg-[#F28C18]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-180px] right-[-120px] h-96 w-96 rounded-full bg-[#06355F]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[#F28C18]">
            Global Reach
          </p>

          <h2 className="font-serif text-4xl font-bold leading-tight text-[#06355F] sm:text-5xl">
            A Hub of{" "}
            <span className="text-[#F28C18]">
              Globally Benchmarked Education
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#F28C18]" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#536B83] sm:text-lg">
            Geeta University connects students with a world of academic,
            cultural and professional opportunities, creating an education
            experience that extends far beyond the campus.
          </p>
        </div>

        {/* Map area */}
        <div className="relative mt-12 overflow-hidden rounded-[2rem] border border-[#DCE5ED] bg-[#F5F8FB] px-5 py-8 shadow-sm sm:px-10 md:mt-16 md:py-12">
          {/* Top accent */}
          <div className="absolute left-0 right-0 top-0 h-1.5 bg-[#F28C18]" />

          {/* Decorative circles */}
          <div
            aria-hidden="true"
            className="absolute left-8 top-8 h-20 w-20 rounded-full border border-[#F28C18]/20"
          />

          <div
            aria-hidden="true"
            className="absolute bottom-8 right-8 h-28 w-28 rounded-full border border-[#06355F]/10"
          />

          {/* Map */}
          <div className="relative mx-auto flex min-h-[200px] w-full items-center justify-center md:min-h-[500px]">
            <Image
              src="/home/map-(1).png"
              alt="Geeta University global education reach map"
              width={1400}
              height={650}
              sizes="(max-width: 768px) 100vw, 1200px"
              className="h-auto w-full max-w-6xl object-contain"
              priority={false}
            />
          </div>
        </div>

        {/* Supporting statement */}
        <div className="mx-auto mt-10 flex max-w-4xl items-center gap-4">
          <div className="hidden h-px flex-1 bg-[#DCE5ED] sm:block" />

          <p className="text-center text-sm font-semibold leading-6 text-[#536B83] sm:text-base">
            Connecting students to opportunities, ideas and experiences
            across borders.
          </p>

          <div className="hidden h-px flex-1 bg-[#DCE5ED] sm:block" />
        </div>
      </div>
    </section>
  );
}