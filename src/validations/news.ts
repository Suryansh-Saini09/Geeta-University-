import { ContentStatus } from "@prisma/client";
import { z } from "zod";

export const newsSchema = z.object({
  title: z.string().trim().min(2, "Title is required.").max(191),
  slug: z.string().trim().min(2, "Slug is required.").max(191).regex(
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    "Use lowercase letters, numbers, and hyphens only."
  ),
  excerpt: z.string().trim().min(10, "Excerpt must be at least 10 characters.").max(1000),
  body: z.string().trim().min(1, "Article content is required."),
  status: z.enum([ContentStatus.DRAFT, ContentStatus.PUBLISHED, ContentStatus.ARCHIVED]),
  seoTitle: z.string().trim().min(2, "SEO title is required.").max(191),
  seoDescription: z.string().trim().min(10, "SEO description must be at least 10 characters.").max(500),
  noIndex: z.boolean(),
});

export type NewsInput = z.infer<typeof newsSchema>;
