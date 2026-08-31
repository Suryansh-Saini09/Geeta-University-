"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, Award, ArrowRight, User, Phone, MapPin, Building, GraduationCap, CheckCircle2, AlertCircle, Loader2, Check } from "lucide-react";

interface CityItem {
  name: string;
  state_code: string;
}

const INDIA_STATES = [
  { code: "HR", name: "Haryana" },
  { code: "MH", name: "Maharashtra" },
  { code: "GA", name: "Goa" },
  { code: "MN", name: "Manipur" },
  { code: "PY", name: "Puducherry" },
  { code: "TG", name: "Telangana" },
  { code: "OR", name: "Odisha" },
  { code: "RJ", name: "Rajasthan" },
  { code: "PB", name: "Punjab" },
  { code: "UK", name: "Uttarakhand" },
  { code: "AP", name: "Andhra Pradesh" },
  { code: "NL", name: "Nagaland" },
  { code: "LD", name: "Lakshadweep" },
  { code: "HP", name: "Himachal Pradesh" },
  { code: "DL", name: "Delhi" },
  { code: "UP", name: "Uttar Pradesh" },
  { code: "AN", name: "Andaman and Nicobar Islands" },
  { code: "AR", name: "Arunachal Pradesh" },
  { code: "JH", name: "Jharkhand" },
  { code: "KA", name: "Karnataka" },
  { code: "AS", name: "Assam" },
  { code: "KL", name: "Kerala" },
  { code: "JK", name: "Jammu and Kashmir" },
  { code: "GJ", name: "Gujarat" },
  { code: "CH", name: "Chandigarh" },
  { code: "DH", name: "Dadra and Nagar Haveli and Daman and Diu" },
  { code: "SK", name: "Sikkim" },
  { code: "TN", name: "Tamil Nadu" },
  { code: "MZ", name: "Mizoram" },
  { code: "BR", name: "Bihar" },
  { code: "TR", name: "Tripura" },
  { code: "MP", name: "Madhya Pradesh" },
  { code: "CT", name: "Chhattisgarh" },
  { code: "LA", name: "Ladakh" },
  { code: "WB", name: "West Bengal" },
];

