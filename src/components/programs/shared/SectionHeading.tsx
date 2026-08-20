"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`w-full max-w-[1000px] mb-12 md:mb-14 ${
        isCenter ? "mx-auto text-center flex flex-col items-center" : "text-left flex flex-col items-start"
      } ${className}`}
    >
      {/* Eyebrow */}
      {eyebrow && (
        <div
          className={`flex items-center gap-3 mb-4 ${
            isCenter ? "justify-center" : "justify-start"
          }`}
        >
          <span className="h-[2px] w-8 rounded-full bg-[#D99A24]" />
          <span className="text-[12px] md:text-[13px] font-extrabold uppercase tracking-[0.2em] text-[#D99A24]">
            {eyebrow}
          </span>
          {isCenter && <span className="h-[2px] w-8 rounded-full bg-[#D99A24]" />}
        </div>
      )}

      {/* Main Heading */}
      <h2
        className={`font-serif text-[32px] sm:text-[42px] md:text-[52px] lg:text-[58px] font-black leading-[1.08] tracking-[-0.03em] ${
          isDark ? "text-white" : "text-[#0B2948]"
        }`}
      >
        {title}
      </h2>

      {/* Signature Gold Divider */}
      <div
        className={`flex items-center gap-3 w-[130px] my-5 ${
          isCenter ? "mx-auto justify-center" : "justify-start"
        }`}
      >
        <span className="h-px w-11 bg-[#D99A24]" />
        <span className="h-2 w-2 rotate-45 shrink-0 bg-[#D99A24]" />
        <span className="h-px w-11 bg-[#D99A24]" />
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-[1.5] max-w-2xl ${
            isDark ? "text-white/75" : "text-[#173F6D]"
          } ${isCenter ? "text-center" : "text-left"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
