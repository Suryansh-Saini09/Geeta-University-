"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { DepartmentHighlightItem } from "@/data/programs/types";

interface DepartmentHighlightsProps {
  title?: string;
  subtitle?: string;
  highlights?: DepartmentHighlightItem[];
}

export default function DepartmentHighlights({
  title = "Where Learning Meets Achievement",
  subtitle = "An active, achievement-driven school — not just a classroom environment. Here's a glimpse of what students experience:",
  highlights,
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

  return (
    <section
      id="DepartmentHighlights"
      style={{
        padding: "100px 0",
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
          style={{ textAlign: "center", marginBottom: 60 }}
        >
          <h2
            style={{
              fontSize: 44,
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
              fontSize: 18,
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

      <div style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="marquee-container"
          style={{ display: "flex", overflow: "hidden", padding: "10px 0 30px", gap: 32 }}
        >
          {[0, 1].map((setIndex) => (
            <div
              key={setIndex}
              className="marquee-track"
              style={{ display: "flex", gap: 32, flexShrink: 0 }}
            >
              {items.map((item, i) => (
                <div
                  key={`${setIndex}-${i}`}
                  onClick={() => setSelectedHighlight(item)}
                  style={{
                    width: 360,
                    flexShrink: 0,
                    background: "#FFFFFF",
                    borderRadius: 16,
                    overflow: "hidden",
                    border: "1px solid #E2E8F0",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                    transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(10,31,68,0.1)";
                    const img = e.currentTarget.querySelector("img");
                    if (img) img.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.04)";
                    const img = e.currentTarget.querySelector("img");
                    if (img) img.style.transform = "scale(1)";
                  }}
                >
                  {/* Image */}
                  <div
                    style={{
                      width: "100%",
                      height: 220,
                      position: "relative",
                      overflow: "hidden",
                      background: "#F1F5F9",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                      }}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        if (e.currentTarget.parentElement) {
                          e.currentTarget.parentElement.innerHTML =
                            '<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: #E2E8F0; color: #94A3B8; font-weight: 600; font-size: 14px;">[ Event Image ]</div>';
                        }
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div
                    style={{
                      padding: "24px 28px",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: 20,
                        fontWeight: 800,
                        color: "#0A1F44",
                        margin: "0 0 12px",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 15,
                        color: "#4A5568",
                        margin: 0,
                        lineHeight: 1.6,
                        flex: 1,
                      }}
                    >
                      {item.desc}
                    </p>
                    <div style={{ marginTop: "auto", paddingTop: 20 }}>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedHighlight(item);
                        }}
                        style={{
                          background: "none",
                          border: "none",
                          padding: 0,
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          fontSize: 13,
                          fontWeight: 700,
                          color: "#E8871A",
                          textTransform: "uppercase",
                          letterSpacing: 1,
                        }}
                      >
                        <span>Read More</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Modal for Read More */}
      <AnimatePresence>
        {selectedHighlight && (
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
                background: "rgba(10,31,68,0.6)",
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
                maxWidth: 580,
                width: "100%",
                boxShadow: "0 24px 60px rgba(0,0,0,0.25)",
                zIndex: 100000,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Close Button */}
              <button
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
              <div style={{ width: "100%", height: 280, position: "relative", background: "#F1F5F9" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedHighlight.image}
                  alt={selectedHighlight.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* Modal Content */}
              <div style={{ padding: "28px 32px 32px" }}>
                <h3
                  style={{
                    fontSize: 24,
                    fontWeight: 800,
                    color: "#0A1F44",
                    marginBottom: 14,
                    lineHeight: 1.2,
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
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% - 32px));
          }
        }
        .marquee-track {
          animation: marquee 25s linear infinite;
        }
        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
