import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Sparkles,
  Globe2,
  GraduationCap,
  Building2,
  Award,
  BookOpen,
  Briefcase,
  Compass,
} from "lucide-react";
import LegacyEcosystem from "@/components/about/LegacyEcosystem";

export const metadata = {
  title: "Advisory Board | Global Academic & Industry Mentors | Geeta University",
  description:
    "Meet Geeta University's eminent Advisory Board comprising global deans, industry chief officers, and international research professors guiding our vision and curricula.",
};

const advisoryMembers = [
  {
    name: "Professor Anand Prakash Mishra",
    role: "Executive Dean - Institutional Outreach & Senior Director of Law Admissions",
    institution: "OP Jindal Global University, Sonepat, Haryana, India",
    category: "Legal & Academic Leadership",
    image: "https://geetauniversity.edu.in/uploads/all/2689/AnandPrakash.jpg",
  },
  {
    name: "Mr. Ankur Jain",
    role: "Group Data Officer for Asia",
    institution: "Macquarie Bank",
    category: "Corporate & Fintech",
    image: "https://geetauniversity.edu.in/uploads/all/363/image-3.png",
  },
  {
    name: "Mr. Babji Neelam",
    role: "Founder & CEO",
    institution: "Technical Hub Pvt Ltd",
    category: "EdTech & Technology",
    image: "https://geetauniversity.edu.in/uploads/all/2592/WhatsApp-Image-2026-06-13-at-4.41.26-PM.jpeg",
  },
  {
    name: "Dr. Michael L. Schirmer",
    role: "Faculty Member & International Business Scholar",
    institution: "Temple University Fox School of Business, Philadelphia, USA",
    category: "Business & Management",
    image: "https://geetauniversity.edu.in/uploads/all/365/10-(1).jpg",
  },
  {
    name: "Prof. Ewa Lucja Stepien",
    role: "Professor, Astronomy & Applied Computer Science",
    institution: "Jagiellonian University, Poland",
    category: "Sciences & Computational Research",
    image: "https://geetauniversity.edu.in/uploads/all/366/7-(1).jpg",
  },
  {
    name: "Prof. Dr. Kemal Husnu",
    role: "Professor, Faculty of Pharmacy",
    institution: "Near East University, N. Cyprus",
    category: "Pharmaceutical Sciences",
    image: "https://geetauniversity.edu.in/uploads/all/367/3.jpg",
  },
  {
    name: "Prof. Pawel Moskal",
    role: "Head of Department, Experimental Physics",
    institution: "Jagiellonian University, Cracow, Poland",
    category: "Physics & Fundamental Research",
    image: "https://geetauniversity.edu.in/uploads/all/368/9-(1).jpg",
  },
  {
    name: "Dr. Jagdeep Khanna",
    role: "Director",
    institution: "Institute of Hotel Management (IHM), Dehradun, India",
    category: "Hospitality & Tourism",
    image: "https://geetauniversity.edu.in/uploads/all/369/11-(1).jpg",
  },
  {
    name: "Mr. Daman Shrivastav",
    role: "International Culinary & Hospitality Expert",
    institution: "Box Hill Institute, Melbourne, Australia",
    category: "Hospitality & Culinary Arts",
    image: "https://geetauniversity.edu.in/uploads/all/371/6-(1).jpg",
  },
  {
    name: "Mr. Andrew J. Ryder",
    role: "Former Training & Development Manager",
    institution: "Jaypee Hotels & Resorts",
    category: "Corporate Training & Hospitality",
    image: "https://geetauniversity.edu.in/uploads/all/370/2.jpg",
  },
  {
    name: "Prof. (Dr.) Manoj Kr. Sinha",
    role: "Director",
    institution: "Indian Law Institute (ILI), New Delhi, India",
    category: "Legal Studies & Jurisprudence",
    image: "https://geetauniversity.edu.in/uploads/all/372/1.jpg",
  },
  {
    name: "Dr. Varun Kumar",
    role: "Professor, Department of Mathematics",
    institution: "Axum University, Ethiopia",
    category: "Mathematical Sciences",
    image: "https://geetauniversity.edu.in/uploads/all/373/8-(1).jpg",
  },
];

