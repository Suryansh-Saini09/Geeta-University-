"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Sparkles,
  Newspaper,
  Calendar,
  Search,
  Filter,
  ZoomIn,
  X,
  ExternalLink,
  ChevronLeft,
  BookOpen,
} from "lucide-react";
import LegacyEcosystem from "@/components/about/LegacyEcosystem";

interface NewsItem {
  id: string;
  title: string;
  publication: string;
  date: string;
  image: string;
  fullImage: string;
}

const newsData: NewsItem[] = [
  {
    id: "1",
    title: "Panipat Kesari Coverage",
    publication: "Panipat Kesari",
    date: "10-05-2026",
    image: "https://geetauniversity.edu.in/uploads/all/2566/conversions/10-May-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/2566/10-May.jpg",
  },
  {
    id: "2",
    title: "Panipat Kesari Coverage",
    publication: "Panipat Kesari",
    date: "06-05-2026",
    image: "https://geetauniversity.edu.in/uploads/all/2567/conversions/6-May-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/2567/6-May.jpg",
  },
  {
    id: "3",
    title: "Panipat Kesari Coverage",
    publication: "Panipat Kesari",
    date: "03-05-2026",
    image: "https://geetauniversity.edu.in/uploads/all/2568/conversions/3-May-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/2568/3-May.jpg",
  },
  {
    id: "4",
    title: "Panipat Kesari Coverage",
    publication: "Panipat Kesari",
    date: "02-05-2026",
    image: "https://geetauniversity.edu.in/uploads/all/2569/conversions/2-May-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/2569/2-May.jpg",
  },
  {
    id: "5",
    title: "Panipat Kesari Coverage",
    publication: "Panipat Kesari",
    date: "01-05-2026",
    image: "https://geetauniversity.edu.in/uploads/all/2550/conversions/29-April-panipat-kesari-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/2550/29-April-panipat-kesari.jpg",
  },
  {
    id: "6",
    title: "Punjab Kesari Coverage",
    publication: "Punjab Kesari",
    date: "29-04-2026",
    image: "https://geetauniversity.edu.in/uploads/all/2550/conversions/29-April-panipat-kesari-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/2550/29-April-panipat-kesari.jpg",
  },
  {
    id: "7",
    title: "Punjab Kesari Coverage",
    publication: "Punjab Kesari",
    date: "23-04-2026",
    image: "https://geetauniversity.edu.in/uploads/all/2551/conversions/23-April-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/2551/23-April.jpg",
  },
  {
    id: "8",
    title: "Panipat Bhaskar Coverage",
    publication: "Panipat Bhaskar",
    date: "25-04-2026",
    image: "https://geetauniversity.edu.in/uploads/all/2552/conversions/25-April-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/2552/25-April.jpg",
  },
  {
    id: "9",
    title: "Panipat Bhaskar Coverage",
    publication: "Panipat Bhaskar",
    date: "19-04-2026",
    image: "https://geetauniversity.edu.in/uploads/all/2553/conversions/19-April-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/2553/19-April.jpg",
  },
  {
    id: "10",
    title: "Haryana Tribune Coverage",
    publication: "Haryana Tribune",
    date: "18-04-2026",
    image: "https://geetauniversity.edu.in/uploads/all/2554/conversions/18-Aril-news-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/2554/18-Aril-news.jpg",
  },
  {
    id: "11",
    title: "Panipat Bhaskar Coverage",
    publication: "Panipat Bhaskar",
    date: "17-04-2026",
    image: "https://geetauniversity.edu.in/uploads/all/2555/conversions/17-April-paniapt-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/2555/17-April-paniapt.jpg",
  },
  {
    id: "12",
    title: "Panipat Kesari Coverage",
    publication: "Panipat Kesari",
    date: "21-03-2026",
    image: "https://geetauniversity.edu.in/uploads/all/2556/conversions/21-Mar-punjab-kesri-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/2556/21-Mar-punjab-kesri.jpg",
  },
  {
    id: "13",
    title: "Panipat Bhaskar Coverage",
    publication: "Panipat Bhaskar",
    date: "21-03-2026",
    image: "https://geetauniversity.edu.in/uploads/all/2557/conversions/21-Mar-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/2557/21-Mar.jpeg",
  },
  {
    id: "14",
    title: "Panipat Kesari Coverage",
    publication: "Panipat Kesari",
    date: "20-03-2026",
    image: "https://geetauniversity.edu.in/uploads/all/2558/conversions/20-March-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/2558/20-March.jpg",
  },
  {
    id: "15",
    title: "Panipat Bhaskar Coverage",
    publication: "Panipat Bhaskar",
    date: "20-03-2026",
    image: "https://geetauniversity.edu.in/uploads/all/2559/conversions/20-Mar-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/2559/20-Mar.jpg",
  },
  {
    id: "16",
    title: "Dainik Tribune Coverage",
    publication: "Dainik Tribune",
    date: "17-03-2026",
    image: "https://geetauniversity.edu.in/uploads/all/2560/conversions/17-Mar-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/2560/17-Mar.jpg",
  },
  {
    id: "17",
    title: "Punjab Kesari Coverage",
    publication: "Punjab Kesari",
    date: "16-03-2026",
    image: "https://geetauniversity.edu.in/uploads/all/2561/conversions/16-Mar-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/2561/16-Mar.jpg",
  },
  {
    id: "18",
    title: "Panipat Bhaskar Coverage",
    publication: "Panipat Bhaskar",
    date: "16-03-2026",
    image: "https://geetauniversity.edu.in/uploads/all/2562/conversions/16-March-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/2562/16-March.jpg",
  },
  {
    id: "19",
    title: "Amar Ujala Coverage",
    publication: "Amar Ujala",
    date: "14-03-2026",
    image: "https://geetauniversity.edu.in/uploads/all/2563/conversions/14---3-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/2563/14---3.jpeg",
  },
  {
    id: "20",
    title: "Punjab Kesari Coverage",
    publication: "Punjab Kesari",
    date: "14-03-2026",
    image: "https://geetauniversity.edu.in/uploads/all/2564/conversions/14-Mar-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/2564/14-Mar.jpg",
  },
  {
    id: "21",
    title: "Panipat Bhaskar Coverage",
    publication: "Panipat Bhaskar",
    date: "14-03-2026",
    image: "https://geetauniversity.edu.in/uploads/all/2565/conversions/14-March-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/2565/14-March.jpeg",
  },
  {
    id: "22",
    title: "Punjab Kesari Coverage",
    publication: "Punjab Kesari",
    date: "08-03-2026",
    image: "https://geetauniversity.edu.in/uploads/all/2108/conversions/8-3-3-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/2108/8-3-3.jpeg",
  },
  {
    id: "23",
    title: "Dainik Jagran Coverage",
    publication: "Dainik Jagran",
    date: "08-03-2026",
    image: "https://geetauniversity.edu.in/uploads/all/2107/conversions/8-3-2-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/2107/8-3-2.jpeg",
  },
  {
    id: "24",
    title: "Dainik Bhaskar Coverage",
    publication: "Dainik Bhaskar",
    date: "08-03-2026",
    image: "https://geetauniversity.edu.in/uploads/all/2106/conversions/8-3-1-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/2106/8-3-1.jpeg",
  },
  {
    id: "25",
    title: "Dainik Jagran Coverage",
    publication: "Dainik Jagran",
    date: "03-03-2026",
    image: "https://geetauniversity.edu.in/uploads/all/2102/conversions/3-3-2-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/2102/3-3-2.jpeg",
  },
  {
    id: "26",
    title: "Punjab Kesari Coverage",
    publication: "Punjab Kesari",
    date: "03-03-2026",
    image: "https://geetauniversity.edu.in/uploads/all/2101/conversions/3-3-1-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/2101/3-3-1.jpeg",
  },
  {
    id: "27",
    title: "Dainik Bhaskar Coverage",
    publication: "Dainik Bhaskar",
    date: "27-02-2026",
    image: "https://geetauniversity.edu.in/uploads/all/2115/conversions/27-2-2-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/2115/27-2-2.jpeg",
  },
  {
    id: "28",
    title: "Dainik Jagran Coverage",
    publication: "Dainik Jagran",
    date: "27-02-2026",
    image: "https://geetauniversity.edu.in/uploads/all/2114/conversions/27-2-1-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/2114/27-2-1.jpeg",
  },
  {
    id: "29",
    title: "Punjab Kesari Coverage",
    publication: "Punjab Kesari",
    date: "26-02-2026",
    image: "https://geetauniversity.edu.in/uploads/all/2113/conversions/26-2-3-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/2113/26-2-3.jpeg",
  },
  {
    id: "30",
    title: "Dainik Bhaskar Coverage",
    publication: "Dainik Bhaskar",
    date: "26-02-2026",
    image: "https://geetauniversity.edu.in/uploads/all/2112/conversions/26-2-2-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/2112/26-2-2.jpeg",
  },
  {
    id: "31",
    title: "Dainik Jagran Coverage",
    publication: "Dainik Jagran",
    date: "26-02-2026",
    image: "https://geetauniversity.edu.in/uploads/all/2111/conversions/26-2-1-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/2111/26-2-1.jpeg",
  },
  {
    id: "32",
    title: "Punjab Kesari Coverage",
    publication: "Punjab Kesari",
    date: "21-02-2026",
    image: "https://geetauniversity.edu.in/uploads/all/2110/conversions/21-2-2-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/2110/21-2-2.jpeg",
  },
  {
    id: "33",
    title: "Dainik Bhaskar Coverage",
    publication: "Dainik Bhaskar",
    date: "21-02-2026",
    image: "https://geetauniversity.edu.in/uploads/all/2109/conversions/21-2-1-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/2109/21-2-1.jpeg",
  },
  {
    id: "34",
    title: "Punjab Kesari Coverage",
    publication: "Punjab Kesari",
    date: "08-02-2026",
    image: "https://geetauniversity.edu.in/uploads/all/2105/conversions/8-2-3-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/2105/8-2-3.jpeg",
  },
  {
    id: "35",
    title: "Dainik Bhaskar Coverage",
    publication: "Dainik Bhaskar",
    date: "08-02-2026",
    image: "https://geetauniversity.edu.in/uploads/all/2104/conversions/8-2-2-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/2104/8-2-2.jpeg",
  },
  {
    id: "36",
    title: "Dainik Jagran Coverage",
    publication: "Dainik Jagran",
    date: "08-02-2026",
    image: "https://geetauniversity.edu.in/uploads/all/2103/conversions/8-2-1-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/2103/8-2-1.jpeg",
  },
  {
    id: "37",
    title: "Dainik Bhaskar Coverage",
    publication: "Dainik Bhaskar",
    date: "01-02-2026",
    image: "https://geetauniversity.edu.in/uploads/all/1965/conversions/1-2-1-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/1965/1-2-1.jpeg",
  },
  {
    id: "38",
    title: "Dainik Jagran Coverage",
    publication: "Dainik Jagran",
    date: "01-02-2026",
    image: "https://geetauniversity.edu.in/uploads/all/1964/conversions/1-2-2-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/1964/1-2-2.jpeg",
  },
  {
    id: "39",
    title: "Tribune News Service Coverage",
    publication: "Tribune News Service",
    date: "25-01-2026",
    image: "https://geetauniversity.edu.in/uploads/all/1960/conversions/25-1-4-full.webp",
    fullImage: "https://geetauniversity.edu.in/uploads/all/1960/25-1-4.jpeg",
  },
];

