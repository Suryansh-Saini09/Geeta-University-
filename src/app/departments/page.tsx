import Link from "next/link";
import type { Metadata } from "next";
import { getPublishedDepartments } from "@/server/services/publicAcademic";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Departments | Geeta University" };

export default async function DepartmentsPage() {
  const departments = await getPublishedDepartments();
  return <main className="min-h-screen bg-white text-[#0A1F44]">
    <header className="border-b border-slate-200 bg-slate-50 px-5 py-12"><div className="mx-auto max-w-5xl"><h1 className="font-serif text-4xl font-bold">Departments</h1></div></header>
    <div className="mx-auto max-w-5xl divide-y divide-slate-200 px-5 py-10">
      {departments.length ? departments.map((item) => <article key={item.slug} className="py-6 first:pt-0"><h2 className="font-serif text-2xl font-bold"><Link href={`/departments/${item.slug}`} className="hover:text-[#E8871A]">{item.name}</Link></h2>{item.summary && <p className="mt-2 text-slate-700">{item.summary}</p>}</article>) : <p className="text-slate-600">No departments have been published yet.</p>}
    </div>
  </main>;
}
