import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  MapPin,
  Landmark,
  Compass,
  Users,
  ShieldCheck,
  Building,
  GraduationCap,
  Calendar,
  Sparkles,
} from "lucide-react";
import LegacyEcosystem from "@/components/about/LegacyEcosystem";

export const metadata = {
  title: "About Panipat - Historic City of Weavers & Battles | Geeta University",
  description:
    "Explore the rich history, three major battles, famous landmarks, geography, and textile heritage of Panipat, Haryana — the proud home of Geeta University.",
};

const battles = [
  {
    number: "First Battle",
    title: "The First Battle of Panipat",
    date: "21 April 1526",
    opponents: "Babur vs. Ibrahim Lodhi",
    image: "https://geetauniversity.edu.in/uploads/all/221/Battle-of-Panipat.jpg",
    description:
      "Fought on 21 April 1526 between Ibrahim Lodhi, the Afghan Sultan of Delhi, and the Turko-Mongol warlord Babur. Babur’s strategic forces defeated Ibrahim Lodhi’s significantly larger army of over one hundred thousand soldiers. This decisive confrontation brought an end to the Delhi-based Lodi dynasty and laid the cornerstone for Mughal rule across Northern India.",
    keyOutcome: "Decisive end to the Lodi Dynasty and founding of Mughal rule in India.",
  },
  {
    number: "Second Battle",
    title: "The Second Battle of Panipat",
    date: "5 November 1556",
    opponents: "Mughal Forces (Akbar & Bairam Khan) vs. Hem Chandra Vikramaditya (Hemu)",
    image: "https://geetauniversity.edu.in/uploads/all/222/Second-battle-panipat-1.jpg",
    description:
      "Fought on 5 November 1556 between the Mughal armies of Akbar and Hem Chandra Vikramaditya (Raja Hemu), the last Hindu emperor of Delhi. Hemu had successfully reclaimed Agra and Delhi, crowning himself king at Purana Qila. In the heat of the battle, a stray arrow struck Hemu in the eye, turning the tide. Panipat is recorded in the Ain-i-Akbari as an imperial pargana contributing 10,756,647 dams with a strategic brick fortress.",
    keyOutcome: "Restoration of the Mughal throne in Delhi and martyrdom of Emperor Hemu.",
  },
  {
    number: "Third Battle",
    title: "The Third Battle of Panipat",
    date: "14 January 1761",
    opponents: "Maratha Empire vs. Ahmad Shah Abdali (Durrani Empire)",
    image: "https://geetauniversity.edu.in/uploads/all/223/third_battel.webp",
    description:
      "Fought on 14 January 1761 between the Maratha Empire under Sadashivrao Bhau and the Afghan Durrani forces under Ahmad Shah Abdali. One of the largest battles of the 18th century, it involved over 185,000 troops and thousands of non-combatant pilgrims. The heavy casualties on both sides and subsequent Afghan withdrawal permanently reshaped Indian subcontinent geopolitics, setting the stage for future historical eras.",
    keyOutcome: "One of the most consequential military engagements in 18th-century Asia.",
  },
];

const landmarks = [
  {
    title: "Geeta University",
    subtitle: "AI-Enabled Higher Education Hub",
    image: "https://geetauniversity.edu.in/uploads/all/224/new-building-3.webp",
    description:
      "Originating from the prestigious lineage of the Geeta Group of Institutions founded in 1985, Geeta University represents modern Panipat’s educational renaissance. Spanning across a sprawling, high-tech campus, it empowers thousands of scholars in engineering, pharmacy, management, legal studies, and allied sciences.",
  },
  {
    title: "Hemu Samadhi Sthal",
    subtitle: "Memorial of the Last Hindu Emperor",
    image: "https://geetauniversity.edu.in/uploads/all/225/Hemus-Samadhi-Sthal.jpg",
    description:
      "Located at Shodapur on Jind Road, Panipat, this sacred memorial commemorates Raja Hem Chandra Vikramaditya. Capturing his fearless leadership during the Second Battle of Panipat, this revered site is preserved as an important regional monument celebrating historical courage and heritage.",
  },
  {
    title: "Ibrahim Lodhi Tomb",
    subtitle: "Historic Monument on the Grand Trunk Road",
    image: "https://geetauniversity.edu.in/uploads/all/226/ibrahim_lodi_4.jpg",
    description:
      "Dedicated to the fallen Sultan of Delhi after the First Battle of Panipat in 1526. Later elevated with a masonry platform in 1866 alongside the historic Grand Trunk Road, the monument features classic Persian-inscribed stone tablets recounting the legendary clash.",
  },
  {
    title: "Babur Kabuli Bagh Mosque",
    subtitle: "Mughal Architectural Legacy (1527 CE)",
    image: "https://geetauniversity.edu.in/uploads/all/227/Babari_Maszid_at_Panipat.webp",
    description:
      "Commissioned by Emperor Babur to mark his monumental victory over Ibrahim Lodhi, named after his queen, Mussammat Kabuli Begum. Humayun later expanded the compound with a masonry platform named ‘Chabutra Fateh Mubarak’ inscribed in 934 Hijri.",
  },
  {
    title: "Kala Amb Memorial Park",
    subtitle: "Sadashivrao Bhau Maratha Command Site",
    image: "https://geetauniversity.edu.in/uploads/all/228/park_pic4.webp",
    description:
      "Situated 8 km from Panipat city center, where Sadashivrao Bhau directed the Maratha forces under a historic Black Mango tree (Kala Amb). Today, the site features a dedicated brick pillar and manicured memorial park maintained by the Haryana heritage society.",
  },
];

