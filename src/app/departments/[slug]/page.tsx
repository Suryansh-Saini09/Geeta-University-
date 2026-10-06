import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublishedDepartment } from "@/server/services/publicAcademic";

export const dynamic = "force-dynamic";
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = await getPublishedDepartment((await params).slug);
  return item ? { title: item.seo?.title ?? item.name, description: item.seo?.description ?? item.summary ?? undefined, robots: item.seo?.noIndex ? { index: false } : undefined } : {};
}

export default async function DepartmentPage({ params }: Props) {
  const item = await getPublishedDepartment((await params).slug);
  if (!item) notFound();
  return <main className="min-h-screen bg-white text-[#0A1F44]"><header className="border-b border-slate-200 bg-slate-50 px-5 py-12"><div className="mx-auto max-w-5xl"><Link href="/departments" className="text-sm font-semibold hover:text-[#E8871A]">Departments</Link><h1 className="mt-5 font-serif text-4xl font-bold">{item.name}</h1>{item.summary && <p className="mt-4 text-lg text-slate-700">{item.summary}</p>}</div></header>
    <div className="mx-auto max-w-5xl px-5 py-10">{item.programs.length > 0 && <section><h2 className="font-serif text-2xl font-bold">Programs</h2><ul className="mt-4 space-y-3">{item.programs.map((program) => <li key={program.id}><Link href={`/programs/${program.slug}`} className="font-semibold hover:text-[#E8871A]">{program.name}</Link></li>)}</ul></section>}{item.faculty.length > 0 && <section className="mt-10"><h2 className="font-serif text-2xl font-bold">Faculty</h2><ul className="mt-4 space-y-3">{item.faculty.map((member) => <li key={member.id}><Link href={`/faculty/${member.slug}`} className="font-semibold hover:text-[#E8871A]">{member.name}</Link>{member.designation && <span className="text-slate-600"> · {member.designation}</span>}</li>)}</ul></section>}</div>
  </main>;
}
