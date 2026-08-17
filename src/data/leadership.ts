export interface Leader {
  id: number;
  name: string;
  role: string;
  image: string;
  message: string;
  quote: string;
  featured?: boolean;
}

export const leadership: Leader[] = [
  {
    id: 1,
    name: "S.P. Bansal",
    role: "Chancellor, Geeta University",
    image: "/about/13.webp",
    featured: true,
    message: `I welcome you all to Geeta University, where academic learning is just one aspect of your all-around development. The University focuses on providing value-added education in diverse fields to turn you into job givers rather than job seekers. Our priority is to turn your dreams into reality and help you evolve into responsible citizens who make the world better.

A bustling campus life, support of our distinguished teachers, and a welcoming environment all inspire you to learn, explore, and reach your true potential. With us, you evolve into futuristic entrepreneurs, leaders, and positive social contributors.`,
    quote:
      "So, join us to learn to think big, act with wisdom, and inspire others through your actions.",
  },

  {
    id: 2,
    name: "Nishant Bansal",
    role: "Pro-Chancellor, Geeta University",
    image: "/about/14.webp",
    message: `Founded on the principles of academic excellence, innovation, and strong values, Geeta University is backed by years of legacy in educational excellence. Being the Pro-Chancellor of the University, it is my duty and responsibility to carry this legacy forward. I am also committed to ensuring the growth, quality, and inclusivity of all our students.

At Geeta University, we provide the best environment and opportunities for you to learn and explore. We believe in making excellence an integral part of your life on campus. Our modern classrooms, advanced labs, and strong industry ties help students understand the significance of teamwork and innovation at our research centres, turning ideas into reality.`,
    quote:
      "At Geeta University, we are shaping not just skilled professionals but confident leaders — with knowledge, values, and the will to solve real problems in the world.",
  },

  {
    id: 3,
    name: "Ankush Bansal",
    role: "Pro-Chancellor, Geeta University",
    image: "/about/15.webp",
    message: `The digital era is evolving rapidly, creating an urgent need to prepare students for the future. At Geeta University, we do so by equipping you with the required skills for careers that are taking shape, apart from the ones that exist today. We offer a learning environment where technology and innovation work seamlessly together.

Our courses are designed to include emerging domains like artificial intelligence, blockchain, advanced analytics, and cybersecurity. You gain the skills and the knowledge most likely to be in demand in the future job market.

We go beyond conventional teaching to promote interdisciplinary learning, entrepreneurial ideas, and global connections to inspire curiosity and develop futuristic solutions. Geeta University enhances your technical abilities, creative thinking skills, and ability to envision your future clearly.`,
    quote:
      "We welcome dreamers, innovators, and lifelong learners to be a part of the journey driven by modern technologies and full of endless opportunities.",
  },

  {
    id: 4,
    name: "Dr. Manoj Manuja",
    role: "Vice Chancellor, Geeta University",
    image: "/about/16.webp",
    message: `The definition of education has changed over the past several decades. At Geeta University, it is a tool to shape minds, build careers, and make a real difference in the world. Geeta University holds a unique appeal for learners, researchers, and employers passionate about growing, innovating, and feeling inspired.

Through our Four-Quadrant Mission — helping students get industry-ready, supporting teachers to stay connected with real-world trends, driving meaningful research, and earning recognition from the industry — we create an environment where our graduates are prepared to lead with confidence.

Here, learning is about more than books. It's about thinking creatively, working together, and turning ideas into action. It is the place where young minds develop into the leaders and changemakers of tomorrow.`,
    quote:
      "So, let's shape the future together by learning, innovating, and growing every step of the way.",
  },

  {
    id: 5,
    name: "Prof. Dr. Gulshan Chauhan",
    role: "Pro-Vice Chancellor, Geeta University",
    image: "/about/17.webp",
    message: `At Geeta University, learning is all about helping you reach your true potential and grow as an individual. Our diverse program options make it possible for you to explore new ideas, follow your passions, and succeed in your preferred industry. Our distinguished teachers and capable mentors are ready to offer their constant support and guidance, paving your way to success.

From world-class infrastructure to skill development and industry readiness, and even global exposure opportunities, we help you gain the right knowledge and confidence to thrive anywhere. Our partnerships and exchange programs also give you a global perspective, so you're ready for a connected world.`,
    quote:
      "Nurturing curious minds and lifelong learners who are eager to make a positive difference in their communities and beyond is what motivates us.",
  },

  {
    id: 6,
    name: "Prof. Dr. Chander Prakash",
    role: "Pro-Vice Chancellor - Research, Rankings & Accreditations, Geeta University",
    image: "/about/dr-chander-prakash.jpeg",
    message: `At Geeta University, we actively contribute to the knowledge economy by embedding Research, Development, Innovation, Incubation, and Entrepreneurship as core of our mission. We are systematically strengthening our research architecture through interdisciplinary centres of excellence, high-impact publications, funded research projects, advanced laboratories, and industry-embedded innovation programs.

A strong emphasis is placed on intellectual property creation, technology transfer, start-up incubation, and deep-tech entrepreneurship, enabling our faculty and students to become creators and innovators.

Every academic and research initiative is strategically aligned with national and global ranking and accreditation frameworks such as NIRF, QS, THE, and NAAC to ensure quality, competitiveness, and global visibility. Geeta University is envisioned as a research-intensive and innovation-led institution where discovery leads to development, innovation drives impact, and ideas evolve into scalable start-ups and meaningful societal solutions.`,
    quote:
      "Let’s shape the future through research, innovation, and impact.",
  },

  {
    id: 7,
    name: "Prof. Dr. Saurabh Kumar Sharma",
    role: "Registrar, Geeta University",
    image: "/about/20260131_14.webp",
    message: `As the Registrar of Geeta University, it is my privilege to support an academic environment where every student is encouraged to realize their full potential and grow both personally and professionally. Our diverse range of programs is thoughtfully designed to inspire innovation, nurture talent, and prepare students for success in their chosen careers. With the guidance of our accomplished faculty and dedicated mentors, we ensure that every learner receives the support needed to excel.

At Geeta University, we combine world-class infrastructure with a strong focus on skill development, industry readiness, and global exposure. Through our academic collaborations and exchange initiatives, we provide students with opportunities to broaden their perspectives and compete confidently in a globally connected world.`,
    quote:
      "We remain committed to fostering academic excellence, integrity, and lifelong learning while empowering our students to contribute meaningfully to society.",
  },
];