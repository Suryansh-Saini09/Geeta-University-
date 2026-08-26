export interface RecruiterCompany {
  name: string;
  category: string;
  packageRange?: string;
}

export interface StudentPlacementStory {
  id: string;
  name: string;
  package: string;
  company?: string;
  role?: string;
  image: string;
  quote: string;
  course?: string;
}

export interface RecruiterVoice {
  id: string;
  name: string;
  designation: string;
  company: string;
  image: string;
  quote: string;
}

export interface PlacementStat {
  label: string;
  value: string;
  description: string;
  icon: string;
}

export const placementStats: PlacementStat[] = [
  {
    label: "Highest Package",
    value: "₹1.4 Cr",
    description: "International & Top Tier Offers",
    icon: "trophy",
  },
  {
    label: "Recruiting Partners",
    value: "445+",
    description: "Leading MNCs & Fortune 500s",
    icon: "building",
  },
  {
    label: "Average Package",
    value: "₹4.39 LPA",
    description: "Across All Professional Streams",
    icon: "trending-up",
  },
  {
    label: "Placement Assistance",
    value: "100%",
    description: "CDC Mentorship & Mock Interviews",
    icon: "shield-check",
  },
];

export const placementFaqs = [
  {
    q: "What is the placement record of Geeta University?",
    a: "Geeta University has a consistent and growing placement record with students placed in prominent national and multinational companies across IT, management, pharmacy, allied sciences, and hospitality. The university provides dedicated placement assistance, comprehensive training programs, and industry connections to ensure excellent career outcomes.",
    category: "Placements",
  },
  {
    q: "Which companies visit Geeta University for campus placements?",
    a: "Top recruiters include leading global and domestic corporations such as TCS, Infosys, Wipro, IBM, Capgemini, Tech Mahindra, Reliance, Policy Bazaar, Axis Bank, HDFC Life, Zomato, Cvent, and Amazon, along with high-growth startups offering diverse career roles across technical and managerial domains.",
    category: "Recruiters",
  },
  {
    q: "What is the highest package offered at Geeta University?",
    a: "The highest international package offered has reached up to INR 1.4 Crore PA, with top domestic packages scaling between ₹40 LPA to ₹77.5 LPA, particularly across Engineering, Computer Science, and Business Management programs.",
    category: "Packages",
  },
  {
    q: "Does Geeta University provide 100% placement assistance?",
    a: "Yes, Geeta University provides structured 100% placement assistance through its Career Development Cell (CDC). The support encompasses aptitude training, technical upskilling, resume building, mock interviews, pre-placement talks, and on-campus recruitment drives.",
    category: "Placement Assistance",
  },
  {
    q: "How does Geeta University prepare students for placements?",
    a: "Preparation begins from early semesters via the Geeta Finishing School (GFS) and Geeta Technical Hub (GTH). Programs focus on soft skills, personality grooming, full-stack technologies, industrial certifications, live projects, hackathons, and corporate internships.",
    category: "Training & CDC",
  },
  {
    q: "How many companies visit Geeta University for placements?",
    a: "Over 445+ reputable companies have visited Geeta University and Geeta Group of Institutions for placement and internship drives since inception, offering opportunities across 10+ industry verticals.",
    category: "Recruiters",
  },
  {
    q: "Is Geeta University good for placements in 2026-2027?",
    a: "Geeta University is widely recognized as a premier destination for placements due to its AI-enabled curriculum, interdisciplinary education, robust alumni network, industry-academic partnerships, and a dedicated CDC that continuously aligns student skills with corporate demand.",
    category: "Placements",
  },
];

