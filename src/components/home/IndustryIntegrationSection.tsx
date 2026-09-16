"use client";

import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { industryPartners } from "@/data/industryPartners";

export default function IndustryIntegrationSection() {
  const marqueeItems = [...industryPartners, ...industryPartners, ...industryPartners];
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Drag-to-scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.6;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

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
    <section className="relative overflow-hidden bg-white py-20 md:py-24">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#F28C18]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[#F28C18]">
            Industry Connect
          </p>

          <h2 className="font-serif text-4xl font-bold leading-tight text-[#06355F] sm:text-5xl">
            Skill Centers &amp;{" "}
            <span className="text-[#F28C18]">
              Industry Integration
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#F28C18]" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#526579] sm:text-lg">
            Bridging academic learning with industry exposure through
            specialized skill centers, partnerships and real-world
            opportunities.
          </p>
        </div>

        {/* Industry marquee & scroll container */}
        <div className="group relative">
          {/* Left navigation arrow */}
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-[#06355F] shadow-md transition-all duration-200 hover:scale-110 hover:border-[#06355F] hover:bg-[#06355F] hover:text-white active:scale-95 opacity-0 group-hover:opacity-100 sm:h-11 sm:w-11"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Right navigation arrow */}
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-[#06355F] shadow-md transition-all duration-200 hover:scale-110 hover:border-[#06355F] hover:bg-[#06355F] hover:text-white active:scale-95 opacity-0 group-hover:opacity-100 sm:h-11 sm:w-11"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Left fade */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent sm:w-28"
          />

          {/* Right fade */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent sm:w-28"
          />

          {/* Marquee viewport with drag and scroll */}
          <div className="overflow-hidden rounded-3xl border border-[#DCE5EC] bg-[#F8FAFC] py-7 shadow-sm sm:py-9">
            <div
              ref={scrollRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              className="flex w-full overflow-x-auto scroll-smooth cursor-grab active:cursor-grabbing select-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <div
                className={`industry-marquee flex w-max items-center ${
                  isHovered || isDragging ? "paused" : ""
                }`}
              >
                {marqueeItems.map((partner, index) => (
                  <div
                    key={`${partner.image}-${index}`}
                    className="group/item mx-3 flex h-28 w-44 shrink-0 items-center justify-center rounded-2xl border border-[#E1E8EE] bg-white px-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F28C18]/40 hover:shadow-lg sm:mx-4 sm:h-32 sm:w-52"
                  >
                    <img
                      src={partner.image}
                      alt={partner.name}
                      loading="lazy"
                      className="max-h-20 max-w-[150px] object-contain transition-transform duration-300 group-hover/item:scale-105 sm:max-h-24 sm:max-w-[175px] pointer-events-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <span className="h-2.5 w-2.5 rounded-full bg-[#F28C18]" />

          <p className="text-sm font-medium text-[#526579] sm:text-base">
            Building stronger connections between education, skills and
            industry.
          </p>

          <span className="h-2.5 w-2.5 rounded-full bg-[#06355F]" />
        </div>
      </div>

      {/* Marquee animation */}
      <style jsx>{`
        .industry-marquee {
          animation: industry-scroll 42s linear infinite;
        }

        .industry-marquee.paused {
          animation-play-state: paused !important;
        }

        .industry-marquee:hover {
          animation-play-state: paused !important;
        }

        @keyframes industry-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-33.333%);
          }
        }

        @media (max-width: 640px) {
          .industry-marquee {
            animation-duration: 32s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .industry-marquee {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}