const fs = require('fs');
const path = require('path');

const hospitalityFaqs = [
  // Admissions & Eligibility
  {
    q: "What programmes are offered by the School of Hospitality & Hotel Management at Geeta University?",
    a: "The School currently lists a Diploma in Hotel Management (Residential Program), B.Sc. Hons. (Hotel Management), M.Sc. (Hotel Management), and Ph.D. (Hotel & Tourism Management). Each programme is designed for a different stage of academic and professional progression.",
    category: "Admissions & Eligibility"
  },
  {
    q: "Who is eligible to apply for the B.Sc. Hotel Management programme, and can students from any Class 12 stream apply?",
    a: "Students who have passed 10+2 from a recognised board with at least 50% marks can apply for the B.Sc. Hotel Management programme. The eligibility is open to students from any stream.",
    category: "Admissions & Eligibility"
  },
  {
    q: "What is the eligibility for the Diploma in Hotel Management (Residential Program)?",
    a: "Applicants must have passed 10+2 in any stream with a minimum of 50% marks in the qualifying examination.",
    category: "Admissions & Eligibility"
  },
  {
    q: "What are the eligibility requirements for the M.Sc. Hotel Management programme?",
    a: "The School lists eligibility as a graduation degree from any stream (including B.E./B.Tech., B.Sc., B.Com., B.A., and BCA.) with a minimum of 50% marks.",
    category: "Admissions & Eligibility"
  },
  {
    q: "Who can pursue a Ph.D. in Hotel & Tourism Management at Geeta University?",
    a: "The School lists a minimum eligibility of a relevant master's degree with at least 55% marks. Applicants should also meet the University's applicable doctoral admission requirements for the relevant admission cycle.",
    category: "Admissions & Eligibility"
  },
  {
    q: "Is an entrance examination required for admission to the hospitality programmes?",
    a: "No specific entrance examination is there for the hospitality programmes admission. Students can directly contact the admission department. Admission will be considered on the basis of qualifying exam percentage.",
    category: "Admissions & Eligibility"
  },
  {
    q: "What documents are generally required while applying for a hospitality programme?",
    a: "A list of documents are required while applying for a hospitality programme namely Academic transcripts & mark sheets — 10th and 12th, Transfer / Migration certificate, Category certificate (if applicable), Identity proof + Aadhar card, and 3 passport-size photographs.",
    category: "Admissions & Eligibility"
  },

  // Programmes & Curriculum
  {
    q: "What does a B.Sc. Hotel Management student actually study?",
    a: "The programme covers core hospitality operations including Food Production and Culinary Techniques, Food & Beverage Service, Front Office and Housekeeping Management, along with areas such as hospitality marketing, event planning, hotel accounting, tourism and travel management, customer relationship management, and environmental health and safety.",
    category: "Programmes & Curriculum"
  },
  {
    q: "Is B.Sc. Hotel Management mainly theoretical, or does it involve practical learning?",
    a: "The programme has a strong experiential component. Students develop technical skills through practical learning in food production, food and beverage service, front office and housekeeping, supported by industrial training and live hotel projects.",
    category: "Programmes & Curriculum"
  },
  {
    q: "Will I learn culinary skills as part of the programme?",
    a: "Yes. Food Production and Culinary Techniques form a core part of the B.Sc. Hotel Management curriculum, giving students practical exposure to professional food preparation and kitchen operations.",
    category: "Programmes & Curriculum"
  },
  {
    q: "Does the programme cover Front Office and Housekeeping, or only food and restaurant operations?",
    a: "It covers all major hotel-operation areas. Front Office and Housekeeping Management are explicitly included alongside Food Production and Food & Beverage Service.",
    category: "Programmes & Curriculum"
  },
  {
    q: "Does the curriculum include hotel management software and technology?",
    a: "Yes. The programme's stated learning outcomes include applying hospitality software and service automation tools. It includes practical learning using original open-source and licensed software, tools and techniques.",
    category: "Programmes & Curriculum"
  },
  {
    q: "Will students learn business and management skills in addition to hotel operations?",
    a: "Yes. The curriculum includes subjects and skill areas such as accounting for hospitality and tourism, human resource management in hospitality, strategic management, marketing for hospitality and tourism, facility planning, business communication and personality development.",
    category: "Programmes & Curriculum"
  },
  {
    q: "Does the curriculum include event management and catering?",
    a: "Yes. Event Planning and Catering Services are part of the stated B.Sc. programme structure. Students therefore gain exposure beyond conventional hotel-room and restaurant operations.",
    category: "Programmes & Curriculum"
  },
  {
    q: "Does the programme cover tourism and travel management?",
    a: "Yes. Tourism and Travel Management is included in the programme structure, helping students understand hospitality within the wider tourism and travel ecosystem.",
    category: "Programmes & Curriculum"
  },
  {
    q: "What is the difference between the B.Sc. Hotel Management and the Diploma in Hotel Management at Geeta University?",
    a: "The B.Sc. is a longer undergraduate degree programme with broader academic, managerial and operational coverage. The Diploma is a two-year industry-integrated programme comprising one year of academic learning on campus followed by one year of hotel industry exposure.",
    category: "Programmes & Curriculum"
  },

  // Industry Exposure & Internships
  {
    q: "How much industry exposure do hospitality students receive during the programme?",
    a: "Industry exposure is a central part of the School's learning approach. The School highlights experiential learning, optimal industry exposure, industrial training, live hotel projects, internships and real-time hospitality practice.",
    category: "Industry Exposure & Internships"
  },
  {
    q: "Does the School provide hotel internships or industrial training?",
    a: "Yes. The School highlights internships and industrial training as part of its hospitality programmes. The Diploma specifically includes one full year of hotel industry exposure, while the B.Sc. programme includes industrial training and live hotel projects.",
    category: "Industry Exposure & Internships"
  },
  {
    q: "Are internships available in luxury and premium hotel environments?",
    a: "Students featured on the School webpage have undertaken training with organisations and properties including The Leela, Radisson, Kimmane Luxury Golf Resort, Heritage Awali in Mauritius, RIU Hotels and other properties. Internship opportunities are subject to programme, availability and selection.",
    category: "Industry Exposure & Internships"
  },
  {
    q: "Is there an opportunity to earn while gaining hospitality industry experience?",
    a: "Yes, there is an 'Earn While You Learn' opportunity and it states that students can receive up to ₹8,000 per month during internship in India and Rs.60,000 per month during overseas internships, including opportunities in France , Mauritius and other destinations. Applicable terms and availability should be confirmed for the relevant internship.",
    category: "Industry Exposure & Internships"
  },
  {
    q: "What skills are students expected to develop during industry training?",
    a: "Students are expected to strengthen operational skills, guest service, communication, teamwork, professional conduct and the ability to work in real hospitality environments. Training is intended to bridge classroom learning with employer expectations.",
    category: "Industry Exposure & Internships"
  },
  {
    q: "Will internship experience be limited to hotels?",
    a: "Not necessarily. Hospitality graduates can work across hotels, restaurants, catering, airlines, cruises, tourism, events and related service businesses.",
    category: "Industry Exposure & Internships"
  },
  {
    q: "How does practical training help students during placement interviews?",
    a: "Practical training gives students real examples to discuss in interviews, helps them understand workplace standards and strengthens operational, communication and customer-service skills. It can also help students identify the hospitality function in which they want to build their careers.",
    category: "Industry Exposure & Internships"
  },
  {
    q: "Can students get international hospitality training or internships?",
    a: "Yes. The School showcases international student training experiences in destinations including Australia, Dubai, Mauritius, France and Nepal, and highlights overseas internship opportunities in locations such as Singapore and Malaysia.",
    category: "Industry Exposure & Internships"
  },

  // Placements & Career Opportunities
  {
    q: "What career options are available after studying Hotel Management?",
    a: "Career pathways include hotel operations, front office, housekeeping, food and beverage service, culinary roles, guest relations, event management, catering, tourism, airlines, cruise lines, restaurant operations, corporate hospitality and entrepreneurship.",
    category: "Placements & Career Opportunities"
  },
  {
    q: "Can Hotel Management graduates work outside hotels?",
    a: "Yes. Hospitality skills are transferable to airlines, cruise lines, travel and tourism, event management, catering, restaurants, food businesses, corporate hospitality and other customer-experience-driven industries.",
    category: "Placements & Career Opportunities"
  },
  {
    q: "Can I build a career in airlines after studying Hotel Management?",
    a: "Yes. The School identifies airlines among the industries and career environments available to hospitality graduates. Roles may involve passenger service, hospitality, ground operations and other customer-facing functions, depending on the employer and role requirements.",
    category: "Placements & Career Opportunities"
  },
  {
    q: "Can Hotel Management graduates work on international cruise lines?",
    a: "Yes. Cruise hospitality is one of the career pathways identified by the School. International cruise careers can provide exposure to multicultural teams, global guests and high-volume hospitality operations.",
    category: "Placements & Career Opportunities"
  },
  {
    q: "What roles can I pursue immediately after graduation?",
    a: "Depending on skills, internship experience and employer requirements, entry-level opportunities may include hotel operations executive, front office associate, food and beverage executive, guest relations executive, housekeeping roles, event coordination, restaurant operations and other hospitality positions.",
    category: "Placements & Career Opportunities"
  },
  {
    q: "Does the programme prepare students for management roles or only entry-level operational jobs?",
    a: "The curriculum combines operational training with management-oriented subjects such as accounting, human resources, marketing, strategic management and facility planning. This foundation can support progression toward supervisory and management roles as students gain industry experience.",
    category: "Placements & Career Opportunities"
  },
  {
    q: "Which types of companies and hospitality organisations recruit or engage with students?",
    a: "The School page lists organisations and brands across hotels, resorts and international hospitality, including renowned names such as Westin, Oberoi, ITC Hotels, The Leela, Hyatt, Taj, Marriott, Radisson, Le Meridien, Novotel, LUX Le Morne, RIU Hotels & Resorts and others.",
    category: "Placements & Career Opportunities"
  },
  {
    q: "Does the School provide placement assistance?",
    a: "Yes. Placement assistance is among the programs' biggest strengths. Students are also supported through industry-oriented learning, practical training, skill enhancement and exposure designed to improve career readiness.",
    category: "Placements & Career Opportunities"
  },
  {
    q: "Can I become an entrepreneur after studying Hotel Management?",
    a: "Yes. Hospitality education can support entrepreneurial pathways in restaurants, catering, food businesses, events, travel services, accommodation and other hospitality ventures. The B.Sc. program also focuses on development of an entrepreneurial mindset for hospitality startups as a learning outcome.",
    category: "Placements & Career Opportunities"
  },

  // Campus Life & Student Experience
  {
    q: "What practical facilities are available for hospitality students on campus?",
    a: "There are learning spaces available on campus including a Basic Training Kitchen, Front Office Lab and Housekeeping Lab, supporting hands-on learning across core hotel operations.",
    category: "Campus Life & Student Experience"
  },
  {
    q: "Will students spend most of their time in classrooms?",
    a: "No. The School's hospitality learning model combines classroom learning with practical training, experiential learning, laboratory work, industry exposure, internships and live hotel projects.",
    category: "Campus Life & Student Experience"
  },
  {
    q: "What kind of professional skills are developed besides technical hotel skills?",
    a: "Students develop communication, personality development, teamwork, customer service, leadership, problem-solving and professional behaviour alongside technical hospitality skills.",
    category: "Campus Life & Student Experience"
  },
  {
    q: "How important are grooming and communication skills in the programme?",
    a: "They are highly relevant to hospitality careers because students regularly interact with guests, colleagues and industry professionals. The curriculum includes Personality Development and Business Communication, while the School emphasises guest service and professional standards.",
    category: "Campus Life & Student Experience"
  },
  {
    q: "Will students get opportunities to participate in events and real service environments?",
    a: "The programme includes Event Planning and Catering Services and the School emphasises practical, experiential learning. Such activities can provide opportunities to apply service, coordination, guest-handling and teamwork skills in realistic settings.",
    category: "Campus Life & Student Experience"
  },
  {
    q: "Is hospitality suitable for students who enjoy cooking but do not want to become chefs?",
    a: "Yes. Culinary skills are only one part of hospitality education. Students can specialise their careers across front office, housekeeping, food and beverage service, guest relations, events, tourism, marketing, operations and management.",
    category: "Campus Life & Student Experience"
  },

  // Faculty & Learning Experience
  {
    q: "Who teaches students at the School of Hospitality & Hotel Management?",
    a: "The School's faculty includes hospitality academics and professionals with expertise across areas such as accommodation operations, front office and hospitality operations, food technology and hotel management. The School also highlights learning through experienced industry experts.",
    category: "Faculty & Learning Experience"
  },
  {
    q: "How does the School combine academic knowledge with industry practices?",
    a: "The learning model combines academic subjects with experiential learning, practical laboratories, industry exposure, internships, live hotel projects and workshops. This is intended to help students connect concepts with real hospitality operations.",
    category: "Faculty & Learning Experience"
  },
  {
    q: "Do students get exposure to industry experts and chefs?",
    a: "Yes. The School highlights distinguished faculty, multidisciplinary industry experts and expert workshops through star chefs as part of its learning experience.",
    category: "Faculty & Learning Experience"
  },
  {
    q: "How does the School help students become job-ready rather than only academically qualified?",
    a: "Job readiness is supported through practical training, industry exposure, hospitality software and tools, skill-enhancement certifications, communication and personality development, internships and placement assistance.",
    category: "Faculty & Learning Experience"
  },
  {
    q: "Are skill-enhancement certifications part of the hospitality learning experience?",
    a: "The School highlights Skill Enhancement as a key feature, intended to strengthen students' resumes and competitiveness in the job market.",
    category: "Faculty & Learning Experience"
  },

  // Global Exposure & International Careers
  {
    q: "Why is international exposure valuable in hospitality education?",
    a: "Hospitality is a global industry. International exposure can help students understand multicultural guest expectations, international service standards, workplace diversity and professional practices across different markets.",
    category: "Global Exposure & International Careers"
  },
  {
    q: "Can students pursue hospitality careers abroad after graduation?",
    a: "Yes. Hospitality qualifications and practical experience can open opportunities in international hotels, resorts, cruise lines, restaurants and other hospitality organisations, subject to employer requirements, immigration rules and destination-specific regulations.",
    category: "Global Exposure & International Careers"
  },
  {
    q: "Does international internship experience guarantee an overseas job?",
    a: "No. International training can strengthen a student's profile and global exposure, but employment depends on performance, skills, employer requirements, vacancies, work authorization and applicable immigration regulations.",
    category: "Global Exposure & International Careers"
  },

  // Parents & Decision-Making
  {
    q: "Is Hotel Management a good career choice for students who want a people-oriented profession?",
    a: "It can be a strong fit for students who enjoy interacting with people, solving guest problems, working in teams and delivering service experiences. The field also offers multiple career paths rather than restricting graduates to one type of job.",
    category: "Parents & Decision-Making"
  },
  {
    q: "What should a student consider before choosing Hotel Management as a career?",
    a: "Students should consider their interest in service and people, willingness to work in operational environments, communication skills, adaptability, teamwork, professional discipline and openness to varied work schedules and locations. The industry rewards students who combine technical competence with a strong service mindset.",
    category: "Parents & Decision-Making"
  },
  {
    q: "What makes Geeta University's hospitality programmes different from a purely classroom-based hotel management course?",
    a: "The School emphasises experiential and practice-based learning, dedicated hospitality labs, industry exposure, internships, live hotel projects, skill enhancement certifications, industry experts and placement assistance. The Diploma additionally integrates a full year of hotel industry exposure.",
    category: "Parents & Decision-Making"
  },

  // General
  {
    q: "What is the difference between Hospitality Management and Hotel Management, and is Hotel Management only about cooking and working in hotels?",
    a: "Hotel Management focuses heavily on hotel operations such as rooms, food and beverage, front office and housekeeping, while Hospitality Management is broader and can include hotels as well as restaurants, events, tourism, airlines, cruises and other guest-experience businesses. Hotel Management is also not limited to cooking; students can build careers in front office, housekeeping, food and beverage service, guest relations, events, tourism, marketing, operations and management.",
    category: "General"
  },
  {
    q: "How long are the hospitality programmes offered by the School?",
    a: "The School lists the Diploma in Hotel Management as a two-year programme, with one year on campus and one year of hotel industry exposure; the B.Sc. Hotel Management as a three/four-year programme; the M.Sc. Hotel Management as a two-year programme; and the Ph.D. in Hotel & Tourism Management with a minimum duration of three years.",
    category: "General"
  },
  {
    q: "Can a graduate from another discipline move into M.Sc. Hotel Management?",
    a: "Yes. The School lists eligibility for the M.Sc. as graduation in any stream with a minimum of 50% marks, subject to the University's applicable admission requirements.",
    category: "General"
  },
  {
    q: "What is the long-term growth potential in the hospitality industry?",
    a: "Hospitality offers multiple progression routes across operations, culinary, service, events, tourism, customer experience and management. With experience and additional skills, professionals can progress from operational roles into supervisory, managerial, specialist or entrepreneurial positions.",
    category: "General"
  }
];

