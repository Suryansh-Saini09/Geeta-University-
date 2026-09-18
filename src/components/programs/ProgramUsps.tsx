"use client";

import React, { useState } from "react";
import { Check, Plus, Minus, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { SchoolUspsSection, SchoolUspCard } from "@/data/programs/types";

interface ProgramUspsProps {
  usps: SchoolUspsSection;
}

export default function ProgramUsps({ usps }: ProgramUspsProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  if (!usps || !usps.cards || usps.cards.length === 0) return null;

  const toggleCard = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="USPs"
      style={{
        background: "#FDF1D6",
        padding: "64px 0 72px",
        position: "relative",
        borderTop: "1px solid rgba(0, 0, 0, 0.05)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px", position: "relative" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          {usps.eyebrow && (
            <span
              style={{
                color: "#E8871A",
                fontWeight: 800,
                fontSize: 12,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                display: "inline-block",
                marginBottom: 8,
              }}
            >
              {usps.eyebrow}
            </span>
          )}

          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 900,
              color: "#0A1F44",
              lineHeight: 1.2,
              letterSpacing: "-0.8px",
              margin: 0,
            }}
          >
            {usps.title}
          </h2>

          {usps.subtitle && (
            <p
              style={{
                fontSize: 16,
                color: "#475569",
                maxWidth: 800,
                margin: "12px auto 0",
                lineHeight: 1.65,
                fontWeight: 450,
              }}
            >
              {usps.subtitle}
            </p>
          )}
        </div>

        {/* 4-Column USP Cards Grid: Open On Click */}
        <div className="usps-grid">
          {usps.cards.map((card, idx) => {
            const isOpen = expandedIndex === idx;

            return (
              <div
                key={idx}
                onClick={() => toggleCard(idx)}
                className={`usp-interactive-card ${isOpen ? "is-open" : ""}`}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleCard(idx);
                  }
                }}
                style={{
                  background: "#FFFFFF",
                  borderRadius: 22,
                  padding: "30px 24px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: isOpen
                    ? "0 18px 38px rgba(10, 31, 68, 0.09), 0 4px 12px rgba(232, 135, 26, 0.08)"
                    : "0 6px 20px rgba(10, 31, 68, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)",
                  border: isOpen
                    ? "1.5px solid rgba(232, 135, 26, 0.45)"
                    : "1px solid rgba(10, 31, 68, 0.08)",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  outline: "none",
                }}
              >
                {/* Top Accent Gradient Bar */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: isOpen ? 5 : 4,
                    background: "linear-gradient(90deg, #E8871A 0%, #F59E0B 100%)",
                    transition: "height 0.3s ease",
                  }}
                />

                {/* Card Header: Title + Toggle Icon Button */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: 14,
                  }}
                >
                  <h3
                    style={{
                      fontSize: 18.5,
                      fontWeight: 800,
                      color: "#0A1F44",
                      lineHeight: 1.35,
                      margin: 0,
                      letterSpacing: "-0.3px",
                      flex: 1,
                    }}
                  >
                    {card.title}
                  </h3>

                  {/* Toggle Button Icon */}
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: isOpen ? "#0A1F44" : "rgba(232, 135, 26, 0.12)",
                      color: isOpen ? "#FFFFFF" : "#E8871A",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {isOpen ? <Minus size={16} strokeWidth={2.5} /> : <Plus size={16} strokeWidth={2.5} />}
                  </div>
                </div>

                {/* Expandable Content on Click */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        style={{
                          height: 1,
                          background: "rgba(10, 31, 68, 0.08)",
                          margin: "18px 0 16px",
                        }}
                      />

                      <ul
                        style={{
                          listStyle: "none",
                          padding: 0,
                          margin: 0,
                          display: "flex",
                          flexDirection: "column",
                          gap: 12,
                        }}
                      >
                        {card.points.map((pt, pIdx) => (
                          <li
                            key={pIdx}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 10,
                              fontSize: 14,
                              color: "#334155",
                              lineHeight: 1.55,
                              fontWeight: 450,
                            }}
                          >
                            <span
                              style={{
                                width: 18,
                                height: 18,
                                borderRadius: "50%",
                                background: "rgba(232, 135, 26, 0.12)",
                                color: "#E8871A",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                marginTop: 2,
                              }}
                            >
                              <Check size={11} strokeWidth={3} />
                            </span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Closed prompt hint */}
                {!isOpen && (
                  <div
                    style={{
                      marginTop: 18,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#E8871A",
                      letterSpacing: "0.2px",
                    }}
                  >
                    <span>Click to view details</span>
                    <ChevronRight size={14} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .usps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
          align-items: start;
        }

        .usp-interactive-card:hover {
          transform: translateY(-4px);
          border-color: rgba(232, 135, 26, 0.35) !important;
        }

        @media (max-width: 1100px) {
          .usps-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 640px) {
          .usps-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
}
