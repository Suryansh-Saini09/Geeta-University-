"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesColumnIncreasing,
  GraduationCap,
  HardHat,
  PieChart,
  TrendingUp,
  Users,
  Check,
  CheckCircle2,
  WalletCards,
  BrainCircuit,
  Megaphone,
  Globe2,
  Lightbulb,
  BookOpenCheck,
  Landmark,
  Target,
  UsersRound,
  Phone,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import CommerceProgramsSection from "../../../components/sections/CommerceProgramsSection";


type ExpertCategory = {
  number: number;
  title: string;
  subtitle: string;
  points: string[];
  icon: LucideIcon;
  ribbon: string;
};

const categories: ExpertCategory[] = [
  {
    number: 1,
    title: "Core Business Faculty",
    subtitle: "Building Strong Management Foundations",
    points: [
      "Experienced academicians and researchers",
      "Management, Finance, Marketing & HR Experts",
      "Industry-aligned, case-based learning",
      "Academic and career mentoring",
    ],
    icon: TrendingUp,
    ribbon: "#0A1F44",
  },
  {
    number: 2,
    title: "Interdisciplinary Faculty",
    subtitle: "Learning Beyond Business",
    points: [
      "Faculty from diverse disciplines",
      "Exposure to Psychology, Technology & Design Thinking",
      "Cross-functional problem-solving approach",
      "Broader perspective for modern business challenges",
    ],
    icon: Users,
    ribbon: "#0F2A56",
  },
  {
    number: 3,
    title: "Geeta Technical Hub (GTH)",
    subtitle: "Future-Ready Technical Skills",
    points: [
      "Hands-on workshops and live projects",
      "AI & Generative AI applications",
      "Excel, Data Analytics & Power BI",
      "Digital Marketing and Automation Tools",
    ],
    icon: GraduationCap,
    ribbon: "#1B4B8F",
  },
  {
    number: 4,
    title: "Geeta Finishing School",
    subtitle: "Career Readiness & Professional Development",
    points: [
      "Communication and business etiquette",
      "Aptitude and analytical skills",
      "Personality development and confidence building",
      "Interview and placement preparation",
    ],
    icon: BookOpen,
    ribbon: "#2E63B8",
  },
  {
    number: 5,
    title: "Industry Practitioners",
    subtitle: "Learning Directly from Industry",
    points: [
      "Corporate leaders and domain experts",
      "Industry-aligned, skill-based learning",
      "Entrepreneurship and family business insights",
      "Data Analytics, Python & Digital Marketing",
    ],
    icon: HardHat,
    ribbon: "#5B8FD9",
  },
];

const placementStats = [
  { value: "40 LPA", label: "Highest Package", icon: Award },
  { value: "550+", label: "Recruiters", icon: Building2 },
  { value: "3500+", label: "Job Offers", icon: BriefcaseBusiness },
];

const recruiters = [
  { name: "amazon", color: "#232f3e", logo: "/images/recruiters/amazon.png" },
  { name: "IndiaMART", color: "#1b2b66", logo: "/images/recruiters/indiamart.png" },
  { name: "upGrad", color: "#ef3340", logo: "/images/recruiters/upgrad.png" },
  { name: "zomato", color: "#e23744", logo: "/images/recruiters/zomato.png" },
  { name: "ProGrad", color: "#1c6dd0", logo: "/images/recruiters/prograd.png" },
  { name: "PHILIPS", color: "#1476bd", logo: "/images/recruiters/philips.png" },
  { name: "Central Park", color: "#d6a800", logo: "/images/recruiters/central-park.png" },
  { name: "Profunnel", color: "#168acb", logo: null },
  { name: "Ubiquiti", color: "#5b6978", logo: "/images/recruiters/ubiquiti.png" },
  { name: "Gemini Solutions", color: "#a83cb6", logo: "/images/recruiters/gemini-solutions.png" },
  { name: "Chegg", color: "#ef6c00", logo: "/images/recruiters/chegg.png" },
  { name: "jaro education", color: "#5c6b7a", logo: "/images/recruiters/jaro-education.png" },
  { name: "policybazaar", color: "#2b66c2", logo: "/images/recruiters/policybazaar.png" },
  { name: "Aditya Birla Capital", color: "#c4242d", logo: "/images/recruiters/aditya-birla-capital.png" },
  { name: "Axis Bank", color: "#9d245d", logo: null },
  { name: "HDFC Life", color: "#d71f26", logo: "/images/recruiters/hdfc-life.png" },
  { name: "paytm", color: "#1d4f9a", logo: "/images/recruiters/paytm.png" },
  { name: "Bajaj Capital", color: "#e32126", logo: "/images/recruiters/bajaj-capital.png" },
];

const packageBars = [
  { label: "Upto 4 LPA", value: 153, width: "100%" },
  { label: "₹4-6 LPA", value: 65, width: "42%" },
  { label: "₹6-8 LPA", value: 31, width: "20%" },
  { label: "₹8-10 LPA", value: 31, width: "20%" },
];

const sectorLegend = [
  { label: "Sales & Marketing", value: "42.3%", color: "#f2ad00" },
  { label: "HR & Operations", value: "16.4%", color: "#ef6a22" },
  { label: "IT & Software", value: "13.2%", color: "#ef2856" },
  { label: "Core Engineering", value: "10.0%", color: "#df4ab3" },
  { label: "Finance & Accounting", value: "8.9%", color: "#25aee4" },
  { label: "Others", value: "3.2%", color: "#16b6bf" },
  { label: "Digital Marketing", value: "2.8%", color: "#74c84a" },
  { label: "Healthcare Consulting", value: "2.1%", color: "#f0cf1c" },
  { label: "Education", value: "1.1%", color: "#f5a623" },
];

