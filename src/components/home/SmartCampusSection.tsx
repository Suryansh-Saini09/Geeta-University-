"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";

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
  const [activeFeature, setActiveFeature] = useState("attendance");

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
              {/* LEFT FEATURE NAVIGATION */}
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

                  <div className="space-y-2">
                    {features.map((feature) => {
                      const isActive = feature.id === activeFeature;

                      return (
                        <motion.button
                          key={feature.id}
                          type="button"
                          onClick={() => setActiveFeature(feature.id)}
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
                          <span
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold transition-all duration-300"
                            style={{
                              backgroundColor: isActive
                                ? "var(--gu-gold)"
                                : "rgba(6, 53, 95, 0.07)",
                              color: isActive
                                ? "var(--gu-white)"
                                : "var(--gu-navy)",
                            }}
                          >
                            {feature.number}
                          </span>

                          <span className="min-w-0 flex-1">
                            <span className="block text-sm font-bold leading-6 sm:text-base">
                              {feature.title}
                            </span>
                          </span>

                          {/* Arrow only visible on hover */}
                          <span
                            aria-hidden="true"
                            className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 flex items-center"
                            style={{
                              color: isActive
                                ? "var(--gu-gold)"
                                : "var(--gu-text-muted)",
                            }}
                          >
                            <ArrowRight size={16} />
                          </span>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* RIGHT FEATURE CONTENT */}
              <div
                className="relative min-h-96 lg:col-span-7 lg:min-h-0"
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
                    sizes="(max-width: 1024px) 100vw, 60vw"
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
                <div className="relative flex h-full min-h-96 flex-col justify-center p-7 sm:p-10 lg:min-h-128 lg:p-12">
                  <motion.div
                    key={selectedFeature.id}
                    variants={featureVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="text-sm font-bold tracking-[0.2em]"
                        style={{
                          color: "var(--gu-gold)",
                        }}
                      >
                        {selectedFeature.number}
                      </span>

                      <span className="h-px w-12 bg-white/30" />

                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                        Smart Campus
                      </span>
                    </div>

                    <h3 className="mt-7 max-w-2xl font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                      {selectedFeature.title}
                    </h3>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                      {selectedFeature.description}
                    </p>

                    <div className="mt-7 border-l-2 pl-5" style={{ borderColor: "var(--gu-gold)" }}>
                      <p className="text-sm leading-7 text-white/65">
                        {selectedFeature.detail}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* BOTTOM FEATURE CARDS */}
          <motion.div
            variants={itemVariants}
            className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.slice(0, 3).map((feature) => {
              const isActive = feature.id === activeFeature;

              return (
                <button
                  key={feature.id}
                  type="button"
                  onClick={() => setActiveFeature(feature.id)}
                  className="group rounded-2xl border p-5 text-left transition-all duration-300 hover:-translate-y-1 sm:p-6"
                  style={{
                    borderColor: isActive
                      ? "rgba(232, 135, 26, 0.45)"
                      : "rgba(6, 53, 95, 0.10)",
                    backgroundColor: isActive
                      ? "rgba(232, 135, 26, 0.05)"
                      : "var(--gu-white)",
                    boxShadow: isActive
                      ? "0 12px 30px rgba(232, 135, 26, 0.10)"
                      : "0 8px 25px rgba(6, 53, 95, 0.05)",
                  }}
                >
                  <h4
                    className="font-serif text-xl font-bold"
                    style={{
                      color: "var(--gu-navy)",
                    }}
                  >
                    {feature.title}
                  </h4>

                  <p
                    className="mt-3 text-sm leading-6"
                    style={{
                      color: "var(--gu-text-muted)",
                    }}
                  >
                    {feature.description}
                  </p>
                </button>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}