import type { EdgePageData } from "./types";

export const globalEdgePage: EdgePageData = {
  slug: "gu-global-edge",
  name: "GU Global Edge",
  shortName: "Global Edge",
  category: "GU Edge",

  seo: {
    title: "GU Global Edge | Geeta Global Law School | Admissions Open",
    description:
      "Empowering the next generation of legal innovators with practice-oriented law programs, moot courts, and global exposure at Geeta Global Law School.",
    keywords: [
      "gu global edge",
      "geeta global law school",
      "ba llb panipat",
      "bba llb haryana",
      "llm master of laws delhi ncr",
      "phd in law haryana",
      "best law university delhi ncr",
    ],
  },

  hero: {
    title: "Empowering the Next Generation of Legal Innovators",
    eyebrow: "WELCOME TO GEETA UNIVERSITY, PANIPAT",
    subtitle: "Geeta Global Law School · Bar Council of India Approved",
    description:
      "Grooming future advocates, corporate counsels, judicial officers, and global policy thinkers with practice-oriented legal training, international conferences, and state-of-the-art moot courts.",
    badges: [
      "5 Years Integrated B.A. LL.B. Programme",
      "5 Years Integrated BBA LL.B. (Hons.) Programme",
      "3 Years LL.B. (Hons.) Programme",
    ],
    graphicType: "tech-circle",
    theme: "dark",
    ctaText: "Apply for Law Admissions",
    ctaLink: "https://admissions.geetauniversity.edu.in/",
  },

  stats: {
    title: "Awards & Rankings",
    subtitle: "Proven Legal Excellence Year After Year",
    stats: [
      {
        value: "4th",
        label: "Ranked by CSR",
        sublabel: "Among Top Law Schools",
        iconName: "Award",
      },
      {
        value: "1st",
        label: "Ranked in Haryana",
        sublabel: "Statewide Legal Excellence",
        iconName: "Trophy",
      },
      {
        value: "25th",
        label: "Ranked by Outlook",
        sublabel: "All India Ranking",
        iconName: "Star",
      },
      {
        value: "36th",
        label: "Ranked by India Today",
        sublabel: "National Benchmark",
        iconName: "TrendingUp",
      },
    ],
  },

  features: [
    {
      id: "key-highlights",
      eyebrow: "WHY GEETA GLOBAL LAW SCHOOL",
      title: "Key Highlights",
      subtitle: "Unmatched Legal Pedagogy & Global Industry Integration",
      layoutStyle: "cards",
      columns: 5,
      features: [
        {
          title: "Expert Faculty",
          description: "Learn from seasoned legal professionals, senior advocates, and esteemed academicians.",
          iconName: "GraduationCap",
        },
        {
          title: "Industry-Ready Curriculum",
          description: "Stay aligned with the rapidly evolving constitutional, corporate, and technological legal landscape.",
          iconName: "Briefcase",
        },
        {
          title: "Moot Courts & Legal Clinics",
          description: "Experience authentic court procedures, advocacy drafting, and free community legal aid clinics.",
          iconName: "Scale",
        },
        {
          title: "Global Exposure",
          description: "Collaborations with 50+ international partner institutions including Kathmandu School of Law.",
          iconName: "Globe",
        },
        {
          title: "Recruiter Network",
          description: "Leverage a network of 1,000+ top law firms, corporate houses, and judicial consultancies.",
          iconName: "Building2",
        },
      ],
    },
    {
      id: "about-school",
      eyebrow: "ABOUT THE LAW SCHOOL",
      title: "Geeta Global Law School",
      subtitle: "Home to Aspiring Legal Luminaries & Judicial Leaders",
      layoutStyle: "split",
      features: [
        {
          title: "Practice-Oriented Legal Foundations",
          description:
            "Our immersive, practice-oriented law programs prepare you to lead with distinction. You will master moot court simulations, legal research, judicial clerkships, and corporate drafting across core domains: Corporate Law, Criminal Law, Constitutional Law, Intellectual Property Rights (IPR), and International Law.",
          iconName: "Scale",
        },
        {
          title: "Diverse Career Horizons",
          description:
            "Whether you aspire to excel as an advocate in the Supreme Court / High Courts, corporate consultant in global MNCs, judicial magistrate, or legal academician, discover your pathway at Delhi NCR's premier law school.",
          iconName: "Award",
        },
      ],
    },
  ],

  accordions: [
    {
      id: "law-programmes",
      eyebrow: "ACADEMIC OFFERINGS",
      title: "Law Programmes - Ahead of Its Time",
      subtitle: "Undergraduate, Postgraduate, and Doctoral Programs in Law",
      description:
        "Comprehensive, Bar Council of India (BCI) approved degree tracks designed to build analytical rigor, courtroom eloquence, and ethical leadership.",
      items: [
        {
          id: "ba-llb",
          title: "B.A. LL.B. (5 Years Integrated)",
          subtitle: "Arts & Humanities + Law Integration",
          duration: "5 Years",
          eligibility:
            "Passed 10+2 or equivalent examination from a recognized board with at least 45% marks (40% for SC/ST candidates).",
          description:
            "A comprehensive 5-year dual degree integrating political science, sociology, history, and economics with full foundational and specialized legal studies.",
          curriculum: [
            "Corporate Law & Mergers",
            "Criminal Procedure & Forensic Evidence",
            "Constitutional Law & Human Rights",
            "Intellectual Property Rights & Cyber Laws",
            "International Law & Diplomatic Relations",
          ],
        },
        {
          id: "bba-llb",
          title: "BBA LL.B. (Hons.) (5 Years Integrated)",
          subtitle: "Management & Corporate Law Integration",
          duration: "5 Years",
          eligibility:
            "Passed 10+2 or equivalent examination from a recognized board with at least 45% marks (40% for SC/ST candidates).",
          description:
            "Engineered for corporate counsels, compliance officers, and business entrepreneurs blending strategic management with corporate jurisprudence.",
          curriculum: [
            "Business Strategy & Corporate Governance",
            "Banking, Financial & Insurance Laws",
            "Taxation, Mergers & Acquisitions",
            "Labor, Industrial & Environmental Regulations",
            "Alternative Dispute Resolution (ADR) & Arbitration",
          ],
        },
        {
          id: "llm",
          title: "LL.M. – Master of Laws (1 Year)",
          subtitle: "Advanced Postgraduate Specialization",
          duration: "1 Year",
          eligibility:
            "Three-year or Five-year LL.B. degree from a recognized university with minimum 50% aggregate marks.",
          description:
            "Intensive research-focused Master's program preparing scholars for judicial services, corporate consultancy, and higher academia.",
          curriculum: [
            "Advanced Corporate Law & Securities",
            "Comparative Constitutional Law",
            "International Trade & Economic Laws",
            "Criminal Jurisprudence & Penology",
            "Dissertation & High-Impact Legal Research",
          ],
        },
        {
          id: "phd-law",
          title: "Ph.D. in Law",
          subtitle: "Doctoral Research Fellowship",
          duration: "Minimum 3 Years",
          eligibility:
            "Master's degree in Law (LL.M.) from a recognized university/institution with minimum 55% marks (50% in case of SC/ST candidates).",
          description:
            "Promoting original legal scholarship, judicial doctrines, policy reform, and interdisciplinary legislative research.",
        },
      ],
    },
  ],

  gallery: {
    eyebrow: "CAMPUS & GLOBAL EXPERIENCES",
    title: "Moot Courts, International Conferences & Clinical Exposure",
    subtitle: "Witness Experiential Legal Education at Geeta Global Law School",
    items: [
      {
        src: "/edge/global-edge/sp1.webp",
        title: "International Law Conference",
        caption: "Hosted in collaboration with Kathmandu School of Law, Nepal.",
      },
      {
        src: "/edge/global-edge/sp2.webp",
        title: "Moot Court Presentations",
        caption: "Experiential learning, mock appellate hearings, and advocacy rounds.",
      },
      {
        src: "/edge/global-edge/sp3.webp",
        title: "Legal Aid Campaigns",
        caption: "Clinical training programs and grassroots community legal assistance.",
      },
      {
        src: "/edge/global-edge/sp4.webp",
        title: "National Seminars",
        caption: "Legal literacy assemblies addressed by High Court judges and jurists.",
      },
      {
        src: "/edge/global-edge/sp5.webp",
        title: "Academic Research & Internships",
        caption: "Student presentations, judicial internships, and law journal publications.",
      },
    ],
  },

  cta: {
    heading: "Shape the Future of Law & Justice",
    subtitle: "Admissions Open for Session 2026–27",
    description:
      "Join Geeta Global Law School to learn from eminent jurists, practice in world-class moot courts, and launch a distinguished legal career.",
    buttonText: "Apply for Law",
    buttonLink: "https://admissions.geetauniversity.edu.in/",
    secondaryButtonText: "Download Law Brochure",
    secondaryButtonLink: "https://geetauniversity.edu.in/uploads/all/1892/GU-Brochure-2026-27.pdf",
    helpline: "+91 92787 68000",
    campusAddress: "NH-71A, Naultha Panipat, Delhi NCR, Haryana (132145), India.",
  },
};
