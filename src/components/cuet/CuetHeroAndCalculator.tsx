"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Calculator, Sparkles, User, Phone, MapPin, Building, GraduationCap, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface CityItem {
  name: string;
  state_code: string;
}

const PROGRAM_FEES_DB: Record<string, { programs: string[]; defaultFee: number; tuitionFee: number }> = {
  "Computer Science & Engineering": {
    programs: [
      "B.Tech Hons. CSE",
      "B.Tech CSE (AI & Machine Learning)",
      "B.Tech CSE (Cyber Security)",
      "B.Tech CSE (Data Science & Analytics)",
      "B.Tech CSE (Full Stack Development)",
    ],
    defaultFee: 95000,
    tuitionFee: 85000,
  },
  "Computer Applications": {
    programs: [
      "BCA Hons. (Computer Applications)",
      "BCA (AI & Machine Learning)",
      "BCA (Cyber Security)",
      "BCA (Data Science & Analytics)",
    ],
    defaultFee: 65000,
    tuitionFee: 55000,
  },
  "Commerce & Business Management": {
    programs: [
      "BBA Hons. (Business Administration)",
      "BBA (FinTech)",
      "BBA (Digital Marketing)",
      "B.Com Hons. (Bachelor of Commerce)",
      "B.Com (Auditing & Taxation)",
    ],
    defaultFee: 60000,
    tuitionFee: 50000,
  },
  "SP Bansal School of Business": {
    programs: ["BBA Global Business", "BBA Entrepreneurship & Family Business"],
    defaultFee: 75000,
    tuitionFee: 65000,
  },
  "Pharmacy": {
    programs: ["B.Pharm (Bachelor of Pharmacy)", "D.Pharm (Diploma in Pharmacy)"],
    defaultFee: 70000,
    tuitionFee: 60000,
  },
  "Agricultural Sciences": {
    programs: ["B.Sc Hons. (Agriculture)"],
    defaultFee: 65000,
    tuitionFee: 55000,
  },
  "Law": {
    programs: ["BA LL.B (Hons.) 5 Years", "BBA LL.B (Hons.) 5 Years"],
    defaultFee: 75000,
    tuitionFee: 65000,
  },
  "Hospitality & Hotel Management": {
    programs: ["B.Sc Hons. (Hotel Management)", "Diploma in Hotel Management"],
    defaultFee: 55000,
    tuitionFee: 45000,
  },
  "Allied Health Sciences": {
    programs: ["B.Sc Hons. (Nutrition & Dietetics)", "B.Sc Medical Lab Technology"],
    defaultFee: 55000,
    tuitionFee: 45000,
  },
  "Humanities & Social Sciences": {
    programs: ["B.Sc Hons. (Psychology)", "BA Hons. (Political Science)", "BA Hons. (Economics)"],
    defaultFee: 45000,
    tuitionFee: 38000,
  },
  "Forensic Sciences": {
    programs: ["B.Sc Hons. (Forensic Sciences)"],
    defaultFee: 60000,
    tuitionFee: 50000,
  },
  "Nursing": {
    programs: ["B.Sc Nursing (4 Years)", "GNM (General Nursing)"],
    defaultFee: 70000,
    tuitionFee: 60000,
  },
};

const CUET_SLABS = [
  { label: "95% and above (100% Tuition Waiver)", percent: 100 },
  { label: "90% – 94.9% (50% Tuition Waiver)", percent: 50 },
  { label: "80% – 89.9% (40% Tuition Waiver)", percent: 40 },
  { label: "70% – 79.9% (30% Tuition Waiver)", percent: 30 },
  { label: "60% – 69.9% (10% Tuition Waiver)", percent: 10 },
];

const INDIA_STATES = [
  { code: "HR", name: "Haryana" },
  { code: "DL", name: "Delhi" },
  { code: "UP", name: "Uttar Pradesh" },
  { code: "PB", name: "Punjab" },
  { code: "RJ", name: "Rajasthan" },
  { code: "UK", name: "Uttarakhand" },
  { code: "HP", name: "Himachal Pradesh" },
  { code: "MH", name: "Maharashtra" },
  { code: "BR", name: "Bihar" },
  { code: "JH", name: "Jharkhand" },
  { code: "MP", name: "Madhya Pradesh" },
  { code: "WB", name: "West Bengal" },
  { code: "GJ", name: "Gujarat" },
  { code: "KA", name: "Karnataka" },
  { code: "TG", name: "Telangana" },
  { code: "TN", name: "Tamil Nadu" },
];

