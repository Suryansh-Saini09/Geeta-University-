export interface CampusFacility {
  id: string;
  title: string;
  category: "Academics" | "Research" | "Community" | "Living";
  description: string;
  image: string;
  features?: string[];
}

export interface SportFacility {
  id: string;
  title: string;
  tagline: string;
  type: "Outdoor" | "Indoor" | "Fitness";
  image: string;
  highlights?: string;
}

export interface CampusEvent {
  id: string;
  title: string;
  tagline: string;
  category: "Sports" | "Management" | "Cultural" | "Literary" | "Academic" | "Lifestyle";
  image: string;
  description?: string;
}

export interface EminentPersonality {
  id: string;
  title: string;
  role?: string;
  image: string;
}

export interface CampusFaq {
  id: string;
  question: string;
  answer: string;
}

export const campusLifeHeroData = {
  title: "Campus Life",
  subtitle: "Where Learning Meets Living & Ambition Meets Culture",
  description:
    "Nestled amidst the lush green surroundings of Panipat, the warm, welcoming, and peaceful campus of Geeta University is the perfect place to enjoy a great learning experience.",
  bannerImage: "/campus-life/hero.jpg",
  stats: [
    { value: "10+ Acres", label: "Sports Complex" },
    { value: "50+", label: "Clubs & Societies" },
    { value: "100%", label: "Wi-Fi & Smart Tech" },
    { value: "24/7", label: "Security & Medical Care" },
  ],
};

export const campusFacilities: CampusFacility[] = [
  {
    id: "classrooms",
    title: "Classrooms",
    category: "Academics",
    description:
      "Spacious and air-conditioned, our classrooms boost the intellectual growth of students with the help of modern tools & technology.",
    image: "/campus-life/facility-classrooms.jpg",
    features: ["Interactive AV Systems", "Air-Conditioned", "Ergonomic Seating", "Acoustic Insulation"],
  },
  {
    id: "conference-rooms",
    title: "Conference Rooms",
    category: "Academics",
    description:
      "The eloquent design of our designed conference rooms provide a perfect space to hold group discussions, share innovative ideas, and brainstorm new concepts.",
    image: "/campus-life/facility-conference.jpg",
    features: ["HD Video Conferencing", "Smart Whiteboards", "Executive Seating", "Discussion Hubs"],
  },
  {
    id: "library",
    title: "Library",
    category: "Academics",
    description:
      "Our Library acts as an integrated knowledge and resource centre for enhancing student learning and inspiring them to think outside the box.",
    image: "/campus-life/facility-library.jpg",
    features: ["Digital E-Resources", "Silent Reading Zones", "Global Journals", "Discussion Pods"],
  },
  {
    id: "laboratories",
    title: "Laboratories",
    category: "Research",
    description:
      "Our well-equipped modern labs help students put their classroom learning to practice and understand concepts by doing things on their own.",
    image: "/campus-life/facility-labs.jpg",
    features: ["AI & IoT Labs", "High-End Workstations", "Precision Instruments", "Industry-Grade Gear"],
  },
  {
    id: "auditorium",
    title: "Auditorium",
    category: "Community",
    description:
      "Our grand Auditorium is where we celebrate the spirit of Geeta University by hosting interactive sessions with dignitaries, cultural activities, conferences, and more.",
    image: "/campus-life/facility-auditorium.jpg",
    features: ["Seating for 1000+", "Surround Sound Acoustics", "Theatrical Lighting", "Green Rooms"],
  },
  {
    id: "cafeteria",
    title: "Cafeteria",
    category: "Living",
    description:
      "Our cafeterias are where friendships blossom and lifelong bonds are formed over shared treats and delicious food bites.",
    image: "/campus-life/facility-cafeteria.jpg",
    features: ["Multi-Cuisine Menu", "Hygienic Kitchens", "Outdoor Seating", "Coffee & Snack Bar"],
  },
  {
    id: "hostels",
    title: "Hostels",
    category: "Living",
    description:
      "A cozy and comfortable space for students to relax and unwind amidst friends and create beautiful memories for life.",
    image: "/campus-life/facility-hostels.jpg",
    features: ["Separate Boys & Girls", "24/7 Power Backup", "High-Speed Wi-Fi", "Dedicated Warden Support"],
  },
];

export const sportsFacilities: SportFacility[] = [
  {
    id: "cricket",
    title: "Cricket",
    tagline: "The Spirit of Cricket, The Pride of Campus",
    type: "Outdoor",
    image: "/campus-life/sport-cricket.jpg",
    highlights: "Full-sized turf pitch with practice nets and pavilion",
  },
  {
    id: "football",
    title: "Football",
    tagline: "Kicking Dreams Into Reality",
    type: "Outdoor",
    image: "/campus-life/sport-football.jpg",
    highlights: "Lush green FIFA standard grass turf field",
  },
  {
    id: "table-tennis",
    title: "Table Tennis",
    tagline: "Where Speed Meets Strategy",
    type: "Indoor",
    image: "/campus-life/sport-tabletennis.jpg",
    highlights: "Tournament-grade TT tables and anti-skid flooring",
  },
  {
    id: "pool",
    title: "8 Ball Pool",
    tagline: "The Perfect Break Starts Here",
    type: "Indoor",
    image: "/campus-life/sport-pool.jpg",
    highlights: "Recreational zone for tactical recreation & unwinding",
  },
  {
    id: "badminton",
    title: "Badminton",
    tagline: "The Power of Precision",
    type: "Indoor",
    image: "/campus-life/sport-badminton.jpg",
    highlights: "Synthetic wooden indoor courts with shadowless illumination",
  },
  {
    id: "gymnasium",
    title: "Gymnasium",
    tagline: "Train Hard, Rise Higher",
    type: "Fitness",
    image: "/campus-life/sport-gym.jpg",
    highlights: "Cardio stations, free weights & certified physical trainers",
  },
  {
    id: "volleyball",
    title: "Volleyball",
    tagline: "Building Teams, Creating Champions",
    type: "Outdoor",
    image: "/campus-life/sport-volleyball.jpg",
    highlights: "Standard sand & clay volleyball courts with floodlights",
  },
];

