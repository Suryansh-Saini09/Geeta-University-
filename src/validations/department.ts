import { ContentStatus } from "@prisma/client";
import { z } from "zod";

export const departmentCreateSchema = z.object({
  name: z.string().trim().min(2, "Department name is required."),
  shortName: z.string().trim().optional(),
  slug: z
    .string()
    .trim()
    .min(2, "Slug is required.")
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Use lowercase letters, numbers, and hyphens only."
    ),
  summary: z.string().trim().optional(),
  status: z.enum([
    ContentStatus.DRAFT,
    ContentStatus.PUBLISHED,
    ContentStatus.ARCHIVED,
  ]),
  sortOrder: z.coerce.number().int().min(0).default(0),
});

export type DepartmentCreateInput = z.infer<typeof departmentCreateSchema>;

export const departmentUpdateSchema = departmentCreateSchema.extend({
  id: z.string().min(1, "Department ID is required."),
});

export type DepartmentUpdateInput = z.infer<typeof departmentUpdateSchema>;
