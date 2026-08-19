import { ChevronDown } from "lucide-react";
import { motion, type Variants } from "framer-motion";

import type { FAQ } from "@/data/programs/types";

interface FAQSectionProps {
  faqs: FAQ[];
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

const faqItem: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
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

export default function FAQSection({
  faqs,
}: FAQSectionProps) {
  return (
    <section
      className="
        overflow-hidden
        bg-white
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
            max-w-3xl
            text-center
            md:mb-14
          "
        >
          <div className="flex items-center justify-center gap-3">
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
              Need to Know
            </span>

            <span className="h-px w-9 bg-[#E8871A]" />
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
            Frequently Asked
            <span className="text-[#E8871A]">
              {" "}
              Questions.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-[15px]
              leading-[1.8]
              text-[#64748B]
              md:text-[16px]
            "
          >
            Find answers to some of the most common questions
            about our programs, admissions, and student
            opportunities.
          </p>
        </motion.div>

        {/* ==================================================
            FAQ LIST
        ================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="
            mx-auto
            max-w-4xl
            divide-y
            divide-[#E2E8F0]
            border-y
            border-[#DCE2EB]
          "
        >
          {faqs.map((faq, index) => (
            <motion.details
              key={faq.question}
              variants={faqItem}
              className="
                group
                relative
              "
            >
              {/* Saffron hover indicator */}

              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  top-0
                  w-[2px]
                  origin-center
                  scale-y-0
                  bg-[#E8871A]
                  transition-transform
                  duration-300
                  group-open:scale-y-100
                "
              />

              <summary
                className="
                  flex
                  cursor-pointer
                  list-none
                  items-center
                  justify-between
                  gap-6
                  px-4
                  py-6
                  pr-2
                  text-left
                  transition-colors
                  duration-300
                  hover:text-[#E8871A]
                  sm:px-5
                  md:py-7
                "
              >
                <div className="flex min-w-0 items-start gap-4">
                  <span
                    className="
                      hidden
                      shrink-0
                      pt-1
                      font-serif
                      text-[12px]
                      font-bold
                      text-[#E8871A]
                      sm:block
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className="
                      font-serif
                      text-[17px]
                      font-black
                      leading-[1.45]
                      text-[#0A1F44]
                      transition-colors
                      duration-300
                      group-hover:text-[#E8871A]
                      md:text-[18px]
                    "
                  >
                    {faq.question}
                  </span>
                </div>

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
                    text-[#64748B]
                    transition-all
                    duration-300
                    group-hover:border-[#E8871A]/40
                    group-hover:text-[#E8871A]
                    group-open:rotate-180
                    group-open:border-[#E8871A]
                    group-open:bg-[#E8871A]/5
                    group-open:text-[#E8871A]
                  "
                >
                  <ChevronDown
                    size={17}
                    strokeWidth={1.8}
                  />
                </span>
              </summary>

              {/* Answer */}

              <div
                className="
                  px-4
                  pb-6
                  pl-4
                  pr-14
                  sm:pl-14
                  md:pb-7
                "
              >
                <p
                  className="
                    max-w-3xl
                    text-[14px]
                    leading-[1.8]
                    text-[#64748B]
                    md:text-[15px]
                  "
                >
                  {faq.answer}
                </p>
              </div>
            </motion.details>
          ))}
        </motion.div>

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
            Still have questions?
            <span className="text-[#E8871A]">
              {" "}
              We're here to help.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}