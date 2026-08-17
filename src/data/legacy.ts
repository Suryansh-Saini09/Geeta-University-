export interface LegacyInstitution {
  name: string;
  location?: string;
  note?: string;
}

export interface LegacyMilestone {
  year: string;
  institutions: LegacyInstitution[];
  featured?: boolean;
}

export const legacyIntro = {
  eyebrow: "Our Legacy",
  title: "Four Decades.",
  highlightedTitle: "Countless Futures.",
  description:
    "Geeta Group of Institutions, which provides quality education across diverse levels and fields, initiated its journey in 1985. Today, it has become an educational hub operating many schools, colleges and even an esteemed University under its aegis. The group is committed to shaping countless futures, ensuring holistic student development for the past four decades.",
};

export const legacyMilestones: LegacyMilestone[] = [
  {
    year: "1998",
    institutions: [
      {
        name: "Geeta Vidya Mandir",
        location: "NHBC, Panipat",
      },
    ],
  },

  {
    year: "2001",
    institutions: [
      {
        name: "Geeta Vidya Mandir Public School",
        location: "Sanoli Road, Panipat",
      },
    ],
  },

  {
    year: "2006",
    institutions: [
      {
        name: "Geeta College of Education",
        location: "Sanoli Road, Panipat",
      },
    ],
  },

  {
    year: "2007",
    institutions: [
      {
        name: "Geeta Institute of Law",
        location: "GT Road, Panipat",
      },
      {
        name: "Lakshay College of Education",
        location: "Naultha, Panipat",
      },
    ],
  },

  {
    year: "2008",
    featured: true,
    institutions: [
      {
        name: "Geeta Engineering College",
        location: "Panipat",
        note: "Converted to Geeta University later on",
      },
      {
        name: "Geeta Institute of Education",
        location: "GT Road, Panipat",
      },
    ],
  },

  {
    year: "2012",
    institutions: [
      {
        name: "Delhi Public School",
        location: "Jind",
      },
    ],
  },

  {
    year: "2016",
    institutions: [
      {
        name: "Lakshay International School",
        location: "Naultha, Panipat",
      },
    ],
  },

  {
    year: "2019",
    institutions: [
      {
        name: "Geeta Institute of Pharmacy",
        location: "Panipat",
      },
      {
        name: "Kualakubs",
        note: "A Pre-School Chain in Panipat, Jind, Gurugram & more",
      },
    ],
  },

  {
    year: "2022",
    featured: true,
    institutions: [
      {
        name: "Geeta University",
        location: "Panipat",
      },
    ],
  },

  {
    year: "2026",
    institutions: [
      {
        name: "Kualakubs World School",
        location: "Gurugram",
        note: "Upcoming",
      },
    ],
  },
];