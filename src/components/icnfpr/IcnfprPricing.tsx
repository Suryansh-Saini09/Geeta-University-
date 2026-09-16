"use client";

import React from "react";
import { IndianRupee, ArrowRight, Info, CheckCircle2 } from "lucide-react";
import { registrationTiers } from "@/data/icnfprData";

export default function IcnfprPricing() {
  return (
    <section id="registration" className="py-20 lg:py-24 bg-[#F8FAFC] text-[#0A1F44] border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center justify-center gap-2 mb-3 text-[#E8871A] font-extrabold text-xs tracking-widest uppercase">
            <IndianRupee size={16} />
            <span>Pricing &amp; Delegate Categories</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1F44] tracking-tight">
            Registration <span className="text-[#E8871A]">Fees</span>
          </h2>
          <p className="mt-3 text-[#475569] text-sm sm:text-base leading-relaxed font-medium">
            Early Bird Registration (upto 30 April 2026) | On Spot Registration (1 May 2026)
          </p>
        </div>

        {/* 4 Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {registrationTiers.map((tier, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-[0_6px_25px_rgba(10,31,68,0.04)] hover:shadow-xl hover:border-[#E8871A] transition-all flex flex-col justify-between group"
            >
              <div>
                <h3 className="font-serif text-lg font-bold text-[#0A1F44] mb-5 min-h-[48px] flex items-center group-hover:text-[#E8871A] transition-colors">
                  {tier.category}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-orange-50/80 border border-orange-200/80">
                    <span className="text-xs font-bold text-[#C2410C] uppercase tracking-wider">Early Bird</span>
                    <span className="font-serif text-xl font-black text-[#E8871A]">{tier.earlyBird}</span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider">On Spot</span>
                    <span className="font-serif text-xl font-black text-[#0A1F44]">{tier.onSpot}</span>
                  </div>
                </div>

                <div className="text-xs text-[#334155] space-y-2.5 mb-7 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                    <span>Access to all technical tracks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                    <span>Delegate kit &amp; Certificate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                    <span>Conference Lunch &amp; High-Tea</span>
                  </div>
                </div>
              </div>

              <a
                href={tier.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  width: "100%",
                  padding: "14px 18px",
                  borderRadius: "14px",
                  background: "#E8871A",
                  color: "#FFFFFF",
                  fontWeight: 800,
                  fontSize: "14.5px",
                  textDecoration: "none",
                  boxShadow: "0 6px 18px rgba(232, 135, 26, 0.28)",
                  transition: "all 0.25s ease",
                }}
                className="pricing-btn"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#0A1F44";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#E8871A";
                  e.currentTarget.style.transform = "translateY(0px)";
                }}
              >
                <span style={{ color: "#FFFFFF", fontWeight: 800 }}>Register Now</span>
                <ArrowRight size={15} style={{ color: "#FFFFFF" }} />
              </a>
            </div>
          ))}
        </div>

        {/* Member Discount Notice */}
        <div className="mt-10 max-w-2xl mx-auto text-center p-4 rounded-2xl bg-white border border-slate-200 text-[#334155] text-xs sm:text-sm font-medium flex items-center justify-center gap-2 shadow-sm">
          <Info size={16} className="text-[#E8871A] shrink-0" />
          <span>*For Life Time IPA Members: <strong className="text-[#0A1F44]">20% Discount</strong> on Conference Registration.</span>
        </div>
      </div>
    </section>
  );
}
