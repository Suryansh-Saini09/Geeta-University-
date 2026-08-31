"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowDown, Briefcase, FileText, Sparkles } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function CareersHero() {
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("careers-form-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToWhyUs = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("why-join-us");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#0A1F44]">
      {/* Background Image Container */}
      <div className="relative min-h-[500px] w-full lg:min-h-[580px]">
        <Image
          src="/careers/hero-bg.webp"
          alt="Careers at Geeta University Campus"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 bg-[#0A1F44]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-[#0A1F44]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-transparent to-transparent" />

        {/* Content Container */}
        <div className="gu-container relative z-10 flex min-h-[500px] items-center py-16 lg:min-h-[580px]">
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
                  Join Our Team
                </span>
              </div>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={fadeUp}
              className="font-serif text-[clamp(2.6rem,5.5vw,4.2rem)] font-black leading-[1.1] text-white"
            >
              Careers at <span className="text-[#E8871A]">Geeta University</span>
            </motion.h1>

            {/* Subtitle Description */}
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[700px] text-[16px] font-normal leading-[1.75] text-white/85 sm:text-[18px] md:text-[20px]"
            >
              Empowering Minds, Inspiring Innovation, and Building Tomorrow&apos;s Leaders.
              Join our team of visionary educators, researchers, and professional staff in a top private university in Haryana.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <a
                href="#careers-form-section"
                onClick={scrollToForm}
                className="group inline-flex items-center gap-3 rounded-[10px] bg-[#E8871A] px-7 py-4 text-[15px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#F5A623] hover:shadow-[0_10px_25px_rgba(232,135,26,0.3)]"
              >
                <FileText className="h-5 w-5" />
                <span>Apply Online</span>
              </a>

              <a
                href="#why-join-us"
                onClick={scrollToWhyUs}
                className="inline-flex items-center gap-3 rounded-[10px] border border-white/30 bg-white/10 px-7 py-4 text-[15px] font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-[#E8871A] hover:bg-white/15"
              >
                <Briefcase className="h-5 w-5 text-[#E8871A]" />
                <span>Why Join Us</span>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Scroll Indicator */}
        <motion.a
          href="#careers-form-section"
          onClick={scrollToForm}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/70 sm:flex"
        >
          <span className="text-[10px] font-bold uppercase tracking-[2px]">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
