"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { hrVoices } from "@/data/placements";

export default function RecruiterVoicesSection() {
  const [visibleCards, setVisibleCards] = useState(2);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else {
        setVisibleCards(2);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const totalSlides = Math.max(1, hrVoices.length - visibleCards + 1);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  // Auto-play loop (2.5 seconds, moves card-by-card, pauses when hovered)
  useEffect(() => {
    if (isHovered || totalSlides <= 1) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 2500);
    return () => clearInterval(interval);
  }, [isHovered, totalSlides, nextSlide]);

  // Touch Swipe Handling
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section id="hr-voices" className="scroll-mt-[190px] bg-[#F7F9FC] py-20 lg:py-24 border-t border-[#E2E8F0]">
      <div className="gu-container">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-4xl text-center md:mb-16">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#E8871A]" />
            <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#E8871A]">
              Corporate Endorsements
            </span>
            <span className="h-px w-9 bg-[#E8871A]" />
          </div>

          <h2 className="font-serif text-[38px] font-black leading-[1.08] tracking-[-1.5px] text-[#0A1F44] sm:text-[46px] md:text-[52px]">
            HR Voices That <span className="text-[#E8871A]">Validate Our Vision</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-[16px] leading-[1.8] text-[#64748B] md:text-[17px]">
            Hear from industry leaders and recruitment heads who hire from Geeta University campus year after year.
          </p>
        </div>

        {/* Carousel Viewport with Smooth Transform */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrow Left */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="absolute -left-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#DCE2EB] bg-white text-[#0A1F44] shadow-[0_8px_25px_rgba(10,31,68,0.10)] transition-all duration-300 hover:border-[#0A1F44] hover:bg-[#0A1F44] hover:text-[#E8871A] md:flex"
          >
            <ChevronLeft size={21} strokeWidth={1.8} />
          </button>

          {/* Navigation Arrow Right */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="absolute -right-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#DCE2EB] bg-white text-[#0A1F44] shadow-[0_8px_25px_rgba(10,31,68,0.10)] transition-all duration-300 hover:border-[#0A1F44] hover:bg-[#0A1F44] hover:text-[#E8871A] md:flex"
          >
            <ChevronRight size={21} strokeWidth={1.8} />
          </button>

          {/* Cards Track */}
          <div
            className="overflow-hidden touch-pan-y select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              }}
            >
              {hrVoices.map((leader) => (
                <div
                  key={leader.id}
                  className="w-full shrink-0 px-3 md:w-1/2"
                >
                  <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E8871A]/40 hover:shadow-xl sm:p-8">
                    {/* Top Accent Strip */}
                    <div className="absolute left-0 top-0 h-1.5 w-full bg-[#0A1F44] group-hover:bg-[#E8871A] transition-colors rounded-t-[24px]" />

                    {/* Quote Body */}
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-[48px] font-bold leading-none text-[#E8871A]/20">
                          “
                        </span>
                        <span className="rounded-full bg-[#E6F0FA] px-3 py-0.5 text-[11px] font-bold uppercase tracking-wide text-[#07589F]">
                          Corporate Recruiter
                        </span>
                      </div>

                      <p className="mt-[-8px] text-[15px] leading-[1.8] text-[#536B83] italic">
                        &ldquo;{leader.quote}&rdquo;
                      </p>
                    </div>

                    {/* Leader Profile Footer */}
                    <div className="mt-7 flex items-center gap-4 border-t border-slate-100 pt-5">
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-[14px] border border-slate-200 bg-slate-100 shadow-sm">
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          fill
                          sizes="56px"
                          className="object-cover object-center"
                        />
                      </div>

                      <div className="min-w-0">
                        <h4 className="font-serif text-[18px] font-bold text-[#0A1F44]">
                          {leader.name}
                        </h4>
                        <p className="text-[13px] font-semibold text-[#E8871A]">
                          {leader.designation}
                        </p>
                        <p className="truncate text-[13px] font-medium text-[#64748B]">
                          {leader.company}
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Pagination Bullets */}
          <div className="mt-10 flex items-center justify-center gap-2">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === idx
                    ? "w-8 bg-[#E8871A]"
                    : "w-2.5 bg-[#CBD5E1] hover:bg-[#94A3B8]"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
