"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Send,
  Loader2,
  GraduationCap,
  Sparkles,
  RotateCcw,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  User,
  Briefcase,
  Award,
  BookOpenCheck,
  Building,
} from "lucide-react";
import LegacyEcosystem from "@/components/about/LegacyEcosystem";

interface AlumniFormData {
  alumni_name: string;
  contact_no: string;
  email: string;
  employment_type: string;
  organisation: string;
  current_role: string;
  year_of_passout: string;
  programme_level: string;
  school: string;
  q1_career_development: string;
  q2_entrepreneur_support: string;
  q3_real_world: string;
  q4_ethics: string;
  q5_teamwork: string;
}

const initialFormData: AlumniFormData = {
  alumni_name: "",
  contact_no: "",
  email: "",
  employment_type: "",
  organisation: "",
  current_role: "",
  year_of_passout: "",
  programme_level: "",
  school: "",
  q1_career_development: "",
  q2_entrepreneur_support: "",
  q3_real_world: "",
  q4_ethics: "",
  q5_teamwork: "",
};

const schoolOptions = [
  "School of Computer Science & Engineering",
  "School of Commerce & Business Management",
  "Geeta Institute of Pharmacy",
  "School of Agricultural Sciences",
  "School of Sciences",
  "School of Health & Allied Sciences",
  "School of Humanities & Social Sciences",
  "Geeta Global Law School",
  "School of Hospitality & Hotel Management",
  "School of Engineering",
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
    id: "q1_career_development",
    label: "The program provides knowledge essential for career development.",
    description: "Evaluates the professional relevance, technical skills, and career readiness gained during your studies.",
  },
  {
    id: "q2_entrepreneur_support",
    label: "The program supports students in pursuing business or entrepreneurial ventures.",
    description: "Evaluates incubation support, entrepreneurial mindset, business exposure, and innovation mentoring.",
  },
  {
    id: "q3_real_world",
    label: "Seminars, workshops, and guest lectures help link course knowledge to real-world applications.",
    description: "Assesses industry expert sessions, practical workshops, guest masterclasses, and applied learning.",
  },
  {
    id: "q4_ethics",
    label: "Courses on ethics, sustainability, and CSR contribute to professional growth.",
    description: "Evaluates exposure to business ethics, environmental consciousness, and corporate social responsibility.",
  },
  {
    id: "q5_teamwork",
    label: "Group assignments and collaborative projects foster teamwork skills.",
    description: "Evaluates collaborative learning, leadership development, interpersonal communication, and team dynamics.",
  },
];

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzgxcb-eVzIMdGNsCYADGyPMIzBIkdhryGD6rIvIQPF1Bjq-KpIzJ4IpXuOYtbZXSY3/exec";

