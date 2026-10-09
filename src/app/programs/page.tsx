import Link from "next/link";
import type { Metadata } from "next";
import { getPublishedPrograms } from "@/server/services/publicAcademic";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Programs | Geeta University" };

export default async function ProgramsPage() {
  const programs = await getPublishedPrograms();
  return <main className="min-h-screen bg-white text-[#0A1F44]"><header className="border-b border-slate-200 bg-slate-50 px-5 py-12"><div className="mx-auto max-w-5xl"><h1 className="font-serif text-4xl font-bold">Programs</h1></div></header><div className="mx-auto max-w-5xl divide-y divide-slate-200 px-5 py-10">{programs.length ? programs.map((program) => <article key={program.id} className="py-6 first:pt-0"><p className="text-sm text-slate-600">{program.department.name}{program.level ? ` · ${program.level}` : ""}</p><h2 className="mt-2 font-serif text-2xl font-bold"><Link href={`/programs/${program.slug}`} className="hover:text-[#E8871A]">{program.name}</Link></h2>{program.duration && <p className="mt-2 text-slate-700">Duration: {program.duration}</p>}</article>) : <p className="text-slate-600">No programs have been published yet.</p>}</div></main>;
}
