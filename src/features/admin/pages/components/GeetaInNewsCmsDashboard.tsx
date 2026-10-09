"use client";

import { useState, useMemo } from "react";
import {
  Save,
  Newspaper,
  Calendar,
  Search,
  Plus,
  Trash2,
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { updatePageSectionAction, updatePageSeoAction } from "@/features/admin/pages/actions";
import {
  CmsImagePreviewInput,
  CmsAutoTextarea,
} from "@/features/admin/pages/components/CmsFieldHelpers";

interface GeetaInNewsCmsDashboardProps {
  initialData: {
    sections: Record<string, any>;
    seo: any;
  };
}

const SECTION_KEYS = [
  { key: "hero", label: "Hero Banner", icon: Newspaper },
  { key: "news_items", label: "Press Clippings & Coverage", icon: Newspaper },
  { key: "seo", label: "SEO Metadata", icon: ImageIcon },
];

const ITEMS_PER_PAGE = 20;

export function GeetaInNewsCmsDashboard({ initialData }: GeetaInNewsCmsDashboardProps) {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [sectionsData, setSectionsData] = useState<Record<string, any>>(initialData.sections || {});
  const [seoData, setSeoData] = useState<any>(initialData.seo || {});

  const [savingKey, setSavingKey] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  // Search & Pagination state for news clippings manager
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSaveSection = async (key: string) => {
    setSavingKey(key);
    setFeedback(null);
    try {
      if (key === "seo") {
        const res = await updatePageSeoAction("geeta-in-news", seoData);
        if (res.success) {
          setFeedback({ type: "success", message: "SEO Metadata updated successfully!" });
        } else {
          setFeedback({ type: "error", message: res.error || "Failed to update SEO" });
        }
      } else {
        const currentBody = sectionsData[key]?.body || {};
        const res = await updatePageSectionAction("geeta-in-news", key, currentBody);
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
  const newsItemsList = Array.isArray(sectionsData.news_items?.body) ? sectionsData.news_items.body : [];

  // Filtered news items
  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return newsItemsList;
    const q = searchQuery.toLowerCase();
    return newsItemsList.filter(
      (item: any) =>
        (item.title && item.title.toLowerCase().includes(q)) ||
        (item.publication && item.publication.toLowerCase().includes(q)) ||
        (item.date && item.date.includes(q))
    );
  }, [newsItemsList, searchQuery]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE) || 1;
  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredItems, currentPage]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="font-serif text-3xl font-bold text-[#0A1F44]">Geeta In News CMS Dashboard</h2>
          <p className="mt-1 text-sm text-slate-600">
            Manage public Geeta in News press clippings, newspaper coverage dates, thumbnails, and full-size images.
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
                {sec.key === "news_items" && (
                  <span className="rounded-full bg-orange-100 px-2 py-0.5 text-xs font-bold text-[#E8871A]">
                    {newsItemsList.length}
                  </span>
                )}
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

          {/* NEWS ITEMS SECTION */}
          {activeSection === "news_items" && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#0A1F44]">
                    Press Clippings ({newsItemsList.length} Total Records)
                  </h3>
                  <p className="text-xs text-slate-500">
                    Add, edit, or reorder news clippings published across leading newspapers.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      const newItem = {
                        id: String(Date.now()),
                        title: "New Media Coverage",
                        publication: "Punjab Kesari",
                        date: new Date().toLocaleDateString("en-IN"),
                        image: "https://geetauniversity.edu.in/uploads/all/2566/conversions/10-May-full.webp",
                        fullImage: "https://geetauniversity.edu.in/uploads/all/2566/10-May.jpg",
                      };
                      updateSectionBody("news_items", [newItem, ...newsItemsList]);
                    }}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
                  >
                    <Plus className="h-4 w-4 text-[#E8871A]" /> Add Clipping
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSaveSection("news_items")}
                    disabled={savingKey === "news_items"}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#E8871A] px-4 py-2 text-sm font-bold text-white shadow-xs hover:bg-[#d67a15] disabled:opacity-50"
                  >
                    <Save className="h-4 w-4" />
                    {savingKey === "news_items" ? "Saving..." : "Save All Clippings"}
                  </button>
                </div>
              </div>

              {/* Search filter bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter clippings by publication, title, date..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-4 text-sm focus:border-[#E8871A] focus:bg-white focus:outline-none"
                />
              </div>

              {/* Paginated News Items List */}
              <div className="space-y-4">
                {paginatedItems.map((item: any) => {
                  const globalIdx = newsItemsList.findIndex((i: any) => i.id === item.id);

                  return (
                    <div key={item.id} className="rounded-xl border border-slate-200 p-4 space-y-3 bg-slate-50/50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold text-slate-500">ID #{item.id}</span>
                          <span className="rounded-full bg-slate-200 px-2 py-0.5 text-[11px] font-bold text-slate-700">
                            {item.publication}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            const updated = newsItemsList.filter((i: any) => i.id !== item.id);
                            updateSectionBody("news_items", updated);
                          }}
                          className="text-rose-600 hover:text-rose-800 text-xs font-bold inline-flex items-center gap-1"
                        >
                          <Trash2 className="h-3.5 w-3.5" /> Remove
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">Title</label>
                          <input
                            type="text"
                            value={item.title || ""}
                            onChange={(e) => {
                              if (globalIdx === -1) return;
                              const updated = [...newsItemsList];
                              updated[globalIdx] = { ...item, title: e.target.value };
                              updateSectionBody("news_items", updated);
                            }}
                            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-bold"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">Publication Name</label>
                          <input
                            type="text"
                            value={item.publication || ""}
                            onChange={(e) => {
                              if (globalIdx === -1) return;
                              const updated = [...newsItemsList];
                              updated[globalIdx] = { ...item, publication: e.target.value };
                              updateSectionBody("news_items", updated);
                            }}
                            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">Publication Date</label>
                          <input
                            type="text"
                            value={item.date || ""}
                            onChange={(e) => {
                              if (globalIdx === -1) return;
                              const updated = [...newsItemsList];
                              updated[globalIdx] = { ...item, date: e.target.value };
                              updateSectionBody("news_items", updated);
                            }}
                            placeholder="DD-MM-YYYY"
                            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-mono text-xs"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">Thumbnail Image URL</label>
                          <input
                            type="text"
                            value={item.image || ""}
                            onChange={(e) => {
                              if (globalIdx === -1) return;
                              const updated = [...newsItemsList];
                              updated[globalIdx] = { ...item, image: e.target.value };
                              updateSectionBody("news_items", updated);
                            }}
                            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-mono"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">Full-Size Image URL</label>
                          <input
                            type="text"
                            value={item.fullImage || ""}
                            onChange={(e) => {
                              if (globalIdx === -1) return;
                              const updated = [...newsItemsList];
                              updated[globalIdx] = { ...item, fullImage: e.target.value };
                              updateSectionBody("news_items", updated);
                            }}
                            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-mono"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Pagination controls */}
              {totalPages > 1 && (
                <div className="flex items-center justify-between border-t border-slate-200 pt-4 text-xs font-bold text-slate-600">
                  <span>
                    Page {currentPage} of {totalPages} ({filteredItems.length} items)
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="rounded-lg border border-slate-300 p-2 hover:bg-slate-50 disabled:opacity-40"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      className="rounded-lg border border-slate-300 p-2 hover:bg-slate-50 disabled:opacity-40"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}
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
