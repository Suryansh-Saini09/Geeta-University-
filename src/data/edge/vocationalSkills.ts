import type { EdgePageData } from "./types";

export const vocationalSkillsPage: EdgePageData = {
  slug: "vocational-skills",
  name: "Vocational Skills",
  shortName: "Vocational Skills",
  category: "GU Edge",

  seo: {
    title: "Vocational Skills Courses at Geeta University | Industry-Driven Training",
    description:
      "Because the industry hires skills, not just degrees. Explore Geeta University's mandatory, industry-delivered vocational skill certifications.",
    keywords: [
      "vocational skills geeta university",
      "data visualization course haryana",
      "digital marketing certification panipat",
      "python data analytics training",
      "entrepreneurship course delhi ncr",
    ],
  },

  hero: {
    title: "Because The Industry Hires Skills Not Just Degrees",
    eyebrow: "GU EDGE — VOCATIONAL SKILLS BUCKET",
    subtitle: "Practical Competencies · Industry-Delivered · Portfolio-Building",
    description:
      "At Geeta University, we believe that a degree should come with something more — skills that get you hired. That’s why we offer every student — across all programs and disciplines — access to our mandatory Vocational Skills Bucket, delivered directly by domain practitioners with real-world corporate experience.",
    image: "/edge/vocational-skills/1.jpg",
    videoUrl: "https://www.youtube.com/embed/QCYAZbd5m7Q?autoplay=1",
    videoThumb: "https://img.youtube.com/vi/QCYAZbd5m7Q/maxresdefault.jpg",
    ctaText: "Explore Vocational Tracks",
    ctaLink: "https://admissions.geetauniversity.edu.in/",
  },

  videos: {
    eyebrow: "EXPERT PERSPECTIVES",
    title: "Entrepreneurship Simplified",
    subtitle: "Insights from Vocational Skill Experts at Geeta University",
    featuredVideo: {
      title: "Entrepreneurship Simplified: Insights from Vocation Skill Expert",
      description: "How practical market skills turn theoretical knowledge into tangible career momentum.",
      thumbnail: "https://img.youtube.com/vi/QCYAZbd5m7Q/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/QCYAZbd5m7Q?autoplay=1",
      tag: "Masterclass",
    },
  },

  features: [
    {
      id: "vocational-courses",
      eyebrow: "INDUSTRY-LED MODULES",
      title: "Vocational Courses Offered by Industry Experts",
      subtitle: "Hands-on, portfolio-driven learning tracks across high-growth domains",
      layoutStyle: "cards",
      columns: 2,
      features: [
        {
          title: "Data Visualization",
          subtitle: "Power BI · Excel Automation · Dashboards",
          description:
            "Create compelling visual stories representing complex datasets. Taught by active corporate data analysts, Power BI professionals, and Excel automation specialists.",
          bullets: [
            "Excel automation: Advanced PivotTables, Data Consolidation, AutoFilter",
            "Interactive Power BI executive dashboards & visual storytelling",
            "Business intelligence fundamentals and real-world KPI tracking",
          ],
          tag: "Ideal for BBA, MBA, B.Tech, B.Sc., B.Com",
        },
        {
          title: "Digital Marketing",
          subtitle: "Performance Marketing · Social Strategy · Conversion Design",
          description:
            "Understand the science behind online conversions to scale engagement, leads, and brand authority. Taught by digital strategists and ad campaign directors.",
          bullets: [
            "Social media architecture & precision audience segmentation",
            "Creative asset design fundamentals and Photoshop basics",
            "Web strategy, funnel analytics & conversion-focused UX",
          ],
          tag: "Ideal for Marketing, Media, BBA, MBA & Entrepreneurs",
        },
        {
          title: "Entrepreneurship & Family Business",
          subtitle: "Venture Scaling · Business Models · Succession Strategy",
          description:
            "Learn how to launch a new startup or scale a family legacy. Taught by startup founders, angel investors, and family business consultants.",
          bullets: [
            "Business planning, financial modeling & MVP architecture",
            "Family enterprise leadership, governance & modern innovation",
            "Brand positioning, strategic decision-making, and venture scaling",
          ],
          tag: "Ideal for aspiring founders from all academic backgrounds",
        },
        {
          title: "Data Analytics with Python (New)",
          subtitle: "Python Basics · Pandas · NumPy · Matplotlib",
          description:
            "Code your way into the world's most in-demand technical skillset. Taught by Python engineers, data scientists, and analytics architects.",
          bullets: [
            "Python programming fundamentals: variables, control flow, functions",
            "Core analytical libraries: Pandas, NumPy, Matplotlib, Seaborn",
            "Hands-on analytics capstone projects using real-world enterprise datasets",
          ],
          tag: "Ideal for B.Tech, BCA, B.Sc., Economics & tech enthusiasts",
        },
      ],
    },
    {
      id: "program-features-and-impact",
      eyebrow: "THE GU ADVANTAGE",
      title: "Key Features & Real Career Impact",
      subtitle: "Why Geeta University's Vocational System Drives Higher Placement Rates",
      layoutStyle: "split",
      columns: 2,
      features: [
        {
          title: "Key Features of the Program",
          description: "Structured around experiential, zero-fluff learning:",
          bullets: [
            "Free & Mandatory for all enrolled Geeta University students",
            "Delivered exclusively by verified industry professionals",
            "Project-based, portfolio-centric curriculum",
            "Verified digital certification upon successful capstone completion",
            "Mapped continuously to latest corporate hiring tools",
            "Fully aligned with NEP 2020's skill-first higher education mandate",
          ],
          iconName: "CheckCircle",
        },
        {
          title: "The Real Impact on Your Career",
          description: "Tangible professional outcomes from semester one:",
          bullets: [
            "Boosts Employability: Stand out immediately in crowded job markets with tangible tool mastery",
            "Builds Executive Confidence: Learn directly from leaders actively doing the job in top MNCs",
            "Future-Proof Learning: Stay relevant as automation reshapes traditional career roles",
            "Career Exploration: Discover high-paying cross-disciplinary niches beyond your major",
          ],
          iconName: "TrendingUp",
        },
      ],
    },
  ],

  cta: {
    heading: "Acquire the Skills That Get You Hired",
    subtitle: "Vocational Skills Bucket at Geeta University",
    description:
      "Graduate with an accredited degree and verified industry certifications that give you an unfair advantage in corporate hiring.",
    buttonText: "Apply Now",
    buttonLink: "https://admissions.geetauniversity.edu.in/",
    secondaryButtonText: "Download Brochure",
    secondaryButtonLink: "https://geetauniversity.edu.in/uploads/all/1892/GU-Brochure-2026-27.pdf",
    helpline: "+91 92787 68000",
    campusAddress: "NH-71A, Naultha Panipat, Delhi NCR, Haryana (132145), India.",
  },
};
