import type { CoursePageData, CourseFAQItem } from "../types";
import { computerScienceSchool } from "@/data/programs/schools/computerScience";

const cseFaqs: CourseFAQItem[] = computerScienceSchool.faqs
  ? computerScienceSchool.faqs.map((f) => ({
      question: f.q || f.question || "",
      answer: f.a || f.answer || "",
      category: f.category || "General",
    }))
  : [];

export const btechCse: CoursePageData = {
  id: "btech-cse",
  schoolSlug: "school-of-computer-science-and-engineering",
  slug: "btech-cse",
  seo: {
    title: "B.Tech CSE | Best Computer Science Engineering College",
    description:
      "Best computer science and engineering course in Haryana. 40 LPA package & top careers. Use Scholarship Predictor to Apply Now!",
    keywords: [
      "B.Tech CSE",
      "Computer Science Engineering",
      "Best B.Tech College in Haryana",
      "Geeta University CSE",
    ],
    canonical:
      "https://geetauniversity.edu.in/programs/school-of-computer-science-and-engineering/btech-cse",
  },
  hero: {
    title: "B.Tech Computer Science and Engineering",
    description: "",
    image:
      "https://geetauniversity.edu.in/uploads/all/1831/B.Tech-(Hons)-CSE.jpg",
    mobileImage:
      "https://geetauniversity.edu.in/uploads/all/1832/4-(2).jpg",
  },
  quickInfo: {
    program: "Bachelor of Technology in Computer Science & Engineering",
    duration: "4 Years (8 Semesters)",
    eligibility:
      "Passed 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the following: Chemistry, Computer Science, Electronics, Information Technology, Biology, Informatics Practices, Biotechnology, Technical Vocational subject, Agriculture, Engineering Graphics, Business Studies, or Entrepreneurship with a minimum of 55% marks. OR Passed D.Voc. Stream with a minimum of 55% marks in the same or allied sector.",
  },
  overview: {
    title: "B.Tech Computer Science and Engineering",
    paragraphs: [
      "The B.Tech Computer Science and Engineering program at Geeta University offers wide-ranging career opportunities. It delivers an industry-oriented curriculum balancing strong theoretical foundations with intensive practical application, enriched through internships, live capstone projects, and collaborations with leading technology companies.",
      "The curriculum emphasizes core technical competencies including modern programming languages, algorithmic problem-solving, systems engineering, and critical thinking. Geeta University's dedicated placement cell actively organizes campus recruitment drives to connect graduates with top global tech enterprises.",
    ],
  },
  takeaways: [
    "4-year (8-semester) comprehensive undergraduate engineering program",
    "NEP-aligned curriculum designed in collaboration with industry experts",
    "Advanced labs for AI, IoT, Cloud Computing, and Cyber Security",
    "Proven track record of campus placements with top global recruiters",
    "Project-based learning approach with live industrial exposure",
    "Distinguished faculty from premier institutes including IITs and NITs",
    "Merit-based scholarships and support for national entrance test qualifiers",
  ],
  subjects: [
    "Programming Languages (C/C++, Java, Python)",
    "Data Structures and Algorithms",
    "Operating Systems & Shell Scripting",
    "Database Management Systems",
    "Computer Networks & Cloud Fundamentals",
    "Software Engineering & Agile Methodologies",
    "Internet of Things (IoT) Essentials",
    "Linux Administration & Cyber Law Basics",
    "Web & Mobile Application Development",
    "Industry Internship / Capstone Project",
  ],
  learningOutcomes: [
    "Apply algorithms and logical design to engineer real-world software solutions",
    "Develop and deploy modern, responsive web and mobile applications",
    "Administer enterprise databases and manage complex computer networks",
    "Architect secure cloud environments and understand cybersecurity fundamentals",
    "Collaborate effectively in cross-functional software teams using agile practices",
  ],
  admission: {
    eligibility:
      "Candidates must have passed 10+2 examination with minimum 55% aggregate marks (relaxation applicable for reserved categories as per government/university norms).",
    whyChooseHeading:
      "Geeta University BTech Computer Science and Engineering Admission Process",
    whyChooseParagraphs: [
      "Step 1 – Apply: Fill the B.Tech Computer Science & Engineering application form online at admissions.geetauniversity.edu.in or offline at the Geeta University campus, Panipat.",
      "Step 2 – Submit Documents: Complete the admission verification process — submit 10+2 marksheet (with Physics & Mathematics), ID proof, and other required certificates at the campus.",
      "Step 3 – Confirm Admission: Deposit the admission fee to confirm your seat in B.Tech CSE at Geeta University, Haryana.",
    ],
  },
  career: {
    title:
      "Career Opportunities after B.Tech Computer Science and Engineering",
    intro:
      "The B.Tech Computer Science and Engineering offers excellent placement support with top corporate tie-ups.",
    rolesTitle: "Top Job Roles",
    roles: [
      "Software Developer",
      "Web & App Developer",
      "Machine Learning Engineer",
      "AI Specialist",
      "Data Analyst / Data Scientist",
      "Network Engineer",
      "Cyber Security Analyst",
      "Cloud Architect",
      "System Engineer",
    ],
    recruitersTitle: "Top Recruiters include:",
    recruiters: [
      { name: "Infosys" },
      { name: "Wipro" },
      { name: "IBM" },
      { name: "TCS" },
      { name: "HCL" },
      { name: "Amazon" },
      { name: "Capgemini" },
      { name: "Accenture" },
    ],
  },
  whyGeeta: {
    title:
      "Reasons to choose Geeta University for B.Tech Computer Science and Engineering",
    paragraphs: [
      "The B.Tech Computer Science & Engineering program at Geeta University, one of the premier universities in North India, provides a well-rounded balance of theoretical knowledge and experiential learning. Students receive thorough training in modern technologies, coding paradigms, software development life cycles, and systems engineering.",
      "Through hands-on internships, live industry projects, and hackathons, students develop analytical rigor and practical problem-solving skills tailored for the tech industry. Strong institutional partnerships ensure robust campus placement opportunities with industry leaders nationwide.",
    ],
  },
  scholarships: {
    scholarships: {
      title: "SCHOLARSHIPS AT GEETA UNIVERSITY",
      description:
        "We believe that financial constraints should not limit access to quality education. At Geeta University, we offer scholarships based on:",
      criteria: [
        "Merit/Percentage in Qualifying Exams",
        "National Level Entrance Exams (JEE, CUET, NEET, CLAT, and more)",
        "Social Responsibility",
        "Sports Performance",
      ],
      linkText: "Know More",
      linkUrl: "https://geetauniversity.edu.in/scholarship",
    },
    guts: {
      title: "GUTS",
      subtitle: "GEETA UNIVERSITY TEST OF SCHOLARSHIP",
      description:
        "Geeta University (GU) strongly believes that monetary constraints should not be an obstacle for a student to have access to quality education. Following scholarships are offered at GU:",
      linkText: "Apply Now",
      linkUrl: "https://geetauniversity.edu.in/guts",
    },
  },
  testimonials: [
    {
      name: "Nitish",
      role: "B.Tech CSE Student",
      image:
        "https://geetauniversity.edu.in/uploads/all/2294/conversions/WhatsApp-Image-2026-05-02-at-3.01.05-PM-full.webp",
      text: "Getting placed at Samsung has been a proud moment for me. Studying Computer Science Engineering here, along with practical exposure and constant faculty support, helped me build strong skills and confidence to achieve this opportunity.",
    },
    {
      name: "Gagandeep Singh",
      role: "B.Tech CSE Student",
      image:
        "https://geetauniversity.edu.in/uploads/all/2288/conversions/CSE5-full.webp",
      text: "Studying computer science here has been quite interesting till now. The practical sessions and assignments helped me improve my coding skills, while the faculty support made it easier to understand difficult topics with more clarity",
    },
    {
      name: "Pranjal Jaiswal",
      role: "B.Tech CSE Student",
      image:
        "https://geetauniversity.edu.in/uploads/all/2293/conversions/CSE-full.webp",
      text: "Learning computer science here has been a smooth journey till now. The hands-on projects and regular guidance from faculty helped me understand programming concepts better and grow more confident in my technical abilities overall.",
    },
    {
      name: "Sahil",
      role: "B.Tech CSE Student",
      image:
        "https://geetauniversity.edu.in/uploads/all/2292/conversions/CSE1-full.webp",
      text: "Learning B.Tech CSE at Geeta University has been a valuable experience so far. The focus on real-world applications and continuous support from faculty helped me build clarity in concepts and improve my confidence in coding.",
    },
    {
      name: "Aman Pandey",
      role: "B.Tech CSE Student",
      image:
        "https://geetauniversity.edu.in/uploads/all/2291/conversions/CSE2-full.webp",
      text: "Being part of the B.Tech CSE program at Geeta University has been a good experience so far. The project-based learning and helpful faculty made concepts easier and helped me feel more prepared for future career opportunities.",
    },
    {
      name: "Ragini Sharma",
      role: "B.Tech CSE Student",
      image:
        "https://geetauniversity.edu.in/uploads/all/2289/conversions/CSE4-full.webp",
      text: "Studying here has been a good experience so far. The project-based learning approach and helpful faculty made concepts easier to grasp and helped me feel more prepared for future opportunities in the tech industry ahead.",
    },
  ],
  learningSpaces: {
    title: "Highlights of Our Learning Spaces",
    spaces: [
      {
        title: "Computing & Software Development Lab",
        image:
          "https://geetauniversity.edu.in/uploads/all/2016/conversions/cse4-thumb.webp",
      },
      {
        title: "AI & Data Science Lab",
        image:
          "https://geetauniversity.edu.in/uploads/all/2015/conversions/cse5-thumb.webp",
      },
      {
        title: "Hardware, IoT & Embedded Systems Lab",
        image:
          "https://geetauniversity.edu.in/uploads/all/2013/conversions/cse3-thumb.webp",
      },
      {
        title: "Cybersecurity & Cloud Systems Lab",
        image:
          "https://geetauniversity.edu.in/uploads/all/2012/conversions/cse-(1)-thumb.webp",
      },
      {
        title: "Collaborative Coding & Innovation Space",
        image:
          "https://geetauniversity.edu.in/uploads/all/2014/conversions/cse2-thumb.webp",
      },
    ],
  },
  faqs: cseFaqs,
  cta: {
    title: "Ready to pursue B.Tech CSE?",
    description:
      "Apply now at Geeta University and take the first step towards an exciting career in software and technology.",
    applyUrl: "https://admissions.geetauniversity.edu.in/",
    brochureUrl:
      "https://geetauniversity.edu.in/uploads/all/1892/GU-Brochure-2026-27.pdf",
    helpline: "+91 99963 03799",
  },
};
