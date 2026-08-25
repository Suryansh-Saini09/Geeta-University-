"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
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
                  {/* Image Placeholder */}
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
                    <div style={{ marginTop: 20 }}>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: "#E8871A",
                          textTransform: "uppercase",
                          letterSpacing: 1,
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                        }}
                      >
                        Read More
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

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
