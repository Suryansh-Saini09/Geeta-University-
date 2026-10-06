import { DEFAULT_LOCALE, isValidLocale, Locale } from "./localization";

/**
 * Extracts locale from a pathname.
 * e.g., "/fr/about" -> "fr"
 * "/hi/programs/cse" -> "hi"
 * "/about" -> "en"
 */
export function getLocaleFromPath(pathname: string): Locale {
  if (!pathname) return DEFAULT_LOCALE;
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];
  if (first && isValidLocale(first)) {
    return first;
  }
  return DEFAULT_LOCALE;
}

/**
 * Strips locale prefix from a pathname.
 * e.g., "/fr/about" -> "/about"
 * "/hi" -> "/"
 * "/about" -> "/about"
 */
export function getPathWithoutLocale(pathname: string): string {
  if (!pathname) return "/";
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && isValidLocale(segments[0])) {
    const rest = "/" + segments.slice(1).join("/");
    return rest === "/" ? "/" : rest;
  }
  return pathname;
}

/**
 * Prepend locale prefix to a clean relative path (unless locale is 'en').
 * e.g., buildLocalizedPath("fr", "/about") -> "/fr/about"
 * buildLocalizedPath("en", "/about") -> "/about"
 * buildLocalizedPath("hi", "/") -> "/hi"
 */
export function buildLocalizedPath(locale: string, path: string): string {
  if (
    !path ||
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:")
  ) {
    return path;
  }

  const [cleanPath, hash] = path.split("#");
  const unlocalized = getPathWithoutLocale(cleanPath || "/");

  let resultPath = unlocalized;
  if (locale && locale !== DEFAULT_LOCALE && isValidLocale(locale)) {
    resultPath = unlocalized === "/" ? `/${locale}` : `/${locale}${unlocalized}`;
  }

  return hash !== undefined ? `${resultPath}#${hash}` : resultPath;
}

/**
 * Switches the locale of a given pathname while preserving route and hash.
 * e.g. switchLocale("hi", "/fr/about") -> "/hi/about"
 * switchLocale("en", "/fr/about") -> "/about"
 */
export function switchLocale(newLocale: string, currentPathname: string): string {
  const unlocalized = getPathWithoutLocale(currentPathname);
  return buildLocalizedPath(newLocale, unlocalized);
}
