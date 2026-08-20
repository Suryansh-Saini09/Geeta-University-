"use client";

import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import type { DeanMessageData } from "./types";

interface DeanMessageProps {
  data?: DeanMessageData;
  // Flat props for backward compatibility
  eyebrow?: string;
  name?: string;
  designation?: string;
  image?: string;
  message?: string;
  schoolLabel?: string;
}

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function DeanMessage(props: DeanMessageProps) {
  const name = props.data?.name || props.name;
  const designation = props.data?.designation || props.designation || "Academic Leader";
  const image = props.data?.image || props.image || "/bba faulty/Anjali.webp";
  const message = props.data?.message || props.message;
  const schoolLabel = props.data?.schoolLabel || props.schoolLabel || "Academic Leadership · Geeta University";
  const eyebrow = props.data?.eyebrow || props.eyebrow || "Leadership Message";

  if (!name || !message) return null;

  return (
    <section className="overflow-hidden bg-[#F7F9FC] py-20 md:py-24 lg:py-28 font-sans">
      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid overflow-hidden rounded-[24px] border border-[#DCE2EB] bg-white shadow-[0_18px_50px_rgba(10,31,68,0.07)] lg:grid-cols-[minmax(320px,0.75fr)_minmax(0,1.25fr)]">
          {/* ==================================================
              LEFT — DEAN IMAGE
          ================================================== */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={imageReveal}
            className="relative min-h-[380px] overflow-hidden bg-[#0A1F44] lg:min-h-[480px]"
          >
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 1023px) 100vw, 35vw"
              className="object-cover object-top transition-transform duration-700 ease-out hover:scale-105"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/75 via-transparent to-transparent" />

            {/* Image label */}
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8 bg-[#D99A24]" />
                <span className="text-[11px] font-extrabold uppercase tracking-[2.5px] text-[#D99A24]">
                  Academic Leadership
                </span>
              </div>
            </div>

            {/* Decorative corner */}
            <div className="absolute left-0 top-0 h-20 w-20 border-l-4 border-t-4 border-[#D99A24]/70" />
          </motion.div>

          {/* ==================================================
              RIGHT — MESSAGE
          ================================================== */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
            className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-14"
          >
            {/* Quote icon */}
            <div className="absolute right-6 top-6 sm:right-10 sm:top-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#D99A24]/10 text-[#D99A24]">
              <Quote size={22} strokeWidth={1.8} />
            </div>

            {/* Section label */}
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-9 bg-[#D99A24]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[3px] text-[#D99A24]">
                {eyebrow}
              </span>
            </div>

            {/* Name */}
            <h2 className="mt-5 max-w-xl pr-12 font-serif text-[30px] sm:text-[36px] md:text-[40px] font-black leading-[1.15] text-[#0A1F44]">
              {name}
            </h2>

            {/* Designation */}
            <p className="mt-2 text-[13px] font-bold uppercase tracking-[1.5px] text-[#64748B]">
              {designation}
            </p>

            {/* Accent */}
            <div className="my-6 flex items-center gap-2">
              <span className="h-[3px] w-12 bg-[#D99A24]" />
              <span className="h-[3px] w-3 bg-[#0A1F44]" />
            </div>

            {/* Message */}
            <p className="max-w-2xl font-serif text-[17px] sm:text-[19px] leading-[1.8] text-[#334155]">
              &ldquo;{message}&rdquo;
            </p>

            {/* Bottom identity */}
            {schoolLabel && (
              <div className="mt-8 flex items-center gap-3 border-t border-[#DCE2EB] pt-6">
                <span className="h-2 w-2 rounded-full bg-[#D99A24]" />
                <span className="text-[11px] font-extrabold uppercase tracking-[2px] text-[#94A3B8]">
                  {schoolLabel}
                </span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}