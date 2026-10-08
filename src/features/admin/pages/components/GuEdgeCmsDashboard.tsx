"use client";

import { useState } from "react";
import Link from "next/link";
import { updatePageSectionAction, updatePageSeoAction } from "@/features/admin/pages/actions";
import { CmsActionButton } from "@/components/admin/CmsActionButton";
import {
  CmsImagePreviewInput,
  CmsAutoTextarea,
  CmsStringRepeater,
} from "./CmsFieldHelpers";
import {
  CheckCircle,
  AlertCircle,
  ExternalLink,
  Plus,
  Trash2,
  Edit,
  Save,
  GraduationCap,
  FileText,
  HelpCircle,
  Award,
  Globe,
  BookOpen,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Layers,
} from "lucide-react";
import { GU_EDGE_PAGES_OPTIONS } from "../guEdgeConfig";

const ICON_MAP: Record<string, any> = {
  Sparkles,
  TrendingUp,
  Globe,
  BookOpen,
  Award,
  CheckCircle2,
  Layers,
};

interface GuEdgeCmsDashboardProps {
  initialPageSlug?: string;
  adminDataBySlug: Record<string, { sections: Record<string, any>; seo: any }>;
}

export function GuEdgeCmsDashboard({
  initialPageSlug = "dyod",
  adminDataBySlug,
}: GuEdgeCmsDashboardProps) {
  const [selectedPageSlug, setSelectedPageSlug] = useState<string>(initialPageSlug);

  const currentPageOption =
    GU_EDGE_PAGES_OPTIONS.find((p) => p.slug === selectedPageSlug) || GU_EDGE_PAGES_OPTIONS[0];

  const currentAdminData = adminDataBySlug[selectedPageSlug] || { sections: {}, seo: null };
  const sections = currentAdminData.sections || {};
  const pageSeo = currentAdminData.seo || {};

  const [activeSectionKey, setActiveSectionKey] = useState<string>(
    currentPageOption.sectionsList[0]?.key || "hero"
  );

  const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  // Dynamic Section Body State
  const getSectionBody = (key: string) => {
    return sections[key]?.body || {};
  };

  const [activeBodyState, setActiveBodyState] = useState<any>(
    getSectionBody(currentPageOption.sectionsList[0]?.key || "hero")
  );

  // Handle Page Switching
  const handlePageSelect = (slug: string) => {
    setSelectedPageSlug(slug);
    const targetOpt = GU_EDGE_PAGES_OPTIONS.find((p) => p.slug === slug) || GU_EDGE_PAGES_OPTIONS[0];
    const firstSecKey = targetOpt.sectionsList[0]?.key || "hero";
    setActiveSectionKey(firstSecKey);
    const targetData = adminDataBySlug[slug] || { sections: {}, seo: null };
    setActiveBodyState(targetData.sections?.[firstSecKey]?.body || {});
    setSeoState({
      title: targetData.seo?.title || "",
      description: targetData.seo?.description || "",
      keywords: Array.isArray(targetData.seo?.keywords)
        ? targetData.seo.keywords.join(", ")
        : targetData.seo?.keywords || "",
      canonical: targetData.seo?.canonical || "",
      ogTitle: targetData.seo?.ogTitle || "",
      ogImage: targetData.seo?.ogImage || "",
      noIndex: targetData.seo?.noIndex || false,
    });
    setFeedback(null);
  };

  // Handle Section Tab Switching
  const handleSectionSelect = (key: string) => {
    setActiveSectionKey(key);
    if (key !== "seo") {
      setActiveBodyState(getSectionBody(key));
    }
    setFeedback(null);
  };

  // Save Section Action Handler
  const handleSaveSection = async () => {
    try {
      setIsSaving(true);
      setFeedback(null);

      const res = await updatePageSectionAction(selectedPageSlug, activeSectionKey, {
        body: activeBodyState,
        status: "PUBLISHED",
      });

      if (res.success) {
        setFeedback({
          type: "success",
          text: `Section "${activeSectionKey}" saved successfully to Aiven DB!`,
        });
        if (sections[activeSectionKey]) {
          sections[activeSectionKey].body = activeBodyState;
        } else {
          sections[activeSectionKey] = { body: activeBodyState };
        }
      } else {
        setFeedback({ type: "error", text: res.error || "Failed to update section." });
      }
    } catch (err: any) {
      setFeedback({ type: "error", text: err.message || "An unexpected error occurred." });
    } finally {
      setIsSaving(false);
    }
  };

  // SEO Form State & Handler
  const [seoState, setSeoState] = useState({
    title: pageSeo?.title || "",
    description: pageSeo?.description || "",
    keywords: Array.isArray(pageSeo?.keywords) ? pageSeo.keywords.join(", ") : pageSeo?.keywords || "",
    canonical: pageSeo?.canonical || "",
    ogTitle: pageSeo?.ogTitle || "",
    ogImage: pageSeo?.ogImage || "",
    noIndex: pageSeo?.noIndex || false,
  });

  const handleSaveSeo = async () => {
    try {
      setIsSaving(true);
      setFeedback(null);

      const payload = {
        title: seoState.title,
        description: seoState.description,
        keywords: typeof seoState.keywords === "string" ? seoState.keywords.split(",").map((k) => k.trim()).filter(Boolean) : seoState.keywords,
        canonical: seoState.canonical || null,
        ogTitle: seoState.ogTitle || null,
        ogImage: seoState.ogImage || null,
        noIndex: seoState.noIndex,
      };

      const res = await updatePageSeoAction(selectedPageSlug, payload);

      if (res.success) {
        setFeedback({ type: "success", text: "SEO Metadata saved successfully!" });
      } else {
        setFeedback({ type: "error", text: res.error || "Failed to save SEO metadata." });
      }
    } catch (err: any) {
      setFeedback({ type: "error", text: err.message || "Failed to save SEO metadata." });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-7 w-7 text-[#E8871A]" />
            <h2 className="font-serif text-3xl font-bold text-[#0A1F44]">GU Edge CMS Center</h2>
          </div>
          <p className="mt-1 text-sm text-slate-600">
            Production-grade content management for all 7 GU Edge pages of Geeta University.
          </p>
        </div>

        <Link
          href={currentPageOption.publicRoute}
          target="_blank"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-bold text-[#0A1F44] shadow-xs hover:border-[#E8871A] hover:text-[#E8871A]"
        >
          <span>View Public Page</span>
          <ExternalLink className="h-4 w-4" />
        </Link>
      </div>

      {/* Global Feedback Banner */}
      {feedback && (
        <div
          className={`flex items-center justify-between rounded-xl p-4 text-sm font-semibold shadow-xs ${
            feedback.type === "success"
              ? "border border-emerald-300 bg-emerald-50 text-emerald-900"
              : "border border-rose-300 bg-rose-50 text-rose-900"
          }`}
        >
          <div className="flex items-center gap-2.5">
            {feedback.type === "success" ? (
              <CheckCircle className="h-5 w-5 text-emerald-600" />
            ) : (
              <AlertCircle className="h-5 w-5 text-rose-600" />
            )}
            <span>{feedback.text}</span>
          </div>
          <button
            type="button"
            onClick={() => setFeedback(null)}
            className="text-xs uppercase font-bold text-slate-400 hover:text-slate-700"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* 1. GU Edge Page Selection Cards/Tabs */}
      <div className="space-y-2">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44]">
          Select GU Edge Page to Edit
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-2.5">
          {GU_EDGE_PAGES_OPTIONS.map((opt) => {
            const Icon = ICON_MAP[opt.iconName] || Sparkles;
            const isSelected = opt.slug === selectedPageSlug;

            return (
              <button
                key={opt.slug}
                type="button"
                onClick={() => handlePageSelect(opt.slug)}
                className={`flex flex-col items-start gap-1.5 rounded-xl border p-3.5 text-left transition-all ${
                  isSelected
                    ? "border-[#E8871A] bg-[#0A1F44] text-white shadow-md"
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <Icon className={`h-5 w-5 ${isSelected ? "text-[#E8871A]" : "text-slate-400"}`} />
                <span className="text-xs font-bold leading-tight">{opt.title}</span>
                <span className={`text-[10px] ${isSelected ? "text-slate-300" : "text-slate-400"}`}>
                  {opt.publicRoute}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Main Page Section Editor Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Section Selector Tabs */}
        <div className="lg:col-span-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs space-y-3">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="font-serif text-lg font-bold text-[#0A1F44]">{currentPageOption.title}</h3>
            <p className="text-xs text-slate-500">
              {currentPageOption.sectionsList.length} Public Sections + SEO
            </p>
          </div>

          <div className="space-y-1.5">
            {currentPageOption.sectionsList.map((sec) => {
              const isSecActive = activeSectionKey === sec.key;
              const hasData = sections[sec.key]?.body && Object.keys(sections[sec.key]?.body || {}).length > 0;

              return (
                <button
                  key={sec.key}
                  type="button"
                  onClick={() => handleSectionSelect(sec.key)}
                  className={`w-full flex items-center justify-between rounded-xl px-3.5 py-3 text-left text-xs font-bold transition-all ${
                    isSecActive
                      ? "bg-[#E8871A] text-white shadow-xs"
                      : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <span className="truncate">{sec.label}</span>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-extrabold ${
                      hasData
                        ? isSecActive
                          ? "bg-white/20 text-white"
                          : "bg-emerald-100 text-emerald-800"
                        : isSecActive
                        ? "bg-white/20 text-white"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {hasData ? "Configured" : "Not Configured"}
                  </span>
                </button>
              );
            })}

            {/* SEO Metadata Tab */}
            <button
              type="button"
              onClick={() => handleSectionSelect("seo")}
              className={`w-full flex items-center justify-between rounded-xl px-3.5 py-3 text-left text-xs font-bold transition-all ${
                activeSectionKey === "seo"
                  ? "bg-[#0A1F44] text-white shadow-xs"
                  : "bg-slate-100 text-slate-800 hover:bg-slate-200"
              }`}
            >
              <span>SEO &amp; Social Metadata</span>
              <span
                className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-extrabold ${
                  pageSeo?.title
                    ? activeSectionKey === "seo"
                      ? "bg-white/20 text-white"
                      : "bg-emerald-100 text-emerald-800"
                    : "bg-amber-100 text-amber-800"
                }`}
              >
                {pageSeo?.title ? "Configured" : "Default"}
              </span>
            </button>
          </div>
        </div>

        {/* Right Column: Section Form Editor */}
        <div className="lg:col-span-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h3 className="font-serif text-xl font-bold text-[#0A1F44]">
                {activeSectionKey === "seo"
                  ? `SEO Metadata — ${currentPageOption.title}`
                  : currentPageOption.sectionsList.find((s) => s.key === activeSectionKey)?.label ||
                    activeSectionKey}
              </h3>
            </div>

            {activeSectionKey !== "seo" ? (
              <CmsActionButton
                label="Save Section"
                loadingLabel="Saving Section..."
                onClick={handleSaveSection}
                disabled={isSaving}
                iconType="save"
                className="rounded-lg px-5 py-2.5 text-sm"
              />
            ) : (
              <CmsActionButton
                label="Save SEO Metadata"
                loadingLabel="Saving SEO..."
                onClick={handleSaveSeo}
                disabled={isSaving}
                iconType="save"
                className="rounded-lg px-5 py-2.5 text-sm"
              />
            )}
          </div>

          {/* Dynamic Editor Body Rendering */}
          {activeSectionKey === "seo" ? (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Meta Title
                </label>
                <input
                  type="text"
                  value={seoState.title}
                  onChange={(e) => setSeoState({ ...seoState, title: e.target.value })}
                  className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm focus:border-[#E8871A] focus:outline-none"
                  placeholder="e.g. Design Your Own Degree | Geeta University"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Meta Description
                </label>
                <CmsAutoTextarea
                  label="Meta Description"
                  value={seoState.description}
                  onChange={(val) => setSeoState({ ...seoState, description: val })}
                  placeholder="Compelling search result description..."
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Keywords (comma separated)
                </label>
                <input
                  type="text"
                  value={seoState.keywords}
                  onChange={(e) => setSeoState({ ...seoState, keywords: e.target.value })}
                  className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm focus:border-[#E8871A] focus:outline-none"
                  placeholder="dyod, geeta university, flexible learning"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Canonical URL
                  </label>
                  <input
                    type="text"
                    value={seoState.canonical}
                    onChange={(e) => setSeoState({ ...seoState, canonical: e.target.value })}
                    className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm focus:border-[#E8871A] focus:outline-none"
                    placeholder="https://geetauniversity.edu.in/edge/dyod"
                  />
                </div>

                <CmsImagePreviewInput
                  label="OG Social Image"
                  value={seoState.ogImage}
                  onChange={(val) => setSeoState({ ...seoState, ogImage: val })}
                />
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Common Hero Fields */}
              {activeBodyState.title !== undefined && (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Section Title / Headline
                  </label>
                  <input
                    type="text"
                    value={activeBodyState.title || ""}
                    onChange={(e) => setActiveBodyState({ ...activeBodyState, title: e.target.value })}
                    className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm font-semibold text-[#0A1F44] focus:border-[#E8871A] focus:outline-none"
                  />
                </div>
              )}

              {activeBodyState.eyebrow !== undefined && (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Eyebrow / Sub-Heading Badge
                  </label>
                  <input
                    type="text"
                    value={activeBodyState.eyebrow || ""}
                    onChange={(e) => setActiveBodyState({ ...activeBodyState, eyebrow: e.target.value })}
                    className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm focus:border-[#E8871A] focus:outline-none"
                  />
                </div>
              )}

              {activeBodyState.subtitle !== undefined && (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Subtitle
                  </label>
                  <input
                    type="text"
                    value={activeBodyState.subtitle || ""}
                    onChange={(e) => setActiveBodyState({ ...activeBodyState, subtitle: e.target.value })}
                    className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm focus:border-[#E8871A] focus:outline-none"
                  />
                </div>
              )}

              {activeBodyState.description !== undefined && (
                <div>
                  <CmsAutoTextarea
                    label="Description / Content Text"
                    value={activeBodyState.description || ""}
                    onChange={(val) => setActiveBodyState({ ...activeBodyState, description: val })}
                    rows={4}
                  />
                </div>
              )}

              {activeBodyState.image !== undefined && (
                <CmsImagePreviewInput
                  label="Featured Image URL"
                  value={activeBodyState.image || ""}
                  onChange={(val) => setActiveBodyState({ ...activeBodyState, image: val })}
                />
              )}

              {activeBodyState.videoUrl !== undefined && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Video URL / YouTube Embed
                    </label>
                    <input
                      type="text"
                      value={activeBodyState.videoUrl || ""}
                      onChange={(e) => setActiveBodyState({ ...activeBodyState, videoUrl: e.target.value })}
                      className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm focus:border-[#E8871A] focus:outline-none"
                    />
                  </div>

                  <CmsImagePreviewInput
                    label="Video Thumbnail Poster"
                    value={activeBodyState.videoThumb || ""}
                    onChange={(val) => setActiveBodyState({ ...activeBodyState, videoThumb: val })}
                  />
                </div>
              )}

              {/* CTAs */}
              {(activeBodyState.ctaLink !== undefined || activeBodyState.ctaText !== undefined) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Primary CTA Label
                    </label>
                    <input
                      type="text"
                      value={activeBodyState.ctaText || "Apply Now"}
                      onChange={(e) => setActiveBodyState({ ...activeBodyState, ctaText: e.target.value })}
                      className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm focus:border-[#E8871A] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Primary CTA Link URL
                    </label>
                    <input
                      type="text"
                      value={activeBodyState.ctaLink || ""}
                      onChange={(e) => setActiveBodyState({ ...activeBodyState, ctaLink: e.target.value })}
                      className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-sm focus:border-[#E8871A] focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* Custom NEP main_content section editor */}
              {activeSectionKey === "main_content" && activeBodyState.overviewText !== undefined && (
                <div className="space-y-4 rounded-xl border border-slate-200 p-4 bg-slate-50">
                  <h4 className="font-bold text-sm text-[#0A1F44]">NEP Main Content &amp; Bullet Points</h4>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">First Heading</label>
                    <input
                      type="text"
                      value={activeBodyState.firstUniversityHeading || ""}
                      onChange={(e) => setActiveBodyState({ ...activeBodyState, firstUniversityHeading: e.target.value })}
                      className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-sm"
                    />
                  </div>
                  <CmsStringRepeater
                    title="NEP Key Highlights Bullet Points"
                    items={activeBodyState.bulletPoints || []}
                    onChange={(items) => setActiveBodyState({ ...activeBodyState, bulletPoints: items })}
                  />
                  <div>
                    <CmsAutoTextarea
                      label="Overview Paragraph"
                      value={activeBodyState.overviewText || ""}
                      onChange={(val) => setActiveBodyState({ ...activeBodyState, overviewText: val })}
                      rows={4}
                    />
                  </div>
                </div>
              )}

              {/* General Array Repeaters Indicator */}
              {Object.keys(activeBodyState).map((propKey) => {
                const val = activeBodyState[propKey];
                if (
                  Array.isArray(val) &&
                  !["bullets", "bulletPoints", "badges"].includes(propKey)
                ) {
                  return (
                    <div key={propKey} className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#0A1F44]">
                          Repeater Collection: {propKey} ({val.length} Items)
                        </h4>
                        <button
                          type="button"
                          onClick={() => {
                            const newArr = [...val, { title: "New Item", description: "" }];
                            setActiveBodyState({ ...activeBodyState, [propKey]: newArr });
                          }}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-[#E8871A] px-3 py-1.5 text-xs font-bold text-white shadow-xs"
                        >
                          <Plus className="h-3.5 w-3.5" />
                          <span>Add Item</span>
                        </button>
                      </div>

                      <div className="space-y-3">
                        {val.map((item: any, idx: number) => (
                          <div
                            key={idx}
                            className="rounded-lg border border-slate-200 bg-white p-3 space-y-2 relative"
                          >
                            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                              <span className="text-xs font-bold text-slate-700">
                                #{idx + 1} {item.title || item.name || item.stepNumber || "Item"}
                              </span>
                              <button
                                type="button"
                                onClick={() => {
                                  const newArr = val.filter((_: any, i: number) => i !== idx);
                                  setActiveBodyState({ ...activeBodyState, [propKey]: newArr });
                                }}
                                className="text-rose-600 hover:text-rose-800 text-xs font-bold inline-flex items-center gap-1"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                                <span>Remove</span>
                              </button>
                            </div>

                            {/* Item Object Form Fields */}
                            {typeof item === "object" && item !== null && (
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                                {Object.keys(item).map((itemKey) => {
                                  if (typeof item[itemKey] === "string" || typeof item[itemKey] === "number") {
                                    return (
                                      <div key={itemKey} className={itemKey.toLowerCase().includes("desc") ? "sm:col-span-2" : ""}>
                                        <label className="block text-[10px] font-bold uppercase text-slate-500 mb-0.5">
                                          {itemKey}
                                        </label>
                                        <input
                                          type="text"
                                          value={item[itemKey] ?? ""}
                                          onChange={(e) => {
                                            const updatedArr = [...val];
                                            updatedArr[idx] = { ...updatedArr[idx], [itemKey]: e.target.value };
                                            setActiveBodyState({ ...activeBodyState, [propKey]: updatedArr });
                                          }}
                                          className="w-full rounded border border-slate-300 px-2.5 py-1.5 text-xs"
                                        />
                                      </div>
                                    );
                                  }
                                  return null;
                                })}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