export const campusEvents: CampusEvent[] = [
  {
    id: "sports-meet",
    title: "Sports Meet",
    tagline: "Celebrating Sports, Celebrating Spirit",
    category: "Sports",
    image: "/campus-life/event-sportsmeet.jpg",
    description: "Celebrating Sports, Celebrating Spirit",
  },
  {
    id: "bizz-fiesta",
    title: "Bizz Fiesta",
    tagline: "Celebrating Creativity, Strategy & Success",
    category: "Management",
    image: "/campus-life/event-bizzfiesta.jpg",
    description: "Celebrating Creativity, Strategy & Success",
  },
  {
    id: "sangrila",
    title: "Sangri’la",
    tagline: "One Stage, Infinite Stories",
    category: "Cultural",
    image: "/campus-life/event-sangrila.jpg",
    description: "One Stage, Infinite Stories",
  },
  {
    id: "lit-fest",
    title: "Literature Fest",
    tagline: "Unfolding Thoughts, Uniting Minds",
    category: "Literary",
    image: "/campus-life/event-litfest.jpg",
    description: "Unfolding Thoughts, Uniting Minds",
  },
  {
    id: "orientation",
    title: "Orientation",
    tagline: "From Fresh Faces to Family",
    category: "Academic",
    image: "/campus-life/event-orientation.jpg",
    description: "From Fresh Faces to Family",
  },
  {
    id: "fashion-parade",
    title: "Fashion Parade",
    tagline: "Fashion in Motion, Elegance in Action",
    category: "Lifestyle",
    image: "/campus-life/event-fashionparade.jpg",
    description: "Fashion in Motion, Elegance in Action",
  },
];

export const eminentPersonalities: EminentPersonality[] = [
  {
    id: "ep-1",
    title: "Modern Classroom / Dignitary Session",
    role: "Eminent Personality",
    image: "/campus-life/personality-1.jpg",
  },
  {
    id: "ep-2",
    title: "Conference Room / Dignitary Session",
    role: "Eminent Personality",
    image: "/campus-life/personality-2.jpg",
  },
  {
    id: "ep-3",
    title: "University Library / Dignitary Session",
    role: "Eminent Personality",
    image: "/campus-life/personality-3.jpg",
  },
  {
    id: "ep-4",
    title: "Science Lab / Dignitary Session",
    role: "Eminent Personality",
    image: "/campus-life/personality-4.jpg",
  },
  {
    id: "ep-5",
    title: "Auditorium / Dignitary Session",
    role: "Eminent Personality",
    image: "/campus-life/personality-5.jpg",
  },
  {
    id: "ep-6",
    title: "Cafeteria / Dignitary Session",
    role: "Eminent Personality",
    image: "/campus-life/personality-6.jpg",
  },
  {
    id: "ep-7",
    title: "Dignitary Interaction",
    role: "Eminent Personality",
    image: "/campus-life/personality-7.jpg",
  },
  {
    id: "ep-8",
    title: "Distinguished Guest",
    role: "Eminent Personality",
    image: "/campus-life/personality-8.jpg",
  },
];

export const campusFaqs: CampusFaq[] = [
  {
    id: "faq-1",
    question: "How is campus life at Geeta University?",
    answer:
      "Campus life at Geeta University is vibrant and engaging, with modern infrastructure, student clubs, cultural events, and sports activities. The university promotes holistic development by balancing academics with extracurricular and social experiences.",
  },
  {
    id: "faq-2",
    question: "What facilities are available on the Geeta University campus?",
    answer:
      "The campus offers smart classrooms, advanced laboratories, libraries, sports complexes, hostels, and Wi-Fi-enabled infrastructure, ensuring a comfortable and productive learning environment for students.",
  },
  {
    id: "faq-3",
    question: "Does Geeta University provide hostel facilities?",
    answer:
      "Yes, Geeta University provides well-equipped hostel facilities with secure accommodation, hygienic food, and essential amenities for both boys and girls, ensuring a safe and comfortable stay.",
  },
  {
    id: "faq-4",
    question: "What extracurricular activities are available at Geeta University?",
    answer:
      "Students can participate in cultural events, technical fests, sports competitions, and student clubs that focus on leadership, creativity, and personality development beyond academics.",
  },
  {
    id: "faq-5",
    question: "Is Geeta University campus safe for students?",
    answer:
      "Yes, the campus maintains a safe and secure environment with surveillance systems, security staff, and strict guidelines to ensure student safety and well-being.",
  },
  {
    id: "faq-6",
    question: "Does Geeta University organize events and fests?",
    answer:
      "Geeta University regularly organizes cultural festivals, technical events, workshops, and guest lectures, providing students with exposure, networking opportunities, and skill development.",
  },
  {
    id: "faq-7",
    question: "How is student life at Geeta University different from other universities?",
    answer:
      "Student life at Geeta University stands out due to its focus on industry exposure, practical learning, and balanced campus culture that combines academics with personal growth opportunities.",
  },
];
