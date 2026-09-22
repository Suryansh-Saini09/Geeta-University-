import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";
import { ContentStatus } from "@prisma/client";

import { updateDepartmentAction } from "@/features/admin/departments/actions";
import { getAdminDepartmentById } from "@/server/services/departments";

interface EditDepartmentPageProps {
  params: Promise<{
    departmentId: string;
  }>;
  searchParams: Promise<{
    error?: string;
  }>;
}

export default async function EditDepartmentPage({
  params,
  searchParams,
}: EditDepartmentPageProps) {
  const { departmentId } = await params;
  const { error } = await searchParams;
  const department = await getAdminDepartmentById(departmentId);

  if (!department) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <section>
        <Link
          href="/admin/departments"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition hover:text-[#E8871A]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to departments
        </Link>
        <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-[#E8871A]">
          Edit
        </p>
        <h2 className="mt-2 font-serif text-4xl font-bold text-[#0A1F44]">
          {department.name}
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
          Update department details, publishing status, and ordering.
        </p>
      </section>

      {error ? (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {error}
        </div>
      ) : null}

      <form
        action={updateDepartmentAction}
        className="grid gap-6 xl:grid-cols-[1fr_340px]"
      >
        <input type="hidden" name="id" value={department.id} />

        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-bold text-[#0A1F44]"
            >
              Department name
            </label>
            <input
              id="name"
              name="name"
              required
              defaultValue={department.name}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#E8871A] focus:bg-white focus:ring-4 focus:ring-[#E8871A]/15"
            />
          </div>

          <div>
            <label
              htmlFor="shortName"
              className="mb-1.5 block text-sm font-bold text-[#0A1F44]"
            >
              Short name
            </label>
            <input
              id="shortName"
              name="shortName"
              defaultValue={department.shortName ?? ""}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#E8871A] focus:bg-white focus:ring-4 focus:ring-[#E8871A]/15"
            />
          </div>

          <div>
            <label
              htmlFor="slug"
              className="mb-1.5 block text-sm font-bold text-[#0A1F44]"
            >
              Slug
            </label>
            <input
              id="slug"
              name="slug"
              required
              defaultValue={department.slug}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 font-mono text-sm outline-none transition focus:border-[#E8871A] focus:bg-white focus:ring-4 focus:ring-[#E8871A]/15"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="summary"
              className="mb-1.5 block text-sm font-bold text-[#0A1F44]"
            >
              Summary
            </label>
            <textarea
              id="summary"
              name="summary"
              defaultValue={department.summary ?? ""}
              rows={5}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 outline-none transition focus:border-[#E8871A] focus:bg-white focus:ring-4 focus:ring-[#E8871A]/15"
            />
          </div>
          </div>
        </section>

        <aside className="space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-[#0A1F44]">
              Publishing
            </h3>

            <div className="mt-5 space-y-5">
              <div>
                <label
                  htmlFor="status"
                  className="mb-1.5 block text-sm font-bold text-[#0A1F44]"
                >
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  defaultValue={department.status}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#E8871A] focus:bg-white focus:ring-4 focus:ring-[#E8871A]/15"
                >
                  <option value={ContentStatus.DRAFT}>Draft</option>
                  <option value={ContentStatus.PUBLISHED}>Published</option>
                  <option value={ContentStatus.ARCHIVED}>Archived</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="sortOrder"
                  className="mb-1.5 block text-sm font-bold text-[#0A1F44]"
                >
                  Sort order
                </label>
                <input
                  id="sortOrder"
                  name="sortOrder"
                  type="number"
                  min={0}
                  defaultValue={department.sortOrder}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#E8871A] focus:bg-white focus:ring-4 focus:ring-[#E8871A]/15"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#E8871A] px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#F5A623]"
              >
                <Save className="h-4 w-4" />
                Save Changes
              </button>
            </div>
          </section>
        </aside>
      </form>
    </div>
  );
}
