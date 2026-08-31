export interface DepartmentOption {
  value: string;
  label: string;
  categories: ("Teaching" | "Non Teaching" | "Admissions & Marketing" | "Essentials")[];
}

export const JOB_CATEGORIES = [
  "Teaching",
  "Non Teaching",
  "Admissions & Marketing",
  "Essentials",
] as const;

export const MARITAL_STATUS_OPTIONS = [
  "Married",
  "Unmarried",
  "Divorced",
  "Widowed",
  "Separated",
];

export const GENDER_OPTIONS = ["Male", "Female", "Other"];

export const EXPERIENCE_TYPE_OPTIONS = ["Academic", "Non academic"];

export const DEPARTMENTS: DepartmentOption[] = [
  // Academic / Teaching & Dual-use
  { value: "Agriculture", label: "Agriculture", categories: ["Teaching", "Non Teaching", "Essentials"] },
  { value: "Forensic Science", label: "Forensic Science", categories: ["Teaching", "Non Teaching"] },
  { value: "Hospitality & Hotel Management", label: "Hospitality & Hotel Management", categories: ["Teaching"] },
  { value: "Humanities & Social Sciences", label: "Humanities & Social Sciences", categories: ["Teaching"] },
  { value: "Geeta Institute of Pharmacy", label: "Geeta Institute of Pharmacy", categories: ["Teaching", "Non Teaching"] },
  { value: "Commerce & Business Management", label: "Commerce & Business Management", categories: ["Teaching"] },
  { value: "Nutrition & Dietetics", label: "Nutrition & Dietetics", categories: ["Teaching"] },
  { value: "Computer Science Engineering", label: "Computer Science Engineering", categories: ["Teaching", "Non Teaching"] },
  { value: "Political Science", label: "Political Science", categories: ["Teaching"] },
  { value: "Psychology", label: "Psychology", categories: ["Teaching"] },
  { value: "Chemistry", label: "Chemistry", categories: ["Teaching"] },
  { value: "Mathematics", label: "Mathematics", categories: ["Teaching"] },
  { value: "Physics", label: "Physics", categories: ["Teaching"] },

  // Non-Teaching & Administration
  { value: "Administration", label: "Administration", categories: ["Non Teaching", "Admissions & Marketing"] },
  { value: "Central Store", label: "Central Store", categories: ["Non Teaching", "Essentials"] },
  { value: "CSE", label: "CSE Support", categories: ["Non Teaching"] },
  { value: "ERP", label: "ERP", categories: ["Non Teaching"] },
  { value: "Examinations", label: "Examinations", categories: ["Non Teaching"] },
  { value: "GFS (Finishing School)", label: "GFS (Finishing School)", categories: ["Non Teaching"] },
  { value: "GTH", label: "GTH (Technical Hub)", categories: ["Non Teaching"] },
  { value: "Human Resources", label: "Human Resources", categories: ["Non Teaching"] },
  { value: "IQAC", label: "IQAC", categories: ["Non Teaching"] },
  { value: "IT Lab", label: "IT Lab", categories: ["Non Teaching"] },
  { value: "Library", label: "Library", categories: ["Non Teaching"] },
  { value: "Pharmacy", label: "Pharmacy Support", categories: ["Non Teaching"] },
  { value: "Placements", label: "Placements", categories: ["Non Teaching"] },
  { value: "Registrar Office", label: "Registrar Office", categories: ["Non Teaching"] },
  { value: "Sports", label: "Sports", categories: ["Non Teaching", "Essentials"] },
  { value: "DSW", label: "DSW (Dean Student Welfare)", categories: ["Non Teaching"] },

  // Admissions & Marketing
  { value: "Accounts", label: "Accounts", categories: ["Admissions & Marketing"] },
  { value: "Admission & Marketing", label: "Admission & Marketing", categories: ["Admissions & Marketing"] },
  { value: "Branding & Communication", label: "Branding & Communication", categories: ["Admissions & Marketing"] },

  // Essentials
  { value: "Horticulture", label: "Horticulture", categories: ["Essentials"] },
  { value: "Hostels", label: "Hostels", categories: ["Essentials"] },
  { value: "Hostels Mess", label: "Hostels Mess", categories: ["Essentials"] },
  { value: "Housekeeping", label: "Housekeeping", categories: ["Essentials"] },
  { value: "Maintenance", label: "Maintenance", categories: ["Essentials"] },
  { value: "Security", label: "Security", categories: ["Essentials"] },
  { value: "Store", label: "Store", categories: ["Essentials"] },
  { value: "Transportation", label: "Transportation", categories: ["Essentials"] },
];

export const CAREER_BENEFITS = [
  {
    title: "Research & Development Grants",
    description: "Generous institutional funding, seed money, and encouragement for interdisciplinary research publication and patents.",
    icon: "Microscope",
  },
  {
    title: "AI-Enabled Infrastructure",
    description: "State-of-the-art smart classrooms, advanced technology labs, and seamless digital teaching resources.",
    icon: "Cpu",
  },
  {
    title: "Professional Growth",
    description: "Continuous faculty development programs, international conference support, and leadership advancement paths.",
    icon: "TrendingUp",
  },
  {
    title: "Competitive Compensation",
    description: "Industry-aligned salary structures, performance incentives, and comprehensive employee wellness benefits.",
    icon: "Award",
  },
];

export const CAREER_FAQS = [
  {
    question: "What is the selection process for faculty positions?",
    answer: "Our faculty selection process includes initial resume screening, dynamic presentation/demo lecture evaluation by subject matter experts, and an interview with the Selection Committee & Academic Deans.",
  },
  {
    question: "Can I apply for multiple roles or departments?",
    answer: "Yes, you can submit application details for roles matching your qualifications. Please mention all relevant credentials and experience in your submitted application.",
  },
  {
    question: "Are research facilities and funding available for new faculty?",
    answer: "Absolutely. Geeta University strongly emphasizes research innovation, offering seed grants, IP support, conference travel subsidies, and state-of-the-art laboratory facilities.",
  },
  {
    question: "What documents should I keep ready when applying?",
    answer: "You will need your updated CV/Resume (PDF or DOC format), educational certificates, proof of experience, research publications list, and contact details for professional references.",
  },
];
