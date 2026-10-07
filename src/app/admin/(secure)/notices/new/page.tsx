import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import NoticeForm from "@/components/admin/NoticeForm";
import { createNoticeAction } from "@/features/admin/notices/actions";
import { hasPermission } from "@/server/auth/permissions";
import { requireAdminSession } from "@/server/auth/session";

export default async function NewNoticePage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const [{ error }, session] = await Promise.all([searchParams, requireAdminSession()]);
  return <div className="space-y-6">
    <Link href="/admin/notices" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600"><ArrowLeft className="h-4 w-4" /> Back to notices</Link>
    <h2 className="font-serif text-3xl font-bold text-[#0A1F44]">New Notice</h2>
    {error ? <p role="alert" className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</p> : null}
    <NoticeForm action={createNoticeAction} canPublish={hasPermission(session.user.role, "publishContent")} canArchive={hasPermission(session.user.role, "deleteContent")} />
  </div>;
}
