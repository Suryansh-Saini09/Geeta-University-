import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { getPublishedNewsBySlug } from "@/server/services/news";

export const dynamic = "force-dynamic";

type NewsArticleProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: NewsArticleProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getPublishedNewsBySlug(slug);
  if (!article) return {};
  return {
    title: article.seo?.title ?? article.title,
    description: article.seo?.description ?? article.excerpt ?? undefined,
    robots: article.seo?.noIndex ? { index: false, follow: false } : undefined,
  };
}

export default async function NewsArticlePage({ params }: NewsArticleProps) {
  const { slug } = await params;
  const article = await getPublishedNewsBySlug(slug);
  if (!article) notFound();
  return <article className="min-h-screen bg-white text-[#0A1F44]">
    <header className="border-b border-slate-200 bg-slate-50 px-5 py-12 sm:py-16"><div className="mx-auto max-w-4xl"><Link href="/news" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#E8871A]"><ArrowLeft className="h-4 w-4" /> All news</Link><p className="mt-7 text-sm text-slate-500">{article.publishedAt?.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</p><h1 className="mt-2 font-serif text-4xl font-bold sm:text-5xl">{article.title}</h1><p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">{article.excerpt}</p></div></header>
    <div className="mx-auto max-w-4xl px-5 py-10 sm:py-14"><div className="whitespace-pre-wrap text-base leading-8 text-slate-700">{typeof article.body === "string" ? article.body : ""}</div></div>
  </article>;
}