const agricultureFaqs = [
  // Admissions & Eligibility
  {
    q: "What programmes are currently offered by the School of Agricultural Sciences?",
    a: "The School offers B.Sc. (Hons.) Agriculture, M.Sc. Agronomy, M.Sc. (Horticulture) Vegetable Science, M.Sc. (Horticulture) Fruit Science, M.Sc. Genetics & Plant Breeding, M.Sc. Entomology and Ph.D. Agriculture.",
    category: "Admissions & Eligibility"
  },
  {
    q: "What is the eligibility for B.Sc. (Hons.) Agriculture?",
    a: "Applicants need 10+2 or equivalent with Physics, Chemistry and Biology/Mathematics or Agriculture, with at least 50% marks.",
    category: "Admissions & Eligibility"
  },
  {
    q: "Can PCB students apply for B.Sc. (Hons.) Agriculture?",
    a: "Yes. Biology is one of the accepted subject backgrounds for the programme.",
    category: "Admissions & Eligibility"
  },
  {
    q: "Can PCM students apply for B.Sc. (Hons.) Agriculture?",
    a: "Yes. Mathematics is included among the eligible subject combinations.",
    category: "Admissions & Eligibility"
  },
  {
    q: "Can students who studied Agriculture in Class 12 apply?",
    a: "Yes. Agriculture is specifically included among the accepted subject backgrounds.",
    category: "Admissions & Eligibility"
  },
  {
    q: "What is the eligibility for the M.Sc. programmes?",
    a: "Applicants should hold a relevant graduation degree with at least 50% marks, subject to the specific programme's admission requirements.",
    category: "Admissions & Eligibility"
  },
  {
    q: "Who can apply for Ph.D. Agriculture?",
    a: "Applicants should meet the University's applicable doctoral eligibility requirements, including the required relevant postgraduate qualification and minimum 55% marks.",
    category: "Admissions & Eligibility"
  },

  // Programmes & Specialisations
  {
    q: "How long is the B.Sc. (Hons.) Agriculture programme?",
    a: "It is a four-year undergraduate programme spread across eight semesters.",
    category: "Programmes & Specialisations"
  },
  {
    q: "What are the M.Sc. specialisations available at the School?",
    a: "Students can choose M.Sc. Agronomy, M.Sc. (Horticulture) Vegetable Science, M.Sc. (Horticulture) Fruit Science, M.Sc. Genetics & Plant Breeding or M.Sc. Entomology.",
    category: "Programmes & Specialisations"
  },
  {
    q: "What does M.Sc. Agronomy focus on?",
    a: "It focuses on crop production, agronomic practices, productivity and sustainable management of agricultural systems.",
    category: "Programmes & Specialisations"
  },
  {
    q: "What will I study in M.Sc. Horticulture – Vegetable Science?",
    a: "The programme focuses on scientific vegetable production, crop improvement, cultivation practices and related horticultural management.",
    category: "Programmes & Specialisations"
  },
  {
    q: "What does M.Sc. Horticulture – Fruit Science cover?",
    a: "It focuses on fruit production, crop management, improvement, post-harvest aspects and scientific fruit cultivation.",
    category: "Programmes & Specialisations"
  },
  {
    q: "What is M.Sc. Genetics & Plant Breeding about?",
    a: "It deals with plant genetics, breeding methods and crop improvement for developing better-performing plant varieties.",
    category: "Programmes & Specialisations"
  },
  {
    q: "What will I learn in M.Sc. Entomology?",
    a: "The programme focuses on insects affecting agriculture, their identification, management and integrated approaches to pest control.",
    category: "Programmes & Specialisations"
  },
  {
    q: "What areas can be explored through Ph.D. Agriculture?",
    a: "Research can span areas such as agronomy, soil science, plant breeding, entomology, horticulture, biotechnology and climate-smart agriculture, depending on available research expertise.",
    category: "Programmes & Specialisations"
  },

  // Curriculum & Practical Learning
  {
    q: "Is the agriculture curriculum aligned with ICAR guidelines?",
    a: "The School states that its curriculum is aligned with the ICAR 6th Dean Committee framework and follows the NEP 2020 framework.",
    category: "Curriculum & Practical Learning"
  },
  {
    q: "Is B.Sc. Agriculture mainly theoretical?",
    a: "No. Classroom learning is combined with farm work, laboratories, field activities, RAWE, experiential learning, visits and demonstrations.",
    category: "Curriculum & Practical Learning"
  },
  {
    q: "How much hands-on farm experience will students get?",
    a: "Students receive practical exposure through experimental farms, crop-production training units, demonstration units and other field-based learning spaces.",
    category: "Curriculum & Practical Learning"
  },
  {
    q: "What are RAWE and experiential learning in agriculture?",
    a: "RAWE provides Rural Agricultural Work Experience, while experiential learning lets students apply agricultural concepts through practical activities and field-based tasks.",
    category: "Curriculum & Practical Learning"
  },
  {
    q: "What modern farming technologies will students be exposed to?",
    a: "The School highlights precision farming, smart agriculture, protected cultivation and other technology-enabled approaches to modern farming.",
    category: "Curriculum & Practical Learning"
  },
  {
    q: "Does the curriculum cover sustainable agriculture?",
    a: "Yes. Sustainable agriculture, climate-smart farming, organic agriculture and responsible resource use are among the School's focus areas.",
    category: "Curriculum & Practical Learning"
  },
  {
    q: "Will students learn about pest management?",
    a: "Yes. The academic and research environment covers entomology and Integrated Pest Management as important areas of agricultural practice.",
    category: "Curriculum & Practical Learning"
  },
  {
    q: "Does the School cover crop improvement and plant breeding?",
    a: "Yes. Crop improvement, genetics and plant breeding are supported through dedicated academic and laboratory areas.",
    category: "Curriculum & Practical Learning"
  },

  // Laboratories & Learning Spaces
  {
    q: "What laboratories are available to agriculture students?",
    a: "The School highlights Agronomy, Genetics & Plant Breeding, Entomology, Horticulture, Seed Testing and Soil Science laboratories.",
    category: "Laboratories & Learning Spaces"
  },
  {
    q: "What can students learn in the Seed Testing Laboratory?",
    a: "It provides a practical setting for learning about seed quality and testing-related agricultural practices.",
    category: "Laboratories & Learning Spaces"
  },
  {
    q: "Is there a dedicated Soil Science laboratory?",
    a: "Yes. The School has a Soil Science Laboratory for practical learning related to soils and agricultural production.",
    category: "Laboratories & Learning Spaces"
  },
  {
    q: "Does the School have horticulture learning facilities?",
    a: "Yes. Horticulture is supported through a dedicated laboratory, experimental learning spaces and practical exposure to vegetable and fruit production.",
    category: "Laboratories & Learning Spaces"
  },
  {
    q: "Are protected cultivation facilities available?",
    a: "Yes. The School highlights protected cultivation structures as part of its experiential learning spaces.",
    category: "Laboratories & Learning Spaces"
  },
  {
    q: "Do students get exposure to precision farming?",
    a: "Yes. Precision farming exposure is specifically listed among the School's practical learning facilities.",
    category: "Laboratories & Learning Spaces"
  },
  {
    q: "Are there field research facilities at the School?",
    a: "Yes. Field research facilities and experimental farms are part of the School's learning environment.",
    category: "Laboratories & Learning Spaces"
  },

  // Industry Exposure, Research & Activities
  {
    q: "Do agriculture students get exposure beyond the campus?",
    a: "Yes. Students can participate in industrial visits, educational tours, field demonstrations and interactions with agricultural stakeholders.",
    category: "Industry Exposure, Research & Activities"
  },
  {
    q: "What kind of agricultural industry exposure is available?",
    a: "The School highlights connections with organisations such as IFFCO, Bayer, Syngenta, UPL, Mahindra Agri, Godrej Agrovet, Advanta Seeds and Nuziveedu Seeds.",
    category: "Industry Exposure, Research & Activities"
  },
  {
    q: "Does the School organise interactions with farmers?",
    a: "Yes. Kisan Interaction Programmes are among the School's listed academic and engagement activities.",
    category: "Industry Exposure, Research & Activities"
  },
  {
    q: "What other activities do agriculture students participate in?",
    a: "Activities include crop exhibitions, guest lectures, workshops, seminars, research presentations, awareness campaigns and plantation drives.",
    category: "Industry Exposure, Research & Activities"
  },
  {
    q: "Can students participate in agricultural research?",
    a: "Yes. Research presentations, field research facilities and research-oriented learning are part of the School's academic environment.",
    category: "Industry Exposure, Research & Activities"
  },
  {
    q: "What are the School's major research and innovation focus areas?",
    a: "Key areas include sustainable agriculture, climate-smart farming, organic agriculture, precision farming, crop improvement and Integrated Pest Management.",
    category: "Industry Exposure, Research & Activities"
  },
  {
    q: "Can students work with space and remote-sensing technologies in agriculture?",
    a: "The School's earlier academic profile highlights exposure to Remote Sensing and GIS through its IIRS-ISRO linkage, subject to the opportunities available in the programme.",
    category: "Industry Exposure, Research & Activities"
  },

  // Career Opportunities & Higher Studies
  {
    q: "What career options are available after B.Sc. (Hons.) Agriculture?",
    a: "Graduates can explore roles such as Agronomist, Agricultural Officer, Agri-Entrepreneur and positions in agribusiness, research, government services and allied sectors.",
    category: "Career Opportunities & Higher Studies"
  },
  {
    q: "What can I do after an M.Sc. in Agriculture?",
    a: "Depending on the specialisation, graduates can pursue specialist roles, research, teaching, industry positions, agricultural advisory work or doctoral studies.",
    category: "Career Opportunities & Higher Studies"
  },
  {
    q: "What career opportunities are available after M.Sc. Genetics & Plant Breeding?",
    a: "Possible pathways include plant breeding, crop improvement, seed-sector roles, research and higher studies.",
    category: "Career Opportunities & Higher Studies"
  },
  {
    q: "What can I do after M.Sc. Entomology?",
    a: "Career directions include pest management, research, agricultural advisory roles, agri-input companies and further academic study.",
    category: "Career Opportunities & Higher Studies"
  },
  {
    q: "Can agriculture graduates work in agribusiness?",
    a: "Yes. Agribusiness is an important career pathway, covering areas such as inputs, production, marketing, supply chains and agricultural services.",
    category: "Career Opportunities & Higher Studies"
  },
  {
    q: "Can agriculture graduates start their own venture?",
    a: "Yes. Students can explore agri-entrepreneurship in areas such as farm enterprises, nurseries, agricultural inputs, food-related ventures and consultancy.",
    category: "Career Opportunities & Higher Studies"
  },
  {
    q: "Can agriculture graduates work in government services?",
    a: "Yes. Government services and agricultural officer roles are among the career pathways highlighted by the School, subject to the requirements of individual posts.",
    category: "Career Opportunities & Higher Studies"
  },
  {
    q: "Can I pursue a Ph.D. after completing an M.Sc. at the School?",
    a: "Yes. Students who meet the applicable doctoral eligibility requirements can progress to Ph.D. Agriculture.",
    category: "Career Opportunities & Higher Studies"
  },

  // Faculty & Student Experience
  {
    q: "What areas do the School's faculty specialise in?",
    a: "Faculty expertise covers areas such as agronomy, horticulture, plant breeding, entomology, soil science, nutrient management, protected cultivation and post-harvest technology.",
    category: "Faculty & Student Experience"
  },
  {
    q: "How are students prepared for real agricultural work?",
    a: "Students combine academic study with laboratory work, farm activities, field demonstrations, RAWE, experiential learning and industry exposure.",
    category: "Faculty & Student Experience"
  },
  {
    q: "Will I develop skills beyond technical agriculture?",
    a: "Yes. Fieldwork, presentations, expert interactions, workshops and experiential activities help students build communication, teamwork and professional skills.",
    category: "Faculty & Student Experience"
  },

  // Parents & Student Decision-Making
  {
    q: "Is B.Sc. Agriculture suitable for a student who does not come from a farming family?",
    a: "Yes. The programme is science-based and does not require students to come from a farming background.",
    category: "Parents & Student Decision-Making"
  },
  {
    q: "Is Agriculture only about farming?",
    a: "No. Modern agriculture includes agritech, crop improvement, horticulture, pest management, food systems, agribusiness, research and sustainable resource management.",
    category: "Parents & Student Decision-Making"
  },
  {
    q: "Can a student interested in technology build a career in agriculture?",
    a: "Yes. Areas such as precision farming, smart agriculture and technology-enabled crop management connect agriculture with modern technology.",
    category: "Parents & Student Decision-Making"
  },
  {
    q: "Which agriculture specialisation should I choose for postgraduate study?",
    a: "Choose according to your interest: Agronomy for crop production, Vegetable or Fruit Science for horticulture, Genetics & Plant Breeding for crop improvement, and Entomology for insect and pest management.",
    category: "Parents & Student Decision-Making"
  },
  {
    q: "What makes the School different from a classroom-only agriculture programme?",
    a: "It combines an ICAR-aligned academic framework with laboratories, experimental farms, RAWE, field activities, protected cultivation, precision-farming exposure, research and industry interaction.",
    category: "Parents & Student Decision-Making"
  },

  // General
  {
    q: "Can agriculture graduates work outside traditional farming?",
    a: "Yes. Career avenues also include agribusiness, seed and agri-input companies, research, government services, horticulture, pest management, agricultural marketing and entrepreneurship.",
    category: "General"
  },
  {
    q: "What is the long-term scope of an Agriculture degree?",
    a: "The field now extends into agritech, sustainable and climate-smart farming, crop improvement, horticulture, research, agribusiness and technology-driven agriculture.",
    category: "General"
  },
  {
    q: "Does the School provide placement and career support?",
    a: "The School highlights industry connections and career pathways. Individual placement outcomes depend on student skills, recruiter requirements and opportunities available in a particular cycle.",
    category: "General"
  }
];

