"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Briefcase, Building2, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import type {
  CourseCareerPathways,
  CourseWhyGeeta,
} from "@/data/programs/courses/types";

interface CourseCareerSectionProps {
  career?: CourseCareerPathways;
  whyGeeta?: CourseWhyGeeta;
}

// Available verified recruiter logos in the project repository
const RECRUITER_LOGOS: Record<string, string> = {
  infosys: "/recruiters/infosys_logo.png?v=3",
  wipro: "/recruiters/wipro_logo.png?v=3",
  accenture: "/recruiters/accenture_logo.png?v=3",
  ibm: "/recruiters/ibm_logo.png?v=3",
  tcs: "/recruiters/tcs_logo.png?v=3",
  hcl: "/recruiters/hcl_logo.png?v=3",
  amazon: "/recruiters/amazon_logo.png?v=3",
  capgemini: "/recruiters/capgemini_logo.png?v=3",
  mcafee: "/recruiters/mcafee.png?v=3",
  hp: "/recruiters/hp.png?v=3",
  philips: "/recruiters/philips.png?v=3",
  prograd: "/recruiters/prograd.png?v=3",
  "blue star": "/recruiters/bluestar.png?v=3",
  "jaro education": "/recruiters/jaro_education.png?v=3",
  "gemini solutions": "/recruiters/gemini_solutions.png?v=3",
  apisero: "/recruiters/apisero.png?v=3",
  cisco: "/cisco.svg?v=3",
  oracle: "/oracle.svg?v=3",
  aws: "/aws.svg?v=3",
  google: "/recruiters/google_logo.png?v=3",
  nvidia: "/recruiters/nvidia_logo.png?v=3",
  microsoft: "/recruiters/microsoft_logo.png?v=3",
  samsung: "/recruiters/samsung_logo.png?v=3",
  bosch: "/recruiters/bosch_logo.png?v=3",
  adobe: "/recruiters/adobe_logo.png?v=3",
  github: "/github.svg?v=3",
};

function getRecruiterLogo(recruiter: { name: string; logo?: string }): string | undefined {
  if (recruiter.logo) return recruiter.logo;
  const key = recruiter.name.toLowerCase().trim();
  for (const [nameKey, path] of Object.entries(RECRUITER_LOGOS)) {
    if (key.includes(nameKey)) return path;
  }
  return undefined;
}

interface CarouselItem {
  name: string;
  logo?: string;
}

