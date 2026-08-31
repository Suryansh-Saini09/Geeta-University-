"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Globe, GraduationCap, CheckCircle2, Send, Sparkles, MapPin } from "lucide-react";
import { UNIVERSE_OF_GU } from "@/data/internationalAdmissions";

export default function UniverseOfGUSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    program: "B.Tech CSE",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="universe-of-gu" className="scroll-mt-24 py-20 bg-[#F7F9FC]">
      <div className="gu-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative & MOUs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#E8871A] mb-3">
              <span className="h-[2px] w-6 bg-[#E8871A]" />
              Global Footprint
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A1F44] tracking-tight font-serif">
              {UNIVERSE_OF_GU.title}
            </h2>

            <div className="mt-4 p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[#0A1F44] text-[#E8871A] flex-shrink-0">
                <Globe size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0A1F44]">
                  {UNIVERSE_OF_GU.subheading}
                </h3>
                <p className="text-sm text-[#475569] mt-1 leading-relaxed">
                  {UNIVERSE_OF_GU.description}
                </p>
              </div>
            </div>

            {/* MOUs Header & List */}
            <div className="mt-10">
              <h3 className="text-2xl font-extrabold text-[#0A1F44] font-serif mb-4 flex items-center gap-2">
                <GraduationCap className="text-[#E8871A]" size={26} />
                {UNIVERSE_OF_GU.mouHeading}
              </h3>
              <p className="text-[#475569] text-base leading-relaxed mb-6">
                {UNIVERSE_OF_GU.mouIntro}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {UNIVERSE_OF_GU.mous.map((mou, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-md hover:border-[#E8871A]/50 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#E8871A] flex items-center gap-1">
                          <MapPin size={12} /> {mou.country}
                        </span>
                        <CheckCircle2 size={16} className="text-emerald-500" />
                      </div>
                      <h4 className="font-extrabold text-[#0A1F44] text-base">
                        {mou.institution}
                      </h4>
                      <p className="text-xs text-[#64748B] mt-2 leading-normal">
                        {mou.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm text-[#475569] font-medium bg-orange-50/80 p-4 rounded-xl border border-orange-200 text-[#0A1F44]">
                💡 {UNIVERSE_OF_GU.mouClosing}
              </p>
            </div>
          </motion.div>

          {/* Right Column: Enquiry Form Card */}
          <motion.div
            id="enquiry-form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 scroll-mt-24"
          >
            <div className="sticky top-24 rounded-3xl bg-[#0A1F44] p-1.5 shadow-2xl">
              <div className="rounded-[22px] bg-gradient-to-b from-[#0A1F44] to-[#061530] p-6 md:p-8 border border-white/10 text-white">
                <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-6">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#E8871A]">
                      Admissions 2026-27
                    </span>
                    <h3 className="text-2xl font-black font-serif text-white mt-1">
                      International Enquiry
                    </h3>
                  </div>
                  <div className="h-10 w-10 rounded-xl bg-[#E8871A]/20 flex items-center justify-center text-[#E8871A]">
                    <Sparkles size={20} />
                  </div>
                </div>

                {formSubmitted ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto h-16 w-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                      <CheckCircle2 size={36} />
                    </div>
                    <h4 className="text-xl font-bold text-white">Thank You for Your Enquiry!</h4>
                    <p className="text-sm text-white/80 mt-2 max-w-[280px] mx-auto">
                      Our International Admissions counselor will reach out to you shortly via Email and WhatsApp.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-6 text-xs text-[#E8871A] underline font-semibold hover:text-white"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-[#E8871A] focus:bg-white/15 focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="yourname@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-[#E8871A] focus:bg-white/15 focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-[#E8871A] focus:bg-white/15 focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Country of Residence *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Nepal, Nigeria, Syria"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-[#E8871A] focus:bg-white/15 focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-1.5">
                        Program Level / Interest
                      </label>
                      <select
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm text-white focus:border-[#E8871A] focus:bg-[#0A1F44] focus:outline-none transition-all"
                      >
                        <option value="B.Tech CSE" className="bg-[#0A1F44]">B.Tech Computer Science & Engineering</option>
                        <option value="BBA / MBA" className="bg-[#0A1F44]">Business Management (BBA / MBA)</option>
                        <option value="Pharmacy" className="bg-[#0A1F44]">Pharmacy (B.Pharm / M.Pharm)</option>
                        <option value="Health Sciences" className="bg-[#0A1F44]">Health & Allied Sciences</option>
                        <option value="Agricultural Sciences" className="bg-[#0A1F44]">Agricultural Sciences</option>
                        <option value="Law" className="bg-[#0A1F44]">Law Programs (LL.B / LL.M)</option>
                        <option value="PhD" className="bg-[#0A1F44]">Ph.D Doctoral Programs</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="mt-6 w-full rounded-xl bg-[#E8871A] py-4 text-sm font-extrabold text-white shadow-lg transition-all duration-300 hover:bg-[#F5A623] hover:shadow-orange-500/25 flex items-center justify-center gap-2"
                    >
                      Submit Enquiry
                      <Send size={16} />
                    </button>
                    <p className="text-[11px] text-white/50 text-center mt-2">
                      🔒 Your information is secure and will be used strictly for admission guidance.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
