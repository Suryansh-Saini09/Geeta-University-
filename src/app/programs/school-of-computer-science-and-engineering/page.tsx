"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useLenis } from "lenis/react";
import {
  ArrowRight,
  Award,
  Code2,
  Briefcase,
  Terminal,
  ExternalLink,
  BookOpen
} from "lucide-react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import LearningOutcomes from "@/components/sections/LearningOutcomes";

// ─── COLOR TOKENS (Geeta University Brand) ───────────────────────────────────
// Navy: #0A1F44   Gold/Orange: #E8871A   Light Gold: #F5A623
// Mid Blue: #1A3A6B   Steel: #2C5282   White: #FFFFFF
// Bg Light: #F7F9FC   Text Muted: #64748B
// ─────────────────────────────────────────────────────────────────────────────

interface Program {
  level: string;
  name: string;
  specializations: string[];
  duration: string;
  eligibility: string;
}

interface FacultyMember {
  name: string;
  role: string;
  desc: string;
}

interface Specialization {
  icon: string;
  title: string;
  desc: string;
}

interface Highlight {
  stat: string;
  label: string;
}

interface Testimonial {
  name: string;
  pkg: string;
  company: string;
  role: string;
  quote: string;
  image?: string;
}

interface FAQItem {
  q: string;
  a: string;
  category: string;
}


const PROGRAMS: Program[] = [
  { level: "B.Tech", name: "CSE", specializations: ["AI & Machine Learning", "Cyber Security", "Full Stack Web Dev", "Data Science & Analytics", "Quantum Computing", "NIAT Upskilling"], duration: "4 Years", eligibility: "10+2 with Phy + Math, 55%" },
  { level: "B.Tech", name: "Civil Engineering", specializations: ["General Civil", "AI & Digital Transformation"], duration: "4 Years", eligibility: "10+2 with Phy + Chem + Math, 45%" },
  { level: "BCA", name: "Computer Applications", specializations: ["Computer Applications", "AI & ML", "Cyber Security", "Data Science & Analytics"], duration: "3 / 4 Years", eligibility: "10+2 with 50%" },
  { level: "M.Tech", name: "CSE", specializations: ["Computer Science & Engineering"], duration: "2 Years", eligibility: "Bachelor's degree, 50%, Math preferred" },
  { level: "MCA", name: "Master of Computer Applications", specializations: ["Computer Applications"], duration: "2 Years", eligibility: "BCA / B.Sc CS / Graduation + Math, 50%" },
  { level: "Ph.D.", name: "CS & Engineering", specializations: ["Computer Science", "Computer Applications"], duration: "Min 3 Years", eligibility: "Relevant Master's, 55%" },
];

const FACULTY: FacultyMember[] = [
  { name: "Mr. Amit Jain", role: "Associate Dean", desc: "Building an innovation-led learning environment across the school." },
  { name: "Dr. Kapil Saini", role: "Head of Department", desc: "25+ Scopus/WoS publications and multiple patents in computing research." },
  { name: "Dr. Poonam", role: "Associate Professor", desc: "Experienced researcher contributing to academic curriculum design." },
  { name: "Vishal Jain", role: "Professor of Practice", desc: "IIT Kharagpur & IIM Ahmedabad alumnus. Founder Samatrix Consulting. AI/ML & Blockchain." },
  { name: "Kartik Mathur", role: "Professor of Practice", desc: "Founding member of Coding Blocks. Trained 40,000+ students. Full Stack & DSA." },
  { name: "Varun Kohli", role: "Professor of Practice", desc: "CEO, Coding Blocks. Expert in large-scale applications, startups, and EdTech." },
  { name: "Sunny Pathak", role: "Professor of Practice", desc: "Co-founder Samatrix. Analytics, brand positioning, market research & pricing." },
  { name: "Hemant Singh", role: "Assistant Professor", desc: "Teaching and mentoring students in core computing and software engineering." },
];

const SPECIALIZATIONS: Specialization[] = [
  { icon: "🤖", title: "AI & Machine Learning", desc: "Intelligent systems, data-driven decision-making, and modern AI/ML applications." },
  { icon: "🔒", title: "Cyber Security", desc: "Secure systems, cyber hygiene, and security-oriented technical foundations." },
  { icon: "📊", title: "Data Science & Analytics", desc: "Data analysis connected with business insight and industry-linked skill development with HCL." },
  { icon: "🌐", title: "Full Stack Development", desc: "End-to-end web application development through hands-on MEAN/MERN stack learning." },
  { icon: "⚛", title: "Quantum Computing", desc: "Exposure to frontier computing and future-oriented technology at the cutting edge." },
  { icon: "☁", title: "Cloud Computing", desc: "Cloud labs, certification tracks with AWS, Azure, Red Hat Academy and more." },
];

const CERTIFICATIONS = [
  "Amazon AWS", "Microsoft Azure", "Oracle", "Cisco",
  "Red Hat Academy", "EC-Council Academia", "GitHub",
  "HubSpot", "VMware", "CompTIA", "SAP", "Coursera",
  "edX", "Autodesk",
];

const HIGHLIGHTS: Highlight[] = [
  { stat: "500+", label: "Internships Secured" },
  { stat: "3000+", label: "Global Certifications" },
  { stat: "350+", label: "Projects Delivered" },
  { stat: "25+", label: "Hackathons Conducted" },
];

const TESTIMONIALS: Testimonial[] = [
  { name: "Vaibhav Arora", pkg: "₹1.4 Cr PA", company: "Wabtec Corp", role: "Principal Solution Architect", quote: "Geeta University's 360-degree development approach, mentorship programs, and industry interactions helped me think like an entrepreneur rather than just a job seeker.", image: "/Vaibhav.webp" },
  { name: "Vikas Bareja", pkg: "₹33–34 LPA", company: "Tech Mahindra", role: "B.Tech CSE Alumni", quote: "The rigorous training and mentorship I received empowered me with both the technical expertise and leadership qualities I needed to succeed at a global firm.", image: "/Vikas.webp" },
  { name: "Shantanu Ojha", pkg: "₹30 LPA", company: "Ernst & Young", role: "B.Tech CSE Alumni", quote: "The campus support and mentorship gave me the foundation I needed to build a strong career from the ground up.", image: "/shantanu.webp" },
  { name: "Prikshit", pkg: "₹30 LPA", company: "Thales", role: "B.Tech CSE Alumni", quote: "My time at the university helped me bridge the gap between theory-based and practical learning — something that made a real difference when I entered the industry.", image: "/prikshit.png" },
  { name: "Saransh", pkg: "₹30 LPA", company: "PayU Payments", role: "B.Tech CSE Alumni", quote: "The campus environment pushed me to grow as an individual, developed my determination, and made me genuinely ready for the real world.", image: "/saransh.png" },
  { name: "Monty", pkg: "₹24 LPA", company: "Hike Edu", role: "B.Tech CSE Alumni", quote: "The industry-focused learning culture built my confidence and gave me the perseverance to push through and achieve what I set out to do.", image: "/monty.webp" },
];

const FAQS: FAQItem[] = [
  {
    q: "Are the placement stories on this page specific to SCSE students?",
    a: "Placement stories featured in this section include SCSE students and alumni. Some university-wide placement statistics reflect broader institutional data. School-specific success stories are labelled separately.",
    category: "Placements & Careers"
  },
  {
    q: "Does SCSE focus only on theory, or is there practical skill development too?",
    a: "SCSE has a strong practical orientation. Students engage with projects, internships, hackathons, coding tracks, certification programs, professors of practice, and the Geeta Technical Hub — all designed to build applied, job-ready skills alongside academic knowledge.",
    category: "Curriculum & Learning"
  },
  {
    q: "Are there opportunities to learn emerging technologies beyond the core syllabus?",
    a: "Yes. Official specialisations and training tracks cover AI, Machine Learning, Cybersecurity, Data Science, Cloud Computing, Full Stack Development, and Quantum Computing — giving students exposure to in-demand, future-facing areas.",
    category: "Specializations & Technology"
  },
  {
    q: "What kinds of industry-linked learning opportunities are available?",
    a: "Students have access to certifications, bootcamps, domain trainers, tool-integrated learning, a competitive coding ecosystem, and training partnerships with organizations such as AWS, Cisco, Oracle, Microsoft Azure, GitHub, and Red Hat Academy, among others.",
    category: "Curriculum & Learning"
  },
  {
    q: "Is there mentorship beyond regular faculty teaching?",
    a: "Yes. SCSE offers a multi-layered mentorship model including academic faculty, professors of practice from industry, technical hub trainers, and leadership support from the Associate Dean and Head of Department.",
    category: "Curriculum & Learning"
  },
  {
    q: "Can students from non-engineering backgrounds apply to postgraduate programs?",
    a: "For M.Tech CSE and MCA, eligibility includes different graduation backgrounds, with mathematics-related conditions where applicable. Students are encouraged to review program-specific eligibility requirements or speak with the admissions team.",
    category: "Admissions & Eligibility"
  },
  {
    q: "How should the \"International Partners\" section be understood?",
    a: "These are learning, certification, and training ecosystem partners whose platforms and programs feature in student skill development. They represent technology and certification associations, not exchange or dual-degree partnerships unless separately verified.",
    category: "General"
  },
  {
    q: "What makes SCSE distinct in the private university landscape?",
    a: "SCSE's positioning is built on future-ready domains, applied learning, mentorship, certifications, a strong coding culture, and dedicated placement support — working together as an integrated ecosystem rather than standalone features.",
    category: "General"
  },
  {
    q: "Which categories are considered \"reserved category\" for eligibility purposes?",
    a: "Only SC and ST categories are considered under the reserved category mentioned in eligibility criteria.",
    category: "Admissions & Eligibility"
  },
  {
    q: "Is the 40% eligibility criteria applicable to all Computer Science programs?",
    a: "No. The 40% marks eligibility is applicable only to B.Tech Civil Engineering. All Computer Science programs follow their own stated eligibility requirements.",
    category: "Admissions & Eligibility"
  },
  {
    q: "Can students from non-medical, medical, or commerce backgrounds apply for CSE programs?",
    a: "It depends on the program. B.Tech CSE requires Physics and Mathematics at 10+2 level, plus one additional subject from a listed group that includes Chemistry, Computer Science, Electronics, IT, Biology, Biotechnology, Agriculture, Engineering Graphics, Business Studies, and Entrepreneurship — so it is not limited to one school stream, but does require the specific subject combination. BCA is more open, requiring 10+2 with 50% marks regardless of stream. Postgraduate programs widen eligibility further, subject to graduation and mathematics conditions.",
    category: "Admissions & Eligibility"
  },
  {
    q: "Is Mathematics compulsory for all Computer Science programs?",
    a: "Not uniformly. For B.Tech CSE, Mathematics is compulsory at 10+2 level. For MCA and M.Tech CSE, Mathematics is important and non-mathematics students may be considered subject to completing a compulsory mathematics course as per university norms. For BCA, Mathematics is not compulsory in the same way.",
    category: "Admissions & Eligibility"
  },
  {
    q: "What is the difference between B.Tech CSE and BCA?",
    a: "B.Tech CSE is an engineering degree with deeper computer science foundations, core technical study, and specializations such as AI & ML, Cyber Security, Data Science & Business Analytics, Full Stack Web Development, and Quantum Computing. It requires Physics and Mathematics at 10+2 level. BCA is a computer applications degree with an application-oriented structure, available to students from varied academic backgrounds, and does not carry the same engineering entry requirement.",
    category: "Admissions & Eligibility"
  },
  {
    q: "How should a student choose between AI & ML, Data Science, Cyber Security, and Full Stack Development?",
    a: "The choice depends on the kind of problems you want to solve. If you enjoy logic, automation, and intelligent systems — choose AI & ML. If you like patterns, analysis, and business insight — choose Data Science. If you are interested in digital defense and systems security — choose Cyber Security. If you want to build websites and software products end to end — choose Full Stack Development.",
    category: "Specializations & Technology"
  },
  {
    q: "Will the specialization appear separately on the final degree?",
    a: "No. The degree will remain titled \"B.Tech CSE\" regardless of specialization.",
    category: "Curriculum & Learning"
  },
  {
    q: "Can students change their specialization after admission?",
    a: "Any specialization change would be subject to seat availability, academic performance, and university rules at the time of the request. Students should confirm the process directly with the department.",
    category: "Curriculum & Learning"
  },
  {
    q: "Are the industry certifications included in the course fee or charged separately?",
    a: "Certification coverage can vary by course, track, platform, or training model. Students should confirm the exact fee structure during counseling before admission.",
    category: "Admissions & Eligibility"
  },
  {
    q: "Are internships mandatory or optional?",
    a: "Internship support is actively embedded in the school's ecosystem, with 500+ internships secured by students. Whether internships are mandatory or optional depends on the exact program structure — students should confirm this with the department.",
    category: "Placements & Careers"
  },
  {
    q: "Does the university help students find internships?",
    a: "Yes. The university supports students through placement assistance, mentorship, training, and recruitment drives. Students benefit from an ecosystem designed to connect them with opportunities, though individual initiative and performance also play a role in final selection.",
    category: "Placements & Careers"
  },
  {
    q: "Are placements available equally across all CSE specializations?",
    a: "Geeta University provides placement assistance across SCSE through training, internships, and recruitment drives, with 100+ companies visiting in 2024–25. Final placement outcomes depend on individual skills, performance, recruiter demand, and chosen career path.",
    category: "Placements & Careers"
  },
  {
    q: "What roles do students typically get after completing different CSE specializations?",
    a: "AI & ML graduates typically move toward intelligent systems and automation roles; Data Science graduates toward analytics and data-oriented roles; Cyber Security graduates toward security-focused technical roles; and Full Stack Development graduates toward software and web development roles. The school presents a broad career map to guide students rather than guaranteeing specific outcomes.",
    category: "Placements & Careers"
  },
  {
    q: "Is prior coding experience required before joining?",
    a: "No advanced coding background is required. SCSE is designed to build skills through structured practice, DSA training, coding platforms, and project exposure. What matters most is interest, consistency, and a willingness to learn step by step.",
    category: "Curriculum & Learning"
  },
  {
    q: "Does the curriculum lean more toward theory or practical learning?",
    a: "The curriculum is designed as a blend of conceptual learning and applied, employability-focused training — with a clear emphasis on practical outcomes through projects, hackathons, internships, certification tracks, and technical hub support.",
    category: "Curriculum & Learning"
  },
  {
    q: "Are laptops compulsory for Computer Science students?",
    a: "A laptop is highly useful and often expected for coding, projects, and certification-based learning. Students should confirm the exact requirement with the department or admissions office during counseling.",
    category: "Student Facilities"
  },
  {
    q: "Is hostel accommodation available for students from other states?",
    a: "Yes. Hostel accommodation is available as part of the university's student facilities. Out-of-state students can inquire about room types, charges, and availability during the admissions process.",
    category: "Student Facilities"
  },
  {
    q: "How are students prepared for placements and technical interviews?",
    a: "Placement preparation is built into the learning ecosystem from the beginning — through industry collaborations, placement support, internships, technical hub training, certification tracks, DSA and competitive coding, and role-oriented learning pathways. It is not limited to a final-semester activity.",
    category: "Placements & Careers"
  },
  {
    q: "Are scholarships applicable to all CSE specializations?",
    a: "Scholarships are generally applicable to eligible programs including B.Tech-related pathways, subject to eligibility, merit, entrance tests, and related criteria. The exact amount and criteria depend on the student's admission route and score profile.",
    category: "Admissions & Eligibility"
  },
  {
    q: "Will additional support be provided if a student is weak in coding initially?",
    a: "Yes. Students who are initially weak in coding are supported through the school's structured learning environment, which includes foundational skill-building, mentorship, and practice-based progression. No student need hesitate on account of a weaker starting point.",
    category: "Curriculum & Learning"
  },
  {
    q: "Which specialization has better future scope — AI & ML, Cyber Security, or Data Science?",
    a: "All three have strong and growing demand. The best choice depends on your interests and strengths: AI & ML suits automation and intelligent systems; Cyber Security suits digital protection and defense; Data Science suits analytics and decision support. Future scope ultimately depends on skill development, market conditions at graduation, and individual career direction.",
    category: "Specializations & Technology"
  },
  {
    q: "Are live projects and hackathons compulsory parts of the curriculum?",
    a: "Live projects and hackathons are strongly encouraged and embedded in the school's culture. Whether they carry a compulsory status should be confirmed program-wise with the department.",
    category: "Curriculum & Learning"
  },
  {
    q: "Will students get opportunities to work on real industry projects?",
    a: "Yes. Through projects, internships, certification-aligned learning, expert lectures, technical training, and strong industry collaboration, the school actively provides students with opportunities to engage with real-world problems and applications.",
    category: "Curriculum & Learning"
  }
];

