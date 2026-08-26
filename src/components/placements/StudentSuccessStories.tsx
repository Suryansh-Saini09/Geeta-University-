"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { placementStories } from "@/data/placements";

export default function StudentSuccessStories() {
  const [visibleCards, setVisibleCards] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const totalSlides = Math.max(1, placementStories.length - visibleCards + 1);

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
    <section id="stories" className="scroll-mt-[190px] bg-[#F7F9FC] py-20 lg:py-24 border-t border-[#E2E8F0]">
      <div className="gu-container">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-4xl text-center md:mb-16">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#E8871A]" />
            <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#E8871A]">
              Alumni Milestones
            </span>
            <span className="h-px w-9 bg-[#E8871A]" />
          </div>

          <h2 className="font-serif text-[38px] font-black leading-[1.08] tracking-[-1.5px] text-[#0A1F44] sm:text-[46px] md:text-[52px]">
            From Campus to <span className="text-[#E8871A]">Corporate Success</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-[16px] leading-[1.8] text-[#64748B] md:text-[17px]">
            Real stories of ambition, dedicated mentorship, and outstanding placements at India&apos;s and the world&apos;s leading organizations.
          </p>
        </div>

        {/* Sliding Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrow Left */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous stories"
            className="absolute -left-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#DCE2EB] bg-white text-[#0A1F44] shadow-[0_8px_25px_rgba(10,31,68,0.10)] transition-all duration-300 hover:border-[#0A1F44] hover:bg-[#0A1F44] hover:text-[#E8871A] md:flex"
          >
            <ChevronLeft size={21} strokeWidth={1.8} />
          </button>

          {/* Navigation Arrow Right */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next stories"
            className="absolute -right-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#DCE2EB] bg-white text-[#0A1F44] shadow-[0_8px_25px_rgba(10,31,68,0.10)] transition-all duration-300 hover:border-[#0A1F44] hover:bg-[#0A1F44] hover:text-[#E8871A] md:flex"
          >
            <ChevronRight size={21} strokeWidth={1.8} />
          </button>

          {/* Cards Track with Smooth Transform */}
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
              {placementStories.map((story) => (
                <div
                  key={story.id}
                  className="w-full shrink-0 px-3 sm:w-1/2 lg:w-1/3"
                >
                  <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E8871A]/40 hover:shadow-xl">
                    {/* Top Accent Strip */}
                    <div className="absolute left-0 top-0 h-1.5 w-full bg-[#0A1F44] group-hover:bg-[#E8871A] transition-colors" />

                    <div>
                      <div className="flex items-center gap-4">
                        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[16px] border-2 border-[#E8871A] bg-slate-100 shadow-sm">
                          <Image
                            src={story.image}
                            alt={story.name}
                            fill
                            sizes="80px"
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        <div className="min-w-0">
                          <h3 className="font-serif text-[20px] font-bold text-[#0A1F44]">
                            {story.name}
                          </h3>
                          <div className="mt-1.5 inline-flex items-center rounded-full bg-[#FFF3E2] px-3 py-0.5 text-[11px] font-bold uppercase tracking-wide text-[#D97706]">
                            Package · {story.package}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-col">
                        <span className="font-serif text-[48px] font-bold leading-none text-[#E8871A]/20">
                          “
                        </span>
                        <p className="mt-[-8px] text-[14.5px] leading-[1.7] text-[#536B83]">
                          {story.quote}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 border-t border-slate-100 pt-4 flex items-center justify-between text-[12px] text-[#64748B]">
                      <span className="font-semibold text-[#07589F]">Geeta University</span>
                      <span className="text-[#E8871A] font-bold">Verified Placement ★</span>
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
