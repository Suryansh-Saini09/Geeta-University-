import type { SearchDocument, SearchResultItem, SearchResultsResponse } from "./types";
import { getSearchIndex } from "./searchIndex";

// Common education acronym expansions for higher search accuracy
const ACRONYM_MAP: Record<string, string[]> = {
  cse: ["computer", "science", "engineering", "btech"],
  btech: ["b.tech", "technology", "engineering"],
  mtech: ["m.tech", "technology", "engineering"],
  bba: ["bachelor", "business", "administration", "management"],
  mba: ["master", "business", "administration", "management"],
  bca: ["bachelor", "computer", "applications"],
  mca: ["master", "computer", "applications"],
  bsc: ["bachelor", "science"],
  msc: ["master", "science"],
  bcom: ["bachelor", "commerce"],
  mcom: ["master", "commerce"],
  llb: ["law", "bachelor", "legal"],
  llm: ["law", "master", "legal"],
  phd: ["doctoral", "doctor", "philosophy", "research"],
  guts: ["entrance", "exam", "scholarship", "talent", "search"],
  cuet: ["common", "university", "entrance", "test"],
  dyod: ["design", "your", "own", "degree"],
  gfs: ["geeta", "finishing", "school"],
  gth: ["geeta", "technical", "hub"],
};

// Levenshtein distance helper for typo tolerance (e.g. "computr" -> "computer")
function getLevenshteinDistance(a: string, b: string): number {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix: number[][] = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

/**
 * Checks if query token fuzzy-matches target word
 */
function isFuzzyMatch(token: string, targetWord: string): boolean {
  if (token.length < 4 || targetWord.length < 4) return false;
  if (targetWord.startsWith(token.substring(0, 3))) {
    const dist = getLevenshteinDistance(token, targetWord);
    return dist <= 2;
  }
  return false;
}

/**
 * Generates a clean 160-character snippet around the matched search terms
 */
function generateSnippet(doc: SearchDocument, matchedTokens: string[]): string {
  const fullText = [doc.description, doc.content || ""].join(" ");
  if (!fullText.trim()) return doc.description || doc.title;

  const lowerText = fullText.toLowerCase();
  let firstMatchIndex = -1;

  for (const token of matchedTokens) {
    const idx = lowerText.indexOf(token);
    if (idx !== -1 && (firstMatchIndex === -1 || idx < firstMatchIndex)) {
      firstMatchIndex = idx;
    }
  }

  if (firstMatchIndex === -1) {
    return fullText.length > 170 ? fullText.substring(0, 167) + "..." : fullText;
  }

  const start = Math.max(0, firstMatchIndex - 40);
  const end = Math.min(fullText.length, firstMatchIndex + 130);
  let snippet = fullText.substring(start, end).trim();

  if (start > 0) snippet = "..." + snippet;
  if (end < fullText.length) snippet = snippet + "...";

  return snippet;
}

/**
 * Central Search Engine Function
 * Performs multi-word relevance scoring, acronym expansion, typo matching & snippet extraction.
 */
export function searchWebsite(
  rawQuery: string,
  page = 1,
  pageSize = 10
): SearchResultsResponse {
  const query = rawQuery.trim().toLowerCase();
  if (!query) {
    return {
      results: [],
      totalResults: 0,
      query: "",
      page: 1,
      pageSize,
      totalPages: 0,
    };
  }

  const index = getSearchIndex();

  // Tokenize query
  const rawTokens = query
    .replace(/[^\w\s-]/g, "")
    .split(/\s+/)
    .filter(Boolean);

  if (rawTokens.length === 0) {
    return {
      results: [],
      totalResults: 0,
      query: rawQuery,
      page: 1,
      pageSize,
      totalPages: 0,
    };
  }

  // Expand acronyms (e.g. cse -> cse, computer, science, engineering)
  const searchTokensSet = new Set<string>(rawTokens);
  for (const token of rawTokens) {
    if (ACRONYM_MAP[token]) {
      ACRONYM_MAP[token].forEach((expanded) => searchTokensSet.add(expanded));
    }
  }
  const searchTokens = Array.from(searchTokensSet);

  const scoredItems: SearchResultItem[] = [];

  for (const doc of index) {
    let score = 0;
    const titleLower = doc.title.toLowerCase();
    const descLower = doc.description.toLowerCase();
    const contentLower = (doc.content || "").toLowerCase();
    const categoryLower = doc.category.toLowerCase();
    const subcategoryLower = (doc.subcategory || "").toLowerCase();
    const keywordsLower = (doc.keywords || []).map((k) => k.toLowerCase()).join(" ");

    const docWords = [
      ...titleLower.split(/\s+/),
      ...descLower.split(/\s+/),
      ...keywordsLower.split(/\s+/),
    ];

    const matchedTermsInDoc = new Set<string>();

    /* ── 1. EXACT PHRASE MATCHES ── */
    if (titleLower === query) {
      score += 250;
    } else if (titleLower.startsWith(query)) {
      score += 160;
    } else if (titleLower.includes(query)) {
      score += 110;
    }

    if (descLower.includes(query)) {
      score += 60;
    }

    if (keywordsLower.includes(query)) {
      score += 70;
    }

    /* ── 2. TOKEN MATCHES ── */
    for (const token of searchTokens) {
      let tokenMatched = false;

      // Title Token Match
      if (titleLower.includes(token)) {
        score += 45;
        tokenMatched = true;
        matchedTermsInDoc.add(token);
      }

      // Keywords Token Match
      if (keywordsLower.includes(token)) {
        score += 30;
        tokenMatched = true;
        matchedTermsInDoc.add(token);
      }

      // Category / Subcategory Match
      if (categoryLower.includes(token) || subcategoryLower.includes(token)) {
        score += 25;
        tokenMatched = true;
        matchedTermsInDoc.add(token);
      }

      // Description Match
      if (descLower.includes(token)) {
        score += 15;
        tokenMatched = true;
        matchedTermsInDoc.add(token);
      }

      // Content Match
      if (contentLower.includes(token)) {
        score += 8;
        tokenMatched = true;
        matchedTermsInDoc.add(token);
      }

      // Typo / Fuzzy Match if not already matched
      if (!tokenMatched) {
        for (const word of docWords) {
          if (isFuzzyMatch(token, word)) {
            score += 20;
            tokenMatched = true;
            matchedTermsInDoc.add(word);
            break;
          }
        }
      }
    }

    // Require at least one token match
    if (score > 0 && matchedTermsInDoc.size > 0) {
      // Bonus if all raw tokens matched
      const allRawMatched = rawTokens.every((t) =>
        titleLower.includes(t) ||
        descLower.includes(t) ||
        keywordsLower.includes(t) ||
        contentLower.includes(t)
      );
      if (allRawMatched) {
        score += 40;
      }

      const matchedTerms = Array.from(matchedTermsInDoc);
      const snippet = generateSnippet(doc, matchedTerms.length > 0 ? matchedTerms : rawTokens);

      scoredItems.push({
        document: doc,
        score,
        snippet,
        matchedTerms,
      });
    }
  }

  // Sort results strictly by relevance score descending
  scoredItems.sort((a, b) => b.score - a.score);

  const totalResults = scoredItems.length;
  const totalPages = Math.ceil(totalResults / pageSize) || 1;
  const currentPage = Math.max(1, Math.min(page, totalPages));
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedResults = scoredItems.slice(startIndex, startIndex + pageSize);

  return {
    results: paginatedResults,
    totalResults,
    query: rawQuery,
    page: currentPage,
    pageSize,
    totalPages,
  };
}
