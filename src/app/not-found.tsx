import Link from "next/link";
import { ArrowLeft, Home, Search, Compass, BookOpen, GraduationCap, PhoneCall } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-[75vh] w-full flex items-center justify-center bg-[#0A1F44] text-white overflow-hidden py-16 px-4">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#1A3A6B]/50 via-[#E8871A]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#E8871A]/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-10 left-10 w-[250px] h-[250px] bg-[#2C5282]/20 rounded-full blur-2xl pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative z-10 max-w-3xl w-full text-center flex flex-col items-center">
        {/* Animated 404 Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#E8871A] text-sm font-semibold mb-6 shadow-inner">
          <Compass className="w-4 h-4 animate-spin-slow" />
          <span>Error 404 &bull; Page Not Found</span>
        </div>

        {/* Big 404 Number Display */}
        <h1 className="text-8xl sm:text-9xl font-extrabold tracking-tight font-serif text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#E8871A]/80 drop-shadow-sm select-none">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-2 text-2xl sm:text-4xl font-bold font-serif text-white tracking-wide">
          Oops! Looks Like You&apos;ve Taken a Wrong Turn
        </h2>

        <p className="mt-4 text-slate-300 max-w-lg text-base sm:text-lg leading-relaxed font-sans">
          The page you are looking for might have been moved, renamed, or no longer exists. Let&apos;s guide you back to safety.
        </p>

        {/* Primary CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 w-full">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#E8871A] to-[#F5A623] text-white font-semibold text-base shadow-lg shadow-[#E8871A]/25 hover:shadow-[#E8871A]/40 hover:scale-[1.02] transition-all duration-200"
          >
            <Home className="w-5 h-5" />
            Back to Homepage
          </Link>

          <Link
            href="/programs-after-12th"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-base hover:bg-white/20 hover:scale-[1.02] transition-all duration-200"
          >
            <GraduationCap className="w-5 h-5 text-[#E8871A]" />
            Explore Programs
          </Link>
        </div>

        {/* Helpful Quick Links Grid */}
        <div className="mt-12 w-full pt-8 border-t border-white/10">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-4">
            Popular Destinations
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
            <Link
              href="/programs/geeta-institute-of-pharmacy"
              className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#E8871A]/40 transition-all group flex flex-col justify-between"
            >
              <div className="text-[#E8871A] group-hover:scale-110 transition-transform w-fit">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="mt-2 text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white">
                Pharmacy School
              </span>
            </Link>

            <Link
              href="/placements"
              className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#E8871A]/40 transition-all group flex flex-col justify-between"
            >
              <div className="text-[#E8871A] group-hover:scale-110 transition-transform w-fit">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="mt-2 text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white">
                Placements
              </span>
            </Link>

            <Link
              href="/scholarship"
              className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#E8871A]/40 transition-all group flex flex-col justify-between"
            >
              <div className="text-[#E8871A] group-hover:scale-110 transition-transform w-fit">
                <Search className="w-5 h-5" />
              </div>
              <span className="mt-2 text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white">
                Scholarships
              </span>
            </Link>

            <Link
              href="/contact-us"
              className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#E8871A]/40 transition-all group flex flex-col justify-between"
            >
              <div className="text-[#E8871A] group-hover:scale-110 transition-transform w-fit">
                <PhoneCall className="w-5 h-5" />
              </div>
              <span className="mt-2 text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white">
                Contact Us
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
