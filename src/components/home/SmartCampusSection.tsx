"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

type CampusFeature = {
  id: string;
  number: string;
  title: string;
  description: string;
  detail: string;
};

const features: CampusFeature[] = [
  {
    id: "attendance",
    number: "01",
    title: "Digital Attendance System",
    description:
      "Experience an effortless way to manage classrooms with automated attendance and connected student records.",
    detail:
      "Automated attendance syncs immediately with student data, creating greater transparency and helping students and faculty stay informed.",
  },
  {
    id: "library",
    number: "02",
    title: "Smart Library Services",
    description:
      "Discover books, journals and research resources through advanced digital search and personalized academic suggestions.",
    detail:
      "Digital library services make it easier to discover academic resources while helping students find relevant material beyond an exact title search.",
  },
  {
    id: "learning",
    number: "03",
    title: "Advanced E-Learning Platform",
    description:
      "Track attendance, notes and quizzes while staying connected to your academic progress.",
    detail:
      "Students can access real-time information about progress, reminders and academic dashboards through a connected learning experience.",
  },
  {
    id: "governance",
    number: "04",
    title: "Integrated e-Governance",
    description:
      "Raise and track requests across hostels, IT, academics and other campus services.",
    detail:
      "A connected service environment helps prioritize issues and provides quick, trackable solutions through a unified digital experience.",
  },
  {
    id: "scholarship",
    number: "05",
    title: "Unified Fee & Scholarship Portal",
    description:
      "Bring payments, receipts, scholarship eligibility and reminders together in one transparent system.",
    detail:
      "Students can manage important financial information through a unified platform designed to reduce confusion and improve visibility.",
  },
  {
    id: "connected",
    number: "06",
    title: "Connected Campus Experience",
    description:
      "Experience technology-enabled security, navigation, identification and automated campus assistance.",
    detail:
      "Connected digital services bring together security, navigation, ID verification, helpdesks and other elements of the student experience.",
  },
];

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const featureVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function SmartCampusSection() {
  const [activeFeature, setActiveFeature] = useState<string | null>("attendance");

  const toggleFeature = (id: string) => {
    setActiveFeature((current) => (current === id ? null : id));
  };

  const selectedFeature =
    features.find((feature) => feature.id === activeFeature) ?? features[0];

  return (
    <section
      aria-labelledby="smart-campus-heading"
      className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-24"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full opacity-30 blur-3xl"
        style={{
          backgroundColor: "var(--gu-gold)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >
          {/* SECTION INTRO */}
          <motion.div
            variants={itemVariants}
            className="mx-auto max-w-4xl text-center"
          >
            <p
              className="text-sm font-bold uppercase tracking-[0.25em]"
              style={{
                color: "var(--gu-gold)",
              }}
            >
              Next Generation Education
            </p>

            <h2
              id="smart-campus-heading"
              className="mt-3 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
              style={{
                color: "var(--gu-navy)",
              }}
            >
              NextGen Smart Campus
            </h2>

            <div
              className="mx-auto mt-5 h-1 w-16 rounded-full"
              style={{
                backgroundColor: "var(--gu-gold)",
              }}
            />

            <p
              className="mx-auto mt-7 max-w-3xl text-base leading-8 sm:text-lg"
              style={{
                color: "var(--gu-text-muted)",
              }}
            >
              Geeta University carries the powerful tradition of the Geeta
              Group of Institutions. Spread across 40 acres, the University
              combines academic excellence with cutting-edge technology to
              create an advanced and future-ready learning environment.
            </p>
          </motion.div>

          {/* FEATURE SHOWCASE */}
          <motion.div
            variants={itemVariants}
            className="mt-12 overflow-hidden rounded-3xl border shadow-xl md:mt-16"
            style={{
              borderColor: "rgba(6, 53, 95, 0.10)",
              backgroundColor: "var(--gu-bg)",
            }}
          >
            <div className="grid lg:grid-cols-12">
              {/* LEFT FEATURE NAVIGATION (WITH MOBILE INLINE ACCORDION) */}
              <div className="lg:col-span-5">
                <div className="p-5 sm:p-7 lg:p-8">
                  <div className="mb-6">
                    <p
                      className="text-xs font-bold uppercase tracking-[0.2em]"
                      style={{
                        color: "var(--gu-text-muted)",
                      }}
                    >
                      Digital Campus Ecosystem
                    </p>

                    <h3
                      className="mt-2 font-serif text-2xl font-bold sm:text-3xl"
                      style={{
                        color: "var(--gu-navy)",
                      }}
                    >
                      Technology built around students
                    </h3>
                  </div>

                  <div className="space-y-3 lg:space-y-2">
                    {features.map((feature) => {
                      const isActive = feature.id === activeFeature;

                      return (
                        <div key={feature.id} className="flex flex-col">
                          <motion.button
                            type="button"
                            onClick={() => toggleFeature(feature.id)}
                            aria-expanded={isActive}
                            whileHover={{
                              x: 4,
                            }}
                            whileTap={{
                              scale: 0.99,
                            }}
                            className="group flex w-full items-center gap-4 rounded-2xl p-4 text-left transition-all duration-300"
                            style={{
                              backgroundColor: isActive
                                ? "var(--gu-navy)"
                                : "transparent",
                              color: isActive
                                ? "var(--gu-white)"
                                : "var(--gu-navy)",
                            }}
                          >
                            <span className="min-w-0 flex-1">
                              <span className="block text-sm font-bold leading-6 sm:text-base">
                                {feature.title}
                              </span>
                            </span>

                            {/* Arrow / Chevron */}
                            <span
                              aria-hidden="true"
                              className={`transition-all duration-300 flex items-center ${
                                isActive
                                  ? "opacity-100 translate-x-0"
                                  : "opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                              }`}
                              style={{
                                color: isActive
                                  ? "var(--gu-gold)"
                                  : "var(--gu-text-muted)",
                              }}
                            >
                              <span className="hidden lg:inline-flex">
                                <ArrowRight size={16} />
                              </span>
                              <span className={`lg:hidden transition-transform duration-300 ${isActive ? "rotate-180" : "rotate-0"}`}>
                                <ChevronDown size={18} />
                              </span>
                            </span>
                          </motion.button>

                          {/* MOBILE INLINE ACCORDION CONTENT (Opens directly under clicked tab) */}
                          <AnimatePresence initial={false}>
                            {isActive && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                  duration: 0.28,
                                  ease: "easeInOut",
                                }}
                                className="overflow-hidden lg:hidden"
                              >
                                <div className="mt-2 rounded-2xl bg-[#06355F] p-5 text-white shadow-lg">
                                  <div className="flex items-center gap-2">
                                    <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#E8871A] border border-white/15">
                                      Smart Campus
                                    </span>
                                  </div>

                                  <h4 className="mt-3 font-serif text-xl font-bold text-white">
                                    {feature.title}
                                  </h4>

                                  <p className="mt-2 text-sm leading-relaxed text-white/85">
                                    {feature.description}
                                  </p>

                                  <div
                                    className="mt-3.5 border-l-2 pl-3.5"
                                    style={{ borderColor: "var(--gu-gold)" }}
                                  >
                                    <p className="text-xs leading-relaxed text-white/70">
                                      {feature.detail}
                                    </p>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* RIGHT FEATURE CONTENT (DESKTOP VIEW ONLY) */}
              <div
                className="relative hidden lg:block lg:col-span-7"
                style={{
                  backgroundColor: "var(--gu-navy)",
                }}
              >
                {/* Campus image */}
                <div className="absolute inset-0">
                  <Image
                    src="/about/campus.webp"
                    alt="Geeta University campus"
                    fill
                    className="object-cover opacity-35"
                    sizes="60vw"
                  />

                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(1, 43, 83, 0.97) 0%, rgba(6, 53, 95, 0.88) 50%, rgba(6, 53, 95, 0.72) 100%)",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative flex h-full min-h-128 flex-col justify-center p-8 lg:p-12">
                  <motion.div
                    key={selectedFeature.id}
                    variants={featureVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#E8871A] backdrop-blur-sm border border-white/15">
                        Smart Campus
                      </span>
                    </div>

                    <h3 className="mt-7 max-w-2xl font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                      {selectedFeature.title}
                    </h3>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                      {selectedFeature.description}
                    </p>

                    <div
                      className="mt-7 border-l-2 pl-5"
                      style={{ borderColor: "var(--gu-gold)" }}
                    >
                      <p className="text-sm leading-7 text-white/65">
                        {selectedFeature.detail}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}