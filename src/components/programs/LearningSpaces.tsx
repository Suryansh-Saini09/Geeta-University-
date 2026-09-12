"use client";

import React from "react";
import Image from "next/image";
import type { LearningSpaceItem, GalleryShowcaseItem } from "@/data/programs/types";

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

  if (allImages.length === 0 && spaces.length === 0) {
    return null;
  }

  // Duplicate items 4 times to ensure seamless infinite looping without any empty spaces across wide viewports
  const trackItems = [...allImages, ...allImages, ...allImages, ...allImages];

  return (
    <section
      id="Infrastructure"
      className="w-full bg-[#F7F9FC] py-16 md:py-24 border-t border-slate-200/60 overflow-hidden"
    >
      {/* Header with Title & Subtitle */}
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 mb-10 md:mb-12">
        <span
          style={{
            color: "#E8871A",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: 2,
            textTransform: "uppercase",
            display: "inline-block",
            marginBottom: 8,
          }}
        >
          {eyebrow}
        </span>
        <h2
          style={{
            fontSize: "clamp(30px, 3.8vw, 44px)",
            fontWeight: 900,
            color: "#0A1F44",
            margin: "0 0 12px",
            lineHeight: 1.15,
            letterSpacing: "-1px",
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            style={{
              fontSize: 16.5,
              color: "#4A5568",
              marginTop: 10,
              maxWidth: 880,
              lineHeight: 1.7,
              fontWeight: 450,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* 1. Infrastructure Highlights Grid (if text spaces exist) */}
      {/* {spaces.length > 0 && (
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spaces.map((space, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-[0_4px_16px_rgba(10,31,68,0.04)] hover:shadow-[0_10px_25px_rgba(10,31,68,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FFF3E8] text-[#E8871A] flex items-center justify-center font-bold text-sm mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-[17px] font-bold text-[#0A1F44] mb-2 leading-snug">
                  {space.title}
                </h3>
                {space.desc && (
                  <p className="text-[14px] text-[#4A5568] leading-relaxed m-0 font-normal">
                    {space.desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )} */}

      {/* 2. Infinite Auto-Scrolling Photo Stream */}
      {allImages.length > 0 && (
        <div className="relative w-full overflow-hidden flex select-none group my-4">
          {/* Left & Right Edge Gradient Fades for Smooth Visual Transitions */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 md:w-32 bg-gradient-to-r from-[#F7F9FC] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 md:w-32 bg-gradient-to-l from-[#F7F9FC] to-transparent" />

          {/* Scrolling Flex Track */}
          <div className="flex gap-6 animate-marquee-track group-hover:[animation-play-state:paused] shrink-0">
            {trackItems.map((space, idx) => (
              <div
                key={idx}
                className="relative w-[240px] sm:w-[280px] md:w-[330px] aspect-[16/11] rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-sm shrink-0 group/card hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={space.src}
                  alt={space.title || "Learning Space"}
                  fill
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 330px"
                  className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                />
                {/* {space.title && (
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#0A1F44]/90 via-[#0A1F44]/50 to-transparent text-white opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                    <span className="text-xs font-bold leading-tight">{space.title}</span>
                  </div>
                )} */}
              </div>
            ))}
          </div>
        </div>
      )}

      {closingNote && (
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 mt-10 text-center text-sm text-[#64748B] font-medium">
          {closingNote}
        </div>
      )}

      <style jsx>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-track {
          animation: marqueeScroll 45s linear infinite;
          display: flex;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
