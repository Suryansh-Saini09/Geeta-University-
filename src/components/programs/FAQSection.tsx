"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import type { ProgramFAQData, FAQItem } from "./types";
import SectionHeading from "./shared/SectionHeading";

interface FAQSectionProps {
  data?: ProgramFAQData;
  faqs?: FAQItem[];
}

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

export default function FAQSection(props: FAQSectionProps) {
  const faqList: FAQItem[] = props.data?.items || props.faqs || [];

  if (!faqList || faqList.length === 0) return null;

  const eyebrow = props.data?.eyebrow || "Need to Know";
  const title = props.data?.title || "Frequently Asked Questions";
  const description =
    props.data?.description ||
    "Find answers to some of the most common questions about our curriculum, admissions, eligibility, and career opportunities.";

  return (
    <section className="overflow-hidden bg-white py-20 md:py-24 lg:py-28 font-sans">
      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={description}
        />

        {/* FAQ List */}
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
          className="mx-auto max-w-4xl divide-y divide-[#E2E8F0] border-y border-[#DCE2EB]"
        >
          {faqList.map((faq: FAQItem, index: number) => (
            <motion.details
              key={`${faq.question}-${index}`}
              variants={faqItem}
              className="group relative"
            >
              {/* Saffron Hover/Active Indicator */}
              <span className="absolute bottom-0 left-0 top-0 w-[3px] origin-center scale-y-0 bg-[#D99A24] transition-transform duration-300 group-open:scale-y-100" />

              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-4 py-6 pr-2 text-left transition-colors duration-300 hover:text-[#D99A24] sm:px-6 md:py-7">
                <div className="flex min-w-0 items-start gap-4">
                  <span className="hidden shrink-0 pt-0.5 font-serif text-[13px] font-bold text-[#D99A24] sm:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="font-serif text-[17px] sm:text-[19px] font-black leading-[1.4] text-[#0A1F44] transition-colors duration-300 group-hover:text-[#D99A24]">
                    {faq.question}
                  </span>
                </div>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#DCE2EB] text-[#64748B] transition-all duration-300 group-hover:border-[#D99A24]/40 group-hover:text-[#D99A24] group-open:rotate-180 group-open:border-[#D99A24] group-open:bg-[#D99A24]/10 group-open:text-[#D99A24]">
                  <ChevronDown size={18} strokeWidth={2} />
                </span>
              </summary>

              {/* Answer */}
              <div className="px-4 pb-6 pl-4 pr-12 sm:pl-14 md:pb-7">
                <p className="max-w-3xl text-[15px] sm:text-[16px] leading-[1.8] text-[#64748B]">
                  {faq.answer}
                </p>
              </div>
            </motion.details>
          ))}
        </motion.div>
      </div>
    </section>
  );
}