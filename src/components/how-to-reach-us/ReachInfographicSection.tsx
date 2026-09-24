import React from "react";
import Image from "next/image";
import { Bus, Train, Plane, Clock, ShieldCheck } from "lucide-react";

export default function ReachInfographicSection() {
  return (
    <section className="w-full bg-[#F7F9FC] py-16 md:py-24 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Official Route Diagram Card */}
        <div className="relative mx-auto max-w-5xl rounded-3xl border border-slate-200/80 bg-white p-4 sm:p-8 shadow-xl shadow-slate-900/5 overflow-hidden">
          <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] max-h-[550px] flex items-center justify-center rounded-2xl overflow-hidden bg-slate-50 border border-slate-100">
            <Image
              src="/Info-G-of-GU-NEXT-EXPORT.webp"
              alt="How to Reach Geeta University Transport Diagram Map"
              fill
              className="object-contain p-2 sm:p-4 hover:scale-[1.01] transition-transform duration-300"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
