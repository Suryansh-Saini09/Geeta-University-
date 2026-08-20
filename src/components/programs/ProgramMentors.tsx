"use client";

import React from "react";
import Image from "next/image";
import type { FacultyMember } from "@/data/programs/types";

interface ProgramMentorsProps {
  mentorsSection?: {
    eyebrow?: string;
    title?: string;
    faculty: FacultyMember[];
  };
  faculty?: FacultyMember[];
}

export default function ProgramMentors({ mentorsSection, faculty }: ProgramMentorsProps) {
  const mentors = mentorsSection?.faculty || faculty || [];

  const [currentIndex, setCurrentIndex] = React.useState(4);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [translationAmount, setTranslationAmount] = React.useState(0);
  
  const trackRef = React.useRef<HTMLDivElement>(null);
  const viewportRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (mentors.length === 0) return;

    const updateWidth = () => {
      if (viewportRef.current) {
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
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
      clearTimeout(timer);
    };
  }, [mentors.length]);

  if (mentors.length === 0) return null;

  // Seamless infinite loop buffer
  const extendedMentors = [
    ...mentors.slice(-4),
    ...mentors,
    ...mentors.slice(0, 4)
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
    
    if (currentIndex >= mentors.length + 4) {
      trackRef.current.style.transition = "none";
      setCurrentIndex(currentIndex - mentors.length);
      void trackRef.current.offsetHeight;
    } else if (currentIndex <= 3) {
      trackRef.current.style.transition = "none";
      setCurrentIndex(currentIndex + mentors.length);
      void trackRef.current.offsetHeight;
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
    transition: isTransitioning ? "transform 0.3s ease" : "none",
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
          background-color: #E2E8F0;
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
            {mentorsSection?.eyebrow || "EXPERT FACULTY"}
          </h3>
          <h2 className="text-[#0F2D52] text-center font-[800] mb-[24px]" style={{ fontSize: "32px", fontFamily: "'Zilla Slab', serif", lineHeight: 1.1 }}>
            {mentorsSection?.title || "Meet Our Mentors"}
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
                      <p className="text-[#A32020] font-[600] text-[16px] mb-[8px] font-['Source_Sans_3',sans-serif]">
                        {mentor.designation}
                      </p>
                      <p className="font-['Source_Sans_3',sans-serif] text-[#4B5870] font-[500] text-[16px] leading-[1.6] mentor-desc">
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
