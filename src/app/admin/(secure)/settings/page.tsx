import { notFound } from "next/navigation";

import { updateContactSettingsAction } from "@/features/admin/settings/actions";
import { hasPermission } from "@/server/auth/permissions";
import { requireAdminSession } from "@/server/auth/session";
import { getContactSettings } from "@/server/services/siteSettings";

export const dynamic = "force-dynamic";

const fields = [
  ["location", "Campus address"],
  ["locationDetails", "Location details"],
  ["phonePrimary", "Primary phone"],
  ["phoneSecondary", "Alternative phone"],
  ["emailPrimary", "General email"],
  ["emailAdmissions", "Admissions email"],
  ["workingHours", "Working hours"],
] as const;

export default async function SettingsPage({ searchParams }: { searchParams: Promise<{ saved?: string; error?: string }> }) {
  const [session, params] = await Promise.all([requireAdminSession(), searchParams]);
  if (!hasPermission(session.user.role, "manageSettings")) notFound();
  const settings = await getContactSettings();

  return <div className="max-w-3xl space-y-6">
    <div><h2 className="font-serif text-3xl font-bold text-[#0A1F44]">Settings</h2><p className="mt-1 text-sm text-slate-600">Contact details shown on the public Contact Us page.</p></div>
    {params.saved ? <p role="status" className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">Contact details saved.</p> : null}
    {params.error ? <p role="alert" className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">{params.error}</p> : null}
    <form action={updateContactSettingsAction} className="space-y-5 rounded-lg border border-slate-200 bg-white p-5 sm:p-6">
      {fields.map(([name, label]) => <label key={name} className="block space-y-1.5 text-sm font-semibold text-slate-700">
        <span>{label}</span>
        <input name={name} type={name.startsWith("email") ? "email" : name.startsWith("phone") ? "tel" : "text"} required maxLength={name.startsWith("email") ? undefined : name === "workingHours" ? 150 : 250} defaultValue={settings[name]} className="w-full rounded-lg border border-slate-300 px-3 py-2.5 font-normal text-slate-950 focus:border-[#E8871A] focus:outline-none" />
      </label>)}
      <button type="submit" className="rounded-lg bg-[#0A1F44] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#E8871A]">Save contact details</button>
    </form>
  </div>;
}
