import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import NoticeForm from "@/components/admin/NoticeForm";
import { updateNoticeAction } from "@/features/admin/notices/actions";
import { hasPermission } from "@/server/auth/permissions";
import { requireAdminSession } from "@/server/auth/session";
import { getAdminNoticeById } from "@/server/services/notices";

export default async function EditNoticePage({ params, searchParams }: { params: Promise<{ noticeId: string }>; searchParams: Promise<{ error?: string }> }) {
  const { noticeId } = await params;
  const [{ error }, notice, session] = await Promise.all([searchParams, getAdminNoticeById(noticeId), requireAdminSession()]);
  if (!notice) notFound();
  return <div className="space-y-6">
    <Link href="/admin/notices" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600"><ArrowLeft className="h-4 w-4" /> Back to notices</Link>
    <h2 className="font-serif text-3xl font-bold text-[#0A1F44]">Edit {notice.title}</h2>
    {error ? <p role="alert" className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</p> : null}
    <NoticeForm notice={notice} action={updateNoticeAction} canPublish={hasPermission(session.user.role, "publishContent")} canArchive={hasPermission(session.user.role, "deleteContent")} />
  </div>;
}
