"use client";

import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import type { ProgramPageData } from "@/data/programs/types";

interface DeanMessageProps {
  dean?: ProgramPageData["dean"];
  name?: string;
  designation?: string;
  image?: string;
  message?: string;
  schoolName?: string;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function DeanMessage(props: DeanMessageProps) {
  const data = props.dean || {
    name: props.name || "",
    designation: props.designation || "",
    image: props.image || "",
    message: props.message || "",
    schoolName: props.schoolName,
  };

  if (!data.name || !data.message) return null;

  return (
    <section className="overflow-hidden bg-[#F8FAFC] py-20 md:py-24 lg:py-28">
      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white shadow-[0_18px_50px_rgba(10,31,68,0.07)] lg:grid-cols-[minmax(320px,0.75fr)_minmax(0,1.25fr)]">
          {/* Dean Image */}
          {data.image && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={imageReveal}
              className="relative min-h-[380px] overflow-hidden bg-[#0A1F44] lg:min-h-[480px]"
            >
              <Image
                src={data.image}
                alt={data.name}
                fill
                sizes="(max-width: 1023px) 100vw, 35vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/75 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-8 bg-[#D89A2B]" />
                  <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#D89A2B]">
                    Academic Leadership
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Message Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="relative flex flex-col justify-center p-8 md:p-12 lg:p-14"
          >
            <div className="absolute right-8 top-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#D89A2B]/10 text-[#D89A2B] md:right-12 md:top-12">
              <Quote size={22} strokeWidth={1.8} />
            </div>

            <div className="flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#A32020]" />
              <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#A32020]">
                Leadership Note
              </span>
            </div>

            <h2 className="mt-4 max-w-xl pr-12 font-['Zilla_Slab',serif] text-[30px] font-extrabold leading-[1.1] text-[#0A1F44] sm:text-[36px] md:text-[40px]">
              {data.name}
            </h2>

            <p className="mt-2 text-[13px] font-semibold uppercase tracking-[1.5px] text-[#64748B] font-['Source_Sans_3',sans-serif]">
              {data.designation}
            </p>

            <div className="my-6 flex items-center gap-2">
              <span className="h-[3px] w-12 bg-[#D89A2B] rounded-full" />
              <span className="h-[3px] w-3 bg-[#0A1F44] rounded-full" />
            </div>

            <p className="max-w-2xl font-['Source_Sans_3',sans-serif] text-[17.5px] leading-[1.8] text-[#334155] md:text-[19px]">
              {data.message}
            </p>

            {data.schoolName && (
              <div className="mt-8 flex items-center gap-3 border-t border-[#E2E8F0] pt-6">
                <span className="h-2 w-2 rounded-full bg-[#D89A2B]" />
                <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#94A3B8]">
                  {data.schoolName}
                </span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}