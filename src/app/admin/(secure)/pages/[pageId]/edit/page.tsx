import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";

import PageForm from "@/components/admin/PageForm";
import { updatePageAction } from "@/features/admin/pages/actions";
import { hasPermission } from "@/server/auth/permissions";
import { requireAdminSession } from "@/server/auth/session";
import { getAdminPageById } from "@/server/services/pages";
import { parsePageSections } from "@/validations/page";

export default async function EditPage({ params, searchParams }: { params: Promise<{ pageId: string }>; searchParams: Promise<{ error?: string }> }) {
  const { pageId } = await params;
  const [{ error }, page, session] = await Promise.all([searchParams, getAdminPageById(pageId), requireAdminSession()]);
  if (!page) notFound();
  return <div className="space-y-6">
    <div className="flex flex-wrap items-end justify-between gap-4"><div><Link href="/admin/pages" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600"><ArrowLeft className="h-4 w-4" /> Back to pages</Link><h2 className="mt-4 font-serif text-3xl font-bold text-[#0A1F44]">Edit {page.title}</h2></div>{page.status === "PUBLISHED" ? <Link href={`/pages/${page.slug}`} target="_blank" className="inline-flex items-center gap-1 text-sm font-semibold text-[#0A1F44]"><ExternalLink className="h-4 w-4" /> View page</Link> : null}</div>
    {error ? <p role="alert" className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</p> : null}
    <PageForm page={{ id: page.id, title: page.title, slug: page.slug, status: page.status, sections: parsePageSections(page.sections), seoTitle: page.seo?.title ?? page.title, seoDescription: page.seo?.description ?? "", noIndex: page.seo?.noIndex ?? false }} action={updatePageAction} canPublish={hasPermission(session.user.role, "publishContent")} canArchive={hasPermission(session.user.role, "deleteContent")} />
    <section className="border-t border-slate-200 pt-5"><h3 className="font-serif text-xl font-bold text-[#0A1F44]">Recent revisions</h3><div className="mt-3 divide-y divide-slate-200">{page.revisions.map((revision) => <div key={revision.id} className="flex flex-wrap justify-between gap-2 py-3 text-sm"><span>{revision.note || "Saved page"}</span><span className="text-slate-500">{revision.createdBy?.name ?? "Unknown"} · {revision.createdAt.toLocaleString("en-IN")}</span></div>)}</div></section>
  </div>;
}
