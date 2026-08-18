"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { homeFeedback } from "@/data/homeFeedback";

const DESKTOP_SLIDES = 3;

export default function HomeFeedbackSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSlides = Math.ceil(homeFeedback.length / DESKTOP_SLIDES);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % totalSlides);
  };

  const previousSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? totalSlides - 1 : current - 1,
    );
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalSlides);
    }, 7000);

    return () => window.clearInterval(interval);
  }, [totalSlides]);

  const desktopItems = homeFeedback.slice(
    activeIndex * DESKTOP_SLIDES,
    activeIndex * DESKTOP_SLIDES + DESKTOP_SLIDES,
  );

  return (
    <section className="relative overflow-hidden bg-[#F5F8FB] py-20 md:py-24">
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#F28C18]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#06355F]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[#F28C18]">
            Student Success Stories
          </p>

          <h2 className="font-serif text-4xl font-bold leading-tight text-[#06355F] sm:text-5xl">
            From Campus to{" "}
            <span className="text-[#F28C18]">Corporate Success</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#F28C18]" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#536B83] sm:text-lg">
            Discover how Geeta University&apos;s academic environment,
            industry exposure and holistic learning experience have helped
            students build successful careers.
          </p>
        </div>

        {/* Desktop cards */}
        <div className="hidden grid-cols-3 gap-6 md:grid">
          {desktopItems.map((student, index) => (
            <article
              key={`${student.name}-${activeIndex}`}
              className={`group relative flex min-h-[430px] flex-col overflow-hidden rounded-3xl border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                index === 1
                  ? "border-[#F28C18]/50"
                  : "border-[#DCE5ED]"
              }`}
            >
              {/* Orange accent */}
              <div
                className={`absolute left-0 top-0 h-1.5 w-full ${
                  index === 1 ? "bg-[#F28C18]" : "bg-[#06355F]"
                }`}
              />

              {/* Student identity */}
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-4 border-[#F5F8FB] bg-[#EAF0F5]">
                  <Image
                    src={student.image}
                    alt={student.name}
                    fill
                    sizes="80px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="font-serif text-xl font-bold text-[#06355F]">
                    {student.name}
                  </h3>

                  <div className="mt-2 inline-flex items-center rounded-full bg-[#FFF3E2] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#D97706]">
                    Package · {student.package}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-8 flex flex-1 flex-col">
                <span
                  aria-hidden="true"
                  className="font-serif text-6xl font-bold leading-none text-[#F28C18]/20"
                >
                  “
                </span>

                <p className="mt-[-8px] text-[15px] leading-7 text-[#536B83]">
                  {student.testimonial}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-7 flex items-center justify-between border-t border-[#E8EEF3] pt-5">
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#8A9AAC]">
                  Geeta University
                </span>

                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F5F8FB] text-[#06355F] transition-colors duration-300 group-hover:bg-[#F28C18] group-hover:text-white"
                >
                  ↗
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile card */}
        <div className="md:hidden">
          <article className="relative overflow-hidden rounded-3xl border border-[#DCE5ED] bg-white p-6 shadow-lg">
            <div className="absolute left-0 top-0 h-1.5 w-full bg-[#F28C18]" />

            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-4 border-[#F5F8FB] bg-[#EAF0F5]">
                <Image
                  src={homeFeedback[activeIndex]?.image ?? ""}
                  alt={homeFeedback[activeIndex]?.name ?? "Student"}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-[#06355F]">
                  {homeFeedback[activeIndex]?.name}
                </h3>

                <div className="mt-2 inline-flex rounded-full bg-[#FFF3E2] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#D97706]">
                  Package · {homeFeedback[activeIndex]?.package}
                </div>
              </div>
            </div>

            <div className="mt-7">
              <span
                aria-hidden="true"
                className="font-serif text-6xl font-bold leading-none text-[#F28C18]/20"
              >
                “
              </span>

              <p className="mt-[-8px] text-[15px] leading-7 text-[#536B83]">
                {homeFeedback[activeIndex]?.testimonial}
              </p>
            </div>

            <div className="mt-7 border-t border-[#E8EEF3] pt-5">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#8A9AAC]">
                Geeta University
              </span>
            </div>
          </article>
        </div>

        {/* Controls */}
        <div className="mt-10 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous student stories"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#CBD8E3] bg-white text-xl text-[#06355F] shadow-sm transition-all duration-200 hover:border-[#F28C18] hover:bg-[#F28C18] hover:text-white"
          >
            ←
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to student stories slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-[#F28C18]"
                    : "w-2.5 bg-[#B9C7D4] hover:bg-[#06355F]"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next student stories"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#CBD8E3] bg-white text-xl text-[#06355F] shadow-sm transition-all duration-200 hover:border-[#F28C18] hover:bg-[#F28C18] hover:text-white"
          >
            →
          </button>
        </div>

        {/* Bottom message */}
        <div className="mx-auto mt-12 flex max-w-2xl items-center justify-center gap-3 text-center">
          <span className="h-px flex-1 bg-[#DCE5ED]" />

          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7C8FA2]">
            Your journey could be next
          </span>

          <span className="h-px flex-1 bg-[#DCE5ED]" />
        </div>
      </div>
    </section>
  );
}