"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Award, CheckCircle2, ArrowRight } from "lucide-react";
import type { ProgramPageData, HeroSlideItem } from "@/data/programs/types";

interface ProgramHeroProps {
  hero: ProgramPageData["hero"];
}

export default function ProgramHero({ hero }: ProgramHeroProps) {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const { scrollY } = useScroll();
  const heroBgY = useTransform(scrollY, [0, 800], [0, 140]);

  const hasSlides = Boolean(hero.slides && hero.slides.length > 0);
  const slides: HeroSlideItem[] = hero.slides || [];

  useEffect(() => {
    if (!hasSlides || slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [hasSlides, slides.length]);

  const activeSlide = hasSlides ? slides[currentHeroSlide] || slides[0] : null;
  const bgImage = activeSlide?.bgImage || hero.image || "/hero-full.webp";

  return (
    <section
      id="Overview"
      className="relative w-full min-h-[580px] sm:min-h-[620px] lg:min-h-[680px] flex items-center overflow-hidden bg-[#050F24]"
    >
      {/* Background Image with Parallax & Overlays */}
      <motion.div
        style={{ y: heroBgY }}
        className="absolute -top-[10%] left-0 w-full h-[120%] overflow-hidden bg-[#050F24]"
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={hasSlides ? currentHeroSlide : "static-bg"}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{
              opacity: { duration: 0.7, ease: "easeInOut" },
              scale: { duration: 7, ease: "linear" },
            }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={bgImage}
              alt="Geeta University Campus Background"
              fill
              sizes="100vw"
              priority
              className="object-cover object-center opacity-[0.05]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Deep Gradient Overlays for Readability while keeping complete image backdrop */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050F24]/95 via-[#050F24]/75 to-[#050F24]/40 z-[2]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050F24] via-transparent to-[#050F24]/60 z-[2]" />
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none z-[3]"
          style={{ mixBlendMode: "overlay" }}
        />
      </motion.div>

      {/* Main Container - Expansive Left-aligned Layout */}
      <div className="max-w-[1400px] mx-auto w-full relative z-10 px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24 flex flex-col justify-center items-start text-left">
        
        {/* Content: Broad, Left-Aligned */}
        <div className="w-full max-w-5xl flex flex-col items-start text-left text-white z-20">
          
          {/* SLIDE MODE CONTENT */}
          {hasSlides && activeSlide ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentHeroSlide}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45 }}
                className="flex flex-col items-start text-left gap-4.5 w-full"
              >
                {/* Eyebrow Pill */}
                <div className="flex items-center gap-2">
                  <span className="px-4 py-1.5 rounded-full bg-[#E8871A]/20 border border-[#E8871A]/40 text-[#E8871A] text-[11px] sm:text-xs font-extrabold uppercase tracking-widest backdrop-blur-md">
                    {activeSlide.subtitle || activeSlide.program || hero.eyebrow || "Geeta University"}
                  </span>
                </div>

                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[62px] font-black tracking-tight leading-[1.12] text-white max-w-4xl">
                  {activeSlide.titleThin && (
                    <span className="font-light text-white/90 block text-2xl sm:text-3xl md:text-4xl lg:text-[38px] mb-1">
                      {activeSlide.titleThin}
                    </span>
                  )}
                  <span className="text-white">
                    {activeSlide.titleBoldLine1} {activeSlide.titleBoldLine2 || ""}
                  </span>
                </h1>

                {/* Accent Line */}
                <div className="w-16 h-1 bg-[#E8871A] rounded-full my-1" />

                {/* Description */}
                <p className="text-gray-100 text-base sm:text-lg md:text-[20px] leading-relaxed max-w-4xl font-normal">
                  {activeSlide.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <a
                    href={activeSlide.ctaLink || "https://admissions.geetauniversity.edu.in/"}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#ff0000] hover:bg-[#d90000] text-white font-extrabold text-xs sm:text-sm px-8 py-3.5 rounded-lg flex items-center space-x-2 transition-all tracking-wider uppercase shadow-lg shadow-[#ff0000]/25 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>{activeSlide.cta || "Apply Today"}</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>

                  <a
                    href="#Courses"
                    className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-lg transition-all tracking-wide backdrop-blur-sm"
                  >
                    Explore Courses
                  </a>
                </div>

                {/* Slide Placement Feature Badge */}
                {activeSlide.studentName && activeSlide.pkg && (
                  <div className="inline-flex items-center gap-4 mt-4 p-2.5 px-5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md max-w-max">
                    <div className="w-9 h-9 rounded-full bg-[#E8871A]/25 border border-[#E8871A]/50 flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 text-[#E8871A]" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[11px] font-bold text-gray-200 uppercase tracking-wider">
                        {activeSlide.studentName} · {activeSlide.company}
                      </span>
                      <span className="text-sm font-black text-[#F5A623]">
                        {activeSlide.pkg}
                      </span>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          ) : (
            /* STATIC / BANNER MODE CONTENT */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-start text-left gap-4.5 w-full"
            >
              {/* Eyebrow Badge */}
              <div className="flex items-center gap-2">
                <span className="px-4 py-1.5 rounded-full bg-[#E8871A]/20 border border-[#E8871A]/40 text-[#E8871A] text-[11px] sm:text-xs font-extrabold uppercase tracking-widest backdrop-blur-md">
                  {hero.eyebrow || "Geeta University"}
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[62px] font-black tracking-tight leading-[1.12] text-white max-w-4xl">
                {hero.title || "Excellence in Education & Career Leadership"}
              </h1>

              {/* Accent Line */}
              <div className="w-16 h-1 bg-[#E8871A] rounded-full my-1" />

              {/* Description */}
              <p className="text-gray-100 text-base sm:text-lg md:text-[20px] leading-relaxed max-w-4xl font-normal">
                {hero.description ||
                  "Industry-aligned curricula, experiential laboratories, global certification tracks, and dedicated mentorship for career excellence."}
              </p>

              {/* USP Highlights List */}
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 py-2 text-xs sm:text-[14.5px] text-gray-200 font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E8871A] shrink-0" />
                  <span>UGC & Government Approved</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E8871A] shrink-0" />
                  <span>100% Practical & Lab Oriented</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E8871A] shrink-0" />
                  <span>Top Corporate Placements</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <a
                  href={hero.ctaLink || "https://admissions.geetauniversity.edu.in/"}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#ff0000] hover:bg-[#d90000] text-white font-extrabold text-xs sm:text-sm px-8 py-3.5 rounded-lg flex items-center space-x-2 transition-all tracking-wider uppercase shadow-lg shadow-[#ff0000]/25 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>{hero.ctaText || "Apply Today"}</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>

                <a
                  href="#Courses"
                  className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-lg transition-all tracking-wide backdrop-blur-sm"
                >
                  Explore Programs
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Slide Navigation Controls if multiple slides */}
      {hasSlides && slides.length > 1 && (
        <div className="absolute bottom-6 left-6 sm:left-10 lg:left-16 flex items-center space-x-2 z-30">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentHeroSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentHeroSlide
                  ? "w-7 bg-[#E8871A] shadow-md shadow-[#E8871A]/40"
                  : "w-2 bg-gray-500/50 hover:bg-gray-400"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}