export interface ProgramItem {
  programme: string;
  level: "Diploma" | "UG" | "PG" | "Ph.D";
  prog_fee_per_sem: number;
  tuition_fee: number;
  scholarship_allowed?: boolean;
}

export interface AreaData {
  school_full: string;
  programs: ProgramItem[];
}

export interface SlabItem {
  label: string;
  percent: number;
}

export interface SubCategoryItem {
  label: string;
  slabs?: SlabItem[];
  percent?: number;
}

export interface RuleCategory {
  label: string;
  allow_programs?: string;
  level_applicability?: string[];
  exclude_groups?: string[];
  eligible_groups?: string[];
  percent?: number;
  subcategories?: SubCategoryItem[];
}

export function detectLevel(name: string): "Diploma" | "UG" | "PG" | "Ph.D" {
  if (/ph\.?d/i.test(name)) return "Ph.D";
  if (/^d\./i.test(name) || /diploma/i.test(name) || /gnm/i.test(name)) return "Diploma";
  if (/^m\.|mba|mca|m\.tech|m\.sc|ll\.m/i.test(name)) return "PG";
  return "UG";
}

export const PROGRAMS_DATA: Record<string, AreaData> = {
  Law: {
    school_full: "Geeta Global Law School",
    programs: [
      { programme: "BA LL.B", level: "UG", prog_fee_per_sem: 125000, tuition_fee: 80000 },
      { programme: "BBA LL.B", level: "UG", prog_fee_per_sem: 125000, tuition_fee: 80000 },
      { programme: "LL.M", level: "PG", prog_fee_per_sem: 65000, tuition_fee: 40000 },
      { programme: "Ph.D in Law", level: "Ph.D", prog_fee_per_sem: 55000, tuition_fee: 35000 },
    ],
  },
  Pharmacy: {
    school_full: "Geeta Institute of Pharmacy",
    programs: [
      { programme: "D.Pharm", level: "Diploma", prog_fee_per_sem: 45000, tuition_fee: 30000 },
      { programme: "B.Pharm", level: "UG", prog_fee_per_sem: 75000, tuition_fee: 50000 },
      { programme: "M.Pharm (Pharmaceutics)", level: "PG", prog_fee_per_sem: 75000, tuition_fee: 50000 },
      { programme: "M.Pharm (Pharmacology)", level: "PG", prog_fee_per_sem: 75000, tuition_fee: 50000 },
      { programme: "M.Pharm (Pharmaceutical Chemistry)", level: "PG", prog_fee_per_sem: 75000, tuition_fee: 50000 },
      { programme: "Ph.D in Pharmaceutical Sciences", level: "Ph.D", prog_fee_per_sem: 55000, tuition_fee: 35000 },
    ],
  },
  Agriculture: {
    school_full: "School of Agricultural Sciences",
    programs: [
      { programme: "B.Sc (H.) Agriculture", level: "UG", prog_fee_per_sem: 65000, tuition_fee: 40000 },
      { programme: "M.Sc Agriculture (Agronomy)", level: "PG", prog_fee_per_sem: 50000, tuition_fee: 30000 },
      { programme: "Ph.D in Agriculture", level: "Ph.D", prog_fee_per_sem: 55000, tuition_fee: 35000 },
    ],
  },
  "Commerce & Business Management": {
    school_full: "School of Commerce and Business Management",
    programs: [
      { programme: "BBA (H.)", level: "UG", prog_fee_per_sem: 60000, tuition_fee: 35000 },
      { programme: "BBA (H.) - International Accounting", level: "UG", prog_fee_per_sem: 70000, tuition_fee: 45000 },
      { programme: "BBA (H.) - AI & Data Analytics", level: "UG", prog_fee_per_sem: 70000, tuition_fee: 45000 },
      { programme: "BBA (H.) - HRM", level: "UG", prog_fee_per_sem: 70000, tuition_fee: 45000 },
      { programme: "BBA (H.) - Import & Export Management", level: "UG", prog_fee_per_sem: 70000, tuition_fee: 45000 },
      { programme: "BBA in Banking & Finance", level: "UG", prog_fee_per_sem: 70000, tuition_fee: 45000 },
      { programme: "BBA (H.) - Marketing", level: "UG", prog_fee_per_sem: 70000, tuition_fee: 45000 },
      { programme: "BBA in FinTech", level: "UG", prog_fee_per_sem: 70000, tuition_fee: 45000 },
      { programme: "BBA in Digital Marketing", level: "UG", prog_fee_per_sem: 70000, tuition_fee: 45000 },
      { programme: "BBA in Entrepreneurship & Family Business", level: "UG", prog_fee_per_sem: 70000, tuition_fee: 45000 },
      { programme: "B.Com (H.)", level: "UG", prog_fee_per_sem: 45000, tuition_fee: 30000 },
      { programme: "B.Com (H.) - International Accounting", level: "UG", prog_fee_per_sem: 55000, tuition_fee: 35000 },
      { programme: "B.Com (H.) - Auditing & Taxation", level: "UG", prog_fee_per_sem: 55000, tuition_fee: 35000 },
      { programme: "B.Com (H.) - Banking & Insurance", level: "UG", prog_fee_per_sem: 55000, tuition_fee: 35000 },
      { programme: "B.Com (H.) - Advance Accounting", level: "UG", prog_fee_per_sem: 55000, tuition_fee: 35000 },
      { programme: "M.Com", level: "PG", prog_fee_per_sem: 45000, tuition_fee: 30000 },
      { programme: "Ph.D in Business & Management", level: "Ph.D", prog_fee_per_sem: 55000, tuition_fee: 35000 },
      { programme: "Ph.D in Commerce", level: "Ph.D", prog_fee_per_sem: 55000, tuition_fee: 35000 },
    ],
  },
  "SP Bansal School of Business": {
    school_full: "SP Bansal School of Business",
    programs: [
      { programme: "MBA - Specialization in Finance", level: "PG", prog_fee_per_sem: 137500, tuition_fee: 87500 },
      { programme: "MBA - Specialization in Marketing", level: "PG", prog_fee_per_sem: 137500, tuition_fee: 87500 },
      { programme: "MBA - Specialization in AI for Business", level: "PG", prog_fee_per_sem: 137500, tuition_fee: 87500 },
      { programme: "MBA - Specialization in Digital Marketing", level: "PG", prog_fee_per_sem: 137500, tuition_fee: 87500 },
      { programme: "MBA - Specialization in FinTech", level: "PG", prog_fee_per_sem: 137500, tuition_fee: 87500 },
      { programme: "MBA - Specialization in Human Resource Management", level: "PG", prog_fee_per_sem: 137500, tuition_fee: 87500 },
      { programme: "MBA - Specialization in Entrepreneurship and Family Business", level: "PG", prog_fee_per_sem: 137500, tuition_fee: 87500 },
      { programme: "MBA - Specialization in Logistics and Supply Chain Management", level: "PG", prog_fee_per_sem: 137500, tuition_fee: 87500 },
    ],
  },
  "Computer Science & Engineering": {
    school_full: "School of Computer Science and Engineering",
    programs: [
      { programme: "B.Tech in CSE", level: "UG", prog_fee_per_sem: 95000, tuition_fee: 60000 },
      { programme: "B.Tech (H.) CSE - AI & ML", level: "UG", prog_fee_per_sem: 105000, tuition_fee: 65000 },
      { programme: "B.Tech (H.) CSE - Cyber Security", level: "UG", prog_fee_per_sem: 105000, tuition_fee: 65000 },
      { programme: "B.Tech (H.) CSE - Data Science & Business Analytics", level: "UG", prog_fee_per_sem: 110000, tuition_fee: 70000 },
      { programme: "B.Tech (H.) CSE - Full Stack Development", level: "UG", prog_fee_per_sem: 105000, tuition_fee: 65000 },
      { programme: "B.Tech (H.) CSE - Specialization in AI System Design", level: "UG", scholarship_allowed: false, prog_fee_per_sem: 162500, tuition_fee: 100000 },
      { programme: "B.Tech (H.) CSE - Specialization in AI", level: "UG", prog_fee_per_sem: 118750, tuition_fee: 73750 },
      { programme: "B.Tech (H.) CSE - Specialization in Quantum Computing", level: "UG", prog_fee_per_sem: 125000, tuition_fee: 70000 },
      { programme: "M.Tech in CSE", level: "PG", prog_fee_per_sem: 40000, tuition_fee: 25000 },
      { programme: "BCA (H.)", level: "UG", prog_fee_per_sem: 55000, tuition_fee: 35000 },
      { programme: "BCA (H.) - Cyber Security", level: "UG", prog_fee_per_sem: 60000, tuition_fee: 35000 },
      { programme: "BCA (H.) - Data Science & Business Analytics", level: "UG", prog_fee_per_sem: 60000, tuition_fee: 35000 },
      { programme: "BCA (H.) - AI & ML", level: "UG", prog_fee_per_sem: 60000, tuition_fee: 35000 },
      { programme: "MCA", level: "PG", prog_fee_per_sem: 50000, tuition_fee: 30000 },
      { programme: "Ph.D in CSE", level: "Ph.D", prog_fee_per_sem: 55000, tuition_fee: 35000 },
      { programme: "Ph.D in Computer Applications", level: "Ph.D", prog_fee_per_sem: 55000, tuition_fee: 35000 },
    ],
  },
  Engineering: {
    school_full: "School of Engineering",
    programs: [
      { programme: "B.Tech in Civil", level: "UG", prog_fee_per_sem: 80000, tuition_fee: 50000 },
      { programme: "B.Tech (H.) Civil - AI & Digital Transformation", level: "UG", prog_fee_per_sem: 90000, tuition_fee: 55000 },
      { programme: "M.Tech Civil (Transportation Engg)", level: "PG", prog_fee_per_sem: 40000, tuition_fee: 25000 },
      { programme: "M.Tech Civil (Construction Technology Management)", level: "PG", prog_fee_per_sem: 40000, tuition_fee: 25000 },
    ],
  },
  "Allied Health Sciences": {
    school_full: "School of Health and Allied Sciences",
    programs: [
      { programme: "B.Sc (H.) Nutrition & Dietetics", level: "UG", prog_fee_per_sem: 50000, tuition_fee: 30000 },
      { programme: "M.Sc Nutrition & Dietetics", level: "PG", prog_fee_per_sem: 50000, tuition_fee: 30000 },
      { programme: "Ph.D in Nutrition & Dietetics", level: "Ph.D", prog_fee_per_sem: 55000, tuition_fee: 35000 },
    ],
  },
  "Hotel Management": {
    school_full: "School of Hospitality and Hotel Management",
    programs: [
      { programme: "B.Sc (H.) Hotel Management", level: "UG", prog_fee_per_sem: 60000, tuition_fee: 35000 },
      { programme: "M.Sc (H.) Hotel Management", level: "PG", prog_fee_per_sem: 50000, tuition_fee: 30000 },
      { programme: "Ph.D. in Tourism & Hotel Management", level: "Ph.D", prog_fee_per_sem: 55000, tuition_fee: 35000 },
    ],
  },
  "Humanities & Social Sciences": {
    school_full: "School of Humanities and Social Sciences",
    programs: [
      { programme: "BA (H.) Political Science", level: "UG", prog_fee_per_sem: 50000, tuition_fee: 30000 },
      { programme: "BA (H.) Psychology", level: "UG", prog_fee_per_sem: 50000, tuition_fee: 30000 },
      { programme: "BA (H.) Economics", level: "UG", prog_fee_per_sem: 50000, tuition_fee: 30000 },
      { programme: "MA Political Science", level: "PG", prog_fee_per_sem: 50000, tuition_fee: 30000 },
      { programme: "MA Psychology", level: "PG", prog_fee_per_sem: 50000, tuition_fee: 30000 },
      { programme: "Ph.D in Psychology", level: "Ph.D", prog_fee_per_sem: 55000, tuition_fee: 35000 },
      { programme: "Ph.D in Political Science", level: "Ph.D", prog_fee_per_sem: 55000, tuition_fee: 35000 },
    ],
  },
  "Forensic Sciences": {
    school_full: "School of Sciences",
    programs: [
      { programme: "B.Sc (H.) Forensic Sciences", level: "UG", prog_fee_per_sem: 65000, tuition_fee: 40000 },
      { programme: "B.Sc (H.) Psychology", level: "UG", prog_fee_per_sem: 60000, tuition_fee: 35000 },
      { programme: "M.Sc Forensic Sciences", level: "PG", prog_fee_per_sem: 60000, tuition_fee: 35000 },
      { programme: "Ph.D in Forensic Sciences", level: "Ph.D", prog_fee_per_sem: 55000, tuition_fee: 35000 },
    ],
  },
  Nursing: {
    school_full: "School of Nursing",
    programs: [
      { programme: "B.Sc Nursing", level: "UG", prog_fee_per_sem: 65000, tuition_fee: 40000 },
      { programme: "General Nursing and Midwifery (GNM)", level: "Diploma", prog_fee_per_sem: 40000, tuition_fee: 25000 },
    ],
  },
};

