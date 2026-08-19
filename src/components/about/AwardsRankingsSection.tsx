"use client";

import { useEffect, useMemo, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";
import { awards } from "@/data/awards";
import ImpactRankings from "@/components/about/ImpactRankings";

export default function AwardsRankingsSection() {
  /*
   * =========================================================
   * RESPONSIVE VISIBLE CARD COUNT
   * =========================================================
   */

  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  /*
   * =========================================================
   * INFINITE CAROUSEL SETUP
   * =========================================================
   */

  const clonedAwards = useMemo(() => {
    // 1. Ensure we have enough cards to clone securely
    let repeatedAwards = [...awards];
    while (repeatedAwards.length < visibleCards) {
      repeatedAwards = [...repeatedAwards, ...awards];
    }

    // 2. Clone the buffer for the infinite loop
    const before = repeatedAwards.slice(-visibleCards);
    const after = repeatedAwards.slice(0, visibleCards);

    return [...before, ...awards, ...after];
  }, [visibleCards]);

  const [currentIndex, setCurrentIndex] = useState(visibleCards);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  // Ref lock to prevent users from breaking the animation by clicking too fast
  const isAnimating = useRef(false);
  const slideDuration = 400; // Butter-smooth & fast duration

  /*
   * =========================================================
   * NEXT / PREVIOUS LOGIC
   * =========================================================
   */

  const nextSlide = useCallback(() => {
    if (isAnimating.current) return;
    
    isAnimating.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const previousSlide = useCallback(() => {
    if (isAnimating.current) return;
    
    isAnimating.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  /*
   * =========================================================
   * AUTO-PLAY CAROUSEL
   * =========================================================
   */

  useEffect(() => {
    // Pause auto-play if user is interacting
    if (isHovered) return;
    
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3500); // Auto-scrolls every 3.5 seconds

    return () => clearInterval(intervalId);
  }, [isHovered, nextSlide]);

  /*
   * =========================================================
   * HANDLE INFINITE LOOP WRAP-AROUND
   * =========================================================
   */

  const handleTransitionEnd = () => {
    isAnimating.current = false;

    // Jump from the cloned end back to the real beginning
    if (currentIndex >= awards.length + visibleCards) {
      setIsTransitioning(false);
      setCurrentIndex(visibleCards);
    } 
    // Jump from the cloned beginning back to the real end
    else if (currentIndex < visibleCards) {
      setIsTransitioning(false);
      setCurrentIndex(awards.length + currentIndex);
    }
  };

  /*
   * =========================================================
   * MANUAL SCROLL / SWIPE FUNCTIONALITY
   * =========================================================
   */
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsHovered(true); // Pause auto-play while swiping
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsHovered(false); // Resume auto-play
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      previousSlide();
    }
  };

  const currentRealIndex =
    ((currentIndex - visibleCards) % awards.length + awards.length) % awards.length;

  return (
    <section
      id="awards-ranking"
      className="
        scroll-mt-20
        overflow-hidden
        bg-[#F7F8FA]
        py-24
        md:py-28
        lg:py-32
      "
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* =====================================================
            SECTION INTRO
        ===================================================== */}

        <div className="mx-auto mb-16 max-w-[900px] text-center">

          {/* Eyebrow */}
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-0.5 w-9 bg-[#E8871A]" />
            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[3px]
                text-[#E8871A]
              "
            >
              Awards &amp; Rankings
            </span>
            <span className="h-0.5 w-9 bg-[#E8871A]" />
          </div>

          {/* Heading */}
          <h2
            className="
              font-serif
              text-[42px]
              font-black
              leading-[1.04]
              tracking-[-1.5px]
              text-[#0A1F44]
              sm:text-[50px]
              md:text-[58px]
              lg:text-[64px]
            "
          >
            Excellence.
            <br />
            <span className="text-[#E8871A]">
              Recognised &amp; Celebrated.
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-6
              max-w-[760px]
              text-[16px]
              leading-[1.8]
              text-[#64748B]
              md:text-[17px]
            "
          >
            Geeta University's journey of excellence is reflected
            through recognitions, awards and achievements earned
            across education, leadership and institutional growth.
          </p>
        </div>

        {/* =====================================================
            CAROUSEL
        ===================================================== */}

        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >

          {/* Left Arrow (Desktop) */}
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous award"
            className="
              absolute
              left-0
              top-1/2
              z-20
              hidden
              h-12
              w-12
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-[#DCE2EB]
              bg-white
              text-[#0A1F44]
              shadow-[0_8px_25px_rgba(10,31,68,0.10)]
              transition-all
              duration-300
              hover:border-[#0A1F44]
              hover:bg-[#0A1F44]
              hover:text-[#E8871A]
              md:flex
            "
          >
            <ChevronLeft size={21} strokeWidth={1.8} />
          </button>

          {/* Viewport Track (Includes Touch Swipe functionality) */}
          <div 
            className="overflow-hidden touch-pan-y select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              onTransitionEnd={handleTransitionEnd}
              className={`
                flex
                ${
                  isTransitioning
                    ? "transition-transform duration-[400ms] ease-in-out"
                    : ""
                }
              `}
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleCards)
                }%)`,
              }}
            >
              {clonedAwards.map((award, index) => (
                <div
                  key={`${award.id}-${index}`}
                  className="
                    w-full
                    shrink-0
                    px-2
                    sm:w-1/2
                    lg:w-1/3
                  "
                >
                  <article
                    className="
                      group
                      flex
                      h-full
                      flex-col
                      overflow-hidden
                      rounded-[18px]
                      border
                      border-[#DCE2EB]
                      bg-white
                      shadow-[0_8px_35px_rgba(10,31,68,0.045)]
                      transition-all
                      duration-500
                      hover:-translate-y-1
                      hover:border-[#E8871A]/40
                      hover:shadow-[0_18px_45px_rgba(10,31,68,0.10)]
                    "
                  >
                    {/* Image */}
                    <div className="relative aspect-[1.65/1] w-full overflow-hidden bg-[#EEF1F5]">
                      <Image
                        src={award.image}
                        alt={award.title}
                        fill
                        sizes="
                          (max-width: 639px) 100vw,
                          (max-width: 1023px) 50vw,
                          33vw
                        "
                        className="
                          object-cover
                          transition-transform
                          duration-700
                          ease-out
                          group-hover:scale-[1.035]
                        "
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col px-6 pb-8 pt-7 text-center md:px-7">
                      <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#E8871A]">
                        Institutional Recognition
                      </span>

                      <h3 className="mt-3 min-h-[54px] font-serif text-[17px] font-bold leading-[1.35] text-[#0A1F44]">
                        {award.title}
                      </h3>

                      <div className="my-5 flex items-center justify-center gap-2">
                        <span className="h-px w-16 bg-[#DCE2EB]" />
                        <span className="h-1 w-1 rounded-full bg-[#E8871A]" />
                        <span className="h-px w-16 bg-[#DCE2EB]" />
                      </div>

                      <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#94A3B8]">
                        Presented By
                      </p>

                      <p className="mt-2 font-serif text-[16px] font-bold text-[#0A1F44]">
                        {award.presentedBy}
                      </p>

                      <p className="mt-1 text-[13px] leading-[1.6] text-[#64748B]">
                        {award.designation}
                      </p>

                      <div className="mx-auto mt-6 h-0.5 w-0 bg-[#E8871A] transition-all duration-500 group-hover:w-16" />
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow (Desktop) */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next award"
            className="
              absolute
              right-0
              top-1/2
              z-20
              hidden
              h-12
              w-12
              translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-[#DCE2EB]
              bg-white
              text-[#0A1F44]
              shadow-[0_8px_25px_rgba(10,31,68,0.10)]
              transition-all
              duration-300
              hover:border-[#0A1F44]
              hover:bg-[#0A1F44]
              hover:text-[#E8871A]
              md:flex
            "
          >
            <ChevronRight size={21} strokeWidth={1.8} />
          </button>
        </div>

        {/* =====================================================
            MOBILE CONTROLS (Buttons)
        ===================================================== */}

        <div className="mt-8 flex justify-center gap-3 md:hidden">
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous award"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0A1F44] text-white transition-all duration-300 hover:bg-[#E8871A]"
          >
            <ChevronLeft size={19} />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next award"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0A1F44] text-white transition-all duration-300 hover:bg-[#E8871A]"
          >
            <ChevronRight size={19} />
          </button>
        </div>

        {/* =====================================================
            PAGINATION
        ===================================================== */}

        <div className="mt-8 flex items-center justify-center gap-2">
          {awards.map((award, index) => (
            <button
              key={award.id}
              type="button"
              aria-label={`Go to award ${index + 1}`}
              aria-current={index === currentRealIndex ? "true" : undefined}
              onClick={() => {
                if (isAnimating.current || index === currentRealIndex) return;
                isAnimating.current = true;
                setIsTransitioning(true);
                setCurrentIndex(visibleCards + index);
              }}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-300
                ${
                  index === currentRealIndex
                    ? "w-9 bg-[#E8871A]"
                    : "w-1.5 bg-[#B8C0CD] hover:bg-[#0A1F44]"
                }
              `}
            />
          ))}
        </div>

        {/* =====================================================
            IMPACT RANKINGS
        ===================================================== */}

        <ImpactRankings />

      </div>
    </section>
  );
}