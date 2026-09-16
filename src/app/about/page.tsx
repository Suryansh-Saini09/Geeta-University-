"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { useLenis } from "lenis/react";
import {
  ArrowDown,
  ArrowRight,
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
  { id: "legacy-ecosystem", label: "Ecosystem" },
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
  const [activeSection, setActiveSection] = useState<string>("recognitions");
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle incoming hash on initial load or navigation
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash && NAV_ITEMS.some((item) => item.id === hash)) {
        setActiveSection(hash);
        const timer = setTimeout(() => {
          if (lenis) {
            lenis.scrollTo(`#${hash}`, { offset: -185 });
          } else {
            const el = document.getElementById(hash);
            if (el) {
              const top = el.getBoundingClientRect().top + window.scrollY - 185;
              window.scrollTo({ top, behavior: "smooth" });
            }
          }
        }, 300);
        return () => clearTimeout(timer);
      }
    }
  }, [lenis]);

  const scrollToSection = (
    eOrId: React.MouseEvent | string,
    maybeId?: string
  ) => {
    let id: string;
    if (typeof eOrId === "string") {
      id = eOrId;
    } else {
      eOrId.preventDefault();
      id = maybeId || "";
    }
    if (!id) return;

    setActiveSection(id);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${id}`);
    }
    if (lenis) {
      lenis.scrollTo(`#${id}`, { offset: -185 });
    } else {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 185;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="min-w-0 overflow-x-hidden bg-[#F7F9FC] text-[#0A1F44]">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#0A1F44]">
        <div className="relative h-[clamp(430px,52vw,600px)] w-full">
          <Image
            src="/about/campus.webp"
            alt="Geeta University Campus"
            fill
            priority
            className="object-cover"
          />

          {/* Brand overlay with reduced blue opacity */}
          <div className="absolute inset-0 bg-[#0A1F44]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44]/60 via-[#0A1F44]/30 to-transparent" />

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
                  onClick={(e) => scrollToSection(e, "recognitions")}
                  className="group inline-flex items-center gap-3 rounded-[10px] bg-[#E8871A] px-7 py-4 text-[15px] font-extrabold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#F5A623]"
                >
                  Explore Our Story
                  <ArrowRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#vision-mission"
                  onClick={(e) => scrollToSection(e, "vision-mission")}
                  className="inline-flex items-center gap-3 rounded-[10px] border border-white/60 bg-white/15 px-7 py-4 text-[15px] font-bold !text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-[#0A1F44] hover:border-white"
                >
                  Vision & Mission
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.a
            href="#recognitions"
            onClick={(e) => scrollToSection(e, "recognitions")}
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

      <nav className="sticky top-[136px] z-30 w-full border-b border-[#E2E8F0] bg-white/95 shadow-xs backdrop-blur-md">
        <div className="gu-container overflow-x-auto [scrollbar-width:none]">
          <div className="flex min-w-max items-center gap-1 py-2.5 md:justify-center md:gap-3">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`group relative cursor-pointer select-none whitespace-nowrap px-4 py-2.5 text-[13px] font-bold no-underline outline-none transition-colors duration-150 ${
                    isActive
                      ? "text-[#0A1F44]"
                      : "text-[#64748B] hover:text-[#0A1F44]"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute bottom-0 left-4 right-4 h-[2px] bg-[#E8871A] transition-transform duration-200 ${
                      isActive
                        ? "scale-x-100"
                        : "origin-left scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* =========================================================
          RECOGNITIONS
      ========================================================= */}

      <section
        id="recognitions"
        className="scroll-mt-[190px] bg-[#F7F9FC] py-20 md:py-28"
      >
        <div className="gu-container">
          {/* UGC featured recognition */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="relative mb-8 overflow-hidden rounded-[18px] border border-[#E2E8F0] bg-white shadow-[0_15px_45px_rgba(10,31,68,0.07)]"
          >
            <div className="flex flex-col items-center justify-center text-center p-8 md:p-10">
              <div className="mb-5 flex h-[140px] w-[140px] items-center justify-center rounded-full bg-[#0A1F44] p-4 shadow-xl">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-white p-3">
                  <Image
                    src="/about/19.png"
                    alt="University Grants Commission"
                    width={100}
                    height={100}
                    className="h-auto max-h-[95px] w-auto object-contain"
                  />
                </div>
              </div>

              <h3 className="text-[28px] font-black tracking-[-0.7px] text-[#0A1F44] md:text-[36px]">
                University Grants Commission
              </h3>
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
                className="group flex flex-col items-center justify-center text-center min-w-0 overflow-hidden rounded-[16px] border border-[#E2E8F0] bg-white p-7 shadow-[0_8px_25px_rgba(10,31,68,0.035)] transition-all duration-300 hover:-translate-y-2 hover:border-[#E8871A]/30 hover:shadow-[0_18px_35px_rgba(232,135,26,0.08)]"
              >
                <div className="flex h-[82px] w-[82px] items-center justify-center rounded-[12px] bg-[#F8FAFC] p-3">
                  <Image
                    src={recognition.image}
                    alt={recognition.name}
                    width={70}
                    height={70}
                    className="h-full w-full object-contain"
                  />
                </div>

                <h3 className="mt-4 text-[25px] font-black text-[#0A1F44]">
                  {recognition.name}
                </h3>
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
