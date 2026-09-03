import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Sparkles,
  Award,
  Medal,
  Trophy,
  CheckCircle2,
  FileText,
  Download,
  ExternalLink,
  BookOpen,
  Layers,
  GraduationCap,
  Users,
} from "lucide-react";
import LegacyEcosystem from "@/components/about/LegacyEcosystem";

export const metadata = {
  title: "Geeta University Medal Policy | Convocation Honors & Awards",
  description:
    "Official policy and regulations for awarding Gold, Silver, Bronze Academic Medals and the prestigious Chancellor’s Medal at the Annual Convocation of Geeta University.",
};

const academicMedals = [
  {
    type: "Gold Medal",
    badge: "1st Position",
    accentBg: "from-amber-100/90 via-amber-50 to-white",
    borderColor: "border-amber-300",
    badgeBg: "bg-amber-500 text-white",
    textColor: "text-amber-900",
    iconBg: "bg-amber-500/10 text-amber-600 ring-amber-500/30",
    eligibility: [
      "Awarded to the 1st position holder of a respective batch of a program.",
      "Must have passed in the normal course duration without any extension.",
      "Requires at least first division without any appearance in back paper examinations.",
      "Subject to minimum number of passing students in the batch (Table 1).",
      "In case of a tie at 1st position, both students receive Gold Medals; no Silver Medal will be awarded in that program.",
    ],
  },
  {
    type: "Silver Medal",
    badge: "2nd Position",
    accentBg: "from-slate-200/80 via-slate-50 to-white",
    borderColor: "border-slate-300",
    badgeBg: "bg-slate-600 text-white",
    textColor: "text-slate-900",
    iconBg: "bg-slate-500/10 text-slate-600 ring-slate-400/30",
    eligibility: [
      "Awarded to the 2nd position holder of a respective batch of a program.",
      "Must have passed in the normal course duration without any extension.",
      "Requires at least first division without any appearance in back paper examinations.",
      "Subject to minimum number of passing students in the batch (Table 1).",
    ],
  },
  {
    type: "Bronze Medal",
    badge: "3rd Position",
    accentBg: "from-orange-100/80 via-amber-50/50 to-white",
    borderColor: "border-amber-700/30",
    badgeBg: "bg-[#8B5A2B] text-white",
    textColor: "text-amber-950",
    iconBg: "bg-[#8B5A2B]/10 text-[#8B5A2B] ring-[#8B5A2B]/30",
    eligibility: [
      "Awarded to the 3rd position holder of a respective batch of a program.",
      "Must have passed in the normal course duration without any extension.",
      "Requires at least first division without any appearance in back paper examinations.",
      "Subject to minimum number of passing students in the batch (Table 1).",
    ],
  },
];

const batchThresholds = [
  { medal: "Gold Medal", pg: "10 students", ug: "20 students", diploma: "20 students" },
  { medal: "Silver Medal", pg: "15 students", ug: "30 students", diploma: "40 students" },
  { medal: "Bronze Medal", pg: "20 students", ug: "40 students", diploma: "50 students" },
];

const chancellorsWeightage = [
  { category: "Academics", weightage: "60%", desc: "Cumulative academic scores, grade point average, and consistent first-class performance throughout program tenure." },
  { category: "Co-curricular Activities", weightage: "20%", desc: "Research publications, symposium presentations, design hackathons, technical paper contests, and academic club leadership." },
  { category: "Extracurricular Activities", weightage: "20%", desc: "Sports tournaments, cultural festivals, debate/oratory competitions, NSS/NCC community service, and university ambassador initiatives." },
];

