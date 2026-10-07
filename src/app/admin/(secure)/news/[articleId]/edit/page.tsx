import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";

import NewsForm from "@/components/admin/NewsForm";
import { updateNewsAction } from "@/features/admin/news/actions";
import { hasPermission } from "@/server/auth/permissions";
import { requireAdminSession } from "@/server/auth/session";
import { getAdminNewsById } from "@/server/services/news";

export default async function EditNewsPage({ params, searchParams }: { params: Promise<{ articleId: string }>; searchParams: Promise<{ error?: string }> }) {
  const { articleId } = await params;
  const [{ error }, article, session] = await Promise.all([searchParams, getAdminNewsById(articleId), requireAdminSession()]);
  if (!article) notFound();
  return <div className="space-y-6">
    <div className="flex flex-wrap items-end justify-between gap-4"><div><Link href="/admin/news" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600"><ArrowLeft className="h-4 w-4" /> Back to news</Link><h2 className="mt-4 font-serif text-3xl font-bold text-[#0A1F44]">Edit {article.title}</h2></div>{article.status === "PUBLISHED" ? <Link href={`/news/${article.slug}`} target="_blank" className="inline-flex items-center gap-1 text-sm font-semibold text-[#0A1F44]"><ExternalLink className="h-4 w-4" /> View article</Link> : null}</div>
    {error ? <p role="alert" className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</p> : null}
    <NewsForm article={article} action={updateNewsAction} canPublish={hasPermission(session.user.role, "publishContent")} canArchive={hasPermission(session.user.role, "deleteContent")} />
  </div>;
}
