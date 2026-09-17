"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { industryPartners } from "@/data/industryPartners";
import { useFiniteCarousel } from "@/hooks/useFiniteCarousel";

export default function IndustryIntegrationSection() {
  const {
    containerRef,
    maxIndex,
    next,
    prev,
    handleScroll,
    handleMouseDown,
    handleMouseLeave,
    handleMouseEnter,
    handleMouseUp,
    handleMouseMove,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useFiniteCarousel({
    totalItems: industryPartners.length,
    autoplayInterval: 2500,
    enableAutoplay: true,
  });

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
          <h2 className="font-serif text-4xl font-bold leading-tight text-[#06355F] sm:text-5xl">
            Skill Centers &amp;{" "}
            <span className="text-[#F28C18]">
              Industry Integration
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#F28C18]" />
        </div>

        {/* Industry marquee & scroll container */}
        <div className="group relative">
          {/* Left navigation arrow */}
          {maxIndex > 0 && (
            <button
              type="button"
              onClick={prev}
              aria-label="Scroll left"
              className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-[#06355F] shadow-md transition-all duration-200 hover:scale-110 hover:border-[#06355F] hover:bg-[#06355F] hover:text-white active:scale-95 opacity-0 group-hover:opacity-100 sm:h-11 sm:w-11 cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}

          {/* Right navigation arrow */}
          {maxIndex > 0 && (
            <button
              type="button"
              onClick={next}
              aria-label="Scroll right"
              className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-[#06355F] shadow-md transition-all duration-200 hover:scale-110 hover:border-[#06355F] hover:bg-[#06355F] hover:text-white active:scale-95 opacity-0 group-hover:opacity-100 sm:h-11 sm:w-11 cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}

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

          {/* Viewport with drag and scroll */}
          <div className="overflow-hidden rounded-3xl border border-[#DCE5EC] bg-[#F8FAFC] py-7 shadow-sm sm:py-9">
            <div
              ref={containerRef}
              onScroll={handleScroll}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="flex w-full overflow-x-auto scroll-smooth cursor-grab active:cursor-grabbing select-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <div className="flex w-max items-center">
                {industryPartners.map((partner, index) => (
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
      </div>
    </section>
  );
}