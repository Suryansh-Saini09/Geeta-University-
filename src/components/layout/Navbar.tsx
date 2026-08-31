"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import {
  ChevronDown,
  ChevronUp,
  X,
  GraduationCap,
  BookOpen,
  Microscope,
  Library,
  FlaskConical,
  FileText,
  Award,
  DollarSign,
  ClipboardCheck,
  Home,
  Trophy,
  Sparkles,
  Briefcase,
  TrendingUp,
  Users,
  Rocket,
  Globe,
  Activity,
  Search,
} from "lucide-react";

interface MegaCol { heading: string; links: { label: string; href: string }[]; }
interface BannerItem { icon: React.ReactNode; label: string; href: string; }
interface NavEntry {
  label: string;
  key: string;
  cols?: MegaCol[];
  banner?: { text: string; items: BannerItem[] };
  href?: string;
}

/* ── NAV DATA ────────────────────────────────────────────────── */
const secondaryNavLinks: NavEntry[] = [
  {
    label: "ABOUT",
    key: "about",
    href: "/about",
  },
  {
    label: "PROGRAMS",
    key: "programs",
    cols: [
      {
        heading: "ENGINEERING & TECH", links: [
          { label: "School of CSE", href: "/programs/school-of-computer-science-and-engineering" },
          { label: "School of Sciences", href: "/programs/school-of-forensic-sciences" },
          { label: "School of Agricultural Sciences", href: "/programs/school-of-agricultural-studies" },
        ]
      },
      {
        heading: "MANAGEMENT & LAW", links: [
          { label: "School of Commerce & Business Management", href: "/programs/school-of-management-and-business-studies" },
          { label: "SP Bansal School of Business", href: "/programs/sp-bansal-school-of-business" },
          { label: "Geeta Global Law School", href: "/programs/geeta-global-law-school" },
        ]
      },
      {
        heading: "HEALTH & HUMANITIES", links: [
          { label: "Geeta Institute of Pharmacy", href: "/programs/geeta-institute-of-pharmacy" },
          { label: "School of Health & Allied Sciences", href: "/programs/school-of-health-and-allied-sciences" },
          { label: "Geeta Nursing College", href: "#" },
          { label: "School of Humanities & Social Sciences", href: "/programs/school-of-humanities-and-social-science" },
          { label: "School of Hospitality & Hotel Management", href: "/programs/school-of-hospitality-and-hotel-management" },
        ]
      },
    ],
    banner: {
      text: "Find Your Perfect Program", items: [
        { icon: <GraduationCap size={16} />, label: "UG Programs", href: "/programs-after-12th" },
        { icon: <BookOpen size={16} />, label: "PG Programs", href: "/post-graduate-programs" },
        { icon: <Microscope size={16} />, label: "Doctoral Programs (Ph.D.)", href: "/phd" },
      ]
    },
  },
  {
    label: "ADMISSIONS",
    key: "admissions",
    cols: [
      {
        heading: "JOB ORIENTED PROGRAMS",
        links: [
          { label: "Programs After 12th", href: "/programs-after-12th" },
          { label: "Postgraduate Programs", href: "/post-graduate-programs" },
          { label: "Doctoral Programs PhD", href: "/phd" },
          { label: "Confused About Courses?", href: "/confused-about-courses" },
        ],
      },
      {
        heading: "ADMISSION",
        links: [
          { label: "GUTS", href: "/guts" },
          { label: "Fee Structure & Scholarships", href: "/fee-and-scholarship" },
          { label: "CUET", href: "/cuet" },
        ],
      },
    ],
    banner: {
      text: "Unlock Your Career Goals",
      items: [
        { icon: <Award size={16} />, label: "Scholarships", href: "/fee-and-scholarship" },
        { icon: <DollarSign size={16} />, label: "GUTS", href: "/guts" },
        { icon: <ClipboardCheck size={16} />, label: "CUET", href: "/cuet" },
      ],
    },
  },
  {
    label: "CAMPUS LIFE",
    key: "campuslife",
    href: "/campus-life",
  },
  {
    label: "PLACEMENTS",
    key: "placements",
    href: "/placements",
  },
  {
    label: "GU EDGE",
    key: "guedge",
    cols: [
      { heading: "INNOVATION & FUTURES", links: [
        { label: "Design Your Own Degree", href: "/edge/dyod" },
        { label: "Geeta Finishing School", href: "/edge/gfs" },
        { label: "Geeta Technical Hub", href: "/edge/gth" },
      ]},
      { heading: "POLICY & SKILLS", links: [
        { label: "New Education Policy (NEP)", href: "/edge/nep" },
        { label: "Vocational Skills", href: "/edge/vocational-skills" },
        { label: "GU Global Edge", href: "/gu-global-edge" },
      ]},
    ],
    banner: { text: "The Geeta Edge", items: [
      { icon: <Sparkles size={16} />, label: "DYOD", href: "/edge/dyod" },
      { icon: <TrendingUp size={16} />, label: "GTH Hub", href: "/edge/gth" },
      { icon: <Globe size={16} />, label: "Global Edge", href: "/gu-global-edge" },
    ]},
  },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [announcementIndex, setAnnouncementIndex] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const announcements = [
    "Admissions Open 2025-26 — Apply Now for UG, PG & PhD Programs",
    "Geeta University Ranked Among Top Universities in Haryana — NIRF 2024",
    "Joint Campus Placement Drive — 500+ Companies Visiting This Season",
    "International Student Exchange Program Now Open for Applications",
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setAnnouncementIndex((p) => (p + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (searchOpen && searchRef.current) searchRef.current.focus();
  }, [searchOpen]);

  const handleMouseEnter = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(key);
  };
  const handleMouseLeave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 100);
  };

  return (
    <>
      <style>{`
        /* ─── ROOT ───────────────────────────────────────────── */
        .gu-root {
          width: 100%;
          position: sticky;
          top: 0;
          z-index: 1000;
          font-family: 'Source Sans 3', sans-serif;
        }

        /* ─── TOP ANNOUNCEMENT BAR ───────────────────────────── */
        .gu-topbar {
          background: #EDE9DF;
          color: #0A1F44;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          height: 36px;
          font-size: 12px;
          border-bottom: 1px solid #DFD9CB;
        }
        .gu-topbar-left {
          display: flex;
          align-items: center;
          gap: 6px;
          flex: 1;
          overflow: hidden;
        }
        .gu-ticker-nav { display: flex; gap: 2px; }
        .gu-ticker-btn {
          background: none; border: none; color: #555555;
          cursor: pointer; padding: 2px 6px; font-size: 15px;
          transition: color .15s;
        }
        .gu-ticker-btn:hover { color: #e8871a; }
        .gu-ticker { flex: 1; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; font-size: 12.5px; color: #0A1F44; }
        .gu-apply-pill {
          background: #e8871a; color: #fff; text-decoration: none;
          padding: 3px 13px; font-size: 11px; font-weight: 700;
          border-radius: 2px; white-space: nowrap; margin-left: 8px;
          transition: background .2s; letter-spacing: .5px;
        }
        .gu-apply-pill:hover { background: #c9710f; }

        .gu-topbar-right {
          display: flex; align-items: center; gap: 12px; margin-left: 20px;
        }
        .gu-topbar-ico {
          color: #4A5568; text-decoration: none; font-size: 12.5px;
          display: flex; align-items: center; gap: 4px; transition: color .2s;
          white-space: nowrap;
        }
        .gu-topbar-ico:hover { color: #e8871a; }
        .gu-vdivider { width: 1px; height: 14px; background: #DFD9CB; }
        .gu-socials { display: flex; align-items: center; gap: 9px; }
        .gu-socials a { color: #4A5568; transition: color .2s; }
        .gu-socials a:hover { color: #e8871a; }

        /* ─── LOGO / HELPLINE BAR ────────────────────────────── */
        .gu-mainbar {
          background: #FAF7F2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          height: 66px;
        }

        /* Logo */
        .gu-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; flex-shrink: 0; }
        .gu-logo-img {
          width: 140px; height: 44px; overflow: hidden;
          background: transparent; flex-shrink: 0; display: flex; align-items: center; justify-content: center;
        }
        .gu-logo-text { display: flex; flex-direction: column; line-height: 1.15; }
        .gu-logo-name { font-size: 21px; font-weight: 900; color: #0A1F44; letter-spacing: -.4px; text-transform: uppercase; }
        .gu-logo-gold { color: #e8871a; }
        .gu-logo-tag { font-size: 9px; color: #64748B; letter-spacing: 1.6px; text-transform: uppercase; margin-top: 1px; }

        /* Centre quick-nav */
        .gu-main-quicknav {
          display: flex;
          align-items: center;
          gap: 2px;
          flex: 1;
          justify-content: center;
          overflow: hidden;
        }
        .gu-qnav-btn {
          background: none;
          border: none;
          color: #4A5568;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: .6px;
          text-transform: uppercase;
          padding: 6px 10px;
          border-radius: 4px;
          cursor: pointer;
          white-space: nowrap;
          transition: color .18s, background .18s;
          position: relative;
        }
        .gu-qnav-btn::after {
          content: '';
          position: absolute;
          bottom: 2px; left: 10px; right: 10px;
          height: 2px;
          background: #e8871a;
          border-radius: 2px;
          transform: scaleX(0);
          transition: transform .2s;
          transform-origin: center;
        }
        .gu-qnav-btn:hover { color: #0A1F44; background: rgba(10,31,68,0.06); }
        .gu-qnav-btn:hover::after { transform: scaleX(1); }

        /* Helpline + search */
        .gu-mainbar-right { display: flex; align-items: center; gap: 14px; }
        .gu-helpline {
          display: flex; align-items: center; gap: 9px;
          background: #e8871a; color: #fff; border-radius: 4px;
          padding: 6px 13px 6px 9px; text-decoration: none; transition: background .2s;
        }
        .gu-helpline:hover { background: #c9710f; }
        .gu-helpline-ico {
          width: 34px; height: 34px; border-radius: 50%; background: rgba(0,0,0,.2);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .gu-helpline-info { display: flex; flex-direction: column; line-height: 1.2; }
        .gu-helpline-lbl { font-size: 9px; letter-spacing: .5px; opacity: .9; }
        .gu-helpline-num { font-size: 16px; font-weight: 800; letter-spacing: -.3px; }
        .gu-helpline-lines { display: flex; flex-direction: column; gap: 4px; margin-left: 4px; }
        .gu-helpline-lines span { display: block; width: 18px; height: 2px; background: rgba(255,255,255,.8); border-radius: 2px; }

        .gu-search-btn {
          background: none; border: none; color: #4A5568; cursor: pointer;
          display: flex; flex-direction: column; align-items: center; gap: 2px;
          padding: 6px; transition: color .2s;
        }
        .gu-search-btn:hover { color: #e8871a; }
        .gu-search-btn span { font-size: 9px; letter-spacing: .5px; }

        .gu-mob-toggle {
          display: none; background: none; border: none; color: #0A1F44; cursor: pointer; padding: 6px;
        }

        /* ─── SECONDARY NAV BAR (the new style) ─────────────── */
        .gu-secbar {
          background: #EFEAE0;
          border-top: 1px solid #DFD9CB;
          border-bottom: 2px solid #e8871a;
          display: flex;
          align-items: stretch;
          position: relative;
          overflow: visible;
        }

        .gu-sec-item {
          position: relative;
          display: flex;
          align-items: stretch;
          flex: 1;
        }
        /* Vertical pipe dividers between items */
        .gu-sec-item:not(:last-child)::after {
          content: '';
          position: absolute;
          right: 0;
          top: 20%;
          height: 60%;
          width: 1px;
          background: #DFD9CB;
        }

        .gu-sec-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          width: 100%;
          padding: 0 8px;
          height: 40px;
          color: #2D3748;
          text-decoration: none;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .8px;
          white-space: nowrap;
          cursor: pointer;
          background: none;
          border: none;
          text-transform: uppercase;
          transition: color .18s, background .18s;
          position: relative;
        }
        .gu-sec-link::before {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: #e8871a;
          transform: scaleX(0);
          transition: transform .2s;
          transform-origin: center;
        }
        .gu-sec-link:hover,
        .gu-sec-link.open {
          color: #0A1F44;
          background: #E5DFC9;
        }
        .gu-sec-link:hover::before,
        .gu-sec-link.open::before {
          transform: scaleX(1);
        }

        .gu-sec-chevron {
          display: inline-flex;
          align-items: center;
          font-size: 8px;
          opacity: .7;
          transition: transform .2s, opacity .2s;
        }
        .gu-sec-link.open .gu-sec-chevron,
        .gu-sec-link:hover .gu-sec-chevron {
          transform: rotate(180deg);
          opacity: 1;
        }

        /* ── MEGA MENU ────────────────────────────────── */
        @keyframes gu-drop {
          from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        /* Page-wide blur backdrop */
        .gu-mega-backdrop {
          position: fixed;
          inset: 0;
          top: 142px;
          background: rgba(0,0,0,.25);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          z-index: 699;
          animation: gu-fade .18s ease;
          pointer-events: none;
        }
        @keyframes gu-fade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* Compact panel */
        .gu-mega {
          position: fixed;
          top: 142px;
          left: 50%;
          transform: translateX(-50%);
          width: min(900px, 92vw);
          background: #fff;
          border-radius: 0 0 10px 10px;
          border-top: 3px solid #e8871a;
          box-shadow: 0 16px 40px rgba(0,0,0,.28);
          z-index: 700;
          animation: gu-drop .22s cubic-bezier(.22,.61,.36,1);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .gu-mega-body {
          display: flex;
          padding: 20px 28px 16px;
          gap: 0;
        }

        .gu-mega-col {
          flex: 1;
          padding: 0 18px 0 0;
          border-right: 1px solid #eee;
          margin-right: 18px;
        }
        .gu-mega-col:last-child {
          border-right: none;
          margin-right: 0;
          padding-right: 0;
        }

        .gu-mega-col-heading {
          font-size: 9.5px;
          font-weight: 800;
          letter-spacing: 1.1px;
          text-transform: uppercase;
          color: #e8871a;
          margin-bottom: 10px;
          padding-bottom: 6px;
          border-bottom: 2px solid #f0f0f0;
        }

        .gu-mega-link {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 5px 0;
          color: #333;
          text-decoration: none;
          font-size: 12px;
          font-weight: 500;
          transition: color .15s, padding-left .15s;
          position: relative;
        }
        .gu-mega-link::before {
          content: '';
          display: inline-block;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #e8871a;
          opacity: 0;
          flex-shrink: 0;
          transition: opacity .15s;
        }
        .gu-mega-link:hover { color: #e8871a; padding-left: 5px; }
        .gu-mega-link:hover::before { opacity: 1; }

        /* Banner strip */
        .gu-mega-banner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          background: linear-gradient(135deg, #e8871a 0%, #c9710f 100%);
          padding: 11px 28px;
          position: relative;
          overflow: hidden;
        }
        .gu-mega-banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='28'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
          opacity: .4;
        }
        .gu-mega-banner-title {
          font-size: 12px;
          font-weight: 800;
          color: #fff;
          letter-spacing: .4px;
          margin-right: 24px;
          position: relative;
          white-space: nowrap;
        }
        .gu-mega-banner-items {
          display: flex;
          align-items: center;
          gap: 5px;
          position: relative;
        }
        .gu-mega-banner-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
          padding: 6px 16px;
          border-radius: 5px;
          text-decoration: none;
          color: #fff;
          background: rgba(255,255,255,.12);
          border: 1px solid rgba(255,255,255,.22);
          transition: background .18s, transform .18s;
          min-width: 76px;
        }
        .gu-mega-banner-item:hover {
          background: rgba(255,255,255,.24);
          transform: translateY(-2px);
        }
        .gu-mega-banner-icon { font-size: 16px; line-height: 1; }
        .gu-mega-banner-lbl { font-size: 10px; font-weight: 600; letter-spacing: .3px; }

        /* ─── SEARCH OVERLAY ─────────────────────────────────── */
        .gu-search-overlay {
          position: fixed; inset: 0;
          background: rgba(0,0,0,.88);
          z-index: 2000;
          display: flex; align-items: flex-start; justify-content: center;
          padding-top: 110px;
          animation: gu-drop .2s ease;
        }
        .gu-search-box {
          background: #222; border-radius: 8px; padding: 24px;
          width: 100%; max-width: 600px; position: relative;
        }
        .gu-search-box input {
          width: 100%; background: #333;
          border: 2px solid #e8871a; color: #fff; font-size: 18px;
          padding: 14px 50px 14px 18px; border-radius: 6px; outline: none;
        }
        .gu-search-box input::placeholder { color: #777; }
        .gu-search-close {
          position: absolute; top: 10px; right: 14px;
          background: none; border: none; color: #777; font-size: 22px;
          cursor: pointer; transition: color .2s;
        }
        .gu-search-close:hover { color: #e8871a; }

        /* ─── MOBILE DRAWER ──────────────────────────────────── */
        .gu-mob-drawer {
          position: fixed;
          top: 142px; left: 0; right: 0; bottom: 0;
          background: #FAF7F2;
          z-index: 999; overflow-y: auto;
          padding: 16px 20px 32px;
          animation: gu-drop .2s ease;
        }
        .gu-mob-row { border-bottom: 1px solid #EAE5DA; }
        .gu-mob-btn {
          width: 100%; background: none; border: none;
          display: flex; justify-content: space-between; align-items: center;
          color: #333333; font-size: 13px; font-weight: 700; letter-spacing: .6px;
          padding: 13px 4px; cursor: pointer; text-transform: uppercase;
          transition: color .2s; text-align: left;
        }
        .gu-mob-btn:hover { color: #e8871a; }
        .gu-mob-sub {
          display: flex; flex-direction: column; gap: 2px;
          padding: 8px 16px 12px; background: #EDE9DF;
          border-radius: 6px; margin-bottom: 6px;
        }
        .gu-mob-sub-link {
          color: #4A5568; text-decoration: none; font-size: 13px;
          padding: 7px 8px; border-radius: 4px;
          transition: background .15s, color .15s; display: block;
        }
        .gu-mob-sub-link:hover { background: rgba(232,135,26,.15); color: #e8871a; }
        .gu-mob-apply {
          display: block; background: #e8871a; color: #fff;
          text-align: center; padding: 13px; border-radius: 6px;
          font-weight: 700; font-size: 15px; text-decoration: none; margin-top: 18px;
        }

        /* ─── RESPONSIVE ─────────────────────────────────────── */
        @media (max-width: 1100px) {
          .gu-helpline { display: none; }
        }
        @media (max-width: 900px) {
          .gu-secbar { display: none; }
          .gu-mob-toggle { display: flex !important; }
          .gu-topbar-right { display: none; }
        }
        @media (min-width: 901px) {
          .gu-mob-toggle { display: none !important; }
          .gu-mob-drawer { display: none !important; }
        }
      `}</style>

      <header className="gu-root" onMouseLeave={() => setActiveDropdown(null)}>

        {/* ── TOP ANNOUNCEMENT BAR ── */}
        <div className="gu-topbar">
          <div className="gu-topbar-left">
            <div className="gu-ticker-nav">
              <button className="gu-ticker-btn" onClick={() => setAnnouncementIndex(p => (p - 1 + announcements.length) % announcements.length)} aria-label="Previous">‹</button>
              <button className="gu-ticker-btn" onClick={() => setAnnouncementIndex(p => (p + 1) % announcements.length)} aria-label="Next">›</button>
            </div>
            <span className="gu-ticker">{announcements[announcementIndex]}</span>
            <Link href="https://admissions.geetauniversity.edu.in/" target="_blank" rel="noreferrer" className="gu-apply-pill">APPLY NOW</Link>
          </div>
          <div className="gu-topbar-right">
            <Link href="https://wa.me/919812345678" target="_blank" rel="noreferrer" className="gu-topbar-ico">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp
            </Link>
            <div className="gu-vdivider" />
            <Link href="tel:01742639100" className="gu-topbar-ico">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.06 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" /></svg>
              Call Us
            </Link>
            <div className="gu-vdivider" />
            <div className="gu-socials">
              <Link href="https://www.facebook.com/geetauniversity" target="_blank" rel="noreferrer" title="Facebook">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </Link>
              <Link href="https://twitter.com/geetauniversity" target="_blank" rel="noreferrer" title="X">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </Link>
              <Link href="https://www.instagram.com/geetauniversity" target="_blank" rel="noreferrer" title="Instagram">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </Link>
              <Link href="https://www.linkedin.com/school/geetauniversity" target="_blank" rel="noreferrer" title="LinkedIn">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </Link>
              <Link href="https://www.youtube.com/@geetauniversity" target="_blank" rel="noreferrer" title="YouTube">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* ── LOGO / HELPLINE BAR ── */}
        <div className="gu-mainbar">
          <Link href="/" className="gu-logo">
            <div className="gu-logo-img">
              <Image src="/GU-Logo.webp" alt="Geeta University Logo" width={140} height={44} style={{ objectFit: "contain", width: "100%", height: "100%" }} priority />
            </div>
          </Link>

          {/* ── CENTRE QUICK-NAV ── */}
          {/* 
          <nav className="gu-main-quicknav" aria-label="Page sections">
            {["Overview", "Programs", "Faculty", "Highlights", "Certifications", "Placements", "Careers", "FAQ"].map((label) => (
              <button
                key={label}
                className="gu-qnav-btn"
                onClick={() => {
                  const id = label === "Careers" ? "CareerPathways" : label;
                  const el = document.getElementById(id);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  } else {
                    // Section not on current page — navigate to CSE program page with anchor
                    router.push(`/programs/school-of-computer-science-and-engineering#${id}`);
                  }
                }}
              >
                {label}
              </button>
            ))}
          </nav>
          */}

          <div className="gu-mainbar-right">
            <Link href="tel:01742639100" className="gu-helpline">
              <div className="gu-helpline-ico">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.06 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                </svg>
              </div>
              <div className="gu-helpline-info">
                <span className="gu-helpline-lbl">Admission Helpline</span>
                <span className="gu-helpline-num">092787 68000</span>
              </div>
              <div className="gu-helpline-lines" aria-hidden="true"><span /><span /><span /></div>
            </Link>

            <button className="gu-search-btn" onClick={() => setSearchOpen(true)} aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span>Search</span>
            </button>

            {/* Mobile hamburger */}
            <button className="gu-mob-toggle" onClick={() => setIsMobileMenuOpen(v => !v)} aria-label="Toggle menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                {isMobileMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
              </svg>
            </button>
          </div>
        </div>

        {/* ── SECONDARY NAV BAR ── */}
        <nav className="gu-secbar" aria-label="Main navigation">
          {secondaryNavLinks.map((link) => {
            if (link.href) {
              return (
                <div key={link.key} className="gu-sec-item">
                  <Link
                    href={link.href}
                    className="gu-sec-link"
                    onClick={(e) => {
                      if (typeof window !== "undefined" && window.location.pathname === link.href) {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                </div>
              );
            }

            const isOpen = activeDropdown === link.key;
            return (
              <div
                key={link.key}
                className="gu-sec-item"
                onMouseEnter={() => handleMouseEnter(link.key)}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`gu-sec-link${isOpen ? " open" : ""}`} aria-haspopup="true" aria-expanded={isOpen}>
                  {link.label}
                  <span className="gu-sec-chevron"><ChevronDown size={11} /></span>
                </button>

                {isOpen && (
                  <>
                    {/* Blur backdrop */}
                    <div className="gu-mega-backdrop" onMouseEnter={handleMouseLeave} />

                    {/* Compact mega panel */}
                    <div
                      className="gu-mega"
                      role="menu"
                      onMouseEnter={() => handleMouseEnter(link.key)}
                    >
                      {/* Columns */}
                      <div className="gu-mega-body">
                        {link.cols?.map((col) => (
                          <div key={col.heading} className="gu-mega-col">
                            <div className="gu-mega-col-heading">{col.heading}</div>
                            {col.links.map((item) => (
                              <Link key={item.label} href={item.href} className="gu-mega-link" role="menuitem">
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>

                      {/* Banner footer */}
                      {link.banner && (
                        <div className="gu-mega-banner">
                          <span className="gu-mega-banner-title">{link.banner.text}</span>
                          <div className="gu-mega-banner-items">
                            {link.banner.items.map((bi) => (
                              <Link key={bi.label} href={bi.href} className="gu-mega-banner-item">
                                <span className="gu-mega-banner-icon">{bi.icon}</span>
                                <span className="gu-mega-banner-lbl">{bi.label}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </nav>

        {/* ── MOBILE DRAWER ── */}
        {isMobileMenuOpen && (
          <div className="gu-mob-drawer">
            {secondaryNavLinks.map((link) => {
              if (link.href) {
                return (
                  <div key={link.key} className="gu-mob-row">
                    <Link
                      href={link.href}
                      className="gu-mob-btn"
                      style={{ textDecoration: "none", display: "block" }}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        if (typeof window !== "undefined" && window.location.pathname === link.href) {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      }}
                    >
                      <span>{link.label}</span>
                    </Link>
                  </div>
                );
              }

              const isExpanded = mobileExpanded === link.key;
              return (
                <div key={link.key} className="gu-mob-row">
                  <button className="gu-mob-btn" onClick={() => setMobileExpanded(isExpanded ? null : link.key)}>
                    <span>{link.label}</span>
                    <span>{isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}</span>
                  </button>
                  {isExpanded && (
                    <div className="gu-mob-sub">
                      {link.cols?.flatMap((col) => col.links).map((item) => (
                        <Link key={item.label} href={item.href} className="gu-mob-sub-link" onClick={() => setIsMobileMenuOpen(false)}>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link href="https://admissions.geetauniversity.edu.in/" target="_blank" rel="noreferrer" className="gu-mob-apply" onClick={() => setIsMobileMenuOpen(false)}>
              Apply Now
            </Link>
          </div>
        )}
      </header>

      {/* ── SEARCH OVERLAY ── */}
      {searchOpen && (
        <div className="gu-search-overlay" onClick={() => setSearchOpen(false)}>
          <div className="gu-search-box" onClick={(e) => e.stopPropagation()}>
            <button className="gu-search-close" onClick={() => setSearchOpen(false)} aria-label="Close search">
              <X size={18} />
            </button>
            <input ref={searchRef} type="text" placeholder="Search programs, schools, events…" />
          </div>
        </div>
      )}
    </>
  );
}
