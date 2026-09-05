"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, GraduationCap, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";
import type { RelatedCourseItem } from "@/data/programs/courses/types";

interface CourseRelatedProps {
  relatedCourses: RelatedCourseItem[];
}

export default function CourseRelated({ relatedCourses }: CourseRelatedProps) {
  if (!relatedCourses || relatedCourses.length === 0) return null;

  return (
    <section
      style={{
        padding: "80px 0",
        background: "#F8FAFC",
        borderTop: "1px solid #E2E8F0",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            textAlign: "center",
            maxWidth: 760,
            margin: "0 auto 48px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "#DBEAFE",
              color: "#1E40AF",
              padding: "6px 14px",
              borderRadius: 20,
              fontSize: 13,
              fontWeight: 700,
              marginBottom: 14,
              textTransform: "uppercase",
              letterSpacing: 0.5,
            }}
          >
            <GraduationCap size={14} /> Explore More
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 40px)",
              fontWeight: 900,
              color: "#0A1F44",
              lineHeight: 1.2,
              letterSpacing: "-0.5px",
              margin: 0,
            }}
          >
            Related Academic Programs
          </h2>
        </motion.div>

        {/* Related Courses Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {relatedCourses.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              style={{
                background: "#FFFFFF",
                borderRadius: 16,
                padding: "24px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 16,
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = "#E8871A";
                e.currentTarget.style.boxShadow = "0 16px 32px rgba(10,31,68,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.borderColor = "#E2E8F0";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.03)";
              }}
            >
              <div>
                {item.level && (
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 800,
                      color: "#E8871A",
                      background: "#FFFBEB",
                      border: "1px solid #FDE68A",
                      padding: "4px 10px",
                      borderRadius: 12,
                      textTransform: "uppercase",
                      display: "inline-block",
                      marginBottom: 10,
                    }}
                  >
                    {item.level}
                  </span>
                )}
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: "#0A1F44",
                    margin: "0 0 10px",
                    lineHeight: 1.3,
                  }}
                >
                  {item.name}
                </h3>
                {item.duration && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 13,
                      color: "#64748B",
                      fontWeight: 600,
                      marginBottom: 6,
                    }}
                  >
                    <Clock size={14} style={{ color: "#E8871A" }} /> Duration: {item.duration}
                  </div>
                )}
                {item.eligibility && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 6,
                      fontSize: 13,
                      color: "#64748B",
                      fontWeight: 500,
                    }}
                  >
                    <Award size={14} style={{ color: "#16A34A", marginTop: 2, flexShrink: 0 }} />{" "}
                    {item.eligibility}
                  </div>
                )}
              </div>

              <Link
                href={item.href}
                style={{
                  color: "#0A1F44",
                  fontSize: 14,
                  fontWeight: 800,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                }}
              >
                View Course Details <ArrowRight size={16} style={{ color: "#E8871A" }} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
