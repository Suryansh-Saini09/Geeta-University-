"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { INTERNATIONAL_TESTIMONIALS } from "@/data/internationalAdmissions";

export default function InternationalTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Max index: On mobile 1 item per view (max 5), on desktop 3 items per view (max 3)
  const maxIndex = isMobile
    ? INTERNATIONAL_TESTIMONIALS.length - 1
    : Math.max(0, INTERNATIONAL_TESTIMONIALS.length - 3);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="py-20 bg-[#0A1F44] text-white overflow-hidden relative">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#E8871A]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="gu-container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#E8871A]">
              Global Student Voices
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white font-serif mt-2">
              Stories from Across Nations
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="h-12 w-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white transition-all hover:bg-[#E8871A] hover:border-[#E8871A] active:scale-95 shadow-md cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={nextSlide}
              className="h-12 w-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white transition-all hover:bg-[#E8871A] hover:border-[#E8871A] active:scale-95 shadow-md cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Smooth Animated Horizontal Track */}
        <div className="overflow-hidden py-4 -mx-2 px-2 select-none">
          <motion.div
            animate={{
              x: isMobile
                ? `calc(-${currentIndex} * (100% + 1.5rem))`
                : `calc(-${currentIndex} * ((100% - 3rem) / 3 + 1.5rem))`,
            }}
            transition={{ type: "spring", stiffness: 220, damping: 26 }}
            className="flex gap-6"
          >
            {INTERNATIONAL_TESTIMONIALS.map((item, idx) => (
              <div
                key={item.id}
                className="w-full md:w-[calc((100%-3rem)/3)] flex-shrink-0 rounded-3xl bg-[#0c2550] border border-white/15 p-6 backdrop-blur-md shadow-xl flex flex-col justify-between hover:border-[#E8871A]/50 transition-all duration-300 group"
              >
                <div>
                  {/* Student Photo Container */}
                  <div className="relative h-56 w-full rounded-2xl overflow-hidden shadow-lg border border-white/20 mb-6 bg-slate-800">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 360px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-[#0A1F44]/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5 text-xs font-extrabold text-[#E8871A]">
                      <MapPin size={12} />
                      {item.country}
                    </div>
                  </div>

                  {/* Quote Icon & Text */}
                  <Quote size={32} className="text-[#E8871A] opacity-80 mb-3" />
                  <p className="text-sm sm:text-base leading-relaxed text-white/90 font-medium italic min-h-[110px]">
                    {item.quote}
                  </p>
                </div>

                {/* Footer Details */}
                <div className="border-t border-white/15 pt-4 mt-6 flex items-center justify-between">
                  <div>
                    <h3 className="font-extrabold text-white text-base sm:text-lg">
                      {item.name}
                    </h3>
                    <span className="text-xs font-semibold text-[#E8871A]">
                      International Student
                    </span>
                  </div>

                  <div className="h-8 w-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-[#E8871A] font-bold text-xs">
                    0{idx + 1}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Indicator Dots / Bar */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? "w-8 bg-[#E8871A]"
                  : "w-2.5 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
