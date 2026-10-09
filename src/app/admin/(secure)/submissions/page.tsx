import Link from "next/link";
import { SubmissionStatus } from "@prisma/client";
import { notFound } from "next/navigation";

import { hasPermission } from "@/server/auth/permissions";
import { requireAdminSession } from "@/server/auth/session";
import { getContactSubmissions } from "@/server/services/contactSubmissions";

export const dynamic = "force-dynamic";

export default async function SubmissionsPage({ searchParams }: { searchParams: Promise<{ q?: string; status?: string; page?: string }> }) {
  const [session, params] = await Promise.all([requireAdminSession(), searchParams]);
  if (!hasPermission(session.user.role, "viewSubmissions")) notFound();
  const query = params.q?.trim().slice(0, 100) ?? "";
  const status = Object.values(SubmissionStatus).includes(params.status as SubmissionStatus) ? params.status as SubmissionStatus : "ALL";
  const requestedPage = Number(params.page);
  const result = await getContactSubmissions({ query, status, page: Number.isSafeInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1 });
  const pageHref = (page: number) => {
    const search = new URLSearchParams();
    if (query) search.set("q", query);
    if (status !== "ALL") search.set("status", status);
    search.set("page", String(page));
    return `/admin/submissions?${search}`;
  };

  return <div className="space-y-6">
    <div><h2 className="font-serif text-3xl font-bold text-[#0A1F44]">Submissions</h2><p className="mt-1 text-sm text-slate-600">{result.totalCount} matching submission{result.totalCount === 1 ? "" : "s"}</p></div>
    <section className="overflow-hidden rounded-lg border border-slate-200 bg-white">
      <form className="flex flex-wrap items-center gap-2 border-b border-slate-200 p-4">
        <input type="search" name="q" defaultValue={query} maxLength={100} placeholder="Name, email, phone or subject" aria-label="Search submissions" className="min-w-52 flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm" />
        <select name="status" defaultValue={status} aria-label="Status" className="rounded-lg border border-slate-200 px-3 py-2 text-sm"><option value="ALL">All statuses</option>{Object.values(SubmissionStatus).map((value) => <option key={value} value={value}>{value.replaceAll("_", " ")}</option>)}</select>
        <button className="rounded-lg bg-[#0A1F44] px-4 py-2 text-sm font-bold text-white">Apply</button>
        {query || status !== "ALL" ? <Link href="/admin/submissions" className="px-3 py-2 text-sm font-semibold text-slate-600">Reset</Link> : null}
      </form>
      {result.submissions.length ? <div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-slate-50 text-xs uppercase text-slate-500"><tr><th className="px-4 py-3">Received</th><th className="px-4 py-3">Contact</th><th className="px-4 py-3">Type</th><th className="px-4 py-3">Subject</th><th className="px-4 py-3">Status</th><th className="px-4 py-3">Action</th></tr></thead><tbody className="divide-y divide-slate-100">{result.submissions.map((item) => <tr key={item.id}><td className="whitespace-nowrap px-4 py-3 text-slate-600">{item.createdAt.toLocaleString("en-IN")}</td><td className="px-4 py-3"><p className="font-semibold text-[#0A1F44]">{item.name ?? "Unknown"}</p><p className="text-xs text-slate-500">{item.email ?? item.phone ?? "No contact details"}</p></td><td className="px-4 py-3">{item.type}</td><td className="px-4 py-3">{item.subject ?? "-"}</td><td className="px-4 py-3">{item.status.replaceAll("_", " ")}</td><td className="px-4 py-3"><Link href={`/admin/submissions/${item.id}`} className="font-semibold text-[#0A1F44] underline-offset-2 hover:underline">View</Link></td></tr>)}</tbody></table></div> : <p className="p-8 text-center text-sm text-slate-600">No submissions found.</p>}
      <div className="flex items-center justify-between border-t border-slate-200 p-4 text-sm"><span>Page {result.page} of {result.totalPages}</span><div className="flex gap-3">{result.page > 1 ? <Link href={pageHref(result.page - 1)} className="font-semibold text-[#0A1F44]">Previous</Link> : null}{result.page < result.totalPages ? <Link href={pageHref(result.page + 1)} className="font-semibold text-[#0A1F44]">Next</Link> : null}</div></div>
    </section>
  </div>;
}
