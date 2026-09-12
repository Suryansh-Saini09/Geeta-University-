import React from "react";
import Image from "next/image";
import { Bus, Train, Plane, Clock, ShieldCheck } from "lucide-react";

export default function ReachInfographicSection() {
  return (
    <section className="w-full bg-[#F7F9FC] py-16 md:py-24 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Title */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-[#0A1F44]/5 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0A1F44]">
            Visual Route Guide
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[#0A1F44] sm:text-4xl">
            Campus Distance & Travel Duration
          </h2>
          <p className="mt-3 text-base text-slate-600 font-sans">
            Clear time estimates and route connections from key North Indian transport hubs directly to Geeta University campus.
          </p>
        </div>

        {/* Official Route Diagram Card */}
        <div className="relative mx-auto max-w-5xl rounded-3xl border border-slate-200/80 bg-white p-4 sm:p-8 shadow-xl shadow-slate-900/5 overflow-hidden">
          <div className="absolute top-0 right-0 rounded-bl-2xl bg-[#0A1F44] px-4 py-1.5 text-xs font-bold text-[#E8871A]">
            Official Route Map
          </div>

          <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] max-h-[550px] flex items-center justify-center rounded-2xl overflow-hidden bg-slate-50 border border-slate-100">
            <Image
              src="/how-to-reach-us.png"
              alt="How to Reach Geeta University Transport Diagram Map"
              fill
              className="object-contain p-2 sm:p-4 hover:scale-[1.01] transition-transform duration-300"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>
        </div>

        {/* Quick Travel Duration Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Bus Card */}
          <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-md hover:border-[#E8871A]/50 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-[#E8871A]">
                  <Bus className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#0A1F44]">By Bus Route</h3>
                  <span className="text-xs text-slate-500 font-medium">ISBT Kashmiri Gate / Delhi</span>
                </div>
              </div>
              
              <ul className="mt-4 space-y-2 text-xs text-slate-600 font-sans">
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#E8871A]" />
                  <span><strong>Delhi ➔ Panipat Bus Stand:</strong> ~2 Hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#E8871A]" />
                  <span><strong>Panipat Bus Stand ➔ GU Campus:</strong> ~30 Minutes</span>
                </li>
              </ul>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Frequent buses every 10–15 mins</span>
            </div>
          </div>

          {/* Train Card */}
          <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-md hover:border-[#E8871A]/50 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#1A3A6B]">
                  <Train className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#0A1F44]">By Railway Route</h3>
                  <span className="text-xs text-slate-500 font-medium">New Delhi / Panipat Junction</span>
                </div>
              </div>
              
              <ul className="mt-4 space-y-2 text-xs text-slate-600 font-sans">
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#1A3A6B]" />
                  <span><strong>Delhi Station ➔ Panipat Station:</strong> ~1.5 Hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#1A3A6B]" />
                  <span><strong>Panipat Station ➔ GU Campus:</strong> ~25 Minutes</span>
                </li>
              </ul>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Shatabdi & Superfast Stop</span>
            </div>
          </div>

          {/* Air Card */}
          <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-md hover:border-[#E8871A]/50 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-[#2C5282]">
                  <Plane className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#0A1F44]">By Flight</h3>
                  <span className="text-xs text-slate-500 font-medium">IGI Airport Delhi (DEL)</span>
                </div>
              </div>
              
              <ul className="mt-4 space-y-2 text-xs text-slate-600 font-sans">
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#2C5282]" />
                  <span><strong>Airport ➔ Delhi Bus/Train Hub:</strong> ~45 Minutes</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#2C5282]" />
                  <span><strong>Direct Taxi to Campus:</strong> ~2 Hours via NH-44</span>
                </li>
              </ul>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Direct Cab Pickup Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
