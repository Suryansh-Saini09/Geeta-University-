"use client";

import React from "react";
import type { ProgramPageData, SpecialisationItem } from "@/data/programs/types";

interface ProgramSpecialisationsProps {
  specialisations?: ProgramPageData["specialisations"];
}

export const DEFAULT_SPECIALISATIONS_DATA: SpecialisationItem[] = [
  {
    title: "Artificial Intelligence & Machine Learning",
    desc: "Intelligent systems, data-driven decision-making, and practical exposure to modern AI/ML applications",
  },
  {
    title: "Cybersecurity",
    desc: "Secure systems design, cyber hygiene, and security-oriented technical foundations",
  },
  {
    title: "Data Science & Business Analytics with HCL",
    desc: "Data analysis connected with business insight and industry-linked skill development",
  },
  {
    title: "Full Stack Web Development",
    desc: "End-to-end web application development through hands-on, stack-based learning",
  },
  {
    title: "Quantum Computing",
    desc: "Emerging frontier concepts in computing and future-oriented technology",
  },
  {
    title: "Computer Applications & Cloud Engineering",
    desc: "Application-oriented computing foundations for software and digital tools",
  },
];

export default function ProgramSpecialisations({ specialisations }: ProgramSpecialisationsProps) {
  const eyebrow = specialisations?.eyebrow;
  const title = specialisations?.title || "We Don't Just Educate\nWe Transform Futures !";
  const subtitle = specialisations?.subtitle;
  const rawItems = specialisations?.items;
  const items = rawItems && rawItems.length > 0 ? rawItems : DEFAULT_SPECIALISATIONS_DATA;
  const isCardLayout = specialisations?.layout === "cards" || items.some((i) => i.points && i.points.length > 0);

  if (isCardLayout && specialisations?.layout !== "table") {
    return (
      <section
        id="Specialisations"
        style={{
          padding: "80px 0 90px",
          background: "#FCF8F3",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>
          {/* Section Heading matching site standard */}
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            {eyebrow && (
              <span
                style={{
                  color: "#E8871A",
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  display: "inline-block",
                  marginBottom: 8,
                }}
              >
                {eyebrow}
              </span>
            )}
            <h2
              style={{
                fontSize: 44,
                fontWeight: 900,
                color: "#0A1F44",
                margin: "0 0 12px",
                lineHeight: 1.15,
                letterSpacing: "-1px",
              }}
            >
              {title}
            </h2>
            {subtitle && (
              <p
                style={{
                  fontSize: 16,
                  color: "#64748B",
                  maxWidth: 800,
                  margin: "0 auto",
                  lineHeight: 1.6,
                }}
              >
                {subtitle}
              </p>
            )}
          </div>

          {/* Cards Grid */}
          <div
            className="spec-cards-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
            }}
          >
            {items.map((card, idx) => {
              const points = card.points || (card.desc ? [card.desc] : []);
              return (
                <div
                  key={idx}
                  className="spec-card"
                  style={{
                    background: "#FFFFFF",
                    borderRadius: 16,
                    padding: "30px 22px",
                    border: "1px solid #ECEEF2",
                    boxShadow: "0 4px 16px rgba(10,31,68,0.03)",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  }}
                >
                  {/* Card Title */}
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 800,
                      color: "#0A1F44",
                      textAlign: "center",
                      margin: "0 0 16px",
                      paddingBottom: 16,
                      borderBottom: "1.5px solid #EEF2F6",
                      lineHeight: 1.3,
                      minHeight: 46,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {card.title}
                  </h3>

                  {/* Bullet Points */}
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                      flex: 1,
                    }}
                  >
                    {points.map((pt, pIdx) => (
                      <li
                        key={pIdx}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 10,
                          fontSize: 14.5,
                          color: "#4A5568",
                          lineHeight: 1.55,
                        }}
                      >
                        <span
                          style={{
                            color: "#E8871A",
                            fontSize: 18,
                            lineHeight: "18px",
                            flexShrink: 0,
                            marginTop: 1,
                          }}
                        >
                          •
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

        <style jsx>{`
          .spec-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 14px 30px rgba(10, 31, 68, 0.08) !important;
          }
          @media (max-width: 1080px) {
            .spec-cards-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 600px) {
            .spec-cards-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>
    );
  }

  return (
    <section id="Specialisations" style={{ padding: "100px 0", background: "#F8FAFC", position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          {eyebrow && (
            <span style={{ color: "#E8871A", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase" }}>
              {eyebrow}
            </span>
          )}
          <h2 style={{ fontSize: 44, fontWeight: 900, color: "#0A1F44", margin: "12px 0 0", lineHeight: 1.1, letterSpacing: "-1px" }}>
            {title}
          </h2>
          {subtitle && (
            <p style={{ fontSize: 18, color: "#4A5568", maxWidth: 800, margin: "14px auto 0", lineHeight: 1.6 }}>
              {subtitle}
            </p>
          )}
        </div>

        <div
          style={{
            width: "100%",
            overflowX: "auto",
            borderRadius: 16,
            boxShadow: "0 10px 30px rgba(10,31,68,0.07)",
            border: "1px solid #E2E8F0",
            background: "#FFFFFF",
          }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", minWidth: 600 }}>
            <thead>
              <tr style={{ background: "#0A1F44", color: "#FFFFFF" }}>
                <th style={{ padding: "20px 28px", fontSize: 15, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1, width: "38%" }}>
                  Specialisation
                </th>
                <th style={{ padding: "20px 28px", fontSize: 15, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1 }}>
                  What You'll Learn
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((spec, i) => {
                const descText = spec.desc || (spec.points ? spec.points.join(" • ") : "");
                return (
                  <tr
                    key={i}
                    className="spec-row"
                    style={{
                      borderBottom: i < items.length - 1 ? "1px solid #E2E8F0" : "none",
                      background: i % 2 === 0 ? "#FFFFFF" : "#F8FAFC",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <td style={{ padding: "24px 28px", fontSize: 16, fontWeight: 800, color: "#0A1F44", verticalAlign: "top" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                        <span
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            background: "#E8871A",
                            flexShrink: 0,
                            display: "inline-block",
                            marginTop: 2,
                          }}
                        />
                        {spec.title}
                      </span>
                    </td>
                    <td style={{ padding: "24px 28px", fontSize: 15, color: "#4A5568", lineHeight: 1.65, fontWeight: 500, verticalAlign: "top" }}>
                      {descText}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <style>{`
        .spec-row:hover {
          background-color: rgba(232, 135, 26, 0.04) !important;
        }
        .spec-row:hover td:first-child {
          color: #E8871A !important;
        }
      `}</style>
    </section>
  );
}

