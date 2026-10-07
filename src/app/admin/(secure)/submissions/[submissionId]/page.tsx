import Link from "next/link";
import { SubmissionStatus } from "@prisma/client";
import { notFound } from "next/navigation";

import { updateSubmissionStatusAction } from "@/features/admin/submissions/actions";
import { hasPermission } from "@/server/auth/permissions";
import { requireAdminSession } from "@/server/auth/session";
import { getContactSubmission } from "@/server/services/contactSubmissions";

export const dynamic = "force-dynamic";

export default async function SubmissionPage({ params, searchParams }: { params: Promise<{ submissionId: string }>; searchParams: Promise<{ saved?: string }> }) {
  const [session, route, query] = await Promise.all([requireAdminSession(), params, searchParams]);
  if (!hasPermission(session.user.role, "viewSubmissions")) notFound();
  const item = await getContactSubmission(route.submissionId);
  if (!item) notFound();

  return <div className="max-w-4xl space-y-6">
    <div><Link href="/admin/submissions" className="text-sm font-semibold text-slate-600 hover:underline">Back to submissions</Link><h2 className="mt-3 font-serif text-3xl font-bold text-[#0A1F44]">Submission</h2><p className="mt-1 text-sm text-slate-600">{item.type} · {item.createdAt.toLocaleString("en-IN")}</p></div>
    {query.saved ? <p role="status" className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">Status saved.</p> : null}
    <section className="space-y-5 rounded-lg border border-slate-200 bg-white p-5 sm:p-6">
      <div className="grid gap-5 sm:grid-cols-2">{([ ["Name", item.name], ["Email", item.email], ["Phone", item.phone], ["Subject", item.subject], ["Source", item.sourcePath] ] as const).map(([label, value]) => <div key={label}><dt className="text-xs font-bold uppercase text-slate-500">{label}</dt><dd className="mt-1 break-words text-sm text-slate-950">{value || "-"}</dd></div>)}</div>
      <div><h3 className="text-xs font-bold uppercase text-slate-500">Message</h3><p className="mt-1 whitespace-pre-wrap break-words text-sm text-slate-950">{item.message || "-"}</p></div>
      <div><h3 className="text-xs font-bold uppercase text-slate-500">Additional form data</h3><pre className="mt-2 max-h-80 overflow-auto whitespace-pre-wrap break-all rounded bg-slate-50 p-3 text-xs text-slate-700">{JSON.stringify(item.payload, null, 2)}</pre></div>
    </section>
    <form action={updateSubmissionStatusAction} className="flex flex-wrap items-end gap-3 rounded-lg border border-slate-200 bg-white p-5">
      <input type="hidden" name="id" value={item.id} />
      <label className="space-y-1.5 text-sm font-semibold text-slate-700"><span className="block">Status</span><select name="status" defaultValue={item.status} className="rounded-lg border border-slate-300 px-3 py-2.5 font-normal">{Object.values(SubmissionStatus).map((value) => <option key={value} value={value}>{value.replaceAll("_", " ")}</option>)}</select></label>
      <button type="submit" className="rounded-lg bg-[#0A1F44] px-5 py-2.5 text-sm font-bold text-white">Save status</button>
    </form>
  </div>;
}
