"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const applyHereLinks = [
    "NCC/NSS", "Admission Guidelines", "G-Portal", "Anveshan Journal", 
    "Industry Integration", "Teaching Learning Practice", "Government Scholarship", 
    "Approvals", "Academic Bank of Credits", "Geeta in News", "FAQ"
  ];

  const quickLinks = [
    "Blog", "Telephone Directory", "Student Grievances Portal", "Central Library", 
    "National Education Policy", "Recent Placement", "Advisory Board", 
    "Academic Calendar", "Annual Report 2024-25"
  ];

  const visitHereLinks = [
    "How to Reach Us", "About Panipat", "UGC Samadhaan Portal", "Student Handbook", 
    "Hostel Fee & Transport", "GU Gazette", "GU UGC Approval"
  ];

  const otherLinks = [
    "Alumni", "Anti Ragging Committee", "Sitemap", "Fee Refund Policy", 
    "Privacy Policy", "Terms & Conditions", "Disclaimer"
  ];

  return (
    <footer style={{ backgroundColor: "var(--gu-navy)", color: "#CBD5E0", padding: "64px 24px 32px", borderTop: "5px solid var(--gu-gold)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px" }}>
        
        {/* Row 1: Logo + Tagline + Social Icons */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "32px" }}>
          

          <img src="/GU-Logo.webp" alt="" />
            <p style={{ fontSize: "14px", color: "#94A3B8", maxWidth: "450px" }}>
              A premier state university in Panipat, Haryana, committed to academic excellence, industry-linked training, and holistic student development.
            </p>

          
          {/* Social Icons */}
          
        </div>

        {/* Row 2: Four Link Columns */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "space-between" }}>
          
          {/* Column 1: Apply Here */}
          <div style={{ flex: "1 1 220px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <h4 style={{ color: "var(--gu-white)", fontSize: "16px", fontWeight: 700, borderLeft: "3px solid var(--gu-gold)", paddingLeft: "10px", margin: 0 }}>
              Apply Here
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {applyHereLinks.map((link) => (
                <li key={link}>
                  <Link href="#" style={{ color: "inherit", textDecoration: "none", fontSize: "13px", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gu-gold)")} onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}>
                    • {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div style={{ flex: "1 1 220px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <h4 style={{ color: "var(--gu-white)", fontSize: "16px", fontWeight: 700, borderLeft: "3px solid var(--gu-gold)", paddingLeft: "10px", margin: 0 }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link href="#" style={{ color: "inherit", textDecoration: "none", fontSize: "13px", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gu-gold)")} onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}>
                    • {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Visit Here */}
          <div style={{ flex: "1 1 220px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <h4 style={{ color: "var(--gu-white)", fontSize: "16px", fontWeight: 700, borderLeft: "3px solid var(--gu-gold)", paddingLeft: "10px", margin: 0 }}>
              Visit Here
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {visitHereLinks.map((link) => (
                <li key={link}>
                  <Link href="#" style={{ color: "inherit", textDecoration: "none", fontSize: "13px", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gu-gold)")} onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}>
                    • {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Others */}
          <div style={{ flex: "1 1 220px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <h4 style={{ color: "var(--gu-white)", fontSize: "16px", fontWeight: 700, borderLeft: "3px solid var(--gu-gold)", paddingLeft: "10px", margin: 0 }}>
              Others
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {otherLinks.map((link) => (
                <li key={link}>
                  <Link href="#" style={{ color: "inherit", textDecoration: "none", fontSize: "13px", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gu-gold)")} onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}>
                    • {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright + legal */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", fontSize: "12px", color: "#94A3B8" }}>
          <div>
            © 2026 Geeta University. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            {["Privacy Policy", "Terms & Conditions", "Disclaimer"].map((legal) => (
              <Link key={legal} href="#" style={{ color: "inherit", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gu-gold)")} onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}>
                {legal}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
