"use client";

import React from "react";
import Image from "next/image";
import { Phone, Globe2, MapPin } from "lucide-react";
import type { ProgramCTAData } from "../types";

interface ProgramFinalCTAProps {
  data?: ProgramCTAData;
  programName?: string;
}

export default function ProgramFinalCTA({
  data,
  programName,
}: ProgramFinalCTAProps) {
  const headline =
    data?.headline ||
    (programName
      ? `Your Future in ${programName} Starts Here`
      : "Your Future in Leadership Starts Here");

  const paragraphs = data?.paragraphs || [
    "Take the next step towards a successful, future-ready career with Geeta University.",
    "Join an ecosystem that blends academic excellence, research innovation, global industry exposure, and career-focused mentorship.",
  ];

  const otherProgramsTitle = data?.otherProgramsTitle || "Other Programs Offered At GU";
  const otherPrograms = data?.otherPrograms || [
    "Engineering & Technology",
    "Computer Applications",
    "Management & Commerce",
    "Pharmaceutical Sciences",
    "Forensic Science",
    "Hotel Management",
    "Humanities & Social Sciences",
  ];

  const qrImage = data?.qrImage || "/qr.png";
  const qrLabel = data?.qrLabel || "Admissions 2026–27";
  const qrCta = data?.qrCta || "Scan to Apply";
  const applyLinkText = data?.applyLinkText || "Apply Now";
  const applyLinkHref = data?.applyLinkHref || "https://admissions.geetauniversity.edu.in";
  const helpline = data?.helpline || "+91 92787 68000";
  const website = data?.website || "www.geetauniversity.edu.in";
  const campusAddress =
    data?.campusAddress || "NH-71A, Naultha Panipat, Haryana (132145), India.";

  return (
    <section
      id="enquiry"
      className="relative overflow-hidden bg-[#0A1F44] py-20 md:py-24 text-white font-sans"
    >
      {/* Background glow and subtle texture */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#D99A24]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#1E4E8C]/20 blur-3xl" />

      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Headline & Pitch */}
          <div className="flex flex-col items-start">
            {/* Gold Accent Line */}
            <div className="h-[3px] w-16 bg-[#D99A24] mb-6" />

            {/* Headline */}
            <h2 className="font-serif text-[34px] sm:text-[44px] md:text-[50px] font-black leading-[1.08] text-white">
              <span className="text-[#D99A24] font-sans mr-2">&ldquo;</span>
              {headline}
            </h2>

            {/* Paragraphs */}
            <div className="mt-6 space-y-4 text-[16px] md:text-[17px] leading-[1.75] text-white/80">
              {paragraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>

            {/* Other Programs Offered List */}
            {otherPrograms.length > 0 && (
              <div className="mt-10 pt-8 border-t border-white/10 w-full">
                <h4 className="text-[12px] font-extrabold uppercase tracking-[2px] text-[#D99A24] mb-4">
                  {otherProgramsTitle}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {otherPrograms.map((prog, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 text-[13px] text-white/75"
                    >
                      {prog}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: QR Code Card & Contact Details */}
          <div className="flex flex-col items-center lg:items-end w-full">
            {/* QR Card */}
            <div className="w-full max-w-[300px] rounded-[24px] bg-white p-7 text-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col items-center">
              <span className="text-[11px] font-extrabold uppercase tracking-[1.5px] text-[#4B5870]">
                {qrLabel}
              </span>
              <span className="font-serif text-[22px] font-black text-[#0F2D52] mt-1 mb-4">
                {qrCta}
              </span>

              <div className="relative w-44 h-44 mb-4">
                <Image
                  src={qrImage}
                  alt="Apply QR Code"
                  fill
                  className="object-contain"
                  sizes="176px"
                />
              </div>

              <a
                href={applyLinkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#D99A24] text-white font-bold text-[15px] hover:bg-[#c2871b] transition-colors shadow-md"
              >
                {applyLinkText}
              </a>
            </div>

            {/* Contact Details List */}
            <div className="mt-8 w-full max-w-[340px] space-y-4 text-left">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 border border-white/15 text-[#D99A24]">
                  <Phone size={15} />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-white/50 font-bold">
                    Admission Helpline
                  </div>
                  <a
                    href={`tel:${helpline.replace(/\s+/g, "")}`}
                    className="text-white font-semibold hover:text-[#D99A24] transition-colors text-[15px]"
                  >
                    {helpline}
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 border border-white/15 text-[#D99A24]">
                  <Globe2 size={15} />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-white/50 font-bold">
                    Official Website
                  </div>
                  <a
                    href={`https://${website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold hover:text-[#D99A24] transition-colors text-[15px]"
                  >
                    {website}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 border border-white/15 text-[#D99A24]">
                  <MapPin size={15} />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-white/50 font-bold">
                    Campus Address
                  </div>
                  <p className="text-white/80 text-[14px] leading-snug">
                    {campusAddress}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