export default function CuetHeroAndCalculator() {
  // Calculator States
  const [selectedArea, setSelectedArea] = useState<string>("Computer Science & Engineering");
  const [selectedProgram, setSelectedProgram] = useState<string>("B.Tech Hons. CSE");
  const [selectedSlabIdx, setSelectedSlabIdx] = useState<number>(0);

  // Enquiry Form States
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [enqState, setEnqState] = useState("");
  const [enqCity, setEnqCity] = useState("");
  const [enqCourse, setEnqCourse] = useState("");
  const [citiesData, setCitiesData] = useState<CityItem[]>([]);
  const [filteredCities, setFilteredCities] = useState<CityItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: "success" | "error" | "info"; text: string } | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/MrZorawaR/IndianCities/refs/heads/main/NewCities.json")
      .then((res) => res.json())
      .then((data: CityItem[]) => setCitiesData(data))
      .catch(() => {});
  }, []);

  const handleAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const area = e.target.value;
    setSelectedArea(area);
    if (PROGRAM_FEES_DB[area]) {
      setSelectedProgram(PROGRAM_FEES_DB[area].programs[0] || "");
    }
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const stCode = e.target.value;
    setEnqState(stCode);
    setEnqCity("");
    if (citiesData.length > 0) {
      const filtered = citiesData.filter((c) => c.state_code === stCode);
      setFilteredCities(filtered);
    }
  };

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMsg(null);

    if (name.trim().length < 3) {
      setStatusMsg({ type: "error", text: "Please enter your full name." });
      return;
    }
    if (mobile.trim().length < 10 || !/^\d+$/.test(mobile.trim())) {
      setStatusMsg({ type: "error", text: "Please enter a valid 10-digit mobile number." });
      return;
    }

    setLoading(true);
    setStatusMsg({ type: "info", text: "Submitting CUET registration..." });

    try {
      const formData = {
        api_key: "phddfgj@2343dfjh3245dfgjhgdfjgh!dfgjhk99452kdskjg",
        name: name.trim(),
        mobile_number: mobile.trim(),
        state: enqState,
        city: enqCity,
        program: enqCourse || selectedProgram,
      };

      const response = await fetch("https://geetauniversity.com/Rapi/form/insert", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData),
      });

      const data = await response.json();
      if (data.status === true) {
        setStatusMsg({ type: "success", text: "Thank you! Your CUET admission inquiry has been received." });
        setSubmitted(true);
      } else {
        setStatusMsg({ type: "error", text: data.message || "Submission failed. Please try again." });
      }
    } catch {
      setStatusMsg({ type: "error", text: "Network connection error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  // Calculate fees
  const areaData = PROGRAM_FEES_DB[selectedArea] || { defaultFee: 60000, tuitionFee: 50000, programs: [] };
  const slab = CUET_SLABS[selectedSlabIdx] || CUET_SLABS[0];
  const scholarshipAmount = Math.round((areaData.tuitionFee * slab.percent) / 100);
  const netPayable = Math.max(0, areaData.defaultFee - scholarshipAmount);

  return (
    <section className="w-full bg-white">
      {/* 1. Hero Banner Image */}
      <div className="relative w-full overflow-hidden bg-[#0A1F44]">
        <div className="relative h-[220px] sm:h-[340px] md:h-[440px] lg:h-[500px] w-full">
          <Image
            src="https://geetauniversity.edu.in/uploads/all/2540/cuet.jpeg"
            alt="CUET UG 2026 Admissions at Geeta University"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* 2. Interactive Calculator & Enquiry Grid */}
      <div className="gu-container py-12 sm:py-16 md:py-20 border-b border-[#E2E8F0]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: CUET Scholarship Calculator */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-[24px] bg-gradient-to-br from-[#F0F7FF] to-[#FFF8F4] border border-[#CBD5E1] p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E2E8F0]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8871A] text-white">
                  <Calculator className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-serif text-[22px] sm:text-[26px] font-black text-[#0A1F44] leading-snug">
                    Check Your <span className="text-[#E8871A]">CUET Scholarship</span> Instantly
                  </h2>
                  <p className="text-[14px] text-[#64748B]">
                    Calculate semester tuition fees and applicable merit scholarship
                  </p>
                </div>
              </div>

              {/* Calculator Inputs & Result Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-stretch">
                {/* Inputs */}
                <div className="sm:col-span-7 space-y-4">
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-wider text-[#0A1F44] mb-1.5">
                      Area of Interest
                    </label>
                    <select
                      value={selectedArea}
                      onChange={handleAreaChange}
                      className="w-full rounded-[10px] border border-[#CBD5E1] bg-white px-3.5 py-2.5 text-[14.5px] font-semibold text-[#0A1F44] focus:border-[#E8871A] focus:outline-none focus:ring-2 focus:ring-[#E8871A]/20"
                    >
                      {Object.keys(PROGRAM_FEES_DB).map((area) => (
                        <option key={area} value={area}>
                          {area}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-wider text-[#0A1F44] mb-1.5">
                      Program / Course
                    </label>
                    <select
                      value={selectedProgram}
                      onChange={(e) => setSelectedProgram(e.target.value)}
                      className="w-full rounded-[10px] border border-[#CBD5E1] bg-white px-3.5 py-2.5 text-[14.5px] font-semibold text-[#0A1F44] focus:border-[#E8871A] focus:outline-none focus:ring-2 focus:ring-[#E8871A]/20"
                    >
                      {areaData.programs.map((prog, idx) => (
                        <option key={idx} value={prog}>
                          {prog}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-wider text-[#0A1F44] mb-1.5">
                      CUET Score Slab
                    </label>
                    <select
                      value={selectedSlabIdx}
                      onChange={(e) => setSelectedSlabIdx(Number(e.target.value))}
                      className="w-full rounded-[10px] border border-[#CBD5E1] bg-white px-3.5 py-2.5 text-[14.5px] font-semibold text-[#0A1F44] focus:border-[#E8871A] focus:outline-none focus:ring-2 focus:ring-[#E8871A]/20"
                    >
                      {CUET_SLABS.map((sl, idx) => (
                        <option key={idx} value={idx}>
                          {sl.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Result Card */}
                <div className="sm:col-span-5 flex flex-col justify-between rounded-[18px] bg-gradient-to-br from-[#0B3D6B] via-[#0A5A8A] to-[#0A8AC7] p-5 text-white shadow-md">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-white/70 mb-3">
                      Fee Breakdown
                    </div>

                    <div className="space-y-2 text-[13.5px]">
                      <div className="flex justify-between border-b border-white/10 pb-1.5">
                        <span className="text-white/80">Fee Per Sem:</span>
                        <span className="font-bold">₹{areaData.defaultFee.toLocaleString("en-IN")}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-1.5">
                        <span className="text-white/80">Tuition Fee:</span>
                        <span className="font-bold">₹{areaData.tuitionFee.toLocaleString("en-IN")}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-1.5">
                        <span className="text-white/80">Scholarship:</span>
                        <span className="font-bold text-[#86EFAC]">-₹{scholarshipAmount.toLocaleString("en-IN")}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-[12px] bg-[#E8871A]/20 border border-[#E8871A]/40 p-3 text-center">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-white/80">
                      You Pay (Per Sem)
                    </div>
                    <div className="font-serif text-[24px] font-black text-white mt-0.5">
                      ₹{netPayable.toLocaleString("en-IN")}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Missed CUET Banner */}
            <div className="rounded-[18px] border-l-4 border-[#E8871A] bg-[#FFF8F4] p-5 shadow-sm">
              <h4 className="font-serif text-[18px] font-bold text-[#0A1F44]">
                Missed CUET 2026 or Want to Increase Your Scholarship?
              </h4>
              <p className="text-[14.5px] text-[#475569] mt-1">
                You can appear for <strong>GUTS (Geeta University Test of Scholarship)</strong> online to qualify for up to 100% tuition waiver on any UG program.
              </p>
              <a
                href="/guts"
                className="mt-3 inline-flex items-center gap-1.5 text-[14px] font-bold text-[#E8871A] hover:underline"
              >
                <span>Explore GUTS Scholarship</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Apply for CUET Lead Form */}
          <div id="enquire" className="lg:col-span-5">
            <div className="sticky top-24 rounded-[24px] border border-[#CBD5E1] bg-white p-6 sm:p-8 shadow-[0_10px_35px_rgba(10,31,68,0.08)]">
              <div className="mb-6 text-center border-b border-[#F1F5F9] pb-4">
                <div className="inline-block rounded-full bg-[#FFF4EB] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#E8871A] mb-2">
                  Session 2026-27
                </div>
                <h3 className="font-serif text-[24px] sm:text-[28px] font-black text-[#0A1F44] leading-tight">
                  Apply Through CUET UG 2026
                </h3>
                <p className="mt-1 text-[14px] text-[#64748B]">
                  Register your CUET score for fast-track counseling
                </p>
              </div>

              {submitted ? (
                <div className="rounded-[16px] bg-[#ECFDF5] border border-[#10B981]/20 p-6 text-center text-[#065F46]">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-[#10B981] mb-3" />
                  <h4 className="font-bold text-[18px]">Application Received!</h4>
                  <p className="text-[14px] mt-1 text-[#047857]">
                    Our admissions team will contact you with your merit eligibility and fee waiver confirmation.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setMobile("");
                      setEnqState("");
                      setEnqCity("");
                      setStatusMsg(null);
                    }}
                    className="mt-4 inline-block rounded-[10px] bg-[#0A1F44] px-4 py-2 text-xs font-bold text-white hover:bg-[#1A3A6B]"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="space-y-4">
                  {/* Name */}
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-[#94A3B8]" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full rounded-[12px] border border-[#E2E8F0] bg-[#F8FAFC] py-3 pl-11 pr-4 text-[15px] font-medium text-[#0A1F44] placeholder:text-[#94A3B8] focus:border-[#E8871A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E8871A]/20 transition-all"
                    />
                  </div>

                  {/* Mobile Number */}
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-[#94A3B8]" />
                    <input
                      type="tel"
                      placeholder="Contact Number (10 digits)"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      maxLength={10}
                      required
                      className="w-full rounded-[12px] border border-[#E2E8F0] bg-[#F8FAFC] py-3 pl-11 pr-4 text-[15px] font-medium text-[#0A1F44] placeholder:text-[#94A3B8] focus:border-[#E8871A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E8871A]/20 transition-all"
                    />
                  </div>

                  {/* State */}
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-[#94A3B8]" />
                    <select
                      value={enqState}
                      onChange={handleStateChange}
                      required
                      className="w-full rounded-[12px] border border-[#E2E8F0] bg-[#F8FAFC] py-3 pl-11 pr-8 text-[15px] font-medium text-[#0A1F44] focus:border-[#E8871A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E8871A]/20 transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select State</option>
                      {INDIA_STATES.map((st) => (
                        <option key={st.code} value={st.code}>
                          {st.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* City */}
                  <div className="relative">
                    <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-[#94A3B8]" />
                    <select
                      value={enqCity}
                      onChange={(e) => setEnqCity(e.target.value)}
                      required
                      disabled={!enqState}
                      className="w-full rounded-[12px] border border-[#E2E8F0] bg-[#F8FAFC] py-3 pl-11 pr-8 text-[15px] font-medium text-[#0A1F44] focus:border-[#E8871A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E8871A]/20 transition-all appearance-none cursor-pointer disabled:opacity-60"
                    >
                      <option value="">{enqState ? "Select City" : "Select State First"}</option>
                      {filteredCities.map((city, idx) => (
                        <option key={idx} value={city.name}>
                          {city.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Program of Interest */}
                  <div className="relative">
                    <GraduationCap className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-[#94A3B8]" />
                    <select
                      value={enqCourse}
                      onChange={(e) => setEnqCourse(e.target.value)}
                      required
                      className="w-full rounded-[12px] border border-[#E2E8F0] bg-[#F8FAFC] py-3 pl-11 pr-8 text-[15px] font-medium text-[#0A1F44] focus:border-[#E8871A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E8871A]/20 transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select Preferred Program</option>
                      <option value="B.Tech Computer Science & Engineering">B.Tech Computer Science &amp; Engineering</option>
                      <option value="BCA Computer Applications">BCA Computer Applications</option>
                      <option value="BBA Business Administration">BBA Business Administration</option>
                      <option value="B.Com Commerce">B.Com Commerce</option>
                      <option value="B.Pharm Pharmacy">B.Pharm Pharmacy</option>
                      <option value="B.Sc Agriculture">B.Sc Agriculture</option>
                      <option value="BA / BBA LL.B Law">BA / BBA LL.B Law</option>
                      <option value="B.Sc Forensic Sciences">B.Sc Forensic Sciences</option>
                      <option value="B.Sc Hotel Management">B.Sc Hotel Management</option>
                      <option value="B.Sc Nutrition & Dietetics">B.Sc Nutrition &amp; Dietetics</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-[12px] bg-[#E8871A] py-3.5 text-center text-[16px] font-bold text-white shadow-md transition-all hover:bg-[#D47309] hover:shadow-lg disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Processing Application...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit CUET Application</span>
                        <ArrowRight className="h-5 w-5" />
                      </>
                    )}
                  </button>

                  {/* Alerts */}
                  {statusMsg && (
                    <div
                      className={`flex items-start gap-2.5 rounded-[12px] p-3 text-[13.5px] font-medium ${
                        statusMsg.type === "success"
                          ? "bg-[#ECFDF5] text-[#065F46] border border-[#10B981]/20"
                          : statusMsg.type === "info"
                          ? "bg-[#EFF6FF] text-[#1E40AF] border border-[#3B82F6]/20"
                          : "bg-[#FEF2F2] text-[#991B1B] border border-[#EF4444]/20"
                      }`}
                    >
                      {statusMsg.type === "success" ? (
                        <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-[#10B981]" />
                      ) : (
                        <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                      )}
                      <span>{statusMsg.text}</span>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
