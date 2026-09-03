"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import {
  FlaskConical,
  Microscope,
  Scale,
  Landmark,
  Laptop,
  BookOpen,
  Building2,
  TrendingUp,
  Utensils,
  Stethoscope,
  Lightbulb,
  ShieldCheck,
  Users,
  BrainCircuit,
  Hotel,
  Sparkles,
  Layers,
  ChefHat,
  Cpu,
  Sprout,
  Tractor,
  Leaf,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { LearningSpaceItem, GalleryShowcaseItem } from "@/data/programs/types";

function renderSpaceIcon(space: LearningSpaceItem) {
  const t = (space.title + " " + (space.icon || "")).toLowerCase();
  if (t.includes("moot") || t.includes("court") || t.includes("legal") || t.includes("jurisprudence")) {
    return <Scale size={26} />;
  }
  if (t.includes("microbiol") || t.includes("microscope") || t.includes("pathology") || t.includes("entomology")) {
    return <Microscope size={26} />;
  }
  if (t.includes("chem") || t.includes("lab") || t.includes("food analysis") || t.includes("biochem") || t.includes("pharma")) {
    return <FlaskConical size={26} />;
  }
  if (t.includes("farm") || t.includes("soil") || t.includes("crop") || t.includes("agri") || t.includes("sprout") || t.includes("greenhouse") || t.includes("polyhouse") || t.includes("vermicompost") || t.includes("plant") || t.includes("breeding") || t.includes("horticulture")) {
    return <Sprout size={26} />;
  }
  if (t.includes("tractor") || t.includes("mechanization") || t.includes("machinery")) {
    return <Tractor size={26} />;
  }
  if (t.includes("drone") || t.includes("precision")) {
    return <Cpu size={26} />;
  }
  if (t.includes("clinic") || t.includes("patient") || t.includes("health") || t.includes("diet") || t.includes("hospital")) {
    return <Stethoscope size={26} />;
  }
  if (t.includes("computer") || t.includes("coding") || t.includes("digital") || t.includes("research suite") || t.includes("software")) {
    return <Laptop size={26} />;
  }
  if (t.includes("kitchen") || t.includes("cookery") || t.includes("culinary") || t.includes("restaurant") || t.includes("sensory") || t.includes("food")) {
    return <Utensils size={26} />;
  }
  if (t.includes("hotel") || t.includes("suite") || t.includes("front office") || t.includes("guest") || t.includes("housekeeping")) {
    return <Hotel size={26} />;
  }
  if (t.includes("library") || t.includes("book") || t.includes("reading") || t.includes("documentation")) {
    return <BookOpen size={26} />;
  }
  if (t.includes("trading") || t.includes("analytics") || t.includes("fintech") || t.includes("finance") || t.includes("chart") || t.includes("market")) {
    return <TrendingUp size={26} />;
  }
  if (t.includes("adr") || t.includes("mediation") || t.includes("counsel") || t.includes("boardroom") || t.includes("collab") || t.includes("conference")) {
    return <Users size={26} />;
  }
  if (t.includes("security") || t.includes("forensic") || t.includes("cyber") || t.includes("defense") || t.includes("ballistics")) {
    return <ShieldCheck size={26} />;
  }
  if (t.includes("ai") || t.includes("iot") || t.includes("cloud") || t.includes("robotics") || t.includes("quantum")) {
    return <BrainCircuit size={26} />;
  }
  if (t.includes("incubator") || t.includes("studio") || t.includes("innovation") || t.includes("startup") || t.includes("project")) {
    return <Lightbulb size={26} />;
  }
  return <Building2 size={26} />;
}

interface LearningSpacesProps {
  title?: string;
  subtitle?: string;
  spaces?: LearningSpaceItem[];
  gallery?: GalleryShowcaseItem[];
  closingNote?: string;
}

