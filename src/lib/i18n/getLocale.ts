import { headers, cookies } from "next/headers";
import { DEFAULT_LOCALE, Locale, isValidLocale } from "./localization";

export async function resolveRequestLocale(): Promise<Locale> {
  return getLocale();
}

export async function getLocale(): Promise<Locale> {
  try {
    const reqHeaders = await headers();
    const headerLocale = reqHeaders.get("x-locale");
    if (headerLocale && isValidLocale(headerLocale)) {
      return headerLocale as Locale;
    }

    const reqCookies = await cookies();
    const cookieLocale = reqCookies.get("gu-locale")?.value;
    if (cookieLocale && isValidLocale(cookieLocale)) {
      return cookieLocale as Locale;
    }
  } catch (err) {
    // Fallback if called outside request scope
  }

  return DEFAULT_LOCALE;
}
