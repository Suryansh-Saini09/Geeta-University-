import { AdminRole } from "@prisma/client";

export const ADMIN_PERMISSIONS = {
  manageUsers: [AdminRole.SUPER_ADMIN],
  manageSettings: [AdminRole.SUPER_ADMIN],
  manageNavigation: [AdminRole.SUPER_ADMIN, AdminRole.ADMIN],
  manageContent: [AdminRole.SUPER_ADMIN, AdminRole.ADMIN, AdminRole.EDITOR],
  publishContent: [AdminRole.SUPER_ADMIN, AdminRole.ADMIN],
  deleteContent: [AdminRole.SUPER_ADMIN, AdminRole.ADMIN],
  viewSubmissions: [AdminRole.SUPER_ADMIN, AdminRole.ADMIN],
  manageSubmissions: [AdminRole.SUPER_ADMIN, AdminRole.ADMIN],
  viewAuditLogs: [AdminRole.SUPER_ADMIN],
} satisfies Record<string, AdminRole[]>;

export type AdminPermission = keyof typeof ADMIN_PERMISSIONS;

export function hasPermission(role: AdminRole, permission: AdminPermission) {
  const allowedRoles: AdminRole[] = ADMIN_PERMISSIONS[permission];
  return allowedRoles.includes(role);
}

export function assertPermission(role: AdminRole, permission: AdminPermission) {
  if (!hasPermission(role, permission)) {
    throw new Error("Forbidden");
  }
}
