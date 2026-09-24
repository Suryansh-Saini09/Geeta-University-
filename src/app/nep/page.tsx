import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import LegacyEcosystem from "@/components/about/LegacyEcosystem";

export const metadata: Metadata = {
  metadataBase: new URL("https://geetauniversity.edu.in"),
  title: "National Education Policy (NEP) - Geeta University",
  description: "Learn how Geeta University aligns with the National Education Policy (NEP).",
  keywords: [
    "nep",
    "university of national",
    "education policy",
    "education university",
    "national education",
    "national education policy",
    "university policy",
    "new education policy",
    "national education system",
    "education policy in india",
    "new education policy in india",
    "new education policy 2020",
    "national education policy 2020",
    "national education policy india",
    "india new education policy",
    "education in university",
    "national university education",
  ],
};

export default function NEPPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans">
{/* ── Hero Banner ── */}
<section className="relative w-full overflow-hidden bg-[#0A1F44]">
  <div className="relative h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px]">
    <Image
      src="https://geetauniversity.edu.in/uploads/all/341/conversions/1-1-full.webp"
      alt="National Education Policy"
      fill
      className="object-cover object-center"
      priority
    />
  </div>
</section>

      {/* ── Main Section ── */}
      <section className="py-12 md:py-16">
        <div className="gu-container">
          <div className="mx-auto max-w-5xl space-y-12">

            {/* Top Grid: Features + Image */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Bullet Points */}
                <div className="lg:col-span-7 space-y-6">
                  <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#0A1F44] leading-snug uppercase">
                    FIRST UNIVERSITY OF HARYANA TO IMPLEMENTING THE NEP 2020
                  </h2>

                  <ul className="space-y-3 text-sm sm:text-base text-slate-700 font-sans">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#E8871A] font-bold text-lg">•</span>
                      <span>A teaching-learning methodology based on outcome-based education.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#E8871A] font-bold text-lg">•</span>
                      <span>Curriculum designed for multiple disciplines using the choice-based credit system.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#E8871A] font-bold text-lg">•</span>
                      <span>Use of hybrid teaching methodology with extensive industry connections.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#E8871A] font-bold text-lg">•</span>
                      <span>Industry collaborated programs to create Complete Corporate Citizens.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#E8871A] font-bold text-lg">•</span>
                      <span>Opportunity for interdisciplinary study and research to cater to the interests and passions of individual students.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#E8871A] font-bold text-lg">•</span>
                      <span>Individual career plans to fulfill the aspirations of each and every student.</span>
                    </li>
                  </ul>
                </div>

                {/* Right Image */}
                <div className="lg:col-span-5">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 shadow-md">
                    <Image
                      src="https://geetauniversity.edu.in/uploads/all/345/student-(1).jpg"
                      alt="Student"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content Blocks */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm space-y-8">
              {/* Overview */}
              <div className="space-y-3">
                <h2 className="font-serif text-2xl font-bold text-[#0A1F44]">
                  Overview of the National Education Policy (NEP) 2020
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed text-justify">
                  The NEP 2020 has set the stage for a significant transformation in India’s education system. The policy aims to the education system more holistic, flexible, multidisciplinary, and aligned with the needs of the 21st century. One of the most important aspects of the policy is to encourage international universities to establish higher education campuses in India. The question now is: how can international universities contribute to India’s higher education future? To promote India as a worldwide study destination, the NEP2020 aspires to provide opportunities for top-performing Indian universities to establish campuses in foreign countries. This can help pave the way for fostering collaborations, enhancing research capabilities, and introducing global best practices, in the Indian higher education system.
                </p>
              </div>

              {/* Transformation Q1 */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <h2 className="font-serif text-2xl font-bold text-[#0A1F44]">
                  How Can India's Higher Education Be Transformed By NEP 2020?
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed text-justify">
                  The National Education Policy (NEP) 2020’s purpose and vision is to strengthen India’s higher education system. Its goal is to establish an India-centric education system that adds to our country’s image as a global education hub by implementing high-quality education standards.
                </p>
              </div>

              {/* Transformation Q2 */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h2 className="font-serif text-2xl font-bold text-[#0A1F44]">
                  How India's education system could be transformed by the National Education Policy (NEP) 2020:
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed text-justify">
                  India is encouraging foreign universities to establish campuses in the country. First and foremost, the NEP2020 aims to encourage international universities to establish higher education campuses in India. The question now is: how can international universities contribute to India’s higher education future? To promote India as a worldwide study destination, the NEP2020 aspires to provide opportunities for top-performing Indian universities to establish campuses in foreign countries and for international universities to establish campuses in India.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed text-justify">
                  According to the NEP 2020, if all goes according to plan, Harvard, Oxford, and Princeton will be located in Hyderabad, Kolkata, and Mumbai, respectively, while top Indian universities such as Geeta University will set up campuses in foreign nations. This flow of ideas and resources will not only benefit the Indian economy but also the country’s higher education.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Legacy & Ecosystem Section ── */}
      <LegacyEcosystem id="legacy-ecosystem" />
    </div>
  );
}
