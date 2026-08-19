import type { ProgramPageData } from "@/data/programs/types";
import { commerceSchool } from "@/data/programs/schools/commerce";

const programs: ProgramPageData[] = [
  commerceSchool,
];

export function getProgramBySlug(
  slug: string
): ProgramPageData | undefined {
  return programs.find(
    (program) => program.slug === slug
  );
}

export function getAllProgramSlugs(): string[] {
  return programs.map(
    (program) => program.slug
  );
}

export function getAllPrograms(): ProgramPageData[] {
  return programs;
}