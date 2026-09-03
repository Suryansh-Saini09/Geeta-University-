"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { homeFeedback } from "@/data/homeFeedback";

export default function HomeFeedbackSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Update active dot based on scroll position
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;
    const progress = scrollLeft / maxScroll;
    const index = Math.min(
      Math.round(progress * (homeFeedback.length - 1)),
      homeFeedback.length - 1
    );
    setActiveIndex(index);
  };

  // Drag-to-scroll handlers
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
    const cardWidth = 380;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = 380;
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  // Auto-scroll every 5 seconds when not hovered
  useEffect(() => {
    if (isHovered || isDragging) return;
    const interval = window.setInterval(() => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: 380, behavior: "smooth" });
      }
    }, 4500);

    return () => window.clearInterval(interval);
  }, [isHovered, isDragging]);

  return (
    <section className="relative overflow-hidden bg-[#F5F8FB] pt-8 md:pt-10 pb-16 md:pb-20">
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#F28C18]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#06355F]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[#F28C18]">
            Student Success Stories
          </p>

          <h2 className="font-serif text-4xl font-bold leading-tight text-[#06355F] sm:text-5xl">
            From Campus to{" "}
            <span className="text-[#F28C18]">Corporate Success</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#F28C18]" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#536B83] sm:text-lg">
            Discover how Geeta University&apos;s academic environment,
            industry exposure and holistic learning experience have helped
            students build successful careers.
          </p>
        </div>

        {/* Horizontally Scrollable & Draggable Cards Track */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex w-full gap-6 overflow-x-auto pb-4 pt-2 scroll-smooth cursor-grab active:cursor-grabbing select-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {homeFeedback.map((student, index) => (
            <article
              key={`${student.name}-${index}`}
              className={`group relative flex w-[300px] sm:w-[350px] md:w-[380px] shrink-0 flex-col overflow-hidden rounded-3xl border bg-white p-7 pb-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                index % 2 === 1
                  ? "border-[#F28C18]/40"
                  : "border-[#DCE5ED]"
              }`}
            >
              {/* Top Accent Bar */}
              <div
                className={`absolute left-0 top-0 h-1.5 w-full transition-all duration-300 ${
                  index % 2 === 1 ? "bg-[#F28C18]" : "bg-[#06355F]"
                }`}
              />

              {/* Student identity */}
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-4 border-[#F5F8FB] bg-[#EAF0F5]">
                  <Image
                    src={student.image}
                    alt={student.name}
                    fill
                    sizes="80px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="font-serif text-xl font-bold text-[#06355F]">
                    {student.name}
                  </h3>

                  <div className="mt-2 inline-flex items-center rounded-full bg-[#FFF3E2] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#D97706]">
                    Package · {student.package}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-7 flex flex-1 flex-col justify-between">
                <div>
                  <span
                    aria-hidden="true"
                    className="font-serif text-5xl font-bold leading-none text-[#F28C18]/25"
                  >
                    “
                  </span>

                  <p className="mt-[-6px] text-[15px] leading-7 text-[#536B83]">
                    {student.testimonial}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Controls */}
        <div className="mt-10 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Previous student stories"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#CBD8E3] bg-white text-[#06355F] shadow-sm transition-all duration-200 hover:border-[#F28C18] hover:bg-[#F28C18] hover:text-white active:scale-95"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex items-center gap-2">
            {homeFeedback.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to student story ${index + 1}`}
                onClick={() => scrollToCard(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-[#F28C18]"
                    : "w-2.5 bg-[#B9C7D4] hover:bg-[#06355F]"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Next student stories"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#CBD8E3] bg-white text-[#06355F] shadow-sm transition-all duration-200 hover:border-[#F28C18] hover:bg-[#F28C18] hover:text-white active:scale-95"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Bottom message */}
        <div className="mx-auto mt-12 flex max-w-2xl items-center justify-center gap-3 text-center">
          <span className="h-px flex-1 bg-[#DCE5ED]" />

          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7C8FA2]">
            Your journey could be next
          </span>

          <span className="h-px flex-1 bg-[#DCE5ED]" />
        </div>
      </div>
    </section>
  );
}