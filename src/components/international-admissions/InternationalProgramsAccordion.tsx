"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Search,
  GraduationCap,
  ArrowUpRight,
  Sparkles,
  Maximize2,
  Minimize2,
  BookOpen,
} from "lucide-react";
import { INTERNATIONAL_PROGRAM_CATEGORIES } from "@/data/internationalAdmissions";

// Quick filter categories
const FILTER_TABS = [
  { id: "all", label: "All Schools" },
  { id: "tech", label: "Engineering & IT", categories: ["Computer Science & Engineering", "Computer Applications"] },
  { id: "management", label: "Management & Commerce", categories: ["Business Management", "Commerce"] },
  { id: "health", label: "Pharmacy & Health", categories: ["Pharmacy", "Nutrition & Dietetics", "Nursing*"] },
  { id: "law-humanities", label: "Law & Humanities", categories: ["Law", "Humanities & Social Sciences", "Hospitality & Hotel Management"] },
  { id: "science", label: "Sciences & Agriculture", categories: ["Agricultural Sciences", "Forensic Science"] },
];

export default function InternationalProgramsAccordion() {
  // All accordions collapsed by default for a clean, uniform grid
  const [openCategories, setOpenCategories] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const toggleCategory = (index: number) => {
    if (openCategories.includes(index)) {
      setOpenCategories(openCategories.filter((i) => i !== index));
    } else {
      setOpenCategories([...openCategories, index]);
    }
  };

  const expandAll = () => {
    setOpenCategories(INTERNATIONAL_PROGRAM_CATEGORIES.map((_, i) => i));
  };

  const collapseAll = () => {
    setOpenCategories([]);
  };

  // Helper to determine program level badge
  const getLevelBadge = (title: string) => {
    if (title.startsWith("Ph.D") || title.includes("Ph.D")) return { label: "Ph.D", bg: "bg-[#0A1F44] text-white" };
    if (title.startsWith("M.Tech") || title.startsWith("MBA") || title.startsWith("M.Sc") || title.startsWith("M.Com") || title.startsWith("MCA") || title.startsWith("M.Pharm") || title.startsWith("M.A") || title.includes("Master"))
      return { label: "PG", bg: "bg-blue-100 text-[#0A1F44]" };
    if (title.startsWith("Diploma") || title.startsWith("D.Pharm") || title.startsWith("GNM"))
      return { label: "Diploma", bg: "bg-emerald-100 text-emerald-800" };
    return { label: "UG", bg: "bg-orange-100 text-[#E8871A]" };
  };

  // Filtering logic
  const filteredCategories = useMemo(() => {
    return INTERNATIONAL_PROGRAM_CATEGORIES.map((cat, index) => {
      const originalIndex = index;
      const matchingPrograms = cat.programs.filter((prog) =>
        prog.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      // Check tab filter
      const currentTabObj = FILTER_TABS.find((t) => t.id === activeTab);
      const matchesTab =
        activeTab === "all" ||
        (currentTabObj?.categories && currentTabObj.categories.includes(cat.categoryName));

      const matchesSearch =
        searchTerm === "" ||
        cat.categoryName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        matchingPrograms.length > 0;

      return {
        ...cat,
        originalIndex,
        matchingPrograms: searchTerm ? matchingPrograms : cat.programs,
        isVisible: matchesTab && matchesSearch,
      };
    }).filter((cat) => cat.isVisible);
  }, [searchTerm, activeTab]);

  return (
    <section className="py-20 bg-[#F7F9FC]" id="programs-offered">
      <div className="gu-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#E8871A] inline-flex items-center gap-1.5 bg-orange-50 border border-orange-200 px-3.5 py-1 rounded-full">
            <Sparkles size={14} /> Academic Catalog
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#0A1F44] font-serif mt-3">
            Programs Offered
          </h2>
          <p className="text-[#64748B] text-base mt-2 leading-relaxed">
            Over 70+ Globally Industry-Aligned Diploma, Undergraduate, Postgraduate, and Doctoral Programs across 12 Specialized Schools.
          </p>

          {/* Search Box & Controls */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1 w-full">
              <input
                type="text"
                placeholder="Search programs (e.g. B.Tech, MBA, Pharmacy, Cyber Security)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-2xl bg-white border border-[#E2E8F0] px-5 py-4 pl-12 text-sm text-[#0A1F44] shadow-sm focus:border-[#E8871A] focus:outline-none focus:ring-2 focus:ring-[#E8871A]/20 transition-all"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]" size={18} />
            </div>

            {/* Expand / Collapse Control Buttons */}
            <div className="flex gap-2 flex-shrink-0">
              <button
                onClick={expandAll}
                className="inline-flex items-center gap-1.5 rounded-xl border border-[#E2E8F0] bg-white px-4 py-3.5 text-xs font-bold text-[#0A1F44] shadow-xs hover:border-[#E8871A] hover:text-[#E8871A] transition-all"
                title="Expand All Accordions"
              >
                <Maximize2 size={14} /> Expand All
              </button>
              <button
                onClick={collapseAll}
                className="inline-flex items-center gap-1.5 rounded-xl border border-[#E2E8F0] bg-white px-4 py-3.5 text-xs font-bold text-[#0A1F44] shadow-xs hover:border-[#E8871A] hover:text-[#E8871A] transition-all"
                title="Collapse All Accordions"
              >
                <Minimize2 size={14} /> Collapse All
              </button>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#0A1F44] text-[#E8871A] shadow-md scale-105"
                    : "bg-white text-[#64748B] border border-[#E2E8F0] hover:text-[#0A1F44] hover:bg-slate-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start max-w-6xl mx-auto">
          {filteredCategories.map((school) => {
            const isOpen = openCategories.includes(school.originalIndex) || searchTerm.length > 0;
            const programsToDisplay = school.matchingPrograms;

            return (
              <motion.div
                key={school.originalIndex}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl bg-white border border-[#E2E8F0] shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:border-[#E8871A]/40"
              >
                {/* School Header Button */}
                <button
                  onClick={() => toggleCategory(school.originalIndex)}
                  className="w-full p-5 flex items-center justify-between text-left bg-white hover:bg-slate-50/80 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="h-11 w-11 rounded-xl bg-[#0A1F44] text-[#E8871A] flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-sm">
                      <GraduationCap size={22} />
                    </div>
                    <div>
                      <h3 className="font-black text-[#0A1F44] text-base md:text-lg font-serif">
                        {school.categoryName}
                      </h3>
                      <span className="text-xs text-[#64748B] font-semibold flex items-center gap-1.5 mt-0.5">
                        <BookOpen size={12} className="text-[#E8871A]" />
                        {programsToDisplay.length} Programs Available
                      </span>
                    </div>
                  </div>

                  <div
                    className={`h-9 w-9 rounded-full bg-slate-100 flex items-center justify-center text-[#0A1F44] transition-all duration-300 ${
                      isOpen ? "rotate-180 bg-[#E8871A] text-white" : "group-hover:bg-slate-200"
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {/* Programs Dropdown Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="border-t border-[#E2E8F0] p-5 bg-slate-50/70 space-y-3"
                    >
                      <div className="space-y-2">
                        {programsToDisplay.map((prog, pIdx) => {
                          const badge = getLevelBadge(prog.title);
                          return (
                            <div
                              key={pIdx}
                              className="flex items-center justify-between gap-3 text-sm font-semibold text-[#1E293B] p-2.5 rounded-xl bg-white border border-slate-200/80 hover:border-[#E8871A]/50 hover:shadow-xs transition-all"
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <span className={`text-[10px] font-black px-2 py-0.5 rounded-md flex-shrink-0 uppercase ${badge.bg}`}>
                                  {badge.label}
                                </span>
                                {prog.href ? (
                                  <Link
                                    href={prog.href}
                                    className="text-[#0A1F44] hover:text-[#E8871A] font-semibold truncate transition-colors flex items-center gap-1"
                                  >
                                    <span className="truncate">{prog.title}</span>
                                    <ArrowUpRight size={14} className="text-[#E8871A] flex-shrink-0" />
                                  </Link>
                                ) : (
                                  <span className="truncate text-[#334155]">{prog.title}</span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="pt-3 border-t border-slate-200 flex justify-between items-center">
                        <Link
                          href={school.href}
                          className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#E8871A] hover:text-[#0A1F44] transition-colors"
                        >
                          View School Curriculum
                          <ArrowUpRight size={14} />
                        </Link>
                        <span className="text-[11px] font-bold text-[#94A3B8]">
                          {programsToDisplay.length} Degrees
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 bg-white rounded-3xl border border-[#E2E8F0] max-w-xl mx-auto">
            <GraduationCap size={40} className="mx-auto text-[#94A3B8] mb-3" />
            <h4 className="text-lg font-bold text-[#0A1F44]">No Matching Programs Found</h4>
            <p className="text-xs text-[#64748B] mt-1">
              Try adjusting your search query or switching category filter tabs.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setActiveTab("all");
              }}
              className="mt-4 text-xs font-bold text-[#E8871A] underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
