"use client";

import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ display: "flex", flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "60vh", padding: "40px 24px", textAlign: "center", backgroundColor: "var(--gu-bg)" }}>
      <h1 style={{ color: "var(--gu-navy)", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, marginBottom: "16px" }}>
        Homepage — Coming Soon
      </h1>
      <p style={{ color: "var(--gu-text-muted)", fontSize: "16px", maxWidth: "600px", lineHeight: "1.6", marginBottom: "32px" }}>
        We are building the brand new Geeta University digital experience. In the meantime, you can explore the programs currently offered by our schools.
      </p>
      <Link href="/programs/school-of-computer-science-and-engineering" style={{ backgroundColor: "var(--gu-gold)", color: "var(--gu-white)", padding: "14px 28px", borderRadius: "6px", textDecoration: "none", fontWeight: 700, fontSize: "14px", boxShadow: "0 4px 12px rgba(232, 135, 26, 0.2)", transition: "background-color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--gu-gold-light)")} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--gu-gold)")}>
        Visit School of CSE →
      </Link>
    </div>
  );
}
