"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  BrainCircuit,
  ShieldCheck,
  Scale,
  TrendingUp,
  Briefcase,
  Stethoscope,
  Building2,
  Utensils,
  GraduationCap,
  Laptop,
  BookOpen,
  Layers,
  Award,
  ChevronLeft,
  ChevronRight,
  Sprout,
  Tractor,
  Leaf,
} from "lucide-react";
import type { PathwayCardItem, NotableRoleItem } from "@/data/programs/types";

function renderPathwayIcon(item: PathwayCardItem) {
  const text = (item.area + " " + item.pathway).toLowerCase();
  if (text.includes("moot") || text.includes("court") || text.includes("litigation") || text.includes("judic") || text.includes("law") || text.includes("jag") || text.includes("adr") || text.includes("arbitrat")) {
    return <Scale size={24} color="#0A1F44" />;
  }
  if (text.includes("forensic") || text.includes("cyber") || text.includes("security") || text.includes("ballistic") || text.includes("investigat") || text.includes("ipr")) {
    return <ShieldCheck size={24} color="#0A1F44" />;
  }
  if (text.includes("ai") || text.includes("machine learning") || text.includes("intelligence") || text.includes("robot")) {
    return <BrainCircuit size={24} color="#0A1F44" />;
  }
  if (text.includes("full stack") || text.includes("web") || text.includes("global") || text.includes("international") || text.includes("export")) {
    return <Globe size={24} color="#0A1F44" />;
  }
  if (text.includes("software") || text.includes("programming") || text.includes("coding") || text.includes("developer")) {
    return <Code2 size={24} color="#0A1F44" />;
  }
  if (text.includes("cloud") || text.includes("network") || text.includes("system")) {
    return <Laptop size={24} color="#0A1F44" />;
  }
  if (text.includes("agri") || text.includes("farm") || text.includes("crop") || text.includes("soil") || text.includes("plant") || text.includes("breeder") || text.includes("seed") || text.includes("horticulture") || text.includes("agronom") || text.includes("vermicompost")) {
    return <Sprout size={24} color="#0A1F44" />;
  }
  if (text.includes("data") || text.includes("analytics") || text.includes("finance") || text.includes("banking") || text.includes("fintech") || text.includes("trading") || text.includes("market")) {
    return <TrendingUp size={24} color="#0A1F44" />;
  }
  if (text.includes("pharma") || text.includes("clinical") || text.includes("hospital") || text.includes("health") || text.includes("diet") || text.includes("medical") || text.includes("patient")) {
    return <Stethoscope size={24} color="#0A1F44" />;
  }
  if (text.includes("culinary") || text.includes("hotel") || text.includes("hospitality") || text.includes("food") || text.includes("chef") || text.includes("beverage") || text.includes("catering")) {
    return <Utensils size={24} color="#0A1F44" />;
  }
  if (text.includes("research") || text.includes("m.tech") || text.includes("ph.d") || text.includes("higher study") || text.includes("academic") || text.includes("ars") || text.includes("icar")) {
    return <GraduationCap size={24} color="#0A1F44" />;
  }
  if (text.includes("corporate") || text.includes("management") || text.includes("consult") || text.includes("business") || text.includes("hr") || text.includes("startup") || text.includes("entrepreneur")) {
    return <Briefcase size={24} color="#0A1F44" />;
  }
  return <Award size={24} color="#0A1F44" />;
}

function getRoleIcon(name: string) {
  const n = name.toLowerCase();
  if (n.includes("agri") || n.includes("agronom") || n.includes("breeder") || n.includes("soil") || n.includes("horticultur") || n.includes("farm") || n.includes("crop") || n.includes("seed") || n.includes("plant")) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a9 9 0 0 1 9 9c0 4-3 7-9 11C6 18 3 15 3 11a9 9 0 0 1 9-9z" />
        <path d="M12 7v10" />
      </svg>
    );
  }
  if (n.includes("software") || n.includes("developer") || n.includes("coder") || n.includes("engineer")) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    );
  }
  if (n.includes("data") || n.includes("analyst") || n.includes("finance") || n.includes("banker") || n.includes("audit")) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    );
  }
  if (n.includes("health") || n.includes("diet") || n.includes("pharma") || n.includes("clinical") || n.includes("medical")) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M2 12h20" />
      </svg>
    );
  }
  if (n.includes("hotel") || n.includes("chef") || n.includes("manager") || n.includes("lead") || n.includes("consultant")) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    );
  }
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

interface CareerPathwaysProps {
  title?: string;
  subtitle?: string;
  pathways?: PathwayCardItem[];
  notableRoles?: NotableRoleItem[];
}

