"use client";

import React, { useState } from "react";
import { Check, ArrowRight, ChevronDown } from "lucide-react";
import type { SchoolUspsSection } from "@/data/programs/types";

interface ProgramUspsProps {
  usps: SchoolUspsSection;
}

export default function ProgramUsps({ usps }: ProgramUspsProps) {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  if (!usps || !usps.cards || usps.cards.length === 0) return null;

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

        {/* 4-Column Interactive Hover-Reveal USP Cards Grid */}
        <div className="usps-grid">
          {usps.cards.map((card, idx) => {
            const isHoveredOrActive = activeCard === idx;

            return (
              <div
                key={idx}
                className={`usp-hover-card ${isHoveredOrActive ? "is-active" : ""}`}
                onMouseEnter={() => setActiveCard(idx)}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => setActiveCard(activeCard === idx ? null : idx)}
                style={{
                  background: "#FFFFFF",
                  borderRadius: 24,
                  padding: "36px 28px 32px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "0 8px 24px rgba(10, 31, 68, 0.04), 0 2px 6px rgba(0, 0, 0, 0.02)",
                  border: "1.5px solid rgba(10, 31, 68, 0.07)",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  minHeight: 280,
                }}
              >
                {/* Top Accent Gradient Bar */}
                <div
                  className="usp-top-accent"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: "linear-gradient(90deg, #E8871A 0%, #F59E0B 100%)",
                    transition: "height 0.3s ease",
                  }}
                />

                {/* Card Header: Prominent Heading */}
                <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center" }} className="usp-heading-container">
                  <h3
                    className="usp-title"
                    style={{
                      fontSize: 21,
                      fontWeight: 800,
                      color: "#0A1F44",
                      lineHeight: 1.35,
                      margin: "0 0 12px",
                      letterSpacing: "-0.4px",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {card.title}
                  </h3>

                  {/* Hint indicator when collapsed */}
                  <div
                    className="usp-explore-hint"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      color: "#E8871A",
                      fontSize: 13,
                      fontWeight: 700,
                      letterSpacing: "0.2px",
                      marginTop: 6,
                      transition: "all 0.3s ease",
                    }}
                  >
                    <span>View Highlights</span>
                    <ArrowRight size={14} className="usp-hint-arrow" />
                  </div>
                </div>

                {/* Hidden / Revealable Content on Hover */}
                <div className="usp-reveal-content">
                  <div
                    style={{
                      height: 1,
                      background: "rgba(10, 31, 68, 0.08)",
                      margin: "16px 0 18px",
                    }}
                  />

                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 13,
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
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .usps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          align-items: stretch;
        }

        .usp-hover-card {
          min-height: 280px;
          justify-content: space-between;
        }

        .usp-heading-container {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .usp-hint-arrow {
          transition: transform 0.3s ease;
        }

        /* Collapsed State: hidden content with 0 max-height */
        .usp-reveal-content {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transform: translateY(12px);
          transition: max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Hover & Active States */
        .usp-hover-card:hover,
        .usp-hover-card.is-active {
          transform: translateY(-6px);
          border-color: rgba(232, 135, 26, 0.4) !important;
          box-shadow: 0 20px 44px rgba(10, 31, 68, 0.1), 0 4px 12px rgba(232, 135, 26, 0.08) !important;
        }

        .usp-hover-card:hover .usp-top-accent,
        .usp-hover-card.is-active .usp-top-accent {
          height: 6px;
        }

        .usp-hover-card:hover .usp-hint-arrow,
        .usp-hover-card.is-active .usp-hint-arrow {
          transform: translateX(4px);
        }

        .usp-hover-card:hover .usp-explore-hint,
        .usp-hover-card.is-active .usp-explore-hint {
          opacity: 0;
          height: 0;
          margin-top: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .usp-hover-card:hover .usp-heading-container,
        .usp-hover-card.is-active .usp-heading-container {
          flex: 0 0 auto;
          justify-content: flex-start;
        }

        .usp-hover-card:hover .usp-reveal-content,
        .usp-hover-card.is-active .usp-reveal-content {
          max-height: 600px;
          opacity: 1;
          transform: translateY(0);
          margin-top: 4px;
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
          /* On mobile, allow tapping or auto-expand for easy reading */
          .usp-hover-card {
            min-height: auto;
          }
        }
      `}</style>
    </section>
  );
}
