import React from "react";
import Link from "next/link";
import { MapPin, Navigation } from "lucide-react";

export default function ReachHero() {
  return (
    <section className="relative w-full bg-[#0A1F44] text-white py-16 md:py-24 overflow-hidden border-b-4 border-[#E8871A]">
      {/* Background Decorative Lighting */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-[#1A3A6B]/60 via-[#E8871A]/10 to-transparent blur-3xl pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '28px 28px'
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Breadcrumb */}
        <nav className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-slate-300 border border-white/10 backdrop-blur-md">
          <Link href="/" className="hover:text-[#E8871A] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#E8871A]">How to Reach Us</span>
        </nav>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E8871A] mb-3">
          <Navigation className="w-4 h-4" />
          <span>Campus Directions & Travel Guide</span>
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl">
          How to Reach <span className="text-[#E8871A]">Geeta University</span>
        </h1>

        <p className="mt-4 text-slate-300 max-w-2xl text-base sm:text-lg leading-relaxed font-sans">
          Conveniently located on NH-71A in Panipat, Haryana (Delhi NCR), Geeta University is well-connected by road, rail, and air networks across North India.
        </p>

        {/* Quick Location Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-medium text-slate-200">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <MapPin className="w-4 h-4 text-[#E8871A]" />
            <span>NH-71A, Naultha, Gohana Road, Panipat</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <span>📍 ~85 km from IGI Airport Delhi</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <span>🚉 ~15 km from Panipat Junction</span>
          </div>
        </div>
      </div>
    </section>
  );
}
