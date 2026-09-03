"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Send,
  Loader2,
  Briefcase,
  Building2,
  Sparkles,
  RotateCcw,
  ChevronRight,
  TrendingUp,
  Target,
  Award,
  UserCheck,
} from "lucide-react";
import LegacyEcosystem from "@/components/about/LegacyEcosystem";

interface EmployerFormData {
  employer_name: string;
  designation: string;
  organization: string;
  program_reviewed: string;
  q1_industry_alignment: string;
  q2_industry_trends: string;
  q3_critical_thinking: string;
  q4_experiential_learning: string;
  q5_assessment_alignment: string;
}

const initialFormData: EmployerFormData = {
  employer_name: "",
  designation: "",
  organization: "",
  program_reviewed: "",
  q1_industry_alignment: "",
  q2_industry_trends: "",
  q3_critical_thinking: "",
  q4_experiential_learning: "",
  q5_assessment_alignment: "",
};

const programOptions = [
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
    id: "q1_industry_alignment",
    label: "The curriculum is well-structured and aligned with current industry standards.",
    description: "Evaluates syllabus architecture, industry compliance, and practical relevance of topics.",
  },
  {
    id: "q2_industry_trends",
    label: "The course content reflects advancements in the discipline as per industry trends.",
    description: "Assesses incorporation of cutting-edge technologies, modern software, and industry best practices.",
  },
  {
    id: "q3_critical_thinking",
    label: "Teaching-learning methods encourage critical thinking required in the industry.",
    description: "Evaluates analytical reasoning, problem-solving, and decision-making capabilities developed in students.",
  },
  {
    id: "q4_experiential_learning",
    label: "Laboratory, project work, field work, and experiential components enhance learning outcomes.",
    description: "Evaluates hands-on lab experiments, industry live projects, internships, and capstone coursework.",
  },
  {
    id: "q5_assessment_alignment",
    label: "Assessment processes are in line with what industry expects from candidates.",
    description: "Assesses evaluation rubrics, performance standards, technical testing, and professional competency checks.",
  },
];

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzgxcb-eVzIMdGNsCYADGyPMIzBIkdhryGD6rIvIQPF1Bjq-KpIzJ4IpXuOYtbZXSY3/exec";

export default function EmployerFeedbackPage() {
  const [formData, setFormData] = useState<EmployerFormData>(initialFormData);
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

  const handleRatingSelect = (field: keyof EmployerFormData, value: string) => {
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
      const payload: Record<string, string> = {
        employer_name: formData.employer_name.trim(),
        designation: formData.designation.trim(),
        organization: formData.organization.trim(),
        program_reviewed: formData.program_reviewed,
        q1_industry_alignment: formData.q1_industry_alignment,
        q2_industry_trends: formData.q2_industry_trends,
        q3_critical_thinking: formData.q3_critical_thinking,
        q4_experiential_learning: formData.q4_experiential_learning,
        q5_assessment_alignment: formData.q5_assessment_alignment,
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
              <span className="text-[#E8871A]">Employer Feedback</span>
            </nav>

            {/* Pill Tag */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-[#E8871A]" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Industry-Academia Collaboration &amp; Readiness
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[52px] leading-tight">
              Employer Feedback on <span className="text-[#E8871A]">Curriculum</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base text-slate-200 md:text-lg leading-relaxed">
              We deeply appreciate the insights of leading corporate leaders, recruiters, and industry partners to help ensure our graduates meet current and future workplace demands with technical proficiency and professional excellence.
            </p>

            {/* Highlights Bar */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/10 text-left">
              <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3.5 border border-white/10">
                <Briefcase className="h-5 w-5 text-[#E8871A] shrink-0" />
                <span className="text-xs font-medium text-slate-200">500+ Corporate Recruiters</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3.5 border border-white/10">
                <Target className="h-5 w-5 text-[#E8871A] shrink-0" />
                <span className="text-xs font-medium text-slate-200">Skill-Ready Graduates</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3.5 border border-white/10">
                <TrendingUp className="h-5 w-5 text-[#E8871A] shrink-0" />
                <span className="text-xs font-medium text-slate-200">Industry-Aligned Syllabi</span>
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
                  Your assessment as an employer and industry partner has been successfully submitted. Your recommendations will directly shape our course modules, hands-on lab training, and corporate readiness initiatives.
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
                        Employer Curriculum Appraisal Form
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-300">
                        Please provide your feedback. Fields marked with <span className="text-[#E8871A] font-bold">*</span> are required.
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

                  {/* ──────────────── 1. Employer Details ──────────────── */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0A1F44] text-xs font-bold text-[#E8871A]">
                        1
                      </span>
                      <h3 className="font-serif text-lg font-bold text-[#0A1F44]">
                        Employer &amp; Organization Details
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="sm:col-span-2 space-y-2">
                        <label className="block text-sm font-semibold text-slate-700">
                          Name of the Employer <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="employer_name"
                          required
                          value={formData.employer_name}
                          onChange={handleChange}
                          placeholder="e.g. Mr. Sanjay Mehra"
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
                          placeholder="e.g. Head - Talent Acquisition / VP Engineering"
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
                          placeholder="e.g. Microsoft / HCL Tech / Infosys"
                          className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition-colors focus:border-[#0A1F44] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0A1F44]/20"
                        />
                      </div>

                      <div className="sm:col-span-2 space-y-2">
                        <label className="block text-sm font-semibold text-slate-700">
                          Name of the Program Reviewed <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="program_reviewed"
                          required
                          value={formData.program_reviewed}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition-colors focus:border-[#0A1F44] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0A1F44]/20"
                        >
                          <option value="" disabled>
                            Select Program
                          </option>
                          {programOptions.map((prog) => (
                            <option key={prog} value={prog}>
                              {prog}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* ──────────────── 2. Feedback on Curriculum & Industry Alignment ──────────────── */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0A1F44] text-xs font-bold text-[#E8871A]">
                        2
                      </span>
                      <div>
                        <h3 className="font-serif text-lg font-bold text-[#0A1F44]">
                          Feedback on Curriculum &amp; Industry Alignment
                        </h3>
                        <p className="text-xs text-slate-500">
                          Rate each parameter on a 5-point scale from Strongly Disagree to Strongly Agree.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {ratingQuestions.map((q, index) => {
                        const fieldKey = q.id as keyof EmployerFormData;
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
                          <span>Submitting Feedback...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                          <span>Submit Employer Feedback</span>
                        </>
                      )}
                    </button>
                    <p className="mt-3 text-center text-xs text-slate-500">
                      By submitting this form, you help ensure that Geeta University’s academic curriculum remains at the forefront of industry expectations and professional standards.
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
        contextText="Corporate partnerships and recruitment ecosystems benefit from the integrated heritage of:"
      />
    </div>
  );
}
