import { motion, type Variants } from "framer-motion";

interface ProgramIntroProps {
  title: string;
  paragraphs: string[];
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

const paragraphContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const paragraphItem: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
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

export default function ProgramIntro({
  title,
  paragraphs,
}: ProgramIntroProps) {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F7F9FC]
        py-20
        md:py-24
        lg:py-28
      "
    >
      {/* ==================================================
          SUBTLE BACKGROUND DETAIL
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-10
          h-72
          w-72
          rounded-full
          bg-[#E8871A]/5
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-[#DCE2EB]
          to-transparent
        "
      />

      <div className="gu-container relative">
        <div
          className="
            grid
            gap-12
            lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.5fr)]
            lg:gap-20
          "
        >
          {/* ==================================================
              LEFT — SECTION TITLE
          ================================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={fadeUp}
            className="relative"
          >
            {/* Decorative vertical line */}

            <div
              className="
                absolute
                -left-5
                top-1
                hidden
                h-24
                w-px
                bg-[#E8871A]
                lg:block
              "
            />

            {/* Eyebrow */}

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
                About the School
              </span>
            </div>

            {/* Heading */}

            <h2
              className="
                mt-5
                max-w-md
                font-serif
                text-[34px]
                font-black
                leading-[1.08]
                tracking-[-1px]
                text-[#0A1F44]
                sm:text-[40px]
                md:text-[46px]
              "
            >
              {title}
            </h2>

            {/* Accent */}

            <div className="mt-6 flex items-center gap-2">
              <span className="h-[3px] w-12 bg-[#E8871A]" />
              <span className="h-[3px] w-3 bg-[#0A1F44]" />
            </div>
          </motion.div>

          {/* ==================================================
              RIGHT — INTRODUCTION
          ================================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={paragraphContainer}
            className="
              relative
              min-w-0
              border-l
              border-[#DCE2EB]
              pl-6
              md:pl-8
            "
          >
            {/* Orange inner accent */}

            <div
              className="
                absolute
                bottom-0
                left-0
                top-0
                w-[2px]
                bg-[#E8871A]/25
              "
            />

            <div className="space-y-6">
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={`${paragraph}-${index}`}
                  variants={paragraphItem}
                  className="
                    max-w-3xl
                    text-[16px]
                    font-normal
                    leading-[1.85]
                    text-[#475569]
                    md:text-[17px]
                  "
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}