export const hrVoices: RecruiterVoice[] = [
  {
    id: "hr-1",
    name: "Mr. Vinin",
    designation: "Chief Executive Officer",
    company: "Profunnel Technologies Pvt. Ltd.",
    image: "/placements/hr-vinin.jpg",
    quote:
      "Technical and communication skills of students exceeded expectations. The rigorous training and grooming at Geeta University are clearly aligned with modern industry needs.",
  },
  {
    id: "hr-2",
    name: "Mr. Aman Negi",
    designation: "Recruitment Representative",
    company: "Policy Bazaar",
    image: "/placements/hr-aman.jpg",
    quote:
      "Geeta University students are confident, well-prepared, and have strong communication skills. Their readiness for dynamic corporate roles makes them a reliable talent pool for growing organizations.",
  },
  {
    id: "hr-3",
    name: "Ms. Nidhi Bajpai",
    designation: "Co-Founder & CMO",
    company: "Anixz Solution Pvt. Ltd.",
    image: "/placements/hr-nidhi.jpg",
    quote:
      "Excellent subject knowledge, quick learners, and exceptional clarity of concepts — Geeta University students fit perfectly in academic and tech-based profiles. A truly seamless hiring experience!",
  },
  {
    id: "hr-4",
    name: "Mr. Arun Sharma",
    designation: "Senior Manager",
    company: "The Times of India",
    image: "/placements/hr-arun.jpg",
    quote:
      "Students from Geeta University arrive with strong aptitude and sharp business sense. Their performance during group discussions and technical interviews was highly commendable.",
  },
];

export const placementStories: StudentPlacementStory[] = [
  {
    id: "story-1",
    name: "Mr. Vaibhav Arora",
    package: "INR 1.4 Crore PA",
    image: "/home/Vaibhav.jpg-full.webp",
    quote:
      "Their focus on 360-degree development, mentorship programs, and industry interactions helped me become an entrepreneur and secure an extraordinary global career.",
  },
  {
    id: "story-2",
    name: "Mr. Abhishek Kumar",
    package: "INR 77.5 LPA",
    image: "/home/Abhishek-Kumar-full.webp",
    quote:
      "I’m deeply grateful to Geeta Campus and my mentors for laying the foundation of my career. Coming from a humble background, achieving this package is truly a dream come true.",
  },
  {
    id: "story-3",
    name: "Manik Sharma",
    package: "INR 67.5 LPA",
    image: "/home/Manik.jpg-full.webp",
    quote:
      "Geeta University offers a premier academic and campus life experience. The practical skills I learned here were integral to my success and helped me achieve a ₹67.5 LPA package.",
  },
  {
    id: "story-4",
    name: "Mr. Rakesh",
    package: "INR 52 LPA",
    image: "/home/Rakesh-BTech.webp",
    quote:
      "Engineering at Geeta Campus gave me the skills and confidence to excel in the industry. My journey from campus to securing a 52 LPA package at Reliance has truly been life-changing.",
  },
  {
    id: "story-5",
    name: "Mr. Yakshup Goel",
    package: "40 LPA",
    image: "/home/Yakshup.jpeg-full.webp",
    quote:
      "The two years I spent at Geeta University inspired me to persevere & never give up. The practical lessons learnt here were instrumental in building my professional career.",
  },
  {
    id: "story-6",
    name: "Vikas Bareja",
    package: "34 LPA",
    image: "/home/vikas-full.webp",
    quote:
      "Geeta University provides a nurturing environment. The advanced infrastructure and strong placement support helped me gain the confidence to move into a high-profile corporate role.",
  },
  {
    id: "story-7",
    name: "Shantanu Ojha",
    package: "30 LPA",
    image: "/home/shantanu.jpg-full.webp",
    quote:
      "The holistic campus experience and scholarly environment helped me gain confidence and determination to secure a 30 LPA package.",
  },
  {
    id: "story-8",
    name: "Saransh",
    package: "30 LPA",
    image: "/home/saransh-full.webp",
    quote:
      "Beyond academics, GU individually helped me to grow. The campus environment helped me stay determined towards my goals and become industry-ready.",
  },
  {
    id: "story-9",
    name: "Prikshit",
    package: "30 LPA",
    image: "/home/parikshit.jpg-full.webp",
    quote:
      "Time spent at Geeta University helped bridge the gap between theory and practical industry application, shaping a high-growth trajectory.",
  },
  {
    id: "story-10",
    name: "Rahul Mor",
    package: "25 LPA",
    image: "/home/rahul.jpg-full.webp",
    quote:
      "Structured training, expert mentoring, and placement preparation empowered me to excel in competitive corporate environments.",
  },
  {
    id: "story-11",
    name: "Monty",
    package: "24 LPA",
    image: "/home/Monty.jpg-full.webp",
    quote:
      "Gained confidence and perseverance from Geeta University's learning culture and industry-focused approach to create a solid professional future.",
  },
  {
    id: "story-12",
    name: "Riya",
    package: "22 LPA",
    image: "/home/riya.jpg-full.webp",
    quote:
      "The vibrant campus and established industry exposure led the way to my successful placement, empowering me to thrive in my domain.",
  },
];

