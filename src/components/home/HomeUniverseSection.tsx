"use client";

import Image from "next/image";

const universityImages = [
  "4-full.webp",
  "5-full.webp",
  "6-full.webp",
  "7-full.webp",
  "8-full.webp",
  "9-full.webp",
  "11-full.webp",
  "14-1-full.webp",
  "17-1-full.webp",
  "19-1-full.webp",
];

const globalUniversities = [
  "University of Sao Paulo, Brazil",
  "Swiss School of Management, Switzerland",
  "Universiti Malaysia Terengganu (UMT), Malaysia",
  "Mendel University, Czech Republic",
  "Murdoch University, Australia",
  "North Caucasian State Academy (NCSA), Russia",
];

const internships = [
  "Dubai",
  "Singapore",
  "Malaysia",
  "Vietnam",
];

export default function HomeUniverseSection() {
  return (
    <section className="relative overflow-hidden bg-[#F5F8FB] py-20 md:py-24">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#F28C18]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#06355F]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[#F28C18]">
            Global Presence
          </p>

          <h2 className="font-serif text-4xl font-bold leading-tight text-[#06355F] sm:text-5xl">
            Universe of <span className="text-[#F28C18]">GU</span>
          </h2>

          <div className="mt-5 h-1 w-16 rounded-full bg-[#F28C18]" />

          <p className="mt-6 max-w-3xl text-base leading-7 text-[#536B83] sm:text-lg">
            A globally connected university creating opportunities for
            students and staff through international partnerships,
            internships and cross-cultural academic experiences.
          </p>
        </div>

        {/* Main information cards */}
        <div className="grid gap-5 lg:grid-cols-3">
          {/* Global community */}
          <div className="group rounded-2xl border border-[#DCE5ED] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F28C18]/50 hover:shadow-lg">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#F28C18]">
              Global Community
            </p>

            <h3 className="font-sans text-2xl font-bold text-[#06355F]">
              31 Countries
            </h3>

            <p className="mt-1 font-semibold text-[#536B83]">
              22 States
            </p>

            <p className="mt-4 text-sm leading-6 text-[#64778A]">
              Students and staff from across India and the world contribute
              to a diverse and globally connected campus community.
            </p>
          </div>

          {/* Global universities */}
          <div className="group rounded-2xl border border-[#DCE5ED] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F28C18]/50 hover:shadow-lg">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#F28C18]">
              International Partnerships
            </p>

            <h3 className="font-sans text-2xl font-bold text-[#06355F]">
              Prestigious Global Universities
            </h3>

            <div className="mt-5 space-y-3">
              {globalUniversities.map((university) => (
                <div
                  key={university}
                  className="flex items-start gap-3 text-sm leading-5 text-[#536B83]"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#F28C18]" />
                  <span>{university}</span>
                </div>
              ))}
            </div>
          </div>

          {/* International internships */}
          <div className="group rounded-2xl border border-[#DCE5ED] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F28C18]/50 hover:shadow-lg">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#F28C18]">
              International Internships
            </p>

            <h3 className="font-sans text-2xl font-bold text-[#06355F]">
              Learn Beyond Borders
            </h3>

            <p className="mt-4 text-sm leading-6 text-[#64778A]">
              Students get opportunities to gain international exposure
              through internships and professional experiences across
              multiple countries.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {internships.map((location) => (
                <span
                  key={location}
                  className="rounded-full border border-[#DCE5ED] bg-[#F5F8FB] px-4 py-2 text-xs font-semibold text-[#06355F]"
                >
                  {location}
                </span>
              ))}

              <span className="rounded-full bg-[#F28C18] px-4 py-2 text-xs font-bold text-white">
                + Beyond
              </span>
            </div>
          </div>
        </div>

        {/* Global image strip */}
        <div className="mt-14">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#DCE5ED]" />

            <p className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.2em] text-[#536B83]">
              Our Global Connections
            </p>

            <div className="h-px flex-1 bg-[#DCE5ED]" />
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-[#DCE5ED] bg-white py-6 shadow-sm">
            {/* Left fade */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />

            {/* Right fade */}
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />

            <div className="universe-marquee flex w-max items-center">
              {/* First set */}
              <div className="flex shrink-0 items-center gap-8 px-4">
                {universityImages.map((image, index) => (
                  <div
                    key={`first-${image}-${index}`}
                    className="flex h-24 w-40 shrink-0 items-center justify-center rounded-xl border border-[#E4EAF0] bg-white p-3"
                  >
                    <Image
                      src={`/home/universe-flags/${image}`}
                      alt={`Geeta University global partner ${index + 1}`}
                      width={160}
                      height={96}
                      className="max-h-20 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Duplicate set for seamless infinite scrolling */}
              <div className="flex shrink-0 items-center gap-8 px-4">
                {universityImages.map((image, index) => (
                  <div
                    key={`second-${image}-${index}`}
                    className="flex h-24 w-40 shrink-0 items-center justify-center rounded-xl border border-[#E4EAF0] bg-white p-3"
                  >
                    <Image
                      src={`/home/universe-flags/${image}`}
                      alt=""
                      aria-hidden="true"
                      width={160}
                      height={96}
                      className="max-h-20 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .universe-marquee {
          animation: universe-scroll 35s linear infinite;
        }

        .universe-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes universe-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .universe-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}