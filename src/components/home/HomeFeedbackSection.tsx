"use client";

import Image from "next/image";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { homeFeedback } from "@/data/homeFeedback";
import { useFiniteCarousel } from "@/hooks/useFiniteCarousel";

export default function HomeFeedbackSection() {
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
    totalItems: homeFeedback.length,
    autoplayInterval: 4500,
    enableAutoplay: true,
  });

  return (
    <section className="relative overflow-hidden bg-[#F5F8FB] pt-8 md:pt-10 pb-16 md:pb-20">
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#F28C18]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#06355F]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="font-serif text-4xl font-bold leading-tight text-[#06355F] sm:text-5xl">
            From Campus to{" "}
            <span className="text-[#F28C18]">Corporate Success</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#F28C18]" />
        </div>

        {/* Horizontally Scrollable & Draggable Cards Track */}
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
          {homeFeedback.map((student, index) => (
            <article
              key={`${student.name}-${index}`}
              className={`group relative flex w-[300px] sm:w-[350px] md:w-[380px] shrink-0 flex-col overflow-hidden rounded-3xl border bg-white p-7 pb-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                index % 2 === 1 ? "border-[#F28C18]/40" : "border-[#DCE5ED]"
              }`}
            >
              {/* Top Accent Bar */}
              <div
                className={`absolute left-0 top-0 h-1.5 w-full transition-all duration-300 ${
                  index % 2 === 1 ? "bg-[#F28C18]" : "bg-[#06355F]"
                }`}
              />

              {/* Student identity */}
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-4 border-[#F5F8FB] bg-[#EAF0F5]">
                  <Image
                    src={student.image}
                    alt={student.name}
                    fill
                    sizes="80px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="font-serif text-xl font-bold text-[#06355F]">
                    {student.name}
                  </h3>

                  <div className="mt-2 inline-flex items-center rounded-full bg-[#FFF3E2] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#D97706]">
                    Package · {student.package}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-7 flex flex-1 flex-col justify-between">
                <div>
                  <span
                    aria-hidden="true"
                    className="font-serif text-5xl font-bold leading-none text-[#F28C18]/25"
                  >
                    “
                  </span>

                  <p className="mt-[-6px] text-[15px] leading-7 text-[#536B83]">
                    {student.testimonial}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Controls */}
        <div className="mt-10 flex items-center justify-center gap-5">
          {maxIndex > 0 && (
            <button
              type="button"
              onClick={prev}
              aria-label="Previous student stories"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#CBD8E3] bg-white text-[#06355F] shadow-sm transition-all duration-200 hover:border-[#F28C18] hover:bg-[#F28C18] hover:text-white active:scale-95 cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          <div className="flex items-center gap-2">
            {homeFeedback.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to student story ${index + 1}`}
                onClick={() => goTo(index)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === index
                    ? "w-8 bg-[#F28C18]"
                    : "w-2.5 bg-[#B9C7D4] hover:bg-[#06355F]"
                }`}
              />
            ))}
          </div>

          {maxIndex > 0 && (
            <button
              type="button"
              onClick={next}
              aria-label="Next student stories"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#CBD8E3] bg-white text-[#06355F] shadow-sm transition-all duration-200 hover:border-[#F28C18] hover:bg-[#F28C18] hover:text-white active:scale-95 cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}