export default function AdvisoryBoardPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* ── Page Hero Header ── */}
      <section className="relative overflow-hidden bg-[#0A1F44] pt-32 pb-20 text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://geetauniversity.edu.in/uploads/all/252/conversions/new-building-3-(1)-full.webp"
            alt="Geeta University Advisory Board"
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
          <div className="mx-auto max-w-4xl text-center">
            {/* Breadcrumb */}
            <nav className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-300">
              <Link href="/" className="hover:text-[#E8871A] transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              <span className="text-[#E8871A]">Advisory Board</span>
            </nav>

            {/* Pill Tag */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-[#E8871A]" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Global Thought Leaders &amp; Visionaries
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[54px] leading-tight">
              Advisory <span className="text-[#E8871A]">Board</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base text-slate-200 md:text-lg leading-relaxed max-w-3xl mx-auto">
              Our esteemed Advisory Board convenes distinguished university deans, corporate C-suite leaders, international scientists, and renowned scholars from the USA, Europe, Australia, and India to steer our academic trajectory and student success.
            </p>

            {/* Highlights Bar */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/10 text-left">
              <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 border border-white/10 backdrop-blur-sm">
                <Globe2 className="h-5 w-5 text-[#E8871A] shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white">Global Pedagogy</p>
                  <p className="text-[11px] text-slate-300">International benchmarking &amp; tie-ups</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 border border-white/10 backdrop-blur-sm">
                <Briefcase className="h-5 w-5 text-[#E8871A] shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white">Industry Insights</p>
                  <p className="text-[11px] text-slate-300">Curricula aligned to market trends</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 border border-white/10 backdrop-blur-sm">
                <Award className="h-5 w-5 text-[#E8871A] shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white">Research Mentorship</p>
                  <p className="text-[11px] text-slate-300">Guidance for faculty &amp; PhD scholars</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Advisory Board Members Grid ── */}
      <section className="py-16 md:py-24">
        <div className="gu-container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0A1F44]/5 px-4 py-1.5 mb-3 border border-[#0A1F44]/10">
              <Compass className="h-4 w-4 text-[#E8871A]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0A1F44]">
                Eminent Council
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1F44]">
              Members of the <span className="text-[#E8871A]">Advisory Board</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Bringing together cross-disciplinary expertise from prestigious institutions and multinational enterprises around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {advisoryMembers.map((member) => (
              <div
                key={member.name}
                className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300"
              >
                {/* Member Portrait */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Category Pill on Image */}
                  <span className="absolute bottom-3 left-3 rounded-lg bg-[#0A1F44]/90 px-3 py-1 text-[11px] font-bold text-[#E8871A] backdrop-blur-md border border-white/10">
                    {member.category}
                  </span>
                </div>

                {/* Member Details */}
                <div className="flex flex-1 flex-col p-6 text-left">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0A1F44] group-hover:text-[#E8871A] transition-colors leading-snug">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    {member.role}
                  </p>

                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-600 flex-1">
                    <Building2 className="h-4 w-4 shrink-0 text-slate-400 mt-0.5" />
                    <span className="leading-relaxed">{member.institution}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Strategic Advisory Pillars Section ── */}
      <section className="bg-slate-100/70 py-16 md:py-20 border-y border-slate-200">
        <div className="gu-container">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#E8871A]">
                Institutional Governance
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A1F44] mt-1">
                How Our Advisory Board Shapes Geeta University
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A1F44] text-[#E8871A] mb-4">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#0A1F44] mb-2">
                  Curriculum Innovation
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Infusing cutting-edge technology, AI modules, experiential labs, and NEP 2020 multi-disciplinary electives.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A1F44] text-[#E8871A] mb-4">
                  <Globe2 className="h-5 w-5" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#0A1F44] mb-2">
                  Global Linkages
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Fostering student exchange programs, joint research papers, and international faculty masterclasses.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A1F44] text-[#E8871A] mb-4">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#0A1F44] mb-2">
                  Career Readiness
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Aligning academic outputs with Fortune 500 employer standards and modern entrepreneurial incubators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Legacy & Ecosystem Section ── */}
      <LegacyEcosystem
        id="legacy-ecosystem"
        contextText="Our Advisory Board actively guides the expansive vision and multi-tier talent development framework of:"
      />
    </div>
  );
}
