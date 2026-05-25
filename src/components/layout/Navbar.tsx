"use client";

import React, { useState } from "react";
import Link from "next/link";

interface DropdownItem {
  label: string;
  href: string;
}

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);

  const schoolItems: DropdownItem[] = [
    { label: "School of CSE", href: "/programs/school-of-computer-science-and-engineering" },
    { label: "School of Commerce & Business Management", href: "#" },
    { label: "Geeta Institute of Pharmacy", href: "#" },
    { label: "School of Sciences", href: "#" },
    { label: "School of Agricultural Sciences", href: "#" },
    { label: "School of Hospitality & Hotel Management", href: "#" },
    { label: "Geeta Global Law School", href: "#" },
    { label: "School of Humanities & Social Sciences", href: "#" },
    { label: "Geeta Nursing College", href: "#" },
    { label: "SP Bansal School of Business", href: "#" },
  ];

  const admissionItems: DropdownItem[] = [
    { label: "Programs After 12th", href: "#" },
    { label: "Post Graduate Programs", href: "#" },
    { label: "Doctoral Programs PhD", href: "#" },
    { label: "Confused About Courses", href: "#" },
    { label: "GUTS", href: "#" },
    { label: "Fee Structure & Scholarships", href: "#" },
    { label: "CUET", href: "#" },
  ];

  const edgeItems: DropdownItem[] = [
    { label: "Design Your Own Degree", href: "#" },
    { label: "Geeta Finishing School", href: "#" },
    { label: "Geeta Technical Hub", href: "#" },
    { label: "New Education Policy", href: "#" },
    { label: "Vocational Skills", href: "#" },
    { label: "GU Global Edge", href: "#" },
  ];

  const toggleMobileDropdown = (section: string) => {
    setMobileExpandedSection(mobileExpandedSection === section ? null : section);
  };

  return (
    <header style={{ width: "100%", display: "flex", flexDirection: "column", position: "sticky", top: 0, zIndex: 1000, boxShadow: "0 2px 10px rgba(10,31,68,0.1)" }}>
      {/* 2. Main Navbar (White Background) */}
      <div style={{ backgroundColor: "var(--gu-white)", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "3px solid var(--gu-gold)" }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ color: "var(--gu-navy)", fontSize: "22px", fontWeight: 800, letterSpacing: "-0.5px" }}>
            Geeta <span style={{ color: "var(--gu-gold)" }}>University</span>
          </span>
        </Link>

        {/* Desktop Menu links */}
        <nav style={{ display: "none", alignItems: "center", gap: "24px" }} className="desktop-menu">
          {/* Schools Dropdown */}
          <div onMouseEnter={() => setActiveDropdown("schools")} onMouseLeave={() => setActiveDropdown(null)} style={{ position: "relative", padding: "8px 0" }}>
            <span style={{ color: "var(--gu-navy)", fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: "4px", fontSize: "14px" }}>
              Our Schools <span style={{ fontSize: "10px" }}>▼</span>
            </span>
            {activeDropdown === "schools" && (
              <div style={{ position: "absolute", top: "100%", left: 0, width: "320px", backgroundColor: "var(--gu-white)", boxShadow: "0 10px 25px rgba(0,0,0,0.15)", borderRadius: "6px", overflow: "hidden", display: "flex", flexDirection: "column", padding: "8px 0", borderTop: "3px solid var(--gu-gold)" }}>
                {schoolItems.map((item) => (
                  <Link key={item.label} href={item.href} style={{ padding: "10px 20px", color: "var(--gu-navy)", textDecoration: "none", fontSize: "13px", fontWeight: 600, transition: "background 0.2s, color 0.2s" }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--gu-bg)"; e.currentTarget.style.color = "var(--gu-gold)"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--gu-navy)"; }}>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Admissions Dropdown */}
          <div onMouseEnter={() => setActiveDropdown("admissions")} onMouseLeave={() => setActiveDropdown(null)} style={{ position: "relative", padding: "8px 0" }}>
            <span style={{ color: "var(--gu-navy)", fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: "4px", fontSize: "14px" }}>
              Admissions <span style={{ fontSize: "10px" }}>▼</span>
            </span>
            {activeDropdown === "admissions" && (
              <div style={{ position: "absolute", top: "100%", left: 0, width: "240px", backgroundColor: "var(--gu-white)", boxShadow: "0 10px 25px rgba(0,0,0,0.15)", borderRadius: "6px", overflow: "hidden", display: "flex", flexDirection: "column", padding: "8px 0", borderTop: "3px solid var(--gu-gold)" }}>
                {admissionItems.map((item) => (
                  <Link key={item.label} href={item.href} style={{ padding: "10px 20px", color: "var(--gu-navy)", textDecoration: "none", fontSize: "13px", fontWeight: 600, transition: "background 0.2s, color 0.2s" }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--gu-bg)"; e.currentTarget.style.color = "var(--gu-gold)"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--gu-navy)"; }}>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Placements (Direct) */}
          <Link href="#" style={{ color: "var(--gu-navy)", textDecoration: "none", fontWeight: 700, fontSize: "14px" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gu-gold)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gu-navy)")}>
            Placements
          </Link>

          {/* Campus Life (Direct) */}
          <Link href="#" style={{ color: "var(--gu-navy)", textDecoration: "none", fontWeight: 700, fontSize: "14px" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gu-gold)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gu-navy)")}>
            Campus Life
          </Link>

          {/* GU Edge Dropdown */}
          <div onMouseEnter={() => setActiveDropdown("edge")} onMouseLeave={() => setActiveDropdown(null)} style={{ position: "relative", padding: "8px 0" }}>
            <span style={{ color: "var(--gu-navy)", fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: "4px", fontSize: "14px" }}>
              GU Edge <span style={{ fontSize: "10px" }}>▼</span>
            </span>
            {activeDropdown === "edge" && (
              <div style={{ position: "absolute", top: "100%", right: 0, width: "240px", backgroundColor: "var(--gu-white)", boxShadow: "0 10px 25px rgba(0,0,0,0.15)", borderRadius: "6px", overflow: "hidden", display: "flex", flexDirection: "column", padding: "8px 0", borderTop: "3px solid var(--gu-gold)" }}>
                {edgeItems.map((item) => (
                  <Link key={item.label} href={item.href} style={{ padding: "10px 20px", color: "var(--gu-navy)", textDecoration: "none", fontSize: "13px", fontWeight: 600, transition: "background 0.2s, color 0.2s" }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--gu-bg)"; e.currentTarget.style.color = "var(--gu-gold)"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--gu-navy)"; }}>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Apply Now button (Desktop) */}
        <div style={{ display: "none", alignItems: "center", gap: "16px" }} className="desktop-actions">
          <Link href="https://admissions.geetauniversity.edu.in/" target="_blank" rel="noreferrer" style={{ backgroundColor: "var(--gu-gold)", color: "var(--gu-white)", padding: "10px 22px", borderRadius: "6px", textDecoration: "none", fontWeight: 700, fontSize: "14px", transition: "background-color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--gu-gold-light)")} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--gu-gold)")}>
            Apply Now
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ background: "none", border: "none", color: "var(--gu-navy)", cursor: "pointer", display: "block" }} className="mobile-toggle" aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* 3. Mobile Sidebar (Full Overlay / Sidebar Drawer) */}
      {isMobileMenuOpen && (
        <div style={{ position: "fixed", top: "75px", left: 0, right: 0, bottom: 0, backgroundColor: "var(--gu-white)", zIndex: 999, overflowY: "auto", display: "flex", flexDirection: "column", padding: "24px", borderTop: "1px solid var(--gu-border)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
            
            {/* Our Schools Accordion */}
            <div>
              <button onClick={() => toggleMobileDropdown("schools")} style={{ width: "100%", background: "none", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center", color: "var(--gu-navy)", fontWeight: 700, fontSize: "16px", padding: "12px 0", borderBottom: "1px solid var(--gu-border)" }}>
                <span>Our Schools</span>
                <span style={{ fontSize: "12px" }}>{mobileExpandedSection === "schools" ? "▲" : "▼"}</span>
              </button>
              {mobileExpandedSection === "schools" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "12px 16px 8px", backgroundColor: "var(--gu-bg)", borderRadius: "6px", marginTop: "8px" }}>
                  {schoolItems.map((item) => (
                    <Link key={item.label} href={item.href} onClick={() => setIsMobileMenuOpen(false)} style={{ color: "var(--gu-navy)", textDecoration: "none", fontSize: "14px", padding: "6px 0", display: "block" }}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Admissions Accordion */}
            <div>
              <button onClick={() => toggleMobileDropdown("admissions")} style={{ width: "100%", background: "none", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center", color: "var(--gu-navy)", fontWeight: 700, fontSize: "16px", padding: "12px 0", borderBottom: "1px solid var(--gu-border)" }}>
                <span>Admissions</span>
                <span style={{ fontSize: "12px" }}>{mobileExpandedSection === "admissions" ? "▲" : "▼"}</span>
              </button>
              {mobileExpandedSection === "admissions" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "12px 16px 8px", backgroundColor: "var(--gu-bg)", borderRadius: "6px", marginTop: "8px" }}>
                  {admissionItems.map((item) => (
                    <Link key={item.label} href={item.href} onClick={() => setIsMobileMenuOpen(false)} style={{ color: "var(--gu-navy)", textDecoration: "none", fontSize: "14px", padding: "6px 0", display: "block" }}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Placements (Direct Link) */}
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)} style={{ color: "var(--gu-navy)", textDecoration: "none", fontWeight: 700, fontSize: "16px", padding: "12px 0", borderBottom: "1px solid var(--gu-border)", display: "block" }}>
              Placements
            </Link>

            {/* Campus Life (Direct Link) */}
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)} style={{ color: "var(--gu-navy)", textDecoration: "none", fontWeight: 700, fontSize: "16px", padding: "12px 0", borderBottom: "1px solid var(--gu-border)", display: "block" }}>
              Campus Life
            </Link>

            {/* GU Edge Accordion */}
            <div>
              <button onClick={() => toggleMobileDropdown("edge")} style={{ width: "100%", background: "none", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center", color: "var(--gu-navy)", fontWeight: 700, fontSize: "16px", padding: "12px 0", borderBottom: "1px solid var(--gu-border)" }}>
                <span>GU Edge</span>
                <span style={{ fontSize: "12px" }}>{mobileExpandedSection === "edge" ? "▲" : "▼"}</span>
              </button>
              {mobileExpandedSection === "edge" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "12px 16px 8px", backgroundColor: "var(--gu-bg)", borderRadius: "6px", marginTop: "8px" }}>
                  {edgeItems.map((item) => (
                    <Link key={item.label} href={item.href} onClick={() => setIsMobileMenuOpen(false)} style={{ color: "var(--gu-navy)", textDecoration: "none", fontSize: "14px", padding: "6px 0", display: "block" }}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Apply Button in Mobile sidebar */}
          <Link href="https://admissions.geetauniversity.edu.in/" target="_blank" rel="noreferrer" onClick={() => setIsMobileMenuOpen(false)} style={{ backgroundColor: "var(--gu-gold)", color: "var(--gu-white)", padding: "14px", borderRadius: "6px", textDecoration: "none", fontWeight: 700, fontSize: "16px", textAlign: "center", display: "block" }}>
            Apply Now
          </Link>
        </div>
      )}

      {/* Global CSS Inject for Responsive Styles via Standard Style Tag */}
      <style jsx global>{`
        @media (min-width: 992px) {
          .desktop-menu {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
