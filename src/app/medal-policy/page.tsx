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
  {
    category: "Academics",
    weightage: "60%",
    percent: 60,
    icon: BookOpen,
  },
  {
    category: "Co-curricular Activities",
    weightage: "20%",
    percent: 20,
    icon: Layers,
  },
  {
    category: "Extracurricular Activities",
    weightage: "20%",
    percent: 20,
    icon: GraduationCap,
  },
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
          <div className="absolute inset-0" />
        </div>

        <div className="gu-container relative z-10">
          <div className="mx-auto max-w-3xl text-center">

            {/* Title */}
            <h1 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[52px] leading-tight">
              Geeta University <span className="text-[#E8871A]">Medal Policy</span>
            </h1>
          </div>
        </div>
      </section>

      {/* ── Section 1: Academic Medals ── */}
      <section className="py-10 md:py-14">
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
      <section className="bg-slate-100/70 py-10 md:py-14 border-y border-slate-200">
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
            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-serif text-xl font-bold text-[#0A1F44]">
                  Evaluation Weightage Breakdown
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {chancellorsWeightage.map((item) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={item.category}
                      className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E8871A]/40 hover:shadow-lg"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-3 mb-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A1F44]/5 text-[#0A1F44] group-hover:bg-[#0A1F44] group-hover:text-[#E8871A] transition-colors">
                            <IconComp className="h-6 w-6" />
                          </div>
                          <span className="rounded-full bg-[#0A1F44] px-3.5 py-1 text-sm font-extrabold text-[#E8871A] border border-[#E8871A]/20 shadow-sm">
                            {item.weightage} Weight
                          </span>
                        </div>

                        <h4 className="font-serif text-lg font-bold text-[#0A1F44] group-hover:text-[#E8871A] transition-colors">
                          {item.category}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
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
