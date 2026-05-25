"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useLenis } from "lenis/react";
import {
  ArrowRight,
  Award
} from "lucide-react";

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
}

interface FAQItem {
  q: string;
  a: string;
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
  { stat: "150+", label: "Projects Delivered" },
  { stat: "25+", label: "Hackathons Conducted" },
];

const TESTIMONIALS: Testimonial[] = [
  { name: "Vaibhav Arora", pkg: "1.4 Cr PA", company: "Wabtec Corp", role: "Principal Solution Architect", quote: "The 360-degree development, mentorship programs, and industry interactions helped me become an entrepreneur instead of seeking a job." },
  { name: "Vikas Bareja", pkg: "33–34 LPA", company: "Tech Mahindra", role: "B.Tech CSE Alumni", quote: "Rigorous training and mentorship here empowered me with technical expertise and leadership qualities needed in the real world." },
  { name: "Shantanu Ojha", pkg: "30 LPA", company: "Ernst & Young", role: "B.Tech CSE Alumni", quote: "Campus support and mentorship at Geeta University laid the true foundation of my professional career." },
  { name: "Prikshit", pkg: "30 LPA", company: "Thales", role: "B.Tech CSE Alumni", quote: "My time here helped me bridge the gap between theory-based and practical learning like nothing else could." },
  { name: "Saransh", pkg: "30 LPA", company: "PayU Payments", role: "B.Tech CSE Alumni", quote: "GU individually helped me grow. The environment here kept me determined towards my goals and real-world readiness." },
  { name: "Monty", pkg: "24 LPA", company: "Hike Edu", role: "B.Tech CSE Alumni", quote: "Confidence and perseverance from Geeta University's campus culture and industry-focused approach shaped my career." },
];

