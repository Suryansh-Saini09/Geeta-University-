"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { libraryFaqsData } from "@/data/libraryData";

export default function LibraryFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full bg-white py-16 md:py-24 border-t border-slate-200">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-bold text-[#E8871A] mb-3">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Library FAQs</span>
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-[#0A1F44] sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600 font-sans">
            Quick answers to common questions about Central Library memberships, circulation rules, and digital resources.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {libraryFaqsData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? "border-[#E8871A] bg-amber-50/20 shadow-md"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <h3 className="font-serif text-lg font-bold text-[#0A1F44] pr-4">
                    {faq.question}
                  </h3>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${
                      isOpen ? "bg-[#E8871A] text-white rotate-180" : "bg-slate-100 text-[#0A1F44]"
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm text-slate-700 leading-relaxed font-sans border-t border-slate-100">
                    <p className="mt-3">{faq.answer}</p>
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
