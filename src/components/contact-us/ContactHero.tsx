import React from "react";
import Link from "next/link";
import { ChevronRight, PhoneCall, Mail, MapPin } from "lucide-react";
import { contactHeroData } from "@/data/contactUsData";

export default function ContactHero() {
  return (
    <section className="relative flex min-h-[500px] w-full items-center overflow-hidden bg-[#0A1F44] text-white sm:min-h-[560px] md:min-h-[620px] lg:min-h-[660px]">
      {/* Background Campus Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={contactHeroData.heroImage}
          alt="Geeta University Main Campus Contact"
          className="h-full w-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44]/95 via-[#0A1F44]/70 to-[#0A1F44]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/90 via-transparent to-[#0A1F44]/30" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 md:py-28 lg:px-8 lg:py-32">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-300 sm:text-sm"
        >
          {contactHeroData.breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={crumb.label}>
              {idx > 0 && <ChevronRight className="h-3.5 w-3.5 text-slate-400" />}
              {idx === contactHeroData.breadcrumbs.length - 1 ? (
                <span className="text-[#E8871A] font-semibold">{crumb.label}</span>
              ) : (
                <Link
                  href={crumb.href}
                  className="transition-colors hover:text-white"
                >
                  {crumb.label}
                </Link>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Hero Title & Subtitle */}
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E8871A]/40 bg-[#E8871A]/10 px-3.5 py-1.5 text-xs font-semibold text-[#E8871A] backdrop-blur-sm sm:text-sm">
            <PhoneCall className="h-4 w-4" />
            <span>24/7 Helpline & Admission Desk</span>
          </div>

          <h1 className="mb-4 font-serif text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15]">
            Contact <span className="text-[#E8871A]">Geeta University</span>
          </h1>

          <p className="mb-6 text-lg font-medium text-amber-200/90 sm:text-xl font-serif">
            {contactHeroData.subtitle}
          </p>

          <p className="text-base text-slate-200 sm:text-lg leading-relaxed font-sans">
            {contactHeroData.description}
          </p>
        </div>
      </div>
    </section>
  );
}
