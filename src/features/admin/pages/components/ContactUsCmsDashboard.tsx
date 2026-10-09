"use client";

import { useState } from "react";
import {
  Save,
  PhoneCall,
  MapPin,
  Building2,
  Map,
  Plus,
  Trash2,
  Image as ImageIcon,
} from "lucide-react";
import { updatePageSectionAction, updatePageSeoAction } from "@/features/admin/pages/actions";
import {
  CmsImagePreviewInput,
  CmsAutoTextarea,
} from "@/features/admin/pages/components/CmsFieldHelpers";

interface ContactUsCmsDashboardProps {
  initialData: {
    sections: Record<string, any>;
    seo: any;
  };
}

const SECTION_KEYS = [
  { key: "hero", label: "Hero Banner", icon: PhoneCall },
  { key: "main_info", label: "Campus & Contact Info", icon: MapPin },
  { key: "offices", label: "Admission Offices", icon: Building2 },
  { key: "map", label: "Google Map Embed", icon: Map },
  { key: "seo", label: "SEO Metadata", icon: ImageIcon },
];

export function ContactUsCmsDashboard({ initialData }: ContactUsCmsDashboardProps) {
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
        const res = await updatePageSeoAction("contact-us", seoData);
        if (res.success) {
          setFeedback({ type: "success", message: "SEO Metadata updated successfully!" });
        } else {
          setFeedback({ type: "error", message: res.error || "Failed to update SEO" });
        }
      } else {
        const currentBody = sectionsData[key]?.body || {};
        const res = await updatePageSectionAction("contact-us", key, currentBody);
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
  const mainInfoBody = sectionsData.main_info?.body || {};
  const officesList = Array.isArray(sectionsData.offices?.body) ? sectionsData.offices.body : [];
  const mapBody = sectionsData.map?.body || {};

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="font-serif text-3xl font-bold text-[#0A1F44]">Contact Us CMS Dashboard</h2>
          <p className="mt-1 text-sm text-slate-600">
            Manage public Contact page hero, Panipat main campus details, regional admission centers, and map embed.
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

          {/* MAIN INFO SECTION */}
          {activeSection === "main_info" && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="font-serif text-xl font-bold text-[#0A1F44]">Campus & Main Contact Details</h3>
                <button
                  type="button"
                  onClick={() => handleSaveSection("main_info")}
                  disabled={savingKey === "main_info"}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#E8871A] px-4 py-2 text-sm font-bold text-white shadow-xs hover:bg-[#d67a15] disabled:opacity-50"
                >
                  <Save className="h-4 w-4" />
                  {savingKey === "main_info" ? "Saving..." : "Save Section"}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1">
                    Main Campus Location / Address
                  </label>
                  <input
                    type="text"
                    value={mainInfoBody.location || ""}
                    onChange={(e) => updateSectionBody("main_info", { ...mainInfoBody, location: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-[#E8871A] focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1">
                    Location Landmark / Additional Detail
                  </label>
                  <input
                    type="text"
                    value={mainInfoBody.locationDetails || ""}
                    onChange={(e) => updateSectionBody("main_info", { ...mainInfoBody, locationDetails: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-[#E8871A] focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1">
                    Primary Phone Number
                  </label>
                  <input
                    type="text"
                    value={mainInfoBody.phonePrimary || ""}
                    onChange={(e) => updateSectionBody("main_info", { ...mainInfoBody, phonePrimary: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-[#E8871A] focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1">
                    Secondary Phone Number
                  </label>
                  <input
                    type="text"
                    value={mainInfoBody.phoneSecondary || ""}
                    onChange={(e) => updateSectionBody("main_info", { ...mainInfoBody, phoneSecondary: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-[#E8871A] focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1">
                    Primary General Email
                  </label>
                  <input
                    type="email"
                    value={mainInfoBody.emailPrimary || ""}
                    onChange={(e) => updateSectionBody("main_info", { ...mainInfoBody, emailPrimary: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-[#E8871A] focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1">
                    Admissions Email
                  </label>
                  <input
                    type="email"
                    value={mainInfoBody.emailAdmissions || ""}
                    onChange={(e) => updateSectionBody("main_info", { ...mainInfoBody, emailAdmissions: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-[#E8871A] focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1">
                    Working Hours
                  </label>
                  <input
                    type="text"
                    value={mainInfoBody.workingHours || ""}
                    onChange={(e) => updateSectionBody("main_info", { ...mainInfoBody, workingHours: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:border-[#E8871A] focus:bg-white focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* OFFICES SECTION */}
          {activeSection === "offices" && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="font-serif text-xl font-bold text-[#0A1F44]">Regional Admission Offices</h3>
                <button
                  type="button"
                  onClick={() => handleSaveSection("offices")}
                  disabled={savingKey === "offices"}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#E8871A] px-4 py-2 text-sm font-bold text-white shadow-xs hover:bg-[#d67a15] disabled:opacity-50"
                >
                  <Save className="h-4 w-4" />
                  {savingKey === "offices" ? "Saving..." : "Save Section"}
                </button>
              </div>

              <div className="space-y-4">
                {officesList.map((office: any, idx: number) => (
                  <div key={idx} className="rounded-xl border border-slate-200 p-4 space-y-3 bg-slate-50/50">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-500">Office #{idx + 1} ({office.city || "New Office"})</span>
                      <button
                        type="button"
                        onClick={() => {
                          const updated = officesList.filter((_: any, i: number) => i !== idx);
                          updateSectionBody("offices", updated);
                        }}
                        className="text-rose-600 hover:text-rose-800 text-xs font-bold inline-flex items-center gap-1"
                      >
                        <Trash2 className="h-3.5 w-3.5" /> Remove
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Office Name / City</label>
                        <input
                          type="text"
                          value={office.city || ""}
                          onChange={(e) => {
                            const updated = [...officesList];
                            updated[idx] = { ...office, city: e.target.value };
                            updateSectionBody("offices", updated);
                          }}
                          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-bold"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                        <input
                          type="text"
                          value={office.phone || ""}
                          onChange={(e) => {
                            const updated = [...officesList];
                            updated[idx] = { ...office, phone: e.target.value };
                            updateSectionBody("offices", updated);
                          }}
                          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Full Address</label>
                      <input
                        type="text"
                        value={office.address || ""}
                        onChange={(e) => {
                          const updated = [...officesList];
                          updated[idx] = { ...office, address: e.target.value };
                          updateSectionBody("offices", updated);
                        }}
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Landmark</label>
                      <input
                        type="text"
                        value={office.landmark || ""}
                        onChange={(e) => {
                          const updated = [...officesList];
                          updated[idx] = { ...office, landmark: e.target.value };
                          updateSectionBody("offices", updated);
                        }}
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm"
                      />
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => {
                    const updated = [...officesList, { id: `office-${Date.now()}`, city: "", address: "", landmark: "", phone: "+91 92787 68000" }];
                    updateSectionBody("offices", updated);
                  }}
                  className="inline-flex items-center gap-2 rounded-lg border border-dashed border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 w-full justify-center"
                >
                  <Plus className="h-4 w-4 text-[#E8871A]" /> Add Regional Office
                </button>
              </div>
            </div>
          )}

          {/* MAP SECTION */}
          {activeSection === "map" && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="font-serif text-xl font-bold text-[#0A1F44]">Google Map Embed</h3>
                <button
                  type="button"
                  onClick={() => handleSaveSection("map")}
                  disabled={savingKey === "map"}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#E8871A] px-4 py-2 text-sm font-bold text-white shadow-xs hover:bg-[#d67a15] disabled:opacity-50"
                >
                  <Save className="h-4 w-4" />
                  {savingKey === "map" ? "Saving..." : "Save Section"}
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1F44] mb-1">
                    Google Maps Embed URL (iframe src)
                  </label>
                  <textarea
                    rows={4}
                    value={mapBody.googleMapEmbedUrl || ""}
                    onChange={(e) => updateSectionBody("map", { ...mapBody, googleMapEmbedUrl: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 p-3 font-mono text-xs focus:border-[#E8871A] focus:bg-white focus:outline-none"
                  />
                </div>

                {mapBody.googleMapEmbedUrl && (
                  <div className="rounded-xl border border-slate-200 overflow-hidden h-64">
                    <iframe
                      src={mapBody.googleMapEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                )}
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
