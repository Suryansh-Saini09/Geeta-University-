"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import type { FAQ } from "@/data/programs/types";

interface FAQSectionProps {
  faqs?: FAQ[];
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const faqItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function FAQSection({ faqs }: FAQSectionProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="overflow-hidden bg-white py-20 md:py-24 lg:py-28" id="faqs">
      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-14"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-[2px] w-9 bg-[#D89A2B]" />
            <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#D89A2B]">
              Need to Know
            </span>
            <span className="h-[2px] w-9 bg-[#D89A2B]" />
          </div>

          <h2 className="mt-5 font-['Zilla_Slab',serif] text-[36px] font-extrabold leading-[1.08] tracking-[-1px] text-[#0A1F44] sm:text-[42px] md:text-[48px]">
            Frequently Asked <span className="text-[#D89A2B]">Questions</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl font-['Source_Sans_3',sans-serif] text-[16.5px] leading-[1.8] text-[#64748B]">
            Find answers to some of the most common questions about our curriculum, admissions, eligibility, and career opportunities.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="mx-auto max-w-4xl divide-y divide-[#E2E8F0] border-y border-[#DCE2EB]"
        >
          {faqList.map((faq: FAQItem, index: number) => (
            <motion.details
              key={`${faq.question}-${index}`}
              variants={faqItem}
              className="group relative"
            >
              <span className="absolute bottom-0 left-0 top-0 w-[3px] origin-center scale-y-0 bg-[#D89A2B] transition-transform duration-300 group-open:scale-y-100" />

              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-4 py-6 pr-2 text-left transition-colors duration-300 hover:text-[#D89A2B] sm:px-6 md:py-7">
                <div className="flex min-w-0 items-start gap-4">
                  <span className="hidden shrink-0 pt-0.5 font-['Zilla_Slab',serif] text-[15px] font-bold text-[#D89A2B] sm:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="font-['Zilla_Slab',serif] text-[19px] font-bold leading-[1.4] text-[#0A1F44] transition-colors duration-300 group-hover:text-[#D89A2B] md:text-[21px]">
                    {faq.question}
                  </span>
                </div>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#DCE2EB] text-[#64748B] transition-all duration-300 group-hover:border-[#D89A2B]/50 group-hover:text-[#D89A2B] group-open:rotate-180 group-open:border-[#D89A2B] group-open:bg-[#D89A2B]/10 group-open:text-[#D89A2B]">
                  <ChevronDown size={17} strokeWidth={2} />
                </span>
              </summary>

              <div className="px-4 pb-6 pl-4 pr-12 sm:pl-14 md:pb-7">
                <p className="max-w-3xl font-['Source_Sans_3',sans-serif] text-[16px] leading-[1.8] text-[#64748B]">
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