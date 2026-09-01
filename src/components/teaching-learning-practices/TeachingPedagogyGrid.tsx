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
  CheckCircle2,
} from "lucide-react";
import { pedagogicalMethods, PedagogicalMethod } from "@/data/teachingLearningPractices";

export default function TeachingPedagogyGrid() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Zap":
        return <Zap className="h-6 w-6 text-[#E8871A]" />;
      case "Network":
        return <Network className="h-6 w-6 text-[#E8871A]" />;
      case "Repeat":
        return <Repeat className="h-6 w-6 text-[#E8871A]" />;
      case "Clock":
        return <Clock className="h-6 w-6 text-[#E8871A]" />;
      case "CheckSquare":
        return <CheckSquare className="h-6 w-6 text-[#E8871A]" />;
      case "Users":
        return <Users className="h-6 w-6 text-[#E8871A]" />;
      case "UserCheck":
        return <UserCheck className="h-6 w-6 text-[#E8871A]" />;
      default:
        return <Zap className="h-6 w-6 text-[#E8871A]" />;
    }
  };

  return (
    <section id="pedagogy-grid" className="w-full bg-[#F7F9FC] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#0A1F44]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0A1F44]">
            Modern Learning Frameworks
          </div>
          <h2 className="font-serif text-3xl font-extrabold text-[#0A1F44] sm:text-4xl md:text-5xl">
            Innovative <span className="text-[#E8871A]">Pedagogical Practices</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Transforming education through active engagement, technology integration, and student-centered learning loops.
          </p>
        </div>

        {/* Grid of Methods */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pedagogicalMethods.map((method) => (
            <div
              key={method.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E8871A]/40 hover:shadow-xl"
            >
              <div>
                {/* Header Icon + Number */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 border border-amber-100 transition-colors group-hover:bg-[#0A1F44]">
                    {getIcon(method.icon)}
                  </div>
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">
                    GU Methodology
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl font-bold leading-tight">
                  <span className="text-[#E8871A]">{method.headingOrange}</span>{" "}
                  <span className="text-[#0A1F44]">{method.headingBlack}</span>
                </h3>

                {/* Optional Image */}
                {method.image && (
                  <div className="my-4 overflow-hidden rounded-xl border border-slate-100">
                    <img
                      src={method.image}
                      alt={method.title}
                      className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Summary */}
                <p className="mt-3 text-sm font-semibold text-[#0A1F44] italic">
                  "{method.summary}"
                </p>

                {/* Description */}
                <p className="mt-3 text-sm text-slate-600 leading-relaxed font-sans">
                  {method.description}
                </p>

                {/* Divider */}
                <div className="my-5 h-px w-full bg-slate-100" />

                {/* Highlights */}
                <ul className="space-y-2">
                  {method.highlights.map((h, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-xs font-medium text-slate-700 font-sans"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#E8871A] shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 text-xs font-bold text-[#0A1F44] uppercase tracking-wider">
                Geeta Academic Standard
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
