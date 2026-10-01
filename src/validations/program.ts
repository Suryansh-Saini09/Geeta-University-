import { ContentStatus } from "@prisma/client";
import { z } from "zod";

export const programCreateSchema = z.object({
  departmentId: z.string().min(1, "Department is required."),
  name: z.string().trim().min(2, "Program name is required."),
  slug: z
    .string()
    .trim()
    .min(2, "Slug is required.")
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Use lowercase letters, numbers, and hyphens only."
    ),
  level: z.string().trim().optional(),
  duration: z.string().trim().optional(),
  eligibility: z.string().trim().optional(),
  status: z.enum([
    ContentStatus.DRAFT,
    ContentStatus.PUBLISHED,
    ContentStatus.ARCHIVED,
  ]),
  sortOrder: z.coerce.number().int().min(0).default(0),
});

export type ProgramCreateInput = z.infer<typeof programCreateSchema>;

export const programUpdateSchema = programCreateSchema.extend({
  id: z.string().min(1, "Program ID is required."),
});

export type ProgramUpdateInput = z.infer<typeof programUpdateSchema>;
