import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { getPublishedNews } from "@/server/services/news";

export const metadata: Metadata = { title: "News | Geeta University", description: "News and updates from Geeta University." };
export const dynamic = "force-dynamic";

export default async function NewsPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page: rawPage } = await searchParams;
  const requestedPage = Number(rawPage);
  const result = await getPublishedNews(Number.isSafeInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1);
  return <div className="min-h-screen bg-white text-[#0A1F44]">
    <header className="border-b border-slate-200 bg-slate-50 px-5 py-12 sm:py-16"><div className="mx-auto max-w-5xl"><h1 className="font-serif text-4xl font-bold sm:text-5xl">News</h1></div></header>
    <div className="mx-auto max-w-5xl px-5 py-10 sm:py-14">
      {result.articles.length ? <div className="divide-y divide-slate-200">{result.articles.map((article) => <article key={article.id} className="py-7 first:pt-0"><p className="text-sm text-slate-500">{article.publishedAt?.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</p><h2 className="mt-2 font-serif text-2xl font-bold"><Link href={`/news/${article.slug}`} className="hover:text-[#E8871A]">{article.title}</Link></h2><p className="mt-3 text-slate-700">{article.excerpt}</p><Link href={`/news/${article.slug}`} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#0A1F44] hover:text-[#E8871A]">Read article <ArrowRight className="h-4 w-4" /></Link></article>)}</div> : <p className="text-slate-600">No news articles have been published yet.</p>}
      {result.totalPages > 1 ? <nav aria-label="News pages" className="mt-8 flex items-center justify-between border-t border-slate-200 pt-5 text-sm font-semibold">{result.page > 1 ? <Link href={`/news?page=${result.page - 1}`}>Previous</Link> : <span /> }<span>Page {result.page} of {result.totalPages}</span>{result.page < result.totalPages ? <Link href={`/news?page=${result.page + 1}`}>Next</Link> : <span />}</nav> : null}
    </div>
  </div>;
}
