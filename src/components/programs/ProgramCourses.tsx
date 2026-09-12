"use client";

import React, { useState } from "react";
import { ArrowRight, GraduationCap, Microscope, BookOpen, Award, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { CourseCategory } from "@/data/programs/types";

interface ProgramCoursesProps {
  title?: string;
  subtitle?: string;
  courses?: CourseCategory[];
}

interface NormalizedProgramItem {
  program: string;
  duration?: string;
  href?: string;
  specializations?: (string | { name: string; href?: string })[];
  eligibility?: string;
  details?: React.ReactNode;
}

interface NormalizedCategory {
  level: string;
  title: string;
  items: NormalizedProgramItem[];
}

export const DEFAULT_PROGRAMS_DATA: NormalizedCategory[] = [
  {
    level: "Under-Graduate",
    title: "Under-Graduate",
    items: [
      {
        program: "B.Tech — Computer Science & Engineering",
        duration: "4 Years",
        specializations: [
          "Artificial Intelligence & Machine Learning",
          "Cyber Security",
          "Data Science & Business Analytics (with HCL)",
          "Full Stack Web Development",
          "Quantum Computing",
          "NIAT Upskilling",
        ],
        eligibility:
          "Passed 10+2 with Physics and Mathematics as compulsory subjects plus one technical or science subject with a minimum of 55% marks.",
      },
      {
        program: "BCA — Bachelor of Computer Applications",
        duration: "3/4 Years",
        specializations: [
          "Computer Applications",
          "Artificial Intelligence & Machine Learning",
          "Cyber Security",
          "Data Science & Business Analytics",
        ],
        eligibility: "Passed 10+2 with a minimum of 50% marks from any recognized board.",
      },
    ],
  },
  {
    level: "Post-Graduate",
    title: "Post-Graduate",
    items: [
      {
        program: "M.Tech — Computer Science & Engineering",
        duration: "2 Years",
        eligibility:
          "Bachelor's degree in relevant engineering or science stream with a minimum of 50% marks; Mathematics preferred at graduation level.",
      },
      {
        program: "MCA — Master of Computer Applications",
        duration: "2 Years",
        eligibility:
          "BCA / B.Sc. (CS) / equivalent, or graduate degree with Mathematics at 10+2 or graduation level, and a minimum of 50% marks.",
      },
    ],
  },
  {
    level: "Doctoral (Ph.D.)",
    title: "Doctoral (Ph.D.)",
    items: [
      {
        program: "Ph.D. — Advanced Research & Doctoral Programs",
        duration: "Minimum 3 Years",
        eligibility: "Relevant master's degree with a minimum of 55% marks from an approved university.",
      },
    ],
  },
];

function getCategoryIcon(index: number, level: string) {
  const l = level.toLowerCase();
  if (l.includes("under") || l.includes("ug") || l.includes("bachelor")) {
    return <GraduationCap size={18} />;
  }
  if (l.includes("post") || l.includes("pg") || l.includes("master")) {
    return <Microscope size={18} />;
  }
  if (l.includes("doc") || l.includes("ph") || l.includes("research")) {
    return <BookOpen size={18} />;
  }
  if (index === 0) return <GraduationCap size={18} />;
  if (index === 1) return <Microscope size={18} />;
  if (index === 2) return <BookOpen size={18} />;
  return <Award size={18} />;
}

export default function ProgramCourses({
  title = "Programs Offered",
  subtitle = "Geeta University Programs | Duration | Eligibility",
  courses,
}: ProgramCoursesProps) {
  const [activeTab, setActiveTab] = useState(0);

  // Normalize and consolidate courses by level
  const categories: NormalizedCategory[] = (() => {
    if (!courses || courses.length === 0) return DEFAULT_PROGRAMS_DATA;

    const map = new Map<string, NormalizedCategory>();

    courses.forEach((cat: CourseCategory) => {
      const rawLevel = cat.level || cat.title || "Academic";
      let displayLevel = rawLevel;
      if (displayLevel.toLowerCase().includes("under")) displayLevel = "Under-Graduate";
      else if (displayLevel.toLowerCase().includes("post")) displayLevel = "Post-Graduate";
      else if (displayLevel.toLowerCase().includes("doctor") || displayLevel.toLowerCase().includes("ph.d"))
        displayLevel = "Doctoral (Ph.D.)";

      const rawItems = cat.programs || cat.items || [];
      const items: NormalizedProgramItem[] = (rawItems.length > 0 ? rawItems : [cat]).map((prog: any) => ({
        program: prog.name || prog.program || cat.title,
        duration: prog.duration || cat.duration || "Full Time",
        href: prog.href,
        specializations: prog.specializations || prog.specialisations,
        eligibility: prog.eligibility || cat.eligibility,
        details: prog.details,
      }));

      if (map.has(displayLevel)) {
        const existing = map.get(displayLevel)!;
        existing.items.push(...items);
      } else {
        map.set(displayLevel, {
          level: displayLevel,
          title: cat.title || displayLevel,
          items,
        });
      }
    });

    return Array.from(map.values());
  })();

  const currentCategory = categories[activeTab] || categories[0];

  return (
    <section
      id="Programs"
      style={{
        padding: "100px 0",
        background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        
        {/* Section Header matching SCSE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56 }}
        >
          <h2
            style={{
              fontSize: 48,
              fontWeight: 900,
              color: "#0A1F44",
              margin: "0 0 12px",
              lineHeight: 1.1,
              letterSpacing: "-1px",
            }}
          >
            {title}
          </h2>
          <p style={{ fontSize: 16, color: "#64748B", margin: 0, letterSpacing: 0.5 }}>
            {subtitle}
          </p>
          <div
            style={{
              marginTop: 24,
              fontSize: 15,
              color: "#4A5568",
              fontWeight: 400,
              maxWidth: 800,
              lineHeight: 1.6,
            }}
          >
            <span
              style={{
                fontWeight: 700,
                color: "#E8871A",
                letterSpacing: 0.5,
                textTransform: "uppercase",
                fontSize: 13,
                marginRight: 8,
              }}
            >
              Level of Study:
            </span>
            Comprehensive academic pathways designed with industry-linked curricula, practical labs, and recognized career qualifications.
          </div>
        </motion.div>

        {/* Tab Buttons matching SCSE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "flex",
            gap: 16,
            borderBottom: "1px solid #E2E8F0",
            paddingBottom: 20,
            marginBottom: 40,
            overflowX: "auto",
          }}
          className="hide-scroll"
        >
          {categories.map((cat, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                style={{
                  padding: "14px 32px",
                  borderRadius: 12,
                  background: isActive ? "#0A1F44" : "#F1F5F9",
                  color: isActive ? "#FFFFFF" : "#475569",
                  border: "1px solid",
                  borderColor: isActive ? "#0A1F44" : "#E2E8F0",
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  boxShadow: isActive ? "0 8px 24px rgba(10,31,68,0.25)" : "none",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "#E2E8F0";
                    e.currentTarget.style.color = "#0A1F44";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "#F1F5F9";
                    e.currentTarget.style.color = "#475569";
                  }
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: isActive ? 1 : 0.6,
                  }}
                >
                  {getCategoryIcon(idx, cat.level)}
                </div>
                {cat.level}
              </button>
            );
          })}
        </motion.div>

        {/* Content Section with animated tab change */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Banner matching SCSE */}
            <div
              style={{
                background: "#FDF1D6",
                border: "1px solid #FCD34D",
                borderRadius: 10,
                padding: "16px 24px",
                textAlign: "center",
                fontWeight: 800,
                color: "#92400E",
                fontSize: 18,
                marginBottom: 32,
                letterSpacing: 0.5,
                boxShadow: "0 4px 12px rgba(245, 158, 11, 0.05)",
              }}
            >
              {currentCategory.level} Courses
            </div>

            {/* Courses Card Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24 }}>
              {currentCategory.items.map((prog, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="course-program-card"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    borderRadius: 16,
                    padding: "28px 36px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                    transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.08)";
                    e.currentTarget.style.borderColor = "#E8871A";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.03)";
                    e.currentTarget.style.borderColor = "#E2E8F0";
                  }}
                >
                  {/* Top Card Header */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: 16,
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: 26,
                          fontWeight: 800,
                          color: "#0A1F44",
                          margin: "0 0 10px",
                          letterSpacing: "-0.5px",
                        }}
                      >
                        {prog.program}
                      </h3>
                      {prog.duration && (
                        <div
                          style={{
                            display: "inline-block",
                            background: "#FEF3C7",
                            color: "#92400E",
                            padding: "6px 14px",
                            borderRadius: 20,
                            fontSize: 13,
                            fontWeight: 700,
                            border: "1px solid #FDE68A",
                          }}
                        >
                          Duration: {prog.duration}
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                      {prog.href && (
                        <a
                          href={prog.href}
                          style={{
                            background: "#FFFFFF",
                            color: "#0A1F44",
                            border: "1.5px solid #0A1F44",
                            padding: "11px 22px",
                            borderRadius: 8,
                            fontSize: 13,
                            fontWeight: 800,
                            textDecoration: "none",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                            transition: "all 0.25s ease",
                            textTransform: "uppercase",
                            letterSpacing: 0.5,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#0A1F44";
                            e.currentTarget.style.color = "#FFFFFF";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "#FFFFFF";
                            e.currentTarget.style.color = "#0A1F44";
                          }}
                        >
                          Course Details <ArrowRight size={15} />
                        </a>
                      )}

                      <a
                        href="https://admissions.geetauniversity.edu.in/"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          background: "#E8871A",
                          color: "#FFFFFF",
                          padding: "12px 28px",
                          borderRadius: 8,
                          fontSize: 14,
                          fontWeight: 800,
                          textDecoration: "none",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          transition: "all 0.3s ease",
                          textTransform: "uppercase",
                          letterSpacing: 1,
                          boxShadow: "0 4px 12px rgba(232,135,26,0.25)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#0A1F44";
                          e.currentTarget.style.boxShadow = "0 8px 20px rgba(10,31,68,0.2)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "#E8871A";
                          e.currentTarget.style.boxShadow = "0 4px 12px rgba(232,135,26,0.25)";
                        }}
                      >
                        Apply Now <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>

                  {/* Divider */}
                  <div style={{ height: 1, background: "#F1F5F9", width: "100%", margin: "4px 0" }} />

                  {/* Body Content */}
                  {prog.details ? (
                    <div style={{ fontSize: 15, color: "#475569", lineHeight: 1.8, fontWeight: 400 }}>
                      {prog.details}
                    </div>
                  ) : (
                    <div style={{ fontSize: 15, color: "#475569", lineHeight: 1.75, fontWeight: 400 }}>
                      {prog.specializations && prog.specializations.length > 0 && (
                        <div style={{ marginBottom: 16 }}>
                          <strong
                            style={{
                              fontSize: 14.5,
                              color: "#0A1F44",
                              fontWeight: 700,
                              display: "block",
                              marginBottom: 8,
                            }}
                          >
                            Specializations available:
                          </strong>
                          <ul
                            style={{
                              margin: 0,
                              padding: 0,
                              listStyle: "none",
                              display: "grid",
                              gridTemplateColumns:
                                prog.specializations.length > 3 ? "repeat(auto-fit, minmax(260px, 1fr))" : "1fr",
                              gap: "8px 20px",
                            }}
                          >
                            {prog.specializations.map((specItem, sIdx) => {
                              const isObj = typeof specItem === "object" && specItem !== null;
                              const name = isObj ? specItem.name : specItem;
                              const href = isObj ? specItem.href : undefined;

                              return (
                                <li
                                  key={sIdx}
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                    fontSize: 14.5,
                                    color: "#475569",
                                  }}
                                >
                                  <span
                                    style={{
                                      width: 6,
                                      height: 6,
                                      borderRadius: "50%",
                                      background: "#E8871A",
                                      flexShrink: 0,
                                    }}
                                  />
                                  {href ? (
                                    <a
                                      href={href}
                                      className="spec-link"
                                      style={{
                                        color: "#0A1F44",
                                        textDecoration: "none",
                                        fontWeight: 600,
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: 5,
                                        transition: "all 0.2s ease",
                                      }}
                                    >
                                      <span>{name}</span>
                                      {/* <ArrowRight
                                        size={13}
                                        className="spec-arrow"
                                        style={{
                                          opacity: 0.5,
                                          color: "#E8871A",
                                          transition: "all 0.2s ease",
                                          flexShrink: 0,
                                        }}
                                      /> */}
                                    </a>
                                  ) : (
                                    <span>{name}</span>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      )}

                      {prog.eligibility && (
                        <div style={{ marginTop: 12, fontSize: 14.5, lineHeight: 1.7, color: "#475569" }}>
                          <strong style={{ color: "#0A1F44", fontWeight: 700 }}>Eligibility:</strong>{" "}
                          <span>{prog.eligibility}</span>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
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
        .spec-link:hover {
          color: #E8871A !important;
          text-decoration: underline !important;
        }
        .spec-link:hover .spec-arrow {
          opacity: 1 !important;
          transform: translateX(3px) !important;
        }
        @media (max-width: 768px) {
          .course-program-card {
            padding: 20px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}