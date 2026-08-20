"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { ProgramPageData } from "@/data/programs/types";
import { getProgramIcon } from "./iconHelper";

interface ProgramSpecialisationsProps {
  specialisations?: ProgramPageData["specialisations"];
}

export default function ProgramSpecialisations({ specialisations }: ProgramSpecialisationsProps) {
  if (!specialisations || !specialisations.items || specialisations.items.length === 0) {
    return null;
  }

  const { eyebrow, title, subtitle, items } = specialisations;

  return (
    <section 
      id="specialisations"
      className="w-full relative font-sans"
      style={{
        background: `
          radial-gradient(circle at 90% 10%, rgba(36,95,168,0.06), transparent 25%),
          radial-gradient(circle at 10% 90%, rgba(217,154,36,0.05), transparent 25%),
          linear-gradient(180deg, #FCFDFE 0%, #F5F8FC 100%)
        `,
        paddingTop: "72px",
        paddingBottom: "100px",
      }}
    >
      <style>{`
        .programs-container {
          width: min(100% - 64px, 1280px);
          margin-inline: auto;
        }

        .programs-heading {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto 56px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .programs-heading h2 {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
          font-size: clamp(40px, 4.3vw, 64px);
          line-height: 1.08;
          font-weight: 800;
          font-family: "Zilla Slab", serif;
          color: #0B2948;
        }

        .programs-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          width: 130px;
          margin: 28px auto 26px;
        }

        .programs-divider::before,
        .programs-divider::after {
          content: "";
          width: 44px;
          height: 1px;
          background: #D99A24;
        }

        .programs-divider-diamond {
          width: 8px;
          height: 8px;
          background: #D99A24;
          transform: rotate(45deg);
          flex-shrink: 0;
        }

        .programs-subtitle {
          margin: 0;
          text-align: center;
          font-size: 21px;
          line-height: 1.4;
          font-weight: 700;
          color: #173F6D;
          font-family: "Source Sans 3", "Source Sans Pro", sans-serif;
        }

        .programs-directory {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          position: relative;
        }

        @media (max-width: 768px) {
          .programs-container {
            width: min(100% - 32px, 1280px);
          }
          .programs-directory {
            grid-template-columns: 1fr;
            column-gap: 0;
          }
          .bba-directory-item {
            padding-left: 0 !important;
            padding-right: 0 !important;
            padding-top: 30px !important;
            padding-bottom: 30px !important;
          }
          .bba-directory-item:nth-child(odd) {
            padding-right: 0 !important;
          }
          .bba-directory-item:nth-child(even) {
            padding-left: 0 !important;
          }
          .bba-ninth-item {
            grid-column: span 1 !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            max-width: 100% !important;
          }
          .bba-grid-divider {
            display: none !important;
          }
          .bba-number-mobile {
            right: 0 !important;
          }
        }
      `}</style>

      {/* Decorative Texture */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#0F3763_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.025]" />
      </div>

      <div className="programs-container relative z-10">
        {/* HEADING BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="programs-heading"
        >
          {/* Eyebrow */}
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#D99A24", margin: "0 0 18px", textAlign: "center" }}>
            {eyebrow || "EXPLORE YOUR SPECIALISATION"}
          </h3>
          
          {/* Main Heading */}
          <h2>
            {title}
          </h2>
          
          {/* Gold Divider */}
          <div className="programs-divider">
            <span className="programs-divider-diamond" />
          </div>

          {/* Program Subtitle */}
          {subtitle && (
            <h4 className="programs-subtitle">
              {subtitle}
            </h4>
          )}
        </motion.div>

        {/* DIRECTORY */}
        <div className="programs-directory">
          {/* CENTER DIVIDER */}
          <div 
            className="absolute bba-grid-divider pointer-events-none"
            style={{
              left: "50%",
              top: 0,
              bottom: 0,
              width: "1px",
              background: "rgba(15, 45, 82, 0.10)",
              transform: "translateX(-50%)",
              zIndex: 0
            }}
          />

          {items.map((spec, idx) => {
            const Icon = getProgramIcon(spec.iconName);
            const formattedNumber = (idx + 1).toString().padStart(2, "0");
            const isOdd = (idx + 1) % 2 !== 0; // left column
            const isLast = idx === items.length - 1 && items.length % 2 !== 0;
            
            return (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (idx % 2) * 0.1, ease: "easeOut" }}
                className={`group relative flex flex-col bba-directory-item ${isLast ? "bba-ninth-item" : ""}`}
                style={{
                  paddingTop: "38px",
                  paddingBottom: "38px",
                  borderBottom: "1px solid rgba(15,45,82,0.10)",
                  paddingLeft: isLast ? "0" : (isOdd ? "24px" : "56px"),
                  paddingRight: isLast ? "0" : (isOdd ? "56px" : "24px"),
                  gridColumn: isLast ? "1 / -1" : "auto", 
                  justifySelf: isLast ? "center" : "auto",
                  width: "100%",
                  maxWidth: isLast ? "520px" : "100%",
                  boxSizing: "border-box"
                }}
              >
                {/* Trigger Area */}
                <div className="absolute inset-0 z-20 cursor-default" />

                {/* DECORATIVE NUMBER */}
                <div 
                  className="absolute pointer-events-none select-none z-0 bba-number-mobile font-['Zilla_Slab',serif]"
                  style={{
                    fontSize: "72px",
                    fontWeight: 800,
                    lineHeight: 1,
                    color: "rgba(15, 45, 82, 0.06)",
                    top: "34px",
                    right: "28px",
                  }}
                >
                  {formattedNumber}
                </div>

                <div className="relative z-10 w-full flex flex-col items-start text-left box-border">
                  {/* Header (Icon + Title) */}
                  <div className="flex items-center" style={{ gap: "16px" }}>
                    <div 
                      className="flex items-center justify-center shrink-0 transition-colors duration-300 bg-[#EDF4FC] group-hover:bg-[#0F3763] border border-[#DDE8F4]"
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "14px"
                      }}
                    >
                      <Icon size={24} className="text-[#245FA8] group-hover:text-[#D99A24] transition-colors duration-300" />
                    </div>
                    
                    <h4 
                      className="text-[#0B2948] group-hover:text-[#245FA8] transition-colors duration-300 font-['Source_Sans_3',sans-serif]"
                      style={{ 
                        fontSize: "24px", 
                        fontWeight: 750, 
                        lineHeight: 1.2
                      }}
                    >
                      {spec.title}
                    </h4>
                  </div>

                  {/* Gold Line */}
                  <div 
                    className="bg-[#D99A24] w-[48px] group-hover:w-[76px] transition-all duration-300 ease"
                    style={{
                      height: "2px",
                      marginTop: "18px",
                      marginBottom: "22px"
                    }}
                  />

                  {/* Learning Outcomes */}
                  <ul className="flex flex-col" style={{ gap: "13px" }}>
                    {spec.points.map((point, i) => (
                      <li key={i} className="flex items-start" style={{ gap: "12px", textAlign: "left" }}>
                        <CheckCircle2 size={17} style={{ color: "#2E67AE", flexShrink: 0, marginTop: "3px" }} strokeWidth={2.5} />
                        <span style={{ fontSize: "16px", fontWeight: 500, lineHeight: 1.55, color: "#536176" }}>
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
