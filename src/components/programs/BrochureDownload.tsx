"use client";

import React from "react";

interface BrochureDownloadProps {
  title?: string;
  description?: string;
  fileUrl?: string;
  fileName?: string;
  buttonText?: string;
}

export default function BrochureDownload({
  title = "Want the Full Picture?",
  description = "Download the official brochure for detailed information on programs, specialisations, placements, certifications, and student outcomes.",
  fileUrl = "https://geetauniversity.edu.in/uploads/all/1892/GU-Brochure-2026-27.pdf",
  fileName = "Geeta_University_Brochure.pdf",
  buttonText = "Download Brochure",
}: BrochureDownloadProps) {
  return (
    <section
      id="Brochure"
      style={{
        padding: "80px 0",
        background: "#0A1F44",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(232,135,26,0.08)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -60,
          left: -60,
          width: 240,
          height: 240,
          borderRadius: "50%",
          background: "rgba(232,135,26,0.05)",
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 40,
          }}
        >
          {/* Left: Text */}
          <div style={{ flex: 1, minWidth: 280 }}>
            <h2
              style={{
                fontSize: 40,
                fontWeight: 800,
                color: "#FFFFFF",
                lineHeight: 1.15,
                letterSpacing: "-0.5px",
                marginBottom: 16,
              }}
            >
              {title}
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.75,
                fontWeight: 400,
                maxWidth: 560,
              }}
            >
              {description}
            </p>
          </div>

          {/* Right: Download Button */}
          <div style={{ flexShrink: 0 }}>
            <a
              href={fileUrl}
              download={fileName}
              className="brochure-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "18px 36px",
                background: "#E8871A",
                color: "#FFFFFF",
                borderRadius: 12,
                fontWeight: 800,
                fontSize: 16,
                textDecoration: "none",
                transition: "all 0.25s ease",
                boxShadow: "0 8px 24px rgba(232,135,26,0.35)",
                letterSpacing: 0.3,
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {buttonText}
            </a>
          </div>
        </div>
      </div>
      <style>{`
        .brochure-btn:hover {
          background: #d4751a !important;
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(232,135,26,0.45) !important;
        }
      `}</style>
    </section>
  );
}
