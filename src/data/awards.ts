export interface Award {
  id: number;
  image: string;
  title: string;
  presentedBy: string;
  designation: string;
}

export const awards: Award[] = [
  {
    id: 1,
    image: "/about/CERTIFICATE-OF-EXCELLENCE.png",
    title: "CERTIFICATE OF EXCELLENCE",
    presentedBy: "Sh. Nitin Gadkari",
    designation: "Minister of Road Transport & Highways of India",
  },

  {
    id: 2,
    image: "/about/AWARD-FOR-BEST-GROUP-OF-COLLEGES-IN-DELHI,-NCR.png",
    title: "AWARD FOR BEST GROUP OF COLLEGES IN DELHI/NCR",
    presentedBy: "Ms. Raveena Tandon",
    designation: "Bollywood Actress",
  },

  {
    id: 3,
    image: "/about/Global-Excellence-&-leadership-Award-2025.png",
    title: "AWARD FOR RANKED 1ST AMONG TOP PRIVATE B-SCHOOLS IN DELHI NCR",
    presentedBy: "Ms. Bipasha Basu",
    designation: "Bollywood Actress",
  },

  {
    id: 4,
    image: "/about/AWARD-FOR-FASTEST-GROWING-UNIVERSITY-OF-NORTH-INDIA.png",
    title: "AWARD FOR FASTEST GROWING UNIVERSITY",
    presentedBy: "Geeta University",
    designation: "Recognition & Excellence",
  },

  {
    id: 5,
    image: "/about/AWARD-FOR-BEST-EDUCATION-GROUP.png",
    title: "AWARD FOR BEST EDUCATION",
    presentedBy: "Geeta University",
    designation: "Excellence in Education",
  },

  {
    id: 6,
    image: "/about/awardd.png",
    title: "AWARD FOR NORTH INDIA’S LEADER IN AI & EMERGING TECH EDUCATION",
    presentedBy: "Sh. Randeep Hooda",
    designation: "Bollywood Actor",
  },
];