// ─── TOP RECRUITERS MARQUEE ───────────────────────────────────────────────────

// Real brand logos from public CDN (Wikimedia / Simple Icons)
const BRAND_DATA: Record<string, { src: string; width: number; height: number; label: string }> = {
  "Cincooni Systems": {
    src: "/cincooni.svg",
    width: 140, height: 44, label: "Cincooni Systems",
  },
  "Kerakoll India": {
    src: "/kerakoll.svg",
    width: 110, height: 32, label: "Kerakoll India",
  },
  "Tenhard India": {
    src: "/tenhard_india.svg",
    width: 140, height: 44, label: "Tenhard India",
  },
  "Edu-Versity": {
    src: "/edu_versity.svg",
    width: 150, height: 44, label: "Edu-Versity",
  },
  "Academor Edutech": {
    src: "/academor.svg",
    width: 140, height: 44, label: "Academor Edutech",
  },
  "Hoping Minds": {
    src: "/hoping_minds.png",
    width: 110, height: 32, label: "Hoping Minds",
  },
  "Chegg India": {
    src: "/chegg.svg",
    width: 90, height: 34, label: "Chegg India",
  },
  "Profunnel Technology": {
    src: "/profunnel.svg",
    width: 100, height: 32, label: "Profunnel Technology",
  },
  "Hike Education": {
    src: "/hike_education.png",
    width: 110, height: 36, label: "Hike Education",
  },
  "Centricity Wealth Tech": {
    src: "/centricity.svg",
    width: 120, height: 32, label: "Centricity Wealth Tech",
  },
  "PayU Payments": {
    src: "/payu.svg",
    width: 80, height: 32, label: "PayU Payments",
  },
  "Thales": {
    src: "/thales.svg",
    width: 100, height: 32, label: "Thales",
  },
  "Amazon AWS": {
    src: "/aws.svg",
    width: 80, height: 42, label: "Amazon AWS",
  },
  "Red Hat": {
    src: "/redhat.svg",
    width: 100, height: 32, label: "Red Hat",
  },
  "Cisco": {
    src: "/cisco.svg",
    width: 90, height: 40, label: "Cisco",
  },
  "Oracle": {
    src: "/oracle.svg",
    width: 100, height: 30, label: "Oracle",
  },
  "Microsoft Azure": {
    src: "/azure.svg",
    width: 44, height: 44, label: "Microsoft Azure",
  },
  "GitHub": {
    src: "/github.svg",
    width: 44, height: 44, label: "GitHub",
  },
  "HubSpot": {
    src: "/hubspot.svg",
    width: 100, height: 32, label: "HubSpot",
  },
  "EC-Council": {
    src: "/eccouncil.png",
    width: 90, height: 40, label: "EC-Council",
  },
  "VMware": {
    src: "/vmware.svg",
    width: 120, height: 28, label: "VMware",
  },
  "CompTIA": {
    src: "/comptia.svg",
    width: 110, height: 32, label: "CompTIA",
  },
  "SAP": {
    src: "/sap.svg",
    width: 90, height: 44, label: "SAP",
  },
  "Coursera": {
    src: "/coursera.svg",
    width: 140, height: 30, label: "Coursera",
  },
  "edX": {
    src: "/edx.svg",
    width: 80, height: 40, label: "edX",
  },
  "Autodesk": {
    src: "/autodesk.svg",
    width: 140, height: 30, label: "Autodesk",
  },
};

const BRAND_KEYS_ROW1 = [
  "Cincooni Systems",
  "Kerakoll India",
  "Chegg India",
  "PayU Payments",
  "Amazon AWS",
  "Cisco",
  "Microsoft Azure",
  "HubSpot",
  "Tenhard India",
  "Edu-Versity",
];

const BRAND_KEYS_ROW2 = [
  "Academor Edutech",
  "Hoping Minds",
  "Profunnel Technology",
  "Centricity Wealth Tech",
  "Thales",
  "Red Hat",
  "Oracle",
  "GitHub",
  "EC-Council",
];

function RecruiterCard({ name }: { name: string }) {
  const brand = BRAND_DATA[name];
  return (
    <div
      style={{
        display: "inline-flex",
        flexShrink: 0,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        width: 220,
        height: 110,
        margin: "0 12px",
        padding: "0 28px",
        borderRadius: 16,
        background: "#FFFFFF",
        boxShadow: "0 4px 20px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)",
        border: "1px solid rgba(0,0,0,0.04)",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px) scale(1.03)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.08)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.transform = "none";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)";
      }}
    >
      {brand ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={brand.src}
          alt={brand.label}
          width={brand.width}
          height={brand.height}
          style={{ objectFit: "contain", maxWidth: "100%", maxHeight: 56 }}
          onError={e => {
            // Fallback to text if image fails
            const t = e.currentTarget.parentElement;
            if (t) {
              e.currentTarget.style.display = "none";
              const span = document.createElement("span");
              span.textContent = name;
              span.style.cssText = "font-size:14px;font-weight:700;color:#1A1A2E;text-align:center;";
              t.appendChild(span);
            }
          }}
        />
      ) : (
        <span style={{ fontSize: 14, fontWeight: 700, color: "#1A1A2E", textAlign: "center" }}>{name}</span>
      )}
    </div>
  );
}

