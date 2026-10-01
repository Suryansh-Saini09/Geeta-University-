import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getPublishedPageBySlug } from "@/server/services/pages";
import { parsePageSections } from "@/validations/page";

export const dynamic = "force-dynamic";

type PublicPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PublicPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPublishedPageBySlug(slug);
  if (!page) return {};
  return {
    title: page.seo?.title ?? page.title,
    description: page.seo?.description ?? undefined,
    robots: page.seo?.noIndex ? { index: false, follow: false } : undefined,
  };
}

export default async function PublicContentPage({ params }: PublicPageProps) {
  const { slug } = await params;
  const page = await getPublishedPageBySlug(slug);
  if (!page) notFound();
  const sections = parsePageSections(page.sections);

  return <article className="min-h-screen bg-white text-[#0A1F44]">
    <header className="border-b border-slate-200 bg-slate-50 px-5 py-12 sm:py-16"><div className="mx-auto max-w-5xl"><h1 className="font-serif text-4xl font-bold sm:text-5xl">{page.title}</h1></div></header>
    <div className="mx-auto max-w-5xl px-5 py-10 sm:py-14">{sections.map((section, index) => <section key={index} className="border-b border-slate-200 py-7 first:pt-0 last:border-b-0"><h2 className="font-serif text-2xl font-bold">{section.heading}</h2><p className="mt-4 whitespace-pre-wrap text-base leading-8 text-slate-700">{section.body}</p></section>)}</div>
  </article>;
}
