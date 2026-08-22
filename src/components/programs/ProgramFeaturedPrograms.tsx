"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { ProgramPageData } from "@/data/programs/types";
import { getProgramIcon } from "./iconHelper";

interface ProgramFeaturedProgramsProps {
  featuredPrograms?: ProgramPageData["featuredPrograms"];
}

export default function ProgramFeaturedPrograms({ featuredPrograms }: ProgramFeaturedProgramsProps) {
  if (!featuredPrograms || !featuredPrograms.cards || featuredPrograms.cards.length === 0) {
    return null;
  }

  const { title1, tag1, title2, tag2, description, cards, studentImage } = featuredPrograms;

  return (
    <section className="relative w-full overflow-hidden font-sans pt-[100px] pb-0 z-10 flex flex-col items-center">
      {/* CSS ANIMATIONS */}
      <style>{`
        @keyframes floatPremium {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

      {/* PREMIUM GRADIENT BACKGROUND */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "linear-gradient(180deg, #071A38 0%, #0D2E5C 45%, #133D73 100%)",
        }}
      >
        {/* Depth Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(47,103,187,0.12),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_75%,rgba(232,135,26,0.08),transparent_35%)]" />

        {/* Subtle Decorative SVG Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none">
          <path d="M-200 400 C 400 150, 900 650, 1600 300" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="6 6" />
          <path d="M-200 500 C 500 250, 1000 750, 1700 400" stroke="#FFFFFF" strokeWidth="0.5" />
        </svg>

        {/* Dotted pattern in corners */}
        <div className="absolute top-12 left-12 w-64 h-64 bg-[radial-gradient(#FFFFFF_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-[0.03]" />
        <div className="absolute bottom-32 right-12 w-64 h-64 bg-[radial-gradient(#FFFFFF_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-[0.03]" />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center">
        {/* HEADING BLOCK */}
        <motion.div
          className="flex flex-col items-center text-center w-full"
          style={{ marginBottom: "60px" }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full" style={{ marginBottom: "24px" }}>
            <h2 className="text-white font-[800] text-center font-['Zilla_Slab',serif]" style={{ fontSize: "clamp(32px, 3.5vw, 48px)", lineHeight: 1.1 }}>
              {title1} {tag1 && <span className="text-[#E8871A]">({tag1})</span>}
            </h2>
            {title2 && (
              <>
                <div className="hidden md:block w-[2px] h-[44px] bg-white/20" />
                <div className="md:hidden w-[60px] h-[2px] bg-white/20 my-1" />
                <h2 className="text-white font-[800] text-center font-['Zilla_Slab',serif]" style={{ fontSize: "clamp(32px, 3.5vw, 48px)", lineHeight: 1.1 }}>
                  {title2} {tag2 && <span className="text-[#E8871A]">({tag2})</span>}
                </h2>
              </>
            )}
          </div>

          {description && (
            <p className="font-medium m-auto font-['Source_Sans_3',sans-serif]" style={{ fontSize: "20px", lineHeight: 1.7, color: "rgba(255,255,255,0.85)", maxWidth: "760px", marginBottom: "24px" }}>
              {description}
            </p>
          )}

          {/* SECTION DIVIDER */}
          <div className="flex items-center justify-center gap-4" style={{ width: "140px" }}>
            <div className="h-[1px] flex-1 bg-[#E8871A]/60" />
            <div className="w-2 h-2 rotate-45 bg-[#E8871A]" />
            <div className="h-[1px] flex-1 bg-[#E8871A]/60" />
          </div>
        </motion.div>

        {/* 4-COLUMN CARDS ROW */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full"
          style={{ gap: "28px" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, staggerChildren: 0.15, ease: "easeOut" }}
        >
          {cards.map((card, idx) => {
            const Icon = typeof card.icon === "function"
              ? card.icon
              : getProgramIcon(card.iconName || (typeof card.icon === "string" ? card.icon : undefined));

            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "20px",
                  padding: "36px 28px",
                  minHeight: "340px",
                  transition: "all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
                  e.currentTarget.style.borderColor = "rgba(232, 135, 26, 0.4)";
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
                }}
              >
                <div>
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "16px",
                      background: "rgba(232, 135, 26, 0.12)",
                      border: "1px solid rgba(232, 135, 26, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "24px",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <Icon size={28} className="text-[#E8871A]" />
                  </div>

                  <h3
                    className="text-white font-[700] font-['Zilla_Slab',serif]"
                    style={{
                      fontSize: "22px",
                      lineHeight: "1.25",
                      marginBottom: "20px",
                    }}
                  >
                    {card.title}
                  </h3>

                  <ul className="flex flex-col" style={{ gap: "10px" }}>
                    {card.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-center text-white/80" style={{ gap: "10px", fontSize: "15px" }}>
                        <CheckCircle2 size={16} className="text-[#E8871A] shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </motion.div>

        {studentImage && (
          <div className="relative w-full max-w-[500px] h-[350px] mt-12 flex justify-center items-end">
            <Image
              src={studentImage}
              alt="Featured Student"
              fill
              className="object-contain object-bottom"
              sizes="500px"
            />
          </div>
        )}
      </div>
    </section>
  );
}
