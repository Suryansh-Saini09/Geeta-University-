import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import NewsForm from "@/components/admin/NewsForm";
import { createNewsAction } from "@/features/admin/news/actions";
import { hasPermission } from "@/server/auth/permissions";
import { requireAdminSession } from "@/server/auth/session";

export default async function NewNewsPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const [{ error }, session] = await Promise.all([searchParams, requireAdminSession()]);
  return <div className="space-y-6">
    <Link href="/admin/news" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600"><ArrowLeft className="h-4 w-4" /> Back to news</Link>
    <h2 className="font-serif text-3xl font-bold text-[#0A1F44]">New Article</h2>
    {error ? <p role="alert" className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</p> : null}
    <NewsForm action={createNewsAction} canPublish={hasPermission(session.user.role, "publishContent")} canArchive={hasPermission(session.user.role, "deleteContent")} />
  </div>;
}