export default function AlumniFeedbackPage() {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState<AlumniFormData>(initialFormData);
  const [contactError, setContactError] = useState<string | null>(null);
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

    if (name === "contact_no") {
      setContactError(null);
    }
  };

  const handleRatingSelect = (field: keyof AlumniFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateStep1 = () => {
    if (
      !formData.alumni_name.trim() ||
      !formData.contact_no.trim() ||
      !formData.email.trim() ||
      !formData.employment_type ||
      !formData.organisation.trim() ||
      !formData.current_role.trim() ||
      !formData.year_of_passout ||
      !formData.programme_level ||
      !formData.school
    ) {
      return false;
    }

    const cleanMobile = formData.contact_no.trim();
    if (!/^[6-9][0-9]{9}$/.test(cleanMobile)) {
      setContactError("Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.");
      return false;
    }

    setContactError(null);
    return true;
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
      window.scrollTo({ top: 250, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    setStep(1);
    window.scrollTo({ top: 250, behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const payload: Record<string, string> = {
        alumni_name: formData.alumni_name.trim(),
        contact_no: formData.contact_no.trim(),
        email: formData.email.trim(),
        employment_type: formData.employment_type,
        organisation: formData.organisation.trim(),
        current_role: formData.current_role.trim(),
        year_of_passout: formData.year_of_passout,
        programme_level: formData.programme_level,
        school: formData.school,
        q1_career_development: formData.q1_career_development,
        q2_entrepreneur_support: formData.q2_entrepreneur_support,
        q3_real_world: formData.q3_real_world,
        q4_ethics: formData.q4_ethics,
        q5_teamwork: formData.q5_teamwork,
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
      setStep(1);
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
    setStep(1);
    setErrorMsg(null);
    setContactError(null);
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
              <span className="text-[#E8871A]">Alumni Feedback</span>
            </nav>

            {/* Pill Tag */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-[#E8871A]" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Alumni Network &amp; Curriculum Evolution
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[52px] leading-tight">
              Alumni Feedback on <span className="text-[#E8871A]">Curriculum</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base text-slate-200 md:text-lg leading-relaxed">
              As distinguished graduates of Geeta University, your professional journey and real-world career experiences provide invaluable guidance for shaping future syllabi, skills training, and academic standards.
            </p>

            {/* Highlights Bar */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/10 text-left">
              <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3.5 border border-white/10">
                <GraduationCap className="h-5 w-5 text-[#E8871A] shrink-0" />
                <span className="text-xs font-medium text-slate-200">Global Alumni Network</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3.5 border border-white/10">
                <Briefcase className="h-5 w-5 text-[#E8871A] shrink-0" />
                <span className="text-xs font-medium text-slate-200">Industry-Driven Pedagogy</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3.5 border border-white/10">
                <Award className="h-5 w-5 text-[#E8871A] shrink-0" />
                <span className="text-xs font-medium text-slate-200">Continuous Curriculum Reform</span>
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
                  Thank You, Valued Alumnus!
                </h2>
                <p className="mt-4 text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
                  Your feedback has been recorded successfully. Your suggestions and insights will directly enrich our academic curriculum, ensuring future generations of Geeta University students are industry-ready.
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
                {/* Form Top Banner with Progress Steps */}
                <div className="border-b border-slate-100 bg-gradient-to-r from-[#0A1F44] to-[#1A3A6B] p-6 sm:p-8 text-white">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                        Alumni Curriculum Appraisal
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-300">
                        Fields marked with <span className="text-[#E8871A] font-bold">*</span> are required.
                      </p>
                    </div>

                    {/* Step Badges */}
                    <div className="flex items-center gap-2">
                      <div
                        className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                          step === 1
                            ? "bg-[#E8871A] text-white shadow-md shadow-amber-500/30"
                            : "bg-white/10 text-slate-300"
                        }`}
                      >
                        <span>1</span>
                        <span className="hidden sm:inline">Profile</span>
                      </div>
                      <ChevronRight className="h-3 w-3 text-white/40" />
                      <div
                        className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                          step === 2
                            ? "bg-[#E8871A] text-white shadow-md shadow-amber-500/30"
                            : "bg-white/10 text-slate-300"
                        }`}
                      >
                        <span>2</span>
                        <span className="hidden sm:inline">Feedback</span>
                      </div>
                    </div>
                  </div>
                </div>

                {errorMsg && (
                  <div className="m-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
                    {errorMsg}
                  </div>
                )}

                {/* ──────────────── STEP 1: Personal & Professional Profile ──────────────── */}
                {step === 1 && (
                  <form onSubmit={handleNext} className="p-6 sm:p-10 space-y-8 animate-in fade-in duration-200">
                    <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0A1F44] text-xs font-bold text-[#E8871A]">
                        1
                      </span>
                      <h3 className="font-serif text-lg font-bold text-[#0A1F44]">
                        Personal &amp; Professional Information
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      {/* Name */}
                      <div className="sm:col-span-2 space-y-2">
                        <label className="block text-sm font-semibold text-slate-700">
                          Name of the Alumni <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="alumni_name"
                          required
                          value={formData.alumni_name}
                          onChange={handleChange}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition-colors focus:border-[#0A1F44] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0A1F44]/20"
                        />
                      </div>

                      {/* Contact Number */}
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-slate-700">
                          Contact Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="contact_no"
                          required
                          maxLength={10}
                          inputMode="numeric"
                          value={formData.contact_no}
                          onChange={handleChange}
                          placeholder="10-digit mobile number"
                          className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-900 transition-colors focus:outline-none focus:ring-2 ${
                            contactError
                              ? "border-red-500 bg-red-50/30 focus:ring-red-500/20"
                              : "border-slate-300 bg-slate-50/50 focus:border-[#0A1F44] focus:bg-white focus:ring-[#0A1F44]/20"
                          }`}
                        />
                        {contactError && (
                          <p className="text-xs text-red-600 font-medium">{contactError}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-slate-700">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. rahul.sharma@example.com"
                          className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition-colors focus:border-[#0A1F44] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0A1F44]/20"
                        />
                      </div>

                      {/* Employment Type */}
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-slate-700">
                          Employment Type <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="employment_type"
                          required
                          value={formData.employment_type}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition-colors focus:border-[#0A1F44] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0A1F44]/20"
                        >
                          <option value="" disabled>
                            Select Employment Type
                          </option>
                          <option value="working_professional">Working Professional</option>
                          <option value="self_employed">Self-employed / Entrepreneur</option>
                        </select>
                      </div>

                      {/* Organisation */}
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-slate-700">
                          Organisation / Company Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="organisation"
                          required
                          value={formData.organisation}
                          onChange={handleChange}
                          placeholder="e.g. Tata Consultancy Services / Own Venture"
                          className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition-colors focus:border-[#0A1F44] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0A1F44]/20"
                        />
                      </div>

                      {/* Current Role */}
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-slate-700">
                          Current Role / Designation <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="current_role"
                          required
                          value={formData.current_role}
                          onChange={handleChange}
                          placeholder="e.g. Senior Software Engineer / Founder"
                          className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition-colors focus:border-[#0A1F44] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0A1F44]/20"
                        />
                      </div>

                      {/* Year of Pass Out */}
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-slate-700">
                          Year of Pass Out <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="year_of_passout"
                          required
                          value={formData.year_of_passout}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition-colors focus:border-[#0A1F44] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0A1F44]/20"
                        >
                          <option value="" disabled>
                            Select Pass Out Year
                          </option>
                          <option value="2024">2024</option>
                          <option value="2023">2023</option>
                          <option value="2022">2022</option>
                          <option value="before_2022">Before 2022</option>
                        </select>
                      </div>

                      {/* Programme Level */}
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-slate-700">
                          Programme Level <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="programme_level"
                          required
                          value={formData.programme_level}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition-colors focus:border-[#0A1F44] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0A1F44]/20"
                        >
                          <option value="" disabled>
                            Select Programme Level
                          </option>
                          <option value="UG">Undergraduate (UG)</option>
                          <option value="PG">Postgraduate (PG)</option>
                        </select>
                      </div>

                      {/* School for which feedback is given */}
                      <div className="sm:col-span-2 space-y-2">
                        <label className="block text-sm font-semibold text-slate-700">
                          School for which feedback is given <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="school"
                          required
                          value={formData.school}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 transition-colors focus:border-[#0A1F44] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0A1F44]/20"
                        >
                          <option value="" disabled>
                            Select your School
                          </option>
                          {schoolOptions.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Next Button */}
                    <div className="pt-4 border-t border-slate-100">
                      <button
                        type="submit"
                        className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-[#E8871A] py-4 px-8 text-base font-bold text-white shadow-lg shadow-amber-500/25 transition-all hover:bg-[#F5A623] hover:shadow-amber-500/40 active:scale-[0.99]"
                      >
                        <span>Proceed to Curriculum Feedback</span>
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </form>
                )}

                {/* ──────────────── STEP 2: Curriculum Feedback (5 Questions) ──────────────── */}
                {step === 2 && (
                  <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8 animate-in fade-in duration-200">
                    <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0A1F44] text-xs font-bold text-[#E8871A]">
                        2
                      </span>
                      <div>
                        <h3 className="font-serif text-lg font-bold text-[#0A1F44]">
                          Curriculum Feedback &amp; Career Impact
                        </h3>
                        <p className="text-xs text-slate-500">
                          Rate each parameter on a 5-point scale from Strongly Disagree to Strongly Agree.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {ratingQuestions.map((q, index) => {
                        const fieldKey = q.id as keyof AlumniFormData;
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

                    {/* Step 2 Action Buttons */}
                    <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="inline-flex w-full sm:w-1/3 items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-slate-100 py-3.5 px-6 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-200 active:scale-95"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        <span>Back to Profile</span>
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative flex w-full sm:w-2/3 items-center justify-center gap-2 rounded-2xl bg-[#E8871A] py-3.5 px-6 text-sm font-bold text-white shadow-lg shadow-amber-500/25 transition-all hover:bg-[#F5A623] hover:shadow-amber-500/40 active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            <span>Submitting Alumni Feedback...</span>
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            <span>Submit Alumni Feedback</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Legacy & Ecosystem Section ── */}
      <LegacyEcosystem
        id="legacy-ecosystem"
        contextText="Alumni and current students benefit from the integrated ecosystem of:"
      />
    </div>
  );
}
