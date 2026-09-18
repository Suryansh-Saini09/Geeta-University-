"use client";

import React from "react";
import Image from "next/image";
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
    goTo,
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
    <section className="relative w-full overflow-hidden bg-[#F7F9FC] py-16 md:py-24 border-t border-slate-200/60">
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#E8871A]/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#0A1F44]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header with Title & Subtitle */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-2 inline-block text-xs font-bold uppercase tracking-widest text-[#E8871A]">
            {learningSpaces.eyebrow || "Infrastructure & Laboratories"}
          </span>
          <h2 className="font-serif text-3xl font-bold leading-tight text-[#0A1F44] sm:text-4xl md:text-5xl">
            {learningSpaces.title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#E8871A]" />
          {learningSpaces.description && (
            <p className="mt-4 text-[15px] leading-relaxed text-[#4A5568] sm:text-base">
              {learningSpaces.description}
            </p>
          )}
        </div>

        {/* Carousel Track */}
        <div className="relative">
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
                {space.title && (
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#0A1F44]/90 via-[#0A1F44]/40 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                    <span className="text-sm font-bold leading-tight">{space.title}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
