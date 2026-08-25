"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import type { ProgramPageData } from "@/data/programs/types";

interface ProgramFinalCTAProps {
  cta?: ProgramPageData["cta"];
  schoolName?: string;
}

export default function ProgramFinalCTA({ cta, schoolName }: ProgramFinalCTAProps) {
  const heading = cta?.heading || (schoolName ? `Ready to Join ${schoolName} at Geeta University?` : "Ready to Join Geeta University?");
  const applyLink = cta?.applyLink || "https://admissions.geetauniversity.edu.in/";
  const brochureUrl = cta?.brochureUrl || "https://geetauniversity.edu.in/uploads/all/1892/GU-Brochure-2026-27.pdf";
  const brochureName = cta?.brochureName || "Geeta_University_Brochure.pdf";
  const website = cta?.website || "https://geetauniversity.edu.in";
  const contactLink = "https://geetauniversity.edu.in/contact-us";

  return (
    <div>
      {/* ── CTA FOOTER BAND ─────────────────────────────────────────────────── */}
      <section style={{ background: "#E8871A", padding: "54px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "white", margin: "0 0 14px", letterSpacing: "-0.5px" }}>
            {heading}
          </h2>
          <p style={{ color: "rgba(255,255,255,0.9)", fontSize: 16, marginBottom: 32, maxWidth: 700, marginInline: "auto" }}>
            Admissions Open for Session 2026–27 · Apply now or download the official brochure for full details on admissions, eligibility, and scholarships.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={applyLink}
              target="_blank"
              rel="noreferrer"
              style={{
                background: "#0A1F44",
                color: "white",
                padding: "14px 34px",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 14,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                transition: "transform 0.2s, box-shadow 0.2s",
                boxShadow: "0 4px 14px rgba(10,31,68,0.25)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
              }}
            >
              Apply Now
              <ArrowRight size={16} />
            </a>
            <a
              href={brochureUrl}
              download={brochureName}
              style={{
                background: "white",
                color: "#E8871A",
                border: "none",
                padding: "14px 30px",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 14,
                cursor: "pointer",
                textDecoration: "none",
                display: "inline-block",
                transition: "transform 0.2s, box-shadow 0.2s",
                boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
              }}
            >
              Download Brochure
            </a>
            <a
              href={contactLink}
              target="_blank"
              rel="noreferrer"
              style={{
                background: "transparent",
                border: "2px solid white",
                color: "white",
                padding: "14px 26px",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 14,
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              Contact Admissions
            </a>
          </div>
        </div>
      </section>

      {/* ── PAGE FOOTER ─────────────────────────────────────────────────────── */}
      <footer style={{ background: "#0A1F44", color: "#94A3B8", padding: "14px 20px", textAlign: "center", fontSize: 13 }}>
        © 2026 Geeta University {schoolName ? `· ${schoolName}` : ""} ·{" "}
        <a
          href={website.startsWith("http") ? website : `https://${website}`}
          target="_blank"
          rel="noreferrer"
          style={{ color: "#E8871A", textDecoration: "none", fontWeight: 600 }}
        >
          geetauniversity.edu.in
        </a>
      </footer>
    </div>
  );
}
