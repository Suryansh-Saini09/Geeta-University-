"use client";

import React from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { starPerformances } from "@/data/starPerformances";
import { useFiniteCarousel } from "@/hooks/useFiniteCarousel";

export default function StarPerformancesSection() {
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
    totalItems: starPerformances.length,
    autoplayInterval: 2500,
    enableAutoplay: true,
  });

  // YouTube video URL.
  const youtubeUrl = "https://www.youtube.com/embed/D-TW0dcqMDA";

  return (
    <section className="relative overflow-hidden bg-[#F7F9FC] py-12 md:py-16">
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#F28C18]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#06355F]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1600px]">
        {/* Heading */}
        <div className="px-5 text-center sm:px-8">
          <h2 className="font-serif text-4xl font-bold leading-tight text-[#06355F] sm:text-5xl md:text-6xl">
            Star Performances
            <span className="text-[#F28C18]">@GU</span>
          </h2>

          {/* Accent line */}
          <div className="mx-auto mt-5 flex items-center justify-center gap-2">
            <span className="h-1 w-8 rounded-full bg-[#F28C18]" />
            <span className="h-1 w-16 rounded-full bg-[#06355F]" />
            <span className="h-1 w-8 rounded-full bg-[#F28C18]" />
          </div>

          {/* YouTube CTA */}
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-7 inline-flex items-center gap-3 rounded-full border border-[#E63946]/20 bg-white px-6 py-3 text-sm font-semibold text-[#E63946] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E63946]/40 hover:shadow-lg"
          >
            {/* YouTube Icon */}
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:scale-110"
            >
              <path
                d="M23.498 6.186a2.99 2.99 0 0 0-2.106-2.117C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.392.569A2.99 2.99 0 0 0 .502 6.186C0 8.08 0 12 0 12s0 3.92.502 5.814a2.99 2.99 0 0 0 2.106 2.117C4.495 20.5 12 20.5 12 20.5s7.505 0 9.392-.569a2.99 2.99 0 0 0 2.106-2.117C24 15.92 24 12 24 12s0-3.92-.502-5.814Z"
                fill="#E63946"
              />

              <path
                d="M9.545 15.568 15.818 12 9.545 8.432v7.136Z"
                fill="white"
              />
            </svg>

            <span>Click Here to Watch Video</span>

            <span className="transition-transform duration-300 group-hover:translate-x-1 flex items-center">
              <ArrowRight size={16} />
            </span>
          </a>
        </div>

        {/* Gallery & Scroll Container */}
        <div className="group relative mt-14">
          {/* Left navigation arrow */}
          {maxIndex > 0 && (
            <button
              type="button"
              onClick={prev}
              aria-label="Scroll left"
              className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-[#06355F] shadow-lg transition-all duration-200 hover:scale-110 hover:border-[#06355F] hover:bg-[#06355F] hover:text-white active:scale-95 opacity-0 group-hover:opacity-100 sm:h-12 sm:w-12 cursor-pointer"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* Right navigation arrow */}
          {maxIndex > 0 && (
            <button
              type="button"
              onClick={next}
              aria-label="Scroll right"
              className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-[#06355F] shadow-lg transition-all duration-200 hover:scale-110 hover:border-[#06355F] hover:bg-[#06355F] hover:text-white active:scale-95 opacity-0 group-hover:opacity-100 sm:h-12 sm:w-12 cursor-pointer"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}

          {/* Left fade */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#F7F9FC] to-transparent sm:w-28 md:w-40"
          />

          {/* Right fade */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#F7F9FC] to-transparent sm:w-28 md:w-40"
          />

          {/* Viewport with drag and scroll */}
          <div className="overflow-hidden py-4">
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
                {starPerformances.map((star, index) => (
                  <div
                    key={`${star.image}-${index}`}
                    className="star-card group/item relative mx-2 aspect-[3/4.8] w-[190px] shrink-0 overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:mx-3 sm:w-[235px] md:w-[275px]"
                  >
                    <img
                      src={star.image}
                      alt={star.name}
                      loading="lazy"
                      className="h-full w-full object-contain pointer-events-none"
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