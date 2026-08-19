import { notFound } from "next/navigation";
import type { Metadata } from "next";

import ProgramPage from "@/components/programs/ProgramPage";
import {
  getProgramBySlug,
  getAllProgramSlugs,
} from "@/lib/programs/programRepository";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllProgramSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const program = getProgramBySlug(slug);

  if (!program) {
    return {};
  }

  return {
    title: program.seo.title,

    description: program.seo.description,

    keywords: program.seo.keywords,
  };
}

export default async function ProgramRoute({
  params,
}: PageProps) {
  const { slug } = await params;

  const program = getProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  return <ProgramPage data={program} />;
}