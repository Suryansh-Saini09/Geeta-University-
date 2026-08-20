"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  Building2,
  BriefcaseBusiness,
  ChartNoAxesColumnIncreasing,
  PieChart,
} from "lucide-react";
import type { ProgramPageData } from "@/data/programs/types";
import { getProgramIcon } from "./iconHelper";

interface ProgramPlacementProps {
  placement?: ProgramPageData["placement"];
}

const defaultStats = [
  { value: "40 LPA", label: "Highest Package", iconName: "Award" },
  { value: "550+", label: "Recruiters", iconName: "Building2" },
  { value: "3500+", label: "Job Offers", iconName: "BriefcaseBusiness" },
];

const defaultRecruiters = [
  { name: "amazon", color: "#232f3e", logo: "/images/recruiters/amazon.png" },
  { name: "IndiaMART", color: "#1b2b66", logo: "/images/recruiters/indiamart.png" },
  { name: "upGrad", color: "#ef3340", logo: "/images/recruiters/upgrad.png" },
  { name: "zomato", color: "#e23744", logo: "/images/recruiters/zomato.png" },
  { name: "ProGrad", color: "#1c6dd0", logo: "/images/recruiters/prograd.png" },
  { name: "PHILIPS", color: "#1476bd", logo: "/images/recruiters/philips.png" },
  { name: "Central Park", color: "#d6a800", logo: "/images/recruiters/central-park.png" },
  { name: "Profunnel", color: "#168acb", logo: null },
  { name: "Ubiquiti", color: "#5b6978", logo: "/images/recruiters/ubiquiti.png" },
  { name: "Gemini Solutions", color: "#a83cb6", logo: "/images/recruiters/gemini-solutions.png" },
  { name: "Chegg", color: "#ef6c00", logo: "/images/recruiters/chegg.png" },
  { name: "jaro education", color: "#5c6b7a", logo: "/images/recruiters/jaro-education.png" },
  { name: "policybazaar", color: "#2b66c2", logo: "/images/recruiters/policybazaar.png" },
  { name: "Aditya Birla Capital", color: "#c4242d", logo: "/images/recruiters/aditya-birla-capital.png" },
  { name: "Axis Bank", color: "#9d245d", logo: null },
  { name: "HDFC Life", color: "#d71f26", logo: "/images/recruiters/hdfc-life.png" },
  { name: "paytm", color: "#1d4f9a", logo: "/images/recruiters/paytm.png" },
  { name: "Bajaj Capital", color: "#e32126", logo: "/images/recruiters/bajaj-capital.png" },
];

const defaultPackageBars = [
  { label: "Upto 4 LPA", value: 153, width: "100%" },
  { label: "₹4-6 LPA", value: 65, width: "42%" },
  { label: "₹6-8 LPA", value: 31, width: "20%" },
  { label: "₹8-10 LPA", value: 31, width: "20%" },
];

const defaultSectorLegend = [
  { label: "Sales & Marketing", value: "42.3%", color: "#f2ad00" },
  { label: "HR & Operations", value: "16.4%", color: "#ef6a22" },
  { label: "IT & Software", value: "13.2%", color: "#ef2856" },
  { label: "Core Engineering", value: "10.0%", color: "#df4ab3" },
  { label: "Finance & Accounting", value: "8.9%", color: "#25aee4" },
  { label: "Others", value: "3.2%", color: "#16b6bf" },
  { label: "Digital Marketing", value: "2.8%", color: "#74c84a" },
  { label: "Healthcare Consulting", value: "2.1%", color: "#f0cf1c" },
  { label: "Education", value: "1.1%", color: "#f5a623" },
];

