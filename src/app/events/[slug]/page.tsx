import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin } from "lucide-react";

import { getPublishedEventBySlug } from "@/server/services/events";

export const dynamic = "force-dynamic";

type EventPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = await getPublishedEventBySlug(slug);
  if (!event) return {};
  return {
    title: event.seo?.title ?? event.title,
    description: event.seo?.description ?? event.excerpt ?? undefined,
    robots: event.seo?.noIndex ? { index: false, follow: false } : undefined,
  };
}

export default async function PublicEventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = await getPublishedEventBySlug(slug);
  if (!event) notFound();
  const dateFormat = { timeZone: "Asia/Kolkata", day: "numeric", month: "long", year: "numeric", hour: "numeric", minute: "2-digit" } as const;
  return <article className="min-h-screen bg-white text-[#0A1F44]">
    <header className="border-b border-slate-200 bg-slate-50 px-5 py-12 sm:py-16"><div className="mx-auto max-w-4xl"><Link href="/events" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#E8871A]"><ArrowLeft className="h-4 w-4" /> All events</Link><h1 className="mt-7 font-serif text-4xl font-bold sm:text-5xl">{event.title}</h1><p className="mt-4 text-lg leading-8 text-slate-700">{event.excerpt}</p></div></header>
    <div className="mx-auto max-w-4xl space-y-8 px-5 py-10 sm:py-14"><div className="grid gap-5 border-b border-slate-200 pb-8 sm:grid-cols-2"><div><p className="text-xs font-bold uppercase text-slate-500">Starts</p><p className="mt-2 font-semibold">{event.startsAt.toLocaleString("en-IN", dateFormat)} IST</p></div>{event.endsAt ? <div><p className="text-xs font-bold uppercase text-slate-500">Ends</p><p className="mt-2 font-semibold">{event.endsAt.toLocaleString("en-IN", dateFormat)} IST</p></div> : null}{event.location ? <p className="flex items-center gap-2 text-slate-700"><MapPin className="h-4 w-4" /> {event.location}</p> : null}</div><div className="whitespace-pre-wrap text-base leading-8 text-slate-700">{typeof event.body === "string" ? event.body : ""}</div></div>
  </article>;
}
