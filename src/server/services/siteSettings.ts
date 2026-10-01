import { contactMainInfo } from "@/data/contactUsData";
import { prisma } from "@/server/db/client";
import { contactSettingsSchema } from "@/validations/siteSettings";

export const CONTACT_SETTINGS_KEY = "contact";

export async function getContactSettings() {
  const setting = await prisma.siteSetting.findUnique({
    where: { key: CONTACT_SETTINGS_KEY },
    select: { value: true },
  });
  if (!setting) return contactMainInfo;

  const parsed = contactSettingsSchema.safeParse(setting.value);
  if (!parsed.success) throw new Error("Saved contact settings are invalid.");
  return parsed.data;
}
