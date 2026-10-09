"use client";

import { useState } from "react";
import { Save, Plus, Trash2, CheckCircle2, AlertCircle, Image as ImageIcon } from "lucide-react";
import { updateDepartmentSectionAction } from "@/features/admin/departments/actions";
import { MediaPickerModal, MediaAssetItem } from "./MediaPickerModal";

export interface FacultyMemberItem {
  name: string;
  role?: string;
  designation?: string;
  qualification?: string;
  department?: string;
  image?: string;
  imagePosition?: string;
  desc?: string;
  description?: string;
}

interface FacultySectionEditorProps {
  departmentId: string;
  facultyData: FacultyMemberItem[];
  mentorsTitle?: string;
  mentorsEyebrow?: string;
  mediaAssets?: MediaAssetItem[];
  saved?: boolean;
  error?: string;
}

export function FacultySectionEditor({
  departmentId,
  facultyData = [],
  mentorsTitle = "Faculty & Mentors",
  mentorsEyebrow = "EXPERT FACULTY",
  mediaAssets = [],
  saved,
  error,
}: FacultySectionEditorProps) {
  const [eyebrow, setEyebrow] = useState(mentorsEyebrow);
  const [title, setTitle] = useState(mentorsTitle);
  const [faculty, setFaculty] = useState<FacultyMemberItem[]>(
    facultyData.map((f) => ({
      name: f.name || "",
      role: f.role || f.designation || "",
      designation: f.designation || f.role || "",
      desc: f.desc || f.description || "",
      description: f.description || f.desc || "",
      image: f.image || "",
      imagePosition: f.imagePosition || "center 50%",
      qualification: f.qualification || "",
      department: f.department || "",
    }))
  );

  const [activeMediaIndex, setActiveMediaIndex] = useState<number | null>(null);

  const handleAddFaculty = () => {
    setFaculty([
      ...faculty,
      {
        name: "",
        role: "",
        designation: "",
        qualification: "",
        department: "",
        image: "",
        imagePosition: "center 50%",
        desc: "",
        description: "",
      },
    ]);
  };

  const handleRemoveFaculty = (index: number) => {
    setFaculty(faculty.filter((_, i) => i !== index));
  };

  const handleFacultyChange = (index: number, field: keyof FacultyMemberItem, val: string) => {
    const updated = [...faculty];
    updated[index] = { ...updated[index], [field]: val };
    if (field === "role") updated[index].designation = val;
    if (field === "desc") updated[index].description = val;
    setFaculty(updated);
  };

  const payload = {
    eyebrow,
    title,
    faculty: faculty.filter((f) => f.name.trim() !== ""),
  };

  return (
    <div className="space-y-6">
      {saved && (
        <div className="flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">
          <CheckCircle2 className="h-5 w-5 text-emerald-600" />
          Faculty & Mentors updated successfully.
        </div>
      )}

      {error && (
        <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800">
          <AlertCircle className="h-5 w-5 text-red-600" />
          {error}
        </div>
      )}

      <form action={updateDepartmentSectionAction} className="space-y-6">
        <input type="hidden" name="id" value={departmentId} />
        <input type="hidden" name="section" value="faculty" />
        <input type="hidden" name="payloadJson" value={JSON.stringify(payload)} />

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="font-serif text-xl font-bold text-[#0A1F44]">
              Faculty & Mentors Roster
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Manage faculty professors, technical trainers, designations, full bio descriptions, portrait photos, and focal image positioning.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-bold text-[#0A1F44]">
                Eyebrow
              </label>
              <input
                type="text"
                value={eyebrow}
                onChange={(e) => setEyebrow(e.target.value)}
                placeholder="EXPERT FACULTY"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#E8871A] focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-bold text-[#0A1F44]">
                Section Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Faculty & Mentors"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#E8871A] focus:bg-white font-serif"
              />
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-[#0A1F44]">
                Faculty Members ({faculty.length})
              </h4>
              <button
                type="button"
                onClick={handleAddFaculty}
                className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-[#E8871A] hover:text-white transition"
              >
                <Plus className="h-3.5 w-3.5" />
                Add Faculty Member
              </button>
            </div>

            {faculty.length === 0 ? (
              <div className="rounded-lg border border-dashed border-slate-200 py-8 text-center text-xs font-medium text-slate-400">
                No faculty members added. Click &quot;Add Faculty Member&quot; to add professors.
              </div>
            ) : (
              faculty.map((member, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-4 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E8871A]">
                      Faculty Member #{idx + 1}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleRemoveFaculty(idx)}
                      className="rounded p-1 text-slate-400 hover:bg-red-50 hover:text-red-600 transition"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <label className="mb-1 block text-xs font-bold text-[#0A1F44]">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={member.name}
                        onChange={(e) => handleFacultyChange(idx, "name", e.target.value)}
                        placeholder="Dr. John Doe"
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#E8871A]"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-bold text-[#0A1F44]">
                        Role / Designation *
                      </label>
                      <input
                        type="text"
                        value={member.role || member.designation || ""}
                        onChange={(e) => handleFacultyChange(idx, "role", e.target.value)}
                        placeholder="e.g. Assistant Professor or Technical Trainer"
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#E8871A]"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-bold text-[#0A1F44]">
                        Qualification / Credentials
                      </label>
                      <input
                        type="text"
                        value={member.qualification || ""}
                        onChange={(e) => handleFacultyChange(idx, "qualification", e.target.value)}
                        placeholder="Ph.D., M.Tech (IIT Delhi)"
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#E8871A]"
                      />
                    </div>

                    <div className="sm:col-span-2 flex flex-wrap items-center gap-2">
                      <div className="flex-1">
                        <label className="mb-1 block text-xs font-bold text-[#0A1F44]">
                          Photo Portrait URL
                        </label>
                        <input
                          type="text"
                          value={member.image || ""}
                          onChange={(e) => handleFacultyChange(idx, "image", e.target.value)}
                          placeholder="/programs/computer-science/faculty/prof.webp"
                          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#E8871A]"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => setActiveMediaIndex(idx)}
                        className="mt-5 inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-[#E8871A] hover:text-[#E8871A]"
                      >
                        <ImageIcon className="h-3.5 w-3.5" />
                        Pick Photo
                      </button>
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-bold text-[#0A1F44]">
                        Image Position (Focal Alignment)
                      </label>
                      <input
                        type="text"
                        value={member.imagePosition || "center 50%"}
                        onChange={(e) => handleFacultyChange(idx, "imagePosition", e.target.value)}
                        placeholder="center 50% or center 25%"
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#E8871A]"
                      />
                    </div>

                    <div className="sm:col-span-3">
                      <label className="mb-1 block text-xs font-bold text-[#0A1F44]">
                        Full Bio / Description (Renders on Public Faculty Card)
                      </label>
                      <textarea
                        value={member.desc || member.description || ""}
                        onChange={(e) => handleFacultyChange(idx, "desc", e.target.value)}
                        rows={3}
                        placeholder="Full biography, research publications, patents, and teaching experience..."
                        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm leading-6 outline-none focus:border-[#E8871A]"
                      />
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-[#E8871A] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#F5A623]"
          >
            <Save className="h-4 w-4" />
            Save Faculty Roster ({faculty.length})
          </button>
        </div>
      </form>

      <MediaPickerModal
        isOpen={activeMediaIndex !== null}
        onClose={() => setActiveMediaIndex(null)}
        mediaAssets={mediaAssets}
        onSelect={(url) => {
          if (activeMediaIndex !== null) {
            handleFacultyChange(activeMediaIndex, "image", url);
          }
        }}
      />
    </div>
  );
}
