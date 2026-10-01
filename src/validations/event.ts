import { ContentStatus } from "@prisma/client";
import { z } from "zod";

const localDateTime = z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/, "Enter a valid date and time.");

export const eventSchema = z.object({
  title: z.string().trim().min(2, "Title is required.").max(191),
  slug: z.string().trim().min(2, "Slug is required.").max(191).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use lowercase letters, numbers, and hyphens only."),
  excerpt: z.string().trim().min(10, "Excerpt must be at least 10 characters.").max(1000),
  body: z.string().trim().min(1, "Event content is required."),
  startsAt: localDateTime,
  endsAt: z.union([z.literal(""), localDateTime]),
  location: z.string().trim().max(191).optional(),
  status: z.enum([ContentStatus.DRAFT, ContentStatus.PUBLISHED, ContentStatus.ARCHIVED]),
  seoTitle: z.string().trim().min(2, "SEO title is required.").max(191),
  seoDescription: z.string().trim().min(10, "SEO description must be at least 10 characters.").max(500),
  noIndex: z.boolean(),
}).superRefine((event, context) => {
  const start = parseIndiaDateTime(event.startsAt);
  const end = event.endsAt ? parseIndiaDateTime(event.endsAt) : null;
  if (!start || (event.endsAt && !end)) {
    context.addIssue({ code: "custom", path: ["startsAt"], message: "Enter a valid event date and time." });
  } else if (end && start && end <= start) {
    context.addIssue({ code: "custom", path: ["endsAt"], message: "End time must be after start time." });
  }
});

export type EventInput = z.infer<typeof eventSchema>;

export function parseIndiaDateTime(value: string): Date | null {
  const date = new Date(`${value}:00+05:30`);
  if (Number.isNaN(date.getTime())) return null;
  return toIndiaDateTimeInput(date) === value ? date : null;
}

export function toIndiaDateTimeInput(date: Date): string {
  return new Date(date.getTime() + 5.5 * 60 * 60 * 1000).toISOString().slice(0, 16);
}
