import type { LucideIcon } from "lucide-react";

export interface ProgramHeroData {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  enquireHref?: string;
  exploreHref?: string;
  badge?: string;
}

export interface ProgramIntroData {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
  badgeText?: string;
}

export interface SpecialisationItem {
  title: string;
  icon?: LucideIcon | string;
  points: string[];
}

export interface SpecialisationsData {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items: SpecialisationItem[];
}

export interface CourseProgramItem {
  name: string;
  href?: string;
  duration?: string;
  eligibility?: string;
}

export interface CourseCategoryItem {
  title: string;
  duration?: string;
  eligibility?: string;
  programs: CourseProgramItem[];
}

export interface ProgramCoursesData {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  categories: CourseCategoryItem[];
}

export interface MentorMember {
  name: string;
  designation: string;
  description: string;
  image: string;
}

export interface ProgramMentorsData {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  members: MentorMember[];
}

export interface PlacementStat {
  value: string;
  label: string;
  icon?: LucideIcon | string;
}

export interface PlacementRecruiter {
  name: string;
  color?: string;
  logo?: string | null;
}

export interface PlacementPackageBar {
  label: string;
  value: number | string;
  width: string;
}

export interface PlacementSectorItem {
  label: string;
  value: string;
  color: string;
}

export interface ProgramPlacementData {
  eyebrow?: string;
  title?: string;
  description?: string;
  heroImage?: string;
  note?: {
    headline: string;
    subline: string;
  };
  stats?: PlacementStat[];
  recruiters?: PlacementRecruiter[];
  packageBars?: PlacementPackageBar[];
  sectorLegend?: PlacementSectorItem[];
}

export interface ExpertCategoryItem {
  number: number;
  title: string;
  subtitle: string;
  points: string[];
  icon?: LucideIcon | string;
  ribbonColor?: string;
}

export interface ProgramExpertsData {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  categories: ExpertCategoryItem[];
}

export interface CareerHighlight {
  value: string;
  label: string;
}

export interface CareerPathwayData {
  eyebrow?: string;
  title: string;
  description: string;
  highlights?: CareerHighlight[];
  recruiters?: string[];
}

export interface DeanMessageData {
  eyebrow?: string;
  name: string;
  designation: string;
  image: string;
  message: string;
  schoolLabel?: string;
}

export interface LegacyEcosystemItem {
  title: string;
  description: string;
}

export interface LegacyEcosystemData {
  eyebrow?: string;
  title: string;
  description: string;
  items: LegacyEcosystemItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProgramFAQData {
  eyebrow?: string;
  title?: string;
  description?: string;
  items: FAQItem[];
}

export interface ProgramCTAData {
  headline?: string;
  paragraphs?: string[];
  otherProgramsTitle?: string;
  otherPrograms?: string[];
  qrImage?: string;
  qrLabel?: string;
  qrCta?: string;
  applyLinkText?: string;
  applyLinkHref?: string;
  helpline?: string;
  website?: string;
  campusAddress?: string;
}

/**
 * Unified Program Data Model
 * Supports both full School/Department pages and Individual Degree pages
 */
export interface ProgramData {
  slug: string;
  name: string;
  shortName?: string;
  type?: "school" | "program";

  seo?: {
    title: string;
    description: string;
    keywords?: string[];
  };

  hero: ProgramHeroData;
  intro?: ProgramIntroData;
  specialisations?: SpecialisationsData;
  courses?: ProgramCoursesData | CourseCategoryItem[];
  mentors?: ProgramMentorsData | MentorMember[];
  placement?: ProgramPlacementData;
  experts?: ProgramExpertsData | ExpertCategoryItem[];
  careerPathway?: CareerPathwayData;
  career?: CareerPathwayData; // Alias for backward compatibility
  deanMessage?: DeanMessageData;
  dean?: DeanMessageData; // Alias for backward compatibility
  legacy?: LegacyEcosystemData;
  faqs?: FAQItem[] | ProgramFAQData;
  cta?: ProgramCTAData;
}
