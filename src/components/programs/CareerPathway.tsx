import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

import type { ProgramPageData } from "@/data/programs/types";

interface CareerPathwayProps {
  data: NonNullable<ProgramPageData["career"]>;
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
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function CareerPathway({
  data,
}: CareerPathwayProps) {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#0A1F44]
        py-20
        text-white
        md:py-24
        lg:py-28
      "
    >
      {/* ==================================================
          BACKGROUND DETAILS
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-72
          w-72
          rounded-full
          border
          border-[#E8871A]/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -left-32
          h-80
          w-80
          rounded-full
          border
          border-white/5
        "
      />

      <div className="gu-container relative">
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
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3">
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
              Career Opportunities
            </span>
          </div>

          <h2
            className="
              mt-5
              font-serif
              text-[38px]
              font-black
              leading-[1.08]
              tracking-[-1px]
              text-white
              sm:text-[46px]
              md:text-[52px]
            "
          >
            {data.title}
          </h2>

          <div className="mt-6 flex items-center gap-2">
            <span className="h-[3px] w-12 bg-[#E8871A]" />
            <span className="h-[3px] w-3 bg-white/30" />
          </div>

          <p
            className="
              mt-7
              max-w-4xl
              text-[15px]
              leading-[1.8]
              text-white/65
              md:text-[16px]
            "
          >
            {data.description}
          </p>
        </motion.div>

        {/* ==================================================
            CAREER HIGHLIGHTS
        ================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={cardContainer}
          className="
            mt-12
            grid
            gap-4
            sm:grid-cols-3
            md:mt-14
            md:gap-5
          "
        >
          {data.highlights.map((highlight, index) => (
            <motion.div
              key={highlight.label}
              variants={cardItem}
              className="
                group
                relative
                overflow-hidden
                rounded-[16px]
                border
                border-white/10
                bg-white/[0.055]
                p-6
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#E8871A]/30
                hover:bg-white/[0.08]
                md:p-7
              "
            >
              {/* Number */}

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[2px]
                  text-white/30
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Value */}

              <div
                className="
                  mt-5
                  font-serif
                  text-[38px]
                  font-black
                  leading-none
                  text-[#E8871A]
                  md:text-[44px]
                "
              >
                {highlight.value}
              </div>

              {/* Label */}

              <div
                className="
                  mt-3
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[2px]
                  text-white/55
                "
              >
                {highlight.label}
              </div>

              {/* Bottom accent */}

              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  w-0
                  bg-[#E8871A]
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </motion.div>
          ))}
        </motion.div>

        {/* ==================================================
            RECRUITERS
        ================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={fadeUp}
          className="mt-14 md:mt-16"
        >
          <div
            className="
              flex
              flex-col
              gap-5
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <div className="flex items-center gap-4">
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
                "
              >
                <Building2
                  size={20}
                  strokeWidth={1.7}
                />
              </div>

              <div>
                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[2.5px]
                    text-white/35
                  "
                >
                  Industry Connect
                </span>

                <h3
                  className="
                    mt-1
                    font-serif
                    text-[22px]
                    font-black
                    text-white
                  "
                >
                  Our Recruiters
                </h3>
              </div>
            </div>

            <div className="hidden h-px flex-1 bg-white/10 md:mx-8 md:block" />

            <div className="flex items-center gap-2 text-[#E8871A]">
              <BriefcaseBusiness
                size={16}
                strokeWidth={1.7}
              />

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[2px]
                "
              >
                Career Ready
              </span>
            </div>
          </div>

          {/* Recruiter list */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            variants={cardContainer}
            className="
              mt-7
              grid
              grid-cols-2
              gap-3
              sm:grid-cols-3
              md:grid-cols-4
            "
          >
            {data.recruiters.map((recruiter) => (
              <motion.div
                key={recruiter}
                variants={cardItem}
                className="
                  group
                  flex
                  min-h-[58px]
                  items-center
                  justify-between
                  gap-3
                  rounded-[11px]
                  border
                  border-white/10
                  bg-white/[0.035]
                  px-4
                  py-3
                  transition-all
                  duration-300
                  hover:border-[#E8871A]/30
                  hover:bg-white/[0.07]
                "
              >
                <span
                  className="
                    min-w-0
                    truncate
                    text-[12px]
                    font-semibold
                    text-white/65
                    transition-colors
                    duration-300
                    group-hover:text-white
                    sm:text-[13px]
                  "
                >
                  {recruiter}
                </span>

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.7}
                  className="
                    shrink-0
                    text-white/20
                    transition-all
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:text-[#E8871A]
                  "
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ==================================================
            BOTTOM STATEMENT
        ================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          variants={fadeUp}
          className="mt-16 md:mt-20"
        >
          <div className="flex items-center gap-4">
            <span className="h-px flex-1 bg-white/10" />

            <span className="h-2 w-2 rounded-full bg-[#E8871A]" />

            <span className="h-px flex-1 bg-white/10" />
          </div>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-center
              font-serif
              text-[17px]
              italic
              leading-[1.7]
              text-white/65
              md:text-[19px]
            "
          >
            Turning academic foundations into
            <span className="text-[#E8871A]">
              {" "}
              meaningful careers.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}