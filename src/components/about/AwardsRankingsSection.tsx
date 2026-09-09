"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { awards } from "@/data/awards";
import ImpactRankings from "@/components/about/ImpactRankings";

// Tripled list for a 100% seamless infinite scroll loop
const infiniteAwards = [...awards, ...awards, ...awards];

export default function AwardsRankingsSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const animFrameId = useRef<number | null>(null);

  // Initialize scroll position to the middle set on mount
  useEffect(() => {
    if (scrollRef.current) {
      const singleSetWidth = scrollRef.current.scrollWidth / 3;
      scrollRef.current.scrollLeft = singleSetWidth;
    }
  }, []);

  // Universal scroll handler: seamless infinite loop wrap & active index tracking
  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const singleSetWidth = container.scrollWidth / 3;

    if (singleSetWidth <= 0) return;

    // Infinite loop seamless wrap for ALL scroll methods (trackpad, drag, buttons, auto-glide)
    if (container.scrollLeft >= singleSetWidth * 2) {
      container.scrollLeft -= singleSetWidth;
    } else if (container.scrollLeft <= 10) {
      container.scrollLeft += singleSetWidth;
    }

    // Active dot calculation based on relative scroll position
    const cardWidth = 430;
    const relativeScroll = container.scrollLeft % singleSetWidth;
    const normalizedIndex = Math.round(relativeScroll / cardWidth) % awards.length;
    setActiveIndex(normalizedIndex);
  }, []);

  // Continuous smooth auto-glide via requestAnimationFrame
  useEffect(() => {
    let lastTime = performance.now();

    const glide = (time: number) => {
      if (!scrollRef.current) return;

      const delta = time - lastTime;
      lastTime = time;

      // Only auto-glide when user is not hovering or dragging
      if (!isHovered && !isDragging) {
        const container = scrollRef.current;
        const speed = 0.045; // ~45px/sec
        container.scrollLeft += delta * speed;
      }

      animFrameId.current = requestAnimationFrame(glide);
    };

    animFrameId.current = requestAnimationFrame(glide);

    return () => {
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, [isHovered, isDragging]);

  // Mouse drag-to-scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftState(scrollRef.current.scrollLeft);
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
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftState - walk;
  };

  // Button navigation controls
  const scroll = (direction: "left" | "right", e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = 430;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = 430;
    const container = scrollRef.current;
    const singleSetWidth = container.scrollWidth / 3;

    const targetScroll = singleSetWidth + index * cardWidth;
    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  return (
    <section
      id="awards-ranking"
      className="scroll-mt-[190px] overflow-hidden bg-[#F7F8FA] pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-12"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* SECTION INTRO */}
        <div className="mx-auto mb-14 max-w-[900px] text-center">
          {/* Eyebrow */}
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-0.5 w-9 bg-[#E8871A]" />
            <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#E8871A]">
              Awards &amp; Rankings
            </span>
            <span className="h-0.5 w-9 bg-[#E8871A]" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-[42px] font-black leading-[1.04] tracking-[-1.5px] text-[#0A1F44] sm:text-[50px] md:text-[58px] lg:text-[64px]">
            Excellence.
            <br />
            <span className="text-[#E8871A]">Recognised &amp; Celebrated.</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-[760px] text-[16px] leading-[1.8] text-[#64748B] md:text-[17px]">
            Geeta University&apos;s journey of excellence is reflected through
            recognitions, awards and achievements earned across education,
            leadership and institutional growth.
          </p>
        </div>

        {/* CAROUSEL CONTAINER */}
        <div
          className="group relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Arrow */}
          {/* <button
            type="button"
            onClick={(e) => scroll("left", e)}
            aria-label="Previous award"
            className="absolute left-2 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#DCE2EB] bg-white text-[#0A1F44] shadow-lg transition-all duration-300 hover:border-[#0A1F44] hover:bg-[#0A1F44] hover:text-[#E8871A] hover:scale-110 active:scale-95 sm:h-12 sm:w-12 pointer-events-auto cursor-pointer"
          >
            <ChevronLeft size={21} strokeWidth={2} />
          </button> */}

          {/* Right Arrow */}
          {/* <button
            type="button"
            onClick={(e) => scroll("right", e)}
            aria-label="Next award"
            className="absolute right-2 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#DCE2EB] bg-white text-[#0A1F44] shadow-lg transition-all duration-300 hover:border-[#0A1F44] hover:bg-[#0A1F44] hover:text-[#E8871A] hover:scale-110 active:scale-95 sm:h-12 sm:w-12 pointer-events-auto cursor-pointer"
          >
            <ChevronRight size={21} strokeWidth={2} />
          </button> */}

          {/* Horizontally Scrollable & Draggable Track */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex w-full gap-5 overflow-x-auto pb-6 pt-3 cursor-grab active:cursor-grabbing select-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {infiniteAwards.map((award, index) => (
              <div
                key={`${award.id}-${index}`}
                className="w-[300px] sm:w-[350px] md:w-[390px] lg:w-[410px] shrink-0"
              >
                <article className="group/card flex h-full flex-col overflow-hidden rounded-[20px] border border-[#DCE2EB] bg-white shadow-[0_8px_35px_rgba(10,31,68,0.04)] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#E8871A]/40 hover:shadow-[0_20px_50px_rgba(10,31,68,0.12)]">
                  {/* Image */}
                  <div className="relative aspect-[1.65/1] w-full overflow-hidden bg-[#EEF1F5]">
                    <Image
                      src={award.image}
                      alt={award.title}
                      fill
                      sizes="(max-width: 639px) 300px, (max-width: 1023px) 350px, 410px"
                      className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-[1.04] pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col px-6 pb-8 pt-7 text-center md:px-7">
                    <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#E8871A]">
                      Institutional Recognition
                    </span>

                    <h3 className="mt-3 min-h-[54px] font-serif text-[17px] font-bold leading-[1.35] text-[#0A1F44]">
                      {award.title}
                    </h3>

                    <div className="my-5 flex items-center justify-center gap-2">
                      <span className="h-px w-16 bg-[#DCE2EB]" />
                      <span className="h-1 w-1 rounded-full bg-[#E8871A]" />
                      <span className="h-px w-16 bg-[#DCE2EB]" />
                    </div>

                    <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#94A3B8]">
                      Presented By
                    </p>

                    <p className="mt-2 font-serif text-[16px] font-bold text-[#0A1F44]">
                      {award.presentedBy}
                    </p>

                    <p className="mt-1 text-[13px] leading-[1.6] text-[#64748B]">
                      {award.designation}
                    </p>

                    <div className="mx-auto mt-6 h-0.5 w-0 bg-[#E8871A] transition-all duration-500 group-hover/card:w-20" />
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* PAGINATION DOTS */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {awards.map((award, index) => (
            <button
              key={award.id}
              type="button"
              aria-label={`Go to award ${index + 1}`}
              onClick={() => scrollToCard(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-9 bg-[#E8871A]"
                  : "w-1.5 bg-[#B8C0CD] hover:bg-[#0A1F44]"
              }`}
            />
          ))}
        </div>

        {/* IMPACT RANKINGS */}
        <ImpactRankings />
      </div>
    </section>
  );
}