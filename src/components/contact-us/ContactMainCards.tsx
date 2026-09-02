import React from "react";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { contactMainInfo } from "@/data/contactUsData";

export default function ContactMainCards() {
  return (
    <section className="w-full bg-[#F7F9FC] py-12 md:py-16 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Location */}
          <div className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E8871A]/50 hover:shadow-xl">
            <div>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-[#E8871A] group-hover:bg-[#E8871A] group-hover:text-white transition-colors">
                <MapPin className="h-7 w-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#E8871A]">
                Main Campus
              </span>
              <h3 className="mt-1 font-serif text-xl font-bold text-[#0A1F44]">
                Campus Location
              </h3>
              <p className="mt-2 text-sm text-slate-700 font-semibold leading-relaxed font-sans">
                {contactMainInfo.location}
              </p>
              <p className="mt-1 text-xs text-slate-500 font-sans">
                {contactMainInfo.locationDetails}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href="#google-map"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A1F44] hover:text-[#E8871A] transition-colors"
              >
                <span>View Google Map & Directions</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Phone / Contact No. */}
          <div className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E8871A]/50 hover:shadow-xl">
            <div>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-[#E8871A] group-hover:bg-[#E8871A] group-hover:text-white transition-colors">
                <Phone className="h-7 w-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#E8871A]">
                Toll Free & Helpline
              </span>
              <h3 className="mt-1 font-serif text-xl font-bold text-[#0A1F44]">
                Contact Numbers
              </h3>
              <p className="mt-2 text-base font-bold text-[#0A1F44] font-sans">
                {contactMainInfo.phonePrimary}
              </p>
              <p className="mt-0.5 text-sm text-slate-600 font-sans">
                Alternative: {contactMainInfo.phoneSecondary}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex gap-4">
              <a
                href="tel:09278768000"
                style={{ color: "#ffffff" }}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#0A1F44] px-4.5 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#E8871A]"
              >
                <Phone className="h-3.5 w-3.5 text-white" style={{ color: "#ffffff" }} />
                <span className="text-white" style={{ color: "#ffffff" }}>Call Helpline</span>
              </a>
            </div>
          </div>

          {/* Card 3: Email & Hours */}
          <div className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E8871A]/50 hover:shadow-xl">
            <div>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-[#E8871A] group-hover:bg-[#E8871A] group-hover:text-white transition-colors">
                <Mail className="h-7 w-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#E8871A]">
                Official Desk
              </span>
              <h3 className="mt-1 font-serif text-xl font-bold text-[#0A1F44]">
                Email & Working Hours
              </h3>
              <p className="mt-2 text-sm font-semibold text-[#0A1F44] font-sans">
                {contactMainInfo.emailPrimary}
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-slate-500 font-sans">
                <Clock className="h-4 w-4 text-[#E8871A] shrink-0" />
                <span>{contactMainInfo.workingHours}</span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href={`mailto:${contactMainInfo.emailPrimary}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A1F44] hover:text-[#E8871A] transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Send Mail Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
