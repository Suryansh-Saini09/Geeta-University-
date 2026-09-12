"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { DepartmentHighlightItem } from "@/data/programs/types";

interface DepartmentHighlightsProps {
  title?: string;
  subtitle?: string;
  highlights?: DepartmentHighlightItem[];
  imageOnly?: boolean;
}

export default function DepartmentHighlights({
  title = "Where Learning Meets Achievement",
  subtitle = "An active, achievement-driven school — not just a classroom environment. Here's a glimpse of what students experience:",
  highlights,
  imageOnly = false,
}: DepartmentHighlightsProps) {
  const [selectedHighlight, setSelectedHighlight] = useState<DepartmentHighlightItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedHighlight(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!highlights || highlights.length === 0) return null;
  const items = highlights;

  // Build a track with enough duplicates so both halves are wider than any screen, ensuring a 100% seamless zero-gap loop
  const repeatCount = Math.max(2, Math.ceil(8 / items.length));
  const baseItems: DepartmentHighlightItem[] = [];
  for (let i = 0; i < repeatCount; i++) {
    baseItems.push(...items);
  }
  const trackItems = [...baseItems, ...baseItems];

  return (
    <section
      id="DepartmentHighlights"
      style={{
        padding: "90px 0 100px",
        background: "#FDF1D6",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Background Elements */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(232,135,26,0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: 800,
          height: 800,
          background: "radial-gradient(circle, rgba(10,31,68,0.04) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 50 }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              borderRadius: 30,
              border: "1px solid rgba(232,135,26,0.3)",
              background: "rgba(232,135,26,0.15)",
              padding: "6px 16px",
              fontSize: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1.5,
              color: "#C46A08",
              marginBottom: 12,
            }}
          >
            <Sparkles size={14} />
            <span>Experiential Highlights</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(32px, 3.8vw, 44px)",
              fontWeight: 900,
              color: "#0A1F44",
              margin: "12px 0 16px",
              lineHeight: 1.1,
              letterSpacing: "-1px",
            }}
          >
            {title}
          </h2>
          <p
            style={{
              fontSize: 17.5,
              color: "#4A5568",
              maxWidth: 800,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            {subtitle}
          </p>
        </motion.div>
      </div>

      {/* Seamless Continuous Marquee Container */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          overflow: "hidden",
          padding: "10px 0 20px",
        }}
      >
        {/* Edge Gradient Masks for clean fading */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: 100,
            background: "linear-gradient(90deg, #FDF1D6 0%, transparent 100%)",
            zIndex: 3,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            width: 100,
            background: "linear-gradient(-90deg, #FDF1D6 0%, transparent 100%)",
            zIndex: 3,
            pointerEvents: "none",
          }}
        />

        <div className="highlights-marquee-track">
          {trackItems.map((item, idx) => (
            <div
              key={idx}
              className="highlight-card"
              onClick={imageOnly ? undefined : () => setSelectedHighlight(item)}
              style={{
                width: 360,
                height: 240,
                flexShrink: 0,
                background: "#0A1F44",
                borderRadius: 18,
                overflow: "hidden",
                border: "1px solid rgba(10,31,68,0.08)",
                boxShadow: "0 8px 24px rgba(10,31,68,0.12)",
                position: "relative",
                cursor: imageOnly ? "default" : "pointer",
                transition: "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease",
              }}
            >
              {/* Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.5s ease",
                }}
                onError={(e) => {
                  const t = e.currentTarget;
                  t.style.display = "none";
                  if (t.parentElement) {
                    const fallback = document.createElement("div");
                    fallback.style.cssText =
                      "width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#0A1F44;color:#FFFFFF;font-weight:700;padding:20px;text-align:center;";
                    fallback.textContent = item.title;
                    t.parentElement.appendChild(fallback);
                  }
                }}
              />

              {/* Gradient Overlay & Title */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(10,31,68,0.85) 100%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "18px 20px",
                  pointerEvents: "none",
                }}
              >
                <h3
                  style={{
                    fontSize: 16.5,
                    fontWeight: 800,
                    color: "#FFFFFF",
                    margin: 0,
                    lineHeight: 1.3,
                    textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                  }}
                >
                  {item.title}
                </h3>
                {item.desc && !imageOnly && (
                  <p
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.85)",
                      margin: "4px 0 0",
                      lineHeight: 1.35,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.desc}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Read More - only when not imageOnly */}
      <AnimatePresence>
        {!imageOnly && selectedHighlight && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
            }}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedHighlight(null)}
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(10,31,68,0.65)",
                backdropFilter: "blur(6px)",
              }}
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ type: "spring", duration: 0.4 }}
              style={{
                position: "relative",
                background: "#FFFFFF",
                borderRadius: 24,
                overflow: "hidden",
                maxWidth: 620,
                width: "100%",
                boxShadow: "0 24px 60px rgba(0,0,0,0.25)",
                zIndex: 100000,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedHighlight(null)}
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  background: "rgba(0,0,0,0.5)",
                  border: "none",
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#FFFFFF",
                  zIndex: 2,
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0,0,0,0.75)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(0,0,0,0.5)";
                }}
                aria-label="Close details"
              >
                <X size={18} />
              </button>

              {/* Modal Image */}
              <div
                style={{
                  width: "100%",
                  height: 280,
                  position: "relative",
                  background: "#0A1F44",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedHighlight.image}
                  alt={selectedHighlight.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              {/* Modal Content */}
              <div style={{ padding: "28px 32px 32px" }}>
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: "#0A1F44",
                    marginBottom: 12,
                    lineHeight: 1.25,
                  }}
                >
                  {selectedHighlight.title}
                </h3>
                <p
                  style={{
                    fontSize: 16,
                    color: "#4A5568",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {selectedHighlight.desc}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes continuousMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .highlights-marquee-track {
          display: flex;
          width: max-content;
          gap: 24px;
          animation: continuousMarquee 38s linear infinite;
        }

        .highlights-marquee-track:hover {
          animation-play-state: paused;
        }

        .highlight-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 18px 38px rgba(10, 31, 68, 0.2) !important;
        }

        .highlight-card:hover img {
          transform: scale(1.08);
        }

        @media (max-width: 768px) {
          .highlight-card {
            width: 290px !important;
            height: 200px !important;
          }
          .highlights-marquee-track {
            gap: 16px !important;
            animation-duration: 25s !important;
          }
        }
      `}</style>
    </section>
  );
}
