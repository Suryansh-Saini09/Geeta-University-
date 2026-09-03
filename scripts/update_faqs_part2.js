const fs = require('fs');
const path = require('path');

const cseFaqs = [
  // Admissions & Eligibility
  {
    q: "What programmes are offered by the School of Computer Science & Engineering at Geeta University?",
    a: "The School currently lists B.Tech. Hons. CSE with specializations including Computer Science & Engineering, Artificial Intelligence & Machine Learning, Cyber Security, Data Science & Business Analytics with HCL, Full Stack Web Development, Quantum Computing and NIAT Upskilling; BCA pathways including Computer Applications, AI & ML, Cyber Security and Data Science & Business Analytics; M.Tech. CSE; MCA; and Ph.D. programmes in Computer Applications and CSE.",
    category: "Admissions & Eligibility"
  },
  {
    q: "What is the eligibility for B.Tech. CSE at Geeta University?",
    a: "Applicants must have passed 10+2 with Physics and Mathematics as compulsory subjects, along with one of the specified subjects such as Chemistry, Computer Science, Electronics, Information Technology, Biology, Informatics Practices, Biotechnology, Technical Vocational subject, Agriculture, Engineering Graphics, Business Studies or Entrepreneurship, with at least 55% marks. Students from the D.Voc. stream may also be eligible with 55% marks in the same or allied sector.",
    category: "Admissions & Eligibility"
  },
  {
    q: "Is Mathematics compulsory for B.Tech. CSE admission?",
    a: "Yes. Eligibility specifically requires Physics and Mathematics at the 10+2 level.",
    category: "Admissions & Eligibility"
  },
  {
    q: "Can students from a D.Voc. background apply for B.Tech. CSE?",
    a: "Yes. Students who have passed the D.Voc. stream with at least 55% marks in the same or an allied sector may be eligible.",
    category: "Admissions & Eligibility"
  },
  {
    q: "What is the eligibility for BCA at Geeta University?",
    a: "10+2 or equivalent with at least 50% marks, or a Diploma in Commercial Practice or equivalent with at least 50% marks.",
    category: "Admissions & Eligibility"
  },
  {
    q: "Is Mathematics compulsory for BCA?",
    a: "The School's programme information does not impose the same Physics-and-Mathematics requirement as B.Tech. CSE. Students should, however, verify the current programme-specific eligibility before applying.",
    category: "Admissions & Eligibility"
  },
  {
    q: "What is the eligibility for MCA?",
    a: "Applicants should have a graduation degree such as B.E./B.Tech., B.Sc., B.Com., B.A., B.Voc. or BCA with at least 50% marks. Mathematics at 10+2 or graduation level is preferred; students without a mathematics background may have to qualify a compulsory mathematics course under University norms.",
    category: "Admissions & Eligibility"
  },
  {
    q: "What is the eligibility for M.Tech. CSE?",
    a: "Applicants should have a B.Tech. in a relevant stream, M.Sc.-IT, MCA or equivalent qualification with at least 50% marks in the qualifying examination.",
    category: "Admissions & Eligibility"
  },
  {
    q: "Who is eligible for Ph.D. programmes in the School?",
    a: "A relevant master's degree with at least 55% marks is required to be eligible for Ph.D. programmes in the School.",
    category: "Admissions & Eligibility"
  },

  // Programmes, Specialisations & Curriculum
  {
    q: "What is the difference between B.Tech. CSE and BCA at Geeta University?",
    a: "B.Tech. CSE is a four-year engineering programme built around deeper computer science and engineering foundations, while BCA is a three/four-year computer applications degree with a more application-oriented structure. Both offer exposure to contemporary areas such as AI, cybersecurity and data-related technologies, but their academic routes and eligibility requirements differ.",
    category: "Programmes, Specialisations & Curriculum"
  },
  {
    q: "What specialisations are available under B.Tech. CSE?",
    a: "The specializations include Computer Science & Engineering, Artificial Intelligence & Machine Learning, Cyber Security, Data Science & Business Analytics with HCL, Full Stack Web Development, Quantum Computing and NIAT Upskilling.",
    category: "Programmes, Specialisations & Curriculum"
  },
  {
    q: "What specialisations are available under BCA?",
    a: "BCA in Computer Applications, Artificial Intelligence & Machine Learning, Cyber Security and Data Science & Business Analytics are available within the school.",
    category: "Programmes, Specialisations & Curriculum"
  },
  {
    q: "How should a student choose between AI & ML, Data Science, Cyber Security and Full Stack Development?",
    a: "AI & ML is suited to students interested in intelligent systems, automation and predictive models; Data Science suits students interested in data analysis and insight generation; Cyber Security suits students interested in digital protection, risk and security; and Full Stack Development suits students who want to build end-to-end web applications.",
    category: "Programmes, Specialisations & Curriculum"
  },
  {
    q: "Does the curriculum cover core programming and computer science fundamentals?",
    a: "Yes. Core areas of Curriculum include programming, data structures and algorithms, operating systems, databases, software engineering, computer networks, cloud fundamentals, web and mobile development and IoT.",
    category: "Programmes, Specialisations & Curriculum"
  },
  {
    q: "Will students learn multiple programming languages?",
    a: "The programming exposure includes C, C++, Java and Python, with additional technologies depending on the selected programme or specialisation.",
    category: "Programmes, Specialisations & Curriculum"
  },
  {
    q: "Does the School teach AI and Machine Learning beyond a basic introduction?",
    a: "Yes. AI & ML is offered as a dedicated specialisation, and the School highlights areas such as machine learning, deep learning, neural networks, computer vision, robotics, natural language processing and predictive analytics.",
    category: "Programmes, Specialisations & Curriculum"
  },
  {
    q: "What will students learn in the Cyber Security specialisation?",
    a: "The students will learn software development security, network security, risk management and compliance, cryptography, information security, security architecture, ethical hacking and digital-forensics-oriented areas.",
    category: "Programmes, Specialisations & Curriculum"
  },
  {
    q: "What does the Data Science & Business Analytics pathway focus on?",
    a: "The pathway combines programming and data-oriented skills with analytics. The School highlights data frames, Python for data science, R programming, core programming principles and analytics-oriented learning.",
    category: "Programmes, Specialisations & Curriculum"
  },
  {
    q: "What does the Full Stack Web Development specialisation cover?",
    a: "This specialization covers web-development fundamentals, HTML/CSS, JavaScript, advanced JavaScript and CSS-based web applications, with the wider curriculum supporting end-to-end software and web development.",
    category: "Programmes, Specialisations & Curriculum"
  },
  {
    q: "What is special about the B.Tech. CSE Quantum Computing pathway?",
    a: "It combines computer science with quantum computing and related mathematics and physics. The programme highlights quantum mechanics for computing, quantum algorithms, quantum programming, quantum cryptography, quantum machine learning, quantum hardware and architectures, simulations and an industry-based quantum innovation lab.",
    category: "Programmes, Specialisations & Curriculum"
  },
  {
    q: "Does the M.Tech. CSE curriculum include advanced technologies?",
    a: "Yes. The M.Tech. programme covers areas such as advanced programming, data structures and algorithms, operating systems, databases, computer networks, cloud fundamentals, IoT, cyber law basics, web/mobile development and an industry internship or capstone project.",
    category: "Programmes, Specialisations & Curriculum"
  },
  {
    q: "What does the MCA programme focus on?",
    a: "MCA focuses on application development, system design and data analytics, with programme areas including advanced programming, databases, web technologies, operating systems, software engineering, AI & ML, cloud computing, big data tools, UI/UX and IoT, along with industry internship.",
    category: "Programmes, Specialisations & Curriculum"
  },

  // Practical Learning, Projects & Industry Exposure
  {
    q: "Is the School focused more on theory or practical learning?",
    a: "The School presents a strong practical orientation alongside conceptual learning. It focuses on projects, internships, hackathons, coding practice, certification tracks, industry tools, technical training and the Geeta Technical Hub.",
    category: "Practical Learning, Projects & Industry Exposure"
  },
  {
    q: "Do students work on real-world projects?",
    a: "Yes. Real-world projects, project-based learning, internships, industry collaborations and practical training are important components of its approach.",
    category: "Practical Learning, Projects & Industry Exposure"
  },
  {
    q: "Are internships part of the CSE learning experience?",
    a: "Yes. Industry internships are explicitly included in the B.Tech. CSE, M.Tech. CSE and MCA programme structures, while the School also highlights internships more broadly as part of industry-oriented learning.",
    category: "Practical Learning, Projects & Industry Exposure"
  },
  {
    q: "When do BCA students get industry internship exposure?",
    a: "Industry internship is included after Semester 2, providing an early opportunity to connect academic learning with workplace experience.",
    category: "Practical Learning, Projects & Industry Exposure"
  },
  {
    q: "Will students get opportunities to participate in hackathons and coding activities?",
    a: "The School promotes a skill development eco-system through hackathons, DSA and competitive coding, logic-building activities, problem-solving techniques, coding profiles and competitive programming.",
    category: "Practical Learning, Projects & Industry Exposure"
  },
  {
    q: "What is the Geeta Technical Hub and how does it support CSE students?",
    a: "The Geeta Technical Hub is part of the University's wider ecosystem supporting advanced technology, certifications and industry skills. It is linked with coding, technical training and emerging-technology skill development.",
    category: "Practical Learning, Projects & Industry Exposure"
  },
  {
    q: "What are the 'Drive Ready Tracks' offered by the School?",
    a: "The School highlights Drive Ready Tracks covering areas such as MEAN/MERN Stack, PHP & MySQL, Python Development, Cyber Security Fundamentals, Artificial Intelligence and Machine Learning, designed to build practical skills relevant to technology roles.",
    category: "Practical Learning, Projects & Industry Exposure"
  },
  {
    q: "What kind of certifications can CSE students pursue?",
    a: "Certification tracks are associated with Amazon AWS, Red Hat, Cisco, HubSpot, GitHub, Oracle and Microsoft Azure. The exact certifications available to a student may depend on the programme and current certification track.",
    category: "Practical Learning, Projects & Industry Exposure"
  },
  {
    q: "Are industry certifications automatically included in the programme fee?",
    a: "The School highlights certification tracks, but the exact inclusion, certification provider, examination charges and fee coverage can vary by programme or training model. Students should confirm the current terms with the School or admissions team.",
    category: "Practical Learning, Projects & Industry Exposure"
  },
  {
    q: "Will students work with industry tools and technologies?",
    a: "Yes. The School highlights tool-integrated learning, certification tracks, industry-oriented training, technical hub support and emerging technologies including cloud, cybersecurity, AI, data science and full-stack development.",
    category: "Practical Learning, Projects & Industry Exposure"
  },
  {
    q: "How does practical training help students prepare for placements?",
    a: "Projects, internships, coding practice, technical tracks, certifications and industry exposure help students build demonstrable skills and portfolio experience that can be discussed during technical assessments and interviews.",
    category: "Practical Learning, Projects & Industry Exposure"
  },

  // Placements & Career Opportunities
  {
    q: "What career opportunities are available after B.Tech. CSE?",
    a: "Career pathways include software development, web and app development, machine learning, AI, data analysis and data science, networking, cybersecurity, cloud architecture and systems engineering, depending on the student's skills and specialisation.",
    category: "Placements & Career Opportunities"
  },
  {
    q: "What career options are available after BCA?",
    a: "BCA graduates can pursue roles such as software developer, web developer, database administrator, system analyst, IT support, QA and front-end or back-end development, or continue to higher studies.",
    category: "Placements & Career Opportunities"
  },
  {
    q: "Can BCA graduates pursue MCA after graduation?",
    a: "Yes. The School presents BCA as a foundation for higher studies such as MCA and further specialisation in areas including AI, data science and cybersecurity.",
    category: "Placements & Career Opportunities"
  },
  {
    q: "What career opportunities are available after M.Tech. CSE?",
    a: "The programme supports advanced technical and research-oriented pathways, including roles in R&D, cloud architecture, cybersecurity and intelligent systems, as well as further research and doctoral study.",
    category: "Placements & Career Opportunities"
  },
  {
    q: "Can CSE graduates work outside the IT sector?",
    a: "Yes. Computer science skills are applicable across sectors such as finance, healthcare, telecommunications, automotive, aerospace, e-commerce and other technology-enabled industries.",
    category: "Placements & Career Opportunities"
  },
  {
    q: "Can a CSE graduate build a career in AI without choosing an AI specialisation?",
    a: "Yes. A strong CSE foundation can lead toward AI-related roles, particularly when students build additional skills through projects, certifications, electives and specialised training. The School also offers AI & ML as a dedicated specialization for students who want deeper structured exposure.",
    category: "Placements & Career Opportunities"
  },
  {
    q: "Which types of companies recruit CSE students?",
    a: "Recruiters and technology organizations include TCS, Infosys, Wipro, IBM, HCL, Amazon, Capgemini, Accenture, Tech Mahindra, Cognizant, Deloitte and others.",
    category: "Placements & Career Opportunities"
  },
  {
    q: "Does the School provide placement assistance?",
    a: "Yes. Placement support is highlighted by the School, alongside interview preparation, industry interaction, internships, technical training and career-readiness activities.",
    category: "Placements & Career Opportunities"
  },
  {
    q: "Is the ₹40 LPA placement figure specific to CSE students?",
    a: "Yes. ₹40 LPA is the highest package secured by a CSE student, and placement stats 550+ recruiters and 3,500+ job offers pertains to the University-wide data.",
    category: "Placements & Career Opportunities"
  },
  {
    q: "Are placements guaranteed for every CSE student?",
    a: "No placement outcome should be interpreted as an individual guarantee. Career outcomes depend on the student's technical skills, academic performance, projects, interview performance, recruiter requirements and available roles.",
    category: "Placements & Career Opportunities"
  },
  {
    q: "What skills do recruiters typically look for in CSE graduates?",
    a: "The major skills recruiters typically look for in CSE students are programming, data structures and algorithms, problem-solving, project experience, domain skills, technical certifications, communication and the ability to apply technology to real-world problems.",
    category: "Placements & Career Opportunities"
  },

  // Faculty, Mentorship & Learning Support
  {
    q: "Who teaches students at the School of Computer Science & Engineering?",
    a: "The School has faculty with expertise across computer science and emerging technologies. Its mentor profiles include specialists in AI, machine learning, cloud computing, recommender systems, deep learning and related research areas.",
    category: "Faculty, Mentorship & Learning Support"
  },
  {
    q: "What research expertise is available among the faculty?",
    a: "Faculty profiles highlight areas such as AI, machine learning, cloud computing, recommender systems, deep learning and related research. Most faculty members also have publications, patents and research experience.",
    category: "Faculty, Mentorship & Learning Support"
  },
  {
    q: "Will beginners in coding receive support?",
    a: "Yes. The School's learning model is designed to build technical skills progressively through programming, DSA, projects, coding practice, technical training and supportive faculty guidance. Students do not need advanced coding expertise before starting, although willingness to learn is important.",
    category: "Faculty, Mentorship & Learning Support"
  },
  {
    q: "How does the School help students become job-ready?",
    a: "The School combines academic foundations with practical projects, internships, coding and DSA training, industry certification tracks, drive-ready modules, communication support, industry interaction and placement preparation.",
    category: "Faculty, Mentorship & Learning Support"
  },

  // Campus Life, Technology & Student Experience
  {
    q: "What kind of learning infrastructure is available to CSE students?",
    a: "Advanced laboratories, technology-enabled classrooms, practical learning spaces are part of technical infrastructure designed to support programming, projects and emerging-technology learning.",
    category: "Campus Life, Technology & Student Experience"
  },
  {
    q: "Will students need a laptop for CSE or BCA?",
    a: "A laptop is highly useful for programming, project work, online tools and certification-based learning.",
    category: "Campus Life, Technology & Student Experience"
  },
  {
    q: "Are coding clubs or competitive programming opportunities available?",
    a: "The School highlights coding ecosystems, DSA and competitive coding, logic-building, problem-solving, coding profiles and competitive programming activities.",
    category: "Campus Life, Technology & Student Experience"
  },
  {
    q: "Do students get exposure to emerging technologies outside the core syllabus?",
    a: "Yes. Students do get exposure to emerging technologies such as AI, machine learning, cybersecurity, data science, cloud technologies, full-stack development and quantum computing through specialisations and skill-development tracks",
    category: "Campus Life, Technology & Student Experience"
  },
  {
    q: "Can students build a portfolio during the programme?",
    a: "The project-based and practical learning approach provides opportunities to build projects, technical work and other demonstrable outputs. Students can use these experiences to develop a portfolio alongside their academic qualification.",
    category: "Campus Life, Technology & Student Experience"
  },

  // Global Exposure, Research & Higher Studies
  {
    q: "Does the School support research and innovation?",
    a: "Yes. Research is visible through faculty publications, patents, doctoral programmes, research-oriented postgraduate study, project work and emerging technology areas.",
    category: "Global Exposure, Research & Higher Studies"
  },
  {
    q: "Can students pursue Ph.D. after M.Tech. CSE or MCA?",
    a: "Yes. Students who meet the applicable doctoral eligibility requirements can pursue Ph.D. study. The School offers Ph.D. pathways in Computer Science & Engineering and Computer Applications.",
    category: "Global Exposure, Research & Higher Studies"
  },
  {
    q: "Can students work on patents or research publications?",
    a: "The School encourages research activity and highlights faculty expertise in publications and patents. Students can explore research projects, conferences and innovation activities under appropriate faculty guidance.",
    category: "Global Exposure, Research & Higher Studies"
  },
  {
    q: "Are there opportunities for students interested in quantum computing research?",
    a: "Yes. The Quantum Computing pathway is explicitly described as industry- and research-oriented and includes quantum algorithms, quantum programming, quantum cryptography, quantum machine learning, quantum hardware and simulation.",
    category: "Global Exposure, Research & Higher Studies"
  },

  // Parents & Decision-Making
  {
    q: "Should a student choose B.Tech. CSE or BCA if they want a career in software development?",
    a: "Both can lead to software and technology careers, but they are different academic routes. B.Tech. CSE is an engineering degree with deeper computer science and engineering foundations and a Physics-and-Mathematics-based entry requirement. BCA is a computer applications degree with a more application-oriented route.",
    category: "Parents & Decision-Making"
  },
  {
    q: "Is CSE suitable for a student who is interested in technology but is not strong in coding yet?",
    a: "Yes. Students can develop coding ability progressively through programming courses, DSA, practical assignments, projects, coding activities and faculty support. A genuine interest in technology and consistent practice are more important than already being an advanced coder.",
    category: "Parents & Decision-Making"
  },
  {
    q: "Which CSE specialisation has the best future scope?",
    a: "The strongest choice is the one that matches the student's interests and willingness to build deep skills.",
    category: "Parents & Decision-Making"
  },
  {
    q: "Is a CSE degree useful if the student does not want to become a programmer?",
    a: "Yes. CSE graduates can pursue careers in areas such as data analysis, cybersecurity, cloud, systems, AI, technical consulting, product roles, research and other technology functions where programming may be one component rather than the entire job.",
    category: "Parents & Decision-Making"
  },
  {
    q: "What should parents consider before choosing a CSE programme?",
    a: "Parents should look beyond the degree title and compare curriculum depth, practical exposure, internships, project opportunities, faculty support, industry certifications, emerging-technology exposure, placement preparation and the student's own interests and aptitude.",
    category: "Parents & Decision-Making"
  },

  // General
  {
    q: "How long is the B.Tech. CSE programme?",
    a: "The B.Tech. CSE programme is of four years, comprising eight semesters.",
    category: "General"
  },
  {
    q: "How long is the BCA programme?",
    a: "The BCA programme is listed as a three/four-year degree, depending on the applicable degree pathway.",
    category: "General"
  },
  {
    q: "How long are the MCA and M.Tech. CSE programmes?",
    a: "Both MCA and M.Tech. CSE are listed as two-year postgraduate programmes.",
    category: "General"
  },
  {
    q: "What is the long-term career scope of Computer Science & Engineering?",
    a: "Computer science skills can lead to careers across software development, AI, machine learning, data science, cybersecurity, cloud computing, web and mobile development, systems, research and technology-enabled roles across multiple industries.",
    category: "General"
  },
  {
    q: "Can students customize their learning according to their interests?",
    a: "Specializations, certification tracks, drive-ready tracks, milestone activities and multi-skill development, gives students multiple ways to build a profile around their preferred technology domain.",
    category: "General"
  }
];