const cityStats = [
  { label: "Distance to Delhi", value: "95 km", desc: "North on NH-44 corridor" },
  { label: "Distance to Chandigarh", value: "169 km", desc: "South via Grand Trunk Road" },
  { label: "Global Reputation", value: "Textile Capital", desc: "City of Weavers & Recycling" },
  { label: "Geographical Coordinates", value: "29.39° N, 76.97° E", desc: "Elevation 219 m (718 ft)" },
];

export default function AboutPanipatPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* ── Page Hero Header ── */}
      <section className="relative overflow-hidden bg-[#0A1F44] pt-32 pb-20 text-white">
        {/* Campus Background with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://geetauniversity.edu.in/uploads/all/253/conversions/f-block-(1)-full.webp"
            alt="Geeta University campus in Panipat"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1F44]/90 via-[#0A1F44]/80 to-[#0A1F44]" />
        </div>

        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#E8871A]/15 blur-3xl pointer-events-none" />

        <div className="gu-container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            {/* Breadcrumb */}
            <nav className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-300">
              <Link href="/" className="hover:text-[#E8871A] transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              <span className="text-[#E8871A]">About Panipat</span>
            </nav>

            {/* Pill Tag */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-[#E8871A]" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Historic City of Weavers &amp; Battles
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[54px] leading-tight">
              About <span className="text-[#E8871A]">Panipat</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base text-slate-200 md:text-lg leading-relaxed max-w-3xl mx-auto">
              Panipat is a prestigious, historic city in Haryana, situated on NH-44, 95 km north of Delhi and 169 km south of Chandigarh. Globally renowned as the “City of Weavers” and India&apos;s textile recycling capital, Panipat seamlessly blends a storied 500-year history with rapid industrial growth and modern educational excellence.
            </p>

            {/* Key Quick Stats */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10 text-left">
              {cityStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white/5 p-4 border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  <p className="text-xs font-semibold text-slate-300">{stat.label}</p>
                  <p className="font-serif text-lg font-bold text-white mt-1 text-[#E8871A]">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-slate-300 mt-0.5">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── The 3 Historic Battles Section ── */}
      <section className="py-16 md:py-24">
        <div className="gu-container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0A1F44]/5 px-4 py-1.5 mb-3 border border-[#0A1F44]/10">
              <ShieldCheck className="h-4 w-4 text-[#E8871A]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0A1F44]">
                Epochs That Shaped India
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1F44]">
              The Three Historic <span className="text-[#E8871A]">Battles of Panipat</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Few places on Earth carry the military legacy of Panipat. The three monumental battles fought in 1526, 1556, and 1761 became pivotal turning points in the history of the Indian subcontinent.
            </p>
          </div>

          {/* Battles List Cards */}
          <div className="space-y-10 max-w-5xl mx-auto">
            {battles.map((battle, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={battle.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-lg shadow-slate-100 transition-all hover:shadow-xl hover:border-slate-300"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? "lg:flex-row-reverse" : ""}`}>
                    {/* Content Column */}
                    <div className={`lg:col-span-7 space-y-4 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-lg bg-[#0A1F44] px-3 py-1 text-xs font-bold text-white">
                          {battle.number}
                        </span>
                        <span className="flex items-center gap-1.5 rounded-lg bg-amber-50 px-3 py-1 text-xs font-bold text-[#E8871A] border border-amber-200">
                          <Calendar className="h-3.5 w-3.5" />
                          {battle.date}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A1F44]">
                        {battle.title}
                      </h3>

                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                        Opponents: <span className="text-slate-800">{battle.opponents}</span>
                      </p>

                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        {battle.description}
                      </p>

                      <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-3.5 text-xs sm:text-sm font-medium text-slate-700">
                        <strong className="text-[#0A1F44]">Historic Impact:</strong> {battle.keyOutcome}
                      </div>
                    </div>

                    {/* Image Column */}
                    <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 shadow-md">
                        <Image
                          src={battle.image}
                          alt={battle.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 400px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Landmarks of Panipat Section ── */}
      <section className="bg-slate-100/70 py-16 md:py-24 border-y border-slate-200">
        <div className="gu-container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0A1F44]/5 px-4 py-1.5 mb-3 border border-[#0A1F44]/10">
              <Landmark className="h-4 w-4 text-[#E8871A]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0A1F44]">
                Heritage &amp; Contemporary Icons
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1F44]">
              Famous <span className="text-[#E8871A]">Landmarks</span> of Panipat
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              From centuries-old Mughal mosques and warrior memorials to modern world-class university campuses, explore the defining landmarks of Panipat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {landmarks.map((site) => (
              <div
                key={site.title}
                className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:border-slate-300"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={site.image}
                    alt={site.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E8871A]">
                    {site.subtitle}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#0A1F44] mt-1 mb-3">
                    {site.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-1">
                    {site.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Geography & Demographics Section ── */}
      <section className="py-16 md:py-20">
        <div className="gu-container">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-xl shadow-slate-100">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-5 mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A1F44] text-[#E8871A]">
                  <Compass className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A1F44]">
                    Geography &amp; Demographics
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Location, administrative jurisdiction, and population profile of Panipat District.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Geography */}
                <div className="space-y-4 rounded-2xl border border-slate-100 bg-slate-50/60 p-6">
                  <div className="flex items-center gap-2 text-[#0A1F44] font-serif text-lg font-bold">
                    <MapPin className="h-5 w-5 text-[#E8871A]" />
                    <h3>Geographical Location</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Panipat is positioned at coordinates <strong className="text-slate-800">29.3875° N, 76.9700° E</strong> on the Indo-Gangetic plain. It has an average elevation of <strong className="text-slate-800">219 metres (718 feet)</strong> above sea level.
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Centrally positioned on the National Highway 44 (NH-44 / Grand Trunk Road), it enjoys seamless direct expressway connectivity to New Delhi, IGI International Airport, Karnal, Kurukshetra, Ambala, and Chandigarh.
                  </p>
                </div>

                {/* Demographics */}
                <div className="space-y-4 rounded-2xl border border-slate-100 bg-slate-50/60 p-6">
                  <div className="flex items-center gap-2 text-[#0A1F44] font-serif text-lg font-bold">
                    <Users className="h-5 w-5 text-[#E8871A]" />
                    <h3>Demographics &amp; Population</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    According to the official census, the total population of Panipat District stands at <strong className="text-slate-800">1,202,811</strong> (646,324 males and 556,487 females), constituting approximately <strong className="text-slate-800">4.74% of the entire state of Haryana</strong>.
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    As one of the most commercially active industrial cities in Northern India, Panipat attracts a diverse and vibrant workforce, entrepreneurs, exporters, and academic scholars from across the country.
                  </p>
                </div>
              </div>

              {/* Panipat & Geeta University Banner */}
              <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#0A1F44] to-[#1A3A6B] p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="space-y-1">
                  <h4 className="font-serif text-xl font-bold text-white">
                    Study in the Heart of Panipat at Geeta University
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Experience world-class academic programs, high-tech labs, and vibrant campus life.
                  </p>
                </div>
                <Link
                  href="/programs-after-12th"
                  className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#E8871A] px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:bg-[#F5A623] active:scale-95"
                >
                  <GraduationCap className="h-4 w-4" />
                  Explore Programs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Legacy & Ecosystem Section ── */}
      <LegacyEcosystem
        id="legacy-ecosystem"
        contextText="Geeta University in Panipat is part of an integrated, future-ready talent development ecosystem:"
      />
    </div>
  );
}
