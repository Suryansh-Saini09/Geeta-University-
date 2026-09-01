export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category:
    | "Admissions & Eligibility"
    | "Courses & Approvals"
    | "Fee & Scholarships"
    | "Campus Life & Facilities"
    | "Placements & Career"
    | "Program Specifics";
}

export interface FAQCategory {
  name:
    | "All"
    | "Admissions & Eligibility"
    | "Courses & Approvals"
    | "Fee & Scholarships"
    | "Campus Life & Facilities"
    | "Placements & Career"
    | "Program Specifics";
  iconName: string;
  description: string;
}

export const faqCategories: FAQCategory[] = [
  { name: "All", iconName: "HelpCircle", description: "Browse all frequently asked questions" },
  { name: "Admissions & Eligibility", iconName: "UserCheck", description: "Application process, cutoffs, documents & eligibility" },
  { name: "Courses & Approvals", iconName: "BookOpen", description: "UGC recognition, degree validity & course structure" },
  { name: "Fee & Scholarships", iconName: "CreditCard", description: "Fee details, merit scholarships & payment options" },
  { name: "Campus Life & Facilities", iconName: "Building", description: "Hostels, transport, dress code & extracurriculars" },
  { name: "Placements & Career", iconName: "Award", description: "Hiring records, recruiters & highest packages" },
  { name: "Program Specifics", iconName: "GraduationCap", description: "Engineering, Law, Pharmacy, Agriculture & Management" },
];

export const faqHeroData = {
  title: "Frequently Asked Questions",
  subtitle: "Everything You Need to Know About Geeta University",
  description:
    "Find detailed answers regarding admissions, fee structures, UGC approvals, scholarships, campus facilities, and placement opportunities.",
  heroImage: "/faq/hero-faq.webp",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "FAQs", href: "/faq" },
  ],
};