export default function LearningSpaces({
  title = "Infrastructure Built for Experiential Learning",
  subtitle = "Students learn in advanced, purpose-built environments designed for practical instruction, mentorship, and applied experimentation:",
  spaces,
  gallery,
  closingNote,
}: LearningSpacesProps) {
  if (!spaces || spaces.length === 0) return null;
  const spaceItems = spaces;
  const galleryItems = gallery || [];

  // Department Showcase Carousel State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const totalSlides = Math.max(1, galleryItems.length - visibleCards + 1);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  // Auto-play loop (3.5s interval, pauses on hover)
  useEffect(() => {
    if (isHovered || totalSlides <= 1) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovered, totalSlides, nextSlide]);

  // Touch Swipe Handling
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="LearningSpaces"
      style={{
        background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
        padding: "90px 0",
        position: "relative",
        borderTop: "1px solid #E2E8F0",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>
        {/* Main Section Header */}
        <div style={{ textAlign: "center", marginBottom: 54 }}>
          <h2
            style={{
              fontSize: 44,
              fontWeight: 900,
              color: "#0A1F44",
              margin: "0 0 16px",
              lineHeight: 1.1,
              letterSpacing: "-1.2px",
            }}
          >
            {title}
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#475569",
              maxWidth: 850,
              margin: "0 auto",
              lineHeight: 1.7,
              fontWeight: 450,
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Labs / Learning Spaces Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
            marginBottom: 48,
          }}
        >
          {spaceItems.map((space, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (idx % 4) * 0.05 }}
              style={{
                background: "#FFFFFF",
                borderRadius: "16px",
                padding: "28px 24px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.02)",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
              className="space-card"
            >
              <div
                style={{
                  marginBottom: "16px",
                  background: "rgba(232, 135, 26, 0.08)",
                  width: "56px",
                  height: "56px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#E8871A",
                }}
              >
                {renderSpaceIcon(space)}
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#0A1F44", margin: "0 0 8px" }}>
                {space.title}
              </h3>
              <p style={{ fontSize: "13.5px", color: "#64748B", margin: 0, lineHeight: 1.5 }}>
                {space.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {closingNote && (
          <div
            style={{
              textAlign: "center",
              fontSize: 16,
              color: "#475569",
              fontWeight: 650,
              maxWidth: 900,
              margin: "0 auto 64px auto",
              lineHeight: 1.6,
            }}
          >
            {closingNote}
          </div>
        )}

        {/* Experiential Gallery Showcase Carousel */}
        {galleryItems.length > 0 && (
          <div style={{ marginTop: 64 }}>
            {/* Header + Controls Row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 16,
                marginBottom: 32,
              }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: 850,
                  color: "#0A1F44",
                  margin: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span style={{ width: 4, height: 22, background: "#E8871A", borderRadius: 2 }} />
                Department Showcase
              </h3>

              {totalSlides > 1 && (
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Previous showcase slide"
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: "50%",
                      background: "#FFFFFF",
                      border: "1px solid #CBD5E1",
                      color: "#0A1F44",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      boxShadow: "0 4px 12px rgba(10,31,68,0.06)",
                      transition: "all 0.3s ease",
                    }}
                    className="gallery-nav-btn"
                  >
                    <ChevronLeft size={20} strokeWidth={2} />
                  </button>

                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next showcase slide"
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: "50%",
                      background: "#FFFFFF",
                      border: "1px solid #CBD5E1",
                      color: "#0A1F44",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      boxShadow: "0 4px 12px rgba(10,31,68,0.06)",
                      transition: "all 0.3s ease",
                    }}
                    className="gallery-nav-btn"
                  >
                    <ChevronRight size={20} strokeWidth={2} />
                  </button>
                </div>
              )}
            </div>

            {/* Sliding Carousel Wrapper */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Sliding Window */}
              <div
                style={{ overflow: "hidden", userSelect: "none", touchAction: "pan-y", borderRadius: 20 }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div
                  style={{
                    display: "flex",
                    transition: "transform 500ms cubic-bezier(0.16, 1, 0.3, 1)",
                    transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
                  }}
                >
                  {galleryItems.map((img, idx) => (
                    <div
                      key={idx}
                      style={{
                        width: `${100 / visibleCards}%`,
                        flexShrink: 0,
                        padding: "0 14px",
                        boxSizing: "border-box",
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        style={{
                          background: "#FFFFFF",
                          borderRadius: "20px",
                          overflow: "hidden",
                          border: "1px solid #E2E8F0",
                          boxShadow: "0 8px 24px rgba(10, 31, 68, 0.04)",
                          display: "flex",
                          flexDirection: "column",
                          height: "100%",
                          minHeight: 380,
                          transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                        className="gallery-card"
                      >
                        {/* Image Wrap */}
                        <div style={{ overflow: "hidden", position: "relative", height: "230px", background: "#F1F5F9", flexShrink: 0 }}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={img.src}
                            alt={img.title}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              transition: "transform 0.5s ease",
                            }}
                            className="gallery-img"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                              if (e.currentTarget.parentElement) {
                                e.currentTarget.parentElement.innerHTML =
                                  '<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: #E2E8F0; color: #94A3B8; font-weight: 600; font-size: 14px;">[ Department Showcase Image ]</div>';
                              }
                            }}
                          />
                        </div>

                        {/* Text Container Below Image */}
                        <div style={{ padding: "22px 24px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-start", background: "#FFFFFF" }}>
                          <h4
                            style={{
                              color: "#0A1F44",
                              fontSize: "17.5px",
                              fontWeight: 800,
                              margin: "0 0 10px",
                              lineHeight: 1.35,
                            }}
                          >
                            {img.title}
                          </h4>
                          <p style={{ fontSize: "14px", color: "#64748B", margin: 0, lineHeight: 1.6, fontWeight: 400 }}>
                            {img.caption}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots Pagination */}
              {totalSlides > 1 && (
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8, marginTop: 32 }}>
                  {Array.from({ length: totalSlides }).map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => setCurrentIndex(dotIdx)}
                      aria-label={`Go to showcase slide ${dotIdx + 1}`}
                      style={{
                        width: currentIndex === dotIdx ? 28 : 8,
                        height: 8,
                        borderRadius: 999,
                        background: currentIndex === dotIdx ? "#E8871A" : "#CBD5E1",
                        border: "none",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        padding: 0,
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .space-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px rgba(10, 31, 68, 0.06);
          border-color: #E8871A !important;
        }
        .gallery-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 36px rgba(10, 31, 68, 0.08);
          border-color: #E8871A !important;
        }
        .gallery-card:hover .gallery-img {
          transform: scale(1.05);
        }
        .gallery-nav-btn:hover {
          background: #0A1F44 !important;
          border-color: #0A1F44 !important;
          color: #E8871A !important;
          box-shadow: 0 8px 20px rgba(10, 31, 68, 0.15) !important;
        }
      `}</style>
    </section>
  );
}
