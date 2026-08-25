"use client";

import React, { useState, useEffect } from "react";
import { useLenis } from "lenis/react";

const NAV_ITEMS = [
  { id: "infrastructure", label: "Infrastructure" },
  { id: "sports", label: "Sports Facilities" },
  { id: "events", label: "Events & Fests" },
  { id: "eminent-personalities", label: "Eminent Personalities" },
  { id: "legacy-ecosystem", label: "Legacy & Ecosystem" },
  { id: "faqs", label: "FAQs" },
];

export default function CampusLifeNav() {
  const [activeSection, setActiveSection] = useState<string>("infrastructure");
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle incoming hash on initial load or navigation
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash && NAV_ITEMS.some((item) => item.id === hash)) {
        setActiveSection(hash);
        const timer = setTimeout(() => {
          if (lenis) {
            lenis.scrollTo(`#${hash}`, { offset: -185 });
          } else {
            const el = document.getElementById(hash);
            if (el) {
              const top = el.getBoundingClientRect().top + window.scrollY - 185;
              window.scrollTo({ top, behavior: "smooth" });
            }
          }
        }, 300);
        return () => clearTimeout(timer);
      }
    }
  }, [lenis]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${id}`);
    }
    if (lenis) {
      lenis.scrollTo(`#${id}`, { offset: -185 });
    } else {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 185;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="sticky top-[136px] z-50 w-full border-b border-[#E2E8F0] bg-white/95 shadow-sm backdrop-blur-md">
      <div className="gu-container overflow-x-auto [scrollbar-width:none]">
        <div className="flex min-w-max items-center gap-1 py-2.5 md:justify-center md:gap-3">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`group relative cursor-pointer whitespace-nowrap bg-transparent px-4 py-2.5 text-[13px] font-bold border-none outline-none transition-colors duration-150 ${
                  isActive ? "text-[#0A1F44]" : "text-[#64748B] hover:text-[#0A1F44]"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-4 right-4 h-[2px] bg-[#E8871A] transition-all duration-200 ${
                    isActive ? "scale-x-100" : "origin-left scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
