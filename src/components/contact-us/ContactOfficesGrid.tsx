import React from "react";
import { Building2, MapPin, Phone } from "lucide-react";
import { admissionOfficesList } from "@/data/contactUsData";

export default function ContactOfficesGrid() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
          <span className="inline-block rounded-full bg-[#E8871A]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#E8871A]">
            Regional Touchpoints
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[#0A1F44] sm:text-4xl">
            Our Regional Admission Offices
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg font-sans">
            Visit any of our admission guidance centers across Delhi NCR, Haryana, Uttar Pradesh, and Assam for face-to-face counseling and document verification.
          </p>
        </div>

        {/* Offices Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {admissionOfficesList.map((office) => (
            <div
              key={office.id}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-[#F7F9FC] p-6 transition-all duration-300 hover:border-[#E8871A]/50 hover:bg-white hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A1F44] text-[#E8871A] group-hover:bg-[#E8871A] group-hover:text-white transition-colors">
                    <Building2 className="h-5 w-5" />
                  </div>
                  {office.landmark && (
                    <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-[11px] font-bold text-[#E8871A]">
                      {office.landmark}
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-lg font-bold text-[#0A1F44] mb-2">
                  {office.city}
                </h3>

                <div className="flex items-start gap-2 text-xs text-slate-600 font-sans leading-relaxed mb-4">
                  <MapPin className="h-4 w-4 text-[#E8871A] shrink-0 mt-0.5" />
                  <span>{office.address}</span>
                </div>
              </div>

              {office.phone && (
                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between">
                  <a
                    href={`tel:${office.phone.replace(/[^0-9+]/g, "")}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A1F44] hover:text-[#E8871A] transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5 text-[#E8871A]" />
                    <span>{office.phone}</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
