"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  Users,
  CheckCircle2,
  BookOpenCheck,
  Target,
  Check,
  Microscope,
  BookOpen,
  Award,
  Compass,
} from "lucide-react";


/* ── ABOUT SECTION ── */
function SchoolAboutSection() {
  return (
    <section className="spbsb-abt w-full relative overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <style>{`
        /* ── Container ── */
        .spbsb-abt {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          background: #06101E;
        }

        /* ── Gradient overlays ── */
        .spbsb-abt-grad-top {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(
            180deg,
            rgba(6, 16, 30, 0.70) 0%,
            rgba(6, 16, 30, 0.25) 45%,
            rgba(6, 16, 30, 0.10) 100%
          );
        }
        .spbsb-abt-grad-left {
          position: absolute;
          inset: 0;
          z-index: 3;
          background: linear-gradient(
            90deg,
            rgba(6, 16, 30, 0.88) 0%,
            rgba(6, 16, 30, 0.72) 28%,
            rgba(6, 16, 30, 0.35) 52%,
            transparent 72%
          );
        }
        .spbsb-abt-grad-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 30%;
          z-index: 2;
          background: linear-gradient(
            0deg,
            rgba(6, 16, 30, 0.55) 0%,
            transparent 100%
          );
        }

        /* ── Content wrapper ── */
        .spbsb-abt-inner {
          position: absolute;
          inset: 0;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 5.5% 6%;
          box-sizing: border-box;
        }

        /* ── School label ── */
        .spbsb-abt-label {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #C8A24E;
          margin-bottom: 28px;
        }
        .spbsb-abt-label::before {
          content: '';
          width: 36px;
          height: 1.5px;
          background: #C8A24E;
          display: block;
        }

        /* ── Headline ── */
        .spbsb-abt-headline {
          font-family: 'Cormorant Garamond', 'Georgia', serif;
          font-size: clamp(34px, 3.8vw, 62px);
          font-weight: 600;
          line-height: 1.12;
          color: #FFFFFF;
          letter-spacing: -0.02em;
          max-width: 620px;
          margin-bottom: 8px;
        }
        .spbsb-abt-headline em {
          font-style: italic;
          color: #C8A24E;
        }

        /* ── Gold divider ── */
        .spbsb-abt-rule {
          width: 64px;
          height: 1.5px;
          background: linear-gradient(90deg, #C8A24E, rgba(200, 162, 78, 0.3));
          margin: 28px 0 24px;
          border: none;
        }

        /* ── Body text ── */
        .spbsb-abt-body {
          font-family: 'Inter', sans-serif;
          font-size: clamp(13px, 1.05vw, 16px);
          font-weight: 400;
          line-height: 1.85;
          color: rgba(255, 255, 255, 0.78);
          max-width: 540px;
          margin-bottom: 36px;
        }

        /* ── Stat chips row ── */
        .spbsb-abt-stats {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .spbsb-abt-chip {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(200, 162, 78, 0.18);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .spbsb-abt-chip:hover {
          background: rgba(200, 162, 78, 0.10);
          border-color: rgba(200, 162, 78, 0.35);
        }
        .spbsb-abt-chip-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #C8A24E;
          flex-shrink: 0;
        }
        .spbsb-abt-chip-text {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: rgba(255, 255, 255, 0.88);
          white-space: nowrap;
        }

        /* ── Page number ── */
        .spbsb-abt-pagenum {
          position: absolute;
          bottom: 28px;
          left: 28px;
          z-index: 10;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.4);
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .spbsb-abt-pagenum::before {
          content: '';
          width: 24px;
          height: 1px;
          background: rgba(200, 162, 78, 0.5);
        }

        /* ── Bottom-right watermark ── */
        .spbsb-abt-watermark {
          position: absolute;
          bottom: 28px;
          right: 32px;
          z-index: 10;
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.2);
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .spbsb-abt {
            aspect-ratio: auto;
            min-height: 600px;
          }
          .spbsb-abt-inner {
            padding: 48px 40px;
          }
          .spbsb-abt-headline {
            max-width: 500px;
          }
          .spbsb-abt-body {
            max-width: 460px;
          }
          .spbsb-abt-grad-left {
            background: linear-gradient(
              90deg,
              rgba(6, 16, 30, 0.92) 0%,
              rgba(6, 16, 30, 0.78) 35%,
              rgba(6, 16, 30, 0.40) 60%,
              transparent 85%
            );
          }
        }

        @media (max-width: 768px) {
          .spbsb-abt {
            aspect-ratio: auto;
            min-height: auto;
          }
          .spbsb-abt-grad-left {
            background: linear-gradient(
              180deg,
              rgba(6, 16, 30, 0.92) 0%,
              rgba(6, 16, 30, 0.80) 50%,
              rgba(6, 16, 30, 0.50) 100%
            );
          }
          .spbsb-abt-grad-top {
            display: none;
          }
          .spbsb-abt-inner {
            position: relative;
            padding: 52px 24px 64px;
          }
          .spbsb-abt-headline {
            font-size: 30px;
            max-width: 100%;
          }
          .spbsb-abt-body {
            max-width: 100%;
            font-size: 14px;
          }
          .spbsb-abt-stats {
            gap: 10px;
          }
          .spbsb-abt-chip {
            padding: 8px 14px;
          }
          .spbsb-abt-chip-text {
            font-size: 11px;
          }
          .spbsb-abt-watermark {
            display: none;
          }
        }
      `}</style>

      {/* ── Background Image ── */}
      <Image
        src="/spbsp/8.jpg"
        alt="Geeta University Campus — Aerial Night View"
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
        style={{ zIndex: 1 }}
      />

      {/* ── Gradient Layers ── */}
      <div className="spbsb-abt-grad-top" />
      <div className="spbsb-abt-grad-left" />
      <div className="spbsb-abt-grad-bottom" />

      {/* ── Content ── */}
      <motion.div
        className="spbsb-abt-inner"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* School Label */}
        <motion.div
          className="spbsb-abt-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Geeta University &middot; Panipat
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="spbsb-abt-headline"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About SP Bansal<br />
          School of <em>Business</em>
        </motion.h2>

        {/* Gold Rule */}
        <motion.hr
          className="spbsb-abt-rule"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          style={{ transformOrigin: 'left' }}
        />

        {/* Body */}
        <motion.p
          className="spbsb-abt-body"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          SP Bansal School of Business (SPBSB), established under Geeta University, Panipat, is a young, vibrant, and industry-anchored B-School committed to developing ethically grounded, technologically fluent, and analytically strong business leaders. Rooted in the 40-year legacy of the Geeta Group of Institutions, SPBSB functions within a future-ready, AI-enabled university ecosystem of North India.
        </motion.p>

        {/* Stat Chips */}
        <motion.div
          className="spbsb-abt-stats"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          <div className="spbsb-abt-chip">
            <span className="spbsb-abt-chip-dot" />
            <span className="spbsb-abt-chip-text">40+ Years Legacy</span>
          </div>
          <div className="spbsb-abt-chip">
            <span className="spbsb-abt-chip-dot" />
            <span className="spbsb-abt-chip-text">AI-Enabled Campus</span>
          </div>
          <div className="spbsb-abt-chip">
            <span className="spbsb-abt-chip-dot" />
            <span className="spbsb-abt-chip-text">Industry-Anchored Learning</span>
          </div>
        </motion.div>
      </motion.div>

    

      {/* ── Watermark ── */}
      <div className="spbsb-abt-watermark">SPBSB</div>
    </section>
  );
}

/* ── VISION & MISSION SECTION ── */
function VisionMissionSection() {
  const missionPoints = [
    "Design and deliver industry-focused management education blending business fundamentals with digital, analytical, and AI-enabled tools.",
    "Nurture ethical leaders with professional integrity, social responsibility, and sustainability-driven strategic thinking.",
    "Leverage human intelligence blended with artificial intelligence for agile problem-solving and strategic planning.",
  ];

  return (
    <section className="spbsb-vm-section">
      <style>{`
        .spbsb-vm-section {
          width: 100%;
          background:
            linear-gradient(180deg, #FFFFFF 0%, #F6F8FC 52%, #FFFFFF 100%);
          color: #10233F;
          padding: 82px 24px 88px;
          font-family: 'Sapient', 'Source Sans 3', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .spbsb-vm-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(15, 45, 82, 0.045) 1px, transparent 1px),
            linear-gradient(180deg, rgba(15, 45, 82, 0.035) 1px, transparent 1px);
          background-size: 82px 82px;
          mask-image: radial-gradient(circle at 20% 12%, black, transparent 68%);
          pointer-events: none;
        }
        .spbsb-vm-section::after {
          content: '';
          position: absolute;
          right: -120px;
          top: 54px;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(217, 154, 36, 0.16), transparent 68%);
          pointer-events: none;
        }
        .spbsb-vm-container {
          width: min(1120px, 100%);
          margin: 0 auto;
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(280px, 0.74fr) minmax(0, 1.26fr);
          gap: 46px;
          align-items: start;
        }
        .spbsb-vm-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #D99A24;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .spbsb-vm-eyebrow::before {
          content: '';
          width: 38px;
          height: 2px;
          background: #D99A24;
          display: block;
        }
        .spbsb-vm-heading {
          font-family: 'Zilla Slab', serif;
          font-size: clamp(36px, 4.2vw, 58px);
          font-weight: 700;
          line-height: 1.02;
          letter-spacing: 0;
          margin: 0 0 18px;
          max-width: 440px;
          color: #082E5B;
        }
        .spbsb-vm-heading em {
          color: #D99A24;
          font-style: italic;
        }
        .spbsb-vm-intro-text {
          max-width: 360px;
          color: #5A6576;
          font-size: 15px;
          line-height: 1.7;
          font-weight: 500;
          margin: 0;
        }
        .spbsb-vm-grid {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .spbsb-vm-card {
          background: rgba(255, 255, 255, 0.84);
          color: #13243E;
          border-radius: 8px;
          padding: 28px 30px;
          min-height: auto;
          border: 1px solid rgba(15, 45, 82, 0.10);
          box-shadow: 0 18px 48px rgba(15, 45, 82, 0.08);
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: 62px minmax(0, 1fr);
          gap: 22px;
          align-items: start;
          backdrop-filter: blur(12px);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .spbsb-vm-card:hover {
          transform: translateY(-4px);
          border-color: rgba(217, 154, 36, 0.34);
          box-shadow: 0 24px 64px rgba(15, 45, 82, 0.13);
        }
        .spbsb-vm-card::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 5px;
          background: linear-gradient(180deg, #D99A24, #0F2D52);
        }
        .spbsb-vm-icon {
          width: 54px;
          height: 54px;
          border-radius: 8px;
          background: linear-gradient(145deg, #0F2D52, #173F70);
          color: #F1B54E;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0;
          box-shadow: 0 14px 30px rgba(15, 45, 82, 0.20);
        }
        .spbsb-vm-card h3 {
          grid-column: 2;
          font-family: 'Zilla Slab', serif;
          font-size: 28px;
          line-height: 1.08;
          font-weight: 700;
          color: #0A1F44;
          margin: 0 0 10px;
        }
        .spbsb-vm-vision-text {
          grid-column: 2;
          font-size: 15.5px;
          line-height: 1.72;
          color: #536176;
          font-weight: 500;
          margin: 0;
        }
        .spbsb-vm-list {
          grid-column: 2;
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .spbsb-vm-list li {
          display: flex;
          gap: 11px;
          align-items: flex-start;
          color: #536176;
          font-size: 15px;
          line-height: 1.6;
          font-weight: 500;
        }
        .spbsb-vm-list svg {
          color: #D99A24;
          flex-shrink: 0;
          margin-top: 5px;
        }
        @media (max-width: 900px) {
          .spbsb-vm-section {
            padding: 66px 20px 72px;
          }
          .spbsb-vm-container {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .spbsb-vm-heading,
          .spbsb-vm-intro-text {
            max-width: 100%;
          }
          .spbsb-vm-card {
            padding: 24px;
          }
        }
        @media (max-width: 640px) {
          .spbsb-vm-heading {
            margin-bottom: 14px;
          }
          .spbsb-vm-card h3 {
            font-size: 25px;
          }
          .spbsb-vm-vision-text,
          .spbsb-vm-list li {
            font-size: 14px;
          }
          .spbsb-vm-card {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .spbsb-vm-card h3,
          .spbsb-vm-vision-text,
          .spbsb-vm-list {
            grid-column: 1;
          }
          .spbsb-vm-icon {
            width: 48px;
            height: 48px;
          }
        }
      `}</style>

      <div className="spbsb-vm-container">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="spbsb-vm-eyebrow">Purpose Led Learning</div>
          <h2 className="spbsb-vm-heading">
            Our <em>Vision</em> and Mission
          </h2>
          <p className="spbsb-vm-intro-text">
            A future-facing business school built around industry relevance, ethical leadership, technological confidence, and sustainable growth.
          </p>
        </motion.div>

        <div className="spbsb-vm-grid">
          <motion.article
            className="spbsb-vm-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <div className="spbsb-vm-icon" aria-hidden="true">
              <Target size={28} strokeWidth={2.2} />
            </div>
            <h3>Vision</h3>
            <p className="spbsb-vm-vision-text">
              To be a premier, industry-anchored business school that empowers management professionals with technological fluency, conceptual rigour, and strong ethical foundations to drive sustainable business growth.
            </p>
          </motion.article>

          <motion.article
            className="spbsb-vm-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.25 }}
          >
            <div className="spbsb-vm-icon" aria-hidden="true">
              <BookOpenCheck size={28} strokeWidth={2.2} />
            </div>
            <h3>Mission</h3>
            <ul className="spbsb-vm-list">
              {missionPoints.map((point) => (
                <li key={point}>
                  <CheckCircle2 size={18} strokeWidth={2.4} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

/* ── LEGACY TIMELINE SECTION ── */
function LegacyTimelineSection() {
  const legacyItems = [
    {
      year: "1998",
      title: "Geeta Vidya Mandir, NHBC, Panipat",
      side: "right",
    },
    {
      year: "2001",
      title: "Geeta Vidya Mandir Public School, Sanoli Road Panipat",
      side: "left",
    },
    {
      year: "2006",
      title: "Geeta College of Education, Sanoli Road, Panipat",
      side: "right",
    },
    {
      year: "2007",
      title: "Geeta Institute of Law, GT Road, Panipat\nLakshay College of Education, Naultha, Panipat",
      side: "left",
    },
    {
      year: "2008",
      title: "Geeta Engineering College, Panipat (Converted to Geeta University later on)\nGeeta Institute of Education, GT Road, Panipat",
      side: "right",
    },
    {
      year: "2012",
      title: "Delhi Public School, Jind",
      side: "left",
    },
    {
      year: "2016",
      title: "Lakshay International School, Naultha, Panipat",
      side: "right",
    },
    {
      year: "2019",
      title: "Geeta Institute of Pharmacy, Panipat\nKualakubs (A Pre-School Chain in Panipat, Jind, Gurugram & more)",
      side: "left",
    },
    {
      year: "2022",
      title: "Geeta University, Panipat",
      side: "right",
    },
    {
      year: "2026",
      title: "Kualakubs World School, Gurugram - 2026",
      side: "left",
    },
  ];

  return (
    <section className="spbsb-legacy-section">
      <style>{`
        .spbsb-legacy-section {
          width: 100%;
          background:
            linear-gradient(180deg, #FFFFFF 0%, #F7FAFE 54%, #FFFFFF 100%);
          color: #0A1F44;
          padding: 76px 24px 86px;
          font-family: 'Sapient', 'Source Sans 3', sans-serif;
          overflow: hidden;
          position: relative;
        }
        .spbsb-legacy-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(15, 45, 82, 0.045) 1px, transparent 1px),
            linear-gradient(180deg, rgba(15, 45, 82, 0.035) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: radial-gradient(circle at 50% 30%, black, transparent 72%);
          pointer-events: none;
        }
        .spbsb-legacy-container {
          width: min(1120px, 100%);
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .spbsb-legacy-intro {
          max-width: 960px;
          margin-bottom: 42px;
        }
        .spbsb-legacy-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #D99A24;
          font-family: 'Sapient', 'Source Sans 3', sans-serif;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .spbsb-legacy-eyebrow::before {
          content: '';
          width: 38px;
          height: 2px;
          background: #D99A24;
          display: block;
        }
        .spbsb-legacy-title {
          font-family: 'Zilla Slab', serif;
          font-size: clamp(36px, 4.2vw, 56px);
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0;
          color: #07325E;
          margin: 0 0 14px;
        }
        .spbsb-legacy-copy {
          max-width: 920px;
          color: #242832;
          font-family: 'Sapient', 'Source Sans 3', sans-serif;
          font-size: clamp(15px, 1.5vw, 18px);
          line-height: 1.58;
          letter-spacing: 0;
          font-weight: 500;
          margin: 0;
        }
        .spbsb-legacy-timeline {
          position: relative;
          width: min(920px, 100%);
          margin: 0 auto;
          padding: 8px 0 4px;
        }
        .spbsb-legacy-rail {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 8px;
          border-radius: 999px;
          background: linear-gradient(180deg, #6C85BE, #263A92 58%, #062A58);
          transform: translateX(-50%);
          box-shadow: 0 18px 40px rgba(6, 42, 88, 0.26);
          overflow: hidden;
        }
        .spbsb-legacy-rail::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent, rgba(255,255,255,0.55), transparent);
          animation: spbsbRailShine 4.8s ease-in-out infinite;
        }
        .spbsb-legacy-item {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 68px minmax(0, 1fr);
          min-height: 72px;
          align-items: center;
        }
        .spbsb-legacy-item + .spbsb-legacy-item {
          margin-top: 8px;
        }
        .spbsb-legacy-node {
          grid-column: 2;
          justify-self: center;
          width: 26px;
          height: 14px;
          border-radius: 999px;
          background: #FFFFFF;
          border: 5px solid #5269B1;
          box-shadow: 0 8px 22px rgba(14, 35, 91, 0.20);
          z-index: 2;
        }
        .spbsb-legacy-content {
          position: relative;
          background: rgba(255, 255, 255, 0.76);
          border: 1px solid rgba(82, 105, 177, 0.12);
          border-radius: 8px;
          padding: 12px 16px;
          box-shadow: 0 14px 34px rgba(15, 45, 82, 0.08);
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .spbsb-legacy-content:hover {
          transform: translateY(-4px);
          border-color: rgba(217, 154, 36, 0.35);
          box-shadow: 0 24px 60px rgba(15, 45, 82, 0.14);
        }
        .spbsb-legacy-content::before {
          content: '';
          position: absolute;
          top: 25px;
          width: 68px;
          border-top: 1.5px dashed rgba(36, 40, 50, 0.46);
        }
        .spbsb-legacy-content::after {
          content: '';
          position: absolute;
          top: 20px;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
        }
        .spbsb-legacy-item.right .spbsb-legacy-content {
          grid-column: 3;
          margin-left: 24px;
        }
        .spbsb-legacy-item.right .spbsb-legacy-content::before {
          left: -92px;
        }
        .spbsb-legacy-item.right .spbsb-legacy-content::after {
          left: -20px;
          border-left: 15px solid #5269B1;
        }
        .spbsb-legacy-item.left .spbsb-legacy-content {
          grid-column: 1;
          margin-right: 24px;
          text-align: right;
        }
        .spbsb-legacy-item.left .spbsb-legacy-content::before {
          right: -92px;
        }
        .spbsb-legacy-item.left .spbsb-legacy-content::after {
          right: -20px;
          border-right: 15px solid #5269B1;
        }
        .spbsb-legacy-year {
          display: block;
          color: #243A9A;
          font-family: 'Zilla Slab', serif;
          font-size: clamp(22px, 2.3vw, 28px);
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0.02em;
          margin-bottom: 5px;
        }
        .spbsb-legacy-text {
          color: #535760;
          font-family: 'Sapient', 'Source Sans 3', sans-serif;
          font-size: clamp(13px, 1.2vw, 15px);
          line-height: 1.45;
          letter-spacing: 0;
          font-weight: 500;
          margin: 0;
          white-space: pre-line;
        }
        @keyframes spbsbRailShine {
          0%, 100% {
            transform: translateY(-70%);
          }
          50% {
            transform: translateY(70%);
          }
        }
        @media (max-width: 900px) {
          .spbsb-legacy-section {
            padding: 62px 20px 72px;
          }
          .spbsb-legacy-intro {
            margin-bottom: 34px;
          }
          .spbsb-legacy-copy {
            letter-spacing: 0;
          }
          .spbsb-legacy-timeline {
            width: 100%;
          }
          .spbsb-legacy-rail {
            left: 18px;
            width: 7px;
          }
          .spbsb-legacy-item {
            grid-template-columns: 38px minmax(0, 1fr);
            min-height: auto;
          }
          .spbsb-legacy-item + .spbsb-legacy-item {
            margin-top: 14px;
          }
          .spbsb-legacy-node {
            grid-column: 1;
            width: 24px;
            height: 14px;
            border-width: 5px;
          }
          .spbsb-legacy-item.left .spbsb-legacy-content,
          .spbsb-legacy-item.right .spbsb-legacy-content {
            grid-column: 2;
            margin: 0 0 0 14px;
            text-align: left;
          }
          .spbsb-legacy-content::before,
          .spbsb-legacy-content::after {
            display: none;
          }
          .spbsb-legacy-content {
            padding: 14px 15px;
          }
          .spbsb-legacy-year {
            font-size: 22px;
          }
          .spbsb-legacy-text {
            font-size: 13.5px;
            letter-spacing: 0;
          }
        }
      `}</style>

      <div className="spbsb-legacy-container">
        <motion.div
          className="spbsb-legacy-intro"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="spbsb-legacy-eyebrow">Four Decades of Growth</div>
          <h2 className="spbsb-legacy-title">Our Legacy</h2>
          <p className="spbsb-legacy-copy">
            With a journey spanning over four decades, the Geeta Group of Institutions has grown from its humble beginnings in 1985 to a renowned hub of schools, colleges, and a prestigious university. Its commitment to quality education and holistic development has shaped countless futures across diverse fields.
          </p>
        </motion.div>

        <div className="spbsb-legacy-timeline">
          <motion.div
            className="spbsb-legacy-rail"
            initial={{ scaleY: 0, transformOrigin: "top" }}
            whileInView={{ scaleY: 1, transformOrigin: "top" }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />

          {legacyItems.map((item, index) => (
            <motion.article
              key={`${item.year}-${item.title}`}
              className={`spbsb-legacy-item ${item.side}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: Math.min(index * 0.06, 0.35), ease: "easeOut" }}
            >
              <motion.div
                className="spbsb-legacy-node"
                initial={{ scale: 0.7 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.35) + 0.08 }}
              />
              <div className="spbsb-legacy-content">
                <span className="spbsb-legacy-year">{item.year}</span>
                <p className="spbsb-legacy-text">{item.title}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CHANCELLOR DESK SECTION ── */
function ChancellorDeskSection() {
  const messageParagraphs = [
    "As we learn to unwrap the gift of each day, our courage, our character and our conviction decides the trajectory of our dreams and destiny. My career span is a testimony to this idea and ideal of aligning your passion with perseverance.",
    "As we are on the threshold of a new milestone as Geeta University, I feel proud to be a teacher, a mentor, a father figure to the future of this glorious Nation, in my own small way!",
    "As the times today demand a fast paced action oriented curriculum, Geeta University has invested in Future, creating a wealth of Complete Corporate Citizens with leadership qualities for the country.",
    "So I invite youngsters who want their future glittering with possibilities, parents who are concerned about the future of their children, the teachers - the faculty who crave a space that bridges education and knowledge, the schools that want their students to see the future today. Come to Geeta University.",
  ];

  return (
    <section className="spbsb-chancellor-section">
      <style>{`
        .spbsb-chancellor-section {
          width: 100%;
          background:
            linear-gradient(135deg, rgba(4, 30, 74, 0.98), rgba(5, 38, 91, 0.98)),
            radial-gradient(circle at 84% 76%, rgba(230, 111, 31, 0.18), transparent 34%);
          color: #FFFFFF;
          padding: 78px 24px 86px;
          font-family: 'Sapient', 'Source Sans 3', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .spbsb-chancellor-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(180deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 76px 76px;
          mask-image: radial-gradient(circle at 25% 25%, black, transparent 68%);
          pointer-events: none;
        }
        .spbsb-chancellor-section::after {
          content: '';
          position: absolute;
          right: -4vw;
          bottom: -1px;
          width: 34vw;
          height: 96px;
          background: linear-gradient(135deg, rgba(45, 116, 178, 0.74), rgba(14, 75, 137, 0.72));
          clip-path: polygon(0 100%, 100% 44%, 100% 100%);
          pointer-events: none;
        }
        .spbsb-chancellor-container {
          width: min(1120px, 100%);
          margin: 0 auto;
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(300px, 0.8fr);
          gap: 48px;
          align-items: end;
        }
        .spbsb-chancellor-kicker {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #F07B2D;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .spbsb-chancellor-kicker::before {
          content: '';
          width: 38px;
          height: 2px;
          background: #F07B2D;
          display: block;
        }
        .spbsb-chancellor-title {
          font-family: 'Zilla Slab', serif;
          font-size: clamp(38px, 4.6vw, 62px);
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0;
          margin: 0 0 28px;
          color: #FFFFFF;
        }
        .spbsb-chancellor-lead {
          font-family: 'Zilla Slab', serif;
          font-size: clamp(24px, 2.5vw, 34px);
          font-style: italic;
          font-weight: 700;
          line-height: 1.1;
          margin: 0 0 18px;
          color: rgba(255,255,255,0.96);
        }
        .spbsb-chancellor-copy {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 720px;
        }
        .spbsb-chancellor-copy p {
          color: rgba(255,255,255,0.88);
          font-family: 'Sapient', 'Source Sans 3', sans-serif;
          font-size: clamp(14px, 1.25vw, 17px);
          line-height: 1.6;
          font-weight: 500;
          margin: 0;
        }
        .spbsb-chancellor-signoff {
          margin-top: 22px;
          color: #FFFFFF;
          font-family: 'Zilla Slab', serif;
          font-size: clamp(24px, 2.6vw, 34px);
          font-style: italic;
          font-weight: 700;
          line-height: 1.1;
        }
        .spbsb-chancellor-aside {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          padding-bottom: 4px;
        }
        .spbsb-chancellor-photo-shell {
          width: min(390px, 100%);
          aspect-ratio: 0.86 / 1;
          border-radius: 26px;
          padding: 12px;
          background:
            linear-gradient(145deg, rgba(255,255,255,0.98), rgba(255,255,255,0.78)),
            linear-gradient(145deg, #FFFFFF, #F07B2D);
          box-shadow:
            0 34px 80px rgba(0, 0, 0, 0.34),
            0 0 0 1px rgba(255,255,255,0.20);
          position: relative;
        }
        .spbsb-chancellor-photo-shell::before {
          content: '';
          position: absolute;
          inset: -14px;
          border: 1px solid rgba(255,255,255,0.36);
          border-radius: 34px;
          pointer-events: none;
        }
        .spbsb-chancellor-photo-shell::after {
          content: '';
          position: absolute;
          inset: 22px -16px -18px 54px;
          border-radius: 28px;
          background: linear-gradient(135deg, rgba(242, 118, 36, 0.72), rgba(45, 116, 178, 0.32));
          filter: blur(20px);
          opacity: 0.72;
          z-index: -1;
        }
        .spbsb-chancellor-photo {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 18px;
          background: #0A2A5A;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.22);
        }
        .spbsb-chancellor-photo::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, transparent 55%, rgba(4, 30, 74, 0.28)),
            linear-gradient(135deg, rgba(255,255,255,0.18), transparent 38%);
          pointer-events: none;
        }
        .spbsb-chancellor-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }
        .spbsb-chancellor-name {
          text-align: center;
        }
        .spbsb-chancellor-name strong {
          display: block;
          color: #F27624;
          font-family: 'Zilla Slab', serif;
          font-size: clamp(34px, 4vw, 54px);
          line-height: 0.95;
          font-weight: 700;
        }
        .spbsb-chancellor-name span {
          display: block;
          color: #FFFFFF;
          font-family: 'Sapient', 'Source Sans 3', sans-serif;
          font-size: clamp(21px, 2.3vw, 34px);
          line-height: 1.05;
          font-weight: 800;
          letter-spacing: 0.04em;
        }
        .spbsb-chancellor-note {
          align-self: start;
          margin-top: 44px;
          max-width: 520px;
          color: rgba(255,255,255,0.96);
          font-family: 'Zilla Slab', serif;
          font-size: clamp(22px, 2.5vw, 32px);
          font-style: italic;
          font-weight: 700;
          line-height: 1.16;
        }
        @media (max-width: 980px) {
          .spbsb-chancellor-section {
            padding: 66px 20px 76px;
          }
          .spbsb-chancellor-container {
            grid-template-columns: 1fr;
            gap: 40px;
            align-items: start;
          }
          .spbsb-chancellor-copy {
            max-width: 100%;
          }
          .spbsb-chancellor-aside {
            align-items: flex-start;
          }
          .spbsb-chancellor-photo-shell {
            width: min(360px, calc(100% - 20px));
            margin-left: 10px;
          }
          .spbsb-chancellor-name {
            width: min(360px, 100%);
            text-align: left;
          }
          .spbsb-chancellor-note {
            margin-top: 18px;
          }
        }
        @media (max-width: 620px) {
          .spbsb-chancellor-section {
            padding: 58px 18px 68px;
          }
          .spbsb-chancellor-title {
            margin-bottom: 22px;
          }
          .spbsb-chancellor-copy {
            gap: 13px;
          }
          .spbsb-chancellor-photo-shell {
            width: calc(100% - 12px);
            max-width: 330px;
          }
          .spbsb-chancellor-name strong {
            font-size: 36px;
          }
          .spbsb-chancellor-name span {
            font-size: 22px;
          }
        }
      `}</style>

      <div className="spbsb-chancellor-container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="spbsb-chancellor-kicker">Leadership Message</div>
          <h2 className="spbsb-chancellor-title">From the Chancellor&apos;s Desk</h2>
          <p className="spbsb-chancellor-lead">Future is Present...</p>

          <div className="spbsb-chancellor-copy">
            {messageParagraphs.map((paragraph, index) => (
              <motion.p
                key={paragraph}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 + index * 0.06 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.p
            className="spbsb-chancellor-signoff"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.32 }}
          >
            Powering Education, Empowering Minds.
          </motion.p>

          <motion.p
            className="spbsb-chancellor-note"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            At Geeta University you will go to the world as a celebrated citizen who is Future ready.
          </motion.p>
        </motion.div>

        <motion.aside
          className="spbsb-chancellor-aside"
          initial={{ opacity: 0, x: 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
        >
          <motion.div
            className="spbsb-chancellor-photo-shell"
            whileHover={{ y: -5, scale: 1.015 }}
            transition={{ duration: 0.25 }}
          >
            <div className="spbsb-chancellor-photo">
              <Image
                src="/sp-bansal-chancellor-enhanced.png"
                alt="S.P. Bansal, Chancellor"
                width={1254}
                height={1254}
                sizes="(max-width: 980px) 86vw, 390px"
              />
            </div>
          </motion.div>

          <div className="spbsb-chancellor-name">
            <strong>S.P. Bansal</strong>
            <span>Chancellor</span>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

/* ── LEADERSHIP SCROLL TRANSITION ── */
function LeadershipScrollTransition() {
  const transitionRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: transitionRef,
    offset: ["start end", "end start"],
  });
  const diagonalY = useTransform(scrollYProgress, [0, 1], ["-18%", "18%"]);
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.12, 0.98]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.45, 1], [0.1, 0.55, 0.18]);

  return (
    <section ref={transitionRef} className="spbsb-leadership-transition" aria-hidden="true">
      <style>{`
        .spbsb-leadership-transition {
          height: 150px;
          margin: -1px 0;
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, #05265A 0%, #5D3B33 46%, #F38B1E 100%);
        }
        .spbsb-leadership-transition::before,
        .spbsb-leadership-transition::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .spbsb-leadership-transition::before {
          background:
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(180deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 76px 76px;
          opacity: 0.48;
        }
        .spbsb-leadership-transition::after {
          background: linear-gradient(180deg, rgba(5,38,91,0.46), transparent 45%, rgba(243,139,30,0.34));
        }
        .spbsb-transition-diagonal {
          position: absolute;
          left: -8%;
          right: -8%;
          top: -56%;
          height: 152%;
          background: linear-gradient(105deg, rgba(5, 38, 91, 0.72), rgba(255,255,255,0.08), rgba(232, 111, 31, 0.60));
          clip-path: polygon(0 0, 100% 34%, 100% 66%, 0 100%);
          opacity: 0.78;
          will-change: transform;
        }
        .spbsb-transition-glow {
          position: absolute;
          left: 50%;
          top: 50%;
          width: min(620px, 70vw);
          height: 170px;
          transform: translate(-50%, -50%);
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255,255,255,0.30), rgba(242,118,36,0.20), transparent 70%);
          filter: blur(18px);
          will-change: transform, opacity;
        }
        @media (max-width: 768px) {
          .spbsb-leadership-transition {
            height: 96px;
          }
        }
      `}</style>
      <motion.div className="spbsb-transition-diagonal" style={{ y: diagonalY }} />
      <motion.div className="spbsb-transition-glow" style={{ scale: glowScale, opacity: glowOpacity }} />
    </section>
  );
}

/* ── PRO-CHANCELLOR MESSAGE SECTION ── */
function ProChancellorMessageSection() {
  const messageParagraphs = [
    "The best way to succeed in education is to prioritize learning over profit. Every decision reflects our values, and every cost is an investment in India's future - one that will compete globally and lead with innovation.",
    "At Geeta University, students are guided by strong ethics that define our legacy, shaping responsible leaders and driving our pride and passion forward.",
  ];
  const proSectionRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: proSectionRef,
    offset: ["start end", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 0.5, 1], [34, -10, -38]);
  const portraitRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-2.5, 0, 2.5]);
  const portraitScale = useTransform(scrollYProgress, [0, 0.45, 1], [0.94, 1.03, 0.98]);

  return (
    <section ref={proSectionRef} className="spbsb-pro-section">
      <style>{`
        .spbsb-pro-section {
          width: 100%;
          background:
            radial-gradient(circle at 84% 14%, rgba(255, 255, 255, 0.20), transparent 30%),
            linear-gradient(135deg, #F38B1E 0%, #E86F1F 48%, #C94F18 100%);
          color: #FFFFFF;
          padding: 64px 24px 70px;
          font-family: 'Sapient', 'Source Sans 3', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .spbsb-pro-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(180deg, rgba(255,255,255,0.06) 1px, transparent 1px);
          background-size: 76px 76px;
          mask-image: radial-gradient(circle at 24% 24%, black, transparent 70%);
          pointer-events: none;
        }
        .spbsb-pro-section::after {
          content: '';
          position: absolute;
          right: -5vw;
          bottom: -1px;
          width: 40vw;
          height: 104px;
          background: linear-gradient(135deg, rgba(8, 31, 68, 0.84), rgba(13, 54, 103, 0.64));
          clip-path: polygon(0 100%, 100% 34%, 100% 100%);
          pointer-events: none;
        }
        .spbsb-pro-container {
          width: min(1040px, 100%);
          margin: 0 auto;
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(260px, 0.72fr) minmax(0, 1.28fr);
          gap: 58px;
          align-items: center;
        }
        .spbsb-pro-content {
          max-width: 620px;
        }
        .spbsb-pro-kicker {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #0A1F44;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .spbsb-pro-kicker::before {
          content: '';
          width: 38px;
          height: 2px;
          background: #0A1F44;
          display: block;
        }
        .spbsb-pro-title {
          font-family: 'Zilla Slab', serif;
          font-size: clamp(34px, 3.3vw, 46px);
          line-height: 1.04;
          font-weight: 700;
          letter-spacing: 0;
          margin: 0 0 18px;
          color: #FFFFFF;
          text-shadow: 0 10px 30px rgba(72, 23, 4, 0.22);
        }
        .spbsb-pro-lead {
          font-family: 'Zilla Slab', serif;
          font-size: clamp(20px, 1.9vw, 25px);
          font-style: italic;
          font-weight: 700;
          line-height: 1.16;
          margin: 0 0 16px;
          color: #0A1F44;
        }
        .spbsb-pro-copy {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 580px;
        }
        .spbsb-pro-copy p {
          color: rgba(255,255,255,0.92);
          font-size: clamp(14px, 1.05vw, 15.5px);
          line-height: 1.62;
          font-weight: 550;
          margin: 0;
        }
        .spbsb-pro-signoff {
          margin-top: 18px;
          color: #0A1F44;
          font-family: 'Zilla Slab', serif;
          font-size: clamp(21px, 2vw, 27px);
          line-height: 1.12;
          font-style: italic;
          font-weight: 700;
        }
        .spbsb-pro-aside {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          padding-bottom: 0;
        }
        .spbsb-pro-photo-shell {
          width: min(350px, 100%);
          position: relative;
          filter: drop-shadow(0 26px 42px rgba(72, 23, 4, 0.32));
          transform-origin: 50% 80%;
          will-change: transform;
        }
        .spbsb-pro-photo-shell::before {
          content: '';
          position: absolute;
          left: 8%;
          right: 8%;
          bottom: 2%;
          height: 16%;
          border-radius: 50%;
          background: rgba(77, 26, 5, 0.26);
          filter: blur(24px);
          z-index: -1;
          pointer-events: none;
        }
        .spbsb-pro-photo-shell::after {
          display: none;
        }
        .spbsb-pro-photo img {
          width: 100%;
          height: auto;
          display: block;
          will-change: transform;
        }
        .spbsb-pro-name {
          text-align: center;
        }
        .spbsb-pro-name strong {
          display: block;
          color: #0A1F44;
          font-family: 'Zilla Slab', serif;
          font-size: clamp(30px, 3vw, 42px);
          line-height: 0.95;
          font-weight: 700;
          text-shadow: 0 8px 24px rgba(255,255,255,0.16);
        }
        .spbsb-pro-name span {
          display: block;
          color: #FFFFFF;
          font-size: clamp(17px, 1.7vw, 23px);
          line-height: 1.08;
          font-weight: 850;
          letter-spacing: 0.04em;
        }
        @media (max-width: 980px) {
          .spbsb-pro-section {
            padding: 66px 20px 76px;
          }
          .spbsb-pro-container {
            grid-template-columns: 1fr;
            gap: 32px;
            align-items: start;
          }
          .spbsb-pro-content {
            max-width: 100%;
          }
          .spbsb-pro-copy {
            max-width: 100%;
          }
          .spbsb-pro-aside {
            align-items: flex-start;
          }
          .spbsb-pro-photo-shell {
            width: min(360px, 100%);
            margin-left: 0;
          }
          .spbsb-pro-name {
            width: min(360px, 100%);
            text-align: left;
          }
        }
        @media (max-width: 620px) {
          .spbsb-pro-section {
            padding: 58px 18px 68px;
          }
          .spbsb-pro-title {
            margin-bottom: 16px;
          }
          .spbsb-pro-copy {
            gap: 13px;
          }
          .spbsb-pro-photo-shell {
            width: 100%;
            max-width: 330px;
          }
          .spbsb-pro-name strong {
            font-size: 36px;
          }
          .spbsb-pro-name span {
            font-size: 20px;
          }
        }
      `}</style>

      <div className="spbsb-pro-container">
        <motion.aside
          className="spbsb-pro-aside"
          initial={{ opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
        >
          <motion.div
            className="spbsb-pro-photo-shell"
            style={{ y: portraitY, rotate: portraitRotate }}
            transition={{ duration: 0.25 }}
          >
            <motion.div className="spbsb-pro-photo" style={{ scale: portraitScale }}>
              <Image
                src="/nishant-bansal-pro-chancellor-12.png"
                alt="Nishant Bansal, Pro-Chancellor"
                width={423}
                height={722}
                sizes="(max-width: 980px) 86vw, 390px"
              />
            </motion.div>
          </motion.div>

          <div className="spbsb-pro-name">
            <strong>Nishant Bansal</strong>
            <span>Pro-Chancellor</span>
          </div>
        </motion.aside>

        <motion.div
          className="spbsb-pro-content"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="spbsb-pro-kicker">Leadership Message</div>
          <h2 className="spbsb-pro-title">Words from Pro-Chancellor</h2>
          <p className="spbsb-pro-lead">Learning over profit. Values over shortcuts.</p>

          <div className="spbsb-pro-copy">
            {messageParagraphs.map((paragraph, index) => (
              <motion.p
                key={paragraph}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 + index * 0.06 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.p
            className="spbsb-pro-signoff"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.24 }}
          >
            And Future is safe in such hands.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

/* ── ANKUSH BANSAL PRO-CHANCELLOR SECTION ── */
function AnkushProChancellorSection() {
  const messageParagraphs = [
    "Geeta University follows refined academic methodologies to deliver top-quality education in Haryana. Offering diverse programs - from technical and pharmacy to computer science, law, and hotel management - it prepares students beyond conventional skills.",
    "The focus is on shaping complete corporate citizens ready for real-world challenges. Explore our website and visit the campus to experience how the future of education is already here.",
  ];
  const ankushSectionRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ankushSectionRef,
    offset: ["start end", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 0.5, 1], [30, -8, -34]);
  const portraitRotate = useTransform(scrollYProgress, [0, 0.5, 1], [2.3, 0, -2.3]);
  const portraitScale = useTransform(scrollYProgress, [0, 0.45, 1], [0.95, 1.025, 0.98]);

  return (
    <section ref={ankushSectionRef} className="spbsb-ankush-section">
      <style>{`
        .spbsb-ankush-section {
          width: 100%;
          background:
            radial-gradient(circle at 88% 20%, rgba(242, 118, 36, 0.12), transparent 30%),
            linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 52%, #FFFFFF 100%);
          color: #0A1F44;
          padding: 66px 24px 72px;
          font-family: 'Sapient', 'Source Sans 3', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .spbsb-ankush-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(15, 45, 82, 0.045) 1px, transparent 1px),
            linear-gradient(180deg, rgba(15, 45, 82, 0.035) 1px, transparent 1px);
          background-size: 76px 76px;
          mask-image: radial-gradient(circle at 74% 26%, black, transparent 70%);
          pointer-events: none;
        }
        .spbsb-ankush-section::after {
          content: '';
          position: absolute;
          left: -5vw;
          bottom: -1px;
          width: 42vw;
          height: 104px;
          background: linear-gradient(135deg, rgba(242, 118, 36, 0.78), rgba(232, 111, 31, 0.42));
          clip-path: polygon(0 44%, 100% 100%, 0 100%);
          pointer-events: none;
        }
        .spbsb-ankush-container {
          width: min(1040px, 100%);
          margin: 0 auto;
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1.26fr) minmax(260px, 0.74fr);
          gap: 58px;
          align-items: center;
        }
        .spbsb-ankush-aside {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
        }
        .spbsb-ankush-photo-shell {
          width: min(360px, 100%);
          position: relative;
          filter: drop-shadow(0 26px 42px rgba(15, 45, 82, 0.20));
          transform-origin: 50% 80%;
          will-change: transform;
        }
        .spbsb-ankush-photo-shell::before {
          content: '';
          position: absolute;
          left: 8%;
          right: 8%;
          bottom: 2%;
          height: 16%;
          border-radius: 50%;
          background: rgba(15, 45, 82, 0.16);
          filter: blur(24px);
          z-index: -1;
          pointer-events: none;
        }
        .spbsb-ankush-photo img {
          width: 100%;
          height: auto;
          display: block;
          will-change: transform;
        }
        .spbsb-ankush-name {
          text-align: center;
        }
        .spbsb-ankush-name strong {
          display: block;
          color: #F27624;
          font-family: 'Zilla Slab', serif;
          font-size: clamp(30px, 3vw, 42px);
          line-height: 0.95;
          font-weight: 700;
        }
        .spbsb-ankush-name span {
          display: block;
          color: #0A1F44;
          font-size: clamp(17px, 1.7vw, 23px);
          line-height: 1.08;
          font-weight: 850;
          letter-spacing: 0.04em;
        }
        .spbsb-ankush-content {
          max-width: 640px;
        }
        .spbsb-ankush-kicker {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #F27624;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .spbsb-ankush-kicker::before {
          content: '';
          width: 38px;
          height: 2px;
          background: #F27624;
          display: block;
        }
        .spbsb-ankush-title {
          font-family: 'Zilla Slab', serif;
          font-size: clamp(34px, 3.3vw, 46px);
          line-height: 1.04;
          font-weight: 700;
          letter-spacing: 0;
          margin: 0 0 18px;
          color: #0A1F44;
        }
        .spbsb-ankush-lead {
          font-family: 'Zilla Slab', serif;
          font-size: clamp(20px, 1.9vw, 25px);
          font-style: italic;
          font-weight: 700;
          line-height: 1.16;
          margin: 0 0 16px;
          color: #F27624;
        }
        .spbsb-ankush-copy {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 590px;
        }
        .spbsb-ankush-copy p {
          color: #536176;
          font-size: clamp(14px, 1.05vw, 15.5px);
          line-height: 1.62;
          font-weight: 550;
          margin: 0;
        }
        @media (max-width: 980px) {
          .spbsb-ankush-section {
            padding: 66px 20px 76px;
          }
          .spbsb-ankush-container {
            grid-template-columns: 1fr;
            gap: 32px;
            align-items: start;
          }
          .spbsb-ankush-content,
          .spbsb-ankush-copy {
            max-width: 100%;
          }
          .spbsb-ankush-aside {
            align-items: flex-start;
          }
          .spbsb-ankush-photo-shell {
            width: min(360px, 100%);
          }
          .spbsb-ankush-name {
            width: min(360px, 100%);
            text-align: left;
          }
        }
        @media (max-width: 620px) {
          .spbsb-ankush-section {
            padding: 58px 18px 68px;
          }
          .spbsb-ankush-title {
            margin-bottom: 16px;
          }
          .spbsb-ankush-copy {
            gap: 13px;
          }
          .spbsb-ankush-photo-shell {
            width: 100%;
            max-width: 330px;
          }
          .spbsb-ankush-name strong {
            font-size: 36px;
          }
          .spbsb-ankush-name span {
            font-size: 20px;
          }
        }
      `}</style>

      <div className="spbsb-ankush-container">
        <motion.div
          className="spbsb-ankush-content"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="spbsb-ankush-kicker">Leadership Message</div>
          <h2 className="spbsb-ankush-title">Words from Pro-Chancellor</h2>
          <p className="spbsb-ankush-lead">Refined academics for future-ready citizens.</p>

          <div className="spbsb-ankush-copy">
            {messageParagraphs.map((paragraph, index) => (
              <motion.p
                key={paragraph}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 + index * 0.06 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>

        <motion.aside
          className="spbsb-ankush-aside"
          initial={{ opacity: 0, x: 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
        >
          <motion.div
            className="spbsb-ankush-photo-shell"
            style={{ y: portraitY, rotate: portraitRotate }}
            transition={{ duration: 0.25 }}
          >
            <motion.div className="spbsb-ankush-photo" style={{ scale: portraitScale }}>
              <Image
                src="/ankush-bansal-pro-chancellor.png"
                alt="Ankush Bansal, Pro-Chancellor"
                width={475}
                height={717}
                sizes="(max-width: 980px) 86vw, 390px"
              />
            </motion.div>
          </motion.div>

          <div className="spbsb-ankush-name">
            <strong>Ankush Bansal</strong>
            <span>Pro-Chancellor</span>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

/* ── LEARNING PHILOSOPHY SECTION ── */
function LearningPhilosophySection() {
  const edgePoints = ["Corporate Edge", "Thoughtful Expression", "Technological Mastery"];
  const thrustPoints = ["Industry Acumen", "Nuanced Articulation", "Digital Dexterity"];

  return (
    <section className="spbsb-learning-section">
      <style>{`
        .spbsb-learning-section {
          width: 100%;
          background:
            radial-gradient(circle at 88% 14%, rgba(242, 118, 36, 0.10), transparent 28%),
            linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 52%, #FFFFFF 100%);
          color: #0A1F44;
          padding: 78px 24px 86px;
          font-family: 'Sapient', 'Source Sans 3', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .spbsb-learning-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(15, 45, 82, 0.045) 1px, transparent 1px),
            linear-gradient(180deg, rgba(15, 45, 82, 0.035) 1px, transparent 1px);
          background-size: 76px 76px;
          mask-image: radial-gradient(circle at 50% 28%, black, transparent 72%);
          pointer-events: none;
        }
        .spbsb-learning-container {
          width: min(1180px, 100%);
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .spbsb-learning-layout {
          display: grid;
          grid-template-columns: minmax(320px, 0.92fr) minmax(420px, 1.08fr);
          gap: 56px;
          align-items: center;
        }
        .spbsb-learning-main-header {
          max-width: 820px;
          margin: 0 auto 46px;
          text-align: center;
        }
        .spbsb-learning-left {
          min-width: 0;
        }
        .spbsb-learning-right {
          min-width: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .spbsb-learning-right::before {
          content: '';
          position: absolute;
          width: min(520px, 80%);
          aspect-ratio: 1;
          border-radius: 50%;
          background:
            radial-gradient(circle, rgba(217, 154, 36, 0.18), rgba(36, 95, 168, 0.10), transparent 70%);
          filter: blur(18px);
          pointer-events: none;
        }
        .spbsb-learning-header {
          max-width: 520px;
          margin-bottom: 24px;
        }
        .spbsb-learning-kicker {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #D99A24;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .spbsb-learning-main-header .spbsb-learning-kicker {
          justify-content: center;
        }
        .spbsb-learning-main-header .spbsb-learning-kicker::after {
          content: '';
          width: 38px;
          height: 2px;
          background: #D99A24;
          display: block;
        }
        .spbsb-learning-kicker::before {
          content: '';
          width: 38px;
          height: 2px;
          background: #D99A24;
          display: block;
        }
        .spbsb-learning-title {
          font-family: 'Zilla Slab', serif;
          font-size: clamp(38px, 4.2vw, 58px);
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0;
          color: #07325E;
          margin: 0 0 14px;
        }
        .spbsb-learning-intro {
          max-width: 520px;
          color: #252C38;
          font-size: clamp(15px, 1.28vw, 17px);
          line-height: 1.58;
          font-weight: 550;
          margin: 0;
        }
        .spbsb-learning-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
          align-items: stretch;
          margin: 28px 0 22px;
        }
        .spbsb-learning-card {
          background: rgba(255, 255, 255, 0.88);
          border: 1px solid rgba(15, 45, 82, 0.10);
          border-radius: 12px;
          padding: 24px 28px;
          box-shadow: 0 14px 34px rgba(15, 45, 82, 0.09);
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .spbsb-learning-card:hover {
          transform: translateY(-4px);
          border-color: rgba(217, 154, 36, 0.38);
          box-shadow: 0 20px 48px rgba(15, 45, 82, 0.13);
        }
        .spbsb-learning-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #D99A24, #0A1F44);
        }
        .spbsb-learning-card h3 {
          font-family: 'Zilla Slab', serif;
          font-size: clamp(24px, 2.2vw, 31px);
          line-height: 1.05;
          font-weight: 700;
          color: #0A1F44;
          margin: 0 0 16px;
          text-align: left;
        }
        .spbsb-learning-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 9px;
        }
        .spbsb-learning-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #2A3342;
          font-size: clamp(15px, 1.25vw, 18px);
          font-weight: 600;
          line-height: 1.35;
        }
        .spbsb-learning-check {
          width: 18px;
          height: 18px;
          border-radius: 5px;
          border: 1.5px solid #0A1F44;
          color: #0A1F44;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 12px;
          line-height: 1;
          background: rgba(217, 154, 36, 0.08);
        }
        .spbsb-learning-bridge {
          color: #252C38;
          font-size: clamp(14px, 1.2vw, 16px);
          line-height: 1.58;
          font-weight: 600;
          max-width: 520px;
          margin: 0;
        }
        .spbsb-learning-framework {
          width: min(620px, 100%);
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }
        .spbsb-learning-framework h3 {
          font-family: 'Zilla Slab', serif;
          font-size: clamp(30px, 3vw, 44px);
          line-height: 1;
          font-weight: 700;
          color: #0A1F44;
          margin: 0 0 18px;
        }
        .spbsb-learning-visual {
          width: min(560px, 100%);
          margin: 0 auto;
          background: transparent;
          padding: 0;
          filter: drop-shadow(0 24px 42px rgba(15, 45, 82, 0.16));
        }
        .spbsb-learning-visual img {
          width: 100%;
          height: auto;
          display: block;
        }
        @media (max-width: 980px) {
          .spbsb-learning-section {
            padding: 64px 20px 72px;
          }
          .spbsb-learning-layout {
            grid-template-columns: 1fr;
            gap: 44px;
          }
          .spbsb-learning-header,
          .spbsb-learning-intro,
          .spbsb-learning-bridge {
            max-width: 100%;
          }
          .spbsb-learning-main-header {
            margin-bottom: 36px;
          }
          .spbsb-learning-right {
            justify-content: center;
          }
        }
        @media (max-width: 620px) {
          .spbsb-learning-section {
            padding: 56px 18px 64px;
          }
          .spbsb-learning-card {
            padding: 24px 22px;
          }
          .spbsb-learning-bridge {
            margin-bottom: 0;
          }
          .spbsb-learning-framework h3 {
            font-size: 30px;
          }
        }
      `}</style>

      <div className="spbsb-learning-container">
        <motion.div
          className="spbsb-learning-main-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="spbsb-learning-kicker">Learning Framework</div>
          <h2 className="spbsb-learning-title">Learning Philosophy</h2>
        </motion.div>

        <div className="spbsb-learning-layout">
          <div className="spbsb-learning-left">
            <motion.div
              className="spbsb-learning-header"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="spbsb-learning-intro">
                SPBSB follows a student-centric, experiential learning philosophy where learning extends beyond textbooks and classrooms. Classrooms function as practice labs supported by continuous feedback, reflection, and industry engagement.
              </p>
            </motion.div>

            <div className="spbsb-learning-card-grid">
              <motion.article
                className="spbsb-learning-card"
                initial={{ opacity: 0, x: -26 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, ease: "easeOut" }}
              >
                <h3>SPBSB Edge</h3>
                <ul className="spbsb-learning-list">
                  {edgePoints.map((point) => (
                    <li key={point}>
                      <span className="spbsb-learning-check"><Check size={14} /></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>

              <motion.article
                className="spbsb-learning-card"
                initial={{ opacity: 0, x: -26 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
              >
                <h3>Triple Thrust Strategy</h3>
                <ul className="spbsb-learning-list">
                  {thrustPoints.map((point) => (
                    <li key={point}>
                      <span className="spbsb-learning-check"><Check size={14} /></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            </div>

            <motion.p
              className="spbsb-learning-bridge"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.12 }}
            >
              Global, regional, and local business exposure ensures students develop cross-cultural sensitivity and sustainability-driven perspectives.
            </motion.p>
          </div>

          <motion.div
            className="spbsb-learning-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <div className="spbsb-learning-framework">
              <h3>Triple Thrust Strategy</h3>
              <motion.div
                className="spbsb-learning-visual"
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.25 }}
              >
                <Image
                  src="/spbsb-learning-framework.png"
                  alt="SPBSB learning framework: innovate, insight, and articulate"
                  width={672}
                  height={678}
                  sizes="(max-width: 980px) 90vw, 560px"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── PROGRAM OBJECTIVES & OUTCOMES SECTION ── */
function ProgramObjectivesOutcomesSection() {
  const objectives = [
    "Develop competent, tech-enabled managers capable of data-driven decision-making.",
    "Create ethical leaders with integrity, resilience, and sustainability orientation.",
    "Build global business awareness and adaptability across cultures.",
    "Foster entrepreneurial and intrapreneurial capabilities.",
    "Encourage lifelong learning and continuous upskilling.",
  ];

  const outcomes = [
    "Strong knowledge of core management disciplines and analytical competence.",
    "Proficiency in advanced technology and AI-powered business tools.",
    "Industry readiness through projects, internships, and live problem-solving.",
    "Ethical and resilient leadership capabilities.",
    "Sustainability-driven and socially responsible business conduct.",
  ];

  return (
    <section className="spbsb-outcomes-section">
      <style>{`
        .spbsb-outcomes-section {
          width: 100%;
          background:
            linear-gradient(90deg, rgba(10,31,68,0.035) 1px, transparent 1px),
            linear-gradient(180deg, rgba(10,31,68,0.028) 1px, transparent 1px),
            linear-gradient(180deg, #fffdf8 0%, #f7f9fc 100%);
          background-size: 64px 64px, 64px 64px, auto;
          color: #172238;
          padding: 82px 24px 88px;
          font-family: 'Sapient', 'Source Sans 3', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .spbsb-outcomes-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(255,255,255,0.92), transparent 20%, transparent 80%, rgba(255,255,255,0.92)),
            linear-gradient(180deg, rgba(255,255,255,0.82), transparent 42%);
          pointer-events: none;
        }
        .spbsb-outcomes-section::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 6px;
          background: linear-gradient(90deg, #ef4a22, #f59a23, #41c7bd, #438cff);
          pointer-events: none;
        }
        .spbsb-outcomes-container {
          width: min(1180px, 100%);
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .spbsb-outcomes-header {
          display: grid;
          grid-template-columns: minmax(280px, 0.78fr) minmax(0, 1fr);
          gap: 42px;
          align-items: end;
          margin-bottom: 34px;
        }
        .spbsb-outcomes-kicker {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #ef4a22;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .spbsb-outcomes-kicker::before {
          content: '';
          width: 42px;
          height: 2px;
          background: #ef4a22;
          display: block;
        }
        .spbsb-outcomes-title {
          font-family: 'Zilla Slab', serif;
          font-size: clamp(34px, 4.2vw, 54px);
          line-height: 1;
          font-weight: 700;
          color: #0a1f44;
          margin: 0;
          max-width: 620px;
        }
        .spbsb-outcomes-title span {
          color: #ef4a22;
        }
        .spbsb-outcomes-subtitle {
          max-width: 620px;
          margin: 0;
          color: #4f5b70;
          font-size: 16.5px;
          line-height: 1.72;
          font-weight: 650;
        }
        .spbsb-outcomes-note-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 26px;
          margin-top: 0;
          align-items: start;
        }
        .spbsb-outcomes-note {
          position: relative;
          padding: 28px 30px 24px;
          border-radius: 10px;
          background: rgba(255,255,255,0.92);
          border: 1px solid rgba(10,31,68,0.11);
          box-shadow: 0 14px 38px rgba(10,31,68,0.07);
          overflow: hidden;
        }
        .spbsb-outcomes-note::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 5px;
          height: 100%;
          background: linear-gradient(180deg, #ef4a22, #f59a23);
        }
        .spbsb-outcomes-note:nth-child(2)::before {
          background: linear-gradient(180deg, #41c7bd, #438cff);
        }
        .spbsb-outcomes-block-title {
          font-family: 'Zilla Slab', serif;
          font-size: 27px;
          line-height: 1;
          font-weight: 700;
          color: #0a1f44;
          margin: 0;
        }
        .spbsb-outcomes-helper {
          margin: 8px 0 0;
          color: #677286;
          font-size: 13.5px;
          line-height: 1.5;
          font-weight: 700;
        }
        .spbsb-outcomes-lines {
          list-style: none;
          padding: 0;
          margin: 22px 0 0;
          display: grid;
          gap: 0;
        }
        .spbsb-outcomes-line {
          display: grid;
          grid-template-columns: 36px minmax(0, 1fr);
          align-items: flex-start;
          gap: 12px;
          padding: 14px 0;
          border-top: 1px solid rgba(10,31,68,0.09);
          color: #354052;
          font-size: 15px;
          line-height: 1.58;
          font-weight: 620;
          transition: transform 0.22s ease, color 0.22s ease;
        }
        .spbsb-outcomes-line:hover {
          transform: translateX(4px);
          color: #0a1f44;
        }
        .spbsb-outcomes-index {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #fff7f1;
          color: #ef4a22;
          border: 1px solid rgba(239,74,34,0.26);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 900;
          margin-top: 2px;
        }
        .spbsb-outcomes-note:nth-child(2) .spbsb-outcomes-index {
          background: #effdfa;
          color: #1c9d95;
          border-color: rgba(65,199,189,0.34);
        }
        .spbsb-outcomes-figure {
          position: relative;
          margin: 30px 0 0;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 330px;
          gap: 0;
          align-items: stretch;
          padding: 12px;
          background: #ffffff;
          border: 1px solid rgba(10,31,68,0.1);
          border-radius: 14px;
          box-shadow: 0 18px 48px rgba(10,31,68,0.1);
          transform: none;
        }
        .spbsb-outcomes-image-panel {
          position: relative;
          overflow: hidden;
          min-height: 260px;
          border-radius: 10px 0 0 10px;
          background: #eef2f7;
        }
        .spbsb-outcomes-image-panel img {
          object-position: center;
        }
        .spbsb-outcomes-caption {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 0;
          padding: 30px 28px;
          border-left: 0;
          background: #0a1f44;
          border-radius: 0 10px 10px 0;
        }
        .spbsb-outcomes-caption strong {
          display: block;
          font-family: 'Zilla Slab', serif;
          color: #ffffff;
          font-size: 27px;
          line-height: 1.05;
          margin-bottom: 10px;
        }
        .spbsb-outcomes-caption span {
          display: block;
          color: rgba(255,255,255,0.74);
          font-size: 14.5px;
          line-height: 1.65;
          font-weight: 650;
        }
        @media (max-width: 980px) {
          .spbsb-outcomes-section {
            padding: 72px 20px 78px;
          }
          .spbsb-outcomes-header {
            grid-template-columns: 1fr;
            gap: 18px;
          }
          .spbsb-outcomes-subtitle {
            margin: 0;
          }
          .spbsb-outcomes-figure {
            grid-template-columns: 1fr;
          }
          .spbsb-outcomes-image-panel {
            border-radius: 10px 10px 0 0;
          }
          .spbsb-outcomes-caption {
            border-radius: 0 0 10px 10px;
          }
        }
        @media (max-width: 620px) {
          .spbsb-outcomes-section {
            padding: 56px 18px 64px;
          }
          .spbsb-outcomes-note-grid {
            grid-template-columns: 1fr;
            gap: 18px;
            margin-top: 28px;
          }
          .spbsb-outcomes-title {
            font-size: 38px;
          }
          .spbsb-outcomes-image-panel {
            min-height: 230px;
          }
          .spbsb-outcomes-figure {
            margin-top: 22px;
            padding: 8px;
          }
          .spbsb-outcomes-note {
            padding: 23px 20px 18px 22px;
          }
          .spbsb-outcomes-caption {
            padding: 22px 20px;
          }
        }
      `}</style>

      <div className="spbsb-outcomes-container">
        <motion.div
          className="spbsb-outcomes-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>
            <div className="spbsb-outcomes-kicker">Academic Intent</div>
            <h2 className="spbsb-outcomes-title">Program Objectives <span>&amp;</span> Outcomes</h2>
          </div>
          <p className="spbsb-outcomes-subtitle">
            The programme is written around a simple promise: students should graduate with sound management fundamentals, practical confidence, and the judgement to use technology responsibly.
          </p>
        </motion.div>

        <motion.div
          className="spbsb-outcomes-note-grid"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
        >
          <div className="spbsb-outcomes-note">
            <h3 className="spbsb-outcomes-block-title">Objectives</h3>
            <p className="spbsb-outcomes-helper">What the programme is designed to build.</p>
            <ul className="spbsb-outcomes-lines">
              {objectives.map((objective, index) => (
                <motion.li
                  className="spbsb-outcomes-line"
                  key={objective}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                >
                  <span className="spbsb-outcomes-index">{String(index + 1).padStart(2, "0")}</span>
                  <span>{objective}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="spbsb-outcomes-note">
            <h3 className="spbsb-outcomes-block-title">Outcomes</h3>
            <p className="spbsb-outcomes-helper">What graduates are expected to demonstrate.</p>
            <ul className="spbsb-outcomes-lines">
              {outcomes.map((outcome, index) => (
                <motion.li
                  className="spbsb-outcomes-line"
                  key={outcome}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.08 + index * 0.04 }}
                >
                  <span className="spbsb-outcomes-index">{String(index + 1).padStart(2, "0")}</span>
                  <span>{outcome}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.figure
          className="spbsb-outcomes-figure"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
        >
          <div className="spbsb-outcomes-image-panel">
            <Image
              src="/spbsb-objectives-outcomes.jpg"
              alt="Students collaborating on business analysis and reports"
              fill
              className="object-cover"
              sizes="(max-width: 980px) 100vw, 820px"
            />
          </div>
          <figcaption className="spbsb-outcomes-caption">
            <strong>Learning in action</strong>
            <span>
              Students learn through discussion, data, peer review, and practical work before ideas move into real business contexts.
            </span>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}

/* ── PROGRAMMES OFFERED SECTION ── */
function ProgrammesOfferedCseStyleSection() {
  const [activeTab, setActiveTab] = useState(0);

  const programmeGroups = [
    {
      level: "Postgraduate",
      icon: <GraduationCap size={18} />,
      items: [
        {
          program: "MBA (Master of Business Administration)",
          duration: "2 Years",
          details: (
            <>
              <strong>Focus:</strong> Industry-focused management education with digital, analytical, AI-enabled, and leadership-oriented learning.
            </>
          ),
        },
      ],
    },
    {
      level: "Doctoral",
      icon: <Microscope size={18} />,
      items: [
        {
          program: "Ph.D. in Management",
          duration: "As per University norms",
          details: (
            <>
              <strong>Focus:</strong> Research-led management scholarship for advanced academic, industry, and policy-oriented inquiry.
            </>
          ),
        },
      ],
    },
    {
      level: "Specialisations",
      icon: <BookOpen size={18} />,
      items: [
        {
          program: "AI for Business",
          duration: "MBA Specialisation Track",
          details: "Introduction to AI in Business, AI-enabled analytics, applied AI tools, AI governance, and digital innovation strategy.",
        },
        {
          program: "FinTech",
          duration: "MBA Specialisation Track",
          details: "Data-driven decision-making, blockchain, cryptocurrencies, digital payments, lending, AI/ML in FinTech, and RegTech.",
        },
        {
          program: "Digital Marketing",
          duration: "MBA Specialisation Track",
          details: "SEO, SEM, campaign strategy, social media analytics, CRM automation, content marketing, UI/UX, and quick commerce.",
        },
        {
          program: "Human Resource Management",
          duration: "MBA Specialisation Track",
          details: "Talent analytics, AI-driven recruitment, diversity, employee experience, HR technology, and leadership development.",
        },
        {
          program: "Marketing",
          duration: "MBA Specialisation Track",
          details: "Consumer behaviour, market research, brand strategy, global marketing, sales promotion, advertising, and automation-led commerce.",
        },
        {
          program: "Finance",
          duration: "MBA Specialisation Track",
          details: "Behavioral finance, investment strategies, risk management, derivatives, financial instruments, corporate valuation, AI-enabled financial modeling, sustainable finance, ESG practices, investment banking, and financial decision-making.",
        },
        {
          program: "Logistics & Supply Chain Management",
          duration: "MBA Specialisation Track",
          details: "Supply chain analytics, data-driven operations, sustainable logistics, green supply chain, global trade, compliance, regulations, warehouse automation, smart operations, e-SCM, last-mile delivery, and distribution.",
        },
        {
          program: "Entrepreneurship & Family Business",
          duration: "MBA Specialisation Track",
          details: "Startup funding, investment strategies, family business governance, legacy management, venture scaling, growth techniques, innovation, pivoting, business transformation, succession planning, and social entrepreneurship.",
        },
      ],
    },
    {
      level: "Certifications",
      icon: <Award size={18} />,
      items: [
        {
          program: "Cyber Security from EC Council",
          duration: "Additional Certification",
          details: "CEH (Certified Ethical Hacker), CSA (Certified SOC Analyst), CND (Certified Network Defender), and ECSS (Certified Security Specialist).",
        },
        {
          program: "Azure from Microsoft",
          duration: "Additional Certification",
          details: "AZ 900 Azure Fundamental, AI 900 AI Fundamentals, AI 102 Azure AI Engineer Associate, and DP 100 Data Scientist Associate.",
        },
      ],
    },
    {
      level: "Workshops",
      icon: <Compass size={18} />,
      items: [
        {
          program: "Value-added Workshops & Exposure",
          duration: "Applied Learning Add-on",
          details: "Design thinking, critical and strategic thinking, enterprise risk management, Industry 4.0 and 5.0, geo-political implications on business, and personal and professional resilience.",
        },
      ],
    },
  ];

  return (
    <section
      id="Programs"
      style={{
        padding: "100px 0",
        background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
        position: "relative",
        fontFamily: "'Sapient', 'Source Sans 3', sans-serif",
      }}
    >
      <style>{`
        .spbsb-cse-program-tabs::-webkit-scrollbar {
          display: none;
        }
        .spbsb-cse-program-tabs {
          scrollbar-width: none;
        }
        @media (max-width: 768px) {
          .spbsb-cse-program-section {
            padding: 72px 0 !important;
          }
          .spbsb-cse-program-heading {
            font-size: 38px !important;
          }
          .spbsb-cse-program-card {
            padding: 24px !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56 }}
        >
          <h2
            className="spbsb-cse-program-heading"
            style={{
              fontFamily: "'Zilla Slab', serif",
              fontSize: 48,
              fontWeight: 700,
              color: "#0A1F44",
              margin: "0 0 12px",
              lineHeight: 1.1,
              letterSpacing: 0,
            }}
          >
            Programs Offered
          </h2>
          <p style={{ fontSize: 16, color: "#64748B", margin: 0, letterSpacing: 0.2 }}>
            SP Bansal School of Business Programs | Tracks | Certifications | Workshops
          </p>
          <div style={{ marginTop: 24, fontSize: 15, color: "#4A5568", fontWeight: 400, maxWidth: 850, lineHeight: 1.6 }}>
            <span style={{ fontWeight: 700, color: "#E8871A", letterSpacing: 0.4, textTransform: "uppercase", fontSize: 13, marginRight: 8 }}>
              Level of Study:
            </span>
            MBA, Ph.D. in Management, industry-aligned specialisations, additional certifications, and value-added exposure designed around AI fluency, analytics, leadership, and contemporary business practice.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="spbsb-cse-program-tabs"
          style={{ display: "flex", gap: 16, borderBottom: "1px solid #E2E8F0", paddingBottom: 20, marginBottom: 40, overflowX: "auto" }}
        >
          {programmeGroups.map((cat, idx) => (
            <button
              key={cat.level}
              onClick={() => setActiveTab(idx)}
              style={{
                padding: "14px 32px",
                borderRadius: 12,
                background: activeTab === idx ? "#0A1F44" : "#F1F5F9",
                color: activeTab === idx ? "#FFFFFF" : "#475569",
                border: "1px solid",
                borderColor: activeTab === idx ? "#0A1F44" : "#E2E8F0",
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                display: "flex",
                alignItems: "center",
                gap: 12,
                boxShadow: activeTab === idx ? "0 8px 24px rgba(10,31,68,0.25)" : "none",
              }}
              onMouseEnter={(e) => {
                if (activeTab !== idx) {
                  e.currentTarget.style.background = "#E2E8F0";
                  e.currentTarget.style.color = "#0A1F44";
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== idx) {
                  e.currentTarget.style.background = "#F1F5F9";
                  e.currentTarget.style.color = "#475569";
                }
              }}
            >
              <span style={{ display: "flex", alignItems: "center", opacity: activeTab === idx ? 1 : 0.6 }}>{cat.icon}</span>
              {cat.level}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div
              style={{
                background: "#FDF1D6",
                border: "1px solid #FCD34D",
                borderRadius: 10,
                padding: "16px 24px",
                textAlign: "center",
                fontWeight: 800,
                color: "#92400E",
                fontSize: 18,
                marginBottom: 32,
                letterSpacing: 0.4,
                boxShadow: "0 4px 12px rgba(245, 158, 11, 0.05)",
              }}
            >
              {programmeGroups[activeTab].level} Courses
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24 }}>
              {programmeGroups[activeTab].items.map((prog, index) => (
                <motion.div
                  className="spbsb-cse-program-card"
                  key={prog.program}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    borderRadius: 16,
                    padding: "28px 36px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 18,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                    transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.08)";
                    e.currentTarget.style.borderColor = "#E8871A";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.03)";
                    e.currentTarget.style.borderColor = "#E2E8F0";
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16 }}>
                    <div>
                      <h3
                        style={{
                          fontFamily: "'Zilla Slab', serif",
                          fontSize: 26,
                          fontWeight: 700,
                          color: "#0A1F44",
                          margin: "0 0 10px",
                          letterSpacing: 0,
                        }}
                      >
                        {prog.program}
                      </h3>
                      <div
                        style={{
                          display: "inline-block",
                          background: "#FEF3C7",
                          color: "#92400E",
                          padding: "6px 14px",
                          borderRadius: 20,
                          fontSize: 13,
                          fontWeight: 700,
                          border: "1px solid #FDE68A",
                        }}
                      >
                        Duration: {prog.duration}
                      </div>
                    </div>
                    <a
                      href="https://admissions.geetauniversity.edu.in/"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        background: "#E8871A",
                        color: "#FFFFFF",
                        padding: "12px 28px",
                        borderRadius: 8,
                        fontSize: 14,
                        fontWeight: 800,
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        transition: "all 0.3s",
                        textTransform: "uppercase",
                        letterSpacing: 1,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#0A1F44";
                        e.currentTarget.style.boxShadow = "0 8px 20px rgba(10,31,68,0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#E8871A";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      Apply Now <ArrowRight size={16} />
                    </a>
                  </div>

                  <div style={{ height: 1, background: "#F1F5F9", width: "100%", margin: "4px 0" }} />

                  <div style={{ fontSize: 15, color: "#475569", lineHeight: 1.8, fontWeight: 400 }}>
                    {prog.details}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ── CURRICULUM EDGE & PEDAGOGY SECTION ── */
function CurriculumPedagogySection() {
  const pedagogyPoints = [
    {
      title: "Project-Based Learning with live industry projects.",
      color: "#F15A24",
      align: "left",
    },
    {
      title: "Experiential Learning through simulations and role-plays.",
      color: "#F59A2E",
      align: "right",
    },
    {
      title: "Case-Based Learning using Harvard, IIM, and global case repositories.",
      color: "#43C6B9",
      align: "left",
    },
    {
      title: "Internship-driven immersion and continuous industry engagement.",
      color: "#3B8CFF",
      align: "right",
    },
  ];

  const architecture = [
    {
      title: "Project-Based Learning",
      copy: "Students actively work on real-world projects in collaboration with industry partners, helping them build practical skills, teamwork, and problem-solving abilities.",
      color: "#F15A24",
      icon: BriefcaseBusiness,
    },
    {
      title: "Case-Based Learning",
      copy: "Students explore and analyze real industry case studies to strengthen critical thinking and develop effective, solution-oriented approaches.",
      color: "#F59A2E",
      icon: BookOpenCheck,
    },
    {
      title: "Experiential Learning",
      copy: "Through simulations, role-plays, and hands-on activities, students gain practical experience and apply concepts in real-life scenarios.",
      color: "#43C6B9",
      icon: Users,
    },
    {
      title: "Cognitive Skill Development",
      copy: "Focuses on enhancing critical thinking, creativity, decision-making, and innovation skills, preparing students for complex real-world challenges.",
      color: "#3B8CFF",
      icon: Target,
    },
    {
      title: "Industry-Aligned Specialisations",
      copy: "Carefully designed learning pathways ensure students gain relevant knowledge and skills aligned with current and future industry demands.",
      color: "#F27624",
      icon: GraduationCap,
    },
  ];

  return (
    <section className="spbsb-curriculum-section">
      <style>{`
        .spbsb-curriculum-section {
          width: 100%;
          padding: 78px 24px 88px;
          background:
            linear-gradient(90deg, rgba(10,31,68,0.035) 1px, transparent 1px),
            linear-gradient(180deg, rgba(10,31,68,0.025) 1px, transparent 1px),
            linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);
          background-size: 72px 72px, 72px 72px, auto;
          font-family: 'Sapient', 'Source Sans 3', sans-serif;
          color: #1F2937;
          position: relative;
          overflow: hidden;
        }
        .spbsb-curriculum-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(255,255,255,0.88), rgba(255,255,255,0.52));
          pointer-events: none;
        }
        .spbsb-curriculum-container {
          width: min(1140px, 100%);
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .spbsb-curriculum-title {
          font-family: 'Zilla Slab', serif;
          font-size: clamp(34px, 4.2vw, 54px);
          line-height: 1;
          color: #06245A;
          font-weight: 700;
          margin: 0 0 20px;
        }
        .spbsb-curriculum-copy {
          max-width: 980px;
          color: #2F3440;
          font-size: clamp(16px, 1.35vw, 18px);
          line-height: 1.6;
          font-weight: 500;
          margin: 0;
        }
        .spbsb-pedagogy-map {
          position: relative;
          margin: 38px 0 34px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-areas:
            "card-one card-two"
            "core core"
            "card-three card-four";
          gap: 20px 42px;
          align-items: stretch;
        }
        .spbsb-pedagogy-card {
          --pedagogy-color: #F27624;
          min-height: 104px;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 24px 28px;
          border: 1.5px solid var(--pedagogy-color);
          border-radius: 16px;
          background: rgba(255,255,255,0.92);
          box-shadow: 0 14px 30px rgba(10,31,68,0.055);
          color: #2A2F3B;
          font-size: clamp(15px, 1.25vw, 18px);
          line-height: 1.45;
          font-weight: 600;
        }
        .spbsb-pedagogy-card:nth-child(1) {
          grid-area: card-one;
        }
        .spbsb-pedagogy-card:nth-child(2) {
          grid-area: card-two;
        }
        .spbsb-pedagogy-card:nth-child(3) {
          grid-area: card-three;
        }
        .spbsb-pedagogy-card:nth-child(4) {
          grid-area: card-four;
        }
        .spbsb-pedagogy-check {
          color: var(--pedagogy-color);
          width: 20px;
          height: 20px;
          flex-shrink: 0;
        }
        .spbsb-pedagogy-core {
          grid-area: core;
          position: relative;
          width: min(300px, 72vw);
          aspect-ratio: 1.95 / 1;
          margin: 4px auto;
          border-radius: 999px;
          background:
            conic-gradient(from 190deg, #F15A24 0 25%, #F59A2E 25% 50%, #43C6B9 50% 75%, #3B8CFF 75% 100%);
          display: grid;
          place-items: center;
          box-shadow: 0 16px 36px rgba(10,31,68,0.16);
          z-index: 3;
        }
        .spbsb-pedagogy-core-inner {
          width: 68%;
          height: 68%;
          border-radius: 999px;
          background: #F6F7F9;
          display: grid;
          place-items: center;
          text-align: center;
          color: #06245A;
          font-family: 'Zilla Slab', serif;
          font-size: clamp(19px, 2vw, 27px);
          line-height: 1.02;
          font-weight: 700;
          box-shadow: inset 0 0 0 2px rgba(10,31,68,0.06), 0 6px 18px rgba(0,0,0,0.12);
          padding: 16px;
        }
        .spbsb-curriculum-ai-note {
          max-width: 1040px;
          margin: 0 0 42px;
          color: #2F3440;
          font-size: clamp(16px, 1.35vw, 18px);
          line-height: 1.58;
          font-weight: 500;
        }
        .spbsb-architecture-title {
          font-family: 'Zilla Slab', serif;
          color: #06245A;
          font-size: clamp(34px, 4vw, 52px);
          line-height: 1;
          font-weight: 700;
          margin: 0 0 24px;
        }
        .spbsb-architecture-list {
          display: grid;
          gap: 6px;
          background: #FFFFFF;
          border: 1px solid rgba(10,31,68,0.08);
          box-shadow: 0 18px 50px rgba(10,31,68,0.08);
          overflow: hidden;
        }
        .spbsb-architecture-row {
          --architecture-color: #F27624;
          display: grid;
          grid-template-columns: 130px minmax(0, 1fr);
          gap: 0;
          min-height: 74px;
          background: #F2F2F2;
          border-left: 10px solid var(--architecture-color);
        }
        .spbsb-architecture-icon-wrap {
          display: grid;
          place-items: center;
          background: rgba(255,255,255,0.32);
        }
        .spbsb-architecture-icon {
          width: 56px;
          height: 56px;
          border: 2px solid var(--architecture-color);
          border-radius: 999px;
          color: var(--architecture-color);
          display: grid;
          place-items: center;
          background: rgba(255,255,255,0.68);
        }
        .spbsb-architecture-icon svg {
          width: 28px;
          height: 28px;
          stroke-width: 1.8;
        }
        .spbsb-architecture-content {
          padding: 13px 20px 12px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .spbsb-architecture-content h3 {
          margin: 0 0 3px;
          color: var(--architecture-color);
          font-size: clamp(17px, 1.55vw, 22px);
          line-height: 1.05;
          font-weight: 850;
        }
        .spbsb-architecture-content p {
          margin: 0;
          color: #20242D;
          font-size: clamp(15px, 1.25vw, 18px);
          line-height: 1.35;
          font-weight: 500;
        }
        @media (max-width: 980px) {
          .spbsb-pedagogy-map {
            grid-template-columns: 1fr;
            grid-template-areas:
              "core"
              "card-one"
              "card-two"
              "card-three"
              "card-four";
            gap: 16px;
          }
          .spbsb-pedagogy-card:nth-child(1),
          .spbsb-pedagogy-card:nth-child(2),
          .spbsb-pedagogy-card:nth-child(3),
          .spbsb-pedagogy-card:nth-child(4) {
            padding: 20px 22px;
          }
          .spbsb-pedagogy-core {
            width: min(360px, 100%);
            margin: 0 auto 8px;
          }
        }
        @media (max-width: 640px) {
          .spbsb-curriculum-section {
            padding: 62px 18px 70px;
          }
          .spbsb-architecture-row {
            grid-template-columns: 82px minmax(0, 1fr);
            border-left-width: 7px;
          }
          .spbsb-architecture-icon {
            width: 48px;
            height: 48px;
          }
          .spbsb-architecture-content {
            padding: 14px 14px 14px 8px;
          }
        }
      `}</style>

      <div className="spbsb-curriculum-container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.58, ease: "easeOut" }}
        >
          <h2 className="spbsb-curriculum-title">Curriculum Edge &amp; Pedagogy</h2>
          <p className="spbsb-curriculum-copy">
            SPBSB&apos;s curriculum is reviewed every semester with inputs from industry leaders, faculty,
            alumni, students, and recruiters, keeping learning aligned with evolving business needs.
          </p>
        </motion.div>

        <div className="spbsb-pedagogy-map">
          {pedagogyPoints.map((point, index) => (
            <motion.div
              className="spbsb-pedagogy-card"
              key={point.title}
              style={{ "--pedagogy-color": point.color } as React.CSSProperties}
              initial={{ opacity: 0, x: point.align === "left" ? -28 : 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
            >
              <CheckCircle2 className="spbsb-pedagogy-check" aria-hidden="true" />
              <span>{point.title}</span>
            </motion.div>
          ))}

          <motion.div
            className="spbsb-pedagogy-core"
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
          >
            <div className="spbsb-pedagogy-core-inner">Pedagogical<br />Approach</div>
          </motion.div>
        </div>

        <motion.p
          className="spbsb-curriculum-ai-note"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          AI-infused pedagogy blends human creativity with technological intelligence to strengthen
          critical, creative, and lateral thinking.
        </motion.p>

        <motion.h2
          className="spbsb-architecture-title"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          Unique Learning Architecture
        </motion.h2>

        <div className="spbsb-architecture-list">
          {architecture.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                className="spbsb-architecture-row"
                key={item.title}
                style={{ "--architecture-color": item.color } as React.CSSProperties}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.05 }}
              >
                <div className="spbsb-architecture-icon-wrap">
                  <div className="spbsb-architecture-icon">
                    <Icon aria-hidden="true" />
                  </div>
                </div>
                <div className="spbsb-architecture-content">
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── LEADERSHIP ODYSSEY PROGRAM SECTION ── */
function LeadershipOdysseySection() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Profiling",
      color: "#F15A24",
      items: [
        "Aptitude and reasoning tests",
        "Psychometrics and personality assessment",
        "ATS-optimized resume audit",
        "Interest mapping and SWOT analysis",
      ],
    },
    {
      phase: "Phase 2",
      title: "Skill Blueprints",
      color: "#5C98D8",
      items: [
        "Customized modules in Communication, Negotiation, Technology, and Soft Skills",
        "Certifications (Microsoft, EC-Council, etc.)",
        "Quarterly progress tracking",
      ],
    },
    {
      phase: "Phase 3",
      title: "SWOT Odyssey Framework (SOF)",
      color: "#F59A2E",
      items: [
        "Strengths alignment to roles",
        "Weaknesses bridged through Bootcamps",
        "Opportunity identification via market trends",
        "Threat mitigation through tech and strategic adaptability",
      ],
    },
    {
      phase: "Phase 4",
      title: "Career Acceleration (WTO)",
      color: "#43C6B9",
      items: [
        "Workplace Thrive Quotient assessment",
        "Role-specific preparation",
        "Company culture and performance analysis",
        "Final placement readiness mapping",
      ],
    },
  ];

  return (
    <section className="spbsb-lop-section">
      <style>{`
        .spbsb-lop-section {
          width: 100%;
          padding: 86px 24px 92px;
          background:
            linear-gradient(90deg, rgba(10,31,68,0.032) 1px, transparent 1px),
            linear-gradient(180deg, rgba(10,31,68,0.024) 1px, transparent 1px),
            linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);
          background-size: 72px 72px, 72px 72px, auto;
          font-family: 'Sapient', 'Source Sans 3', sans-serif;
          color: #20242D;
          position: relative;
          overflow: hidden;
        }
        .spbsb-lop-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.55));
          pointer-events: none;
        }
        .spbsb-lop-section::after {
          content: '';
          position: absolute;
          right: -120px;
          bottom: -190px;
          width: 560px;
          height: 260px;
          background: linear-gradient(135deg, rgba(242,118,36,0.25), rgba(44,139,205,0.32));
          clip-path: polygon(0 100%, 72% 34%, 100% 100%);
          pointer-events: none;
        }
        .spbsb-lop-container {
          width: min(1180px, 100%);
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .spbsb-lop-header {
          max-width: 1060px;
          margin-bottom: 52px;
        }
        .spbsb-lop-title {
          font-family: 'Zilla Slab', serif;
          color: #06245A;
          font-size: clamp(38px, 4.8vw, 64px);
          line-height: 0.96;
          font-weight: 700;
          margin: 0 0 10px;
        }
        .spbsb-lop-subtitle {
          color: #06245A;
          font-size: clamp(19px, 2vw, 28px);
          line-height: 1.18;
          font-weight: 850;
          margin: 0 0 16px;
        }
        .spbsb-lop-copy {
          max-width: 1000px;
          margin: 0;
          color: #2D3441;
          font-size: clamp(16px, 1.45vw, 20px);
          line-height: 1.55;
          font-weight: 500;
        }
        .spbsb-lop-timeline {
          display: grid;
          gap: 22px;
          position: relative;
        }
        .spbsb-lop-phase {
          --phase-color: #F27624;
          display: grid;
          grid-template-columns: 122px minmax(0, 1fr);
          min-height: 128px;
          background: rgba(242,242,242,0.92);
          border-left: 14px solid var(--phase-color);
          box-shadow: 0 14px 34px rgba(10,31,68,0.055);
          overflow: hidden;
          position: relative;
        }
        .spbsb-lop-phase::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(255,255,255,0.55), rgba(255,255,255,0));
          pointer-events: none;
        }
        .spbsb-lop-phase-label {
          display: grid;
          place-items: center;
          position: relative;
          background: rgba(255,255,255,0.34);
        }
        .spbsb-lop-phase-label span {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          color: color-mix(in srgb, var(--phase-color) 42%, #FFFFFF);
          font-size: clamp(22px, 2.2vw, 31px);
          line-height: 1;
          font-weight: 900;
        }
        .spbsb-lop-phase-content {
          padding: 24px 30px 24px 34px;
          position: relative;
          z-index: 1;
        }
        .spbsb-lop-phase-title {
          margin: 0 0 8px;
          color: var(--phase-color);
          font-size: clamp(20px, 2vw, 27px);
          line-height: 1.12;
          font-weight: 900;
        }
        .spbsb-lop-items {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 5px;
        }
        .spbsb-lop-item {
          display: grid;
          grid-template-columns: 18px minmax(0, 1fr);
          gap: 9px;
          align-items: flex-start;
          color: #242832;
          font-size: clamp(15px, 1.35vw, 19px);
          line-height: 1.25;
          font-weight: 500;
        }
        .spbsb-lop-item::before {
          content: '';
          width: 9px;
          height: 2px;
          background: #242832;
          margin-top: 12px;
          opacity: 0.9;
        }
        @media (max-width: 760px) {
          .spbsb-lop-section {
            padding: 64px 18px 72px;
          }
          .spbsb-lop-header {
            margin-bottom: 34px;
          }
          .spbsb-lop-phase {
            grid-template-columns: 1fr;
            border-left-width: 8px;
          }
          .spbsb-lop-phase-label {
            place-items: start;
            padding: 18px 22px 0;
            background: transparent;
          }
          .spbsb-lop-phase-label span {
            writing-mode: horizontal-tb;
            transform: none;
            font-size: 16px;
            letter-spacing: 0.12em;
            text-transform: uppercase;
          }
          .spbsb-lop-phase-content {
            padding: 12px 22px 24px;
          }
        }
      `}</style>

      <div className="spbsb-lop-container">
        <motion.div
          className="spbsb-lop-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.58, ease: "easeOut" }}
        >
          <h2 className="spbsb-lop-title">Leadership Odyssey Program (LOP)</h2>
          <p className="spbsb-lop-subtitle">Individual Development Program (IDP) - Customized Career Plan</p>
          <p className="spbsb-lop-copy">
            SPBSB&apos;s Leadership Odyssey Program ensures every student receives a personalized career blueprint from Day One.
            It is conducted in four structured phases.
          </p>
        </motion.div>

        <div className="spbsb-lop-timeline">
          {phases.map((phase, index) => (
            <motion.article
              className="spbsb-lop-phase"
              key={phase.phase}
              style={{ "--phase-color": phase.color } as React.CSSProperties}
              initial={{ opacity: 0, x: -26 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
            >
              <div className="spbsb-lop-phase-label">
                <span>{phase.phase}</span>
              </div>
              <div className="spbsb-lop-phase-content">
                <h3 className="spbsb-lop-phase-title">{phase.title}</h3>
                <ul className="spbsb-lop-items">
                  {phase.items.map((item) => (
                    <li className="spbsb-lop-item" key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── IMMERSIVE LEARNING ENVIRONMENT SECTION ── */
function ImmersiveLearningEnvironmentSection() {
  const classroomNotes = [
    "Case conversations where students test ideas before they become decisions.",
    "Small-group work that turns laptops, data, and discussion into shared insight.",
    "Faculty-led prompts that help every student speak, question, and refine their point of view.",
  ];

  return (
    <section className="spbsb-immersive-section">
      <style>{`
        .spbsb-immersive-section {
          width: 100%;
          padding: 94px 24px 104px;
          background:
            linear-gradient(90deg, rgba(10,31,68,0.035) 1px, transparent 1px),
            linear-gradient(180deg, rgba(10,31,68,0.024) 1px, transparent 1px),
            linear-gradient(180deg, #fffdf8 0%, #f7f9fc 100%);
          background-size: 76px 76px, 76px 76px, auto;
          color: #0A1F44;
          font-family: 'Sapient', 'Source Sans 3', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .spbsb-immersive-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.86), rgba(255,255,255,0.54)),
            radial-gradient(circle at 14% 18%, rgba(242,118,36,0.09), transparent 32%);
          pointer-events: none;
        }
        .spbsb-immersive-container {
          width: min(1180px, 100%);
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .spbsb-immersive-grid {
          display: grid;
          grid-template-columns: minmax(320px, 0.48fr) minmax(0, 0.72fr);
          gap: 52px;
          align-items: center;
        }
        .spbsb-immersive-content {
          position: relative;
          z-index: 2;
        }
        .spbsb-immersive-kicker {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #F27624;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 15px;
        }
        .spbsb-immersive-kicker::before {
          content: '';
          width: 42px;
          height: 2px;
          background: #F27624;
        }
        .spbsb-immersive-title {
          margin: 0;
          font-family: 'Zilla Slab', serif;
          color: #06245A;
          font-size: clamp(35px, 4.4vw, 58px);
          line-height: 0.98;
          font-weight: 700;
          max-width: 520px;
        }
        .spbsb-immersive-copy {
          margin: 22px 0 0;
          max-width: 500px;
          color: #384253;
          font-size: 16px;
          line-height: 1.72;
          font-weight: 500;
        }
        .spbsb-immersive-note-card {
          margin-top: 30px;
          padding: 24px 26px;
          border-left: 5px solid #F27624;
          background: #FFFFFF;
          box-shadow: 0 18px 46px rgba(10,31,68,0.08);
          color: #293241;
          font-size: 15px;
          line-height: 1.62;
          font-weight: 550;
        }
        .spbsb-immersive-note-card strong {
          display: block;
          color: #06245A;
          font-family: 'Zilla Slab', serif;
          font-size: 23px;
          line-height: 1.1;
          margin-bottom: 8px;
        }
        .spbsb-immersive-notes {
          list-style: none;
          padding: 0;
          margin: 24px 0 0;
          display: grid;
          gap: 13px;
        }
        .spbsb-immersive-note {
          display: grid;
          grid-template-columns: 22px minmax(0, 1fr);
          gap: 11px;
          align-items: flex-start;
          color: #425066;
          font-size: 14.5px;
          line-height: 1.55;
          font-weight: 500;
        }
        .spbsb-immersive-note svg {
          width: 18px;
          height: 18px;
          margin-top: 3px;
          color: #F27624;
        }
        .spbsb-immersive-visual {
          position: relative;
          min-height: 620px;
        }
        .spbsb-immersive-visual::before {
          content: '';
          position: absolute;
          right: -18px;
          top: 34px;
          width: 74%;
          height: 82%;
          border: 1px solid rgba(10,31,68,0.12);
          background: rgba(255,255,255,0.6);
          z-index: 0;
        }
        .spbsb-immersive-media {
          position: relative;
          min-height: 520px;
          margin: 0 34px 0 0;
          border-radius: 0;
          overflow: hidden;
          background: #F4F7FB;
          border: 12px solid #FFFFFF;
          box-shadow: 0 30px 76px rgba(10,31,68,0.18);
          z-index: 1;
        }
        .spbsb-immersive-media::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(180deg, transparent 64%, rgba(10,31,68,0.28));
          pointer-events: none;
        }
        .spbsb-immersive-media img {
          object-position: center;
        }
        .spbsb-immersive-caption {
          position: absolute;
          left: 34px;
          bottom: 24px;
          z-index: 2;
          width: min(360px, calc(100% - 68px));
          padding: 18px 20px;
          background: #FFFFFF;
          box-shadow: 0 18px 46px rgba(10,31,68,0.15);
          color: #364255;
          font-size: 14px;
          line-height: 1.5;
          font-weight: 500;
        }
        .spbsb-immersive-caption strong {
          display: block;
          color: #06245A;
          font-family: 'Zilla Slab', serif;
          font-size: 22px;
          margin-bottom: 6px;
        }
        @media (max-width: 980px) {
          .spbsb-immersive-grid {
            grid-template-columns: 1fr;
          }
          .spbsb-immersive-content {
            order: -1;
          }
          .spbsb-immersive-visual {
            min-height: auto;
          }
          .spbsb-immersive-media {
            min-height: 460px;
            margin-right: 0;
          }
        }
        @media (max-width: 640px) {
          .spbsb-immersive-section {
            padding: 66px 18px 72px;
          }
          .spbsb-immersive-media {
            min-height: 330px;
            border-width: 7px;
          }
          .spbsb-immersive-caption {
            position: relative;
            left: auto;
            bottom: auto;
            width: calc(100% - 14px);
            margin: -18px auto 0;
          }
          .spbsb-immersive-note-card {
            padding: 20px;
          }
        }
      `}</style>

      <div className="spbsb-immersive-container">
        <div className="spbsb-immersive-grid">
          <motion.div
            className="spbsb-immersive-content"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.58, ease: "easeOut" }}
          >
            <div className="spbsb-immersive-kicker">Inside SPBSB</div>
            <h2 className="spbsb-immersive-title">A classroom built around conversation.</h2>
            <p className="spbsb-immersive-copy">
              The best business classrooms are not silent. They carry debate, curiosity, nervous first answers,
              better second answers, and the confidence that comes from being heard.
            </p>

            <div className="spbsb-immersive-note-card">
              <strong>Learning feels personal here.</strong>
              Students work through cases, presentations, peer feedback, and faculty-led discussion in a room that keeps them close to practice.
            </div>

            <ul className="spbsb-immersive-notes">
              {classroomNotes.map((note) => (
                <li className="spbsb-immersive-note" key={note}>
                  <CheckCircle2 aria-hidden="true" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="spbsb-immersive-visual"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.58, ease: "easeOut", delay: 0.08 }}
          >
            <figure className="spbsb-immersive-media">
              <Image
                src="/spbsb-immersive-classroom.jpg"
                alt="SP Bansal School of Business students in an interactive classroom"
                fill
                className="object-cover"
                sizes="(max-width: 980px) 100vw, 720px"
              />
            </figure>
            <figcaption className="spbsb-immersive-caption">
              <strong>Studio-style learning</strong>
              A room where students look up, speak up, and learn from the person sitting beside them.
            </figcaption>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── GLOBAL CERTIFICATIONS & INDUSTRY-READY SKILLS SECTION ── */
function GlobalCertificationsSection() {
  const certificationPartners = [
    { name: "EC-Council", detail: "Academia" },
    { name: "HubSpot", detail: "" },
    { name: "Microsoft", detail: "" },
    { name: "Microsoft", detail: "Azure" },
    { name: "GitHub", detail: "" },
  ];

  const immersionBlocks = [
    {
      title: "International Immersions with Global Certifications",
      image: "/spbsb-global-immersion-singapore.jpg",
      alt: "Singapore skyline with Merlion for international immersion",
      points: [
        "Learn from industry and academia experts.",
        "Participate in a ten-day learning experience in Dubai, Malaysia, or Europe.",
      ],
    },
    {
      title: "Immersion at IIM Kozhikode",
      image: "/spbsb-iim-kozhikode.jpg",
      alt: "IIM Kozhikode campus aerial view",
      points: [
        "Learn from experienced faculty and industry experts.",
        "Participate in a 7-day residential business experience at SPBSB.",
      ],
    },
  ];

  return (
    <section className="spbsb-global-cert-section">
      <style>{`
        .spbsb-global-cert-section {
          width: 100%;
          padding: 78px 24px 92px;
          background: #ffffff;
          color: #1d2430;
          font-family: 'Sapient', 'Source Sans 3', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .spbsb-global-cert-section::after {
          content: '';
          position: absolute;
          right: -60px;
          bottom: -44px;
          width: 360px;
          height: 150px;
          background:
            linear-gradient(150deg, transparent 0 46%, rgba(242,118,36,0.34) 46% 62%, transparent 62%),
            linear-gradient(24deg, transparent 0 34%, rgba(11,88,142,0.42) 34% 70%, transparent 70%);
          opacity: 0.95;
          pointer-events: none;
        }
        .spbsb-global-cert-container {
          width: min(1180px, 100%);
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .spbsb-global-cert-title {
          margin: 0;
          font-family: 'Zilla Slab', serif;
          color: #06245A;
          font-size: clamp(36px, 4.6vw, 62px);
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0;
        }
        .spbsb-global-cert-copy {
          margin: 20px 0 0;
          max-width: 1110px;
          color: #252b35;
          font-size: 17px;
          line-height: 1.56;
          font-weight: 520;
        }
        .spbsb-global-cert-logos {
          margin: 28px 0 30px;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 52px;
          align-items: center;
        }
        .spbsb-global-cert-logo {
          min-height: 72px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 12px 14px;
          background: linear-gradient(135deg, #ffffff 0%, #f4f7f8 100%);
          border: 1px solid #e3e8ec;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.75);
        }
        .spbsb-global-cert-logo strong {
          color: #1b0c57;
          font-family: 'Zilla Slab', serif;
          font-size: 24px;
          line-height: 0.98;
          font-weight: 700;
        }
        .spbsb-global-cert-logo span {
          margin-top: 2px;
          color: #1b0c57;
          font-size: 13px;
          line-height: 1;
          font-weight: 850;
        }
        .spbsb-global-cert-logo:nth-child(3) strong {
          font-size: 18px;
        }
        .spbsb-global-cert-logo:nth-child(3)::before {
          content: '';
          width: 54px;
          height: 36px;
          margin-bottom: 6px;
          background:
            linear-gradient(90deg, #1b0c57 0 48%, transparent 48% 52%, #1b0c57 52%),
            linear-gradient(#1b0c57 0 48%, transparent 48% 52%, #1b0c57 52%);
          background-blend-mode: normal;
        }
        .spbsb-global-cert-logo:nth-child(4) strong {
          font-size: 22px;
        }
        .spbsb-global-cert-logo:nth-child(5)::before {
          content: '';
          width: 42px;
          height: 42px;
          border-radius: 50%;
          margin-bottom: 4px;
          background: #1b0c57;
          box-shadow: inset 0 -10px 0 rgba(255,255,255,0.18);
        }
        .spbsb-global-cert-list {
          display: grid;
          gap: 20px;
        }
        .spbsb-global-cert-row {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(360px, 0.82fr);
          min-height: 150px;
          background: #f1f1f1;
        }
        .spbsb-global-cert-image {
          position: relative;
          min-height: 150px;
          overflow: hidden;
          background: #dce3ea;
        }
        .spbsb-global-cert-image img {
          object-position: center;
        }
        .spbsb-global-cert-info {
          padding: 28px 34px 26px 50px;
          background: #f2f2f2;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .spbsb-global-cert-info h3 {
          margin: 0 0 12px;
          padding-bottom: 10px;
          border-bottom: 1px dashed #cfd5dc;
          font-family: 'Zilla Slab', serif;
          color: #073464;
          font-size: clamp(27px, 2.6vw, 36px);
          line-height: 0.95;
          font-weight: 700;
        }
        .spbsb-global-cert-points {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 8px;
        }
        .spbsb-global-cert-point {
          display: grid;
          grid-template-columns: 22px minmax(0, 1fr);
          gap: 10px;
          color: #161d28;
          font-size: 17px;
          line-height: 1.45;
          font-weight: 650;
        }
        .spbsb-global-cert-point svg {
          width: 18px;
          height: 18px;
          color: #073464;
          margin-top: 3px;
        }
        @media (max-width: 980px) {
          .spbsb-global-cert-logos {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 16px;
          }
          .spbsb-global-cert-row {
            grid-template-columns: 1fr;
          }
          .spbsb-global-cert-image {
            min-height: 240px;
          }
          .spbsb-global-cert-info {
            padding: 28px;
          }
        }
        @media (max-width: 620px) {
          .spbsb-global-cert-section {
            padding: 58px 18px 68px;
          }
          .spbsb-global-cert-title {
            font-size: 38px;
          }
          .spbsb-global-cert-copy {
            font-size: 15.5px;
          }
          .spbsb-global-cert-logos {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
          }
          .spbsb-global-cert-logo {
            min-height: 62px;
          }
          .spbsb-global-cert-logo strong {
            font-size: 20px;
          }
          .spbsb-global-cert-info {
            padding: 24px 20px;
          }
          .spbsb-global-cert-point {
            font-size: 15.5px;
          }
        }
      `}</style>

      <div className="spbsb-global-cert-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <h2 className="spbsb-global-cert-title">Global Certifications, Industry-Ready Skills.</h2>
          <p className="spbsb-global-cert-copy">
            Geeta University has established strong partnerships with leading global organizations such as Cisco, Oracle, AWS, Microsoft, GitHub, Red Hat Academy, and several others to provide its students with world-class learning opportunities. These collaborations enable students to access cutting-edge technologies, industry-relevant tools, and real-world exposure that go beyond traditional classroom learning. Through specialized training programs and globally recognized certifications offered by platforms like edX, Coursera, and SAP, students develop practical, hands-on skills that align closely with current industry demands.
            <br />
            This robust industry-academia integration bridges the gap between theoretical knowledge and practical application, ensuring a holistic learning experience. Students benefit from expert-led sessions, workshops, and live projects, enhancing their problem-solving abilities and innovation mindset. As a result, they are not only academically proficient but also professionally skilled, making them highly competitive, adaptable, and career-ready to succeed in a dynamic and global workplace environment.
          </p>
        </motion.div>

        <motion.div
          className="spbsb-global-cert-logos"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
          aria-label="Certification partners"
        >
          {certificationPartners.map((partner) => (
            <div className="spbsb-global-cert-logo" key={`${partner.name}-${partner.detail || "logo"}`}>
              <strong>{partner.name}</strong>
              {partner.detail ? <span>{partner.detail}</span> : null}
            </div>
          ))}
        </motion.div>

        <div className="spbsb-global-cert-list">
          {immersionBlocks.map((block, index) => (
            <motion.article
              className="spbsb-global-cert-row"
              key={block.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
            >
              <div className="spbsb-global-cert-image">
                <Image
                  src={block.image}
                  alt={block.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 980px) 100vw, 600px"
                />
              </div>
              <div className="spbsb-global-cert-info">
                <h3>{block.title}</h3>
                <ul className="spbsb-global-cert-points">
                  {block.points.map((point) => (
                    <li className="spbsb-global-cert-point" key={point}>
                      <CheckCircle2 aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CORPORATE CONNECT SECTION ── */
function CorporateConnectSection() {
  const events = [
    {
      title: "Budget Analysis 2026",
      image: "/spbsb-budget-analysis-2026.png",
      alt: "Budget Analysis 2026 panel discussion at Geeta University",
      text: "The School of Commerce and Business Management at Geeta University successfully hosted a Panel Discussion on Budget Analysis - 2026. The event hit its mark by smoothly integrating academic theories with real-world industry perspectives. Our expert panelists examined closely the latest fiscal policies, providing our students and faculty with a roadmap to understanding the economic landscape of the coming year.",
      imageFirst: true,
    },
    {
      title: "Fintech conclave 2026",
      image: "/spbsb-fintech-conclave-2026.jpg",
      alt: "FinTech Conclave 2026 panel discussion at Geeta University",
      text: "FinTech Conclave 2026 at Geeta University hosted a panel on Intelligent Finance: AI, Innovation & the Future of FinTech. Experts discussed the startup ecosystem, regulatory frameworks, and the roles of RBI, SEBI, and NPCI. The session highlighted technological skills driving GCC growth and expanding BFSI opportunities, while guiding students on essential skills required for careers in the FinTech industry.",
      imageFirst: false,
    },
  ];

  return (
    <section className="spbsb-corporate-connect-section">
      <style>{`
        .spbsb-corporate-connect-section {
          width: 100%;
          padding: 78px 24px 92px;
          background: #ffffff;
          color: #242832;
          font-family: 'Sapient', 'Source Sans 3', sans-serif;
          overflow: hidden;
        }
        .spbsb-corporate-connect-container {
          width: min(1180px, 100%);
          margin: 0 auto;
        }
        .spbsb-corporate-connect-title {
          margin: 0;
          font-family: 'Zilla Slab', serif;
          color: #064b6a;
          font-size: clamp(38px, 4.8vw, 64px);
          line-height: 0.98;
          font-weight: 700;
          letter-spacing: 0;
        }
        .spbsb-corporate-connect-copy {
          margin: 18px 0 44px;
          max-width: 1135px;
          color: #2f3138;
          font-size: 17.5px;
          line-height: 1.56;
          font-weight: 520;
        }
        .spbsb-corporate-connect-list {
          display: grid;
          gap: 30px;
        }
        .spbsb-corporate-connect-card {
          display: grid;
          grid-template-columns: minmax(0, 0.72fr) minmax(0, 1fr);
          height: 282px;
          background: #f4f4f4;
          border-radius: 18px;
          overflow: hidden;
        }
        .spbsb-corporate-connect-card.is-reverse {
          grid-template-columns: minmax(0, 1fr) minmax(0, 0.72fr);
        }
        .spbsb-corporate-connect-media {
          position: relative;
          min-height: 100%;
          background: #dfe5ea;
          overflow: hidden;
        }
        .spbsb-corporate-connect-media img {
          object-position: center;
        }
        .spbsb-corporate-connect-content {
          padding: 26px 38px 28px;
          background: #f4f4f4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 0;
        }
        .spbsb-corporate-connect-heading {
          margin: 0 0 14px;
          padding-bottom: 11px;
          border-bottom: 1px dashed #c8cdd2;
          font-family: 'Zilla Slab', serif;
          color: #064b6a;
          font-size: clamp(27px, 2.6vw, 36px);
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0;
        }
        .spbsb-corporate-connect-text {
          margin: 0;
          color: #30333a;
          font-size: 16px;
          line-height: 1.52;
          font-weight: 520;
        }
        @media (max-width: 980px) {
          .spbsb-corporate-connect-copy {
            margin-bottom: 34px;
          }
          .spbsb-corporate-connect-card,
          .spbsb-corporate-connect-card.is-reverse {
            grid-template-columns: 1fr;
            height: auto;
          }
          .spbsb-corporate-connect-card.is-reverse .spbsb-corporate-connect-media {
            order: -1;
          }
          .spbsb-corporate-connect-media {
            min-height: 280px;
          }
          .spbsb-corporate-connect-content {
            padding: 28px;
          }
        }
        @media (max-width: 620px) {
          .spbsb-corporate-connect-section {
            padding: 58px 18px 66px;
          }
          .spbsb-corporate-connect-title {
            font-size: 40px;
          }
          .spbsb-corporate-connect-copy {
            font-size: 15.5px;
            margin-bottom: 28px;
          }
          .spbsb-corporate-connect-list {
            gap: 22px;
          }
          .spbsb-corporate-connect-media {
            min-height: 220px;
          }
          .spbsb-corporate-connect-content {
            padding: 24px 20px;
          }
          .spbsb-corporate-connect-heading {
            font-size: 28px;
          }
          .spbsb-corporate-connect-text {
            font-size: 15px;
          }
        }
      `}</style>

      <div className="spbsb-corporate-connect-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <h2 className="spbsb-corporate-connect-title">Corporate Connect</h2>
          <p className="spbsb-corporate-connect-copy">
            Geeta University hosted a series of impactful academic and industry-oriented events, including the Budget Analysis 2026 panel discussion, which connected fiscal policies with real-world insights. The FinTech Conclave 2026 brought together industry experts to explore innovation, regulation, and emerging opportunities in the financial ecosystem. A workshop on Enabling Indigenous Technologies encouraged collaboration between academia and industry to promote sustainable, region-focused solutions. Additionally, the Cyber Security workshop equipped students with essential skills to tackle digital threats and ensure data protection. Complementing these, the Design Thinking workshop fostered creativity, empathy, and problem-solving, empowering students with a future-ready, innovation-driven mindset.
          </p>
        </motion.div>

        <div className="spbsb-corporate-connect-list">
          {events.map((event, index) => (
            <motion.article
              className={`spbsb-corporate-connect-card${event.imageFirst ? "" : " is-reverse"}`}
              key={event.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
            >
              {event.imageFirst ? (
                <div className="spbsb-corporate-connect-media">
                  <Image
                    src={event.image}
                    alt={event.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 980px) 100vw, 520px"
                  />
                </div>
              ) : null}

              <div className="spbsb-corporate-connect-content">
                <h3 className="spbsb-corporate-connect-heading">{event.title}</h3>
                <p className="spbsb-corporate-connect-text">{event.text}</p>
              </div>

              {!event.imageFirst ? (
                <div className="spbsb-corporate-connect-media">
                  <Image
                    src={event.image}
                    alt={event.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 980px) 100vw, 520px"
                  />
                </div>
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CORPORATE CONNECT WORKSHOPS SECTION ── */
function CorporateConnectWorkshopsSection() {
  const workshops = [
    {
      title: "Workshop on Enabling Indigenous Technologies",
      image: "/spbsb-indigenous-technologies-workshop.jpg",
      alt: "Workshop on Enabling Indigenous Technologies group at Geeta University",
      text: "Geeta University hosted a Workshop on Enabling Indigenous Technologies, organized by the State Support Mission (Haryana Government) in collaboration with DST-TEC, Panjab University. The event bridged the gap between academia and industry, showcasing innovative research, especially in textiles. It fostered dialogue between researchers and industry leaders, enabling practical solutions to real-world challenges while promoting applied research and sustainable business development.",
      imageFirst: true,
    },
    {
      title: "Workshop on Cyber Security by EC Council",
      image: "/spbsb-cyber-security-workshop.jpg",
      alt: "Cyber Security workshop by EC Council group at Geeta University",
      text: "The School of Commerce and Business Management at Geeta University organized a Cyber Security workshop by EC-Council by Mr. Vikram Kumar Jha, Senior Manager and MCTS-certified trainer. The session covered cyber threats, phishing, fraud, and malware, along with hands-on tools for risk prevention. Students learned safe browsing, digital responsibility, and fundamentals of securing networks, data, and servers to safeguard organizational assets.",
      imageFirst: false,
    },
    {
      title: "Workshop on Design Thinking",
      image: "/spbsb-design-thinking-workshop.jpg",
      alt: "Design Thinking workshop at Geeta University",
      text: "The School of Commerce and Business Management at Geeta University hosted a Design Thinking workshop featuring Prof. Vijay Ghei. The session explored empathy, ideation, and prototyping, emphasizing human-centered approaches like empathy mapping. Faculty and students learned to create innovative solutions, enabling them to address real-world challenges while fostering critical and creative thinking for a future-ready, problem-solving oriented curriculum.",
      imageFirst: true,
    },
  ];

  return (
    <section className="spbsb-corporate-workshops-section">
      <style>{`
        .spbsb-corporate-workshops-section {
          width: 100%;
          padding: 0 24px 92px;
          background: #ffffff;
          color: #242832;
          font-family: 'Sapient', 'Source Sans 3', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .spbsb-corporate-workshops-section::after {
          content: '';
          position: absolute;
          right: -54px;
          bottom: -52px;
          width: 350px;
          height: 140px;
          background:
            linear-gradient(160deg, transparent 0 42%, rgba(242,118,36,0.25) 42% 58%, transparent 58%),
            linear-gradient(22deg, transparent 0 30%, rgba(11,88,142,0.45) 30% 72%, transparent 72%);
          pointer-events: none;
        }
        .spbsb-corporate-workshops-container {
          width: min(1180px, 100%);
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .spbsb-corporate-workshops-list {
          display: grid;
          gap: 34px;
        }
        .spbsb-corporate-workshops-card {
          display: grid;
          grid-template-columns: minmax(300px, 0.72fr) minmax(0, 1fr);
          height: 282px;
          background: #f4f4f4;
          border-radius: 18px;
          overflow: hidden;
        }
        .spbsb-corporate-workshops-card.is-reverse {
          grid-template-columns: minmax(0, 1fr) minmax(300px, 0.72fr);
        }
        .spbsb-corporate-workshops-media {
          position: relative;
          min-height: 100%;
          background: #dce4ea;
          overflow: hidden;
        }
        .spbsb-corporate-workshops-media::after {
          content: '';
          position: absolute;
          inset: auto 0 0;
          height: 42%;
          background: linear-gradient(180deg, transparent, rgba(3,58,83,0.62));
          pointer-events: none;
        }
        .spbsb-corporate-workshops-card.is-reverse .spbsb-corporate-workshops-media::after {
          display: none;
        }
        .spbsb-corporate-workshops-media img {
          object-position: center;
        }
        .spbsb-corporate-workshops-content {
          padding: 26px 38px 28px;
          background: #f4f4f4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 0;
        }
        .spbsb-corporate-workshops-heading {
          margin: 0 0 14px;
          padding-bottom: 12px;
          border-bottom: 1px dashed #c8cdd2;
          font-family: 'Zilla Slab', serif;
          color: #064b6a;
          font-size: clamp(27px, 2.55vw, 35px);
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0;
        }
        .spbsb-corporate-workshops-text {
          margin: 0;
          color: #30333a;
          font-size: 16px;
          line-height: 1.48;
          font-weight: 520;
        }
        @media (max-width: 980px) {
          .spbsb-corporate-workshops-section {
            padding-top: 8px;
          }
          .spbsb-corporate-workshops-card,
          .spbsb-corporate-workshops-card.is-reverse {
            grid-template-columns: 1fr;
            height: auto;
          }
          .spbsb-corporate-workshops-card.is-reverse .spbsb-corporate-workshops-media {
            order: -1;
          }
          .spbsb-corporate-workshops-media {
            min-height: 300px;
          }
          .spbsb-corporate-workshops-content {
            padding: 28px;
          }
        }
        @media (max-width: 620px) {
          .spbsb-corporate-workshops-section {
            padding: 0 18px 68px;
          }
          .spbsb-corporate-workshops-list {
            gap: 24px;
          }
          .spbsb-corporate-workshops-media {
            min-height: 230px;
          }
          .spbsb-corporate-workshops-content {
            padding: 24px 20px;
          }
          .spbsb-corporate-workshops-heading {
            font-size: 28px;
            line-height: 1;
          }
          .spbsb-corporate-workshops-text {
            font-size: 15px;
          }
        }
      `}</style>

      <div className="spbsb-corporate-workshops-container">
        <div className="spbsb-corporate-workshops-list">
          {workshops.map((workshop, index) => (
            <motion.article
              className={`spbsb-corporate-workshops-card${workshop.imageFirst ? "" : " is-reverse"}`}
              key={workshop.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
            >
              {workshop.imageFirst ? (
                <div className="spbsb-corporate-workshops-media">
                  <Image
                    src={workshop.image}
                    alt={workshop.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 980px) 100vw, 520px"
                  />
                </div>
              ) : null}

              <div className="spbsb-corporate-workshops-content">
                <h3 className="spbsb-corporate-workshops-heading">{workshop.title}</h3>
                <p className="spbsb-corporate-workshops-text">{workshop.text}</p>
              </div>

              {!workshop.imageFirst ? (
                <div className="spbsb-corporate-workshops-media">
                  <Image
                    src={workshop.image}
                    alt={workshop.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 980px) 100vw, 520px"
                  />
                </div>
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── WHY SPBSB SECTION ── */
function WhySpbsbSection() {
  const reasons = [
    {
      title: "Industry-Designed Curriculum",
      body: (
        <>
          Education is not traditionally - it is <strong>Transformational.</strong> Our programs are designed in
          collaboration with leaders and experts from world&apos;s most reputed companies ensuring
          every concept taught is aligned with real-world business challenges and caters to future
          industry demands.
        </>
      ),
    },
    {
      title: "Academic Excellence",
      body: "Academic framework is strengthened by advisory support from senior academicians of premier institutions, ensuring a perfect blend of conceptual rigor, research orientation, and academic excellence.",
    },
    {
      title: "Certifications that Give You a Global Edge",
      body: "Multiple globally recognized certifications integrated within the program ensuring an academic edge with credentials that matter across industries and geographies",
    },
    {
      title: "Experiential & Holistic Learning",
      body: "Experiential, AI-powered, student-centric pedagogy, nurturing leaders who can think critically, act ethically, and innovate fearlessly.",
    },
    {
      title: "SPBSB Triedge Advantage",
      body: "Insight. Articulate. Innovate. A powerful ecosystem that transforms students into tech-enabled, industry-ready, and globally competent business leaders.",
    },
  ];

  return (
    <section className="spbsb-why-section">
      <style>{`
        .spbsb-why-section {
          width: 100%;
          padding: 54px 24px 66px;
          background: #ffffff;
          color: #242832;
          font-family: 'Sapient', 'Source Sans 3', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .spbsb-why-section::after {
          content: '';
          position: absolute;
          right: -52px;
          bottom: -54px;
          width: 300px;
          height: 120px;
          background:
            linear-gradient(160deg, transparent 0 42%, rgba(242,118,36,0.22) 42% 58%, transparent 58%),
            linear-gradient(22deg, transparent 0 30%, rgba(11,88,142,0.42) 30% 72%, transparent 72%);
          pointer-events: none;
        }
        .spbsb-why-container {
          width: min(1120px, 100%);
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .spbsb-why-title {
          margin: 0;
          font-family: 'Zilla Slab', serif;
          color: #064b6a;
          font-size: clamp(34px, 3.8vw, 50px);
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0;
        }
        .spbsb-why-subtitle {
          margin: 6px 0 22px;
          color: #292b31;
          font-size: clamp(18px, 2.1vw, 28px);
          line-height: 1.18;
          font-weight: 500;
          letter-spacing: 0.035em;
        }
        .spbsb-why-list {
          display: grid;
          gap: 12px;
        }
        .spbsb-why-card {
          padding: 18px 38px 20px;
          background: rgba(248, 248, 248, 0.92);
          border: 1px solid #dfe3e6;
          border-radius: 18px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .spbsb-why-card h3 {
          margin: 0 0 7px;
          font-family: 'Zilla Slab', serif;
          color: #064b6a;
          font-size: clamp(20px, 2vw, 27px);
          line-height: 1.08;
          font-weight: 700;
          letter-spacing: 0.01em;
        }
        .spbsb-why-card p {
          margin: 0;
          color: #2c2f36;
          font-size: clamp(14.5px, 1.4vw, 18px);
          line-height: 1.45;
          font-weight: 500;
          letter-spacing: 0.025em;
        }
        .spbsb-why-card strong {
          font-style: italic;
          font-weight: 850;
        }
        @media (max-width: 900px) {
          .spbsb-why-card {
            padding: 18px 24px 20px;
          }
          .spbsb-why-subtitle,
          .spbsb-why-card p {
            letter-spacing: 0.03em;
          }
        }
        @media (max-width: 620px) {
          .spbsb-why-section {
            padding: 48px 18px 58px;
          }
          .spbsb-why-title {
            font-size: 34px;
          }
          .spbsb-why-subtitle {
            font-size: 18px;
            line-height: 1.2;
            margin-bottom: 18px;
          }
          .spbsb-why-list {
            gap: 12px;
          }
          .spbsb-why-card {
            border-radius: 16px;
            padding: 17px 18px;
          }
          .spbsb-why-card h3 {
            font-size: 22px;
            line-height: 1.06;
          }
          .spbsb-why-card p {
            font-size: 15.5px;
            line-height: 1.45;
            letter-spacing: 0.01em;
          }
        }
      `}</style>

      <div className="spbsb-why-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <h2 className="spbsb-why-title">Why SPBSB</h2>
          <p className="spbsb-why-subtitle">Where Future Leaders Are Engineered</p>
        </motion.div>

        <div className="spbsb-why-list">
          {reasons.map((reason, index) => (
            <motion.article
              className="spbsb-why-card"
              key={reason.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.48, ease: "easeOut", delay: index * 0.05 }}
            >
              <h3>{reason.title}</h3>
              <p>{reason.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── ADMISSION PROCESS SECTION ── */
function AdmissionProcessSection() {
  const selectionSteps = [
    "Registration (Online/Offline)",
    "Profile Screening",
    "GDPI Process (In-Person)",
  ];

  const gdpiSteps = [
    "SOP Submission",
    "Written Case Analysis",
    "Presentation (Lecturette)",
    "Personal Interview",
  ];

  return (
    <section className="spbsb-admission-section">
      <style>{`
        .spbsb-admission-section {
          width: 100%;
          padding: 78px 24px 84px;
          background:
            linear-gradient(90deg, rgba(6, 75, 106, 0.035) 1px, transparent 1px),
            linear-gradient(rgba(6, 75, 106, 0.028) 1px, transparent 1px),
            radial-gradient(circle at 12% 14%, rgba(232, 135, 26, 0.11), transparent 30%),
            linear-gradient(180deg, #fbfcfa 0%, #f5f8fb 100%);
          background-size: 74px 74px, 74px 74px, auto, auto;
          color: #06275a;
          font-family: 'Sapient', 'Source Sans 3', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .spbsb-admission-section::before {
          content: '';
          position: absolute;
          right: -150px;
          top: -130px;
          width: 390px;
          height: 390px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(66, 188, 180, 0.14), transparent 68%);
          pointer-events: none;
        }
        .spbsb-admission-container {
          width: min(1180px, 100%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.72fr);
          gap: 34px;
          align-items: stretch;
          position: relative;
          z-index: 1;
        }
        .spbsb-admission-panel {
          background: rgba(255, 255, 255, 0.86);
          border: 1px solid rgba(6, 75, 106, 0.08);
          border-radius: 18px;
          box-shadow: 0 18px 42px rgba(10, 31, 68, 0.08);
          padding: clamp(28px, 3.6vw, 42px);
          color: #152236;
          overflow: hidden;
          position: relative;
          backdrop-filter: blur(8px);
        }
        .spbsb-admission-panel::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 150px;
          height: 150px;
          background: linear-gradient(135deg, rgba(232,135,26,0.12), transparent 70%);
          pointer-events: none;
        }
        .spbsb-admission-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin: 0 0 14px;
          color: #c97516;
          font-size: 12px;
          line-height: 1;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 800;
        }
        .spbsb-admission-eyebrow::before {
          content: '';
          width: 34px;
          height: 2px;
          background: currentColor;
        }
        .spbsb-admission-title {
          margin: 0;
          color: #06275a;
          font-family: 'Zilla Slab', serif;
          font-size: clamp(32px, 3.6vw, 48px);
          line-height: 1.02;
          font-weight: 700;
          letter-spacing: 0;
        }
        .spbsb-admission-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.96fr) minmax(0, 1fr);
          gap: 26px;
          margin-top: 30px;
        }
        .spbsb-admission-copy {
          min-width: 0;
        }
        .spbsb-admission-selection {
          padding-left: 28px;
          border-left: 1px solid rgba(6, 39, 90, 0.16);
        }
        .spbsb-admission-kicker {
          display: block;
          margin-bottom: 12px;
          color: #064b6a;
          font-family: 'Zilla Slab', serif;
          font-size: clamp(21px, 2.1vw, 27px);
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0;
        }
        .spbsb-admission-copy p {
          margin: 0;
          color: #354154;
          font-size: 15.5px;
          line-height: 1.68;
          font-weight: 500;
          letter-spacing: 0.01em;
        }
        .spbsb-admission-steps {
          display: grid;
          gap: 11px;
          padding: 0;
          margin: 0;
          list-style: none;
        }
        .spbsb-admission-step {
          display: grid;
          grid-template-columns: 24px minmax(0, 1fr);
          gap: 10px;
          align-items: start;
          color: #123157;
          font-size: 16px;
          line-height: 1.28;
          font-weight: 750;
        }
        .spbsb-admission-step svg {
          margin-top: 1px;
          color: #e8871a;
          width: 18px;
          height: 18px;
          stroke-width: 2.4;
        }
        .spbsb-admission-substeps {
          grid-column: 2;
          display: grid;
          gap: 5px;
          margin: 6px 0 0;
          padding: 0;
          list-style: none;
          color: #556172;
          font-size: 14.5px;
          line-height: 1.35;
          font-weight: 600;
        }
        .spbsb-admission-substeps li {
          position: relative;
          padding-left: 14px;
        }
        .spbsb-admission-substeps li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.72em;
          width: 6px;
          height: 1px;
          background: #5e6877;
        }
        .spbsb-admission-visual {
          margin: 0;
          min-height: 500px;
          border-radius: 18px;
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.55), rgba(255,255,255,0.16)),
            #eef3f7;
          box-shadow: 0 20px 48px rgba(10, 31, 68, 0.12);
          border: 1px solid rgba(6, 75, 106, 0.08);
        }
        .spbsb-admission-visual::before {
          content: '';
          position: absolute;
          inset: 12px;
          border: 1px solid rgba(232, 135, 26, 0.22);
          border-radius: 14px;
          z-index: 2;
          pointer-events: none;
        }
        .spbsb-admission-visual img {
          padding: 18px;
          object-fit: contain;
          object-position: center;
          filter: saturate(1.05) contrast(1.04);
        }
        .spbsb-admission-caption {
          position: absolute;
          left: 26px;
          right: 26px;
          bottom: 26px;
          z-index: 3;
          padding: 15px 18px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.86);
          border: 1px solid rgba(6, 75, 106, 0.08);
          box-shadow: 0 14px 28px rgba(10, 31, 68, 0.11);
          backdrop-filter: blur(10px);
        }
        .spbsb-admission-caption strong {
          display: block;
          color: #06275a;
          font-family: 'Zilla Slab', serif;
          font-size: 22px;
          line-height: 1.08;
          font-weight: 700;
          letter-spacing: 0;
        }
        .spbsb-admission-caption span {
          display: block;
          margin-top: 5px;
          color: #d8841c;
          font-size: 13px;
          line-height: 1.4;
          font-weight: 700;
          letter-spacing: 0.11em;
          text-transform: uppercase;
        }
        @media (max-width: 1020px) {
          .spbsb-admission-container {
            grid-template-columns: 1fr;
          }
          .spbsb-admission-visual {
            min-height: 460px;
          }
          .spbsb-admission-visual img {
            object-fit: contain;
          }
        }
        @media (max-width: 760px) {
          .spbsb-admission-section {
            padding: 54px 18px 62px;
          }
          .spbsb-admission-panel {
            border-radius: 20px;
            padding: 26px 20px;
          }
          .spbsb-admission-grid {
            grid-template-columns: 1fr;
            gap: 24px;
            margin-top: 26px;
          }
          .spbsb-admission-selection {
            padding-left: 0;
            padding-top: 22px;
            border-left: 0;
            border-top: 1px solid rgba(6, 39, 90, 0.16);
          }
          .spbsb-admission-copy p {
            font-size: 15.5px;
            line-height: 1.65;
          }
          .spbsb-admission-step {
            font-size: 16px;
          }
          .spbsb-admission-visual {
            min-height: 420px;
            border-radius: 22px;
          }
          .spbsb-admission-caption {
            left: 22px;
            right: 22px;
            bottom: 22px;
          }
        }
      `}</style>

      <div className="spbsb-admission-container">
        <motion.div
          className="spbsb-admission-panel"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.58, ease: "easeOut" }}
        >
          <span className="spbsb-admission-eyebrow">MBA Admissions</span>
          <h2 className="spbsb-admission-title">Admission Process (MBA)</h2>

          <div className="spbsb-admission-grid">
            <article className="spbsb-admission-copy">
              <span className="spbsb-admission-kicker">Eligibility</span>
              <p>
                Candidates must hold a minimum three-year Bachelor&apos;s degree with at least
                50% marks from a recognized university approved by UGC/AIU. Final-year students
                are also eligible to apply for provisional admission. Applicants may submit valid
                scores from entrance exams such as CAT, XAT, CMAT, MAT, GMAT, CUET, or ATMA.
              </p>
            </article>

            <article className="spbsb-admission-copy spbsb-admission-selection">
              <span className="spbsb-admission-kicker">Selection Process</span>
              <ul className="spbsb-admission-steps">
                {selectionSteps.map((step) => (
                  <li className="spbsb-admission-step" key={step}>
                    <CheckCircle2 aria-hidden="true" />
                    <span>{step}</span>
                    {step === "GDPI Process (In-Person)" ? (
                      <ul className="spbsb-admission-substeps">
                        {gdpiSteps.map((gdpiStep) => (
                          <li key={gdpiStep}>{gdpiStep}</li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </motion.div>

        <motion.figure
          className="spbsb-admission-visual"
          initial={{ opacity: 0, x: 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.68, ease: "easeOut", delay: 0.1 }}
        >
          <Image
            src="/spbsb-admission-convocation.jpg"
            alt="Geeta University convocation ceremony"
            fill
            className="object-contain"
            sizes="(max-width: 1020px) 100vw, 420px"
          />
          <figcaption className="spbsb-admission-caption">
            <strong>Begin with clarity. Graduate with confidence.</strong>
            <span>SPBSB admission pathway</span>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}

/* ── RICH LEARNING SECTION ── */
function RichLearningSection() {
  const richLearningPoints = [
    "Personal Growth Lab with Reflection Exercises for Self-Improvement and Personal Branding",
    "Design Thinking Certification and Ideation Lab",
    "Incubation Support from Incubation Centre",
    "Academic Advisory Board of Faculty from IIMs",
    "Corporate Advisory Board of CXOs of renowned companies",
    "Faculty with qualifications from IIMs, IITs & other premier institutions",
    "Certifications from IIM Kozhikode",
    "Certifications and Immersions to MDIS, Singapore, Dubai and Malaysia",
  ];

  const ecosystemItems = [
    {
      title: "Geeta University",
      text: "AI-enabled multidisciplinary campus",
      color: "#f0441b",
    },
    {
      title: "Geeta Finishing School (GFS)",
      text: "Communication & Corporate Readiness",
      color: "#3f91d4",
    },
    {
      title: "Geeta Technical Hub (GTH)",
      text: "Advanced Technology, Certifications, and Industry Skills",
      color: "#12b9ae",
    },
  ];

  return (
    <section className="spbsb-rich-section">
      <style>{`
        .spbsb-rich-section {
          width: 100%;
          padding: 76px 24px 82px;
          background:
            linear-gradient(90deg, rgba(6,75,106,0.035) 1px, transparent 1px),
            linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          background-size: 72px 72px, auto;
          color: #222832;
          font-family: 'Sapient', 'Source Sans 3', sans-serif;
          overflow: hidden;
          position: relative;
        }
        .spbsb-rich-section::after {
          content: '';
          position: absolute;
          right: -90px;
          bottom: -70px;
          width: 360px;
          height: 150px;
          background:
            linear-gradient(160deg, transparent 0 40%, rgba(232,135,26,0.2) 40% 58%, transparent 58%),
            linear-gradient(20deg, transparent 0 31%, rgba(16,128,177,0.36) 31% 74%, transparent 74%);
          pointer-events: none;
        }
        .spbsb-rich-container {
          width: min(1180px, 100%);
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .spbsb-rich-card {
          position: relative;
          padding: clamp(34px, 4.4vw, 56px) clamp(28px, 5vw, 68px);
          background:
            linear-gradient(135deg, rgba(255,255,255,0.92), rgba(246,247,249,0.96)),
            #f4f5f7;
          border: 1px solid rgba(6, 75, 106, 0.08);
          border-radius: 34px;
          box-shadow: 0 26px 70px rgba(10, 31, 68, 0.1);
          overflow: hidden;
        }
        .spbsb-rich-card::before {
          content: '';
          position: absolute;
          left: -78px;
          top: -70px;
          width: 230px;
          height: 230px;
          background: rgba(6, 75, 106, 0.07);
          transform: rotate(-16deg);
          border-radius: 34px;
        }
        .spbsb-rich-title {
          position: relative;
          margin: 0 0 24px;
          color: #064b6a;
          font-family: 'Zilla Slab', serif;
          font-size: clamp(34px, 4.2vw, 56px);
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0;
        }
        .spbsb-rich-list {
          position: relative;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 11px 28px;
          padding: 0;
          margin: 0;
          list-style: none;
        }
        .spbsb-rich-list li {
          display: grid;
          grid-template-columns: 12px minmax(0, 1fr);
          gap: 12px;
          align-items: start;
          color: #313640;
          font-size: 16px;
          line-height: 1.48;
          font-weight: 550;
          letter-spacing: 0.01em;
        }
        .spbsb-rich-list li::before {
          content: '';
          width: 7px;
          height: 7px;
          margin-top: 9px;
          border-radius: 50%;
          background: #0a2d5d;
          box-shadow: 0 0 0 5px rgba(6, 75, 106, 0.08);
        }
        .spbsb-holistic-block {
          margin-top: 46px;
          padding: 0 4px;
        }
        .spbsb-holistic-title {
          margin: 0;
          color: #06275a;
          font-family: 'Zilla Slab', serif;
          font-size: clamp(34px, 4vw, 54px);
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0;
        }
        .spbsb-holistic-copy {
          max-width: 1080px;
          margin: 14px 0 26px;
          color: #333843;
          font-size: 17px;
          line-height: 1.62;
          font-weight: 500;
          letter-spacing: 0.01em;
        }
        .spbsb-ecosystem-stack {
          display: grid;
          gap: 14px;
        }
        .spbsb-ecosystem-bar {
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 52px;
          align-items: center;
          min-height: 72px;
          border-radius: 0 18px 18px 0;
          background: var(--bar-color);
          box-shadow: 0 16px 36px rgba(10, 31, 68, 0.12);
        }
        .spbsb-ecosystem-bar::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(255,255,255,0.2), transparent 58%);
          pointer-events: none;
        }
        .spbsb-ecosystem-content {
          position: relative;
          z-index: 1;
          padding: 14px 24px 16px;
          color: #ffffff;
        }
        .spbsb-ecosystem-content strong {
          display: block;
          font-family: 'Zilla Slab', serif;
          font-size: clamp(20px, 2.4vw, 30px);
          line-height: 1.05;
          font-weight: 700;
          letter-spacing: 0;
        }
        .spbsb-ecosystem-content span {
          display: block;
          margin-top: 4px;
          font-size: clamp(15px, 1.6vw, 20px);
          line-height: 1.25;
          font-weight: 500;
          letter-spacing: 0.06em;
        }
        .spbsb-ecosystem-end {
          position: relative;
          z-index: 1;
          align-self: stretch;
          border-left: 10px solid rgba(255,255,255,0.72);
          border-right: 10px solid rgba(255,255,255,0.82);
          opacity: 0.95;
        }
        .spbsb-holistic-note {
          margin: 16px 0 0;
          color: #5c626d;
          font-size: clamp(16px, 1.8vw, 22px);
          line-height: 1.35;
          font-weight: 600;
          letter-spacing: 0.025em;
        }
        @media (max-width: 860px) {
          .spbsb-rich-list {
            grid-template-columns: 1fr;
          }
          .spbsb-rich-card {
            border-radius: 26px;
          }
          .spbsb-ecosystem-bar {
            grid-template-columns: minmax(0, 1fr) 34px;
            min-height: 70px;
          }
          .spbsb-ecosystem-end {
            border-left-width: 7px;
            border-right-width: 7px;
          }
        }
        @media (max-width: 620px) {
          .spbsb-rich-section {
            padding: 54px 18px 60px;
          }
          .spbsb-rich-card {
            padding: 28px 20px;
          }
          .spbsb-rich-title,
          .spbsb-holistic-title {
            font-size: 34px;
          }
          .spbsb-rich-list li {
            font-size: 15px;
            line-height: 1.42;
          }
          .spbsb-holistic-block {
            margin-top: 36px;
          }
          .spbsb-holistic-copy {
            font-size: 15.5px;
            line-height: 1.55;
          }
          .spbsb-ecosystem-content {
            padding: 13px 16px 15px;
          }
          .spbsb-ecosystem-content span {
            letter-spacing: 0.02em;
          }
        }
      `}</style>

      <div className="spbsb-rich-container">
        <motion.div
          className="spbsb-rich-card"
          initial={{ opacity: 0, y: 28, rotate: -0.6 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <h2 className="spbsb-rich-title">What makes Learning at SPBSB rich</h2>
          <ul className="spbsb-rich-list">
            {richLearningPoints.map((point, index) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.42, ease: "easeOut", delay: index * 0.045 }}
              >
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <div className="spbsb-holistic-block">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <h2 className="spbsb-holistic-title">Holistic Learning</h2>
            <p className="spbsb-holistic-copy">
              Founded in 1985, the Geeta Group of Institutions has emerged as a major
              educational hub with institutions spanning school education to doctoral programs.
              SPBSB benefits from the integrated ecosystem of:
            </p>
          </motion.div>

          <div className="spbsb-ecosystem-stack">
            {ecosystemItems.map((item, index) => (
              <motion.div
                className="spbsb-ecosystem-bar"
                key={item.title}
                style={{ "--bar-color": item.color } as React.CSSProperties}
                initial={{ opacity: 0, scaleX: 0.92, x: -24 }}
                whileInView={{ opacity: 1, scaleX: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.58, ease: "easeOut", delay: index * 0.1 }}
              >
                <div className="spbsb-ecosystem-content">
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </div>
                <div className="spbsb-ecosystem-end" aria-hidden="true" />
              </motion.div>
            ))}
          </div>

          <motion.p
            className="spbsb-holistic-note"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.18 }}
          >
            Together, they form a holistic, future-ready talent development ecosystem.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

/* ── CAMPUS LIFE AND CLUBS SECTION ── */
function CampusLifeClubsSection() {
  const clubs = [
    {
      logo: "/spbsb-club-logos/planet-hr.png",
      alt: "Planet HR club logo",
      title: "About Planet HR",
      text: "Planet HR, the HR Club at the School of Commerce and Business Management, Geeta University, is a vibrant platform where students explore and experience Human Resource Management, aligning individual potential with meaningful opportunities beyond the classroom.",
      color: "#ff4b1f",
    },
    {
      logo: "/spbsb-club-logos/market-ninjas.png",
      alt: "Market Ninjas club logo",
      title: "Marketing Club - Market Ninjas",
      text: "Market Ninjas is a dynamic marketing club fostering creativity, strategic thinking, and practical skills. Through campaigns, competitions, workshops, and live projects, it empowers students to explore real-world marketing, embrace digital trends, and become future-ready marketers.",
      color: "#ff9815",
    },
    {
      logo: "/spbsb-club-logos/mudra-finance-club.png",
      alt: "Mudra finance club logo",
      title: "MUDRA THE FINANCE CLUB",
      text: "MUDRA - The Finance Club nurtures financially aware and analytically skilled students by bridging theory with real-world application. Through workshops, seminars, and competitions, it builds expertise in finance, investments, and markets, shaping future-ready financial leaders.",
      color: "#15c7bd",
    },
    {
      logo: "/spbsb-club-logos/bizcrew.png",
      alt: "BizCrew club logo",
      title: '"BIZCREW" - Learn - Lead - Execute',
      text: "BizCrew is a dynamic student-driven club that bridges theoretical learning with real-world business practices. It supports departmental activities while fostering leadership, management, and problem-solving skills, providing a collaborative platform for academic and practical growth.",
      color: "#19a8ff",
    },
  ];

  return (
    <section className="spbsb-clubs-section">
      <style>{`
        .spbsb-clubs-section {
          width: 100%;
          padding: 76px 24px 82px;
          background:
            linear-gradient(90deg, rgba(6, 75, 106, 0.035) 1px, transparent 1px),
            linear-gradient(rgba(6, 75, 106, 0.03) 1px, transparent 1px),
            linear-gradient(180deg, #fbfcfa 0%, #f5f8fb 100%);
          background-size: 72px 72px, 72px 72px, auto;
          color: #06275a;
          font-family: 'Sapient', 'Source Sans 3', sans-serif;
          overflow: hidden;
          position: relative;
        }
        .spbsb-clubs-section::before {
          content: '';
          position: absolute;
          right: -160px;
          top: -140px;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(232, 135, 26, 0.12), transparent 68%);
          pointer-events: none;
        }
        .spbsb-clubs-container {
          width: min(1180px, 100%);
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .spbsb-clubs-title {
          margin: 0 0 38px;
          color: #06275a;
          font-family: 'Zilla Slab', serif;
          font-size: clamp(34px, 4.1vw, 54px);
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0;
        }
        .spbsb-clubs-timeline {
          position: relative;
          display: grid;
          gap: 24px;
        }
        .spbsb-club-row {
          display: grid;
          grid-template-columns: 220px minmax(0, 1fr);
          gap: 0;
          align-items: center;
          min-height: 132px;
          position: relative;
        }
        .spbsb-club-badge-wrap {
          position: relative;
          min-height: 132px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .spbsb-club-badge-wrap::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: -26px;
          width: 2px;
          height: 28px;
          transform: translateX(-50%);
          background: linear-gradient(180deg, rgba(6, 75, 106, 0.18), transparent);
        }
        .spbsb-club-row:last-child .spbsb-club-badge-wrap::after {
          display: none;
        }
        .spbsb-club-badge {
          width: 118px;
          height: 118px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          position: relative;
          background: #ffffff;
          border: 5px solid var(--club-color);
          overflow: hidden;
          box-shadow:
            0 18px 34px rgba(10, 31, 68, 0.12),
            0 0 0 8px rgba(255, 255, 255, 0.72);
        }
        .spbsb-club-badge::before {
          content: '';
          position: absolute;
          inset: 12px;
          border-radius: 50%;
          border: 1px solid rgba(6, 57, 94, 0.12);
        }
        .spbsb-club-logo {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(1.04) contrast(1.04);
        }
        .spbsb-club-connector {
          position: absolute;
          left: calc(50% + 59px);
          right: -12px;
          top: 50%;
          height: 2px;
          transform: translateY(-50%);
          background: linear-gradient(90deg, var(--club-color), rgba(6, 75, 106, 0.08));
          transform-origin: left center;
        }
        .spbsb-club-content {
          position: relative;
          padding: 22px 28px 22px 32px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.84);
          border: 1px solid rgba(6, 75, 106, 0.08);
          box-shadow: 0 16px 36px rgba(10, 31, 68, 0.08);
          backdrop-filter: blur(8px);
          overflow: hidden;
        }
        .spbsb-club-content::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: var(--club-color);
        }
        .spbsb-club-heading {
          margin: 0 0 8px;
          color: #064b6a;
          font-family: 'Zilla Slab', serif;
          font-size: clamp(22px, 2.2vw, 30px);
          line-height: 1.08;
          font-weight: 700;
          letter-spacing: 0;
        }
        .spbsb-club-text {
          margin: 0;
          color: #526174;
          font-size: clamp(14px, 1.26vw, 16px);
          line-height: 1.55;
          font-weight: 500;
          letter-spacing: 0.005em;
        }
        @media (max-width: 900px) {
          .spbsb-club-row {
            grid-template-columns: 160px minmax(0, 1fr);
          }
          .spbsb-club-badge {
            width: 104px;
            height: 104px;
            border-width: 5px;
          }
          .spbsb-club-logo {
            width: 100%;
            height: 100%;
          }
          .spbsb-club-connector {
            left: calc(50% + 52px);
          }
        }
        @media (max-width: 680px) {
          .spbsb-clubs-section {
            padding: 58px 18px 64px;
          }
          .spbsb-clubs-title {
            font-size: 34px;
            margin-bottom: 30px;
          }
          .spbsb-clubs-timeline {
            gap: 24px;
          }
          .spbsb-club-row {
            grid-template-columns: 1fr;
            min-height: unset;
            gap: 16px;
          }
          .spbsb-club-badge-wrap {
            justify-content: flex-start;
            min-height: unset;
          }
          .spbsb-club-badge-wrap::after,
          .spbsb-club-connector {
            display: none;
          }
          .spbsb-club-badge {
            width: 90px;
            height: 90px;
            border-width: 5px;
          }
          .spbsb-club-logo {
            width: 100%;
            height: 100%;
          }
          .spbsb-club-content {
            padding: 20px 18px 20px 22px;
            border-radius: 15px;
          }
          .spbsb-club-text {
            letter-spacing: 0.01em;
          }
        }
      `}</style>

      <div className="spbsb-clubs-container">
        <motion.h2
          className="spbsb-clubs-title"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.58, ease: "easeOut" }}
        >
          Campus Life & Clubs
        </motion.h2>

        <div className="spbsb-clubs-timeline">
          {clubs.map((club, index) => (
            <motion.article
              className="spbsb-club-row"
              key={club.title}
              style={{ "--club-color": club.color } as React.CSSProperties}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ duration: 0.58, ease: "easeOut", delay: index * 0.08 }}
            >
              <div className="spbsb-club-badge-wrap">
                <motion.div
                  className="spbsb-club-badge"
                  initial={{ opacity: 0, scale: 0.82, rotate: -8 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: "-90px" }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.54, ease: "easeOut", delay: index * 0.08 + 0.08 }}
                >
                  <Image
                    src={club.logo}
                    alt={club.alt}
                    width={126}
                    height={78}
                    className="spbsb-club-logo"
                    sizes="126px"
                  />
                </motion.div>
                <motion.div
                  className="spbsb-club-connector"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-90px" }}
                  transition={{ duration: 0.62, ease: "easeOut", delay: index * 0.08 + 0.16 }}
                />
              </div>

              <motion.div
                className="spbsb-club-content"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
              >
                <h3 className="spbsb-club-heading">{club.title}</h3>
                <p className="spbsb-club-text">{club.text}</p>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── GLIMPSES OF INFRASTRUCTURE SECTION ── */
function InfrastructureGlimpsesSection() {
  const infrastructureImages = [
    {
      title: "Seminar Hall-1",
      src: "/spbsb-infrastructure-glimpses/seminar-hall-1.jpeg",
    },
    {
      title: "Conference Room",
      src: "/spbsb-infrastructure-glimpses/conference-room.jpeg",
    },
    {
      title: "Digital Helpdesk",
      src: "/spbsb-infrastructure-glimpses/digital-helpdesk.jpeg",
    },
    {
      title: "Classroom",
      src: "/spbsb-infrastructure-glimpses/classroom.jpeg",
    },
    {
      title: "Seminar Hall-2",
      src: "/spbsb-infrastructure-glimpses/seminar-hall-2.jpeg",
    },
    {
      title: "Library",
      src: "/spbsb-infrastructure-glimpses/library.jpeg",
    },
    {
      title: "Auditorium",
      src: "/spbsb-infrastructure-glimpses/auditorium.jpeg",
    },
    {
      title: "Cricket",
      src: "/spbsb-infrastructure-glimpses/cricket.jpeg",
    },
    {
      title: "8 Ball Pool",
      src: "/spbsb-infrastructure-glimpses/8-ball-pool.jpeg",
    },
    {
      title: "Football",
      src: "/spbsb-infrastructure-glimpses/football.jpeg",
    },
    {
      title: "Computer Lab",
      src: "/spbsb-infrastructure-glimpses/computer-lab.jpeg",
    },
    {
      title: "Badminton",
      src: "/spbsb-infrastructure-glimpses/badminton.jpeg",
    },
    {
      title: "Cafeteria",
      src: "/spbsb-infrastructure-glimpses/cafeteria.jpeg",
    },
    {
      title: "Students from 31 Countries & 22 States",
      src: "/spbsb-infrastructure-glimpses/international-students.jpeg",
    },
  ];
  const loopImages = [...infrastructureImages, ...infrastructureImages];

  return (
    <section className="spbsb-infra-section">
      <style>{`
        .spbsb-infra-section {
          width: 100%;
          padding: 74px 0 82px;
          background:
            linear-gradient(90deg, rgba(6,75,106,0.035) 1px, transparent 1px),
            linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          background-size: 78px 78px, auto;
          color: #1f2937;
          font-family: 'Sapient', 'Source Sans 3', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .spbsb-infra-section::before {
          content: '';
          position: absolute;
          right: -120px;
          top: 46px;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(232,135,26,0.13), transparent 68%);
          pointer-events: none;
        }
        .spbsb-infra-container {
          width: min(1220px, 100%);
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }
        .spbsb-infra-header {
          display: grid;
          grid-template-columns: minmax(0, 0.8fr) minmax(280px, 0.46fr);
          gap: 36px;
          align-items: center;
          margin-bottom: 32px;
        }
        .spbsb-infra-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin: 0 0 14px;
          color: #d8841c;
          font-size: 12px;
          line-height: 1;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 850;
        }
        .spbsb-infra-eyebrow::before {
          content: '';
          width: 36px;
          height: 2px;
          background: currentColor;
        }
        .spbsb-infra-title {
          margin: 0;
          font-family: 'Zilla Slab', serif;
          color: #06275a;
          font-size: clamp(34px, 4.4vw, 58px);
          line-height: 0.98;
          font-weight: 700;
          letter-spacing: 0;
        }
        .spbsb-infra-copy {
          margin: 0;
          color: #506074;
          font-size: 16px;
          line-height: 1.58;
          font-weight: 500;
          letter-spacing: 0.01em;
        }
        .spbsb-infra-count {
          display: inline-flex;
          width: fit-content;
          margin-bottom: 14px;
          padding: 9px 13px;
          border: 1px solid rgba(6,75,106,0.12);
          border-radius: 999px;
          background: rgba(255,255,255,0.76);
          color: #064b6a;
          font-size: 13px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          backdrop-filter: blur(10px);
        }
        .spbsb-infra-loop-shell {
          position: relative;
          display: grid;
          gap: 18px;
          margin-top: 10px;
        }
        .spbsb-infra-loop {
          display: flex;
          gap: 18px;
          width: max-content;
          animation: spbsbInfraLoop 62s linear infinite;
          will-change: transform;
        }
        .spbsb-infra-loop.is-reverse {
          animation-name: spbsbInfraLoopReverse;
          animation-duration: 68s;
        }
        .spbsb-infra-loop:hover {
          animation-play-state: paused;
        }
        .spbsb-infra-card {
          position: relative;
          flex: 0 0 340px;
          height: 230px;
          overflow: hidden;
          border-radius: 18px;
          background: #f4f7fb;
          box-shadow: 0 18px 42px rgba(10, 31, 68, 0.12);
          transform-origin: center;
          isolation: isolate;
        }
        .spbsb-infra-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 52%, rgba(6, 39, 90, 0.38) 100%);
          opacity: 1;
          transition: opacity 0.32s ease;
          pointer-events: none;
          z-index: 2;
        }
        .spbsb-infra-card:hover::after {
          opacity: 1;
        }
        .spbsb-infra-card img {
          object-fit: cover;
          object-position: center;
          transition: transform 0.7s ease, filter 0.7s ease;
          filter: saturate(1.02) contrast(1.01);
        }
        .spbsb-infra-card:hover img {
          transform: scale(1.045);
          filter: saturate(1.08) contrast(1.04);
        }
        .spbsb-infra-card-label {
          position: absolute;
          left: 14px;
          bottom: 14px;
          z-index: 3;
          display: inline-flex;
          max-width: calc(100% - 32px);
          padding: 8px 13px;
          border-radius: 999px;
          background: rgba(255,255,255,0.88);
          color: #06275a;
          font-family: 'Zilla Slab', serif;
          font-size: 17px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0;
          box-shadow: 0 10px 30px rgba(0,0,0,0.16);
          backdrop-filter: blur(10px);
        }
        @keyframes spbsbInfraLoop {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 9px)); }
        }
        @keyframes spbsbInfraLoopReverse {
          from { transform: translateX(calc(-50% - 9px)); }
          to { transform: translateX(0); }
        }
        @media (max-width: 980px) {
          .spbsb-infra-header {
            grid-template-columns: 1fr;
            gap: 18px;
          }
          .spbsb-infra-card {
            flex-basis: 310px;
            height: 210px;
          }
        }
        @media (max-width: 640px) {
          .spbsb-infra-section {
            padding: 56px 0 62px;
          }
          .spbsb-infra-container {
            padding: 0 18px;
          }
          .spbsb-infra-title {
            font-size: 38px;
          }
          .spbsb-infra-copy {
            font-size: 15px;
            line-height: 1.55;
          }
          .spbsb-infra-loop {
            gap: 14px;
            animation-duration: 46s;
          }
          .spbsb-infra-loop.is-reverse {
            animation-duration: 52s;
          }
          .spbsb-infra-card {
            flex-basis: 270px;
            height: 190px;
          }
          .spbsb-infra-card-label {
            font-size: 15px;
          }
        }
      `}</style>

      <div className="spbsb-infra-container">
        <div className="spbsb-infra-header">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.58, ease: "easeOut" }}
          >
            <span className="spbsb-infra-eyebrow">Campus Gallery</span>
            <h2 className="spbsb-infra-title">Glimpses of Infrastructure</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.58, ease: "easeOut", delay: 0.08 }}
          >
            <span className="spbsb-infra-count">14 campus spaces</span>
            <p className="spbsb-infra-copy">
              Purpose-built spaces for seminars, immersive classrooms, digital services,
              sports, collaboration, and a lively student community.
            </p>
          </motion.div>
        </div>

        <div className="spbsb-infra-loop-shell">
          <motion.div
            className="spbsb-infra-loop"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            {loopImages.map((item, index) => (
              <motion.article
                className="spbsb-infra-card"
                key={`${item.title}-top-${index}`}
                whileHover={{ y: -6 }}
              >
                <Image
                  src={item.src}
                  alt={`${item.title} at Geeta University`}
                  fill
                  sizes="(max-width: 640px) 84vw, (max-width: 980px) 100vw, 50vw"
                />
                <span className="spbsb-infra-card-label">{item.title}</span>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            className="spbsb-infra-loop is-reverse"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
          >
            {[...infrastructureImages.slice(7), ...infrastructureImages.slice(0, 7), ...infrastructureImages.slice(7), ...infrastructureImages.slice(0, 7)].map((item, index) => (
              <motion.article
                className="spbsb-infra-card"
                key={`${item.title}-bottom-${index}`}
                whileHover={{ y: -6 }}
              >
                <Image
                  src={item.src}
                  alt={`${item.title} at Geeta University`}
                  fill
                  sizes="(max-width: 640px) 270px, 340px"
                />
                <span className="spbsb-infra-card-label">{item.title}</span>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── SPBSB GALLERY SECTION ── */
function SpbsbGallerySection() {
  const galleryImages = [
    {
      title: "Leadership Gate",
      label: "Ceremonial",
      src: "/spbsb-gallery/convocation-procession.jpeg",
      className: "is-wide",
    },
    {
      title: "Flag Hoisting",
      label: "Campus Spirit",
      src: "/spbsb-gallery/flag-hoisting.jpeg",
      className: "is-tall",
    },
    {
      title: "Cultural Showcase",
      label: "Student Stage",
      src: "/spbsb-gallery/stage-dance-lift.jpeg",
      className: "is-tall",
    },
    {
      title: "Freshers Awards",
      label: "Celebrations",
      src: "/spbsb-gallery/freshers-awards.jpeg",
      className: "is-wide",
    },
    {
      title: "Raftaar Live",
      label: "Campus Nights",
      src: "/spbsb-gallery/raftaar.jpeg",
      className: "is-wide",
    },
    {
      title: "Asees Kaur",
      label: "Live Concert",
      src: "/spbsb-gallery/asees-kaur.jpeg",
      className: "is-tall",
    },
    {
      title: "Aastha Gill",
      label: "Live Concert",
      src: "/spbsb-gallery/aastha-gill.jpeg",
      className: "is-tall",
    },
    {
      title: "Folk Performance",
      label: "Cultural Life",
      src: "/spbsb-gallery/folk-performance.jpeg",
      className: "is-wide",
    },
    {
      title: "Bonfire Conversations",
      label: "Community",
      src: "/spbsb-gallery/bonfire.jpeg",
      className: "is-wide",
    },
    {
      title: "Theatre & Expression",
      label: "Creative Arts",
      src: "/spbsb-gallery/stage-drama.jpeg",
      className: "is-tall",
    },
    {
      title: "Student Nights",
      label: "Campus Energy",
      src: "/spbsb-gallery/student-night.jpeg",
      className: "is-wide",
    },
    {
      title: "Cultural Ensemble",
      label: "Performing Arts",
      src: "/spbsb-gallery/cultural-showcase.jpeg",
      className: "is-tall",
    },
  ];

  return (
    <section className="spbsb-gallery-section">
      <style>{`
        .spbsb-gallery-section {
          width: 100%;
          padding: 84px 24px 92px;
          background:
            linear-gradient(90deg, rgba(6, 75, 106, 0.03) 1px, transparent 1px),
            linear-gradient(rgba(6, 75, 106, 0.026) 1px, transparent 1px),
            radial-gradient(circle at 14% 12%, rgba(232, 135, 26, 0.1), transparent 30%),
            linear-gradient(180deg, #ffffff 0%, #f6f9fb 100%);
          background-size: 78px 78px, 78px 78px, auto, auto;
          font-family: 'Sapient', 'Source Sans 3', sans-serif;
          overflow: hidden;
          position: relative;
        }
        .spbsb-gallery-section::after {
          content: '';
          position: absolute;
          right: -180px;
          top: 110px;
          width: 430px;
          height: 430px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(6, 75, 106, 0.08), transparent 70%);
          pointer-events: none;
        }
        .spbsb-gallery-container {
          width: min(1220px, 100%);
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .spbsb-gallery-header {
          display: grid;
          grid-template-columns: minmax(0, 0.92fr) minmax(280px, 0.48fr);
          gap: 38px;
          align-items: end;
          margin-bottom: 34px;
        }
        .spbsb-gallery-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin: 0 0 13px;
          color: #d8841c;
          font-size: 12px;
          line-height: 1;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 850;
        }
        .spbsb-gallery-eyebrow::before {
          content: '';
          width: 36px;
          height: 2px;
          background: currentColor;
        }
        .spbsb-gallery-title {
          margin: 0;
          color: #06275a;
          font-family: 'Zilla Slab', serif;
          font-size: clamp(38px, 4.6vw, 64px);
          line-height: 0.96;
          font-weight: 700;
          letter-spacing: 0;
        }
        .spbsb-gallery-copy {
          margin: 0;
          color: #526174;
          font-size: 16px;
          line-height: 1.58;
          font-weight: 500;
        }
        .spbsb-gallery-feature {
          display: grid;
          grid-template-columns: minmax(0, 1.35fr) minmax(260px, 0.65fr);
          gap: 18px;
          margin-bottom: 18px;
        }
        .spbsb-gallery-feature-card,
        .spbsb-gallery-side-card,
        .spbsb-gallery-card {
          border-radius: 18px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.88);
          border: 1px solid rgba(6, 75, 106, 0.08);
          box-shadow: 0 14px 34px rgba(10, 31, 68, 0.08);
        }
        .spbsb-gallery-feature-card {
          position: relative;
          min-height: 470px;
        }
        .spbsb-gallery-side-stack {
          display: grid;
          gap: 18px;
        }
        .spbsb-gallery-side-card {
          position: relative;
          min-height: 226px;
        }
        .spbsb-gallery-feature-card img,
        .spbsb-gallery-side-card img,
        .spbsb-gallery-card img {
          object-fit: cover;
          transition: transform 0.55s ease;
        }
        .spbsb-gallery-feature-card:hover img,
        .spbsb-gallery-side-card:hover img,
        .spbsb-gallery-card:hover img {
          transform: scale(1.055);
        }
        .spbsb-gallery-feature-overlay {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 24px;
          padding: 18px 20px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.86);
          border: 1px solid rgba(255, 255, 255, 0.58);
          backdrop-filter: blur(10px);
        }
        .spbsb-gallery-feature-overlay span,
        .spbsb-gallery-label {
          display: block;
          color: #d8841c;
          font-size: 11px;
          line-height: 1;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-weight: 850;
        }
        .spbsb-gallery-feature-overlay strong {
          display: block;
          margin-top: 8px;
          color: #06275a;
          font-family: 'Zilla Slab', serif;
          font-size: clamp(26px, 3vw, 38px);
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0;
        }
        .spbsb-gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }
        .spbsb-gallery-card {
          position: relative;
          aspect-ratio: 4 / 3;
        }
        .spbsb-gallery-feature-card::after,
        .spbsb-gallery-side-card::after,
        .spbsb-gallery-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 46%, rgba(6, 39, 90, 0.58) 100%);
          opacity: 0.78;
          transition: opacity 0.35s ease;
        }
        .spbsb-gallery-feature-card:hover::after,
        .spbsb-gallery-side-card:hover::after,
        .spbsb-gallery-card:hover::after {
          opacity: 0.9;
        }
        .spbsb-gallery-card-content {
          position: absolute;
          left: 16px;
          right: 16px;
          bottom: 15px;
          z-index: 2;
        }
        .spbsb-gallery-feature-card .spbsb-gallery-card-content {
          left: 24px;
          right: 24px;
          bottom: 24px;
        }
        .spbsb-gallery-feature-card .spbsb-gallery-card-content span {
          display: block;
          color: #d8841c;
          font-size: 11px;
          line-height: 1;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-weight: 850;
        }
        .spbsb-gallery-feature-card .spbsb-gallery-card-content strong {
          display: block;
          max-width: 620px;
          margin-top: 8px;
          color: #ffffff;
          font-family: 'Zilla Slab', serif;
          font-size: clamp(28px, 3.4vw, 46px);
          line-height: 0.98;
          font-weight: 700;
          letter-spacing: 0;
        }
        .spbsb-gallery-side-card .spbsb-gallery-card-content {
          left: 18px;
          right: 18px;
          bottom: 18px;
        }
        .spbsb-gallery-card-title {
          display: block;
          margin-top: 6px;
          color: #ffffff;
          font-family: 'Zilla Slab', serif;
          font-size: 23px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0;
        }
        @media (max-width: 1020px) {
          .spbsb-gallery-header,
          .spbsb-gallery-feature {
            grid-template-columns: 1fr;
          }
          .spbsb-gallery-feature-card {
            min-height: 380px;
          }
          .spbsb-gallery-side-stack {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .spbsb-gallery-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 680px) {
          .spbsb-gallery-section {
            padding: 64px 18px 70px;
          }
          .spbsb-gallery-title {
            font-size: 40px;
          }
          .spbsb-gallery-feature-card {
            min-height: 320px;
          }
          .spbsb-gallery-side-stack,
          .spbsb-gallery-grid {
            grid-template-columns: 1fr;
          }
          .spbsb-gallery-side-card,
          .spbsb-gallery-card {
            min-height: 260px;
          }
          .spbsb-gallery-card {
            aspect-ratio: auto;
          }
        }
      `}</style>

      <div className="spbsb-gallery-container">
        <div className="spbsb-gallery-header">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.56, ease: "easeOut" }}
          >
            <span className="spbsb-gallery-eyebrow">Life At SPBSB</span>
            <h2 className="spbsb-gallery-title">SPBSB</h2>
          </motion.div>
          <motion.p
            className="spbsb-gallery-copy"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.56, ease: "easeOut", delay: 0.08 }}
          >
            A composed glimpse into the ceremonies, performances, student communities, and memorable campus
            moments that shape the SPBSB experience beyond classrooms.
          </motion.p>
        </div>

        <div className="spbsb-gallery-feature">
          <motion.figure
            className="spbsb-gallery-feature-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.58, ease: "easeOut" }}
          >
            <Image
              src="/spbsb-gallery/convocation-procession.jpeg"
              alt="Geeta University convocation procession at the Leadership Gate"
              fill
              sizes="(max-width: 1020px) 100vw, 760px"
            />
            <figcaption className="spbsb-gallery-card-content">
              <span>Signature Moments</span>
              <strong>Leadership, celebration, and campus pride.</strong>
            </figcaption>
          </motion.figure>

          <div className="spbsb-gallery-side-stack">
            {galleryImages.slice(1, 3).map((image, index) => (
              <motion.figure
                className="spbsb-gallery-side-card"
                key={image.src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 + 0.08 }}
              >
                <Image src={image.src} alt={image.title} fill sizes="(max-width: 1020px) 50vw, 360px" />
                <figcaption className="spbsb-gallery-card-content">
                  <span className="spbsb-gallery-label">{image.label}</span>
                  <strong className="spbsb-gallery-card-title">{image.title}</strong>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>

        <div className="spbsb-gallery-grid">
          {galleryImages.slice(3).map((image, index) => (
            <motion.figure
              className="spbsb-gallery-card"
              key={image.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.48, ease: "easeOut", delay: Math.min(index * 0.035, 0.32) }}
            >
              <Image src={image.src} alt={image.title} fill sizes="(max-width: 680px) 100vw, 33vw" />
              <figcaption className="spbsb-gallery-card-content">
                <span className="spbsb-gallery-label">{image.label}</span>
                <strong className="spbsb-gallery-card-title">{image.title}</strong>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── PLACEMENT SNAPSHOT SECTION ── */
function PlacementSnapshotSection() {
  const stats = [
    { value: "40 LPA", label: "Highest Package" },
    { value: "550+", label: "Recruiters" },
    { value: "3500+", label: "Job Offers" },
  ];

  const recruiterLogos = [
    { name: "Amazon", src: "/spbsb-placement-logos/amazon.png" },
    { name: "McAfee", src: "/spbsb-placement-logos/mcafee.svg" },
    { name: "IBM", src: "/spbsb-placement-logos/ibm.png" },
    { name: "Profrunnel Technologies", src: "/profunnel.svg" },
    { name: "Infosys", src: "/spbsb-placement-logos/infosys.svg" },
    { name: "TCS", src: "/spbsb-placement-logos/tcs.svg" },
    { name: "HCL", src: "/spbsb-placement-logos/hcl.svg" },
    { name: "Vivo", src: "/spbsb-placement-logos/vivo.svg" },
    { name: "Capgemini", src: "/spbsb-placement-logos/cloud-analogy.png" },
    { name: "Gemini Solutions", src: "/images/recruiters/gemini-solutions.png" },
    { name: "Kalvium", src: "/spbsb-placement-logos/kalvium.png" },
    { name: "Opkey", src: "/spbsb-placement-logos/opkey.png" },
    { name: "Bolt", src: "/spbsb-placement-logos/bolt.png" },
    { name: "HP", src: "/spbsb-placement-logos/hp.svg" },
    { name: "Learning Routes", src: "/spbsb-placement-logos/learning-routes.png" },
    { name: "ProGrad", src: "/images/recruiters/prograd.png" },
    { name: "PlanetSpark", src: "/spbsb-placement-logos/planet-spark.png" },
    { name: "JSW", src: "/spbsb-placement-logos/jsw.png" },
    { name: "Wonder Cement", src: "/spbsb-placement-logos/wonder-cement.png" },
    { name: "ACE", src: "/spbsb-placement-logos/ace.png" },
    { name: "Flipkart", src: "/spbsb-placement-logos/flipkart.png" },
    { name: "L&T Technology Services", src: "/spbsb-placement-logos/l-and-t.png" },
    { name: "Kotak", src: "/spbsb-placement-logos/kotak.png" },
    { name: "IndusInd Bank", src: "/spbsb-placement-logos/indusind-bank.png" },
    { name: "Jaro Education", src: "/spbsb-placement-logos/jaro-education.png" },
    { name: "ICICI Lombard", src: "/spbsb-placement-logos/icici-lombard.png" },
    { name: "Muthoot Finance", src: "/spbsb-placement-logos/muthoot-finance.png" },
    { name: "Wonder Products", src: "/spbsb-placement-logos/wonder-products.png" },
    { name: "FedEx", src: "/spbsb-placement-logos/fedex.svg" },
    { name: "Hike Education", src: "/spbsb-placement-logos/hikeedu.png" },
  ];

  return (
    <section className="spbsb-placement-section">
      <style>{`
        .spbsb-placement-section {
          width: 100%;
          padding: 82px 24px 90px;
          background:
            linear-gradient(90deg, rgba(6, 75, 106, 0.032) 1px, transparent 1px),
            linear-gradient(rgba(6, 75, 106, 0.026) 1px, transparent 1px),
            radial-gradient(circle at 10% 12%, rgba(232, 135, 26, 0.1), transparent 30%),
            linear-gradient(180deg, #ffffff 0%, #f6f9fb 100%);
          background-size: 74px 74px, 74px 74px, auto, auto;
          font-family: 'Sapient', 'Source Sans 3', sans-serif;
          color: #13233a;
          overflow: hidden;
          position: relative;
        }
        .spbsb-placement-section::after {
          content: '';
          position: absolute;
          right: -170px;
          top: 70px;
          width: 390px;
          height: 390px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(6, 75, 106, 0.08), transparent 68%);
          pointer-events: none;
        }
        .spbsb-placement-container {
          width: min(1180px, 100%);
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .spbsb-placement-head {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(290px, 0.52fr);
          gap: 36px;
          align-items: end;
          margin-bottom: 34px;
        }
        .spbsb-placement-mark {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin: 0 0 12px;
          color: #d8841c;
          font-size: 12px;
          line-height: 1;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 850;
        }
        .spbsb-placement-mark::before {
          content: '';
          width: 36px;
          height: 2px;
          background: currentColor;
        }
        .spbsb-placement-title {
          margin: 0;
          color: #06275a;
          font-family: 'Zilla Slab', serif;
          font-size: clamp(34px, 4.2vw, 58px);
          line-height: 0.98;
          font-weight: 700;
          letter-spacing: 0;
        }
        .spbsb-placement-note {
          margin: 0;
          color: #526174;
          font-size: 16px;
          line-height: 1.56;
          font-weight: 500;
        }
        .spbsb-placement-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin-bottom: 22px;
        }
        .spbsb-placement-stat {
          padding: 22px 22px 20px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.84);
          border: 1px solid rgba(6, 75, 106, 0.08);
          box-shadow: 0 16px 36px rgba(10, 31, 68, 0.08);
        }
        .spbsb-placement-stat strong {
          display: block;
          color: #06275a;
          font-family: 'Zilla Slab', serif;
          font-size: clamp(34px, 4vw, 54px);
          line-height: 0.9;
          font-weight: 700;
          letter-spacing: 0;
        }
        .spbsb-placement-stat span {
          display: block;
          margin-top: 8px;
          color: #5a6675;
          font-size: 15px;
          line-height: 1;
          font-weight: 650;
        }
        .spbsb-placement-testimonial {
          display: grid;
          grid-template-columns: 245px minmax(0, 1fr);
          min-height: 190px;
          margin: 0 0 34px;
          border-radius: 18px;
          overflow: hidden;
          background: #eef3f6;
          border: 1px solid rgba(6, 75, 106, 0.08);
          box-shadow: 0 20px 46px rgba(10, 31, 68, 0.1);
        }
        .spbsb-placement-portrait {
          position: relative;
          min-height: 190px;
          background: #dfe6ee;
        }
        .spbsb-placement-portrait img {
          object-fit: cover;
          object-position: center;
          filter: grayscale(1) contrast(1.03);
        }
        .spbsb-placement-quote {
          position: relative;
          padding: 30px 44px 28px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .spbsb-placement-quote::before {
          content: '“';
          position: absolute;
          left: 28px;
          top: 10px;
          color: rgba(6, 75, 106, 0.13);
          font-family: Georgia, serif;
          font-size: 82px;
          line-height: 1;
          font-weight: 700;
        }
        .spbsb-placement-quote p {
          position: relative;
          z-index: 1;
          max-width: 760px;
          margin: 0;
          color: #3d4654;
          font-size: clamp(17px, 1.8vw, 22px);
          line-height: 1.42;
          font-weight: 500;
        }
        .spbsb-placement-quote footer {
          position: relative;
          z-index: 1;
          margin-top: 18px;
          color: #06275a;
          font-size: 15px;
          line-height: 1.25;
          font-weight: 750;
        }
        .spbsb-placement-quote footer span {
          display: block;
          color: #6a7482;
          font-weight: 600;
        }
        .spbsb-placement-recruiters-title {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          gap: 18px;
          align-items: center;
          margin: 0 0 18px;
          color: #06275a;
          font-family: 'Zilla Slab', serif;
          font-size: clamp(26px, 3vw, 38px);
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0;
        }
        .spbsb-placement-recruiters-title::after {
          content: '';
          height: 1px;
          background: linear-gradient(90deg, rgba(6, 75, 106, 0.2), transparent);
        }
        .spbsb-placement-logo-grid {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 12px;
        }
        .spbsb-placement-logo-cell {
          height: 64px;
          display: grid;
          place-items: center;
          padding: 12px 18px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(6, 75, 106, 0.07);
          box-shadow: 0 10px 24px rgba(10, 31, 68, 0.055);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .spbsb-placement-logo-cell:hover {
          transform: translateY(-3px);
          border-color: rgba(232, 135, 26, 0.24);
          box-shadow: 0 16px 30px rgba(10, 31, 68, 0.095);
        }
        .spbsb-placement-logo-cell img {
          max-width: 100%;
          max-height: 38px;
          object-fit: contain;
          filter: saturate(0.94) contrast(1.02);
        }
        @media (max-width: 1020px) {
          .spbsb-placement-head {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .spbsb-placement-logo-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }
        @media (max-width: 720px) {
          .spbsb-placement-section {
            padding: 64px 18px 70px;
          }
          .spbsb-placement-stats {
            grid-template-columns: 1fr;
          }
          .spbsb-placement-testimonial {
            grid-template-columns: 1fr;
          }
          .spbsb-placement-portrait {
            min-height: 240px;
          }
          .spbsb-placement-quote {
            padding: 28px 22px 26px;
          }
          .spbsb-placement-logo-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
          }
          .spbsb-placement-logo-cell {
            height: 58px;
            padding: 10px 14px;
          }
        }
      `}</style>

      <div className="spbsb-placement-container">
        <div className="spbsb-placement-head">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.56, ease: "easeOut" }}
          >
            <span className="spbsb-placement-mark">Career Outcomes</span>
            <h2 className="spbsb-placement-title">Placement Snapshot of Geeta University</h2>
          </motion.div>
          <motion.p
            className="spbsb-placement-note"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.56, ease: "easeOut", delay: 0.08 }}
          >
            A strong recruiter ecosystem, industry-ready preparation, and consistent mentoring help students
            convert classroom learning into confident career outcomes.
          </motion.p>
        </div>

        <div className="spbsb-placement-stats">
          {stats.map((stat, index) => (
            <motion.div
              className="spbsb-placement-stat"
              key={stat.label}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.figure
          className="spbsb-placement-testimonial"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.58, ease: "easeOut" }}
        >
          <div className="spbsb-placement-portrait">
            <Image
              src="/spbsb-yakshup-goel-placement-latest.png"
              alt="Yakshup Goel, MBA alumnus"
              fill
              sizes="(max-width: 720px) 100vw, 245px"
            />
          </div>
          <figcaption className="spbsb-placement-quote">
            <p>
              The two years I spent at Geeta Campus inspired me to persevere and never give up on anything,
              irrespective of how difficult it might seem. The practical lessons learnt here were instrumental
              in building my career.
            </p>
            <footer>
              Yakshup Goel, MBA
              <span>Package - INR 40 LPA</span>
            </footer>
          </figcaption>
        </motion.figure>

        <h3 className="spbsb-placement-recruiters-title">Top Recruiters</h3>
        <div className="spbsb-placement-logo-grid">
          {recruiterLogos.map((logo, index) => (
            <motion.div
              className="spbsb-placement-logo-cell"
              key={`${logo.name}-${index}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.38, ease: "easeOut", delay: Math.min(index * 0.025, 0.35) }}
            >
              <Image src={logo.src} alt={`${logo.name} logo`} width={170} height={52} sizes="170px" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CORPORATE LEADERS TESTIMONIALS SECTION ── */
function CorporateLeadersSpeakSection() {
  const testimonials = [
    {
      image: "/spbsb-corporate-leaders/shaan-vats.jpg",
      alt: "Ms. Shaan Vats speaking at Geeta University",
      name: "Ms. Shaan Vats",
      role: "Senior Practice Lead Infosys",
      quote:
        "The session reflected exceptional industry insight and practical expertise, delivering valuable perspective on modern HR practices. Students demonstrated strong technical understanding, communication skills, and a readiness to engage with real-world challenges.",
    },
    {
      image: "/spbsb-corporate-leaders/medha-tiwari.jpg",
      alt: "Ms. Medha Tiwari speaking at Geeta University",
      name: "Ms. Medha Tiwari",
      role: "Manager HR Tech",
      quote:
        "Students demonstrated exceptional technical and communication skills, surpassing expectations. The training, discipline, and professional grooming reflect strong alignment with current industry standards.",
    },
    {
      image: "/spbsb-corporate-leaders/vinin.png",
      alt: "Mr. Vinin with Geeta University representatives",
      name: "Mr. Vinin, CEO",
      role: "Profrunnel Technologies Pvt. Ltd.",
      quote:
        "Technical and communication skills of students exceed expectations. The training and grooming at Geeta University are clearly aligned with industry needs.",
    },
    {
      image: "/spbsb-corporate-leaders/aman-negi.png",
      alt: "Mr. Aman Negi speaking at a podium",
      name: "Mr. Aman Negi",
      role: "Recruitment Representative Policy Bazaar",
      quote:
        "Geeta University students are confident, well-prepared, and have strong communication skills. Their readiness for dynamic roles makes them a reliable talent pool for growing organizations.",
    },
    {
      image: "/spbsb-corporate-leaders/nidhi-bajpai.png",
      alt: "Ms. Nidhi Bajpai addressing students",
      name: "Ms. Nidhi Bajpai",
      role: "Co-Founder & CMO Anixz Solution Pvt. Ltd",
      quote:
        "Excellent subject knowledge, quick learners, and clarity of concepts. Geeta University students fit perfectly in academic and content-based profiles. A great hiring experience!",
    },
    {
      image: "/spbsb-corporate-leaders/arun-sharma.png",
      alt: "Mr. Arun Sharma speaking",
      name: "Mr. Arun Sharma",
      role: "Senior Manager The Times of India",
      quote:
        "Students from Geeta University come with a strong aptitude and sharp business sense. Their presence during group discussions and interviews was highly commendable.",
    },
  ];

  return (
    <section className="spbsb-corporate-speak-section">
      <style>{`
        .spbsb-corporate-speak-section {
          width: 100%;
          padding: 86px 24px 92px;
          background:
            linear-gradient(145deg, transparent 0 44%, rgba(6, 75, 106, 0.045) 44.2% 58%, transparent 58.2%),
            linear-gradient(180deg, #ffffff 0%, #fbfcfa 100%);
          font-family: 'Sapient', 'Source Sans 3', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .spbsb-corporate-speak-section::before {
          content: '“';
          position: absolute;
          left: max(28px, calc((100% - 1180px) / 2));
          top: 14px;
          color: rgba(6, 75, 106, 0.08);
          font-family: Georgia, serif;
          font-size: 150px;
          line-height: 1;
          font-weight: 700;
          pointer-events: none;
        }
        .spbsb-corporate-speak-container {
          width: min(1180px, 100%);
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .spbsb-corporate-speak-title {
          max-width: 760px;
          margin: 0 auto 38px;
          color: #064b6a;
          font-family: 'Zilla Slab', serif;
          font-size: clamp(34px, 4.1vw, 58px);
          line-height: 0.98;
          font-weight: 700;
          letter-spacing: 0;
          text-align: center;
        }
        .spbsb-corporate-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 34px 42px;
        }
        .spbsb-corporate-card {
          position: relative;
          min-height: 478px;
          padding: 30px 22px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          isolation: isolate;
        }
        .spbsb-corporate-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          border-radius: 999px;
          background: #064b6a;
        }
        .spbsb-corporate-card::after {
          content: '';
          position: absolute;
          inset: 64px 10px 150px 24px;
          background: linear-gradient(162deg, #f1f2f4 0 52%, rgba(241, 242, 244, 0) 52.4%);
          z-index: -1;
        }
        .spbsb-corporate-pin {
          position: absolute;
          top: 28px;
          right: 46px;
          width: 18px;
          height: 8px;
          border-radius: 999px;
          background: #064b6a;
          box-shadow: 0 5px 16px rgba(6, 75, 106, 0.22);
        }
        .spbsb-corporate-image-frame {
          width: min(218px, 84%);
          height: 144px;
          margin: 0 auto 22px;
          position: relative;
          overflow: hidden;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 14% 80%);
          box-shadow: 16px 16px 0 #111;
          background: #e8edf2;
        }
        .spbsb-corporate-image {
          object-fit: cover;
          object-position: center top;
          transform: scale(1.02);
          transition: transform 0.45s ease;
        }
        .spbsb-corporate-card:hover .spbsb-corporate-image {
          transform: scale(1.08);
        }
        .spbsb-corporate-name {
          margin: 0;
          color: #06275a;
          font-family: 'Zilla Slab', serif;
          font-size: 23px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0;
        }
        .spbsb-corporate-role {
          margin: 4px auto 10px;
          max-width: 280px;
          color: #343b46;
          font-size: 15px;
          line-height: 1.1;
          font-weight: 600;
        }
        .spbsb-corporate-rule {
          width: 88%;
          height: 1px;
          margin: 0 auto 12px;
          background: linear-gradient(90deg, transparent, rgba(6, 75, 106, 0.32), transparent);
        }
        .spbsb-corporate-quote {
          margin: 0;
          color: #3e4652;
          font-size: 15px;
          line-height: 1.25;
          font-weight: 500;
          letter-spacing: 0.01em;
        }
        @media (max-width: 1020px) {
          .spbsb-corporate-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 30px;
          }
        }
        @media (max-width: 680px) {
          .spbsb-corporate-speak-section {
            padding: 64px 18px 68px;
          }
          .spbsb-corporate-speak-section::before {
            font-size: 104px;
            top: 20px;
          }
          .spbsb-corporate-speak-title {
            text-align: left;
            font-size: 36px;
            margin-bottom: 28px;
          }
          .spbsb-corporate-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .spbsb-corporate-card {
            min-height: auto;
            padding: 24px 18px 24px 22px;
          }
          .spbsb-corporate-image-frame {
            width: min(220px, 78%);
          }
        }
      `}</style>

      <div className="spbsb-corporate-speak-container">
        <motion.h2
          className="spbsb-corporate-speak-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.58, ease: "easeOut" }}
        >
          What Corporate Leaders Speak About Us
        </motion.h2>

        <div className="spbsb-corporate-grid">
          {testimonials.map((testimonial, index) => (
            <motion.article
              className="spbsb-corporate-card"
              key={testimonial.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ duration: 0.52, ease: "easeOut", delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <span className="spbsb-corporate-pin" aria-hidden="true" />
              <div className="spbsb-corporate-image-frame">
                <Image
                  src={testimonial.image}
                  alt={testimonial.alt}
                  fill
                  className="spbsb-corporate-image"
                  sizes="(max-width: 680px) 220px, (max-width: 1020px) 26vw, 218px"
                />
              </div>
              <h3 className="spbsb-corporate-name">{testimonial.name}</h3>
              <p className="spbsb-corporate-role">{testimonial.role}</p>
              <span className="spbsb-corporate-rule" aria-hidden="true" />
              <p className="spbsb-corporate-quote">{testimonial.quote}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── PRE FOOTER IMAGE SECTION ── */
function PreFooterImageSection() {
  const institutions = [
    "Geeta Institute of Law, Karhans",
    "Lakshay College of Education, Naultha",
    "Geeta Institute of Education, Karhans",
    "Geeta College of Education, Nimbri",
  ];

  return (
    <section className="spbsb-prefooter-image-section">
      <style>{`
        .spbsb-prefooter-image-section {
          position: relative;
          width: 100%;
          aspect-ratio: 2560 / 1886;
          min-height: 620px;
          overflow: hidden;
          background: #061a32;
          font-family: 'Sapient', 'Source Sans 3', sans-serif;
        }
        .spbsb-prefooter-bg-img {
          object-fit: cover;
          object-position: center top;
        }
        .spbsb-prefooter-logo {
          position: absolute;
          left: 50%;
          top: 42.5%;
          width: min(660px, 54vw);
          transform: translate(-50%, -50%);
          opacity: 0.33;
          filter: grayscale(1) brightness(3.2);
          z-index: 2;
          pointer-events: none;
        }
        .spbsb-prefooter-info-strip {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 5.25%;
          z-index: 3;
          display: grid;
          grid-template-columns: minmax(0, 1.42fr) minmax(310px, 0.62fr);
          gap: clamp(44px, 12vw, 170px);
          align-items: start;
          padding: 18px max(24px, calc((100vw - 1180px) / 2)) 24px;
          background: #f8efe2;
          color: #25252a;
        }
        .spbsb-prefooter-info-title {
          margin: 0 0 7px;
          font-family: 'Zilla Slab', serif;
          color: #242428;
          font-size: clamp(24px, 2.4vw, 34px);
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0;
        }
        .spbsb-prefooter-institutions {
          display: grid;
          gap: 3px;
          padding: 0;
          margin: 0;
          list-style: none;
          color: #2f3035;
          font-size: clamp(15px, 1.35vw, 19px);
          line-height: 1.18;
          font-weight: 550;
          letter-spacing: 0.02em;
        }
        .spbsb-prefooter-contact {
          display: grid;
          gap: 8px;
        }
        .spbsb-prefooter-contact-block h3 {
          margin: 0;
          font-family: 'Zilla Slab', serif;
          color: #29292f;
          font-size: clamp(20px, 1.9vw, 27px);
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0;
        }
        .spbsb-prefooter-contact-block p {
          margin: 2px 0 0;
          color: #303038;
          font-size: clamp(14px, 1.25vw, 17px);
          line-height: 1.15;
          font-weight: 550;
          letter-spacing: 0.01em;
        }
        @media (max-width: 760px) {
          .spbsb-prefooter-image-section {
            min-height: 640px;
            aspect-ratio: auto;
          }
          .spbsb-prefooter-logo {
            top: 34%;
            width: min(500px, 80vw);
          }
          .spbsb-prefooter-info-strip {
            bottom: 4%;
            grid-template-columns: 1fr;
            gap: 18px;
            padding: 20px 22px 24px;
          }
          .spbsb-prefooter-institutions,
          .spbsb-prefooter-contact-block p {
            letter-spacing: 0.01em;
          }
        }
      `}</style>
      <Image
        src="/spbsb-prefooter-bg.jpeg"
        alt="Geeta University campus aerial view"
        fill
        className="spbsb-prefooter-bg-img"
        sizes="100vw"
      />
      <motion.div
        className="spbsb-prefooter-logo"
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 0.33, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
      
      </motion.div>
      <motion.div
        className="spbsb-prefooter-info-strip"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.58, ease: "easeOut" }}
      >
        <div>
          <h2 className="spbsb-prefooter-info-title">Geeta Group of Institutions</h2>
          <ul className="spbsb-prefooter-institutions">
            {institutions.map((institution) => (
              <li key={institution}>{institution}</li>
            ))}
          </ul>
        </div>

        <div className="spbsb-prefooter-contact">
          <div className="spbsb-prefooter-contact-block">
            <h3>Admission Helpline</h3>
            <p>+91 92787 68000</p>
          </div>
          <div className="spbsb-prefooter-contact-block">
            <h3>Website</h3>
            <p>www.geetauniversity.edu.in</p>
            <p>www.spbsb.in</p>
          </div>
          <div className="spbsb-prefooter-contact-block">
            <h3>Campus</h3>
            <p>NH-71A, Naultha, Panipat, Haryana (132145), India</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ── MAIN PAGE EXPORT ── */
export default function SPBansalSchoolOfBusiness() {
  return (
    <div className="w-full flex-1 block bg-white min-h-screen text-[#1A1A2E] overflow-x-hidden selection:bg-[#E8871A] selection:text-white font-sans">
      
      {/* ── BANNER IMAGE SECTION ── */}
      <div className="relative w-full overflow-hidden flex flex-col">
        <Image
          src="/spbsp/banner.jpeg"
          alt="SP Bansal School of Business - Shaping Tech-Empowered Decision Makers for New-Age Business"
          width={2560}
          height={1441}
          priority
          className="w-full h-auto block"
          sizes="100vw"
        />
      </div>

      <SchoolAboutSection />

      <VisionMissionSection />

      <LegacyTimelineSection />

      <ChancellorDeskSection />

      <LeadershipScrollTransition />

      <ProChancellorMessageSection />

      <AnkushProChancellorSection />

      <LearningPhilosophySection />

      <ProgramObjectivesOutcomesSection />

      <ProgrammesOfferedCseStyleSection />

      <CurriculumPedagogySection />

      <LeadershipOdysseySection />

      <ImmersiveLearningEnvironmentSection />

      <GlobalCertificationsSection />

      <CorporateConnectSection />

      <CorporateConnectWorkshopsSection />

      <InfrastructureGlimpsesSection />

      <PlacementSnapshotSection />

      <WhySpbsbSection />

      <SpbsbGallerySection />

      <AdmissionProcessSection />

      <RichLearningSection />

      <CampusLifeClubsSection />

      <CorporateLeadersSpeakSection />

      <PreFooterImageSection />


    </div>
  );
}
