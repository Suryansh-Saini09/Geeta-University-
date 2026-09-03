"use client";

import React from "react";
import type { ProgramPageData } from "@/data/programs/types";
import VisionMissionSection from "./VisionMissionSection";

interface ProgramAboutProps {
  about?: ProgramPageData["about"];
  intro?: ProgramPageData["intro"];
  visionMission?: ProgramPageData["visionMission"];
}

export default function ProgramAbout({ about, intro, visionMission }: ProgramAboutProps) {
  const data = about || (intro ? {
    eyebrow: intro.eyebrow,
    title: intro.title,
    paragraphs: intro.paragraphs,
    careers: undefined,
    closingText: undefined,
  } : null);

  if (!data) return null;

  const careers = data.careers || [];
  const closingText = data.closingText || "Our learning environment combines strong academic foundations, real-world practical experience, expert mentorship, and dedicated career support — ensuring graduates are ready to contribute from day one.";

  return (
    <section id="About" style={{ padding: "90px 0", background: "#FFFFFF", color: "#000" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header Block */}
        <div style={{ marginBottom: careers.length > 0 ? 56 : 32, maxWidth: 960 }}>
          {data.eyebrow && (
            <span style={{ color: "#E8871A", fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", display: "inline-block", marginBottom: 12 }}>
              {data.eyebrow}
            </span>
          )}
          <h2
            style={{
              fontSize: 44,
              fontWeight: 800,
              color: "#0A1F44",
              lineHeight: 1.15,
              letterSpacing: "-1px",
              marginBottom: 24,
            }}
          >
            {data.title}
          </h2>
          {data.paragraphs.map((p, idx) => (
            <p
              key={idx}
              style={{
                fontSize: 16.5,
                color: "#4A5568",
                lineHeight: 1.8,
                fontWeight: 450,
                marginBottom: idx < data.paragraphs.length - 1 ? 16 : 0,
              }}
            >
              {p}
            </p>
          ))}
        </div>

        {/* Career Cards */}
        {careers.length > 0 && (
          <div>
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#E8871A",
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Students are prepared for careers in:
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 16,
              }}
            >
              {careers.map((career) => (
                <div
                  key={career}
                  className="career-card"
                  style={{
                    padding: "18px 28px",
                    borderRadius: 12,
                    border: "1.5px solid #E2E8F0",
                    background: "#F8FAFC",
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#0A1F44",
                    cursor: "default",
                    transition: "all 0.25s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#E8871A",
                      flexShrink: 0,
                      display: "inline-block",
                    }}
                  />
                  {career}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Closing line */}
        {closingText && (
          <p style={{ fontSize: 16, color: "#6B7280", lineHeight: 1.75, fontWeight: 400, marginTop: 32 }}>
            {closingText}
          </p>
        )}

        {/* Vision & Mission Section */}
        <VisionMissionSection data={visionMission} />
      </div>

      <style>{`
        .career-card:hover {
          background: #fff7ed !important;
          border-color: #E8871A !important;
          color: #E8871A !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(232,135,26,0.12);
        }
        .career-card:hover span {
          background: #E8871A !important;
        }
      `}</style>
    </section>
  );
}
