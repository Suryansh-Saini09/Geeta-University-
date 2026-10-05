import Link from "next/link";
import type { getPublishedProgram } from "@/server/services/publicAcademic";

export default function CmsProgramPage({ program }: { program: NonNullable<Awaited<ReturnType<typeof getPublishedProgram>>> }) {
  return <main className="min-h-screen bg-white text-[#0A1F44]"><header className="border-b border-slate-200 bg-slate-50 px-5 py-12"><div className="mx-auto max-w-5xl"><Link href={`/departments/${program.department.slug}`} className="text-sm font-semibold hover:text-[#E8871A]">{program.department.name}</Link><h1 className="mt-5 font-serif text-4xl font-bold">{program.name}</h1>{program.level && <p className="mt-3 text-lg text-slate-700">{program.level}</p>}</div></header><div className="mx-auto max-w-5xl space-y-8 px-5 py-10">{program.duration && <section><h2 className="font-serif text-2xl font-bold">Duration</h2><p className="mt-2 text-slate-700">{program.duration}</p></section>}{program.eligibility && <section><h2 className="font-serif text-2xl font-bold">Eligibility</h2><p className="mt-2 whitespace-pre-wrap text-slate-700">{program.eligibility}</p></section>}</div></main>;
}
