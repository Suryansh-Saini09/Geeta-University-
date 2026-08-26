"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { placementDayCollage } from "@/data/placements";

export default function PlacementDayGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof placementDayCollage)[0] | null>(null);

  return (
    <section id="gallery" className="scroll-mt-[190px] bg-white py-20 lg:py-24 border-t border-[#E2E8F0]">
      <div className="gu-container">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-4xl text-center md:mb-16">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#E8871A]" />
            <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#E8871A]">
              Campus Celebrations
            </span>
            <span className="h-px w-9 bg-[#E8871A]" />
          </div>

          <h2 className="font-serif text-[38px] font-black leading-[1.08] tracking-[-1.5px] text-[#0A1F44] sm:text-[46px] md:text-[52px]">
            Placement Day <span className="text-[#E8871A]">2025–26</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-[16px] leading-[1.8] text-[#64748B] md:text-[17px]">
            Placement Day at Geeta University marks the culmination of dedication, skill development, and industry readiness. Students step into the professional world with confidence, supported by strong industry connections and career guidance.
          </p>
        </div>

        {/* Modern Responsive Bento Gallery Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12">
          {/* Main Large Feature Card */}
          <div
            onClick={() => setSelectedPhoto(placementDayCollage[0])}
            className="group relative cursor-pointer overflow-hidden rounded-[24px] border border-[#E2E8F0] shadow-sm transition-all duration-300 hover:shadow-xl sm:col-span-2 lg:col-span-8 lg:row-span-2 min-h-[320px] lg:min-h-[440px]"
          >
            <Image
              src={placementDayCollage[0].src}
              alt={placementDayCollage[0].title}
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/90 via-[#0A1F44]/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
              <span className="inline-flex rounded-full bg-[#E8871A] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                {placementDayCollage[0].tag}
              </span>
              <h3 className="mt-2 font-serif text-[24px] font-bold sm:text-[30px] text-white">
                {placementDayCollage[0].title}
              </h3>
              <p className="mt-1 text-[13px] text-slate-200 sm:text-[14px]">
                {placementDayCollage[0].caption}
              </p>
            </div>
          </div>

          {/* Right Top Card */}
          <div
            onClick={() => setSelectedPhoto(placementDayCollage[1])}
            className="group relative cursor-pointer overflow-hidden rounded-[24px] border border-[#E2E8F0] shadow-sm transition-all duration-300 hover:shadow-xl lg:col-span-4 min-h-[220px]"
          >
            <Image
              src={placementDayCollage[1].src}
              alt={placementDayCollage[1].title}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/85 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <span className="text-[10px] font-bold text-[#E8871A] uppercase tracking-wider">
                {placementDayCollage[1].tag}
              </span>
              <h4 className="font-serif text-[16px] font-bold text-white">
                {placementDayCollage[1].title}
              </h4>
            </div>
          </div>

          {/* Right Bottom Card */}
          <div
            onClick={() => setSelectedPhoto(placementDayCollage[2])}
            className="group relative cursor-pointer overflow-hidden rounded-[24px] border border-[#E2E8F0] shadow-sm transition-all duration-300 hover:shadow-xl lg:col-span-4 min-h-[220px]"
          >
            <Image
              src={placementDayCollage[2].src}
              alt={placementDayCollage[2].title}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/85 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <span className="text-[10px] font-bold text-[#E8871A] uppercase tracking-wider">
                {placementDayCollage[2].tag}
              </span>
              <h4 className="font-serif text-[16px] font-bold text-white">
                {placementDayCollage[2].title}
              </h4>
            </div>
          </div>

          {/* Row of 4 Cards */}
          {placementDayCollage.slice(3, 7).map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedPhoto(item)}
              className="group relative cursor-pointer overflow-hidden rounded-[24px] border border-[#E2E8F0] shadow-sm transition-all duration-300 hover:shadow-xl sm:col-span-1 lg:col-span-3 min-h-[220px]"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/85 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <span className="text-[10px] font-bold text-[#E8871A] uppercase tracking-wider">
                  {item.tag}
                </span>
                <h4 className="font-serif text-[15px] font-bold text-white truncate">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-[1002] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
            onClick={() => setSelectedPhoto(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative max-w-4xl w-full overflow-hidden rounded-[24px] bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black transition-colors"
                aria-label="Close photo preview"
              >
                <X size={20} />
              </button>

              <div className="relative aspect-[16/10] w-full bg-black">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              <div className="p-6 bg-white">
                <span className="inline-flex rounded-full bg-[#FFF3E2] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#E8871A]">
                  {selectedPhoto.tag}
                </span>
                <h3 className="mt-2 font-serif text-[24px] font-bold text-[#0A1F44]">
                  {selectedPhoto.title}
                </h3>
                <p className="mt-1 text-[14px] text-[#64748B]">
                  {selectedPhoto.caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
