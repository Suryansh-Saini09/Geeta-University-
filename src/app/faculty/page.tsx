import Link from "next/link";
import type { Metadata } from "next";
import { getPublishedFaculty } from "@/server/services/publicAcademic";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Faculty | Geeta University" };

export default async function FacultyPage() {
  const faculty = await getPublishedFaculty();
  return <main className="min-h-screen bg-white text-[#0A1F44]"><header className="border-b border-slate-200 bg-slate-50 px-5 py-12"><div className="mx-auto max-w-5xl"><h1 className="font-serif text-4xl font-bold">Faculty</h1></div></header><div className="mx-auto max-w-5xl divide-y divide-slate-200 px-5 py-10">{faculty.length ? faculty.map((member) => <article key={member.id} className="py-6 first:pt-0"><h2 className="font-serif text-2xl font-bold"><Link href={`/faculty/${member.slug}`} className="hover:text-[#E8871A]">{member.name}</Link></h2><p className="mt-2 text-slate-700">{[member.designation, member.department?.name].filter(Boolean).join(" · ")}</p></article>) : <p className="text-slate-600">No faculty members have been published yet.</p>}</div></main>;
}
