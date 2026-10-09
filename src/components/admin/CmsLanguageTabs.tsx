"use client";

import React from "react";
import { Globe, Sparkles, CheckCircle, AlertCircle, RefreshCw } from "lucide-react";
import { SUPPORTED_LOCALES, LOCALE_LABELS, Locale, TranslationStatus } from "@/lib/i18n/localization";

interface CmsLanguageTabsProps {
  activeLocale: Locale;
  onSelectLocale: (locale: Locale) => void;
  statusMap?: Record<string, TranslationStatus>;
  onTranslateFromEnglish?: () => Promise<void>;
  isTranslating?: boolean;
  activeStatus?: TranslationStatus;
  onStatusChange?: (status: TranslationStatus) => void;
}

export function CmsLanguageTabs({
  activeLocale,
  onSelectLocale,
  statusMap = {},
  onTranslateFromEnglish,
  isTranslating = false,
  activeStatus = "PUBLISHED",
  onStatusChange,
}: CmsLanguageTabsProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 mb-6 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
        {/* Language Tabs */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#0A1F44] uppercase tracking-wider mr-2">
            <Globe className="h-4 w-4 text-[#e8871a]" />
            <span>Content Language:</span>
          </div>

          <div className="flex items-center gap-1.5 bg-white p-1 rounded-lg border border-slate-200 shadow-2xs">
            {SUPPORTED_LOCALES.map((loc) => {
              const isActive = activeLocale === loc;
              const status = loc === "en" ? "PUBLISHED" : statusMap[loc] || "NOT_TRANSLATED";

              return (
                <button
                  key={loc}
                  type="button"
                  onClick={() => onSelectLocale(loc)}
                  className={`flex items-center gap-2 px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
                    isActive
                      ? "bg-[#0A1F44] text-white shadow-xs"
                      : "text-slate-600 hover:bg-slate-100 hover:text-[#0A1F44]"
                  }`}
                >
                  <span>{LOCALE_LABELS[loc]}</span>
                  {loc === "en" ? (
                    <span className="h-2 w-2 rounded-full bg-emerald-500" title="Canonical Published" />
                  ) : status === "PUBLISHED" ? (
                    <span className="h-2 w-2 rounded-full bg-emerald-500" title="Published" />
                  ) : status === "DRAFT" ? (
                    <span className="h-2 w-2 rounded-full bg-amber-500" title="Draft" />
                  ) : (
                    <span className="h-2 w-2 rounded-full bg-slate-300" title="Missing" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Translation Action & Status Controls */}
        <div className="flex items-center gap-3">
          {activeLocale !== "en" && onTranslateFromEnglish && (
            <button
              type="button"
              onClick={onTranslateFromEnglish}
              disabled={isTranslating}
              className="inline-flex items-center gap-1.5 rounded-lg border border-amber-300 bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-900 hover:bg-amber-100 transition-colors shadow-2xs disabled:opacity-50"
            >
              {isTranslating ? (
                <RefreshCw className="h-3.5 w-3.5 animate-spin text-amber-700" />
              ) : (
                <Sparkles className="h-3.5 w-3.5 text-amber-600" />
              )}
              <span>{isTranslating ? "Translating..." : `Translate from English`}</span>
            </button>
          )}

          {activeLocale !== "en" && onStatusChange && (
            <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-lg border border-slate-200">
              <span className="text-[11px] font-bold text-slate-500 uppercase">Status:</span>
              <select
                value={activeStatus}
                onChange={(e) => onStatusChange(e.target.value as TranslationStatus)}
                className="text-xs font-bold text-[#0A1F44] bg-transparent focus:outline-none cursor-pointer"
              >
                <option value="DRAFT">DRAFT (Hidden from Public)</option>
                <option value="PUBLISHED">PUBLISHED (Live)</option>
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Language Context Helper Bar */}
      <div className="flex items-center justify-between text-xs text-slate-500">
        <div>
          {activeLocale === "en" ? (
            <span className="font-medium text-slate-600">
              Editing <strong className="text-[#0A1F44]">Canonical English Source</strong>. Changes affect default site content.
            </span>
          ) : (
            <span className="font-medium text-slate-600">
              Editing <strong className="text-[#0A1F44]">{LOCALE_LABELS[activeLocale]}</strong> translation variant. Missing fields fall back to English.
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 text-[11px] font-semibold">
          <span className="inline-flex items-center gap-1 text-emerald-700">
            <CheckCircle className="h-3 w-3 text-emerald-500" /> Live Target
          </span>
          <span className="inline-flex items-center gap-1 text-amber-700">
            <AlertCircle className="h-3 w-3 text-amber-500" /> Draft / Fallback
          </span>
        </div>
      </div>
    </div>
  );
}
