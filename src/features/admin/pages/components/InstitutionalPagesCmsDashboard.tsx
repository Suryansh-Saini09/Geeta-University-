"use client";

import { useState } from "react";
import {
  Save,
  CheckCircle2,
  AlertCircle,
  Plus,
  Trash2,
  Briefcase,
  Phone,
  FileCheck,
  GraduationCap,
  Newspaper,
  Sparkles,
} from "lucide-react";
import { updatePageSectionAction } from "@/features/admin/pages/actions";
import {
  CmsImagePreviewInput,
  CmsStringRepeater,
} from "@/features/admin/pages/components/CmsFieldHelpers";

interface InstitutionalPagesCmsDashboardProps {
  pageSlug: string;
  initialData: {
    sections: Record<string, any>;
    seo: any;
  };
}

export function InstitutionalPagesCmsDashboard({
  pageSlug,
  initialData,
}: InstitutionalPagesCmsDashboardProps) {
  const [sectionsData, setSectionsData] = useState<Record<string, any>>(initialData.sections || {});
  const [activeSection, setActiveSection] = useState<string>(() => {
    const keys = Object.keys(initialData.sections || {});
    return keys.length > 0 ? keys[0] : "hero";
  });

  const [savingKey, setSavingKey] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const sectionKeys = Object.keys(sectionsData);

  const handleSaveSection = async (key: string) => {
    setSavingKey(key);
    setFeedback(null);
    try {
      const section = sectionsData[key];
      const body = section?.body || section || {};
      const res = await updatePageSectionAction(pageSlug, key, body);
      if (res.success) {
        setFeedback({ type: "success", message: `Saved ${key} section for /${pageSlug} to Aiven MySQL!` });
      } else {
        setFeedback({ type: "error", message: res.error || "Failed to save section" });
      }
    } catch (err: any) {
      setFeedback({ type: "error", message: err.message || "An unexpected error occurred" });
    } finally {
      setSavingKey(null);
    }
  };

  const updateBody = (key: string, updater: (prev: any) => any) => {
    setSectionsData((prev) => {
      const current = prev[key]?.body || prev[key] || {};
      const nextBody = updater(current);
      return {
        ...prev,
        [key]: {
          ...(prev[key] || {}),
          body: nextBody,
        },
      };
    });
  };

  const getBody = (key: string) => {
    return sectionsData[key]?.body || sectionsData[key] || {};
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <h2 className="font-serif text-3xl font-bold text-[#0A1F44] capitalize">
            {pageSlug.replace(/-/g, " ")} CMS
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Manage live content sections for <code className="bg-slate-100 px-1 py-0.5 rounded font-mono">/{pageSlug}</code> stored in Aiven MySQL.
          </p>
        </div>
      </div>

      {/* Feedback Alert */}
      {feedback && (
        <div
          role="status"
          className={`flex items-center gap-3 rounded-xl p-4 text-sm font-medium ${
            feedback.type === "success"
              ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
              : "bg-rose-50 text-rose-800 border border-rose-200"
          }`}
        >
          {feedback.type === "success" ? (
            <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
          ) : (
            <AlertCircle className="h-5 w-5 text-rose-600 shrink-0" />
          )}
          <span>{feedback.message}</span>
        </div>
      )}

      {/* Section Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-2">
        {sectionKeys.map((key) => {
          const isActive = activeSection === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setActiveSection(key)}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all capitalize ${
                isActive
                  ? "bg-[#0A1F44] text-white shadow-md shadow-slate-900/10"
                  : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              <span>{key.replace(/_/g, " ")}</span>
            </button>
          );
        })}
      </div>

      {/* Active Section Content Pane */}
      {activeSection && (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h3 className="font-serif text-lg font-bold text-[#0A1F44] capitalize">
                {activeSection.replace(/_/g, " ")} Section
              </h3>
              <p className="text-xs text-slate-500">Edit values and save to Aiven MySQL database.</p>
            </div>
            <button
              type="button"
              onClick={() => handleSaveSection(activeSection)}
              disabled={savingKey === activeSection}
              className="inline-flex items-center gap-2 rounded-xl bg-[#E8871A] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#d4760e] disabled:opacity-50"
            >
              <Save className="h-4 w-4" />
              {savingKey === activeSection ? "Saving..." : "Save to Aiven"}
            </button>
          </div>

          {/* Form Fields Generator based on Section Content */}
          {(() => {
            const body = getBody(activeSection);
            const keys = Object.keys(body);

            return (
              <div className="space-y-4">
                {keys.map((k) => {
                  const val = body[k];

                  // Array of strings -> CmsStringRepeater
                  if (Array.isArray(val) && (val.length === 0 || typeof val[0] === "string")) {
                    return (
                      <CmsStringRepeater
                        key={k}
                        title={k.replace(/_/g, " ").toUpperCase()}
                        items={val}
                        onChange={(next) => updateBody(activeSection, (b) => ({ ...b, [k]: next }))}
                        placeholder={`Enter ${k} item...`}
                      />
                    );
                  }

                  // Array of objects -> render items list editor
                  if (Array.isArray(val) && val.length > 0 && typeof val[0] === "object") {
                    return (
                      <div key={k} className="space-y-3 rounded-xl border border-slate-200 bg-slate-50/50 p-4">
                        <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A1F44]">
                            {k.replace(/_/g, " ")} ({val.length} items)
                          </h4>
                          <button
                            type="button"
                            onClick={() => {
                              const template = { ...val[0], id: `item-${Date.now()}` };
                              Object.keys(template).forEach((prop) => {
                                if (prop !== "id") template[prop] = typeof template[prop] === "number" ? 0 : "";
                              });
                              updateBody(activeSection, (b) => ({ ...b, [k]: [...val, template] }));
                            }}
                            className="inline-flex items-center gap-1 text-xs font-bold text-[#0A1F44] hover:text-[#E8871A]"
                          >
                            <Plus className="h-3.5 w-3.5" /> Add Row
                          </button>
                        </div>

                        <div className="space-y-3">
                          {val.map((item: any, idx: number) => (
                            <div key={item.id || idx} className="rounded-lg border border-slate-200 bg-white p-3 space-y-2">
                              <div className="flex justify-between items-center text-xs font-bold text-slate-500">
                                <span>#{idx + 1} {item.title || item.name || item.city || item.category || ""}</span>
                                <button
                                  type="button"
                                  onClick={() => {
                                    const next = val.filter((_: any, i: number) => i !== idx);
                                    updateBody(activeSection, (b) => ({ ...b, [k]: next }));
                                  }}
                                  className="text-rose-600 hover:text-rose-800"
                                >
                                  <Trash2 className="h-3.5 w-3.5" />
                                </button>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {Object.keys(item).map((prop) => {
                                  if (prop === "id") return null;
                                  if (typeof item[prop] === "object") return null;
                                  return (
                                    <div key={prop}>
                                      <label className="block text-[10px] font-bold text-slate-500 uppercase">{prop}</label>
                                      <input
                                        type="text"
                                        value={item[prop] || ""}
                                        onChange={(e) => {
                                          const next = [...val];
                                          next[idx] = { ...next[idx], [prop]: e.target.value };
                                          updateBody(activeSection, (b) => ({ ...b, [k]: next }));
                                        }}
                                        className="w-full rounded border border-slate-200 px-2 py-1 text-xs"
                                      />
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  // Image field
                  if (typeof val === "string" && (k.toLowerCase().includes("image") || k.toLowerCase().includes("icon"))) {
                    return (
                      <CmsImagePreviewInput
                        key={k}
                        label={k.replace(/_/g, " ")}
                        value={val}
                        onChange={(url) => updateBody(activeSection, (b) => ({ ...b, [k]: url }))}
                        placeholder="/images/example.webp"
                      />
                    );
                  }

                  // Long text / description / paragraphs
                  if (typeof val === "string" && val.length > 80) {
                    return (
                      <div key={k}>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                          {k.replace(/_/g, " ")}
                        </label>
                        <textarea
                          rows={3}
                          value={val}
                          onChange={(e) => updateBody(activeSection, (b) => ({ ...b, [k]: e.target.value }))}
                          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-[#0A1F44]"
                        />
                      </div>
                    );
                  }

                  // General string / number field
                  return (
                    <div key={k}>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                        {k.replace(/_/g, " ")}
                      </label>
                      <input
                        type="text"
                        value={typeof val === "string" || typeof val === "number" ? val : JSON.stringify(val)}
                        onChange={(e) => updateBody(activeSection, (b) => ({ ...b, [k]: e.target.value }))}
                        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-[#0A1F44]"
                      />
                    </div>
                  );
                })}
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
}
