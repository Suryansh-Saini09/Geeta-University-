"use client";

import React, { useState, useRef, useEffect, Suspense } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Globe, ChevronDown, Check } from "lucide-react";
import { SUPPORTED_LOCALES, LOCALE_LABELS, Locale } from "@/lib/i18n/localization";
import { getLocaleFromPath, switchLocale } from "@/lib/i18n/navigation";

interface LanguageSwitcherProps {
  className?: string;
  variant?: "desktop" | "mobile" | "compact";
}

function LanguageSwitcherInner({
  className = "",
  variant = "desktop",
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Extract active locale from current pathname
  const currentLocale: Locale = getLocaleFromPath(pathname);

  // Handle clicking outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectLanguage = (targetLocale: Locale) => {
    setIsOpen(false);

    // Document cookie setting for persistence
    document.cookie = `gu-locale=${targetLocale}; path=/; max-age=31536000; SameSite=Lax`;

    const newPath = switchLocale(targetLocale, pathname);
    const queryStr = searchParams.toString();
    const fullUrl = queryStr ? `${newPath}?${queryStr}` : newPath;

    router.push(fullUrl);
    router.refresh();
  };

  if (variant === "mobile") {
    return (
      <div className={`space-y-2 py-2 ${className}`}>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E8871A]">
          <Globe className="h-4 w-4" />
          <span>Select Language / भाषा चुनें</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {SUPPORTED_LOCALES.map((loc) => {
            const isSelected = currentLocale === loc;
            return (
              <button
                key={loc}
                type="button"
                onClick={() => handleSelectLanguage(loc)}
                className={`flex items-center justify-center gap-1.5 rounded-lg py-2.5 px-3 text-xs font-bold transition-all ${
                  isSelected
                    ? "bg-[#e8871a] text-white shadow-sm"
                    : "bg-[#EDE9DF] text-[#0A1F44] hover:bg-[#e0dad0]"
                }`}
              >
                <span>{LOCALE_LABELS[loc]}</span>
                {isSelected && <Check className="h-3.5 w-3.5" />}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex items-center gap-1.5 rounded-md border border-[#DFD9CB] bg-white/80 px-2.5 py-1 text-xs font-bold text-[#0A1F44] hover:border-[#e8871a] hover:text-[#e8871a] transition-all shadow-xs"
        aria-label="Select Language"
        aria-expanded={isOpen}
      >
        <Globe className="h-3.5 w-3.5 text-[#e8871a]" />
        <span>{LOCALE_LABELS[currentLocale]}</span>
        <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1 z-50 w-36 rounded-lg border border-slate-200 bg-white py-1 shadow-lg ring-1 ring-black/5 animate-in fade-in slide-in-from-top-1 duration-150">
          {SUPPORTED_LOCALES.map((loc) => {
            const isSelected = currentLocale === loc;
            return (
              <button
                key={loc}
                type="button"
                onClick={() => handleSelectLanguage(loc)}
                className={`w-full flex items-center justify-between px-3 py-2 text-left text-xs font-medium transition-colors ${
                  isSelected
                    ? "bg-amber-50 font-bold text-[#e8871a]"
                    : "text-slate-700 hover:bg-slate-50 hover:text-[#0A1F44]"
                }`}
              >
                <span>{LOCALE_LABELS[loc]}</span>
                {isSelected && <Check className="h-3.5 w-3.5 text-[#e8871a]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function LanguageSwitcher(props: LanguageSwitcherProps) {
  return (
    <Suspense fallback={
      <div className="inline-flex items-center gap-1 px-2 py-1 text-xs text-slate-400">
        <Globe className="h-3.5 w-3.5 animate-pulse" />
        <span>English</span>
      </div>
    }>
      <LanguageSwitcherInner {...props} />
    </Suspense>
  );
}
