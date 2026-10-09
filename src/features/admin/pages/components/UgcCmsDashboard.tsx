"use client";

import { useState } from "react";
import {
  Save,
  FileCheck,
  FileText,
  Award,
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

interface UgcCmsDashboardProps {
  initialData: {
    sections: Record<string, any>;
    seo: any;
  };
}

const SECTION_KEYS = [
  { key: "hero", label: "Hero Banner", icon: FileCheck },
  { key: "documents", label: "Statutory Documents", icon: FileText },
  { key: "approvals", label: "Approvals & Recognitions", icon: Award },
  { key: "callout_cta", label: "Bottom CTA Banner", icon: ArrowRight },
  { key: "seo", label: "SEO Metadata", icon: ImageIcon },
];

export function UgcCmsDashboard({ initialData }: UgcCmsDashboardProps) {
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
        const res = await updatePageSeoAction("ugc", seoData);
        if (res.success) {
          setFeedback({ type: "success", message: "SEO Metadata updated successfully!" });
        } else {
          setFeedback({ type: "error", message: res.error || "Failed to update SEO" });
        }
      } else {
        const currentBody = sectionsData[key]?.body || {};
        const res = await updatePageSectionAction("ugc", key, currentBody);
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
  const documentsList = Array.isArray(sectionsData.documents?.body) ? sectionsData.documents.body : [];
  const approvalsList = Array.isArray(sectionsData.approvals?.body) ? sectionsData.approvals.body : [];
  const ctaBody = sectionsData.callout_cta?.body || {};

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="font-serif text-3xl font-bold text-[#0A1F44]">UGC Documents CMS Dashboard</h2>
          <p className="mt-1 text-sm text-slate-600">
            Manage public UGC Accreditation & Statutory Documents, Government Approvals, and downloads.
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
              </div>
            </div>
          )}

          {/* DOCUMENTS SECTION */}
          {activeSection === "documents" && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="font-serif text-xl font-bold text-[#0A1F44]">Statutory Documents (PDFs & Links)</h3>
                <button
                  type="button"
                  onClick={() => handleSaveSection("documents")}
                  disabled={savingKey === "documents"}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#E8871A] px-4 py-2 text-sm font-bold text-white shadow-xs hover:bg-[#d67a15] disabled:opacity-50"
                >
                  <Save className="h-4 w-4" />
                  {savingKey === "documents" ? "Saving..." : "Save Section"}
                </button>
              </div>

              <div className="space-y-4">
                {documentsList.map((doc: any, idx: number) => (
                  <div key={idx} className="rounded-xl border border-slate-200 p-4 space-y-3 bg-slate-50/50">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-500">Document #{idx + 1} ({doc.title || "New Document"})</span>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = documentsList.filter((_: any, i: number) => i !== idx);
                          updateSectionBody("documents", updated);
                        }}
                        className="text-rose-600 hover:text-rose-800 text-xs font-bold inline-flex items-center gap-1"
                      >
                        <Trash2 className="h-3.5 w-3.5" /> Remove
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Document Title</label>
                        <input
                          type="text"
                          value={doc.title || ""}
                          onChange={(e) => {
                            const updated = [...documentsList];
                            updated[idx] = { ...doc, title: e.target.value };
                            updateSectionBody("documents", updated);
                          }}
                          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-bold"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Document File URL (PDF)</label>
                        <input
                          type="text"
                          value={doc.fileUrl || ""}
                          onChange={(e) => {
                            const updated = [...documentsList];
                            updated[idx] = { ...doc, fileUrl: e.target.value };
                            updateSectionBody("documents", updated);
                          }}
                          placeholder="https://.../document.pdf or /pdf/doc.pdf"
                          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-mono text-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Description</label>
                      <textarea
                        rows={2}
                        value={doc.description || ""}
                        onChange={(e) => {
                          const updated = [...documentsList];
                          updated[idx] = { ...doc, description: e.target.value };
                          updateSectionBody("documents", updated);
                        }}
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm"
                      />
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => {
                    const updated = [...documentsList, { id: `doc-${Date.now()}`, title: "", description: "", fileUrl: "", fileType: "pdf", isExternal: true, icon: "FileText" }];
                    updateSectionBody("documents", updated);
                  }}
                  className="inline-flex items-center gap-2 rounded-lg border border-dashed border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 w-full justify-center"
                >
                  <Plus className="h-4 w-4 text-[#E8871A]" /> Add Document
                </button>
              </div>
            </div>
          )}

          {/* APPROVALS SECTION */}
          {activeSection === "approvals" && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="font-serif text-xl font-bold text-[#0A1F44]">Government Approvals & Recognitions</h3>
                <button
                  type="button"
                  onClick={() => handleSaveSection("approvals")}
                  disabled={savingKey === "approvals"}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#E8871A] px-4 py-2 text-sm font-bold text-white shadow-xs hover:bg-[#d67a15] disabled:opacity-50"
                >
                  <Save className="h-4 w-4" />
                  {savingKey === "approvals" ? "Saving..." : "Save Section"}
                </button>
              </div>

              <div className="space-y-4">
                {approvalsList.map((appr: any, idx: number) => (
                  <div key={idx} className="rounded-xl border border-slate-200 p-4 space-y-3 bg-slate-50/50">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-500">Approval #{idx + 1} ({appr.title || "New Approval"})</span>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = approvalsList.filter((_: any, i: number) => i !== idx);
                          updateSectionBody("approvals", updated);
                        }}
                        className="text-rose-600 hover:text-rose-800 text-xs font-bold inline-flex items-center gap-1"
                      >
                        <Trash2 className="h-3.5 w-3.5" /> Remove
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Approval Title</label>
                        <input
                          type="text"
                          value={appr.title || ""}
                          onChange={(e) => {
                            const updated = [...approvalsList];
                            updated[idx] = { ...appr, title: e.target.value };
                            updateSectionBody("approvals", updated);
                          }}
                          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-bold"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Authority Name</label>
                        <input
                          type="text"
                          value={appr.authority || ""}
                          onChange={(e) => {
                            const updated = [...approvalsList];
                            updated[idx] = { ...appr, authority: e.target.value };
                            updateSectionBody("approvals", updated);
                          }}
                          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Act / Section Details</label>
                      <input
                        type="text"
                        value={appr.act || ""}
                        onChange={(e) => {
                          const updated = [...approvalsList];
                          updated[idx] = { ...appr, act: e.target.value };
                          updateSectionBody("approvals", updated);
                        }}
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Description</label>
                      <textarea
                        rows={2}
                        value={appr.description || ""}
                        onChange={(e) => {
                          const updated = [...approvalsList];
                          updated[idx] = { ...appr, description: e.target.value };
                          updateSectionBody("approvals", updated);
                        }}
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm"
                      />
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => {
                    const updated = [...approvalsList, { id: `approval-${Date.now()}`, title: "", authority: "", act: "", description: "", badgeLabel: "Recognized" }];
                    updateSectionBody("approvals", updated);
                  }}
                  className="inline-flex items-center gap-2 rounded-lg border border-dashed border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 w-full justify-center"
                >
                  <Plus className="h-4 w-4 text-[#E8871A]" /> Add Approval Card
                </button>
              </div>
            </div>
          )}

          {/* CALLOUT CTA SECTION */}
          {activeSection === "callout_cta" && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="font-serif text-xl font-bold text-[#0A1F44]">Bottom Callout Banner</h3>
                <button
                  type="button"
                  onClick={() => handleSaveSection("callout_cta")}
                  disabled={savingKey === "callout_cta"}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#E8871A] px-4 py-2 text-sm font-bold text-white shadow-xs hover:bg-[#d67a15] disabled:opacity-50"
                >
                  <Save className="h-4 w-4" />
                  {savingKey === "callout_cta" ? "Saving..." : "Save Section"}
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1">
                    Callout Title
                  </label>
                  <input
                    type="text"
                    value={ctaBody.title || ""}
                    onChange={(e) => updateSectionBody("callout_cta", { ...ctaBody, title: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-[#E8871A] focus:bg-white focus:outline-none"
                  />
                </div>

                <CmsAutoTextarea
                  label="Callout Description"
                  value={ctaBody.description || ""}
                  onChange={(val) => updateSectionBody("callout_cta", { ...ctaBody, description: val })}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1">
                      Button Text
                    </label>
                    <input
                      type="text"
                      value={ctaBody.buttonText || ""}
                      onChange={(e) => updateSectionBody("callout_cta", { ...ctaBody, buttonText: e.target.value })}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-[#E8871A] focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1">
                      Button Link (href)
                    </label>
                    <input
                      type="text"
                      value={ctaBody.buttonHref || ""}
                      onChange={(e) => updateSectionBody("callout_cta", { ...ctaBody, buttonHref: e.target.value })}
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
