"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, User, Mail, Phone, BookOpen, MessageSquare } from "lucide-react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-[#F7F9FC] py-16 md:py-24 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block rounded-full bg-[#E8871A]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#E8871A]">
              Get In Touch
            </span>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-[#0A1F44] sm:text-4xl leading-tight">
              Send Us a Message & <span className="text-[#E8871A]">We Will Call You Back</span>
            </h2>
            <p className="text-base text-slate-600 font-sans leading-relaxed">
              Fill out the enquiry form to connect with our admission officers. Get detailed course brochures, fee breakup, hostel guidelines, and scholarship eligibility details sent directly to your inbox.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E8871A]/20 text-[#E8871A]">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0A1F44]">Personalized Course Guidance</h4>
                  <p className="text-xs text-slate-500">Expert counseling matching your career aspirations and eligibility.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E8871A]/20 text-[#E8871A]">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0A1F44]">Scholarship Evaluation</h4>
                  <p className="text-xs text-slate-500">Up to 100% board merit scholarship assessment on the spot.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#0A1F44]">
                    Enquiry Submitted Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto font-sans">
                    Thank you, <strong className="text-[#0A1F44]">{formData.fullName}</strong>. Our admission counselor will contact you shortly on <strong className="text-[#E8871A]">{formData.phone}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: "", email: "", phone: "", program: "", message: "" });
                    }}
                    style={{ color: "#ffffff" }}
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#0A1F44] px-6 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-[#E8871A] transition-colors"
                  >
                    <span style={{ color: "#ffffff" }}>Submit Another Enquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-serif text-xl font-bold text-[#0A1F44] mb-2">
                    Enquire Now for 2026-27 Session
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-[#0A1F44] mb-1">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-10 pr-4 text-sm text-[#0A1F44] outline-none transition-all focus:border-[#E8871A] focus:bg-white focus:ring-2 focus:ring-[#E8871A]/20"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold text-[#0A1F44] mb-1">Phone Number *</label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                        <input
                          type="tel"
                          required
                          placeholder="10 Digit Mobile Number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-10 pr-4 text-sm text-[#0A1F44] outline-none transition-all focus:border-[#E8871A] focus:bg-white focus:ring-2 focus:ring-[#E8871A]/20"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-[#0A1F44] mb-1">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                        <input
                          type="email"
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-10 pr-4 text-sm text-[#0A1F44] outline-none transition-all focus:border-[#E8871A] focus:bg-white focus:ring-2 focus:ring-[#E8871A]/20"
                        />
                      </div>
                    </div>

                    {/* Program Interest */}
                    <div>
                      <label className="block text-xs font-bold text-[#0A1F44] mb-1">Program Preference</label>
                      <div className="relative">
                        <BookOpen className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                        <select
                          value={formData.program}
                          onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-10 pr-4 text-sm text-[#0A1F44] outline-none transition-all focus:border-[#E8871A] focus:bg-white focus:ring-2 focus:ring-[#E8871A]/20"
                        >
                          <option value="">Select Interested Discipline</option>
                          <option value="Computer Science Engineering (B.Tech)">Computer Science & Engineering (B.Tech)</option>
                          <option value="Computer Applications (BCA/MCA)">Computer Applications (BCA / MCA)</option>
                          <option value="Management (BBA/MBA)">Management & Commerce (BBA / MBA)</option>
                          <option value="Pharmacy (B.Pharm/D.Pharm)">Pharmacy (B.Pharm / D.Pharm)</option>
                          <option value="Law (BA LLB/LLB)">Law Programs (BA LL.B / LL.B)</option>
                          <option value="Agriculture (B.Sc Agri)">Agricultural Sciences (B.Sc. Agriculture)</option>
                          <option value="Hotel Management">Hotel Management & Hospitality</option>
                          <option value="Forensic Sciences">Forensic Sciences & Basic Sciences</option>
                          <option value="Doctoral PhD">Ph.D. Doctoral Research</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-[#0A1F44] mb-1">Message / Question</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                      <textarea
                        rows={3}
                        placeholder="Type your query regarding eligibility, fee, hostels, or scholarships..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-10 pr-4 text-sm text-[#0A1F44] outline-none transition-all focus:border-[#E8871A] focus:bg-white focus:ring-2 focus:ring-[#E8871A]/20"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    style={{ color: "#ffffff" }}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#E8871A] py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-[#F5A623] hover:shadow-amber-500/25 active:scale-[0.99]"
                  >
                    <span style={{ color: "#ffffff" }}>Submit Enquiry</span>
                    <Send className="h-4 w-4 text-white" style={{ color: "#ffffff" }} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
