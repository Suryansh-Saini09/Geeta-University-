"use client";

import React from "react";
import Image from "next/image";
import { Building2, GraduationCap, LaptopMinimal } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import type { LegacyEcosystemData } from "./types";
import SectionHeading from "./shared/SectionHeading";

interface LegacyEcosystemProps {
  data: LegacyEcosystemData;
}

const cardContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardItem: Variants = {
  hidden: {
    opacity: 0,
    x: -18,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function EcosystemIcon({ index }: { index: number }) {
  if (index === 0) return <GraduationCap size={22} strokeWidth={1.8} />;
  if (index === 1) return <Building2 size={22} strokeWidth={1.8} />;
  return <LaptopMinimal size={22} strokeWidth={1.8} />;
}

export default function LegacyEcosystem({ data }: LegacyEcosystemProps) {
  if (!data || !data.items || data.items.length === 0) return null;

  const eyebrow = data.eyebrow || "Institutional Ecosystem";
  const title = data.title || "Four Decades of Educational Excellence";
  const description = data.description;

  return (
    <section className="overflow-hidden bg-[#F7F9FC] py-20 md:py-24 lg:py-28 font-sans">
      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={description}
        />

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          {/* Left Column: Ecosystem Items */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={cardContainer}
            className="space-y-4"
          >
            {data.items.map((item, index) => (
              <motion.article
                key={`${item.title}-${index}`}
                variants={cardItem}
                className="group relative overflow-hidden rounded-[20px] border border-[#DCE2EB] bg-white shadow-[0_8px_30px_rgba(10,31,68,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D99A24]/40 hover:shadow-[0_16px_38px_rgba(10,31,68,0.08)]"
              >
                <div className="flex items-stretch">
                  {/* Number Rail */}
                  <div className="flex w-16 shrink-0 items-center justify-center border-r border-[#E2E8F0] bg-[#F8FAFC] transition-colors duration-300 group-hover:bg-[#0A1F44]">
                    <span className="font-serif text-[16px] font-black text-[#0A1F44] transition-colors duration-300 group-hover:text-[#D99A24]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 items-center justify-between gap-4 p-5 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0A1F44] text-[#D99A24] transition-all duration-300 group-hover:bg-[#D99A24] group-hover:text-white">
                        <EcosystemIcon index={index} />
                      </div>

                      <div>
                        <h4 className="font-serif text-[19px] sm:text-[20px] font-black text-[#0A1F44] transition-colors duration-300 group-hover:text-[#245FA8]">
                          {item.title}
                        </h4>
                        <p className="mt-1.5 text-[14px] leading-[1.6] text-[#64748B]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Right Column: Campus Visual Frame */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[24px] border border-[#DCE2EB] bg-white p-3 shadow-xl">
              <div className="relative min-h-[380px] sm:min-h-[460px] rounded-[18px] overflow-hidden bg-[#0A1F44]">
                <Image
                  src="/bba photo.jpeg"
                  alt="Geeta University Campus Ecosystem"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/75 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[11px] font-extrabold uppercase tracking-[2.5px] text-[#D99A24]">
                    Holistic Infrastructure
                  </span>
                  <p className="mt-2 font-serif text-[22px] font-black leading-tight">
                    Shaping Countless Futures Across 4 Decades
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}