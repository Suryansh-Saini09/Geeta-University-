"use client";

import React from "react";
import type { CourseTestimonial } from "@/data/programs/courses/types";
import { useFiniteCarousel } from "@/hooks/useFiniteCarousel";

interface CourseTestimonialsProps {
  testimonials: CourseTestimonial[];
}

export default function CourseTestimonials({
  testimonials,
}: CourseTestimonialsProps) {
  const testimonialItems = testimonials && testimonials.length > 0 ? testimonials : [];

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
    totalItems: testimonialItems.length,
    autoplayInterval: 3000,
    enableAutoplay: true,
  });

  if (testimonialItems.length === 0) return null;

  return (
    <section
      id="CourseTestimonials"
      className="relative overflow-hidden bg-[#0A1F44] py-16 md:py-24 border-t border-white/5"
    >
      {/* Decorative Blur Spheres */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -left-20 h-96 w-96 rounded-full bg-[#E8871A]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-[#E8871A]/8 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Student Testimonials
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#E8871A]" />
          <p className="mt-4 text-[15px] leading-relaxed text-white/70 sm:text-base">
            Read first-hand accounts from our students and alumni about their career transformations, academic mentorship, and experiential journey.
          </p>
        </div>

        {/* Scrollable & Draggable Testimonials Track */}
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
            {testimonialItems.map((item, index) => {
              const initials = item.name
                .split(" ")
                .map((n) => n[0])
                .join("");
              const pkg = (item as { pkg?: string }).pkg;
              const quoteText = item.quote || item.text;
              const displayDetails = [
                item.role && !item.role.includes("Alumni") ? item.role : null,
                item.company,
                pkg,
              ]
                .filter(Boolean)
                .join(" • ");

              return (
                <article
                  key={`${item.name}-${index}`}
                  className={`group relative flex w-[300px] sm:w-[350px] md:w-[380px] shrink-0 flex-col overflow-hidden rounded-3xl border bg-white/[0.04] backdrop-blur-md p-7 pb-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/[0.07] ${
                    index % 2 === 1 ? "border-[#E8871A]/40" : "border-white/10"
                  }`}
                >
                  {/* Top Accent Bar */}
                  <div
                    className={`absolute left-0 top-0 h-1.5 w-full transition-all duration-300 ${
                      index % 2 === 1 ? "bg-[#E8871A]" : "bg-white/20"
                    }`}
                  />

                  {/* Student identity header */}
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border-2 border-white/15 bg-white/5 flex items-center justify-center">
                      <span className="text-base font-bold text-[#E8871A] select-none">
                        {initials}
                      </span>
                      {item.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={item.image}
                          alt={item.name}
                          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      ) : null}
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-serif text-lg font-bold text-white truncate">
                        {item.name}
                      </h3>

                      {pkg ? (
                        <div className="mt-1.5 inline-flex items-center rounded-full bg-[#E8871A]/15 border border-[#E8871A]/30 px-2.5 py-0.5 text-xs font-bold text-[#E8871A]">
                          Package · {pkg}
                        </div>
                      ) : (
                        <p className="text-xs text-white/60 truncate mt-1">
                          {displayDetails}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Quote Body */}
                  <div className="mt-6 flex flex-1 flex-col justify-between">
                    <div>
                      <span
                        aria-hidden="true"
                        className="font-serif text-4xl font-bold leading-none text-[#E8871A]/30"
                      >
                        “
                      </span>

                      <p className="mt-[-4px] text-[14px] leading-relaxed text-white/80 italic line-clamp-4">
                        {quoteText}
                      </p>
                    </div>

                    {/* Footer details if package is rendered above */}
                    {pkg && displayDetails && (
                      <div className="mt-5 border-t border-white/10 pt-3 text-xs text-white/50 truncate">
                        {displayDetails}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
