"use client";

import { motion, Variants } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Building2,
  FileText,
  Landmark,
  Scale,
  ShieldCheck,
} from "lucide-react";

import { governanceDocuments } from "@/data/governance";
import { policyDocuments } from "@/data/policies";

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

export default function GovernancePoliciesSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F7F9FC]
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
          -right-40
          top-10
          h-125
          w-125
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
          h-125
          w-125
          rounded-full
          bg-[#0A1F44]/2.5
          blur-3xl
        "
      />

      <div className="gu-container relative z-10">

        {/* ===================================================
            GOVERNANCE
        =================================================== */}

        <section
          id="governance"
          className="scroll-mt-20"
        >
          {/* Header */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
            className="
              mb-12
              grid
              gap-6
              lg:grid-cols-[1fr_420px]
              lg:items-end
            "
          >
            <div>
              <div className="mb-5 flex items-center gap-3">
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
                  Institutional Framework
                </span>
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
                Governance
                <br />

                <span className="text-[#E8871A]">
                  Structure.
                </span>
              </h2>
            </div>

            <p
              className="
                max-w-105
                text-[16px]
                leading-[1.8]
                text-[#64748B]
                lg:pb-1
            "
            >
              Our governance framework establishes the institutional
              structures that guide academic standards, administration,
              accountability and responsible decision-making.
            </p>
          </motion.div>

          {/* =================================================
              GOVERNANCE FEATURE PANEL
          ================================================= */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={fadeUp}
            className="
              mb-7
              overflow-hidden
              rounded-[22px]
              border
              border-[#DCE2EB]
              bg-[#0A1F44]
              shadow-[0_18px_50px_rgba(10,31,68,0.10)]
            "
          >
            <div
              className="
                grid
                lg:grid-cols-[250px_minmax(0,1fr)]
              "
            >
              {/* Left identity */}

              <div
                className="
                  relative
                  flex
                  min-h-55
                  flex-col
                  justify-between
                  overflow-hidden
                  p-7
                  md:p-9
                "
              >
                <div
                  className="
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    border
                    border-[#E8871A]/20
                  "
                />

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-[14px]
                    border
                    border-[#E8871A]/30
                    bg-[#E8871A]/10
                    text-[#E8871A]
                  "
                >
                  <Landmark
                    size={25}
                    strokeWidth={1.6}
                  />
                </div>

                <div className="relative z-10 mt-10">
                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[2.5px]
                      text-[#E8871A]
                    "
                  >
                    Institutional
                  </p>

                  <h3
                    className="
                      mt-2
                      font-serif
                      text-[27px]
                      font-black
                      leading-tight
                      text-white
                    "
                  >
                    Governance
                  </h3>
                </div>
              </div>

              {/* Right message */}

              <div
                className="
                  flex
                  items-center
                  border-t
                  border-white/10
                  p-7
                  md:p-10
                  lg:border-l
                  lg:border-t-0
                "
              >
                <div>
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-[#E8871A]
                    "
                  >
                    <ShieldCheck size={17} />

                    <span
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[2px]
                      "
                    >
                      Transparency & Accountability
                    </span>
                  </div>

                  <p
                    className="
                      mt-4
                      max-w-187.5
                      font-serif
                      text-[20px]
                      font-medium
                      leading-[1.65]
                      text-white/90
                      md:text-[23px]
                    "
                  >
                    A structured governance system supports
                    academic integrity, institutional accountability
                    and the long-term development of the University.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              GOVERNANCE DOCUMENTS
          ================================================= */}

          <div
            className="
              grid
              grid-cols-1
              gap-4
              md:grid-cols-2
              xl:grid-cols-3
            "
          >
            {governanceDocuments.map((document, index) => (
              <DocumentCard
                key={document.id}
                index={index}
                number={document.id}
                title={document.title}
                description={document.description}
                documentUrl={document.documentUrl}
                type="governance"
              />
            ))}
          </div>
        </section>

        {/* ===================================================
            DIVIDER
        =================================================== */}

        <div className="my-24 md:my-28">
          <div className="flex items-center gap-5">
            <span className="h-px flex-1 bg-[#DCE2EB]" />

            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[#E8871A]
              "
            />

            <span className="h-px flex-1 bg-[#DCE2EB]" />
          </div>
        </div>

        {/* ===================================================
            POLICIES
        =================================================== */}

        <section
          id="policies"
          className="scroll-mt-20"
        >
          {/* Header */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
            className="
              mb-12
              grid
              gap-6
              lg:grid-cols-[1fr_420px]
              lg:items-end
            "
          >
            <div>
              <div className="mb-5 flex items-center gap-3">
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
                  Academic & Institutional Policies
                </span>
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
                Policies &
                <br />

                <span className="text-[#E8871A]">
                  Guidelines.
                </span>
              </h2>
            </div>

            <p
              className="
                max-w-105
                text-[16px]
                leading-[1.8]
                text-[#64748B]
                lg:pb-1
              "
            >
              Explore the policies that shape academic integrity,
              research, innovation, student development and
              institutional practices at Geeta University.
            </p>
          </motion.div>

          {/* Policy identity strip */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={fadeUp}
            className="
              mb-7
              flex
              flex-col
              gap-5
              rounded-[18px]
              border
              border-[#DCE2EB]
              bg-white
              p-6
              shadow-[0_8px_30px_rgba(10,31,68,0.04)]
              sm:flex-row
              sm:items-center
              sm:justify-between
              md:p-7
            "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#0A1F44]
                  text-[#E8871A]
                "
              >
                <BookOpen
                  size={21}
                  strokeWidth={1.7}
                />
              </div>

              <div>
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[2px]
                    text-[#94A3B8]
                  "
                >
                  Institutional Resources
                </p>

                <p
                  className="
                    mt-1
                    font-serif
                    text-[19px]
                    font-bold
                    text-[#0A1F44]
                  "
                >
                  Policies & Academic Frameworks
                </p>
              </div>
            </div>

            <div
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[1.5px]
                text-[#64748B]
              "
            >
              {policyDocuments.length} Documents
            </div>
          </motion.div>

          {/* =================================================
              POLICY DOCUMENTS
          ================================================= */}

          <div
            className="
              grid
              grid-cols-1
              gap-4
              md:grid-cols-2
            "
          >
            {policyDocuments.map((document, index) => (
              <DocumentCard
                key={document.id}
                index={index}
                number={document.id}
                title={document.title}
                description={document.description}
                documentUrl={document.documentUrl}
                type="policy"
              />
            ))}
          </div>
        </section>

        {/* ===================================================
            FOOTER STATEMENT
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
          <div className="mx-auto flex max-w-175 items-center gap-4">
            <span className="h-px flex-1 bg-[#DCE2EB]" />

            <Scale
              size={17}
              className="shrink-0 text-[#E8871A]"
            />

            <span className="h-px flex-1 bg-[#DCE2EB]" />
          </div>

          <p
            className="
              mt-6
              font-serif
              text-[18px]
              italic
              leading-[1.7]
              text-[#0A1F44]
              md:text-[20px]
            "
          >
            Strong institutions are built on
            <span className="text-[#E8871A]">
              {" "}
              transparency, integrity and accountability.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   DOCUMENT CARD
============================================================ */

function DocumentCard({
  index,
  number,
  title,
  description,
  documentUrl,
  type,
}: {
  index: number;
  number: number;
  title: string;
  description: string;
  documentUrl: string;
  type: "governance" | "policy";
}) {
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        delay: index * 0.06,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      variants={cardVariants}
      className="
        group
        relative
        flex
        min-h-57.5
        flex-col
        overflow-hidden
        rounded-[18px]
        border
        border-[#DCE2EB]
        bg-white
        p-6
        shadow-[0_7px_28px_rgba(10,31,68,0.04)]
        transition-all
        duration-400
        hover:-translate-y-1.5
        hover:border-[#E8871A]/35
        hover:shadow-[0_18px_42px_rgba(10,31,68,0.085)]
        md:p-7
      "
    >
      {/* Top row */}

      <div className="flex items-start justify-between gap-4">
        {/* Number */}

        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-[10px]
            bg-[#F7F9FC]
            font-serif
            text-[14px]
            font-black
            text-[#0A1F44]
            transition-all
            duration-300
            group-hover:bg-[#0A1F44]
            group-hover:text-[#E8871A]
          "
        >
          {String(number).padStart(2, "0")}
        </div>

        {/* Document icon */}

        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-[#E2E8F0]
            text-[#64748B]
            transition-all
            duration-300
            group-hover:border-[#E8871A]/30
            group-hover:text-[#E8871A]
          "
        >
          <FileText
            size={18}
            strokeWidth={1.6}
          />
        </div>
      </div>

      {/* Content */}

      <div className="mt-7 flex flex-1 flex-col">
        <span
          className="
            text-[9px]
            font-bold
            uppercase
            tracking-[2px]
            text-[#E8871A]
          "
        >
          {type === "governance"
            ? "Governance Document"
            : "Institutional Policy"}
        </span>

        <h3
          className="
            mt-2
            max-w-125
            font-serif
            text-[21px]
            font-black
            leading-tight
            text-[#0A1F44]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-3
            max-w-130
            text-[13px]
            leading-[1.7]
            text-[#64748B]
          "
        >
          {description}
        </p>
      </div>

      {/* Bottom action */}

      <div className="mt-6 border-t border-[#E2E8F0] pt-5">
        <a
          href={documentUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            gap-2
            text-[11px]
            font-bold
            uppercase
            tracking-[1.7px]
            text-[#0A1F44]
            transition-colors
            duration-300
            hover:text-[#E8871A]
          "
        >
          View Document

          <ArrowUpRight
            size={15}
            strokeWidth={1.8}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
            "
          />
        </a>
      </div>

      {/* Hover accent */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-0.75
          w-0
          bg-[#E8871A]
          transition-all
          duration-500
          group-hover:w-full
        "
      />
    </motion.article>
  );
}