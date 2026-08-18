import { industryPartners } from "@/data/industryPartners";

export default function IndustryIntegrationSection() {
  /*
   * Duplicate the logos so the marquee can loop seamlessly.
   */
  const marqueeItems = [...industryPartners, ...industryPartners];

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-24">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#F28C18]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[#F28C18]">
            Industry Connect
          </p>

          <h2 className="font-serif text-4xl font-bold leading-tight text-[#06355F] sm:text-5xl">
            Skill Centers &{" "}
            <span className="text-[#F28C18]">
              Industry Integration
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#F28C18]" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#526579] sm:text-lg">
            Bridging academic learning with industry exposure through
            specialized skill centers, partnerships and real-world
            opportunities.
          </p>
        </div>

        {/* Industry marquee */}
        <div className="relative">
          {/* Left fade */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent sm:w-28"
          />

          {/* Right fade */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent sm:w-28"
          />

          {/* Marquee viewport */}
          <div className="overflow-hidden rounded-3xl border border-[#DCE5EC] bg-[#F8FAFC] py-7 shadow-sm sm:py-9">
            <div className="industry-marquee flex w-max items-center">
              {marqueeItems.map((partner, index) => (
                <div
                  key={`${partner.image}-${index}`}
                  className="group mx-3 flex h-28 w-44 shrink-0 items-center justify-center rounded-2xl border border-[#E1E8EE] bg-white px-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F28C18]/40 hover:shadow-lg sm:mx-4 sm:h-32 sm:w-52"
                >
                  <img
                    src={partner.image}
                    alt={partner.name}
                    loading="lazy"
                    className="max-h-20 max-w-[150px] object-contain transition-transform duration-300 group-hover:scale-105 sm:max-h-24 sm:max-w-[175px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <span className="h-2.5 w-2.5 rounded-full bg-[#F28C18]" />

          <p className="text-sm font-medium text-[#526579] sm:text-base">
            Building stronger connections between education, skills and
            industry.
          </p>

          <span className="h-2.5 w-2.5 rounded-full bg-[#06355F]" />
        </div>
      </div>

      {/* Marquee animation */}
      <style jsx>{`
        .industry-marquee {
          animation: industry-scroll 38s linear infinite;
        }

        .industry-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes industry-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 640px) {
          .industry-marquee {
            animation-duration: 30s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .industry-marquee {
            animation: none;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}