export default function MedalPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* ── Page Hero Header ── */}
      <section className="relative overflow-hidden bg-[#0A1F44] pt-32 pb-20 text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://geetauniversity.edu.in/uploads/all/224/conversions/new-building-3-full.webp"
            alt="Geeta University Convocation Campus"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1F44]/90 via-[#0A1F44]/85 to-[#0A1F44]" />
        </div>

        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#E8871A]/15 blur-3xl pointer-events-none" />

        <div className="gu-container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            {/* Breadcrumb */}
            <nav className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-300">
              <Link href="/" className="hover:text-[#E8871A] transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              <span className="text-[#E8871A]">Medal Policy</span>
            </nav>

            {/* Pill Tag */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-[#E8871A]" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Annual Convocation Honors &amp; Regulations
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[52px] leading-tight">
              Geeta University <span className="text-[#E8871A]">Medal Policy</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base text-slate-200 md:text-lg leading-relaxed">
              Institutional framework and transparent evaluation criteria for the conferment of Academic Gold, Silver, Bronze Medals, and the prestigious Chancellor’s Medal at the Annual Convocation.
            </p>

            {/* Highlights Bar */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-white/10 text-left max-w-xl mx-auto">
              <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3.5 border border-white/10">
                <Medal className="h-5 w-5 text-[#E8871A] shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white">Academic Medals</p>
                  <p className="text-[11px] text-slate-300">Gold, Silver &amp; Bronze by Batch Rank</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3.5 border border-white/10">
                <Trophy className="h-5 w-5 text-[#E8871A] shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white">Chancellor’s Medal</p>
                  <p className="text-[11px] text-slate-300">Premier Best All-Rounder Award</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 1: Academic Medals ── */}
      <section className="py-16 md:py-20">
        <div className="gu-container">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Section Heading */}
            <div className="flex items-center gap-3 border-b border-slate-200 pb-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0A1F44] text-sm font-bold text-[#E8871A]">
                1
              </span>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A1F44]">
                  Academic Medals
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Awarded to graduating candidates on the basis of meritorious academic performance across program batches.
                </p>
              </div>
            </div>

            {/* 3 Medal Cards (Gold, Silver, Bronze) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {academicMedals.map((medal) => (
                <div
                  key={medal.type}
                  className={`relative flex flex-col rounded-3xl border ${medal.borderColor} bg-gradient-to-b ${medal.accentBg} p-6 sm:p-7 shadow-lg shadow-slate-200/50 transition-all hover:-translate-y-1 hover:shadow-xl`}
                >
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ring-2 ${medal.iconBg}`}>
                      <Medal className="h-6 w-6" />
                    </div>
                    <span className={`rounded-full px-3 py-1 text-xs font-bold ${medal.badgeBg}`}>
                      {medal.badge}
                    </span>
                  </div>

                  <h3 className={`font-serif text-2xl font-bold ${medal.textColor} mb-4`}>
                    {medal.type}
                  </h3>

                  <div className="space-y-2.5 flex-1">
                    {medal.eligibility.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Table 1: Minimum Cohort Size */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-md">
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E8871A]">
                  Table 1
                </span>
                <h3 className="font-serif text-xl font-bold text-[#0A1F44]">
                  Minimum Number of Passing Students Required in Batch
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  For the award of respective academic medals, the minimum number of students successfully passing in the batch must satisfy the following thresholds:
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#0A1F44] text-white text-xs sm:text-sm font-semibold">
                      <th className="p-4 rounded-tl-xl">Medal Category</th>
                      <th className="p-4 text-center">Postgraduate (PG) Programs</th>
                      <th className="p-4 text-center">Undergraduate (UG) Programs</th>
                      <th className="p-4 text-center rounded-tr-xl">Diploma Programs</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                    {batchThresholds.map((row) => (
                      <tr key={row.medal} className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-4 font-bold text-[#0A1F44]">{row.medal}</td>
                        <td className="p-4 text-center font-medium text-slate-700">{row.pg}</td>
                        <td className="p-4 text-center font-medium text-slate-700">{row.ug}</td>
                        <td className="p-4 text-center font-medium text-slate-700">{row.diploma}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Chancellor's Medal ── */}
      <section className="bg-slate-100/70 py-16 md:py-20 border-y border-slate-200">
        <div className="gu-container">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Section Heading */}
            <div className="flex items-center gap-3 border-b border-slate-200 pb-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0A1F44] text-sm font-bold text-[#E8871A]">
                2
              </span>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A1F44]">
                  Chancellor’s Medal (Best All-Rounder)
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  The highest honor bestowed upon a single graduating student across all disciplines at Geeta University.
                </p>
              </div>
            </div>

            {/* Overview Card */}
            <div className="rounded-3xl border border-amber-200 bg-gradient-to-r from-amber-500/10 via-amber-100/40 to-white p-6 sm:p-8 shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0A1F44] text-[#E8871A] ring-4 ring-amber-400/30">
                  <Trophy className="h-7 w-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0A1F44]">
                    Premier University Honor: Best All-Rounder
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    The Chancellor’s Medal is awarded to the <strong>“best all-rounder” student across all university programs</strong> on the holistic basis of performance in academics, co-curricular activities, and extracurricular excellence.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-slate-800 border border-slate-200 shadow-sm">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> Normal Course Duration (No Extension)
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-slate-800 border border-slate-200 shadow-sm">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> At Least First Division
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-slate-800 border border-slate-200 shadow-sm">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> Zero Active Backlogs
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Table 2: Category Weightages */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {chancellorsWeightage.map((item) => (
                <div
                  key={item.category}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-[#0A1F44]/30"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Category
                    </span>
                    <span className="rounded-xl bg-[#0A1F44] px-3 py-1 text-base font-bold text-[#E8871A]">
                      {item.weightage}
                    </span>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#0A1F44]">
                    {item.category}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Convocation Rankers PDF Link Section ── */}
      <section className="py-16">
        <div className="gu-container">
          <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-[#0A1F44] via-[#0D2857] to-[#0A1F44] p-8 sm:p-10 text-white shadow-xl shadow-slate-900/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold text-amber-300">
                  <FileText className="h-3.5 w-3.5" />
                  Official Convocation Notification
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Check List of Rankers for Award of Medals
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                  Download and review the officially verified rank list of candidates awarded Academic and Chancellor&apos;s Medals during the 2nd Convocation of Geeta University.
                </p>
              </div>

              <a
                href="https://geetauniversity.edu.in/uploads/all/1982/Medal-List-24.01.2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2.5 rounded-2xl bg-[#E8871A] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-amber-500/25 transition-all hover:bg-[#F5A623] hover:shadow-amber-500/40 active:scale-95"
              >
                <Download className="h-4 w-4" />
                <span>View Medal List PDF</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-70" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Legacy & Ecosystem Section ── */}
      <LegacyEcosystem
        id="legacy-ecosystem"
        contextText="Academic brilliance and student achievements at Geeta University are nurtured within an integrated talent development ecosystem:"
      />
    </div>
  );
}
