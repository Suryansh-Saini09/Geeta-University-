import type { EdgePageData } from "./types";

export const gthPage: EdgePageData = {
  slug: "gth",
  name: "Geeta Technical Hub",
  shortName: "GTH",
  category: "GU Edge",

  seo: {
    title: "Geeta Technical Hub (GTH) | Advanced Technology, Certifications & Skills",
    description:
      "Future-ready tech education, AWS/RedHat/Cisco certifications, live project building, and 100% skill-first mentorship at Geeta Technical Hub.",
    keywords: [
      "geeta technical hub",
      "gth geeta university",
      "tech certifications panipat",
      "aws cisco redhat training haryana",
      "hackforge coding bootcamp",
    ],
  },

  hero: {
    title: "Future-Ready Learning Starts Here",
    eyebrow: "GU EDGE — GEETA TECHNICAL HUB",
    subtitle: "Emerging Tech · Global Certifications · Hackathons · Product Incubation",
    description:
      "In a world driven by technology, innovation, and global competition, Geeta Technical Hub (GTH) stands as the beating heart of Geeta University, redefining technical education through skill-based learning, industry alignment, and global certifications. GTH is Geeta University's dedicated innovation and technical skill ecosystem that bridges the gap between classroom education and real-world industry needs.",
    image: "/edge/gth/imgg.webp",
    videoThumb: "/edge/gth/2.webp",
    videoUrl: "https://www.youtube.com/embed/KYyk8Yr0Ty8?si=q0lBcWbq51__els_",
    ctaText: "Explore GTH Certifications",
    ctaLink: "https://admissions.geetauniversity.edu.in/",
  },

  stats: {
    title: "Technology Impact in Numbers",
    subtitle: "Empowering Next-Generation Engineers and Developers",
    stats: [
      {
        value: "3000+",
        label: "Students Upskilled",
        sublabel: "Across cutting-edge tech tracks",
        iconName: "Users",
      },
      {
        value: "₹40 LPA",
        label: "Highest Package",
        sublabel: "Top-tier technology recruitment",
        iconName: "Award",
      },
      {
        value: "150+",
        label: "Projects Delivered",
        sublabel: "Enterprise and open-source applications",
        iconName: "Code2",
      },
      {
        value: "25+",
        label: "Hackathons Conducted",
        sublabel: "Including NexHack & HackForge",
        iconName: "Terminal",
      },
      {
        value: "500+",
        label: "Internships Secured",
        sublabel: "With tech leaders and fast-scaling startups",
        iconName: "Briefcase",
      },
      {
        value: "100%",
        label: "Skill-First Mentorship",
        sublabel: "By certified domain practitioners",
        iconName: "CheckCircle2",
      },
    ],
  },

  mentors: {
    eyebrow: "TECHNICAL LEADERSHIP",
    title: "Meet Our Mentors",
    subtitle: "Guiding Futures with Expertise, Experience & Empathy",
    mentors: [
      {
        name: "Mr. Pankaj Bajaj",
        designation: "Chief Operating Officer, M.Tech.",
        role: "Chief Operating Officer",
        description:
          "Passionate about bridging academia and industry. Leads initiatives to enhance technical training, innovation, and applied learning in emerging technologies.",
        fullBio:
          "With extensive experience in leading technical training frameworks, Mr. Bajaj drives institutional collaborations, industry certifications, and incubation projects.",
        image: "/edge/gth/pankaj_bajaj.png",
      },
      {
        name: "Mohammad Aslam",
        designation: "Technical Trainer, MCA",
        role: "Technical Trainer",
        description:
          "Technical Trainer and former corporate trainer; Skilled Java Developer; Specialized in DSA, C, C++, Java, Python, and MySQL.",
        fullBio:
          "Recognized for versatile programming expertise, mentoring hundreds of students for national coding competitions and LeetCode algorithmic mastery.",
        image: "/edge/gth/Mohammad-Aslam-(Custom).png",
      },
      {
        name: "Ronak Duggar",
        designation: "Technical Trainer & Full Stack Developer, MCA",
        role: "Technical Trainer & Full Stack Developer",
        description:
          "Specialized in MERN Stack, cloud deployments, and scalable web architectures.",
        fullBio:
          "Contributed to technical research and software analysis; Active freelancer and hackathon project mentor at GTH.",
        image: "/edge/gth/Ronak-(Custom).png",
      },
      {
        name: "Ram Mohan Dixit",
        designation: "Corporate Technical Trainer, B.Tech",
        role: "Corporate Technical Trainer",
        description:
          "Professional Corporate Technical Trainer with expertise across the entire modern Full Stack domain.",
        fullBio:
          "Specializes in modern JavaScript ecosystems, backend microservices, DevOps pipelines, and enterprise-grade software development practices.",
        image: "/edge/gth/ram-dixit.webp",
      },
    ],
  },

  features: [
    {
      id: "what-we-offer",
      eyebrow: "CORE PILLARS",
      title: "What We Offer at GTH",
      subtitle: "Comprehensive Technological Enablement",
      layoutStyle: "cards",
      features: [
        {
          title: "Global Certifications",
          subtitle: "AWS · Microsoft · Red Hat · Cisco",
          description:
            "We offer globally recognized certifications from AWS, Microsoft, Red Hat, Cisco, and Oracle — boosting student competencies, enhancing resumes, and opening doors to international job opportunities.",
          image: "/edge/gth/11-(1).png",
        },
        {
          title: "Placement Readiness",
          subtitle: "Coding Tests · Mock Interviews · SFIT Guidance",
          description:
            "Placement preparation begins from Day 1 with intensive aptitude coaching, live coding challenges, simulated technical interviews, and resume reviews — ensuring top offers from Flipkart, Deloitte, Codways, TCS, and more.",
          image: "/edge/gth/11-(2).png",
        },
        {
          title: "Innovation & Product Building",
          subtitle: "HackForge · AI Tools · Full Stack Apps",
          description:
            "Students build real-world tech solutions via HackForge and specialized skill centers — developing AI tools, cybersecurity apps, and full stack projects like resume parsers, smart dashboards, and cloud-deployed applications.",
          image: "/edge/gth/11-(3).png",
        },
      ],
    },
    {
      id: "programs-and-trainings",
      eyebrow: "SKILL CENTERS & LABS",
      title: "Programs & Trainings at GTH",
      subtitle: "Tool-Integrated, Certification-Aligned Pedagogy",
      layoutStyle: "split",
      features: [
        {
          title: "Full Stack Web Bootcamps",
          description: "MERN stack, Next.js, GraphQL, Docker, and CI/CD pipelines.",
          tag: "Development",
        },
        {
          title: "Cybersecurity & Forensics",
          description: "Ethical hacking, CEH prep, network defense, penetration testing, and IT audit.",
          tag: "Security",
        },
        {
          title: "Python for Data Science & AI",
          description: "Pandas, NumPy, Scikit-learn, PyTorch, computer vision, and NLP.",
          tag: "Data Science",
        },
        {
          title: "AWS Cloud Labs",
          description: "Cloud practitioner & solutions architect certification training with live sandboxes.",
          tag: "Cloud",
        },
        {
          title: "DSA & Competitive Coding",
          description: "Structured LeetCode / Codeforces algorithmic prep for top product companies.",
          tag: "Algorithms",
        },
      ],
    },
  ],

  videos: {
    eyebrow: "VOICES FROM THE HUB",
    title: "Real Stories. Real Skills. Real Impact.",
    subtitle: "Hear directly from students who transformed their technical careers through GTH",
    playlist: [
      {
        title: "Pallavi's Tech Journey",
        description: "How hands-on project building and certification mentorship unlocked high-tier career offers.",
        thumbnail: "/edge/gth/3.webp",
        videoUrl: "https://www.youtube.com/embed/KYyk8Yr0Ty8?si=q0lBcWbq51__els_",
        tag: "Student Story",
      },
      {
        title: "Rahul's Hackathon Breakthrough",
        description: "From beginner coder to hackathon champion building full stack cloud applications.",
        thumbnail: "/edge/gth/4.webp",
        videoUrl: "https://www.youtube.com/embed/fFJZ6Hk6N80?si=fFPdPKVscFdE7Nq1",
        tag: "Innovation",
      },
      {
        title: "Megha's Cloud & AI Path",
        description: "Mastering AWS cloud architecture and landing global corporate tech roles.",
        thumbnail: "/edge/gth/5.webp",
        videoUrl: "https://www.youtube.com/embed/KYyk8Yr0Ty8?si=q0lBcWbq51__els_",
        tag: "Career Impact",
      },
    ],
  },

  gallery: {
    eyebrow: "INNOVATION & OUTREACH",
    title: "Hackathons, Bootcamps & Technical Summits",
    subtitle: "GTH in Action — Code, Collaborate, Conquer",
    items: [
      {
        src: "/edge/gth/nexhack.jpg",
        title: "NexHack 2025",
        caption: "36-hour continuous inter-college hackathon hosted at GTH campus.",
      },
      {
        src: "/edge/gth/7.jpg",
        title: "HackForge '25",
        caption: "Students showcasing live AI and cybersecurity prototypes to venture investors.",
      },
      {
        src: "/edge/gth/RED03468.jpg",
        title: "Cloud & Dev Summit",
        caption: "Live coding workshops and open source collaboration meetups.",
      },
      {
        src: "/edge/gth/RED03444.jpg",
        title: "Cybersecurity Awareness Drive",
        caption: "Hands-on threat emulation and ethical hacking defense demonstrations.",
      },
      {
        src: "/edge/gth/8.jpg",
        title: "Product Demo Day",
        caption: "Incubated student projects presented to industry juries and hiring managers.",
      },
      {
        src: "/edge/gth/9.jpg",
        title: "Technical Masterclass",
        caption: "Interactive masterclasses delivered by visiting enterprise software architects.",
      },
    ],
  },

  cta: {
    heading: "Ready to Launch Your Tech Career?",
    subtitle: "Geeta Technical Hub at Geeta University",
    description:
      "Whether you dream of working at a top MNC, launching your startup, or pursuing a global postgraduate degree — GTH gives you the skills, mentorship, and platform to get there.",
    buttonText: "Apply to Geeta University",
    buttonLink: "https://admissions.geetauniversity.edu.in/",
    secondaryButtonText: "Explore GTH Hub",
    secondaryButtonLink: "https://geetauniversity.edu.in/contact-us",
    helpline: "+91 92787 68000",
    campusAddress: "NH-71A, Naultha Panipat, Delhi NCR, Haryana (132145), India.",
  },
};