export default function ProgramPlacement({ placement }: ProgramPlacementProps) {
  const eyebrow = placement?.eyebrow || "Placements & Careers";
  const title = placement?.title || "Placement Excellence Speaks for Itself";
  const subtitle = placement?.subtitle || "A career-focused academic ecosystem backed by strong recruiter relationships, consistent offers, and industry-ready student preparation.";
  const heroImage = placement?.heroImage || "/uniimage.webp";
  const heroNoteTitle = placement?.heroNoteTitle || "Industry-ready graduates";
  const heroNoteText = placement?.heroNoteText || "Built through academic rigor, professional development, and placement-focused mentoring.";
  const stats = placement?.stats && placement.stats.length > 0 ? placement.stats : defaultStats;
  const recruiters = placement?.recruiters && placement.recruiters.length > 0 ? placement.recruiters : defaultRecruiters;
  const avgPackage = placement?.avgPackage || "₹4.39 LPA";
  const avgPackageNote = placement?.avgPackageNote || "Reflecting balanced career growth and wide industry acceptance of Geeta University graduates.";
  const packageBars = placement?.packageBars && placement.packageBars.length > 0 ? placement.packageBars : defaultPackageBars;
  const disclaimer = placement?.disclaimer || "Disclaimer: Placement data shared is representative. Current academic session placement drives remain in active progress.";
  const sectorChartImage = placement?.sectorChartImage || "/chart.png";
  const sectorLegend = placement?.sectorLegend && placement.sectorLegend.length > 0 ? placement.sectorLegend : defaultSectorLegend;

  return (
    <section id="PlacementExcellence" className="placement-page">
      <style>{`
        .placement-page {
          --placement-navy: #0F2D52;
          --placement-blue: #1E4E8C;
          --placement-gold: #D89A2B;
          --placement-bg: #F8FAFC;
          --placement-white: #FFFFFF;
          --placement-border: #E8EDF4;
          --placement-text: #1B2B45;
          --placement-muted: #5E6B82;
          background: var(--placement-white);
          color: var(--placement-text);
          font-family: 'Source Sans 3', sans-serif;
        }
        .placement-container {
          width: min(1280px, calc(100% - 48px));
          margin: 0 auto;
        }
        .placement-section {
          padding: 100px 0;
        }
        .placement-eyebrow {
          color: var(--placement-gold);
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.2em;
          line-height: 1;
          text-transform: uppercase;
        }
        .placement-eyebrow::before {
          content: "";
          width: 34px;
          height: 2px;
          border-radius: 999px;
          background: var(--placement-gold);
        }
        .placement-hero {
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(90deg, rgba(15,45,82,0.035) 1px, transparent 1px),
            linear-gradient(rgba(15,45,82,0.035) 1px, transparent 1px),
            var(--placement-white);
          background-size: 48px 48px;
          padding: 110px 0 100px;
        }
        .placement-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(420px, 0.9fr);
          align-items: center;
          gap: 72px;
        }
        .placement-hero h2 {
          margin: 22px 0 0;
          max-width: 760px;
          color: var(--placement-navy);
          font-family: 'Zilla Slab', serif;
          font-size: clamp(38px, 4.5vw, 60px);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.05;
        }
        .placement-hero h2 span {
          color: var(--placement-blue);
        }
        .placement-hero-copy {
          max-width: 820px;
        }
        .placement-hero-copy p {
          max-width: 720px;
          margin-top: 26px;
          color: var(--placement-muted);
          font-size: 18px;
          font-weight: 500;
          line-height: 1.7;
        }
        .placement-hero-visual {
          position: relative;
        }
        .placement-image-frame {
          position: relative;
          overflow: hidden;
          min-height: 460px;
          border: 1px solid var(--placement-border);
          border-radius: 28px;
          background: var(--placement-bg);
          box-shadow: 0 24px 70px rgba(15, 45, 82, 0.12);
        }
        .placement-image-frame::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 42%, rgba(15,45,82,0.56));
        }
        .placement-hero-note {
          position: absolute;
          right: 28px;
          bottom: 28px;
          z-index: 2;
          max-width: 270px;
          border: 1px solid rgba(255,255,255,0.24);
          border-radius: 20px;
          background: rgba(255,255,255,0.92);
          padding: 22px;
          box-shadow: 0 18px 45px rgba(15, 45, 82, 0.16);
          backdrop-filter: blur(14px);
        }
        .placement-hero-note strong {
          display: block;
          color: var(--placement-navy);
          font-size: 16px;
          font-weight: 800;
          line-height: 1.25;
        }
        .placement-hero-note span {
          display: block;
          margin-top: 8px;
          color: var(--placement-muted);
          font-size: 13px;
          font-weight: 600;
          line-height: 1.55;
        }
        .placement-section-head {
          max-width: 760px;
          margin: 0 auto 48px;
          text-align: center;
        }
        .placement-section-head h3 {
          margin-top: 14px;
          color: var(--placement-navy);
          font-family: 'Zilla Slab', serif;
          font-size: clamp(30px, 3.5vw, 40px);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.15;
        }
        .placement-section-head p {
          margin: 18px auto 0;
          color: var(--placement-muted);
          font-size: 18px;
          font-weight: 500;
          line-height: 1.7;
        }
        .placement-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 28px;
        }
        .placement-stat-card {
          position: relative;
          overflow: hidden;
          min-height: 270px;
          border: 1px solid var(--placement-border);
          border-radius: 22px;
          background: var(--placement-white);
          padding: 42px;
          box-shadow: 0 10px 30px rgba(15,45,82,.08);
          transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease;
        }
        .placement-stat-card:hover,
        .placement-premium-card:hover {
          transform: translateY(-8px);
          border-color: rgba(216, 154, 43, 0.55);
          box-shadow: 0 18px 40px rgba(15,45,82,.12);
        }
        .placement-stat-icon {
          display: flex;
          width: 54px;
          height: 54px;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          color: var(--placement-white);
          background: linear-gradient(135deg,#0F2D52,#1E4E8C);
          box-shadow: 0 12px 26px rgba(15,45,82,.18);
        }
        .placement-stat-number {
          margin-top: 42px;
          color: var(--placement-navy);
          font-family: 'Zilla Slab', serif;
          font-size: clamp(40px, 4.2vw, 54px);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 0.95;
        }
        .placement-stat-label {
          margin-top: 14px;
          color: var(--placement-muted);
          font-size: 16px;
          font-weight: 700;
        }
        .placement-stat-bg {
          position: absolute;
          right: 28px;
          bottom: 16px;
          color: rgba(15,45,82,.055);
          font-family: 'Zilla Slab', serif;
          font-size: 112px;
          font-weight: 900;
          letter-spacing: -0.08em;
          line-height: 1;
        }
        .placement-recruiters-wrap {
          background: var(--placement-bg);
        }
        .placement-recruiter-grid {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 18px;
        }
        .placement-recruiter-card {
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--placement-border);
          border-radius: 18px;
          background: var(--placement-white);
          padding: 20px;
          transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease;
        }
        .placement-recruiter-card:hover {
          transform: translateY(-4px);
          border-color: rgba(216, 154, 43, 0.4);
          box-shadow: 0 12px 28px rgba(15,45,82,.08);
        }
        .placement-recruiter-name {
          font-size: 18px;
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1;
          text-align: center;
        }
        .placement-analytics-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
          gap: 32px;
          align-items: stretch;
        }
        .placement-premium-card {
          border: 1px solid var(--placement-border);
          border-radius: 24px;
          background: var(--placement-white);
          padding: 42px;
          box-shadow: 0 10px 30px rgba(15,45,82,.08);
          transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease;
        }
        .placement-card-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--placement-gold);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.18em;
          line-height: 1;
          text-transform: uppercase;
        }
        .placement-premium-card h3 {
          margin-top: 18px;
          color: var(--placement-navy);
          font-family: 'Zilla Slab', serif;
          font-size: clamp(26px, 2.8vw, 36px);
          font-weight: 800;
          letter-spacing: -0.025em;
          line-height: 1.15;
        }
        .placement-price {
          margin-top: 26px;
          color: var(--placement-blue);
          font-family: 'Zilla Slab', serif;
          font-size: clamp(44px, 4.8vw, 60px);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1;
        }
        .placement-card-copy {
          margin-top: 22px;
          color: var(--placement-muted);
          font-size: 17px;
          font-weight: 500;
          line-height: 1.7;
        }
        .placement-bars {
          display: grid;
          gap: 20px;
          margin-top: 38px;
        }
        .placement-bar-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          margin-bottom: 10px;
          color: var(--placement-text);
          font-size: 14px;
          font-weight: 800;
        }
        .placement-bar-track {
          height: 14px;
          overflow: hidden;
          border-radius: 999px;
          background: #EEF3F8;
        }
        .placement-bar-fill {
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(135deg,#0F2D52,#1E4E8C);
        }
        .placement-disclaimer {
          margin-top: 34px;
          border-radius: 18px;
          background: var(--placement-bg);
          padding: 18px 20px;
          color: var(--placement-muted);
          font-size: 13px;
          font-style: italic;
          font-weight: 600;
          line-height: 1.7;
        }
        .placement-sector-card {
          background: linear-gradient(135deg,#0F2D52,#1E4E8C);
          color: var(--placement-white);
        }
        .placement-sector-card h3 {
          color: var(--placement-white);
        }
        .placement-sector-card .placement-card-copy,
        .placement-sector-card .placement-card-kicker {
          color: rgba(255,255,255,.72);
        }
        .placement-sector-layout {
          display: grid;
          grid-template-columns: minmax(220px, 0.9fr) minmax(0, 1fr);
          gap: 34px;
          align-items: center;
          margin-top: 36px;
        }
        .placement-sector-legend {
          display: grid;
          gap: 16px;
        }
        .placement-legend-row {
          display: grid;
          grid-template-columns: 12px minmax(0, 1fr) auto;
          align-items: center;
          gap: 14px;
          color: rgba(255,255,255,.86);
          font-size: 14px;
          font-weight: 700;
        }
        .placement-legend-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        .placement-legend-value {
          color: var(--placement-white);
          font-weight: 800;
        }
        @media (max-width: 1024px) {
          .placement-section {
            padding: 70px 0;
          }
          .placement-hero {
            padding: 80px 0 70px;
          }
          .placement-hero-grid,
          .placement-analytics-grid {
            grid-template-columns: 1fr;
          }
          .placement-stats-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
          .placement-recruiter-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
          .placement-image-frame {
            min-height: 380px;
          }
        }
        @media (max-width: 760px) {
          .placement-container {
            width: min(100% - 32px, 1280px);
          }
          .placement-section {
            padding: 50px 0;
          }
          .placement-hero {
            padding: 64px 0 54px;
          }
          .placement-hero-grid {
            gap: 42px;
          }
          .placement-hero-copy p,
          .placement-section-head p,
          .placement-card-copy {
            font-size: 16px;
          }
          .placement-stats-grid,
          .placement-sector-layout {
            grid-template-columns: 1fr;
          }
          .placement-recruiter-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
          }
          .placement-stat-card,
          .placement-premium-card {
            padding: 28px;
          }
          .placement-stat-card {
            min-height: 230px;
          }
          .placement-image-frame {
            min-height: 320px;
          }
          .placement-hero-note {
            left: 18px;
            right: 18px;
            bottom: 18px;
            max-width: none;
          }
          .placement-recruiter-card {
            height: 108px;
          }
        }
        @media (max-width: 560px) {
          .placement-stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Hero Header */}
      <div className="placement-hero">
        <div className="placement-container placement-hero-grid">
          <motion.div
            className="placement-hero-copy"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <span className="placement-eyebrow">{eyebrow}</span>
            <h2>
              {title}
            </h2>
            <p>
              {subtitle}
            </p>
          </motion.div>

          <motion.div
            className="placement-hero-visual"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <div className="placement-image-frame">
              <Image
                src={heroImage}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
              <div className="placement-hero-note">
                <strong>{heroNoteTitle}</strong>
                <span>{heroNoteText}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Metric Cards */}
        <div className="placement-container placement-section" style={{ paddingBottom: 0 }}>
          <div className="placement-stats-grid">
            {stats.map((stat, index) => {
              const Icon = getProgramIcon(stat.iconName, Award);
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="placement-stat-card"
                >
                  <div className="placement-stat-icon">
                    <Icon className="h-7 w-7" strokeWidth={1.9} />
                  </div>
                  <p className="placement-stat-number">{stat.value}</p>
                  <p className="placement-stat-label">{stat.label}</p>
                  <span className="placement-stat-bg">0{index + 1}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Recruiters Wrap */}
      <div className="placement-recruiters-wrap">
        <div className="placement-container placement-section">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="placement-section-head"
          >
            <span className="placement-eyebrow">Top Recruiters</span>
            <h3>Trusted by leading global companies.</h3>
            <p>Industry-leading recruiters across management, finance, technology, research, healthcare, and global services.</p>
          </motion.div>

          <div className="placement-recruiter-grid">
            {recruiters.map((recruiter, index) => (
              <motion.div
                key={recruiter.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: (index % 6) * 0.03 }}
                className="placement-recruiter-card"
              >
                {recruiter.logo ? (
                  <div className="relative w-full h-full flex items-center justify-center p-2">
                    <Image
                      src={recruiter.logo}
                      alt={`${recruiter.name} logo`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100px, 150px"
                    />
                  </div>
                ) : (
                  <span 
                    className="placement-recruiter-name" 
                    style={{ color: recruiter.color || "#0F2D52" }}
                  >
                    {recruiter.name}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="placement-container placement-section">
        <div className="placement-analytics-grid">
          {/* Average Package Offered */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="placement-premium-card"
          >
            <div className="placement-card-kicker">
              <ChartNoAxesColumnIncreasing className="h-4 w-4" />
              Average Package Offered
            </div>
            <h3>Average Package Offered</h3>
            <div className="placement-price">{avgPackage}</div>
            <p className="placement-card-copy">
              {avgPackageNote}
            </p>

            <div className="placement-bars">
              {packageBars.map((bar) => (
                <div key={bar.label}>
                  <div className="placement-bar-meta">
                    <span>{bar.label}</span>
                    <span>{bar.value} offers</span>
                  </div>
                  <div className="placement-bar-track">
                    <div className="placement-bar-fill" style={{ width: bar.width }} />
                  </div>
                </div>
              ))}
            </div>

            <p className="placement-disclaimer">
              {disclaimer}
            </p>
          </motion.div>

          {/* Sector-wise Placement Analysis */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="placement-premium-card placement-sector-card"
          >
            <div className="placement-card-kicker">
              <PieChart className="h-4 w-4" />
              Sector-wise Analysis
            </div>
            <h3>Sector-wise Placement Analysis</h3>
            <p className="placement-card-copy">A broad spread of outcomes across core domains, corporate leadership, and industry pathways.</p>

            <div className="placement-sector-layout">
              <div className="w-full h-full min-h-[260px] flex justify-center items-center relative scale-[1.1] md:scale-[1.25] origin-center mt-4 md:mt-0">
                <Image
                  src={sectorChartImage}
                  alt="Sector-wise placement chart"
                  fill
                  className="object-contain drop-shadow-2xl p-0"
                />
              </div>

              <div className="placement-sector-legend">
                {sectorLegend.map((sector) => (
                  <div key={sector.label} className="placement-legend-row">
                    <span className="placement-legend-dot" style={{ backgroundColor: sector.color }} />
                    <span>{sector.label}</span>
                    <span className="placement-legend-value">{sector.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
