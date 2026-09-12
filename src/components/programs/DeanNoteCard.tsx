"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Quote, Sparkles, X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { ProgramPageData } from "@/data/programs/types";

interface DeanNoteCardProps {
  dean?: ProgramPageData["dean"];
  schoolName?: string;
}

export default function DeanNoteCard({ dean, schoolName }: DeanNoteCardProps) {
  const [showModal, setShowModal] = useState(false);

  if (!dean || !dean.name || !dean.message) return null;

  const previewLength = 175;
  const isLongMessage = dean.message.length > previewLength;
  const previewText = isLongMessage
    ? `${dean.message.slice(0, previewLength).trim()}...`
    : dean.message;

  return (
    <>
      <div className="mt-10 mb-8 overflow-hidden rounded-2xl border border-slate-200/90 bg-[#F8FAFC] p-5 sm:p-6 shadow-[0_4px_20px_rgba(10,31,68,0.04)] transition-all duration-300 hover:border-[#E8871A]/50 hover:shadow-[0_12px_32px_rgba(10,31,68,0.08)]">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
          {/* Dean Photo */}
          {dean.image && (
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-2 border-white bg-[#0A1F44] shadow-md sm:h-24 sm:w-24">
              <Image
                src={dean.image}
                alt={dean.name}
                fill
                sizes="96px"
                className="object-cover object-top"
                style={{ objectPosition: "top center" }}
              />
            </div>
          )}

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#E8871A]" />
                <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#E8871A]">
                  Head of School Note
                </span>
              </div>
              <Quote className="h-5 w-5 text-[#E8871A]/40" />
            </div>

            <h4 className="mt-1 font-serif text-[21px] font-bold text-[#0A1F44] leading-snug">
              {dean.name}
            </h4>

            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
              {dean.designation}
            </p>

            {/* Message preview */}
            <p className="mt-2.5 font-sans text-[14px] leading-relaxed text-slate-600 line-clamp-2 italic">
              &ldquo;{previewText}&rdquo;
            </p>

            {/* Action Bar */}
            <div className="mt-4 pt-3.5 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-3">
              <span className="text-[12px] font-medium text-slate-400">
                {dean.schoolName || "Academic Leadership Statement"}
              </span>

              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="group/btn inline-flex items-center gap-2.5 rounded-xl bg-[#0A1F44] px-4.5 py-2 text-xs font-bold text-white shadow-sm transition-all duration-300 hover:bg-[#E8871A] hover:shadow-[0_4px_16px_rgba(232,135,26,0.3)] hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                style={{ color: "#ffffff" }}
              >
                <span className="text-white font-bold" style={{ color: "#ffffff" }}>Read More</span>
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 transition-transform duration-200 group-hover/btn:translate-x-0.5">
                  <ArrowRight className="h-3 w-3 text-white" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full Message Modal Popup */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors cursor-pointer"
                aria-label="Close message"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-start gap-4 sm:gap-6 mb-6">
                {dean.image && (
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-[#0A1F44] shadow-md">
                    <Image
                      src={dean.image}
                      alt={dean.name}
                      fill
                      sizes="80px"
                      className="object-cover object-top"
                      style={{ objectPosition: "top center" }}
                    />
                  </div>
                )}
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E8871A]/10 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#E8871A]">
                    <Sparkles className="h-3 w-3" />
                    Leadership Note
                  </span>
                  <h3 className="mt-2 font-serif text-2xl font-bold text-[#0A1F44]">
                    {dean.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {dean.designation}
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-[#F8FAFC] p-5 sm:p-6 border border-slate-100 text-slate-700 font-sans text-[15px] leading-relaxed italic">
                <Quote className="h-6 w-6 text-[#E8871A] mb-2" />
                <p>&ldquo;{dean.message}&rdquo;</p>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="rounded-xl bg-[#0A1F44] px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-[#E8871A] cursor-pointer"
                  style={{ color: "#ffffff" }}
                >
                  <span className="text-white" style={{ color: "#ffffff" }}>Close Message</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