export const allFaqs: FAQItem[] = [
  {
    id: 1,
    category: "Courses & Approvals",
    question: "What are the various courses offered by Geeta University?",
    answer:
      "Geeta University offers 70+ courses across various disciplines including Computer Science & Engineering, Computer Applications, Business Management, Pharmacy, Hotel Management, Law, Forensic Science, Agriculture, Humanities, etc. Diploma, Undergraduate, Postgraduate, and Doctoral (Ph.D.) programs are available.",
  },
  {
    id: 2,
    category: "Courses & Approvals",
    question: "Are the courses offered by Geeta University recognized?",
    answer:
      "Yes, Geeta University is a government-approved university established under the Haryana Private Universities Act, 2006. It is recognized by UGC and holds the right to offer degree programs as per sections 2(f) and 22(1) of the UGC Act 1956.",
  },
  {
    id: 3,
    category: "Admissions & Eligibility",
    question: "What are the minimum requirements for applying to a particular course at Geeta University?",
    answer:
      "Eligibility requirements vary according to the course and level of study, aligning strictly with UGC guidelines. Minimum academic pass percentages are set for UG (usually 45%+), PG (50%+), and Ph.D. (55%+).",
  },
  {
    id: 4,
    category: "Admissions & Eligibility",
    question: "Are marks obtained in the qualifying examination considered for admission?",
    answer:
      "Yes, admissions at Geeta University are strictly offered based on marks obtained in qualifying exams. Merit in qualifying board/entrance exams is also evaluated for tuition fee scholarships.",
  },
  {
    id: 5,
    category: "Admissions & Eligibility",
    question: "Can I apply for admission before the declaration of my qualifying exam results?",
    answer:
      "Yes, you can apply prior to your result declaration. Such admission is provisional and subject to fulfilling the course eligibility criteria once official marksheets are declared.",
  },
  {
    id: 6,
    category: "Fee & Scholarships",
    question: "What is the total approximate expenditure for a selected course?",
    answer:
      "Total expenditure depends on the chosen course and scholarship eligibility. Per-semester tuition ranges from INR 30,000 to INR 99,000. Detailed fee structures are provided during admission counseling.",
  },
  {
    id: 7,
    category: "Admissions & Eligibility",
    question: "Can I receive admission on the basis of an entrance test alone?",
    answer:
      "Geeta University offers admissions based on UGC-specified minimum eligibility requirements (qualifying exam pass percentage) rather than separate entrance tests for most UG/PG courses. National entrance scores (e.g. JEE Main, CUET) are also recognized.",
  },
  {
    id: 8,
    category: "Admissions & Eligibility",
    question: "Can I receive the admission form by post?",
    answer:
      "While physical forms are not sent via post, you can easily apply online through the official Geeta University admissions portal (admissions.geetauniversity.edu.in).",
  },
  {
    id: 9,
    category: "Admissions & Eligibility",
    question: "Do I need to visit the campus or admission office in person to submit application forms?",
    answer:
      "No. Geeta University operates a 100% digitally enabled admission process. You can complete application form submissions and initial fee deposits online.",
  },
  {
    id: 10,
    category: "Admissions & Eligibility",
    question: "Where can I get the prospectus and application forms?",
    answer:
      "Prospectus downloads and application forms are available online at admissions.geetauniversity.edu.in. Upon submission, an admission counselor guides you through the next steps.",
  },
  {
    id: 11,
    category: "Admissions & Eligibility",
    question: "If I apply for multiple courses, do I need separate application forms?",
    answer:
      "No. You can select multiple course preferences within the same single online application form by checking your preferred program choices.",
  },
  {
    id: 12,
    category: "Admissions & Eligibility",
    question: "Can I send a nominee/proxy for my counseling session?",
    answer:
      "No. While application forms and payments can be submitted online, the candidate must attend personal document verification during final counseling.",
  },
  {
    id: 13,
    category: "Fee & Scholarships",
    question: "Do I need to pay the entire tuition fee at the time of admission?",
    answer:
      "No. You start the admission process with a INR 1,000 application fee and an initial seat booking fee of INR 10,000. The remaining balance is payable according to the university fee calendar.",
  },
  {
    id: 14,
    category: "Fee & Scholarships",
    question: "Is installment fee payment available?",
    answer:
      "Yes, Geeta University supports fee payment in easy installments through partner bank options and financial services.",
  },
  {
    id: 15,
    category: "Fee & Scholarships",
    question: "Is there any capitation fee or donation required?",
    answer:
      "No. Geeta University strictly maintains zero capitation fee and zero donation policy for all program admissions.",
  },
  {
    id: 16,
    category: "Admissions & Eligibility",
    question: "Is there any Management or Reservation quota?",
    answer:
      "No. Admissions are granted purely on academic merit and UGC eligibility criteria, with no management or donation quotas.",
  },
  {
    id: 17,
    category: "Campus Life & Facilities",
    question: "Are extracurricular activities and skill training facilities available on campus?",
    answer:
      "Yes. Geeta University hosts numerous student clubs, sports arenas, cultural societies, hackathons, and technical workshops throughout the academic year.",
  },
  {
    id: 18,
    category: "Fee & Scholarships",
    question: "How should Demand Drafts (DD) for fee payment be drawn?",
    answer:
      "Demand Drafts should be made in favor of 'Geeta University', payable at HDFC Bank, Israna Branch, Panipat, Haryana. Online netbanking and UPI payments are also accepted.",
  },
  {
    id: 19,
    category: "Admissions & Eligibility",
    question: "What documents are required during counseling & document verification?",
    answer:
      "UG/Diploma: 10th & 12th marksheets, Aadhaar Card, Migration Certificate, and 3 passport-size photos. PG/Ph.D.: Bachelor's/Master's degree certificates and research proof alongside standard ID documents.",
  },
  {
    id: 20,
    category: "Admissions & Eligibility",
    question: "Are original documents returned after verification?",
    answer:
      "Yes. All original certificates are verified on the spot and returned immediately to the student.",
  },
  {
    id: 21,
    category: "Courses & Approvals",
    question: "Does Geeta University offer Ph.D. doctoral programs?",
    answer:
      "Yes. Doctoral programs are offered across CSE, Computer Applications, Commerce, Management, Pharmacy, Agriculture, Law, Psychology, Nutrition & Dietetics, and Forensic Science.",
  },
  {
    id: 22,
    category: "Campus Life & Facilities",
    question: "Is there a dress code or uniform policy on campus?",
    answer:
      "Geeta University requires students to wear university uniforms on Tuesdays and Fridays. On other working days, smart formal/casual attire is recommended.",
  },
  {
    id: 23,
    category: "Fee & Scholarships",
    question: "Are hostel charges included in tuition fees?",
    answer:
      "No. Hostel accommodation and mess charges are detailed separately based on room selection (AC/Non-AC, 2-seater/3-seater).",
  },
  {
    id: 24,
    category: "Admissions & Eligibility",
    question: "Is it mandatory for parents to accompany students during counseling?",
    answer:
      "Parent attendance is recommended for clarity regarding policies, hostels, and academics, though not legally mandatory.",
  },
  {
    id: 25,
    category: "Campus Life & Facilities",
    question: "Where is Geeta University located?",
    answer:
      "Geeta University is located in Naultha, Panipat, Delhi NCR (NH-71A). It is easily accessible by highway and just 13 km from Panipat Junction Railway Station.",
  },
  {
    id: 26,
    category: "Courses & Approvals",
    question: "Is Geeta University approved by UGC and statutory councils?",
    answer:
      "Yes, Geeta University is recognized by UGC and approved by statutory bodies such as PCI (Pharmacy Council of India) and BCI (Bar Council of India).",
  },
  {
    id: 27,
    category: "Courses & Approvals",
    question: "Does Geeta University hold NAAC accreditation?",
    answer:
      "Geeta University was established in 2022 under the Haryana Private Universities Act. New universities become eligible for NAAC grading after completing mandatory operational batches.",
  },
  {
    id: 28,
    category: "Placements & Career",
    question: "What is the placement record at Geeta University?",
    answer:
      "Geeta University has an exceptional placement record with 90%+ placement rates, 550+ recruiting companies, 3500+ job offers, and a highest salary package of 40 LPA.",
  },
  {
    id: 29,
    category: "Courses & Approvals",
    question: "What major degree programs are offered?",
    answer:
      "Degrees span B.Tech, BCA, MCA, BBA, MBA, B.Pharm, D.Pharm, LL.B, BA LL.B, B.Sc. Agriculture, B.Sc. Forensic Science, B.Sc. Hotel Management, BA, M.Sc., and Ph.D.",
  },
  {
    id: 30,
    category: "Admissions & Eligibility",
    question: "How do I apply online or offline for admission?",
    answer:
      "Online: Submit the application at admissions.geetauniversity.edu.in for counselor callback. Offline: Visit the Panipat campus or regional admissions office for guided assistance.",
  },
  {
    id: 31,
    category: "Fee & Scholarships",
    question: "Does Geeta University offer 100% scholarships based on Class 12th marks?",
    answer:
      "Yes! Geeta University offers up to 100% tuition fee scholarships for candidates scoring 95%+ in Class 12th, with tiered scholarships for scores between 60% and 95%.",
  },
  {
    id: 32,
    category: "Program Specifics",
    question: "What is the eligibility for B.Tech Computer Science Engineering (CSE)?",
    answer:
      "Candidates must pass 10+2 Science stream with at least 45% aggregate marks, with Physics and Mathematics as compulsory subjects along with Chemistry/CS/Biology.",
  },
  {
    id: 33,
    category: "Campus Life & Facilities",
    question: "Does Geeta University provide bus transportation across Delhi NCR and Haryana?",
    answer:
      "Yes, an extensive bus fleet operates across Delhi, Karnal, Kurukshetra, Jind, Rohtak, Sonipat, Panipat, and surrounding regions.",
  },
  {
    id: 34,
    category: "Courses & Approvals",
    question: "What institutional rankings and ratings does Geeta University hold?",
    answer:
      "Rated AAA by Careers360, ranked 6th by Competition Success Review (CSR), and awarded OBE SILVER ranking by R World Institutional Ranking.",
  },
  {
    id: 35,
    category: "Fee & Scholarships",
    question: "What is the general semester fee structure for programs?",
    answer:
      "Semester tuition fees range between INR 30,000 and INR 99,000 depending on the program, specialization, and applicable merit scholarships.",
  },
  {
    id: 36,
    category: "Program Specifics",
    question: "How active is the alumni and corporate network in Geeta Global Law School?",
    answer:
      "Geeta Global Law School maintains active alumni in judiciary, corporate law firms, and litigation. Students participate in moot courts, legal aid clinics, and court internships.",
  },
  {
    id: 37,
    category: "Program Specifics",
    question: "Does School of Hospitality & Hotel Management host practical industry events?",
    answer:
      "Yes, students organize annual food festivals, culinary showcases, bartender workshops, and hospitality conclaves alongside star hotel internships.",
  },
  {
    id: 38,
    category: "Program Specifics",
    question: "What hospital and pharma tie-ups exist for Geeta Institute of Pharmacy?",
    answer:
      "Partnerships with multi-specialty hospitals and pharmaceutical manufacturers provide hands-on clinical lab training, drug formulation, and placement pathways.",
  },
  {
    id: 39,
    category: "Fee & Scholarships",
    question: "Are merit scholarships available for Humanities and Social Science students?",
    answer:
      "Yes, merit scholarships based on qualifying marks apply equally across BA, MA, and Ph.D. programs in Humanities.",
  },
  {
    id: 40,
    category: "Program Specifics",
    question: "Are global certifications like AWS or Microsoft Azure embedded into MCA/BCA?",
    answer:
      "Yes. Through Geeta Technical Hub (GTH), cloud, DevOps, AI, and cybersecurity certifications from AWS, Microsoft, and Cisco are integrated into the curriculum.",
  },
  {
    id: 41,
    category: "Program Specifics",
    question: "Is JEE Main score accepted for B.Tech CSE admissions?",
    answer:
      "Yes. JEE Main scores as well as 10+2 merit scores are accepted for B.Tech Computer Science Engineering admissions.",
  },
  {
    id: 42,
    category: "Program Specifics",
    question: "What infrastructure supports Computer Science & AI research?",
    answer:
      "AI-enabled smart labs, Apple Mac labs, cloud servers, hackathons, and CellStrat AI Hub integration give CSE students hands-on technical exposure.",
  },
  {
    id: 43,
    category: "Program Specifics",
    question: "Does Law School operate a Legal Aid Clinic and Moot Court?",
    answer:
      "Yes. A functional Legal Aid Clinic, high-court style Moot Court room, and student research journals equip law students with practical advocacy skills.",
  },
  {
    id: 44,
    category: "Program Specifics",
    question: "How does Geeta University compare to IP University affiliated colleges in Delhi NCR?",
    answer:
      "Geeta University offers a modern 40+ acre smart campus, GFS corporate grooming, 100% placement support, and lower cost of living compared to crowded NCR colleges.",
  },
  {
    id: 45,
    category: "Program Specifics",
    question: "Can B.Pharm graduates apply for Government Drug Inspector and Pharmacist posts?",
    answer:
      "Yes. B.Pharm degrees from Geeta University are PCI-approved, making graduates eligible for state & central Drug Inspector and Hospital Pharmacist exams.",
  },
  {
    id: 46,
    category: "Campus Life & Facilities",
    question: "What cultural and literary societies exist for student development?",
    answer:
      "Cultural clubs, music & dance societies, debate forums, drama clubs, and literary festivals foster well-rounded personality growth.",
  },
  {
    id: 47,
    category: "Program Specifics",
    question: "Is Political Science / BA at GU helpful for UPSC Civil Services preparation?",
    answer:
      "Yes. The syllabus covers Indian Polity, International Relations, Public Administration, and General Studies, supported by competitive exam guidance.",
  },
  {
    id: 48,
    category: "Program Specifics",
    question: "Are Model UN (MUN) and youth parliament debates conducted?",
    answer:
      "Yes, regular Model United Nations (MUN) sessions, Youth Parliaments, and inter-university debates are organized to build public speaking and diplomatic skills.",
  },
  {
    id: 49,
    category: "Program Specifics",
    question: "What AgriTech collaborations exist for B.Sc. Agriculture students?",
    answer:
      "Tie-ups with Just Agriculture, Plantica Foundation, and Hindustan Agri Research Society provide experimental crop fields, polyhouses, and research labs.",
  },
  {
    id: 50,
    category: "Program Specifics",
    question: "What clinical exposure is provided for B.Sc. Nutrition & Dietetics?",
    answer:
      "Tie-ups with regional hospitals, wellness clinics, and sports nutrition centers ensure practical internship rotations.",
  },
  {
    id: 51,
    category: "Placements & Career",
    question: "What level of industry exposure do Engineering students receive?",
    answer:
      "Engineering students undergo mandatory summer internships, industrial visits, live client projects, and mentorship from corporate tech leaders.",
  },
  {
    id: 52,
    category: "Courses & Approvals",
    question: "Why is Geeta University gaining rapid popularity among North India aspirants?",
    answer:
      "Its combination of XEDGE career-plus-life skills, GFS finishing school, top placements, AI-enabled campus, and generous scholarships drive its growth.",
  },
  {
    id: 53,
    category: "Admissions & Eligibility",
    question: "Is it better to choose Geeta University over traditional state universities?",
    answer:
      "Geeta University provides updated industry-relevant curricula, active placement drives, modern lab infrastructure, and personalized student grooming.",
  },
  {
    id: 54,
    category: "Admissions & Eligibility",
    question: "What factors should I evaluate before finalizing university admission?",
    answer:
      "Check UGC approvals, faculty background, lab facilities, placement track records, scholarship schemes, and corporate tie-ups.",
  },
  {
    id: 55,
    category: "Admissions & Eligibility",
    question: "How do I choose the right program for my career goals?",
    answer:
      "Utilize GU's dedicated admission counseling or course predictor tools to align your personal interests and academic strengths with market demand.",
  },
  {
    id: 56,
    category: "Fee & Scholarships",
    question: "Is investing in a top private university ROI positive for engineering and management?",
    answer:
      "Yes, with top packages reaching 40 LPA, 550+ corporate recruiters, and merit scholarships reducing costs, the return on investment is exceptionally high.",
  },
  {
    id: 57,
    category: "Fee & Scholarships",
    question: "How does GU balance affordable fees with strong placement outcomes?",
    answer:
      "By offering tiered merit scholarships (up to 100%) and direct campus recruitment networks, quality education remains accessible and rewarding.",
  },
  {
    id: 58,
    category: "Fee & Scholarships",
    question: "Are private university degrees equal in value for higher studies abroad?",
    answer:
      "Yes. UGC-recognized degrees from Geeta University are fully valid for WES evaluation, GRE/GMAT applications, and higher studies worldwide.",
  },
  {
    id: 59,
    category: "Placements & Career",
    question: "Which companies recruit from Geeta University campus placement drives?",
    answer:
      "Recruiters include Wipro, TCS, Infosys, Amazon, HDFC Bank, Tech Mahindra, IBM, BYJU'S, Flipkart, Reliance, and 500+ leading brands.",
  },
  {
    id: 60,
    category: "Admissions & Eligibility",
    question: "How should I compare engineering colleges before admission?",
    answer:
      "Compare lab equipment, industry certifications (AWS/Cisco), placement packages, faculty pedigree, and student support ecosystems.",
  },
  {
    id: 61,
    category: "Admissions & Eligibility",
    question: "Should I prioritize rankings, placement records, or fee structures?",
    answer:
      "A balanced evaluation is best. Geeta University excels across all three with AAA ratings, 40 LPA top package, and up to 100% scholarships.",
  },
  {
    id: 62,
    category: "Program Specifics",
    question: "Why is GU rated among the best for B.Tech Computer Science in Delhi NCR?",
    answer:
      "Its focus on AI, full stack development, hackathons, cloud labs, and top software placement offers make it a standout choice.",
  },
  {
    id: 63,
    category: "Program Specifics",
    question: "How does GU deliver industry-oriented engineering education?",
    answer:
      "Through live industrial projects, GTH technical training, mandatory internships, and continuous curriculum updates designed with corporate partners.",
  },
];