const publicationsList = [
  "All Publications",
  "Panipat Kesari",
  "Punjab Kesari",
  "Panipat Bhaskar",
  "Dainik Bhaskar",
  "Dainik Jagran",
  "Amar Ujala",
  "Haryana Tribune",
  "Dainik Tribune",
  "Tribune News Service",
];

const ITEMS_PER_PAGE = 12;

export default function GeetaInNewsPage() {
  const [selectedPub, setSelectedPub] = useState("All Publications");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<NewsItem | null>(null);

  // Filter items based on publication and search query
  const filteredNews = useMemo(() => {
    return newsData.filter((item) => {
      const matchPub =
        selectedPub === "All Publications" ||
        item.publication.toLowerCase().includes(selectedPub.toLowerCase());
      const matchQuery =
        searchQuery.trim() === "" ||
        item.publication.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.date.includes(searchQuery);
      return matchPub && matchQuery;
    });
  }, [selectedPub, searchQuery]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE) || 1;
  const paginatedNews = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredNews.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredNews, currentPage]);

  const handlePubChange = (pub: string) => {
    setSelectedPub(pub);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* ── Page Hero Header ── */}
      <section className="relative overflow-hidden bg-[#0A1F44] pt-32 pb-20 text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://geetauniversity.edu.in/uploads/all/252/conversions/new-building-3-(1)-full.webp"
            alt="Geeta University In News"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1F44]/90 via-[#0A1F44]/85 to-[#0A1F44]" />
        </div>

        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#E8871A]/15 blur-3xl pointer-events-none" />

        <div className="gu-container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            {/* Breadcrumb */}
            <nav className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-300">
              <Link href="/" className="hover:text-[#E8871A] transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              <span className="text-[#E8871A]">Geeta in News</span>
            </nav>

            {/* Pill Tag */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-[#E8871A]" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Media Highlights &amp; Press Clippings
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[52px] leading-tight">
              Geeta <span className="text-[#E8871A]">in News</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base text-slate-200 md:text-lg leading-relaxed">
              Explore extensive print and digital media coverage, milestone achievements, academic conclaves, and campus celebrations featured across leading national and regional dailies.
            </p>
          </div>
        </div>
      </section>

      {/* ── Filters & News Clippings Grid ── */}
      <section className="py-16 md:py-20">
        <div className="gu-container">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Controls Bar: Search & Publications */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 rounded-2xl bg-white p-4 sm:p-5 border border-slate-200 shadow-sm">
              {/* Search Box */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by publication or date (e.g., Bhaskar, May)..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2.5 pl-10 pr-4 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:border-[#0A1F44] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0A1F44]"
                />
              </div>

              {/* Total Count */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 self-center md:self-auto">
                <Newspaper className="h-4 w-4 text-[#E8871A]" />
                <span>Showing <strong>{filteredNews.length}</strong> Press Clippings</span>
              </div>
            </div>

            {/* Publication Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {publicationsList.map((pub) => {
                const isActive = selectedPub === pub;
                return (
                  <button
                    key={pub}
                    onClick={() => handlePubChange(pub)}
                    className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                      isActive
                        ? "bg-[#0A1F44] text-white shadow-md shadow-slate-900/10 scale-105"
                        : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    {pub}
                  </button>
                );
              })}
            </div>

            {/* News Clippings Grid */}
            {paginatedNews.length === 0 ? (
              <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center">
                <Newspaper className="mx-auto h-12 w-12 text-slate-300 mb-3" />
                <h3 className="font-serif text-lg font-bold text-slate-700">No clippings found</h3>
                <p className="text-xs text-slate-500 mt-1">Try clearing your search query or selecting another publication tab.</p>
                <button
                  onClick={() => {
                    setSelectedPub("All Publications");
                    setSearchQuery("");
                  }}
                  className="mt-4 rounded-xl bg-[#0A1F44] px-4 py-2 text-xs font-bold text-white hover:bg-[#0D2857]"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {paginatedNews.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedImage(item)}
                    className="group cursor-pointer flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300"
                  >
                    {/* Thumbnail Image Container */}
                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100">
                      <Image
                        src={item.image}
                        alt={`${item.publication} clipping - ${item.date}`}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-[#0A1F44]/40 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                        <div className="rounded-full bg-white/90 p-3 text-[#0A1F44] shadow-lg">
                          <ZoomIn className="h-5 w-5" />
                        </div>
                      </div>
                    </div>

                    {/* Metadata Strip */}
                    <div className="p-4 flex flex-col justify-between flex-1 border-t border-slate-100">
                      <div>
                        <span className="inline-block rounded-md bg-[#0A1F44]/5 px-2.5 py-1 text-[11px] font-bold text-[#0A1F44] mb-1.5">
                          {item.publication}
                        </span>
                        <h4 className="font-serif text-sm font-bold text-[#0A1F44] group-hover:text-[#E8871A] transition-colors line-clamp-1">
                          {item.publication}
                        </h4>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-2">
                        <Calendar className="h-3.5 w-3.5 text-slate-400" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 pt-6">
                <button
                  disabled={currentPage === 1}
                  onClick={() => {
                    setCurrentPage((prev) => Math.max(prev - 1, 1));
                    window.scrollTo({ top: 350, behavior: "smooth" });
                  }}
                  className="flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Previous</span>
                </button>

                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => {
                        setCurrentPage(page);
                        window.scrollTo({ top: 350, behavior: "smooth" });
                      }}
                      className={`h-9 w-9 rounded-xl text-xs font-bold transition ${
                        currentPage === page
                          ? "bg-[#0A1F44] text-white shadow-md shadow-slate-900/20"
                          : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => {
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                    window.scrollTo({ top: 350, behavior: "smooth" });
                  }}
                  className="flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <span>Next</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── High-Resolution Lightbox Modal ── */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative flex max-h-[92vh] max-w-4xl w-full flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 bg-slate-50">
              <div className="flex items-center gap-3">
                <Newspaper className="h-5 w-5 text-[#E8871A]" />
                <div>
                  <h3 className="font-serif text-base font-bold text-[#0A1F44]">
                    {selectedImage.publication}
                  </h3>
                  <p className="text-xs text-slate-500">Published Date: {selectedImage.date}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={selectedImage.fullImage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>Open Full Image</span>
                </a>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="rounded-full bg-slate-200 p-2 text-slate-600 hover:bg-slate-300 hover:text-slate-900"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Modal Body: Zoomable Image */}
            <div className="relative flex-1 overflow-auto p-4 bg-slate-900/5 flex items-center justify-center min-h-[400px]">
              <Image
                src={selectedImage.fullImage || selectedImage.image}
                alt={selectedImage.publication}
                width={800}
                height={1000}
                className="max-h-[75vh] w-auto rounded-xl object-contain shadow-md"
              />
            </div>
          </div>
        </div>
      )}

      {/* ── Legacy & Ecosystem Section ── */}
      <LegacyEcosystem
        id="legacy-ecosystem"
        contextText="Geeta University’s continuous media presence and regional acclaim are grounded in its robust educational ecosystem:"
      />
    </div>
  );
}
