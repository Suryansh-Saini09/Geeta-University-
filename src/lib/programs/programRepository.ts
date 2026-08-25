import type { ProgramPageData } from "@/data/programs/types";

import { commerceSchool } from "@/data/programs/schools/commerce";
import { pharmacySchool } from "@/data/programs/schools/pharmacy";
import { healthSciencesSchool } from "@/data/programs/schools/healthSciences";
import { hospitalitySchool } from "@/data/programs/schools/hospitality";
import { forensicSciencesSchool } from "@/data/programs/schools/forensicSciences";
import { lawSchool } from "@/data/programs/schools/law";

const programs: ProgramPageData[] = [
  commerceSchool,
  pharmacySchool,
  healthSciencesSchool,
  hospitalitySchool,
  forensicSciencesSchool,
  lawSchool,
  // Alias for management studies
  {
    ...commerceSchool,
    slug: "school-of-management-and-business-studies",
  },
  // Alias for School of Sciences
  {
    ...forensicSciencesSchool,
    slug: "school-of-sciences",
  },
  // Alias for Law School
  {
    ...lawSchool,
    slug: "school-of-law",
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