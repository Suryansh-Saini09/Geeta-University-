import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublishedNotice } from "@/server/services/publicAcademic";

export const dynamic = "force-dynamic";
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const notice = await getPublishedNotice((await params).slug);
  return notice ? { title: notice.seo?.title ?? notice.title, description: notice.seo?.description ?? notice.summary ?? undefined, robots: notice.seo?.noIndex ? { index: false } : undefined } : {};
}

export default async function NoticePage({ params }: Props) {
  const notice = await getPublishedNotice((await params).slug);
  if (!notice) notFound();
  return <article className="min-h-screen bg-white text-[#0A1F44]"><header className="border-b border-slate-200 bg-slate-50 px-5 py-12"><div className="mx-auto max-w-5xl"><Link href="/notices" className="text-sm font-semibold hover:text-[#E8871A]">Notices</Link><p className="mt-5 text-sm text-slate-600">{notice.publishedAt?.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</p><h1 className="mt-2 font-serif text-4xl font-bold">{notice.title}</h1>{notice.summary && <p className="mt-4 text-lg text-slate-700">{notice.summary}</p>}</div></header><div className="mx-auto max-w-5xl px-5 py-10 whitespace-pre-wrap leading-8 text-slate-700">{typeof notice.body === "string" ? notice.body : ""}</div></article>;
}
