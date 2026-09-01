export interface PedagogicalMethod {
  id: string;
  title: string;
  headingOrange: string;
  headingBlack: string;
  icon: string;
  summary: string;
  description: string;
  highlights: string[];
  image?: string;
}

export const teachingHero = {
  title: "Teaching & Learning Practices",
  subtitle: "Student-Centric Pedagogy & Practical Excellence",
  description:
    "Discover how Geeta University revolutionizes higher education through active learning, flipped classrooms, concept mapping, and peer instruction led by academicians from IITs, IISc, and IIMs.",
  heroImage: "/teaching-learning-practices/hero-f-block.webp",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Teaching Learning Practice", href: "/teaching-learning-practices" },
  ],
};

export const teachingOverview = {
  title: "Teaching Practice",
  headingOrange: "Teaching",
  headingBlack: "Practice",
  paragraphs: [
    "Our academicians hail from pioneer institutes like IIT, IISc, IIM & other top-rated institutes. Our faculty has a student-oriented approach which makes studying at Geeta University a fun and easy learning experience. With XEDGE, a lot of focus shifts from learning for career to learning for life. From coaching students to the best academicians, Geeta University's thrust is on turning them into Complete Corporate Citizens.",
    "Each student of Geeta University is trained by personality development coaches to have army-grade mental strength and to handle stress at the workplace and in life. The students are equipped with the right skills to handle their own finances and taxes. Students at Geeta University comprise a new generation of professionals who are an asset to the organization from the first day. Here, teaching is focused on hands-on activities and practical learning with the faculties ensuring that they follow the student-oriented approach.",
  ],
  image: "/teaching-learning-practices/teaching-practice-hero.webp",
};

export const pedagogicalMethods: PedagogicalMethod[] = [
  {
    id: "active-learning",
    title: "Active Learning",
    headingOrange: "Active",
    headingBlack: "Learning",
    icon: "Zap",
    summary: "Engaging students through problem-solving, case studies, and interactive debates.",
    description:
      "Active learning is a form of teaching that entails actively engaging students with course material through conversations, problem solving, case studies, role plays, and other ways. Although active learning techniques impose more responsibility on the learner than passive approaches such as lectures, teacher assistance is still essential in the active learning classroom. Active learning exercises can last from a few minutes to whole class sessions.",
    highlights: [
      "Interactive Problem Solving",
      "Case Study Analysis",
      "Role Playing Scenarios",
      "Continuous Faculty Guidance",
    ],
  },
  {
    id: "concept-mapping",
    title: "Concept Mapping",
    headingOrange: "Concept",
    headingBlack: "Mapping",
    icon: "Network",
    summary: "Graphical representation of knowledge structures and complex ideas.",
    description:
      "In academics, concept mapping is used as a powerful graphical tool that aids in the organization and representation of information. Concepts are described in structured nodes and linked with connecting lines that indicate relationships. This method allows every notion to be interconnected with multiple domains, enhancing conceptual clarity.",
    highlights: [
      "Visual Knowledge Representation",
      "Interconnected Node Diagrams",
      "Structured Information Synthesis",
      "Digital Mapping Tools",
    ],
  },
  {
    id: "flipped-classroom",
    title: "Flipping Classroom",
    headingOrange: "Flipping",
    headingBlack: "Classroom",
    icon: "Repeat",
    summary: "Shifting classroom focus from lecture delivery to collaborative learning.",
    description:
      "A 'flipped classroom' is one in which the focus shifts from traditional lecturing to active learning. Students review baseline concepts independently prior to class, freeing up classroom hours for in-depth analysis, debates, and challenging problem-solving exercises tailored to individual learning speeds.",
    highlights: [
      "Pre-Class Content Review",
      "In-Depth In-Class Debates",
      "Self-Paced Skill Retention",
      "Interactive Problem Workshops",
    ],
  },
  {
    id: "just-in-time",
    title: "Just In-Time Teaching",
    headingOrange: "Just In-Time",
    headingBlack: "Teaching",
    icon: "Clock",
    summary: "Tailored feedback based on web-submitted pre-class exercises.",
    description:
      "Through a two-step succession of learning activities, just-in-time teaching actively engages students. Students complete targeted exercises via interactive web portals before class. The instructor analyzes responses to identify areas of misconception, adapting the upcoming session to provide customized, just-in-time feedback.",
    highlights: [
      "Web-Based Pre-Class Warmups",
      "Targeted Misconception Feedback",
      "Adaptive Session Design",
      "Enhanced Student Accountability",
    ],
  },
  {
    id: "low-stakes-testing",
    title: "Low Stakes Testing",
    headingOrange: "Low Stakes",
    headingBlack: "Testing",
    icon: "CheckSquare",
    summary: "Frequent, low-pressure assessments that encourage learning through iteration.",
    description:
      "Low-stakes testing provides regular evaluation opportunities where students can attempt quizzes repeatedly without academic penalty. Using classroom clickers and mastery-learning quiz systems, students solidify retention by applying knowledge iteratively.",
    highlights: [
      "Mastery-Based Quizzing",
      "Zero-Penalty Failure Tolerance",
      "Classroom Clicker System",
      "Proven High Retention Rates",
    ],
    image: "/teaching-learning-practices/low-stakes-testing.webp",
  },
  {
    id: "peer-instructions",
    title: "Peer Instructions",
    headingOrange: "Peer",
    headingBlack: "Instructions",
    icon: "Users",
    summary: "Collaborative peer debates that deepen conceptual understanding.",
    description:
      "In Peer Instruction, instructors pose challenging questions. Students first answer individually, then collaborate with peers to debate their answers, and finally re-submit their responses. Data shows students arrive at significantly more accurate answers with higher confidence.",
    highlights: [
      "Structured Peer Discussion",
      "Confidence-Weighted Answers",
      "Collaborative Reasoning",
      "Data-Backed Learning Gains",
    ],
    image: "/teaching-learning-practices/peer-instruction.jpg",
  },
  {
    id: "team-based-learning",
    title: "Team Based Learning",
    headingOrange: "Team Based",
    headingBlack: "Learning",
    icon: "UserCheck",
    summary: "Small group active learning techniques with instant mentor feedback.",
    description:
      "TEAM Based Learning is an active learning and small group teaching technique that allows students to apply conceptual information through a structured sequence of solo work, team tasks, and immediate mentor feedback.",
    highlights: [
      "Small Group Synergy",
      "Immediate Mentor Feedback",
      "Solo & Team Task Sequences",
      "Real-World Conceptual Application",
    ],
  },
];

export const teachingStats = [
  { value: "100%", label: "Student-Centric Approach", desc: "Tailored learning pathways for every student" },
  { value: "IIT & IIM", label: "Faculty Mentorship", desc: "Instructors from premier global institutes" },
  { value: "XEDGE", label: "Life & Corporate Skills", desc: "Army-grade mental strength & financial literacy" },
  { value: "7+", label: "Innovative Methods", desc: "From flipped classrooms to peer instruction" },
];
