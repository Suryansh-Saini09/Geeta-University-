import { ContentStatus } from "@prisma/client";
import { z } from "zod";

export const gallerySchema = z.object({
  title: z.string().trim().min(2, "Album title is required.").max(191),
  slug: z.string().trim().min(2, "Slug is required.").max(191).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use lowercase letters, numbers, and hyphens only."),
  description: z.string().trim().max(1000).optional(),
  status: z.enum([ContentStatus.DRAFT, ContentStatus.PUBLISHED, ContentStatus.ARCHIVED]),
  sortOrder: z.coerce.number().int().min(0).default(0),
  imageIds: z.array(z.string()).max(100, "An album can contain up to 100 images."),
});

export type GalleryInput = z.infer<typeof gallerySchema>;
