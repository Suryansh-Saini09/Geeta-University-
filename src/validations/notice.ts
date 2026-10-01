import { ContentStatus } from "@prisma/client";
import { z } from "zod";

export const noticeSchema = z.object({
  title: z.string().trim().min(2, "Title is required.").max(191),
  slug: z.string().trim().min(2, "Slug is required.").max(191).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use lowercase letters, numbers, and hyphens only."),
  summary: z.string().trim().max(1000).optional(),
  body: z.string().trim().min(1, "Notice content is required."),
  status: z.enum([ContentStatus.DRAFT, ContentStatus.PUBLISHED, ContentStatus.ARCHIVED]),
  expiresAt: z.union([z.literal(""), z.iso.date()]).optional(),
});

export type NoticeInput = z.infer<typeof noticeSchema>;
