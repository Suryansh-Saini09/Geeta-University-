import { notFound } from "next/navigation";
import type { Metadata } from "next";

import ProgramPage from "@/components/programs/ProgramPage";
import CmsProgramPage from "@/components/programs/CmsProgramPage";
import { getPublishedProgram } from "@/server/services/publicAcademic";
import {
  getProgramBySlug,
  getAllProgramSlugs,
} from "@/lib/programs/programRepository";
import { getLocale } from "@/lib/i18n/getLocale";

export const dynamic = "force-dynamic";

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
  const locale = await getLocale();

  const program = await getProgramBySlug(slug, locale);

  if (!program) {
    const cmsProgram = await getPublishedProgram(slug);
    return cmsProgram ? { title: cmsProgram.seo?.title ?? cmsProgram.name, description: cmsProgram.seo?.description ?? undefined, robots: cmsProgram.seo?.noIndex ? { index: false } : undefined } : {};
  }

  if (!program) {
    return {};
  }

  const canonical = locale === "en"
    ? `https://geetauniversity.edu.in/programs/${slug}`
    : `https://geetauniversity.edu.in/${locale}/programs/${slug}`;

  return {
    title: program.seo?.title || program.name,
    description: program.seo?.description || program.hero?.description,
    keywords: program.seo?.keywords,
    alternates: {
      canonical,
      languages: {
        "en": `https://geetauniversity.edu.in/programs/${slug}`,
        "hi": `https://geetauniversity.edu.in/hi/programs/${slug}`,
        "fr": `https://geetauniversity.edu.in/fr/programs/${slug}`,
        "x-default": `https://geetauniversity.edu.in/programs/${slug}`,
      },
    },
  };
}

export default async function ProgramRoute({
  params,
}: PageProps) {
  const { slug } = await params;
  const locale = await getLocale();

  const program = await getProgramBySlug(slug, locale);

  if (!program) {
    const cmsProgram = await getPublishedProgram(slug);
    if (!cmsProgram) notFound();
    return <CmsProgramPage program={cmsProgram} />;
  }

  return <ProgramPage data={program} />;
}