export const allRecruiterCompanies: string[] = [
  "POD.AI",
  "Rupeek",
  "Nuwud",
  "Fitelo",
  "Bhanzu",
  "Cvent",
  "Intect",
  "Zomato",
  "V5 Global",
  "Concert",
  "Diotofy",
  "Univest",
  "PayTM",
  "Just Dial",
  "FA Gifts",
  "Maven Jobs",
  "Skytrails",
  "Shopclues",
  "Axis Bank",
  "HDFC Life",
  "Info Edge",
  "Deccan.ai",
  "Tech Crumb",
  "GrapeCity",
  "Lion Group",
  "Anuvaidha",
  "Global LLC",
  "India Mart",
  "Neon Pharma",
  "Carus Labs",
  "MentorKart",
  "Clodzania",
  "Dashverse",
  "Rinex Tech",
  "JJ Handloom",
  "Mat Holdings",
  "Stanza Living",
  "Root Analysis",
  "Rancho Labs",
  "Recruit CRM",
  "i2V Systems",
  "HeroVired",
  "Oyo",
  "Artech",
  "GSR Strategy",
  "Code Mate AI",
  "Empower Edu",
  "Bajaj Capital",
  "Berger Paints",
  "Edu-Versity",
  "Learning Shala",
  "Leeway Hertz",
  "MRI Software",
  "Adani Cement",
  "Dev IT Serv",
  "Indus Salvage",
  "Jainys Cereals",
  "Roop Polymers",
  "Prodesk IT",
  "Oben Electric",
  "75 Way Tech",
  "ACPL Systems",
  "Anix Systems",
  "Cred Resolve",
  "Agrsoft Private",
  "Agrsoft Solutions",
  "AppSquadz",
  "KollegeApply",
  "RAT Forensics",
  "EPUB Solutions",
  "Neptune India",
  "Onika Organics",
  "Stenkem Biolife",
  "V2STech",
  "Yathrath Group",
  "Tech Mahindra",
  "Jaro Education",
  "Big Oh Notation",
  "Corizo Edutech",
  "Mavericks Edu",
  "Mittal Software",
  "StackMentalist",
  "Kavish Tech",
  "Wyre ow Tech",
  "HCL Technologies",
  "Advantage Club",
  "Ken Research",
  "3 Pillar Global",
  "3i Infotech",
  "Sidhi Infonet",
  "RV International",
  "Motto Solution",
  "Ad Live Promotion",
  "Allium IP",
  "AdvantageClub AI",
  "PiSoft Informatics",
  "Kiara Ingredients",
  "Knowledge Center",
  "Globexa Services",
  "Circle Outsourcing",
  "Filtration System Solutions",
  "ICICI Prudential Life Insurance",
  "Appinventiv Technologies",
  "Panacea Smart Solutions",
  "Synergy Labs Technology",
  "Foundation for MSME Clusters",
  "Infollion Research Services",
  "NIIT Learning Systems",
  "Interns Elite Edutech",
  "Aditya Birla Capital",
  "Kotak Life Insurance",
  "Medox Pharmaceuticals",
  "Jay Pay IT Solution",
  "Franciscan Solutions",
  "Hays Business Solutions",
  "Industry Buying",
  "Policy Bazaar",
  "Centricity Wealth Tech",
  "Profunnel Technologies",
  "Josh Technology Group",
  "RemoteState Technology",
  "Step2gen Technologies",
  "Viacation Tourism",
  "Klassify Technologies",
  "Prospecta Software",
  "Savera National Trust",
  "Book My Tour Now",
  "Questhiring",
  "Concentrix",
  "Intellipaat",
  "Truelancer",
  "HDFC Mutual Life",
  "R.K. Marble & Granite",
  "Aspire Teleservices",
  "Finaurt (Referent Advisors)",
  "Agrosoft Private Solutions",
  "Yaksharat Enterprises",
  "DHLS Flooring",
  "Larsen & Toubro",
  "Learning Routes",
  "OM Shakti Textiles",
  "Naukri 123",
  "Tata Green Batteries",
  "Rupeek Academy",
  "Franciscan Solution",
  "75 Way Technologies",
  "Rinex Technologies",
  "Newton School",
  "Digital Marketing Solutions",
  "Global Services LLC",
];