export default function GutsHero() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [citiesData, setCitiesData] = useState<CityItem[]>([]);
  const [filteredCities, setFilteredCities] = useState<CityItem[]>([]);

  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: "success" | "error" | "info"; text: string } | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/MrZorawaR/IndianCities/refs/heads/main/NewCities.json")
      .then((res) => res.json())
      .then((data: CityItem[]) => {
        setCitiesData(data);
      })
      .catch(() => {});
  }, []);

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const stCode = e.target.value;
    setSelectedState(stCode);
    setSelectedCity("");
    if (citiesData.length > 0) {
      const filtered = citiesData.filter((c) => c.state_code === stCode);
      setFilteredCities(filtered);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMsg(null);

    if (name.trim().length < 3) {
      setStatusMsg({ type: "error", text: "Please enter a valid full name." });
      return;
    }
    if (mobile.trim().length < 10 || !/^\d+$/.test(mobile.trim())) {
      setStatusMsg({ type: "error", text: "Please enter a valid 10-digit mobile number." });
      return;
    }
    if (!selectedState) {
      setStatusMsg({ type: "error", text: "Please select your state." });
      return;
    }
    if (!selectedCity) {
      setStatusMsg({ type: "error", text: "Please select your city." });
      return;
    }
    if (!selectedProgram) {
      setStatusMsg({ type: "error", text: "Please select your program interest." });
      return;
    }

    setLoading(true);
    setStatusMsg({ type: "info", text: "Submitting your application..." });

    try {
      const formData = {
        api_key: "phddfgj@2343dfjh3245dfgjhgdfjgh!dfgjhk99452kdskjg",
        name: name.trim(),
        mobile_number: mobile.trim(),
        state: selectedState,
        city: selectedCity,
        program: selectedProgram,
      };

      const response = await fetch("https://geetauniversity.com/Rapi/form/insert", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData),
      });

      const data = await response.json();
      if (data.status === true) {
        setStatusMsg({ type: "success", text: "Thank you! Your GUTS registration request has been submitted successfully." });
        setSubmitted(true);
      } else {
        setStatusMsg({ type: "error", text: data.message || "Submission failed. Please try again." });
      }
    } catch {
      setStatusMsg({ type: "error", text: "Network error occurred. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-white">
      {/* 1. Large Top Hero Banner Image */}
      <div className="relative w-full overflow-hidden bg-[#0A1F44]">
        <div className="relative h-[220px] sm:h-[320px] md:h-[420px] lg:h-[500px] xl:h-[560px] w-full">
          <Image
            src="https://geetauniversity.edu.in/uploads/all/1912/Guts_banner.jpg"
            alt="GUTS - Geeta University Test of Scholarship"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* 2. Hero Content & Enquiry Form */}
      <div className="gu-container py-12 sm:py-16 md:py-20 border-b border-[#E2E8F0]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Details & Benefits */}
          <div className="lg:col-span-7 space-y-6">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#E8871A]" />
              <span className="text-[12px] font-extrabold uppercase tracking-[3px] text-[#E8871A]">
                Scholarship Test 2026
              </span>
            </div>

            <h1 className="font-serif text-[34px] sm:text-[44px] md:text-[50px] font-black text-[#0A1F44] leading-[1.15] tracking-[-1px]">
              GUTS – Geeta University{" "}
              <span className="text-[#E8871A]">Test of Scholarship</span>
            </h1>

            <p className="text-[16.5px] sm:text-[18px] leading-[1.8] text-[#334155]">
              GUTS is Geeta University&apos;s in-house scholarship test to identify students&apos; capability and
              interest to excel academically. Depending on how well they perform in the test, students can pursue
              their dream of acquiring higher education with <strong>0 tuition fees</strong>. Students who are already eligible
              for any other scholarship offered by GU, can also take the test to increase their scholarship amount.
            </p>

            {/* Benefits Box */}
            <div className="rounded-[20px] bg-[#F8FAFC] border border-[#E2E8F0] p-6 sm:p-8 space-y-4">
              <h3 className="font-serif text-[22px] sm:text-[24px] font-bold text-[#0A1F44] flex items-center gap-2.5">
                <Award className="h-6 w-6 text-[#E8871A]" />
                <span>GUTS Key Benefits</span>
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3 rounded-[12px] bg-white p-4 border border-[#E2E8F0]">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ECFDF5] text-[#10B981] shrink-0 mt-0.5">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </div>
                  <div className="text-[15.5px] font-medium text-[#1E293B] leading-snug">
                    <strong>Enhance Your Scholarship:</strong> Increase your existing scholarship amount on admission.
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-[12px] bg-white p-4 border border-[#E2E8F0]">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ECFDF5] text-[#10B981] shrink-0 mt-0.5">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </div>
                  <div className="text-[15.5px] font-medium text-[#1E293B] leading-snug">
                    <strong>Up to 100% Tuition Waiver:</strong> Avail up to 100% scholarship through GUTS score, even if you are not eligible for any other GU scholarship.
                  </div>
                </div>
              </div>
            </div>

            {/* Metric counters */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
              <div className="rounded-[16px] bg-[#FFF8F2] border border-[#FFD9B3] p-4 text-center">
                <div className="font-serif text-[26px] sm:text-[32px] font-bold text-[#E8871A]">100%</div>
                <div className="text-[12px] sm:text-[13px] font-semibold text-[#8C4300] mt-0.5">Max Tuition Waiver</div>
              </div>
              <div className="rounded-[16px] bg-[#EFF6FF] border border-[#BFDBFE] p-4 text-center">
                <div className="font-serif text-[26px] sm:text-[32px] font-bold text-[#0284C7]">60 Min</div>
                <div className="text-[12px] sm:text-[13px] font-semibold text-[#0369A1] mt-0.5">Online Exam</div>
              </div>
              <div className="rounded-[16px] bg-[#F0FDF4] border border-[#BBF7D0] p-4 text-center">
                <div className="font-serif text-[26px] sm:text-[32px] font-bold text-[#16A34A]">60 Qs</div>
                <div className="text-[12px] sm:text-[13px] font-semibold text-[#15803D] mt-0.5">Aptitude &amp; Subject</div>
              </div>
            </div>
          </div>

          {/* Right Column: Enquire Now Card */}
          <div id="enquire" className="lg:col-span-5">
            <div className="sticky top-24 rounded-[24px] border border-[#CBD5E1] bg-white p-6 sm:p-8 shadow-[0_10px_35px_rgba(10,31,68,0.08)]">
              <div className="mb-6 text-center border-b border-[#F1F5F9] pb-4">
                <div className="inline-block rounded-full bg-[#FFF4EB] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#E8871A] mb-2">
                  Session 2026-27
                </div>
                <h3 className="font-serif text-[26px] sm:text-[30px] font-black text-[#0A1F44] leading-tight">
                  Enquire Now
                </h3>
                <p className="mt-1 text-[14px] text-[#64748B]">
                  Register for GUTS &amp; unlock merit scholarships
                </p>
              </div>

              {submitted ? (
                <div className="rounded-[16px] bg-[#ECFDF5] border border-[#10B981]/20 p-6 text-center text-[#065F46]">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-[#10B981] mb-3" />
                  <h4 className="font-bold text-[18px]">Registration Initiated!</h4>
                  <p className="text-[14px] mt-1 text-[#047857]">
                    Our admissions counselor will contact you shortly with your GUTS exam details and login link.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setMobile("");
                      setSelectedState("");
                      setSelectedCity("");
                      setSelectedProgram("");
                      setStatusMsg(null);
                    }}
                    className="mt-4 inline-block rounded-[10px] bg-[#0A1F44] px-4 py-2 text-xs font-bold text-white hover:bg-[#1A3A6B]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
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
                      value={selectedState}
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
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      required
                      disabled={!selectedState}
                      className="w-full rounded-[12px] border border-[#E2E8F0] bg-[#F8FAFC] py-3 pl-11 pr-8 text-[15px] font-medium text-[#0A1F44] focus:border-[#E8871A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E8871A]/20 transition-all appearance-none cursor-pointer disabled:opacity-60"
                    >
                      <option value="">{selectedState ? "Select City" : "Select State First"}</option>
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
                      value={selectedProgram}
                      onChange={(e) => setSelectedProgram(e.target.value)}
                      required
                      className="w-full rounded-[12px] border border-[#E2E8F0] bg-[#F8FAFC] py-3 pl-11 pr-8 text-[15px] font-medium text-[#0A1F44] focus:border-[#E8871A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E8871A]/20 transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select Stream / Course</option>
                      <option value="B.Tech Computer Science & Engineering">B.Tech Computer Science &amp; Engineering</option>
                      <option value="BCA Computer Applications">BCA Computer Applications</option>
                      <option value="BBA Business Administration">BBA Business Administration</option>
                      <option value="B.Com Commerce">B.Com Commerce</option>
                      <option value="B.Sc Agriculture">B.Sc Agriculture</option>
                      <option value="BA / BBA LL.B Law">BA / BBA LL.B Law</option>
                      <option value="B.Sc Forensic Sciences">B.Sc Forensic Sciences</option>
                      <option value="B.Sc Nutrition & Dietetics">B.Sc Nutrition &amp; Dietetics</option>
                      <option value="B.Sc Hotel Management">B.Sc Hotel Management</option>
                      <option value="BA / BSc Psychology">BA / B.Sc Psychology</option>
                      <option value="MBA Management">MBA Management</option>
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
                        <span>Processing Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Register for GUTS</span>
                        <ArrowRight className="h-5 w-5" />
                      </>
                    )}
                  </button>

                  {/* Status Alerts */}
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
