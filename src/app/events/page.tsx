import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, MapPin } from "lucide-react";

import { getPublishedEvents } from "@/server/services/events";

export const metadata: Metadata = { title: "Events | Geeta University", description: "Events at Geeta University." };
export const dynamic = "force-dynamic";

export default async function EventsPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page: rawPage } = await searchParams;
  const requestedPage = Number(rawPage);
  const result = await getPublishedEvents(Number.isSafeInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1);
  return <div className="min-h-screen bg-white text-[#0A1F44]">
    <header className="border-b border-slate-200 bg-slate-50 px-5 py-12 sm:py-16"><div className="mx-auto max-w-5xl"><h1 className="font-serif text-4xl font-bold sm:text-5xl">Events</h1></div></header>
    <div className="mx-auto max-w-5xl px-5 py-10 sm:py-14">
      {result.events.length ? <div className="divide-y divide-slate-200">{result.events.map((event) => <article key={event.id} className="py-7 first:pt-0"><p className="text-sm font-semibold text-[#E8871A]">{event.startsAt.toLocaleString("en-IN", { timeZone: "Asia/Kolkata", day: "numeric", month: "long", year: "numeric", hour: "numeric", minute: "2-digit" })} IST</p><h2 className="mt-2 font-serif text-2xl font-bold"><Link href={`/events/${event.slug}`} className="hover:text-[#E8871A]">{event.title}</Link></h2>{event.location ? <p className="mt-2 flex items-center gap-1 text-sm text-slate-600"><MapPin className="h-4 w-4" /> {event.location}</p> : null}<p className="mt-3 text-slate-700">{event.excerpt}</p><Link href={`/events/${event.slug}`} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold hover:text-[#E8871A]">Event details <ArrowRight className="h-4 w-4" /></Link></article>)}</div> : <p className="text-slate-600">No events have been published yet.</p>}
      {result.totalPages > 1 ? <nav aria-label="Event pages" className="mt-8 flex items-center justify-between border-t border-slate-200 pt-5 text-sm font-semibold">{result.page > 1 ? <Link href={`/events?page=${result.page - 1}`}>Previous</Link> : <span /> }<span>Page {result.page} of {result.totalPages}</span>{result.page < result.totalPages ? <Link href={`/events?page=${result.page + 1}`}>Next</Link> : <span />}</nav> : null}
    </div>
  </div>;
}
