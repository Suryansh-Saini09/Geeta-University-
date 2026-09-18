"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { recruiters } from "@/data/recruiters";
import { useFiniteCarousel } from "@/hooks/useFiniteCarousel";

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

export default function TopRecruitersSection() {
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
    totalItems: recruiters.length,
    autoplayInterval: 2500,
    enableAutoplay: true,
  });

  return (
    <section
      aria-labelledby="top-recruiters-heading"
      className="relative overflow-hidden bg-white py-12 md:py-16"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >
          {/* Section heading */}
          <motion.div
            variants={itemVariants}
            className="mx-auto max-w-3xl text-center"
          >
            <h2
              id="top-recruiters-heading"
              className="font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
              style={{
                color: "var(--gu-navy)",
              }}
            >
              Our Top Recruiters
            </h2>

            <div
              className="mx-auto mt-5 h-1 w-16 rounded-full"
              style={{
                backgroundColor: "var(--gu-gold)",
              }}
            />
          </motion.div>

          {/* Recruiter marquee & scroll container */}
          <motion.div
            variants={itemVariants}
            className="group relative mt-10 overflow-hidden rounded-2xl border py-6 shadow-sm md:mt-12 md:py-8"
            style={{
              borderColor: "rgba(6, 53, 95, 0.10)",
              backgroundColor: "var(--gu-bg)",
            }}
          >
            {/* Left navigation arrow */}
            {maxIndex > 0 && (
              <button
                type="button"
                onClick={prev}
                aria-label="Scroll left"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-[#0A1F44] shadow-md transition-all hover:bg-[#0A1F44] hover:text-white hover:scale-110 active:scale-95 border border-slate-200 opacity-90 sm:opacity-0 group-hover:opacity-100 cursor-pointer"
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
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-[#0A1F44] shadow-md transition-all hover:bg-[#0A1F44] hover:text-white hover:scale-110 active:scale-95 border border-slate-200 opacity-90 sm:opacity-0 group-hover:opacity-100 cursor-pointer"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            )}

            {/* Left gradient */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 sm:w-28"
              style={{
                background:
                  "linear-gradient(to right, var(--gu-bg), transparent)",
              }}
            />

            {/* Right gradient */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 sm:w-28"
              style={{
                background:
                  "linear-gradient(to left, var(--gu-bg), transparent)",
              }}
            />

            {/* Horizontally Scrollable Container */}
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
              <div className="flex w-max items-center py-2">
                {recruiters.map((recruiter) => (
                  <div
                    key={recruiter.id}
                    className="group/card mx-3 flex h-24 w-52 shrink-0 items-center justify-center rounded-2xl border bg-white px-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:mx-4 sm:h-28 sm:w-60 md:h-32 md:w-64 pointer-events-auto"
                    style={{
                      borderColor: "rgba(6, 53, 95, 0.08)",
                    }}
                  >
                    <Image
                      src={recruiter.logo}
                      alt={`${recruiter.name} logo`}
                      width={220}
                      height={90}
                      sizes="(max-width: 640px) 180px, 240px"
                      className="max-h-16 sm:max-h-20 md:max-h-22 w-auto max-w-[85%] object-contain transition-all duration-300 pointer-events-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}