import type { ProgramPageData } from "@/data/programs/types";

import { commerceSchool } from "@/data/programs/schools/commerce";
import { pharmacySchool } from "@/data/programs/schools/pharmacy";
import { healthSciencesSchool } from "@/data/programs/schools/healthSciences";
import { hospitalitySchool } from "@/data/programs/schools/hospitality";
import { forensicSciencesSchool } from "@/data/programs/schools/forensicSciences";
import { lawSchool } from "@/data/programs/schools/law";
import { agricultureSchool } from "@/data/programs/schools/agriculture";
import { humanitiesSchool } from "@/data/programs/schools/humanities";
import { computerScienceSchool } from "@/data/programs/schools/computerScience";
import { spBansalSchool } from "@/data/programs/schools/spBansal";

const programs: ProgramPageData[] = [
  commerceSchool,
  pharmacySchool,
  healthSciencesSchool,
  hospitalitySchool,
  forensicSciencesSchool,
  lawSchool,
  agricultureSchool,
  humanitiesSchool,
  computerScienceSchool,
  spBansalSchool,
  // Alias for humanities and social sciences (plural & short)
  {
    ...humanitiesSchool,
    slug: "school-of-humanities-and-social-sciences",
  },
  {
    ...humanitiesSchool,
    slug: "school-of-humanities",
  },
  // Alias for agricultural sciences & studies
  {
    ...agricultureSchool,
    slug: "school-of-agricultural-sciences",
  },
  {
    ...agricultureSchool,
    slug: "school-of-agriculture",
  },
  // Alias for management & commerce studies
  {
    ...commerceSchool,
    slug: "school-of-management-and-business-studies",
  },
  {
    ...commerceSchool,
    slug: "school-of-commerce",
  },
  {
    ...commerceSchool,
    slug: "school-of-management",
  },
  // Alias for School of Sciences
  {
    ...forensicSciencesSchool,
    slug: "school-of-sciences",
  },
  {
    ...forensicSciencesSchool,
    slug: "school-of-forensic-science",
  },
  // Alias for Law School
  {
    ...lawSchool,
    slug: "school-of-law",
  },
  {
    ...lawSchool,
    slug: "geeta-institute-of-law",
  },
  // Alias for Pharmacy School
  {
    ...pharmacySchool,
    slug: "school-of-pharmacy",
  },
  // Alias for Hospitality & Hotel Management
  {
    ...hospitalitySchool,
    slug: "school-of-hotel-management",
  },
  {
    ...hospitalitySchool,
    slug: "school-of-hospitality",
  },
  // Alias for SPBSB
  {
    ...spBansalSchool,
    slug: "spbsb",
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