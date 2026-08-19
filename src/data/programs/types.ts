export interface ProgramPageData {
  slug: string;
  type: "school" | "program";

  seo: {
    title: string;
    description: string;
    keywords?: string[];
  };

  hero: {
    title: string;
    description?: string;
    image: string;
  };

  intro?: {
    title: string;
    paragraphs: string[];
  };

  dean?: {
    name: string;
    designation: string;
    image: string;
    message: string;
  };

  enquiry?: {
    enabled: boolean;
    title?: string;
  };

  courses?: CourseCategory[];

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

  testimonials?: Testimonial[];

  learningSpaces?: {
    title: string;
    images: string[];
  };

  career?: {
    title: string;
    description: string;
    recruiters: string[];
    highlights: {
      value: string;
      label: string;
    }[];
  };

  faqs?: FAQ[];

  visionMission?: {
    vision?: string;
    mission?: string[];
  };

  legacy?: {
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
    }[];
    image?: string;
  };
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