const spBansalFaqs = [
  // Admissions & Eligibility
  {
    q: "What programmes are offered by SP Bansal School of Business (SPBSB)?",
    a: "The SPBSB offers MBA with specializations in AI for Business, Digital Marketing, Finance, Marketing, Human Resource Management, Supply Chain Management, and Entrepreneurship & Family Business, along with a Ph.D. programme.",
    category: "Admissions & Eligibility"
  },
  {
    q: "What is the eligibility for the MBA at SPBSB?",
    a: "Applicants must have completed a bachelor's degree of at least three years' duration with a minimum of 50% marks.",
    category: "Admissions & Eligibility"
  },
  {
    q: "Can students from any undergraduate background apply for the MBA?",
    a: "The candidate with a bachelor's degree in any background and the required marks can apply.",
    category: "Admissions & Eligibility"
  },
  {
    q: "What is the eligibility for the Ph.D. programme at SPBSB?",
    a: "A master's degree in a relevant field with a minimum of 55% marks.",
    category: "Admissions & Eligibility"
  },
  {
    q: "Is work experience mandatory for the MBA?",
    a: "No. Fresh graduates can consider the programme, subject to the current admission rules.",
    category: "Admissions & Eligibility"
  },
  {
    q: "Is there an entrance examination for admission to the MBA?",
    a: "No. There is no such entrance exam for admission to the MBA. However, for availing scholarships, certain exams like CUET PG, GUTS etcetera can be opted by students.",
    category: "Admissions & Eligibility"
  },
  {
    q: "Can a student choose an MBA specialization according to their career goal?",
    a: "Yes. A student can choose his or her preferable specialization from multiple specializations offered, allowing students to align their MBA with areas such as AI, marketing, finance, HR, supply chain, digital marketing or entrepreneurship.",
    category: "Admissions & Eligibility"
  },

  // MBA Structure & Specialisations
  {
    q: "What makes the SPBSB MBA different from a conventional MBA?",
    a: "MBA at SPBSB emphasizes AI-enabled learning, frequent curriculum updates, live industry projects, simulations, case-based learning, industry trainers, certifications and continuous industry engagement rather than relying only on classroom theory.",
    category: "MBA Structure & Specialisations"
  },
  {
    q: "How many MBA specialisations are available?",
    a: "There are 7 specializations offered: AI for Business, Digital Marketing, Finance, Marketing, Human Resource Management, Supply Chain Management, and Entrepreneurship & Family Business.",
    category: "MBA Structure & Specialisations"
  },
  {
    q: "What is MBA in AI for Business?",
    a: "It focuses on applying artificial intelligence to managerial decision-making and enterprise functions, including AI-enabled analytics, business applications, AI governance and digital innovation.",
    category: "MBA Structure & Specialisations"
  },
  {
    q: "What is covered in MBA Digital Marketing?",
    a: "MBA Digital Marketing specialization includes SEO and SEM, social media analytics, email and mobile marketing, influencer and affiliate marketing, data-driven campaigns, UI/UX, AI and quick commerce.",
    category: "MBA Structure & Specialisations"
  },
  {
    q: "What is covered in MBA Finance?",
    a: "The MBA Finance curriculum highlights behavioral finance, investment banking essentials, risk management and derivatives, corporate valuation, sustainable finance and financial modelling with AI.",
    category: "MBA Structure & Specialisations"
  },
  {
    q: "What is covered in MBA Human Resource Management?",
    a: "This specialization covers talent analytics and AI recruitment, diversity and inclusion, employee experience, HR technology, people analytics, performance management and leadership development.",
    category: "MBA Structure & Specialisations"
  },
  {
    q: "What is covered in MBA Marketing?",
    a: "It includes consumer behaviour, brand strategy and equity, international marketing, quick-commerce marketing, marketing automation, sales promotion and advertising.",
    category: "MBA Structure & Specialisations"
  },
  {
    q: "What is covered in MBA Supply Chain Management?",
    a: "The specialization covers supply-chain analytics, sustainable logistics, global trade compliance, warehouse automation, e-SCM and last-mile delivery.",
    category: "MBA Structure & Specialisations"
  },
  {
    q: "What is covered in MBA Entrepreneurship & Family Business?",
    a: "It includes startup funding, family-business governance, venture scaling, innovation and pivot management, succession planning and social entrepreneurship.",
    category: "MBA Structure & Specialisations"
  },
  {
    q: "Can MBA students learn AI even if they are not from a technical background?",
    a: "Yes. The AI for Business proposition is designed around applying AI to managerial and enterprise functions, making the focus business-oriented rather than limited to software development.",
    category: "MBA Structure & Specialisations"
  },

  // Teaching, Cases & Experiential Learning
  {
    q: "How is teaching conducted at SPBSB?",
    a: "Project-based learning, live industry projects, simulations, role-plays, case-based learning and regular interaction with industry trainers and experts are an essential part of teaching at SPBSB.",
    category: "Teaching, Cases & Experiential Learning"
  },
  {
    q: "What are live industry projects and how do they help MBA students?",
    a: "Students work on real-world business problems, allowing them to apply concepts, analyse situations, develop solutions and build practical decision-making skills.",
    category: "Teaching, Cases & Experiential Learning"
  },
  {
    q: "Does SPBSB use Harvard and IIM case studies?",
    a: "The students receive case-based learning using Harvard, IIM and global case repositories, giving them exposure to recognised business cases and complex decision-making situations.",
    category: "Teaching, Cases & Experiential Learning"
  },
  {
    q: "Will students participate in business simulations and role-plays?",
    a: "Yes. Simulations and role-plays are highlighted as part of experiential learning to help students understand real-life business scenarios and improve decision-making and professional confidence.",
    category: "Teaching, Cases & Experiential Learning"
  },
  {
    q: "How does the School develop decision-making skills?",
    a: "Industry trainers simulate real-world problems in classes and repeatedly engage students in problem solving, helping develop critical, creative, lateral and analytical thinking.",
    category: "Teaching, Cases & Experiential Learning"
  },
  {
    q: "Does the curriculum change according to industry requirements?",
    a: "Curriculum is revised semiannually with stakeholder inputs to keep theories, skills and learning aligned with changing industry requirements.",
    category: "Teaching, Cases & Experiential Learning"
  },
  {
    q: "Will students work on problems from more than one business function?",
    a: "Yes. The MBA ecosystem spans finance, marketing, HR, operations and supply chain, entrepreneurship and AI-enabled business functions, allowing students to understand how business functions connect.",
    category: "Teaching, Cases & Experiential Learning"
  },

  // Certifications, Technology & AI Ecosystem
  {
    q: "What additional certifications can MBA students pursue at SPBSB?",
    a: "MBA Students can pursue global and industry certifications associated with organisations such as EC-Council, EY, Deloitte, Paytm, AWS, Cisco and IRM.",
    category: "Certifications, Technology & AI Ecosystem"
  },
  {
    q: "What technology skills can management students develop?",
    a: "Management students can develop skills such as hands-on exposure to AI, machine learning, analytics and cybersecurity-related labs, alongside business applications of technology.",
    category: "Certifications, Technology & AI Ecosystem"
  },
  {
    q: "Does SPBSB teach machine learning to MBA students?",
    a: "The School entails hands-on labs and an AI-enabled management ecosystem that includes AI, ML and analytics. The depth and modules depend on the student's selected programme or specialisation.",
    category: "Certifications, Technology & AI Ecosystem"
  },
  {
    q: "Can MBA students learn cybersecurity?",
    a: "MBA students can learn cybersecurity supported through hands-on lab ecosystem and industry certifications.",
    category: "Certifications, Technology & AI Ecosystem"
  },
  {
    q: "Is AI used only in the AI for Business specialisation?",
    a: "AI is a broader part of the SPBSB learning environment, while the AI for Business specialisation goes deeper into AI-enabled analytics, enterprise applications, governance and strategy.",
    category: "Certifications, Technology & AI Ecosystem"
  },
  {
    q: "Are certifications included in the MBA or offered separately?",
    a: "SPBSB highlights global certifications as a value addition to its MBA. The exact inclusion, certification body, assessment and any additional requirements should be confirmed for the applicable academic session.",
    category: "Certifications, Technology & AI Ecosystem"
  },

  // Industry Exposure, Internships & Corporate Connect
  {
    q: "Does SPBSB provide internships during the MBA?",
    a: "Yes. Internships are an important element of MBA at SPBSB.",
    category: "Industry Exposure, Internships & Corporate Connect"
  },
  {
    q: "Why are internships important in an MBA programme?",
    a: "Internships allow students to test classroom concepts in real organisational settings, develop professional behaviour, understand business functions and build industry networks.",
    category: "Industry Exposure, Internships & Corporate Connect"
  },
  {
    q: "Does SPBSB provide regular industry interaction?",
    a: "Yes. There is continuous industry engagement, industry trainers, expert interaction and corporate connect activities.",
    category: "Industry Exposure, Internships & Corporate Connect"
  },
  {
    q: "Will students get exposure to real business problems before graduation?",
    a: "Yes. Live industry projects, simulations, case studies and internship-driven learning are specifically designed to expose students to practical business problems before they graduate.",
    category: "Industry Exposure, Internships & Corporate Connect"
  },
  {
    q: "Does SPBSB offer international exposure?",
    a: "Yes. The School also provides a ten-day learning experience in Dubai, Malaysia or Europe through its global-certification/immersion proposition, subject to the applicable programme and offering.",
    category: "Industry Exposure, Internships & Corporate Connect"
  },
  {
    q: "What is the IIM Kozhikode immersion mentioned by SPBSB?",
    a: "The School highlights a seven-day residential business experience at IIM Kozhikode involving faculty and industry experts. Availability and participation conditions should be confirmed for the relevant batch.",
    category: "Industry Exposure, Internships & Corporate Connect"
  },
  {
    q: "Can students build a professional network during the MBA?",
    a: "Yes. Continuous industry engagement, internships, corporate connect activities, expert interactions and live projects provide opportunities to build professional relationships.",
    category: "Industry Exposure, Internships & Corporate Connect"
  },

  // Leadership Development & Career Readiness
  {
    q: "What is the Leadership Odyssey Program at SPBSB?",
    a: "The Leadership Odyssey Program (LOP) is presented as a structured career-development framework combining profiling, personalised skill blueprints, SWOT-based career planning and role-specific placement preparation.",
    category: "Leadership Development & Career Readiness"
  },
  {
    q: "What happens in the profiling stage of LOP?",
    a: "The profiling phase includes aptitude and reasoning tests, psychometric and personality assessment, ATS-optimised resume auditing, interest mapping and SWOT analysis.",
    category: "Leadership Development & Career Readiness"
  },
  {
    q: "How does SPBSB identify a student's skill gaps?",
    a: "The LOP includes customised skill modules, quarterly progress tracking, skill-gap bootcamps and market-trend opportunity mapping.",
    category: "Leadership Development & Career Readiness"
  },
  {
    q: "Does SPBSB provide personalised career planning?",
    a: "Yes. The School describes an Individual Development Program with a customised career plan and role-specific preparation.",
    category: "Leadership Development & Career Readiness"
  },
  {
    q: "How does SPBSB prepare students for interviews?",
    a: "The career-acceleration phase includes role-specific preparation, company-culture and performance analysis and final placement-readiness mapping.",
    category: "Leadership Development & Career Readiness"
  },
  {
    q: "Does the School help students understand which roles suit their strengths?",
    a: "Yes. Profiling, SWOT analysis, interest mapping and strength-to-role alignment are specifically included in the Leadership Odyssey Program.",
    category: "Leadership Development & Career Readiness"
  },
  {
    q: "Will students receive resume and LinkedIn or professional-profile guidance?",
    a: "The LOP explicitly includes an ATS-optimised resume audit.",
    category: "Leadership Development & Career Readiness"
  },

  // Placements & Career Opportunities
  {
    q: "What career opportunities are available after an MBA from SPBSB?",
    a: "Career pathways vary by specialisation and can include roles in business analytics, marketing, finance, HR, operations, supply chain, digital marketing, consulting, entrepreneurship and AI-enabled business functions.",
    category: "Placements & Career Opportunities"
  },
  {
    q: "What careers can an MBA in AI for Business lead to?",
    a: "Potential roles include AI-enabled business analysis, digital transformation, analytics, product and strategy functions and technology-driven management roles, depending on the student's skills and employer requirements.",
    category: "Placements & Career Opportunities"
  },
  {
    q: "What careers can an MBA in Digital Marketing lead to?",
    a: "Career paths can include digital marketing, SEO/SEM, social media, performance marketing, marketing analytics, growth marketing, content and campaign management, influencer marketing and e-commerce roles.",
    category: "Placements & Career Opportunities"
  },
  {
    q: "What careers can an MBA in Finance lead to?",
    a: "Potential pathways include financial analysis, investment and corporate finance, valuation, risk management, banking, financial planning and finance roles using financial modelling and analytics.",
    category: "Placements & Career Opportunities"
  },
  {
    q: "What careers can an MBA in HR lead to?",
    a: "Potential roles include HR business partnering, talent acquisition, people analytics, learning and development, employee experience, performance management and HR technology-related roles.",
    category: "Placements & Career Opportunities"
  },
  {
    q: "What careers can an MBA in Supply Chain Management lead to?",
    a: "Potential roles include supply-chain analyst, logistics and operations management, procurement, warehouse and inventory management, trade compliance and last-mile or e-commerce supply-chain functions.",
    category: "Placements & Career Opportunities"
  },
  {
    q: "What careers can an MBA in Entrepreneurship & Family Business lead to?",
    a: "Graduates can pursue startup ventures, family-business management, business development, innovation, venture scaling and social entrepreneurship, as well as conventional management roles.",
    category: "Placements & Career Opportunities"
  },
  {
    q: "Can SPBSB MBA graduates work in multinational companies?",
    a: "Yes. An MBA can lead to roles across multinational and domestic organisations, depending on the student's skills, specialisation, recruitment opportunities and employer requirements.",
    category: "Placements & Career Opportunities"
  },
  {
    q: "Does SPBSB guarantee placement after the MBA?",
    a: "SPBSB provides career-readiness and placement support, while the final outcome depends on student performance, eligibility, skills and recruiter requirements.",
    category: "Placements & Career Opportunities"
  },
  {
    q: "What placement outcomes are achieved by SPBSB?",
    a: "The current page showcases individual alumni outcomes including packages of ₹67.5 LPA, ₹25 LPA, ₹17 LPA and ₹8 LPA. These are individual examples and should not be interpreted as a guaranteed or average salary for every MBA student.",
    category: "Placements & Career Opportunities"
  },
  {
    q: "What factors influence an MBA student's placement outcome?",
    a: "Specialisation, technical and analytical skills, communication, internships, certifications, academic performance, interview readiness, prior experience and the roles available in a particular recruitment cycle can all influence outcomes.",
    category: "Placements & Career Opportunities"
  },

  // Entrepreneurship & Family Business
  {
    q: "Does SPBSB support students who want to start a business?",
    a: "Yes. Entrepreneurship and Family Business is one of the MBA specialisations, and the School highlights startup funding, venture scaling, innovation, pivot management and social entrepreneurship.",
    category: "Entrepreneurship & Family Business"
  },
  {
    q: "Can family-business successors benefit from an MBA?",
    a: "Yes. The Entrepreneurship & Family Business specialisation addresses family-business governance, succession planning, venture scaling and innovation, which can be particularly relevant to next-generation family-business leaders.",
    category: "Entrepreneurship & Family Business"
  },
  {
    q: "Will students learn about startup funding?",
    a: "Yes. Startup funding strategies are specifically taught within the Entrepreneurship & Family Business specialisation.",
    category: "Entrepreneurship & Family Business"
  },
  {
    q: "Does the programme cover succession planning in family businesses?",
    a: "Yes. Succession planning is explicitly included in the Family Business specialisation.",
    category: "Entrepreneurship & Family Business"
  },
  {
    q: "Can students learn how to scale an existing family business?",
    a: "Yes. Venture scaling techniques, family-business governance, innovation and pivot management are part of the stated curriculum.",
    category: "Entrepreneurship & Family Business"
  },

  // Faculty, Campus & Student Experience
  {
    q: "What kind of faculty teach at SPBSB?",
    a: "SPBSB describes experienced faculty and industry experts combining academic guidance with industry exposure and professional expertise.",
    category: "Faculty, Campus & Student Experience"
  },
  {
    q: "How does SPBSB connect classroom learning with the corporate world?",
    a: "Through industry trainers, live projects, internships, corporate connect, case studies, simulations, expert interactions, certifications and immersion experiences.",
    category: "Faculty, Campus & Student Experience"
  },
  {
    q: "Is SPBSB suitable for fresh graduates?",
    a: "Yes. The MBA eligibility does not require prior work experience, making the programme accessible to eligible graduates at the start of their careers.",
    category: "Faculty, Campus & Student Experience"
  },
  {
    q: "What makes SPBSB different from a generic management programme?",
    a: "Its stated differentiators include AI-enabled management education, semiannual curriculum updates, live industry problem solving, global certifications, technology labs, case-based learning, internships, Leadership Odyssey and international/industry immersion opportunities.",
    category: "Faculty, Campus & Student Experience"
  },

  // General & Decision-Making
  {
    q: "Which SPBSB MBA specialisation should I choose?",
    a: "The choice should follow the career direction you want to build: AI and digital transformation for AI for Business; customer acquisition and online growth for Digital Marketing; financial decision-making for Finance; brand and sales roles for Marketing; people and talent for HR; operations and logistics for Supply Chain; or venture/family-business leadership for Entrepreneurship & Family Business.",
    category: "General & Decision-Making"
  },
  {
    q: "Can I build a career in management without an undergraduate degree in commerce or business?",
    a: "Yes. MBA eligibility accepts a bachelor's degree in any background of at least three years with minimum 50% marks rather than limiting admission to commerce or management graduates.",
    category: "General & Decision-Making"
  },
  {
    q: "Is an MBA from SPBSB useful if I want to work in the technology sector?",
    a: "Yes. The School's AI, analytics, machine-learning, cybersecurity and digital-business focus can be relevant to management roles in technology-driven organisations.",
    category: "General & Decision-Making"
  },
  {
    q: "Is SPBSB useful for students interested in consulting?",
    a: "The School's emphasis on case-based learning, structured problem solving, analytics, business strategy and real-world projects can help develop skills relevant to consulting, although individual recruitment outcomes depend on the student's profile and opportunities.",
    category: "General & Decision-Making"
  },
  {
    q: "Can students combine business knowledge with AI and analytics?",
    a: "Yes. AI-enabled analytics and decision-making, applied AI tools, enterprise applications and data-driven approaches are centered on business knowledge.",
    category: "General & Decision-Making"
  },
  {
    q: "What should a student evaluate before choosing an MBA specialisation?",
    a: "Students should consider the type of work they want to do, their strengths, preferred business function, appetite for quantitative or technology-heavy work, long-term career goals and the skills they are willing to build alongside the MBA.",
    category: "General & Decision-Making"
  }
];

function ensureAndSetFaqs(filename, faqs) {
  const filePath = path.join(__dirname, '../src/data/programs/schools', filename);
  let content = fs.readFileSync(filePath, 'utf8');

  const formattedFaqs = JSON.stringify(faqs, null, 4);
  const faqsRegex = /faqs:\s*\[[\s\S]*?\n  \],/

  if (faqsRegex.test(content)) {
    content = content.replace(faqsRegex, `faqs: ${formattedFaqs},`);
  } else {
    // Insert before closing };
    const lastBraceIndex = content.lastIndexOf('};');
    if (lastBraceIndex !== -1) {
      const insertion = `  faqs: ${formattedFaqs},\n`;
      content = content.slice(0, lastBraceIndex) + insertion + content.slice(lastBraceIndex);
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Successfully set faqs in ${filename}`);
}

ensureAndSetFaqs('computerScience.ts', cseFaqs);
ensureAndSetFaqs('spBansal.ts', spBansalFaqs);
