"use client";

import React, { useState, useEffect } from "react";

export default function AdmissionFormWrapper() {
  const [mounted, setMounted] = useState(false);

  // Step 1: mount the widget div into the DOM
  useEffect(() => {
    setMounted(true);
  }, []);

  // Step 2: only inject scripts AFTER the npf_wgts div is actually rendered
  useEffect(() => {
    if (!mounted) return;

    // Set global NPF tracking variables
    (window as any).npf_d = "https://admissions.geetauniversity.edu.in";
    (window as any).npf_c = "6438";
    (window as any).npf_m = "1";

    // Append script tag with cache-buster to ensure it re-executes and binds to the newly mounted element
    const script = document.createElement("script");
    script.src = `https://widgets.in6.nopaperforms.com/emwgts.js?v=${Date.now()}`;
    script.async = true;
    document.body.appendChild(script);

    const trackScript = document.createElement("script");
    trackScript.src = "https://track.nopaperforms.com/js/track.js";
    trackScript.async = true;
    document.body.appendChild(trackScript);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      if (document.body.contains(trackScript)) {
        document.body.removeChild(trackScript);
      }
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      className="rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden w-full transition-all duration-300 border border-white/20"
      style={{
        background: "#F4F7FB",
        borderRadius: "18px",
        padding: "16px 14px 12px",
        minHeight: "520px",
        width: "100%",
      }}
    >
      {/* Header inside form */}
      <div className="text-center pb-2 mb-2 border-b border-gray-200/80">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E8871A]/10 text-[#E8871A] text-[10.5px] font-extrabold uppercase tracking-wider mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8871A] animate-pulse" />
          Admissions Open 2026–27
        </div>
        <h3 className="text-[#0A1F44] font-extrabold text-[15px] leading-tight">
          Apply Online / Enquire Now
        </h3>
      </div>

      <div
        className="npf_wgts"
        data-height="500px"
        data-w="cc53b914cae1d736d235f9adb19f5426"
        style={{ width: "100%", minHeight: "490px", margin: "0" }}
      />
    </div>
  );
}

