export interface Presenter {
  name: string;
  designation: string;
}

export interface Award {
  id: number;
  image: string;
  title: string;
  presentedBy: string;
  designation: string;
  presenters?: Presenter[];
}

export const awards: Award[] = [
  {
    id: 1,
    image: "/about/CERTIFICATE-OF-EXCELLENCE.png",
    title: "CERTIFICATE OF EXCELLENCE",
    presentedBy: "Sh. Nitin Gadkari",
    designation: "Minister of Road Transport & Highways of India",
    presenters: [
      {
        name: "Sh. Nitin Gadkari",
        designation: "Minister of Road Transport & Highways of India",
      },
    ],
  },

  {
    id: 2,
    image: "/about/AWARD-FOR-BEST-GROUP-OF-COLLEGES-IN-DELHI,-NCR.png",
    title: "AWARD FOR BEST GROUP OF COLLEGES IN DELHI/NCR",
    presentedBy: "Ms. Raveena Tandon",
    designation: "Bollywood Actress",
    presenters: [
      {
        name: "Ms. Raveena Tandon",
        designation: "Bollywood Actress",
      },
    ],
  },

  {
    id: 3,
    image: "/about/Global-Excellence-&-leadership-Award-2025.png",
    title: "AWARD FOR RANKED 1ST AMONG TOP PRIVATE B-SCHOOLS IN DELHI NCR",
    presentedBy: "Ms. Bipasha Basu",
    designation: "Bollywood Actress",
    presenters: [
      {
        name: "Ms. Bipasha Basu",
        designation: "Bollywood Actress",
      },
    ],
  },

  {
    id: 4,
    image: "/about/AWARD-FOR-FASTEST-GROWING-UNIVERSITY-OF-NORTH-INDIA.png",
    title: "AWARD FOR FASTEST GROWING UNIVERSITY OF NORTH INDIA",
    presentedBy: "Smt. Jaya Prada",
    designation: "Bollywood Actress & Former Member of Parliament",
    presenters: [
      {
        name: "Smt. Jaya Prada",
        designation: "Bollywood Actress & Former Member of Parliament",
      },
    ],
  },

  {
    id: 5,
    image: "/about/AWARD-FOR-BEST-EDUCATION-GROUP.png",
    title: "AWARD FOR BEST EDUCATION GROUP",
    presentedBy: "Smt. Sharmila Tagore & Dr. C P Thakur",
    designation: "Padma Bhushan Awardee & Member of Parliament, Rajya Sabha",
    presenters: [
      {
        name: "Smt. Sharmila Tagore",
        designation: "Padma Bhushan Awardee",
      },
      {
        name: "Dr. C P Thakur",
        designation: "Member of Parliament, Rajya Sabha",
      },
    ],
  },

  {
    id: 6,
    image: "/about/awardd.png",
    title: "AWARD FOR NORTH INDIA’S LEADER IN AI & EMERGING TECH EDUCATION",
    presentedBy: "Sh. Randeep Hooda",
    designation: "Bollywood Actor",
    presenters: [
      {
        name: "Sh. Randeep Hooda",
        designation: "Bollywood Actor",
      },
    ],
  },
];