"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, ChevronLeft, ChevronRight, BookOpen, GraduationCap, Award, HelpCircle, Sparkles, ExternalLink } from "lucide-react";
import { searchWebsite } from "@/lib/search/searchEngine";
import type { SearchResultsResponse, SearchResultItem } from "@/lib/search/types";

// Helper component to render snippet with highlighted search terms without raw HTML injection
function HighlightedText({ text, query }: { text: string; query: string }) {
  if (!text || !query.trim()) return <>{text}</>;

  const terms = query
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .split(/\s+/)
    .filter((t) => t.length > 1);

  if (terms.length === 0) return <>{text}</>;

  // Escape special regex characters
  const escapedTerms = terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`(${escapedTerms.join("|")})`, "gi");

  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) => {
        const isMatch = terms.some((term) => term.toLowerCase() === part.toLowerCase());
        return isMatch ? (
          <span key={index} className="gu-search-highlight">
            {part}
          </span>
        ) : (
          part
        );
      })}
    </>
  );
}

const POPULAR_TAGS = [
  "Computer Science",
  "B.Tech CSE",
  "MBA",
  "B.Sc Agriculture",
  "Scholarships",
  "Fee Structure",
  "Placements",
  "International Admissions",
  "GUTS Exam",
  "Hostel Facilities",
];

