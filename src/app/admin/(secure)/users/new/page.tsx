import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import AdminUserForm from "@/components/admin/AdminUserForm";
import { createAdminUserAction } from "@/features/admin/users/actions";
import { hasPermission } from "@/server/auth/permissions";
import { requireAdminSession } from "@/server/auth/session";

export default async function NewAdminUserPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const [{ error }, session] = await Promise.all([searchParams, requireAdminSession()]);
  if (!hasPermission(session.user.role, "manageUsers")) notFound();
  return <div className="space-y-6"><Link href="/admin/users" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600"><ArrowLeft className="h-4 w-4" /> Back to users</Link><h2 className="font-serif text-3xl font-bold text-[#0A1F44]">New Admin User</h2>{error ? <p role="alert" className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</p> : null}<AdminUserForm action={createAdminUserAction} /></div>;
}
