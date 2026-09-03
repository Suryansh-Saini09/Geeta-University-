"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Send,
  Loader2,
  Building2,
  GraduationCap,
  Sparkles,
  RotateCcw,
  BookOpenCheck,
  UserCheck,
  Award,
  ChevronRight,
} from "lucide-react";
import LegacyEcosystem from "@/components/about/LegacyEcosystem";

interface FeedbackFormData {
  peer_name: string;
  designation: string;
  organization: string;
  interaction_type: string;
  interaction_other: string;
  specialization: string;
  specialization_other: string;
  q1_relevance: string;
  q2_research_trends: string;
  q3_teaching_learning: string;
  q4_experiential: string;
  q5_assessment: string;
}

const initialFormData: FeedbackFormData = {
  peer_name: "",
  designation: "",
  organization: "",
  interaction_type: "",
  interaction_other: "",
  specialization: "",
  specialization_other: "",
  q1_relevance: "",
  q2_research_trends: "",
  q3_teaching_learning: "",
  q4_experiential: "",
  q5_assessment: "",
};

const interactionOptions = [
  "I have conducted a Placement Drive",
  "I have conducted an Internship Drive",
  "I have conducted a Workshop",
  "I have delivered an Expert Lecture/Guest Lecture",
  "I have signed an MOU",
  "I have attended a Conference",
  "other",
];

const specializationOptions = [
  "Computer Science & Engineering",
  "Commerce & Business Management",
  "Pharmacy",
  "Nutrition & Dietetics",
  "Forensic Sciences",
  "Sciences",
  "Humanities & Social Sciences",
  "Agriculture",
  "Hospitality & Hotel Management",
  "Law",
  "other",
];

const ratingOptions = [
  "Strongly disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly agree",
];

const ratingQuestions = [
  {
    id: "q1_relevance",
    label: "The curriculum is relevant & up-to-date.",
    description: "Evaluates current syllabus relevance, technological parity, and industry applicability.",
  },
  {
    id: "q2_research_trends",
    label: "The curriculum reflects current research trends.",
    description: "Evaluates integration of state-of-the-art literature, emerging methodologies, and modern paradigms.",
  },
  {
    id: "q3_teaching_learning",
    label: "Teaching processes support deep learning.",
    description: "Evaluates pedagogical practices, interactive classrooms, and critical thinking development.",
  },
  {
    id: "q4_experiential",
    label: "Experiential learning opportunities are effective.",
    description: "Evaluates internships, laboratory immersions, industrial visits, and project-based coursework.",
  },
  {
    id: "q5_assessment",
    label: "Assessment mechanisms are fair & transparent.",
    description: "Evaluates continuous internal evaluations, rubrics clarity, and outcome-based assessments.",
  },
];

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzgxcb-eVzIMdGNsCYADGyPMIzBIkdhryGD6rIvIQPF1Bjq-KpIzJ4IpXuOYtbZXSY3/exec";

