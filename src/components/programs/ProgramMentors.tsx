"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { FacultyMember } from "@/data/programs/types";

interface ProgramMentorsProps {
  title?: string;
  mentorsSection?: {
    eyebrow?: string;
    title?: string;
    faculty: FacultyMember[];
  };
  faculty?: FacultyMember[];
}

export default function ProgramMentors({
  title = "Led by Experts, Guided by Industry.",
  mentorsSection,
  faculty,
}: ProgramMentorsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedMentor, setSelectedMentor] = useState<FacultyMember | null>(null);

  const rawMentors = mentorsSection?.faculty || faculty || [];
  if (rawMentors.length === 0) return null;
  const mentors = rawMentors;

  const sectionTitle = mentorsSection?.title || title;

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  const getMentorRole = (m: FacultyMember) => m.role || m.designation || "Faculty Member";

  const getMentorDesc = (m: FacultyMember) => {
    if (m.desc) return m.desc;
    if (m.description) return m.description;
    const r = getMentorRole(m);
    if (r.includes("Trainer")) {
      return "Technical trainer delivering hands-on instruction and practical upskilling in modern labs.";
    }
    return "Academic educator dedicated to student mentorship, research guidance, and core foundation building.";
  };

  const getMentorImage = (m: FacultyMember) => m.img || m.image || "/dummy.webp";

  return (
    <section id="Mentors" style={{ padding: "80px 0", background: "#FFFFFF", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <h2 style={{ fontSize: 44, fontWeight: 800, color: "#0A1F44", lineHeight: 1.2, letterSpacing: "-1px" }}>
          {sectionTitle}
        </h2>

        <div style={{ position: "relative", marginTop: 48 }}>
          <div
            ref={scrollRef}
            className="hide-scroll"
            style={{
              display: "flex",
              gap: 24,
              overflowX: "auto",
              paddingBottom: 32,
              scrollSnapType: "x mandatory",
              scrollBehavior: "smooth",
            }}
          >
            {mentors.map((m, i) => (
              <div
                key={i}
                style={{
                  scrollSnapAlign: "start",
                  flexShrink: 0,
                }}
              >
                <div
                  className="mentor-card"
                  style={{
                    width: 280,
                    height: 500,
                    background: "#F3F4F6",
                    borderRadius: 16,
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    border: "1px solid rgba(0,0,0,0.05)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
                  }}
                >
                  <div style={{ width: "100%", height: 200, background: "#E5E7EB", position: "relative", flexShrink: 0 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={getMentorImage(m)}
                      alt={m.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top",
                        mixBlendMode: "multiply",
                        opacity: 0.85,
                      }}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        if (e.currentTarget.parentElement) {
                          e.currentTarget.parentElement.innerHTML =
                            '<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: #E2E8F0; color: #64748B; font-weight: 700; font-size: 14px;">[ Faculty Photo ]</div>';
                        }
                      }}
                    />
                  </div>

                  <div
                    style={{
                      padding: "20px 20px 24px",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ width: "100%" }}>
                      <h3
                        style={{
                          fontSize: 20,
                          fontWeight: 800,
                          color: "#0A1F44",
                          margin: 0,
                          minHeight: 52,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          lineHeight: 1.2,
                        }}
                      >
                        {m.name}
                      </h3>

                      <p
                        style={{
                          fontSize: 14,
                          color: "#E8871A",
                          fontWeight: 700,
                          margin: "6px 0 0",
                          minHeight: 40,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          lineHeight: 1.3,
                        }}
                      >
                        {getMentorRole(m)}
                      </p>

                      <p
                        style={{
                          fontSize: 13,
                          color: "#64748B",
                          margin: "10px 0 0",
                          lineHeight: 1.5,
                          minHeight: 60,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        className="line-clamp-3"
                      >
                        {getMentorDesc(m)}
                      </p>
                    </div>

                    <div style={{ width: "100%" }}>
                      <div style={{ width: "100%", borderBottom: "1px dashed #CBD5E1", margin: "14px 0" }} />

                      <button
                        onClick={() => setSelectedMentor(m)}
                        className="read-more-btn"
                        style={{
                          background: "none",
                          border: "none",
                          color: "#64748B",
                          fontSize: 14,
                          fontWeight: 700,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          width: "100%",
                        }}
                      >
                        → Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={scrollLeft}
            style={{
              position: "absolute",
              left: -24,
              top: "150px",
              background: "white",
              width: 48,
              height: 48,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #E2E8F0",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              color: "#2563EB",
              zIndex: 10,
            }}
            aria-label="Previous mentor"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <button
            onClick={scrollRight}
            style={{
              position: "absolute",
              right: -24,
              top: "150px",
              background: "white",
              width: 48,
              height: 48,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #E2E8F0",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              color: "#2563EB",
              zIndex: 10,
            }}
            aria-label="Next mentor"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedMentor && (
            <div
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 24,
              }}
            >
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedMentor(null)}
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(10,31,68,0.5)",
                  backdropFilter: "blur(8px)",
                }}
              />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                style={{
                  position: "relative",
                  background: "#FFFFFF",
                  borderRadius: 24,
                  padding: "40px 32px 32px",
                  maxWidth: 480,
                  width: "100%",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
                  zIndex: 1000,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedMentor(null)}
                  style={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    background: "#F1F5F9",
                    border: "none",
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "#64748B",
                    fontSize: 16,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#E2E8F0";
                    e.currentTarget.style.color = "#0F172A";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#F1F5F9";
                    e.currentTarget.style.color = "#64748B";
                  }}
                >
                  ✕
                </button>

                {/* Profile Image */}
                <div
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    overflow: "hidden",
                    background: "#E5E7EB",
                    marginBottom: 24,
                    border: "4px solid #F1F5F9",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getMentorImage(selectedMentor)}
                    alt={selectedMentor.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
                      mixBlendMode: "multiply",
                      opacity: 0.9,
                    }}
                  />
                </div>

                {/* Name */}
                <h3 style={{ fontSize: 24, fontWeight: 900, color: "#0A1F44", margin: 0 }}>
                  {selectedMentor.name}
                </h3>

                {/* Role */}
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#E8871A",
                    marginTop: 8,
                    marginBottom: 20,
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                  }}
                >
                  {getMentorRole(selectedMentor)}
                </p>

                {/* Divider */}
                <div style={{ width: "100%", borderBottom: "1px solid #E2E8F0", marginBottom: 20 }} />

                {/* Description */}
                <p style={{ fontSize: 14, color: "#4A5568", lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                  {getMentorDesc(selectedMentor)}
                </p>

                {/* Action Button */}
                <button
                  onClick={() => setSelectedMentor(null)}
                  style={{
                    marginTop: 28,
                    padding: "12px 36px",
                    background: "#0A1F44",
                    color: "#FFFFFF",
                    border: "none",
                    borderRadius: 12,
                    fontWeight: 700,
                    fontSize: 14,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#E8871A")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#0A1F44")}
                >
                  Close Profile
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .hide-scroll::-webkit-scrollbar {
          display: none;
        }
        .hide-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .mentor-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease !important;
        }
        .mentor-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 24px rgba(232,135,26,0.12) !important;
        }
        .read-more-btn {
          transition: color 0.2s ease !important;
        }
        .read-more-btn:hover {
          color: #E8871A !important;
        }
      `}</style>
    </section>
  );
}
