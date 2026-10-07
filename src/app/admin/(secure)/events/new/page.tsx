import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import EventForm from "@/components/admin/EventForm";
import { createEventAction } from "@/features/admin/events/actions";
import { hasPermission } from "@/server/auth/permissions";
import { requireAdminSession } from "@/server/auth/session";

export default async function NewEventPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const [{ error }, session] = await Promise.all([searchParams, requireAdminSession()]);
  return <div className="space-y-6">
    <Link href="/admin/events" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600"><ArrowLeft className="h-4 w-4" /> Back to events</Link>
    <h2 className="font-serif text-3xl font-bold text-[#0A1F44]">New Event</h2>
    {error ? <p role="alert" className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</p> : null}
    <EventForm action={createEventAction} canPublish={hasPermission(session.user.role, "publishContent")} canArchive={hasPermission(session.user.role, "deleteContent")} />
  </div>;
}
