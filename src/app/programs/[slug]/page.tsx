import { notFound } from "next/navigation";
import type { Metadata } from "next";

import ProgramPage from "@/components/programs/ProgramPage";
import CmsProgramPage from "@/components/programs/CmsProgramPage";
import { getPublishedProgram } from "@/server/services/publicAcademic";
import {
  getProgramBySlug,
  getAllProgramSlugs,
} from "@/lib/programs/programRepository";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamic = "force-dynamic";

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
    const cmsProgram = await getPublishedProgram(slug);
    return cmsProgram ? { title: cmsProgram.seo?.title ?? cmsProgram.name, description: cmsProgram.seo?.description ?? undefined, robots: cmsProgram.seo?.noIndex ? { index: false } : undefined } : {};
  }

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
    const cmsProgram = await getPublishedProgram(slug);
    if (!cmsProgram) notFound();
    return <CmsProgramPage program={cmsProgram} />;
  }

  return <ProgramPage data={program} />;
}
