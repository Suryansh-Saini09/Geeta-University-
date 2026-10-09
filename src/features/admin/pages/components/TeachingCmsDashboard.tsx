"use client";

import { useState } from "react";
import {
  Save,
  BookOpen,
  FileText,
  Zap,
  BarChart3,
  ArrowRight,
  Plus,
  Trash2,
  Image as ImageIcon,
} from "lucide-react";
import { updatePageSectionAction, updatePageSeoAction } from "@/features/admin/pages/actions";
import {
  CmsImagePreviewInput,
  CmsAutoTextarea,
} from "@/features/admin/pages/components/CmsFieldHelpers";

interface TeachingCmsDashboardProps {
  initialData: {
    sections: Record<string, any>;
    seo: any;
  };
}

const SECTION_KEYS = [
  { key: "hero", label: "Hero Banner", icon: BookOpen },
  { key: "overview", label: "Teaching Overview", icon: FileText },
  { key: "pedagogy", label: "Pedagogical Methods", icon: Zap },
  { key: "stats", label: "Key Statistics", icon: BarChart3 },
  { key: "cta", label: "Call To Action", icon: ArrowRight },
  { key: "seo", label: "SEO Metadata", icon: ImageIcon },
];

export function TeachingCmsDashboard({ initialData }: TeachingCmsDashboardProps) {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [sectionsData, setSectionsData] = useState<Record<string, any>>(initialData.sections || {});
  const [seoData, setSeoData] = useState<any>(initialData.seo || {});

  const [savingKey, setSavingKey] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSaveSection = async (key: string) => {
    setSavingKey(key);
    setFeedback(null);
    try {
      if (key === "seo") {
        const res = await updatePageSeoAction("teaching-learning-practices", seoData);
        if (res.success) {
          setFeedback({ type: "success", message: "SEO Metadata updated successfully!" });
        } else {
          setFeedback({ type: "error", message: res.error || "Failed to update SEO" });
        }
      } else {
        const currentBody = sectionsData[key]?.body || {};
        const res = await updatePageSectionAction("teaching-learning-practices", key, currentBody);
        if (res.success) {
          setFeedback({ type: "success", message: `Section '${key}' updated successfully!` });
          setSectionsData((prev) => ({
            ...prev,
            [key]: {
              ...(prev[key] || {}),
              body: currentBody,
              status: "PUBLISHED",
              updatedAt: new Date().toISOString(),
            },
          }));
        } else {
          setFeedback({ type: "error", message: res.error || "Failed to update section" });
        }
      }
    } catch (err: any) {
      setFeedback({ type: "error", message: err.message || "An unexpected error occurred" });
    } finally {
      setSavingKey(null);
    }
  };

  const updateSectionBody = (key: string, newBody: any) => {
    setSectionsData((prev) => ({
      ...prev,
      [key]: {
        ...(prev[key] || {}),
        body: newBody,
      },
    }));
  };

  const heroBody = sectionsData.hero?.body || {};
  const overviewBody = sectionsData.overview?.body || {};
  const pedagogyList = Array.isArray(sectionsData.pedagogy?.body) ? sectionsData.pedagogy.body : [];
  const statsList = Array.isArray(sectionsData.stats?.body) ? sectionsData.stats.body : [];
  const ctaBody = sectionsData.cta?.body || {};

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="font-serif text-3xl font-bold text-[#0A1F44]">Teaching & Learning Practices CMS</h2>
          <p className="mt-1 text-sm text-slate-600">
            Manage public Teaching & Learning page hero, overview, 7 pedagogical methods, and statistics.
          </p>
        </div>
      </div>

      {feedback && (
        <div
          className={`rounded-xl border p-4 text-sm font-semibold ${
            feedback.type === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-800"
              : "border-rose-200 bg-rose-50 text-rose-800"
          }`}
        >
          {feedback.message}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-3 space-y-2">
          {SECTION_KEYS.map((sec) => {
            const Icon = sec.icon;
            const isActive = activeSection === sec.key;
            return (
              <button
                key={sec.key}
                type="button"
                onClick={() => setActiveSection(sec.key)}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-[#0A1F44] text-white shadow-md"
                    : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`h-4 w-4 ${isActive ? "text-[#E8871A]" : "text-slate-400"}`} />
                  <span>{sec.label}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Section Editor Panel */}
        <div className="lg:col-span-9 space-y-6">
          {/* HERO SECTION */}
          {activeSection === "hero" && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="font-serif text-xl font-bold text-[#0A1F44]">Hero Banner Section</h3>
                <button
                  type="button"
                  onClick={() => handleSaveSection("hero")}
                  disabled={savingKey === "hero"}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#E8871A] px-4 py-2 text-sm font-bold text-white shadow-xs hover:bg-[#d67a15] disabled:opacity-50"
                >
                  <Save className="h-4 w-4" />
                  {savingKey === "hero" ? "Saving..." : "Save Section"}
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1">
                    Banner Title
                  </label>
                  <input
                    type="text"
                    value={heroBody.title || ""}
                    onChange={(e) => updateSectionBody("hero", { ...heroBody, title: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-[#E8871A] focus:bg-white focus:outline-none"
                  />
                </div>

                <CmsAutoTextarea
                  label="Description"
                  value={heroBody.description || ""}
                  onChange={(val) => updateSectionBody("hero", { ...heroBody, description: val })}
                />

                <CmsImagePreviewInput
                  label="Hero Background Image"
                  value={heroBody.heroImage || ""}
                  onChange={(url) => updateSectionBody("hero", { ...heroBody, heroImage: url })}
                />
              </div>
            </div>
          )}

          {/* OVERVIEW SECTION */}
          {activeSection === "overview" && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="font-serif text-xl font-bold text-[#0A1F44]">Teaching Practice Overview</h3>
                <button
                  type="button"
                  onClick={() => handleSaveSection("overview")}
                  disabled={savingKey === "overview"}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#E8871A] px-4 py-2 text-sm font-bold text-white shadow-xs hover:bg-[#d67a15] disabled:opacity-50"
                >
                  <Save className="h-4 w-4" />
                  {savingKey === "overview" ? "Saving..." : "Save Section"}
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1">
                      Orange Highlight Heading
                    </label>
                    <input
                      type="text"
                      value={overviewBody.headingOrange || ""}
                      onChange={(e) => updateSectionBody("overview", { ...overviewBody, headingOrange: e.target.value })}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-[#E8871A] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1">
                      Main Dark Heading
                    </label>
                    <input
                      type="text"
                      value={overviewBody.headingBlack || ""}
                      onChange={(e) => updateSectionBody("overview", { ...overviewBody, headingBlack: e.target.value })}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-[#E8871A] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1">
                    Overview Paragraphs (One per line)
                  </label>
                  <textarea
                    rows={6}
                    value={Array.isArray(overviewBody.paragraphs) ? overviewBody.paragraphs.join("\n\n") : ""}
                    onChange={(e) => {
                      const pars = e.target.value.split("\n\n").map((p) => p.trim()).filter(Boolean);
                      updateSectionBody("overview", { ...overviewBody, paragraphs: pars });
                    }}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm focus:border-[#E8871A] focus:bg-white focus:outline-none"
                  />
                </div>

                <CmsImagePreviewInput
                  label="Overview Feature Image"
                  value={overviewBody.image || ""}
                  onChange={(url) => updateSectionBody("overview", { ...overviewBody, image: url })}
                />
              </div>
            </div>
          )}

          {/* PEDAGOGY SECTION */}
          {activeSection === "pedagogy" && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="font-serif text-xl font-bold text-[#0A1F44]">7 Pedagogical Methods</h3>
                <button
                  type="button"
                  onClick={() => handleSaveSection("pedagogy")}
                  disabled={savingKey === "pedagogy"}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#E8871A] px-4 py-2 text-sm font-bold text-white shadow-xs hover:bg-[#d67a15] disabled:opacity-50"
                >
                  <Save className="h-4 w-4" />
                  {savingKey === "pedagogy" ? "Saving..." : "Save Section"}
                </button>
              </div>

              <div className="space-y-4">
                {pedagogyList.map((method: any, idx: number) => (
                  <div key={idx} className="rounded-xl border border-slate-200 p-4 space-y-3 bg-slate-50/50">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-500">Method #{idx + 1} ({method.headingOrange} {method.headingBlack})</span>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = pedagogyList.filter((_: any, i: number) => i !== idx);
                          updateSectionBody("pedagogy", updated);
                        }}
                        className="text-rose-600 hover:text-rose-800 text-xs font-bold inline-flex items-center gap-1"
                      >
                        <Trash2 className="h-3.5 w-3.5" /> Remove
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Orange Heading</label>
                        <input
                          type="text"
                          value={method.headingOrange || ""}
                          onChange={(e) => {
                            const updated = [...pedagogyList];
                            updated[idx] = { ...method, headingOrange: e.target.value };
                            updateSectionBody("pedagogy", updated);
                          }}
                          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-bold text-[#E8871A]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Black Heading</label>
                        <input
                          type="text"
                          value={method.headingBlack || ""}
                          onChange={(e) => {
                            const updated = [...pedagogyList];
                            updated[idx] = { ...method, headingBlack: e.target.value };
                            updateSectionBody("pedagogy", updated);
                          }}
                          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-bold"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Lucide Icon</label>
                        <input
                          type="text"
                          value={method.icon || ""}
                          onChange={(e) => {
                            const updated = [...pedagogyList];
                            updated[idx] = { ...method, icon: e.target.value };
                            updateSectionBody("pedagogy", updated);
                          }}
                          placeholder="e.g. Zap, Network, Repeat, Clock"
                          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Description</label>
                      <textarea
                        rows={3}
                        value={method.description || ""}
                        onChange={(e) => {
                          const updated = [...pedagogyList];
                          updated[idx] = { ...method, description: e.target.value };
                          updateSectionBody("pedagogy", updated);
                        }}
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm"
                      />
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => {
                    const updated = [...pedagogyList, { id: `method-${Date.now()}`, headingOrange: "", headingBlack: "", description: "", icon: "Zap" }];
                    updateSectionBody("pedagogy", updated);
                  }}
                  className="inline-flex items-center gap-2 rounded-lg border border-dashed border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 w-full justify-center"
                >
                  <Plus className="h-4 w-4 text-[#E8871A]" /> Add Method
                </button>
              </div>
            </div>
          )}

          {/* STATS SECTION */}
          {activeSection === "stats" && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="font-serif text-xl font-bold text-[#0A1F44]">Key Statistics</h3>
                <button
                  type="button"
                  onClick={() => handleSaveSection("stats")}
                  disabled={savingKey === "stats"}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#E8871A] px-4 py-2 text-sm font-bold text-white shadow-xs hover:bg-[#d67a15] disabled:opacity-50"
                >
                  <Save className="h-4 w-4" />
                  {savingKey === "stats" ? "Saving..." : "Save Section"}
                </button>
              </div>

              <div className="space-y-4">
                {statsList.map((stat: any, idx: number) => (
                  <div key={idx} className="rounded-xl border border-slate-200 p-4 space-y-3 bg-slate-50/50">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-500">Stat #{idx + 1} ({stat.value || "New"})</span>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = statsList.filter((_: any, i: number) => i !== idx);
                          updateSectionBody("stats", updated);
                        }}
                        className="text-rose-600 hover:text-rose-800 text-xs font-bold inline-flex items-center gap-1"
                      >
                        <Trash2 className="h-3.5 w-3.5" /> Remove
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Value / Number</label>
                        <input
                          type="text"
                          value={stat.value || ""}
                          onChange={(e) => {
                            const updated = [...statsList];
                            updated[idx] = { ...stat, value: e.target.value };
                            updateSectionBody("stats", updated);
                          }}
                          placeholder="e.g. 100%, 7+, 50+"
                          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-bold text-[#E8871A]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Label</label>
                        <input
                          type="text"
                          value={stat.label || ""}
                          onChange={(e) => {
                            const updated = [...statsList];
                            updated[idx] = { ...stat, label: e.target.value };
                            updateSectionBody("stats", updated);
                          }}
                          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-bold"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Description</label>
                      <input
                        type="text"
                        value={stat.description || ""}
                        onChange={(e) => {
                          const updated = [...statsList];
                          updated[idx] = { ...stat, description: e.target.value };
                          updateSectionBody("stats", updated);
                        }}
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm"
                      />
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => {
                    const updated = [...statsList, { value: "", label: "", description: "" }];
                    updateSectionBody("stats", updated);
                  }}
                  className="inline-flex items-center gap-2 rounded-lg border border-dashed border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 w-full justify-center"
                >
                  <Plus className="h-4 w-4 text-[#E8871A]" /> Add Statistic
                </button>
              </div>
            </div>
          )}

          {/* CTA SECTION */}
          {activeSection === "cta" && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="font-serif text-xl font-bold text-[#0A1F44]">Call To Action Banner</h3>
                <button
                  type="button"
                  onClick={() => handleSaveSection("cta")}
                  disabled={savingKey === "cta"}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#E8871A] px-4 py-2 text-sm font-bold text-white shadow-xs hover:bg-[#d67a15] disabled:opacity-50"
                >
                  <Save className="h-4 w-4" />
                  {savingKey === "cta" ? "Saving..." : "Save Section"}
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    value={ctaBody.title || ""}
                    onChange={(e) => updateSectionBody("cta", { ...ctaBody, title: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-[#E8871A] focus:bg-white focus:outline-none"
                  />
                </div>

                <CmsAutoTextarea
                  label="Subtitle"
                  value={ctaBody.subtitle || ""}
                  onChange={(val) => updateSectionBody("cta", { ...ctaBody, subtitle: val })}
                />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1">
                      Button Text
                    </label>
                    <input
                      type="text"
                      value={ctaBody.ctaText || ""}
                      onChange={(e) => updateSectionBody("cta", { ...ctaBody, ctaText: e.target.value })}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-[#E8871A] focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1">
                      Button Link (href)
                    </label>
                    <input
                      type="text"
                      value={ctaBody.ctaHref || ""}
                      onChange={(e) => updateSectionBody("cta", { ...ctaBody, ctaHref: e.target.value })}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-[#E8871A] focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1">
                      Helpline Phone Number
                    </label>
                    <input
                      type="text"
                      value={ctaBody.phone || ""}
                      onChange={(e) => updateSectionBody("cta", { ...ctaBody, phone: e.target.value })}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-[#E8871A] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SEO SECTION */}
          {activeSection === "seo" && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="font-serif text-xl font-bold text-[#0A1F44]">SEO Metadata</h3>
                <button
                  type="button"
                  onClick={() => handleSaveSection("seo")}
                  disabled={savingKey === "seo"}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#E8871A] px-4 py-2 text-sm font-bold text-white shadow-xs hover:bg-[#d67a15] disabled:opacity-50"
                >
                  <Save className="h-4 w-4" />
                  {savingKey === "seo" ? "Saving..." : "Save SEO"}
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1">
                    Meta Title
                  </label>
                  <input
                    type="text"
                    value={seoData?.title || ""}
                    onChange={(e) => setSeoData((prev: any) => ({ ...prev, title: e.target.value }))}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-[#E8871A] focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1">
                    Meta Description
                  </label>
                  <textarea
                    rows={3}
                    value={seoData?.description || ""}
                    onChange={(e) => setSeoData((prev: any) => ({ ...prev, description: e.target.value }))}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-[#E8871A] focus:bg-white focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
