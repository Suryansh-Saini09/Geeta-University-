import { starPerformances } from "@/data/starPerformances";

export default function StarPerformancesSection() {
  // Duplicate the list to create a seamless infinite marquee.
  const marqueeItems = [...starPerformances, ...starPerformances];

  // YouTube video URL.
  const youtubeUrl = "https://www.youtube.com/embed/D-TW0dcqMDA";

  return (
    <section className="relative overflow-hidden bg-[#F7F9FC] py-20 md:py-24">
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#F28C18]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#06355F]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1600px]">
        {/* Heading */}
        <div className="px-5 text-center sm:px-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-[#F28C18]">
            Moments That Inspire
          </p>

          <h2 className="font-serif text-4xl font-bold leading-tight text-[#06355F] sm:text-5xl md:text-6xl">
            Star Performances
            <span className="text-[#F28C18]">@GU</span>
          </h2>

          {/* Accent line */}
          <div className="mx-auto mt-5 flex items-center justify-center gap-2">
            <span className="h-1 w-8 rounded-full bg-[#F28C18]" />
            <span className="h-1 w-16 rounded-full bg-[#06355F]" />
            <span className="h-1 w-8 rounded-full bg-[#F28C18]" />
          </div>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#526579] sm:text-lg">
            From music and entertainment to unforgettable campus moments,
            Geeta University brings inspiring personalities and star
            performances closer to our students.
          </p>

          {/* YouTube CTA */}
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-7 inline-flex items-center gap-3 rounded-full border border-[#E63946]/20 bg-white px-6 py-3 text-sm font-semibold text-[#E63946] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E63946]/40 hover:shadow-lg"
          >
            {/* YouTube Icon */}
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:scale-110"
            >
              <path
                d="M23.498 6.186a2.99 2.99 0 0 0-2.106-2.117C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.392.569A2.99 2.99 0 0 0 .502 6.186C0 8.08 0 12 0 12s0 3.92.502 5.814a2.99 2.99 0 0 0 2.106 2.117C4.495 20.5 12 20.5 12 20.5s7.505 0 9.392-.569a2.99 2.99 0 0 0 2.106-2.117C24 15.92 24 12 24 12s0-3.92-.502-5.814Z"
                fill="#E63946"
              />

              <path
                d="M9.545 15.568 15.818 12 9.545 8.432v7.136Z"
                fill="white"
              />
            </svg>

            <span>Click Here to Watch Video</span>

            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Gallery */}
        <div className="relative mt-14">
          {/* Left fade */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#F7F9FC] to-transparent sm:w-28 md:w-40"
          />

          {/* Right fade */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#F7F9FC] to-transparent sm:w-28 md:w-40"
          />

          {/* Marquee */}
          <div className="overflow-hidden py-4">
            <div className="star-marquee flex w-max items-center">
              {marqueeItems.map((star, index) => (
                <div
  key={`${star.image}-${index}`}
  className="star-card group relative mx-2 aspect-[3/4.8] w-[190px] shrink-0 overflow-hidden rounded-2xl bg-white shadow-md sm:mx-3 sm:w-[235px] md:w-[275px]"
>
  <img
    src={star.image}
    alt={star.name}
    loading="lazy"
    className="h-full w-full object-contain"
  />
</div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <span className="h-2 w-2 rounded-full bg-[#F28C18]" />

          <p className="text-sm font-medium text-[#526579] sm:text-base">
            Celebrating talent, culture and unforgettable experiences at GU.
          </p>

          <span className="h-2 w-2 rounded-full bg-[#06355F]" />
        </div>
      </div>

      {/* Marquee animation */}
      <style jsx>{`
        .star-marquee {
          animation: star-scroll 42s linear infinite;
          will-change: transform;
        }

        .star-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes star-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .star-marquee {
            animation-duration: 32s;
          }
        }
      `}</style>
    </section>
  );
}