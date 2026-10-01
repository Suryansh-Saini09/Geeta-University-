import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import FacultyForm from "@/components/admin/FacultyForm";
import { updateFacultyAction } from "@/features/admin/faculty/actions";
import { getAdminFacultyById, getFacultyOptions } from "@/server/services/faculty";

export default async function EditFacultyPage({ params, searchParams }: { params: Promise<{ facultyId: string }>; searchParams: Promise<{ error?: string }> }) {
  const { facultyId } = await params;
  const [{ error }, faculty, options] = await Promise.all([searchParams, getAdminFacultyById(facultyId), getFacultyOptions()]);
  if (!faculty) notFound();
  return <div className="space-y-6">
    <Link href="/admin/faculty" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600"><ArrowLeft className="h-4 w-4" /> Back to faculty</Link>
    <h2 className="font-serif text-3xl font-bold text-[#0A1F44]">Edit {faculty.name}</h2>
    {error ? <p role="alert" className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</p> : null}
    <FacultyForm options={options} faculty={faculty} action={updateFacultyAction} />
  </div>;
}
