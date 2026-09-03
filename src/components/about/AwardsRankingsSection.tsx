"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { awards } from "@/data/awards";
import ImpactRankings from "@/components/about/ImpactRankings";

export default function AwardsRankingsSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Update active dot indicator on scroll
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;
    const progress = scrollLeft / maxScroll;
    const index = Math.min(
      Math.round(progress * (awards.length - 1)),
      awards.length - 1
    );
    setActiveIndex(index);
  };

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
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Button navigation controls
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = 420;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = 420;
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  // Auto-scroll when not hovered or dragged
  useEffect(() => {
    if (isHovered || isDragging) return;
    const interval = window.setInterval(() => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: 420, behavior: "smooth" });
      }
    }, 4500);

    return () => window.clearInterval(interval);
  }, [isHovered, isDragging]);

  return (
    <section
      id="awards-ranking"
      className="scroll-mt-20 overflow-hidden bg-[#F7F8FA] pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-12"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* SECTION INTRO */}
        <div className="mx-auto mb-16 max-w-[900px] text-center">
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
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Previous award"
            className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#DCE2EB] bg-white/95 text-[#0A1F44] shadow-md transition-all duration-300 hover:border-[#0A1F44] hover:bg-[#0A1F44] hover:text-[#E8871A] hover:scale-110 active:scale-95 sm:h-12 sm:w-12"
          >
            <ChevronLeft size={21} strokeWidth={2} />
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Next award"
            className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#DCE2EB] bg-white/95 text-[#0A1F44] shadow-md transition-all duration-300 hover:border-[#0A1F44] hover:bg-[#0A1F44] hover:text-[#E8871A] hover:scale-110 active:scale-95 sm:h-12 sm:w-12"
          >
            <ChevronRight size={21} strokeWidth={2} />
          </button>

          {/* Horizontally Scrollable & Draggable Track */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex w-full gap-5 overflow-x-auto pb-4 pt-2 scroll-smooth cursor-grab active:cursor-grabbing select-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {awards.map((award, index) => (
              <div
                key={`${award.id}-${index}`}
                className="w-[300px] sm:w-[350px] md:w-[390px] lg:w-[410px] shrink-0"
              >
                <article className="group/card flex h-full flex-col overflow-hidden rounded-[18px] border border-[#DCE2EB] bg-white shadow-[0_8px_35px_rgba(10,31,68,0.045)] transition-all duration-500 hover:-translate-y-1 hover:border-[#E8871A]/40 hover:shadow-[0_18px_45px_rgba(10,31,68,0.10)]">
                  {/* Image */}
                  <div className="relative aspect-[1.65/1] w-full overflow-hidden bg-[#EEF1F5]">
                    <Image
                      src={award.image}
                      alt={award.title}
                      fill
                      sizes="(max-width: 639px) 300px, (max-width: 1023px) 350px, 410px"
                      className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-[1.035] pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100" />
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

                    <div className="mx-auto mt-6 h-0.5 w-0 bg-[#E8871A] transition-all duration-500 group-hover/card:w-16" />
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