"use client";

import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { CourseLearningSpacesData } from "@/data/programs/courses/types";
import { useFiniteCarousel } from "@/hooks/useFiniteCarousel";

interface CourseLearningSpacesProps {
  learningSpaces: CourseLearningSpacesData;
}

export default function CourseLearningSpaces({
  learningSpaces,
}: CourseLearningSpacesProps) {
  const items = learningSpaces?.spaces || [];

  const {
    containerRef,
    currentIndex,
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
    totalItems: items.length,
    autoplayInterval: 3000,
    enableAutoplay: true,
  });

  if (!learningSpaces || items.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-[#F7F9FC] py-10 md:py-14 border-t border-slate-200/60 overflow-hidden relative">
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#E8871A]/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#0A1F44]/5 blur-3xl"
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 mb-8 md:mb-10 relative">
        <span
          style={{
            color: "#E8871A",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: 2,
            textTransform: "uppercase",
            display: "inline-block",
            marginBottom: 6,
          }}
        >
          {learningSpaces.eyebrow || "Infrastructure & Laboratories"}
        </span>
        <h2
          style={{
            fontSize: "clamp(30px, 3.8vw, 46px)",
            fontWeight: 900,
            color: "#0A1F44",
            margin: "0",
            lineHeight: 1.15,
            letterSpacing: "-1.2px",
          }}
        >
          {learningSpaces.title}
        </h2>
        {learningSpaces.description && (
          <p
            style={{
              fontSize: 16,
              color: "#4A5568",
              marginTop: 10,
              maxWidth: 800,
              lineHeight: 1.7,
              fontWeight: 450,
            }}
          >
            {learningSpaces.description}
          </p>
        )}
      </div>

      {/* Carousel Track */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 group relative">
        {/* Left navigation arrow */}
        {maxIndex > 0 && (
          <button
            type="button"
            onClick={prev}
            aria-label="Scroll left"
            className="absolute left-2 sm:left-4 top-1/2 z-30 flex h-10 w-10 sm:h-11 sm:w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 backdrop-blur-md text-[#0A1F44] shadow-md transition-all duration-300 hover:border-[#E8871A] hover:bg-[#0A1F44] hover:text-[#E8871A] hover:scale-110 active:scale-95 pointer-events-auto cursor-pointer"
          >
            <ChevronLeft size={19} strokeWidth={2.5} />
          </button>
        )}

        {/* Right navigation arrow */}
        {maxIndex > 0 && (
          <button
            type="button"
            onClick={next}
            aria-label="Scroll right"
            className="absolute right-2 sm:right-4 top-1/2 z-30 flex h-10 w-10 sm:h-11 sm:w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 backdrop-blur-md text-[#0A1F44] shadow-md transition-all duration-300 hover:border-[#E8871A] hover:bg-[#0A1F44] hover:text-[#E8871A] hover:scale-110 active:scale-95 pointer-events-auto cursor-pointer"
          >
            <ChevronRight size={19} strokeWidth={2.5} />
          </button>
        )}

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
          className="flex w-full gap-6 overflow-x-auto pb-4 pt-2 scroll-smooth cursor-grab active:cursor-grabbing select-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((space, idx) => (
            <div
              key={idx}
              className="group relative aspect-[16/11] w-[270px] sm:w-[320px] md:w-[370px] shrink-0 overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <Image
                src={space.image}
                alt={space.title || "Learning Space"}
                fill
                sizes="(max-width: 640px) 270px, (max-width: 1024px) 320px, 370px"
                className="object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
