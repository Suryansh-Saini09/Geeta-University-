"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Code2, Briefcase, LucideIcon } from "lucide-react";
import type { ProgramPageData, GTHPillarItem } from "@/data/programs/types";
import { getProgramIcon } from "./iconHelper";

interface ProgramExpertsProps {
  experts?: ProgramPageData["experts"];
  gth?: ProgramPageData["gth"];
}

export default function ProgramExperts({ experts, gth }: ProgramExpertsProps) {
  if (!experts && !gth) return null;

  const eyebrow = gth?.eyebrow || experts?.eyebrow || "CENTRE OF EXCELLENCE";
  const title = gth?.title || experts?.title || "Centre of Excellence";
  const subtitle = gth?.subtitle || experts?.feature?.title || "The Engine Behind Technical & Academic Edge";
  const description =
    gth?.description ||
    experts?.intro ||
    experts?.feature?.description ||
    "A dedicated learning ecosystem that powers hands-on training, industry certifications, and career readiness.";

  // Use GTH pillars if provided, or transform all experts categories if provided
  let pillars: GTHPillarItem[] = [];
  if (gth?.pillars && gth.pillars.length > 0) {
    pillars = gth.pillars;
  } else if (experts?.categories && experts.categories.length > 0) {
    pillars = experts.categories.map((cat) => ({
      title: cat.title,
      iconName: cat.iconName || "Award",
      description: cat.subtitle,
      pills: cat.points,
    }));
  }

  if (pillars.length === 0) return null;

  const getIcon = (name?: string): LucideIcon => {
    if (name === "Code2") return Code2;
    if (name === "Briefcase") return Briefcase;
    if (name) return getProgramIcon(name, Award) as LucideIcon;
    return Award;
  };

  return (
    <section
      id="GeetaTechnicalHub"
      style={{
        background: "linear-gradient(180deg, #0A1F44 0%, #071530 100%)",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
        borderTop: "3px solid #E8871A",
      }}
    >
      {/* Decorative background glow elements */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-10%",
          width: "50%",
          height: "50%",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232, 135, 26, 0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-10%",
          width: "50%",
          height: "50%",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(23, 82, 130, 0.15) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          style={{ marginBottom: 60 }}
        >
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
            <div style={{ width: 32, height: 2, background: "#E8871A", borderRadius: 2 }} />
            <span
              style={{
                color: "#E8871A",
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              {eyebrow}
            </span>
          </div>

          {/* Heading + Subheading + Description Grid */}
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "flex-end" }}
            className="gth-header-grid"
          >
            <div>
              <h2
                style={{
                  fontSize: 52,
                  fontWeight: 950,
                  color: "#FFFFFF",
                  margin: 0,
                  lineHeight: 1.1,
                  letterSpacing: "-1.5px",
                }}
              >
                {title.includes("GTH") ? (
                  <>
                    Geeta Technical <span style={{ color: "#E8871A" }}>Hub (GTH)</span>
                  </>
                ) : (
                  <>
                    {title.split(" ")[0]}{" "}
                    <span style={{ color: "#E8871A" }}>{title.split(" ").slice(1).join(" ")}</span>
                  </>
                )}
              </h2>
              <p
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.85)",
                  margin: "12px 0 0",
                  lineHeight: 1.3,
                }}
              >
                {subtitle}
              </p>
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: 16,
                lineHeight: 1.8,
                margin: 0,
                fontWeight: 400,
              }}
            >
              {description}
            </p>
          </div>
        </motion.div>

        {/* Pillars Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: pillars.length > 3 ? "repeat(auto-fit, minmax(300px, 1fr))" : `repeat(${pillars.length}, 1fr)`,
            gap: 28,
            marginBottom: 72,
          }}
          className="gth-pillars-grid"
        >
          {pillars.map((pillar, index) => {
            const IconComponent = getIcon(pillar.iconName);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="gth-pillar-card"
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  borderRadius: 20,
                  padding: 32,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                  transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                {/* Icon Wrapper */}
                <div
                  className="gth-icon-box"
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: "rgba(232, 135, 26, 0.1)",
                    border: "1px solid rgba(232, 135, 26, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 24,
                    transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                  }}
                >
                  <IconComponent style={{ width: 24, height: 24, color: "#E8871A" }} />
                </div>

                {/* Title */}
                <h3 style={{ fontSize: 22, fontWeight: 800, color: "#FFFFFF", marginBottom: 12, letterSpacing: "-0.5px" }}>
                  {pillar.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: 14, color: "rgba(255, 255, 255, 0.5)", lineHeight: 1.6, marginBottom: 28 }}>
                  {pillar.description}
                </p>

                {/* Pills Container */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {pillar.pills.map((pill, pIndex) => (
                    <span
                      key={pIndex}
                      className="gth-pill"
                      style={{
                        padding: "6px 14px",
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        borderRadius: 100,
                        color: "rgba(255, 255, 255, 0.8)",
                        fontSize: 12,
                        fontWeight: 600,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#E8871A" }} />
                      {pill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Embedded CSS styles */}
      <style>{`
        @media (max-width: 960px) {
          .gth-header-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .gth-pillars-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
        .gth-pillar-card:hover {
          border-color: rgba(232, 135, 26, 0.4) !important;
          background: rgba(255, 255, 255, 0.04) !important;
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3) !important;
        }
        .gth-pillar-card:hover .gth-icon-box {
          transform: scale(1.1) rotate(5deg);
          border-color: rgba(232, 135, 26, 0.8) !important;
          background: rgba(232, 135, 26, 0.2) !important;
        }
        .gth-pill {
          transition: all 0.2s ease;
        }
        .gth-pill:hover {
          background: rgba(232, 135, 26, 0.15) !important;
          border-color: rgba(232, 135, 26, 0.5) !important;
          color: #FFFFFF !important;
        }
      `}</style>
    </section>
  );
}
