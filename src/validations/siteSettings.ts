import { z } from "zod";

export const contactSettingsSchema = z.object({
  location: z.string().trim().min(1).max(250),
  locationDetails: z.string().trim().min(1).max(250),
  phonePrimary: z.string().trim().regex(/^[+\d()\s-]{7,25}$/, "Enter a valid phone number."),
  phoneSecondary: z.string().trim().regex(/^[+\d()\s-]{7,25}$/, "Enter a valid phone number."),
  emailPrimary: z.email(),
  emailAdmissions: z.email(),
  workingHours: z.string().trim().min(1).max(150),
});

export type ContactSettings = z.infer<typeof contactSettingsSchema>;
