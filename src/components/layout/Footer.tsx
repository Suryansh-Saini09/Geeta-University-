"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FooterLinkItem {
  label: string;
  href: string;
}

export default function Footer() {
  const [expandedCol, setExpandedCol] = useState<{ [key: string]: boolean }>({
    applyHere: false,
    quickLinks: true, // keep quick links or allow toggle
    visitHere: false,
    others: false,
  });

  const toggleCol = (colKey: string) => {
    setExpandedCol((prev) => ({ ...prev, [colKey]: !prev[colKey] }));
  };

  const applyHereList: FooterLinkItem[] = [
    { label: "NCC/NSS", href: "/about" },
    { label: "Admission Guidelines", href: "/programs-after-12th" },
    { label: "G-Portal", href: "https://gportal.geeta.edu.in/" },
    { label: "Anveshan: Multidisciplinary Journal", href: "https://anveshan.geetauniversity.edu.in/" },
    { label: "Industry Integration", href: "/placements" },
    { label: "Teaching Learning Practice", href: "/about" },
    { label: "Government Scholarship", href: "/fee-and-scholarship" },
    { label: "Approvals", href: "/about" },
    { label: "Academic Bank of Credits", href: "/about" },
    { label: "Geeta in News", href: "/campus-life" },
    { label: "Digi-Locker NAD Portal", href: "https://nad.gov.in/" },
    { label: "UGC Documents", href: "/about" },
    { label: "FAQ's", href: "/confused-about-courses" },
  ];

  const quickLinksList: FooterLinkItem[] = [
    { label: "Blog", href: "/campus-life" },
    { label: "Telephone Directory", href: "/about" },
    { label: "Student Grievances Portal", href: "/about" },
    { label: "IIC", href: "/about" },
    { label: "Central Library", href: "/campus-life" },
    { label: "Pharmacy Faculty List", href: "/programs/geeta-institute-of-pharmacy" },
    { label: "Pharmacy SIF", href: "/programs/geeta-institute-of-pharmacy" },
    { label: "National Education Policy", href: "/edge/nep" },
    { label: "Recent Placement", href: "/placements" },
    { label: "Geeta University Newsletter", href: "/campus-life" },
    { label: "Advisory Board", href: "/about" },
    { label: "Academic Calendar", href: "/about" },
    { label: "GU Academic Council", href: "/about" },
    { label: "GU Board of Management", href: "/about" },
    { label: "GU Governing Body", href: "/about" },
    { label: "Annual Report 2024 - 25", href: "/about" },
    { label: "Annual Report 2023-24", href: "/about" },
    { label: "Annual Report 2022-23", href: "/about" },
    { label: "GU Medal Policy", href: "/about" },
    { label: "XEdge", href: "/xedge" },
    { label: "Public Self Disclosure", href: "/about" },
  ];

  const visitHereList: FooterLinkItem[] = [
    { label: "Research, Innovation and Development Cell", href: "/about" },
    { label: "GU First Statutes", href: "/about" },
    { label: "GU Sponsoring Body", href: "/about" },
    { label: "GU Finance Committee", href: "/about" },
    { label: "GU UGC Approval", href: "/about" },
    { label: "GU Gazette", href: "/about" },
    { label: "How to Reach Us?", href: "/about" },
    { label: "General Information", href: "/about" },
    { label: "About Panipat", href: "/about" },
    { label: "UGC Samadhaan Portal", href: "https://samadhaan.ugc.ac.in/" },
    { label: "Student Handbook 2026-27", href: "/about" },
    { label: "Hostel Fee And Transport Charges", href: "/fee-and-scholarship" },
  ];

  const othersList: FooterLinkItem[] = [
    { label: "Alumni", href: "/campus-life" },
    { label: "Student Grievance Redressal Committee (SGRC)", href: "/about" },
    { label: "Equal Opportunity Cell details", href: "/about" },
    { label: "Internal Complaints Committee (ICC)", href: "/about" },
    { label: "Anti Ragging Committee", href: "/about" },
    { label: "GU Academic Peer Feedback Form", href: "/about" },
    { label: "GU Civil Society, NGOs Feedback Form", href: "/about" },
    { label: "GU Alumni Feedback Form", href: "/about" },
    { label: "GU Employer Feedback Form", href: "/about" },
    { label: "Sitemap", href: "/about" },
    { label: "Fee Refund Policy", href: "/fee-and-scholarship" },
    { label: "IDP", href: "/about" },
  ];

  const renderColumn = (
    title: string,
    items: FooterLinkItem[],
    colKey: string,
    initialLimit: number = 5
  ) => {
    const isExpanded = expandedCol[colKey];
    const visibleItems = isExpanded ? items : items.slice(0, initialLimit);
    const hiddenCount = items.length - initialLimit;

    return (
      <div className="flex-1 min-w-[200px] flex flex-col gap-4">
        <h4 className="text-white text-[16px] font-bold border-l-[3px] border-[#E8871A] pl-2.5 m-0 font-serif">
          {title}
        </h4>
        <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
          {visibleItems.map((item) => {
            const isExternal = item.href.startsWith("http");
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className={`text-[13px] leading-relaxed transition-colors duration-150 flex items-center gap-1.5 ${
                    item.label === "XEdge"
                      ? "text-[#E8871A] font-bold hover:text-[#FFA040]"
                      : "text-[#CBD5E0] hover:text-[#E8871A]"
                  }`}
                >
                  <span className="text-[10px] opacity-70">•</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {items.length > initialLimit && (
          <button
            onClick={() => toggleCol(colKey)}
            className="mt-1 flex items-center gap-1.5 text-[12px] font-bold text-[#E8871A] hover:text-[#FFA040] transition-colors py-1 w-fit bg-transparent border-0 cursor-pointer"
          >
            {isExpanded ? (
              <>
                <ChevronUp size={14} />
                <span>Show Less</span>
              </>
            ) : (
              <>
                <ChevronDown size={14} />
                <span>+{hiddenCount} More</span>
              </>
            )}
          </button>
        )}
      </div>
    );
  };

  return (
    <footer className="bg-[#0A1F44] text-[#CBD5E0] pt-16 pb-8 px-6 border-t-4 border-[#E8871A]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        {/* Row 1: Logo + Tagline */}
        <div className="flex justify-between items-center flex-wrap gap-6 border-b border-white/10 pb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <img
              src="/GU-Logo.webp"
              alt="Geeta University Logo"
              className="h-14 w-auto object-contain"
            />
            <p className="text-[14px] text-[#94A3B8] max-w-[480px] m-0 leading-relaxed">
              A premier state university in Panipat, Haryana, committed to academic excellence,
              industry-linked training, and holistic student development.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/programs-after-12th"
              className="inline-flex items-center gap-2 rounded-full bg-[#E8871A] hover:bg-[#d47812] text-white font-bold px-5 py-2.5 text-[14px] shadow-lg shadow-[#E8871A]/20 transition-all"
            >
              Admissions Open 2026-27 →
            </Link>
          </div>
        </div>

        {/* Row 2: Four Link Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {renderColumn("Apply Here", applyHereList, "applyHere", 5)}
          {renderColumn("Quick Links", quickLinksList, "quickLinks", 5)}
          {renderColumn("Visit Here", visitHereList, "visitHere", 5)}
          {renderColumn("Others", othersList, "others", 5)}
        </div>

        {/* Bottom Bar: Copyright + Legal */}
        <div className="border-t border-white/10 pt-6 flex justify-between items-center flex-wrap gap-4 text-[12px] text-[#94A3B8]">
          <div>© 2026 Geeta University. All rights reserved.</div>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms & Conditions", "Disclaimer"].map((legal) => (
              <Link
                key={legal}
                href="/about"
                className="text-inherit no-underline hover:text-[#E8871A] transition-colors"
              >
                {legal}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
