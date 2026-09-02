import React from "react";
import { googleMapEmbedUrl } from "@/data/contactUsData";

export default function ContactMapSection() {
  return (
    <section id="google-map" className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-10">
          <span className="inline-block rounded-full bg-[#0A1F44]/5 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0A1F44]">
            Interactive Campus Map
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[#0A1F44] sm:text-4xl">
            Find Us on Google Maps
          </h2>
          <p className="mt-3 text-base text-slate-600 font-sans">
            NH-71, Naultha, Panipat, Haryana 132145 (Gohana Road)
          </p>
        </div>

        {/* Map Container */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl bg-slate-100">
          <iframe
            src={googleMapEmbedUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Geeta University Main Campus Map Location"
            className="w-full h-[400px] sm:h-[480px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
