"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Award,
} from "lucide-react";
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
   * INFINITE CAROUSEL
   *
   * We clone cards at both ends.
   *
   * Example with 3 visible cards:
   *
   * [5,6,7] [1,2,3,4,5,6,7] [1,2,3]
   *          ↑
   *       starting point
   *
   * This allows the carousel to move continuously
   * without visibly jumping from the last item to first.
   * =========================================================
   */

  const clonedAwards = useMemo(() => {
    const before = awards.slice(-visibleCards);
    const after = awards.slice(0, visibleCards);

    return [...before, ...awards, ...after];
  }, [visibleCards]);

  /*
   * The real awards begin after the prepended clones.
   */

  const [currentIndex, setCurrentIndex] =
    useState(visibleCards);

  const [isTransitioning, setIsTransitioning] =
    useState(true);

  const [isAnimating, setIsAnimating] =
    useState(false);

  /*
   * =========================================================
   * RESET POSITION WHEN RESPONSIVE BREAKPOINT CHANGES
   * =========================================================
   */

  useEffect(() => {
    setIsTransitioning(false);
    setCurrentIndex(visibleCards);

    /*
     * Re-enable transition after browser has applied
     * the new position.
     */
    const timeout = window.setTimeout(() => {
      setIsTransitioning(true);
      setIsAnimating(false);
    }, 50);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [visibleCards]);

  /*
   * =========================================================
   * NEXT / PREVIOUS
   * =========================================================
   */

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const previousSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
  };

  /*
   * =========================================================
   * HANDLE INFINITE LOOP
   * =========================================================
   *
   * Real indexes:
   *
   * 3 → award 1
   * 4 → award 2
   * 5 → award 3
   * ...
   * 9 → award 7
   *
   * Then:
   *
   * 10 → cloned award 1
   *
   * Once that animation finishes we silently move back
   * to index 3.
   * =========================================================
   */

  const handleTransitionEnd = (e: React.TransitionEvent) => {
    if (e.target !== e.currentTarget) return;

    /*
     * Moved past the final real award.
     */
    if (currentIndex >= awards.length + visibleCards) {
      setIsTransitioning(false);

      setCurrentIndex(visibleCards);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setIsAnimating(false);
        });
      });

      return;
    }

    /*
     * Moved before the first real award.
     */
    if (currentIndex < visibleCards) {
      setIsTransitioning(false);

      setCurrentIndex(
        awards.length + currentIndex
      );

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setIsAnimating(false);
        });
      });
      
      return;
    }

    setIsAnimating(false);
  };

  /*
   * =========================================================
   * CURRENT REAL AWARD
   *
   * Used only for pagination indicators.
   * =========================================================
   */

  const currentRealIndex =
    ((currentIndex - visibleCards) % awards.length +
      awards.length) %
    awards.length;

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
            <span className="h-[2px] w-9 bg-[#E8871A]" />

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

            <span className="h-[2px] w-9 bg-[#E8871A]" />
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

        <div className="relative">

          {/* ===================================================
              LEFT ARROW
          =================================================== */}

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
            <ChevronLeft
              size={21}
              strokeWidth={1.8}
            />
          </button>

          {/* ===================================================
              VIEWPORT
          =================================================== */}

          <div className="overflow-hidden">

            {/* =================================================
                TRACK
            ================================================= */}

            <div
              onTransitionEnd={handleTransitionEnd}
              className={`
                flex
                ${
                  isTransitioning
                    ? "transition-transform duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                    : ""
                }
              `}
              style={{
                transform: `translateX(-${
                  currentIndex *
                  (100 / visibleCards)
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

                    {/* =======================================
                        IMAGE
                    ======================================= */}

                    <div
                      className="
                        relative
                        aspect-[1.65/1]
                        w-full
                        overflow-hidden
                        bg-[#EEF1F5]
                      "
                    >
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

                      {/* Image overlay */}

                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-[#0A1F44]/20
                          via-transparent
                          to-transparent
                          opacity-0
                          transition-opacity
                          duration-500
                          group-hover:opacity-100
                        "
                      />


                    </div>

                    {/* =======================================
                        CONTENT
                    ======================================= */}

                    <div
                      className="
                        flex
                        flex-1
                        flex-col
                        px-6
                        pb-8
                        pt-7
                        text-center
                        md:px-7
                      "
                    >

                      {/* Category */}

                      <span
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[2.5px]
                          text-[#E8871A]
                        "
                      >
                        Institutional Recognition
                      </span>

                      {/* Title */}

                      <h3
                        className="
                          mt-3
                          min-h-[54px]
                          font-serif
                          text-[17px]
                          font-bold
                          leading-[1.35]
                          text-[#0A1F44]
                        "
                      >
                        {award.title}
                      </h3>

                      {/* Divider */}

                      <div className="my-5 flex items-center justify-center gap-2">
                        <span className="h-px w-16 bg-[#DCE2EB]" />

                        <span className="h-[4px] w-[4px] rounded-full bg-[#E8871A]" />

                        <span className="h-px w-16 bg-[#DCE2EB]" />
                      </div>

                      {/* Presented by */}

                      <p
                        className="
                          text-[11px]
                          font-bold
                          uppercase
                          tracking-[2px]
                          text-[#94A3B8]
                        "
                      >
                        Presented By
                      </p>

                      <p
                        className="
                          mt-2
                          font-serif
                          text-[16px]
                          font-bold
                          text-[#0A1F44]
                        "
                      >
                        {award.presentedBy}
                      </p>

                      <p
                        className="
                          mt-1
                          text-[13px]
                          leading-[1.6]
                          text-[#64748B]
                        "
                      >
                        {award.designation}
                      </p>

                      {/* Bottom accent */}

                      <div
                        className="
                          mx-auto
                          mt-6
                          h-[2px]
                          w-0
                          bg-[#E8871A]
                          transition-all
                          duration-500
                          group-hover:w-16
                        "
                      />
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* ===================================================
              RIGHT ARROW
          =================================================== */}

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
            <ChevronRight
              size={21}
              strokeWidth={1.8}
            />
          </button>
        </div>

        {/* =====================================================
            MOBILE CONTROLS
        ===================================================== */}

        <div className="mt-8 flex justify-center gap-3 md:hidden">

          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous award"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-[#0A1F44]
              text-white
              transition-all
              duration-300
              hover:bg-[#E8871A]
            "
          >
            <ChevronLeft size={19} />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next award"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-[#0A1F44]
              text-white
              transition-all
              duration-300
              hover:bg-[#E8871A]
            "
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
              aria-current={
                index === currentRealIndex
                  ? "true"
                  : undefined
              }
              onClick={() => {
                if (isAnimating) return;
                setIsAnimating(true);
                setIsTransitioning(true);
                setCurrentIndex(
                  visibleCards + index
                );
              }}
              className={`
                h-[6px]
                rounded-full
                transition-all
                duration-300
                ${
                  index === currentRealIndex
                    ? "w-9 bg-[#E8871A]"
                    : "w-[6px] bg-[#B8C0CD] hover:bg-[#0A1F44]"
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