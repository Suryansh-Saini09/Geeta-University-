import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublishedFacultyMember } from "@/server/services/publicAcademic";

export const dynamic = "force-dynamic";
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const member = await getPublishedFacultyMember((await params).slug);
  return member ? { title: `${member.name} | Geeta University`, description: member.designation ?? undefined } : {};
}

export default async function FacultyMemberPage({ params }: Props) {
  const member = await getPublishedFacultyMember((await params).slug);
  if (!member) notFound();
  return <main className="min-h-screen bg-white text-[#0A1F44]"><header className="border-b border-slate-200 bg-slate-50 px-5 py-12"><div className="mx-auto max-w-5xl"><Link href="/faculty" className="text-sm font-semibold hover:text-[#E8871A]">Faculty</Link><h1 className="mt-5 font-serif text-4xl font-bold">{member.name}</h1>{member.designation && <p className="mt-3 text-lg text-slate-700">{member.designation}</p>}</div></header><div className="mx-auto max-w-5xl space-y-7 px-5 py-10">{member.department && <p>Department: <Link href={`/departments/${member.department.slug}`} className="font-semibold hover:text-[#E8871A]">{member.department.name}</Link></p>}{member.qualification && <p>Qualification: {member.qualification}</p>}{member.bio && <p className="whitespace-pre-wrap leading-8 text-slate-700">{member.bio}</p>}{member.programs.length > 0 && <section><h2 className="font-serif text-2xl font-bold">Programs</h2><ul className="mt-3 space-y-2">{member.programs.map(({ program }) => <li key={program.slug}><Link href={`/programs/${program.slug}`} className="hover:text-[#E8871A]">{program.name}</Link></li>)}</ul></section>}</div></main>;
}
