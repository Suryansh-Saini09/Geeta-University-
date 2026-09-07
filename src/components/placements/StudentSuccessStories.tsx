"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { placementStories } from "@/data/placements";

export default function StudentSuccessStories() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -380, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: "smooth" });
    }
  };

  return (
    <section id="stories" className="scroll-mt-[190px] bg-[#F7F9FC] py-20 lg:py-24 border-t border-[#E2E8F0] overflow-hidden">
      <div className="gu-container">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-4xl text-center md:mb-16">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#E8871A]" />
            <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#E8871A]">
              Alumni Milestones
            </span>
            <span className="h-px w-9 bg-[#E8871A]" />
          </div>

          <h2 className="font-serif text-[38px] font-black leading-[1.08] tracking-[-1.5px] text-[#0A1F44] sm:text-[46px] md:text-[52px]">
            From Campus to <span className="text-[#E8871A]">Corporate Success</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-[16px] leading-[1.8] text-[#64748B] md:text-[17px]">
            Real stories of ambition, dedicated mentorship, and outstanding placements at India&apos;s and the world&apos;s leading organizations.
          </p>
        </div>

        {/* Scrollable & Auto-Moving Container */}
        <div className="relative">
          {/* Navigation Arrow Left */}
          <button
            type="button"
            onClick={scrollLeft}
            aria-label="Previous stories"
            className="absolute -left-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#DCE2EB] bg-white text-[#0A1F44] shadow-[0_8px_25px_rgba(10,31,68,0.10)] transition-all duration-300 hover:border-[#0A1F44] hover:bg-[#0A1F44] hover:text-[#E8871A] md:flex"
          >
            <ChevronLeft size={21} strokeWidth={1.8} />
          </button>

          {/* Navigation Arrow Right */}
          <button
            type="button"
            onClick={scrollRight}
            aria-label="Next stories"
            className="absolute -right-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#DCE2EB] bg-white text-[#0A1F44] shadow-[0_8px_25px_rgba(10,31,68,0.10)] transition-all duration-300 hover:border-[#0A1F44] hover:bg-[#0A1F44] hover:text-[#E8871A] md:flex"
          >
            <ChevronRight size={21} strokeWidth={1.8} />
          </button>

          {/* Cards Track with Smooth Marquee & Scroll */}
          <div
            ref={scrollContainerRef}
            className="alumni-stories-container flex overflow-x-auto overflow-y-hidden py-4 gap-6 cursor-grab select-none scrollbar-none"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {[0, 1, 2].map((setIndex) => (
              <div
                key={setIndex}
                className="alumni-stories-track flex gap-6 shrink-0"
              >
                {placementStories.map((story) => (
                  <div
                    key={`${setIndex}-${story.id}`}
                    className="w-[340px] sm:w-[380px] shrink-0"
                  >
                    <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E8871A]/40 hover:shadow-xl">
                      {/* Top Accent Strip */}
                      <div className="absolute left-0 top-0 h-1.5 w-full bg-[#0A1F44] group-hover:bg-[#E8871A] transition-colors" />

                      <div>
                        <div className="flex items-center gap-4">
                          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[16px] border-2 border-[#E8871A] bg-slate-100 shadow-sm">
                            <Image
                              src={story.image}
                              alt={story.name}
                              fill
                              sizes="80px"
                              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>

                          <div className="min-w-0">
                            <h3 className="font-serif text-[20px] font-bold text-[#0A1F44]">
                              {story.name}
                            </h3>
                            <div className="mt-1.5 inline-flex items-center rounded-full bg-[#FFF3E2] px-3 py-0.5 text-[11px] font-bold uppercase tracking-wide text-[#D97706]">
                              Package · {story.package}
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 flex flex-col">
                          <span className="font-serif text-[48px] font-bold leading-none text-[#E8871A]/20">
                            “
                          </span>
                          <p className="mt-[-8px] text-[14.5px] leading-[1.7] text-[#536B83]">
                            {story.quote}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 border-t border-slate-100 pt-4 flex items-center justify-between text-[12px] text-[#64748B]">
                        <span className="font-semibold text-[#07589F]">Geeta University</span>
                        <span className="text-[#E8871A] font-bold">Verified Placement ★</span>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .alumni-stories-container::-webkit-scrollbar {
          display: none;
        }
        @keyframes storiesMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% - 24px));
          }
        }
        .alumni-stories-track {
          animation: storiesMarquee 34s linear infinite;
        }
        .alumni-stories-container:hover .alumni-stories-track {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