function ExpertCard({ category }: { category: ExpertCategory }) {
  const Icon = category.icon;
  const formattedNumber = category.number.toString().padStart(2, "0");

  return (
    <article className="expert-card group">
      <div className="expert-card-topline" style={{ backgroundColor: category.ribbon }} />
      <div className="expert-card-header">
        <div className="expert-card-icon">
          <Icon className="w-[20px] h-[20px]" strokeWidth={2} />
        </div>
        <span className="expert-card-number">{formattedNumber}</span>
      </div>
      <div className="expert-card-copy">
        <h3>{category.title}</h3>
        <p>{category.subtitle}</p>
      </div>
      <ul>
        {category.points.map((point: string, i: number) => (
          <li key={i}>
            <Check className="w-[14px] h-[14px]" strokeWidth={3} />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

const mentorsData = [
  { name: "Ms. Anjali Ahuja", designation: "Faculty Member", description: "Dedicated to academic excellence and student mentorship in business studies.", image: "/bba faulty/Anjali.webp" },
  { name: "Dr. Anupama", designation: "Faculty Member", description: "Specializes in modern business practices and organizational behavior.", image: "/bba faulty/Anupama.webp" },
  { name: "Ms. Indu Aggarwal", designation: "Faculty Member", description: "Expert in strategic management and corporate governance.", image: "/bba faulty/Indu.webp" },
  { name: "Dr. Neeraj Rana", designation: "Faculty Member", description: "Focuses on operations management and business analytics.", image: "/bba faulty/Neeraj Rana.webp" },
  { name: "Parul S. Ghangas", designation: "Faculty Member", description: "Experienced in consumer behavior and market research methodologies.", image: "/bba faulty/Parul.webp" },
  { name: "Dr. Pooja Gupta", designation: "Faculty Member", description: "Brings extensive industry experience to classroom learning.", image: "/bba faulty/Pooja-Gupta.webp" },
  { name: "Dr. Poonam", designation: "Faculty Member", description: "Passionate about entrepreneurship and innovation in business.", image: "/bba faulty/Poonam.webp" },
  { name: "Mr. Sanjay Aggarwal", designation: "Faculty Member", description: "Specializes in financial accounting and corporate finance.", image: "/bba faulty/Sanjay.webp" },
  { name: "Ms. Shivani Taya", designation: "Faculty Member", description: "Focuses on human resource management and talent acquisition.", image: "/bba faulty/Shivani.webp" },
  { name: "Mr. Anil Kumar Shahi", designation: "Faculty Member", description: "Expert in international business and global supply chain.", image: "/bba faulty/anil.webp" },
  { name: "Ms. Arpana Mutt", designation: "Faculty Member", description: "Dedicated to research in behavioral economics and public policy.", image: "/bba faulty/arpana.webp" },
  { name: "Dr. Ashutosh Srivastav", designation: "Faculty Member", description: "Specializes in digital marketing and e-commerce strategies.", image: "/bba faulty/ashutosh.webp" },
  { name: "Ms. Divya", designation: "Faculty Member", description: "Brings expertise in brand management and retail marketing.", image: "/bba faulty/divya.webp" },
  { name: "Mr. Harkamal", designation: "Faculty Member", description: "Focuses on leadership development and organizational change.", image: "/bba faulty/harmangat.webp" },
  { name: "Mr. Karan", designation: "Faculty Member", description: "Expert in investment analysis and portfolio management.", image: "/bba faulty/karan.webp" },
  { name: "Mr. Manish", designation: "Faculty Member", description: "Specializes in strategic human resource management.", image: "/bba faulty/manish.webp" },
  { name: "Dr. Neha", designation: "Faculty Member", description: "Dedicated to advancing research in sustainable business practices.", image: "/bba faulty/neha.webp" },
  { name: "Dr. Nidhi Gehlawat", designation: "Faculty Member", description: "Focuses on corporate law and business ethics.", image: "/bba faulty/nidhi g.webp" },
  { name: "Dr. Nidhi Gupta", designation: "Faculty Member", description: "Expert in organizational psychology and team dynamics.", image: "/bba faulty/nidhi gupta.webp" },
  { name: "Ms. Prerna", designation: "Faculty Member", description: "Specializes in service marketing and customer relationship management.", image: "/bba faulty/prerna.webp" },
  { name: "Dr. Rekha Narang", designation: "Faculty Member", description: "Brings deep knowledge in financial modeling and risk management.", image: "/bba faulty/rekha.webp" },
  { name: "Dr. Sangeeta", designation: "Faculty Member", description: "Focuses on cross-cultural management and diversity.", image: "/bba faulty/sangeeta.webp" },
  { name: "Dr. Vivek", designation: "Faculty Member", description: "Expert in business intelligence and data-driven decision making.", image: "/bba faulty/vivek .webp" },
];

function MeetOurMentorsSection() {
  const [currentIndex, setCurrentIndex] = React.useState(4); // Start at real first slide
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [translationAmount, setTranslationAmount] = React.useState(0);
  
  const trackRef = React.useRef<HTMLDivElement>(null);
  const viewportRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const updateWidth = () => {
      if (viewportRef.current) {
        // Use mathematically perfect translation distance to avoid sub-pixel rounding errors
        const vwWidth = viewportRef.current.getBoundingClientRect().width;
        let cardW = 0;
        const gap = 30;
        if (window.innerWidth >= 1024) {
          cardW = (vwWidth - 90) / 4;
        } else if (window.innerWidth >= 768) {
          cardW = (vwWidth - 30) / 2;
        } else {
          cardW = vwWidth;
        }
        setTranslationAmount(cardW + gap);
      }
    };
    updateWidth();
    const timer = setTimeout(updateWidth, 150);
    window.addEventListener('resize', updateWidth);
    return () => {
      window.removeEventListener('resize', updateWidth);
      clearTimeout(timer);
    };
  }, []);

  const extendedMentors = [
    ...mentorsData.slice(-4),
    ...mentorsData,
    ...mentorsData.slice(0, 4)
  ];

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (!trackRef.current) return;
    
    // Genuine infinite loop reset seamlessly
    if (currentIndex >= mentorsData.length + 4) {
      trackRef.current.style.transition = 'none';
      setCurrentIndex(currentIndex - mentorsData.length);
      void trackRef.current.offsetHeight; // Force reflow
    } else if (currentIndex <= 3) {
      trackRef.current.style.transition = 'none';
      setCurrentIndex(currentIndex + mentorsData.length);
      void trackRef.current.offsetHeight; // Force reflow
    }
  };

  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) handleNext();
    if (touchStart - touchEnd < -50) handlePrev();
  };

  const transformStyle = {
    transform: `translate3d(-${currentIndex * translationAmount}px, 0, 0)`,
    transition: isTransitioning ? 'transform 0.3s ease' : 'none',
    opacity: translationAmount > 0 ? 1 : 0
  };

  return (
    <section className="scbm-mentors-section">
      <style>{`
        .scbm-mentors-section {
          width: 100%;
          padding: 80px 0;
          background-color: #FFFFFF;
        }
        .scbm-mentors-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding-left: 40px;
          padding-right: 40px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .mentors-slider-wrapper {
          width: 100%;
          position: relative;
          margin-top: 48px;
        }
        .mentors-slider-viewport {
          width: 100%;
          overflow: hidden;
          position: relative;
          box-sizing: border-box;
        }
        .mentors-slider-track {
          display: flex;
          flex-wrap: nowrap;
          gap: 30px;
          align-items: stretch;
        }
        .mentor-card-slide {
          flex: 0 0 calc((100% - 90px) / 4);
          min-width: 0;
          box-sizing: border-box;
        }
        
        .mentor-card-inner {
          width: 100%;
          height: 100%;
          background: #FFFFFF;
          border-radius: 18px;
          border: 1px solid rgba(15,45,82,0.06);
          box-shadow: 0 4px 24px rgba(15,45,82,0.04);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        
        .mentor-image-container {
          width: 100%;
          height: 330px;
          position: relative;
        }
        .mentor-image-container img {
          width: 100%;
          height: 330px;
          object-fit: cover;
          object-position: top center;
        }
        
        .mentor-content-area {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        
        .slider-arrow-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0F2D52;
          transition: all 0.3s ease;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          cursor: pointer;
        }
        .slider-arrow-btn:hover {
          background: #A32020;
          color: #FFFFFF;
          border-color: #A32020;
        }
        .arrow-prev {
          left: -24px;
        }
        .arrow-next {
          right: -24px;
        }
        
        .mentor-desc {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1023px) and (min-width: 768px) {
          .mentor-card-slide {
            flex: 0 0 calc((100% - 30px) / 2);
          }
        }
        @media (max-width: 767px) {
          .scbm-mentors-container {
            padding-left: 20px;
            padding-right: 20px;
          }
          .mentor-card-slide {
            flex: 0 0 100%;
          }
          .mentor-image-container, .mentor-image-container img {
            height: 280px;
          }
          .slider-arrow-btn {
            width: 42px;
            height: 42px;
          }
          .arrow-prev { left: -10px; }
          .arrow-next { right: -10px; }
        }
      `}</style>
      
      <div className="scbm-mentors-container">
        
        {/* Heading Area */}
        <div className="flex flex-col items-center text-center w-full">
          <h3 className="text-[#A32020] text-center font-[700] uppercase mb-[16px]" style={{ fontSize: "14px", letterSpacing: "2.5px" }}>
            EXPERT FACULTY
          </h3>
          <h2 className="text-[#0F2D52] text-center font-[800] mb-[24px]" style={{ fontSize: "32px", fontFamily: "'Zilla Slab', serif", lineHeight: 1.1 }}>
            Meet Our Mentors
          </h2>
          <div className="flex items-center justify-center gap-[6px]" style={{ width: "120px" }}>
            <div className="h-[1px] flex-1 bg-[#D89A2B]" />
            <div className="w-[8px] h-[8px] rotate-45 bg-[#D89A2B] shrink-0" />
            <div className="h-[1px] flex-1 bg-[#D89A2B]" />
          </div>
        </div>

        {/* Carousel DOM Structure */}
        <div className="mentors-slider-wrapper">
          
          <button 
            className="slider-arrow-btn arrow-prev"
            onClick={handlePrev}
            aria-label="Previous faculty"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          <div 
            className="mentors-slider-viewport"
            ref={viewportRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="mentors-slider-track"
              ref={trackRef}
              style={transformStyle}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedMentors.map((mentor, idx) => (
                <div key={idx} className="mentor-card-slide">
                  <div className="mentor-card-inner">
                    
                    <div className="mentor-image-container">
                      <Image 
                        src={mentor.image} 
                        alt={mentor.name} 
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, (max-width: 991px) 50vw, 33vw"
                      />
                    </div>
                    
                    <div className="mentor-content-area">
                      <h3 className="font-['Zilla_Slab',serif] text-[#0F2D52] font-[700] text-[24px] leading-[30px] mb-[4px]">
                        {mentor.name}
                      </h3>
                      <p className="text-[#A32020] font-[600] text-[16px] mb-[8px]">
                        {mentor.designation}
                      </p>
                      <p className="font-['Source_Sans_Pro',sans-serif] text-[#4B5870] font-[500] text-[16px] leading-[1.6] mentor-desc">
                        {mentor.description}
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="slider-arrow-btn arrow-next"
            onClick={handleNext}
            aria-label="Next faculty"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>

        </div>

      </div>
    </section>
  );
}

function PlacementExcellenceSection() {
  return (
    <section id="PlacementExcellence" className="placement-page">
      <style>{`
        .placement-page {
          --placement-navy: #0F2D52;
          --placement-blue: #1E4E8C;
          --placement-gold: #D89A2B;
          --placement-bg: #F8FAFC;
          --placement-white: #FFFFFF;
          --placement-border: #E8EDF4;
          --placement-text: #1B2B45;
          --placement-muted: #5E6B82;
          background: var(--placement-white);
          color: var(--placement-text);
          font-family: 'Source Sans 3', sans-serif;
        }
        .placement-container {
          width: min(1280px, calc(100% - 48px));
          margin: 0 auto;
        }
        .placement-section {
          padding: 100px 0;
        }
        .placement-eyebrow {
          color: var(--placement-gold);
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.2em;
          line-height: 1;
          text-transform: uppercase;
        }
        .placement-eyebrow::before {
          content: "";
          width: 34px;
          height: 2px;
          border-radius: 999px;
          background: var(--placement-gold);
        }
        .placement-hero {
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(90deg, rgba(15,45,82,0.035) 1px, transparent 1px),
            linear-gradient(rgba(15,45,82,0.035) 1px, transparent 1px),
            var(--placement-white);
          background-size: 48px 48px;
          padding: 110px 0 100px;
        }
        .placement-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(420px, 0.9fr);
          align-items: center;
          gap: 72px;
        }
        .placement-hero h2 {
          margin: 22px 0 0;
          max-width: 760px;
          color: var(--placement-navy);
          font-size: clamp(42px, 5vw, 64px);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.02;
        }
        .placement-hero h2 span {
          color: var(--placement-blue);
        }
        .placement-hero-copy {
          max-width: 820px;
        }
        .placement-hero-copy p {
          max-width: 720px;
          margin-top: 26px;
          color: var(--placement-muted);
          font-size: 18px;
          font-weight: 500;
          line-height: 1.7;
        }
        .placement-hero-visual {
          position: relative;
        }
        .placement-image-frame {
          position: relative;
          overflow: hidden;
          min-height: 460px;
          border: 1px solid var(--placement-border);
          border-radius: 28px;
          background: var(--placement-bg);
          box-shadow: 0 24px 70px rgba(15, 45, 82, 0.12);
        }
        .placement-image-frame::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 42%, rgba(15,45,82,0.56));
        }
        .placement-hero-note {
          position: absolute;
          right: 28px;
          bottom: 28px;
          z-index: 2;
          max-width: 270px;
          border: 1px solid rgba(255,255,255,0.24);
          border-radius: 20px;
          background: rgba(255,255,255,0.92);
          padding: 22px;
          box-shadow: 0 18px 45px rgba(15, 45, 82, 0.16);
          backdrop-filter: blur(14px);
        }
        .placement-hero-note strong {
          display: block;
          color: var(--placement-navy);
          font-size: 16px;
          font-weight: 800;
          line-height: 1.25;
        }
        .placement-hero-note span {
          display: block;
          margin-top: 8px;
          color: var(--placement-muted);
          font-size: 13px;
          font-weight: 600;
          line-height: 1.55;
        }
        .placement-section-head {
          max-width: 760px;
          margin: 0 auto 48px;
          text-align: center;
        }
        .placement-section-head h3 {
          margin-top: 14px;
          color: var(--placement-navy);
          font-size: clamp(32px, 4vw, 40px);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.12;
        }
        .placement-section-head p {
          margin: 18px auto 0;
          color: var(--placement-muted);
          font-size: 18px;
          font-weight: 500;
          line-height: 1.7;
        }
        .placement-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 28px;
        }
        .placement-stat-card {
          position: relative;
          overflow: hidden;
          min-height: 270px;
          border: 1px solid var(--placement-border);
          border-radius: 22px;
          background: var(--placement-white);
          padding: 42px;
          box-shadow: 0 10px 30px rgba(15,45,82,.08);
          transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease;
        }
        .placement-stat-card:hover,
        .placement-premium-card:hover {
          transform: translateY(-8px);
          border-color: rgba(216, 154, 43, 0.55);
          box-shadow: 0 18px 40px rgba(15,45,82,.12);
        }
        .placement-stat-icon {
          display: flex;
          width: 54px;
          height: 54px;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          color: var(--placement-white);
          background: linear-gradient(135deg,#0F2D52,#1E4E8C);
          box-shadow: 0 12px 26px rgba(15,45,82,.18);
        }
        .placement-stat-number {
          margin-top: 42px;
          color: var(--placement-navy);
          font-size: clamp(44px, 4.6vw, 58px);
          font-weight: 800;
          letter-spacing: -0.045em;
          line-height: 0.95;
        }
        .placement-stat-label {
          margin-top: 14px;
          color: var(--placement-muted);
          font-size: 16px;
          font-weight: 700;
        }
        .placement-stat-bg {
          position: absolute;
          right: 28px;
          bottom: 16px;
          color: rgba(15,45,82,.055);
          font-size: 112px;
          font-weight: 900;
          letter-spacing: -0.08em;
          line-height: 1;
        }
        .placement-recruiters-wrap {
          background: var(--placement-bg);
        }
        .placement-recruiter-grid {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 18px;
        }
        .placement-recruiter-card {
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--placement-border);
          border-radius: 18px;
          background: var(--placement-white);
          padding: 20px;
          transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease;
        }
        .placement-recruiter-name {
          color: var(--brand-color);
          font-size: 18px;
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1;
          text-align: center;
        }
        .placement-analytics-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
          gap: 32px;
          align-items: stretch;
        }
        .placement-premium-card {
          border: 1px solid var(--placement-border);
          border-radius: 24px;
          background: var(--placement-white);
          padding: 42px;
          box-shadow: 0 10px 30px rgba(15,45,82,.08);
          transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease;
        }
        .placement-card-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--placement-gold);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.18em;
          line-height: 1;
          text-transform: uppercase;
        }
        .placement-premium-card h3 {
          margin-top: 18px;
          color: var(--placement-navy);
          font-size: clamp(28px, 3vw, 40px);
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 1.12;
        }
        .placement-price {
          margin-top: 26px;
          color: var(--placement-blue);
          font-size: clamp(46px, 5vw, 64px);
          font-weight: 800;
          letter-spacing: -0.05em;
          line-height: 1;
        }
        .placement-card-copy {
          margin-top: 22px;
          color: var(--placement-muted);
          font-size: 17px;
          font-weight: 500;
          line-height: 1.7;
        }
        .placement-bars {
          display: grid;
          gap: 20px;
          margin-top: 38px;
        }
        .placement-bar-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          margin-bottom: 10px;
          color: var(--placement-text);
          font-size: 14px;
          font-weight: 800;
        }
        .placement-bar-track {
          height: 14px;
          overflow: hidden;
          border-radius: 999px;
          background: #EEF3F8;
        }
        .placement-bar-fill {
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(135deg,#0F2D52,#1E4E8C);
        }
        .placement-disclaimer {
          margin-top: 34px;
          border-radius: 18px;
          background: var(--placement-bg);
          padding: 18px 20px;
          color: var(--placement-muted);
          font-size: 13px;
          font-style: italic;
          font-weight: 600;
          line-height: 1.7;
        }
        .placement-sector-card {
          background: linear-gradient(135deg,#0F2D52,#1E4E8C);
          color: var(--placement-white);
        }
        .placement-sector-card h3 {
          color: var(--placement-white);
        }
        .placement-sector-card .placement-card-copy,
        .placement-sector-card .placement-card-kicker {
          color: rgba(255,255,255,.72);
        }
        .placement-sector-layout {
          display: grid;
          grid-template-columns: minmax(220px, 0.9fr) minmax(0, 1fr);
          gap: 34px;
          align-items: center;
          margin-top: 36px;
        }
        .placement-pie {
          position: relative;
          width: min(100%, 310px);
          aspect-ratio: 1;
          margin: 0 auto;
          border-radius: 50%;
          background: conic-gradient(#f2ad00 0 42.3%, #ef6a22 42.3% 58.7%, #ef2856 58.7% 71.9%, #df4ab3 71.9% 81.9%, #25aee4 81.9% 90.8%, #16b6bf 90.8% 94%, #74c84a 94% 96.8%, #f0cf1c 96.8% 98.9%, #f5a623 98.9% 100%);
          box-shadow: 0 24px 52px rgba(0,0,0,.22);
        }
        .placement-pie::after {
          content: "42.3%";
          position: absolute;
          inset: 28%;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--placement-navy);
          color: var(--placement-white);
          font-size: 32px;
          font-weight: 800;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,.12);
        }
        .placement-sector-legend {
          display: grid;
          gap: 20px;
        }
        .placement-legend-row {
          display: grid;
          grid-template-columns: 12px minmax(0, 1fr) auto;
          align-items: center;
          gap: 14px;
          color: rgba(255,255,255,.86);
          font-size: 14px;
          font-weight: 700;
        }
        .placement-legend-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--sector-color);
        }
        .placement-legend-value {
          color: var(--placement-white);
          font-weight: 800;
        }
        @media (max-width: 1024px) {
          .placement-section {
            padding: 70px 0;
          }
          .placement-hero {
            padding: 80px 0 70px;
          }
          .placement-hero-grid,
          .placement-analytics-grid {
            grid-template-columns: 1fr;
          }
          .placement-stats-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
          .placement-recruiter-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
          .placement-image-frame {
            min-height: 380px;
          }
        }
        @media (max-width: 760px) {
          .placement-container {
            width: min(100% - 32px, 1280px);
          }
          .placement-section {
            padding: 50px 0;
          }
          .placement-hero {
            padding: 64px 0 54px;
          }
          .placement-hero-grid {
            gap: 42px;
          }
          .placement-hero-copy p,
          .placement-section-head p,
          .placement-card-copy {
            font-size: 16px;
          }
          .placement-stats-grid,
          .placement-sector-layout {
            grid-template-columns: 1fr;
          }
          .placement-recruiter-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
          }
          .placement-stat-card,
          .placement-premium-card {
            padding: 28px;
          }
          .placement-stat-card {
            min-height: 230px;
          }
          .placement-image-frame {
            min-height: 320px;
          }
          .placement-hero-note {
            left: 18px;
            right: 18px;
            bottom: 18px;
            max-width: none;
          }
          .placement-recruiter-card {
            height: 108px;
          }
        }
        @media (max-width: 560px) {
          .placement-stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="placement-hero">
        <div className="placement-container placement-hero-grid">
          <motion.div
            className="placement-hero-copy"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <span className="placement-eyebrow">Placements & Careers</span>
            <h2>
              Placement Excellence
              <br />
              <span>Speaks for Itself</span>
            </h2>
            <p>
              A career-focused business ecosystem backed by strong recruiter relationships, consistent offers, and
              industry-ready student preparation.
            </p>
          </motion.div>

          <motion.div
            className="placement-hero-visual"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <div className="placement-image-frame">
              <Image
                src="/uniimage.webp"
                alt="Modern university campus representing career-focused learning"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
              <div className="placement-hero-note">
                <strong>Industry-ready business graduates</strong>
                <span>Built through academic rigor, professional development, and placement-focused mentoring.</span>
              </div>
            </div>
          </motion.div>
        </div>


      <div className="placement-container placement-section">
        <div className="placement-stats-grid">
          {placementStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="placement-stat-card"
              >
                <div className="placement-stat-icon">
                  <Icon className="h-7 w-7" strokeWidth={1.9} />
                </div>
                <p className="placement-stat-number">{stat.value}</p>
                <p className="placement-stat-label">{stat.label}</p>
                <span className="placement-stat-bg">0{index + 1}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
        </div>
      <div className="placement-recruiters-wrap">
        <div className="placement-container placement-section">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="placement-section-head"
          >
            <span className="placement-eyebrow">Top Recruiters</span>
            <h3>Trusted by leading global companies.</h3>
            <p>Recruiters across sales, marketing, operations, finance, technology, education, and consulting.</p>
          </motion.div>

          <div className="placement-recruiter-grid">
            {recruiters.map((recruiter, index) => (
              <motion.div
                key={recruiter.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: (index % 6) * 0.03 }}
                className="placement-recruiter-card"
              >
                {recruiter.logo ? (
                  <div className="relative w-full h-full flex items-center justify-center p-2">
                    <Image
                      src={recruiter.logo}
                      alt={`${recruiter.name} logo`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100px, 150px"
                    />
                  </div>
                ) : (
                  <span className="placement-recruiter-name" style={{ "--brand-color": recruiter.color } as React.CSSProperties}>
                    {recruiter.name}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="placement-container placement-section">
        <div className="placement-analytics-grid">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="placement-premium-card"
          >
            <div className="placement-card-kicker">
              <ChartNoAxesColumnIncreasing className="h-4 w-4" />
              Average Package Offered
            </div>
            <h3>Average Package Offered</h3>
            <div className="placement-price">₹4.39 LPA</div>
            <p className="placement-card-copy">
              The ₹4-6 LPA category reflects balanced growth and wide industry acceptance of Geeta University
              graduates.
            </p>

            <div className="placement-bars">
              {packageBars.map((bar) => (
                <div key={bar.label}>
                  <div className="placement-bar-meta">
                    <span>{bar.label}</span>
                    <span>{bar.value} offers</span>
                  </div>
                  <div className="placement-bar-track">
                    <div className="placement-bar-fill" style={{ width: bar.width }} />
                  </div>
                </div>
              ))}
            </div>

            <p className="placement-disclaimer">
              Disclaimer: Placement data shared is up to March 2026. The 2025-26 placement session is still in
              progress and will continue until July.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="placement-premium-card placement-sector-card"
          >
            <div className="placement-card-kicker">
              <PieChart className="h-4 w-4" />
              Sector-wise Analysis
            </div>
            <h3>Sector-wise Placement Analysis</h3>
            <p className="placement-card-copy">A broad spread of outcomes across business, technology, operations, and consulting domains.</p>

            <div className="placement-sector-layout">
              <div className="w-full h-full min-h-[300px] flex justify-center items-center relative scale-[1.25] md:scale-[1.4] origin-center mt-4 md:mt-0">
                <Image
                  src="/chart.png"
                  alt="Sector-wise placement chart"
                  fill
                  className="object-contain drop-shadow-2xl p-0"
                />
              </div>

              <div className="placement-sector-legend">
                {sectorLegend.map((sector) => (
                  <div key={sector.label} className="placement-legend-row">
                    <span className="placement-legend-dot" style={{ "--sector-color": sector.color } as React.CSSProperties} />
                    <span>{sector.label}</span>
                    <span className="placement-legend-value">{sector.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const bbaSpecialisations = [
  {
    title: "FinTech",
    icon: WalletCards,
    points: [
      "Navigate digital payment systems and blockchain technologies.",
      "Analyze financial models using modern technological tools.",
      "Understand regulatory frameworks in financial technology."
    ]
  },
  {
    title: "AI & Data Analytics",
    icon: BrainCircuit,
    points: [
      "Leverage data visualization and predictive modeling.",
      "Apply machine learning concepts to business strategies.",
      "Make data-driven decisions for enterprise growth."
    ]
  },
  {
    title: "Digital Marketing",
    icon: Megaphone,
    points: [
      "Design comprehensive online brand and social media campaigns.",
      "Utilize SEO, SEM, and web analytics for market optimization.",
      "Drive customer acquisition through targeted digital strategies."
    ]
  },
  {
    title: "Import & Export Management",
    icon: Globe2,
    points: [
      "Manage international trade operations and global supply chains.",
      "Navigate cross-border compliance and customs documentation.",
      "Develop strategies for global market entry and expansion."
    ]
  },
  {
    title: "Entrepreneurship & Family Businesses",
    icon: Lightbulb,
    points: [
      "Develop sustainable business plans and startup strategies.",
      "Manage scaling operations and venture funding.",
      "Navigate succession planning and family enterprise governance."
    ]
  },
  {
    title: "International Accounting with ACCA",
    icon: BookOpenCheck,
    points: [
      "Master global accounting principles and IFRS standards.",
      "Develop expertise in corporate reporting and taxation.",
      "Prepare for strategic professional ACCA certification levels."
    ]
  },
  {
    title: "Banking & Finance",
    icon: Landmark,
    points: [
      "Analyze financial markets, banking operations, and investment portfolios.",
      "Assess risk management frameworks and corporate finance.",
      "Understand modern banking regulations and monetary policies."
    ]
  },
  {
    title: "Marketing",
    icon: Target,
    points: [
      "Design strategic marketing campaigns and brand positioning.",
      "Analyze consumer behavior and market research data.",
      "Manage retail, sales, and distribution channels effectively."
    ]
  },
  {
    title: "Human Resource Management",
    icon: UsersRound,
    points: [
      "Implement talent acquisition and workforce planning strategies.",
      "Manage employee relations, compensation, and benefits.",
      "Foster organizational behavior and leadership development."
    ]
  }
];

function BBASpecialisationsSection() {
  return (
    <section 
      className="w-full relative font-sans"
      style={{
        background: `
          radial-gradient(circle at 90% 10%, rgba(36,95,168,0.06), transparent 25%),
          radial-gradient(circle at 10% 90%, rgba(217,154,36,0.05), transparent 25%),
          linear-gradient(180deg, #FCFDFE 0%, #F5F8FC 100%)
        `,
        paddingTop: "72px",
        paddingBottom: "100px",
      }}
    >
      <style>{`
        .programs-container {
          width: min(100% - 64px, 1280px);
          margin-inline: auto;
        }

        .programs-heading {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto 56px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .programs-heading h2 {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
          font-size: clamp(48px, 4.3vw, 64px);
          line-height: 1.08;
          font-weight: 800;
          color: #0B2948;
        }

        .programs-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          width: 130px;
          margin: 28px auto 26px;
        }

        .programs-divider::before,
        .programs-divider::after {
          content: "";
          width: 44px;
          height: 1px;
          background: #D99A24;
        }

        .programs-divider-diamond {
          width: 8px;
          height: 8px;
          background: #D99A24;
          transform: rotate(45deg);
          flex-shrink: 0;
        }

        .programs-subtitle {
          margin: 0;
          text-align: center;
          font-size: 21px;
          line-height: 1.4;
          font-weight: 700;
          color: #173F6D;
        }

        .programs-directory {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          position: relative;
        }

        @media (max-width: 768px) {
          .programs-directory {
            grid-template-columns: 1fr;
            column-gap: 0;
          }
          .bba-directory-item {
            padding-left: 0 !important;
            padding-right: 0 !important;
            padding-top: 30px !important;
            padding-bottom: 30px !important;
          }
          .bba-directory-item:nth-child(odd) {
            padding-right: 0 !important;
          }
          .bba-directory-item:nth-child(even) {
            padding-left: 0 !important;
          }
          .bba-ninth-item {
            grid-column: span 1 !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            max-width: 100% !important;
          }
          .bba-grid-divider {
            display: none !important;
          }
          .bba-number-mobile {
            right: 0 !important;
          }
        }
      `}</style>

      {/* Decorative Texture */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#0F3763_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.025]" />
      </div>

      <div className="programs-container relative z-10">
        
        {/* HEADING BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="programs-heading"
        >
          {/* Eyebrow */}
          <h3 style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#D99A24", margin: "0 0 18px", textAlign: "center" }}>
            EXPLORE YOUR SPECIALISATION
          </h3>
          
          {/* Main Heading */}
          <h2>
            Programs Designed for <br className="hidden sm:block" /> Future Business Leaders
          </h2>
          
          {/* Gold Divider */}
          <div className="programs-divider">
            <span className="programs-divider-diamond" />
          </div>

          {/* Program Subtitle */}
          <h3 className="programs-subtitle">
            Bachelor of Business Administration (BBA) Specialisations
          </h3>
        </motion.div>

        {/* DIRECTORY */}
        <div className="programs-directory">
          {/* CENTER DIVIDER */}
          <div 
            className="absolute bba-grid-divider pointer-events-none"
            style={{
              left: "50%",
              top: 0,
              bottom: 0,
              width: "1px",
              background: "rgba(15, 45, 82, 0.10)",
              transform: "translateX(-50%)",
              zIndex: 0
            }}
          />

          {bbaSpecialisations.map((spec, idx) => {
            const Icon = spec.icon;
            const formattedNumber = (idx + 1).toString().padStart(2, "0");
            const isOdd = (idx + 1) % 2 !== 0; // left column
            const isLast = idx === bbaSpecialisations.length - 1;
            
            return (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (idx % 2) * 0.1, ease: "easeOut" }}
                className={`group relative flex flex-col bba-directory-item ${isLast ? "bba-ninth-item" : ""}`}
                style={{
                  paddingTop: "38px",
                  paddingBottom: "38px",
                  borderBottom: "1px solid rgba(15,45,82,0.10)",
                  
                  // Symmetrical column spacing
                  paddingLeft: isLast ? "0" : (isOdd ? "24px" : "56px"),
                  paddingRight: isLast ? "0" : (isOdd ? "56px" : "24px"),
                  
                  gridColumn: isLast ? "1 / -1" : "auto", 
                  justifySelf: isLast ? "center" : "auto",
                  width: "100%",
                  maxWidth: isLast ? "500px" : "100%",
                  boxSizing: "border-box"
                }}
              >
                
                {/* Trigger Area */}
                <div className={`absolute inset-0 z-20 cursor-default`} />

                {/* DECORATIVE NUMBER */}
                <div 
                  className="absolute pointer-events-none select-none z-0 bba-number-mobile"
                  style={{
                    fontSize: "72px",
                    fontWeight: 800,
                    lineHeight: 1,
                    color: "rgba(15, 45, 82, 0.06)",
                    top: "34px",
                    right: "28px",
                  }}
                >
                  {formattedNumber}
                </div>

                <div className="relative z-10 w-full flex flex-col items-start text-left box-border">
                  {/* Header (Icon + Title) */}
                  <div className="flex items-center" style={{ gap: "16px" }}>
                    {/* Icon */}
                    <div 
                      className="flex items-center justify-center shrink-0 transition-colors duration-300 bg-[#EDF4FC] group-hover:bg-[#0F3763] border border-[#DDE8F4]"
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "14px"
                      }}
                    >
                      <Icon size={24} className="text-[#245FA8] group-hover:text-[#D99A24] transition-colors duration-300" />
                    </div>
                    {/* Title */}
                    <h4 
                      className="text-[#0B2948] group-hover:text-[#245FA8] transition-colors duration-300"
                      style={{ 
                        fontSize: "25px", 
                        fontWeight: 750, 
                        lineHeight: 1.2
                      }}
                    >
                      {spec.title}
                    </h4>
                  </div>

                  {/* Gold Line */}
                  <div 
                    className="bg-[#D99A24] w-[48px] group-hover:w-[76px] transition-all duration-300 ease"
                    style={{
                      height: "2px",
                      marginTop: "18px",
                      marginBottom: "22px"
                    }}
                  />

                  {/* Learning Outcomes */}
                  <ul className="flex flex-col" style={{ gap: "13px" }}>
                    {spec.points.map((point, i) => (
                      <li key={i} className="flex items-start" style={{ gap: "12px", textAlign: "left" }}>
                        <CheckCircle2 size={17} style={{ color: "#2E67AE", flexShrink: 0, marginTop: "3px" }} strokeWidth={2.5} />
                        <span style={{ fontSize: "16px", fontWeight: 500, lineHeight: 1.55, color: "#536176" }}>
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SchoolAboutSection() {
  return (
    <section className="scbm-about-section w-full bg-[#FAFAFA] relative overflow-hidden font-sans">
      <style>{`
        .scbm-about-container {
          width: min(100% - 48px, 1280px);
          margin-inline: auto;
          display: flex;
          align-items: center;
          gap: 72px;
          padding-top: 100px;
          padding-bottom: 100px;
        }
        .scbm-about-text {
          width: 58%;
        }
        .scbm-about-image-wrapper {
          width: 42%;
          position: relative;
        }
        .scbm-about-eyebrow {
          color: #A32020;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 2px;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          text-transform: uppercase;
        }
        .scbm-about-eyebrow::before {
          content: "";
          height: 2px;
          width: 32px;
          background-color: #A32020;
          display: block;
        }
        .scbm-about-title {
          font-family: "Zilla Slab", serif;
          font-size: 32px;
          font-weight: 700;
          line-height: 40px;
          color: #0B2948;
          margin-bottom: 32px;
        }
        .scbm-about-paragraph {
          font-family: "Source Sans Pro", sans-serif;
          font-size: 16.5px;
          line-height: 1.75;
          color: #4A5568;
          margin-bottom: 20px;
        }
        .scbm-about-paragraph strong {
          color: #2D3748;
          font-weight: 600;
        }
        .scbm-image-decoration {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: #A32020;
          border-radius: 18px;
          top: 24px;
          left: 24px;
          z-index: 0;
          opacity: 0.15;
        }
        .scbm-badge {
          position: absolute;
          bottom: -24px;
          left: -32px;
          background: #FFFFFF;
          box-shadow: 0 12px 35px rgba(11,41,72,0.12);
          padding: 18px 26px;
          border-radius: 12px;
          z-index: 20;
          border-left: 4px solid #A32020;
          font-family: "Source Sans Pro", sans-serif;
          font-weight: 700;
          color: #0B2948;
          font-size: 16px;
        }

        @media (max-width: 992px) {
          .scbm-about-container {
            flex-direction: column;
            gap: 60px;
            padding-top: 80px;
            padding-bottom: 80px;
            width: min(100% - 40px, 1280px);
          }
          .scbm-about-text, .scbm-about-image-wrapper {
            width: 100%;
          }
          .scbm-about-title {
            font-size: 28px;
            line-height: 36px;
          }
          .scbm-about-paragraph {
            font-size: 16px;
          }
          .scbm-badge {
            left: 20px;
            bottom: -20px;
            right: 20px;
            text-align: center;
          }
        }
      `}</style>
      
      <div className="scbm-about-container">
        {/* Left Column: Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="scbm-about-text"
        >
          <div className="scbm-about-eyebrow">ABOUT THE SCHOOL</div>
          <h1 className="scbm-about-title">School of Commerce & Business Management</h1>
          
          <p className="scbm-about-paragraph">
            The School of Commerce & Business Management at Geeta University goes beyond teaching top-notch management skills to students - it helps create industry leaders. As one of the <strong>top Universities for Management in Panipat</strong>, we offer a comprehensive curriculum that blends academic excellence with real-world exposure to make you job-ready from day one.
          </p>
          <p className="scbm-about-paragraph">
            We have emerged as the <strong>best University for Management in Delhi NCR</strong> thanks to our industry-driven approach and great focus on experiential learning. Our programs are designed to help you adapt a strategic mindset, acquire key leadership skills, and develop innovative thinking necessary for thriving in today's competitive business world.
          </p>
          <p className="scbm-about-paragraph" style={{ marginBottom: 0 }}>
            Being a <strong>top Management University in Panipat</strong> and ranked among the <strong>best Management Universities in North India</strong>, Geeta University offers unparalleled learning experiences through its expert faculty, complimented by global career opportunities. If you’re ready to transform your ambitions into success, enrol now at Geeta University—where future leaders are made!
          </p>
        </motion.div>
        
        {/* Right Column: Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="scbm-about-image-wrapper"
        >
          <div className="scbm-image-decoration"></div>
          <div className="relative z-10 rounded-[18px] overflow-hidden shadow-[0_20px_50px_rgba(11,41,72,0.12)] w-full aspect-[4/3] lg:aspect-[4/5] bg-[#E2E8F0]">
            <Image
              src="/bba photo.jpeg"
              alt="Students collaborating at Geeta University"
              fill
              className="object-cover object-center"
              sizes="(max-width: 992px) 100vw, 42vw"
            />
          </div>
          <div className="scbm-badge">
            Future Leaders Are Made Here
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function SchoolOfManagementAndBusinessStudies() {
  return (
    <div className="w-full flex-1 block bg-white min-h-screen text-[#1A1A2E] overflow-x-hidden selection:bg-[#E8871A] selection:text-white font-sans">
      
      {/* ── BANNER IMAGE SECTION ── */}
      <div className="relative w-full min-h-[92vh] lg:h-[calc(100vh-80px)] overflow-hidden flex flex-col">
        <Image
          src="/bba%20banner.jpeg"
          alt="School of Commerce & Business Management"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <SchoolAboutSection />

      <BBASpecialisationsSection />

      <CommerceProgramsSection />

      <MeetOurMentorsSection />

      <PlacementExcellenceSection />

      {/* ── EXPERTS SECTION ── */}
      <section className="scbm-experts-section">
        <style>{`
          .scbm-experts-section {
            width: 100%;
            position: relative;
            overflow: hidden;
            background:
              linear-gradient(135deg, rgba(248, 243, 233, 0.96), rgba(255, 255, 255, 0.98) 42%, rgba(244, 248, 252, 0.96)),
              #fbf8f1;
            padding: 88px 0 96px;
            font-family: "Source Sans 3", sans-serif;
          }
          .scbm-experts-section::before {
            content: "";
            position: absolute;
            inset: 0;
            background-image:
              linear-gradient(rgba(13, 48, 83, 0.045) 1px, transparent 1px),
              linear-gradient(90deg, rgba(13, 48, 83, 0.045) 1px, transparent 1px);
            background-size: 56px 56px;
            mask-image: linear-gradient(to bottom, transparent, black 16%, black 82%, transparent);
            pointer-events: none;
          }
          .scbm-experts-shell {
            width: min(100% - 48px, 1180px);
            margin: 0 auto;
            position: relative;
            z-index: 1;
          }
          .scbm-experts-heading {
            display: grid;
            grid-template-columns: minmax(0, 0.95fr) minmax(320px, 0.7fr);
            gap: 42px;
            align-items: end;
            margin-bottom: 34px;
          }
          .scbm-experts-eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            color: #bf7a19;
            font-size: 13px;
            font-weight: 800;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 16px;
          }
          .scbm-experts-eyebrow::before {
            content: "";
            width: 42px;
            height: 1px;
            background: #bf7a19;
          }
          .scbm-experts-title {
            margin: 0;
            color: #082b53;
            font-family: "Zilla Slab", serif;
            font-size: clamp(34px, 4vw, 54px);
            line-height: 1.02;
            font-weight: 800;
            letter-spacing: 0;
          }
          .scbm-experts-title span {
            color: #c7831f;
          }
          .scbm-experts-intro {
            margin: 0;
            color: #536176;
            font-size: 17px;
            line-height: 1.65;
            max-width: 460px;
          }
          .scbm-experts-layout {
            display: grid;
            grid-template-columns: 0.78fr 1.22fr;
            gap: 24px;
            align-items: stretch;
          }
          .scbm-experts-feature {
            position: relative;
            min-height: 100%;
            border-radius: 26px;
            padding: 34px;
            background: #082b53;
            color: #fff;
            overflow: hidden;
            box-shadow: 0 24px 60px rgba(8, 43, 83, 0.18);
          }
          .scbm-experts-feature::before {
            content: "";
            position: absolute;
            width: 280px;
            height: 280px;
            right: -100px;
            top: -90px;
            border-radius: 999px;
            border: 1px solid rgba(255, 255, 255, 0.16);
          }
          .scbm-experts-feature::after {
            content: "";
            position: absolute;
            inset: auto 28px 28px auto;
            width: 92px;
            height: 92px;
            border-radius: 999px;
            background: rgba(216, 154, 43, 0.16);
            filter: blur(2px);
          }
          .scbm-experts-feature-content {
            position: relative;
            z-index: 1;
            height: 100%;
            display: flex;
            flex-direction: column;
          }
          .scbm-experts-feature-kicker {
            width: fit-content;
            border: 1px solid rgba(255, 255, 255, 0.18);
            border-radius: 999px;
            padding: 8px 14px;
            color: #f5c46d;
            font-size: 13px;
            font-weight: 800;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            margin-bottom: 34px;
          }
          .scbm-experts-feature h3 {
            margin: 0;
            max-width: 330px;
            font-family: "Zilla Slab", serif;
            font-size: clamp(28px, 3vw, 42px);
            line-height: 1.08;
            font-weight: 800;
            letter-spacing: 0;
          }
          .scbm-experts-feature p {
            margin: 18px 0 0;
            color: rgba(255, 255, 255, 0.76);
            font-size: 16px;
            line-height: 1.7;
          }
          .scbm-experts-stat-row {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            margin-top: auto;
            padding-top: 34px;
          }
          .scbm-experts-stat {
            border-top: 1px solid rgba(255, 255, 255, 0.18);
            padding-top: 14px;
          }
          .scbm-experts-stat strong {
            display: block;
            color: #f5c46d;
            font-family: "Zilla Slab", serif;
            font-size: 34px;
            line-height: 1;
          }
          .scbm-experts-stat span {
            display: block;
            margin-top: 6px;
            color: rgba(255, 255, 255, 0.72);
            font-size: 13px;
            line-height: 1.35;
          }
          .scbm-experts-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
          }
          .expert-card {
            position: relative;
            min-height: 244px;
            border-radius: 22px;
            background: rgba(255, 255, 255, 0.86);
            border: 1px solid rgba(8, 43, 83, 0.08);
            box-shadow: 0 16px 42px rgba(8, 43, 83, 0.08);
            padding: 22px;
            overflow: hidden;
            transition: transform 320ms ease, box-shadow 320ms ease, border-color 320ms ease;
          }
          .expert-card:hover {
            transform: translateY(-5px);
            border-color: rgba(191, 122, 25, 0.28);
            box-shadow: 0 22px 54px rgba(8, 43, 83, 0.12);
          }
          .expert-card-topline {
            position: absolute;
            inset: 0 auto auto 0;
            width: 100%;
            height: 4px;
            opacity: 0.8;
          }
          .expert-card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 16px;
          }
          .expert-card-icon {
            width: 42px;
            height: 42px;
            display: grid;
            place-items: center;
            border-radius: 14px;
            color: #0d4c8e;
            background: #f3f7fb;
            border: 1px solid rgba(8, 43, 83, 0.08);
          }
          .expert-card-number {
            color: rgba(8, 43, 83, 0.16);
            font-family: "Zilla Slab", serif;
            font-size: 34px;
            font-weight: 800;
            line-height: 1;
          }
          .expert-card-copy h3 {
            margin: 0;
            color: #082b53;
            font-family: "Zilla Slab", serif;
            font-size: 23px;
            line-height: 1.16;
            font-weight: 800;
            letter-spacing: 0;
          }
          .expert-card-copy p {
            margin: 8px 0 16px;
            color: #b16f16;
            font-size: 14px;
            font-weight: 800;
            line-height: 1.35;
          }
          .expert-card ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            gap: 8px;
          }
          .expert-card li {
            display: flex;
            gap: 8px;
            align-items: flex-start;
            color: #536176;
            font-size: 14px;
            line-height: 1.42;
            font-weight: 500;
          }
          .expert-card li svg {
            color: #c7831f;
            flex: 0 0 auto;
            margin-top: 3px;
          }
          @media (max-width: 1024px) {
            .scbm-experts-heading,
            .scbm-experts-layout {
              grid-template-columns: 1fr;
            }
            .scbm-experts-intro {
              max-width: 760px;
            }
            .scbm-experts-feature {
              min-height: 360px;
            }
          }
          @media (max-width: 720px) {
            .scbm-experts-section {
              padding: 66px 0 74px;
            }
            .scbm-experts-shell {
              width: min(100% - 32px, 1180px);
            }
            .scbm-experts-heading {
              gap: 18px;
              margin-bottom: 26px;
            }
            .scbm-experts-grid {
              grid-template-columns: 1fr;
            }
            .scbm-experts-feature {
              padding: 26px;
              min-height: 0;
            }
            .scbm-experts-stat-row {
              grid-template-columns: 1fr;
              padding-top: 26px;
            }
          }
        `}</style>

        <div className="scbm-experts-shell">
          <motion.div
            className="scbm-experts-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div>
              <div className="scbm-experts-eyebrow">School of Business & Management</div>
              <h2 className="scbm-experts-title">
                Learn from <span>5 Categories</span> of Experts
              </h2>
            </div>
            <p className="scbm-experts-intro">
              A layered learning ecosystem where academic depth, professional readiness, technical fluency, and industry insight come together without overwhelming the student journey.
            </p>
          </motion.div>

          <div className="scbm-experts-layout">
            <motion.div
              className="scbm-experts-feature"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="scbm-experts-feature-content">
                <div className="scbm-experts-feature-kicker">Curated Mentorship</div>
                <h3>Five expert streams. One confident business graduate.</h3>
                <p>
                  Students learn from faculty, technologists, finishing-school coaches, and industry practitioners so classroom concepts turn into workplace capability.
                </p>
                <div className="scbm-experts-stat-row">
                  <div className="scbm-experts-stat">
                    <strong>5</strong>
                    <span>Expert categories shaping the curriculum</span>
                  </div>
                  <div className="scbm-experts-stat">
                    <strong>360°</strong>
                    <span>Academic, technical, and career readiness</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="scbm-experts-grid">
              {categories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.48, delay: index * 0.06, ease: "easeOut" }}
                >
                  <ExpertCard category={category} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA SECTION ── */}
      <section className="scbm-final-cta">
        <style>{`
          .scbm-final-cta {
            width: 100%;
            position: relative;
            background-color: #0A1F44;
            overflow: hidden;
            padding: 110px 0;
            font-family: 'Source Sans 3', sans-serif;
          }
          
          .scbm-about-section {
            width: 100%;
            background-color: #FFFFFF;
            padding: 80px 0;
            font-family: "Source Sans 3", sans-serif;
          }
          
          .cta-bg-glow {
            position: absolute;
            top: -20%;
            right: -10%;
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(216,154,43,0.06) 0%, transparent 70%);
            pointer-events: none;
            z-index: 1;
          }
          
          .cta-bg-pattern {
            position: absolute;
            inset: 0;
            background-image: radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px);
            background-size: 32px 32px;
            pointer-events: none;
            z-index: 2;
          }

          .cta-container {
            width: 100%;
            max-width: 1280px;
            margin: 0 auto;
            padding-left: 40px;
            padding-right: 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            position: relative;
            z-index: 10;
            gap: 40px;
            box-sizing: border-box;
          }
          
          .cta-left-col {
            flex: 1;
            max-width: 68%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
          
          .cta-right-col {
            flex: 0 0 300px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
          }
          
          .cta-accent-line {
            width: 56px;
            height: 4px;
            background-color: #D89A2B;
            margin-bottom: 24px;
            border-radius: 2px;
          }
          
          .cta-heading {
            font-family: 'Zilla Slab', serif;
            font-size: 52px;
            line-height: 1.15;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 30px;
            max-width: 740px;
            position: relative;
            z-index: 2;
          }
          
          .cta-quote-mark {
            position: absolute;
            top: -24px;
            left: -32px;
            font-family: serif;
            font-size: 80px;
            line-height: 1;
            color: rgba(255,255,255,0.06);
            pointer-events: none;
            z-index: -1;
          }
          
          .cta-paragraph {
            font-size: 18px;
            line-height: 1.75;
            color: rgba(255,255,255,0.85);
            max-width: 700px;
            margin-bottom: 18px;
          }
          .cta-paragraph:last-of-type {
            margin-bottom: 50px;
          }
          
          .cta-programs-wrapper {
            width: 100%;
            border-top: 1px solid rgba(255,255,255,0.15);
            padding-top: 30px;
          }
          .cta-programs-wrapper.desktop-only { display: block; }
          .cta-programs-wrapper.mobile-only { display: none; }
          
          .cta-programs-title {
            font-size: 16px;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #ffffff;
            font-weight: 700;
            margin-bottom: 16px;
          }
          
          .cta-programs-list {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 20px;
            list-style: none;
            padding: 0;
            margin: 0;
          }
          
          .cta-program-item {
            color: rgba(255,255,255,0.7);
            font-size: 16px;
            position: relative;
            display: flex;
            align-items: center;
          }
          
          .cta-program-item:not(:last-child)::after {
            content: '';
            position: absolute;
            right: -10px;
            top: 50%;
            transform: translateY(-50%);
            height: 14px;
            width: 1px;
            background-color: rgba(255,255,255,0.25);
          }
          
          .cta-qr-panel {
            background: #ffffff;
            border-radius: 20px;
            padding: 28px;
            width: 100%;
            max-width: 280px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          
          .qr-label {
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 1.5px;
            color: #4B5870;
            text-transform: uppercase;
            margin-bottom: 4px;
          }
          
          .qr-cta {
            font-size: 20px;
            font-weight: 700;
            color: #0F2D52;
            margin-bottom: 20px;
            font-family: 'Zilla Slab', serif;
          }
          
          .qr-image-wrapper {
            width: 170px;
            height: 170px;
            margin-bottom: 20px;
            position: relative;
          }
          
          .scbm-highlight-text {
            font-size: 16px;
            line-height: 1.5;
            color: #1A3A6B;
            font-family: "Source Sans 3", sans-serif;
          }

          .qr-apply-text {
            font-size: 18px;
            font-weight: 700;
            color: #D89A2B;
            text-decoration: none;
            transition: color 0.2s ease;
          }
          
          .qr-apply-text:hover {
            color: #b57d1f;
          }

          /* Responsive Breakpoints */
          @media (max-width: 991px) {
            .cta-left-col { max-width: 60%; }
            .cta-right-col { flex: 0 0 280px; }
            .cta-heading { font-size: 44px; }
          }
          
          @media (max-width: 767px) {
            .scbm-final-cta { padding: 64px 0; }
            .cta-container { 
              flex-direction: column; 
              padding-left: 24px; 
              padding-right: 24px; 
              gap: 48px; 
            }
            .cta-left-col { max-width: 100%; }
            .cta-right-col { 
              flex: 1; 
              width: 100%; 
              max-width: 100%;
              justify-content: center; 
            }
            .cta-heading { font-size: 36px; }
            .cta-qr-panel { margin: 0 auto; }
            .cta-quote-mark { left: -16px; font-size: 60px; top: -16px; }
            
            .cta-programs-wrapper.desktop-only { display: none; }
            .cta-programs-wrapper.mobile-only { display: block; margin-top: 10px; }
          }
        `}</style>

        <div className="cta-bg-glow" />
        <div className="cta-bg-pattern" />

        <div className="cta-container">
          
          <div className="cta-left-col">
            <div className="cta-accent-line" />
            <h2 className="cta-heading">
              <span className="cta-quote-mark">&ldquo;</span>
              Your Future in Business Starts Here
            </h2>
            
            <p className="cta-paragraph">
              Take the next step towards a successful and future-ready career with the School of Commerce &amp; Business Management at Geeta University.
            </p>
            <p className="cta-paragraph">
              Join an ecosystem that blends academic excellence, innovation, industry exposure, leadership development, and career-focused education.
            </p>

            <div className="cta-programs-wrapper desktop-only">
              <h4 className="cta-programs-title">Other Programs Offered At GU</h4>
              <ul className="cta-programs-list">
                <li className="cta-program-item">Engineering</li>
                <li className="cta-program-item">Computer Applications</li>
                <li className="cta-program-item">Forensic Science</li>
                <li className="cta-program-item">Nutrition &amp; Dietetics</li>
                <li className="cta-program-item">Hotel Management</li>
                <li className="cta-program-item">Humanities</li>
              </ul>
            </div>
          </div>

          <div className="cta-right-col">
            <div className="cta-qr-panel">
              <span className="qr-label">Admissions 2026&ndash;27</span>
              <span className="qr-cta">Scan to Apply</span>
              <div className="qr-image-wrapper">
                <Image src="/qr.png" alt="Apply QR Code" fill className="object-contain" />
              </div>
              <a className="qr-apply-text">Apply Now</a>
            </div>
            <br />
            <br />
            <br />
            {/* Contact Details */}
            <div className="flex flex-col gap-[16px] mt-[56px] w-full self-start text-left">
              <div className="flex items-start gap-[12px]">
                <div className="mt-[4px] w-[32px] h-[32px] rounded-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-[#D89A2B]" />
                </div>
                <div>
                  <div className="text-[12px] uppercase tracking-wider text-white/50 font-bold mb-[2px]">Admission Helpline</div>
                  <a href="tel:+919278768000" className="text-white font-medium hover:text-[#D89A2B] transition-colors text-[16px]">+91 92787 68000</a>
                </div>
              </div>
              
              <div className="flex items-start gap-[12px]">
                <div className="mt-[4px] w-[32px] h-[32px] rounded-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center shrink-0">
                  <Globe2 size={16} className="text-[#D89A2B]" />
                </div>
                <div>
                  <div className="text-[12px] uppercase tracking-wider text-white/50 font-bold mb-[2px]">Website</div>
                  <a href="https://www.geetauniversity.edu.in" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-[#D89A2B] transition-colors text-[16px]">www.geetauniversity.edu.in</a>
                </div>
              </div>
              
              <div className="flex items-start gap-[12px]">
                <div className="mt-[4px] w-[32px] h-[32px] rounded-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-[#D89A2B]" />
                </div>
                <div>
                  <div className="text-[12px] uppercase tracking-wider text-white/50 font-bold mb-[2px]">Campus Address</div>
                  <p className="text-white/90 text-[16px] leading-snug">NH-71A, Naultha Panipat, Haryana (132145), India.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cta-programs-wrapper mobile-only">
            <h4 className="cta-programs-title">Other Programs Offered At GU</h4>
            <ul className="cta-programs-list">
              <li className="cta-program-item">Engineering</li>
              <li className="cta-program-item">Computer Applications</li>
              <li className="cta-program-item">Forensic Science</li>
              <li className="cta-program-item">Nutrition &amp; Dietetics</li>
              <li className="cta-program-item">Hotel Management</li>
              <li className="cta-program-item">Humanities</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}
