import Link from "next/link";
import type { Metadata } from "next";
import { getPublishedNotices } from "@/server/services/publicAcademic";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Notices | Geeta University" };

export default async function NoticesPage() {
  const notices = await getPublishedNotices();
  return <main className="min-h-screen bg-white text-[#0A1F44]"><header className="border-b border-slate-200 bg-slate-50 px-5 py-12"><div className="mx-auto max-w-5xl"><h1 className="font-serif text-4xl font-bold">Notices</h1></div></header><div className="mx-auto max-w-5xl divide-y divide-slate-200 px-5 py-10">{notices.length ? notices.map((notice) => <article key={notice.slug} className="py-6 first:pt-0"><p className="text-sm text-slate-600">{notice.publishedAt?.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</p><h2 className="mt-2 font-serif text-2xl font-bold"><Link href={`/notices/${notice.slug}`} className="hover:text-[#E8871A]">{notice.title}</Link></h2>{notice.summary && <p className="mt-2 text-slate-700">{notice.summary}</p>}</article>) : <p className="text-slate-600">No notices have been published yet.</p>}</div></main>;
}
