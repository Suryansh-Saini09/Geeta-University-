"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import VideoModal from "@/components/campus-life/VideoModal";
import { cuetStarPerformers } from "@/data/cuetData";

export default function CuetStarPerformers() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="w-full bg-[#F8FAFC] py-14 sm:py-18 border-b border-[#E2E8F0] overflow-hidden">
      <div className="gu-container">
        <div className="mx-auto mb-6 max-w-3xl text-center">
          <h2 className="font-serif text-[32px] sm:text-[40px] font-black text-[#0A1F44]">
            Star Performances@GU
          </h2>
          <div
            onClick={() => setIsVideoModalOpen(true)}
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#FFF0E6] px-4 py-2 text-sm font-bold text-[#E8871A] hover:bg-[#FFE0CC] cursor-pointer transition-colors shadow-sm"
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E8871A] text-white">
              <Play className="h-3 w-3 fill-current translate-x-0.5" />
            </div>
            <span>Click Here To Watch Video</span>
          </div>
        </div>

        {/* Horizontal Marquee / Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-4">
          {cuetStarPerformers.map((star, idx) => (
            <div
              key={idx}
              className="group relative h-[260px] w-full overflow-hidden rounded-[16px] border border-[#CBD5E1] bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-[#E8871A] hover:shadow-md"
            >
              <Image
                src={star.image}
                alt={star.name}
                fill
                sizes="(max-width: 768px) 50vw, 200px"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3.5">
                <span className="text-[13px] font-bold text-white leading-tight">
                  {star.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId="arnFS6rf454"
        title="Celebrities & Star Performances at Geeta University"
      />
    </section>
  );
}
