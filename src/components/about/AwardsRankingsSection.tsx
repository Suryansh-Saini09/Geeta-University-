"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { awards } from "@/data/awards";
import ImpactRankings from "@/components/about/ImpactRankings";

// Tripled list for a 100% seamless infinite scroll loop
const infiniteAwards = [...awards, ...awards, ...awards];
const CARD_WIDTH = 360; // 340px card + 20px gap

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
    const relativeScroll = container.scrollLeft % singleSetWidth;
    const normalizedIndex = Math.round(relativeScroll / CARD_WIDTH) % awards.length;
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
    const scrollAmount = direction === "left" ? -CARD_WIDTH : CARD_WIDTH;

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const singleSetWidth = container.scrollWidth / 3;

    const targetScroll = singleSetWidth + index * CARD_WIDTH;
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
        <div className="mx-auto mb-12 max-w-[900px] text-center">
          {/* Eyebrow */}
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-0.5 w-8 bg-[#E8871A]" />
            <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#E8871A]">
              Awards &amp; Rankings
            </span>
            <span className="h-0.5 w-8 bg-[#E8871A]" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-[38px] font-black leading-[1.06] tracking-[-1.5px] text-[#0A1F44] sm:text-[46px] md:text-[54px] lg:text-[60px]">
            Excellence.
            <br />
            <span className="text-[#E8871A]">Recognised &amp; Celebrated.</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-[1.8] text-[#64748B] md:text-[16px]">
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
            className="absolute -left-2 sm:left-1 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/90 backdrop-blur-md text-[#0A1F44] shadow-md transition-all duration-300 hover:border-[#E8871A] hover:bg-[#0A1F44] hover:text-[#E8871A] hover:scale-110 active:scale-95 pointer-events-auto cursor-pointer"
          >
            <ChevronLeft size={18} strokeWidth={2.5} />
          </button> */}

          {/* Right Arrow */}
          {/* <button
            type="button"
            onClick={(e) => scroll("right", e)}
            aria-label="Next award"
            className="absolute -right-2 sm:right-1 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/90 backdrop-blur-md text-[#0A1F44] shadow-md transition-all duration-300 hover:border-[#E8871A] hover:bg-[#0A1F44] hover:text-[#E8871A] hover:scale-110 active:scale-95 pointer-events-auto cursor-pointer"
          >
            <ChevronRight size={18} strokeWidth={2.5} />
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
            className="flex w-full gap-5 overflow-x-auto pb-6 pt-2 cursor-grab active:cursor-grabbing select-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {infiniteAwards.map((award, index) => (
              <div
                key={`${award.id}-${index}`}
                className="w-[280px] sm:w-[310px] md:w-[340px] shrink-0"
              >
                <article className="group/card flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-400 ease-out hover:-translate-y-1.5 hover:border-[#E8871A]/50 hover:shadow-xl hover:shadow-[#0A1F44]/10">
                  {/* Image Frame Container */}
                  <div className="relative aspect-[1.45/1] w-full overflow-hidden bg-slate-900/5 p-2.5">
                    <div className="relative h-full w-full overflow-hidden rounded-xl bg-slate-100">
                      <Image
                        src={award.image}
                        alt={award.title}
                        fill
                        sizes="(max-width: 639px) 280px, (max-width: 767px) 310px, 340px"
                        className="object-cover transition-transform duration-500 ease-out group-hover/card:scale-[1.05] pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col px-5 pb-6 pt-5 text-center">
                    <h3 className="line-clamp-2 min-h-[42px] font-serif text-[15px] font-bold leading-snug text-[#0A1F44] sm:text-[16px]">
                      {award.title}
                    </h3>

                    <div className="my-4 flex items-center justify-center gap-2 opacity-50">
                      <span className="h-px w-10 bg-slate-300" />
                      <span className="h-1 w-1 rounded-full bg-[#E8871A]" />
                      <span className="h-px w-10 bg-slate-300" />
                    </div>

                    {award.presenters && award.presenters.length > 0 ? (
                      <div className="mt-auto min-h-[132px] rounded-xl bg-slate-50/90 p-3.5 border border-slate-100 flex flex-col justify-center">
                        <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                          Presented By
                        </p>
                        <div className="flex flex-col gap-2">
                          {award.presenters.map((presenter, pIdx) => (
                            <div
                              key={pIdx}
                              className={
                                pIdx > 0
                                  ? "pt-2 border-t border-slate-200/60 flex flex-col"
                                  : "flex flex-col"
                              }
                            >
                              <p className="font-serif text-[13.5px] font-bold text-[#0A1F44] leading-tight">
                                {presenter.name}
                              </p>
                              <p className="mt-0.5 text-[11px] leading-snug text-slate-500 font-medium">
                                {presenter.designation}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : award.presentedBy ? (
                      <div className="mt-auto min-h-[132px] rounded-xl bg-slate-50/90 p-3.5 border border-slate-100 flex flex-col justify-center">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                          Presented By
                        </p>
                        <p className="mt-1 font-serif text-[14px] font-bold text-[#0A1F44] leading-tight">
                          {award.presentedBy}
                        </p>
                        {award.designation && (
                          <p className="mt-1 text-[11px] leading-relaxed text-slate-500 font-medium">
                            {award.designation}
                          </p>
                        )}
                      </div>
                    ) : null}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* PAGINATION DOTS */}
        <div className="mt-7 flex items-center justify-center gap-2">
          {awards.map((award, index) => (
            <button
              key={award.id}
              type="button"
              aria-label={`Go to award ${index + 1}`}
              onClick={() => scrollToCard(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-[#E8871A]"
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