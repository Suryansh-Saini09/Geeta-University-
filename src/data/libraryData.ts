export interface LibraryMetricCard {
  id: string;
  title: string;
  count: string;
  description: string;
  image: string;
}

export interface LibraryPortal {
  id: string;
  title: string;
  description: string;
  fullContent: string;
  image: string;
  badgeText: string;
}

export interface LoanRuleItem {
  sn: number;
  category: string;
  booksIssued: number;
  loanPeriod: string;
}

export const libraryHeroData = {
  title: "Central Library & Knowledge Center",
  subtitle: "The Intellectual & Research Hub of Geeta University",
  description:
    "Connecting students and faculty with 25,000+ physical volumes, 1,00,000+ e-books, and 1,000+ global e-journals in a quiet, modern learning environment.",
  heroImage: "/library/hero-bg.webp",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Central Library", href: "/library" },
  ],
};

export const libraryMetricsData: LibraryMetricCard[] = [
  {
    id: "physical-books",
    title: "Physical Books",
    count: "25,000+",
    description: "Extensive printed collection covering Engineering, Management, Law, Pharmacy, Agriculture, and Basic Sciences.",
    image: "/library/physical-books.jpg",
  },
  {
    id: "ebooks",
    title: "E-Books & Digital Reading",
    count: "1,00,000+",
    description: "24×7 access to digital books, National Digital Library of India (NDLI), and interactive web resources.",
    image: "/library/ebooks.jpg",
  },
  {
    id: "ejournals",
    title: "E-Journals & Research Papers",
    count: "1,000+",
    description: "Subscribed access to IEEE, ASME, ELSEVIER, EBSCO, EMERALD, J-Gate, and SCC Online databases.",
    image: "/library/ejournals.jpg",
  },
];

export const libraryOverviewData = {
  title: "Empowering Research, Innovation & Academic Excellence",
  paragraphs: [
    "Geeta University understands that a library & information center of exceptional quality forms the nerve center of any good University. Connecting both students and faculty with global resources of knowledge, the Geeta University Library continues to adapt to challenging new demands and provides a highly conducive learning atmosphere for the empowerment of its users.",
    "Situated at the central location of Geeta University to serve the requirements of students and faculty members effectively, this library has been functional for the last 15 years (since 2008). Originally established under Geeta Engineering College, it was seamlessly merged into the unified Geeta University Library system in 2022.",
    "With over 25,000 books and active subscriptions to more than 20 print journals and magazines, GU Library provides a comprehensive resource hub for individuals pursuing knowledge across Engineering, Management & Commerce, Humanities, Basic & Forensic Sciences, Agriculture, Pharmaceutics, Computer Applications, Legal Studies, and Allied Health Sciences.",
    "Every staff member and registered student of Geeta University is eligible for full library membership and digital access, fostering an inclusive culture of continuous learning and advanced academic research.",
  ],
  referenceSection: {
    title: "Dedicated Reference Section",
    count: "5,829 Text Reference Books",
    description:
      "To maximize accessibility and preserve rare academic texts, the library maintains an exclusive Reference Section containing 5,829 reference volumes. These books are reserved for reading and research within the library premises during operating hours.",
  },
};

