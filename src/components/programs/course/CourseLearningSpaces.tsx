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
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 mb-8 md:mb-10">
        <span
          style={{
            color: "#E8871A",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: 2,
            textTransform: "uppercase",
            display: "inline-block",
            marginBottom: 6,
          }}
        >
          {learningSpaces.eyebrow || "Infrastructure & Laboratories"}
        </span>
        <h2
          style={{
            fontSize: "clamp(30px, 3.8vw, 46px)",
            fontWeight: 900,
            color: "#0A1F44",
            margin: "0",
            lineHeight: 1.15,
            letterSpacing: "-1.2px",
          }}
        >
          {learningSpaces.title}
        </h2>
        {learningSpaces.description && (
          <p
            style={{
              fontSize: 16,
              color: "#4A5568",
              marginTop: 10,
              maxWidth: 800,
              lineHeight: 1.7,
              fontWeight: 450,
            }}
          >
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
        <div className="flex gap-5 animate-marquee group-hover:[animation-play-state:paused] shrink-0">
          {spaceItems.map((space, idx) => (
            <div
              key={idx}
              className="relative w-[210px] sm:w-[250px] md:w-[295px] aspect-[16/11] rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100 shadow-sm shrink-0 group/card hover:shadow-lg transition-all duration-300"
            >
              <Image
                src={space.image}
                alt={space.title || "Learning Space"}
                fill
                sizes="(max-width: 640px) 210px, (max-width: 1024px) 250px, 295px"
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
