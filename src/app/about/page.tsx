"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import AboutVisionMission from "@/components/sections/AboutVisionMission";
import AwardsRankingsSection from "@/components/about/AwardsRankingsSection";
import LegacySection from "@/components/about/LegacySection";
import LeadershipSection from "@/components/about/LeadershipSection";
import GovernancePoliciesSection from "@/components/about/GovernancePoliciesSection";
import LegacyEcosystem from "@/components/about/LegacyEcosystem";

const NAV_ITEMS = [
  { id: "recognitions", label: "Recognitions" },
  { id: "vision-mission", label: "Vision & Mission" },
  { id: "awards-ranking", label: "Awards & Rankings" },
  { id: "legacy", label: "Our Legacy" },
  { id: "leadership", label: "Leadership" },
  { id: "governance", label: "Governance" },
  { id: "policies", label: "Policies" },
];

const RECOGNITIONS = [
  {
    name: "BCI",
    fullName: "Bar Council of India",
    image: "/about/4.png",
  },
  {
    name: "PCI",
    fullName: "Pharmacy Council of India",
    image: "/about/5.png",
  },
  {
    name: "MCI",
    fullName: "Medical Council of India",
    image: "/about/6.png",
  },
];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function AboutPage() {
  return (
    <div className="min-w-0 overflow-x-hidden bg-[#F7F9FC] text-[#0A1F44]">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#0A1F44]">
        <div className="relative h-[clamp(430px,52vw,600px)] w-full">
          <Image
            src="/about/1-1.webp"
            alt="Geeta University Campus"
            fill
            priority
            className="object-cover"
          />

          {/* Brand overlay */}
          <div className="absolute inset-0 bg-[#0A1F44]/75" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-[#0A1F44]/70 to-transparent" />

          <div className="gu-container relative z-10 flex h-full items-center py-16">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                  },
                },
              }}
              className="max-w-[760px]"
            >
              <motion.div variants={fadeUp}>
                <span className="mb-5 inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[3px] text-[#E8871A]">
                  <span className="h-[2px] w-8 bg-[#E8871A]" />
                  About Geeta University
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-[clamp(2.7rem,6vw,4.5rem)] font-black leading-[1.05] text-white"
              >
                Rooted in Legacy.
                <br />
                <span className="text-[#E8871A]">
                  Shaping the Future.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-[680px] text-[17px] font-medium leading-[1.75] text-white/80 md:text-[19px]"
              >
                Discover the journey, vision, leadership and institutional
                foundation behind Geeta University.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#recognitions"
                  className="group inline-flex items-center gap-3 rounded-[10px] bg-[#E8871A] px-7 py-4 text-[15px] font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#F5A623]"
                >
                  Explore Our Story
                  <ArrowRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#vision-mission"
                  className="inline-flex items-center gap-3 rounded-[10px] border border-white/30 bg-white/10 px-7 py-4 text-[15px] font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-[#E8871A] hover:bg-white/15"
                >
                  Vision & Mission
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.a
            href="#recognitions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-white/70"
          >
            <span className="text-[10px] font-bold uppercase tracking-[2px]">
              Discover
            </span>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <ArrowDown size={18} />
            </motion.div>
          </motion.a>
        </div>
      </section>

      {/* =========================================================
          SECTION NAVIGATION
      ========================================================= */}

      <nav className="sticky top-0 z-40 w-full border-b border-[#E2E8F0] bg-white/95 backdrop-blur-xl">
        <div className="gu-container overflow-x-auto [scrollbar-width:none]">
          <div className="flex min-w-max items-center gap-1 py-2.5 md:justify-center md:gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="group relative whitespace-nowrap px-4 py-3 text-[13px] font-bold text-[#64748B] transition-colors duration-300 hover:text-[#0A1F44]"
              >
                {item.label}

                <span className="absolute bottom-0 left-4 right-4 h-[2px] origin-left scale-x-0 bg-[#E8871A] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* =========================================================
          RECOGNITIONS
      ========================================================= */}

      <section
        id="recognitions"
        className="scroll-mt-20 bg-[#F7F9FC] py-24 md:py-28"
      >
        <div className="gu-container">
          {/* Section heading */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mb-14 text-center"
          >
            <span className="text-[12px] font-bold uppercase tracking-[2.5px] text-[#E8871A]">
              Recognitions & Approvals
            </span>

            <h2 className="mt-3 text-[42px] font-black leading-[1.1] tracking-[-1.5px] text-[#0A1F44] md:text-[52px]">
              Recognised. Trusted.
              <br />
              <span className="text-[#E8871A]">Established.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-[760px] text-[17px] leading-[1.7] text-[#64748B]">
              Geeta University's academic standing is supported by
              recognised regulatory and professional bodies.
            </p>
          </motion.div>

          {/* UGC featured recognition */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="relative mb-8 overflow-hidden rounded-[18px] border border-[#E2E8F0] bg-white shadow-[0_15px_45px_rgba(10,31,68,0.07)]"
          >
            <div className="grid min-h-[260px] min-w-0 md:grid-cols-[280px_minmax(0,1fr)]">
              <div className="flex items-center justify-center bg-[#0A1F44] p-10">
                <div className="flex h-[150px] w-[150px] items-center justify-center rounded-full bg-white p-5 shadow-xl">
                  <Image
                    src="/about/19.png"
                    alt="University Grants Commission"
                    width={120}
                    height={120}
                    className="h-auto max-h-[115px] w-auto object-contain"
                  />
                </div>
              </div>

              <div className="min-w-0 flex flex-col justify-center p-7 md:p-10">
                <span className="mb-3 text-[11px] font-bold uppercase tracking-[2px] text-[#E8871A]">
                  Government Recognition
                </span>

                <h3 className="text-[30px] font-black tracking-[-0.7px] text-[#0A1F44] md:text-[38px]">
                  University Grants Commission
                </h3>

                <p className="mt-4 max-w-[650px] text-[16px] leading-[1.7] text-[#64748B]">
                  Geeta University is recognised by the University Grants
                  Commission, forming an important part of its institutional
                  academic standing.
                </p>

                <div className="mt-6 flex items-center gap-2 text-[13px] font-extrabold text-[#E8871A]">
                  <ShieldCheck size={18} />
                  Recognised Institution
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other recognition bodies */}

          <div className="grid min-w-0 grid-cols-1 gap-5 md:grid-cols-3">
            {RECOGNITIONS.map((recognition, index) => (
              <motion.div
                key={recognition.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 25,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      delay: index * 0.08,
                      ease: "easeOut",
                    },
                  },
                }}
                className="group min-w-0 overflow-hidden rounded-[16px] border border-[#E2E8F0] bg-white p-7 shadow-[0_8px_25px_rgba(10,31,68,0.035)] transition-all duration-300 hover:-translate-y-2 hover:border-[#E8871A]/30 hover:shadow-[0_18px_35px_rgba(232,135,26,0.08)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-[82px] w-[82px] items-center justify-center rounded-[12px] bg-[#F8FAFC] p-3">
                    <Image
                      src={recognition.image}
                      alt={recognition.fullName}
                      width={70}
                      height={70}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F8FAFC] text-[#64748B] transition-all duration-300 group-hover:bg-[#0A1F44] group-hover:text-[#E8871A]">
                    <ChevronRight size={17} />
                  </div>
                </div>

                <div className="mt-7">
                  <div className="text-[12px] font-bold uppercase tracking-[2px] text-[#E8871A]">
                    Recognition
                  </div>

                  <h3 className="mt-2 text-[25px] font-black text-[#0A1F44]">
                    {recognition.name}
                  </h3>

                  <p className="mt-2 text-[14px] leading-[1.6] text-[#64748B]">
                    {recognition.fullName}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

            {/* =========================================================
          VISION & MISSION
      ========================================================= */}

      <AboutVisionMission />

      {/* =========================================================
          AWARDS & RANKINGS
      ========================================================= */}

      <AwardsRankingsSection />
      
      {/* =========================================================
          Legacy
      ========================================================= */}

      <LegacySection />

      {/* =========================================================
          Leader
      ========================================================= */}

      <LeadershipSection />

      {/* =========================================================
          Governance and Policies
      ========================================================= */}
      <GovernancePoliciesSection />

      {/* =========================================================
          Legacy Ecosystem
      ========================================================= */}
      <LegacyEcosystem />
    </div>
  );
}
