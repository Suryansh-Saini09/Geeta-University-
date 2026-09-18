"use client";

import React from "react";
import { Check } from "lucide-react";
import type { SchoolUspsSection } from "@/data/programs/types";

interface ProgramUspsProps {
  usps: SchoolUspsSection;
}

export default function ProgramUsps({ usps }: ProgramUspsProps) {
  if (!usps || !usps.cards || usps.cards.length === 0) return null;

  return (
    <section
      id="USPs"
      style={{
        background: "#FDF1D6",
        padding: "60px 0 68px",
        position: "relative",
        borderTop: "1px solid rgba(0, 0, 0, 0.05)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px", position: "relative" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: 44 }}>
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

        {/* 4-Column USP Cards Grid */}
        <div className="usps-grid">
          {usps.cards.map((card, idx) => (
            <div
              key={idx}
              className="usp-card"
              style={{
                background: "#FFFFFF",
                borderRadius: 20,
                padding: "32px 26px 28px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 4px 20px rgba(10, 31, 68, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)",
                border: "1px solid rgba(10, 31, 68, 0.08)",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                height: "100%",
              }}
            >
              {/* Top Accent Gradient Bar */}
              <div
                className="usp-card-top-accent"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: "linear-gradient(90deg, #E8871A 0%, #F59E0B 100%)",
                  opacity: 0.9,
                  transition: "height 0.3s ease, opacity 0.3s ease",
                }}
              />

              {/* Card Title */}
              <h3
                className="usp-card-title"
                style={{
                  fontSize: 19,
                  fontWeight: 800,
                  color: "#0A1F44",
                  lineHeight: 1.35,
                  margin: "0 0 16px",
                  letterSpacing: "-0.3px",
                  minHeight: 52,
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                {card.title}
              </h3>

              {/* Subtle Divider */}
              <div
                style={{
                  height: 1,
                  background: "rgba(10, 31, 68, 0.07)",
                  marginBottom: 18,
                }}
              />

              {/* All bullet points permanently visible */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  flex: 1,
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
                      lineHeight: 1.6,
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
                        marginTop: 3,
                      }}
                    >
                      <Check size={11} strokeWidth={3} />
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .usps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          align-items: stretch;
        }

        .usp-card:hover {
          transform: translateY(-4px);
          border-color: rgba(232, 135, 26, 0.35) !important;
          box-shadow: 0 16px 36px rgba(10, 31, 68, 0.08), 0 4px 12px rgba(232, 135, 26, 0.05) !important;
        }

        .usp-card:hover .usp-card-top-accent {
          height: 5px;
          opacity: 1 !important;
        }

        @media (max-width: 1100px) {
          .usps-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .usp-card-title {
            min-height: auto !important;
          }
        }

        @media (max-width: 640px) {
          .usps-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }
        }
      `}</style>
    </section>
  );
}
