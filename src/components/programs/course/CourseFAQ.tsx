"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { CourseFAQItem } from "@/data/programs/courses/types";

interface CourseFAQProps {
  faqs: CourseFAQItem[];
}

export default function CourseFAQ({ faqs }: CourseFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  if (!faqs || faqs.length === 0) return null;

  // Extract unique categories
  const categories = [
    "All",
    ...Array.from(new Set(faqs.map((f) => f.category).filter(Boolean))),
  ] as string[];

  const filteredFaqs =
    selectedCategory === "All"
      ? faqs
      : faqs.filter((f) => f.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F8FAFC] py-14 md:py-20 border-t border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-amber-600 font-semibold">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0A1F44] mt-1">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Find answers to common questions about eligibility, courses, practical learning, and learning spaces.
          </p>
        </div>

        {/* Category Filter Tabs */}
        {categories.length > 2 && (
          <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setOpenIndex(0);
                }}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#0A1F44] text-white shadow-md"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <h3 className="text-base md:text-lg font-serif font-bold text-[#0A1F44] pr-4">
                    {faq.question}
                  </h3>
                  <span className="shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[#0A1F44]">
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-amber-600" : ""
                      }`}
                    />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-slate-700 text-sm md:text-base leading-relaxed border-t border-slate-100 pt-4">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
