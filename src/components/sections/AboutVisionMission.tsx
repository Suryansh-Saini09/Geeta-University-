"use client";

import Image from "next/image";
import { ArrowRight, Compass, Lightbulb, Target } from "lucide-react";

const MISSION_POINTS = [
  "To inspire academic excellence through a student-centered and outcome-based teaching-learning process.",
  "To develop the right knowledge, skills, behavior, and attitude among students.",
  "To promote interdisciplinary research.",
  "To establish a strong industry-academia connection.",
  "To nurture entrepreneurship and support the innovative ideas of students.",
];

export default function AboutVisionMission() {
  return (
    <>
      {/* =========================================================
          POWERING EDUCATION BANNER
      ========================================================= */}

      <section className="relative overflow-hidden bg-[#0A1F44]">
        <div className="relative h-[180px] w-full sm:h-[220px] md:h-[280px]">
          <Image
            src="/about/8.webp"
            alt="Powering Education at Geeta University"
            fill
            className="object-cover"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-[#0A1F44]/55" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44]/90 via-[#0A1F44]/45 to-transparent" />

          <div className="gu-container relative z-10 flex h-full items-center">
            <div>
              <span className="mb-3 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[2.5px] text-[#E8871A]">
                <span className="h-[2px] w-8 bg-[#E8871A]" />
                Our Purpose
              </span>

              <h2 className="max-w-[650px] text-[clamp(2rem,4vw,3rem)] font-black leading-[1.1] text-white">
                Powering Education.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          VISION & MISSION
      ========================================================= */}

      <section
        id="vision-mission"
        className="scroll-mt-20 bg-[#F7F9FC] py-20 md:py-28"
      >
        <div className="gu-container">
          {/* Section heading */}

          <div className="mb-12 max-w-[760px] md:mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#E8871A]">
              Vision & Mission
            </span>

            <h2 className="mt-3 text-[clamp(2.35rem,4.6vw,3.4rem)] font-black leading-[1.08] text-[#0A1F44]">
              A clear purpose.
              <br />
              <span className="text-[#E8871A]">
                A future-focused direction.
              </span>
            </h2>

            <p className="mt-5 max-w-[700px] text-[16px] leading-[1.8] text-[#64748B] md:text-[17px]">
              Geeta University's vision and mission provide the foundation
              for academic excellence, student development, research,
              industry collaboration, and entrepreneurship.
            </p>
          </div>

          {/* Vision + Mission */}

          <div className="grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            {/* Vision */}

            <article className="group relative min-w-0 overflow-hidden rounded-[20px] bg-[#0A1F44] p-7 shadow-[0_20px_50px_rgba(10,31,68,0.12)] md:p-10">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#E8871A]/10 transition-transform duration-500 group-hover:scale-125" />

              <div className="relative">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-[14px] bg-[#E8871A] text-white">
                  <Compass size={27} />
                </div>

                <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#E8871A]">
                  Our Vision
                </span>

                <h3 className="mt-3 text-[30px] font-black tracking-[-0.8px] text-white">
                  Academic Excellence
                </h3>

                <div className="my-7 h-px bg-white/15" />

                <blockquote className="text-[17px] font-medium leading-[1.85] text-white/80 md:text-[18px]">
                  “To reach the pinnacle of academic excellence and nurture
                  the dreams and aspirations of students aspiring to evolve
                  into well-rounded technocrats, professionals, scientists,
                  leaders, and entrepreneurs dedicated to nation-building.”
                </blockquote>

                <div className="mt-8 flex items-center gap-3 text-[13px] font-bold text-[#E8871A]">
                  <Target size={17} />
                  Nation-building through education
                </div>
              </div>
            </article>

            {/* Mission */}

            <article className="min-w-0 rounded-[20px] border border-[#E2E8F0] bg-white p-7 shadow-[0_15px_45px_rgba(10,31,68,0.06)] md:p-10">
              <div className="mb-8 flex items-center justify-between">
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#E8871A]">
                    Our Mission
                  </span>

                  <h3 className="mt-2 text-[30px] font-black tracking-[-0.8px] text-[#0A1F44]">
                    Turning Purpose Into Action
                  </h3>
                </div>

                <div className="hidden h-14 w-14 items-center justify-center rounded-[14px] bg-[#F7F9FC] text-[#E8871A] sm:flex">
                  <Lightbulb size={26} />
                </div>
              </div>

              <div className="space-y-4">
                {MISSION_POINTS.map((point, index) => (
                  <div
                    key={point}
                    className="group flex min-w-0 gap-4 rounded-[14px] border border-transparent p-4 transition-all duration-300 hover:border-[#E8871A]/15 hover:bg-[#F8FAFC]"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0A1F44] text-[12px] font-black text-white transition-colors duration-300 group-hover:bg-[#E8871A]">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <p className="min-w-0 pt-1 text-[15px] leading-[1.7] text-[#475569]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          INSTITUTIONAL IDENTITY
      ========================================================= */}

      <section
        id="identity"
        className="relative overflow-hidden bg-white py-20 md:py-28"
      >
        {/* Decorative background */}

        <div className="pointer-events-none absolute left-0 top-0 h-[320px] w-[320px] rounded-full bg-[#E8871A]/5 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-[#0A1F44]/5 blur-3xl" />

        <div className="gu-container relative">
          {/* Heading */}

          <div className="mx-auto mb-14 max-w-[850px] text-center">
            <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#E8871A]">
              Institutional Identity
            </span>

            <h2 className="mt-3 text-[clamp(2.35rem,4.6vw,3.4rem)] font-black leading-[1.08] text-[#0A1F44]">
              Rooted in Legacy.
              <br />
              <span className="text-[#E8871A]">
                Shaping the Future.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-[760px] text-[16px] leading-[1.8] text-[#64748B] md:text-[17px]">
              At Geeta University, a bold futuristic vision comes together
              with the wisdom of the past. Innovation, technology, and global
              academic standards help carry forward India's rich educational
              heritage.
            </p>
          </div>

          {/* Identity strip */}

          <div className="grid min-w-0 grid-cols-1 items-stretch overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-[#F7F9FC] shadow-[0_20px_60px_rgba(10,31,68,0.07)] lg:grid-cols-[minmax(0,1fr)_220px_minmax(0,1fr)]">
            {/* Saffron */}

            <div className="min-w-0 flex flex-col justify-center p-7 md:p-10">
              <div className="mb-5 h-2 w-16 rounded-full bg-[#E8871A]" />

              <span className="text-[12px] font-bold uppercase tracking-[2px] text-[#64748B]">
                Legacy
              </span>

              <h3 className="mt-2 text-[28px] font-black text-[#0A1F44]">
                Saffron
              </h3>

              <p className="mt-4 text-[15px] leading-[1.75] text-[#64748B]">
                Saffron symbolizes the timeless knowledge of Indian saints —
                a nod to Geeta University's deep-rooted cultural legacy.
              </p>
            </div>

            {/* Centre */}

            <div className="relative flex min-h-[180px] items-center justify-center overflow-hidden bg-[#0A1F44] p-8 lg:min-h-[220px]">
              <div className="absolute h-40 w-40 rounded-full border border-[#E8871A]/30" />

              <div className="absolute h-28 w-28 rounded-full border border-white/10" />

              <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#E8871A] bg-white text-center shadow-[0_0_50px_rgba(232,135,26,0.18)]">
                <span className="text-[10px] font-black uppercase leading-[1.35] tracking-[1px] text-[#0A1F44]">
                  Legacy
                  <br />
                  +
                  <br />
                  Future
                </span>
              </div>
            </div>

            {/* Blue */}

            <div className="min-w-0 flex flex-col justify-center p-7 md:p-10">
              <div className="mb-5 h-2 w-16 rounded-full bg-[#0A1F44]" />

              <span className="text-[12px] font-bold uppercase tracking-[2px] text-[#64748B]">
                Future
              </span>

              <h3 className="mt-2 text-[28px] font-black text-[#0A1F44]">
                Blue
              </h3>

              <p className="mt-4 text-[15px] leading-[1.75] text-[#64748B]">
                Blue represents the future — driven by technology, openness,
                and the pursuit of academic excellence.
              </p>
            </div>
          </div>

          {/* Crest statement */}

          <div className="mx-auto mt-10 max-w-[900px] text-center">
            <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#0A1F44] text-[#E8871A]">
              <ArrowRight size={18} />
            </div>

            <p className="text-[17px] font-medium leading-[1.8] text-[#475569] md:text-[19px]">
              Our crest stands for{" "}
              <strong className="text-[#0A1F44]">
                courage, ambition, and transformation
              </strong>
              . It reflects Geeta University's commitment to being more than
              an institution — a hub of knowledge where the future is
              imagined, nurtured, and realised.
            </p>

            <p className="mt-5 text-[15px] font-bold text-[#E8871A]">
              Students are not just prepared for the future — they learn to
              shape it.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
