import { ArrowUpRight, BookOpen } from "lucide-react";
import { motion, type Variants } from "framer-motion";

import type { CourseCategory } from "@/data/programs/types";

interface ProgramCoursesProps {
  courses: CourseCategory[];
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
      staggerChildren: 0.12,
    },
  },
};

const cardItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function ProgramCourses({
  courses,
}: ProgramCoursesProps) {
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
          className="mb-12 max-w-3xl md:mb-14"
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
              Academics
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
              text-[#0A1F44]
              sm:text-[44px]
              md:text-[50px]
            "
          >
            Programs
            <span className="text-[#E8871A]">
              {" "}
              Offered.
            </span>
          </h2>

          <div className="mt-6 flex items-center gap-2">
            <span className="h-[3px] w-12 bg-[#E8871A]" />
            <span className="h-[3px] w-3 bg-[#0A1F44]" />
          </div>
        </motion.div>

        {/* ==================================================
            PROGRAM CATEGORIES
        ================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          variants={cardContainer}
          className="grid gap-6 md:grid-cols-2 lg:gap-8"
        >
          {courses.map((category, categoryIndex) => (
            <motion.article
              key={category.title}
              variants={cardItem}
              className="
                group
                relative
                overflow-hidden
                rounded-[18px]
                border
                border-[#DCE2EB]
                bg-white
                p-6
                shadow-[0_8px_30px_rgba(10,31,68,0.045)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#E8871A]/30
                hover:shadow-[0_16px_38px_rgba(10,31,68,0.08)]
                md:p-7
              "
            >
              {/* Top accent */}

              <span
                className="
                  absolute
                  left-0
                  top-0
                  h-[3px]
                  w-0
                  bg-[#E8871A]
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />

              {/* ==================================================
                  CATEGORY HEADER
              ================================================== */}

              <div className="flex items-start justify-between gap-5">
                <div className="flex items-start gap-4">
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-[11px]
                      bg-[#0A1F44]
                      text-[#E8871A]
                      transition-all
                      duration-300
                      group-hover:bg-[#E8871A]
                      group-hover:text-white
                    "
                  >
                    <BookOpen
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
                        tracking-[2px]
                        text-[#94A3B8]
                      "
                    >
                      {String(categoryIndex + 1).padStart(2, "0")}
                    </span>

                    <h3
                      className="
                        mt-1
                        font-serif
                        text-[22px]
                        font-black
                        leading-tight
                        text-[#0A1F44]
                        md:text-[24px]
                      "
                    >
                      {category.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* ==================================================
                  PROGRAM LIST
              ================================================== */}

              <div className="mt-7 space-y-3">
                {category.programs.map((program, programIndex) => (
                  <div
                    key={program.name}
                    className="
                      group/program
                      flex
                      items-center
                      justify-between
                      gap-4
                      rounded-[11px]
                      border
                      border-[#E2E8F0]
                      bg-[#F8FAFC]
                      px-4
                      py-4
                      transition-all
                      duration-300
                      hover:border-[#E8871A]/30
                      hover:bg-white
                      hover:shadow-[0_6px_20px_rgba(10,31,68,0.05)]
                    "
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <span
                        className="
                          flex
                          h-7
                          w-7
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-[#0A1F44]/5
                          text-[10px]
                          font-bold
                          text-[#64748B]
                          transition-colors
                          duration-300
                          group-hover/program:bg-[#E8871A]/10
                          group-hover/program:text-[#E8871A]
                        "
                      >
                        {String(programIndex + 1).padStart(2, "0")}
                      </span>

                      <span
                        className="
                          truncate
                          text-[14px]
                          font-semibold
                          text-[#334155]
                          transition-colors
                          duration-300
                          group-hover/program:text-[#0A1F44]
                        "
                      >
                        {program.name}
                      </span>
                    </div>

                    {program.href ? (
                      <a
                        href={program.href}
                        aria-label={`View ${program.name}`}
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#DCE2EB]
                          text-[#94A3B8]
                          transition-all
                          duration-300
                          hover:border-[#E8871A]
                          hover:bg-[#E8871A]
                          hover:text-white
                        "
                      >
                        <ArrowUpRight
                          size={16}
                          strokeWidth={1.8}
                        />
                      </a>
                    ) : (
                      <span
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#DCE2EB]
                          text-[#94A3B8]
                          transition-all
                          duration-300
                          group-hover/program:border-[#E8871A]/40
                          group-hover/program:text-[#E8871A]
                        "
                      >
                        <ArrowUpRight
                          size={16}
                          strokeWidth={1.8}
                        />
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom accent */}

              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  w-0
                  bg-[#0A1F44]
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </motion.article>
          ))}
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
          className="mt-14 md:mt-16"
        >
          <div className="flex items-center gap-4">
            <span className="h-px flex-1 bg-[#DCE2EB]" />

            <span className="h-2 w-2 rounded-full bg-[#E8871A]" />

            <span className="h-px flex-1 bg-[#DCE2EB]" />
          </div>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-center
              font-serif
              text-[17px]
              leading-[1.7]
              text-[#334155]
              md:text-[19px]
            "
          >
            Explore programs designed to connect
            <span className="text-[#E8871A]">
              {" "}
              academic learning
            </span>{" "}
            with the opportunities of tomorrow.
          </p>
        </motion.div>
      </div>
    </section>
  );
}