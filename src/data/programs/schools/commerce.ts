import type { ProgramPageData } from "../types";
import type { CourseFAQItem } from "../courses/types";

export const commerceSchool: ProgramPageData = {
  slug: "school-of-commerce-and-business-management",
  type: "school",
  hideRecruiters: true,
  hideTopRecruiters: true,
  hideRankings: true,

  seo: {
    title: "Best MBA & Ph.D. Management Programs in Haryana | Geeta University",
    description: "Geeta University offers top-ranked MBA and Ph.D. programs in Supply Chain, HR, Pharmaceutical, and Hotel Management in Haryana & Delhi NCR. Enroll now at one of the best private universities.",
    keywords: [
      "School of Commerce & Business Management",
      "bba college in haryana",
      "bachelor of business odministrotion",
      "bachelor of business administration university in haryana",
      "best bba university in haryana",
      "top bba university in haryana",
      "bba course university in haryana",
      "university school of business",
      "geeta university",
      "gu",
    ],
  },

  hero: {
    bannerOnly: true,
    image: "/bba%20banner.jpeg",
    title: "School of Commerce & Business Management",
    eyebrow: "Geeta University",
    description: "Transform your career with industry-driven programs in Business Administration and Commerce.",
  },

  about: {
    eyebrow: "ABOUT THE SCHOOL",
    title: "School of Commerce & Business Management",
    paragraphs: [
      "The School of Commerce & Business Management at Geeta University goes beyond teaching top-notch management skills to students - it helps create industry leaders. As one of the top Universities for Management in Panipat, we offer a comprehensive curriculum that blends academic excellence with real-world exposure to make you job-ready from day one.",
      "We have emerged as the best University for Management in Delhi NCR thanks to our industry-driven approach and great focus on experiential learning. Our programs are designed to help you adapt a strategic mindset, acquire key leadership skills, and develop innovative thinking necessary for thriving in today's competitive business world.",
      "Being a top Management University in Panipat and ranked among the best Management Universities in North India, Geeta University offers unparalleled learning experiences through its expert faculty, complimented by global career opportunities. If you’re ready to transform your ambitions into success, enrol now at Geeta University—where future leaders are made!",
    ],
    image: "/bba photo.jpeg",
    badgeText: "Future Leaders Are Made Here",
    /* careers: [
      "Investment Banking & FinTech",
      "Business Analytics & Data Insights",
      "Digital Marketing & Brand Strategy",
      "International Trade & Global Logistics",
      "Corporate Finance & Tax Advisory (ACCA)",
      "Strategic HR & Talent Management",
      "Wealth Management & Banking",
      "Entrepreneurship & Startup Leadership",
    ], */
    closingText:
      "Our learning environment blends case-study pedagogy, live financial simulations, corporate internships, and expert mentorship from top industry leaders.",
  },

  visionMission: {
    vision:
      "“To emerge as a premier center of business and management education by nurturing ethical business leaders, entrepreneurs, innovators and decision makers who contribute towards sustainable growth of industries, society and the nation.”",
    mission: [
      "To provide student centric and outcome based management education that enhances business knowledge, analytical skills, leadership capabilities and problem solving aptitude",
      "To groom socially responsible and professionally competent managers with values, vision and skills for meeting demands of industry and nation",
      "To promote interdisciplinary research and managerial innovations with potential for sustainable impact on society and economy",
      "To build academic industry interface through corporate connect, live projects, internships, industry visits and global exposure to enhance employability, skills and competitiveness",
      "To develop entrepreneurial mindset and leadership to enable students to take up opportunities, start new ventures and contribute towards employment generation, innovation, and growth of business enterprises, society and the nation.",
    ],
  },

  specialisations: {
    eyebrow: "MANAGEMENT & COMMERCE EXCELLENCE",
    title: "We Don't Just Educate, We Transform Futures!",
    subtitle: "An active, achievement-driven business ecosystem designed for tomorrow's corporate leaders.",
    layout: "cards",
    items: [
      {
        title: "Holistic Development",
        points: [
          "Club and clan culture",
          "Soft skills training",
          "Ethical mindset nurturing",
          "Practical personality grooming",
        ],
      },
      {
        title: "Industry-Driven Curriculum",
        points: [
          "Role plays & simulations",
          "Real-world case studies",
          "Business games practice",
          "Internship-based learning",
        ],
      },
      {
        title: "XEDGE Program Advantage",
        points: [
          "Corporate attitude coaching",
          "Career and life skills",
          "Leadership mindset training",
          "Social responsibility building",
        ],
      },
      {
        title: "Wide Specialization Options",
        points: [
          "BBA & MBA pathways",
          "Commerce and finance tracks",
          "ACCA UK affiliations",
          "Futuristic fields like FinTech",
        ],
      },
      {
        title: "Skill Enhancement Focus",
        points: [
          "Excel & Power BI skills",
          "Digital marketing modules",
          "Leadership negotiation training",
          "WordPress & HTML basics",
        ],
      },
      {
        title: "Global Exposure",
        points: [
          "International internships offered",
          "Partnered global universities",
          "Multinational student diversity",
          "Real global industry touch",
        ],
      },
      {
        title: "Top Placements Record",
        points: [
          "Up to 40 LPA offers",
          "MNC collaborations & conclaves",
          "Pre-placement training support",
          "LinkedIn and mock interviews",
        ],
      },
      {
        title: "Flexible Learning Design",
        points: [
          "Customize your degree",
          "Passion-based electives",
          "Research integrated options",
          "Competency-based modules",
        ],
      },
    ],
  },

  /*
  specialisations: {
    eyebrow: "EXPLORE YOUR SPECIALISATION",
    title: "Programs Designed for Future Business Leaders",
    subtitle: "Bachelor of Business Administration (BBA) Specialisations",
    items: [
      {
        title: "FinTech",
        iconName: "WalletCards",
        points: [
          "Navigate digital payment systems and blockchain technologies.",
          "Analyze financial models using modern technological tools.",
          "Understand regulatory frameworks in financial technology.",
        ],
      },
      {
        title: "AI & Data Analytics",
        iconName: "BrainCircuit",
        points: [
          "Leverage data visualization and predictive modeling.",
          "Apply machine learning concepts to business strategies.",
          "Make data-driven decisions for enterprise growth.",
        ],
      },
      {
        title: "Digital Marketing",
        iconName: "Megaphone",
        points: [
          "Design comprehensive online brand and social media campaigns.",
          "Utilize SEO, SEM, and web analytics for market optimization.",
          "Drive customer acquisition through targeted digital strategies.",
        ],
      },
      {
        title: "Import & Export Management",
        iconName: "Globe2",
        points: [
          "Manage international trade operations and global supply chains.",
          "Navigate cross-border compliance and customs documentation.",
          "Develop strategies for global market entry and expansion.",
        ],
      },
      {
        title: "Entrepreneurship & Family Businesses",
        iconName: "Lightbulb",
        points: [
          "Develop sustainable business plans and startup strategies.",
          "Manage scaling operations and venture funding.",
          "Navigate succession planning and family enterprise governance.",
        ],
      },
      {
        title: "International Accounting with ACCA",
        iconName: "BookOpenCheck",
        points: [
          "Master global accounting principles and IFRS standards.",
          "Develop expertise in corporate reporting and taxation.",
          "Prepare for strategic professional ACCA certification levels.",
        ],
      },
      {
        title: "Banking & Finance",
        iconName: "Landmark",
        points: [
          "Analyze financial markets, banking operations, and investment portfolios.",
          "Assess risk management frameworks and corporate finance.",
          "Understand modern banking regulations and monetary policies.",
        ],
      },
      {
        title: "Marketing",
        iconName: "Target",
        points: [
          "Design strategic marketing campaigns and brand positioning.",
          "Analyze consumer behavior and market research data.",
          "Manage retail, sales, and distribution channels effectively.",
        ],
      },
      {
        title: "Human Resource Management",
        iconName: "UsersRound",
        points: [
          "Implement talent acquisition and workforce planning strategies.",
          "Manage employee relations, compensation, and benefits.",
          "Foster organizational behavior and leadership development.",
        ],
      },
    ],
  },
  */

  featuredPrograms: {
    title1: "Bachelor of Commerce",
    tag1: "B.Com",
    title2: "Master of Commerce",
    tag2: "M.Com",
    description: "Build expertise in accounting, finance, taxation and global business practices with industry-focused learning.",
    studentImage: "/bba student.png",
    cards: [
      {
        title: "International Accounting with ACCA",
        iconName: "Globe",
        points: [
          "Financial Accounting",
          "International Standards",
          "Taxation & Auditing",
        ],
      },
      {
        title: "Advanced Accounting",
        iconName: "Calculator",
        points: [
          "Corporate Accounting",
          "Financial Management",
          "Cost Accounting",
        ],
      },
      {
        title: "Auditing & Taxation",
        iconName: "BadgeDollarSign",
        points: [
          "Direct & Indirect Taxes",
          "Internal Auditing",
          "Regulatory Compliance",
        ],
      },
      {
        title: "Banking & Insurance",
        iconName: "Landmark",
        points: [
          "Banking Operations",
          "Risk Management",
          "Financial Markets",
        ],
      },
    ],
  },

  mentorsSection: {
    eyebrow: "EXPERT FACULTY",
    title: "Meet Our Mentors",
    faculty: [
      {
        name: "Dr. Vivek Rastogi",
        designation: "Professor, Ph.D.",
        role: "Professor, Ph.D.",
        description:
          "Dr. Vivek Rastogi is an academician and researcher with expertise in Management, Human Resource Management, Learning & Development, and Emerging Technologies. He is committed to fostering student growth through innovative teaching, research, industry collaboration, and mentorship. His research interests include technology adoption, consumer behavior, electric vehicles, digital transformation, and organizational development.",
        image: "/programs/commerce/scbm faculty/vivek.webp",
      },
      {
        name: "Dr. Sangeeta Chaudhary",
        designation: "Associate Professor, Ph.D.",
        role: "Associate Professor, Ph.D.",
        description:
          "Authored the book 'Managerial Economics', published research papers and book chapters in esteemed Scopus and ABDC journals, and presented research at international conferences. Recipient of the prestigious 'Best Team Leader' award. Contributed to teaching and research at the School of Commerce & Business Management.",
        image: "/programs/commerce/scbm faculty/sangeeta.webp",
      },
      {
        name: "Parul S. Ghangas",
        designation: "Assistant Professor, M.Phil., Pursuing Ph.D., MBA",
        role: "Assistant Professor, M.Phil., Pursuing Ph.D., MBA",
        description:
          "Gold Medalist in M.Phil.; Published Research Papers in Scopus, WoS, ABDC, Published Book Chapter, Active in Counseling, Admissions, and Teaching; Recognized as a dedicated team contributor at both departmental and university levels.",
        image: "/programs/commerce/scbm faculty/Parul.webp",
      },
      {
        name: "Dr. Poonam",
        designation: "Assistant Professor, Ph.D., M.Phil",
        role: "Assistant Professor, Ph.D., M.Phil",
        description:
          "Published Research Papers (Scopus, WoS, ABDC); Contributed to conferences at IIMs, NITs and other reputed institutions; Research interests in Digital Marketing and Finance.",
        image: "/programs/commerce/scbm faculty/Poonam.webp",
      },
      {
        name: "Dr. Neha Arora",
        designation: "Assistant Professor, Ph.D.",
        role: "Assistant Professor, Ph.D.",
        description:
          "Published Research Papers (Scopus, WoS, ABDC); Contributed to conferences at IIMs and other reputed institutions; Research interests in Financial Inclusion, Socio-Economic Development, and Policy Making.",
        image: "/programs/commerce/scbm faculty/neha.webp",
      },
      {
        name: "Ms. Prerna",
        designation: "Assistant Professor, M.Com., UGC NET",
        role: "Assistant Professor, M.Com., UGC NET",
        description:
          "Passionate & Dedicated Educator specializing in Commerce and Finance. Advancing student success through research, innovation, and technology-driven education.",
        image: "/programs/commerce/scbm faculty/prerna.webp",
      },
      {
        name: "Ms. Shivani Taya",
        designation: "Assistant Professor, M.Com., NET, MBA, Pursuing Ph.D. (Commerce)",
        role: "Assistant Professor, M.Com., NET, MBA, Pursuing Ph.D. (Commerce)",
        description:
          "10+ research publications in ABDC, Scopus, UGC CARE, and other journals, and presented at 20+ national and international conferences, 1 national patent, 10+ book chapters.",
        image: "/programs/commerce/scbm faculty/Shivani.webp",
      },
      {
        name: "Divya",
        designation: "Assistant Professor, M.Com. (NET)",
        role: "Assistant Professor, M.Com. (NET)",
        description:
          "Commerce and management faculty with a dedicated focus on core accounting concepts and business mentorship.",
        image: "/programs/commerce/scbm faculty/divya.webp",
      },
      {
        name: "Dr. Nidhi Gehlawat",
        designation: "Assistant Professor, Ph.D. (Human Resource)",
        role: "Assistant Professor, Ph.D. (Human Resource)",
        description:
          "Core specialization in Human Resources, researching human resource dynamics, contemporary management practices, and academic development with publications in Scopus-indexed and ABDC journals.",
        image: "/programs/commerce/scbm faculty/nidhig.webp",
      },
      {
        name: "Mr. Karan Gill",
        designation: "Professor of Practice",
        role: "Professor of Practice",
        description:
          "Entrepreneur with 20+ years of experience in operations (Sales & Marketing), Senior Management Professional across Retail, FMCG, Telecom, and Service/Entertainment sectors.",
        image: "/programs/commerce/scbm faculty/karan.webp",
      },
      {
        name: "Mr. Manish Anand",
        designation: "Professor of Practice",
        role: "Professor of Practice",
        description:
          "VP & CIO with 25+ years of experience, specialized in driving large-scale digital transformations, IT operations, and enabling data-driven enterprises through AI, cloud, and automation.",
        image: "/programs/commerce/scbm faculty/manish.webp",
      },
      {
        name: "Mr. Anil Kumar Shahi",
        designation: "Professor of Practice",
        role: "Professor of Practice",
        description:
          "Consultant & Advisor in operational excellence with 40 years of Leadership roles in Technology Operations Excellence and Management capacities.",
        image: "/programs/commerce/scbm faculty/anil.webp",
      },
      {
        name: "Mr. Harkamal Mangat",
        designation: "Professor of Practice",
        role: "Professor of Practice",
        description:
          "Senior Manager Sales Planning with 28 years of experience, Head Of Sales Planning with demonstrated leadership in automotive sales, business development, and analytical operations.",
        image: "/programs/commerce/scbm faculty/harmangat.webp",
      },
      {
        name: "Dr. Ashutosh Srivastava",
        designation: "Professor of Practice",
        role: "Professor of Practice",
        description:
          "Strategic Advisor, Academic Contributor & Mentor, Supply Chain Management Expert with 30 years of experience across commercial operations and logistics.",
        image: "/programs/commerce/scbm faculty/ashutosh.webp",
      },
      {
        name: "Ms. Arpana Mutt",
        designation: "Professor of Practice",
        role: "Professor of Practice",
        description:
          "24+ years experience, AVP-Capability & Inclusion Strategy, AI-First HR Leader building AI-enabled inclusive workforces, future skills, and fresher skilling programs.",
        image: "/programs/commerce/scbm faculty/arpana.webp",
      },
      {
        name: "Ms. Indu Aggarwal",
        designation: "Professor of Practice",
        role: "Professor of Practice",
        description:
          "Visionary social entrepreneur, transitioned from corporate leadership at HSBC to lead impactful wellness and skill-building initiatives for student development.",
        image: "/programs/commerce/scbm faculty/Indu.webp",
      },
      {
        name: "Mr. Sanjay Aggarwal",
        designation: "Professor of Practice",
        role: "Professor of Practice",
        description:
          "Entrepreneur, Mindset Coach, Business Growth Strategist. Established entrepreneurial learning cells and impactful coaching sessions for leadership development.",
        image: "/programs/commerce/scbm faculty/Sanjay.webp",
      },
      {
        name: "Dr. Neeraj Rana",
        designation: "Associate Professor, Ph.D. (Management), MBA, M.Com.",
        role: "Associate Professor, Ph.D. (Management), MBA, M.Com.",
        description:
          "Published 20+ Research Papers (ABDC, Scopus, WoS, UGC Care); Contributed 5 Edited Books; Supervising Ph.D. scholars; Holds 2 UK Designs & 1 Indian Patent; Awarded Best Paper at IEEE Conference.",
        image: "/programs/commerce/scbm faculty/NeerajRana.webp",
      },
      {
        name: "Ms. Anjali Ahuja",
        designation: "Assistant Professor, M.Phil., MBA, M.Com. Pursuing Ph.D.",
        role: "Assistant Professor, M.Phil., MBA, M.Com. Pursuing Ph.D.",
        description:
          "Authored 'Principles of Banking'; Published in Scopus/ABDC Journals; 3 years corporate experience at HDFC Bank; Recipient of Best Teacher and Researcher Awards.",
        image: "/programs/commerce/scbm faculty/Anjali.webp",
      },
      {
        name: "Dr. Pooja Gupta",
        designation: "Associate Professor, Ph.D.",
        role: "Associate Professor, Ph.D.",
        description:
          "Expert in Behavioral Finance; Coordinator of IEDC Cell at Geeta University; Contributed to research and institutional development in management and finance.",
        image: "/programs/commerce/scbm faculty/Pooja-Gupta.webp",
      },
      {
        name: "Dr. Nidhi Gupta",
        designation: "Assistant Professor, Ph.D., UGC NET",
        role: "Assistant Professor, Ph.D., UGC NET",
        description:
          "Ph.D. in Management; researcher, educator, and author with publications in reputed Scopus and ABDC-indexed journals.",
        image: "/programs/commerce/scbm faculty/nidhigupta.webp",
      },
      {
        name: "Dr. Anupama",
        designation: "Assistant Professor, Ph.D. (Management), MBA, M.Com",
        role: "Assistant Professor, Ph.D. (Management), MBA, M.Com",
        description:
          "Published and presented 40+ Research Papers (Scopus, ABDC, WoS); UGC-NET-JRF in Management; Holds Multiple Patents; Specialised in HR and Marketing.",
        image: "/programs/commerce/scbm faculty/Anupama.webp",
      },
      {
        name: "Dr. Rekha Narang",
        designation: "Professor, Ph.D.",
        role: "Professor, Ph.D.",
        description:
          "Professor specializing in Research Methodologies, Quantitative Techniques, Statistics, and Financial Decision Modeling.",
        image: "/programs/commerce/scbm faculty/rekha.webp",
      },
    ],
  },

  placement: {
    eyebrow: "Placements & Careers",
    title: "Placement Excellence Speaks for Itself",
    subtitle: "A career-focused business ecosystem backed by strong recruiter relationships, consistent offers, and industry-ready student preparation.",
    heroImage: "/uniimage.webp",
    heroNoteTitle: "Industry-ready business graduates",
    heroNoteText: "Built through academic rigor, professional development, and placement-focused mentoring.",
    stats: [
      { value: "40 LPA", label: "Highest Package", iconName: "Award" },
      { value: "550+", label: "Recruiters", iconName: "Building2" },
      { value: "3500+", label: "Job Offers", iconName: "BriefcaseBusiness" },
    ],
    recruiters: [
      { name: "amazon", color: "#232f3e", logo: "/images/recruiters/amazon.png" },
      { name: "IndiaMART", color: "#1b2b66", logo: "/images/recruiters/indiamart.png" },
      { name: "upGrad", color: "#ef3340", logo: "/images/recruiters/upgrad.png" },
      { name: "zomato", color: "#e23744", logo: "/images/recruiters/zomato.png" },
      { name: "ProGrad", color: "#1c6dd0", logo: "/images/recruiters/prograd.png" },
      { name: "PHILIPS", color: "#1476bd", logo: "/images/recruiters/philips.png" },
      { name: "Central Park", color: "#d6a800", logo: "/images/recruiters/central-park.png" },
      { name: "Profunnel", color: "#168acb", logo: null },
      { name: "Ubiquiti", color: "#5b6978", logo: "/images/recruiters/ubiquiti.png" },
      { name: "Gemini Solutions", color: "#a83cb6", logo: "/images/recruiters/gemini-solutions.png" },
      { name: "Chegg", color: "#ef6c00", logo: "/images/recruiters/chegg.png" },
      { name: "jaro education", color: "#5c6b7a", logo: "/images/recruiters/jaro-education.png" },
      { name: "policybazaar", color: "#2b66c2", logo: "/images/recruiters/policybazaar.png" },
      { name: "Aditya Birla Capital", color: "#c4242d", logo: "/images/recruiters/aditya-birla-capital.png" },
      { name: "Axis Bank", color: "#9d245d", logo: null },
      { name: "HDFC Life", color: "#d71f26", logo: "/images/recruiters/hdfc-life.png" },
      { name: "paytm", color: "#1d4f9a", logo: "/images/recruiters/paytm.png" },
      { name: "Bajaj Capital", color: "#e32126", logo: "/images/recruiters/bajaj-capital.png" },
    ],
    avgPackage: "₹4.39 LPA",
    avgPackageNote: "The ₹4-6 LPA category reflects balanced growth and wide industry acceptance of Geeta University graduates.",
    packageBars: [
      { label: "Upto 4 LPA", value: 153, width: "100%" },
      { label: "₹4-6 LPA", value: 65, width: "42%" },
      { label: "₹6-8 LPA", value: 31, width: "20%" },
      { label: "₹8-10 LPA", value: 31, width: "20%" },
    ],
    disclaimer: "Disclaimer: Placement data shared is up to March 2026. The 2025-26 placement session is still in progress and will continue until July.",
    sectorChartImage: "/chart.png",
    sectorLegend: [
      { label: "Sales & Marketing", value: "42.3%", color: "#f2ad00" },
      { label: "HR & Operations", value: "16.4%", color: "#ef6a22" },
      { label: "IT & Software", value: "13.2%", color: "#ef2856" },
      { label: "Core Engineering", value: "10.0%", color: "#df4ab3" },
      { label: "Finance & Accounting", value: "8.9%", color: "#25aee4" },
      { label: "Others", value: "3.2%", color: "#16b6bf" },
      { label: "Digital Marketing", value: "2.8%", color: "#74c84a" },
      { label: "Healthcare Consulting", value: "2.1%", color: "#f0cf1c" },
      { label: "Education", value: "1.1%", color: "#f5a623" },
    ],
  },

  testimonials: [
    {
      name: "Tushar Singla",
      pkg: "₹12.0 LPA",
      company: "Amazon",
      role: "Operations & Business Analyst",
      quote:
        "The practical case-based learning and advanced analytics modules at the School of Commerce & Business Management prepared me for high-stakes problem-solving at Amazon.",
      image: "/bba photo.jpeg",
    },
    {
      name: "Sneha Verma",
      pkg: "₹8.5 LPA",
      company: "HDFC Life",
      role: "Corporate Finance Specialist",
      quote:
        "The ACCA-aligned curriculum and financial modeling training gave me strong analytical and strategic skills that helped me secure a high-growth finance role.",
      image: "/uniimage.webp",
    },
    {
      name: "Akash Sharma",
      pkg: "₹7.5 LPA",
      company: "Zomato",
      role: "Growth & Brand Strategist",
      quote:
        "From digital marketing masterclasses to mock corporate pitches, the Geeta Finishing School program built the confidence I needed to drive growth in dynamic corporate environments.",
      image: "/bba photo.jpeg",
    },
    {
      name: "Ritika Goyal",
      pkg: "₹6.8 LPA",
      company: "Policybazaar",
      role: "Key Account Manager",
      quote:
        "The industry interactions and placement drives at Geeta University helped me understand market dynamics and land an exciting corporate career.",
      image: "/uniimage.webp",
    },
  ],

  learningSpaces: {
    title: "World-Class Business & Management Infrastructure",
    description:
      "Students learn in high-tech simulation environments designed to mirror modern corporate boardrooms, financial trading floors, and startup incubators:",
    /*
    spaces: [
      {
        title: "FinTech & Data Analytics Simulation Lab",
        desc: "Equipped with financial modeling tools, Power BI, Excel Advanced, Python for finance, and algorithmic trading simulators.",
        icon: "",
      },
      {
        title: "Harvard-Style Case Study Theatres",
        desc: "Acoustically designed tiered classrooms configured for interactive case discussions, debates, and peer learning.",
        icon: "",
      },
      {
        title: "Corporate Incubation & Startup Lab",
        desc: "Dedicated co-working spaces, mentor clinics, and prototyping resources for student entrepreneurs.",
        icon: "",
      },
      {
        title: "Group Discussion & Mock Interview Suites",
        desc: "Professional video-recorded corporate interview suites and boardroom simulation chambers for placement grooming.",
        icon: "",
      },
      {
        title: "Digital Marketing & Brand Strategy Studio",
        desc: "Equipped for SEO/SEM campaign simulations, social media analytics, and digital brand content creation.",
        icon: "",
      },
      {
        title: "Global Trade & Supply Chain Simulation Suite",
        desc: "Interactive software tools for global customs documentation, logistics tracking, and cross-border trade analytics.",
        icon: "",
      },
    ],
    */
    gallery: [
      {
        src: "/spbsb-immersive-classroom.jpg",
        title: "Case Study Amphitheatre",
        caption: "Tiered learning environment for strategic discussions and real-world case analysis.",
      },
      {
        src: "/spbsb-budget-analysis-2026.png",
        title: "Budget & Financial Analytics Lab",
        caption: "Students conducting econometric evaluations and corporate valuation models.",
      },
      {
        src: "/bba photo.jpeg",
        title: "Executive Presentation Studio",
        caption: "Students pitching startup proposals and marketing campaigns to industry panels.",
      },
      {
        src: "/campus-life/facility-classrooms.jpg",
        title: "Smart Collaborative Classroom",
        caption: "Technology-enabled active learning classrooms with modern audio-visual systems.",
      },
      {
        src: "/campus-life/facility-labs.jpg",
        title: "Business Computing & Data Lab",
        caption: "High-performance computing lab for analytics, modeling, and ERP training.",
      },
      {
        src: "/campus-life/facility-library.jpg",
        title: "Central Management Library",
        caption: "Extensive repository of global business journals, case studies, and research papers.",
      },
      {
        src: "/campus-life/facility-auditorium.jpg",
        title: "University Grand Auditorium",
        caption: "State-of-the-art venue for national conferences, conclaves, and guest lectures.",
      },
      {
        src: "/campus-life/facility-conference.jpg",
        title: "Executive Boardroom Suite",
        caption: "Simulation chamber for corporate meetings, negotiations, and leadership debates.",
      },
      {
        src: "/campus-life/facility-cafeteria.jpg",
        title: "Student Cafeteria & Lounge",
        caption: "Vibrant student collaboration space.",
      },
    ],
    /*
    previousGalleryWithLabels: [
      { src: "/spbsb-infrastructure-glimpses/computer-lab.jpeg" },
      { src: "/spbsb-infrastructure-glimpses/library.jpeg" },
      { src: "/spbsb-infrastructure-glimpses/auditorium.jpeg" },
      { src: "/spbsb-infrastructure-glimpses/conference-room.jpeg" },
      { src: "/spbsb-infrastructure-glimpses/seminar-hall-1.jpeg" },
      { src: "/spbsb-infrastructure-glimpses/classroom.jpeg" },
    ],
    */
    closingNote:
      "All facilities are crafted to provide authentic corporate readiness, strategic decision-making ability, and executive presence.",
  },

  /*
  careerPathways: {
    title: "Your Management Degree. Endless Corporate Opportunities.",
    description:
      "A commerce & management degree from Geeta University opens doors to leadership, finance, analytics, and entrepreneurial roles globally:",
    pathways: [
      {
        area: "Financial Analysis & FinTech Consulting",
        pathway: "Corporate valuation, investment banking, digital payments strategy, and algorithmic financial modeling.",
        icon: "",
      },
      {
        area: "Business Analytics & Enterprise Growth",
        pathway: "Data-driven business decisions, market intelligence, customer analytics, and enterprise data strategy.",
        icon: "",
      },
      {
        area: "Brand Strategy & Digital Marketing",
        pathway: "Omnichannel brand management, digital performance marketing, growth hacking, and market research.",
        icon: "",
      },
      {
        area: "International Trade & Supply Chain Management",
        pathway: "Cross-border logistics, import-export compliance, global procurement, and freight operations.",
        icon: "",
      },
      {
        area: "Corporate Accounting, Audit & Tax (ACCA/CPA)",
        pathway: "International financial reporting (IFRS), corporate audit, risk assurance, and forensic accounting.",
        icon: "",
      },
      {
        area: "Strategic Human Resource & Talent Leadership",
        pathway: "Talent acquisition, organizational development, HR analytics, and executive corporate coaching.",
        icon: "",
      },
      {
        area: "Entrepreneurship & Family Business Governance",
        pathway: "Venture founding, scaling operations, angel fundraising, and strategic family business transformation.",
        icon: "",
      },
    ],
    notableRoles: [
      { name: "Investment Banker" },
      { name: "Business Analyst" },
      { name: "Financial Controller" },
      { name: "Brand Manager" },
      { name: "Digital Growth Lead" },
      { name: "Supply Chain Manager" },
      { name: "Tax & Audit Consultant" },
      { name: "HR Business Partner" },
      { name: "FinTech Product Lead" },
      { name: "Management Consultant" },
      { name: "Startup Founder" },
      { name: "Corporate Strategist" },
    ],
  },
  */

  brochure: {
    title: "Download Commerce & Management Brochure",
    description:
      "Explore comprehensive curriculum guides for BBA, B.Com, MBA, ACCA certifications, faculty profiles, and placement track records.",
    fileUrl: "https://geetauniversity.edu.in/uploads/all/1892/GU-Brochure-2026-27.pdf",
    fileName: "School_of_Management_Brochure.pdf",
  },

  /*
  experts: {
    eyebrow: "School of Business & Management",
    title: "Learn from 5 Categories of Experts",
    intro: "A layered learning ecosystem where academic depth, professional readiness, technical fluency, and industry insight come together without overwhelming the student journey.",
    feature: {
      kicker: "Curated Mentorship",
      title: "Five expert streams. One confident business graduate.",
      description: "Students learn from faculty, technologists, finishing-school coaches, and industry practitioners so classroom concepts turn into workplace capability.",
      stats: [
        { value: "5", label: "Expert categories shaping the curriculum" },
        { value: "360°", label: "Academic, technical, and career readiness" },
      ],
    },
    categories: [
      {
        number: 1,
        title: "Core Business Faculty",
        subtitle: "Building Strong Management Foundations",
        points: [
          "Experienced academicians and researchers",
          "Management, Finance, Marketing & HR Experts",
          "Industry-aligned, case-based learning",
          "Academic and career mentoring",
        ],
        iconName: "TrendingUp",
        ribbon: "#0A1F44",
      },
      {
        number: 2,
        title: "Interdisciplinary Faculty",
        subtitle: "Learning Beyond Business",
        points: [
          "Faculty from diverse disciplines",
          "Exposure to Psychology, Technology & Design Thinking",
          "Cross-functional problem-solving approach",
          "Broader perspective for modern business challenges",
        ],
        iconName: "Users",
        ribbon: "#0F2A56",
      },
      {
        number: 3,
        title: "Geeta Technical Hub (GTH)",
        subtitle: "Future-Ready Technical Skills",
        points: [
          "Hands-on workshops and live projects",
          "AI & Generative AI applications",
          "Excel, Data Analytics & Power BI",
          "Digital Marketing and Automation Tools",
        ],
        iconName: "GraduationCap",
        ribbon: "#1B4B8F",
      },
      {
        number: 4,
        title: "Geeta Finishing School",
        subtitle: "Career Readiness & Professional Development",
        points: [
          "Communication and business etiquette",
          "Aptitude and analytical skills",
          "Personality development and confidence building",
          "Interview and placement preparation",
        ],
        iconName: "BookOpen",
        ribbon: "#2E63B8",
      },
      {
        number: 5,
        title: "Industry Practitioners",
        subtitle: "Learning Directly from Industry",
        points: [
          "Corporate leaders and domain experts",
          "Industry-aligned, skill-based learning",
          "Entrepreneurship and family business insights",
          "Data Analytics, Python & Digital Marketing",
        ],
        iconName: "HardHat",
        ribbon: "#5B8FD9",
      },
    ],
  },
  */

  corporateConnect: {
    eyebrow: "INDUSTRY INTERACTION & CORPORATE SESSIONS",
    title: "Corporate Connect",
    description:
      "Geeta University hosted a series of impactful academic and industry-oriented events, panel discussions, and student interactive sessions, connecting theoretical foundations with real-world corporate insights.",
    videos: [
      { id: "ydEwjmXEMoE" /* , title: "Corporate Connect Session 1" */ },
      { id: "Vq3WHOM95do" /* , title: "Corporate Connect Session 2" */ },
      { id: "1UZgy4u7JBY" /* , title: "Corporate Connect Session 3" */ },
      { id: "pYmHzeBzYLk" /* , title: "Corporate Connect Session 4" */ },
      { id: "XaVC8nwH8Wo" /* , title: "Corporate Connect Session 5" */ },
      { id: "c5SV0KTIEWU" /* , title: "Corporate Connect Session 6" */ },
      { id: "lyML175cO4A" /* , title: "Corporate Connect Session 7" */ },
      { id: "Ysvn5sxTn9I" /* , title: "Corporate Connect Session 8" */ },
    ],
    /*
    events: [
      {
        title: "Budget Analysis 2026",
        image: "/spbsb-budget-analysis-2026.png",
        alt: "Budget Analysis 2026 panel discussion at Geeta University",
        text: "The School of Commerce and Business Management at Geeta University successfully hosted a Panel Discussion on Budget Analysis - 2026. The event hit its mark by smoothly integrating academic theories with real-world industry perspectives. Our expert panelists examined closely the latest fiscal policies, providing our students and faculty with a roadmap to understanding the economic landscape of the coming year.",
        imageFirst: true,
      },
      {
        title: "FinTech Conclave 2026",
        image: "/spbsb-fintech-conclave-2026.jpg",
        alt: "FinTech Conclave 2026 panel discussion at Geeta University",
        text: "FinTech Conclave 2026 at Geeta University hosted a panel on Intelligent Finance: AI, Innovation & the Future of FinTech. Experts discussed the startup ecosystem, regulatory frameworks, and the roles of RBI, SEBI, and NPCI. The session highlighted technological skills driving GCC growth and expanding BFSI opportunities, while guiding students on essential skills required for careers in the FinTech industry.",
        imageFirst: false,
      },
      {
        title: "Workshop on Enabling Indigenous Technologies",
        image: "/spbsb-indigenous-technologies-workshop.jpg",
        alt: "Workshop on Enabling Indigenous Technologies group at Geeta University",
        text: "Geeta University hosted a Workshop on Enabling Indigenous Technologies, organized by the State Support Mission (Haryana Government) in collaboration with DST-TEC, Panjab University. The event bridged the gap between academia and industry, showcasing innovative research, especially in textiles. It fostered dialogue between researchers and industry leaders, enabling practical solutions to real-world challenges while promoting applied research and sustainable business development.",
        imageFirst: true,
      },
      {
        title: "Workshop on Cyber Security by EC Council",
        image: "/spbsb-cyber-security-workshop.jpg",
        alt: "Cyber Security workshop by EC Council group at Geeta University",
        text: "The School of Commerce and Business Management at Geeta University organized a Cyber Security workshop by EC-Council by Mr. Vikram Kumar Jha, Senior Manager and MCTS-certified trainer. The session covered cyber threats, phishing, fraud, and malware, along with hands-on tools for risk prevention. Students learned safe browsing, digital responsibility, and fundamentals of securing networks, data, and servers to safeguard organizational assets.",
        imageFirst: false,
      },
      {
        title: "Workshop on Design Thinking",
        image: "/spbsb-design-thinking-workshop.jpg",
        alt: "Design Thinking workshop at Geeta University",
        text: "The School of Commerce and Business Management at Geeta University hosted a Design Thinking workshop featuring Prof. Vijay Ghei. The session explored empathy, ideation, and prototyping, emphasizing human-centered approaches like empathy mapping. Faculty and students learned to create innovative solutions, enabling them to address real-world challenges while fostering critical and creative thinking for a future-ready, problem-solving oriented curriculum.",
        imageFirst: true,
      },
    ],
    */
  },

  cta: {
    heading: "Your Future in Business Starts Here",
    quote: "“",
    paragraphs: [
      "Take the next step towards a successful and future-ready career with the School of Commerce & Business Management at Geeta University.",
      "Join an ecosystem that blends academic excellence, innovation, industry exposure, leadership development, and career-focused education.",
    ],
    otherPrograms: [
      "Engineering",
      "Computer Applications",
      "Forensic Science",
      "Nutrition & Dietetics",
      "Hotel Management",
      "Humanities",
    ],
    qrLabel: "Admissions 2026–27",
    qrCta: "Scan to Apply",
    qrImage: "/qr.png",
    applyLink: "/admissions",
    helpline: "+91 92787 68000",
    website: "www.geetauniversity.edu.in",
    campusAddress: "NH-71A, Naultha Panipat, Haryana (132145), India.",
  },

  courses: [
    {
      title: "Under-Graduate Programs",
      level: "Under-Graduate",
      duration: "3/4 Years",
      eligibility:
        "Passed 10+2 examination (in any stream) with at least 50% marks in aggregate from any recognized board.",
      programs: [
        {
          name: "BBA Hons. (Bachelor of Business Administration)",
          program: "BBA Hons. (Bachelor of Business Administration)",
          href: "/programs/school-of-commerce-and-business-management/bba",
          duration: "3/4 Years",
          eligibility:
            "Passed 10+2 examination with at least 50% marks in aggregate from any recognized board.",
          specializations: [
            { name: "General Business Administration", href: "/programs/school-of-commerce-and-business-management/bba" },
            { name: "International Accounting with ACCA UK", href: "/programs/school-of-commerce-and-business-management/bba-international-accounting-acca" },
            { name: "Artificial Intelligence & Data Analytics", href: "/programs/school-of-commerce-and-business-management/bba-ai-data-analytics" },
            { name: "Human Resource Management", href: "/programs/school-of-commerce-and-business-management/bba-hrm" },
            { name: "Import & Export Management", href: "/programs/school-of-commerce-and-business-management/bba-import-export" },
            { name: "Banking & Finance", href: "/programs/school-of-commerce-and-business-management/bba-banking-finance" },
            { name: "Marketing", href: "/programs/school-of-commerce-and-business-management/bba-marketing" },
            { name: "FinTech", href: "/programs/school-of-commerce-and-business-management/bba-fintech" },
            { name: "Digital Marketing", href: "/programs/school-of-commerce-and-business-management/bba-digital-marketing" },
            { name: "Entrepreneurship & Family Business", href: "/programs/school-of-commerce-and-business-management/bba-entrepreneurship" },
          ],
        },
        {
          name: "B.Com. Hons. (Bachelor of Commerce)",
          program: "B.Com. Hons. (Bachelor of Commerce)",
          href: "/programs/school-of-commerce-and-business-management/bcom",
          duration: "3/4 Years",
          eligibility: "Passed 10+2 examination with at least 50% marks.",
          specializations: [
            { name: "General Commerce & Accountancy", href: "/programs/school-of-commerce-and-business-management/bcom" },
            { name: "International Accounting with ACCA UK", href: "/programs/school-of-commerce-and-business-management/bcom-international-accounting-acca" },
            { name: "Auditing & Taxation", href: "/programs/school-of-commerce-and-business-management/bcom-auditing-taxation" },
            { name: "Banking & Insurance", href: "/programs/school-of-commerce-and-business-management/bcom-banking-insurance" },
            { name: "Advance Accounting", href: "/programs/school-of-commerce-and-business-management/bcom-advance-accounting" },
          ],
        },
      ],
    },
    {
      title: "Post-Graduate Programs",
      level: "Post-Graduate",
      duration: "2 Years",
      eligibility:
        "Passed Bachelor's Degree of minimum 3 years duration with at least 50% marks in aggregate.",
      programs: [
        {
          name: "MBA (Master of Business Administration)",
          program: "MBA (Master of Business Administration)",
          href: "/programs/school-of-commerce-and-business-management/mba",
          duration: "2 Years",
          eligibility:
            "Passed Bachelor's Degree of minimum 3 years duration with at least 50% marks in aggregate.",
          specializations: [
            { name: "Finance", href: "/programs/school-of-commerce-and-business-management/mba-finance" },
            { name: "Marketing", href: "/programs/school-of-commerce-and-business-management/mba-marketing" },
            { name: "Human Resource Management", href: "/programs/school-of-commerce-and-business-management/mba-hrm" },
            { name: "Pharmaceutical Management", href: "/programs/school-of-commerce-and-business-management/mba-pharmaceutical-management" },
            { name: "Supply Chain Management", href: "/programs/school-of-commerce-and-business-management/mba-supply-chain-management" },
          ],
        },
        {
          name: "M.Com. (Master of Commerce)",
          program: "M.Com. (Master of Commerce)",
          href: "/programs/school-of-commerce-and-business-management/mcom",
          duration: "2 Years",
          eligibility:
            "Passed B.Com. with a minimum of 50% marks in the qualifying examination from a recognized university.",
        },
      ],
    },
    /* {
      title: "Doctoral Programs",
      level: "Doctoral (Ph.D.)",
      duration: "Minimum 3 Years",
      eligibility:
        "Relevant Master's degree in Management / Commerce or allied discipline with at least 55% marks.",
      programs: [
        {
          name: "Ph.D. in Management & Commerce",
          program: "Ph.D. in Management & Commerce",
          href: "/phd-management",
          duration: "Minimum 3 Years",
          eligibility:
            "Master's degree in Management / Commerce or allied discipline with a minimum of 55% aggregate marks.",
          specializations: [
            { name: "Strategic Management & Governance", href: "/phd-management" },
            { name: "Financial Markets & Banking", href: "/phd-management" },
            { name: "Digital Marketing & Consumer Insights", href: "/phd-management" },
            { name: "Organizational Behavior & HRM", href: "/phd-management" },
          ],
        },
      ],
    }, */
  ],

  dean: {
    name: "Dr. Indira Bhardwaj",
    designation: "Dean, School of Commerce & Business Management",
    image: "/programs/commerce/indira.png",
    message: "I am pleased to welcome you to the School of Commerce & Business Management at Geeta University. Here, academic rigor meets hands-on experiential learning to mould future leaders.",
    schoolName: "School of Commerce & Business Management",
  },

  faqs: [
    {
        "q": "What programmes are offered by the School of Commerce & Business Management at Geeta University?",
        "a": "The School offers undergraduate BBA and B.Com. pathways along with M.Com. at the postgraduate level. Its programmes include specialised routes in finance, marketing, human resources, AI and data analytics, international accounting, FinTech, digital marketing, entrepreneurship, banking and finance, auditing and taxation, and supply chain management.",
        "category": "Admissions & Eligibility"
    },
    {
        "q": "What is the eligibility for BBA programmes?",
        "a": "The School lists 10+2 with at least 50% marks in the qualifying examination as the eligibility requirement for BBA programmes.",
        "category": "Admissions & Eligibility"
    },
    {
        "q": "What is the eligibility for B.Com. programmes?",
        "a": "The School lists 10+2 with at least 50% marks as the eligibility requirement for B.Com. programmes.",
        "category": "Admissions & Eligibility"
    },
    {
        "q": "What is the eligibility for M.Com.?",
        "a": "Applicants should have passed B.Com. with a minimum of 50% marks in the qualifying examination.",
        "category": "Admissions & Eligibility"
    },
    {
        "q": "Can students from any Class 12 stream apply for BBA?",
        "a": "The general BBA eligibility is 10+2 (in any stream) with at least 50% marks.",
        "category": "Admissions & Eligibility"
    },
    {
        "q": "How do I choose between BBA and B.Com. after Class 12?",
        "a": "BBA is more focused on business administration, management and leadership, while B.Com. gives greater emphasis to commerce, accounting, taxation and finance. The right choice depends on the student's interests and intended career direction.",
        "category": "Programmes & Specialisations"
    },
    {
        "q": "What specialisations are available in BBA?",
        "a": "The School lists BBA specializations in Business Administration, International Accounting with ACCA UK, Artificial Intelligence & Data Analytics, Human Resource Management, Import & Export Management, Banking & Finance, Marketing, FinTech, Digital Marketing, and Entrepreneurship & Family Business.",
        "category": "Programmes & Specialisations"
    },
    {
        "q": "What specialisations are available in B.Com.?",
        "a": "The School lists B.Com. pathways in General Commerce, International Accounting with ACCA UK, Auditing & Taxation, Banking & Insurance, and Advanced Accounting.",
        "category": "Programmes & Specialisations"
    },
    {
        "q": "What is special about B.Com. International Accounting with ACCA UK?",
        "a": "The programme combines undergraduate commerce and accounting education with the ACCA pathway, covering areas such as financial reporting, auditing, taxation, financial management and corporate governance.",
        "category": "Programmes & Specialisations"
    },
    {
        "q": "Is BBA FinTech suitable for a student interested in both finance and technology?",
        "a": "Yes. The programme brings together business and financial concepts with areas such as blockchain, AI and data analytics, making it relevant for students interested in technology-driven financial services.",
        "category": "Programmes & Specialisations"
    },
    {
        "q": "What does BBA in AI & Data Analytics focus on?",
        "a": "The programme combines business administration with AI and data analytics, helping students understand how data and technology can support better business decisions.",
        "category": "Programmes & Specialisations"
    },
    {
        "q": "What does BBA in Digital Marketing cover?",
        "a": "The programme covers digital marketing, social media management, market research, consumer psychology, brand development and data analytics.",
        "category": "Programmes & Specialisations"
    },
    {
        "q": "What does BBA in Entrepreneurship & Family Business prepare students for?",
        "a": "It is designed for students who want to start, manage or grow a business, particularly entrepreneurial and family-owned ventures, while building broader management and leadership skills.",
        "category": "Programmes & Specialisations"
    },
    {
        "q": "What does BBA in Import & Export Management cover?",
        "a": "The programme focuses on international trade, including export-import procedures, documentation, payments, sourcing, customs, global logistics and supply-chain processes.",
        "category": "Programmes & Specialisations"
    },
    {
        "q": "Is the School's teaching mainly theoretical or practice-oriented?",
        "a": "The School places strong emphasis on experiential learning through role plays, simulations, real-world case studies, business games, internships and industry interaction.",
        "category": "Curriculum & Learning Experience"
    },
    {
        "q": "Will students work on real business cases and simulations?",
        "a": "Yes. Real-world case studies, simulations, role plays and business games help students apply concepts in practical business situations.",
        "category": "Curriculum & Learning Experience"
    },
    {
        "q": "What practical business skills can students develop alongside their degree?",
        "a": "Students can develop skills such as Excel and Power BI, digital marketing, leadership and negotiation, WordPress and HTML basics, corporate attitude, career skills and other competency-based abilities.",
        "category": "Curriculum & Learning Experience"
    },
    {
        "q": "Does the School offer flexible or customised learning options?",
        "a": "Yes. The School highlights degree customisation, passion-based electives, research-integrated options and competency-based modules.",
        "category": "Curriculum & Learning Experience"
    },
    {
        "q": "How does the curriculum connect classroom learning with industry requirements?",
        "a": "Academic concepts are supported by case studies, simulations, internships, industry interaction, practical skill development and pre-placement preparation so students can relate learning to workplace situations.",
        "category": "Curriculum & Learning Experience"
    },
    {
        "q": "Are research opportunities available at undergraduate and postgraduate level?",
        "a": "The School highlights research-integrated learning and academic research opportunities. Students may engage in research projects depending on their programme, faculty guidance and available opportunities.",
        "category": "Curriculum & Learning Experience"
    },
    {
        "q": "Do commerce and management students get internship opportunities?",
        "a": "Yes. Internship-based learning is an important part of the School's practical learning approach, with programme-level industry exposure built into the student experience.",
        "category": "Industry Exposure, Internships & Global Opportunities"
    },
    {
        "q": "How does an internship benefit a BBA or B.Com. student?",
        "a": "An internship helps students apply classroom knowledge, understand professional work culture, develop practical skills and gain experience that can strengthen their career profile.",
        "category": "Industry Exposure, Internships & Global Opportunities"
    },
    {
        "q": "Does the School offer international internships?",
        "a": "The School highlights international internship opportunities as part of its global exposure initiatives. Availability may depend on the programme, cohort and applicable arrangements.",
        "category": "Industry Exposure, Internships & Global Opportunities"
    },
    {
        "q": "Are student exchange or international study opportunities available?",
        "a": "Yes. The School highlights international study tours and structured exchange opportunities that expose students to different academic and business environments.",
        "category": "Industry Exposure, Internships & Global Opportunities"
    },
    {
        "q": "What kind of industry interaction do students receive?",
        "a": "Students can interact with industry through corporate sessions, expert talks, case studies, simulations, internships, conclaves, industry collaborations and practical business activities.",
        "category": "Industry Exposure, Internships & Global Opportunities"
    },
    {
        "q": "Can students gain exposure to multinational companies?",
        "a": "Yes. The School highlights corporate and MNC interaction, giving students opportunities to understand how large organisations operate. Specific company participation can vary by year and programme.",
        "category": "Industry Exposure, Internships & Global Opportunities"
    },
    {
        "q": "What career options are available after BBA?",
        "a": "Depending on their specialisation and skills, BBA graduates can explore marketing, sales, human resources, finance, operations, business development, digital marketing, banking, analytics, entrepreneurship and other business roles.",
        "category": "Career Opportunities & Higher Studies"
    },
    {
        "q": "What career options are available after B.Com.?",
        "a": "B.Com. graduates can pursue accounting, auditing, taxation, banking, financial analysis, business analysis, insurance and other corporate roles. They can also pursue professional qualifications or higher studies.",
        "category": "Career Opportunities & Higher Studies"
    },
    {
        "q": "Can B.Com. students pursue CA, CS, CMA or higher management studies after graduation?",
        "a": "Yes. A B.Com. background can provide a foundation for professional qualifications such as CA, CS and CMA, as well as postgraduate study and other higher-management pathways.",
        "category": "Career Opportunities & Higher Studies"
    },
    {
        "q": "What opportunities are available after M.Com.?",
        "a": "M.Com. graduates can explore roles in accounting, finance, commerce and education, while also pursuing research, UGC NET, Ph.D. and other higher-study pathways subject to the relevant eligibility requirements.",
        "category": "Career Opportunities & Higher Studies"
    },
    {
        "q": "What placement support is available to students?",
        "a": "The School highlights placement support, pre-placement training, LinkedIn and mock-interview preparation, industry interaction and other career-readiness activities.",
        "category": "Career Opportunities & Higher Studies"
    },
    {
        "q": "Which recruiters are associated with the School?",
        "a": "The School lists organisations such as Amazon, ProGrad, Capgemini, Jaro Education, Tech Mahindra, IBM, HCL and Philips among its recruiter ecosystem.",
        "category": "Career Opportunities & Higher Studies"
    },
    {
        "q": "What placement figures are displayed by the School?",
        "a": "The School currently displays up to ₹40 LPA as the highest package, 550+ recruiters and 3,500+ job offers. These are broad placement figures and should not be interpreted as a guaranteed outcome for every student.",
        "category": "Career Opportunities & Higher Studies"
    },
    {
        "q": "What kind of faculty teach at the School of Commerce & Business Management?",
        "a": "The School has faculty and mentors with expertise across commerce, management, finance, marketing, HR and related business disciplines, supported by professionals with industry experience.",
        "category": "Faculty, Mentorship & Student Development"
    },
    {
        "q": "Do students learn from industry professionals as well as academics?",
        "a": "Yes. The School highlights professors of practice, industry experts, corporate interaction and practitioner-led learning alongside academic teaching.",
        "category": "Faculty, Mentorship & Student Development"
    },
    {
        "q": "How does the School develop communication and leadership skills?",
        "a": "Students receive exposure to soft-skills training, personality development, leadership activities, negotiation, corporate attitude and career and life skills.",
        "category": "Faculty, Mentorship & Student Development"
    },
    {
        "q": "What is the XEDGE Programme and how does it benefit students?",
        "a": "XEDGE is a student-development initiative focused on corporate attitude, career and life skills, leadership mindset and social responsibility alongside academic learning.",
        "category": "Faculty, Mentorship & Student Development"
    },
    {
        "q": "How does the School prepare students for corporate interviews?",
        "a": "Students can receive support through pre-placement training, mock interviews, LinkedIn preparation, communication and soft-skills development, practical activities and industry exposure.",
        "category": "Faculty, Mentorship & Student Development"
    }
],
};

export const commerceFaqs: CourseFAQItem[] = (commerceSchool.faqs || []).map((item) => ({
  question: item.q || item.question || "",
  answer: item.a || item.answer || "",
  category: item.category || "General",
}));