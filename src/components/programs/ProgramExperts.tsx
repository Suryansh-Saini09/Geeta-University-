"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { ProgramPageData, ExpertCategoryItem } from "@/data/programs/types";
import { getProgramIcon } from "./iconHelper";

interface ProgramExpertsProps {
  experts?: ProgramPageData["experts"];
}

const defaultExperts: NonNullable<ProgramPageData["experts"]> = {
  eyebrow: "Faculty & Mentorship Streams",
  title: "Learn from 5 Categories of Experts",
  intro: "A layered learning ecosystem where academic depth, professional readiness, technical fluency, and industry insight come together seamlessly.",
  feature: {
    kicker: "Curated Mentorship",
    title: "Five expert streams. One confident graduate.",
    description: "Students learn from faculty, technologists, finishing-school coaches, and industry practitioners so classroom concepts turn into workplace capability.",
    stats: [
      { value: "5", label: "Expert categories shaping the curriculum" },
      { value: "360°", label: "Academic, technical, and career readiness" },
    ],
  },
  categories: [
    {
      number: 1,
      title: "Core Discipline Faculty",
      subtitle: "Building Strong Management & Academic Foundations",
      points: [
        "Experienced academicians and researchers",
        "Domain and industry-aligned mentors",
        "Case-based and project-driven learning",
        "Continuous personal and career guidance",
      ],
      iconName: "TrendingUp",
      ribbon: "#0A1F44",
    },
    {
      number: 2,
      title: "Interdisciplinary Faculty",
      subtitle: "Learning Beyond Single Disciplines",
      points: [
        "Faculty from diverse allied domains",
        "Exposure to Technology, Psychology & Design Thinking",
        "Cross-functional problem-solving approach",
        "Broader perspective for modern challenges",
      ],
      iconName: "Users",
      ribbon: "#0F2A56",
    },
    {
      number: 3,
      title: "Geeta Technical Hub (GTH)",
      subtitle: "Future-Ready Technical Skills",
      points: [
        "Hands-on workshops and live technology projects",
        "AI, Generative AI & Automation Tools",
        "Data Analytics & Computational Fluency",
        "Modern digital certifications",
      ],
      iconName: "GraduationCap",
      ribbon: "#1B4B8F",
    },
    {
      number: 4,
      title: "Geeta Finishing School",
      subtitle: "Career Readiness & Professional Development",
      points: [
        "Communication and corporate etiquette",
        "Aptitude, reasoning, and analytical skills",
        "Personality development and confidence building",
        "Interview and placement preparation",
      ],
      iconName: "BookOpen",
      ribbon: "#2E63B8",
    },
    {
      number: 5,
      title: "Industry Practitioners",
      subtitle: "Learning Directly from Industry",
      points: [
        "Corporate leaders and domain specialists",
        "Industry-aligned, practical exposure",
        "Entrepreneurship and startup insights",
        "Live industrial case studies and guest masterclasses",
      ],
      iconName: "HardHat",
      ribbon: "#5B8FD9",
    },
  ],
};

