"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ProgramMentorsData, MentorMember } from "../types";
import SectionHeading from "../shared/SectionHeading";

interface ProgramMentorsProps {
  data: ProgramMentorsData | MentorMember[];
}

export default function ProgramMentors({ data }: ProgramMentorsProps) {
  const mentors: MentorMember[] = Array.isArray(data) ? data : data?.members || [];

  const eyebrow = (!Array.isArray(data) && data?.eyebrow) || "FACULTY OF EMINENCE";
  const title = (!Array.isArray(data) && data?.title) || "Learn from Leading Experts";
  const subtitle =
    (!Array.isArray(data) && data?.subtitle) ||
    "Our accomplished faculty members blend strong academic rigor with deep industry experience to guide your journey.";

  const [visibleCount, setVisibleCount] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(4);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [translationAmount, setTranslationAmount] = useState(0);

  const viewportRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  // Responsive visible card calculation
  useEffect(() => {
    const handleResize = () => {
      if (viewportRef.current) {
        const vwWidth = viewportRef.current.getBoundingClientRect().width;
        let count = 4;
        let gap = 30;

        if (window.innerWidth < 640) {
          count = 1;
          gap = 16;
        } else if (window.innerWidth < 1024) {
          count = 2;
          gap = 24;
        } else {
          count = 4;
          gap = 30;
        }

        setVisibleCount(count);
        const cardW = (vwWidth - gap * (count - 1)) / count;
        setTranslationAmount(cardW + gap);
      }
    };

    handleResize();
    const timer = setTimeout(handleResize, 100);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  const extendedMentors = useMemo(() => {
    if (mentors.length === 0) return [];
    const cloneCount = Math.max(visibleCount, 4);
    const before = mentors.slice(-cloneCount);
    const after = mentors.slice(0, cloneCount);
    return [...before, ...mentors, ...after];
  }, [mentors, visibleCount]);

  useEffect(() => {
    const cloneCount = Math.max(visibleCount, 4);
    setCurrentIndex(cloneCount);
  }, [visibleCount]);

  if (!mentors || mentors.length === 0) {
    return null;
  }

  const cloneCount = Math.max(visibleCount, 4);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);

    if (currentIndex >= mentors.length + cloneCount) {
      setCurrentIndex(cloneCount);
    } else if (currentIndex < cloneCount) {
      setCurrentIndex(mentors.length + currentIndex);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="mentors"
      className="w-full bg-[#FFFFFF] relative overflow-hidden font-sans py-20 md:py-24 lg:py-28"
    >
      <div className="w-full max-w-[1340px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
        />

        {/* Carousel Viewport */}
        <div className="relative mt-8">
          <div
            ref={viewportRef}
            className="overflow-hidden w-full py-4"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              onTransitionEnd={handleTransitionEnd}
              className={`flex ${
                isTransitioning
                  ? "transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  : ""
              }`}
              style={{
                transform: `translateX(-${currentIndex * translationAmount}px)`,
                gap: visibleCount === 1 ? "16px" : visibleCount === 2 ? "24px" : "30px",
              }}
            >
              {extendedMentors.map((mentor, index) => (
                <article
                  key={`${mentor.name}-${index}`}
                  className="group shrink-0 flex flex-col bg-white rounded-[22px] border border-[#E8EDF5] overflow-hidden shadow-[0_10px_30px_rgba(15,45,82,0.06)] hover:shadow-[0_20px_45px_rgba(15,45,82,0.12)] hover:-translate-y-1.5 transition-all duration-300"
                  style={{
                    width:
                      visibleCount === 1
                        ? "100%"
                        : visibleCount === 2
                        ? "calc(50% - 12px)"
                        : "calc(25% - 22.5px)",
                  }}
                >
                  {/* Portrait Image */}
                  <div className="relative w-full aspect-[4/4.8] bg-[#EEF2F6] overflow-hidden">
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-1 text-left">
                    <h4 className="font-serif text-[20px] sm:text-[21px] font-black text-[#0B2948] leading-tight group-hover:text-[#245FA8] transition-colors">
                      {mentor.name}
                    </h4>

                    <p className="text-[12px] font-extrabold uppercase tracking-wider text-[#D99A24] mt-1.5">
                      {mentor.designation}
                    </p>

                    <div className="h-px w-10 bg-[#E2E8F0] my-3.5" />

                    <p className="text-[14px] text-[#5E6B82] leading-[1.6] line-clamp-3">
                      {mentor.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous faculty"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DCE2EB] bg-white text-[#0A1F44] shadow-md transition-all duration-300 hover:border-[#0A1F44] hover:bg-[#0A1F44] hover:text-[#D99A24]"
            >
              <ChevronLeft size={20} strokeWidth={2} />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next faculty"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DCE2EB] bg-white text-[#0A1F44] shadow-md transition-all duration-300 hover:border-[#0A1F44] hover:bg-[#0A1F44] hover:text-[#D99A24]"
            >
              <ChevronRight size={20} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
