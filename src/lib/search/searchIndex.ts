import type { SearchDocument } from "./types";
import { buildSearchIndex } from "./buildSearchIndex";

let cachedIndex: SearchDocument[] | null = null;

export function getSearchIndex(): SearchDocument[] {
  if (!cachedIndex) {
    cachedIndex = buildSearchIndex();
  }
  return cachedIndex;
}

/**
 * Resets the cached index (useful for CMS hot-reloading in dev mode)
 */
export function resetSearchIndex(): void {
  cachedIndex = null;
}
