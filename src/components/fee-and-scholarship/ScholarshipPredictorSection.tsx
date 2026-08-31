"use client";

import React, { useState, useMemo } from "react";
import {
  PROGRAMS_FEE_DATABASE,
  SCHOLARSHIP_RULES_DATABASE,
  ProgramItem,
} from "@/data/feeAndScholarshipData";
import { Calculator, Check, Award, Sparkles, HelpCircle, ArrowRight } from "lucide-react";

export default function ScholarshipPredictorSection() {
  const areaKeys = useMemo(() => Object.keys(PROGRAMS_FEE_DATABASE), []);

  const [selectedArea, setSelectedArea] = useState<string>(areaKeys[0] || "");
  const [selectedProgramName, setSelectedProgramName] = useState<string>(
    PROGRAMS_FEE_DATABASE[areaKeys[0]]?.programs[0]?.programme || ""
  );
  const [selectedCategoryKey, setSelectedCategoryKey] = useState<string>("GUTS");
  const [selectedSubCategoryIdx, setSelectedSubCategoryIdx] = useState<number>(0);
  const [selectedPercent, setSelectedPercent] = useState<number>(100);

  // Available programs for current area
  const currentPrograms = useMemo(() => {
    return PROGRAMS_FEE_DATABASE[selectedArea]?.programs || [];
  }, [selectedArea]);

  // Current selected program object
  const currentProgram: ProgramItem = useMemo(() => {
    const found = currentPrograms.find((p) => p.programme === selectedProgramName);
    return found || currentPrograms[0] || { programme: "", level: "UG", prog_fee_per_sem: 0, tuition_fee: 0 };
  }, [currentPrograms, selectedProgramName]);

  // Filter available scholarship categories based on area and level
  const availableCategories = useMemo(() => {
    return Object.entries(SCHOLARSHIP_RULES_DATABASE).filter(([key, rule]) => {
      if (rule.exclude_groups?.includes(selectedArea)) return false;
      if (rule.eligible_groups && !rule.eligible_groups.includes(selectedArea)) return false;
      if (rule.level_applicability && !rule.level_applicability.includes(currentProgram.level)) return false;
      return true;
    });
  }, [selectedArea, currentProgram.level]);

  // Current selected category rule
  const currentRule = useMemo(() => {
    return SCHOLARSHIP_RULES_DATABASE[selectedCategoryKey] || availableCategories[0]?.[1];
  }, [selectedCategoryKey, availableCategories]);

  // Subcategories
  const currentSubcategories = useMemo(() => {
    return currentRule?.subcategories || [];
  }, [currentRule]);

  // Slabs
  const currentSlabs = useMemo(() => {
    const subcat = currentSubcategories[selectedSubCategoryIdx] || currentSubcategories[0];
    return subcat?.slabs || [];
  }, [currentSubcategories, selectedSubCategoryIdx]);

  // Handlers
  const handleAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newArea = e.target.value;
    setSelectedArea(newArea);
    const newProgs = PROGRAMS_FEE_DATABASE[newArea]?.programs || [];
    if (newProgs.length > 0) {
      setSelectedProgramName(newProgs[0].programme);
    }
  };

  const handleProgramChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProgramName(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newKey = e.target.value;
    setSelectedCategoryKey(newKey);
    setSelectedSubCategoryIdx(0);
    const rule = SCHOLARSHIP_RULES_DATABASE[newKey];
    const subcat = rule?.subcategories?.[0];
    if (subcat?.slabs?.[0]) {
      setSelectedPercent(subcat.slabs[0].percent);
    }
  };

  const handleSubCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newIdx = parseInt(e.target.value, 10);
    setSelectedSubCategoryIdx(newIdx);
    const subcat = currentSubcategories[newIdx];
    if (subcat?.slabs?.[0]) {
      setSelectedPercent(subcat.slabs[0].percent);
    }
  };

  const handleSlabChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPercent(parseFloat(e.target.value));
  };

  // Calculations
  const feePerSem = currentProgram.prog_fee_per_sem || 0;
  const tuitionFee = currentProgram.tuition_fee || 0;
  const scholarshipAmount = Math.round((tuitionFee * selectedPercent) / 100);
  const applicableFee = Math.max(0, feePerSem - scholarshipAmount);

  return (
    <section id="scholarship-calculator" className="w-full bg-[#FAF7F2] py-16 sm:py-20 md:py-24">
      <div className="gu-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#E8871A]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#E8871A] mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Interactive Fee Calculator</span>
          </div>
          <h2 className="font-serif text-[30px] sm:text-[38px] md:text-[44px] font-black text-[#0A1F44] leading-[1.2]">
            Find Out Your Exact Scholarship in Seconds
          </h2>
          <p className="mt-3 text-[16px] sm:text-[18px] text-[#475569]">
            Calculate revised tuition fees, scholarship slabs, and applicable payment fees for the academic session 2026–27.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Context, Benefits & Pragati Scholarship Card */}
          <div className="lg:col-span-7 space-y-8">
            {/* Explanatory text & Benefits List */}
            <div className="rounded-[20px] bg-white p-6 sm:p-8 border border-[#E2E8F0] shadow-sm">
              <h3 className="font-serif text-[22px] sm:text-[26px] font-bold text-[#06355F] mb-3">
                Transparent &amp; Merit-First Financial Support
              </h3>
              <p className="text-[15px] sm:text-[16px] leading-[1.7] text-[#475569]">
                Find your true potential by using our simple-to-use scholarship Predictor Tool created to assist you in determining the amount of scholarships you&apos;re qualified for at Geeta University. Just a couple of quick selections—your category, your programme, and your academic record—will get you an exact, precise estimation.
              </p>

              <div className="mt-6 pt-6 border-t border-[#F1F5F9]">
                <p className="text-[14px] font-bold uppercase tracking-wider text-[#0A1F44] mb-4">
                  What This Tool Displays:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14.5px] text-[#334155]">
                  <div className="flex items-start gap-2.5">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E8871A]/15 text-[#E8871A] font-bold text-xs mt-0.5">
                      ✓
                    </div>
                    <span>Applicable scholarship percentage slab</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E8871A]/15 text-[#E8871A] font-bold text-xs mt-0.5">
                      ✓
                    </div>
                    <span>Revised tuition fee after deduction</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E8871A]/15 text-[#E8871A] font-bold text-xs mt-0.5">
                      ✓
                    </div>
                    <span>Total savings per semester</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E8871A]/15 text-[#E8871A] font-bold text-xs mt-0.5">
                      ✓
                    </div>
                    <span>Final net payment per semester</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Programme: Pragati Scholarship Card */}
            <div className="rounded-[20px] bg-white border border-[#E2E8F0] shadow-md overflow-hidden relative">
              <div className="h-[6px] bg-[#E8871A] w-full" />
              <div className="p-6 sm:p-8">
                <div className="inline-block rounded-full bg-[#F0F7FF] px-3.5 py-1 text-xs font-bold text-[#06355F] border border-[#CCE0FF] mb-3">
                  Special Programme
                </div>

                <h3 className="font-serif text-[24px] sm:text-[28px] font-bold text-[#06355F] mb-2">
                  Pragati Scholarship 2026–27
                </h3>

                <p className="text-[15px] text-[#475569] leading-relaxed mb-4">
                  A special scholarship initiative of Geeta University for students of{" "}
                  <strong className="text-[#06355F]">Himachal Pradesh, Jammu &amp; Kashmir, Ladakh, and Northeast India</strong>.
                </p>

                <div className="space-y-3 mb-6 text-[14.5px] text-[#334155]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFF2E5] text-[#E8871A]">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                    <span>
                      5 students eligible for <strong className="text-[#E8871A]">100% Scholarship</strong>
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFF2E5] text-[#E8871A]">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                    <span>
                      5 students eligible for <strong className="text-[#E8871A]">50% Scholarship</strong>
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFF2E5] text-[#E8871A]">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                    <span>Hon&apos;ble MLAs/MPs recommendations accepted for funding.</span>
                  </div>
                </div>

                <div className="rounded-[12px] bg-[#F8FBFF] border-l-4 border-[#06355F] p-4 text-[13.5px] text-[#475569] leading-relaxed mb-5">
                  <strong>Applicable Fields:</strong> Engineering, Computer Applications, Management, Nutrition &amp; Dietetics, Hospitality, Humanities, Forensic Science, Pharmacy, Commerce, Agriculture, and Law programmes.
                </div>

                <div className="flex items-center gap-3 rounded-[12px] bg-[#FFF2E5] border border-[#FFE5CC] p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E8871A] text-white">
                    <Award className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-[#E8871A]">Admission Session 2026–27</div>
                    <div className="text-[12px] text-[#64748B]">Limited Seat availability on early evaluation.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Predictor Form & Result Card */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 rounded-[24px] bg-white border border-[#CBD5E1] p-6 sm:p-8 shadow-[0_12px_40px_rgba(10,31,68,0.09)]">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F1F5F9]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#06355F] text-white">
                  <Calculator className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-[22px] font-bold text-[#06355F]">
                    Fee &amp; Scholarship Predictor
                  </h3>
                  <p className="text-[13px] text-[#64748B]">Select your course and criteria below</p>
                </div>
              </div>

              {/* Form Controls */}
              <div className="space-y-4">
                {/* 1. Area of Interest */}
                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-wider text-[#0A1F44] mb-1.5">
                    Area of Interest
                  </label>
                  <select
                    value={selectedArea}
                    onChange={handleAreaChange}
                    className="w-full rounded-[10px] border border-[#CBD5E1] bg-white px-3.5 py-2.5 text-[14px] font-semibold text-[#0A1F44] focus:border-[#E8871A] focus:outline-none focus:ring-2 focus:ring-[#E8871A]/20 transition-all cursor-pointer"
                  >
                    {areaKeys.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 2. Program */}
                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-wider text-[#0A1F44] mb-1.5">
                    Program / Course
                  </label>
                  <select
                    value={selectedProgramName}
                    onChange={handleProgramChange}
                    className="w-full rounded-[10px] border border-[#CBD5E1] bg-white px-3.5 py-2.5 text-[14px] font-semibold text-[#0A1F44] focus:border-[#E8871A] focus:outline-none focus:ring-2 focus:ring-[#E8871A]/20 transition-all cursor-pointer"
                  >
                    {currentPrograms.map((prog, idx) => (
                      <option key={idx} value={prog.programme}>
                        {prog.programme} ({prog.level})
                      </option>
                    ))}
                  </select>
                </div>

                {/* 3. Scholarship Category */}
                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-wider text-[#0A1F44] mb-1.5">
                    Scholarship Category
                  </label>
                  <select
                    value={selectedCategoryKey}
                    onChange={handleCategoryChange}
                    className="w-full rounded-[10px] border border-[#CBD5E1] bg-white px-3.5 py-2.5 text-[14px] font-semibold text-[#0A1F44] focus:border-[#E8871A] focus:outline-none focus:ring-2 focus:ring-[#E8871A]/20 transition-all cursor-pointer"
                  >
                    {availableCategories.map(([key, rule]) => (
                      <option key={key} value={key}>
                        {rule.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 4. Subcategory (if multiple exist) */}
                {currentSubcategories.length > 1 && (
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-wider text-[#0A1F44] mb-1.5">
                      Scholarship Subcategory
                    </label>
                    <select
                      value={selectedSubCategoryIdx}
                      onChange={handleSubCategoryChange}
                      className="w-full rounded-[10px] border border-[#CBD5E1] bg-white px-3.5 py-2.5 text-[14px] font-semibold text-[#0A1F44] focus:border-[#E8871A] focus:outline-none focus:ring-2 focus:ring-[#E8871A]/20 transition-all cursor-pointer"
                    >
                      {currentSubcategories.map((subcat, idx) => (
                        <option key={idx} value={idx}>
                          {subcat.label}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* 5. Slab / Percentage */}
                {currentSlabs.length > 0 && (
                  <div>
                    <label className="block text-[12px] font-bold uppercase tracking-wider text-[#0A1F44] mb-1.5">
                      Qualifying Score / Slab
                    </label>
                    <select
                      value={selectedPercent}
                      onChange={handleSlabChange}
                      className="w-full rounded-[10px] border border-[#CBD5E1] bg-white px-3.5 py-2.5 text-[14px] font-semibold text-[#0A1F44] focus:border-[#E8871A] focus:outline-none focus:ring-2 focus:ring-[#E8871A]/20 transition-all cursor-pointer"
                    >
                      {currentSlabs.map((s, idx) => (
                        <option key={idx} value={s.percent}>
                          {s.label} ({s.percent}% Tuition Waiver)
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              {/* Dynamic Result Card */}
              <div className="mt-6 rounded-[18px] bg-gradient-to-br from-[#06355F] to-[#0A1F44] p-6 text-white shadow-lg">
                <div className="flex items-center justify-between border-b border-white/15 pb-3 mb-4">
                  <h4 className="font-serif text-[18px] font-bold text-white">
                    Scholarship Breakdown
                  </h4>
                  <span className="rounded-full bg-[#E8871A] px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wider text-white">
                    {selectedPercent}% Waiver
                  </span>
                </div>

                <div className="space-y-3 text-[14px]">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-white/75">Fee Per Semester:</span>
                    <span className="font-bold text-white text-[15px]">
                      ₹{feePerSem.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-white/75">Base Tuition Fee:</span>
                    <span className="font-bold text-white text-[15px]">
                      ₹{tuitionFee.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span className="text-white/75">Scholarship Amount:</span>
                    <span className="font-bold text-[#E8871A] text-[16px]">
                      -₹{scholarshipAmount.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                {/* Net Applicable Fee Banner */}
                <div className="mt-5 rounded-[12px] bg-white/10 border border-white/20 p-4 text-center">
                  <div className="text-[11px] font-extrabold uppercase tracking-widest text-white/80">
                    Net Applicable Fee Per Semester
                  </div>
                  <div className="font-serif text-[28px] sm:text-[32px] font-black text-white mt-1">
                    ₹{applicableFee.toLocaleString("en-IN")}
                  </div>
                  <div className="text-[11.5px] text-white/65 mt-1">
                    *Excluding examination &amp; refundable security fees
                  </div>
                </div>

                <div className="mt-5 text-center">
                  <a
                    href="https://admissions.geetauniversity.edu.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#E8871A] py-3 text-[15px] font-bold text-white shadow-md transition-all hover:bg-[#D47309]"
                  >
                    <span>Apply with this Scholarship</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