const forensicFaqs = [
  // Admissions & Eligibility
  {
    q: "What programmes are currently offered in Forensic Science at Geeta University?",
    a: "The School currently offers B.Sc. Forensic Science, M.Sc. Forensic Science and Ph.D. Forensic Science.",
    category: "Admissions & Eligibility"
  },
  {
    q: "What is the eligibility for B.Sc. Forensic Science?",
    a: "Students should have passed or appeared in 10+2 in the Science stream with Physics, Chemistry and Biology/Mathematics with at least 55% for General/OBC (NCL)/EWS candidates and 50% or equivalent for SC/ST and PwD candidates.",
    category: "Admissions & Eligibility"
  },
  {
    q: "Can a PCB student apply for B.Sc. Forensic Science?",
    a: "Yes. Biology is one of the accepted subject combinations for the programme.",
    category: "Admissions & Eligibility"
  },
  {
    q: "Can a PCM student apply for B.Sc. Forensic Science?",
    a: "Yes. Mathematics is also accepted as part of the qualifying Science-stream background.",
    category: "Admissions & Eligibility"
  },
  {
    q: "What is the eligibility for M.Sc. Forensic Science?",
    a: "Applicants need a bachelor's degree in Science, Forensic Science, Medicine, Engineering, Pharmacy, Dentistry or AYUSH, with minimum 55% marks for General/OBC (NCL)/EWS category and 50% or equivalent for SC/ST and PwD Category.",
    category: "Admissions & Eligibility"
  },
  {
    q: "Who can apply for Ph.D. Forensic Science?",
    a: "Applicants need a relevant master's degree with at least 55% aggregate, subject to the University's doctoral admission requirements.",
    category: "Admissions & Eligibility"
  },

  // Understanding the Programme
  {
    q: "What is B.Sc. Forensic Science actually about?",
    a: "It applies scientific methods to crime investigation, evidence examination and the interpretation of forensic findings.",
    category: "Understanding the Programme"
  },
  {
    q: "Is Forensic Science a science degree or a criminal-investigation course?",
    a: "It is primarily a science-based programme that applies laboratory and analytical methods to criminal investigations and evidence.",
    category: "Understanding the Programme"
  },
  {
    q: "What subjects are covered in B.Sc. Forensic Science?",
    a: "Key areas include crime scene investigation, forensic biology, forensic chemistry, toxicology, ballistics, fingerprint analysis, cyber forensics, criminal law basics and laboratory practicals.",
    category: "Understanding the Programme"
  },
  {
    q: "What is taught in M.Sc. Forensic Science?",
    a: "The programme goes deep into forensic biology, serology, toxicology, DNA fingerprinting, criminalistics, digital and cyber forensics, crime-scene reconstruction and forensic psychology.",
    category: "Understanding the Programme"
  },
  {
    q: "What is the main difference between B.Sc. and M.Sc. Forensic Science?",
    a: "B.Sc. builds foundational scientific and forensic skills, while M.Sc. develops deeper specialist, analytical and research capabilities.",
    category: "Understanding the Programme"
  },
  {
    q: "What does Ph.D. Forensic Science involve?",
    a: "The Ph.D. is research-focused, with scholars working on specialised forensic problems under academic supervision and completing research and publication-related requirements.",
    category: "Understanding the Programme"
  },

  // Practical Learning & Laboratories
  {
    q: "Will I get hands-on laboratory training in Forensic Science?",
    a: "Yes. Practical laboratory work is a central part of the programmes, alongside scientific and theoretical learning.",
    category: "Practical Learning & Laboratories"
  },
  {
    q: "Will students actually practise crime-scene investigation?",
    a: "Yes. Students work through crime-scene simulations and evidence-analysis activities to develop their investigation skills.",
    category: "Practical Learning & Laboratories"
  },
  {
    q: "What kind of forensic evidence will students learn to examine?",
    a: "Training covers areas such as biological evidence, chemical evidence, fingerprints, toxicological samples, DNA and other crime-scene materials.",
    category: "Practical Learning & Laboratories"
  },
  {
    q: "Does the programme include DNA analysis?",
    a: "Yes. DNA analysis and DNA fingerprinting are included in the forensic curriculum, particularly at the postgraduate level.",
    category: "Practical Learning & Laboratories"
  },
  {
    q: "Will I learn about fingerprint examination?",
    a: "Yes. Fingerprint analysis is included among the B.Sc. forensic subjects and practical learning areas.",
    category: "Practical Learning & Laboratories"
  },
  {
    q: "Is toxicology part of the course?",
    a: "Yes. Forensic toxicology is covered as an important area of forensic analysis.",
    category: "Practical Learning & Laboratories"
  },
  {
    q: "Does the School teach digital and cyber forensics?",
    a: "Yes. Cyber and digital forensics form part of the curriculum, with advanced treatment at the M.Sc. level.",
    category: "Practical Learning & Laboratories"
  },
  {
    q: "Will students learn how to handle and preserve evidence?",
    a: "Yes. Evidence handling is an important practical skill developed through forensic laboratory work and crime-scene activities.",
    category: "Practical Learning & Laboratories"
  },
  {
    q: "Are there case studies as part of teaching?",
    a: "Yes. Case studies, discussions, seminars and practical exercises are used alongside classroom and laboratory teaching.",
    category: "Practical Learning & Laboratories"
  },

  // Internships, Industry & Exposure
  {
    q: "Are internships included in Forensic Science programmes?",
    a: "Yes. The programmes include regular internship and practical exposure at different intervals.",
    category: "Internships, Industry & Exposure"
  },
  {
    q: "Can students get exposure to real forensic laboratories?",
    a: "The University already has industry connections with Central and State Forensic Science Laboratories, giving students opportunities for exposure to professional forensic work.",
    category: "Internships, Industry & Exposure"
  },
  {
    q: "Does Geeta University have links with forensic organisations?",
    a: "Industrial tie-ups with CFSLs and SFSLs and practical exposure through forensic agencies are among the major USPs of Geeta University.",
    category: "Internships, Industry & Exposure"
  },
  {
    q: "Do students get exposure beyond regular classroom teaching?",
    a: "Yes. Students will get a chance to participate in workshops, expert lectures, seminars, conferences, practical activities and forensic case-based learning.",
    category: "Internships, Industry & Exposure"
  },
  {
    q: "Are industry experts involved in teaching or interaction?",
    a: "Yes. From time to time Expert talks and industry interaction are conducted as part of its learning experience.",
    category: "Internships, Industry & Exposure"
  },
  {
    q: "Has the School organised international forensic events?",
    a: "Yes. The School did organize an International Conference on Forensic Science where students gained exposure to developments and experts’ perspectives in the field.",
    category: "Internships, Industry & Exposure"
  },

  // Faculty & Learning Experience
  {
    q: "Who teaches Forensic Science at the School?",
    a: "The faculty encompasses academics with special backgrounds in forensic science, physics and related scientific disciplines, along with research experience in areas such as forensic nanotechnology.",
    category: "Faculty & Learning Experience"
  },
  {
    q: "Is the teaching mainly classroom-based?",
    a: "No. Teaching combines theory with additional laboratory work, case studies, simulations, discussions, seminars and practical exercises.",
    category: "Faculty & Learning Experience"
  },
  {
    q: "How does the programme develop investigative thinking?",
    a: "Students practise observation, evidence analysis, case interpretation and problem-solving through simulations, laboratory work and forensic case studies.",
    category: "Faculty & Learning Experience"
  },
  {
    q: "Will I learn how forensic findings are presented in legal settings?",
    a: "The programmes include exposure to legal procedures and, at postgraduate level, courtroom-testimony readiness as part of professional preparation.",
    category: "Faculty & Learning Experience"
  },
  {
    q: "Can students develop research skills in Forensic Science?",
    a: "Yes. Special Emphasis is given to research progressively during the study, with the M.Sc. including dissertation and seminar work and the Ph.D. focusing on independent research.",
    category: "Faculty & Learning Experience"
  },

  // Careers & Higher Studies
  {
    q: "What can I do after B.Sc. Forensic Science?",
    a: "Graduates can certainly explore roles in forensic laboratories, investigation support, crime-scene work, forensic analysis, law enforcement and related private-sector organisations.",
    category: "Careers & Higher Studies"
  },
  {
    q: "Which organisations can employ Forensic Science graduates?",
    a: "Potential sectors among which Forensic Science graduates can get jobs include Central and State Forensic Science Laboratories, crime branches, police and investigation agencies, defence, courts, narcotics departments, universities and private forensic organisations.",
    category: "Careers & Higher Studies"
  },
  {
    q: "Can I work as a Crime Scene Investigator after B.Sc. Forensic Science?",
    a: "Crime Scene Investigator is one of the prominent career roles associated with the programme, although appointment depends on the employer's conditions and hiring requirements.",
    category: "Careers & Higher Studies"
  },
  {
    q: "Can Forensic Science graduates work in cybercrime?",
    a: "Yes. Students will definitely get relevant digital and cyber-forensics skills during their programme, which can in turn help them pursue roles related to cybercrime investigation and digital evidence.",
    category: "Careers & Higher Studies"
  },
  {
    q: "Can I work in a forensic laboratory after graduation?",
    a: "Yes. Forensic laboratories are a major career pathway, with roles depending on the student's qualification, specialisation and the employer's recruitment method used.",
    category: "Careers & Higher Studies"
  },
  {
    q: "What can I do after M.Sc. Forensic Science?",
    a: "M.Sc. graduates can pursue specialist forensic, investigation, research, academic and legal-support roles, or continue to doctoral research down the line.",
    category: "Careers & Higher Studies"
  },
  {
    q: "Can I pursue a Ph.D. after M.Sc. Forensic Science?",
    a: "Yes. M.Sc. graduates with minimum 55% marks can pursue Ph.D. Forensic Science and research in specialised forensic domains.",
    category: "Careers & Higher Studies"
  },
  {
    q: "Can Forensic Science lead to a teaching or academic career?",
    a: "Yes. Higher qualifications such as M.Sc. and Ph.D. can support academic and research careers, subject to institutional eligibility requirements.",
    category: "Careers & Higher Studies"
  },
  {
    q: "Can I work in the private sector after studying Forensic Science?",
    a: "Yes. Private forensic laboratories, investigation organisations, detective agencies and other specialised organisations can offer relevant career opportunities.",
    category: "Careers & Higher Studies"
  },

  // Student Decision-Making
  {
    q: "Is Forensic Science suitable for someone who enjoys Biology and Chemistry?",
    a: "Yes. The field uses scientific knowledge from areas such as biology and chemistry to examine evidence and solve investigative problems. So, it is highly suitable for someone who enjoys Biology and Chemistry.",
    category: "Student Decision-Making"
  },
  {
    q: "Do I need to be interested in police work to study Forensic Science?",
    a: "Not necessarily. The field also includes laboratory analysis, research, scientific examination, digital forensics, academia and legal support. Police work is not something which is in any way mandatory for studying Forensic Science.",
    category: "Student Decision-Making"
  },
  {
    q: "Is Forensic Science like what I see in crime shows?",
    a: "No. Crime shows mostly simplify forensic work. The actual field involves careful evidence handling, laboratory procedures, scientific analysis, documentation and methodical investigation.",
    category: "Student Decision-Making"
  },
  {
    q: "Is Forensic Science a good choice if I prefer practical learning?",
    a: "Yes. The programme includes laboratory work, crime-scene simulations, evidence examination and other hands-on activities.",
    category: "Student Decision-Making"
  },
  {
    q: "What skills should I have to succeed in Forensic Science?",
    a: "Strong observation, analytical thinking, scientific reasoning, attention to detail and careful evidence handling are particularly useful.",
    category: "Student Decision-Making"
  },
  {
    q: "Can I choose Forensic Science if I am interested in both science and law?",
    a: "Yes. The programme connects scientific evidence with criminal-law procedures and investigative practice, making it suitable for students interested in both science and law.",
    category: "Student Decision-Making"
  },

  // General
  {
    q: "What is the duration of B.Sc. Forensic Science?",
    a: "The programme duration is 3 years and 4 years for B.Sc. Forensic Science and B.Sc. (Honors) Forensic science respectively.",
    category: "General"
  },
  {
    q: "What is the duration of M.Sc. Forensic Science?",
    a: "M.Sc. Forensic Science is a two-year postgraduate programme.",
    category: "General"
  },
  {
    q: "What is the minimum duration of Ph.D. Forensic Science?",
    a: "The Ph.D. programme has a minimum duration of three years.",
    category: "General"
  },
  {
    q: "Does the School offer Forensic Science as a specialised field rather than a broad science degree?",
    a: "Currently, the School has focused fully on Forensic Science at undergraduate, postgraduate and doctoral levels.",
    category: "General"
  },
  {
    q: "Does the University provide placement assistance for Forensic Science students?",
    a: "Yes, the University is fully committed to giving the best possible placement assistance to Forensic Science students in the form of mock interview, aptitude classes, Soft skill training, and regular placement drives.",
    category: "General"
  },
  {
    q: "What placement figures are displayed by the University?",
    a: "The University displays ₹40 LPA as the highest package, 550+ recruiters and 3,500+ job offers. These are broad University-level figures.",
    category: "General"
  }
];

