import AdminShell from "@/components/admin/AdminShell";
import { requireAdminSession } from "@/server/auth/session";

export default async function SecureAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await requireAdminSession();

  return <AdminShell user={session.user}>{children}</AdminShell>;
}
