"use client";

import React from "react";

export interface TransformativeTrackCard {
  title: string;
  points: string[];
}

export interface TransformativeTracksSection {
  title?: string;
  subtitle?: string;
  cards: TransformativeTrackCard[];
}

interface TransformativeTracksProps {
  tracks: TransformativeTracksSection;
}

export default function TransformativeTracks({ tracks }: TransformativeTracksProps) {
  if (!tracks || !tracks.cards || tracks.cards.length === 0) return null;

  const title = tracks.title || "We Don't Just Educate We Transform Futures !";

  return (
    <section
      id="TransformativeTracks"
      style={{
        padding: "48px 0 52px",
        background: "#FFFFFF",
        position: "relative",
        borderTop: "1px solid rgba(0, 0, 0, 0.05)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: 46 }}>
          <h2
            style={{
              fontSize: "clamp(26px, 3.4vw, 38px)",
              fontWeight: 900,
              color: "#0A1F44",
              lineHeight: 1.25,
              letterSpacing: "-0.5px",
              margin: 0,
            }}
          >
            {title}
          </h2>
        </div>

        {/* 4-Column Grid */}
        <div className="transform-tracks-grid">
          {tracks.cards.map((card, idx) => (
            <div
              key={idx}
              className="transform-track-card"
              style={{
                background: "#FFFFFF",
                borderRadius: 16,
                padding: "32px 24px 28px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
              }}
            >
              {/* Card Title */}
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  color: "#0A1F44",
                  textAlign: "center",
                  margin: "0 0 14px",
                  lineHeight: 1.35,
                  minHeight: 48,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {card.title}
              </h3>

              {/* Title Divider */}
              <div
                style={{
                  width: "100%",
                  height: 1,
                  background: "#E2E8F0",
                  marginBottom: 20,
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
                  gap: 11,
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
                      fontSize: 14.5,
                      color: "#334155",
                      lineHeight: 1.55,
                      fontWeight: 500,
                    }}
                  >
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: "#0A1F44",
                        flexShrink: 0,
                        marginTop: 8,
                        opacity: 0.85,
                      }}
                    />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .transform-tracks-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
          align-items: stretch;
        }

        .transform-track-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 30px rgba(10, 31, 68, 0.08) !important;
          border-color: #CBD5E1;
        }

        @media (max-width: 1080px) {
          .transform-tracks-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .transform-track-card h3 {
            min-height: auto !important;
          }
        }

        @media (max-width: 640px) {
          .transform-tracks-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
}