const humanitiesFaqs = [
  // Admissions & Eligibility
  {
    q: "What programmes are currently offered by the School of Humanities & Social Sciences?",
    a: "The School currently offers B.A. programmes in Political Science, Psychology, Economics, Social Work and English; M.A. programmes in Political Science and Psychology; and Ph.D. programmes in Psychology and Political Science.",
    category: "Admissions & Eligibility"
  },
  {
    q: "What is the eligibility for the B.A. programmes?",
    a: "Candidates need to have passed the 10+2 examination with a minimum of 50% marks, in any stream.",
    category: "Admissions & Eligibility"
  },
  {
    q: "Can students from different Class 12 streams apply for the B.A. programmes?",
    a: "Yes. There is no restriction based on Class 12 stream — students from Science, Commerce, Arts/Humanities or any other stream can apply for the B.A. programmes, as long as they have passed 10+2 with at least 50% marks.",
    category: "Admissions & Eligibility"
  },
  {
    q: "What is the eligibility for the M.A. programmes?",
    a: "For both M.A. Political Science and M.A. Psychology, applicants need a Bachelor's degree with a minimum of 50% marks in a relevant subject.",
    category: "Admissions & Eligibility"
  },
  {
    q: "Who can apply for the Ph.D. in Psychology?",
    a: "Candidates need a Master's degree in a relevant field with a minimum of 55% marks, along with the University's doctoral admission and research-eligibility requirements for Psychology.",
    category: "Admissions & Eligibility"
  },

  // Choosing the Right Programme
  {
    q: "How do I choose between B.A. Psychology, Political Science, Economics and Social Work?",
    a: "Choose Psychology for human behaviour, Political Science for governance, Economics for markets and quantitative analysis, and Social Work for community welfare and social intervention.",
    category: "Choosing the Right Programme"
  },
  {
    q: "What does B.A. Psychology focus on?",
    a: "B.A. (Hons.) Psychology builds a foundation in cognitive, developmental and abnormal psychology, blending theory with lab-based experiments, psychological assessments and community outreach. It prepares students for counselling, HR, mental health and education-related roles.",
    category: "Choosing the Right Programme"
  },
  {
    q: "What will I study in B.A. Political Science?",
    a: "The programme covers politics, governance, institutions, public affairs and political thought, with links to policy and administration.",
    category: "Choosing the Right Programme"
  },
  {
    q: "What does B.A. Economics prepare students for?",
    a: "It builds knowledge of economic systems, markets, policy and analytical decision-making, with applications in business, finance, research and development.",
    category: "Choosing the Right Programme"
  },
  {
    q: "What is the focus of B.A. Social Work?",
    a: "The programme centres on social issues, welfare, community engagement and professional social-work practice.",
    category: "Choosing the Right Programme"
  },
  {
    q: "What is the difference between B.A. and M.A. Psychology?",
    a: "B.A. Psychology provides the foundation — human behaviour, psychological processes and core testing skills. M.A. Psychology builds on this with deeper subject knowledge, specialised study and stronger research preparation, requiring a Bachelor's degree with 50% marks in a relevant subject for entry.",
    category: "Choosing the Right Programme"
  },
  {
    q: "What is the difference between B.A. and M.A. Political Science?",
    a: "B.A. Political Science builds the fundamentals of politics and governance, while M.A. Political Science (open to Bachelor's degree holders with 50% marks in a relevant subject) develops more advanced analysis and specialisation.",
    category: "Choosing the Right Programme"
  },

  // Learning, Research & Exposure
  {
    q: "Is learning at the School mainly theoretical?",
    a: "No. The School combines academic study with experiential learning, workshops, collaborations and practical applications.",
    category: "Learning, Research & Exposure"
  },
  {
    q: "How does the School make social-science subjects practical?",
    a: "Students connect concepts with contemporary social, behavioural, economic and governance issues through activities, workshops and applied learning.",
    category: "Learning, Research & Exposure"
  },
  {
    q: "Will Psychology students learn research methods?",
    a: "Yes. Research design, analysis, interpretation and academic writing are developed through coursework and projects, particularly at higher levels.",
    category: "Learning, Research & Exposure"
  },
  {
    q: "Can undergraduate students participate in research?",
    a: "Opportunities depend on faculty projects and the academic calendar, but students can develop research skills through projects and academic activities.",
    category: "Learning, Research & Exposure"
  },
  {
    q: "Can students work on real social issues?",
    a: "Yes. The School encourages students to relate their learning to contemporary social and community issues.",
    category: "Learning, Research & Exposure"
  },
  {
    q: "Does the School organise workshops and expert sessions?",
    a: "Yes. Workshops, academic collaborations and expert-led activities form part of the learning experience.",
    category: "Learning, Research & Exposure"
  },
  {
    q: "Can students connect their subject with current affairs and public policy?",
    a: "Yes. This is especially relevant to Political Science, Economics, Psychology and Social Work.",
    category: "Learning, Research & Exposure"
  },

  // Career Opportunities — Psychology
  {
    q: "What can I do after B.A. Psychology?",
    a: "Graduates can work in counselling centres, schools, NGOs, HR departments and mental health institutions, along with roles in education, research support and community organisations.",
    category: "Career Opportunities — Psychology"
  },
  {
    q: "Can a B.A. Psychology graduate become a clinical psychologist?",
    a: "No. A B.A. alone does not qualify someone for clinical practice. Additional recognised qualifications and applicable regulatory requirements are necessary; further studies such as M.A./M.Sc. Psychology, M.Phil or Ph.D. can lead toward roles like clinical psychologist or therapist.",
    category: "Career Opportunities — Psychology"
  },
  {
    q: "What can I do after M.A. Psychology?",
    a: "Graduates can explore research, education, HR, behavioural work, wellness organisations, social-sector roles and further doctoral study.",
    category: "Career Opportunities — Psychology"
  },
  {
    q: "Can Psychology graduates work in HR?",
    a: "Yes. Knowledge of behaviour, motivation and communication can support careers in HR, talent management and organisational roles.",
    category: "Career Opportunities — Psychology"
  },
  {
    q: "Can Psychology graduates pursue research or a Ph.D.?",
    a: "Yes. The School offers a Ph.D. in Psychology for Master's degree holders with a minimum of 55% marks in a relevant field, providing a pathway to advanced research and doctoral study.",
    category: "Career Opportunities — Psychology"
  },

  // Career Opportunities — Political Science
  {
    q: "What career options are available after B.A. Political Science?",
    a: "Graduates can explore policy research, administration, NGOs, journalism, political research, development organisations and related fields.",
    category: "Career Opportunities — Political Science"
  },
  {
    q: "Is Political Science useful for civil-services preparation?",
    a: "Yes. It provides a strong foundation in governance, institutions, public policy and political thought, but the degree itself does not guarantee exam success.",
    category: "Career Opportunities — Political Science"
  },
  {
    q: "Can Political Science graduates work in public policy?",
    a: "Yes. Policy research and governance roles are relevant options for graduates with strong research, writing and analytical skills.",
    category: "Career Opportunities — Political Science"
  },
  {
    q: "Can Political Science graduates work with NGOs and development organisations?",
    a: "Yes. Knowledge of governance, society and public institutions is useful in development, advocacy and community programmes.",
    category: "Career Opportunities — Political Science"
  },
  {
    q: "Can I pursue M.A. Political Science after B.A. Political Science?",
    a: "Yes. The School offers M.A. Political Science for Bachelor's degree holders with a minimum of 50% marks in a relevant subject, and a Ph.D. in Political Science for those who wish to go further.",
    category: "Career Opportunities — Political Science"
  },

  // Career Opportunities — Economics
  {
    q: "What can I do after B.A. Economics?",
    a: "Career areas include business analysis, research, banking and finance, consulting, market research, policy and development.",
    category: "Career Opportunities — Economics"
  },
  {
    q: "Is Economics useful for banking and finance careers?",
    a: "Yes. Economics develops knowledge of markets, policy and quantitative reasoning that can support finance-related careers.",
    category: "Career Opportunities — Economics"
  },
  {
    q: "Can Economics graduates work in data and analytics?",
    a: "Yes, especially when they add skills in statistics, spreadsheets, data visualisation and analytical tools.",
    category: "Career Opportunities — Economics"
  },
  {
    q: "Can Economics graduates work in public policy and development?",
    a: "Yes. Economics is relevant to policy analysis, development economics, public finance and socio-economic research.",
    category: "Career Opportunities — Economics"
  },
  {
    q: "What higher-study options are available after B.A. Economics?",
    a: "Students can pursue postgraduate study in Economics or related disciplines, along with specialised professional or research pathways.",
    category: "Career Opportunities — Economics"
  },

  // Career Opportunities — Social Work
  {
    q: "What career options are available after B.A. Social Work?",
    a: "Graduates can work in NGOs, community development, CSR, public and development programmes, rehabilitation and welfare organisations.",
    category: "Career Opportunities — Social Work"
  },
  {
    q: "Will Social Work students work with communities?",
    a: "Yes. B.A. Social Work is practice-oriented — students engage directly with communities through fieldwork placements, internships and outreach projects as part of the programme's professional social-work practice component.",
    category: "Career Opportunities — Social Work"
  },
  {
    q: "Can Social Work graduates work in CSR?",
    a: "Yes. Community engagement, programme implementation and social-impact skills are relevant to CSR roles.",
    category: "Career Opportunities — Social Work"
  },
  {
    q: "Can Social Work graduates work with development organisations?",
    a: "Yes. NGOs and development organisations are important career areas for graduates with strong community, research and programme skills.",
    category: "Career Opportunities — Social Work"
  },

  // Faculty & Student Development
  {
    q: "What kind of faculty teach at the School?",
    a: "The School's faculty includes UGC-NET qualified and doctorate-holding professors across Psychology and Political Science, with academic backgrounds from institutions such as the University of Delhi, and research interests spanning counselling psychology, positive psychology, organisational psychology, and global politics and governance.",
    category: "Faculty & Student Development"
  },
  {
    q: "How does the School develop critical thinking?",
    a: "Students engage with contemporary issues, discussion, analysis, interdisciplinary perspectives and experiential learning.",
    category: "Faculty & Student Development"
  },
  {
    q: "Will I develop communication and presentation skills?",
    a: "Yes. Workshops, academic activities and project work help strengthen communication, writing, presentation and collaboration skills.",
    category: "Faculty & Student Development"
  },
  {
    q: "Can students prepare for careers while completing a B.A.?",
    a: "Yes. Students can strengthen their profile through internships, workshops, research, digital skills, certifications or competitive-examination preparation.",
    category: "Faculty & Student Development"
  },
  {
    q: "Does the School encourage interdisciplinary learning?",
    a: "Yes. Students are encouraged to connect Psychology, Political Science, Economics, Social Work and wider social-science perspectives.",
    category: "Faculty & Student Development"
  },

  // Parents & Student Decision-Making
  {
    q: "Is a humanities or social-science degree useful for employment?",
    a: "Yes. These programmes build research, communication, writing and analytical skills. Career prospects improve further with practical experience, specialisation or higher study.",
    category: "Parents & Student Decision-Making"
  },
  {
    q: "Is Psychology only for students who want to become psychologists?",
    a: "No. It can lead to HR, education, research, behavioural studies, wellness and social-sector roles; regulated clinical practice requires additional qualifications beyond the degree.",
    category: "Parents & Student Decision-Making"
  },
  {
    q: "Is Political Science only useful for civil services?",
    a: "No. Graduates can also move into policy, research, administration, journalism, NGOs, development and academia.",
    category: "Parents & Student Decision-Making"
  },
  {
    q: "Is Economics a good choice for students who like mathematics and data?",
    a: "It can be a good fit for students who enjoy analytical and quantitative work and are willing to develop statistical and data skills.",
    category: "Parents & Student Decision-Making"
  },
  {
    q: "What should I consider before choosing among these B.A. subjects?",
    a: "Think about the questions you enjoy most: behaviour for Psychology, governance for Political Science, markets and data for Economics, or social welfare and community work for Social Work.",
    category: "Parents & Student Decision-Making"
  },
  {
    q: "Can I change my career direction after completing a B.A.?",
    a: "Yes. Depending on eligibility, graduates can move into master's programmes, professional qualifications, competitive examinations and careers that value transferable skills.",
    category: "Parents & Student Decision-Making"
  },

  // Higher Studies, Research & General
  {
    q: "Which postgraduate programmes are available at the School?",
    a: "The School currently offers M.A. Political Science and M.A. Psychology, both requiring a Bachelor's degree with a minimum of 50% marks in a relevant subject.",
    category: "Higher Studies, Research & General"
  },
  {
    q: "Does the School offer doctoral study?",
    a: "Yes. The School currently offers Ph.D. programmes in Psychology and Political Science, both requiring a Master's degree in a relevant field with a minimum of 55% marks.",
    category: "Higher Studies, Research & General"
  },
  {
    q: "Can an M.A. graduate pursue a Ph.D.?",
    a: "Yes, subject to the relevant doctoral programme's eligibility, research and admission requirements — a Master's degree with a minimum of 55% marks in a relevant field.",
    category: "Higher Studies, Research & General"
  },
  {
    q: "What research areas can students explore?",
    a: "Research may cover human behaviour, governance, public policy, economics, social development, education, community welfare and related contemporary issues.",
    category: "Higher Studies, Research & General"
  },
  {
    q: "What career sectors can graduates enter?",
    a: "Possible sectors include education, policy, social work, HR and CSR, media, development, finance, consulting, research, advocacy and higher education.",
    category: "Higher Studies, Research & General"
  },
  {
    q: "What makes the School different from a purely theory-based humanities college?",
    a: "It combines academic foundations with interdisciplinary learning, experiential activities, workshops, research opportunities and career-oriented skill development.",
    category: "Higher Studies, Research & General"
  }
];

