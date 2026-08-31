"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Sparkles } from "lucide-react";
import VideoModal from "@/components/campus-life/VideoModal";

export default function PhdVirtualCampusTour() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="virtual-tour" className="w-full bg-white py-14 sm:py-18">
      <div className="gu-container">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#E8871A]" />
            <span className="text-[12px] font-extrabold uppercase tracking-[3px] text-[#E8871A]">
              Explore Campus
            </span>
            <span className="h-[2px] w-8 bg-[#E8871A]" />
          </div>
          <h2 className="font-serif text-[32px] sm:text-[40px] font-black text-[#0A1F44]">
            Experience Geeta University Campus
          </h2>
          <p className="mt-2 text-[16px] text-[#64748B]">
            Take a virtual walkthrough of our state-of-the-art research laboratories, computing centers, and academic infrastructure.
          </p>
        </div>

        {/* Video Trigger Card */}
        <div
          onClick={() => setIsModalOpen(true)}
          className="group relative h-[300px] sm:h-[420px] md:h-[500px] w-full overflow-hidden rounded-[24px] border border-[#E2E8F0] shadow-xl cursor-pointer"
        >
          <Image
            src="https://geetauniversity.edu.in/uploads/all/1639/phdpage.webp"
            alt="Geeta University Campus Tour"
            fill
            sizes="100vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/30" />

          {/* Play Button & Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <div className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-[#E8871A] text-white shadow-2xl transition-transform duration-300 group-hover:scale-110">
              <Play className="h-8 w-8 sm:h-10 sm:w-10 fill-current translate-x-0.5" />
            </div>
            <span className="mt-5 rounded-full bg-black/60 px-5 py-2 text-sm font-bold text-white backdrop-blur-md">
              Click to Watch 360° Campus Tour
            </span>
          </div>
        </div>
      </div>

      {/* Video Modal Component */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoId="arnFS6rf454"
        title="Geeta University Virtual Campus Tour"
      />
    </section>
  );
}
