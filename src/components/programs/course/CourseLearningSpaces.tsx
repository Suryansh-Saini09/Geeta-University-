"use client";

import React from "react";
import Image from "next/image";
import type { CourseLearningSpacesData } from "@/data/programs/courses/types";

interface CourseLearningSpacesProps {
  learningSpaces: CourseLearningSpacesData;
}

export default function CourseLearningSpaces({
  learningSpaces,
}: CourseLearningSpacesProps) {
  if (!learningSpaces || !learningSpaces.spaces || learningSpaces.spaces.length === 0) {
    return null;
  }

  // Duplicate items to create a seamless infinite loop
  const spaceItems = [...learningSpaces.spaces, ...learningSpaces.spaces];

  return (
    <section className="w-full bg-[#F7F9FC] py-14 md:py-20 border-t border-slate-200/60 overflow-hidden">
      {/* Header with Title & Subtitle */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 mb-10">
        <span className="text-xs uppercase tracking-widest text-amber-600 font-semibold">
          Infrastructure &amp; Farmlands
        </span>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0A1F44] mt-1">
          {learningSpaces.title}
        </h2>
        {learningSpaces.description && (
          <p className="text-slate-600 text-sm md:text-base mt-1 max-w-2xl">
            {learningSpaces.description}
          </p>
        )}
      </div>

      {/* Infinite Auto-Scrolling Track */}
      <div className="relative w-full overflow-hidden flex select-none group">
        {/* Left & Right Edge Gradient Fades for Smooth Visual Transitions */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-12 md:w-28 bg-gradient-to-r from-[#F7F9FC] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-12 md:w-28 bg-gradient-to-l from-[#F7F9FC] to-transparent" />

        {/* Scrolling Flex Container */}
        <div className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused] shrink-0">
          {spaceItems.map((space, idx) => (
            <div
              key={idx}
              className="relative w-[280px] sm:w-[340px] md:w-[400px] aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200/80 bg-slate-100 shadow-sm shrink-0 group/card hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={space.image}
                alt={space.title || "Learning Space"}
                fill
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 400px"
                className="object-cover group-hover/card:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: flex;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
