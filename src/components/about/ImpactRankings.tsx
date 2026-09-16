"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ImpactRankings() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="mt-12 md:mt-14"
    >
      {/* Section heading */}
      <div className="mx-auto mb-10 max-w-[850px] text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-[2px] w-8 bg-[#E8871A]" />

          <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#E8871A]">
            Impact & Rankings
          </span>

          <span className="h-[2px] w-8 bg-[#E8871A]" />
        </div>

        <h3
          className="
            font-serif
            text-[32px]
            font-black
            leading-[1.1]
            tracking-[-0.8px]
            text-[#0A1F44]
            sm:text-[38px]
            md:text-[44px]
          "
        >
          Making an Impact.
          <br />

          <span className="text-[#E8871A]">
            Recognised Globally.
          </span>
        </h3>

        <p
          className="
            mx-auto
            mt-5
            max-w-[700px]
            text-[15px]
            leading-[1.8]
            text-[#64748B]
            md:text-[16px]
          "
        >
          Geeta University's achievements extend beyond institutional
          recognition, reflecting its growing impact across education,
          sustainability and global development goals.
        </p>
      </div>

      {/* Ranking graphic */}
      <div
        className="
          group
          relative
          overflow-hidden
          rounded-[20px]
          border
          border-[#DCE2EB]
          bg-white
          p-2
          shadow-[0_15px_45px_rgba(10,31,68,0.07)]
          transition-all
          duration-500
          hover:border-[#E8871A]/30
          hover:shadow-[0_20px_55px_rgba(10,31,68,0.10)]
          sm:p-3
          md:p-4
        "
      >
        <div className="relative overflow-hidden rounded-[14px] bg-[#F8EFE2]">
          <Image
            src="/about/the.webp"
            alt="Times Higher Education Impact Rankings 2024"
            width={1600}
            height={900}
            sizes="
              (max-width: 640px) 100vw,
              (max-width: 1024px) 90vw,
              1400px
            "
            className="
              h-auto
              w-full
              object-contain
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.01]
            "
          />
        </div>
      </div>

      {/* Supporting statement */}
      <div className="mx-auto mt-8 max-w-[850px] text-center">
        <p
          className="
            font-serif
            text-[17px]
            italic
            leading-[1.7]
            text-[#0A1F44]
            md:text-[19px]
          "
        >
          A commitment to meaningful education,
          <span className="text-[#E8871A]">
            {" "}sustainable development and global impact.
          </span>
        </p>
      </div>
    </motion.div>
  );
}