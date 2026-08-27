"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Sparkles, User, GraduationCap } from "lucide-react";
import type { EdgeMentorsSection, EdgeMentor } from "@/data/edge/types";

interface EdgeMentorsProps {
  section: EdgeMentorsSection;
}

export default function EdgeMentors({ section }: EdgeMentorsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedMentor, setSelectedMentor] = useState<EdgeMentor | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white py-20 lg:py-28 relative overflow-hidden border-t border-slate-200">
      <div className="gu-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            {section.eyebrow && (
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#E8871A]/10 px-4 py-1 border border-[#E8871A]/20">
                <Sparkles size={14} className="text-[#E8871A]" />
                <span className="text-xs font-bold uppercase tracking-[2px] text-[#E8871A]">
                  {section.eyebrow}
                </span>
              </div>
            )}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0A1F44]">
              {section.title}
            </h2>
            {section.subtitle && (
              <p className="mt-2 text-base md:text-lg text-slate-600 font-medium">
                {section.subtitle}
              </p>
            )}
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3 self-end">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-[#06355F] transition hover:bg-[#06355F] hover:text-white shadow-sm"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-[#06355F] transition hover:bg-[#06355F] hover:text-white shadow-sm"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Mentors Track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {section.mentors.map((mentor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="w-[280px] sm:w-[320px] shrink-0 snap-start flex flex-col rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all group"
            >
              {/* Mentor Image */}
              <div className="relative w-full aspect-[4/4.5] overflow-hidden bg-slate-200">
                {mentor.image ? (
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-slate-100 text-slate-400">
                    <User size={64} />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* Info Block */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#0A1F44]">
                    {mentor.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-[#E8871A] uppercase tracking-wider">
                    {mentor.designation}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {mentor.description}
                  </p>
                </div>

                {mentor.fullBio && (
                  <button
                    type="button"
                    onClick={() => setSelectedMentor(mentor)}
                    className="mt-4 self-start text-xs font-bold text-[#06355F] hover:text-[#E8871A] transition-colors"
                  >
                    View Full Profile →
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mentor Bio Modal */}
      <AnimatePresence>
        {selectedMentor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMentor(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 w-full max-w-xl rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-100"
            >
              <button
                type="button"
                onClick={() => setSelectedMentor(null)}
                className="absolute top-4 right-4 rounded-full p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-4 mb-6">
                {selectedMentor.image && (
                  <div className="h-16 w-16 rounded-full overflow-hidden shrink-0 border-2 border-[#E8871A]">
                    <img
                      src={selectedMentor.image}
                      alt={selectedMentor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#0A1F44]">
                    {selectedMentor.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#E8871A]">
                    {selectedMentor.designation}
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm leading-relaxed text-slate-600 max-h-[60vh] overflow-y-auto pr-2">
                <p>{selectedMentor.description}</p>
                {selectedMentor.fullBio && (
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <h4 className="font-bold text-slate-800 mb-2">Background & Expertise</h4>
                    <p>{selectedMentor.fullBio}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
