import React, { Suspense } from "react";
import type { Metadata } from "next";
import SearchResultsView from "@/components/search/SearchResultsView";

interface PageProps {
  searchParams: Promise<{
    q?: string;
    page?: string;
  }>;
}

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const { q } = await searchParams;
  const query = q?.trim();

  return {
    title: query
      ? `Search Results for "${query}" | Geeta University`
      : "Website Search | Geeta University",
    description:
      "Search Geeta University programs, admissions, scholarships, campus facilities, and courses in Delhi NCR Panipat.",
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: "70vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "sans-serif",
            color: "#0A1F44",
            fontSize: "18px",
            fontWeight: 600,
          }}
        >
          Loading search results...
        </div>
      }
    >
      <SearchResultsView />
    </Suspense>
  );
}
