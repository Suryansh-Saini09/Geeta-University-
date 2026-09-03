"use client";

import React from "react";
import { Target, Compass, Sparkles, CheckCircle2 } from "lucide-react";
import type { VisionMissionData } from "@/data/programs/types";

interface VisionMissionSectionProps {
  data?: VisionMissionData;
  schoolName?: string;
}

export default function VisionMissionSection({
  data,
  schoolName,
}: VisionMissionSectionProps) {
  if (!data || (!data.vision && (!data.mission || data.mission.length === 0))) {
    return null;
  }

  return (
    <div style={{ marginTop: 56 }} id="VisionMission">
      {/* Section Sub-header */}
      <div style={{ marginBottom: 32 }}>
        <span
          style={{
            color: "#E8871A",
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            marginBottom: 8,
          }}
        >
          <Sparkles size={14} style={{ color: "#E8871A" }} />
          INSTITUTIONAL PURPOSE
        </span>
        <h3
          style={{
            fontSize: 32,
            fontWeight: 800,
            color: "#0A1F44",
            lineHeight: 1.2,
            letterSpacing: "-0.5px",
          }}
        >
          Our Vision & Mission
        </h3>
      </div>

      {/* Vision Card */}
      {data.vision && (
        <div
          style={{
            background: "linear-gradient(135deg, #0A1F44 0%, #152E5A 100%)",
            borderRadius: 20,
            padding: "36px 40px",
            color: "#FFFFFF",
            boxShadow: "0 12px 30px rgba(10, 31, 68, 0.15)",
            borderLeft: "6px solid #E8871A",
            marginBottom: 36,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle Background Glow */}
          <div
            style={{
              position: "absolute",
              top: -50,
              right: -50,
              width: 200,
              height: 200,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(232, 135, 26, 0.15) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(232, 135, 26, 0.18)",
              border: "1px solid rgba(232, 135, 26, 0.4)",
              borderRadius: 30,
              padding: "6px 14px",
              color: "#E8871A",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            <Target size={14} />
            <span>OUR VISION</span>
          </div>

          <p
            style={{
              fontFamily: "'Zilla Slab', Georgia, serif",
              fontSize: 21,
              lineHeight: 1.6,
              fontWeight: 500,
              color: "#FEF3C7",
              margin: 0,
              letterSpacing: "0.2px",
            }}
          >
            {data.vision}
          </p>
        </div>
      )}

      {/* Mission Section */}
      {data.mission && data.mission.length > 0 && (
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "#0A1F44",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            <Compass size={18} style={{ color: "#E8871A" }} />
            <span>OUR MISSION STATEMENTS</span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 20,
            }}
          >
            {data.mission.map((item, idx) => (
              <div
                key={idx}
                className="mission-card"
                style={{
                  background: "#F8FAFC",
                  border: "1.5px solid #E2E8F0",
                  borderRadius: 16,
                  padding: 24,
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 32,
                      height: 32,
                      borderRadius: 10,
                      background: "#0A1F44",
                      color: "#E8871A",
                      fontWeight: 800,
                      fontSize: 13,
                    }}
                  >
                    0{idx + 1}
                  </span>
                  <CheckCircle2 size={18} style={{ color: "#E8871A", opacity: 0.7 }} />
                </div>

                <p
                  style={{
                    fontSize: 14.5,
                    color: "#334155",
                    lineHeight: 1.7,
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        .mission-card:hover {
          background: #FFFFFF !important;
          border-color: #E8871A !important;
          box-shadow: 0 10px 25px rgba(232, 135, 26, 0.12) !important;
          transform: translateY(-3px);
        }
      `}</style>
    </div>
  );
}