function ExpertCard({ category }: { category: ExpertCategoryItem }) {
  const Icon = getProgramIcon(category.iconName);
  const formattedNumber = (category.number ?? 1).toString().padStart(2, "0");

  return (
    <article className="expert-card group">
      <div className="expert-card-topline" style={{ backgroundColor: category.ribbon || "#0A1F44" }} />
      <div className="expert-card-header">
        <div className="expert-card-icon">
          <Icon className="w-[20px] h-[20px]" strokeWidth={2} />
        </div>
        <span className="expert-card-number">{formattedNumber}</span>
      </div>
      <div className="expert-card-copy">
        <h3>{category.title}</h3>
        <p>{category.subtitle}</p>
      </div>
      <ul>
        {category.points?.map((point: string, i: number) => (
          <li key={i}>
            <Check className="w-[14px] h-[14px]" strokeWidth={3} />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function ProgramExperts({ experts }: ProgramExpertsProps) {
  const data = experts || defaultExperts;
  const eyebrow = data.eyebrow || defaultExperts.eyebrow;
  const title = data.title || defaultExperts.title;
  const intro = data.intro || defaultExperts.intro;
  const feature = data.feature || defaultExperts.feature;
  const categories = data.categories && data.categories.length > 0 ? data.categories : defaultExperts.categories;

  return (
    <section className="scbm-experts-section">
      <style>{`
        .scbm-experts-section {
          width: 100%;
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(135deg, rgba(248, 243, 233, 0.96), rgba(255, 255, 255, 0.98) 42%, rgba(244, 248, 252, 0.96)),
            #fbf8f1;
          padding: 88px 0 96px;
          font-family: "Source Sans 3", sans-serif;
        }
        .scbm-experts-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(13, 48, 83, 0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(13, 48, 83, 0.045) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: linear-gradient(to bottom, transparent, black 16%, black 82%, transparent);
          pointer-events: none;
        }
        .scbm-experts-shell {
          width: min(100% - 48px, 1180px);
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .scbm-experts-heading {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(320px, 0.7fr);
          gap: 42px;
          align-items: end;
          margin-bottom: 34px;
        }
        .scbm-experts-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #bf7a19;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .scbm-experts-eyebrow::before {
          content: "";
          width: 42px;
          height: 1px;
          background: #bf7a19;
        }
        .scbm-experts-title {
          margin: 0;
          color: #082b53;
          font-family: "Zilla Slab", serif;
          font-size: clamp(34px, 4vw, 54px);
          line-height: 1.05;
          font-weight: 800;
          letter-spacing: 0;
        }
        .scbm-experts-title span {
          color: #c7831f;
        }
        .scbm-experts-intro {
          margin: 0;
          color: #536176;
          font-size: 17px;
          line-height: 1.65;
          max-width: 460px;
        }
        .scbm-experts-layout {
          display: grid;
          grid-template-columns: 0.78fr 1.22fr;
          gap: 24px;
          align-items: stretch;
        }
        .scbm-experts-feature {
          position: relative;
          min-height: 100%;
          border-radius: 26px;
          padding: 34px;
          background: #082b53;
          color: #fff;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(8, 43, 83, 0.18);
        }
        .scbm-experts-feature::before {
          content: "";
          position: absolute;
          width: 280px;
          height: 280px;
          right: -100px;
          top: -90px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.16);
        }
        .scbm-experts-feature::after {
          content: "";
          position: absolute;
          inset: auto 28px 28px auto;
          width: 92px;
          height: 92px;
          border-radius: 999px;
          background: rgba(216, 154, 43, 0.16);
          filter: blur(2px);
        }
        .scbm-experts-feature-content {
          position: relative;
          z-index: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .scbm-experts-feature-kicker {
          width: fit-content;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 999px;
          padding: 8px 14px;
          color: #f5c46d;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 34px;
        }
        .scbm-experts-feature h3 {
          margin: 0;
          max-width: 330px;
          font-family: "Zilla Slab", serif;
          font-size: clamp(28px, 3vw, 42px);
          line-height: 1.08;
          font-weight: 800;
          letter-spacing: 0;
        }
        .scbm-experts-feature p {
          margin: 18px 0 0;
          color: rgba(255, 255, 255, 0.76);
          font-size: 16px;
          line-height: 1.7;
        }
        .scbm-experts-stat-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin-top: auto;
          padding-top: 34px;
        }
        .scbm-experts-stat {
          border-top: 1px solid rgba(255, 255, 255, 0.18);
          padding-top: 14px;
        }
        .scbm-experts-stat strong {
          display: block;
          color: #f5c46d;
          font-family: "Zilla Slab", serif;
          font-size: 34px;
          line-height: 1;
        }
        .scbm-experts-stat span {
          display: block;
          margin-top: 6px;
          color: rgba(255, 255, 255, 0.72);
          font-size: 13px;
          line-height: 1.35;
        }
        .scbm-experts-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }
        .expert-card {
          position: relative;
          min-height: 244px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.86);
          border: 1px solid rgba(8, 43, 83, 0.08);
          box-shadow: 0 16px 42px rgba(8, 43, 83, 0.08);
          padding: 22px;
          overflow: hidden;
          transition: transform 320ms ease, box-shadow 320ms ease, border-color 320ms ease;
        }
        .expert-card:hover {
          transform: translateY(-5px);
          border-color: rgba(191, 122, 25, 0.28);
          box-shadow: 0 22px 54px rgba(8, 43, 83, 0.12);
        }
        .expert-card-topline {
          position: absolute;
          inset: 0 auto auto 0;
          width: 100%;
          height: 4px;
          opacity: 0.8;
        }
        .expert-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .expert-card-icon {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          color: #0d4c8e;
          background: #f3f7fb;
          border: 1px solid rgba(8, 43, 83, 0.08);
        }
        .expert-card-number {
          color: rgba(8, 43, 83, 0.16);
          font-family: "Zilla Slab", serif;
          font-size: 34px;
          font-weight: 800;
          line-height: 1;
        }
        .expert-card-copy h3 {
          margin: 0;
          color: #082b53;
          font-family: "Zilla Slab", serif;
          font-size: 23px;
          line-height: 1.16;
          font-weight: 800;
          letter-spacing: 0;
        }
        .expert-card-copy p {
          margin: 8px 0 16px;
          color: #b16f16;
          font-size: 14px;
          font-weight: 800;
          line-height: 1.35;
        }
        .expert-card ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 8px;
        }
        .expert-card li {
          display: flex;
          gap: 8px;
          align-items: flex-start;
          color: #536176;
          font-size: 14px;
          line-height: 1.42;
          font-weight: 500;
        }
        .expert-card li svg {
          color: #c7831f;
          flex: 0 0 auto;
          margin-top: 3px;
        }
        @media (max-width: 1024px) {
          .scbm-experts-heading,
          .scbm-experts-layout {
            grid-template-columns: 1fr;
          }
          .scbm-experts-intro {
            max-width: 760px;
          }
          .scbm-experts-feature {
            min-height: 360px;
          }
        }
        @media (max-width: 720px) {
          .scbm-experts-section {
            padding: 66px 0 74px;
          }
          .scbm-experts-shell {
            width: min(100% - 32px, 1180px);
          }
          .scbm-experts-heading {
            gap: 18px;
            margin-bottom: 26px;
          }
          .scbm-experts-grid {
            grid-template-columns: 1fr;
          }
          .scbm-experts-feature {
            padding: 26px;
            min-height: 0;
          }
          .scbm-experts-stat-row {
            grid-template-columns: 1fr;
            padding-top: 26px;
          }
        }
      `}</style>

      <div className="scbm-experts-shell">
        <motion.div
          className="scbm-experts-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div>
            <div className="scbm-experts-eyebrow">{eyebrow}</div>
            <h2 className="scbm-experts-title">
              {title}
            </h2>
          </div>
          {intro && (
            <p className="scbm-experts-intro">
              {intro}
            </p>
          )}
        </motion.div>

        <div className="scbm-experts-layout">
          {/* Left Feature Card */}
          <motion.div
            className="scbm-experts-feature"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="scbm-experts-feature-content">
              <div className="scbm-experts-feature-kicker">{feature?.kicker || "Curated Mentorship"}</div>
              <h3>{feature?.title || "Five expert streams. One confident graduate."}</h3>
              <p>
                {feature?.description || "Students learn from faculty, technologists, finishing-school coaches, and industry practitioners so classroom concepts turn into workplace capability."}
              </p>
              <div className="scbm-experts-stat-row">
                {feature?.stats?.map((stat: { value: string; label: string }, i: number) => (
                  <div key={i} className="scbm-experts-stat">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Grid of Category Cards */}
          <div className="scbm-experts-grid">
            {categories.map((category: ExpertCategoryItem, index: number) => (
              <motion.div
                key={category.title || index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.48, delay: index * 0.06, ease: "easeOut" }}
              >
                <ExpertCard category={category} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
