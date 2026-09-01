export interface IndustryPartnerItem {
  id: string;
  name: string;
  tagline: string;
  logo: string;
  category: string;
  accent: string;
  badge: string;
  benefits: string[];
}

export interface EcosystemPillar {
  title: string;
  subtitle: string;
  accent: "saffron" | "blue" | "navy";
}

export interface ImpactStat {
  value: string;
  label: string;
  description: string;
}

export interface IndustryPillarHighlight {
  iconName: string;
  title: string;
  description: string;
}

export const industryIntegrationHero = {
  title: "Industry Integration",
  subtitle: "Bridging Academia & Corporate Excellence",
  description:
    "Geeta University partners with leading technology pioneers, agricultural research institutions, and corporate leaders to empower students with industry-relevant skills, live projects, and seed-funded startup opportunities.",
  heroImage: "/industry-integration/hero-building.webp",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Industry Integration", href: "/industry-integration" },
  ],
};

export const industryPartners: IndustryPartnerItem[] = [
  {
    id: "inurture",
    name: "iNurture",
    tagline: "Offers Industry-Integrated Programs",
    logo: "/industry-integration/inurture.webp",
    category: "Higher Education & Placement",
    accent: "#E85C2D",
    badge: "1000+ Recruiters Network",
    benefits: [
      "Advanced Industry Certifications",
      "Immersive Internships & Live Projects",
      "Access to 1000+ Top Recruiters",
      "Seed Funding Support Upto INR 1 Crore",
    ],
  },
  {
    id: "just-agriculture",
    name: "Just Agriculture",
    tagline: "Harnessing Innovation in Agricultural Sciences",
    logo: "/industry-integration/just-agriculture.webp",
    category: "AgriTech & Scientific Research",
    accent: "#07589F",
    badge: "Agri Innovation",
    benefits: [
      "Effective Utilization of Intellectual Capabilities",
      "Technological Upgradations in Agronomy",
      "Scientific Information Dissemination",
      "Advanced Agronomic Research Projects",
    ],
  },
  {
    id: "cellstrat-hub",
    name: "CellStrat Hub",
    tagline: "Student Trainings on Latest AI & Cloud Tech",
    logo: "/industry-integration/cellstrat-hub.webp",
    category: "AI & Cloud Deployment",
    accent: "#013D55",
    badge: "AI at Scale",
    benefits: [
      "Deploy AI at Scale with Hub API Integration",
      "Deploy AI Models within 10 Minutes",
      "Simple yet Fully Flexible Deployment Models",
      "Fully Managed Scalable AI Infrastructure",
    ],
  },
  {
    id: "hindustan-agri",
    name: "Hindustan Agri Research Welfare Society",
    tagline: "Registered under Act XXI 1860 MSME Govt. of India",
    logo: "/industry-integration/hindustan-agri.webp",
    category: "Research & MSME Alliances",
    accent: "#E8871A",
    badge: "Govt MSME Recognized",
    benefits: [
      "Dedicated Training & Research Center Access",
      "Student Exchange & Cross-Institutional Programs",
      "Joint Research & Development Projects",
      "Value-Added Skill Programmers",
    ],
  },
  {
    id: "plantica-foundation",
    name: "Plantica Foundation",
    tagline: "Institution of National Importance in Agriculture",
    logo: "/industry-integration/plantica.webp",
    category: "Agricultural Research",
    accent: "#2C5282",
    badge: "National Importance",
    benefits: [
      "Curriculum Delivery in Agriculture & Allied Sciences",
      "Focused Skill Development Workshops for Students",
      "Expertise Sharing for PG & Ph.D. Scholars",
      "Cutting-Edge Research & Field Activities",
    ],
  },
  {
    id: "imaginxp",
    name: "ImaginXP",
    tagline: "Offering Industry-Integrated Design & Tech Programs",
    logo: "/industry-integration/imaginxp.webp",
    category: "Full Stack & UX Design",
    accent: "#0A1F44",
    badge: "Corporate Readiness",
    benefits: [
      "Comprehensive Learning and Career Development Platform",
      "Offline Training on Full Stack Development & UX",
      "Industry Standard Learning Modules & Mentorship",
    ],
  },
];

export const industryImpactStats: ImpactStat[] = [
  {
    value: "1000+",
    label: "Global Hiring Partners",
    description: "Direct recruitment pathways through our industry tie-ups",
  },
  {
    value: "₹1 Crore",
    label: "Seed Funding Pool",
    description: "Financial backing for innovative student-led startups",
  },
  {
    value: "50+",
    label: "Corporate MoUs",
    description: "Strategic partnerships with national & global organizations",
  },
  {
    value: "100%",
    label: "Practical Exposure",
    description: "Lab-integrated curriculum and real-world case studies",
  },
];

export const industryPillars: IndustryPillarHighlight[] = [
  {
    iconName: "Briefcase",
    title: "Industry-Designed Curriculum",
    description:
      "Courses curated jointly with industry experts to match current technological shifts and corporate requirements.",
  },
  {
    iconName: "Rocket",
    title: "Incubation & Seed Funding",
    description:
      "Empowering student entrepreneurs with incubator space, expert mentorship, and up to ₹1 Crore in seed capital.",
  },
  {
    iconName: "Award",
    title: "Global Certifications",
    description:
      "Co-branded certification programs embedded into degree pathways for maximum employability advantage.",
  },
  {
    iconName: "Users",
    title: "Live Corporate Mentorship",
    description:
      "Regular guest lectures, hackathons, and immersive internships led by active industry professionals.",
  },
];

export const legacyEcosystemData = {
  title: "Legacy & Ecosystem",
  subtitle: "Future-Ready Talent Development Network",
  intro:
    "Founded in 1985, the Geeta Group of Institutions has emerged as a major educational hub with institutions spanning school education to doctoral programs. Students benefit from the integrated ecosystem of:",
  items: [
    {
      id: 1,
      title: "Geeta University",
      subtitle: "AI-enabled multidisciplinary campus",
      accent: "saffron" as const,
    },
    {
      id: 2,
      title: "Geeta Finishing School (GFS)",
      subtitle: "Communication & Corporate Readiness",
      accent: "blue" as const,
    },
    {
      id: 3,
      title: "Geeta Technical Hub (GTH)",
      subtitle: "Advanced Technology, Certifications, and Industry Skills",
      accent: "navy" as const,
    },
  ],
  closing: "Together, they form a holistic, future-ready talent development ecosystem.",
  image: "/industry-integration/campus-ecosystem.webp",
};
