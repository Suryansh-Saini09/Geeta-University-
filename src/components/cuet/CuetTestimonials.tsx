"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cuetTestimonials } from "@/data/cuetData";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function CuetTestimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 3;
  const totalPages = Math.ceil(cuetTestimonials.length / pageSize);

  const displayedItems = cuetTestimonials.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <section className="w-full bg-[#FFFFFF] py-14 sm:py-18 md:py-22 border-b border-[#E2E8F0]">
      <div className="gu-container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#E8871A]" />
            <span className="text-[12px] font-extrabold uppercase tracking-[3px] text-[#E8871A]">
              Proven Track Record
            </span>
            <span className="h-[2px] w-8 bg-[#E8871A]" />
          </div>
          <h2 className="font-serif text-[32px] sm:text-[40px] font-black text-[#0A1F44]">
            From Campus To Corporate Success
          </h2>
          <p className="mt-2 text-[16px] text-[#64748B]">
            Discover how students achieved career milestones and high-value corporate placements at Geeta University.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-[22px] border border-[#E2E8F0] bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E8871A]/40 hover:shadow-md"
            >
              <div>
                <div className="relative mx-auto mb-5 h-24 w-24 overflow-hidden rounded-full border-4 border-[#E8871A] shadow-md">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="96px"
                    className="object-cover object-center"
                  />
                </div>

                <h3 className="font-serif text-[20px] font-bold text-[#0A1F44]">
                  {item.name}
                </h3>
                <div className="font-bold text-[15px] text-[#06355F] mt-1 mb-3">
                  {item.package}
                </div>

                <p className="text-[14.5px] italic leading-relaxed text-[#475569]">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#CBD5E1] bg-white text-[#0A1F44] shadow-sm hover:bg-[#E8871A] hover:text-white transition-colors"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`h-2.5 rounded-full transition-all ${
                  currentPage === i ? "w-8 bg-[#E8871A]" : "w-2.5 bg-[#CBD5E1]"
                }`}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#CBD5E1] bg-white text-[#0A1F44] shadow-sm hover:bg-[#E8871A] hover:text-white transition-colors"
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
