"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // Cinematic ease-out
    },
  },
};

export default function HomeHeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden bg-[#0A1F44]">
      
      {/* =====================================================
          FULL-SCREEN BACKGROUND
      ===================================================== */}
      
      <div className="absolute inset-0 z-0">
        <Image
          src="/about/campus.webp"
          alt="Geeta University Campus"
          fill
          priority
          className="object-cover object-center transition-transform duration-[15s] ease-out hover:scale-105"
          sizes="100vw"
        />

        {/* Deep gradient overlays for text readability & grand feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-[#0A1F44]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/60 via-transparent to-[#0A1F44]/10" />

        {/* Dramatic glowing ambient orbs */}
        <div className="absolute -top-40 right-10 h-125 w-125 rounded-full bg-[#E8871A] opacity-20 blur-[120px]" />
        <div className="absolute -left-40 top-1/2 h-150 w-150 -translate-y-1/2 rounded-full bg-blue-600 opacity-15 blur-[150px]" />
      </div>

      {/* =====================================================
          MAIN HERO CONTENT
      ===================================================== */}
      
      <div className="gu-container relative z-10 flex w-full flex-1 flex-col justify-center pb-20 pt-32 lg:pt-40">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Admissions Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex cursor-default items-center gap-3 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/10">
              <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E8871A] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#E8871A]" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[2px] text-white">
                Admissions Open 2026-27
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl font-black leading-[1.1] sm:text-6xl md:text-7xl lg:text-[80px]"
          >
            <span className="text-white">Empowering Minds.</span>
            <br />
            <span className="bg-gradient-to-r from-[#E8871A] to-[#FFB84D] bg-clip-text text-transparent drop-shadow-lg">
              Transforming Futures.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-[16px] leading-[1.8] text-white/80 md:text-[18px]"
          >
            Join a premier academic ecosystem designed to ignite innovation, foster global leadership, and drive impactful careers. Your legacy begins at Geeta University.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Link
              href="/about"
              className="
                group
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#E8871A]
                px-8
                py-4
                text-[13px]
                font-bold
                uppercase
                tracking-[1.5px]
                text-[#0A1F44]
                shadow-[0_8px_25px_rgba(232,135,26,0.3)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-105
                hover:bg-white
                hover:shadow-[0_15px_35px_rgba(232,135,26,0.5)]
                sm:w-auto
              "
            >
              About University
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="
                group
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-white/30
                bg-white/5
                px-8
                py-4
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white/60
                hover:bg-white/10
                sm:w-auto
              "
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#0A1F44] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#E8871A] group-hover:text-white">
                <Play size={10} className="ml-0.5" fill="currentColor" />
              </span>
              <span className="text-[13px] font-bold uppercase tracking-[1.5px] !text-white">
                Campus Tour
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* =====================================================
          ANIMATED SCROLL INDICATOR
      ===================================================== */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 lg:flex"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.3em]">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} strokeWidth={1.5} />
        </motion.div>
      </motion.div> */}

      {/* =====================================================
          YOUTUBE VIDEO MODAL
      ===================================================== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Geeta University Virtual Campus Tour"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
                y: 20,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close virtual campus tour"
                className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-2xl text-white backdrop-blur-md transition hover:bg-black/80"
              >
                &times;
              </button>

              {/* Video Iframe */}
              <div className="aspect-video w-full">
                <iframe
                  title="Geeta University Virtual Campus Tour"
                  src="https://www.youtube.com/embed/arnFS6rf454?autoplay=1"
                  className="h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}