const lawFaqs = [
  // About the School
  {
    q: "What is Geeta Global Law School (GGLS)?",
    a: "GGLS is a constituent law school of Geeta University, Panipat, established in 2022–23, offering integrated undergraduate, postgraduate, and doctoral law programmes with a practice-first, moot-court-driven pedagogy.",
    category: "About the School"
  },
  {
    q: "Is GGLS a separate institution from Geeta University?",
    a: "No. GGLS operates as a constituent school under Geeta University, giving students access to the university's full multidisciplinary ecosystem, infrastructure, and approvals.",
    category: "About the School"
  },
  {
    q: "Since when has GGLS been operational?",
    a: "GGLS has been operational since the 2022–23 academic session.",
    category: "About the School"
  },
  {
    q: "Is GGLS approved by UGC?",
    a: "Yes. Geeta University, of which GGLS is a constituent school, is recognized by the University Grants Commission (UGC).",
    category: "About the School"
  },
  {
    q: "Is GGLS recognized by the Bar Council of India (BCI)?",
    a: "GGLS structures its curriculum in line with Bar Council of India norms.",
    category: "About the School"
  },

  // Programmes & Eligibility
  {
    q: "What law programmes does GGLS offer?",
    a: "BA LL.B. (Hons.) and BBA LL.B. (Hons.) as 5-year integrated undergraduate programmes, LL.M. as a 1-year postgraduate programme, and a Ph.D. in Law.",
    category: "Programmes & Eligibility"
  },
  {
    q: "What is the eligibility for BA LL.B./BBA LL.B.?",
    a: "Passed 10+2 in any stream with the minimum percentage prescribed by the university (typically 50%).",
    category: "Programmes & Eligibility"
  },
  {
    q: "What is the eligibility for LL.M.?",
    a: "A Bachelor's degree in Law (LL.B./integrated law degree) with a minimum of 50% marks.",
    category: "Programmes & Eligibility"
  },
  {
    q: "What is the eligibility for Ph.D. in Law?",
    a: "A Master's degree in Law (LL.M.) with a minimum of 55% marks, plus the university's entrance/interview process.",
    category: "Programmes & Eligibility"
  },
  {
    q: "What specializations are available?",
    a: "Corporate Law, Criminal Law, Constitutional Law, IPR Law, and Family Law offered as elective tracks in later years.",
    category: "Programmes & Eligibility"
  },
  {
    q: "Is the curriculum based on NEP 2020?",
    a: "Yes — a NEP 2020-aligned, choice-based credit system with interdisciplinary electives across Geeta University's other schools.",
    category: "Programmes & Eligibility"
  },

  // Admissions
  {
    q: "How do I apply to GGLS?",
    a: "By Clicking on Apply Now, You may apply to GGLS — fill in personal and academic details and choose your programme.",
    category: "Admissions"
  },
  {
    q: "Is there an entrance exam for admission?",
    a: "Admission is generally through direct visit, through CUET, or merit in the qualifying exam (generally CLAT)— the route depends on the programme; check the current admission guidelines.",
    category: "Admissions"
  },
  {
    q: "What documents are required for admission?",
    a: "Academic transcripts and mark sheets for 10th and 12th, transfer/migration certificate, category certificate (if applicable), identity proof, Aadhar Card and 3 Passport Size Photographs. Also, Bachelor’s and Master’s Degree Certificates (for PG and Ph.D. applicants) and Proof of any research work (for Ph.D. applicants).",
    category: "Admissions"
  },

  // Fees & Scholarships
  {
    q: "What is the fee structure for law programmes?",
    a: "Fee details vary by programme and scholarship eligibility and are on the official fee structure page; you may check total Fee through Fees Structure..",
    category: "Fees & Scholarships"
  },
  {
    q: "Are scholarships available for law students?",
    a: "Yes — merit-based and need-based scholarships are available; eligibility can be checked by clicking on the Scholarship Predictor.",
    category: "Fees & Scholarships"
  },
  {
    q: "Is an education loan facility available?",
    a: "Geeta University assists with education loan documentation and bank tie-ups; details are available through the admissions/finance office.",
    category: "Fees & Scholarships"
  },

  // Academics & Campus Life
  {
    q: "What makes GGLS's teaching approach different?",
    a: "Experiential learning — moot courts, legal aid clinics, simulated law-firm exercises, and judgment-writing labs — built into the credit structure rather than offered only as extracurriculars.",
    category: "Academics & Campus Life"
  },
  {
    q: "Does GGLS have a moot court facility?",
    a: "Yes — a dedicated Moot Court Hall replicating an actual courtroom, used for regular moot rounds, practice sessions, and inter-university competitions.",
    category: "Academics & Campus Life"
  },
  {
    q: "Are there opportunities for internships?",
    a: "Yes — structured internships with law firms, corporate legal departments, chambers, and legal aid organizations as part of the curriculum.",
    category: "Academics & Campus Life"
  },
  {
    q: "Does GGLS offer international exposure?",
    a: "Yes — through Geeta University's broader international partnerships, students can access exchange and global internship opportunities.",
    category: "Academics & Campus Life"
  },
  {
    q: "What support does GGLS provide for soft skills and interview preparation?",
    a: "All GGLS students have access to Geeta Finishing School (GFS), covering communication, personality development, group discussions, and mock interviews.",
    category: "Academics & Campus Life"
  },
  {
    q: "Does GGLS have hostel and residential facilities?",
    a: "Yes — residential hostel facilities are part of Geeta University's shared campus infrastructure, along with sports, cafeteria, and Wi-Fi-enabled campus access.",
    category: "Academics & Campus Life"
  },

  // Placements & Career
  {
    q: "What career options are available after a law degree from GGLS?",
    a: "Litigation, judicial services, corporate legal roles, law firm associateships, legal advisory positions, legal officer roles in PSUs/government, academia, arbitration/mediation, or entrepreneurship.",
    category: "Placements & Career"
  },
  {
    q: "Does GGLS provide placement assistance?",
    a: "Yes — through Geeta University's placement cell along with GGLS's own industry tie-ups and internship-to-placement pipelines.",
    category: "Placements & Career"
  },
  {
    q: "Can I pursue judiciary exam preparation alongside my degree?",
    a: "Many students use their law degree as a foundation for judicial services exam prep; check with the school for dedicated judiciary-prep support or mentorship.",
    category: "Placements & Career"
  },

  // Geeta Institute of Law FAQs
  {
    q: "What law programmes are offered at Geeta Institute of Law?",
    a: "GIL offers B.A. LL.B. (Hons.), BBA LL.B. (Hons.), LL.B. and LL.M. programmes.",
    category: "Admissions & Eligibility"
  },
  {
    q: "How long is the B.A. LL.B. (Hons.) programme?",
    a: "It is a 5-year integrated programme spread across 10 semesters.",
    category: "Programmes & Curriculum"
  },
  {
    q: "What is the eligibility for B.A. LL.B. (Hons.)?",
    a: "Candidates must have passed 10+2 with at least 45% aggregate marks for the General Category and 42.75% for SC/ST, with English as one of the subjects.",
    category: "Admissions & Eligibility"
  },
  {
    q: "What is the eligibility for BBA LL.B. (Hons.)?",
    a: "Candidates need 10+2 with at least 45% aggregate marks for the General Category and 42.75% for SC/ST, with English as one of the subjects.",
    category: "Admissions & Eligibility"
  },
  {
    q: "How is B.A. LL.B. different from BBA LL.B.?",
    a: "B.A. LL.B. combines Law with humanities subjects such as Political Science and Sociology, while BBA LL.B. combines Law with business and management subjects.",
    category: "Programmes & Curriculum"
  },
  {
    q: "Who can apply for the 3-year LL.B. programme?",
    a: "Graduates from any stream can apply, provided they have at least 45% aggregate marks for the General Category and 42.75% for SC/ST.",
    category: "Admissions & Eligibility"
  },
  {
    q: "How long is the LL.B. programme?",
    a: "LL.B. is a 3-year programme comprising six semesters.",
    category: "Programmes & Curriculum"
  },
  {
    q: "What is the eligibility for LL.M.?",
    a: "Candidates need an LL.B. or a 5-year integrated law degree with 55% aggregate marks for the General Category; SC/ST candidates need the minimum passing marks.",
    category: "Admissions & Eligibility"
  },
  {
    q: "What is GLAT?",
    a: "GLAT is the Geeta Law Admission Test conducted by GIL for admission to its 5-year B.A. LL.B. (Hons.) and BBA LL.B. (Hons.) programmes.",
    category: "Admission Process & GLAT"
  },
  {
    q: "Is GLAT compulsory for admission to the 5-year law programmes?",
    a: "GIL uses GLAT along with qualifying-examination merit and the admission interaction process for selecting candidates. Scores from national exams such as CLAT, AILET or LSAT India may also be accepted in lieu of GLAT.",
    category: "Admission Process & GLAT"
  },
  {
    q: "What subjects are tested in GLAT?",
    a: "GLAT assesses General Knowledge & Current Affairs, English, Reasoning, and Legal Aptitude & Awareness.",
    category: "Admission Process & GLAT"
  },
  {
    q: "What is the GLAT exam pattern?",
    a: "The published GLAT information states that the test is typically 90 minutes long and contains 100 objective questions.",
    category: "Admission Process & GLAT"
  },
  {
    q: "Can CLAT or another national-level law entrance score be used?",
    a: "Yes. GIL states that scores from CLAT, AILET or LSAT India may be accepted in lieu of GLAT for admission.",
    category: "Admission Process & GLAT"
  },
  {
    q: "Does Geeta Institute of Law have moot court training?",
    a: "Yes. Moot court training is an important part of the institute's practical legal education, and GIL regularly participates in and organises moot court competitions.",
    category: "Moot Courts, Practical Training & Court Exposure"
  },
  {
    q: "Do students get actual court exposure?",
    a: "Yes. Practical training includes court visits and exposure to District Courts, High Courts and the Supreme Court of India.",
    category: "Moot Courts, Practical Training & Court Exposure"
  },
  {
    q: "Are internships part of legal education at GIL?",
    a: "Yes. Internship and practical training are integral to the institute's professional-development approach. GIL organises its internship fair under the name 'PRASHIKSHAN'.",
    category: "Internships & Industry Exposure"
  },
  {
    q: "Does GIL offer scholarships?",
    a: "Yes. GLAT performance can make students eligible for merit-based scholarships, including scholarships of up to 100% for the five-year programmes.",
    category: "Scholarships & Student Support"
  }
];

