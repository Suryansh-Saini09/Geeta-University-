import {
  BookOpen,
  FileText,
  GraduationCap,
  Image,
  Inbox,
  Users,
} from "lucide-react";

import { getAdminDashboardStats } from "@/server/services/adminDashboard";

export const dynamic = "force-dynamic";

const statConfig = [
  { key: "pages", label: "Pages", icon: FileText },
  { key: "departments", label: "Departments", icon: GraduationCap },
  { key: "programs", label: "Programs", icon: BookOpen },
  { key: "submissions", label: "Submissions", icon: Inbox },
  { key: "mediaAssets", label: "Media Assets", icon: Image },
  { key: "adminUsers", label: "Admin Users", icon: Users },
] as const;

export default async function AdminDashboardPage() {
  const stats = await getAdminDashboardStats();

  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#E8871A]">
          Dashboard
        </p>
        <h2 className="mt-2 font-serif text-4xl font-bold text-[#0A1F44]">
          CMS Overview
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
          This is the initial protected admin foundation. Counts will populate
          once the database is migrated and seeded.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {statConfig.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.key}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    {item.label}
                  </p>
                  <p className="mt-2 text-3xl font-black text-[#0A1F44]">
                    {stats[item.key]}
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#E8871A]/10 text-[#E8871A]">
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className="rounded-xl border border-dashed border-slate-300 bg-white p-8">
        <h3 className="font-serif text-2xl font-bold text-[#0A1F44]">
          Next implementation modules
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          The next milestone should add migrations/seeding, then replace public
          form submissions with validated server-side writes.
        </p>
      </section>
    </div>
  );
}
