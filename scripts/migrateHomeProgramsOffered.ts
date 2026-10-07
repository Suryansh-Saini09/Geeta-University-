import { prisma } from "../src/server/db/client";
import { translateObject } from "../src/server/services/translation";

export const initialHomeProgramsOfferedData = {
  heading: "Programs Offered",
  description: "70+ Study Programs at Diploma, UG, PG, and Ph.D. Levels",
  categories: [
    {
      id: "cse",
      number: "01",
      title: "Computer Science & Engineering",
      shortTitle: "Computer Science & Engineering",
      description:
        "Build the technology of tomorrow through computing, artificial intelligence, cybersecurity, data science and modern software development.",
      schoolHref: "/programs/school-of-computer-science-and-engineering",
      programs: [
        {
          name: "B.Tech. (Hons.) CSE",
          href: "/programs/school-of-computer-science-and-engineering/btech-cse",
        },
        {
          name: "B.Tech. (Hons.) CSE — Artificial Intelligence & Machine Learning",
          href: "/programs/school-of-computer-science-and-engineering/btech-artificial-intelligence-and-machine-learning",
        },
        {
          name: "B.Tech. (Hons.) CSE — Cybersecurity",
          href: "/programs/school-of-computer-science-and-engineering/btech-cyber-security",
        },
        {
          name: "B.Tech. (Hons.) CSE — Full Stack Web Development",
          href: "/programs/school-of-computer-science-and-engineering/btech-full-stack-web-development",
        },
        {
          name: "B.Tech. (Hons.) CSE — Data Science & Business Analytics with HCL",
          href: "/programs/school-of-computer-science-and-engineering/btech-data-science-and-business-analytics",
        },
        {
          name: "B.Tech. (Hons.) CSE — NIAT Upskilling",
          href: "/programs/school-of-computer-science-and-engineering/niat-upskilling",
        },
        {
          name: "B.Tech. (Hons.) CSE — Quantum Computing",
          href: "/programs/school-of-computer-science-and-engineering/btech-quantum-computing",
        },
        {
          name: "M.Tech. CSE",
          href: "/programs/school-of-computer-science-and-engineering/mtech-cse",
        },
        {
          name: "Ph.D. CSE",
          href: "/phd-cse",
        },
      ],
    },
    {
      id: "applications",
      number: "02",
      title: "Computer Applications",
      shortTitle: "Computer Applications",
      description:
        "Develop strong foundations in software, applications, computing systems and emerging digital technologies.",
      schoolHref: "/programs/school-of-computer-science-and-engineering",
      programs: [
        {
          name: "BCA (Hons.) — Computer Applications",
          href: "/programs/school-of-computer-science-and-engineering/bca",
        },
        {
          name: "BCA (Hons.) — Artificial Intelligence & Machine Learning",
          href: "/programs/school-of-computer-science-and-engineering/bca-artificial-intelligence-and-machine-learning",
        },
        {
          name: "BCA (Hons.) — Cybersecurity",
          href: "/programs/school-of-computer-science-and-engineering/bca-cyber-security",
        },
        {
          name: "BCA (Hons.) — Data Science & Business Analytics",
          href: "/programs/school-of-computer-science-and-engineering/bca-data-science-and-business-analytics",
        },
        {
          name: "MCA",
          href: "/programs/school-of-computer-science-and-engineering/mca",
        },
        {
          name: "Ph.D. — Computer Applications",
          href: "/phd-computer-application",
        },
      ],
    },
    {
      id: "business",
      number: "03",
      title: "Business Management",
      shortTitle: "Business Management",
      description:
        "Develop business leaders with specialised pathways across management, finance, marketing, human resources, entrepreneurship and emerging business technologies.",
      schoolHref: "/programs/school-of-commerce-and-business-management",
      programs: [
        {
          name: "BBA (Hons.) — Bachelor of Business Administration",
          href: "/programs/school-of-commerce-and-business-management/bba",
        },
        {
          name: "BBA (Hons.) — International Accounting with ACCA UK",
          href: "/programs/school-of-commerce-and-business-management/bba-international-accounting",
        },
        {
          name: "BBA (Hons.) — Human Resource Management",
          href: "/programs/school-of-commerce-and-business-management/bba-human-resource-management",
        },
        {
          name: "BBA (Hons.) — Import & Export Management",
          href: "/programs/school-of-commerce-and-business-management/bba-export-and-import-management",
        },
        {
          name: "BBA (Hons.) — Banking & Finance",
          href: "/programs/school-of-commerce-and-business-management/bba-banking-and-finance",
        },
        {
          name: "BBA (Hons.) — Marketing",
          href: "/programs/school-of-commerce-and-business-management/bba-marketing",
        },
        {
          name: "BBA (Hons.) — FinTech",
          href: "/programs/school-of-commerce-and-business-management/bba-fintech",
        },
        {
          name: "BBA (Hons.) — Artificial Intelligence & Data Analytics",
          href: "/programs/school-of-commerce-and-business-management/bba-artificial-intelligence-and-data-analytics",
        },
        {
          name: "BBA (Hons.) — Digital Marketing",
          href: "/programs/school-of-commerce-and-business-management/bba-digital-marketing",
        },
        {
          name: "BBA (Hons.) — Entrepreneurship and Family Business",
        },
        {
          name: "MBA — AI For Business",
          href: "/programs/school-of-commerce-and-business-management/mba-ai-for-business",
        },
        {
          name: "MBA — Digital Marketing",
          href: "/programs/school-of-commerce-and-business-management/mba-digital-marketing",
        },
        {
          name: "MBA — FinTech",
          href: "/programs/school-of-commerce-and-business-management/mba",
        },
        {
          name: "MBA — Finance",
          href: "/programs/school-of-commerce-and-business-management/mba-finance",
        },
        {
          name: "MBA — Marketing",
          href: "/programs/school-of-commerce-and-business-management/mba-marketing",
        },
        {
          name: "MBA — Human Resource Management",
          href: "/programs/school-of-commerce-and-business-management/mba-human-resource-management",
        },
        {
          name: "MBA — Supply Chain Management",
          href: "/programs/school-of-commerce-and-business-management/mba-supply-chain-management-and-logistics",
        },
        {
          name: "MBA — Entrepreneurship and Family Business",
          href: "/programs/school-of-commerce-and-business-management/mba-entrepreneurship-family-business",
        },
        {
          name: "Ph.D. — Business & Management",
          href: "/phd-management",
        },
      ],
    },
    {
      id: "commerce",
      number: "04",
      title: "Commerce",
      shortTitle: "Commerce",
      description:
        "Explore accounting, taxation, banking, insurance and international accounting through industry-oriented commerce education.",
      schoolHref: "/programs/school-of-commerce-and-business-management",
      programs: [
        {
          name: "B.Com. (Hons.) — Bachelor of Commerce",
          href: "/programs/school-of-commerce-and-business-management/bcom",
        },
        {
          name: "B.Com. (Hons.) — Auditing & Taxation",
          href: "/programs/school-of-commerce-and-business-management/bcom-auditing-and-taxation",
        },
        {
          name: "B.Com. (Hons.) — Banking & Insurance",
          href: "/programs/school-of-commerce-and-business-management/bcom-banking-and-insurance",
        },
        {
          name: "B.Com. (Hons.) — Advanced Accounting",
        },
        {
          name: "B.Com. (Hons.) — International Accounting with ACCA UK",
          href: "/programs/school-of-commerce-and-business-management/bcom-international-accounting",
        },
        {
          name: "M.Com.",
          href: "/programs/school-of-commerce-and-business-management/mcom",
        },
        {
          name: "Ph.D. — Commerce",
          href: "/phd-commerce",
        },
      ],
    },
    {
      id: "pharmacy",
      number: "05",
      title: "Pharmacy",
      shortTitle: "Pharmacy",
      description:
        "Build knowledge across pharmaceutical sciences, pharmaceutics and professional pharmacy practice.",
      schoolHref: "/programs/geeta-institute-of-pharmacy",
      programs: [
        {
          name: "D.Pharm. — Diploma in Pharmacy",
          href: "/programs/geeta-institute-of-pharmacy/d-pharmacy",
        },
        {
          name: "B.Pharm. — Bachelor of Pharmacy",
          href: "/programs/geeta-institute-of-pharmacy/b-pharmacy",
        },
        {
          name: "M.Pharm. — Pharmaceutics",
          href: "/programs/geeta-institute-of-pharmacy/m-pharmacy-in-pharmaceutics",
        },
        {
          name: "Ph.D. — Pharmaceutical Sciences",
          href: "/phd-pharmacy",
        },
      ],
    },
    {
      id: "agriculture",
      number: "06",
      title: "Agricultural Sciences",
      shortTitle: "Agricultural Sciences",
      description:
        "Study agriculture through scientific, sustainable and research-driven approaches to modern agricultural practices.",
      schoolHref: "/programs/school-of-agricultural-studies",
      programs: [
        {
          name: "B.Sc. (Hons.) — Agriculture",
          href: "/programs/school-of-agricultural-studies/bsc-agriculture",
        },
        {
          name: "M.Sc. Agriculture (Agronomy)",
          href: "/programs/school-of-agricultural-studies/msc-agriculture-agronomy",
        },
        {
          name: "M.Sc. Horticulture (Vegetable Science)",
          href: "/programs/school-of-agricultural-studies/",
        },
        {
          name: "M.Sc. Horticulture (Fruit Science)",
          href: "/programs/school-of-agricultural-studies/",
        },
        {
          name: "M.Sc. Genetics & Plant Breeding",
          href: "/programs/school-of-agricultural-studies/",
        },
        {
          name: "M.Sc. Entomology",
          href: "/programs/school-of-agricultural-studies/",
        },
        {
          name: "Ph.D. — Agriculture",
          href: "/phd-agriculture",
        },
      ],
    },
    {
      id: "law",
      number: "07",
      title: "Law",
      shortTitle: "Law",
      description:
        "Develop legal knowledge and professional capabilities through undergraduate, postgraduate and doctoral study.",
      schoolHref: "/programs/geeta-global-law-school",
      programs: [
        {
          name: "B.A. LL.B. (Hons.)",
          href: "/programs/geeta-global-law-school",
        },
        {
          name: "B.B.A. LL.B. (Hons.)",
          href: "/programs/geeta-global-law-school",
        },
        {
          name: "Master of Law — LLM",
          href: "/programs/geeta-global-law-school/llm",
        },
        {
          name: "Ph.D. — Law",
          href: "/phd-law",
        },
      ],
    },
    {
      id: "hospitality",
      number: "08",
      title: "Hospitality & Hotel Management",
      shortTitle: "Hospitality & Hotel Management",
      description:
        "Prepare for careers across hospitality, hotel operations and tourism through professional and specialised education.",
      schoolHref: "/programs/school-of-hospitality-and-hotel-management",
      programs: [
        {
          name: "Diploma in Hotel Management",
          href: "/programs/school-of-hospitality-and-hotel-management/diploma-in-hotel-management",
        },
        {
          name: "B.Sc. (Hons.) — Hotel Management",
          href: "/programs/school-of-hospitality-and-hotel-management/bsc-hotel-management",
        },
        {
          name: "M.Sc. — Hotel Management",
          href: "/programs/school-of-hospitality-and-hotel-management",
        },
        {
          name: "Ph.D. — Hotel & Tourism Management",
          href: "/programs/school-of-hospitality-and-hotel-management",
        },
      ],
    },
    {
      id: "nutrition",
      number: "09",
      title: "Nutrition & Dietetics",
      shortTitle: "Nutrition & Dietetics",
      description:
        "Explore nutrition science, dietetics and health-focused research through undergraduate, postgraduate and doctoral programs.",
      schoolHref: "/programs/school-of-health-and-allied-sciences",
      programs: [
        {
          name: "B.Sc. (Hons.) — Nutrition & Dietetics",
          href: "/programs/school-of-health-and-allied-sciences/bsc-nutrition-and-dietetics",
        },
        {
          name: "M.Sc. — Nutrition & Dietetics",
          href: "/programs/school-of-health-and-allied-sciences/msc-nutrition-and-dietetics",
        },
        {
          name: "Ph.D. — Nutrition & Dietetics",
          href: "/phd-nutrition-and-dietetics",
        },
      ],
    },
    {
      id: "humanities",
      number: "10",
      title: "Humanities & Social Sciences",
      shortTitle: "Humanities & Social Sciences",
      description:
        "Understand society, people, economics, politics and culture through interdisciplinary humanities and social science education.",
      schoolHref: "/programs/school-of-humanities-and-social-science",
      programs: [
        {
          name: "B.Sc. (Hons.) — Psychology",
          href: "/bsc-psychology",
        },
        {
          name: "B.A. (Hons.)",
          href: "/programs/school-of-humanities-and-social-science",
        },
        {
          name: "B.A. (Hons.) — Political Science",
          href: "/programs/school-of-humanities-and-social-science/ba-political-science",
        },
        {
          name: "B.A. (Hons.) — Economics",
          href: "/programs/school-of-humanities-and-social-science/ba-economics",
        },
        {
          name: "B.A. (Hons.) — Psychology",
          href: "/programs/school-of-humanities-and-social-science/ba-psychology",
        },
        {
          name: "B.A. (Hons.) — English",
          href: "/programs/school-of-humanities-and-social-science",
        },
        {
          name: "M.A. — Political Science",
          href: "/programs/school-of-humanities-and-social-science",
        },
        {
          name: "M.A. — Psychology",
          href: "/programs/school-of-humanities-and-social-science",
        },
        {
          name: "Ph.D. — Psychology",
          href: "/phd-psychology",
        },
        {
          name: "Ph.D. — Political Science",
          href: "/phd-political-science",
        },
      ],
    },
    {
      id: "forensic",
      number: "11",
      title: "Forensic Science",
      shortTitle: "Forensic Science",
      description:
        "Combine scientific investigation, analytical thinking and evidence-based approaches to explore the world of forensic sciences.",
      schoolHref: "/programs/school-of-forensic-sciences",
      programs: [
        {
          name: "B.Sc. (Hons.) — Forensic Sciences",
          href: "/programs/school-of-forensic-sciences/bsc-forensic-science",
        },
        {
          name: "M.Sc. — Forensic Sciences",
          href: "/programs/school-of-forensic-sciences/msc-forensic-science",
        },
        {
          name: "Ph.D. — Forensic Sciences",
          href: "/phd-forensic-science",
        },
      ],
    },
    {
      id: "nursing",
      number: "12",
      title: "Nursing*",
      shortTitle: "Nursing*",
      description:
        "Professional healthcare education focused on developing skilled and compassionate nursing professionals.",
      schoolHref: "/programs/geeta-nursing-college",
      programs: [
        {
          name: "B.Sc. Nursing*",
          href: "/programs/geeta-nursing-college",
        },
        {
          name: "GNM — General Nursing & Midwifery*",
          href: "/programs/geeta-nursing-college",
        },
      ],
    },
  ],
};