function TopRecruiters() {
  return (
    <section
      id="TopRecruiters"
      style={{
        background: "linear-gradient(135deg, #C94210 0%, #D94E1A 35%, #E8771A 70%, #D4500F 100%)",
        padding: "80px 0 76px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <style>{`
        @keyframes marqueeLoop {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeLoopRev {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .rec-marquee:hover { animation-play-state: paused !important; }
        @keyframes recFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Subtle noise overlay */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
        backgroundSize: "200px 200px", opacity: 0.5, mixBlendMode: "overlay",
      }} />
      {/* Light radial highlight top-left */}
      <div style={{ position: "absolute", top: -120, left: "5%", width: 480, height: 480, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 52, padding: "0 24px",
        position: "relative", zIndex: 1, animation: "recFadeUp 0.6s ease both" }}>
       
        <h2 style={{ margin: "0 0 10px", fontSize: 36, fontWeight: 800, color: "#FFFFFF",
          lineHeight: 1.1, letterSpacing: "-0.5px", textShadow: "0 2px 12px rgba(0,0,0,0.2)" }}>
          100+ Companies. Endless Possibilities.
        </h2>
  
      </div>

      {/* Row 1 — scrolls left */}
      <div style={{ position: "relative", overflow: "hidden", paddingBottom: 8, zIndex: 1 }}>
        <div style={{ position: "absolute", inset: 0, width: 180, zIndex: 2, pointerEvents: "none",
          background: "linear-gradient(90deg, #D94E1A 0%, transparent 100%)" }} />
        <div style={{ position: "absolute", inset: 0, left: "auto", right: 0, width: 180, zIndex: 2, pointerEvents: "none",
          background: "linear-gradient(-90deg, #D94E1A 0%, transparent 100%)" }} />
        <div className="rec-marquee" style={{ display: "flex", width: "max-content",
          padding: "10px 0", animation: "marqueeLoop 30s linear infinite" }}>
          {[...BRAND_KEYS_ROW1, ...BRAND_KEYS_ROW1].map((name, i) => (
            <RecruiterCard key={`r1-${name}-${i}`} name={name} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div style={{ position: "relative", overflow: "hidden", marginTop: 16, zIndex: 1 }}>
        <div style={{ position: "absolute", inset: 0, width: 180, zIndex: 2, pointerEvents: "none",
          background: "linear-gradient(90deg, #D94E1A 0%, transparent 100%)" }} />
        <div style={{ position: "absolute", inset: 0, left: "auto", right: 0, width: 180, zIndex: 2, pointerEvents: "none",
          background: "linear-gradient(-90deg, #D94E1A 0%, transparent 100%)" }} />
        <div className="rec-marquee" style={{ display: "flex", width: "max-content",
          padding: "10px 0", animation: "marqueeLoopRev 36s linear infinite" }}>
          {[...BRAND_KEYS_ROW2, ...BRAND_KEYS_ROW2].map((name, i) => (
            <RecruiterCard key={`r2-${name}-${i}`} name={name} />
          ))}
        </div>
      </div>

      {/* Badge */}
      <div style={{ textAlign: "center", marginTop: 48, position: "relative", zIndex: 1,
        animation: "recFadeUp 0.8s 0.1s ease both" }}>
        <span style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          background: "rgba(255,255,255,0.18)",
          border: "1px solid rgba(255,255,255,0.35)",
          backdropFilter: "blur(8px)",
          borderRadius: 32, padding: "10px 28px",
          color: "#FFFFFF", fontWeight: 700, fontSize: 13, letterSpacing: 0.4,
          textShadow: "0 1px 4px rgba(0,0,0,0.15)",
        }}>
          🏆 &nbsp;100+ Corporate Recruiters
        </span>
      </div>
    </section>
  );
}


interface HeroSlide {
  studentName: string;
  pkg: string;
  company: string;
  program: string;
  image: string;
  titleThin: string;
  titleBoldLine1: string;
  titleBoldLine2: string;
  subtitle: string;
  description: string;
  bgImage: string;
  cta: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    studentName: "Saransh",
    pkg: "30 Lakh PA",
    company: "Wabtec Corp",
    program: "B.Tech CSE Alumni",
    image: "/saransh.png",
    titleThin: "Shape the Future of",
    titleBoldLine1: "Computing",
    titleBoldLine2: "at Geeta University",
    subtitle: "POWERING EDUCATION, EMPOWERING MINDS",
    description: "Geeta University's School of Computer Science & Engineering integrates intensive coding bootcamps, hands-on hackathons and placement mentoring.",
    bgImage: "/hero-full.webp",
    cta: "Apply Today",
  },
  {
    studentName: "Prikshit",
    pkg: "30 Lakhs PA",
    company: "Microsoft India",
    program: "B.Tech CSE Alumni",
    image: "/prikshit.png",
    titleThin: "Earn Global",
    titleBoldLine1: "Certifications",
    titleBoldLine2: "AWS, Azure & Cisco",
    subtitle: "Excellence & Industry Links",
    description: "Earn credentials from AWS, Microsoft Azure, Cisco, Oracle, and Red Hat. Step out ready to contribute from day one in the digital economy.",
    bgImage: "/hero-full.webp",
    cta: "Apply Online",
  },
];

function AdmissionFormWrapper() {
  const [mounted, setMounted] = useState(false);

  // Step 1: mount the widget div into the DOM
  useEffect(() => {
    setMounted(true);
  }, []);

  // Step 2: only inject scripts AFTER the npf_wgts div is actually rendered
  useEffect(() => {
    if (!mounted) return;

    // Set global NPF tracking variables
    (window as any).npf_d = 'https://admissions.geetauniversity.edu.in';
    (window as any).npf_c = '6438';
    (window as any).npf_m = '1';

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
      document.body.removeChild(script);
      document.body.removeChild(trackScript);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div 
      className="backdrop-blur-xl rounded-2xl shadow-[0_24px_50px_rgba(0,0,0,0.35)] overflow-hidden w-full transition-all duration-300"
      style={{
        background: "#eff3f7",
        borderRadius: "20px",
        padding: "20px 15px",
        minHeight: "530px"
      }}
    >
      <div 
        className="npf_wgts" 
        data-height="530px" 
        data-w="cc53b914cae1d736d235f9adb19f5426"
        style={{ width: "100%", margin: "0" }}
      />
    </div>
  );
}

function getCompanyLogo(company: string) {
  const c = company.toLowerCase();
  if (c.includes("wabtec")) {
    return (
      <svg className="w-10 h-10 text-white" viewBox="0 0 100 100" fill="currentColor">
        <path d="M15 25 L32 75 L50 40 L68 75 L85 25 L73 25 L60 60 L50 35 L40 60 L27 25 Z" />
      </svg>
    );
  }
  if (c.includes("microsoft")) {
    return (
      <svg className="w-9 h-9" viewBox="0 0 23 23">
        <rect x="0" y="0" width="10.5" height="10.5" fill="#f25022" />
        <rect x="11.5" y="0" width="10.5" height="10.5" fill="#7fba00" />
        <rect x="0" y="11.5" width="10.5" height="10.5" fill="#00a4ef" />
        <rect x="11.5" y="11.5" width="10.5" height="10.5" fill="#ffb900" />
      </svg>
    );
  }
  if (c.includes("ernst") || c.includes("ey")) {
    return (
      <svg className="w-10 h-10" viewBox="0 0 100 100">
        <polygon points="10,75 90,75 90,60" fill="#FFE600" />
        <text x="20" y="55" fontSize="36" fontWeight="900" fill="white" fontFamily="system-ui, sans-serif">EY</text>
      </svg>
    );
  }
  return (
    <svg className="w-8 h-8 text-[#E8871A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.196-.612 1.063-.612 1.259 0l2.368 7.378a.75.75 0 00.706.529h7.771c.643 0 .909.822.4 1.229l-6.287 4.858a.75.75 0 00-.272.838l2.368 7.382c.196.612-.516 1.13-.984.776l-6.286-4.857a.75.75 0 00-.895 0l-6.286 4.857c-.468.354-1.18-.163-.984-.776l2.368-7.382a.75.75 0 00-.272-.838L1.109 13.136c-.509-.407-.243-1.229.4-1.229h7.771a.75.75 0 00.706-.529l2.368-7.379z" />
    </svg>
  );
}

const BrandLogo = ({ title, subtitleLine1, subtitleLine2, subtitleLine3 }: { title: string, subtitleLine1: string, subtitleLine2?: string, subtitleLine3?: string }) => (
  <div style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
    <div style={{ background: "#F1B434", color: "white", padding: "10px 14px", fontWeight: 900, fontSize: 36, letterSpacing: -1, lineHeight: 1 }}>
      {title}
    </div>
    <div style={{ color: "#000", fontWeight: 800, fontSize: 13, lineHeight: 1.2, letterSpacing: 0.5, display: "flex", flexDirection: "column" }}>
      <span>{subtitleLine1}</span>
      {subtitleLine2 && <span>{subtitleLine2}</span>}
      {subtitleLine3 && <span style={{ fontFamily: "cursive", fontSize: 18, fontWeight: 400, marginTop: 2, color: "#333", letterSpacing: 0 }}>{subtitleLine3}</span>}
    </div>
  </div>
);

const RANKINGS_DATA = [
  {
    logo: <BrandLogo title="UGC" subtitleLine1="UNIVERSITY" subtitleLine2="GRANTS COMMISSION" subtitleLine3="approved" />,
    rankLabel: "Status",
    rankValue: "Approved",
    desc: "UGC-Approved University",
    highlight: "(Government Recognized)"
  },
  {
    logo: <BrandLogo title="CSR" subtitleLine1="COMPETITION" subtitleLine2="SUCCESS REVIEW" subtitleLine3="by ranking" />,
    rankLabel: "Ranked",
    rankValue: "#6",
    desc: "Ranked 6th Among Top Universities of India — Competition Success Review",
    highlight: "(Top University)"
  },
  {
    logo: <BrandLogo title="C360" subtitleLine1="CAREER 360" subtitleLine2="ACADEMIC RATING" subtitleLine3="premium" />,
    rankLabel: "Rating",
    rankValue: "AAA",
    desc: "AAA Rating — Career360",
    highlight: "(Overall Excellence)"
  }
];

function RankingsAndAccreditations() {
  return (
    <section
      id="Rankings"
      style={{
        background: "#FDF1D6",
        padding: "80px 0 100px",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        
        <div style={{ textAlign: "center", marginBottom: 70 }}>
          <h2 style={{ fontSize: 46, color: "#000", lineHeight: 1.2, letterSpacing: "-1px", marginBottom: 20 }}>
            <span style={{ fontWeight: 800 }}>Trusted. Recognised. Ranked.</span>
          </h2>
          <p style={{ fontSize: 18, color: "#333333", maxWidth: 800, margin: "0 auto", lineHeight: 1.6, fontWeight: 500 }}>
            Geeta University's academic quality and institutional standing are reflected across multiple independent assessments:
          </p>
        </div>

        <div>
          {RANKINGS_DATA.map((item, idx) => (
            <div key={idx} style={{ 
              display: "flex", 
              alignItems: "center", 
              borderBottom: idx === RANKINGS_DATA.length - 1 ? "none" : "1px solid rgba(0,0,0,0.8)", 
              padding: "40px 0",
              gap: 40
            }}
            className="ranking-row"
            >
              <div style={{ flex: "0 0 260px" }}>
                {item.logo}
              </div>

              <div style={{ flex: "0 0 180px" }}>
                <div style={{ fontWeight: 800, fontSize: 14, color: "#000" }}>{item.rankLabel}</div>
                <div style={{ fontWeight: 900, fontSize: 48, color: "#000", lineHeight: 1, marginTop: 4, letterSpacing: -1.5 }}>
                  {item.rankValue}
                </div>
              </div>

              <div style={{ flex: "1", paddingRight: 32 }}>
                <div style={{ fontSize: 15, color: "#111", lineHeight: 1.5, fontWeight: 500 }}>
                  {item.desc}
                </div>
                <div style={{ fontSize: 14, color: "#E31E24", fontWeight: 800, marginTop: 6 }}>
                  {item.highlight}
                </div>
              </div>

              <div style={{ opacity: 0.6 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
      <style>{`
        @media (max-width: 768px) {
          .ranking-row {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 24px !important;
            padding: 32px 0 !important;
          }
          .ranking-row > div {
            flex: auto !important;
            padding-right: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}


function AboutSchoolSection() {
  const careers = [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Cyber Security",
    "Cloud Computing",
    "Full Stack Development",
    "Quantum Computing",
    "Software Engineering",
  ];

  return (
    <section id="About" style={{ padding: "100px 0", background: "#FFFFFF", color: "#000" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        {/* Header Block */}
        <div style={{ marginBottom: 64, maxWidth: 900 }}>
          <h2 style={{ fontSize: 48, fontWeight: 800, color: "#0A1F44", lineHeight: 1.15, letterSpacing: "-1px", marginBottom: 24 }}>
            A School Built for the<br/>
            <span style={{ color: "#E8871A" }}>Digital Age</span>
          </h2>
          <p style={{ fontSize: 17, color: "#4A5568", lineHeight: 1.75, fontWeight: 500 }}>
            The School of Computer Science &amp; Engineering at Geeta University is a future-focused academic school where students learn to work with contemporary technologies and industry-relevant tools. Through a blend of classroom knowledge, hands-on exposure, certifications, coding practice, projects, and placement support, SCSE prepares learners to become job-ready professionals in a fast-changing digital economy.
          </p>
        </div>

        {/* Career Cards */}
        <div>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#E8871A", letterSpacing: 2, textTransform: "uppercase", marginBottom: 20 }}>
            Students are prepared for careers in:
          </p>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
          }}>
            {careers.map((career) => (
              <div
                key={career}
                className="career-card"
                style={{
                  padding: "18px 28px",
                  borderRadius: 12,
                  border: "1.5px solid #E2E8F0",
                  background: "#F8FAFC",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#0A1F44",
                  cursor: "default",
                  transition: "all 0.25s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#E8871A",
                  flexShrink: 0,
                  display: "inline-block",
                }} />
                {career}
              </div>
            ))}
          </div>
        </div>

        {/* Closing line */}
        <p style={{ fontSize: 16, color: "#6B7280", lineHeight: 1.75, fontWeight: 400, marginTop: 32 }}>
          SCSE's learning environment combines strong academic foundations, real-world project experience, global certifications, expert mentorship, and dedicated placement support — ensuring graduates are ready to contribute from day one.
        </p>

      </div>
      <style>{`
        .career-card:hover {
          background: #fff7ed !important;
          border-color: #E8871A !important;
          color: #E8871A !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(232,135,26,0.12);
        }
        .career-card:hover span {
          background: #E8871A !important;
        }
      `}</style>
    </section>
  );
}


// ─── BROCHURE DOWNLOAD SECTION ────────────────────────────────────────────────

function BrochureDownloadSection() {
  return (
    <section id="Brochure" style={{ padding: "80px 0", background: "#0A1F44", position: "relative", overflow: "hidden" }}>
      {/* Background decoration */}
      <div style={{ position: "absolute", top: -80, right: -80, width: 320, height: 320, borderRadius: "50%", background: "rgba(232,135,26,0.08)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -60, left: -60, width: 240, height: 240, borderRadius: "50%", background: "rgba(232,135,26,0.05)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 40 }}>
          
          {/* Left: Text */}
          <div style={{ flex: 1, minWidth: 280 }}>
            <h2 style={{ fontSize: 40, fontWeight: 800, color: "#FFFFFF", lineHeight: 1.15, letterSpacing: "-0.5px", marginBottom: 16 }}>
            Want the Full Picture?
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.72)", lineHeight: 1.75, fontWeight: 400, maxWidth: 560 }}>
              Download the official School of Computer Science &amp; Engineering brochure for detailed information on programs, specialisations, placements, certifications, and student outcomes.
            </p>
          </div>

          {/* Right: Download Button */}
          <div style={{ flexShrink: 0 }}>
            <a
              href="/cse brochure.pdf"
              download="SCSE_Brochure.pdf"
              className="brochure-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "18px 36px",
                background: "#E8871A",
                color: "#FFFFFF",
                borderRadius: 12,
                fontWeight: 800,
                fontSize: 16,
                textDecoration: "none",
                transition: "all 0.25s ease",
                boxShadow: "0 8px 24px rgba(232,135,26,0.35)",
                letterSpacing: 0.3,
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download SCSE Brochure 
            </a>
          </div>

        </div>
      </div>
      <style>{`
        .brochure-btn:hover {
          background: #d4751a !important;
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(232,135,26,0.45) !important;
        }
      `}</style>
    </section>
  );
}


// ─── SPECIALISATIONS SECTION ─────────────────────────────────────────────────

const SPECIALISATIONS_DATA = [
  { name: "Artificial Intelligence & Machine Learning", desc: "Intelligent systems, data-driven decision-making, and practical exposure to modern AI/ML applications" },
  { name: "Cyber Security", desc: "Secure systems design, cyber hygiene, and security-oriented technical foundations" },
  { name: "Data Science & Business Analytics with HCL", desc: "Data analysis connected with business insight and industry-linked skill development" },
  { name: "Full Stack Web Development", desc: "End-to-end web application development through hands-on, stack-based learning" },
  { name: "Quantum Computing", desc: "Emerging frontier concepts in computing and future-oriented technology" },
  { name: "Computer Applications", desc: "Application-oriented computing foundations for software and digital tools" },
];

function SpecialisationsSection() {
  return (
    <section id="Specialisations" style={{ padding: "100px 0", background: "#F8FAFC", position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ color: "#E8871A", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase" }}>
            NEW-AGE SPECIALISATIONS
          </span>
          <h2 style={{ fontSize: 44, fontWeight: 900, color: "#0A1F44", margin: "12px 0 0", lineHeight: 1.1, letterSpacing: "-1px" }}>
            Master the Technologies That Define Tomorrow
          </h2>
        </div>

        <div style={{ width: "100%", overflowX: "auto", borderRadius: 16, boxShadow: "0 10px 30px rgba(10,31,68,0.07)", border: "1px solid #E2E8F0", background: "#FFFFFF" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", minWidth: 600 }}>
            <thead>
              <tr style={{ background: "#0A1F44", color: "#FFFFFF" }}>
                <th style={{ padding: "20px 28px", fontSize: 15, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1, width: "38%" }}>
                  Specialisation
                </th>
                <th style={{ padding: "20px 28px", fontSize: 15, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1 }}>
                  What You'll Learn
                </th>
              </tr>
            </thead>
            <tbody>
              {SPECIALISATIONS_DATA.map((spec, i) => (
                <tr
                  key={i}
                  className="spec-row"
                  style={{
                    borderBottom: i < SPECIALISATIONS_DATA.length - 1 ? "1px solid #E2E8F0" : "none",
                    background: i % 2 === 0 ? "#FFFFFF" : "#F8FAFC",
                    transition: "all 0.2s ease",
                  }}
                >
                  <td style={{ padding: "24px 28px", fontSize: 16, fontWeight: 800, color: "#0A1F44", verticalAlign: "top" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                      <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#E8871A", flexShrink: 0, display: "inline-block", marginTop: 2 }} />
                      {spec.name}
                    </span>
                  </td>
                  <td style={{ padding: "24px 28px", fontSize: 15, color: "#4A5568", lineHeight: 1.65, fontWeight: 500, verticalAlign: "top" }}>
                    {spec.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <style>{`
        .spec-row:hover {
          background-color: rgba(232, 135, 26, 0.04) !important;
        }
        .spec-row:hover td:first-child {
          color: #E8871A !important;
        }
      `}</style>
    </section>
  );
}

// ─── GEETA TECHNICAL HUB (GTH) CONSTANTS & COMPONENTS ────────────────────────

const GTH_PILLARS = [
  {
    title: "Certification Tracks",
    icon: Award,
    description: "Prepare for globally recognized industry credentials that validate your skills.",
    pills: [
      "AWS", "Oracle", "Cisco", "Red Hat Academy", 
      "Microsoft Azure", "EC-Council Academia", 
      "HubSpot", "GitHub", "Microsoft", "Automation Anywhere"
    ]
  },
  {
    title: "Coding Excellence",
    icon: Code2,
    description: "Hone logical thinking and competitive programming skills on leading platforms.",
    pills: [
      "Data Structures & Algorithms (DSA)", 
      "Competitive Programming", 
      "Logic Building", "Coding Platforms"
    ]
  },
  {
    title: "Industry Readiness",
    icon: Briefcase,
    description: "Develop T-shaped skills and holistic placement preparation for top employers.",
    pills: [
      "T-shaped learning", 
      "Multi-skill development", 
      "Placement preparation"
    ]
  }
];

const PLATFORMS_LIST = [
  { name: "GitHub", brandKey: "GitHub" },
  { name: "Visual Studio", brandKey: null },
  { name: "Docker", brandKey: null },
  { name: "AWS", brandKey: "Amazon AWS" },
  { name: "Oracle", brandKey: "Oracle" },
  { name: "Red Hat Academy", brandKey: "Red Hat" },
  { name: "Microsoft Azure", brandKey: "Microsoft Azure" },
  { name: "Cisco", brandKey: "Cisco" },
  { name: "SAP", brandKey: null },
  { name: "Coursera", brandKey: null },
  { name: "edX", brandKey: null },
  { name: "EC-Council Academia", brandKey: "EC-Council" },
  { name: "VMware", brandKey: null },
  { name: "CompTIA", brandKey: null },
  { name: "HubSpot", brandKey: "HubSpot" }
];

function PlatformCard({ name, brandKey }: { name: string; brandKey: string | null }) {
  const brand = brandKey ? BRAND_DATA[brandKey] : null;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 52,
        padding: "0 20px",
        borderRadius: 12,
        background: "rgba(255, 255, 255, 0.03)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(8px)",
        transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
        cursor: "default",
      }}
      className="gth-platform-card"
    >
      {brand ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={brand.src}
          alt={brand.label}
          style={{
            height: 24,
            width: "auto",
            maxWidth: 120,
            objectFit: "contain",
            opacity: 0.8,
            transition: "opacity 0.3s ease, filter 0.3s ease",
            filter: "brightness(0) invert(1)",
          }}
          className="gth-platform-img"
        />
      ) : (
        <span
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: "rgba(255, 255, 255, 0.8)",
            letterSpacing: "0.03em",
            whiteSpace: "nowrap",
          }}
        >
          {name}
        </span>
      )}
    </div>
  );
}

function GeetaTechnicalHubSection() {
  return (
    <section
      id="GeetaTechnicalHub"
      style={{
        background: "linear-gradient(180deg, #0A1F44 0%, #071530 100%)",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
        borderTop: "3px solid #E8871A",
      }}
    >
      {/* Decorative background glow elements */}
      <div style={{
        position: "absolute",
        top: "-10%",
        right: "-10%",
        width: "50%",
        height: "50%",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(232, 135, 26, 0.08) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0
      }} />
      <div style={{
        position: "absolute",
        bottom: "-10%",
        left: "-10%",
        width: "50%",
        height: "50%",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(23, 82, 130, 0.15) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          style={{ marginBottom: 60 }}
        >
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
            <div style={{ width: 32, height: 2, background: "#E8871A", borderRadius: 2 }} />
            <span style={{
              color: "#E8871A", fontWeight: 700, fontSize: 11,
              letterSpacing: "0.22em", textTransform: "uppercase",
            }}>
              CENTRE OF EXCELLENCE
            </span>
          </div>

          {/* Heading + Subheading + Description Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "flex-end" }}
            className="gth-header-grid">
            <div>
              <h2 style={{
                fontSize: 52, fontWeight: 950, color: "#FFFFFF",
                margin: 0, lineHeight: 1.1, letterSpacing: "-1.5px",
              }}>
                Geeta Technical <span style={{ color: "#E8871A" }}>Hub (GTH)</span>
              </h2>
              <p style={{
                fontSize: 20, fontWeight: 600, color: "rgba(255,255,255,0.85)",
                margin: "12px 0 0", lineHeight: 1.3
              }}>
                The Engine Behind SCSE's Technical Edge
              </p>
            </div>
            <p style={{
              color: "rgba(255,255,255,0.6)", fontSize: 16,
              lineHeight: 1.8, margin: 0, fontWeight: 400,
            }}>
              The Geeta Technical Hub (GTH) is SCSE's Centre of Excellence — a dedicated ecosystem that powers technical learning, certification, and placement readiness.
            </p>
          </div>
        </motion.div>

        {/* Pillars Grid */}
        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(3, 1fr)", 
            gap: 28,
            marginBottom: 72 
          }}
          className="gth-pillars-grid"
        >
          {GTH_PILLARS.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="gth-pillar-card"
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  borderRadius: 20,
                  padding: 32,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                  transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                {/* Icon Wrapper */}
                <div 
                  className="gth-icon-box"
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: "rgba(232, 135, 26, 0.1)",
                    border: "1px solid rgba(232, 135, 26, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 24,
                    transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                  }}
                >
                  <IconComponent style={{ width: 24, height: 24, color: "#E8871A" }} />
                </div>

                {/* Title */}
                <h3 style={{ fontSize: 22, fontWeight: 800, color: "#FFFFFF", marginBottom: 12, letterSpacing: "-0.5px" }}>
                  {pillar.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: 14, color: "rgba(255, 255, 255, 0.5)", lineHeight: 1.6, marginBottom: 28 }}>
                  {pillar.description}
                </p>

                {/* Pills Container */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: "auto" }}>
                  {pillar.pills.map((pill, pIndex) => (
                    <span 
                      key={pIndex} 
                      className="gth-pill"
                      style={{
                        padding: "6px 14px",
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        borderRadius: 100,
                        color: "rgba(255, 255, 255, 0.8)",
                        fontSize: 12,
                        fontWeight: 600,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6
                      }}
                    >
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#E8871A" }} />
                      {pill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Embedded CSS styles */}
      <style>{`
        @media (max-width: 960px) {
          .gth-header-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .gth-pillars-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
        .gth-pillar-card:hover {
          border-color: rgba(232, 135, 26, 0.4) !important;
          background: rgba(255, 255, 255, 0.04) !important;
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3) !important;
        }
        .gth-pillar-card:hover .gth-icon-box {
          transform: scale(1.1) rotate(5deg);
          border-color: rgba(232, 135, 26, 0.8) !important;
          background: rgba(232, 135, 26, 0.2) !important;
        }
        .gth-pill {
          transition: all 0.2s ease;
        }
        .gth-pill:hover {
          background: rgba(232, 135, 26, 0.15) !important;
          border-color: rgba(232, 135, 26, 0.5) !important;
          color: #FFFFFF !important;
        }
      `}</style>
    </section>
  );
}

// ─── INTERNATIONAL & INDUSTRY PARTNERS CONSTANTS & COMPONENTS ───────────────

const PARTNERS_LIST = [
  { name: "Cisco", brandKey: "Cisco" },
  { name: "Oracle", brandKey: "Oracle" },
  { name: "Amazon AWS", brandKey: "Amazon AWS" },
  { name: "Microsoft Azure", brandKey: "Microsoft Azure" },
  { name: "GitHub", brandKey: "GitHub" },
  { name: "Red Hat Academy", brandKey: "Red Hat" },
  { name: "EC-Council Academia", brandKey: "EC-Council" },
  { name: "VMware", brandKey: "VMware" },
  { name: "CompTIA", brandKey: "CompTIA" },
  { name: "HubSpot", brandKey: "HubSpot" },
  { name: "SAP", brandKey: "SAP" },
  { name: "Coursera", brandKey: "Coursera" },
  { name: "edX", brandKey: "edX" },
  { name: "Autodesk", brandKey: "Autodesk" }
];

function PartnerLogoCard({ name, brandKey }: { name: string; brandKey: string | null }) {
  const brand = brandKey ? BRAND_DATA[brandKey] : null;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 64,
        padding: "0 24px",
        borderRadius: 14,
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        boxShadow: "0 4px 12px rgba(10,31,68,0.03)",
        transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
        cursor: "default",
      }}
      className="gth-partner-card"
    >
      {brand ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={brand.src}
          alt={brand.label}
          style={{
            width: brand.width,
            height: brand.height,
            maxWidth: "150px",
            maxHeight: "55px",
            objectFit: "contain",
            opacity: 0.85,
            transition: "all 0.3s ease",
          }}
          className="gth-partner-img"
        />
      ) : (
        <span
          style={{
            fontSize: 14,
            fontWeight: 800,
            color: "#0A1F44",
            letterSpacing: "0.02em",
            whiteSpace: "nowrap",
          }}
        >
          {name}
        </span>
      )}
    </div>
  );
}

function InternationalPartnersSection() {
  return (
    <section
      id="InternationalPartners"
      style={{
        background: "#F8FAFC",
        padding: "90px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative radial glows */}
      <div style={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "70%",
        height: "100%",
        background: "radial-gradient(circle, rgba(232, 135, 26, 0.03) 0%, transparent 80%)",
        pointerEvents: "none",
        zIndex: 0
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 52 }}
        >
          {/* Eyebrow */}

          {/* Heading */}
          <h2 style={{
            fontSize: 44, fontWeight: 900, color: "#0A1F44",
            margin: "0 0 16px", lineHeight: 1.1, letterSpacing: "-1px"
          }}>
            International & Industry Partners
          </h2>

          <p style={{
            color: "#4A5568", fontSize: 16,
            lineHeight: 1.7, margin: "0 auto", fontWeight: 500,
            maxWidth: 800
          }}>
            Learning Powered by Global Ecosystems — SCSE's skill development and certification programs are supported by a robust ecosystem of globally recognized learning, certification, and training partners.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 18,
            marginBottom: 44
          }}
          className="partners-grid"
        >
          {PARTNERS_LIST.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <PartnerLogoCard name={partner.name} brandKey={partner.brandKey} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner info */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            background: "rgba(232, 135, 26, 0.06)",
            border: "1px solid rgba(232, 135, 26, 0.15)",
            borderRadius: 14,
            padding: "16px 24px",
            maxWidth: 720,
            margin: "0 auto"
          }}
        >
          <Award style={{ width: 20, height: 20, color: "#E8871A", flexShrink: 0 }} />
          <span style={{ fontSize: 14, color: "#2D3748", fontWeight: 600, lineHeight: 1.5, textAlign: "center" }}>
            These partnerships support student skill development through certifications, training programs, and platform-integrated learning.
          </span>
        </motion.div>

      </div>

      {/* Embedded CSS styles */}
      <style>{`
        @media (max-width: 960px) {
          .partners-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .partners-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        .gth-partner-card:hover {
          border-color: #E8871A !important;
          transform: translateY(-3px);
          box-shadow: 0 12px 24px rgba(10,31,68,0.08) !important;
        }
        .gth-partner-card:hover .gth-partner-img {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}

const MENTORS = [
  {
    name: "Dr. Shamneesh Sharma",
    role: "Associate Dean, School of Computer Science & Engineering",
    desc: "A highly experienced academic leader committed to building an innovation-led learning environment at SCSE.",
    img: "/faculty/CSE Brochure -100 COPY MAT LAMINATION.pdf-image-011.jpg"
  },
  {
    name: "Dr. Kapil Saini",
    role: "Head of Department",
    desc: "An accomplished academician and researcher with 25+ Scopus/WoS publications and multiple patents, bringing strong research and teaching leadership to the school.",
    img: "/faculty/CSE Brochure -100 COPY MAT LAMINATION.pdf-image-008.png"
  },
  {
    name: "Dr. Poonam",
    role: "Associate Professor",
    img: "/faculty/CSE Brochure -100 COPY MAT LAMINATION.pdf-image-010.jpg"
  },
  {
    name: "Pankaj Bajaj",
    role: "Chief Operating Officer, Geeta Technical Hub (GTH)",
    img: "/faculty/CSE Brochure -100 COPY MAT LAMINATION.pdf-image-033.png"
  },
  {
    name: "Rakhi Chauhan",
    role: "Assistant Professor (Ph.D. Pursuing)",
    img: "/faculty/CSE Brochure -100 COPY MAT LAMINATION.pdf-image-035.png"
  },
  {
    name: "Richa Jain",
    role: "Assistant Professor",
    img: "/faculty/CSE Brochure -100 COPY MAT LAMINATION.pdf-image-019.png"
  },
  {
    name: "Hemant Kumar",
    role: "Assistant Professor",
    img: "/faculty/CSE Brochure -100 COPY MAT LAMINATION.pdf-image-017.png"
  },
  {
    name: "Vishal Jain",
    role: "Professor of Practice",
    desc: "Founder, Samatrix Consulting; IIT Kharagpur & IIM Ahmedabad alumnus; specializes in Data Analytics, Machine Learning, Deep Learning, and Blockchain",
    img: "/faculty/CSE Brochure -100 COPY MAT LAMINATION.pdf-image-021.png"
  },
  {
    name: "Sunny Pathak",
    role: "Professor of Practice",
    desc: "Co-Founder, Samatrix Consulting; expertise in Market Research, Brand Positioning, Analytics, and Pricing",
    img: "/faculty/CSE Brochure -100 COPY MAT LAMINATION.pdf-image-028.png"
  },
  {
    name: "Jyoti",
    role: "Professor of Practice",
    img: "/faculty/CSE Brochure -100 COPY MAT LAMINATION.pdf-image-014.png"
  },
  {
    name: "Mohammad Aslam",
    role: "Technical Hub Trainer",
    img: "/faculty/CSE Brochure -100 COPY MAT LAMINATION.pdf-image-032.jpg"
  },
  {
    name: "Ronak Duggar",
    role: "Technical Hub Trainer",
    img: "/faculty/CSE Brochure -100 COPY MAT LAMINATION.pdf-image-013.jpg"
  },
  // {
  //   name: "Maninder Singh",
  //   role: "Technical Hub Trainer",
  //   img: "/dummy.png"
  // },
  {
    name: "Ram Mohan Dixit",
    role: "Technical Hub Trainer",
    img: "/faculty/CSE Brochure -100 COPY MAT LAMINATION.pdf-image-040.jpg"
  }
];

function MentorsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedMentor, setSelectedMentor] = useState<typeof MENTORS[0] | null>(null);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  const getMentorDesc = (m: typeof MENTORS[0]) => {
    if (m.desc) return m.desc;
    if (m.role.includes("Trainer")) {
      return "Technical hub trainer delivering hands-on instruction and industry upskilling in coding labs.";
    }
    return "Academic educator dedicated to student mentorship, research, and software engineering foundations.";
  };

  return (
    <section id="Mentors" style={{ padding: "80px 0", background: "#FFFFFF", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <h2 style={{ fontSize: 44, fontWeight: 800, color: "#0A1F44", lineHeight: 1.2, letterSpacing: "-1px" }}>
          Led by Experts, Guided by Industry.
        </h2>
        
        <div style={{ position: "relative", marginTop: 48 }}>
          <div 
            ref={scrollRef}
            className="hide-scroll"
            style={{ 
              display: "flex", 
              gap: 24, 
              overflowX: "auto", 
              paddingBottom: 32,
              scrollSnapType: "x mandatory",
              scrollBehavior: "smooth"
            }}
          >
            {MENTORS.map((m, i) => (
              <div 
                key={i} 
                style={{ 
                  scrollSnapAlign: "start",
                  flexShrink: 0,
                }}
              >
                <div 
                  className="mentor-card"
                  style={{
                    width: 280,
                    height: 500,
                    background: "#F3F4F6",
                    borderRadius: 16,
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    border: "1px solid rgba(0,0,0,0.05)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
                  }}
                >
                  <div style={{ width: "100%", height: 200, background: "#E5E7EB", position: "relative", flexShrink: 0 }}>
                    <img src={m.img} alt={m.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", mixBlendMode: "multiply", opacity: 0.8 }} />
                  </div>
                  
                  <div style={{ padding: "20px 20px 24px", textAlign: "center", display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ width: "100%" }}>
                      <h3 style={{ fontSize: 20, fontWeight: 800, color: "#0A1F44", margin: 0, minHeight: 52, display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1.2 }}>
                        {m.name}
                      </h3>
                      
                      <p style={{ fontSize: 14, color: "#E8871A", fontWeight: 700, margin: "6px 0 0", minHeight: 40, display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1.3 }}>
                        {m.role}
                      </p>

                      <p style={{ fontSize: 13, color: "#64748B", margin: "10px 0 0", lineHeight: 1.5, minHeight: 60, display: "flex", alignItems: "center", justifyContent: "center" }} className="line-clamp-3">
                        {getMentorDesc(m)}
                      </p>
                    </div>
                    
                    <div style={{ width: "100%" }}>
                      <div style={{ width: "100%", borderBottom: "1px dashed #CBD5E1", margin: "14px 0" }} />
                      
                      <button 
                        onClick={() => setSelectedMentor(m)}
                        className="read-more-btn"
                        style={{
                          background: "none",
                          border: "none",
                          color: "#64748B",
                          fontSize: 14,
                          fontWeight: 700,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          width: "100%",
                        }}
                      >
                        → Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={scrollLeft}
            style={{ position: "absolute", left: -24, top: "150px", background: "white", width: 48, height: 48, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #E2E8F0", cursor: "pointer", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", color: "#2563EB", zIndex: 10 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>

          <button 
            onClick={scrollRight}
            style={{ position: "absolute", right: -24, top: "150px", background: "white", width: 48, height: 48, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #E2E8F0", cursor: "pointer", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", color: "#2563EB", zIndex: 10 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedMentor && (
            <div 
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 24,
              }}
            >
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedMentor(null)}
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(10,31,68,0.5)",
                  backdropFilter: "blur(8px)",
                }}
              />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                style={{
                  position: "relative",
                  background: "#FFFFFF",
                  borderRadius: 24,
                  padding: "40px 32px 32px",
                  maxWidth: 480,
                  width: "100%",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
                  zIndex: 1000,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center"
                }}
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedMentor(null)}
                  style={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    background: "#F1F5F9",
                    border: "none",
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "#64748B",
                    fontSize: 16,
                    transition: "all 0.2s"
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#E2E8F0"; e.currentTarget.style.color = "#0F172A"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#F1F5F9"; e.currentTarget.style.color = "#64748B"; }}
                >
                  ✕
                </button>

                {/* Profile Image */}
                <div style={{ width: 120, height: 120, borderRadius: "50%", overflow: "hidden", background: "#E5E7EB", marginBottom: 24, border: "4px solid #F1F5F9", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
                  <img src={selectedMentor.img} alt={selectedMentor.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", mixBlendMode: "multiply", opacity: 0.9 }} />
                </div>

                {/* Name */}
                <h3 style={{ fontSize: 24, fontWeight: 900, color: "#0A1F44", margin: 0 }}>
                  {selectedMentor.name}
                </h3>

                {/* Role */}
                <p style={{ fontSize: 14, fontWeight: 700, color: "#E8871A", marginTop: 8, marginBottom: 20, textTransform: "uppercase", letterSpacing: 0.5 }}>
                  {selectedMentor.role}
                </p>

                {/* Divider */}
                <div style={{ width: "100%", borderBottom: "1px solid #E2E8F0", marginBottom: 20 }} />

                {/* Description */}
                <p style={{ fontSize: 14, color: "#4A5568", lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                  {getMentorDesc(selectedMentor)}
                </p>

                {/* Action Button */}
                <button
                  onClick={() => setSelectedMentor(null)}
                  style={{
                    marginTop: 28,
                    padding: "12px 36px",
                    background: "#0A1F44",
                    color: "#FFFFFF",
                    border: "none",
                    borderRadius: 12,
                    fontWeight: 700,
                    fontSize: 14,
                    cursor: "pointer",
                    transition: "all 0.2s"
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = "#E8871A"}
                  onMouseLeave={e => e.currentTarget.style.background = "#0A1F44"}
                >
                  Close Profile
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
      <style>{`
        .hide-scroll::-webkit-scrollbar {
          display: none;
        }
        .hide-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .mentor-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease !important;
        }
        .mentor-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 24px rgba(232,135,26,0.12) !important;
        }
        .read-more-btn {
          transition: color 0.2s ease !important;
        }
        .read-more-btn:hover {
          color: #E8871A !important;
        }
      `}</style>
    </section>
  );
}

const NEW_PROGRAMS_DATA = [
  {
    level: "Under-Graduate",
    items: [
      {
        program: "B.Tech — Computer Science & Engineering",
        duration: "4 Years",
        details: (
          <>
            An engineering degree built around core computer science, advanced technical study, and specializations in high-demand domains.
            <br />
            <br />
            <strong>Specializations available:</strong>
            <ul style={{ margin: "8px 0 0 20px", padding: 0, listStyleType: "disc" }}>
              <li>Artificial Intelligence & Machine Learning</li>
              <li>Cyber Security</li>
              <li>Data Science & Business Analytics (with HCL)</li>
              <li>Full Stack Web Development</li>
              <li>Quantum Computing</li>
              <li>NIAT Upskilling</li>
            </ul>
            <br />
            <strong>Eligibility:</strong> Passed 10+2 with Physics and Mathematics as compulsory subjects plus one of: Chemistry / Computer Science / Electronics / IT / Biology / Informatics Practices / Biotechnology / Technical/Vocational Subject / Agriculture / Engineering Graphics / Business Studies / Entrepreneurship — with a minimum of 55% marks.
            <br />
            <strong style={{ color: "#E8871A" }}>OR</strong> Passed D.Voc. Stream with a minimum of 55% marks in the same or allied sector.
          </>
        )
      },
      {
        program: "BCA — Bachelor of Computer Applications",
        duration: "3/4 Years",
        details: (
          <>
            Application-oriented computing with specialisation options in high-demand domains.
            <br />
            <br />
            <strong>Specialisations available:</strong>
            <ul style={{ margin: "8px 0 0 20px", padding: 0, listStyleType: "disc" }}>
              <li>Computer Applications</li>
              <li>Artificial Intelligence & Machine Learning</li>
              <li>Cyber Security</li>
              <li>Data Science & Business Analytics</li>
            </ul>
            <br />
            <strong>Eligibility:</strong> Passed 10+2 with a minimum of 50% marks.
            <br />
            <strong style={{ color: "#E8871A" }}>OR</strong> Passed Diploma in Commercial Practice or equivalent with a minimum of 50% marks.
          </>
        )
      }
    ]
  },
  {
    level: "Post-Graduate",
    items: [
      {
        program: "M.Tech — Computer Science & Engineering",
        duration: "2 Years",
        details: (
          <>
            <strong>Eligibility:</strong> Bachelor's degree in any stream with a minimum of 50% marks; Mathematics preferred at 10+2 or graduation level.
          </>
        )
      },
      {
        program: "MCA — Master of Computer Applications",
        duration: "2 Years",
        details: (
          <>
            <strong>Eligibility:</strong> BCA / B.Sc. (CS) / equivalent, or a graduate degree with Mathematics at 10+2 or graduation level, and a minimum of 50% marks.
          </>
        )
      }
    ]
  },
  {
    level: "Doctoral (Ph.D.)",
    items: [
      {
        program: "Ph.D. — Computer Applications / Computer Science & Engineering",
        duration: "Minimum 3 Years",
        details: (
          <>
            <strong>Eligibility:</strong> Relevant master's degree with a minimum of 55% marks.
          </>
        )
      }
    ]
  }
];

function ProgramsOfferedSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="Programs" style={{ padding: "100px 0", background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)", position: "relative" }}>
      
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56 }}
        >
          <h2 style={{ fontSize: 48, fontWeight: 900, color: "#0A1F44", margin: "0 0 12px", lineHeight: 1.1, letterSpacing: "-1px" }}>
            Programs Offered
          </h2>
          <p style={{ fontSize: 16, color: "#64748B", margin: 0, letterSpacing: 0.5 }}>
            Geeta University SCSE Programs | Duration | Eligibility
          </p>
          <div style={{ marginTop: 24, fontSize: 15, color: "#4A5568", fontWeight: 400, maxWidth: 800, lineHeight: 1.6 }}>
            <span style={{ fontWeight: 700, color: "#E8871A", letterSpacing: 0.5, textTransform: "uppercase", fontSize: 13, marginRight: 8 }}>Level of Study: </span>
            There are five core academic offerings under SCSE: B.Tech CSE, M.Tech CSE, BCA, MCA, and Ph.D. in Computer Applications / Computer Science & Engineering.
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: "flex", gap: 16, borderBottom: "1px solid #E2E8F0", paddingBottom: 20, marginBottom: 40, overflowX: "auto" }} className="hide-scroll"
        >
          {NEW_PROGRAMS_DATA.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              style={{
                padding: "14px 32px",
                borderRadius: 12,
                background: activeTab === idx ? "#0A1F44" : "#F1F5F9",
                color: activeTab === idx ? "#FFFFFF" : "#475569",
                border: "1px solid",
                borderColor: activeTab === idx ? "#0A1F44" : "#E2E8F0",
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                display: "flex",
                alignItems: "center",
                gap: 12,
                boxShadow: activeTab === idx ? "0 8px 24px rgba(10,31,68,0.25)" : "none"
              }}
              onMouseEnter={(e) => {
                if (activeTab !== idx) {
                  e.currentTarget.style.background = "#E2E8F0";
                  e.currentTarget.style.color = "#0A1F44";
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== idx) {
                  e.currentTarget.style.background = "#F1F5F9";
                  e.currentTarget.style.color = "#475569";
                }
              }}
            >
              <div style={{ fontSize: 20, opacity: activeTab === idx ? 1 : 0.6 }}>{idx === 0 ? "🎓" : idx === 1 ? "🔬" : "📚"}</div>
              {cat.level}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div style={{
              background: "#FDF1D6",
              border: "1px solid #FCD34D",
              borderRadius: 10,
              padding: "16px 24px",
              textAlign: "center",
              fontWeight: 800,
              color: "#92400E",
              fontSize: 18,
              marginBottom: 32,
              letterSpacing: 0.5,
              boxShadow: "0 4px 12px rgba(245, 158, 11, 0.05)"
            }}>
              {NEW_PROGRAMS_DATA[activeTab].level} Courses
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24 }}>
              {NEW_PROGRAMS_DATA[activeTab].items.map((prog, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    borderRadius: 16,
                    padding: "28px 36px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 18,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                    transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.08)";
                    e.currentTarget.style.borderColor = "#E8871A";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.03)";
                    e.currentTarget.style.borderColor = "#E2E8F0";
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16 }}>
                    <div>
                      <h3 style={{ fontSize: 26, fontWeight: 800, color: "#0A1F44", margin: "0 0 10px", letterSpacing: "-0.5px" }}>
                        {prog.program}
                      </h3>
                      <div style={{ display: "inline-block", background: "#FEF3C7", color: "#92400E", padding: "6px 14px", borderRadius: 20, fontSize: 13, fontWeight: 700, border: "1px solid #FDE68A" }}>
                        Duration: {prog.duration}
                      </div>
                    </div>
                    <a href="https://admissions.geetauniversity.edu.in/" target="_blank" rel="noreferrer" style={{
                      background: "#E8871A",
                      color: "#FFFFFF",
                      padding: "12px 28px",
                      borderRadius: 8,
                      fontSize: 14,
                      fontWeight: 800,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      transition: "all 0.3s",
                      textTransform: "uppercase",
                      letterSpacing: 1
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = "#0A1F44";
                      e.currentTarget.style.boxShadow = "0 8px 20px rgba(10,31,68,0.2)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = "#E8871A";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                    >
                      Apply Now <ArrowRight size={16} />
                    </a>
                  </div>
                  
                  <div style={{ height: 1, background: "#F1F5F9", width: "100%", margin: "4px 0" }} />
                  
                  <div style={{ fontSize: 15, color: "#475569", lineHeight: 1.8, fontWeight: 400 }}>
                    {prog.details}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

const DEPT_HIGHLIGHTS_DATA = [
  {
    title: "Hackforge '25",
    desc: "A 24-hour tech marathon focused on coding, creation, innovation, teamwork, and mentor-guided problem solving.",
    image: "/hackforge.jpg",
  },
  {
    title: "SIH 2024 Finalists",
    desc: "Proud representation by Geeta University students at the Smart India Hackathon 2024.",
    image: "/sih.jpg",
  },
  {
    title: "Cybersecurity Awareness Program",
    desc: "Hosted by Geeta Technical Hub.",
    image: "/cyber.jpg",
  },
  // {
  //   title: "Certification Tracks",
  //   desc: "In AWS, Red Hat, Cisco, HubSpot, GitHub, Oracle, and Microsoft Azure.",
  //   image: "/dummy.png",
  // },
  // {
  //   title: "Drive-Ready Tracks",
  //   desc: "In MEAN/MERN Stack, PHP & MySQL, Python Development, Cyber Security Fundamentals, Artificial Intelligence, and Machine Learning.",
  //   image: "/dummy.png",
  // },
  // {
  //   title: "DSA & Competitive Coding",
  //   desc: "Logic building, problem-solving techniques, advanced algorithms, and competitive programming.",
  //   image: "/dummy.png",
  // },
  // {
  //   title: "Milestone Actions",
  //   desc: "G-connect, Alumni Connect, T Shaped Technocrat, Multi-Skill Development, Project Roundup, Techno Coders, Midnight Syntax.",
  //   image: "/dummy.png",
  // },
  {
    title: "Outcomes & Scale",
    desc: "25+ Hackathons conducted • 350+ Projects delivered • 500+ Internships secured • 3,000+ Global Certifications earned.",
    image: "/outcome.jpg",
  }
];

function TestimonialsSection() {
  return (
    <section
      id="Testimonials"
      style={{
        background: "#0A1F44",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)"
      }}
    >
      {/* Decorative Blur Spheres */}
      <div style={{ position: "absolute", top: "-10%", left: "-10%", width: 500, height: 500, background: "radial-gradient(circle, rgba(232,135,26,0.08) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-10%", right: "-10%", width: 500, height: 500, background: "radial-gradient(circle, rgba(232,135,26,0.06) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 20 }}>
            <div style={{ width: 32, height: 2, borderRadius: 2 }} />
            
            <div style={{ width: 32, height: 2, borderRadius: 2 }} />
          </div>
          <h2 style={{
            fontSize: 44, fontWeight: 900, color: "#FFFFFF",
            margin: "0 0 16px", lineHeight: 1.1, letterSpacing: "-1.5px"
          }}>
            Straight from Those Who've Been There
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255, 255, 255, 0.7)", maxWidth: 750, margin: "0 auto", lineHeight: 1.7, fontWeight: 450 }}>
            Read first-hand accounts from our alumni and students about their career transformations, academic mentorship, and experiential journey at SCSE.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 28,
          position: "relative",
          zIndex: 2
        }}>
          {TESTIMONIALS.map((item, idx) => {
            const initials = item.name.split(" ").map(n => n[0]).join("");
            const displayDetails = [
              "B.Tech CSE",
              item.role && item.role !== "B.Tech CSE Alumni" ? `${item.role}, ${item.company}` : item.company,
              item.pkg
            ].filter(Boolean).join(" | ");
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  borderRadius: "24px",
                  padding: "36px 32px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  cursor: "default"
                }}
                className="testimonial-card"
              >
                <div>
                  {/* Quote Icon */}
                  <svg className="quote-icon" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(232, 135, 26, 0.25)" strokeWidth="2.5" style={{ transition: "all 0.3s ease" }}>
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h4c0 3.5-2.5 6-6 6v1zm12 0c3 0 7-1 7-8V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h4c0 3.5-2.5 6-6 6v1z" />
                  </svg>

                  {/* Quote Text */}
                  <p style={{
                    fontSize: "14.5px",
                    color: "rgba(255, 255, 255, 0.8)",
                    margin: "20px 0 28px",
                    lineHeight: 1.65,
                    fontWeight: 450,
                    fontStyle: "italic"
                  }}>
                    "{item.quote}"
                  </p>
                </div>

                {/* User Profile */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  paddingTop: 20
                }}>
                  {/* Avatar Image / Fallback Initials */}
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    overflow: "hidden",
                    background: "rgba(232, 135, 26, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(232, 135, 26, 0.3)",
                    flexShrink: 0,
                    position: "relative"
                  }}>
                    {item.image && (
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        style={{ 
                          width: "100%", 
                          height: "100%", 
                          objectFit: "cover", 
                          position: "absolute",
                          top: 0,
                          left: 0,
                          zIndex: 2 
                        }} 
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    )}
                    <span style={{ color: "#E8871A", fontWeight: 800, fontSize: 15, position: "relative", zIndex: 1 }}>
                      {initials}
                    </span>
                  </div>

                  {/* Meta Details */}
                  <div>
                    <h4 style={{ color: "#FFFFFF", fontSize: "15.5px", fontWeight: 750, margin: "0 0 3px" }}>
                      {item.name}
                    </h4>
                    <p style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "12.5px", margin: 0, fontWeight: 450, lineHeight: 1.3 }}>
                      {displayDetails}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .testimonial-card:hover {
          background: rgba(255, 255, 255, 0.06) !important;
          border-color: rgba(232, 135, 26, 0.35) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(232, 135, 26, 0.05) !important;
        }
        .testimonial-card:hover .quote-icon {
          stroke: rgba(232, 135, 26, 0.6) !important;
          transform: scale(1.1) rotate(-5deg);
        }
      `}</style>
    </section>
  );
}

function DepartmentHighlightsSection() {
  return (
    <section id="DepartmentHighlights" style={{ padding: "100px 0", background: "#FDF1D6", position: "relative", overflow: "hidden" }}>
      {/* Decorative Background Elements */}
      <div style={{ position: "absolute", top: "-20%", left: "-10%", width: 600, height: 600, background: "radial-gradient(circle, rgba(232,135,26,0.1) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-20%", right: "-10%", width: 800, height: 800, background: "radial-gradient(circle, rgba(10,31,68,0.04) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 60 }}
        >
          <h2 style={{ fontSize: 44, fontWeight: 900, color: "#0A1F44", margin: "12px 0 16px", lineHeight: 1.1, letterSpacing: "-1px" }}>
            Where Learning Meets Achievement
          </h2>
          <p style={{ fontSize: 18, color: "#4A5568", maxWidth: 800, margin: "0 auto", lineHeight: 1.6 }}>
            SCSE is an active, achievement-driven school — not just a classroom environment. Here's a glimpse of what students experience:
          </p>
        </motion.div>
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="marquee-container"
          style={{ display: "flex", overflow: "hidden", padding: "10px 0 30px", gap: 32 }}
        >
          {[0, 1].map((setIndex) => (
            <div
              key={setIndex}
              className="marquee-track"
              style={{ display: "flex", gap: 32, flexShrink: 0 }}
            >
              {DEPT_HIGHLIGHTS_DATA.map((item, i) => (
                <div
                  key={`${setIndex}-${i}`}
                  style={{
                    width: 360,
                    flexShrink: 0,
                    background: "#FFFFFF",
                    borderRadius: 16,
                    overflow: "hidden",
                    border: "1px solid #E2E8F0",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(10,31,68,0.1)";
                    const img = e.currentTarget.querySelector("img");
                    if (img) img.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.04)";
                    const img = e.currentTarget.querySelector("img");
                    if (img) img.style.transform = "scale(1)";
                  }}
                >
                  {/* Image Placeholder */}
                  <div style={{ width: "100%", height: 220, position: "relative", overflow: "hidden", background: "#F1F5F9" }}>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.parentElement!.innerHTML = '<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: #E2E8F0; color: #94A3B8; font-weight: 600; font-size: 14px;">[ Image Placeholder ]</div>';
                      }}
                    />
                  </div>
                  
                  {/* Content */}
                  <div style={{ padding: "24px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <h3 style={{ fontSize: 20, fontWeight: 800, color: "#0A1F44", margin: "0 0 12px" }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: 15, color: "#4A5568", margin: 0, lineHeight: 1.6, flex: 1 }}>
                      {item.desc}
                    </p>
                    <div style={{ marginTop: 20 }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#E8871A", textTransform: "uppercase", letterSpacing: 1 }}>Read More →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - 32px)); }
        }
        .marquee-track {
          animation: marquee 25s linear infinite;
        }
        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

function LearningSpacesSection() {
  const spaces = [
    { title: "AI Labs", desc: "Advanced neural networks, machine learning models, and robotics setup.", icon: "🤖" },
    { title: "IoT Labs", desc: "Embedded systems, sensor networks, and smart automation hardware.", icon: "🔌" },
    { title: "Cloud Labs", desc: "Industry-aligned platform training using AWS and Azure clouds.", icon: "☁️" },
    { title: "Cyber Security Labs", desc: "Network defense, vulnerability analysis, and digital forensics.", icon: "🔒" },
    { title: "Coding Labs", desc: "High-end development systems optimized for DSA and coding practice.", icon: "💻" },
    { title: "Project Studios", desc: "Collaborative workspaces dedicated to real-world product delivery.", icon: "🎨" },
    { title: "Smart Classrooms", desc: "Multimedia-equipped interactive classrooms for hybrid learning.", icon: "🎓" },
    { title: "Innovation Spaces", desc: "Open research labs and ideation zones for incubator startups.", icon: "🚀" }
  ];

  const galleryImages = [
    { src: "/scse_ai_lab.png", title: "AI & Robotics Lab", caption: "Students working on computer vision, deep learning models, and robotic integrations." },
    { src: "/scse_cyber_lab.png", title: "Cybersecurity Command Center", caption: "High-tech environment dedicated to network threat analysis and security audits." },
    { src: "/scse_coding_lab.png", title: "Coding & Collaborative Studio", caption: "Interactive programming space designed for logic building, DSA, and group projects." }
  ];

  return (
    <section
      id="LearningSpaces"
      style={{
        background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
        padding: "100px 0",
        position: "relative",
        borderTop: "1px solid #E2E8F0"
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 20 }}>
            <div style={{ width: 32, height: 2, borderRadius: 2 }} />
            
            <div style={{ width: 32, height: 2, borderRadius: 2 }} />
          </div>
          <h2 style={{
            fontSize: 48, fontWeight: 900, color: "#0A1F44",
            margin: "0 0 16px", lineHeight: 1.1, letterSpacing: "-1.5px"
          }}>
            Infrastructure Built for Experiential Learning
          </h2>
          <p style={{ fontSize: 16, color: "#475569", maxWidth: 850, margin: "0 auto", lineHeight: 1.7, fontWeight: 450 }}>
            SCSE students learn in advanced, purpose-built environments designed not just as physical spaces but as active arenas for coding, mentorship, technical training, and applied experimentation:
          </p>
        </div>

        {/* Labs Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 24,
          marginBottom: 40
        }}>
          {spaces.map((space, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              style={{
                background: "#FFFFFF",
                borderRadius: "16px",
                padding: "28px 24px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.02)",
                transition: "all 0.3s ease",
                cursor: "default"
              }}
              className="space-card"
            >
              <div style={{
                fontSize: "28px",
                marginBottom: "16px",
                background: "rgba(232, 135, 26, 0.08)",
                width: "56px",
                height: "56px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#E8871A"
              }}>
                {space.icon}
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#0A1F44", margin: "0 0 8px" }}>
                {space.title}
              </h3>
              <p style={{ fontSize: "13.5px", color: "#64748B", margin: 0, lineHeight: 1.5 }}>
                {space.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div style={{
          textAlign: "center",
          fontSize: 16,
          color: "#475569",
          fontWeight: 650,
          maxWidth: 900,
          margin: "0 auto 64px auto",
          lineHeight: 1.6
        }}>
          Every space is designed to support hands-on learning, project delivery, internships, certification-backed exposure, and technology-enabled training.
        </div>

        {/* Experiential Gallery Showcase */}
        <div>
          <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#0A1F44", marginBottom: 28, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 4, height: 18, background: "#E8871A", borderRadius: 2 }} />
            Department Showcase
          </h3>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 32
          }}>
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease"
                }}
                className="gallery-card"
              >
                {/* Image Wrap */}
                <div style={{ overflow: "hidden", position: "relative", height: "240px", background: "#F1F5F9" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease"
                    }}
                    className="gallery-img"
                  />
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, transparent 40%, rgba(10, 31, 68, 0.8) 100%)",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "20px 24px"
                  }}>
                    <h4 style={{ color: "#FFFFFF", fontSize: "18px", fontWeight: 800, margin: 0, textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
                      {img.title}
                    </h4>
                  </div>
                </div>
                {/* Description */}
                <div style={{ padding: "20px 24px", flex: 1, display: "flex", alignItems: "center" }}>
                  <p style={{ fontSize: "14px", color: "#475569", margin: 0, lineHeight: 1.6 }}>
                    {img.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .space-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px rgba(10, 31, 68, 0.06);
          border-color: #E8871A !important;
        }
        .gallery-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(10, 31, 68, 0.08);
          border-color: #E8871A !important;
        }
        .gallery-card:hover .gallery-img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}

interface PathwayItem {
  area: string;
  pathway: string;
  icon: string;
}

const PATHWAYS: PathwayItem[] = [
  {
    area: "Core Computer Science & Engineering",
    pathway: "Software development, programming, systems-oriented technical roles, and applied computing careers",
    icon: "💻"
  },
  {
    area: "Full Stack Web Development",
    pathway: "Web developer and full stack application development roles",
    icon: "🌐"
  },
  {
    area: "AI & Machine Learning",
    pathway: "Intelligent systems, machine learning applications, and analytics-led technology roles",
    icon: "🤖"
  },
  {
    area: "Cyber Security",
    pathway: "Security-focused technical pathways supported by cybersecurity training and certifications",
    icon: "🔒"
  },
  {
    area: "Data Science & Business Analytics",
    pathway: "Data-oriented and business insight roles connected with analytics-led learning",
    icon: "📊"
  },
  {
    area: "Cloud & Certification-Linked Training",
    pathway: "Technical roles requiring cloud, platform, and tool familiarity",
    icon: "☁️"
  },
  {
    area: "Higher Study / Research",
    pathway: "M.Tech, MCA, and Ph.D. pathways for advanced academic or research progression",
    icon: "🔬"
  }
];

const NOTABLE_ROLES_DATA = [
  {
    name: "Software Developer",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    )
  },
  {
    name: "Full Stack Developer",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </svg>
    )
  },
  {
    name: "App Developer",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    )
  },
  {
    name: "Data Scientist",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
      </svg>
    )
  },
  {
    name: "AI Engineer",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
      </svg>
    )
  },
  {
    name: "ML Engineer",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
      </svg>
    )
  },
  {
    name: "Cybersecurity Analyst",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    )
  },
  {
    name: "Cloud Architect",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
      </svg>
    )
  },
  {
    name: "Systems Engineer",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
      </svg>
    )
  },
  {
    name: "Product Engineer",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    )
  },
  {
    name: "Researcher",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
      </svg>
    )
  },
  {
    name: "Entrepreneur",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <path d="M16 10a4 4 0 0 1-8 0"></path>
      </svg>
    )
  }
];

function CareerPathwaysSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -360, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 360, behavior: "smooth" });
  };

  return (
    <section
      id="CareerPathways"
      style={{
        background: "#FDF1D6",
        padding: "100px 0",
        position: "relative",
        borderTop: "1px solid rgba(0, 0, 0, 0.06)",
        overflow: "hidden"
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 20 }}>
            <div style={{ width: 32, height: 2, background: "#E8871A", borderRadius: 2 }} />
            <span style={{
              color: "#E8871A", fontWeight: 700, fontSize: 11,
              letterSpacing: "0.22em", textTransform: "uppercase",
            }}>
              CAREER PATHWAYS
            </span>
            <div style={{ width: 32, height: 2, background: "#E8871A", borderRadius: 2 }} />
          </div>
          <h2 style={{
            fontSize: 48, fontWeight: 900, color: "#0A1F44",
            margin: "0 0 16px", lineHeight: 1.1, letterSpacing: "-1.5px"
          }}>
            Your Degree. Your Direction.
          </h2>
          <p style={{ fontSize: 16, color: "#4A5568", maxWidth: 850, margin: "0 auto", lineHeight: 1.7, fontWeight: 450 }}>
            SCSE opens doors across a wide range of technology careers. Here's how academic paths map to professional outcomes:
          </p>
        </div>

        {/* Carousel Slider */}
        <div style={{ position: "relative", marginTop: 40, padding: "0 20px" }}>
          <div
            ref={scrollRef}
            className="hide-scroll"
            style={{
              display: "flex",
              gap: 28,
              overflowX: "auto",
              paddingBottom: "32px",
              scrollSnapType: "x mandatory",
              scrollBehavior: "smooth",
            }}
          >
            {PATHWAYS.map((item, idx) => {
              const numStr = `0${idx + 1}`;
              return (
                <div
                  key={idx}
                  style={{
                    scrollSnapAlign: "start",
                    flexShrink: 0,
                    width: "320px",
                    height: "440px",
                    background: "linear-gradient(180deg, #F5E6C9 0%, #EAD7B2 100%)",
                    borderRadius: "24px",
                    padding: "40px 32px",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.02)",
                    border: "1px solid rgba(0, 0, 0, 0.03)",
                    transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  className="pathway-slider-card"
                >
                  <div style={{
                    fontSize: 24,
                    background: "rgba(255, 255, 255, 0.35)",
                    width: 48,
                    height: 48,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "12px",
                    marginBottom: 24,
                  }}>
                    {item.icon}
                  </div>
                  
                  <h3 style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: "#0A1F44",
                    margin: "0 0 16px",
                    lineHeight: 1.35,
                    position: "relative",
                    zIndex: 2,
                  }}>
                    {item.area}
                  </h3>
                  
                  <p style={{
                    fontSize: 14.5,
                    color: "#475569",
                    margin: 0,
                    lineHeight: 1.6,
                    fontWeight: 450,
                    position: "relative",
                    zIndex: 2,
                  }}>
                    {item.pathway}
                  </p>
                  
                  {/* Huge ghost number at the bottom */}
                  <div
                    className="ghost-number"
                    style={{
                      position: "absolute",
                      bottom: "-10px",
                      left: "24px",
                      fontSize: "96px",
                      fontWeight: 900,
                      color: "rgba(255, 255, 255, 0.16)",
                      lineHeight: 1,
                      userSelect: "none",
                      zIndex: 1,
                      transition: "color 0.4s cubic-bezier(0.16, 1, 0.3, 1), text-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    {numStr}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={scrollLeft}
            style={{
              position: "absolute",
              left: "-16px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "#FFFFFF",
              width: 48,
              height: 48,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #E2E8F0",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
              color: "#0A1F44",
              zIndex: 10,
              transition: "transform 0.2s",
            }}
            className="slider-nav-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={scrollRight}
            style={{
              position: "absolute",
              right: "-16px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "#FFFFFF",
              width: 48,
              height: 48,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #E2E8F0",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
              color: "#0A1F44",
              zIndex: 10,
              transition: "transform 0.2s",
            }}
            className="slider-nav-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        {/* Notable Career Roles Band */}
        <div
          style={{
            marginTop: 80,
            background: "rgba(255, 255, 255, 0.45)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(232, 135, 26, 0.15)",
            borderRadius: "32px",
            padding: "48px 32px",
            boxShadow: "0 15px 35px rgba(0, 0, 0, 0.02), inset 0 1px 0 rgba(255, 255, 255, 0.6)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <h3 style={{ fontSize: 26, fontWeight: 900, color: "#0A1F44", letterSpacing: "-0.6px", margin: "0" }}>
              Notable Career Roles Our Graduates Pursue:
            </h3>
          </div>
          
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", maxWidth: 1080, margin: "0 auto" }}>
            {NOTABLE_ROLES_DATA.map((role, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.04, y: -2 }}
                transition={{ type: "spring", stiffness: 450, damping: 15 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "12px 22px",
                  background: "#FFFFFF",
                  border: "1px solid rgba(232, 135, 26, 0.08)",
                  borderRadius: "16px",
                  color: "#0A1F44",
                  fontSize: "14.5px",
                  fontWeight: 650,
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.015)",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                className="career-role-badge"
              >
                <span className="career-role-icon" style={{
                  color: "#E8871A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                }}>
                  {role.icon}
                </span>
                <span>{role.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .pathway-slider-card:hover {
          border-color: rgba(232, 135, 26, 0.18) !important;
          box-shadow: 0 15px 30px rgba(232, 135, 26, 0.07), 0 0 18px rgba(232, 135, 26, 0.04) !important;
        }
        .pathway-slider-card:hover .ghost-number {
          color: rgba(255, 255, 255, 0.28) !important;
          text-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
        }
        .career-role-badge:hover {
          background: #0A1F44 !important;
          color: #FFFFFF !important;
          border-color: #E8871A !important;
          box-shadow: 0 12px 24px rgba(232, 135, 26, 0.16) !important;
        }
        .career-role-badge:hover .career-role-icon {
          color: #E8871A !important;
          transform: scale(1.15) rotate(8deg);
        }
        .slider-nav-btn:hover {
          transform: translateY(-50%) scale(1.08) !important;
          color: #E8871A !important;
        }
        .slider-nav-btn:active {
          transform: translateY(-50%) scale(0.95) !important;
        }
      `}</style>
    </section>
  );
}

function FAQSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const categories = [
    "All",
    "Admissions & Eligibility",
    "Specializations & Technology",
    "Curriculum & Learning",
    "Placements & Careers",
    "Student Facilities",
    "General"
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="FAQ"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
        padding: "100px 0",
        position: "relative",
        borderTop: "1px solid #E2E8F0"
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 20 }}>
            <div style={{ width: 32, height: 2, background: "#E8871A", borderRadius: 2 }} />
            <span style={{
              color: "#E8871A", fontWeight: 700, fontSize: 11,
              letterSpacing: "0.22em", textTransform: "uppercase",
            }}>
              Have Questions?
            </span>
            <div style={{ width: 32, height: 2, background: "#E8871A", borderRadius: 2 }} />
          </div>
          <h2 style={{
            fontSize: 48, fontWeight: 900, color: "#0A1F44",
            margin: "0 0 16px", lineHeight: 1.1, letterSpacing: "-1.5px"
          }}>
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: 16, color: "#64748B", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
            Find answers to common questions about eligibility, courses, placements, and campus facilities.
          </p>
        </div>

        {/* Search Bar */}
        <div style={{ maxWidth: 600, margin: "0 auto 48px", position: "relative" }}>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Search questions or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="faq-search-input"
              style={{
                width: "100%",
                padding: "16px 20px 16px 52px",
                borderRadius: "16px",
                border: "2px solid #E2E8F0",
                fontSize: "16px",
                fontWeight: 500,
                color: "#0A1F44",
                outline: "none",
                background: "#FFFFFF",
                boxShadow: "0 4px 12px rgba(0,0,0,0.02)",
                transition: "all 0.3s ease",
              }}
            />
            {/* Search Icon */}
            <div style={{ position: "absolute", left: 18, top: "50%", transform: "translateY(-50%)", color: "#64748B" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            {/* Clear Button */}
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                style={{
                  position: "absolute",
                  right: 18,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#94A3B8",
                  padding: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Categories Tabs */}
        <div 
          className="faq-categories-scroll hide-scroll"
          style={{ 
            display: "flex", 
            gap: 10, 
            marginBottom: 40, 
            overflowX: "auto", 
            paddingBottom: 12, 
            justifyContent: "flex-start",
            flexWrap: "nowrap"
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenQuestion(null);
              }}
              style={{
                padding: "10px 20px",
                borderRadius: "100px",
                background: activeCategory === cat ? "#0A1F44" : "#FFFFFF",
                color: activeCategory === cat ? "#FFFFFF" : "#475569",
                border: "1.5px solid",
                borderColor: activeCategory === cat ? "#0A1F44" : "#E2E8F0",
                fontSize: "14px",
                fontWeight: 650,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: activeCategory === cat ? "0 4px 12px rgba(10,31,68,0.15)" : "none",
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.borderColor = "#0A1F44";
                  e.currentTarget.style.color = "#0A1F44";
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat) {
                  e.currentTarget.style.borderColor = "#E2E8F0";
                  e.currentTarget.style.color = "#475569";
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          {filteredFaqs.length > 0 ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openQuestion === faq.q;
                return (
                  <div
                    key={idx}
                    style={{
                      background: "#FFFFFF",
                      borderRadius: "16px",
                      border: "1px solid #E2E8F0",
                      boxShadow: isOpen ? "0 10px 25px rgba(10,31,68,0.05)" : "0 2px 8px rgba(0,0,0,0.01)",
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <button
                      onClick={() => setOpenQuestion(isOpen ? null : faq.q)}
                      style={{
                        width: "100%",
                        background: "none",
                        border: "none",
                        padding: "24px 28px",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 20,
                        textAlign: "left",
                        outline: "none",
                      }}
                    >
                      <span style={{
                        fontSize: "17px",
                        fontWeight: 750,
                        color: isOpen ? "#E8871A" : "#0A1F44",
                        lineHeight: 1.4,
                        transition: "color 0.25s ease",
                      }}>
                        {faq.q}
                      </span>
                      {/* Plus/Minus Indicator */}
                      <div style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        background: isOpen ? "rgba(232,135,26,0.1)" : "#F1F5F9",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "all 0.25s ease",
                        color: isOpen ? "#E8871A" : "#64748B",
                      }}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            transform: isOpen ? "rotate(180deg)" : "none",
                            transition: "transform 0.3s ease"
                          }}
                        >
                          {isOpen ? (
                            <line x1="5" y1="12" x2="19" y2="12" />
                          ) : (
                            <>
                              <line x1="12" y1="5" x2="12" y2="19" />
                              <line x1="5" y1="12" x2="19" y2="12" />
                            </>
                          )}
                        </svg>
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: "easeInOut" }}
                        >
                          <div style={{
                            padding: "0 28px 24px",
                            fontSize: "15px",
                            lineHeight: 1.7,
                            color: "#475569",
                            fontWeight: 450,
                            borderTop: "1px solid #F1F5F9",
                            whiteSpace: "pre-line",
                          }}>
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "48px 24px", background: "#FFFFFF", borderRadius: "16px", border: "1px dashed #CBD5E1" }}>
              <div style={{ fontSize: "40px", marginBottom: 16 }}>🔍</div>
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#0A1F44", margin: "0 0 8px" }}>No Results Found</h3>
              <p style={{ color: "#64748B", fontSize: "14px", margin: 0 }}>
                We couldn't find any questions matching "{searchTerm}". Try another search term or clear the filter.
              </p>
            </div>
          )}
        </div>
      </div>
      <style>{`
        .faq-search-input:focus {
          border-color: #E8871A !important;
          box-shadow: 0 4px 20px rgba(232,135,26,0.1) !important;
        }
        @media (max-width: 768px) {
          .faq-categories-scroll {
            justify-content: flex-start !important;
            padding-left: 4px;
          }
        }
      `}</style>
    </section>
  );
}

export default function Page() {
  const [activeSection, setActiveSection] = useState("Overview");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  const lenis = useLenis();
  const { scrollY } = useScroll();
  const heroBgY = useTransform(scrollY, [0, 800], [0, 160]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id: string) => {
    if (lenis) {
      lenis.scrollTo(`#${id}`, { offset: -130 });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(id);
  };

  // Handle hash-based navigation from other pages (e.g., homepage quick-nav buttons)
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      // Delay to allow page to fully render before scrolling
      const timer = setTimeout(() => {
        if (lenis) {
          lenis.scrollTo(`#${hash}`, { offset: -130 });
        } else {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        }
        setActiveSection(hash);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [lenis]);

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", color: "#1A1A2E", background: "#F7F9FC", minHeight: "100vh" }}>


      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section id="Overview" className="relative w-full min-h-[92vh] lg:h-[calc(100vh-80px)] flex items-stretch overflow-hidden bg-[#050f24]">
        {/* Dynamic Slide Background */}
        <motion.div 
          style={{ y: heroBgY }}
          className="absolute -top-[10%] left-0 w-full h-[120%] overflow-hidden bg-[#0c0f17]"
        >
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentHeroSlide}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1.08 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{
                opacity: { duration: 0.8, ease: "easeInOut" },
                scale: { duration: 6, ease: "linear" },
              }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={HERO_SLIDES[currentHeroSlide].bgImage}
                alt="Geeta University Campus Background"
                fill
                sizes="100vw"
                priority
                className="object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>

          {/* Dark Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050f24]/95 via-[#050f24]/75 to-[#050f24]/95 z-[2]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050f24] via-transparent to-[#050f24]/50 z-[2]" />
          <div 
            className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none z-[3]"
            style={{ mixBlendMode: "overlay" }}
          />
        </motion.div>

        {/* Hero Grid Container */}
        <div className="max-w-[1440px] mx-auto w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10 px-6 sm:px-10 lg:px-16 xl:px-24 py-20 lg:py-0">
          
          {/* Columns 1-9: Left Content & Center Student Portrait */}
          <div className="lg:col-span-9 flex flex-col justify-end lg:justify-center relative h-full z-20">
            <div className="relative w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-20 pb-12 lg:py-0">
              
              {/* Left text area */}
              <div className="lg:col-start-2 lg:col-span-5 pl-4 sm:pl-8 lg:pl-12 flex flex-col justify-center text-left text-white max-w-[480px] relative z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentHeroSlide}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
                    }}
                    className="flex flex-col gap-5"
                  >
                    {/* Bold Heading (Format matches CU: Thin-Bold L1, Bold L2) */}
                    <motion.h1 
                      variants={{
                        hidden: { opacity: 0, y: 25 },
                        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 14 } }
                      }} 
                      className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[64px] tracking-tight leading-[1.08] text-white select-none"
                    >
                      <span className="font-extralight opacity-95">{HERO_SLIDES[currentHeroSlide].titleThin}</span>{" "}
                      <span className="font-black">{HERO_SLIDES[currentHeroSlide].titleBoldLine1}</span>
                      <br />
                      <span className="font-black">
                        {HERO_SLIDES[currentHeroSlide].titleBoldLine2}
                      </span>
                    </motion.h1>

                    {/* Accent line (Exactly matches: 50px wide, thin white line) */}
                    <motion.div 
                      variants={{
                        hidden: { opacity: 0, scaleX: 0 },
                        visible: { opacity: 1, scaleX: 1, transition: { duration: 0.4 } }
                      }} 
                      className="w-[50px] h-0.5 bg-[#E8871A] origin-left my-2"
                    />

                    {/* Description: Indented to align with line end (70px) */}
                    <motion.p 
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70 } }
                      }} 
                      className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-[460px] font-medium"
                    >
                      {HERO_SLIDES[currentHeroSlide].description}
                    </motion.p>

                    {/* CTA button: Centered under the description text container */}
                    <motion.div 
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70 } }
                      }} 
                      className="flex justify-start pt-3"
                    >
                      <a
                        href="https://admissions.geetauniversity.edu.in/"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-[#ff0000] hover:bg-[#d90000] text-white font-extrabold text-xs lg:text-sm px-8 py-2.5 rounded-md flex items-center space-x-2 transition-all tracking-widest uppercase cursor-pointer shadow-lg shadow-[#ff0000]/15"
                      >
                        <span>{HERO_SLIDES[currentHeroSlide].cta}</span>
                        {/* Thin, long right arrow SVG */}
                        <svg className="w-5 h-5 text-white ml-2" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                      </a>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

            {/* Star Placement Overlay: shifted left to align with text */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentHeroSlide}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute bottom-6 left-6 sm:left-12 lg:left-[110px] xl:left-[150px] z-20 flex items-center gap-8 sm:gap-10"
              >
                {/* Name & Subtitle block */}
                <div className="text-left text-white flex flex-col justify-center flex-shrink-0">
                  <div className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-tight">
                    {HERO_SLIDES[currentHeroSlide].studentName.split(" ")[0]}
                  </div>
                  {HERO_SLIDES[currentHeroSlide].studentName.split(" ").length > 1 && (
                    <div className="text-2xl sm:text-3xl font-light uppercase tracking-tight mt-1 leading-tight">
                      {HERO_SLIDES[currentHeroSlide].studentName.split(" ").slice(1).join(" ")}
                    </div>
                  )}
                  <div className="text-[11px] sm:text-xs font-bold text-gray-400 mt-3 tracking-wider uppercase leading-normal">
                    {HERO_SLIDES[currentHeroSlide].program}
                  </div>
                </div>

                {/* Divider Line in between student info and stat block */}
                <div className="w-[1px] h-12 bg-white/40 self-center flex-shrink-0" />

                {/* Stat Block: Placement Package */}
                <div className="text-left text-white flex flex-col justify-center flex-shrink-0">
                  <div className="text-[11px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider leading-normal">
                    Highest Package
                  </div>
                  <div className="text-lg sm:text-xl font-black text-white mt-3 leading-tight">
                    {HERO_SLIDES[currentHeroSlide].pkg}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Center cutout student: Shifted slightly to the right, z-index z-10 puts it behind text and form */}
          <div className="relative lg:absolute lg:bottom-0 lg:left-[56%] lg:-translate-x-1/2 w-full lg:w-[520px] xl:w-[600px] h-[320px] sm:h-[420px] lg:h-[88%] xl:h-[92%] flex items-end justify-center z-10 pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentHeroSlide}
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.15 }}
                className="relative w-full h-full flex items-end justify-center"
              >
                {/* Glowing back circle */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[240px] sm:w-[320px] lg:w-[400px] xl:w-[460px] h-[240px] sm:h-[300px] lg:h-[380px] bg-[#E8871A]/20 rounded-full blur-[80px] pointer-events-none z-0" />
                
                {/* Bottom horizon beam */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-0.5 bg-gradient-to-r from-transparent via-[#E8871A] to-transparent z-10 opacity-60" />

                {/* Cutout student */}
                <div className="relative w-[280px] sm:w-[360px] lg:w-full h-full flex items-end z-10">
                  <Image
                    src={HERO_SLIDES[currentHeroSlide].image}
                    alt={HERO_SLIDES[currentHeroSlide].studentName}
                    fill
                    sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 520px, 600px"
                    priority
                    className="object-contain object-bottom filter drop-shadow-[0_12px_35px_rgba(0,0,0,0.6)]"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Column 10-12: Right Floating Admissions Form */}
          <div className="lg:col-span-3 flex items-center justify-center lg:justify-end pr-0 lg:pr-2 xl:pr-4 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="w-full max-w-[400px] lg:max-w-[360px] xl:max-w-[380px]"
            >
              <AdmissionFormWrapper />
            </motion.div>
          </div>

        </div>

        {/* Arrow navigators */}
        <button
          onClick={() => setCurrentHeroSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/25 hover:bg-[#E8871A] border border-gray-800 text-white p-2.5 rounded-full z-20 cursor-pointer transition-all duration-300 hidden xl:flex items-center justify-center hover:scale-110 active:scale-95"
          aria-label="Previous Slide"
        >
          &larr;
        </button>
        <button
          onClick={() => setCurrentHeroSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1))}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/25 hover:bg-[#E8871A] border border-gray-800 text-white p-2.5 rounded-full z-20 cursor-pointer transition-all duration-300 hidden xl:flex items-center justify-center hover:scale-110 active:scale-95"
          aria-label="Next Slide"
        >
          &rarr;
        </button>

        {/* Slide dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-3 z-30">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentHeroSlide(idx)}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                idx === currentHeroSlide 
                  ? "w-8 bg-[#E8871A] shadow-md shadow-[#E8871A]/30" 
                  : "w-2.5 bg-gray-500/50 hover:bg-gray-400"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Bouncing Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center space-y-1">
          <div className="w-5 h-8 rounded-full border-2 border-gray-600/50 p-1 flex justify-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="w-1 h-1.5 bg-[#E8871A] rounded-full"
            />
          </div>
        </div>
      </section>

      {/* ── TOP RECRUITERS ────────────────────────────────────────────────────── */}
      <TopRecruiters />

      {/* ── RANKINGS & ACCREDITATIONS ───────────────────────────────────────────────── */}
      <RankingsAndAccreditations />


      {/* ── ABOUT SCHOOL ──────────────────────────────────────────────────── */}
      <AboutSchoolSection />

      {/* ── MENTORS ──────────────────────────────────────────────────────────── */}
      <MentorsSection />

        {/* ── PROGRAMS ──────────────────────────────────────────────────────── */}
      <ProgramsOfferedSection />

      {/* ── DEPARTMENT HIGHLIGHTS ──────────────────────────────────────────────────────── */}
      <DepartmentHighlightsSection />

      {/* ── BROCHURE DOWNLOAD ────────────────────────────────────────────────── */}
      <BrochureDownloadSection />

{/* ── LEARNING OUTCOMES ────────────────────────────────────────────────── */}
      <LearningOutcomes />

     
      {/* ── SPECIALISATIONS ──────────────────────────────────────────────────── */}
      <SpecialisationsSection />

      {/* ── GEETA TECHNICAL HUB (GTH) ─────────────────────────────────────────── */}
      <GeetaTechnicalHubSection />

      {/* ── INTERNATIONAL & INDUSTRY PARTNERS ──────────────────────────────────── */}
      <InternationalPartnersSection />

      {/* ── STUDENT TESTIMONIALS ─────────────────────────────────────────────────── */}
      <TestimonialsSection />

      {/* ── HIGHLIGHTS OF LEARNING SPACES ─────────────────────────────────────── */}
      <LearningSpacesSection />

           {/* ── CAREER PATHWAYS ─────────────────────────────────────────────────── */}
      <CareerPathwaysSection />
      

      {/* ── FAQ SECTION ──────────────────────────────────────────────────────── */}
      <FAQSection />

      {/* ── CTA FOOTER BAND ─────────────────────────────────────────────────── */}
      <section style={{ background: "#E8871A", padding: "48px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: "white", margin: "0 0 12px" }}>Ready to Join SCSE at Geeta University?</h2>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 15, marginBottom: 28 }}>Admissions Open for Session 2026–27 · Apply now or download the brochure for more details.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://admissions.geetauniversity.edu.in/" target="_blank" rel="noreferrer"
            style={{ background: "#0A1F44", color: "white", padding: "14px 32px", borderRadius: 6, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
            Apply Now →
          </a>
          <a href="/cse brochure.pdf" download="SCSE_Brochure.pdf"
            style={{ background: "white", color: "#E8871A", border: "none", padding: "14px 28px", borderRadius: 6, fontWeight: 700, fontSize: 14, cursor: "pointer", textDecoration: "none", display: "inline-block" }}>
            Download Brochure
          </a>
          <a href="https://geetauniversity.edu.in/contact-us" target="_blank" rel="noreferrer"
            style={{ background: "transparent", border: "2px solid white", color: "white", padding: "14px 24px", borderRadius: 6, fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
            Contact Admissions
          </a>
        </div>
      </section>

      {/* ── PAGE FOOTER ─────────────────────────────────────────────────────── */}
      <footer style={{ background: "#0A1F44", color: "#94A3B8", padding: "10px", textAlign: "center", fontSize: 12 }}>
        © 2026 Geeta University · School of Computer Science &amp; Engineering ·{" "}
        <a href="https://geetauniversity.edu.in" style={{ color: "#E8871A" }}>geetauniversity.edu.in</a>
      </footer>

      {/* Embedded CSS for layout responsiveness */}
      <style jsx>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
            text-align: center;
          }
          .hero-left-align {
            align-items: center !important;
            justify-content: center !important;
            text-align: center !important;
          }
          .hero-stats {
            justify-content: center !important;
          }
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .program-details-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .highlights-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .highlight-item {
            border-right: none !important;
            border-bottom: 1px solid #1A3A6B;
            padding-bottom: 16px;
          }
        }
      `}</style>

    </div>
  );
}
