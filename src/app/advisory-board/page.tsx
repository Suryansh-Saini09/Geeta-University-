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
          <div className="absolute inset-0" />
        </div>

        <div className="gu-container relative z-10">
          <div className="mx-auto max-w-4xl text-center">

            {/* Title */}
            <h1 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[54px] leading-tight">
              Advisory <span className="text-[#E8871A]">Board</span>
            </h1>
          </div>
        </div>
      </section>

      {/* ── Advisory Board Members Grid ── */}
      <section className="py-16 md:py-24">
        <div className="gu-container">

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

      {/* ── Legacy & Ecosystem Section ── */}
      <LegacyEcosystem
        id="legacy-ecosystem"
        contextText="Our Advisory Board actively guides the expansive vision and multi-tier talent development framework of:"
      />
    </div>
  );
}
