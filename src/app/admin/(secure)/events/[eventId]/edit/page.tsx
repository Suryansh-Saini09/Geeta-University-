import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";

import EventForm from "@/components/admin/EventForm";
import { updateEventAction } from "@/features/admin/events/actions";
import { hasPermission } from "@/server/auth/permissions";
import { requireAdminSession } from "@/server/auth/session";
import { getAdminEventById } from "@/server/services/events";

export default async function EditEventPage({ params, searchParams }: { params: Promise<{ eventId: string }>; searchParams: Promise<{ error?: string }> }) {
  const { eventId } = await params;
  const [{ error }, event, session] = await Promise.all([searchParams, getAdminEventById(eventId), requireAdminSession()]);
  if (!event) notFound();
  return <div className="space-y-6">
    <div className="flex flex-wrap items-end justify-between gap-4"><div><Link href="/admin/events" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600"><ArrowLeft className="h-4 w-4" /> Back to events</Link><h2 className="mt-4 font-serif text-3xl font-bold text-[#0A1F44]">Edit {event.title}</h2></div>{event.status === "PUBLISHED" ? <Link href={`/events/${event.slug}`} target="_blank" className="inline-flex items-center gap-1 text-sm font-semibold text-[#0A1F44]"><ExternalLink className="h-4 w-4" /> View event</Link> : null}</div>
    {error ? <p role="alert" className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</p> : null}
    <EventForm event={event} action={updateEventAction} canPublish={hasPermission(session.user.role, "publishContent")} canArchive={hasPermission(session.user.role, "deleteContent")} />
  </div>;
}