export default function AcademicPeerFeedbackPage() {
  const [formData, setFormData] = useState<FeedbackFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingSelect = (field: keyof FeedbackFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      // Prepare payload formatted for Google Apps Script sheet
      const payload: Record<string, string> = {
        peer_name: formData.peer_name.trim(),
        designation: formData.designation.trim(),
        organization: formData.organization.trim(),
        interaction_type:
          formData.interaction_type === "other"
            ? formData.interaction_other.trim()
            : formData.interaction_type,
        specialization:
          formData.specialization === "other"
            ? formData.specialization_other.trim()
            : formData.specialization,
        q1_relevance: formData.q1_relevance,
        q2_research_trends: formData.q2_research_trends,
        q3_teaching_learning: formData.q3_teaching_learning,
        q4_experiential: formData.q4_experiential,
        q5_assessment: formData.q5_assessment,
      };

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(payload),
      });

      setIsSubmitted(true);
      setFormData(initialFormData);
    } catch (err) {
      console.error("Submission error:", err);
      // Fallback: even with CORS limitations, no-cors fetch might resolve, but if network failure occurs:
      setErrorMsg("Failed to submit feedback. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData(initialFormData);
    setErrorMsg(null);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* ── Page Hero Header ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0A1F44] via-[#0D2857] to-[#0A1F44] pt-32 pb-20 text-white">
        {/* Decorative Grid & Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#E8871A]/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

        <div className="gu-container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            {/* Breadcrumb */}
            <nav className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-300">
              <Link href="/" className="hover:text-[#E8871A] transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              <span className="text-[#E8871A]">Academic Feedback</span>
            </nav>

            {/* Pill Tag */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-[#E8871A]" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Curriculum Review &amp; Quality Assurance
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[52px] leading-tight">
              Academic Peers Feedback on <span className="text-[#E8871A]">Curriculum</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base text-slate-200 md:text-lg leading-relaxed">
              We value the expert insights of distinguished academicians, researchers, and peer educators to continuously refine, innovate, and elevate our academic curriculum in line with NEP 2020 and global standards.
            </p>

            {/* Highlights Bar */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/10 text-left">
              <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3.5 border border-white/10">
                <GraduationCap className="h-5 w-5 text-[#E8871A] shrink-0" />
                <span className="text-xs font-medium text-slate-200">Outcome-Based Education</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3.5 border border-white/10">
                <BookOpenCheck className="h-5 w-5 text-[#E8871A] shrink-0" />
                <span className="text-xs font-medium text-slate-200">Research &amp; Industry Aligned</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3.5 border border-white/10">
                <Award className="h-5 w-5 text-[#E8871A] shrink-0" />
                <span className="text-xs font-medium text-slate-200">Continuous Curriculum Upgradation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Form Section ── */}
      <section className="py-16 md:py-20">
        <div className="gu-container">
          <div className="mx-auto max-w-3xl">
            {isSubmitted ? (
              /* Success State Card */
              <div className="rounded-3xl border border-emerald-100 bg-white p-8 sm:p-12 shadow-xl shadow-slate-200/60 text-center animate-in fade-in duration-300">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/50">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-[#0A1F44]">
                  Thank You for Your Valuable Feedback!
                </h2>
                <p className="mt-4 text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
                  Your insights as an academic peer have been securely recorded. They will play a critical role in our Board of Studies reviews and curriculum modernization initiatives at Geeta University.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={resetForm}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#0A1F44] px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#1A3A6B] active:scale-95 shadow-md"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Submit Another Response
                  </button>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-6 py-3.5 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-100"
                  >
                    Return to Homepage
                  </Link>
                </div>
              </div>
            ) : (
              /* The Feedback Form Card */
              <div className="rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/50 overflow-hidden">
                {/* Form Top Banner */}
                <div className="border-b border-slate-100 bg-gradient-to-r from-[#0A1F44] to-[#1A3A6B] p-6 sm:p-8 text-white">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#E8871A] ring-1 ring-white/20">
                      <UserCheck className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                        Curriculum Evaluation Form
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-300">
                        Please provide your honest appraisal. Fields marked with <span className="text-[#E8871A] font-bold">*</span> are required.
                      </p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-10">
                  {errorMsg && (
                    <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
                      {errorMsg}
                    </div>
                  )}

                  {/* ──────────────── 1. Personal Information ──────────────── */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0A1F44] text-xs font-bold text-[#E8871A]">
                        1
                      </span>
                      <h3 className="font-serif text-lg font-bold text-[#0A1F44]">
                        Personal &amp; Professional Information
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="sm:col-span-2 space-y-2">
                        <label className="block text-sm font-semibold text-slate-700">
                          Name of Peer Reviewer <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="peer_name"
                          required
                          value={formData.peer_name}
                          onChange={handleChange}
                          placeholder="e.g. Dr. Rajesh Sharma"
                          className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition-colors focus:border-[#0A1F44] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0A1F44]/20"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-slate-700">
                          Designation / Position <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="designation"
                          required
                          value={formData.designation}
                          onChange={handleChange}
                          placeholder="e.g. Professor &amp; Dean"
                          className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition-colors focus:border-[#0A1F44] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0A1F44]/20"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-slate-700">
                          Institution / Organization <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="organization"
                          required
                          value={formData.organization}
                          onChange={handleChange}
                          placeholder="e.g. IIT Delhi / Delhi University"
                          className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition-colors focus:border-[#0A1F44] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0A1F44]/20"
                        />
                      </div>
                    </div>
                  </div>

                  {/* ──────────────── 2. Interaction with GU ──────────────── */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0A1F44] text-xs font-bold text-[#E8871A]">
                        2
                      </span>
                      <h3 className="font-serif text-lg font-bold text-[#0A1F44]">
                        Interaction with Geeta University
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-slate-700">
                          Type of Interaction <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="interaction_type"
                          required
                          value={formData.interaction_type}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition-colors focus:border-[#0A1F44] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0A1F44]/20"
                        >
                          <option value="" disabled>
                            Select your interaction type
                          </option>
                          {interactionOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt === "other" ? "Other (Please specify)" : opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      {formData.interaction_type === "other" && (
                        <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-4 space-y-2 animate-in fade-in duration-200">
                          <label className="block text-sm font-semibold text-amber-900">
                            Please specify your interaction <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="interaction_other"
                            required={formData.interaction_type === "other"}
                            value={formData.interaction_other}
                            onChange={handleChange}
                            placeholder="e.g. Member of Board of Studies / Keynote Speaker"
                            className="w-full rounded-xl border border-amber-300 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-[#0A1F44] focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* ──────────────── 3. Field of Specialization ──────────────── */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0A1F44] text-xs font-bold text-[#E8871A]">
                        3
                      </span>
                      <h3 className="font-serif text-lg font-bold text-[#0A1F44]">
                        Field / Area of Specialization
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-slate-700">
                          Field of Specialization <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="specialization"
                          required
                          value={formData.specialization}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition-colors focus:border-[#0A1F44] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0A1F44]/20"
                        >
                          <option value="" disabled>
                            Select your academic discipline
                          </option>
                          {specializationOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt === "other" ? "Other (Please specify)" : opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      {formData.specialization === "other" && (
                        <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-4 space-y-2 animate-in fade-in duration-200">
                          <label className="block text-sm font-semibold text-amber-900">
                            Please specify your field of specialization <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="specialization_other"
                            required={formData.specialization === "other"}
                            value={formData.specialization_other}
                            onChange={handleChange}
                            placeholder="e.g. Artificial Intelligence &amp; Data Science"
                            className="w-full rounded-xl border border-amber-300 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-[#0A1F44] focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* ──────────────── 4. Curriculum Feedback (5 Questions) ──────────────── */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0A1F44] text-xs font-bold text-[#E8871A]">
                        4
                      </span>
                      <div>
                        <h3 className="font-serif text-lg font-bold text-[#0A1F44]">
                          Curriculum Feedback &amp; Appraisal
                        </h3>
                        <p className="text-xs text-slate-500">
                          Rate each parameter on a 5-point scale from Strongly Disagree to Strongly Agree.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {ratingQuestions.map((q, index) => {
                        const fieldKey = q.id as keyof FeedbackFormData;
                        const currentValue = formData[fieldKey];

                        return (
                          <div
                            key={q.id}
                            className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5 transition-all hover:border-slate-300 hover:bg-white"
                          >
                            <div className="mb-3">
                              <span className="text-xs font-bold uppercase tracking-wider text-[#E8871A]">
                                Parameter {index + 1} of 5
                              </span>
                              <h4 className="mt-0.5 text-base font-bold text-[#0A1F44]">
                                {q.label} <span className="text-red-500">*</span>
                              </h4>
                              <p className="text-xs text-slate-500 mt-1">{q.description}</p>
                            </div>

                            {/* Responsive Rating Selector: Interactive Pill Options */}
                            <div className="mt-4 grid grid-cols-2 sm:grid-cols-5 gap-2">
                              {ratingOptions.map((opt) => {
                                const isSelected = currentValue === opt;
                                return (
                                  <button
                                    key={opt}
                                    type="button"
                                    onClick={() => handleRatingSelect(fieldKey, opt)}
                                    className={`flex flex-col items-center justify-center rounded-xl p-2.5 text-center text-xs font-semibold transition-all ${
                                      isSelected
                                        ? "border-[#0A1F44] bg-[#0A1F44] text-white shadow-md shadow-blue-950/20 scale-[1.02]"
                                        : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-100"
                                    }`}
                                  >
                                    <span className="leading-tight">{opt}</span>
                                  </button>
                                );
                              })}
                            </div>

                            {/* Hidden required select for native HTML validation fallback */}
                            <select
                              name={q.id}
                              required
                              value={currentValue}
                              onChange={handleChange}
                              className="sr-only"
                              tabIndex={-1}
                              aria-hidden="true"
                            >
                              <option value="" disabled>
                                Select
                              </option>
                              {ratingOptions.map((opt) => (
                                <option key={opt} value={opt}>
                                  {opt}
                                </option>
                              ))}
                            </select>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 border-t border-slate-100">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative flex w-full items-center justify-center gap-3 rounded-2xl bg-[#E8871A] py-4 px-8 text-base font-bold text-white shadow-lg shadow-amber-500/25 transition-all hover:bg-[#F5A623] hover:shadow-amber-500/40 active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          <span>Submitting Your Feedback...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                          <span>Submit Academic Peer Feedback</span>
                        </>
                      )}
                    </button>
                    <p className="mt-3 text-center text-xs text-slate-500">
                      By submitting this form, you contribute to academic excellence and continuous syllabus refinement at Geeta University.
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Legacy & Ecosystem Section ── */}
      <LegacyEcosystem
        id="legacy-ecosystem"
        contextText="SPBSB and academic departments benefit from the integrated ecosystem of:"
      />
    </div>
  );
}