export default function SearchResultsView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const queryParam = searchParams.get("q") || "";
  const pageParam = parseInt(searchParams.get("page") || "1", 10);

  const [inputQuery, setInputQuery] = useState(queryParam);
  const [data, setData] = useState<SearchResultsResponse | null>(null);

  useEffect(() => {
    setInputQuery(queryParam);
    if (queryParam) {
      const res = searchWebsite(queryParam, pageParam, 10);
      setData(res);
    } else {
      setData(null);
    }
  }, [queryParam, pageParam]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputQuery.trim();
    if (trimmed) {
      router.push(`/search?q=${encodeURIComponent(trimmed)}&page=1`);
    }
  };

  const handlePageChange = (newPage: number) => {
    if (!queryParam) return;
    router.push(`/search?q=${encodeURIComponent(queryParam)}&page=${newPage}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="gu-search-page-root">
      <style>{`
        .gu-search-page-root {
          min-height: 80vh;
          background: #F7F9FC;
          color: #1A202C;
          font-family: 'Source Sans 3', sans-serif;
          padding-bottom: 80px;
        }

        /* ── SEARCH HEADER BAR ── */
        .gu-search-header-bg {
          background: #0A1F44;
          color: #ffffff;
          padding: 48px 24px 40px;
          border-bottom: 4px solid #e8871a;
          box-shadow: 0 4px 20px rgba(10, 31, 68, 0.15);
        }

        .gu-search-header-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .gu-search-header-title {
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: #e8871a;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .gu-search-form-header {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
        }

        .gu-search-input-header {
          width: 100%;
          background: #ffffff;
          border: 2px solid #E2E8F0;
          border-radius: 8px;
          padding: 14px 120px 14px 20px;
          font-size: 17px;
          color: #0A1F44;
          font-weight: 600;
          outline: none;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .gu-search-input-header:focus {
          border-color: #e8871a;
          box-shadow: 0 0 0 4px rgba(232, 135, 26, 0.2);
        }

        .gu-search-btn-header {
          position: absolute;
          right: 6px;
          background: #e8871a;
          color: #ffffff;
          border: none;
          border-radius: 6px;
          padding: 9px 20px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: background 0.2s;
        }
        .gu-search-btn-header:hover {
          background: #c9710f;
        }

        /* ── MAIN CONTENT CONTAINER ── */
        .gu-search-body {
          max-width: 1000px;
          margin: 36px auto 0;
          padding: 0 24px;
        }

        .gu-search-stats {
          font-size: 14.5px;
          color: #4A5568;
          margin-bottom: 24px;
          padding-bottom: 14px;
          border-bottom: 1px solid #E2E8F0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .gu-search-stats strong {
          color: #0A1F44;
          font-weight: 700;
        }

        /* ── RESULTS LIST ── */
        .gu-search-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .gu-search-item {
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 8px;
          padding: 22px 26px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.15s;
          position: relative;
        }
        .gu-search-item:hover {
          border-color: #CBD5E0;
          box-shadow: 0 6px 18px rgba(10, 31, 68, 0.08);
          transform: translateY(-1px);
        }

        .gu-search-item-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 6px;
        }

        .gu-search-badge {
          background: rgba(10, 31, 68, 0.06);
          color: #0A1F44;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 4px;
          border: 1px solid rgba(10, 31, 68, 0.12);
        }
        .gu-search-subcat {
          font-size: 12px;
          color: #718096;
          font-weight: 600;
        }

        .gu-search-item-title {
          font-size: 19px;
          font-weight: 700;
          line-height: 1.35;
          margin-bottom: 8px;
        }
        .gu-search-item-title a {
          color: #0A1F44;
          text-decoration: none;
          transition: color 0.18s;
        }
        .gu-search-item-title a:hover {
          color: #e8871a;
          text-decoration: underline;
        }

        .gu-search-item-snippet {
          font-size: 14.5px;
          line-height: 1.6;
          color: #4A5568;
          margin-bottom: 10px;
        }

        .gu-search-highlight {
          background: rgba(232, 135, 26, 0.18);
          color: #0A1F44;
          font-weight: 700;
          padding: 1px 3px;
          border-radius: 2px;
        }

        .gu-search-item-url {
          font-size: 12.5px;
          color: #245FA8;
          display: flex;
          align-items: center;
          gap: 4px;
          font-weight: 600;
          text-decoration: none;
        }
        .gu-search-item-url:hover {
          text-decoration: underline;
        }

        /* ── PAGINATION ── */
        .gu-search-pagination {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 40px;
        }

        .gu-page-btn {
          min-width: 38px;
          height: 38px;
          padding: 0 12px;
          border-radius: 6px;
          background: #ffffff;
          border: 1px solid #CBD5E0;
          color: #0A1F44;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.18s, border-color 0.18s, color 0.18s;
        }
        .gu-page-btn:hover:not(:disabled) {
          border-color: #e8871a;
          color: #e8871a;
          background: rgba(232, 135, 26, 0.05);
        }
        .gu-page-btn.active {
          background: #e8871a;
          border-color: #e8871a;
          color: #ffffff;
        }
        .gu-page-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        /* ── EMPTY / NO RESULTS STATE ── */
        .gu-search-empty-box {
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 10px;
          padding: 48px 32px;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
        }

        .gu-empty-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(232, 135, 26, 0.12);
          color: #e8871a;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }

        .gu-empty-title {
          font-size: 22px;
          font-weight: 800;
          color: #0A1F44;
          margin-bottom: 10px;
        }

        .gu-empty-text {
          font-size: 15px;
          color: #718096;
          max-width: 520px;
          margin: 0 auto 28px;
          line-height: 1.6;
        }

        .gu-empty-tips {
          background: #F7FAFC;
          border: 1px solid #EDF2F7;
          border-radius: 8px;
          padding: 20px;
          max-width: 560px;
          margin: 0 auto 32px;
          text-align: left;
        }
        .gu-empty-tips-title {
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
          color: #0A1F44;
          margin-bottom: 8px;
          letter-spacing: 0.5px;
        }
        .gu-empty-tips ul {
          margin: 0;
          padding-left: 20px;
          color: #4A5568;
          font-size: 14px;
          line-height: 1.6;
        }

        .gu-popular-chips {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-top: 16px;
        }

        .gu-chip-btn {
          background: #EDF2F7;
          color: #0A1F44;
          border: 1px solid #CBD5E0;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.18s, color 0.18s, border-color 0.18s;
        }
        .gu-chip-btn:hover {
          background: #e8871a;
          border-color: #e8871a;
          color: #ffffff;
        }
      `}</style>

      {/* ── HEADER SEARCH BAR ── */}
      <div className="gu-search-header-bg">
        <div className="gu-search-header-container">
          <div className="gu-search-header-title">
            <Search size={15} />
            Website Search Engine
          </div>
          <form onSubmit={handleSearchSubmit} className="gu-search-form-header">
            <input
              type="text"
              className="gu-search-input-header"
              placeholder="Search programs, schools, admissions, campus life..."
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
            />
            <button type="submit" className="gu-search-btn-header">
              <Search size={16} />
              Search
            </button>
          </form>
        </div>
      </div>

      {/* ── MAIN RESULTS AREA ── */}
      <main className="gu-search-body">
        {/* CASE 1: Query Provided & Results Found */}
        {data && data.totalResults > 0 && (
          <>
            <div className="gu-search-stats">
              <span>
                About <strong>{data.totalResults}</strong> result{data.totalResults === 1 ? "" : "s"} for{" "}
                <strong>&quot;{data.query}&quot;</strong>
              </span>
              <span>
                Page <strong>{data.page}</strong> of {data.totalPages}
              </span>
            </div>

            <div className="gu-search-list">
              {data.results.map((item) => (
                <article key={item.document.id} className="gu-search-item">
                  <div className="gu-search-item-meta">
                    <span className="gu-search-badge">{item.document.category}</span>
                    {item.document.subcategory && (
                      <span className="gu-search-subcat">• {item.document.subcategory}</span>
                    )}
                  </div>

                  <h3 className="gu-search-item-title">
                    <Link href={item.document.href}>
                      <HighlightedText text={item.document.title} query={data.query} />
                    </Link>
                  </h3>

                  <p className="gu-search-item-snippet">
                    <HighlightedText text={item.snippet} query={data.query} />
                  </p>

                  <Link href={item.document.href} className="gu-search-item-url">
                    <span>geetauniversity.edu.in{item.document.href}</span>
                    <ExternalLink size={12} />
                  </Link>
                </article>
              ))}
            </div>

            {/* Pagination Controls */}
            {data.totalPages > 1 && (
              <div className="gu-search-pagination">
                <button
                  type="button"
                  className="gu-page-btn"
                  disabled={data.page === 1}
                  onClick={() => handlePageChange(data.page - 1)}
                  aria-label="Previous page"
                >
                  <ChevronLeft size={18} />
                </button>

                {Array.from({ length: data.totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    type="button"
                    className={`gu-page-btn ${p === data.page ? "active" : ""}`}
                    onClick={() => handlePageChange(p)}
                  >
                    {p}
                  </button>
                ))}

                <button
                  type="button"
                  className="gu-page-btn"
                  disabled={data.page === data.totalPages}
                  onClick={() => handlePageChange(data.page + 1)}
                  aria-label="Next page"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </>
        )}

        {/* CASE 2: Query Provided but NO Results Found */}
        {data && data.totalResults === 0 && (
          <div className="gu-search-empty-box">
            <div className="gu-empty-icon">
              <HelpCircle size={32} />
            </div>
            <h2 className="gu-empty-title">No results found for &quot;{data.query}&quot;</h2>
            <p className="gu-empty-text">
              We couldn&apos;t find any exact matches across Geeta University programs, admissions, or content.
            </p>

            <div className="gu-empty-tips">
              <div className="gu-empty-tips-title">Search Suggestions:</div>
              <ul>
                <li>Double check your spelling (e.g. &quot;computer&quot; instead of &quot;computr&quot;).</li>
                <li>Try more general keywords (e.g. &quot;CSE&quot; or &quot;Engineering&quot;).</li>
                <li>Try searching for degree names like &quot;B.Tech&quot;, &quot;MBA&quot;, &quot;BCA&quot;, or &quot;Ph.D&quot;.</li>
              </ul>
            </div>

            <div>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "#718096", textTransform: "uppercase" }}>
                Try popular searches instead:
              </div>
              <div className="gu-popular-chips">
                {POPULAR_TAGS.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className="gu-chip-btn"
                    onClick={() => router.push(`/search?q=${encodeURIComponent(tag)}`)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CASE 3: Empty Query Landing State */}
        {!queryParam && (
          <div className="gu-search-empty-box" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
            <div className="gu-empty-icon" style={{ background: "rgba(10, 31, 68, 0.08)", color: "#0A1F44" }}>
              <Sparkles size={32} style={{ color: "#e8871a" }} />
            </div>
            <h2 className="gu-empty-title">Search Geeta University</h2>
            <p className="gu-empty-text">
              Enter a keyword in the search bar above to find undergraduate programs, postgraduate courses, PhD research, scholarships, campus facilities, and admissions information.
            </p>

            <div className="gu-popular-chips">
              {POPULAR_TAGS.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className="gu-chip-btn"
                  onClick={() => router.push(`/search?q=${encodeURIComponent(tag)}`)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
