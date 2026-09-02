export interface AdmissionOffice {
  id: string;
  city: string;
  address: string;
  landmark?: string;
  phone?: string;
}

export interface ContactMainInfo {
  location: string;
  locationDetails: string;
  phonePrimary: string;
  phoneSecondary: string;
  emailPrimary: string;
  emailAdmissions: string;
  workingHours: string;
}

export const contactHeroData = {
  title: "Contact Geeta University",
  subtitle: "Geeta University is now at your doorstep",
  description:
    "Have questions about courses, admissions, fees, or campus visits? Connect directly with our Panipat main campus or visit any of our regional admission centers across Delhi NCR, Haryana, and Assam.",
  heroImage: "/contact-us/hero-bg.webp",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Contact Us", href: "/contact-us" },
  ],
};

export const contactMainInfo: ContactMainInfo = {
  location: "NH-71, Naultha, Panipat, Haryana 132145",
  locationDetails: "Gohana Road, Panipat (13 km from Panipat Junction Railway Station)",
  phonePrimary: "+91 92787 68000",
  phoneSecondary: "+91 99960 00444",
  emailPrimary: "info@geetauniversity.edu.in",
  emailAdmissions: "admissions@geetauniversity.edu.in",
  workingHours: "Monday - Saturday: 9:00 AM - 5:00 PM (Closed on Sundays)",
};

export const admissionOfficesList: AdmissionOffice[] = [
  {
    id: "sonipat",
    city: "Sonipat Office",
    address: "2nd Floor, Gupta Dosa Corner, Subhash Chowk, Sonipat, Haryana",
    landmark: "Subhash Chowk",
    phone: "+91 92787 68000",
  },
  {
    id: "shamli",
    city: "Shamli Office",
    address: "Above HDFC Bank, Budhana Road, Shamli, Uttar Pradesh",
    landmark: "Above HDFC Bank",
    phone: "+91 92787 68000",
  },
  {
    id: "karnal",
    city: "Karnal Office",
    address: "79, Mughal Canal Road, Karnal, Haryana",
    landmark: "Mughal Canal Road",
    phone: "+91 92787 68000",
  },
  {
    id: "delhi",
    city: "Delhi NCR Office",
    address: "C-8/28, Second Floor, Sector 7 Rohini, New Delhi",
    landmark: "Opposite Metro Pillar No. 395",
    phone: "+91 92787 68000",
  },
  {
    id: "guwahati",
    city: "Guwahati Office (North-East)",
    address: "Ground Floor at Borah Market Complex, Shree Nagar, R.G. Baruah Road, Guwahati-781005, Assam",
    landmark: "R.G. Baruah Road",
    phone: "+91 92787 68000",
  },
  {
    id: "kurukshetra",
    city: "Kurukshetra Office",
    address: "Opposite Hotel Heritage, Pipli Road, Kurukshetra, Haryana",
    landmark: "Pipli Road",
    phone: "+91 92787 68000",
  },
];

export const googleMapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3513.081449830278!2d76.91621641490632!3d29.39019428212744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db3ebeb2e4ed1%3A0x725e8f0f6347f31e!2sGeeta%20University!5e0!3m2!1sen!2sin!4v1617628161920!5m2!1sen!2sin";