const pharmacyFaqs = [
  // Admissions & Eligibility
  {
    q: "What pharmacy programmes are offered by Geeta Institute of Pharmacy?",
    a: "Currently the institute has programmes namely D.Pharm., B.Pharm., M.Pharm. (Pharmaceutics) and Ph.D. in Pharmaceutical Sciences, covering diploma, undergraduate, postgraduate and doctoral study.",
    category: "Admissions & Eligibility"
  },
  {
    q: "What is the eligibility for D.Pharm.?",
    a: "Applicants must have passed 10+2 in the Science stream with Physics, Chemistry and Biology or Mathematics, with at least 50% marks.",
    category: "Admissions & Eligibility"
  },
  {
    q: "What is the eligibility for B.Pharm.?",
    a: "Applicants must have passed 10+2 with at least 55% marks, with English as one of the subjects and Physics, Chemistry and Mathematics and/or Biology as the specified subjects.",
    category: "Admissions & Eligibility"
  },
  {
    q: "Can a student with PCB apply for B.Pharm.?",
    a: "Yes. Physics, Chemistry and Biology (PCB/PCMB) combinations are eligible backgrounds.",
    category: "Admissions & Eligibility"
  },
  {
    q: "What is the eligibility for M.Pharm. (Pharmaceutics)?",
    a: "Applicants must hold a B.Pharm. degree from an institution approved by the Pharmacy Council of India and have at least 55% marks in the aggregate of the four-year B.Pharm. programme.",
    category: "Admissions & Eligibility"
  },
  {
    q: "Who can apply for the Ph.D. in Pharmaceutical Sciences?",
    a: "Applicants should have a master's degree in a relevant field with at least 55% marks, subject to the University's applicable doctoral admission requirements.",
    category: "Admissions & Eligibility"
  },
  {
    q: "Can D.Pharm. students enter B.Pharm. directly from the second year?",
    a: "Yes. D.Pharm. students can join B.Pharm. directly in the second year through lateral entry, subject to applicable admission rules.",
    category: "Admissions & Eligibility"
  },

  // Programmes & Curriculum
  {
    q: "What is the difference between D.Pharm. and B.Pharm.?",
    a: "D.Pharm. is a two-year diploma providing foundational pharmaceutical knowledge and practical preparation. B.Pharm. is a four-year degree with deeper study of pharmaceutical sciences, drug development, clinical pharmacy, research and industry-oriented subjects.",
    category: "Programmes & Curriculum"
  },
  {
    q: "What subjects are taught in D.Pharm.?",
    a: "The programme includes Human Anatomy & Physiology, Pharmaceutics, Pharmaceutical Chemistry, Pharmacognosy, Hospital & Clinical Pharmacy, Health Education, Biochemistry & Clinical Pathology, Drug Store Management and practical laboratory training.",
    category: "Programmes & Curriculum"
  },
  {
    q: "What subjects are covered in B.Pharm.?",
    a: "The B.Pharm. curriculum includes Pharmaceutical Chemistry, Pharmacology & Toxicology, Pharmaceutics & Drug Delivery, Clinical Pharmacy, Pharmaceutical Microbiology, Pharmacognosy, Biopharmaceutics, Hospital Pharmacy and Pharmaceutical Jurisprudence, along with research projects and internships.",
    category: "Programmes & Curriculum"
  },
  {
    q: "What is taught in M.Pharm. (Pharmaceutics)?",
    a: "The postgraduate programme focuses on advanced pharmaceutical formulation and related areas, including advanced drug formulation, pharmaceutical engineering and research-oriented study.",
    category: "Programmes & Curriculum"
  },
  {
    q: "Does B.Pharm. include clinical and hospital pharmacy?",
    a: "Yes. Clinical Pharmacy and Hospital Pharmacy are explicitly included in the published B.Pharm. programme structure.",
    category: "Programmes & Curriculum"
  },
  {
    q: "Does B.Pharm. include drug formulation and drug delivery?",
    a: "Yes. Pharmaceutics and Drug Delivery are core areas of the B.Pharm. curriculum.",
    category: "Programmes & Curriculum"
  },
  {
    q: "Is pharmacy education only about medicines and dispensing?",
    a: "No. The programmes cover drug formulation, pharmaceutical chemistry, pharmacology, clinical and hospital pharmacy, research, regulatory affairs, pharmacovigilance, drug discovery and pharmaceutical marketing.",
    category: "Programmes & Curriculum"
  },

  // Practical Learning, Laboratories & Research
  {
    q: "How much practical learning do pharmacy students receive?",
    a: "Practical learning is a major part of the Institute's approach through laboratory sessions, modern equipment, industrial visits, internships, projects and research-oriented activities.",
    category: "Practical Learning, Laboratories & Research"
  },
  {
    q: "What laboratory facilities are available to pharmacy students?",
    a: "The Institute highlights modern laboratories, a state-of-the-art Machine Room, a Central Instrumentation Laboratory and intelligent classrooms with audio-visual facilities.",
    category: "Practical Learning, Laboratories & Research"
  },
  {
    q: "Will students get hands-on experience with pharmaceutical equipment?",
    a: "Yes. The Institute highlights practical laboratory training and advanced equipment supporting pharmaceutical analysis, formulation and related learning.",
    category: "Practical Learning, Laboratories & Research"
  },
  {
    q: "Does the Institute provide research opportunities?",
    a: "Yes. Research is a prominent part of the Institute's academic environment, with faculty publications, patents, research projects, conferences and pharmaceutical research activities.",
    category: "Practical Learning, Laboratories & Research"
  },
  {
    q: "Can pharmacy students participate in research projects and conferences?",
    a: "Yes. The Institute highlights research projects and international conferences, giving students opportunities to engage with current pharmaceutical research.",
    category: "Practical Learning, Laboratories & Research"
  },
  {
    q: "Are students exposed to drug discovery and development?",
    a: "Yes. Drug discovery and research are identified among the Institute's career pathways, alongside formulation, pharmaceutical chemistry, pharmacology and related research areas.",
    category: "Practical Learning, Laboratories & Research"
  },

  // Industry Exposure & Internships
  {
    q: "Does the B.Pharm. programme include internships?",
    a: "Yes. The B.Pharm. programme includes internship and practical-training components. Its programme FAQ states that students can undertake internships after completion of the first year for hands-on experience.",
    category: "Industry Exposure & Internships"
  },
  {
    q: "Can pharmacy students get practical exposure in hospitals as well as pharmaceutical companies?",
    a: "Yes. The Institute highlights opportunities across hospitals, pharmaceutical companies, research centres and other pharmacy settings. D.Pharm. information also highlights hospital and retail pharmacy exposure.",
    category: "Industry Exposure & Internships"
  },
  {
    q: "Does D.Pharm. include industrial visits?",
    a: "Yes. Industrial visits are explicitly included in the D.Pharm. programme information.",
    category: "Industry Exposure & Internships"
  },
  {
    q: "Does the Institute have collaborations with pharmaceutical companies?",
    a: "The Institute highlights MOUs with pharmaceutical companies for live projects, internships and research cooperation, along with factory visits and expert lectures.",
    category: "Industry Exposure & Internships"
  },
  {
    q: "Will students get exposure to pharmaceutical manufacturing?",
    a: "Yes. Industry visits, practical training, formulation-related learning and industry collaborations are intended to expose students to pharmaceutical operations and manufacturing environments.",
    category: "Industry Exposure & Internships"
  },
  {
    q: "Can students gain exposure to regulatory affairs and pharmacovigilance?",
    a: "Yes. Regulatory affairs and pharmacovigilance are identified among the Institute's career pathways, and faculty expertise also includes these areas.",
    category: "Industry Exposure & Internships"
  },

  // Placements & Career Opportunities
  {
    q: "What career options are available after D.Pharm.?",
    a: "D.Pharm. graduates can pursue pharmacy-related roles in hospitals, community or retail pharmacies and pharmaceutical organisations, and can also progress to B.Pharm. through the applicable lateral-entry route.",
    category: "Placements & Career Opportunities"
  },
  {
    q: "What career options are available after B.Pharm.?",
    a: "Career pathways include pharmacist, drug analyst, medical representative, clinical research associate, pharmaceutical marketing, quality assurance/quality control, production, regulatory affairs and research. Graduates can also pursue higher studies.",
    category: "Placements & Career Opportunities"
  },
  {
    q: "Can B.Pharm. graduates work in hospitals?",
    a: "Yes. Hospital Pharmacy and Clinical Pharmacy are part of the B.Pharm. curriculum, and hospital pharmacy is identified as a career pathway.",
    category: "Placements & Career Opportunities"
  },
  {
    q: "Can B.Pharm. graduates work in pharmaceutical manufacturing?",
    a: "Yes. Graduates can pursue production, formulation, quality and other roles within pharmaceutical manufacturing and related organisations, depending on their skills and employer requirements.",
    category: "Placements & Career Opportunities"
  },
  {
    q: "Can pharmacy graduates work in clinical research?",
    a: "Yes. Clinical Research is specifically identified as a career pathway.",
    category: "Placements & Career Opportunities"
  },
  {
    q: "Can pharmacy graduates build careers in pharmacovigilance and drug safety?",
    a: "Yes. Pharmacovigilance is identified as a career pathway, and the Institute highlights drug-safety and regulatory areas.",
    category: "Placements & Career Opportunities"
  },
  {
    q: "Can pharmacy graduates work in pharmaceutical data science and AI?",
    a: "Yes. Pharmaceutical data science & AI is listed among the Institute's career pathways.",
    category: "Placements & Career Opportunities"
  },
  {
    q: "Can B.Pharm. graduates pursue higher studies after graduation?",
    a: "Yes. Students can pursue M.Pharm. and other higher-study pathways, and those meeting applicable requirements can explore research and doctoral routes.",
    category: "Placements & Career Opportunities"
  },
  {
    q: "Does the Institute provide placement and career support?",
    a: "Yes. The Institute highlights career guidance, skill-development programmes and interview preparation alongside industry exposure and placement support.",
    category: "Placements & Career Opportunities"
  },

  // Faculty, Learning Experience & Student Development
  {
    q: "Who teaches students at Geeta Institute of Pharmacy?",
    a: "The Institute has faculty expertise across pharmaceutics, pharmacology, medicinal chemistry, pharmacognosy, phytochemistry, drug formulation, regulatory affairs, pharmacovigilance, neuroscience and related pharmaceutical research.",
    category: "Faculty, Learning Experience & Student Development"
  },
  {
    q: "Do students learn from faculty with research and industry expertise?",
    a: "Yes. Faculty profiles highlight research publications, patents, specialised pharmaceutical expertise and professional experience.",
    category: "Faculty, Learning Experience & Student Development"
  },
  {
    q: "How does the Institute prepare students for real pharmaceutical careers?",
    a: "The approach combines academic foundations with laboratory training, research projects, industrial visits, internships, expert lectures, industry collaborations and career-development support.",
    category: "Faculty, Learning Experience & Student Development"
  },
  {
    q: "Will students receive guidance for competitive or postgraduate examinations such as GPAT?",
    a: "The B.Pharm. programme page states that GPAT preparation support is provided through guidance sessions, extra classes and practice tests.",
    category: "Faculty, Learning Experience & Student Development"
  },

  // Global Exposure, Professional Recognition & General
  {
    q: "Are the pharmacy programmes approved by the Pharmacy Council of India?",
    a: "Yes. The Institute states that its pharmacy programmes are approved by the Pharmacy Council of India (PCI).",
    category: "Global Exposure, Professional Recognition & General"
  },
  {
    q: "Does the Institute provide international exposure to pharmacy students?",
    a: "Yes. The Institute highlights global exposure opportunities, international conferences and international engagement.",
    category: "Global Exposure, Professional Recognition & General"
  },
  {
    q: "How long are the pharmacy programmes?",
    a: "D.Pharm. is two years, B.Pharm. is four years, M.Pharm. (Pharmaceutics) is two years, and Ph.D. in Pharmaceutical Sciences has a minimum duration of three years.",
    category: "Global Exposure, Professional Recognition & General"
  },
  {
    q: "What makes Geeta Institute of Pharmacy different from a purely classroom-based pharmacy programme?",
    a: "The Institute combines pharmaceutical theory with modern laboratories, practical training, research opportunities, industry collaborations, industrial visits, internships, expert lectures, conferences and career support.",
    category: "Global Exposure, Professional Recognition & General"
  },
  {
    q: "What should a student consider before choosing D.Pharm. or B.Pharm.?",
    a: "Students should consider their desired qualification level, career timeline and long-term goals. D.Pharm. provides a shorter foundational route, while B.Pharm. offers deeper four-year degree-level study and broader progression.",
    category: "Global Exposure, Professional Recognition & General"
  },
  {
    q: "Can pharmacy students build careers beyond traditional pharmacist roles?",
    a: "Yes. The Institute identifies clinical research, pharmacovigilance, regulatory affairs, drug discovery and research, pharmaceutical data science & AI, pharmaceutical management, hospital pharmacy, government roles and manufacturing among its career pathways.",
    category: "Global Exposure, Professional Recognition & General"
  }
];

function updateSchoolFaqs(filename, faqs) {
  const filePath = path.join(__dirname, '../src/data/programs/schools', filename);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace faqs array in the file
  const formattedFaqs = JSON.stringify(faqs, null, 4);
  
  // Find where faqs: [ ... ] starts
  const faqsRegex = /faqs:\s*\[[\s\S]*?\n  \],/
  if (faqsRegex.test(content)) {
    content = content.replace(faqsRegex, `faqs: ${formattedFaqs},`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Successfully updated faqs in ${filename}`);
  } else {
    console.error(`Could not find faqs regex in ${filename}`);
  }
}

updateSchoolFaqs('hospitality.ts', hospitalityFaqs);
updateSchoolFaqs('agriculture.ts', agricultureFaqs);
updateSchoolFaqs('forensicSciences.ts', forensicFaqs);
updateSchoolFaqs('humanities.ts', humanitiesFaqs);
updateSchoolFaqs('law.ts', lawFaqs);
updateSchoolFaqs('pharmacy.ts', pharmacyFaqs);