export const RULES_DATA: Record<string, RuleCategory> = {
  GUTS: {
    label: "GUTS (GEETA UNIVERSITY TEST OF SCHOLARSHIP) SCORE",
    allow_programs: "all",
    level_applicability: ["UG"],
    exclude_groups: ["Pharmacy", "Nursing"],
    subcategories: [
      {
        label: "GUTS Scholarship",
        slabs: [
          { label: ">=95%", percent: 100 },
          { label: ">=90%", percent: 50 },
          { label: ">=80%", percent: 40 },
          { label: ">=70%", percent: 30 },
          { label: ">=60%", percent: 10 },
        ],
      },
    ],
  },
  MERIT: {
    label: "MERIT PERCENTAGE IN QUALIFYING EXAMINATION",
    allow_programs: "all",
    level_applicability: ["Diploma", "UG", "PG"],
    subcategories: [
      {
        label: "Merit Scholarship",
        slabs: [
          { label: ">=95%", percent: 100 },
          { label: "90–94.99%", percent: 50 },
          { label: "80–89.99%", percent: 40 },
          { label: "70–79.99%", percent: 30 },
          { label: "60–69.99%", percent: 10 },
        ],
      },
    ],
  },
  CUET_UG: {
    label: "CUET-UG SCHOLARSHIP",
    allow_programs: "all",
    level_applicability: ["Diploma", "UG", "PG"],
    exclude_groups: [],
    subcategories: [
      {
        label: "CUET-UG Scholarship",
        slabs: [
          { label: ">=95%", percent: 100 },
          { label: "80–94.99%", percent: 50 },
          { label: "50–79.99%", percent: 30 },
        ],
      },
    ],
  },
  CUET_PG: {
    label: "CUET-PG SCHOLARSHIP",
    level_applicability: ["Diploma", "UG", "PG"],
    subcategories: [
      {
        label: "CUET-PG Scholarship",
        slabs: [
          { label: "Score >=270", percent: 100 },
          { label: "210–269", percent: 50 },
          { label: "150–209", percent: 30 },
          { label: "120–149", percent: 10 },
        ],
      },
    ],
  },
  SPORTS: {
    label: "SPORTS SCHOLARSHIP",
    level_applicability: ["Diploma", "UG", "PG"],
    subcategories: [
      {
        label: "International Players",
        slabs: [{ label: "Eligible (100%)", percent: 100 }],
      },
      {
        label: "National Medal Winners",
        slabs: [{ label: "Eligible (50%)", percent: 50 }],
      },
      {
        label: "National Participation",
        slabs: [{ label: "Eligible (30%)", percent: 30 }],
      },
    ],
  },
  SOCIAL: {
    label: "SOCIAL RESPONSIBILITY SCHOLARSHIP",
    level_applicability: ["Diploma", "UG", "PG"],
    subcategories: [
      { label: "Freedom Fighters", slabs: [{ label: "Eligible (30%)", percent: 30 }] },
      { label: "Defense Personnel / Wards", slabs: [{ label: "Eligible (30%)", percent: 30 }] },
      { label: "Disability / Divyangjan", slabs: [{ label: "Eligible (30%)", percent: 30 }] },
      { label: "Employee Ward", slabs: [{ label: "Eligible (30%)", percent: 30 }] },
      { label: "Employee's Sibling/Spouse", slabs: [{ label: "Eligible (30%)", percent: 30 }] },
      { label: "Existing Student / GGI Alumni", slabs: [{ label: "Eligible (50%)", percent: 50 }] },
      { label: "Alumni / Existing Student's Sibling/Spouse", slabs: [{ label: "Eligible (30%)", percent: 30 }] },
      { label: "Child of Single Mother", slabs: [{ label: "Eligible (30%)", percent: 30 }] },
      { label: "Orphan Child", slabs: [{ label: "Eligible (50%)", percent: 50 }] },
      { label: "Girl Child", slabs: [{ label: "Eligible (10%)", percent: 10 }] },
    ],
  },
  NATIONAL_TEST: {
    label: "NATIONAL LEVEL TESTS / ENTRANCE",
    level_applicability: ["Diploma", "UG", "PG"],
    subcategories: [
      {
        label: "JEE (Main)",
        slabs: [
          { label: ">=95 Percentile", percent: 50 },
          { label: "90–94.99 Percentile", percent: 40 },
          { label: "85–89.99 Percentile", percent: 30 },
        ],
      },
      {
        label: "NEET",
        slabs: [
          { label: "Rank <= 75000", percent: 50 },
          { label: "75001–150000", percent: 40 },
          { label: "150001–200000", percent: 30 },
        ],
      },
      {
        label: "CAT / XAT / MAT / CMAT / NMAT",
        slabs: [
          { label: "CAT/XAT >=90 or MAT/CMAT >=95 or NMAT >=280", percent: 50 },
          { label: "CAT/XAT >=85 or MAT/CMAT >=90 or NMAT >=260", percent: 40 },
          { label: "CAT/XAT >=80 or MAT/CMAT >=85 or NMAT >=240", percent: 30 },
        ],
      },
      {
        label: "NIFT / NID / UCEED",
        slabs: [
          { label: "Top Rank Category", percent: 50 },
          { label: "Mid Rank Range", percent: 40 },
          { label: "Lower Rank Range", percent: 30 },
        ],
      },
      {
        label: "CLAT",
        slabs: [
          { label: "Rank <= 50", percent: 50 },
          { label: "51–100", percent: 40 },
          { label: "101–200", percent: 30 },
        ],
      },
    ],
  },
  Haryana_Domicile: {
    label: "HARYANA DOMICILE SCHOLARSHIP",
    allow_programs: "all",
    exclude_groups: [
      "Pharmacy",
      "Nursing",
      "Law",
      "Agriculture",
      "Commerce & Business Management",
      "Computer Science & Engineering",
      "Engineering",
      "Allied Health Sciences",
      "Hotel Management",
      "Humanities & Social Sciences",
      "Forensic Sciences",
    ],
    level_applicability: ["PG"],
    subcategories: [
      {
        label: "Haryana Domicile",
        slabs: [{ label: "Eligible (Domicile)", percent: 25 }],
      },
    ],
  },
};

export const SCHOLARSHIP_PREDICTOR_FAQS = [
  {
    question: "How is the scholarship amount calculated?",
    answer: "Scholarships at Geeta University are applied directly to the tuition fee component of your chosen program. The predictor calculates: Tuition Scholarship = Math.round(Tuition Fee * Scholarship % / 100), and Payable Fee = Fee per Semester - Scholarship Amount.",
  },
  {
    question: "Is GUTS scholarship applicable to all programs?",
    answer: "GUTS (Geeta University Test of Scholarship) is valid for UG programs across most disciplines, excluding Pharmacy, Nursing, and Ph.D. programs.",
  },
  {
    question: "Can I combine multiple scholarships?",
    answer: "Students can apply under multiple scholarship categories; however, only the single highest eligible scholarship percentage will be awarded to ensure maximum benefit for the student.",
  },
  {
    question: "How do I claim my predicted scholarship?",
    answer: "Once you calculate your potential scholarship, proceed with your admission registration on the Geeta University portal and submit relevant supporting documents (marksheets, scorecards, certificates) during document verification.",
  },
];
