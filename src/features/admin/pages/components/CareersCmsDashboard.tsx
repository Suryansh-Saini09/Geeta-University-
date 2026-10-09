"use client";

import { useState } from "react";
import {
  Save,
  Briefcase,
  Gift,
  HelpCircle,
  Layers,
  Plus,
  Trash2,
  Image as ImageIcon,
} from "lucide-react";
import { updatePageSectionAction, updatePageSeoAction } from "@/features/admin/pages/actions";
import {
  CmsImagePreviewInput,
  CmsAutoTextarea,
} from "@/features/admin/pages/components/CmsFieldHelpers";

interface CareersCmsDashboardProps {
  initialData: {
    sections: Record<string, any>;
    seo: any;
  };
}

const SECTION_KEYS = [
  { key: "hero", label: "Hero Banner", icon: Briefcase },
  { key: "benefits", label: "Career Benefits", icon: Gift },
  { key: "faqs", label: "Career FAQs", icon: HelpCircle },
  { key: "form_config", label: "Job Categories & Departments", icon: Layers },
  { key: "seo", label: "SEO Metadata", icon: ImageIcon },
];

export function CareersCmsDashboard({ initialData }: CareersCmsDashboardProps) {
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
        const res = await updatePageSeoAction("careers", seoData);
        if (res.success) {
          setFeedback({ type: "success", message: "SEO Metadata updated successfully!" });
        } else {
          setFeedback({ type: "error", message: res.error || "Failed to update SEO" });
        }
      } else {
        const currentBody = sectionsData[key]?.body || {};
        const res = await updatePageSectionAction("careers", key, currentBody);
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
  const benefitsList = Array.isArray(sectionsData.benefits?.body) ? sectionsData.benefits.body : [];
  const faqsList = Array.isArray(sectionsData.faqs?.body) ? sectionsData.faqs.body : [];
  const formConfigBody = sectionsData.form_config?.body || {};

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="font-serif text-3xl font-bold text-[#0A1F44]">Careers CMS Dashboard</h2>
          <p className="mt-1 text-sm text-slate-600">
            Manage public Careers page hero, employee benefits, FAQs, and application form categories.
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

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1">
                    Subtitle
                  </label>
                  <input
                    type="text"
                    value={heroBody.subtitle || ""}
                    onChange={(e) => updateSectionBody("hero", { ...heroBody, subtitle: e.target.value })}
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1">
                      CTA Button Label
                    </label>
                    <input
                      type="text"
                      value={heroBody.ctaLabel || ""}
                      onChange={(e) => updateSectionBody("hero", { ...heroBody, ctaLabel: e.target.value })}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-[#E8871A] focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1">
                      CTA Destination URL
                    </label>
                    <input
                      type="text"
                      value={heroBody.ctaDestination || ""}
                      onChange={(e) => updateSectionBody("hero", { ...heroBody, ctaDestination: e.target.value })}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-[#E8871A] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* BENEFITS SECTION */}
          {activeSection === "benefits" && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="font-serif text-xl font-bold text-[#0A1F44]">Career Benefits</h3>
                <button
                  type="button"
                  onClick={() => handleSaveSection("benefits")}
                  disabled={savingKey === "benefits"}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#E8871A] px-4 py-2 text-sm font-bold text-white shadow-xs hover:bg-[#d67a15] disabled:opacity-50"
                >
                  <Save className="h-4 w-4" />
                  {savingKey === "benefits" ? "Saving..." : "Save Section"}
                </button>
              </div>

              <div className="space-y-4">
                {benefitsList.map((benefit: any, idx: number) => (
                  <div key={idx} className="rounded-xl border border-slate-200 p-4 space-y-3 bg-slate-50/50">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-500">Benefit #{idx + 1}</span>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = benefitsList.filter((_: any, i: number) => i !== idx);
                          updateSectionBody("benefits", updated);
                        }}
                        className="text-rose-600 hover:text-rose-800 text-xs font-bold inline-flex items-center gap-1"
                      >
                        <Trash2 className="h-3.5 w-3.5" /> Remove
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Title</label>
                        <input
                          type="text"
                          value={benefit.title || ""}
                          onChange={(e) => {
                            const updated = [...benefitsList];
                            updated[idx] = { ...benefit, title: e.target.value };
                            updateSectionBody("benefits", updated);
                          }}
                          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Icon Name (Lucide)</label>
                        <input
                          type="text"
                          value={benefit.icon || ""}
                          onChange={(e) => {
                            const updated = [...benefitsList];
                            updated[idx] = { ...benefit, icon: e.target.value };
                            updateSectionBody("benefits", updated);
                          }}
                          placeholder="e.g. Microscope, Cpu, TrendingUp, Award"
                          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Description</label>
                      <textarea
                        rows={2}
                        value={benefit.description || ""}
                        onChange={(e) => {
                          const updated = [...benefitsList];
                          updated[idx] = { ...benefit, description: e.target.value };
                          updateSectionBody("benefits", updated);
                        }}
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm"
                      />
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => {
                    const updated = [...benefitsList, { title: "", description: "", icon: "Award" }];
                    updateSectionBody("benefits", updated);
                  }}
                  className="inline-flex items-center gap-2 rounded-lg border border-dashed border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 w-full justify-center"
                >
                  <Plus className="h-4 w-4 text-[#E8871A]" /> Add Benefit
                </button>
              </div>
            </div>
          )}

          {/* FAQS SECTION */}
          {activeSection === "faqs" && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="font-serif text-xl font-bold text-[#0A1F44]">Career FAQs</h3>
                <button
                  type="button"
                  onClick={() => handleSaveSection("faqs")}
                  disabled={savingKey === "faqs"}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#E8871A] px-4 py-2 text-sm font-bold text-white shadow-xs hover:bg-[#d67a15] disabled:opacity-50"
                >
                  <Save className="h-4 w-4" />
                  {savingKey === "faqs" ? "Saving..." : "Save Section"}
                </button>
              </div>

              <div className="space-y-4">
                {faqsList.map((faq: any, idx: number) => (
                  <div key={idx} className="rounded-xl border border-slate-200 p-4 space-y-3 bg-slate-50/50">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-500">FAQ #{idx + 1}</span>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = faqsList.filter((_: any, i: number) => i !== idx);
                          updateSectionBody("faqs", updated);
                        }}
                        className="text-rose-600 hover:text-rose-800 text-xs font-bold inline-flex items-center gap-1"
                      >
                        <Trash2 className="h-3.5 w-3.5" /> Remove
                      </button>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Question</label>
                      <input
                        type="text"
                        value={faq.question || ""}
                        onChange={(e) => {
                          const updated = [...faqsList];
                          updated[idx] = { ...faq, question: e.target.value };
                          updateSectionBody("faqs", updated);
                        }}
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Answer</label>
                      <textarea
                        rows={3}
                        value={faq.answer || ""}
                        onChange={(e) => {
                          const updated = [...faqsList];
                          updated[idx] = { ...faq, answer: e.target.value };
                          updateSectionBody("faqs", updated);
                        }}
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm"
                      />
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => {
                    const updated = [...faqsList, { question: "", answer: "" }];
                    updateSectionBody("faqs", updated);
                  }}
                  className="inline-flex items-center gap-2 rounded-lg border border-dashed border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 w-full justify-center"
                >
                  <Plus className="h-4 w-4 text-[#E8871A]" /> Add FAQ
                </button>
              </div>
            </div>
          )}

          {/* FORM CONFIG SECTION */}
          {activeSection === "form_config" && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="font-serif text-xl font-bold text-[#0A1F44]">Form Options & Categories</h3>
                <button
                  type="button"
                  onClick={() => handleSaveSection("form_config")}
                  disabled={savingKey === "form_config"}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#E8871A] px-4 py-2 text-sm font-bold text-white shadow-xs hover:bg-[#d67a15] disabled:opacity-50"
                >
                  <Save className="h-4 w-4" />
                  {savingKey === "form_config" ? "Saving..." : "Save Section"}
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1">
                    Job Categories (Comma Separated)
                  </label>
                  <input
                    type="text"
                    value={Array.isArray(formConfigBody.categories) ? formConfigBody.categories.join(", ") : ""}
                    onChange={(e) => {
                      const cats = e.target.value.split(",").map((s) => s.trim()).filter(Boolean);
                      updateSectionBody("form_config", { ...formConfigBody, categories: cats });
                    }}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-[#E8871A] focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1">
                    Departments (JSON Format)
                  </label>
                  <textarea
                    rows={8}
                    value={JSON.stringify(formConfigBody.departments || [], null, 2)}
                    onChange={(e) => {
                      try {
                        const parsed = JSON.parse(e.target.value);
                        updateSectionBody("form_config", { ...formConfigBody, departments: parsed });
                      } catch (err) {
                        // Keep text during editing
                      }
                    }}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 p-3 font-mono text-xs focus:border-[#E8871A] focus:bg-white focus:outline-none"
                  />
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
