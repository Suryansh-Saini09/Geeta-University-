export * from "@/components/programs/types";

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
  };

  about?: {
    eyebrow?: string;
    title: string;
    paragraphs: string[];
    image: string;
    badgeText?: string;
  };

  intro?: {
    eyebrow?: string;
    title: string;
    paragraphs: string[];
    image?: string;
    imageAlt?: string;
    badgeText?: string;
  };

  specialisations?: {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    items: {
      title: string;
      icon?: any;
      points: string[];
    }[];
  };

  specialisations?: {
    eyebrow?: string;
    title: string;
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

  courses?: CourseCategory[] | any;

  faculty?: FacultyMember[];
  mentors?: FacultyMember[] | any;

  mentorsSection?: {
    eyebrow?: string;
    title?: string;
    faculty: FacultyMember[];
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

  placement?: any;
  experts?: any;

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
    feature: {
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
  };
}

export interface SpecialisationItem {
  title: string;
  iconName?: string;
  points: string[];
}

export interface FeaturedProgramCard {
  title: string;
  iconName?: string;
  points: string[];
}

export interface ExpertCategoryItem {
  number: number;
  title: string;
  subtitle: string;
  points: string[];
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
  duration?: string;
  eligibility?: string;

  programs: {
    name: string;
    href?: string;
  }[];
}

export interface FacultyMember {
  name: string;
  designation: string;
  image: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}