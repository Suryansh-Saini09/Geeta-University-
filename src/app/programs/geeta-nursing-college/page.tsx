import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProgramPage from "@/components/programs/ProgramPage";
import { getProgramBySlug } from "@/lib/programs/programRepository";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const program = await getProgramBySlug("geeta-nursing-college");
  if (!program) return {};
  return {
    title: program.seo?.title || "Geeta Nursing College",
    description: program.seo?.description || "",
    keywords: program.seo?.keywords,
  };
}

export default async function GeetaNursingCollegePage() {
  const program = await getProgramBySlug("geeta-nursing-college");
  if (!program) notFound();
  return <ProgramPage data={program} />;
}