export const placementDriveSnapshots = [
  {
    src: "/placements/drive-1.jpg",
    title: "Infosys Campus Recruitment Drive",
    subtitle: "Over 350+ candidates participated in multi-round technical evaluations.",
  },
  {
    src: "/placements/drive-2.jpg",
    title: "Profunnel & Tech Assessment Session",
    subtitle: "On-campus coding assessment and group discussions with hiring teams.",
  },
  {
    src: "/placements/drive-3.jpg",
    title: "Anixz Solution Technical Interviews",
    subtitle: "One-on-one personal interview rounds with corporate leadership.",
  },
  {
    src: "/placements/drive-4.jpg",
    title: "Corporate HR Panel Discussion",
    subtitle: "Senior industry leaders addressing final-year students on corporate culture.",
  },
  {
    src: "/placements/drive-5.jpg",
    title: "Offer Letter Distribution Ceremony",
    subtitle: "Students celebrating corporate offer letters on placement milestone day.",
  },
];

export const placementDayCollage = [
  {
    src: "/placements/placement-day-1.webp",
    title: "Placement Celebration 2025–26",
    tag: "Milestone Day",
    caption: "Students holding their prestigious corporate placement letters",
  },
  {
    src: "/placements/placement-day-2.webp",
    title: "Corporate Ready Engineers",
    tag: "Future Tech Leaders",
    caption: "B.Tech and M.Tech graduates stepping into leading MNCs",
  },
  {
    src: "/placements/placement-day-3.webp",
    title: "Faculty & Student Triumph",
    tag: "Academic Excellence",
    caption: "Faculty mentors celebrating alongside selected students",
  },
  {
    src: "/placements/placement-day-4.webp",
    title: "Management & Business Stars",
    tag: "Corporate Trainees",
    caption: "MBA and BBA students placed in BFSI, FMCG, and Consulting",
  },
  {
    src: "/placements/placement-day-5.webp",
    title: "Pharmacy & Sciences Placements",
    tag: "Health Sciences",
    caption: "B.Pharm & Allied Science achievers placed in top pharma giants",
  },
  {
    src: "/placements/placement-day-6.webp",
    title: "Campus to Corporate Transition",
    tag: "Growth Journey",
    caption: "Special felicitation ceremony organized by the Career Development Cell",
  },
  {
    src: "/placements/placement-day-7.webp",
    title: "Star Offer Achievers",
    tag: "High Package Club",
    caption: "Students securing offers above ₹20 LPA to ₹1.4 Cr PA",
  },
];

export const salaryPackageBreakdown = [
  {
    tier: "Tier 01",
    range: "Upto ₹4 LPA",
    category: "Entry-Level Opportunities",
    description: "Freshers in Pharmacy, Healthcare, Graduate Trainees & Corporate Support Roles",
    isAverage: false,
    isTopTier: false,
  },
  {
    tier: "Tier 02",
    range: "₹4 – ₹6 LPA",
    category: "Competitive Core Roles",
    description: "Software Developers, Sales Engineers, BFSI Executives & Tech Analysts",
    isAverage: true,
    isTopTier: false,
  },
  {
    tier: "Tier 03",
    range: "₹6 – ₹8 LPA",
    category: "Prestigious Corporate Offers",
    description: "Full Stack Developers, EdTech Associates, Financial Consultants & Business Analysts",
    isAverage: false,
    isTopTier: false,
  },
  {
    tier: "Tier 04",
    range: "₹8 – ₹10 LPA",
    category: "Mid-Level Technical Roles",
    description: "Cloud Engineers, AI/ML Analysts, Product Marketers & Corporate Strategists",
    isAverage: false,
    isTopTier: false,
  },
  {
    tier: "Tier 05",
    range: "₹10+ LPA to ₹1.4 Cr",
    category: "High-End Corporate & Super Dream",
    description: "Global Tech Leads, High-Growth Startups, Tier-1 Product Companies & Leadership Roles",
    isAverage: false,
    isTopTier: true,
  },
];
