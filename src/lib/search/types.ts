export type SearchCategory =
  | "Programs"
  | "Courses"
  | "Admissions"
  | "About"
  | "GU Edge"
  | "Campus Life"
  | "Placements"
  | "General";

export interface SearchDocument {
  id: string;
  title: string;
  description: string;
  content?: string;
  href: string;
  category: SearchCategory;
  subcategory?: string;
  keywords?: string[];
  type?: string;
}

export interface SearchResultItem {
  document: SearchDocument;
  score: number;
  snippet: string;
  matchedTerms: string[];
}

export interface SearchResultsResponse {
  results: SearchResultItem[];
  totalResults: number;
  query: string;
  page: number;
  pageSize: number;
  totalPages: number;
}
