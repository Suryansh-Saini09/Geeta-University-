"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Award, CheckCircle2, ArrowRight } from "lucide-react";
import AdmissionFormWrapper from "./AdmissionFormWrapper";
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
      className="relative w-full min-h-[90vh] lg:min-h-[640px] lg:h-[calc(100vh-80px)] max-h-[900px] flex items-stretch overflow-hidden bg-[#050F24]"
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
            animate={{ opacity: 1, scale: 1.06 }}
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
              className="object-cover object-center opacity-40"
            />
          </motion.div>
        </AnimatePresence>

        {/* Deep Gradient Overlays for High Contrast Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050F24] via-[#050F24]/90 to-[#050F24]/80 z-[2]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050F24] via-transparent to-[#050F24]/60 z-[2]" />
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none z-[3]"
          style={{ mixBlendMode: "overlay" }}
        />
      </motion.div>

      {/* Main Grid Container */}
      <div className="max-w-[1400px] mx-auto w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center relative z-10 px-5 sm:px-8 lg:px-12 py-12 lg:py-6">
        
        {/* Left / Center Content: Columns 1-7 */}
        <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center text-left text-white z-20 pr-0 lg:pr-4">
          
          {/* SLIDE MODE CONTENT */}
          {hasSlides && activeSlide ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentHeroSlide}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45 }}
                className="flex flex-col gap-4"
              >
                {/* Eyebrow Pill */}
                <div className="flex items-center gap-2">
                  <span className="px-3.5 py-1 rounded-full bg-[#E8871A]/15 border border-[#E8871A]/35 text-[#E8871A] text-[11px] font-extrabold uppercase tracking-widest">
                    {activeSlide.subtitle || activeSlide.program || hero.eyebrow || "Geeta University"}
                  </span>
                </div>

                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-black tracking-tight leading-[1.12] text-white">
                  {activeSlide.titleThin && (
                    <span className="font-light text-white/90 block text-2xl sm:text-3xl lg:text-[34px] mb-1">
                      {activeSlide.titleThin}
                    </span>
                  )}
                  <span className="text-white">
                    {activeSlide.titleBoldLine1} {activeSlide.titleBoldLine2 || ""}
                  </span>
                </h1>

                {/* Accent Line */}
                <div className="w-14 h-1 bg-[#E8871A] rounded-full my-0.5" />

                {/* Description */}
                <p className="text-gray-300 text-sm sm:text-[15px] leading-relaxed max-w-[560px] font-normal">
                  {activeSlide.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <a
                    href={activeSlide.ctaLink || "https://admissions.geetauniversity.edu.in/"}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#ff0000] hover:bg-[#d90000] text-white font-extrabold text-xs sm:text-sm px-7 py-3 rounded-lg flex items-center space-x-2 transition-all tracking-wider uppercase shadow-lg shadow-[#ff0000]/20 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>{activeSlide.cta || "Apply Today"}</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>

                  <a
                    href="#Courses"
                    className="bg-white/10 hover:bg-white/15 border border-white/25 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-lg transition-all tracking-wide"
                  >
                    Explore Courses
                  </a>
                </div>

                {/* Slide Placement Feature Badge */}
                {activeSlide.studentName && activeSlide.pkg && (
                  <div className="inline-flex items-center gap-4 mt-3 p-2.5 px-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md max-w-max">
                    <div className="w-9 h-9 rounded-full bg-[#E8871A]/20 border border-[#E8871A]/40 flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 text-[#E8871A]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold text-gray-300 uppercase tracking-wider">
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
              className="flex flex-col gap-4"
            >
              {/* Eyebrow Badge */}
              <div className="flex items-center gap-2">
                <span className="px-3.5 py-1 rounded-full bg-[#E8871A]/15 border border-[#E8871A]/35 text-[#E8871A] text-[11px] font-extrabold uppercase tracking-widest">
                  🎓 {hero.eyebrow || "Geeta University"}
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-black tracking-tight leading-[1.12] text-white">
                {hero.title || "Excellence in Education & Career Leadership"}
              </h1>

              {/* Accent Line */}
              <div className="w-14 h-1 bg-[#E8871A] rounded-full my-0.5" />

              {/* Description */}
              <p className="text-gray-300 text-sm sm:text-[15.5px] leading-relaxed max-w-[580px] font-normal">
                {hero.description ||
                  "Industry-aligned curricula, experiential laboratories, global certification tracks, and dedicated mentorship for career excellence."}
              </p>

              {/* USP Highlights List */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 py-1 text-xs sm:text-[13px] text-gray-300 font-semibold">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E8871A] shrink-0" />
                  <span>UGC & Government Approved</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E8871A] shrink-0" />
                  <span>100% Practical & Lab Oriented</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E8871A] shrink-0" />
                  <span>Top Corporate Placements</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href={hero.ctaLink || "https://admissions.geetauniversity.edu.in/"}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#ff0000] hover:bg-[#d90000] text-white font-extrabold text-xs sm:text-sm px-7 py-3 rounded-lg flex items-center space-x-2 transition-all tracking-wider uppercase shadow-lg shadow-[#ff0000]/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>{hero.ctaText || "Apply Today"}</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>

                <a
                  href="#Courses"
                  className="bg-white/10 hover:bg-white/15 border border-white/25 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-lg transition-all tracking-wide"
                >
                  Explore Programs
                </a>
              </div>
            </motion.div>
          )}
        </div>

        {/* Optional Student Cutout in Slide Mode (Only when slide.image is explicitly defined and not Saransh fallback) */}
        {hasSlides && activeSlide?.image && (
          <div className="hidden lg:block lg:absolute lg:bottom-0 lg:left-[50%] lg:-translate-x-1/2 w-[340px] xl:w-[400px] h-[75%] xl:h-[82%] pointer-events-none z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentHeroSlide}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full flex items-end justify-center"
              >
                <div className="absolute bottom-0 w-[260px] h-[260px] bg-[#E8871A]/15 rounded-full blur-[60px] pointer-events-none" />
                <Image
                  src={activeSlide.image}
                  alt={activeSlide.studentName}
                  fill
                  sizes="400px"
                  priority
                  className="object-contain object-bottom filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* Right Section: Admission Enquiry Form */}
        <div className="lg:col-span-5 xl:col-span-5 flex items-center justify-center lg:justify-end relative z-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-[420px]"
          >
            <AdmissionFormWrapper />
          </motion.div>
        </div>
      </div>

      {/* Slide Navigation Controls if multiple slides */}
      {hasSlides && slides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2 z-30">
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