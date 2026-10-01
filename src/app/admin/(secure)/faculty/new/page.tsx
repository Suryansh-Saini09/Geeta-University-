import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import FacultyForm from "@/components/admin/FacultyForm";
import { createFacultyAction } from "@/features/admin/faculty/actions";
import { getFacultyOptions } from "@/server/services/faculty";

export default async function NewFacultyPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const [{ error }, options] = await Promise.all([searchParams, getFacultyOptions()]);
  return <div className="space-y-6">
    <Link href="/admin/faculty" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600"><ArrowLeft className="h-4 w-4" /> Back to faculty</Link>
    <h2 className="font-serif text-3xl font-bold text-[#0A1F44]">New Faculty Member</h2>
    {error ? <p role="alert" className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</p> : null}
    <FacultyForm options={options} action={createFacultyAction} />
  </div>;
}
