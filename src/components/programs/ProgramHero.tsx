"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ProgramPageData, HeroSlideItem } from "@/data/programs/types";

interface ProgramHeroProps {
  hero: ProgramPageData["hero"];
}

export default function ProgramHero({ hero }: ProgramHeroProps) {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

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

  if (hero.bannerOnly) {
    return (
      <section id="Overview" className="relative w-full overflow-hidden bg-[#050F24]">
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={hero.image || bgImage}
            alt={hero.title || "School Banner"}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </section>
    );
  }

  return (
    <section id="Overview" className="relative w-full overflow-hidden bg-[#050F24]">
      {/* Strict 16:9 Aspect Ratio Container - Exactly matches the 16:9 dimensions of all school hero banners to eliminate top & bottom image cropping */}
      <div className="relative w-full aspect-[16/9] flex items-center justify-start">
        {/* Background Banner Image */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={hasSlides ? currentHeroSlide : "static-bg"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 0.8, ease: "easeInOut" } }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={bgImage}
              alt="School Campus Background Banner"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Targeted Soft Overlay for crisp text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent pointer-events-none z-[2]" />

        {/* Content Container - Compact & Left-Aligned to keep bottom image graphics fully visible */}
        <div className="max-w-[1400px] mx-auto w-full relative z-10 px-6 sm:px-10 lg:px-16 pt-4 sm:pt-8 md:pt-12 pb-4 sm:pb-6 flex flex-col justify-center items-start text-left">
          
          <div className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl flex flex-col items-start text-left text-white z-20">
            
            {hasSlides && activeSlide ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentHeroSlide}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-start text-left gap-3 sm:gap-4 md:gap-5 w-full"
                >
                  {/* Heading */}
                  <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.12] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
                    {activeSlide.titleThin && (
                      <span className="font-light text-white/90 block text-base sm:text-xl md:text-2xl mb-0.5">
                        {activeSlide.titleThin}
                      </span>
                    )}
                    <span className="text-white">
                      {activeSlide.titleBoldLine1} {activeSlide.titleBoldLine2 || ""}
                    </span>
                  </h1>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <a
                      href={activeSlide.cta === "Explore Programs" ? "#Programs" : (activeSlide.ctaLink || "https://admissions.geetauniversity.edu.in/")}
                      target={activeSlide.cta === "Explore Programs" ? undefined : "_blank"}
                      rel={activeSlide.cta === "Explore Programs" ? undefined : "noreferrer"}
                      onClick={activeSlide.cta === "Explore Programs" ? (e) => {
                        e.preventDefault();
                        const el = document.getElementById("Programs") || document.getElementById("Courses");
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      } : undefined}
                      className="bg-[#ff0000] hover:bg-[#d90000] text-white font-extrabold text-[11px] sm:text-xs md:text-sm px-5 sm:px-7 py-2.5 sm:py-3 rounded-lg flex items-center space-x-2 transition-all tracking-wider uppercase shadow-lg shadow-[#ff0000]/25 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>{activeSlide.cta || "Apply Online"}</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>

                    <a
                      href="#Programs"
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById("Programs") || document.getElementById("Courses");
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }}
                      className="bg-white/15 hover:bg-white/25 border border-white/40 text-white font-bold text-[11px] sm:text-xs md:text-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all tracking-wide backdrop-blur-md cursor-pointer"
                    >
                      Explore Programs
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            ) : (
              /* STATIC MODE CONTENT */
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-start text-left gap-3 sm:gap-4 md:gap-5 w-full"
              >
                {/* Main Heading */}
                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.12] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
                  {hero.title || "Excellence in Education & Career Leadership"}
                </h1>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href={hero.ctaLink || "https://admissions.geetauniversity.edu.in/"}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#ff0000] hover:bg-[#d90000] text-white font-extrabold text-[11px] sm:text-xs md:text-sm px-5 sm:px-7 py-2.5 sm:py-3 rounded-lg flex items-center space-x-2 transition-all tracking-wider uppercase shadow-lg shadow-[#ff0000]/25 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>{hero.ctaText || "Apply Online"}</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>

                  <a
                    href="#Programs"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById("Programs") || document.getElementById("Courses");
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }}
                    className="bg-white/15 hover:bg-white/25 border border-white/40 text-white font-bold text-[11px] sm:text-xs md:text-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all tracking-wide backdrop-blur-md cursor-pointer"
                  >
                    Explore Programs
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}