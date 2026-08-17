"use client";

import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  Building2,
  MapPin,
  Sparkles,
} from "lucide-react";

import {
  legacyIntro,
  legacyMilestones,
} from "@/data/legacy";

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

export default function LegacySection() {
  return (
    <section
      id="legacy"
      className="
        scroll-mt-20
        relative
        overflow-hidden
        bg-white
        py-24
        md:py-28
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-24
          h-105
          w-105
          rounded-full
          bg-[#E8871A]/[0.035]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-20
          h-90
          w-90
          rounded-full
          bg-[#0A1F44]/2.5
          blur-3xl
        "
      />

      <div className="gu-container relative z-10">

        {/* ===================================================
            INTRODUCTION
        =================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={fadeUp}
          className="
            mx-auto
            mb-20
            max-w-225
            text-center
            md:mb-24
          "
        >
          {/* Eyebrow */}

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-0.5 w-9 bg-[#E8871A]" />

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[3px]
                text-[#E8871A]
              "
            >
              {legacyIntro.eyebrow}
            </span>

            <span className="h-0.5 w-9 bg-[#E8871A]" />
          </div>

          {/* Heading */}

          <h2
            className="
              font-serif
              text-[42px]
              font-black
              leading-[1.04]
              tracking-[-1.5px]
              text-[#0A1F44]
              sm:text-[50px]
              md:text-[58px]
              lg:text-[64px]
            "
          >
            {legacyIntro.title}

            <br />

            <span className="text-[#E8871A]">
              {legacyIntro.highlightedTitle}
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-7
              max-w-205
              text-[16px]
              leading-[1.85]
              text-[#64748B]
              md:text-[17px]
            "
          >
            {legacyIntro.description}
          </p>

          {/* Journey badge */}

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#E8871A]/20 bg-[#E8871A]/6 px-5 py-2.5">
            <Sparkles
              size={16}
              className="text-[#E8871A]"
            />

            <span className="text-[12px] font-bold uppercase tracking-[1.5px] text-[#0A1F44]">
              A journey from 1985 to today
            </span>
          </div>
        </motion.div>

        {/* ===================================================
            TIMELINE
        =================================================== */}

        <div className="relative">

          {/* =================================================
              CENTRAL TIMELINE LINE
          ================================================= */}

          <div
            className="
              absolute
              bottom-0
              left-4.5
              top-0
              w-0.5
              bg-linear-to-b
              from-[#E8871A]
              via-[#DCE2EB]
              to-[#0A1F44]
              md:left-1/2
              md:-translate-x-1/2
            "
          />

          {/* =================================================
              TIMELINE ITEMS
          ================================================= */}

          <div className="space-y-12 md:space-y-16">
            {legacyMilestones.map(
              (milestone, index) => {
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={milestone.year}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.15,
                    }}
                    variants={fadeUp}
                    transition={{
                      delay: index * 0.04,
                    }}
                    className="
                      relative
                      grid
                      grid-cols-[38px_minmax(0,1fr)]
                      gap-5
                      md:grid-cols-[1fr_90px_1fr]
                      md:gap-0
                    "
                  >

                    {/* =======================================
                        LEFT SIDE
                    ======================================= */}

                    <div
                      className={`
                        hidden
                        md:flex
                        ${
                          isEven
                            ? "justify-end pr-12"
                            : "justify-start pl-12"
                        }
                      `}
                    >
                      {isEven && (
                        <LegacyContent
                          milestone={milestone}
                          align="right"
                        />
                      )}
                    </div>

                    {/* =======================================
                        CENTER YEAR
                    ======================================= */}

                    <div className="relative flex justify-center">

                      {/* Timeline node */}

                      <div
                        className="
                          relative
                          z-10
                          flex
                          h-9.5
                          w-9.5
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border-[3px]
                          border-[#E8871A]
                          bg-white
                          shadow-[0_0_0_6px_rgba(232,135,26,0.08)]
                          md:h-14.5
                          md:w-14.5
                          md:border-4
                          md:shadow-[0_0_0_8px_rgba(232,135,26,0.08)]
                        "
                      >
                        <span
                          className="
                            font-serif
                            text-[10px]
                            font-black
                            text-[#0A1F44]
                            md:text-[13px]
                          "
                        >
                          {milestone.year}
                        </span>
                      </div>

                    </div>

                    {/* =======================================
                        RIGHT SIDE
                    ======================================= */}

                    <div
                      className={`
                        hidden
                        md:flex
                        ${
                          !isEven
                            ? "justify-start pl-12"
                            : "justify-start pl-12"
                        }
                      `}
                    >
                      {!isEven && (
                        <LegacyContent
                          milestone={milestone}
                          align="left"
                        />
                      )}
                    </div>

                    {/* =======================================
                        MOBILE CONTENT
                    ======================================= */}

                    <div className="md:hidden">
                      <LegacyContent
                        milestone={milestone}
                        align="left"
                      />
                    </div>
                  </motion.div>
                );
              }
            )}
          </div>
        </div>

        {/* ===================================================
            END OF JOURNEY
        =================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={fadeUp}
          className="mt-20 text-center md:mt-24"
        >
          <div
            className="
              mx-auto
              flex
              max-w-190
              flex-col
              items-center
              rounded-[20px]
              border
              border-[#DCE2EB]
              bg-[#F7F9FC]
              px-7
              py-10
              shadow-[0_12px_35px_rgba(10,31,68,0.045)]
              md:px-12
              md:py-12
            "
          >
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-[#0A1F44]
                text-[#E8871A]
              "
            >
              <Building2
                size={24}
                strokeWidth={1.7}
              />
            </div>

            <span
              className="
                mt-5
                text-[11px]
                font-bold
                uppercase
                tracking-[2.5px]
                text-[#E8871A]
              "
            >
              The Journey Continues
            </span>

            <h3
              className="
                mt-3
                font-serif
                text-[27px]
                font-black
                text-[#0A1F44]
                md:text-[34px]
              "
            >
              From One Institution
              <br />
              <span className="text-[#E8871A]">
                to an Educational Ecosystem.
              </span>
            </h3>

            <p
              className="
                mt-5
                max-w-150
                text-[15px]
                leading-[1.8]
                text-[#64748B]
              "
            >
              Four decades of growth, learning and
              transformation continue to shape the future
              of education.
            </p>

            <div className="mt-7 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[1.5px] text-[#0A1F44]">
              Discover the legacy

              <ArrowRight
                size={16}
                className="text-[#E8871A]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   TIMELINE CONTENT
============================================================ */

function LegacyContent({
  milestone,
  align,
}: {
  milestone: {
    year: string;
    institutions: {
      name: string;
      location?: string;
      note?: string;
    }[];
    featured?: boolean;
  };
  align: "left" | "right";
}) {
  const isRight = align === "right";

  return (
    <div
      className={`
        w-full
        max-w-120
        rounded-[18px]
        border
        ${
          milestone.featured
            ? "border-[#E8871A]/35"
            : "border-[#DCE2EB]"
        }
        bg-white
        p-6
        shadow-[0_10px_30px_rgba(10,31,68,0.045)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#E8871A]/40
        hover:shadow-[0_16px_40px_rgba(10,31,68,0.08)]
        ${
          isRight
            ? "text-right"
            : "text-left"
        }
      `}
    >
      {/* Year label */}

      <div
        className={`
          mb-5
          flex
          items-center
          gap-3
          ${
            isRight
              ? "justify-end"
              : "justify-start"
          }
        `}
      >
        <span className="h-0.5 w-8 bg-[#E8871A]" />

        <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#E8871A]">
          {milestone.year}
        </span>
      </div>

      {/* Institutions */}

      <div className="space-y-5">
        {milestone.institutions.map(
          (institution, index) => (
            <div
              key={`${institution.name}-${index}`}
              className={`
                ${
                  index > 0
                    ? "border-t border-[#EEF1F5] pt-5"
                    : ""
                }
              `}
            >
              {/* Institution */}

              <div
                className={`
                  flex
                  gap-3
                  ${
                    isRight
                      ? "flex-row-reverse"
                      : "flex-row"
                  }
                `}
              >
                <div
                  className="
                    mt-1
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-[9px]
                    bg-[#0A1F44]
                    text-[#E8871A]
                  "
                >
                  <Building2
                    size={15}
                    strokeWidth={1.8}
                  />
                </div>

                <div className="min-w-0">
                  <h3
                    className="
                      font-serif
                      text-[19px]
                      font-black
                      leading-[1.3]
                      text-[#0A1F44]
                    "
                  >
                    {institution.name}
                  </h3>

                  {/* Location */}

                  {institution.location && (
                    <div
                      className={`
                        mt-2
                        flex
                        items-center
                        gap-1.5
                        text-[13px]
                        text-[#64748B]
                        ${
                          isRight
                            ? "justify-end"
                            : "justify-start"
                        }
                      `}
                    >
                      <MapPin
                        size={13}
                        className="shrink-0 text-[#E8871A]"
                      />

                      <span>
                        {institution.location}
                      </span>
                    </div>
                  )}

                  {/* Note */}

                  {institution.note && (
                    <p
                      className="
                        mt-2
                        text-[12px]
                        font-medium
                        italic
                        leading-[1.6]
                        text-[#94A3B8]
                      "
                    >
                      {institution.note}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}