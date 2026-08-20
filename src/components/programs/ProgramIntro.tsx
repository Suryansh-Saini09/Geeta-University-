"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { ProgramIntroData } from "./types";

interface ProgramIntroProps {
  data?: ProgramIntroData;
  // Flat props for backward compatibility
  eyebrow?: string;
  title?: string;
  paragraphs?: string[];
  image?: string;
  imageAlt?: string;
  badgeText?: string;
}

export default function ProgramIntro(props: ProgramIntroProps) {
  const intro = props.data || props;
  const title = intro.title || "About the Program";
  const eyebrow = intro.eyebrow || "ABOUT THE SCHOOL";
  const paragraphs = intro.paragraphs || [];
  const image = intro.image || "/bba photo.jpeg";
  const imageAlt = intro.imageAlt || title;
  const badgeText = intro.badgeText || "Future Leaders Are Made Here";

  return (
    <section className="w-full bg-[#FAFAFA] relative overflow-hidden font-sans py-20 md:py-24 lg:py-28">
      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Column: Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full lg:w-[58%]"
        >
          {/* Eyebrow */}
          {eyebrow && (
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-8 rounded-full bg-[#A32020]" />
              <span className="text-[12px] md:text-[13px] font-extrabold uppercase tracking-[0.2em] text-[#A32020]">
                {eyebrow}
              </span>
            </div>
          )}

          {/* Heading */}
          <h2 className="font-serif text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.15] text-[#0B2948] mb-7">
            {title}
          </h2>

          {/* Gold Accent */}
          <div className="h-[2px] w-16 bg-[#D99A24] mb-7" />

          {/* Paragraphs */}
          <div className="space-y-5 text-[16px] md:text-[17px] leading-[1.75] text-[#4A5568]">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Image with offset card & badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="w-full lg:w-[42%] relative"
        >
          {/* Background offset decoration */}
          <div className="absolute inset-0 bg-[#A32020]/15 rounded-[22px] translate-x-4 translate-y-4 z-0 pointer-events-none" />

          {/* Main Image Frame */}
          <div className="relative z-10 rounded-[18px] overflow-hidden shadow-[0_20px_50px_rgba(11,41,72,0.12)] w-full aspect-[4/3] lg:aspect-[4/5] bg-[#E2E8F0]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 992px) 100vw, 42vw"
            />
          </div>

          {/* Floating Badge */}
          {badgeText && (
            <div className="absolute -bottom-5 left-4 right-4 sm:left-auto sm:right-auto sm:-left-6 bg-white shadow-[0_14px_38px_rgba(11,41,72,0.14)] px-6 py-4 rounded-xl z-20 border-l-4 border-[#A32020] text-[#0B2948] font-bold text-[15px] sm:text-[16px]">
              {badgeText}
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
}