"use client";

import React from "react";
import {
  Zap,
  Network,
  Repeat,
  Clock,
  CheckSquare,
  Users,
  UserCheck,
} from "lucide-react";
import { pedagogicalMethods } from "@/data/teachingLearningPractices";

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Network,
  Repeat,
  Clock,
  CheckSquare,
  Users,
  UserCheck,
};

export default function TeachingPedagogyGrid() {
  return (
    <section id="pedagogy-grid" className="w-full bg-[#F7F9FC] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <h2 className="font-serif text-3xl font-extrabold text-[#0A1F44] sm:text-4xl md:text-5xl">
            Innovative <span className="text-[#E8871A]">Pedagogical Practices</span>
          </h2>
        </div>

        {/* Masonry / Natural Flow Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {pedagogicalMethods.map((method) => {
            const IconComponent = iconMap[method.icon];

            return (
              <div
                key={method.id}
                className="break-inside-avoid group overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E8871A]/40 hover:shadow-xl hover:shadow-slate-200/50"
              >
                {/* Header with Icon & Title */}
                <div className="flex items-start gap-3.5 mb-3.5">
                  {IconComponent && (
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#E8871A] transition-colors duration-300 group-hover:bg-[#E8871A] group-hover:text-white">
                      <IconComponent className="h-5 w-5" />
                    </div>
                  )}
                  <h3 className="font-serif text-xl font-bold leading-snug pt-1">
                    <span className="text-[#E8871A]">{method.headingOrange}</span>{" "}
                    <span className="text-[#0A1F44]">{method.headingBlack}</span>
                  </h3>
                </div>

                {/* Optional Image */}
                {method.image && (
                  <div className="mb-4 overflow-hidden rounded-xl border border-slate-100">
                    <img
                      src={method.image}
                      alt={method.title}
                      className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  {method.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
