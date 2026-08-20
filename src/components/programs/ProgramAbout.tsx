"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { ProgramPageData } from "@/data/programs/types";

interface ProgramAboutProps {
  about?: ProgramPageData["about"];
  intro?: ProgramPageData["intro"];
}

export default function ProgramAbout({ about, intro }: ProgramAboutProps) {
  const data = about || (intro ? {
    eyebrow: "ABOUT THE SCHOOL",
    title: intro.title,
    paragraphs: intro.paragraphs,
    image: "/bba photo.jpeg",
    badgeText: "Future Leaders Are Made Here"
  } : null);

  if (!data) return null;

  return (
    <section className="scbm-about-section w-full bg-[#FAFAFA] relative overflow-hidden font-sans">
      <style>{`
        .scbm-about-container {
          width: min(100% - 48px, 1280px);
          margin-inline: auto;
          display: flex;
          align-items: center;
          gap: 72px;
          padding-top: 100px;
          padding-bottom: 100px;
        }
        .scbm-about-text {
          width: 58%;
        }
        .scbm-about-image-wrapper {
          width: 42%;
          position: relative;
        }
        .scbm-about-eyebrow {
          color: #A32020;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 2px;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          text-transform: uppercase;
        }
        .scbm-about-eyebrow::before {
          content: "";
          height: 2px;
          width: 32px;
          background-color: #A32020;
          display: block;
        }
        .scbm-about-title {
          font-family: "Zilla Slab", serif;
          font-size: 32px;
          font-weight: 700;
          line-height: 40px;
          color: #0B2948;
          margin-bottom: 32px;
        }
        .scbm-about-paragraph {
          font-family: "Source Sans 3", "Source Sans Pro", sans-serif;
          font-size: 16.5px;
          line-height: 1.75;
          color: #4A5568;
          margin-bottom: 20px;
        }
        .scbm-about-paragraph strong {
          color: #2D3748;
          font-weight: 600;
        }
        .scbm-image-decoration {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: #A32020;
          border-radius: 18px;
          top: 24px;
          left: 24px;
          z-index: 0;
          opacity: 0.15;
        }
        .scbm-badge {
          position: absolute;
          bottom: -24px;
          left: -32px;
          background: #FFFFFF;
          box-shadow: 0 12px 35px rgba(11,41,72,0.12);
          padding: 18px 26px;
          border-radius: 12px;
          z-index: 20;
          border-left: 4px solid #A32020;
          font-family: "Source Sans 3", "Source Sans Pro", sans-serif;
          font-weight: 700;
          color: #0B2948;
          font-size: 16px;
        }

        @media (max-width: 992px) {
          .scbm-about-container {
            flex-direction: column;
            gap: 60px;
            padding-top: 80px;
            padding-bottom: 80px;
            width: min(100% - 40px, 1280px);
          }
          .scbm-about-text, .scbm-about-image-wrapper {
            width: 100%;
          }
          .scbm-about-title {
            font-size: 28px;
            line-height: 36px;
          }
          .scbm-about-paragraph {
            font-size: 16px;
          }
          .scbm-badge {
            left: 20px;
            bottom: -20px;
            right: 20px;
            text-align: center;
          }
        }
      `}</style>
      
      <div className="scbm-about-container">
        {/* Left Column: Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="scbm-about-text"
        >
          <div className="scbm-about-eyebrow">{data.eyebrow || "ABOUT THE SCHOOL"}</div>
          <h2 className="scbm-about-title">{data.title}</h2>
          
          {data.paragraphs.map((p, idx) => (
            <p key={idx} className="scbm-about-paragraph" style={idx === data.paragraphs.length - 1 ? { marginBottom: 0 } : {}}>
              {p}
            </p>
          ))}
        </motion.div>
        
        {/* Right Column: Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="scbm-about-image-wrapper"
        >
          <div className="scbm-image-decoration" />
          <div className="relative z-10 rounded-[18px] overflow-hidden shadow-[0_20px_50px_rgba(11,41,72,0.12)] w-full aspect-4/3 lg:aspect-4/5 bg-[#E2E8F0]">
            <Image
              src={data.image || "/bba photo.jpeg"}
              alt={data.title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 992px) 100vw, 42vw"
            />
          </div>
          {data.badgeText && (
            <div className="scbm-badge">
              {data.badgeText}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
