export const SUPPORTED_LOCALES = ["en", "hi", "fr"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  hi: "हिन्दी",
  fr: "Français",
};

export const LOCALE_DIRECTIONS: Record<string, "ltr" | "rtl"> = {
  en: "ltr",
  hi: "ltr",
  fr: "ltr",
  ar: "rtl",
};

export function isValidLocale(locale: string): locale is Locale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(locale);
}

export type TranslationStatus = "NOT_TRANSLATED" | "DRAFT" | "PUBLISHED" | "REVIEW_REQUIRED";

export interface TranslationRecord<T = any> {
  status?: TranslationStatus;
  updatedAt?: string;
  body?: T;
  [key: string]: any;
}

/**
 * Resolves localized body for structured JSON sections (PageSection, Department body, etc.).
 * If target locale is published, returns target locale body.
 * Otherwise falls back to English canonical body.
 */
export function getLocalizedBody<T = any>(
  rawBody: any,
  rawTranslations: any,
  locale: string = DEFAULT_LOCALE,
  fallbackLocale: string = DEFAULT_LOCALE
): T {
  if (!rawBody) return {} as T;

  if (locale === fallbackLocale || locale === "en") {
    // Return canonical English body
    return rawBody as T;
  }

  // Look for translation in `translations[locale]`
  if (rawTranslations && typeof rawTranslations === "object") {
    const localeEntry = rawTranslations[locale];
    if (
      localeEntry &&
      typeof localeEntry === "object" &&
      localeEntry.status === "PUBLISHED" &&
      localeEntry.body
    ) {
      // Deep merge localized values onto English structure to preserve shared fields (like IDs, image URLs, Hrefs)
      return mergeLocalizedStructure(rawBody, localeEntry.body);
    }
  }

  // Legacy structure check: body: { en: {...}, hi: {...} }
  if (rawBody && typeof rawBody === "object" && rawBody[locale]) {
    const directLocale = rawBody[locale];
    if (typeof directLocale === "object" && directLocale.body) {
      return mergeLocalizedStructure(rawBody.en || rawBody, directLocale.body);
    }
  }

  // Fallback to canonical English
  return rawBody as T;
}

/**
 * Resolves a single field on a entity with translations JSON column.
 * e.g. getLocalizedField(leader, 'message', 'hi')
 */
export function getLocalizedField<T = string>(
  entity: any,
  fieldName: string,
  locale: string = DEFAULT_LOCALE,
  fallbackValue?: T
): T {
  if (!entity) return (fallbackValue ?? "") as T;

  const englishValue = entity[fieldName] ?? fallbackValue;

  if (locale === "en" || !locale) {
    return englishValue as T;
  }

  const translations = entity.translations;
  if (translations && typeof translations === "object") {
    const localeEntry = translations[locale];
    if (
      localeEntry &&
      typeof localeEntry === "object" &&
      (localeEntry.status === "PUBLISHED" || localeEntry._status === "PUBLISHED") &&
      localeEntry[fieldName] !== undefined &&
      localeEntry[fieldName] !== null &&
      String(localeEntry[fieldName]).trim() !== ""
    ) {
      return localeEntry[fieldName] as T;
    }
  }

  return englishValue as T;
}

/**
 * Merges localized text fields into canonical structure preserving non-translatable properties (URLs, IDs, images).
 */
export function mergeLocalizedStructure(canonical: any, localized: any): any {
  if (localized === null || localized === undefined) return canonical;
  if (canonical === null || canonical === undefined) return localized;

  if (typeof canonical !== "object" || typeof localized !== "object") {
    if (typeof localized === "string" && localized.trim() === "") {
      return canonical;
    }
    return localized;
  }

  if (Array.isArray(canonical)) {
    if (!Array.isArray(localized)) return canonical;
    // Map items matching by index or item ID
    return canonical.map((cItem, idx) => {
      const lItem = localized[idx];
      if (lItem === undefined || lItem === null) return cItem;
      return mergeLocalizedStructure(cItem, lItem);
    });
  }

  const result = { ...canonical };
  for (const key of Object.keys(localized)) {
    if (localized[key] !== undefined && localized[key] !== null) {
      if (typeof localized[key] === "string" && localized[key].trim() === "") {
        continue; // Keep canonical value if localized string is empty
      }
      if (typeof canonical[key] === "object" && canonical[key] !== null && !Array.isArray(canonical[key])) {
        result[key] = mergeLocalizedStructure(canonical[key], localized[key]);
      } else if (Array.isArray(canonical[key])) {
        result[key] = mergeLocalizedStructure(canonical[key], localized[key]);
      } else {
        result[key] = localized[key];
      }
    }
  }
  return result;
}

/**
 * Calculates translation completion percentage for a section or page.
 */
export function calculateTranslationCompleteness(
  canonicalObj: any,
  translatedObj: any
): number {
  if (!canonicalObj || typeof canonicalObj !== "object") return 0;
  if (!translatedObj || typeof translatedObj !== "object") return 0;

  const extractStrings = (obj: any): string[] => {
    let strings: string[] = [];
    if (typeof obj === "string") {
      if (obj.trim().length > 0) strings.push(obj);
    } else if (Array.isArray(obj)) {
      obj.forEach((item) => {
        strings = strings.concat(extractStrings(item));
      });
    } else if (obj && typeof obj === "object") {
      Object.entries(obj).forEach(([key, val]) => {
        // Skip technical non-translatable fields
        if (!["id", "slug", "url", "href", "image", "logo", "posterImage", "videoUrl", "icon", "status", "_status", "sortOrder"].includes(key)) {
          strings = strings.concat(extractStrings(val));
        }
      });
    }
    return strings;
  };

  const canonicalStrings = extractStrings(canonicalObj);
  if (canonicalStrings.length === 0) return 100;

  const translatedStrings = extractStrings(translatedObj);
  const matchCount = translatedStrings.length;

  return Math.min(100, Math.round((matchCount / canonicalStrings.length) * 100));
}
