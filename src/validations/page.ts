import { ContentStatus } from "@prisma/client";
import { z } from "zod";

export const pageSectionSchema = z.object({
  heading: z.string().trim().min(1, "Section heading is required.").max(191),
  body: z.string().trim().min(1, "Section content is required."),
});

export const pageSchema = z.object({
  title: z.string().trim().min(2, "Page title is required.").max(191),
  slug: z.string().trim().min(2, "Slug is required.").max(191).regex(
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    "Use lowercase letters, numbers, and hyphens only."
  ),
  sections: z.array(pageSectionSchema).min(1, "Add at least one section.").max(30),
  status: z.enum([ContentStatus.DRAFT, ContentStatus.PUBLISHED, ContentStatus.ARCHIVED]),
  seoTitle: z.string().trim().min(2, "SEO title is required.").max(191),
  seoDescription: z.string().trim().min(10, "SEO description must be at least 10 characters.").max(500),
  noIndex: z.boolean(),
  revisionNote: z.string().trim().max(500).optional(),
});

export type PageInput = z.infer<typeof pageSchema>;
export type PageSection = z.infer<typeof pageSectionSchema>;

export function parsePageSections(value: unknown): PageSection[] {
  const parsed = z.array(pageSectionSchema).safeParse(value);
  return parsed.success ? parsed.data : [];
}
