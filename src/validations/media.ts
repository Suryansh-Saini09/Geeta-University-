import { z } from "zod";

export const mediaMetadataSchema = z.object({
  altText: z.string().trim().max(300).optional(),
  caption: z.string().trim().max(500).optional(),
});
