"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

interface ProgramHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
}

const heroContent: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

const heroImage: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.04,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.1,
      ease: "easeOut",
    },
  },
};

export default function ProgramHero({
  eyebrow,
  title,
  description,
  image,
}: ProgramHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0A1F44] text-white">
      {/* ====================================================
          BACKGROUND IMAGE
      ==================================================== */}

      <motion.div
        initial="hidden"
        animate="visible"
        variants={heroImage}
        className="absolute inset-0"
      >
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* ====================================================
          IMAGE OVERLAY
      ==================================================== */}

      <div className="absolute inset-0 bg-[#0A1F44]/55" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#071832] via-[#0A1F44]/90 to-[#0A1F44]/30" />

      {/* Subtle bottom fade */}

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#071832]/60 to-transparent" />

      {/* ====================================================
          CONTENT
      ==================================================== */}

      <div className="gu-container relative">
        <div className="flex min-h-[560px] items-center py-24 md:min-h-[600px] lg:py-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroContent}
            className="max-w-4xl"
          >
            {/* Eyebrow */}

            {eyebrow && (
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#E8871A]" />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[3px]
                    text-[#E8871A]
                  "
                >
                  {eyebrow}
                </span>
              </div>
            )}

            {/* Heading */}

            <h1
              className="
                max-w-4xl
                font-serif
                text-[42px]
                font-black
                leading-[1.02]
                tracking-[-1.5px]
                text-white
                sm:text-[52px]
                md:text-[62px]
                lg:text-[70px]
              "
            >
              {title}
            </h1>

            {/* Accent */}

            <div className="mt-7 h-[3px] w-20 bg-[#E8871A]" />

            {/* Description */}

            {description && (
              <p
                className="
                  mt-7
                  max-w-2xl
                  text-[16px]
                  leading-[1.8]
                  text-white/80
                  md:text-[18px]
                "
              >
                {description}
              </p>
            )}

            {/* Actions */}

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#enquiry"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#E8871A]
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_10px_30px_rgba(232,135,26,0.25)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#d9780f]
                "
              >
                Enquire Now

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.9}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </a>

              <a
                href="#programs"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/25
                  bg-white/5
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:border-white/40
                  hover:bg-white/10
                "
              >
                Explore Programs

                <ArrowDownRight
                  size={17}
                  strokeWidth={1.8}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-y-0.5
                  "
                />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ====================================================
            BOTTOM META
        ==================================================== */}

        <div
          className="
            absolute
            bottom-6
            left-6
            right-6
            hidden
            items-center
            justify-between
            border-t
            border-white/10
            pt-4
            sm:flex
            md:left-8
            md:right-8
            lg:left-0
            lg:right-0
          "
        >
          <span
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[2.5px]
              text-white/50
            "
          >
            Geeta University
          </span>

          <span
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[2.5px]
              text-[#E8871A]
            "
          >
            Panipat · Haryana
          </span>
        </div>
      </div>
    </section>
  );
}