"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Award, CheckCircle2, Briefcase } from "lucide-react";
import { LEADERSHIP_PROFILE } from "@/data/internationalAdmissions";

export default function LeadershipSpotlightSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-20 bg-white border-y border-[#E2E8F0]">
      <div className="gu-container">
        <div className="text-center mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#E8871A]">
            Leadership Excellence
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0A1F44] font-serif mt-2">
            Steering International Admissions
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] p-6 md:p-10 shadow-lg relative overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Image Column */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="relative h-64 w-56 rounded-2xl overflow-hidden shadow-md border-4 border-white">
                <Image
                  src={LEADERSHIP_PROFILE.image}
                  alt={LEADERSHIP_PROFILE.name}
                  fill
                  sizes="(max-width: 768px) 224px, 224px"
                  className="object-cover object-top"
                />
              </div>
              <div className="mt-4 flex gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold text-[#0A1F44]">
                  <Briefcase size={12} className="text-[#E8871A]" />
                  {LEADERSHIP_PROFILE.experienceYears}+ Yrs Education
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-xs font-bold text-[#E8871A]">
                  <Award size={12} />
                  {LEADERSHIP_PROFILE.industryYears}+ Yrs Industry
                </span>
              </div>
            </div>

            {/* Profile Info */}
            <div className="md:col-span-8">
              <h3 className="text-2xl md:text-3xl font-black text-[#0A1F44] font-serif">
                {LEADERSHIP_PROFILE.name}
              </h3>
              <p className="text-sm font-bold text-[#E8871A] uppercase tracking-wider mt-1">
                {LEADERSHIP_PROFILE.designation}
              </p>

              <div className="w-full border-b border-[#E2E8F0] my-4" />

              <p className="text-[#475569] text-base leading-relaxed">
                {LEADERSHIP_PROFILE.bioParagraphs[0]}
              </p>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden space-y-4 mt-4 text-[#475569] text-base leading-relaxed"
                  >
                    <p>{LEADERSHIP_PROFILE.bioParagraphs[1]}</p>

                    <div className="my-4 rounded-2xl bg-white border border-[#E2E8F0] p-5 shadow-xs">
                      <h4 className="font-bold text-[#0A1F44] text-sm uppercase tracking-wider mb-3">
                        Core Leadership Strengths:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {LEADERSHIP_PROFILE.strengths.map((strength, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs font-medium text-[#334155]">
                            <CheckCircle2 size={16} className="text-[#E8871A] flex-shrink-0" />
                            <span>{strength}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <p>{LEADERSHIP_PROFILE.bioParagraphs[2]}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0A1F44] hover:text-[#E8871A] transition-colors"
              >
                {isExpanded ? (
                  <>
                    Show Less <ChevronUp size={18} />
                  </>
                ) : (
                  <>
                    Read Full Leadership Profile <ChevronDown size={18} />
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
