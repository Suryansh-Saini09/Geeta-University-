"use client";

import React from "react";
import {
  GraduationCap,
  Building2,
  Globe2,
  TrendingUp,
  Award,
  BookOpenCheck,
  CheckCircle2,
  Check,
  type LucideIcon,
} from "lucide-react";
import type { SchoolUspsSection, SchoolUspCard } from "@/data/programs/types";

interface ProgramUspsProps {
  usps: SchoolUspsSection;
}

function getUspIcon(card: SchoolUspCard, index: number): LucideIcon {
  const t = (card.title || "").toLowerCase();
  if (t.includes("academic") || t.includes("faculty") || t.includes("mentor") || t.includes("expert")) {
    return GraduationCap;
  }
  if (t.includes("infrastructure") || t.includes("lab") || t.includes("resource") || t.includes("facility")) {
    return Building2;
  }
  if (t.includes("industry") || t.includes("global") || t.includes("exposure") || t.includes("engagement") || t.includes("mou")) {
    return Globe2;
  }
  if (t.includes("placement") || t.includes("career") || t.includes("package") || t.includes("recruit")) {
    return TrendingUp;
  }
  const defaults = [GraduationCap, Building2, Globe2, TrendingUp, Award, BookOpenCheck];
  return defaults[index % defaults.length];
}

export default function ProgramUsps({ usps }: ProgramUspsProps) {
  if (!usps || !usps.cards || usps.cards.length === 0) return null;

  return (
    <section
      id="USPs"
      style={{
        background: "#FDF1D6",
        padding: "52px 0 48px",
        position: "relative",
        borderTop: "1px solid rgba(0, 0, 0, 0.06)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px", position: "relative" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: 54 }}>
          {/* <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              marginBottom: 14,
            }}
          >
            <span style={{ width: 28, height: 2, background: "#E8871A", borderRadius: 2 }} />
            <span
              style={{
                color: "#E8871A",
                fontWeight: 800,
                fontSize: 11.5,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              {usps.eyebrow || "WHY CHOOSE US"}
            </span>
            <span style={{ width: 28, height: 2, background: "#E8871A", borderRadius: 2 }} />
          </div> */}

          <h2
            style={{
              fontSize: "clamp(30px, 4.2vw, 44px)",
              fontWeight: 900,
              color: "#0A1F44",
              lineHeight: 1.15,
              letterSpacing: "-1px",
              margin: 0,
            }}
          >
            {usps.title}
          </h2>

          {/* {usps.subtitle && (
            <p
              style={{
                fontSize: 16,
                color: "#4A5568",
                maxWidth: 820,
                margin: "14px auto 0",
                lineHeight: 1.65,
                fontWeight: 450,
              }}
            >
              {usps.subtitle}
            </p>
          )} */}
        </div>

        {/* 4-Column USP Cards Grid */}
        <div className="usps-grid">
          {usps.cards.map((card, idx) => {
            const Icon = getUspIcon(card, idx);
            const numStr = `0${idx + 1}`;

            return (
              <div
                key={idx}
                className="usp-card"
                style={{
                  background: "#FFFFFF",
                  borderRadius: 22,
                  padding: "32px 26px 28px",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 10px 30px rgba(10, 31, 68, 0.04), 0 2px 6px rgba(0, 0, 0, 0.02)",
                  border: "1.5px solid rgba(232, 135, 26, 0.16)",
                  position: "relative",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {/* Top Accent Highlight */}
                <div
                  className="usp-card-top-accent"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 24,
                    right: 24,
                    height: 3,
                    background: "linear-gradient(90deg, #E8871A, #F59E0B)",
                    borderRadius: "0 0 4px 4px",
                    opacity: 0.8,
                    transition: "opacity 0.3s ease",
                  }}
                />

                {/* Card Top Row: Icon + Number Badge */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 20,
                    marginTop: 4,
                  }}
                >
                  <div
                    className="usp-icon-wrapper"
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      background: "linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)",
                      border: "1px solid rgba(232, 135, 26, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#E8871A",
                      boxShadow: "0 4px 10px rgba(232, 135, 26, 0.08)",
                      transition: "transform 0.3s ease, background 0.3s ease, color 0.3s ease",
                    }}
                  >
                    <Icon size={24} strokeWidth={2.2} />
                  </div>

                  <span
                    style={{
                      fontSize: 12.5,
                      fontWeight: 800,
                      color: "#E8871A",
                      background: "rgba(232, 135, 26, 0.08)",
                      border: "1px solid rgba(232, 135, 26, 0.18)",
                      borderRadius: 20,
                      padding: "4px 10px",
                      letterSpacing: "0.5px",
                    }}
                  >
                    USP {numStr}
                  </span>
                </div>

                {/* Card Title */}
                <h3
                  className="usp-card-title"
                  style={{
                    fontSize: 18.5,
                    fontWeight: 800,
                    color: "#0A1F44",
                    lineHeight: 1.3,
                    margin: "0 0 16px",
                    minHeight: 48,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {card.title}
                </h3>

                {/* Divider */}
                <div
                  style={{
                    height: 1,
                    background: "linear-gradient(90deg, #E2E8F0 0%, rgba(226, 232, 240, 0.3) 100%)",
                    marginBottom: 18,
                  }}
                />

                {/* Bullet Points */}
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 13,
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
                        color: "#475569",
                        lineHeight: 1.55,
                        fontWeight: 480,
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
            );
          })}
        </div>
      </div>

      <style>{`
        .usps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
          align-items: stretch;
        }

        .usp-card:hover {
          transform: translateY(-6px);
          border-color: rgba(232, 135, 26, 0.45) !important;
          box-shadow: 0 18px 36px rgba(232, 135, 26, 0.12), 0 4px 12px rgba(10, 31, 68, 0.05) !important;
        }

        .usp-card:hover .usp-icon-wrapper {
          transform: scale(1.08) rotate(4deg);
          background: #0A1F44;
          color: #FFFFFF;
          border-color: #0A1F44;
        }

        .usp-card:hover .usp-card-top-accent {
          opacity: 1 !important;
          height: 4px;
        }

        @media (max-width: 1080px) {
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
