"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { campusEvents } from "@/data/campusLife";

interface CampusEventsSectionProps {
  onOpenEventsVideo: () => void;
}

export default function CampusEventsSection({ onOpenEventsVideo }: CampusEventsSectionProps) {
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

  const totalSlides = Math.max(1, campusEvents.length - visibleCards + 1);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  // Auto-play loop (2.5 seconds, pauses when hovered)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 2500);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

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
    <section id="events" className="scroll-mt-[190px] bg-[#F7F9FC] py-20 lg:py-24 border-t border-[#E2E8F0]">
      <div className="gu-container">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-4xl text-center md:mb-16">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#E8871A]" />
            <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#E8871A]">
              Events &amp; Cultural Life
            </span>
            <span className="h-px w-9 bg-[#E8871A]" />
          </div>

          <h2 className="font-serif text-[42px] font-black leading-[1.05] tracking-[-1.5px] text-[#0A1F44] sm:text-[50px] md:text-[58px]">
            Campus Events &amp; <span className="text-[#E8871A]">Celebrations.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-[16px] leading-[1.8] text-[#64748B] md:text-[17px]">
            From annual sports meets and literature festivals to flagship cultural extravaganzas,
            students enjoy a dynamic campus life full of opportunities to lead, compete, and celebrate.
          </p>
        </div>

        {/* Video Feature Spotlight Banner */}
        <div className="mx-auto mb-14 max-w-4xl">
          <div
            className="group relative aspect-[16/9] w-full cursor-pointer overflow-hidden rounded-[24px] border border-[#DCE2EB] bg-[#0A1F44] shadow-[0_20px_50px_rgba(10,31,68,0.12)]"
            onClick={onOpenEventsVideo}
          >
            <Image
              src="/campus-life/event-video-thumb.jpg"
              alt="Geeta University Events Video Spotlight"
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/85 via-[#0A1F44]/30 to-transparent" />

            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <button
                type="button"
                onClick={onOpenEventsVideo}
                className="flex h-20 w-20 items-center justify-center rounded-full bg-[#E8871A] text-white shadow-2xl transition-transform duration-300 hover:scale-110 hover:bg-[#F5A623]"
                aria-label="Play Events Video"
              >
                <Play size={28} className="translate-x-0.5 fill-white text-white" />
              </button>
              <h3 className="mt-5 font-serif text-[24px] font-bold text-white sm:text-[30px]">
                Watch Event Glimpses &amp; Highlights
              </h3>
              <p className="mt-1.5 text-[14px] text-white/80 sm:text-[15px]">
                Relive the most memorable moments, guest lectures, and cultural performances
              </p>
            </div>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrow Left */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous event"
            className="absolute -left-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#DCE2EB] bg-white text-[#0A1F44] shadow-[0_8px_25px_rgba(10,31,68,0.10)] transition-all duration-300 hover:border-[#0A1F44] hover:bg-[#0A1F44] hover:text-[#E8871A] md:flex"
          >
            <ChevronLeft size={21} strokeWidth={1.8} />
          </button>

          {/* Navigation Arrow Right */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next event"
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
              {campusEvents.map((event) => (
                <div
                  key={event.id}
                  className="w-full shrink-0 px-3 sm:w-1/2 lg:w-1/3"
                >
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-[#DCE2EB] bg-white shadow-[0_8px_30px_rgba(10,31,68,0.045)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E8871A]/40 hover:shadow-[0_18px_40px_rgba(10,31,68,0.09)]">
                    {/* Top Accent Strip */}
                    <div className="h-1 w-full bg-[#0A1F44] transition-colors duration-300 group-hover:bg-[#E8871A]" />

                    {/* Event Image */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A1F44]/5">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>

                    {/* Event Body */}
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-serif text-[22px] font-black text-[#0A1F44] transition-colors duration-300 group-hover:text-[#E8871A]">
                        {event.title}
                      </h3>
                      <p className="mt-2 text-[14.5px] font-medium leading-[1.6] text-[#64748B]">
                        {event.tagline}
                      </p>
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
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
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
