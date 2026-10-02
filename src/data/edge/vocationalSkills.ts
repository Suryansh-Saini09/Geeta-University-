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
    description:
      "At Geeta University, we believe that a degree should come with something more — skills that get you hired. That’s why we offer every student — across all programs and disciplines — access to our mandatory Vocational Skills Bucket, Courses rendered by expert professionals. They’re delivered by industry professionals, domain experts, certified trainers, and practitioners who bring real-world experience into every classroom.",
    image: "/edge/vocational-skills/1.jpg",
    videoUrl: "https://www.youtube.com/embed/QCYAZbd5m7Q?autoplay=1",
    videoThumb: "https://img.youtube.com/vi/QCYAZbd5m7Q/maxresdefault.jpg",
  },

  features: [
    {
      id: "vocational-courses",
      title: "Vocational Courses Offered by Industry Experts",
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
          tag: "Ideal for BBA, MBA, B.Tech, B.Sc., B.Com students aiming to impress recruiters with analytical mindset.",
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
          tag: "Ideal for Marketing, Media, BBA, MBA & students with entrepreneurial vision.",
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
          tag: "Ideal for Aspiring business leaders from all backgrounds especially commerce, management, and family-run setups.",
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
          tag: "Ideal for B.Tech, BCA, B.Sc., Economics & anyone eyeing a career in tech and analytics.",
        },
      ],
    },
    {
      id: "program-features-and-impact",
      title: "Key Features & Real Career Impact",
      layoutStyle: "split",
      columns: 2,
      features: [
        {
          title: "Key Features of the Program",
          bullets: [
            "Free & Mandatory for all enrolled Geeta University students",
            "Delivered exclusively by verified industry professionals",
            "Project-based, portfolio-centric curriculum",
            "Verified digital certification upon successful capstone completion",
            "Mapped continuously to latest corporate hiring tools",
            "Fully aligned with NEP 2020's skill-first higher education mandate",
          ],
        },
        {
          title: "The Real Impact on Your Career",
          bullets: [
            "Boosts Employability: Stand out immediately in crowded job markets with tangible tool mastery",
            "Builds Executive Confidence: Learn directly from leaders actively doing the job in top MNCs",
            "Future-Proof Learning: Stay relevant as automation reshapes traditional career roles",
            "Career Exploration: Discover high-paying cross-disciplinary niches beyond your major",
          ],
        },
      ],
    },
  ],
};
