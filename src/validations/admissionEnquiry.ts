import { z } from "zod";

export const admissionEnquirySchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.email().max(254).transform((value) => value.toLowerCase()),
  mobile: z.string().regex(/^\d{10,15}$/, "Enter a valid mobile number."),
  state: z.string().trim().min(1).max(100),
  city: z.string().trim().min(1).max(100),
  discipline: z.string().trim().min(1).max(150),
  course: z.string().trim().min(1).max(150),
  agree: z.literal(true),
  page_url: z.string().url().max(2000).optional(),
});
