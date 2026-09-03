"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { recruiters } from "@/data/recruiters";

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
  const marqueeItems = [...recruiters, ...recruiters, ...recruiters];
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse drag-to-scroll handlers
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
    const walk = (x - startX) * 1.6; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Button scroll controls
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 340;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      aria-labelledby="top-recruiters-heading"
      className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-24"
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
            <p
              className="text-sm font-bold uppercase tracking-[0.25em]"
              style={{
                color: "var(--gu-gold)",
              }}
            >
              Industry Connections
            </p>

            <h2
              id="top-recruiters-heading"
              className="mt-3 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
              style={{
                color: "var(--gu-navy)",
              }}
            >
              Where Talent Meets Opportunity
            </h2>

            <div
              className="mx-auto mt-5 h-1 w-16 rounded-full"
              style={{
                backgroundColor: "var(--gu-gold)",
              }}
            />

            <p
              className="mx-auto mt-6 max-w-2xl text-base leading-8 sm:text-lg"
              style={{
                color: "var(--gu-text-muted)",
              }}
            >
              Our industry connections help bridge the journey from classroom
              learning to meaningful professional opportunities.
            </p>
          </motion.div>

          {/* Recruiter marquee & scroll container */}
          <motion.div
            variants={itemVariants}
            className="group relative mt-10 overflow-hidden rounded-2xl border py-5 shadow-sm md:mt-12 md:py-6"
            style={{
              borderColor: "rgba(6, 53, 95, 0.10)",
              backgroundColor: "var(--gu-bg)",
            }}
          >
            {/* Left navigation arrow */}
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#0A1F44] shadow-md transition-all hover:bg-[#0A1F44] hover:text-white hover:scale-110 active:scale-95 border border-slate-200 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Right navigation arrow */}
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#0A1F44] shadow-md transition-all hover:bg-[#0A1F44] hover:text-white hover:scale-110 active:scale-95 border border-slate-200 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            {/* Left gradient */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 sm:w-24"
              style={{
                background:
                  "linear-gradient(to right, var(--gu-bg), transparent)",
              }}
            />

            {/* Right gradient */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 sm:w-24"
              style={{
                background:
                  "linear-gradient(to left, var(--gu-bg), transparent)",
              }}
            />

            {/* Horizontally Scrollable & Draggable Marquee Container */}
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
                className={`flex w-max items-center py-1 gu-marquee-track ${
                  isHovered || isDragging ? "paused" : ""
                }`}
                style={{
                  animation: "guRecruiterMarquee 42s linear infinite",
                }}
              >
                {marqueeItems.map((recruiter, index) => (
                  <div
                    key={`${recruiter.id}-${index}`}
                    className="group/card mx-2.5 flex h-16 w-36 shrink-0 items-center justify-center rounded-xl border bg-white px-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:mx-3 sm:h-20 sm:w-44 pointer-events-auto"
                    style={{
                      borderColor: "rgba(6, 53, 95, 0.08)",
                    }}
                  >
                    <Image
                      src={recruiter.logo}
                      alt={`${recruiter.name} logo`}
                      width={140}
                      height={60}
                      sizes="(max-width: 640px) 140px, 176px"
                      className="max-h-9 sm:max-h-11 w-auto max-w-full object-contain transition-all duration-300 pointer-events-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bottom information */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:flex-row"
          >
            <span
              aria-hidden="true"
              className="h-px w-10"
              style={{
                backgroundColor: "rgba(6, 53, 95, 0.15)",
              }}
            />

            <p
              className="text-xs font-semibold uppercase tracking-[0.18em]"
              style={{
                color: "var(--gu-text-muted)",
              }}
            >
              Building industry-ready careers
            </p>

            <span
              aria-hidden="true"
              className="h-px w-10"
              style={{
                backgroundColor: "rgba(6, 53, 95, 0.15)",
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes guRecruiterMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-33.333%);
          }
        }

        .gu-marquee-track.paused {
          animation-play-state: paused !important;
        }

        .gu-marquee-track:hover {
          animation-play-state: paused !important;
        }

        @media (prefers-reduced-motion: reduce) {
          .gu-marquee-track {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}