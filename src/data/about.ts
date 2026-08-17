export type Recognition = {
  name: string;
  image: string;
  alt: string;
};

export type Award = {
  image: string;
  title: string;
  presentedBy: string;
  designation: string;
};

export type LegacyItem = {
  year: string;
  events: string[];
};

export type Leader = {
  name: string;
  designation: string;
  image: string;
  message: string;
};

export type DocumentLink = {
  title: string;
  href: string;
};

export const recognitions: Recognition[] = [
  {
    name: "UGC",
    image: "/about/19.png",
    alt: "University Grants Commission",
  },
  {
    name: "BCI",
    image: "/about/4.png",
    alt: "Bar Council of India",
  },
  {
    name: "PCI",
    image: "/about/5.png",
    alt: "Pharmacy Council of India",
  },
  {
    name: "MCI",
    image: "/about/6.png",
    alt: "Medical Council of India",
  },
];

export const vision =
  "To reach the pinnacle of academic excellence and nurture the dreams and aspirations of students aspiring to evolve into well-rounded technocrats, professionals, scientists, leaders, and entrepreneurs dedicated to nation-building.";

export const mission = [
  "To inspire academic excellence through a student-centered and outcome-based teaching-learning process.",
  "To develop the right knowledge, skills, behavior, and attitude among students.",
  "To promote interdisciplinary research.",
  "To establish a strong industry-academia connection.",
  "To nurture entrepreneurship and support the innovative ideas of students.",
];

export const awards: Award[] = [
  {
    image: "/about/CERTIFICATE-OF-EXCELLENCE.png",
    title: "CERTIFICATE OF EXCELLENCE",
    presentedBy: "Sh. Nitin Gadkari",
    designation: "Minister of Road Transport & Highways of India",
  },
  {
    image:
      "/about/AWARD-FOR-BEST-GROUP-OF-COLLEGES-IN-DELHI,-NCR.png",
    title: "AWARD FOR BEST GROUP OF COLLEGES IN DELHI/NCR",
    presentedBy: "Geeta University",
    designation: "",
  },
  {
    image: "/about/Global-Excellence-&-leadership-Award-2025.png",
    title: "GLOBAL EXCELLENCE & LEADERSHIP AWARD 2025",
    presentedBy: "",
    designation: "",
  },
  {
    image: "/about/AWARD-FOR-BEST-EDUCATION-GROUP.png",
    title: "AWARD FOR BEST EDUCATION GROUP",
    presentedBy: "",
    designation: "",
  },
  {
    image:
      "/about/AWARD-FOR-FASTEST-GROWING-UNIVERSITY-OF-NORTH-INDIA.png",
    title: "AWARD FOR FASTEST GROWING UNIVERSITY OF NORTH INDIA",
    presentedBy: "",
    designation: "",
  },
  {
    image: "/about/awardd.png",
    title: "NORTH INDIA'S LEADER IN AI & EMERGING TECHNOLOGY EDUCATION",
    presentedBy: "",
    designation: "",
  },
];

export const legacy: LegacyItem[] = [
  {
    year: "1998",
    events: ["Geeta Vidya Mandir, NHBC, Panipat"],
  },
  {
    year: "2001",
    events: ["Geeta Vidya Mandir Public School, Sanoli Road, Panipat"],
  },
  {
    year: "2006",
    events: ["Geeta Institute of Law"],
  },
  {
    year: "2007",
    events: ["Geeta Engineering College"],
  },
  {
    year: "2008",
    events: ["Geeta Institute of Management & Technology"],
  },
  {
    year: "2012",
    events: ["Geeta University established"],
  },
  {
    year: "2016",
    events: ["Expansion of academic programs and infrastructure"],
  },
  {
    year: "2019",
    events: ["Growth of research and industry collaboration"],
  },
  {
    year: "2022",
    events: ["Geeta University enters a new phase of academic growth"],
  },
  {
    year: "2026",
    events: ["Continued focus on technology, innovation and global education"],
  },
];