"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Phone, HelpCircle } from "lucide-react";
import VideoModal from "@/components/campus-life/VideoModal";

export default function GutsVideoBanner() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="w-full bg-[#F8FAFC] py-14 sm:py-18 border-b border-[#E2E8F0]">
      <div className="gu-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Info Card */}
          <div className="lg:col-span-6 space-y-4">
            <div className="mb-2 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#E8871A]" />
              <span className="text-[12px] font-extrabold uppercase tracking-[3px] text-[#E8871A]">
                Video Walkthrough
              </span>
            </div>
            <h2 className="font-serif text-[28px] sm:text-[36px] font-black text-[#0A1F44] leading-tight">
              Watch the GUTS 2026 Walkthrough
            </h2>
            <p className="text-[16px] leading-relaxed text-[#475569]">
              Learn how to prepare, register, and appear for the online AI-proctored Geeta University Test of Scholarship. Get step-by-step guidance on maximizing your score for up to 100% tuition waiver.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3 rounded-[14px] bg-white border border-[#E2E8F0] px-4 py-3 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0E385D] text-white shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[11px] text-[#64748B] font-bold uppercase tracking-wider">Admission Support</div>
                  <a href="tel:7082200908" className="text-[15px] font-bold text-[#0A1F44] hover:text-[#E8871A]">
                    +91 70822 00908
                  </a>
                </div>
              </div>

              <a
                href="#enquire"
                className="rounded-[14px] bg-[#E8871A] px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-[#D47309] hover:shadow-lg"
              >
                Enquire Now
              </a>
            </div>
          </div>

          {/* Right: Video Trigger */}
          <div className="lg:col-span-6">
            <div
              onClick={() => setIsVideoModalOpen(true)}
              className="group relative h-[260px] sm:h-[340px] md:h-[380px] w-full overflow-hidden rounded-[24px] border border-[#E2E8F0] shadow-xl cursor-pointer bg-[#0A1F44]"
            >
              <Image
                src="https://geetauniversity.edu.in/uploads/all/1839/guts_final.jpg"
                alt="Watch GUTS Video"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/30" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#E8871A] text-white shadow-2xl transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-8 w-8 fill-current translate-x-0.5" />
                </div>
                <span className="mt-4 rounded-full bg-black/70 px-5 py-2 text-xs sm:text-sm font-bold text-white backdrop-blur-md">
                  Click to Watch GUTS Guide Video
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId="szoudqHWtkc"
        title="GUTS - Geeta University Test of Scholarship"
      />
    </section>
  );
}
