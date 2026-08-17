"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  GraduationCap,
  LaptopMinimal,
} from "lucide-react";

import {
  legacyEcosystemClosing,
  legacyEcosystemIntro,
  legacyEcosystemItems,
} from "@/data/legacyEcosystem";

/* ============================================================
   ANIMATION VARIANTS
============================================================ */

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

const imageReveal: Variants = {
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
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

/* ============================================================
   ICONS
============================================================ */

function EcosystemIcon({ id }: { id: number }) {
  if (id === 1) {
    return <GraduationCap size={22} strokeWidth={1.7} />;
  }

  if (id === 2) {
    return <Building2 size={22} strokeWidth={1.7} />;
  }

  return <LaptopMinimal size={22} strokeWidth={1.7} />;
}

/* ============================================================
   COMPONENT
============================================================ */

export default function LegacyEcosystem() {
  return (
    <section
      id="legacy"
      className="
        scroll-mt-20
        overflow-hidden
        bg-[#F7F9FC]
        py-24
        md:py-28
        lg:py-32
      "
    >
      <div className="gu-container">

        {/* ====================================================
            SECTION HEADER
        ==================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={fadeUp}
          className="mx-auto mb-14 max-w-4xl text-center md:mb-16"
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
              text-[42px]
              font-black
              leading-[1.05]
              tracking-[-1.5px]
              text-[#0A1F44]
              sm:text-[50px]
              md:text-[58px]
            "
          >
            Legacy &
            <span className="text-[#E8871A]">
              {" "}
              Ecosystem.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-[16px]
              leading-[1.8]
              text-[#64748B]
              md:text-[17px]
            "
          >
            {legacyEcosystemIntro}
          </p>
        </motion.div>

        {/* ====================================================
            MAIN CONTENT
        ==================================================== */}

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
              LEFT — ECOSYSTEM
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
              {legacyEcosystemItems.map((item) => (
                <motion.article
                  key={item.id}
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
                    duration-400
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
                        w-16
                        shrink-0
                        items-center
                        justify-center
                        border-r
                        border-[#E2E8F0]
                        bg-[#F8FAFC]
                        transition-colors
                        duration-300
                        group-hover:bg-[#0A1F44]
                      "
                    >
                      <span
                        className="
                          font-serif
                          text-[17px]
                          font-black
                          text-[#0A1F44]
                          transition-colors
                          duration-300
                          group-hover:text-[#E8871A]
                        "
                      >
                        {String(item.id).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Content */}

                    <div className="min-w-0 flex-1 p-5 md:p-6">
                      <div className="flex items-start gap-4">

                        {/* Icon */}

                        <div
                          className={`
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-[11px]
                            transition-all
                            duration-300
                            ${
                              item.accent === "saffron"
                                ? "bg-[#E8871A]/10 text-[#E8871A] group-hover:bg-[#E8871A] group-hover:text-white"
                                : item.accent === "blue"
                                  ? "bg-[#0A1F44]/7 text-[#0A1F44] group-hover:bg-[#0A1F44] group-hover:text-[#E8871A]"
                                  : "bg-[#0A1F44] text-[#E8871A]"
                            }
                          `}
                        >
                          <EcosystemIcon id={item.id} />
                        </div>

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
                            {item.name}
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
                      className={`
                        absolute
                        bottom-0
                        left-0
                        h-[3px]
                        w-0
                        transition-all
                        duration-500
                        group-hover:w-full
                        ${
                          item.accent === "saffron"
                            ? "bg-[#E8871A]"
                            : "bg-[#0A1F44]"
                        }
                      `}
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
                  text-[18px]
                  italic
                  leading-[1.65]
                  text-[#0A1F44]
                  md:text-[20px]
                "
              >
                {legacyEcosystemClosing}
              </p>
            </motion.div>
          </motion.div>

          {/* ==================================================
              RIGHT — CAMPUS IMAGE
          ================================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={imageReveal}
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

            {/* Image container */}

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
                src="/about/campus.webp"
                alt="Geeta University campus"
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

              {/* Subtle overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#0A1F44]/65
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
                <div className="flex items-end justify-between gap-5">
                  <div>
                    <span
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[2.5px]
                        text-[#E8871A]
                      "
                    >
                      Since 1985
                    </span>

                    <h3
                      className="
                        mt-1
                        font-serif
                        text-[25px]
                        font-black
                        text-white
                        md:text-[29px]
                      "
                    >
                      A Legacy That Evolves.
                    </h3>
                  </div>

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/25
                      bg-white/10
                      text-[#E8871A]
                      backdrop-blur-md
                    "
                  >
                    <ArrowUpRight
                      size={19}
                      strokeWidth={1.7}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Small supporting label */}

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
                  Geeta Group of Institutions
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
                1985 — Present
              </span>
            </div>
          </motion.div>
        </div>

        {/* ====================================================
            BOTTOM BRAND STATEMENT
        ==================================================== */}

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
            From a legacy rooted in education to an ecosystem built
            for the future —
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