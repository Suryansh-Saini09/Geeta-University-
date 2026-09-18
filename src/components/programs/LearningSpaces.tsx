"use client";

import React from "react";
import Image from "next/image";
import type { LearningSpaceItem, GalleryShowcaseItem } from "@/data/programs/types";
import { useFiniteCarousel } from "@/hooks/useFiniteCarousel";

interface LearningSpacesProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  spaces?: LearningSpaceItem[];
  gallery?: GalleryShowcaseItem[];
  closingNote?: string;
}

export default function LearningSpaces({
  eyebrow = "Infrastructure & Laboratories",
  title = "World-Class Business & Management Infrastructure",
  subtitle,
  spaces = [],
  gallery = [],
  closingNote,
}: LearningSpacesProps) {
  // Extract images from either spaces (with image prop) or gallery
  const spaceImages = spaces
    .filter((s) => Boolean(s.image))
    .map((s) => ({
      src: s.image!,
      title: s.title || "Learning Space",
      caption: s.desc,
    }));

  const galleryImages = gallery.map((g) => ({
    src: g.src,
    title: g.title || "Learning Space",
    caption: g.caption,
  }));

  const allImages = spaceImages.length > 0 ? spaceImages : galleryImages;

  const {
    containerRef,
    currentIndex,
    maxIndex,
    next,
    prev,
    goTo,
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
    totalItems: allImages.length,
    autoplayInterval: 3000,
    enableAutoplay: true,
  });

  if (allImages.length === 0 && spaces.length === 0) {
    return null;
  }

  return (
    <section
      id="Infrastructure"
      className="w-full bg-[#F7F9FC] py-10 md:py-14 border-t border-slate-200/60 overflow-hidden relative"
    >
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#E8871A]/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#0A1F44]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold leading-tight text-[#0A1F44] sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#E8871A]" />
          {subtitle && (
            <p className="mt-4 text-[15px] leading-relaxed text-[#4A5568] sm:text-base">
              {subtitle}
            </p>
          )}
        </div>

        {/* Carousel Track */}
        {allImages.length > 0 && (
          <div className="relative">
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
              className="flex w-full gap-6 overflow-x-auto pb-4 pt-2 scroll-smooth cursor-grab active:cursor-grabbing select-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {allImages.map((space, idx) => (
                <div
                  key={idx}
                  className="group relative aspect-[16/11] w-[270px] sm:w-[320px] md:w-[370px] shrink-0 overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <Image
                    src={space.src}
                    alt={space.title || "Learning Space"}
                    fill
                    sizes="(max-width: 640px) 270px, (max-width: 1024px) 320px, 370px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                  />
                  {space.title && (
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#0A1F44]/90 via-[#0A1F44]/40 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                      <span className="text-sm font-bold leading-tight">{space.title}</span>
                      {space.caption && (
                        <span className="text-xs text-white/80 mt-1 line-clamp-1">{space.caption}</span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {closingNote && (
          <div className="mx-auto mt-10 max-w-3xl text-center text-sm font-medium text-[#64748B]">
            {closingNote}
          </div>
        )}
      </div>
    </section>
  );
}
