export interface CampusStat {
  value: number;
  suffix?: string;
  label: string;
  icon?: string;
}

export interface SmartCampusFeature {
  title: string;
  description: string;
}

export interface WhyJoinItem {
  title: string;
  description: string;
}

export interface ScholarshipItem {
  title: string;
  description: string;
}

export const campusStats: CampusStat[] = [
  {
    value: 40,
    suffix: " LPA",
    label: "Highest Package",
  },
  {
    value: 550,
    suffix: "+",
    label: "Recruiters",
  },
  {
    value: 3500,
    suffix: "+",
    label: "Job Offers",
  },
];

export const smartCampusFeatures: SmartCampusFeature[] = [
  {
    title: "Digital Attendance System",
    description:
      "Experience an exciting new way to handle classrooms. Automated attendance syncs immediately with student data and provides complete transparency.",
  },
  {
    title: "Smart Library Services",
    description:
      "Advanced digital search technology helps you discover books, journals and research materials with personalized academic suggestions.",
  },
  {
    title: "Advanced E-Learning Platform",
    description:
      "Track attendance, notes and quizzes while receiving real-time information about progress, reminders and academic dashboards.",
  },
  {
    title: "Integrated e-Governance",
    description:
      "Raise tickets for hostels, IT, academics and more through a smart system that prioritizes issues and provides quick, trackable solutions.",
  },
  {
    title: "Unified Fee & Scholarship Portal",
    description:
      "Transparent management of receipts, payments, scholarship eligibility and reminders through one unified platform.",
  },
  {
    title: "Connected Campus Experience",
    description:
      "Technology-enabled security, navigation, ID verification, automated helpdesks and a connected student experience.",
  },
];

export const whyJoinItems: WhyJoinItem[] = [
  {
    title: "Outcome-Based Education (OBE)",
    description:
      "Outcome-based education focuses on measurable student performance through knowledge, skills and attitudes.",
  },
  {
    title: "Digitally Enabled Campus",
    description:
      "A campus equipped with cutting-edge digital tools and resources for an enhanced learning experience.",
  },
  {
    title: "Industry-Collaborated Curriculum",
    description:
      "Learn through curricula developed in collaboration with industry leaders, ensuring job readiness.",
  },
  {
    title: "Interdisciplinary Research Labs",
    description:
      "State-of-the-art research facilities for innovative interdisciplinary projects.",
  },
  {
    title: "Skill Enhancement Certifications",
    description:
      "Gain certifications in emerging skills and technologies to enhance employability.",
  },
  {
    title: "Earn While You Learn",
    description:
      "Opportunities to work on campus or with partner organizations while studying.",
  },
  {
    title: "Distinguished Faculty",
    description:
      "Learn from highly experienced and accomplished faculty members.",
  },
  {
    title: "Flexible Credit System",
    description:
      "A flexible credit system that allows you to design your own learning path.",
  },
  {
    title: "Global Opportunities",
    description:
      "Access to international programs, exchange opportunities and global exposure.",
  },
];

export const scholarshipItems: string[] = [
  "Merit / Percentage in Qualifying Exams",
  "National Level Entrance Exams (JEE, CUET, NEET, CLAT and more)",
  "Social Responsibility",
  "Sports Performance",
];

export const globalPartners: string[] = [
  "University of Sao Paulo, Brazil",
  "Swiss School of Management, Switzerland",
  "Universiti Malaysia Terengganu (UMT), Malaysia",
  "Mendel University, Czech Republic",
  "Murdoch University, Australia",
  "North Caucasian State Academy (NCSA), Russia",
];

export const internshipDestinations: string[] = [
  "Dubai",
  "Singapore",
  "Malaysia",
  "Vietnam",
];

export const universeHighlights = [
  "Students & staff representing 31 countries & 22 States.",
  "MOU with Prestigious Global Universities",
  "International Internships",
];