function RecruitersCarousel({ items }: { items: CarouselItem[] }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const handlePrev = () => {
    if (!scrollContainerRef.current) return;
    const el = scrollContainerRef.current;
    if (el.scrollLeft <= 10) {
      el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    } else {
      el.scrollBy({ left: -el.clientWidth * 0.75, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (!scrollContainerRef.current) return;
    const el = scrollContainerRef.current;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (el.scrollLeft >= maxScroll - 10) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      el.scrollBy({ left: el.clientWidth * 0.75, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (isHovered || items.length <= 4) return;
    const timer = setInterval(() => {
      handleNext();
    }, 3200);
    return () => clearInterval(timer);
  }, [isHovered, items.length]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeftRef.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDraggingRef.current = false;
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    isDraggingRef.current = true;
    startXRef.current = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    scrollLeftRef.current = scrollContainerRef.current.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  return (
    <div
      className="group relative px-2 sm:px-6"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Left Movement Arrow */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous recruiters"
        className="absolute -left-2 sm:-left-3 top-1/2 z-30 flex h-9 w-9 sm:h-11 sm:w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 backdrop-blur-md text-[#0A1F44] shadow-md transition-all duration-300 hover:border-[#E8871A] hover:bg-[#0A1F44] hover:text-[#E8871A] hover:scale-110 active:scale-95 pointer-events-auto cursor-pointer"
      >
        <ChevronLeft size={20} strokeWidth={2.5} />
      </button>

      {/* Right Movement Arrow */}
      <button
        type="button"
        onClick={handleNext}
        aria-label="Next recruiters"
        className="absolute -right-2 sm:-right-3 top-1/2 z-30 flex h-9 w-9 sm:h-11 sm:w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 backdrop-blur-md text-[#0A1F44] shadow-md transition-all duration-300 hover:border-[#E8871A] hover:bg-[#0A1F44] hover:text-[#E8871A] hover:scale-110 active:scale-95 pointer-events-auto cursor-pointer"
      >
        <ChevronRight size={20} strokeWidth={2.5} />
      </button>

      {/* Carousel Track */}
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="flex w-full gap-3 sm:gap-4 overflow-x-auto pb-4 pt-2 scroll-smooth cursor-grab active:cursor-grabbing select-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {items.map((recruiter, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.04, y: -4 }}
            transition={{ type: "spring", stiffness: 450, damping: 15 }}
            style={{
              scrollSnapAlign: "start",
              borderColor: "rgba(232, 135, 26, 0.22)",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.04)",
              backgroundColor: "#FFFFFF",
            }}
            className="flex h-[110px] sm:h-[126px] w-[calc((100%-12px)/2)] sm:w-[calc((100%-24px)/3)] md:w-[calc((100%-36px)/4)] lg:w-[calc((100%-60px)/5)] shrink-0 items-center justify-center rounded-2xl border bg-white px-5 py-3 transition-all duration-300 select-none box-border hover:border-[#E8871A] hover:shadow-lg"
          >
            {recruiter.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={recruiter.logo}
                alt={recruiter.name}
                style={{
                  maxHeight: 70,
                  maxWidth: "92%",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                  backgroundColor: "#FFFFFF",
                }}
                className="pointer-events-none transition-transform duration-200"
                loading="lazy"
              />
            ) : (
              <div className="flex items-center gap-2 text-center">
                <div className="w-8 h-8 rounded-lg bg-[#FFF4E8] flex items-center justify-center shrink-0">
                  <Building2 size={17} className="text-[#E8871A]" />
                </div>
                <span className="text-[14px] font-bold text-[#0A1F44] leading-tight">
                  {recruiter.name}
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function CourseCareerSection({
  career,
  whyGeeta,
}: CourseCareerSectionProps) {
  if (!career && !whyGeeta) return null;

  const roles = career?.roles || [];
  const recruiters = career?.recruiters || [];

  // Build the list of carousel items with logos
  // If recruiters are specified in the course data, use ONLY those recruiters.
  const rawList =
    recruiters.length > 0
      ? recruiters
      : [
          { name: "Infosys" },
          { name: "Wipro" },
          { name: "Accenture" },
          { name: "IBM" },
          { name: "TCS" },
          { name: "Amazon" },
          { name: "Capgemini" },
          { name: "HCL" },
        ];

  const carouselItems = rawList
    .map((recruiter) => ({
      name: recruiter.name,
      logo: getRecruiterLogo(recruiter),
    }))
    .filter((item) => {
      const n = item.name.toLowerCase();
      return !n.includes("tech mahindra") && !n.includes("genpact");
    });

  return (
    <section
      id="CareerOpportunities"
      style={{
        background: "#F8FAFC",
        borderTop: "1px solid #E2E8F0",
        borderBottom: "1px solid #E2E8F0",
      }}
      className="w-full py-14 sm:py-18 relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* ── 1. Section Header ── */}
        {career && (
          <div>
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
              <h2
                style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: "clamp(28px, 3.2vw, 38px)",
                  fontWeight: 800,
                  color: "#0A1F44",
                  lineHeight: 1.22,
                  letterSpacing: "-0.5px",
                  margin: 0,
                }}
              >
                {career.title}
              </h2>
              {career.intro && (
                <p className="mt-3 text-base sm:text-[16.5px] text-[#4A5568] leading-relaxed">
                  {career.intro}
                </p>
              )}
            </div>

            {/* ── 2. Card Container for Roles & Recruiters ── */}
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "24px",
                boxShadow: "0 4px 24px rgba(0, 0, 0, 0.03)",
              }}
              className="p-6 sm:p-10"
            >
              {/* Top Job Roles */}
              {roles.length > 0 && (
                <div className="mb-10">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 text-[#0A1F44] font-extrabold text-[20px] sm:text-[22px]">
                      <Briefcase size={20} className="text-[#E8871A]" />
                      <span>{career.rolesTitle || "Top Job Roles"}</span>
                    </div>
                  </div>

                  {/* Centered pill badge cluster */}
                  <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center max-w-4xl mx-auto">
                    {roles.map((role, idx) => {
                      const cleanRole = role.includes(":") ? role.split(":")[0].trim() : role;
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200 text-[#0A1F44] text-[13.5px] sm:text-[14px] font-bold shadow-[0_1px_4px_rgba(0,0,0,0.02)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E8871A]/60 hover:bg-amber-50/50 cursor-default select-none"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#E8871A] shrink-0" />
                          <span>{cleanRole}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Divider */}
              {roles.length > 0 && carouselItems.length > 0 && (
                <div className="w-full max-w-xl mx-auto border-t border-slate-200 my-8" />
              )}

              {/* Top Recruiters Carousel */}
              {carouselItems.length > 0 && (
                <div>
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 text-[#0A1F44] font-extrabold text-[20px] sm:text-[22px]">
                      <Building2 size={20} className="text-[#E8871A]" />
                      <span>{career.recruitersTitle || "Top Recruiters include:"}</span>
                    </div>
                  </div>

                  <RecruitersCarousel items={carouselItems} />
                </div>
              )}
            </div>

            {/* ── 3. Milestone Stats Cards (40 LPA, 550+ Recruiters & 3500+ Job Offers) ── */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-3xl mx-auto my-12">
              {/* Card 1: 40 LPA */}
              <div
                style={{
                  background: "#0A1F44",
                  borderRadius: 20,
                  padding: "28px 20px",
                  textAlign: "center",
                  boxShadow: "0 10px 30px rgba(10, 31, 68, 0.12)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
                className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-[34px] sm:text-[40px] font-black text-[#E8871A] leading-tight mb-1">
                  40 LPA
                </div>
                <div className="text-[13.5px] sm:text-[14.5px] font-bold text-white uppercase tracking-wider">
                  Highest Package
                </div>
              </div>

              {/* Card 2: 550+ Recruiters */}
              <div
                style={{
                  background: "#0A1F44",
                  borderRadius: 20,
                  padding: "28px 20px",
                  textAlign: "center",
                  boxShadow: "0 10px 30px rgba(10, 31, 68, 0.12)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
                className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-[34px] sm:text-[40px] font-black text-[#E8871A] leading-tight mb-1">
                  550+
                </div>
                <div className="text-[13.5px] sm:text-[14.5px] font-bold text-white uppercase tracking-wider">
                  Recruiters
                </div>
              </div>

              {/* Card 3: 3500+ Job Offers */}
              <div
                style={{
                  background: "#0A1F44",
                  borderRadius: 20,
                  padding: "28px 20px",
                  textAlign: "center",
                  boxShadow: "0 10px 30px rgba(10, 31, 68, 0.12)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
                className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-[34px] sm:text-[40px] font-black text-[#E8871A] leading-tight mb-1">
                  3500+
                </div>
                <div className="text-[13.5px] sm:text-[14.5px] font-bold text-white uppercase tracking-wider">
                  Job Offers
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── 4. Reasons to choose Geeta University ── */}
        {whyGeeta && (
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E2E8F0",
              borderRadius: "24px",
              boxShadow: "0 4px 24px rgba(0, 0, 0, 0.03)",
            }}
            className="p-6 sm:p-10 mt-8"
          >
            <h3
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "clamp(24px, 2.8vw, 32px)",
                fontWeight: 800,
                color: "#0A1F44",
                lineHeight: 1.25,
                letterSpacing: "-0.5px",
                marginBottom: 16,
              }}
            >
              {whyGeeta.title}
            </h3>

            {/* Paragraphs */}
            {whyGeeta.paragraphs && whyGeeta.paragraphs.length > 0 ? (
              <div className="space-y-4 text-[#4A5568] text-[15.5px] sm:text-[16px] leading-relaxed font-normal">
                {whyGeeta.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-justify leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            ) : whyGeeta.intro ? (
              <p className="text-[#334155] text-[15.5px] sm:text-[16px] leading-relaxed font-normal mb-6 text-justify">
                {whyGeeta.intro}
              </p>
            ) : null}

            {/* Feature reason cards if present */}
            {whyGeeta.reasons && whyGeeta.reasons.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {whyGeeta.reasons.map((reason, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-amber-900/12 shadow-xs transition-all duration-200 hover:border-[#E8871A]/40 hover:shadow-md"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 size={18} className="text-[#E8871A]" shrink-0 />
                      <h4 className="font-bold text-[#0A1F44] text-[15px]">
                        {reason.title}
                      </h4>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