export const libraryPortalsData: LibraryPortal[] = [
  {
    id: "elibrary",
    title: "E-Library & Global Databases",
    badgeText: "24×7 Digital Access",
    description: "Direct campus and remote access to premier IEEE, ASME, ELSEVIER, EBSCO, EMERALD, and SCC Online databases.",
    fullContent:
      "To conduct research and advanced reading, GU libraries provide access to leading global e-journals and databases including ASME, IEEE, EMERALD, EBSCO, ASCE, ASTM, McGraw Hill, J-Gate, ELSEVIER, SCC ONLINE, and WESTLAW INTERNATIONAL. The library also hosts web-based video courses prepared by scholars from premier national institutes, eliminating geographical barriers for our students.",
    image: "/library/elibrary.webp",
  },
  {
    id: "resource",
    title: "National Digital Library (NDLI)",
    badgeText: "Ministry of Education Partner",
    description: "Integrated single-window search facility offering millions of multi-disciplinary digital educational assets.",
    fullContent:
      "The National Digital Library of India (NDLI) integration provides a versatile and accessible platform offering a broad spectrum of e-resources across all academic disciplines. Key features include full-text searchability, downloadable articles, and 24/7 availability for students and faculty.",
    image: "/library/resource-library.jpg",
  },
  {
    id: "repository",
    title: "GU Institutional E-Repository",
    badgeText: "Campus Intellectual Assets",
    description: "Centralized digital repository housing faculty research, Ph.D. theses, lab manuals, and conference papers.",
    fullContent:
      "The Geeta University E-Repository serves as the institutional digital archive preserving dissertations, Ph.D. theses, peer-reviewed conference publications, lecture notes, and rare institutional records accessible over the university high-speed intranet network.",
    image: "/library/erepository.webp",
  },
];

export const libraryHoursAndPolicyData = {
  operatingDays: "Monday to Sunday (7 Days a Week)",
  timings: "9:00 AM to 10:00 PM",
  workingDaysPerYear: "360 Days",
  supportEmail: "library.support@geetauniversity.edu.in",
  importantInfo: [
    "The Knowledge Resource Center (LRC) remains closed on official University holidays listed in the Academic Calendar.",
    "All online databases, e-books, and digital repositories remain accessible 24×7 via off-campus proxy.",
    "Any revisions to daily library operating hours during university examination periods will be notified in advance.",
  ],
};

export const libraryLoanTableData: LoanRuleItem[] = [
  { sn: 1, category: "Faculty Members / Officers", booksIssued: 7, loanPeriod: "Whole Academic Session" },
  { sn: 2, category: "Staff Members", booksIssued: 2, loanPeriod: "30 Days" },
  { sn: 3, category: "M.Phil / Ph.D. Research Scholars", booksIssued: 3, loanPeriod: "30 Days" },
  { sn: 4, category: "Postgraduate Students (Master's)", booksIssued: 3, loanPeriod: "14 Days" },
  { sn: 5, category: "Undergraduate Students (Bachelor's)", booksIssued: 3, loanPeriod: "14 Days" },
  { sn: 6, category: "Special Members", booksIssued: 2, loanPeriod: "14 Days" },
  { sn: 7, category: "Other University Employees", booksIssued: 2, loanPeriod: "30 Days" },
];

export const librarianContactData = {
  name: "Dr. Anil Kapoor",
  designation: "Librarian & Head of Knowledge Resource Center",
  address: "Geeta University Main Campus, Naultha, Panipat, Haryana 132145",
  email: "library.support@geetauniversity.edu.in",
  phone: "+91 92787 68000",
};

export const libraryFaqsData = [
  {
    question: "Who is eligible for borrowing books from the Central Library?",
    answer: "All enrolled students (UG, PG, Ph.D.), faculty members, researchers, and university staff are eligible for library membership and book borrowing privileges.",
  },
  {
    question: "What are the daily operating hours of the Central Library?",
    answer: "The library operates from 9:00 AM to 10:00 PM, Monday to Sunday, functioning 360 days a year.",
  },
  {
    question: "How can I access online e-journals and databases like IEEE or ELSEVIER?",
    answer: "E-journals and databases are accessible on-campus via university Wi-Fi/LAN, as well as remotely using your student/faculty G-Portal credentials.",
  },
  {
    question: "Can Reference Section books be issued for home reading?",
    answer: "No. The Reference Section houses 5,829 rare and high-demand reference volumes intended exclusively for reading and research within the library reading hall.",
  },
  {
    question: "What is the penalty for late return of borrowed books?",
    answer: "Books must be renewed or returned on or before the due date. Overdue charges of ₹2 per day per book apply after the expiration of the loan period.",
  },
  {
    question: "How do I request a new book or journal subscription?",
    answer: "Students and faculty can submit book requisition forms at the Librarian desk or email library.support@geetauniversity.edu.in.",
  },
];
