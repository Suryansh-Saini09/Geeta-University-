import { AdminRole, AdminUserStatus } from "@prisma/client";
import { z } from "zod";

const fields = {
  name: z.string().trim().min(2, "Name is required.").max(191),
  email: z.string().trim().email("Enter a valid email address.").transform((value) => value.toLowerCase()),
  role: z.enum([AdminRole.SUPER_ADMIN, AdminRole.ADMIN, AdminRole.EDITOR]),
};

export const adminUserCreateSchema = z.object({
  ...fields,
  password: z.string().min(12, "Password must be at least 12 characters.").max(128),
});

export const adminUserUpdateSchema = z.object({
  ...fields,
  id: z.string().min(1),
  status: z.enum([AdminUserStatus.ACTIVE, AdminUserStatus.INVITED, AdminUserStatus.SUSPENDED]),
  password: z.union([z.literal(""), z.string().min(12, "Password must be at least 12 characters.").max(128)]),
});
