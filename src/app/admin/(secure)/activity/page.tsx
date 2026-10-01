import Link from "next/link";
import { AuditAction } from "@prisma/client";
import { notFound } from "next/navigation";

import { hasPermission } from "@/server/auth/permissions";
import { requireAdminSession } from "@/server/auth/session";
import { getAuditLogs } from "@/server/services/auditLogs";

export const dynamic = "force-dynamic";

const entityTypes = ["AdminUser", "Page", "Department", "Program", "FacultyMember", "Notice", "NewsArticle", "Event", "GalleryAlbum", "MediaAsset"];

export default async function ActivityPage({ searchParams }: { searchParams: Promise<{ action?: string; entityType?: string; page?: string }> }) {
  const [params, session] = await Promise.all([searchParams, requireAdminSession()]);
  if (!hasPermission(session.user.role, "viewAuditLogs")) notFound();
  const action = Object.values(AuditAction).includes(params.action as AuditAction) ? params.action as AuditAction : "ALL";
  const entityType = entityTypes.includes(params.entityType ?? "") ? params.entityType : undefined;
  const requestedPage = Number(params.page);
  const result = await getAuditLogs({ action, entityType, page: Number.isSafeInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1 });
  const pageHref = (page: number) => {
    const search = new URLSearchParams();
    if (action !== "ALL") search.set("action", action);
    if (entityType) search.set("entityType", entityType);
    search.set("page", String(page));
    return `/admin/activity?${search}`;
  };
  return <div className="space-y-6"><div><h2 className="font-serif text-3xl font-bold text-[#0A1F44]">Activity</h2><p className="mt-1 text-sm text-slate-600">{result.totalCount} matching record{result.totalCount === 1 ? "" : "s"}</p></div>
    <section className="overflow-hidden rounded-lg border border-slate-200 bg-white"><form className="flex flex-wrap items-center gap-2 border-b border-slate-200 p-4"><select name="action" defaultValue={action} aria-label="Action" className="rounded-lg border border-slate-200 px-3 py-2 text-sm"><option value="ALL">All actions</option>{Object.values(AuditAction).map((value) => <option key={value} value={value}>{value.replaceAll("_", " ")}</option>)}</select><select name="entityType" defaultValue={entityType ?? ""} aria-label="Content type" className="rounded-lg border border-slate-200 px-3 py-2 text-sm"><option value="">All content types</option>{entityTypes.map((value) => <option key={value} value={value}>{value}</option>)}</select><button type="submit" className="rounded-lg bg-[#0A1F44] px-4 py-2 text-sm font-bold text-white">Apply</button>{action !== "ALL" || entityType ? <Link href="/admin/activity" className="px-3 py-2 text-sm font-semibold text-slate-600">Reset</Link> : null}</form>
      {result.logs.length ? <div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-slate-50 text-xs uppercase text-slate-500"><tr><th className="px-4 py-3">Date</th><th className="px-4 py-3">Actor</th><th className="px-4 py-3">Action</th><th className="px-4 py-3">Content</th><th className="px-4 py-3">Record ID</th></tr></thead><tbody className="divide-y divide-slate-100">{result.logs.map((log) => <tr key={log.id}><td className="px-4 py-3 whitespace-nowrap text-slate-600">{log.createdAt.toLocaleString("en-IN")}</td><td className="px-4 py-3"><p className="font-semibold">{log.actor?.name ?? "System"}</p><p className="text-xs text-slate-500">{log.actor?.email}</p></td><td className="px-4 py-3">{log.action}</td><td className="px-4 py-3">{log.entityType}</td><td className="px-4 py-3 font-mono text-xs text-slate-500">{log.entityId ?? "-"}</td></tr>)}</tbody></table></div> : <p className="p-8 text-center text-sm text-slate-600">No activity found.</p>}
      <div className="flex items-center justify-between border-t border-slate-200 p-4 text-sm"><span>Page {result.page} of {result.totalPages}</span><div className="flex gap-3">{result.page > 1 ? <Link href={pageHref(result.page - 1)} className="font-semibold text-[#0A1F44]">Previous</Link> : null}{result.page < result.totalPages ? <Link href={pageHref(result.page + 1)} className="font-semibold text-[#0A1F44]">Next</Link> : null}</div></div>
    </section>
  </div>;
}
