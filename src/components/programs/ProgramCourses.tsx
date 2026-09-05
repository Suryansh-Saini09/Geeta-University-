"use client";

import React, { useState } from "react";
import { ArrowRight, GraduationCap, Microscope, BookOpen } from "lucide-react";
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
        details: (
          <>
            An engineering degree built around core computer science, advanced technical study, and specializations in high-demand domains.
            <br />
            <br />
            <strong>Specializations available:</strong>
            <ul style={{ margin: "8px 0 0 20px", padding: 0, listStyleType: "disc" }}>
              <li>Artificial Intelligence &amp; Machine Learning</li>
              <li>Cyber Security</li>
              <li>Data Science &amp; Business Analytics (with HCL)</li>
              <li>Full Stack Web Development</li>
              <li>Quantum Computing</li>
              <li>NIAT Upskilling</li>
            </ul>
            <br />
            <strong>Eligibility:</strong> Passed 10+2 with Physics and Mathematics as compulsory subjects plus one technical or science subject with a minimum of 55% marks.
          </>
        ),
      },
      {
        program: "BCA — Bachelor of Computer Applications",
        duration: "3/4 Years",
        details: (
          <>
            Application-oriented computing with specialisation options in high-demand domains.
            <br />
            <br />
            <strong>Specialisations available:</strong>
            <ul style={{ margin: "8px 0 0 20px", padding: 0, listStyleType: "disc" }}>
              <li>Computer Applications</li>
              <li>Artificial Intelligence &amp; Machine Learning</li>
              <li>Cyber Security</li>
              <li>Data Science &amp; Business Analytics</li>
            </ul>
            <br />
            <strong>Eligibility:</strong> Passed 10+2 with a minimum of 50% marks from any recognized board.
          </>
        ),
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
        details: (
          <>
            <strong>Eligibility:</strong> Bachelor's degree in relevant engineering or science stream with a minimum of 50% marks; Mathematics preferred at graduation level.
          </>
        ),
      },
      {
        program: "MCA — Master of Computer Applications",
        duration: "2 Years",
        details: (
          <>
            <strong>Eligibility:</strong> BCA / B.Sc. (CS) / equivalent, or graduate degree with Mathematics at 10+2 or graduation level, and a minimum of 50% marks.
          </>
        ),
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
        details: (
          <>
            <strong>Eligibility:</strong> Relevant master's degree with a minimum of 55% marks from an approved university.
          </>
        ),
      },
    ],
  },
];

export default function ProgramCourses({
  title = "Programs Offered",
  subtitle = "Geeta University Programs | Duration | Eligibility",
  courses,
}: ProgramCoursesProps) {
  const [activeTab, setActiveTab] = useState(0);

  // Normalize courses from props if provided, otherwise use rich defaults
  const categories: NormalizedCategory[] = courses && courses.length > 0
    ? courses.map((cat: CourseCategory) => ({
        level: cat.level || cat.title,
        title: cat.title,
        items: (cat.programs || []).map((prog) => ({
          program: prog.name || prog.program || cat.title,
          duration: prog.duration || cat.duration || "Full Time",
          href: prog.href,
          details: prog.details || (
            <>
              {prog.specializations && prog.specializations.length > 0 && (
                <>
                  <strong>Specializations:</strong> {prog.specializations.join(", ")}
                  <br />
                  <br />
                </>
              )}
              {prog.eligibility || cat.eligibility ? (
                <>
                  <strong>Eligibility:</strong> {prog.eligibility || cat.eligibility}
                </>
              ) : null}
            </>
          ),
        })),
      }))
    : DEFAULT_PROGRAMS_DATA;

  const currentCategory = categories[activeTab] || categories[0];

  return (
    <section id="Programs" style={{ padding: "100px 0", background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)", position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56 }}
        >
          <h2 style={{ fontSize: 48, fontWeight: 900, color: "#0A1F44", margin: "0 0 12px", lineHeight: 1.1, letterSpacing: "-1px" }}>
            {title}
          </h2>
          <p style={{ fontSize: 16, color: "#64748B", margin: 0, letterSpacing: 0.5 }}>
            {subtitle}
          </p>
          <div style={{ marginTop: 24, fontSize: 15, color: "#4A5568", fontWeight: 400, maxWidth: 800, lineHeight: 1.6 }}>
            <span style={{ fontWeight: 700, color: "#E8871A", letterSpacing: 0.5, textTransform: "uppercase", fontSize: 13, marginRight: 8 }}>
              Level of Study:{" "}
            </span>
            Comprehensive academic pathways designed with industry-linked curricula, practical labs, and global certifications.
          </div>
        </motion.div>

        {/* Tab Buttons */}
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
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              style={{
                padding: "14px 32px",
                borderRadius: 12,
                background: activeTab === idx ? "#0A1F44" : "#F1F5F9",
                color: activeTab === idx ? "#FFFFFF" : "#475569",
                border: "1px solid",
                borderColor: activeTab === idx ? "#0A1F44" : "#E2E8F0",
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                display: "flex",
                alignItems: "center",
                gap: 12,
                boxShadow: activeTab === idx ? "0 8px 24px rgba(10,31,68,0.25)" : "none",
              }}
              onMouseEnter={(e) => {
                if (activeTab !== idx) {
                  e.currentTarget.style.background = "#E2E8F0";
                  e.currentTarget.style.color = "#0A1F44";
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== idx) {
                  e.currentTarget.style.background = "#F1F5F9";
                  e.currentTarget.style.color = "#475569";
                }
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", opacity: activeTab === idx ? 1 : 0.6 }}>
                {idx === 0 ? <GraduationCap size={18} /> : idx === 1 ? <Microscope size={18} /> : <BookOpen size={18} />}
              </div>
              {cat.level}
            </button>
          ))}
        </motion.div>

        {/* Content Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
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

            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24 }}>
              {currentCategory.items.map((prog, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    borderRadius: 16,
                    padding: "28px 36px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 18,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                    transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
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
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16 }}>
                    <div>
                      <h3 style={{ fontSize: 26, fontWeight: 800, color: "#0A1F44", margin: "0 0 10px", letterSpacing: "-0.5px" }}>
                        {prog.program}
                      </h3>
                      {prog.duration && (
                        <div style={{ display: "inline-block", background: "#FEF3C7", color: "#92400E", padding: "6px 14px", borderRadius: 20, fontSize: 13, fontWeight: 700, border: "1px solid #FDE68A" }}>
                          Duration: {prog.duration}
                        </div>
                      )}
                    </div>
                    <a
                      href={prog.href || "https://admissions.geetauniversity.edu.in/"}
                      target={prog.href && prog.href.startsWith("/") ? undefined : "_blank"}
                      rel={prog.href && prog.href.startsWith("/") ? undefined : "noreferrer"}
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
                        transition: "all 0.3s",
                        textTransform: "uppercase",
                        letterSpacing: 1,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#0A1F44";
                        e.currentTarget.style.boxShadow = "0 8px 20px rgba(10,31,68,0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#E8871A";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      {prog.href && prog.href.startsWith("/") ? "View Course Details" : "Apply Now"} <ArrowRight size={16} />
                    </a>
                  </div>

                  <div style={{ height: 1, background: "#F1F5F9", width: "100%", margin: "4px 0" }} />

                  <div style={{ fontSize: 15, color: "#475569", lineHeight: 1.8, fontWeight: 400 }}>
                    {prog.details}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}