"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { recruiters } from "@/data/recruiters";

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
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

export default function TopRecruitersSection() {
  /*
   * Duplicating the list creates a seamless marquee.
   * The animation moves exactly half of the combined track.
   */
  const marqueeItems = [...recruiters, ...recruiters];

  return (
    <section
      aria-labelledby="top-recruiters-heading"
      className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >
          {/* Section heading */}
          <motion.div
            variants={itemVariants}
            className="mx-auto max-w-3xl text-center"
          >
            <p
              className="text-sm font-bold uppercase tracking-[0.25em]"
              style={{
                color: "var(--gu-gold)",
              }}
            >
              Industry Connections
            </p>

            <h2
              id="top-recruiters-heading"
              className="mt-3 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
              style={{
                color: "var(--gu-navy)",
              }}
            >
              Where Talent Meets Opportunity
            </h2>

            <div
              className="mx-auto mt-5 h-1 w-16 rounded-full"
              style={{
                backgroundColor: "var(--gu-gold)",
              }}
            />

            <p
              className="mx-auto mt-6 max-w-2xl text-base leading-8 sm:text-lg"
              style={{
                color: "var(--gu-text-muted)",
              }}
            >
              Our industry connections help bridge the journey from classroom
              learning to meaningful professional opportunities.
            </p>
          </motion.div>

          {/* Recruiter marquee */}
          <motion.div
            variants={itemVariants}
            className="relative mt-12 overflow-hidden rounded-3xl border py-8 shadow-sm md:mt-16 md:py-10"
            style={{
              borderColor: "rgba(6, 53, 95, 0.10)",
              backgroundColor: "var(--gu-bg)",
            }}
          >
            {/* Left gradient */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 sm:w-24"
              style={{
                background:
                  "linear-gradient(to right, var(--gu-bg), transparent)",
              }}
            />

            {/* Right gradient */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 sm:w-24"
              style={{
                background:
                  "linear-gradient(to left, var(--gu-bg), transparent)",
              }}
            />

            <div
              className="flex w-max items-center"
              style={{
                animation: "guRecruiterMarquee 38s linear infinite",
              }}
            >
              {marqueeItems.map((recruiter, index) => (
                <div
                  key={`${recruiter.id}-${index}`}
                  className="group mx-3 flex h-24 w-40 shrink-0 items-center justify-center rounded-2xl border bg-white px-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:mx-4 sm:h-28 sm:w-48"
                  style={{
                    borderColor: "rgba(6, 53, 95, 0.08)",
                  }}
                >
                  <Image
  src={recruiter.logo}
  alt={`${recruiter.name} logo`}
  width={160}
  height={80}
  sizes="(max-width: 640px) 160px, 192px"
  className="max-h-14 w-auto max-w-full object-contain transition-all duration-300"
/>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bottom information */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:flex-row"
          >
            <span
              aria-hidden="true"
              className="h-px w-10"
              style={{
                backgroundColor: "rgba(6, 53, 95, 0.15)",
              }}
            />

            <p
              className="text-xs font-semibold uppercase tracking-[0.18em]"
              style={{
                color: "var(--gu-text-muted)",
              }}
            >
              Building industry-ready careers
            </p>

            <span
              aria-hidden="true"
              className="h-px w-10"
              style={{
                backgroundColor: "rgba(6, 53, 95, 0.15)",
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes guRecruiterMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          div[style*="guRecruiterMarquee"] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}