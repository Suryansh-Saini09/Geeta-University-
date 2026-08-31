"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Calculator, GraduationCap, Sparkles, Award } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ScholarshipPredictorHero() {
  const scrollToCalculator = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("scholarship-calculator-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#0A1F44]">
      {/* Background Image Container */}
      <div className="relative min-h-[460px] w-full lg:min-h-[540px]">
        <Image
          src="/scholarship-predictor/hero-bg.webp"
          alt="Geeta University Scholarship Predictor Campus"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-[#0A1F44]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-[#0A1F44]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-transparent to-transparent" />

        {/* Content Container */}
        <div className="gu-container relative z-10 flex min-h-[460px] items-center py-16 lg:min-h-[540px]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.12 },
              },
            }}
            className="max-w-[800px]"
          >
            {/* Tag Badge */}
            <motion.div variants={fadeUp}>
              <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#E8871A]/30 bg-[#E8871A]/10 px-4 py-1.5 backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-[#E8871A]" />
                <span className="text-[12px] font-bold uppercase tracking-[2.5px] text-[#E8871A]">
                  Financial Aid Estimator
                </span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeUp}
              className="font-serif text-[clamp(2.5rem,5vw,4.2rem)] font-black leading-[1.1] text-white"
            >
              Scholarship <span className="text-[#E8871A]">Predictor</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[700px] text-[16px] font-normal leading-[1.75] text-white/85 sm:text-[18px] md:text-[20px]"
            >
              Calculate your tuition fee waiver and estimate your scholarship eligibility instantly across all academic programs at Geeta University.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <a
                href="#scholarship-calculator-section"
                onClick={scrollToCalculator}
                className="group inline-flex items-center gap-3 rounded-[10px] bg-[#E8871A] px-7 py-4 text-[15px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#F5A623] hover:shadow-[0_10px_25px_rgba(232,135,26,0.3)]"
              >
                <Calculator className="h-5 w-5" />
                <span>Calculate My Scholarship</span>
              </a>

              <a
                href="https://admissions.geetauniversity.edu.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-[10px] border border-white/30 bg-white/10 px-7 py-4 text-[15px] font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-[#E8871A] hover:bg-white/15"
              >
                <GraduationCap className="h-5 w-5 text-[#E8871A]" />
                <span>Apply Now</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
