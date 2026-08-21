"use client";

import React from "react";
import Image from "next/image";
import { Phone, Globe2, MapPin } from "lucide-react";
import type { ProgramPageData } from "@/data/programs/types";

interface ProgramFinalCTAProps {
  cta?: ProgramPageData["cta"];
}

const defaultOtherPrograms = [
  "Engineering",
  "Computer Applications",
  "Forensic Science",
  "Nutrition & Dietetics",
  "Hotel Management",
  "Humanities",
];

export default function ProgramFinalCTA({ cta }: ProgramFinalCTAProps) {
  const heading = cta?.heading || "Your Future in Higher Education Starts Here";
  const quote = cta?.quote || "“";
  const paragraphs = cta?.paragraphs && cta.paragraphs.length > 0 ? cta.paragraphs : [
    "Take the next step towards a successful and future-ready career with Geeta University.",
    "Join an ecosystem that blends academic excellence, innovation, industry exposure, leadership development, and career-focused education.",
  ];
  const otherPrograms = cta?.otherPrograms && cta.otherPrograms.length > 0 ? cta.otherPrograms : defaultOtherPrograms;
  const qrLabel = cta?.qrLabel || "Admissions 2026–27";
  const qrCta = cta?.qrCta || "Scan to Apply";
  const qrImage = cta?.qrImage || "/qr.png";
  const applyLink = cta?.applyLink || "https://admissions.geetauniversity.edu.in";
  const helpline = cta?.helpline || "+91 92787 68000";
  const website = cta?.website || "www.geetauniversity.edu.in";
  const campusAddress = cta?.campusAddress || "NH-71A, Naultha Panipat, Haryana (132145), India.";

  return (
    <section className="scbm-final-cta" id="admissions">
      <style>{`
        .scbm-final-cta {
          width: 100%;
          position: relative;
          background-color: #0A1F44;
          overflow: hidden;
          padding: 110px 0;
          font-family: 'Source Sans 3', sans-serif;
        }
        
        .cta-bg-glow {
          position: absolute;
          top: -20%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(216,154,43,0.06) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }
        
        .cta-bg-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
          z-index: 2;
        }

        .cta-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding-left: 40px;
          padding-right: 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
          position: relative;
          z-index: 10;
          gap: 40px;
          box-sizing: border-box;
        }
        
        .cta-left-col {
          flex: 1;
          max-width: 68%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        
        .cta-right-col {
          flex: 0 0 300px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        
        .cta-accent-line {
          width: 56px;
          height: 4px;
          background-color: #D89A2B;
          margin-bottom: 24px;
          border-radius: 2px;
        }
        
        .cta-heading {
          font-family: 'Zilla Slab', serif;
          font-size: 50px;
          line-height: 1.15;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 30px;
          max-width: 740px;
          position: relative;
          z-index: 2;
        }
        
        .cta-quote-mark {
          position: absolute;
          top: -24px;
          left: -32px;
          font-family: serif;
          font-size: 80px;
          line-height: 1;
          color: rgba(255,255,255,0.06);
          pointer-events: none;
          z-index: -1;
        }
        
        .cta-paragraph {
          font-size: 18px;
          line-height: 1.75;
          color: rgba(255,255,255,0.85);
          max-width: 700px;
          margin-bottom: 18px;
        }
        .cta-paragraph:last-of-type {
          margin-bottom: 50px;
        }
        
        .cta-programs-wrapper {
          width: 100%;
          border-top: 1px solid rgba(255,255,255,0.15);
          padding-top: 30px;
        }
        .cta-programs-wrapper.desktop-only { display: block; }
        .cta-programs-wrapper.mobile-only { display: none; }
        
        .cta-programs-title {
          font-size: 16px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #ffffff;
          font-weight: 700;
          margin-bottom: 16px;
        }
        
        .cta-programs-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 20px;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .cta-program-item {
          color: rgba(255,255,255,0.7);
          font-size: 16px;
          position: relative;
          display: flex;
          align-items: center;
        }
        
        .cta-program-item:not(:last-child)::after {
          content: '';
          position: absolute;
          right: -10px;
          top: 50%;
          transform: translateY(-50%);
          height: 14px;
          width: 1px;
          background-color: rgba(255,255,255,0.25);
        }
        
        .cta-qr-panel {
          background: #ffffff;
          border-radius: 20px;
          padding: 28px;
          width: 100%;
          max-width: 280px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        
        .qr-label {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #4B5870;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        
        .qr-cta {
          font-size: 20px;
          font-weight: 700;
          color: #0F2D52;
          margin-bottom: 20px;
          font-family: 'Zilla Slab', serif;
        }
        
        .qr-image-wrapper {
          width: 170px;
          height: 170px;
          margin-bottom: 20px;
          position: relative;
        }

        .qr-apply-text {
          font-size: 18px;
          font-weight: 700;
          color: #D89A2B;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        
        .qr-apply-text:hover {
          color: #b57d1f;
        }

        /* Responsive Breakpoints */
        @media (max-width: 991px) {
          .cta-left-col { max-width: 60%; }
          .cta-right-col { flex: 0 0 280px; }
          .cta-heading { font-size: 42px; }
        }
        
        @media (max-width: 767px) {
          .scbm-final-cta { padding: 64px 0; }
          .cta-container { 
            flex-direction: column; 
            padding-left: 24px; 
            padding-right: 24px; 
            gap: 48px; 
          }
          .cta-left-col { max-width: 100%; }
          .cta-right-col { 
            flex: 1; 
            width: 100%; 
            max-width: 100%;
            align-items: center;
          }
          .cta-heading { font-size: 34px; }
          .cta-qr-panel { margin: 0 auto; }
          .cta-quote-mark { left: -16px; font-size: 60px; top: -16px; }
          
          .cta-programs-wrapper.desktop-only { display: none; }
          .cta-programs-wrapper.mobile-only { display: block; margin-top: 10px; }
        }
      `}</style>

      <div className="cta-bg-glow" />
      <div className="cta-bg-pattern" />

      <div className="cta-container">
        <div className="cta-left-col">
          <div className="cta-accent-line" />
          <h2 className="cta-heading">
            <span className="cta-quote-mark">{quote}</span>
            {heading}
          </h2>
          
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="cta-paragraph">
              {paragraph}
            </p>
          ))}

          <div className="cta-programs-wrapper desktop-only">
            <h4 className="cta-programs-title">Other Programs Offered At GU</h4>
            <ul className="cta-programs-list">
              {otherPrograms.map((prog, index) => (
                <li key={index} className="cta-program-item">{prog}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="cta-right-col">
          <div className="cta-qr-panel">
            <span className="qr-label">{qrLabel}</span>
            <span className="qr-cta">{qrCta}</span>
            <div className="qr-image-wrapper">
              <Image src={qrImage} alt="Apply QR Code" fill sizes="180px" className="object-contain" />
            </div>
            <a href={applyLink} className="qr-apply-text">Apply Now</a>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-[16px] mt-[48px] w-full self-start text-left">
            <div className="flex items-start gap-[12px]">
              <div className="mt-[4px] w-[32px] h-[32px] rounded-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center shrink-0">
                <Phone size={16} className="text-[#D89A2B]" />
              </div>
              <div>
                <div className="text-[12px] uppercase tracking-wider text-white/50 font-bold mb-[2px]">Admission Helpline</div>
                <a href={`tel:${helpline.replace(/\s+/g, '')}`} className="text-white font-medium hover:text-[#D89A2B] transition-colors text-[16px]">{helpline}</a>
              </div>
            </div>
            
            <div className="flex items-start gap-[12px]">
              <div className="mt-[4px] w-[32px] h-[32px] rounded-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center shrink-0">
                <Globe2 size={16} className="text-[#D89A2B]" />
              </div>
              <div>
                <div className="text-[12px] uppercase tracking-wider text-white/50 font-bold mb-[2px]">Website</div>
                <a href={website.startsWith("http") ? website : `https://${website}`} target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-[#D89A2B] transition-colors text-[16px]">{website}</a>
              </div>
            </div>
            
            <div className="flex items-start gap-[12px]">
              <div className="mt-[4px] w-[32px] h-[32px] rounded-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center shrink-0">
                <MapPin size={16} className="text-[#D89A2B]" />
              </div>
              <div>
                <div className="text-[12px] uppercase tracking-wider text-white/50 font-bold mb-[2px]">Campus Address</div>
                <p className="text-white/90 text-[16px] leading-snug">{campusAddress}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-programs-wrapper mobile-only">
          <h4 className="cta-programs-title">Other Programs Offered At GU</h4>
          <ul className="cta-programs-list">
            {otherPrograms.map((prog, index) => (
              <li key={index} className="cta-program-item">{prog}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
