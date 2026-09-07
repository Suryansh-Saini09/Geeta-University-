"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const flagItems = [
  { name: "Australia", image: "/home/universe-flags/4-full.webp" },
  { name: "Brazil", image: "/home/universe-flags/5-full.webp" },
  { name: "Vietnam", image: "/home/universe-flags/6-full.webp" },
  { name: "Zimbabwe", image: "/home/universe-flags/7-full.webp" },
  { name: "South Africa", image: "/home/universe-flags/8-full.webp" },
  { name: "Nigeria", image: "/home/universe-flags/9-full.webp" },
  { name: "Yemen", image: "/home/universe-flags/11-full.webp" },
  { name: "Switzerland", image: "/home/universe-flags/14-1-full.webp" },
  { name: "Czech Republic", image: "/home/universe-flags/17-1-full.webp" },
  { name: "Malaysia", image: "/home/universe-flags/19-1-full.webp" },
  { name: "Global Partner 1", image: "/international-admissions/logo-11.webp" },
  { name: "Global Partner 2", image: "/international-admissions/logo-12.webp" },
  { name: "Global Partner 3", image: "/international-admissions/logo-10.webp" },
  { name: "Global Partner 4", image: "/international-admissions/logo-7.webp" },
  { name: "Global Partner 5", image: "/international-admissions/logo-8.webp" },
];

const globalUniversities = [
  "University of Sao Paulo, Brazil",
  "Swiss School of Management, Switzerland",
  "Universiti Malaysia Terengganu (UMT), Malaysia",
  "Mendel University, Czech Republic",
  "Murdoch University, Australia",
  "North Caucasian State Academy (NCSA), Russia",
];

const internships = [
  "Dubai",
  "Singapore",
  "Malaysia",
  "Vietnam",
  "Australia",
  "France",
];

export default function HomeUniverseSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Button scroll controls
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 360;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#F5F8FB] py-16 md:py-20">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#F28C18]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#06355F]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[#F28C18]">
            Global Presence
          </p>

          <h2 className="font-serif text-4xl font-bold leading-tight text-[#06355F] sm:text-5xl">
            Universe of <span className="text-[#F28C18]">GU</span>
          </h2>

          <div className="mt-5 h-1 w-16 rounded-full bg-[#F28C18]" />

          <p className="mt-6 max-w-3xl text-base leading-7 text-[#536B83] sm:text-lg">
            A globally connected university creating opportunities for
            students and staff through international partnerships,
            internships and cross-cultural academic experiences.
          </p>
        </div>

        {/* Main information cards */}
        <div className="grid gap-5 lg:grid-cols-3">
          {/* Global community */}
          <div className="group rounded-2xl border border-[#DCE5ED] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F28C18]/50 hover:shadow-lg">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#F28C18]">
              Global Community
            </p>

            <h3 className="font-sans text-2xl font-bold text-[#06355F]">
              31 Countries
            </h3>

            <p className="mt-1 font-semibold text-[#536B83]">
              22 States
            </p>

            <p className="mt-4 text-sm leading-6 text-[#64778A]">
              Students and staff from across India and the world contribute
              to a diverse and globally connected campus community.
            </p>
          </div>

          {/* Global universities */}
          <div className="group rounded-2xl border border-[#DCE5ED] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F28C18]/50 hover:shadow-lg">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#F28C18]">
              International Partnerships
            </p>

            <h3 className="font-sans text-2xl font-bold text-[#06355F]">
              Prestigious Global Universities
            </h3>

            <div className="mt-5 space-y-3">
              {globalUniversities.map((university) => (
                <div
                  key={university}
                  className="flex items-start gap-3 text-sm leading-5 text-[#536B83]"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#F28C18]" />
                  <span>{university}</span>
                </div>
              ))}
            </div>
          </div>

          {/* International internships */}
          <div className="group rounded-2xl border border-[#DCE5ED] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F28C18]/50 hover:shadow-lg">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#F28C18]">
              International Internships
            </p>

            <h3 className="font-sans text-2xl font-bold text-[#06355F]">
              Learn Beyond Borders
            </h3>

            <p className="mt-4 text-sm leading-6 text-[#64778A]">
              Students get opportunities to gain international exposure
              through internships and professional experiences across
              multiple countries.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {internships.map((location) => (
                <span
                  key={location}
                  className="rounded-full border border-[#DCE5ED] bg-[#F5F8FB] px-4 py-2 text-xs font-semibold text-[#06355F]"
                >
                  {location}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Global image strip */}
        <div className="mt-12">
          <div className="mb-5 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#DCE5ED]" />

            <p className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.2em] text-[#536B83]">
              Our Global Connections
            </p>

            <div className="h-px flex-1 bg-[#DCE5ED]" />
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-[#DCE5ED] bg-white py-5 shadow-sm">
            {/* Left navigation arrow */}
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-[#06355F] shadow-md transition-all duration-200 hover:scale-110 hover:border-[#06355F] hover:bg-[#06355F] hover:text-white active:scale-95 opacity-0 group-hover:opacity-100 sm:h-10 sm:w-10 cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Right navigation arrow */}
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-[#06355F] shadow-md transition-all duration-200 hover:scale-110 hover:border-[#06355F] hover:bg-[#06355F] hover:text-white active:scale-95 opacity-0 group-hover:opacity-100 sm:h-10 sm:w-10 cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Left fade */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent sm:w-20" />

            {/* Right fade */}
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent sm:w-20" />

            {/* Scrollable & Draggable container */}
            <div
              ref={scrollRef}
              className="universe-marquee-container flex w-full overflow-x-auto scroll-smooth cursor-grab active:cursor-grabbing select-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              style={{
                display: "flex",
                gap: 24,
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {[0, 1, 2, 3].map((setIndex) => (
                <div
                  key={setIndex}
                  className="universe-marquee-track flex shrink-0 items-center"
                  style={{ display: "flex", gap: 24, flexShrink: 0 }}
                >
                  {flagItems.map((item, index) => (
                    <div
                      key={`flag-${setIndex}-${index}`}
                      className="group/flag flex h-20 w-36 sm:h-24 sm:w-44 shrink-0 items-center justify-center rounded-xl border border-[#E4EAF0] bg-white p-3 shadow-2xs transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F28C18]/40 hover:shadow-md"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          maxHeight: "56px",
                          maxWidth: "100%",
                          width: "auto",
                          height: "auto",
                          objectFit: "contain",
                          pointerEvents: "none",
                        }}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .universe-marquee-container::-webkit-scrollbar {
          display: none;
        }

        @keyframes universeMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% - 24px));
          }
        }

        .universe-marquee-track {
          animation: universeMarquee 32s linear infinite;
        }

        .universe-marquee-container:hover .universe-marquee-track {
          animation-play-state: paused !important;
        }

        @media (max-width: 768px) {
          .universe-marquee-track {
            animation-duration: 24s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .universe-marquee-track {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}