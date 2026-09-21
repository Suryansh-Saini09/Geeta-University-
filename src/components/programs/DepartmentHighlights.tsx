"use client";

import React from "react";
import { motion } from "framer-motion";
import type { DepartmentHighlightItem } from "@/data/programs/types";
import { useFiniteCarousel } from "@/hooks/useFiniteCarousel";

interface DepartmentHighlightsProps {
  title?: string;
  subtitle?: string;
  highlights?: DepartmentHighlightItem[];
  imageOnly?: boolean;
}

export default function DepartmentHighlights({
  title = "Where Learning Meets Achievement",
  subtitle,
  highlights,
}: DepartmentHighlightsProps) {
  const items = highlights || [];
  const isSingle = items.length === 1;

  const {
    containerRef,
    handleScroll,
    handleMouseDown,
    handleMouseLeave,
    handleMouseEnter,
    handleMouseUp,
    handleMouseMove,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useFiniteCarousel({
    totalItems: items.length,
    autoplayInterval: 3000,
    enableAutoplay: true,
  });

  if (items.length === 0) return null;

  return (
    <section
      id="DepartmentHighlights"
      style={{
        padding: "52px 0 48px",
        background: "#FDF1D6",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Background Elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#E8871A]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 h-[500px] w-[500px] rounded-full bg-[#0A1F44]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2 className="font-serif text-3xl font-bold leading-tight text-[#0A1F44] sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#E8871A]" />
          {subtitle && (
            <p className="mt-4 text-[15px] leading-relaxed text-[#4A5568] sm:text-base">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Single Item: Centered Display */}
        {isSingle ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center py-4"
          >
            <div className="group relative h-[220px] w-[340px] sm:h-[260px] sm:w-[400px] md:h-[280px] md:w-[460px] overflow-hidden rounded-3xl border border-[#0A1F44]/10 bg-[#0A1F44] shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-default">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={items[0].image}
                alt={items[0].title || "Department Highlight"}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                onError={(e) => {
                  const t = e.currentTarget;
                  t.style.display = "none";
                  if (t.parentElement) {
                    const fallback = document.createElement("div");
                    fallback.style.cssText =
                      "width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#0A1F44;color:#FFFFFF;font-weight:700;padding:20px;text-align:center;";
                    fallback.textContent = items[0].title || "Department Highlight";
                    t.parentElement.appendChild(fallback);
                  }
                }}
              />
            </div>
          </motion.div>
        ) : (
          /* Multiple Items: Interactive Carousel Track */
          <div className="relative">
            <div
              ref={containerRef}
              onScroll={handleScroll}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="flex w-full gap-6 overflow-x-auto pb-4 pt-2 scroll-smooth cursor-grab active:cursor-grabbing select-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative flex h-[210px] w-[290px] sm:h-[240px] sm:w-[340px] md:h-[250px] md:w-[380px] shrink-0 overflow-hidden rounded-3xl border border-[#0A1F44]/10 bg-[#0A1F44] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-default"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title || `Highlight ${idx + 1}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                    onError={(e) => {
                      const t = e.currentTarget;
                      t.style.display = "none";
                      if (t.parentElement) {
                        const fallback = document.createElement("div");
                        fallback.style.cssText =
                          "width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#0A1F44;color:#FFFFFF;font-weight:700;padding:20px;text-align:center;";
                        fallback.textContent = item.title || "Department Highlight";
                        t.parentElement.appendChild(fallback);
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