async function main() {
  const isApply = process.argv.includes("--apply");
  const isDryRun = process.argv.includes("--dry-run") || !isApply;

  console.log(`[HomeProgramsOffered Migration] Mode: ${isDryRun ? "DRY RUN" : "APPLY"}`);

  const existing = await prisma.pageSection.findUnique({
    where: {
      pageSlug_sectionKey: {
        pageSlug: "home",
        sectionKey: "programsOffered",
      },
    },
  });

  if (!existing) {
    console.log("Section 'home/programsOffered' does NOT exist in PageSection.");
  } else {
    console.log("Section 'home/programsOffered' exists in PageSection.");
  }

  if (isDryRun) {
    console.log("[DRY RUN] Would create/update 'home/programsOffered' section and generate FR/HI translations.");
    return;
  }

  console.log("[APPLY] Generating translations for home/programsOffered...");
  const hiBody = await translateObject(initialHomeProgramsOfferedData, "hi");
  const frBody = await translateObject(initialHomeProgramsOfferedData, "fr");

  const translations = {
    hi: {
      status: "PUBLISHED",
      updatedAt: new Date().toISOString(),
      body: hiBody,
    },
    fr: {
      status: "PUBLISHED",
      updatedAt: new Date().toISOString(),
      body: frBody,
    },
  };

  const record = await prisma.pageSection.upsert({
    where: {
      pageSlug_sectionKey: {
        pageSlug: "home",
        sectionKey: "programsOffered",
      },
    },
    create: {
      pageSlug: "home",
      sectionKey: "programsOffered",
      title: "Programs Offered",
      body: initialHomeProgramsOfferedData as any,
      status: "PUBLISHED",
      sortOrder: 4,
      translations: translations as any,
    },
    update: {
      title: "Programs Offered",
      body: initialHomeProgramsOfferedData as any,
      translations: translations as any,
    },
  });

  console.log("Successfully upserted 'home/programsOffered' into MySQL PageSection:", record.id);
}

if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}
