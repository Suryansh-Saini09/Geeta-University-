import { notFound } from "next/navigation";
import type { Metadata } from "next";

import EdgePage from "@/components/edge/EdgePage";
import { getEdgePageBySlug } from "@/lib/edge/edgeRepository";

export const metadata: Metadata = {
  title: "GU Global Edge | Geeta Global Law School | Admissions Open",
  description:
    "Empowering the next generation of legal innovators with practice-oriented law programs, moot courts, and global exposure at Geeta Global Law School.",
  keywords: [
    "gu global edge",
    "geeta global law school",
    "ba llb panipat",
    "bba llb haryana",
    "llm master of laws delhi ncr",
    "phd in law haryana",
    "best law university delhi ncr",
  ],
};

export default function GuGlobalEdgePage() {
  const pageData = getEdgePageBySlug("gu-global-edge");

  if (!pageData) {
    notFound();
  }

  return <EdgePage data={pageData} />;
}
