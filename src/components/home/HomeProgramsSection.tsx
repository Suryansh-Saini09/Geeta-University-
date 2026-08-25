"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

type Program = {
  name: string;
  href?: string;
};

type ProgramCategory = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  programs: Program[];
  schoolHref?: string;
};

const programCategories: ProgramCategory[] = [
  {
    id: "cse",
    number: "01",
    title: "Computer Science & Engineering",
    shortTitle: "Computer Science",
    description:
      "Build the technology of tomorrow through computing, artificial intelligence, cybersecurity, data science and modern software development.",
    schoolHref:
      "/programs/school-of-computer-science-and-engineering",
    programs: [
      {
        name: "B.Tech. Hons. CSE",
        href: "/programs/school-of-computer-science-and-engineering/btech-cse",
      },
      {
        name: "B.Tech. Hons. CSE — Artificial Intelligence & Machine Learning",
        href: "/programs/school-of-computer-science-and-engineering/btech-artificial-intelligence-and-machine-learning",
      },
      {
        name: "B.Tech. Hons. CSE — Cyber Security",
        href: "/programs/school-of-computer-science-and-engineering/btech-cyber-security",
      },
      {
        name: "B.Tech. Hons. CSE — Full Stack Web Development",
        href: "/programs/school-of-computer-science-and-engineering/btech-full-stack-web-development",
      },
      {
        name: "B.Tech. Hons. CSE — Data Science & Business Analytics with HCL",
        href: "/programs/school-of-computer-science-and-engineering/btech-data-science-and-business-analytics",
      },
      {
        name: "B.Tech. Hons. CSE — NIAT Upskilling",
        href: "/programs/school-of-computer-science-and-engineering/niat-upskilling",
      },
      {
        name: "B.Tech. Hons. CSE — Quantum Computing",
        href: "/programs/school-of-computer-science-and-engineering/btech-quantum-computing",
      },
      {
        name: "M.Tech. CSE",
        href: "/programs/school-of-computer-science-and-engineering/mtech-cse",
      },
      {
        name: "Ph.D. CSE",
        href: "/phd-cse",
      },
    ],
  },

  {
    id: "applications",
    number: "02",
    title: "Computer Applications",
    shortTitle: "Computer Applications",
    description:
      "Develop strong foundations in software, applications, computing systems and emerging digital technologies.",
    schoolHref:
      "/programs/school-of-computer-science-and-engineering",
    programs: [
      {
        name: "BCA Hons. — Computer Applications",
        href: "/programs/school-of-computer-science-and-engineering/bca",
      },
      {
        name: "BCA Hons. — Artificial Intelligence & Machine Learning",
        href: "/programs/school-of-computer-science-and-engineering/bca-artificial-intelligence-and-machine-learning",
      },
      {
        name: "BCA Hons. — Cyber Security",
        href: "/programs/school-of-computer-science-and-engineering/bca-cyber-security",
      },
      {
        name: "BCA Hons. — Data Science & Business Analytics",
        href: "/programs/school-of-computer-science-and-engineering/bca-data-science-and-business-analytics",
      },
      {
        name: "MCA",
        href: "/programs/school-of-computer-science-and-engineering/mca",
      },
      {
        name: "Ph.D. — Computer Applications",
        href: "/phd-computer-application",
      },
    ],
  },

  {
    id: "business",
    number: "03",
    title: "Business Management",
    shortTitle: "Business Management",
    description:
      "Develop business leaders with specialised pathways across management, finance, marketing, human resources, entrepreneurship and emerging business technologies.",
    schoolHref:
      "/programs/school-of-commerce-and-business-management",
    programs: [
      {
        name: "BBA Hons. — Bachelor of Business Administration",
        href: "/programs/school-of-commerce-and-business-management/bba",
      },
      {
        name: "BBA Hons. — International Accounting with ACCA UK",
        href: "/programs/school-of-commerce-and-business-management/bba-international-accounting",
      },
      {
        name: "BBA Hons. — Human Resource Management",
        href: "/programs/school-of-commerce-and-business-management/bba-human-resource-management",
      },
      {
        name: "BBA Hons. — Import & Export Management",
        href: "/programs/school-of-commerce-and-business-management/bba-export-and-import-management",
      },
      {
        name: "BBA Hons. — Banking & Finance",
        href: "/programs/school-of-commerce-and-business-management/bba-banking-and-finance",
      },
      {
        name: "BBA Hons. — Marketing",
        href: "/programs/school-of-commerce-and-business-management/bba-marketing",
      },
      {
        name: "BBA Hons. — FinTech",
        href: "/programs/school-of-commerce-and-business-management/bba-fintech",
      },
      {
        name: "BBA Hons. — Artificial Intelligence & Data Analytics",
        href: "/programs/school-of-commerce-and-business-management/bba-artificial-intelligence-and-data-analytics",
      },
      {
        name: "BBA Hons. — Digital Marketing",
        href: "/programs/school-of-commerce-and-business-management/bba-digital-marketing",
      },
      {
        name: "BBA Hons. — Entrepreneurship and Family Business",
      },
      {
        name: "MBA — AI For Business",
        href: "/programs/school-of-commerce-and-business-management/mba-ai-for-business",
      },
      {
        name: "MBA — Digital Marketing",
        href: "/programs/school-of-commerce-and-business-management/mba-digital-marketing",
      },
      {
        name: "MBA — Finance",
        href: "/programs/school-of-commerce-and-business-management/mba-finance",
      },
      {
        name: "MBA — Marketing",
        href: "/programs/school-of-commerce-and-business-management/mba-marketing",
      },
      {
        name: "MBA — Human Resource Management",
        href: "/programs/school-of-commerce-and-business-management/mba-human-resource-management",
      },
      {
        name: "MBA — Supply Chain Management",
        href: "/programs/school-of-commerce-and-business-management/mba-supply-chain-management-and-logistics",
      },
      {
        name: "MBA — Entrepreneurship and Family Business",
        href: "/programs/school-of-commerce-and-business-management/mba-entrepreneurship-family-business",
      },
      {
        name: "Ph.D. — Business & Management",
        href: "/phd-management",
      },
    ],
  },

  {
    id: "commerce",
    number: "04",
    title: "Commerce",
    shortTitle: "Commerce",
    description:
      "Explore accounting, taxation, banking, insurance and international accounting through industry-oriented commerce education.",
    schoolHref:
      "/programs/school-of-commerce-and-business-management",
    programs: [
      {
        name: "B.Com. Hons. — Bachelor of Commerce",
        href: "/programs/school-of-commerce-and-business-management/bcom",
      },
      {
        name: "B.Com. Hons. — Auditing & Taxation",
        href: "/programs/school-of-commerce-and-business-management/bcom-auditing-and-taxation",
      },
      {
        name: "B.Com. Hons. — Banking & Insurance",
        href: "/programs/school-of-commerce-and-business-management/bcom-banking-and-insurance",
      },
      {
        name: "B.Com. Hons. — Advanced Accounting",
      },
      {
        name: "B.Com. Hons. — International Accounting with ACCA UK",
        href: "/programs/school-of-commerce-and-business-management/bcom-international-accounting",
      },
      {
        name: "M.Com.",
        href: "/programs/school-of-commerce-and-business-management/mcom",
      },
      {
        name: "Ph.D. — Commerce",
        href: "/phd-commerce",
      },
    ],
  },

  {
    id: "pharmacy",
    number: "05",
    title: "Pharmacy",
    shortTitle: "Pharmacy",
    description:
      "Build knowledge across pharmaceutical sciences, pharmaceutics and professional pharmacy practice.",
    schoolHref:
      "/programs/geeta-institute-of-pharmacy",
    programs: [
      {
        name: "D.Pharm. — Diploma in Pharmacy",
        href: "/programs/geeta-institute-of-pharmacy/d-pharmacy",
      },
      {
        name: "B.Pharm. — Bachelor of Pharmacy",
        href: "/programs/geeta-institute-of-pharmacy/b-pharmacy",
      },
      {
        name: "M.Pharm. — Pharmaceutics",
        href: "/programs/geeta-institute-of-pharmacy/m-pharmacy-in-pharmaceutics",
      },
      {
        name: "Ph.D. — Pharmaceutical Sciences",
        href: "/phd-pharmacy",
      },
    ],
  },

  {
    id: "agriculture",
    number: "06",
    title: "Agricultural Sciences",
    shortTitle: "Agriculture",
    description:
      "Study agriculture through scientific, sustainable and research-driven approaches to modern agricultural practices.",
    schoolHref:
      "/programs/school-of-agricultural-studies",
    programs: [
      {
        name: "B.Sc. Hons. — Agriculture",
        href: "/programs/school-of-agricultural-studies/bsc-agriculture",
      },
      {
        name: "M.Sc. Agriculture — Agronomy",
        href: "/programs/school-of-agricultural-studies/msc-agriculture-agronomy",
      },
      {
        name: "Ph.D. — Agriculture",
        href: "/phd-agriculture",
      },
    ],
  },

  {
    id: "law",
    number: "07",
    title: "Law",
    shortTitle: "Law",
    description:
      "Develop legal knowledge and professional capabilities through undergraduate, postgraduate and doctoral study.",
    schoolHref:
      "/programs/geeta-global-law-school",
    programs: [
      {
        name: "BA. LL.B.*",
      },
      {
        name: "BBA LL.B.*",
      },
      {
        name: "Master of Law — LLM",
        href: "/programs/geeta-global-law-school/llm",
      },
      {
        name: "Ph.D. — Law",
        href: "/phd-law",
      },
    ],
  },

  {
    id: "hospitality",
    number: "08",
    title: "Hospitality & Hotel Management",
    shortTitle: "Hospitality",
    description:
      "Prepare for careers across hospitality, hotel operations and tourism through professional and specialised education.",
    schoolHref:
      "/programs/school-of-hospitality-and-hotel-management",
    programs: [
      {
        name: "Diploma in Hotel Management",
        href: "/programs/school-of-hospitality-and-hotel-management/diploma-in-hotel-management",
      },
      {
        name: "B.Sc. Hons. — Hotel Management",
        href: "/programs/school-of-hospitality-and-hotel-management/bsc-hotel-management",
      },
      {
        name: "M.Sc. — Hotel Management",
      },
      {
        name: "Ph.D. — Hotel & Tourism Management",
      },
    ],
  },

  {
    id: "nutrition",
    number: "09",
    title: "Nutrition & Dietetics",
    shortTitle: "Nutrition",
    description:
      "Explore nutrition science, dietetics and health-focused research through undergraduate, postgraduate and doctoral programmes.",
    schoolHref:
      "/programs/school-of-health-and-allied-sciences",
    programs: [
      {
        name: "B.Sc. Hons. — Nutrition & Dietetics",
        href: "/programs/school-of-health-and-allied-sciences/bsc-nutrition-and-dietetics",
      },
      {
        name: "M.Sc. — Nutrition & Dietetics",
        href: "/programs/school-of-health-and-allied-sciences/msc-nutrition-and-dietetics",
      },
      {
        name: "Ph.D. — Nutrition & Dietetics",
        href: "/phd-nutrition-and-dietetics",
      },
    ],
  },

  {
    id: "humanities",
    number: "10",
    title: "Humanities & Social Sciences",
    shortTitle: "Humanities",
    description:
      "Understand society, people, economics, politics and culture through interdisciplinary humanities and social science education.",
    schoolHref:
      "/programs/school-of-humanities-and-social-science",
    programs: [
      {
        name: "B.Sc. Hons. — Psychology",
        href: "/bsc-psychology",
      },
      {
        name: "B.A. Hons.",
      },
      {
        name: "B.A. Hons. — Political Science",
        href: "/programs/school-of-humanities-and-social-science/ba-political-science",
      },
      {
        name: "B.A. Hons. — Economics",
        href: "/programs/school-of-humanities-and-social-science/ba-economics",
      },
      {
        name: "B.A. Hons. — Psychology",
        href: "/programs/school-of-humanities-and-social-science/ba-psychology",
      },
      {
        name: "B.A. Hons. — English",
      },
      {
        name: "M.A. — Political Science",
      },
      {
        name: "M.A. — Psychology",
      },
      {
        name: "M.A. — English",
      },
      {
        name: "M.A. — Economics",
      },
      {
        name: "Ph.D. — Psychology",
        href: "/phd-psychology",
      },
      {
        name: "Ph.D. — Political Science",
        href: "/phd-political-science",
      },
    ],
  },

  {
    id: "forensic",
    number: "11",
    title: "Forensic Science",
    shortTitle: "Forensic Science",
    description:
      "Combine scientific investigation, analytical thinking and evidence-based approaches to explore the world of forensic sciences.",
    schoolHref: "/programs/school-of-forensic-sciences",
    programs: [
      {
        name: "B.Sc. Hons. — Forensic Sciences",
        href: "/programs/school-of-forensic-sciences/bsc-forensic-science",
      },
      {
        name: "M.Sc. — Forensic Sciences",
        href: "/programs/school-of-forensic-sciences/msc-forensic-science",
      },
      {
        name: "Ph.D. — Forensic Sciences",
        href: "/phd-forensic-science",
      },
    ],
  },

  {
    id: "nursing",
    number: "12",
    title: "Nursing",
    shortTitle: "Nursing",
    description:
      "Professional healthcare education focused on developing skilled and compassionate nursing professionals.",
    programs: [
      {
        name: "B.Sc. Nursing*",
      },
      {
        name: "GNM — General Nursing & Midwifery*",
      },
    ],
  },
];

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function HomeProgramsSection() {
  const [activeCategory, setActiveCategory] = useState("cse");

  const activeProgramCategory =
    programCategories.find((category) => category.id === activeCategory) ??
    programCategories[0];

  return (
    <section
      aria-labelledby="programs-heading"
      className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-24"
    >
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full opacity-10 blur-3xl"
        style={{
          backgroundColor: "var(--gu-gold)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="mx-auto max-w-3xl text-center"
          >
            <p
              className="text-sm font-bold uppercase tracking-[0.25em]"
              style={{
                color: "var(--gu-gold)",
              }}
            >
              Academic Excellence
            </p>

            <h2
              id="programs-heading"
              className="mt-3 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
              style={{
                color: "var(--gu-navy)",
              }}
            >
              Programs Offered
            </h2>

            <div
              className="mx-auto mt-5 h-1 w-16 rounded-full"
              style={{
                backgroundColor: "var(--gu-gold)",
              }}
            />

            <p
              className="mx-auto mt-6 max-w-2xl text-base leading-8 sm:text-lg"
              style={{
                color: "var(--gu-text-muted)",
              }}
            >
              Discover 70+ study programmes across Diploma, Undergraduate,
              Postgraduate and Ph.D. levels designed for the careers of
              tomorrow.
            </p>
          </motion.div>

          {/* Main explorer */}
          <motion.div
            variants={itemVariants}
            className="mt-12 overflow-hidden rounded-3xl border bg-white shadow-sm md:mt-16"
            style={{
              borderColor: "rgba(6, 53, 95, 0.10)",
            }}
          >
            <div className="grid lg:grid-cols-[0.85fr_1.5fr]">
              {/* Category navigation */}
              <div
                className="border-b lg:border-b-0 lg:border-r"
                style={{
                  borderColor: "rgba(6, 53, 95, 0.10)",
                  backgroundColor: "var(--gu-bg)",
                }}
              >
                <div className="p-4 sm:p-6">
                  <p
                    className="mb-4 px-3 text-xs font-bold uppercase tracking-[0.2em]"
                    style={{
                      color: "var(--gu-text-muted)",
                    }}
                  >
                    Explore Schools
                  </p>

                  <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
                    {programCategories.map((category) => {
                      const isActive = category.id === activeCategory;

                      return (
                        <button
                          key={category.id}
                          type="button"
                          onClick={() => setActiveCategory(category.id)}
                          aria-pressed={isActive}
                          className="group flex items-center gap-3 rounded-xl px-3 py-3 text-left transition-all duration-200 sm:px-4"
                          style={{
                            backgroundColor: isActive
                              ? "var(--gu-navy)"
                              : "transparent",
                            color: isActive
                              ? "white"
                              : "var(--gu-navy)",
                          }}
                        >
                          <span
                            className="text-xs font-bold"
                            style={{
                              color: isActive
                                ? "var(--gu-gold)"
                                : "var(--gu-text-muted)",
                            }}
                          >
                            {category.number}
                          </span>

                          <span className="text-xs font-semibold sm:text-sm">
                            {category.shortTitle}
                          </span>

                          {/* Arrow hidden by default, visible on hover */}
                          <span
                            className="ml-auto hidden opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100 sm:flex items-center"
                            style={{
                              color: "var(--gu-gold)",
                            }}
                          >
                            <ArrowRight size={16} />
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Program details */}
              <div className="p-6 sm:p-8 lg:p-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProgramCategory.id}
                    initial={{
                      opacity: 0,
                      x: 18,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: -18,
                    }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                  >
                    <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
                      <div>
                        <h3
                          className="mt-2 font-serif text-3xl font-bold leading-tight sm:text-4xl"
                          style={{
                            color: "var(--gu-navy)",
                          }}
                        >
                          {activeProgramCategory.title}
                        </h3>

                        <p
                          className="mt-4 max-w-2xl text-sm leading-7 sm:text-base"
                          style={{
                            color: "var(--gu-text-muted)",
                          }}
                        >
                          {activeProgramCategory.description}
                        </p>
                      </div>

                      <div
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                        style={{
                          backgroundColor: "rgba(232, 135, 26, 0.10)",
                          color: "var(--gu-gold)",
                        }}
                      >
                        <span className="font-serif text-xl font-bold">
                          {activeProgramCategory.number}
                        </span>
                      </div>
                    </div>

                    {/* Programs */}
                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      {activeProgramCategory.programs.map((program, index) => {
                        const isLink = !!program.href;

                        const content = (
                          <>
                            <span
                              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors duration-200 ${
                                isLink
                                  ? "group-hover:bg-[var(--gu-gold)] group-hover:text-white"
                                  : ""
                              }`}
                              style={{
                                backgroundColor: "rgba(6, 53, 95, 0.07)",
                                color: "var(--gu-navy)",
                              }}
                            >
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <span
                              className={`flex-1 text-sm font-semibold leading-6 transition-colors duration-200 ${
                                isLink ? "group-hover:text-[var(--gu-gold)]" : ""
                              }`}
                            >
                              {program.name}
                            </span>

                            {isLink && (
                              <span
                                className="opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100 flex items-center"
                                style={{
                                  color: "var(--gu-gold)",
                                }}
                              >
                                <ArrowRight size={16} />
                              </span>
                            )}
                          </>
                        );

                        if (isLink) {
                          return (
                            <Link
                              key={program.name}
                              href={program.href as string}
                              className="group flex items-center gap-3 rounded-2xl border bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                              style={{
                                borderColor: "rgba(6, 53, 95, 0.10)",
                                color: "var(--gu-navy)",
                              }}
                            >
                              {content}
                            </Link>
                          );
                        }

                        return (
                          <div
                            key={program.name}
                            className="flex items-center gap-3 rounded-2xl border bg-white p-4"
                            style={{
                              borderColor: "rgba(6, 53, 95, 0.08)",
                              color: "var(--gu-navy)",
                            }}
                          >
                            {content}
                          </div>
                        );
                      })}
                    </div>

                    {/* School CTA */}
                    {activeProgramCategory.schoolHref && (
                      <div className="mt-8 flex flex-col gap-4 border-t pt-7 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p
                            className="text-xs font-bold uppercase tracking-[0.16em]"
                            style={{
                              color: "var(--gu-text-muted)",
                            }}
                          >
                            Want to explore more?
                          </p>

                          <p
                            className="mt-1 text-sm font-semibold"
                            style={{
                              color: "var(--gu-navy)",
                            }}
                          >
                            View the complete school offering.
                          </p>
                        </div>

                        <Link
                          href={activeProgramCategory.schoolHref}
                          className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                          style={{
                            backgroundColor: "var(--gu-navy)",
                            color: "#ffffff",
                          }}
                        >
                          Explore School
                        </Link>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Bottom note */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:flex-row"
          >
            <span
              className="h-px w-10"
              style={{
                backgroundColor: "rgba(6, 53, 95, 0.15)",
              }}
            />

            <p
              className="text-xs font-semibold uppercase tracking-[0.16em]"
              style={{
                color: "var(--gu-text-muted)",
              }}
            >
              Diploma • Undergraduate • Postgraduate • Ph.D.
            </p>

            <span
              className="h-px w-10"
              style={{
                backgroundColor: "rgba(6, 53, 95, 0.15)",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}