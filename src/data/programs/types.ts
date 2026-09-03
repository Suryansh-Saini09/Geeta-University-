export interface VisionMissionData {
  vision: string;
  mission: string[];
}

export interface ProgramPageData {
  slug: string;
  name?: string;
  shortName?: string;
  type: "school" | "program";

  seo: {
    title: string;
    description: string;
    keywords?: string[];
  };

  hero: {
    bannerOnly?: boolean;
    image: string;
    title?: string;
    eyebrow?: string;
    description?: string;
    slides?: HeroSlideItem[];
    ctaText?: string;
    ctaLink?: string;
  };

  about?: {
    eyebrow?: string;
    title: string;
    paragraphs: string[];
    image?: string;
    badgeText?: string;
    careers?: string[];
    closingText?: string;
  };

  visionMission?: VisionMissionData;

  intro?: {
    eyebrow?: string;
    title: string;
    paragraphs: string[];
    image?: string;
    imageAlt?: string;
    badgeText?: string;
  };

  rankings?: RankingItem[];

  specialisations?: {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    items: SpecialisationItem[];
  };

  featuredPrograms?: {
    title1: string;
    tag1?: string;
    title2?: string;
    tag2?: string;
    description?: string;
    cards: FeaturedProgramCard[];
    studentImage?: string;
  };

  dean?: {
    eyebrow?: string;
    name: string;
    designation: string;
    image: string;
    message: string;
    schoolName?: string;
  };

  enquiry?: {
    enabled: boolean;
    title?: string;
  };

  courses?: CourseCategory[];

  faculty?: FacultyMember[];
  mentors?: FacultyMember[];

  mentorsSection?: {
    eyebrow?: string;
    title?: string;
    faculty: FacultyMember[];
  };

  departmentHighlights?: DepartmentHighlightItem[];

  brochure?: {
    title?: string;
    description?: string;
    fileUrl: string;
    fileName?: string;
  };

  gth?: {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    pillars?: GTHPillarItem[];
  };

  partners?: PartnerItem[];

  testimonials?: TestimonialItem[];

  learningSpaces?: {
    eyebrow?: string;
    title?: string;
    description?: string;
    spaces?: LearningSpaceItem[];
    gallery?: GalleryShowcaseItem[];
    closingNote?: string;
  };

  careerPathways?: {
    eyebrow?: string;
    title?: string;
    description?: string;
    pathways?: PathwayCardItem[];
    notableRoles?: NotableRoleItem[];
  };

  placement?: {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    heroImage?: string;
    heroNoteTitle?: string;
    heroNoteText?: string;
    stats?: {
      value: string;
      label: string;
      iconName?: string;
    }[];
    recruiters?: RecruiterItem[];
    avgPackage?: string;
    avgPackageNote?: string;
    packageBars?: {
      label: string;
      value: number;
      width: string;
    }[];
    disclaimer?: string;
    sectorChartImage?: string;
    sectorLegend?: {
      label: string;
      value: string;
      color: string;
    }[];
  };

  career?: {
    eyebrow?: string;
    title: string;
    description: string;
    recruiters?: string[];
    highlights: {
      value: string;
      label: string;
    }[];
  };

  careerPathway?: {
    eyebrow?: string;
    title: string;
    description: string;
    recruiters?: string[];
    highlights: {
      value: string;
      label: string;
    }[];
  };

  experts?: {
    eyebrow?: string;
    title?: string;
    intro?: string;
    feature?: {
      kicker: string;
      title: string;
      description: string;
      stats: {
        value: string;
        label: string;
      }[];
    };
    categories: ExpertCategoryItem[];
  };

  faqs?: FAQ[];

  legacy?: {
    eyebrow?: string;
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
    }[];
    image?: string;
  };

  cta?: {
    heading?: string;
    quote?: string;
    paragraphs?: string[];
    otherPrograms?: string[];
    qrLabel?: string;
    qrCta?: string;
    qrImage?: string;
    applyLink?: string;
    helpline?: string;
    website?: string;
    campusAddress?: string;
    brochureUrl?: string;
    brochureName?: string;
  };
}

export interface HeroSlideItem {
  studentName: string;
  pkg: string;
  company: string;
  program: string;
  image: string;
  titleThin?: string;
  titleBoldLine1: string;
  titleBoldLine2?: string;
  subtitle?: string;
  description: string;
  bgImage: string;
  cta?: string;
  ctaLink?: string;
}

export interface RankingItem {
  title: string;
  subtitleLine1: string;
  subtitleLine2?: string;
  subtitleLine3?: string;
  rankLabel: string;
  rankValue: string;
  desc: string;
  highlight: string;
}

export interface SpecialisationItem {
  title: string;
  icon?: any;
  iconName?: string;
  desc?: string;
  points?: string[];
}

export interface FeaturedProgramCard {
  title: string;
  icon?: any;
  iconName?: string;
  points: string[];
}

export interface ExpertCategoryItem {
  number: number;
  title: string;
  subtitle: string;
  points: string[];
  icon?: any;
  iconName?: string;
  ribbon?: string;
}

export interface RecruiterItem {
  name: string;
  color?: string;
  logo?: string | null;
}

export interface CourseCategory {
  title: string;
  level?: string;
  duration?: string;
  eligibility?: string;
  specializations?: string[];
  details?: React.ReactNode | string;
  programs?: {
    name: string;
    program?: string;
    href?: string;
    duration?: string;
    eligibility?: string;
    specializations?: string[];
    details?: React.ReactNode | string;
  }[];
}

export interface FacultyMember {
  name: string;
  designation?: string;
  role?: string;
  image?: string;
  img?: string;
  description?: string;
  desc?: string;
}

export interface FAQ {
  question?: string;
  q?: string;
  answer?: string;
  a?: string;
  category?: string;
}

export interface DepartmentHighlightItem {
  title: string;
  desc: string;
  image: string;
  link?: string;
}

export interface GTHPillarItem {
  title: string;
  iconName?: string;
  description: string;
  pills: string[];
}

export interface PartnerItem {
  name: string;
  brandKey?: string | null;
  logo?: string;
}

export interface TestimonialItem {
  name: string;
  pkg?: string;
  company?: string;
  role?: string;
  quote: string;
  image?: string;
}

export interface LearningSpaceItem {
  title: string;
  desc: string;
  icon: string;
}

export interface GalleryShowcaseItem {
  src: string;
  title: string;
  caption: string;
}

export interface PathwayCardItem {
  area: string;
  pathway: string;
  icon: string;
}

export interface NotableRoleItem {
  name: string;
  iconName?: string;
}