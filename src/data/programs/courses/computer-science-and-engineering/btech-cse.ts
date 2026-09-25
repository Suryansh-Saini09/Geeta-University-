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
      "Passed 10+2 examination with Physics and Math as compulsory subjects with one of the following subject./Chemistry/ Computer Science/ Electronics/ Information Technology/ Biology/ Informatics Practices/Biotechnology/ Technical Vocational subject/ Agriculture/Engineering Graphics/ Business Studies/ Entrepreneurship with a minimum 55% marks. OR Passed D.Voc. Stream with a minimum 55% marks in the same or allied sector.",
  },
  overview: {
    title: "B.Tech Computer Science and Engineering",
    paragraphs: [
      "Geeta University B.Tech Computer Science and Engineering is a course with lots of job opportunities. It is designed to offer an industry-oriented program designed for theoretical and practical knowledge, along with industry exposure through internships, projects, and collaborations with leading tech companies.",
      "Geeta University focuses on knowledge such as complex programming languages, problem-solving, programming, critical thinking, etc. This course can be beneficial for a successful career in top tech firms. The university has a placement cell that supports and organizes campus placement drives for the learners.",
    ],
  },
  takeaways: [
    "B.Tech Computer Science and Engineering at Geeta University is a 4-year (8-semester) duration program",
    "NEP-based curriculum with industry-aligned subjects",
    "Modern labs including AI, IoT, Cloud Computing, and Cyber Security",
    "Strong placement record with top recruiters",
    "Project-based learning and live industrial training",
    "Experienced faculty from IITs and NITs",
    "Scholarships based on National Level Exams",
  ],
  subjects: [
    "Programming Languages (C/C++, Java, Python)",
    "Data Structures and Algorithms",
    "Operating Systems & Shell Scripting",
    "Database Management Systems",
    "Computer Networks & Cloud Fundamentals",
    "Software Engineering & Project Management",
    "Internet of Things (IoT) Essentials",
    "Linux Admin & Cyber Law Basics",
    "Web & Mobile App Development",
    "Industry Internship / Capstone Project",
  ],
  learningOutcomes: [
    "Apply algorithms and logic to build real-world software",
    "Develop and deploy interactive web and mobile applications",
    "Administer databases and manage computer networks",
    "Understand cloud architecture and cybersecurity essentials",
    "Collaborate in software projects using agile frameworks",
  ],
  admission: {
    eligibility:
      "Candidates must have passed 12th grade with min. 55% aggregate marks (10% relaxation for SC/ST/EWS) to be eligible for admission — check this before applying.",
    whyChooseHeading:
      "Geeta University BTech Computer Science and Engineering Admission Process",
    whyChooseParagraphs: [
      "Step 1 – Apply: Fill the B.Tech Computer Science & Engineering application form online at admissions.geetauniversity.edu.in or offline at the Geeta University campus, Panipat",
      "Step 2 – Submit Documents: Complete the rest of the B.Tech CSE admission process offline — submit 10+2 marksheet (with Physics & Maths), ID proof & other required documents at the campus",
      "Step 3 – Confirm Admission: Pay the admission fee offline and confirm your seat in B.Tech CSE at Geeta University, Haryana",
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
    recruitersTitle: "Top Recruiters includes:",
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
      "Reasons to choose Geeta University for B Tech Computer Science and Engineering Program",
    paragraphs: [
      "The B Tech Computer Science and Engineering at Geeta University, one of the best universities in North India, provides both theoretical and practical knowledge. This course offers training on the latest technologies, coding languages, software development, and systems engineering.",
      "Learners can gain from internships, projects, and industry collaborations at the university. A computer science and engineering program at Geeta University helps develop skills like problem-solving and analytical thinking in the tech industry. A computer science and engineering degree helps students make a career in the field of computer science and engineering. The university also has tie-ups with top companies, ensuring placements for students.",
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
  faculty: [
    {
      name: "Dr. Kapil Saini",
      designation: "Head of Department, Ph.D.",
      image:
        "https://geetauniversity.edu.in/uploads/all/1513/conversions/kapil-Saini-full.webp",
      description:
        "Published 25+ Scopus/WoS Papers; Contributed 6 Book Chapters (Springer, Elsevier, Taylor & Francis, IGI Global); Holds 3 Patents (IoT-based Health Monitoring); Recognized with Best Teacher Award (2022); Expertise in AI, ML, Cloud Computing, Recommender Systems.",
    },
    {
      name: "Ms. Rakhi Chauhan",
      designation: "Assistant Professor, M.Tech., Ph.D. (Pursuing)",
      image:
        "https://geetauniversity.edu.in/uploads/all/2666/conversions/WhatsApp-Image-2026-06-18-at-12.55.21-full.webp",
      description:
        "Ms. Rakhi Chauhan is an Assistant Professor and PhD researcher specializing in Deep Learning, CNN Benchmarking, Fake Face Detection. She has authored 10+ research papers and 20+ book chapters published in reputed journals, conferences, and edited volumes.",
    },
    {
      name: "Ms. Richa Jain",
      designation: "Assistant Professor, M.Tech.",
      image:
        "https://geetauniversity.edu.in/uploads/all/1471/conversions/Richa-Jain-(Custom)-full.webp",
      description:
        "Published Research Papers in Computer Science; Focused on innovative teaching and academic excellence.",
    },
    {
      name: "Ms. Jyoti",
      designation: "Assistant Professor",
      image:
        "https://geetauniversity.edu.in/uploads/all/1877/conversions/Jyoti-full.webp",
      description:
        "Cybersecurity professional combining industry, teaching, and research experience, with 3 publications and strong technical expertise.",
    },
    {
      name: "Radha Gautam",
      designation: "Assistant Professor",
      image:
        "https://geetauniversity.edu.in/uploads/all/2662/conversions/WhatsApp-Image-2026-06-18-at-12.55.20-(1)-full.webp",
      description:
        "Ms. Radha Gautam is an Assistant Professor with expertise in Computer Science and Engineering. She is dedicated to teaching, research, and academic excellence, with interests in emerging technologies, artificial intelligence, and software development. She has contributed to scholarly research through publications and actively participates in academic and professional development activities. Her commitment to student learning and innovation makes her a valuable contributor to higher education.",
    },
    {
      name: "Ronak Duggar",
      designation: "Trainer",
      image:
        "https://geetauniversity.edu.in/uploads/all/2682/conversions/RED06399-full.webp",
      description:
        "Full Stack Developer, AI/ML Researcher, Technical Trainer, Innovator, and Emerging Scholar with 11 Publications, 7 Patents, and H-Index 6.",
    },
  ],
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
      text: "“Learning B.Tech CSE at Geeta University has been a valuable experience so far. The focus on real-world applications and continuous support from faculty helped me build clarity in concepts and improve my confidence in coding.",
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
