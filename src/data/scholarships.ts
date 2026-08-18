export interface ScholarshipCriterion {
  title: string;
}

export interface ScholarshipSectionData {
  title: string;
  description: string;
  criteria: ScholarshipCriterion[];
  buttonText: string;
  buttonHref: string;
}

export const scholarshipData: ScholarshipSectionData = {
  title: "Scholarships at Geeta University",

  description:
    "We believe that financial constraints should not limit access to quality education. At Geeta University, we offer scholarships based on:",

  criteria: [
    {
      title: "Merit / Percentage in Qualifying Exams",
    },
    {
      title: "National Level Entrance Exams",
    },
    {
      title: "Social Responsibility",
    },
    {
      title: "Sports Performance",
    },
  ],

  buttonText: "Explore Scholarships",
  buttonHref: "https://geetauniversity.edu.in/scholarship-predictor",
};

export const gutsData = {
  label: "GUTS",

  title: "GEETA UNIVERSITY TEST OF SCHOLARSHIP",

  description:
    "Geeta University (GU) strongly believes that monetary constraints should not be an obstacle for a student to have access to quality education. Following scholarships are offered at GU:",

  buttonText: "Apply for GUTS",
  buttonHref: "https://geetauniversity.edu.in/guts",
};