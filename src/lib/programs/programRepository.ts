import type { ProgramPageData } from "@/data/programs/types";

import { commerceSchool } from "@/data/programs/schools/commerce";
import { pharmacySchool } from "@/data/programs/schools/pharmacy";
import { healthSciencesSchool } from "@/data/programs/schools/healthSciences";

const programs: ProgramPageData[] = [
  commerceSchool,
  pharmacySchool,
  healthSciencesSchool,
  // Alias for management studies
  {
    ...commerceSchool,
    slug: "school-of-management-and-business-studies",
  },
];

export function getProgramBySlug(
  slug: string
): ProgramPageData | undefined {
  return programs.find(
    (program) => program.slug.toLowerCase() === slug.toLowerCase()
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