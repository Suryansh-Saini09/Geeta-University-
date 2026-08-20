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
    eyebrow?: string;
    title: string;
    subtitle?: string;
    description?: string;
    image: string;
    enquireHref?: string;
    exploreHref?: string;
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

  dean?: {
    eyebrow?: string;
    name: string;
    designation: string;
    image: string;
    message: string;
    schoolLabel?: string;
  };

  deanMessage?: {
    eyebrow?: string;
    name: string;
    designation: string;
    image: string;
    message: string;
    schoolLabel?: string;
  };

  enquiry?: {
    enabled: boolean;
    title?: string;
  };

  courses?: CourseCategory[] | any;

  gallery?: {
    images: string[];
  };

  transformation?: {
    title: string;
    cards: {
      title: string;
      points: string[];
    }[];
  };

  corporateConnect?: {
    title: string;
    videos: string[];
  };

  faculty?: FacultyMember[];
  mentors?: FacultyMember[] | any;

  testimonials?: Testimonial[];

  learningSpaces?: {
    title: string;
    images: string[];
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

  faqs?: FAQ[] | any;

  visionMission?: {
    vision?: string;
    mission?: string[];
  };

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

  cta?: any;
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

export interface Testimonial {
  name: string;
  program?: string;
  package?: string;
  image: string;
  text: string;
}

export interface FAQ {
  question: string;
  answer: string;
}