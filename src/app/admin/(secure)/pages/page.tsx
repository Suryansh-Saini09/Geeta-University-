import Link from "next/link";
import { ContentStatus } from "@prisma/client";
import { ExternalLink, Pencil, Plus, Search } from "lucide-react";

import ArchivePageButton from "@/components/admin/ArchivePageButton";
import { hasPermission } from "@/server/auth/permissions";
import { requireAdminSession } from "@/server/auth/session";
import { getAdminPages } from "@/server/services/pages";

export const dynamic = "force-dynamic";

export default async function PagesPage({ searchParams }: { searchParams: Promise<{ q?: string; status?: string; page?: string; created?: string; updated?: string; archived?: string; error?: string }> }) {
  const [params, session] = await Promise.all([searchParams, requireAdminSession()]);
  const status = Object.values(ContentStatus).includes(params.status as ContentStatus) ? params.status as ContentStatus : "ALL";
  const query = params.q?.trim() ?? "";
  const requestedPage = Number(params.page);
  const result = await getAdminPages({ query, status, page: Number.isSafeInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1 });
  const pageHref = (page: number) => {
    const search = new URLSearchParams();
    if (query) search.set("q", query);
    if (status !== "ALL") search.set("status", status);
    search.set("page", String(page));
    return `/admin/pages?${search}`;
  };

  return <div className="space-y-6">
    <div className="flex flex-wrap items-end justify-between gap-4"><div><h2 className="font-serif text-3xl font-bold text-[#0A1F44]">Pages</h2><p className="mt-1 text-sm text-slate-600">{result.totalCount} matching page{result.totalCount === 1 ? "" : "s"}</p></div><Link href="/admin/pages/new" className="inline-flex items-center gap-2 rounded-lg bg-[#E8871A] px-4 py-2.5 text-sm font-bold text-white"><Plus className="h-4 w-4" /> Create Page</Link></div>
    {params.created || params.updated || params.archived ? <p role="status" className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">Page {params.created ? "created" : params.updated ? "updated" : "archived"} successfully.</p> : null}
    {params.error ? <p role="alert" className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">Page could not be found.</p> : null}
    <section className="overflow-hidden rounded-lg border border-slate-200 bg-white">
      <form className="flex flex-wrap items-center gap-2 border-b border-slate-200 p-4"><div className="relative min-w-48 flex-1"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" /><input type="search" name="q" defaultValue={query} placeholder="Search pages" className="w-full rounded-lg border border-slate-200 py-2 pl-9 pr-3 text-sm" /></div><select name="status" defaultValue={status} className="rounded-lg border border-slate-200 px-3 py-2 text-sm"><option value="ALL">All statuses</option><option value={ContentStatus.DRAFT}>Draft</option><option value={ContentStatus.PUBLISHED}>Published</option><option value={ContentStatus.ARCHIVED}>Archived</option></select><button className="rounded-lg bg-[#0A1F44] px-4 py-2 text-sm font-bold text-white">Apply</button>{query || status !== "ALL" ? <Link href="/admin/pages" className="px-3 py-2 text-sm font-semibold text-slate-600">Reset</Link> : null}</form>
      {result.pages.length ? <div className="overflow-x-auto"><table className="w-full min-w-[850px] text-left text-sm"><thead className="bg-slate-50 text-xs uppercase text-slate-500"><tr><th className="px-4 py-3">Page</th><th className="px-4 py-3">Status</th><th className="px-4 py-3">Revisions</th><th className="px-4 py-3">Updated by</th><th className="px-4 py-3">Updated</th><th className="px-4 py-3">Actions</th></tr></thead><tbody className="divide-y divide-slate-100">{result.pages.map((page) => <tr key={page.id}><td className="px-4 py-3"><p className="font-bold text-[#0A1F44]">{page.title}</p><p className="text-xs text-slate-500">/pages/{page.slug}</p></td><td className="px-4 py-3">{page.status}</td><td className="px-4 py-3">{page._count.revisions}</td><td className="px-4 py-3">{page.updatedBy?.name ?? "-"}</td><td className="px-4 py-3 text-slate-500">{page.updatedAt.toLocaleDateString("en-IN")}</td><td className="px-4 py-3"><div className="flex items-center gap-2"><Link href={`/admin/pages/${page.id}/edit`} className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-bold"><Pencil className="h-3.5 w-3.5" /> Edit</Link>{page.status === ContentStatus.PUBLISHED ? <Link href={`/pages/${page.slug}`} target="_blank" aria-label={`View ${page.title}`} title="View published page" className="rounded-lg border border-slate-200 p-1.5"><ExternalLink className="h-4 w-4" /></Link> : null}{page.status !== ContentStatus.ARCHIVED && hasPermission(session.user.role, "deleteContent") ? <ArchivePageButton id={page.id} title={page.title} /> : null}</div></td></tr>)}</tbody></table></div> : <p className="p-8 text-center text-sm text-slate-600">No pages found.</p>}
      <div className="flex items-center justify-between border-t border-slate-200 p-4 text-sm"><span>Page {result.page} of {result.totalPages}</span><div className="flex gap-3">{result.page > 1 ? <Link href={pageHref(result.page - 1)} className="font-semibold text-[#0A1F44]">Previous</Link> : null}{result.page < result.totalPages ? <Link href={pageHref(result.page + 1)} className="font-semibold text-[#0A1F44]">Next</Link> : null}</div></div>
    </section>
  </div>;
}
