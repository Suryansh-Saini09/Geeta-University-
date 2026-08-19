"use client";

import { useState } from "react";
import Image from "next/image";
import { whyJoinItems } from "@/data/whyJoinGeeta";

export default function WhyJoinGeetaSection() {
  const [activeItem, setActiveItem] = useState<number>(1);

  const handleToggle = (id: number) => {
    setActiveItem((current) => (current === id ? 0 : id));
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-24">
      {/* Decorative background element */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#F28C18]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#06355F]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[#F28C18]">
            The GU Advantage
          </p>

          <h2 className="font-serif text-4xl font-bold leading-tight text-[#06355F] sm:text-5xl">
            Why Join{" "}
            <span className="text-[#F28C18]">Geeta University?</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#F28C18]" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#526579] sm:text-lg">
            Discover an education ecosystem designed to develop knowledge,
            skills, confidence and global career readiness.
          </p>
        </div>

        {/* Main content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Accordion */}
          <div className="order-2 lg:order-1">
            <div className="space-y-3">
              {whyJoinItems.map((item) => {
                const isActive = activeItem === item.id;

                return (
                  <div
                    key={item.id}
                    className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                      isActive
                        ? "border-[#F28C18] bg-[#F8FAFC] shadow-lg"
                        : "border-[#DCE5EC] bg-white hover:border-[#9EB2C4] hover:shadow-md"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => handleToggle(item.id)}
                      aria-expanded={isActive}
                      aria-controls={`why-join-panel-${item.id}`}
                      className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                    >
                      {/* Number */}
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold transition-all duration-300 ${
                          isActive
                            ? "bg-[#F28C18] text-white"
                            : "bg-[#06355F] text-white"
                        }`}
                      >
                        {String(item.id).padStart(2, "0")}
                      </span>

                      {/* Title */}
                      <span
                        className={`flex-1 text-sm font-bold transition-colors sm:text-base ${
                          isActive
                            ? "text-[#06355F]"
                            : "text-[#253B50]"
                        }`}
                      >
                        {item.title}
                      </span>

                      {/* Arrow */}
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isActive
                            ? "rotate-180 border-[#F28C18] bg-[#F28C18] text-white"
                            : "border-[#D5E0E8] bg-white text-[#06355F]"
                        }`}
                        aria-hidden="true"
                      >
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          className="h-4 w-4"
                        >
                          <path
                            d="M5 7.5L10 12.5L15 7.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>

                    {/* Accordion content */}
                    <div
                      id={`why-join-panel-${item.id}`}
                      className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                        isActive
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <div className="border-t border-[#E5EBF0] px-5 pb-5 pt-4 pl-19 sm:px-6 sm:pl-21">
                          <p className="text-sm leading-6 text-[#5D6F80] sm:text-base">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative w-full max-w-lg">
              {/* Outer decorative ring */}
              <div
                aria-hidden="true"
                className="absolute -inset-5 rounded-full border border-[#F28C18]/20"
              />

              <div
                aria-hidden="true"
                className="absolute -inset-10 rounded-full border border-[#06355F]/10"
              />

              {/* Orange accent */}
              <div
                aria-hidden="true"
                className="absolute -right-2 top-8 z-10 h-20 w-20 rounded-full bg-[#F28C18] opacity-90"
              />

              {/* Image container */}
              <div className="relative aspect-square overflow-hidden rounded-full border-8 border-white bg-[#F1F5F8] shadow-2xl">
                <Image
                  src="/home/Picture122244-(1).png"
                  alt="Student representing the Geeta University experience"
                  fill
                  sizes="(max-width: 1024px) 80vw, 500px"
                  className="object-cover"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}