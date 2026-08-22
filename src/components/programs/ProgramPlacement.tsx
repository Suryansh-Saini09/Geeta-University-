"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Building2, BriefcaseBusiness, ChartNoAxesColumnIncreasing, PieChart } from "lucide-react";
import type { ProgramPageData, TestimonialItem } from "@/data/programs/types";
import { getProgramIcon } from "./iconHelper";

interface ProgramPlacementProps {
  placement?: ProgramPageData["placement"];
  testimonials?: TestimonialItem[];
}

export default function ProgramPlacement({ placement, testimonials }: ProgramPlacementProps) {
  const testimonialItems = testimonials && testimonials.length > 0 ? testimonials : [];

  const stats = placement?.stats && placement.stats.length > 0 ? placement.stats : [
    { value: "40 LPA", label: "Highest Package", iconName: "Award" },
    { value: "550+", label: "Recruiters Visited", iconName: "Building2" },
    { value: "3500+", label: "Job & Internship Offers", iconName: "BriefcaseBusiness" },
  ];

  const avgPackage = placement?.avgPackage || "₹4.39 LPA";
  const avgPackageNote = placement?.avgPackageNote || "Reflecting balanced career growth and wide industry acceptance of Geeta University graduates.";
  const packageBars = placement?.packageBars && placement.packageBars.length > 0 ? placement.packageBars : [
    { label: "Upto 4 LPA", value: 153, width: "100%" },
    { label: "₹4-6 LPA", value: 65, width: "42%" },
    { label: "₹6-8 LPA", value: 31, width: "20%" },
    { label: "₹8-10 LPA", value: 31, width: "20%" },
  ];
  const disclaimer = placement?.disclaimer || "Disclaimer: Placement data shared is representative. Current academic session placement drives remain in active progress.";

  return (
    <>
      {/* ── TESTIMONIALS SECTION ── */}
      {testimonialItems.length > 0 && (
        <section
          id="Testimonials"
          style={{
            background: "#0A1F44",
            padding: "90px 0",
            position: "relative",
            overflow: "hidden",
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
          }}
        >
        {/* Decorative Blur Spheres */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "-10%",
            width: 500,
            height: 500,
            background: "radial-gradient(circle, rgba(232,135,26,0.08) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-10%",
            right: "-10%",
            width: 500,
            height: 500,
            background: "radial-gradient(circle, rgba(232,135,26,0.06) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2
              style={{
                fontSize: 44,
                fontWeight: 900,
                color: "#FFFFFF",
                margin: "0 0 16px",
                lineHeight: 1.1,
                letterSpacing: "-1.5px",
              }}
            >
              Straight from Those Who've Been There
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "rgba(255, 255, 255, 0.7)",
                maxWidth: 750,
                margin: "0 auto",
                lineHeight: 1.7,
                fontWeight: 450,
              }}
            >
              Read first-hand accounts from our alumni and students about their career transformations, academic mentorship, and experiential journey.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 28,
              position: "relative",
              zIndex: 2,
            }}
          >
            {testimonialItems.map((item, idx) => {
              const initials = item.name
                .split(" ")
                .map((n) => n[0])
                .join("");
              const displayDetails = [
                item.role && !item.role.includes("Alumni") ? item.role : null,
                item.company,
                item.pkg,
              ]
                .filter(Boolean)
                .join(" | ");

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: (idx % 3) * 0.08 }}
                  style={{
                    background: "rgba(255, 255, 255, 0.03)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    borderRadius: "24px",
                    padding: "36px 32px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    cursor: "default",
                  }}
                  className="testimonial-card"
                >
                  <div>
                    {/* Quote Icon */}
                    <svg
                      className="quote-icon"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="rgba(232, 135, 26, 0.25)"
                      strokeWidth="2.5"
                      style={{ transition: "all 0.3s ease" }}
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h4c0 3.5-2.5 6-6 6v1zm12 0c3 0 7-1 7-8V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h4c0 3.5-2.5 6-6 6v1z" />
                    </svg>

                    {/* Quote Text */}
                    <p
                      style={{
                        fontSize: "14.5px",
                        color: "rgba(255, 255, 255, 0.8)",
                        margin: "20px 0 28px",
                        lineHeight: 1.65,
                        fontWeight: 450,
                        fontStyle: "italic",
                      }}
                    >
                      "{item.quote}"
                    </p>
                  </div>

                  {/* User Profile */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                      paddingTop: 20,
                    }}
                  >
                    {/* Avatar Image / Fallback Initials */}
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        overflow: "hidden",
                        background: "rgba(232, 135, 26, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid rgba(232, 135, 26, 0.3)",
                        flexShrink: 0,
                        position: "relative",
                      }}
                    >
                      {item.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: 2,
                          }}
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      ) : null}
                      <span style={{ color: "#E8871A", fontWeight: 800, fontSize: 15, position: "relative", zIndex: 1 }}>
                        {initials}
                      </span>
                    </div>

                    {/* Meta Details */}
                    <div>
                      <h4 style={{ color: "#FFFFFF", fontSize: "15.5px", fontWeight: 750, margin: "0 0 3px" }}>
                        {item.name}
                      </h4>
                      <p style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "12.5px", margin: 0, fontWeight: 450, lineHeight: 1.3 }}>
                        {displayDetails}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <style>{`
          .testimonial-card:hover {
            background: rgba(255, 255, 255, 0.06) !important;
            border-color: rgba(232, 135, 26, 0.35) !important;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(232, 135, 26, 0.05) !important;
          }
          .testimonial-card:hover .quote-icon {
            stroke: rgba(232, 135, 26, 0.6) !important;
            transform: scale(1.1) rotate(-5deg);
          }
        `}</style>
      </section>
      )}

      {/* ── PLACEMENT METRICS & ANALYTICS ────────────────────────────────────── */}
      {placement && (
        <section style={{ padding: "90px 0", background: "#FFFFFF" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${Math.min(stats.length, 3)}, 1fr)`,
                gap: 28,
                marginBottom: 64,
              }}
              className="placement-stats-grid"
            >
              {stats.map((stat, index) => {
                const Icon = getProgramIcon(stat.iconName, Award);
                return (
                  <div
                    key={index}
                    style={{
                      background: "#F8FAFC",
                      borderRadius: 20,
                      padding: "36px 28px",
                      border: "1px solid #E2E8F0",
                      textAlign: "center",
                      transition: "all 0.3s ease",
                    }}
                    className="placement-stat-box"
                  >
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: 14,
                        background: "rgba(232,135,26,0.1)",
                        color: "#E8871A",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 20px",
                      }}
                    >
                      <Icon size={24} />
                    </div>
                    <div style={{ fontSize: 40, fontWeight: 900, color: "#0A1F44", lineHeight: 1, marginBottom: 8 }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: "#64748B" }}>
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Package Analysis Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 32,
              }}
              className="placement-analytics-grid"
            >
              {/* Avg Package Card */}
              <div
                style={{
                  background: "#F8FAFC",
                  borderRadius: 20,
                  padding: "40px 36px",
                  border: "1px solid #E2E8F0",
                }}
              >
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#E8871A", fontSize: 12, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 12 }}>
                  <ChartNoAxesColumnIncreasing size={16} />
                  Salary Distribution
                </div>
                <h3 style={{ fontSize: 26, fontWeight: 800, color: "#0A1F44", margin: "0 0 16px" }}>
                  Average Package Offered
                </h3>
                <div style={{ fontSize: 44, fontWeight: 900, color: "#E8871A", lineHeight: 1, marginBottom: 16 }}>
                  {avgPackage}
                </div>
                <p style={{ fontSize: 15, color: "#64748B", lineHeight: 1.6, margin: "0 0 28px" }}>
                  {avgPackageNote}
                </p>

                <div style={{ display: "grid", gap: 16 }}>
                  {packageBars.map((bar, i) => (
                    <div key={i}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, fontWeight: 700, color: "#0A1F44", marginBottom: 6 }}>
                        <span>{bar.label}</span>
                        <span>{bar.value} offers</span>
                      </div>
                      <div style={{ height: 10, background: "#E2E8F0", borderRadius: 999, overflow: "hidden" }}>
                        <div style={{ height: "100%", width: bar.width, background: "linear-gradient(90deg, #0A1F44, #E8871A)", borderRadius: 999 }} />
                      </div>
                    </div>
                  ))}
                </div>

                {disclaimer && (
                  <p style={{ fontSize: 12, color: "#94A3B8", fontStyle: "italic", marginTop: 24, margin: "24px 0 0" }}>
                    {disclaimer}
                  </p>
                )}
              </div>

              {/* Sector Placement Card */}
              <div
                style={{
                  background: "linear-gradient(135deg, #0A1F44 0%, #1A3A6B 100%)",
                  borderRadius: 20,
                  padding: "40px 36px",
                  color: "#FFFFFF",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#E8871A", fontSize: 12, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 12 }}>
                    <PieChart size={16} />
                    Recruiter Insights
                  </div>
                  <h3 style={{ fontSize: 26, fontWeight: 800, color: "#FFFFFF", margin: "0 0 16px" }}>
                    Sector-wise Placement Analysis
                  </h3>
                  <p style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", lineHeight: 1.6, margin: "0 0 28px" }}>
                    {placement?.avgPackageNote || placement?.subtitle || "A diversified career distribution ensuring high placement rates across key industry domains and specialized career tracks."}
                  </p>
                </div>

                <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 14, padding: "20px 24px", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#E8871A", marginBottom: 12 }}>
                    Key Recruiting Verticals:
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, fontSize: 13, color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>
                    {placement?.sectorLegend && placement.sectorLegend.length > 0 ? (
                      placement.sectorLegend.slice(0, 6).map((item, idx) => (
                        <div key={idx} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <span style={{ width: 8, height: 8, borderRadius: "50%", background: item.color || "#E8871A", flexShrink: 0 }} />
                          <span>{item.label} ({item.value})</span>
                        </div>
                      ))
                    ) : (
                      <>
                        <div>• Industry Placements (45%)</div>
                        <div>• Research &amp; Clinical (25%)</div>
                        <div>• Corporate &amp; Operations (18%)</div>
                        <div>• Higher Studies &amp; Global (12%)</div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style>{`
            @media (max-width: 960px) {
              .placement-stats-grid, .placement-analytics-grid {
                grid-template-columns: 1fr !important;
              }
            }
            .placement-stat-box:hover {
              border-color: #E8871A !important;
              transform: translateY(-4px);
              box-shadow: 0 12px 24px rgba(10,31,68,0.06);
            }
          `}</style>
        </section>
      )}
    </>
  );
}
