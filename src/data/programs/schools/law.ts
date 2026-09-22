import type { ProgramPageData } from "../types";
import type { CourseFAQItem } from "../courses/types";

export const lawSchool: ProgramPageData = {
  slug: "geeta-global-law-school",
  name: "Geeta Global Law School",
  shortName: "Global Law School",
  type: "school",
  hideRecruiters: true,
  hideTopRecruiters: true,
  hideRankings: true,

  seo: {
    title: "Top BBA LLB & BA LLB Law College in Haryana & Delhi NCR | Geeta Global Law School",
    description:
      "Explore top-ranked BA LLB, BBA LLB, LLM, and Ph.D. Law programs at Geeta Global Law School, Geeta University. Practice-oriented moot courts, distinguished legal mentors, and career-focused curriculum.",
    keywords: [
      "Geeta global law School",
      "bba llb college in haryana",
      "best bba llb college in delhi ncr",
      "best bba llb college in haryana",
      "bba llb university in haryana",
      "best bba llb university in delhi ncr",
      "top bba llb university in delhi ncr",
      "best private university for bba llb",
      "geeta university",
      "gu",
      "ba llb college delhi ncr",
      "llm program panipat",
      "phd in law haryana",
      "law university in delhi ncr",
      "moot court law college",
    ],
  },

  hero: {
    bannerOnly: false,
    image: "/programs/law/hero.webp",
    title: "Geeta Global Law School",
    eyebrow: "Geeta University",
    description:
      "Transforming aspiring legal minds into visionary advocates, corporate legal counsels, judicial leaders, and policy experts through immersive moot court training and global legal mentorship.",
    slides: [
      {
        studentName: "Priyanshu Verma",
        pkg: "40 LPA",
        company: "Corporate & Legal Advisory",
        program: "BBA.LL.B. (Hons.)",
        image: "/programs/law/gallery-1.webp",
        titleThin: "Advocate. Analyze. Lead.",
        titleBoldLine1: "Geeta Global",
        titleBoldLine2: "Law School",
        subtitle: "PRACTICE-ORIENTED LAW · MOOT COURTS · JUDICIAL ADVOCACY",
        description:
          "Immersive legal programs designed in accordance with the evolving dynamics of the global legal world, led by distinguished Vice Chancellors, senior advocates, and legal scholars.",
        bgImage: "/programs/law/hero.webp",
        cta: "Apply Now",
        ctaLink: "https://admissions.geetauniversity.edu.in/",
      },
      {
        studentName: "Ananya Sharma",
        pkg: "Judicial Track",
        company: "High Court & Chambers",
        program: "BA.LL.B. (Hons.)",
        image: "/programs/law/gallery-2.webp",
        titleThin: "Excellence in Jurisprudence",
        titleBoldLine1: "Legal Reasoning",
        titleBoldLine2: "& Real-World Exposure",
        subtitle: "EXPERIENTIAL LEARNING · LEGAL AID CLINICS · INTERNSHIPS",
        description:
          "Master corporate law, constitutional litigation, cyber law, and intellectual property rights through moot courts, trial simulations, and top-tier legal internships.",
        bgImage: "/programs/law/hero.webp",
        cta: "Explore Programs",
        ctaLink: "https://admissions.geetauniversity.edu.in/",
      },
    ],
  },

  about: {
    eyebrow: "ABOUT THE SCHOOL",
    title: "Geeta Global Law School",
    paragraphs: [
      "The Geeta Global Law School at Geeta University is home to aspiring legal professionals, future advocates, judicial experts, and leaders who are groomed in accordance with the evolving dynamics of the legal world by highly experienced academicians and state-of-the-art learning facilities.",
      "Our immersive, practice-oriented law programs will transform you, inspire you, and prepare you to lead. You will learn and practice through moot courts, legal research, internships, case studies, and real-world legal exposure, the skills that the legal industry and society demand. These include exceptional analytical abilities, advocacy skills, legal drafting, ethical values, constitutional understanding, and leadership qualities.",
      "We, at Geeta University, are committed to helping you develop the necessary skills to satisfy your ambition for success and explore a variety of career opportunities in the legal domain. Whether you aspire to excel as an advocate, legal advisor, corporate consultant, judicial officer, or legal researcher, discover your passion and pursue it with us at the best law school in Delhi NCR.",
    ],
    image: "/programs/law/gallery-1.webp",
    badgeText: "Premier Legal Education & Moot Court Excellence",
    careers: [
      "Corporate Law & Mergers & Acquisitions",
      "Criminal Law & Trial Litigation",
      "Constitutional Law & Appellate Advocacy",
      "Intellectual Property Rights (IPR)",
      "Cyber Law & Digital Evidence Admissibility",
      "International Law & Commercial Arbitration",
      "Judicial Services & Public Prosecution",
      "Legal Journalism & Policy Think Tanks",
    ],
    closingText:
      "Our legal education ecosystem combines advanced moot court courtrooms, regular legal aid clinics, high court & supreme court chamber internships, and direct mentorship from renowned jurists.",
  },

  visionMission: {
    vision:
      "To be a globally respected centre of excellence in legal education, nurturing competent legal professionals, ethical advocates, judicial leaders, researchers, and policymakers, dedicated to serving justice, the rule of law, and constitutional values, and committed to nation-building.",
    mission: [
      "To achieve student-centric, outcome-based quality legal education by providing values-based, strong foundational legal knowledge and skills, and encouraging ethical practices and experiential learning to meet the needs of local, regional, and international legal practice.",
      "To produce competent, ethical, and socially responsible legal professionals with knowledge and advocacy skills, leadership abilities, and analytical competencies needed in legal practice, the judiciary, public service, corporate law, and alternative dispute resolution.",
      "To promote interdisciplinary legal research and innovations that accelerate the development of solutions to pertinent legal issues, as well as advance justice, public policy, and the rule of law.",
      "To establish partnerships with courts, law firms, corporate entities, regulatory agencies, and international organizations in clinical legal education, internship placement, research, and teaching.",
      "To develop leadership and encourage innovation and excellence in legal education while promoting access to justice, the use of legal technologies, and dedicated service to society and the nation.",
    ],
  },

  specialisations: {
    title: "Be A Part Of Top Rated University",
    items: [
      {
        title: "Industry Oriented Curriculum",
        desc: "Specialized legal training with curriculum that integrates traditional legal principles with emerging areas of Law",
      },
      {
        title: "Flexible Choice Based Credit System",
        desc: "Passion Programs empower lawyers to expand their skill set by learning coding and exploring opportunities in technology.",
      },
      {
        title: "Distinguished Faculty",
        desc: "Faculty comprises highly experienced legal professionals, scholars & practitioners.",
      },
      {
        title: "Digitally Enabled Campus",
        desc: "The use of Advanced Computer Technology in every aspect of campus life enhances student convenience & comfort.",
      },
      {
        title: "Go Global With GU",
        desc: "Internships & Student exchange programs at Top Rated European Universities",
      },
      {
        title: "Outcome Based Education (OBE)",
        desc: "Rubric-based assessments and regular skill mapping ensure a high level of transparency and alignment with industry needs.",
      },
      {
        title: "Skill Enhancement Certifications",
        desc: "On Contract Drafting, Corporate Governance IPR, Investment Law, Cyber Law & many more",
      },
      {
        title: "Experiential Learning",
        desc: "Regular conduct of Moot courts, Legal aid clinics & expert lectures by judges, senior advocates, legal experts",
      },
    ],
  },

  featuredPrograms: {
    title1: "Integrated Law (5 years)",
    tag1: "BA.LL.B. / BBA. LL.B.",
    title2: "Postgraduate & Research",
    tag2: "LL.M. (1 year) & Ph.D.",
    description:
      "Comprehensive, Bar Council of India (BCI) recognized law programs preparing students for litigation, corporate law, judicial services, and academic research.",
    cards: [
      {
        title: "BA.LL.B. (Hons.)",
        iconName: "GraduationCap",
        points: [
          "5-Year Integrated Degree with Humanities & Law",
          "Constitutional, Criminal, Civil & Human Rights Law",
          "Moot Court Training & Legal Aid Clinic Practice",
        ],
      },
      {
        title: "BBA. LL.B. (Hons.)",
        iconName: "Award",
        points: [
          "5-Year Integrated Degree with Business & Law",
          "Corporate Governance, M&A, FinTech & Tax Laws",
          "Corporate Internships & International Commercial Law",
        ],
      },
      {
        title: "LL.M. (Master of Laws)",
        iconName: "BookOpenCheck",
        points: [
          "1-Year Full-Time Specialized Master's Program",
          "Advanced Specialisations in Corporate, Criminal & Cyber Law",
          "Dissertation, Comparative Jurisprudence & Academic Track",
        ],
      },
      {
        title: "Ph.D. in Law",
        iconName: "Lightbulb",
        points: [
          "Doctoral Research in Contemporary & Interdisciplinary Law",
          "High-Impact Scopus / UGC-CARE Publications",
          "Mentorship by Eminent National Law Scholars",
        ],
      },
    ],
  },

  departmentHighlightsTitle: "Where Learning Meets Achievement",
  departmentHighlights: [
    {
      title: "Moot Court Hall & Advocacy Arena",
      image: "/programs/law/gallery-1.webp",
    },
    {
      title: "Legal Aid Clinic & Community Service",
      image: "/programs/law/gallery-2.webp",
    },
    {
      title: "National Seminar & Judicial Dialogues",
      image: "/programs/law/gallery-3.webp",
    },
    {
      title: "Interactive Classroom & Case Study Labs",
      image: "/programs/law/gallery-4.webp",
    },
    {
      title: "Law Library & Digital Legal Database",
      image: "/programs/law/gallery-5.webp",
    },
  ],

  mentorsSection: {
    eyebrow: "EXPERT MENTORSHIP",
    title: "Meet our Mentors",
    faculty: [
      {
        name: "Prof. (Dr) Sanjeevi Shanthakumar",
        designation: "Director - Vice Chancellor",
        role: "Director - Vice Chancellor, Gujarat National Law University (GNLU)",
        description:
          "Director-Vice Chancellor at Gujarat National Law University, Gandhinagar. Eminent legal scholar and education reformer guiding curriculum standards, research initiatives, and global academic affiliations at Geeta Global Law School.",
        image: "/programs/law/mentor-1.webp",
      },
      {
        name: "Prof. (Dr) Manjula Batra",
        designation: "Professor & Former Dean",
        role: "Professor & Former Dean, Faculty of Law, Jamia Millia Islamia, Delhi",
        description:
          "Former Dean and Professor at the Department of Law, Jamia Millia Islamia University, Delhi. Specialist in human rights, gender jurisprudence, and criminal law with decades of academic and research leadership.",
        image: "/programs/law/mentor-2.webp",
      },
      {
        name: "Prof. (Dr.) Rajpal Sharma",
        designation: "Director",
        role: "Director, Institute of Law, Kurukshetra University, Kurukshetra",
        description:
          "Director at the Institute of Law, Kurukshetra University, Kurukshetra. Eminent scholar in commercial laws, jurisprudence, and procedural law dedicated to fostering practical legal acumen and trial excellence.",
        image: "/programs/law/mentor-3.webp",
      },
      {
        name: "Prof. (Dr) S.S. Jaswal",
        designation: "Registrar",
        role: "Registrar, HP National Law University, Shimla",
        description:
          "Registrar at HP National Law University, Shimla. Veteran administrator and professor of law bringing vast institutional governance, regulatory expertise, and curricular excellence to Geeta University.",
        image: "/programs/law/mentor-4.webp",
      },
      {
        name: "Prof. (Dr.) Nishtha Jaswal",
        designation: "Former Vice Chancellor",
        role: "Former Vice Chancellor, HP National Law University, Shimla",
        description:
          "Former Vice Chancellor at Himachal Pradesh National Law University, Shimla. Renowned constitutional and administrative law scholar recognized nationally for contributions to judicial training and legal education reform.",
        image: "/programs/law/mentor-5.webp",
      },
      {
        name: "Prof. (Dr.) Kamaljeet Singh",
        designation: "Vice Chancellor",
        role: "Vice Chancellor, Madhusudan Law University, Odisha",
        description:
          "Vice Chancellor at Madhusudan Law University, Odisha. Prominent expert in constitutional law, human rights, and legal pedagogy mentoring students towards top outcomes in judicial and litigation careers.",
        image: "/programs/law/mentor-6.webp",
      },
      {
        name: "Dr. Anand Prakash Mishra",
        designation: "Executive Dean - Institutional Outreach & Senior Director",
        role: "Professor of Practice & Vice Dean, Jindal Global Law School, OP Jindal Global University",
        description:
          "Professor of Practice and Vice Dean at Jindal Global Law School of O.P. Jindal Global University. Obtained LL.B. and LL.M. from Campus Law Centre, Faculty of Law, University of Delhi and qualified UGC-NET in Law. Over two decades of legal education leadership, Fellow at IIHEd, and acclaimed teacher in Torts, Labour Law, and Legal Methods.",
        image: "/programs/law/mentor-7.webp",
      },
    ],
  },

  placement: {
    eyebrow: "Career Outcomes",
    title: "Law Placements, Chambers & Corporate Opportunities",
    subtitle:
      "Empowering law graduates to step into leading corporate law firms, high court chambers, multinational corporations, consulting giants, and judicial clerkships.",
    heroImage: "/about/campus.webp",
    heroNoteTitle: "Advocacy & Corporate Readiness",
    heroNoteText:
      "Graduates trained through real-world legal aid clinics, national moot court competitions, legal drafting workshops, and high court internships.",
    stats: [
      { value: "40 LPA", label: "Highest Package", iconName: "Award" },
      { value: "550+", label: "Recruiters & Partners", iconName: "Building2" },
      { value: "3500+", label: "Job & Internship Offers", iconName: "BriefcaseBusiness" },
    ],
    recruiters: [
      { name: "Shardul Amarchand Mangaldas", color: "#168acb", logo: "/programs/law/recruiters/shardul_amarchand.svg" },
      { name: "Khaitan & Co", color: "#003366", logo: "/programs/law/recruiters/khaitan.svg" },
      { name: "AZB & Partners", color: "#b32428", logo: "/programs/law/recruiters/azb.svg" },
      { name: "Trilegal", color: "#1e3a8a", logo: "/programs/law/recruiters/trilegal.svg" },
      { name: "Luthra and Luthra", color: "#d97706", logo: "/programs/law/recruiters/luthra.svg" },
      { name: "Cyril Amarchand Mangaldas", color: "#047857", logo: "/programs/law/recruiters/cyril_amarchand.svg" },
      { name: "Deloitte Legal", color: "#86efac", logo: "/programs/law/recruiters/deloitte_legal.svg" },
      { name: "PwC Legal Advisory", color: "#f97316", logo: "/programs/law/recruiters/pwc_legal.svg" },
      { name: "EY India", color: "#ffe600", logo: "/programs/law/recruiters/ey_india.svg" },
      { name: "KPMG Advisory", color: "#00338d", logo: "/programs/law/recruiters/kpmg_legal.svg" },
      { name: "INDUSLAW", color: "#1a237e", logo: "/programs/law/recruiters/induslaw.svg" },
      { name: "JSA Advocates", color: "#004d40", logo: "/programs/law/recruiters/jsa.svg" },
      { name: "Kochhar & Co", color: "#c21b27", logo: "/programs/law/recruiters/kochhar.svg" },
    ],
    avgPackage: "₹6.5 LPA",
    avgPackageNote:
      "Steady growth across corporate law, in-house corporate legal counsel, ADR mediation, and litigation practice.",
    packageBars: [
      { label: "Up to ₹4.5 LPA", value: 110, width: "100%" },
      { label: "₹4.5 - ₹7.5 LPA", value: 85, width: "77%" },
      { label: "₹7.5 - ₹12 LPA", value: 40, width: "36%" },
      { label: "₹12 - ₹40 LPA", value: 20, width: "18%" },
    ],
    disclaimer:
      "Placement & internship session 2025-26 active across law firms, judicial clerkships, corporate legal cells, and chambers.",
    sectorChartImage: "/chart.png",
    sectorLegend: [
      { label: "Corporate Law Firms & M&A", value: "32.0%", color: "#f2ad00" },
      { label: "Litigation & Chamber Practice", value: "26.5%", color: "#ef6a22" },
      { label: "In-House Counsel & PSUs", value: "18.5%", color: "#ef2856" },
      { label: "Judicial Services & Civil Exams", value: "13.0%", color: "#df4ab3" },
      { label: "ADR, Think Tanks & Policy", value: "10.0%", color: "#25aee4" },
    ],
  },

  testimonials: [
    {
      name: "Shvet Sharma",
      role: "LL.M. Student",
      image: "/programs/law/llm/shvet_testimonial.webp",
      quote:
        "My journey at Geeta Global Law School helped me develop confidence, discipline, and a broader perspective on legal studies. The university’s research-oriented approach prepared me for future academic and professional opportunities.",
    },
    {
      name: "Anjali Gupta",
      role: "LL.M. Student",
      image: "/programs/law/llm/anajli_testimonial.webp",
      quote:
        "Being at Geeta Global Law School allowed me to gain valuable knowledge, research exposure, and professional confidence. The university’s positive academic atmosphere inspired me to continuously learn and grow in the field of law.",
    },
    {
      name: "Garima Juneja",
      role: "Ph.D. Scholar",
      image: "/programs/law/phd-law/garima-testimonial.webp",
      quote:
        "Geeta Global Law School provided me with an excellent platform to enhance my legal research skills and deepen my understanding of the judicial system. The supportive learning culture motivated me to achieve academic excellence.",
    },
    {
      name: "Musavir Ahmad Mir",
      role: "Ph.D. Scholar",
      image: "/programs/law/phd-law/musavir-testimonial.webp",
      quote:
        "Pursuing my Ph.D. in Law at Geeta Global Law School has strengthened my research abilities, analytical thinking, and legal expertise. The academic environment and guidance from experienced faculty helped me grow professionally and intellectually.",
    },
  ],

  careerPathways: {
    title: "Career Pathways",
    description:
      "After completing a law program, graduates can pursue diverse career opportunities across the public and private sectors. Career paths include advocacy, legal advisory, judicial services, corporate counsel, and legal consultancy in law firms, companies, and government departments. Our law programs develop essential skills such as critical thinking, legal reasoning, communication, and advocacy. Whether you aspire to a career in litigation, the judiciary, policymaking, human rights, or corporate law, our programs provide the knowledge and practical training you need to build a successful legal career.",
    notableRoles: [
      { name: "Litigation/Corporate Lawyer" },
      { name: "Judge/Judicial Services" },
      { name: "Legal Advisor" },
      { name: "Law Firm Associate" },
      { name: "Legal Officer in PSU/Indian Army" },
      { name: "Law Professor" },
      { name: "Legal Consultant" },
      { name: "Arbitrator / Mediator" },
      { name: "Entrepreneur" },
    ],
  },

  brochure: {
    title: "Want to know more?",
    description:
      "Access detailed syllabus guides for B.A. LL.B., B.B.A. LL.B., LL.M., and Ph.D., moot court achievements, mentor profiles, and admission guidelines.",
    fileUrl: "https://geetauniversity.edu.in/uploads/all/1892/GU-Brochure-2026-27.pdf",
    fileName: "Geeta_Global_Law_School_Brochure.pdf",
  },

  courses: [
    {
      title: "Undergraduate Integrated Programs",
      level: "Undergraduate (5 years Integrated)",
      duration: "5 years",
      eligibility:
        "Passed the 10+2 examination in any stream with at least 50% marks in aggregate (45% for reserved category) from any recognized board.",
      programs: [
        {
          name: "BA.LL.B. (Hons.)",
          duration: "5 years Integrated",
          eligibility: "Passed the 10+2 examination with at least 50% marks from a recognized board.",
          href: "https://geetauniversity.edu.in/programs/geeta-global-law-school/ba-llb",
        },
        {
          name: "BBA. LL.B. (Hons.)",
          duration: "5 years Integrated",
          eligibility: "Passed the 10+2 examination with at least 50% marks from a recognized board.",
          href: "https://geetauniversity.edu.in/programs/geeta-global-law-school/bba-llb",
        },
      ],
    },
    {
      title: "Postgraduate Law Program",
      level: "Postgraduate (1 year Full-Time)",
      duration: "1 year",
      eligibility:
        "Passed Bachelor's degree in Law (LL.B. 3 years or 5 years Integrated) with at least 50% marks from a recognized university.",
      programs: [
        {
          name: "LL.M. – Master of Laws",
          duration: "1 year Full-Time",
          eligibility: "Passed Bachelor's degree in Law (LL.B.) with minimum 50% marks in aggregate.",
          href: "/programs/geeta-global-law-school/llm",
        },
      ],
    },
    {
      title: "Doctoral Program in Law",
      level: "Doctoral (Minimum 3 years)",
      duration: "Minimum 3 years",
      eligibility:
        "Master's degree in Law (LL.M.) with a minimum of 55% aggregate marks from a recognized university.",
      programs: [
        {
          name: "Ph.D. in Law",
          duration: "Minimum 3 years",
          eligibility: "Master's degree in Law (LL.M.) with a minimum of 55% aggregate marks.",
          href: "/programs/geeta-global-law-school/phd-law",
        },
      ],
    },
  ],

  dean: {
    name: "Dr. Ayaz",
    designation: "Dean, Geeta Global Law School",
    image: "/programs/law/ayaz.png",
    message:
      "I welcome you to the Geeta Global Law School at Geeta University! Students aiming for a strong career in law are bound to thrive at Geeta University. Gain practical knowledge in legal studies, corporate law, litigation, and more through our industry-aligned programs. You not only develop a strong foundation in legal principles but also build essential skills in legal research, advocacy, and critical thinking to become career-ready. Our experienced faculty ensures your overall growth by supporting your learning endeavours. We also offer the benefit of strong industry collaborations, skill development opportunities, internships, and assured placement support. Join us to pave your path to all-around development and career success in the world of law.",
    schoolName: "Geeta Global Law School",
  },

  faqs: [
    {
      "q": "What is Geeta Global Law School (GGLS)?",
      "a": "GGLS is a constituent law school of Geeta University, Panipat, established in 2022–23, offering integrated undergraduate, postgraduate, and doctoral law programs with a practice-first, moot-court-driven pedagogy.",
      "category": "About the School"
    },
    {
      "q": "Is GGLS a separate institution from Geeta University?",
      "a": "No. GGLS operates as a constituent school under Geeta University, giving students access to the university's full multidisciplinary ecosystem, infrastructure, and approvals.",
      "category": "About the School"
    },
    {
      "q": "Since when has GGLS been operational?",
      "a": "GGLS has been operational since the 2022–23 academic session.",
      "category": "About the School"
    },
    {
      "q": "Is GGLS approved by UGC?",
      "a": "Yes. Geeta University, of which GGLS is a constituent school, is recognized by the University Grants Commission (UGC).",
      "category": "About the School"
    },
    {
      "q": "Is GGLS recognized by the Bar Council of India (BCI)?",
      "a": "GGLS structures its curriculum in line with Bar Council of India norms.",
      "category": "About the School"
    },
    {
      "q": "What law programs does GGLS offer?",
      "a": "BA LL.B. (Hons.) and BBA LL.B. (Hons.) as 5-year integrated undergraduate programs, LL.M. as a 1-year postgraduate program, and a Ph.D. in Law.",
      "category": "Programs & Eligibility"
    },
    {
      "q": "What is the eligibility for BA LL.B./BBA LL.B.?",
      "a": "Passed the 10+2 in any stream with a minimum of 50% aggregate marks (45% for reserved categories).",
      "category": "Programs & Eligibility"
    },
    {
      "q": "What is the eligibility for LL.M.?",
      "a": "A Bachelor's degree in Law (LL.B. or 5-year integrated law degree) with a minimum of 50% marks from a recognized university.",
      "category": "Programs & Eligibility"
    },
    {
      "q": "What is the eligibility for Ph.D. in Law?",
      "a": "A Master's degree in Law (LL.M.) with a minimum of 55% marks, plus qualifying the university's entrance and interview process.",
      "category": "Programs & Eligibility"
    },
    {
      "q": "What specialisations are available?",
      "a": "Corporate Law, Criminal Law, Constitutional Law, IPR Law, and Family Law offered as elective tracks in later years.",
      "category": "Programs & Eligibility"
    },
    {
      "q": "Is the curriculum based on NEP 2020?",
      "a": "Yes — an NEP 2020-aligned, choice-based credit system with interdisciplinary electives across Geeta University's other schools.",
      "category": "Programs & Eligibility"
    },
    {
      "q": "How do I apply to GGLS?",
      "a": "You can apply to GGLS through the official online admission portal by filling in your personal and academic details and selecting your chosen program.",
      "category": "Admissions"
    },
    {
      "q": "Is there an entrance exam for admission?",
      "a": "Admission is based on merit in national entrance exams such as CLAT, CUET, or GLAT, alongside qualifying examination percentage.",
      "category": "Admissions"
    },
    {
      "q": "What documents are required for admission?",
      "a": "Academic transcripts and mark sheets for 10th and 12th, transfer/migration certificate, category certificate (if applicable), identity proof (Aadhaar Card), and 3 passport-size photographs. PG and Ph.D. applicants also require bachelor's and master's degree certificates.",
      "category": "Admissions"
    },
    {
      "q": "What is the fee structure for law programs?",
      "a": "Fee details vary by program and scholarship eligibility and can be checked on the official fee structure page of Geeta University.",
      "category": "Fees & Scholarships"
    },
    {
      "q": "Are scholarships available for law students?",
      "a": "Yes — merit-based and need-based scholarships are available and can be calculated using the university's Scholarship Predictor.",
      "category": "Fees & Scholarships"
    },
    {
      "q": "Is an education loan facility available?",
      "a": "Geeta University assists with education loan documentation and bank tie-ups; details are available through the admissions/finance office.",
      "category": "Fees & Scholarships"
    },
    {
      "q": "What makes GGLS's teaching approach different?",
      "a": "Experiential learning — moot courts, legal aid clinics, simulated law-firm exercises, and judgment-writing labs — built into the credit structure rather than offered only as extracurriculars.",
      "category": "Academics & Campus Life"
    },
    {
      "q": "Does GGLS have a moot court facility?",
      "a": "Yes — a dedicated Moot Court Hall replicating an actual courtroom, used for regular moot rounds, practice sessions, and inter-university competitions.",
      "category": "Academics & Campus Life"
    },
    {
      "q": "Are there opportunities for internships?",
      "a": "Yes — structured internships with law firms, corporate legal departments, chambers, and legal aid organizations as part of the curriculum.",
      "category": "Academics & Campus Life"
    },
    {
      "q": "Does GGLS offer international exposure?",
      "a": "Yes — through Geeta University's broader international partnerships, students can access exchange and global internship opportunities.",
      "category": "Academics & Campus Life"
    },
    {
      "q": "What support does GGLS provide for soft skills and interview preparation?",
      "a": "All GGLS students have access to Geeta Finishing School (GFS), covering communication, personality development, group discussions, and mock interviews.",
      "category": "Academics & Campus Life"
    },
    {
      "q": "Does GGLS have hostel and residential facilities?",
      "a": "Yes — residential hostel facilities are part of Geeta University's shared campus infrastructure, along with sports, cafeteria, and Wi-Fi-enabled campus access.",
      "category": "Academics & Campus Life"
    },
    {
      "q": "What career options are available after a law degree from GGLS?",
      "a": "Litigation, judicial services, corporate legal roles, law firm associateships, legal advisory positions, legal officer roles in PSUs/government, academia, arbitration/mediation, or entrepreneurship.",
      "category": "Placements & Career"
    },
    {
      "q": "Does GGLS provide placement assistance?",
      "a": "Yes — through Geeta University's placement cell along with GGLS's own industry tie-ups and internship-to-placement pipelines.",
      "category": "Placements & Career"
    },
    {
      "q": "Can I pursue judiciary exam preparation alongside my degree?",
      "a": "Many students use their law degree as a foundation for judicial services exam prep; check with the school for dedicated judiciary-prep support or mentorship.",
      "category": "Placements & Career"
    },
    {
      "q": "What law programs are offered at Geeta Institute of Law?",
      "a": "GIL offers B.A. LL.B. (Hons.), BBA LL.B. (Hons.), LL.B. and LL.M. programs.",
      "category": "Admissions & Eligibility"
    },
    {
      "q": "How long is the B.A. LL.B. (Hons.) program?",
      "a": "It is a 5-year integrated program spread across 10 semesters.",
      "category": "Programs & Curriculum"
    },
    {
      "q": "What is the eligibility for B.A. LL.B. (Hons.)?",
      "a": "Candidates must have passed the 10+2 with at least 45% aggregate marks (42.75% for SC/ST), with English as one of the subjects.",
      "category": "Admissions & Eligibility"
    },
    {
      "q": "What is the eligibility for BBA LL.B. (Hons.)?",
      "a": "Candidates need the 10+2 with at least 45% aggregate marks (42.75% for SC/ST), with English as one of the subjects.",
      "category": "Admissions & Eligibility"
    },
    {
      "q": "How is B.A. LL.B. different from BBA LL.B.?",
      "a": "B.A. LL.B. combines Law with humanities subjects such as Political Science and Sociology, while BBA LL.B. combines Law with business and management subjects.",
      "category": "Programs & Curriculum"
    },
    {
      "q": "Who can apply for the 3-year LL.B. program?",
      "a": "Graduates from any stream can apply, provided they have at least 45% aggregate marks for the General Category and 42.75% for SC/ST.",
      "category": "Admissions & Eligibility"
    },
    {
      "q": "How long is the LL.B. program?",
      "a": "LL.B. is a 3-year program comprising six semesters.",
      "category": "Programs & Curriculum"
    },
    {
      "q": "What is the eligibility for LL.M.?",
      "a": "Candidates need an LL.B. or a 5-year integrated law degree with 55% aggregate marks for the General Category; SC/ST candidates need the minimum passing marks.",
      "category": "Admissions & Eligibility"
    },
    {
      "q": "What is GLAT?",
      "a": "GLAT is the Geeta Law Admission Test conducted by GIL for admission to its 5-year B.A. LL.B. (Hons.) and BBA LL.B. (Hons.) programs.",
      "category": "Admission Process & GLAT"
    },
    {
      "q": "Is GLAT compulsory for admission to the 5-year law programs?",
      "a": "GIL uses GLAT along with qualifying-examination merit and the admission interaction process for selecting candidates. Scores from national exams such as CLAT, AILET or LSAT India may also be accepted in lieu of GLAT.",
      "category": "Admission Process & GLAT"
    },
    {
      "q": "What subjects are tested in GLAT?",
      "a": "GLAT assesses General Knowledge & Current Affairs, English, Reasoning, and Legal Aptitude & Awareness.",
      "category": "Admission Process & GLAT"
    },
    {
      "q": "What is the GLAT exam pattern?",
      "a": "The published GLAT information states that the test is typically 90 minutes long and contains 100 objective questions.",
      "category": "Admission Process & GLAT"
    },
    {
      "q": "Can CLAT or another national-level law entrance score be used?",
      "a": "Yes. GIL states that scores from CLAT, AILET or LSAT India may be accepted in lieu of GLAT for admission.",
      "category": "Admission Process & GLAT"
    },
    {
      "q": "Does Geeta Institute of Law have moot court training?",
      "a": "Yes. Moot court training is an important part of the institute's practical legal education, and GIL regularly participates in and organises moot court competitions.",
      "category": "Moot Courts, Practical Training & Court Exposure"
    },
    {
      "q": "Do students get actual court exposure?",
      "a": "Yes. Practical training includes court visits and exposure to District Courts, High Courts and the Supreme Court of India.",
      "category": "Moot Courts, Practical Training & Court Exposure"
    },
    {
      "q": "Are internships part of legal education at GIL?",
      "a": "Yes. Internship and practical training are integral to the institute's professional-development approach. GIL organises its internship fair under the name 'PRASHIKSHAN'.",
      "category": "Internships & Industry Exposure"
    },
    {
      "q": "Does GIL offer scholarships?",
      "a": "Yes. GLAT performance can make students eligible for merit-based scholarships, including scholarships of up to 100% for the five-year programs.",
      "category": "Scholarships & Student Support"
    }
  ],

  cta: {
    heading: "Shape the Future of Law & Justice with Geeta University",
    quote: "“",
    paragraphs: [
      "Transform your passion for justice, advocacy, and analytical thinking into an impactful, prestigious legal career.",
      "Gain real courtroom exposure, masterclass mentorship from distinguished Vice Chancellors, and premier placement assistance.",
    ],
    otherPrograms: [
      "Commerce & Business Management",
      "Computer Science & Engineering",
      "Forensic Sciences",
      "Pharmacy",
      "Hospitality & Hotel Management",
      "Health & Allied Sciences",
    ],
    qrLabel: "Admissions Open",
    qrCta: "Scan to Apply",
    qrImage: "/qr.png",
    applyLink: "/admissions",
    helpline: "+91 92787 68000",
    website: "www.geetauniversity.edu.in",
    campusAddress: "NH-71A, Naultha Panipat, Haryana (132145), India.",
  },
};

export const lawFaqs: CourseFAQItem[] = (lawSchool.faqs || []).map((item) => ({
  question: item.q || item.question || "",
  answer: item.a || item.answer || "",
  category: item.category || "General",
}));


