import { ContentStatus } from "@prisma/client";
import { z } from "zod";

export const facultySchema = z.object({
  name: z.string().trim().min(2, "Name is required.").max(191),
  slug: z.string().trim().min(2).max(191).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use lowercase letters, numbers, and hyphens only."),
  departmentId: z.string().optional(),
  programIds: z.array(z.string()).default([]),
  designation: z.string().trim().max(191).optional(),
  qualification: z.string().trim().max(191).optional(),
  bio: z.string().trim().optional(),
  email: z.union([z.literal(""), z.email()]).optional(),
  phone: z.string().trim().max(30).optional(),
  status: z.enum([ContentStatus.DRAFT, ContentStatus.PUBLISHED, ContentStatus.ARCHIVED]),
  sortOrder: z.coerce.number().int().min(0).default(0),
});

export type FacultyInput = z.infer<typeof facultySchema>;