export default function CareerPathways({
  title = "Your Degree. Your Direction.",
  subtitle = "Opens doors across a wide range of rewarding careers. Here's how academic paths map to professional outcomes:",
  pathways,
  notableRoles,
}: CareerPathwaysProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  if (!pathways || pathways.length === 0) return null;
  const pathwayItems = pathways;
  const roleItems = notableRoles || [];

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -360, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 360, behavior: "smooth" });
  };

  return (
    <section
      id="CareerPathways"
      style={{
        background: "#FDF1D6",
        padding: "100px 0",
        position: "relative",
        borderTop: "1px solid rgba(0, 0, 0, 0.06)",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 20 }}>
            <div style={{ width: 32, height: 2, background: "#E8871A", borderRadius: 2 }} />
            <span
              style={{
                color: "#E8871A",
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              CAREER PATHWAYS
            </span>
            <div style={{ width: 32, height: 2, background: "#E8871A", borderRadius: 2 }} />
          </div>
          <h2
            style={{
              fontSize: 48,
              fontWeight: 900,
              color: "#0A1F44",
              margin: "0 0 16px",
              lineHeight: 1.1,
              letterSpacing: "-1.5px",
            }}
          >
            {title}
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#4A5568",
              maxWidth: 850,
              margin: "0 auto",
              lineHeight: 1.7,
              fontWeight: 450,
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Carousel Slider */}
        <div style={{ position: "relative", marginTop: 40, padding: "0 20px" }}>
          <div
            ref={scrollRef}
            className="hide-scroll"
            style={{
              display: "flex",
              gap: 28,
              overflowX: "auto",
              paddingBottom: "32px",
              scrollSnapType: "x mandatory",
              scrollBehavior: "smooth",
            }}
          >
            {pathwayItems.map((item, idx) => {
              const numStr = `0${idx + 1}`;
              return (
                <div
                  key={idx}
                  style={{
                    scrollSnapAlign: "start",
                    flexShrink: 0,
                    width: "320px",
                    height: "440px",
                    background: "linear-gradient(180deg, #F5E6C9 0%, #EAD7B2 100%)",
                    borderRadius: "24px",
                    padding: "40px 32px",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.02)",
                    border: "1px solid rgba(0, 0, 0, 0.03)",
                    transition:
                      "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  className="pathway-slider-card"
                >
                  <div
                    style={{
                      fontSize: 24,
                      background: "rgba(255, 255, 255, 0.35)",
                      width: 48,
                      height: 48,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "12px",
                      marginBottom: 24,
                    }}
                  >
                    {renderPathwayIcon(item)}
                  </div>

                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 800,
                      color: "#0A1F44",
                      margin: "0 0 16px",
                      lineHeight: 1.35,
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    {item.area}
                  </h3>

                  <p
                    style={{
                      fontSize: 14.5,
                      color: "#475569",
                      margin: 0,
                      lineHeight: 1.6,
                      fontWeight: 450,
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    {item.pathway}
                  </p>

                  {/* Huge ghost number at the bottom */}
                  <div
                    className="ghost-number"
                    style={{
                      position: "absolute",
                      bottom: "-10px",
                      left: "24px",
                      fontSize: "96px",
                      fontWeight: 900,
                      color: "rgba(255, 255, 255, 0.16)",
                      lineHeight: 1,
                      userSelect: "none",
                      zIndex: 1,
                      transition:
                        "color 0.4s cubic-bezier(0.16, 1, 0.3, 1), text-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    {numStr}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={scrollLeft}
            style={{
              position: "absolute",
              left: "-16px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "#FFFFFF",
              width: 48,
              height: 48,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #E2E8F0",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
              color: "#0A1F44",
              zIndex: 10,
              transition: "transform 0.2s",
            }}
            className="slider-nav-btn"
            aria-label="Previous pathway"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={scrollRight}
            style={{
              position: "absolute",
              right: "-16px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "#FFFFFF",
              width: 48,
              height: 48,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #E2E8F0",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
              color: "#0A1F44",
              zIndex: 10,
              transition: "transform 0.2s",
            }}
            className="slider-nav-btn"
            aria-label="Next pathway"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        {/* Notable Career Roles Band */}
        {roleItems.length > 0 && (
          <div
            style={{
              marginTop: 80,
              background: "rgba(255, 255, 255, 0.45)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(232, 135, 26, 0.15)",
              borderRadius: "32px",
              padding: "48px 32px",
              boxShadow: "0 15px 35px rgba(0, 0, 0, 0.02), inset 0 1px 0 rgba(255, 255, 255, 0.6)",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: 36 }}>
              <h3 style={{ fontSize: 26, fontWeight: 900, color: "#0A1F44", letterSpacing: "-0.6px", margin: "0" }}>
                Notable Career Roles Our Graduates Pursue:
              </h3>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", maxWidth: 1080, margin: "0 auto" }}>
              {roleItems.map((role, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.04, y: -2 }}
                  transition={{ type: "spring", stiffness: 450, damping: 15 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "12px 22px",
                    background: "#FFFFFF",
                    border: "1px solid rgba(232, 135, 26, 0.08)",
                    borderRadius: "16px",
                    color: "#0A1F44",
                    fontSize: "14.5px",
                    fontWeight: 650,
                    cursor: "pointer",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.015)",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  className="career-role-badge"
                >
                  <span
                    className="career-role-icon"
                    style={{
                      color: "#E8871A",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {getRoleIcon(role.name)}
                  </span>
                  <span>{role.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .pathway-slider-card:hover {
          border-color: rgba(232, 135, 26, 0.18) !important;
          box-shadow: 0 15px 30px rgba(232, 135, 26, 0.07), 0 0 18px rgba(232, 135, 26, 0.04) !important;
        }
        .pathway-slider-card:hover .ghost-number {
          color: rgba(255, 255, 255, 0.28) !important;
          text-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
        }
        .career-role-badge:hover {
          background: #0A1F44 !important;
          color: #FFFFFF !important;
          border-color: #E8871A !important;
          box-shadow: 0 12px 24px rgba(232, 135, 26, 0.16) !important;
        }
        .career-role-badge:hover .career-role-icon {
          color: #E8871A !important;
          transform: scale(1.15) rotate(8deg);
        }
        .slider-nav-btn:hover {
          transform: translateY(-50%) scale(1.08) !important;
          color: #E8871A !important;
        }
        .slider-nav-btn:active {
          transform: translateY(-50%) scale(0.95) !important;
        }
      `}</style>
    </section>
  );
}
