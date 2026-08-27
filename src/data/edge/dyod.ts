import type { EdgePageData } from "./types";

export const dyodPage: EdgePageData = {
  slug: "dyod",
  name: "Design Your Own Degree",
  shortName: "DYOD",
  category: "GU Edge",

  seo: {
    title: "Design Your Own Degree (DYOD) at Geeta University Delhi | Apply Now",
    description:
      "Design Your Own Degree at GU, a leading private university in Haryana, offering NEP 2020–based flexible learning, electives, skills, & passion programs.",
    keywords: [
      "dyod",
      "design your own degree",
      "flexible degree haryana",
      "nep 2020 degree customization",
      "geeta university edge",
      "choice based credit system",
    ],
  },

  hero: {
    title: "Where Passion Meets Purpose Because — The Future is Here",
    eyebrow: "GU EDGE — DESIGN YOUR OWN DEGREE",
    description:
      "At Geeta University, you get the freedom to choose your unique career pathway matching your dreams and aspirations. Our flexible and student-driven academic framework is built on the provisions of NEP 2020. It empowers you to choose from a wide selection of core electives, open electives and passion programs. You can now fulfil your ambitions and follow your interests while achieving your evolving career goals. Choose a discipline that interests you, plan a relevant career path, learn at your own pace, and achieve your objective.",
    image: "/edge/dyod/8.png",
    videoUrl: "https://www.youtube.com/embed/9JTPnv7xVhg?autoplay=1",
    videoThumb: "https://img.youtube.com/vi/9JTPnv7xVhg/maxresdefault.jpg",
    ctaText: "Apply Now",
    ctaLink: "https://admissions.geetauniversity.edu.in/",
  },

  timeline: {
    eyebrow: "ACADEMIC ARCHITECTURE",
    title: "The Building Blocks of Your Personalized Degree",
    subtitle: "A 5-Step Student-Driven Framework under NEP 2020",
    description:
      "Discover how every component of your degree is engineered to align with your personal passion, industry competencies, and lifelong learning goals.",
    steps: [
      {
        stepNumber: 1,
        title: "Core Courses",
        category: "Discipline Mastery",
        description:
          "The essential courses that provide strong foundational knowledge and rigorous theoretical depth in your chosen primary discipline.",
      },
      {
        stepNumber: 2,
        title: "Core Electives",
        category: "Domain Specialization",
        description:
          "Dive deeper into your interests by choosing from a wide range of domain-specific and interdisciplinary subjects, including accredited MOOCs with departmental approval.",
      },
      {
        stepNumber: 3,
        title: "Skill Enhancement Courses",
        category: "Market-Ready Competencies",
        description: "Future-ready skills, delivered today.",
        points: [
          "Technical & domain-specific vocational training",
          "Soft skills and high-impact communication enhancement",
          "Aptitude, reasoning, and corporate-readiness modules",
          "Regular mock tests & industry interview simulations",
        ],
        expandedDetails: [
          "We shape you not just as a graduate — but as a future-ready professional capable of thriving in high-growth industries.",
        ],
      },
      {
        stepNumber: 4,
        title: "Open Electives – Learn What You Love",
        category: "Passion & Creative Pursuit",
        description:
          "Passion drives innovation. At Geeta University, your hobbies and creative interests become an accredited part of your official academic transcript.",
        points: [
          "Performing Arts: Theatre | Singing | Dance | Photography",
          "Sports & Athletics: Cricket | Volleyball | Kabaddi | Badminton",
          "Creative & Modern Skills: Blogging | Nutrition for Youth | Entrepreneurship | Graphology",
        ],
        expandedDetails: [
          "These electives contribute directly to your CGPA and holistic personal development. Because here — learning doesn’t end in classrooms.",
        ],
      },
      {
        stepNumber: 5,
        title: "General Proficiency (GP)",
        category: "Real-World Recognition",
        description:
          "Earn GP credits through active extracurricular and co-curricular involvement:",
        points: [
          "National & international competitions and hackathons",
          "Campus and external cultural and technical events",
          "Online global certifications via verified MOOC platforms",
          "Student leadership roles, club management, and social volunteering",
        ],
        expandedDetails: [
          "Upload your achievement certificates on ERP and see your active involvement reflected in your academic score. Real-world learning, real-time recognition.",
        ],
      },
    ],
  },

  features: [
    {
      id: "future-begins-here",
      eyebrow: "PHILOSOPHY IN ACTION",
      title: "Your Future Begins Here. Literally.",
      description:
        "We don’t believe in one-size-fits-all degrees. At Geeta University, 'Design Your Own Degree' isn’t a tagline — it’s your lived reality.",
      layoutStyle: "cards",
      features: [
        {
          title: "Choose Your Core",
          description: "Establish an unshakeable academic foundation in your major domain of choice.",
          iconName: "Compass",
        },
        {
          title: "Build Your Skillset",
          description: "Acquire high-demand technical, communicative, and problem-solving capabilities.",
          iconName: "Wrench",
        },
        {
          title: "Follow Your Passion",
          description: "Turn your sports, creative arts, and personal passions into credited academic pursuits.",
          iconName: "HeartHandshake",
        },
        {
          title: "Shape Your Future",
          description: "Graduate with a distinctive profile tailored specifically to your career ambitions.",
          iconName: "Sparkles",
        },
      ],
    },
  ],

  cta: {
    heading: "Design Your Degree. Define Your Destiny.",
    subtitle: "Admissions Open for 2026–27",
    description:
      "Take control of your higher education journey with Geeta University's flexible, NEP 2020-aligned curriculum.",
    buttonText: "Apply Now",
    buttonLink: "https://admissions.geetauniversity.edu.in/",
    secondaryButtonText: "Download Brochure",
    secondaryButtonLink: "https://geetauniversity.edu.in/uploads/all/1892/GU-Brochure-2026-27.pdf",
    helpline: "+91 92787 68000",
    campusAddress: "NH-71A, Naultha Panipat, Delhi NCR, Haryana (132145), India.",
  },
};