const FAQS: FAQItem[] = [
  { q: "Are placements specific to SCSE or university-wide?", a: "Placement stories in the brochure clearly include SCSE students and alumni. Some statistics are institution-wide and are labelled accordingly. School-specific outcomes are presented separately." },
  { q: "Is there practical skill development beyond theory?", a: "Yes. Official content strongly indicates practical orientation through projects, internships, hackathons, coding tracks, certification programs, professors of practice, and Geeta Technical Hub support." },
  { q: "What emerging technologies are covered?", a: "AI, machine learning, cybersecurity, data science, cloud tools, full stack development, and quantum computing are all part of the official specialization and training offerings." },
  { q: "What industry-linked learning opportunities exist?", a: "Certifications, bootcamps, domain trainers, tool-integrated learning, and partnerships with AWS, Cisco, Oracle, Microsoft Azure, GitHub, Red Hat Academy, and others." },
  { q: "Is there mentorship beyond regular faculty?", a: "Yes — the school provides academic faculty, professors of practice with industry backgrounds, technical hub trainers, and leadership support through the Associate Dean and HOD." },
  { q: "Can different backgrounds apply to PG computing programs?", a: "For M.Tech CSE and MCA, eligibility includes different graduation backgrounds. Mathematics-related conditions apply where specified in official criteria." },
];



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
    studentName: "Vaibhav Arora",
    pkg: "1.4 Crore PA",
    company: "Wabtec Corp",
    program: "B.Tech CSE Alumni",
    image: "/dummy.png",
    titleThin: "Shape the Future of",
    titleBoldLine1: "Computing",
    titleBoldLine2: "at Geeta University",
    subtitle: "Discover. Learn. Empower.",
    description: "Geeta University's School of Computer Science & Engineering integrates intensive coding bootcamps, hands-on hackathons and placement mentoring.",
    bgImage: "/campus_bg_1.png",
    cta: "Apply Today",
  },
  {
    studentName: "Priya Sharma",
    pkg: "28 Lakhs PA",
    company: "Microsoft India",
    program: "B.Tech CSE Alumni",
    image: "/du.png",
    titleThin: "Earn Global",
    titleBoldLine1: "Certifications",
    titleBoldLine2: "AWS, Azure & Cisco",
    subtitle: "Excellence & Industry Links",
    description: "Earn credentials from AWS, Microsoft Azure, Cisco, Oracle, and Red Hat. Step out ready to contribute from day one in the digital economy.",
    bgImage: "/campus_bg_2.png",
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

export default function Page() {
  const [activeSection, setActiveSection] = useState("Overview");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [activeProgram, setActiveProgram] = useState(0);
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
              <div className="lg:col-start-2 lg:col-span-6 pl-8 sm:pl-16 lg:pl-20 xl:pl-24 flex flex-col justify-center text-left text-white max-w-xl relative z-10">
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
                    className="space-y-7"
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
                      className="w-[50px] h-[1px] bg-white/70 origin-left mt-8 mb-6"
                    />

                    {/* Description: Indented to align with line end (70px) */}
                    <motion.p 
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70 } }
                      }} 
                      className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-lg font-medium pl-[70px]"
                    >
                      {HERO_SLIDES[currentHeroSlide].description}
                    </motion.p>

                    {/* CTA button: Centered under the description text container */}
                    <motion.div 
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70 } }
                      }} 
                      className="flex justify-center pt-4 max-w-lg pl-[70px]"
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

            {/* Star Placement Overlay: shifted right and added spacing */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentHeroSlide}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute bottom-6 left-8 sm:left-16 lg:left-[140px] xl:left-[190px] z-20 flex items-center space-x-8 sm:space-x-10"
              >
                {/* Name & Subtitle block */}
                <div className="text-left text-white leading-none">
                  <div className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                    {HERO_SLIDES[currentHeroSlide].studentName.split(" ")[0]}
                  </div>
                  <div className="text-2xl sm:text-3xl font-light uppercase tracking-tight mt-0.5">
                    {HERO_SLIDES[currentHeroSlide].studentName.split(" ").slice(1).join(" ")}
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-gray-400 mt-2 tracking-wide uppercase">
                    {HERO_SLIDES[currentHeroSlide].program}
                  </div>
                </div>

                {/* Arrow indicator */}
                <div className="flex items-center justify-center">
                  <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>

                {/* Corporate Achievement Logo */}
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                  {getCompanyLogo(HERO_SLIDES[currentHeroSlide].company)}
                </div>

                {/* Divider Line in between logo and stat block */}
                <div className="w-[1px] h-8 bg-white/20 self-center" />

                {/* Stat Block: Placement Package */}
                <div className="text-left text-white leading-tight">
                  <div className="text-[10px] sm:text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                    Highest Package
                  </div>
                  <div className="text-lg sm:text-xl font-black text-white mt-0.5">
                    {HERO_SLIDES[currentHeroSlide].pkg}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Center cutout student: Centered relative to outer container, z-index z-10 puts it behind text and form */}
          <div className="relative lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 w-full lg:w-[520px] xl:w-[600px] h-[320px] sm:h-[420px] lg:h-[88%] xl:h-[92%] flex items-end justify-center z-10 pointer-events-none">
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

      {/* ── RECOGNITION STRIP ───────────────────────────────────────────────── */}
      <div style={{ background: "#0A1F44", borderTop: "1px solid #1A3A6B", padding: "12px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 24, alignItems: "center", justifyContent: "center" }}>
          {["UGC Recognised", "AICTE Approved", "OBE Excellence 2022", "6th — Competition Success Review", "AAA by Career360", "NIRF Participant"].map((r) => (
            <span key={r} style={{ color: "#94A3B8", fontSize: 12, display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ color: "#E8871A", fontSize: 14 }}>✦</span> {r}
            </span>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        {/* ── ABOUT SCHOOL ──────────────────────────────────────────────────── */}
        <section style={{ padding: "64px 0 48px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="about-grid">
            <div>
              <span style={{ color: "#E8871A", fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: "uppercase" }}>About the School</span>
              <h2 style={{ fontSize: 32, fontWeight: 800, color: "#0A1F44", margin: "8px 0 16px", lineHeight: 1.2 }}>Future-Focused Tech Education at Geeta University</h2>
              <p style={{ color: "#4A5568", lineHeight: 1.8, marginBottom: 16 }}>
                The School of Computer Science &amp; Engineering is a future-focused academic school where students learn to work with contemporary technologies and industry-relevant tools. Through classroom knowledge, hands-on exposure, certifications, coding practice, projects, and placement support, SCSE prepares learners to become job-ready professionals.
              </p>
              <p style={{ color: "#4A5568", lineHeight: 1.8 }}>
                The school emphasizes learning by doing — from AI labs and cloud labs to cybersecurity simulations and competitive coding environments — ensuring graduates are ready to contribute from day one.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[["🎓", "Expert Faculty", "Academic leaders + Professors of Practice from IIT, IIM & industry"], ["🏭", "Industry Curriculum", "Collaborations with HCL, Coding Blocks, Samatrix and global tech leaders"], ["🧪", "Applied Labs", "AI, IoT, Cloud, Cybersecurity, Coding Labs & Innovation Spaces"], ["🌍", "Global Certifications", "AWS, Azure, Cisco, Oracle, Red Hat, EC-Council and more"]].map(([icon, title, desc]) => (
                <div key={title} style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 12, padding: "20px 16px", borderTop: "3px solid #E8871A" }}>
                  <div style={{ fontSize: 24, marginBottom: 8 }}>{icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#0A1F44", marginBottom: 6 }}>{title}</div>
                  <div style={{ fontSize: 12, color: "#64748B", lineHeight: 1.5 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROGRAMS ──────────────────────────────────────────────────────── */}
        <section id="Programs" style={{ padding: "48px 0" }}>
          <span style={{ color: "#E8871A", fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: "uppercase" }}>Academic Offerings</span>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "#0A1F44", margin: "8px 0 32px" }}>Programs Offered</h2>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
            {PROGRAMS.map((p, i) => (
              <button key={i} onClick={() => setActiveProgram(i)}
                style={{ padding: "8px 18px", borderRadius: 20, border: "2px solid", borderColor: activeProgram === i ? "#0A1F44" : "#E2E8F0", background: activeProgram === i ? "#0A1F44" : "white", color: activeProgram === i ? "white" : "#4A5568", fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.2s" }}>
                {p.level} {p.name !== p.level ? p.name : ""}
              </button>
            ))}
          </div>

          {PROGRAMS[activeProgram] && (
            <div style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 24px rgba(10,31,68,0.08)" }}>
              <div style={{ background: "#0A1F44", padding: "24px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                <div>
                  <div style={{ color: "#E8871A", fontSize: 12, fontWeight: 700, letterSpacing: 1, marginBottom: 4 }}>{PROGRAMS[activeProgram].level}</div>
                  <h3 style={{ color: "white", fontSize: 22, fontWeight: 800, margin: 0 }}>{PROGRAMS[activeProgram].name}</h3>
                </div>
                <div style={{ display: "flex", gap: 16 }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ color: "#E8871A", fontWeight: 800, fontSize: 20 }}>{PROGRAMS[activeProgram].duration}</div>
                    <div style={{ color: "#94A3B8", fontSize: 11 }}>Duration</div>
                  </div>
                </div>
              </div>
              <div style={{ padding: "28px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="program-details-grid">
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: "#0A1F44", marginBottom: 12, textTransform: "uppercase", letterSpacing: 1 }}>Specializations</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {PROGRAMS[activeProgram].specializations.map((s) => (
                      <span key={s} style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: 12, padding: "5px 12px", borderRadius: 20, fontWeight: 500 }}>{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: "#0A1F44", marginBottom: 12, textTransform: "uppercase", letterSpacing: 1 }}>Eligibility</div>
                  <p style={{ color: "#4A5568", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{PROGRAMS[activeProgram].eligibility}</p>
                  <a href="https://admissions.geetauniversity.edu.in/" target="_blank" rel="noreferrer"
                    style={{ display: "inline-block", marginTop: 16, background: "#E8871A", color: "white", padding: "10px 22px", borderRadius: 6, fontSize: 13, fontWeight: 700, textDecoration: "none" }}>
                    Apply for this Program →
                  </a>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* ── SPECIALIZATIONS ───────────────────────────────────────────────── */}
        <section style={{ padding: "48px 0" }}>
          <span style={{ color: "#E8871A", fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: "uppercase" }}>New Age Learning</span>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "#0A1F44", margin: "8px 0 32px" }}>Specializations</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {SPECIALIZATIONS.map((s) => (
              <div key={s.title} style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 12, padding: "24px", transition: "box-shadow 0.2s, transform 0.2s", cursor: "default" }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(10,31,68,0.12)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{s.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0A1F44", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── HIGHLIGHTS ────────────────────────────────────────────────────── */}
        <section id="Highlights" style={{ padding: "48px 0" }}>
          <div style={{ background: "#0A1F44", borderRadius: 20, padding: "48px 40px", color: "white" }}>
            <span style={{ color: "#E8871A", fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: "uppercase" }}>Department in Numbers</span>
            <h2 style={{ fontSize: 28, fontWeight: 800, margin: "8px 0 32px" }}>SCSE Highlights</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 24, marginBottom: 40 }} className="highlights-grid">
              {HIGHLIGHTS.map(({ stat, label }) => (
                <div key={label} style={{ textAlign: "center", borderRight: "1px solid #1A3A6B" }} className="highlight-item">
                  <div style={{ fontSize: 36, fontWeight: 800, color: "#E8871A" }}>{stat}</div>
                  <div style={{ fontSize: 13, color: "#94A3B8", marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
              {[["🏆 Hackforge '25", "24-hour tech marathon — coding, innovation, teamwork, mentor-guided problem solving."], ["🎖 SIH 2024 Finalists", "Students participated as Smart India Hackathon 2024 Finalists."], ["🛡 Cybersecurity Awareness", "Hosted by Geeta Technical Hub for students and the wider campus."], ["💻 DSA & Competitive Coding", "Logic building, problem-solving, advanced algorithms, and competitive programming tracks."]].map(([title, desc]) => (
                <div key={title} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid #1A3A6B", borderRadius: 10, padding: 20 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{title}</div>
                  <div style={{ fontSize: 12, color: "#94A3B8", lineHeight: 1.6 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CERTIFICATIONS / GTH ──────────────────────────────────────────── */}
        <section id="Certifications" style={{ padding: "48px 0" }}>
          <span style={{ color: "#E8871A", fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: "uppercase" }}>Centre of Excellence</span>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "#0A1F44", margin: "8px 0 8px" }}>Geeta Technical Hub (GTH)</h2>
          <p style={{ color: "#64748B", marginBottom: 32, maxWidth: 600 }}>GTH powers technical excellence through certification tracks, coding ecosystems, and industry-readiness programs.</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 32 }}>
            {[{ title: "Certification Tracks", items: ["AWS", "Azure", "Oracle", "Cisco", "Red Hat Academy", "EC-Council Academia", "GitHub", "HubSpot"] }, { title: "Coding Excellence", items: ["DSA & Data Structures", "Competitive Programming", "Logic Building", "Coding Platforms"] }, { title: "Drive-Ready Tech Tracks", items: ["MEAN/MERN Stack", "PHP & MySQL", "Python Development", "Cyber Security Fundamentals", "Artificial Intelligence", "Machine Learning"] }].map(({ title, items }) => (
              <div key={title} style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 12, padding: "24px" }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: "#0A1F44", marginBottom: 16, borderBottom: "2px solid #E8871A", paddingBottom: 8 }}>{title}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {items.map(item => (
                    <span key={item} style={{ background: "#F0F4FF", color: "#1A3A6B", fontSize: 12, padding: "4px 10px", borderRadius: 16, fontWeight: 500 }}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: "#0A1F44", marginBottom: 14 }}>All Partner Organizations & Platforms</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {CERTIFICATIONS.map(c => (
                <span key={c} style={{ background: "white", border: "1px solid #E2E8F0", color: "#334155", fontSize: 12, padding: "6px 14px", borderRadius: 20, fontWeight: 600 }}>{c}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── FACULTY ───────────────────────────────────────────────────────── */}
        <section id="Faculty" style={{ padding: "48px 0" }}>
          <span style={{ color: "#E8871A", fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: "uppercase" }}>Academic Leadership</span>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "#0A1F44", margin: "8px 0 32px" }}>Faculty & Leadership</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {FACULTY.map((f) => {
              const initials = f.name.split(" ").map(w => w[0]).slice(0, 2).join("");
              return (
                <div key={f.name} style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 12, padding: "24px", display: "flex", gap: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#0A1F44", color: "#E8871A", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 14, flexShrink: 0 }}>{initials}</div>
                  <div>
                    <div style={{ marginBottom: 4 }}>
                      <span style={{ fontWeight: 700, fontSize: 14, color: "#0A1F44" }}>{f.name}</span>
                    </div>
                    <div style={{ fontSize: 12, color: "#E8871A", fontWeight: 600, marginBottom: 6 }}>{f.role}</div>
                    <p style={{ fontSize: 12, color: "#64748B", lineHeight: 1.5, margin: 0 }}>{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── PLACEMENTS ────────────────────────────────────────────────────── */}
        <section id="Placements" style={{ padding: "48px 0" }}>
          <span style={{ color: "#E8871A", fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: "uppercase" }}>Campus to Corporate</span>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "#0A1F44", margin: "8px 0 12px" }}>Placement Success Stories</h2>
          <p style={{ color: "#64748B", marginBottom: 32, fontSize: 14 }}>* Package figures are from official SCSE brochure and university placement communications.</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {TESTIMONIALS.map((t) => {
              const initials = t.name.split(" ").map(w => w[0]).slice(0, 2).join("");
              return (
                <div key={t.name} style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 12, padding: "24px", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, #0A1F44, #E8871A)" }} />
                  <div style={{ fontSize: 36, color: "#E8871A", fontWeight: 800, lineHeight: 1, marginBottom: 12 }}>"</div>
                  <p style={{ fontSize: 13, color: "#4A5568", lineHeight: 1.7, marginBottom: 20 }}>{t.quote}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#0A1F44", color: "#E8871A", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 12 }}>{initials}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 13, color: "#0A1F44" }}>{t.name}</div>
                      <div style={{ fontSize: 11, color: "#64748B" }}>{t.company} · {t.role}</div>
                    </div>
                    <div style={{ marginLeft: "auto", background: "#FEF3C7", color: "#92400E", fontSize: 11, fontWeight: 800, padding: "4px 10px", borderRadius: 20 }}>{t.pkg}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Top Recruiters */}
          <div style={{ marginTop: 40 }}>
            <div style={{ fontWeight: 700, fontSize: 15, color: "#0A1F44", marginBottom: 16 }}>Top Recruiters (SCSE)</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {["Cincooni Systems", "Kerakoll India", "Tenhard India", "Edu-Versity", "Academor Edutech", "Hoping Minds", "Chegg India", "Profunnel Technology", "Hike Education", "Centricity Wealth Tech", "PayU Payments", "Thales", "Tech Mahindra", "Ernst & Young", "Wabtec Corp"].map(r => (
                <span key={r} style={{ background: "#F7F9FC", border: "1px solid #E2E8F0", color: "#334155", fontSize: 12, padding: "6px 14px", borderRadius: 6, fontWeight: 500 }}>{r}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── CAREER PATHWAYS ───────────────────────────────────────────────── */}
        <section style={{ padding: "48px 0" }}>
          <span style={{ color: "#E8871A", fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: "uppercase" }}>After Graduation</span>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "#0A1F44", margin: "8px 0 32px" }}>Career Pathways</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {["Software Developer", "Full Stack Developer", "App Developer", "Data Scientist", "AI Engineer", "ML Engineer", "Cybersecurity Analyst", "Cloud Architect", "Systems Engineer", "Product Engineer", "Researcher", "Entrepreneur", "Web Developer", "DevOps Engineer", "UI/UX Developer"].map(role => (
              <span key={role} style={{ background: "white", border: "2px solid #E2E8F0", color: "#1A3A6B", fontSize: 13, padding: "10px 18px", borderRadius: 8, fontWeight: 600, transition: "border-color 0.2s", cursor: "default" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "#E8871A"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "#E2E8F0"}>
                {role}
              </span>
            ))}
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────────── */}
        <section id="FAQ" style={{ padding: "48px 0 64px" }}>
          <span style={{ color: "#E8871A", fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: "uppercase" }}>Common Questions</span>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "#0A1F44", margin: "8px 0 32px" }}>Frequently Asked Questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 800 }}>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: 10, overflow: "hidden" }}>
                <button onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  style={{ width: "100%", padding: "18px 20px", background: "none", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", textAlign: "left", gap: 16 }}>
                  <span style={{ fontWeight: 600, fontSize: 14, color: "#0A1F44" }}>{faq.q}</span>
                  <span style={{ color: "#E8871A", fontSize: 20, transform: expandedFaq === i ? "rotate(45deg)" : "none", transition: "transform 0.2s", flexShrink: 0 }}>+</span>
                </button>
                {expandedFaq === i && (
                  <div style={{ padding: "0 20px 18px", fontSize: 14, color: "#4A5568", lineHeight: 1.7 }}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ── CTA FOOTER BAND ─────────────────────────────────────────────────── */}
      <section style={{ background: "#E8871A", padding: "48px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: "white", margin: "0 0 12px" }}>Ready to Join SCSE at Geeta University?</h2>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 15, marginBottom: 28 }}>Admissions Open for Session 2026–27 · Apply now or download the brochure for more details.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://admissions.geetauniversity.edu.in/" target="_blank" rel="noreferrer"
            style={{ background: "#0A1F44", color: "white", padding: "14px 32px", borderRadius: 6, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
            Apply Now →
          </a>
          <button style={{ background: "white", color: "#E8871A", border: "none", padding: "14px 28px", borderRadius: 6, fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
            Download Brochure
          </button>
          <a href="https://geetauniversity.edu.in/contact-us" target="_blank" rel="noreferrer"
            style={{ background: "transparent", border: "2px solid white", color: "white", padding: "14px 24px", borderRadius: 6, fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
            Contact Admissions
          </a>
        </div>
      </section>

      {/* ── PAGE FOOTER ─────────────────────────────────────────────────────── */}
      <footer style={{ background: "#0A1F44", color: "#94A3B8", padding: "24px", textAlign: "center", fontSize: 12 }}>
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
