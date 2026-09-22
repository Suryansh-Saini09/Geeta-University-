import Link from "next/link";
import {
  BarChart3,
  BookOpen,
  CalendarDays,
  FileText,
  GalleryHorizontalEnd,
  GraduationCap,
  Image,
  LayoutDashboard,
  Megaphone,
  Newspaper,
  Settings,
  Shield,
  Users,
} from "lucide-react";

import type { AdminSessionUser } from "@/server/auth/session";
import { logoutAction } from "@/features/admin/auth/actions";

const navigation = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Pages", href: "/admin/pages", icon: FileText },
  { label: "Departments", href: "/admin/departments", icon: GraduationCap },
  { label: "Programs", href: "/admin/programs", icon: BookOpen },
  { label: "Faculty", href: "/admin/faculty", icon: Users },
  { label: "Notices", href: "/admin/notices", icon: Megaphone },
  { label: "News", href: "/admin/news", icon: Newspaper },
  { label: "Events", href: "/admin/events", icon: CalendarDays },
  { label: "Gallery", href: "/admin/gallery", icon: GalleryHorizontalEnd },
  { label: "Media", href: "/admin/media", icon: Image },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminShell({
  user,
  children,
}: {
  user: AdminSessionUser;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-950">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="border-r border-slate-200 bg-[#071B3A] text-white">
          <div className="flex h-20 items-center gap-3 border-b border-white/10 px-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8871A]">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-white/60">
                Geeta University
              </p>
              <h1 className="font-serif text-2xl font-bold">CMS Admin</h1>
            </div>
          </div>

          <nav className="space-y-1 p-4">
            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-white/78 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-4 w-4 text-[#E8871A]" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>

        <div className="flex min-w-0 flex-col">
          <header className="flex min-h-20 flex-col gap-4 border-b border-slate-200 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#E8871A]">
                <BarChart3 className="h-4 w-4" />
                Production CMS Foundation
              </div>
              <p className="mt-1 text-sm text-slate-500">
                Server-protected content management for university staff.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-bold text-[#0A1F44]">{user.name}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {user.role.replace("_", " ")}
                </p>
              </div>
              <form action={logoutAction}>
                <button
                  type="submit"
                  className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-bold text-[#0A1F44] transition-colors hover:border-[#E8871A] hover:text-[#E8871A]"
                >
                  Logout
                </button>
              </form>
            </div>
          </header>

          <main className="min-w-0 flex-1 p-5 lg:p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
