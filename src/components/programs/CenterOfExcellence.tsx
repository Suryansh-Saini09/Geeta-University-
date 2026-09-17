"use client";

import React from "react";
import Image from "next/image";

export interface CenterOfExcellenceProps {
  title?: string;
  bg?: string;
}

export default function CenterOfExcellence({
  title = "Center Of Excellence",
  bg = "#E85D1A",
}: CenterOfExcellenceProps) {
  const columns = [
    {
      top: {
        name: "Cisco",
        render: () => (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src="/cisco.svg"
              alt="Cisco"
              width={80}
              height={40}
              style={{
                filter: "brightness(0) invert(1)",
                objectFit: "contain",
                maxHeight: 38,
              }}
            />
          </div>
        ),
      },
      bottom: {
        name: "GitHub",
        render: () => (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <Image
              src="/github.svg"
              alt="GitHub"
              width={90}
              height={36}
              style={{
                filter: "brightness(0) invert(1)",
                objectFit: "contain",
                maxHeight: 34,
              }}
            />
          </div>
        ),
      },
    },
    {
      top: {
        name: "Oracle",
        render: () => (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src="/oracle.svg"
              alt="Oracle"
              width={100}
              height={30}
              style={{
                filter: "brightness(0) invert(1)",
                objectFit: "contain",
                maxHeight: 26,
              }}
            />
          </div>
        ),
      },
      bottom: {
        name: "Red Hat Academy",
        render: () => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Image
                src="/redhat.svg"
                alt="Red Hat Academy"
                width={76}
                height={26}
                style={{
                  filter: "brightness(0) invert(1)",
                  objectFit: "contain",
                  maxHeight: 24,
                }}
              />
            </div>
            <span
              style={{
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: "1.5px",
                color: "#FFFFFF",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              Academy
            </span>
          </div>
        ),
      },
    },
    {
      top: {
        name: "EC-Council Academia",
        render: () => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
            }}
          >
            <span
              style={{
                fontSize: 17,
                fontWeight: 900,
                letterSpacing: "0.5px",
                lineHeight: 1.1,
                fontFamily: "system-ui, sans-serif",
              }}
            >
              EC-Council
            </span>
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "1px",
                opacity: 0.95,
              }}
            >
              Academia
            </span>
          </div>
        ),
      },
      bottom: {
        name: "AWS",
        render: () => (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src="/aws.svg"
              alt="Amazon AWS"
              width={75}
              height={38}
              style={{
                filter: "brightness(0) invert(1)",
                objectFit: "contain",
                maxHeight: 34,
              }}
            />
          </div>
        ),
      },
    },
    {
      top: {
        name: "HubSpot",
        render: () => (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image
              src="/hubspot.svg"
              alt="HubSpot"
              width={90}
              height={32}
              style={{
                filter: "brightness(0) invert(1)",
                objectFit: "contain",
                maxHeight: 30,
              }}
            />
          </div>
        ),
      },
      bottom: {
        name: "Microsoft",
        render: () => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              color: "#FFFFFF",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 7px)",
                gridTemplateRows: "repeat(2, 7px)",
                gap: 2,
              }}
            >
              <div style={{ background: "#FFFFFF" }} />
              <div style={{ background: "#FFFFFF" }} />
              <div style={{ background: "#FFFFFF" }} />
              <div style={{ background: "#FFFFFF" }} />
            </div>
            <span
              style={{
                fontSize: 17,
                fontWeight: 700,
                letterSpacing: "-0.2px",
                fontFamily: "'Segoe UI', system-ui, sans-serif",
              }}
            >
              Microsoft
            </span>
          </div>
        ),
      },
    },
  ];

  return (
    <section
      id="CenterOfExcellence"
      style={{
        background: bg,
        padding: "52px 0 58px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px" }}>
        {/* Title */}
        <h2
          style={{
            fontSize: "clamp(24px, 3.2vw, 34px)",
            fontWeight: 800,
            color: "#FFFFFF",
            textAlign: "center",
            margin: "0 0 38px",
            lineHeight: 1.2,
            letterSpacing: "0.2px",
            fontFamily: "'Georgia', 'Merriweather', 'Segoe UI', serif",
          }}
        >
          {title}
        </h2>

        {/* 4-Column Grid with Dotted Lines */}
        <div className="coe-grid">
          {columns.map((col, idx) => (
            <div
              key={idx}
              className={`coe-column ${idx < columns.length - 1 ? "coe-col-border" : ""}`}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 18px",
              }}
            >
              {/* Top Logo */}
              <div
                style={{
                  height: 52,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                {col.top.render()}
              </div>

              {/* Dotted Horizontal Divider */}
              <div
                style={{
                  width: "75%",
                  borderTop: "1.5px dashed rgba(255, 255, 255, 0.55)",
                  margin: "12px 0",
                }}
              />

              {/* Bottom Logo */}
              <div
                style={{
                  height: 52,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                {col.bottom.render()}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .coe-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          align-items: center;
        }

        .coe-col-border {
          border-right: 1.5px dashed rgba(255, 255, 255, 0.55);
        }

        @media (max-width: 860px) {
          .coe-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px 0;
          }
          .coe-column:nth-child(2) {
            border-right: none;
          }
          .coe-column:nth-child(1),
          .coe-column:nth-child(2) {
            margin-bottom: 8px;
          }
        }

        @media (max-width: 480px) {
          .coe-grid {
            grid-template-columns: 1fr;
            gap: 20px 0;
          }
          .coe-column {
            border-right: none !important;
            padding-bottom: 16px;
            border-bottom: 1.5px dashed rgba(255, 255, 255, 0.45);
          }
          .coe-column:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
        }
      `}</style>
    </section>
  );
}
