"use client";

import { motion, Variants } from "framer-motion";
import { FileText } from "lucide-react";

import { governanceDocuments } from "@/data/governance";
import { policyDocuments } from "@/data/policies";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
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

export default function GovernancePoliciesSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F8FAFC]
        py-16
        md:py-20
      "
    >
      {/* Background subtle blur gradients */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-10
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#E8871A]/[0.04]
          blur-3xl
        "
      />
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-10
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#0A1F44]/[0.03]
          blur-3xl
        "
      />

      <div className="gu-container relative z-10 max-w-[1240px]">
        {/* ===================================================
            GOVERNANCE SECTION
        =================================================== */}
        <section id="governance" className="scroll-mt-[180px]">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mb-6 border-b border-[#E2E8F0] pb-4"
          >
            <h2 className="font-serif text-[26px] font-black tracking-tight text-[#0A1F44] sm:text-[32px]">
              Governance <span className="text-[#E8871A]">Structure</span>
            </h2>
          </motion.div>

          {/* Governance Cards Grid */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {governanceDocuments.map((document, index) => (
              <DocumentCard
                key={document.id}
                index={index}
                title={document.title}
                documentUrl={document.documentUrl}
              />
            ))}
          </div>
        </section>

        {/* ===================================================
            DIVIDER
        =================================================== */}
        <div className="my-12 md:my-16">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#DCE2EB] to-transparent" />
        </div>

        {/* ===================================================
            POLICIES SECTION
        =================================================== */}
        <section id="policies" className="scroll-mt-[180px]">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mb-6 border-b border-[#E2E8F0] pb-4"
          >
            <h2 className="font-serif text-[26px] font-black tracking-tight text-[#0A1F44] sm:text-[32px]">
              Policies
            </h2>
          </motion.div>

          {/* Policy Cards Grid */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {policyDocuments.map((document, index) => (
              <DocumentCard
                key={document.id}
                index={index}
                title={document.title}
                documentUrl={document.documentUrl}
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

/* ============================================================
   SLEEK HORIZONTAL DOCUMENT CARD
============================================================ */

function DocumentCard({
  index,
  title,
  documentUrl,
}: {
  index: number;
  title: string;
  documentUrl: string;
}) {
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.04,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.a
      href={documentUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={cardVariants}
      className="
        group
        relative
        flex
        items-center
        justify-between
        gap-4
        overflow-hidden
        rounded-xl
        border
        border-[#E2E8F0]
        bg-white
        p-4
        sm:p-5
        shadow-[0_2px_10px_rgba(10,31,68,0.03)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#E8871A]/40
        hover:shadow-[0_10px_25px_rgba(10,31,68,0.08)]
      "
    >
      <div className="flex items-center gap-3.5 min-w-0">
        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-lg
            bg-[#0A1F44]/[0.04]
            text-[#0A1F44]
            transition-colors
            duration-300
            group-hover:bg-[#E8871A]
            group-hover:text-white
          "
        >
          <FileText size={19} strokeWidth={1.75} />
        </div>

        <span
          className="
            font-serif
            text-[15px]
            sm:text-[16px]
            font-bold
            leading-snug
            text-[#0A1F44]
            transition-colors
            duration-300
            group-hover:text-[#E8871A]
          "
        >
          {title}
        </span>
      </div>

      <span
        className="
          shrink-0
          rounded-lg
          bg-[#0A1F44]
          px-4
          py-2
          text-[12px]
          font-bold
          text-white
          shadow-sm
          transition-all
          duration-300
          group-hover:bg-[#E8871A]
        "
      >
        View
      </span>

      {/* Hover bottom accent bar */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-[3px]
          w-0
          bg-[#E8871A]
          transition-all
          duration-300
          group-hover:w-full
        "
      />
    </motion.a>
  );
}