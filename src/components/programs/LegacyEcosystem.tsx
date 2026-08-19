"use client";
import Image from "next/image";
import {
  ArrowUpRight,
  Building2,
  GraduationCap,
  LaptopMinimal,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

import type { ProgramPageData } from "@/data/programs/types";

interface LegacyEcosystemProps {
  data: NonNullable<ProgramPageData["legacy"]>;
}

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
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
  if (index === 0) {
    return (
      <GraduationCap
        size={21}
        strokeWidth={1.7}
      />
    );
  }

  if (index === 1) {
    return (
      <Building2
        size={21}
        strokeWidth={1.7}
      />
    );
  }

  return (
    <LaptopMinimal
      size={21}
      strokeWidth={1.7}
    />
  );
}

export default function LegacyEcosystem({
  data,
}: LegacyEcosystemProps) {
  return (
    <section
      className="
        overflow-hidden
        bg-[#F7F9FC]
        py-20
        md:py-24
        lg:py-28
      "
    >
      <div className="gu-container">
        {/* ==================================================
            SECTION HEADER
        ================================================== */}

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
            mb-12
            max-w-4xl
            text-center
            md:mb-16
          "
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#E8871A]" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[3px]
                text-[#E8871A]
              "
            >
              Institutional Ecosystem
            </span>

            <span className="h-px w-9 bg-[#E8871A]" />
          </div>

          <h2
            className="
              font-serif
              text-[40px]
              font-black
              leading-[1.05]
              tracking-[-1.5px]
              text-[#0A1F44]
              sm:text-[48px]
              md:text-[56px]
            "
          >
            {data.title}
            <span className="text-[#E8871A]">
              .
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-[15px]
              leading-[1.8]
              text-[#64748B]
              md:text-[17px]
            "
          >
            {data.description}
          </p>
        </motion.div>

        {/* ==================================================
            MAIN CONTENT
        ================================================== */}

        <div
          className="
            grid
            items-center
            gap-10
            lg:grid-cols-[minmax(0,1.05fr)_minmax(380px,0.8fr)]
            lg:gap-14
            xl:gap-20
          "
        >
          {/* ==================================================
              LEFT — ECOSYSTEM ITEMS
          ================================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={cardContainer}
            className="min-w-0"
          >
            <div className="space-y-4">
              {data.items.map((item, index) => (
                <motion.article
                  key={item.title}
                  variants={cardItem}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[16px]
                    border
                    border-[#DCE2EB]
                    bg-white
                    shadow-[0_8px_30px_rgba(10,31,68,0.045)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#E8871A]/30
                    hover:shadow-[0_16px_38px_rgba(10,31,68,0.08)]
                  "
                >
                  <div className="flex items-stretch">
                    {/* Number rail */}

                    <div
                      className="
                        flex
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        border-r
                        border-[#E2E8F0]
                        bg-[#F8FAFC]
                        transition-colors
                        duration-300
                        group-hover:bg-[#0A1F44]
                        sm:w-16
                      "
                    >
                      <span
                        className="
                          font-serif
                          text-[15px]
                          font-black
                          text-[#0A1F44]
                          transition-colors
                          duration-300
                          group-hover:text-[#E8871A]
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Content */}

                    <div className="min-w-0 flex-1 p-5 md:p-6">
                      <div className="flex items-start gap-4">
                        {/* Icon */}

                        <div
                          className="
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-[11px]
                            bg-[#E8871A]/10
                            text-[#E8871A]
                            transition-all
                            duration-300
                            group-hover:bg-[#E8871A]
                            group-hover:text-white
                          "
                        >
                          <EcosystemIcon index={index} />
                        </div>

                        {/* Text */}

                        <div className="min-w-0 flex-1">
                          <h3
                            className="
                              font-serif
                              text-[19px]
                              font-black
                              leading-tight
                              text-[#0A1F44]
                              md:text-[21px]
                            "
                          >
                            {item.title}
                          </h3>

                          <p
                            className="
                              mt-2
                              text-[14px]
                              leading-[1.6]
                              text-[#64748B]
                            "
                          >
                            {item.description}
                          </p>
                        </div>

                        {/* Arrow */}

                        <div
                          className="
                            hidden
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[#E2E8F0]
                            text-[#94A3B8]
                            transition-all
                            duration-300
                            group-hover:border-[#E8871A]/30
                            group-hover:bg-[#E8871A]
                            group-hover:text-white
                            sm:flex
                          "
                        >
                          <ArrowUpRight
                            size={16}
                            strokeWidth={1.8}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Bottom accent */}

                    <span
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-[3px]
                        w-0
                        bg-[#E8871A]
                        transition-all
                        duration-500
                        group-hover:w-full
                      "
                    />
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Closing statement */}

            <motion.div
              variants={fadeUp}
              className="
                mt-8
                flex
                items-start
                gap-4
                border-l-2
                border-[#E8871A]
                pl-5
              "
            >
              <p
                className="
                  max-w-2xl
                  font-serif
                  text-[17px]
                  italic
                  leading-[1.65]
                  text-[#0A1F44]
                  md:text-[19px]
                "
              >
                A connected institutional ecosystem that
                supports learning, professional readiness,
                and long-term growth.
              </p>
            </motion.div>
          </motion.div>

          {/* ==================================================
              RIGHT — CAMPUS IMAGE
          ================================================== */}

          {data.image && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={{
                hidden: {
                  opacity: 0,
                  scale: 0.97,
                },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut",
                  },
                },
              }}
              className="relative"
            >
              {/* Decorative frame */}

              <div
                className="
                  absolute
                  -right-3
                  -top-3
                  h-24
                  w-24
                  rounded-tr-[24px]
                  border-r-2
                  border-t-2
                  border-[#E8871A]
                  md:-right-4
                  md:-top-4
                "
              />

              <div
                className="
                  absolute
                  -bottom-3
                  -left-3
                  h-24
                  w-24
                  rounded-bl-[24px]
                  border-b-2
                  border-l-2
                  border-[#0A1F44]
                  md:-bottom-4
                  md:-left-4
                "
              />

              {/* Image */}

              <div
                className="
                  group
                  relative
                  aspect-4/3
                  overflow-hidden
                  rounded-[22px]
                  bg-[#0A1F44]
                  shadow-[0_22px_55px_rgba(10,31,68,0.14)]
                "
              >
                <Image
                  src={data.image}
                  alt={data.title}
                  fill
                  sizes="
                    (max-width: 1023px) 100vw,
                    45vw
                  "
                  className="
                    object-cover
                    transition-transform
                    duration-1000
                    ease-out
                    group-hover:scale-[1.025]
                  "
                />

                {/* Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#0A1F44]/70
                    via-transparent
                    to-transparent
                  "
                />

                {/* Image label */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-6
                    md:p-7
                  "
                >
                  <span
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[2.5px]
                      text-[#E8871A]
                    "
                  >
                    Geeta Group of Institutions
                  </span>

                  <h3
                    className="
                      mt-1
                      font-serif
                      text-[24px]
                      font-black
                      text-white
                      md:text-[28px]
                    "
                  >
                    A Legacy That Evolves.
                  </h3>
                </div>
              </div>

              {/* Supporting label */}

              <div
                className="
                  mt-5
                  flex
                  items-center
                  justify-between
                  gap-4
                "
              >
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#E8871A]" />

                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[2px]
                      text-[#64748B]
                    "
                  >
                    Institutional Foundation
                  </span>
                </div>

                <span
                  className="
                    font-serif
                    text-[13px]
                    font-bold
                    text-[#0A1F44]
                  "
                >
                  Since 1985
                </span>
              </div>
            </motion.div>
          )}
        </div>

        {/* ==================================================
            BOTTOM BRAND STATEMENT
        ================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          variants={fadeUp}
          className="mt-20 md:mt-24"
        >
          <div className="flex items-center gap-4">
            <span className="h-px flex-1 bg-[#DCE2EB]" />

            <span className="h-2 w-2 rounded-full bg-[#E8871A]" />

            <span className="h-px flex-1 bg-[#DCE2EB]" />
          </div>

          <p
            className="
              mx-auto
              mt-7
              max-w-3xl
              text-center
              font-serif
              text-[18px]
              leading-[1.7]
              text-[#0A1F44]
              md:text-[21px]
            "
          >
            From a legacy rooted in education to an ecosystem
            built for the future —
            <span className="text-[#E8871A]">
              {" "}
              learning continues to evolve.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}