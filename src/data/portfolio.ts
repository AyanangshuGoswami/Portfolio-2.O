
/**
 * Central portfolio data — adapted for Ayanangshu Goswami.
 */

export type Palette = {
  from: string;
  via: string;
  to: string;
  accent: string;
};

export const profile = {
  fullName: 'Ayanangshu Goswami',
  displayName: 'Ayanangshu Goswami',
  firstName: 'AYANANGSHU',
  seriesTag: 'THE SERIES',
  originalLabel: 'AN AYANANGSHU ORIGINAL',
  role: 'AI/ML Engineer · Full-Stack Developer',
  tagline: ['AI/ML Engineer', 'Full-Stack Developer', 'B.Tech IT Student'],
  intro:
    'Final-year B.Tech Information Technology student at KIIT with a strong foundation in Python, predictive modeling, and generative AI integration. Experienced in building machine learning pipelines, RESTful APIs, optimized databases, and containerized applications.',
  location: 'Kolkata, India',
  email: 'ayanangshugoswamiabir@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/ayanangshu-goswami-5a5656298/',
    github: 'https://github.com/AyanangshuGoswami',
  },
  resumePdf: '/assets/Resume%202.O.pdf',

  resumeDownloadName: 'Ayanangshu_Goswami_Resume.pdf',

  portrait: {
    src: '/ayanangshu-hero.png.png',
    alt: 'Portrait of Ayanangshu Goswami',
  },

  interests: ['Predictive Modeling', 'Generative AI', 'System Design'],
};

export const education = [
  {
    school: 'Kalinga Institute of Industrial Technology (KIIT)',
    place: 'India',
    degree: 'Bachelor of Technology — Information Technology',
    period: '2023 – 2027',
    score: 'Final-year student',
  },
  {
    school: 'Sudhir Memorial Institute',
    place: 'India',
    degree: 'Class XII — CBSE',
    period: '2022',
    score: '',
  },
  {
    school: 'St. Xavier’s Institution',
    place: 'India',
    degree: 'Class X — ICSE',
    period: '2020',
    score: '',
  },
];

export const experience = [
  {
    company: 'VeritasCo.',
    role: 'Full Stack Development Intern',
    place: 'India',
    period: 'July 2026 – August 2026',
    points: [
      'Engineered full-stack application features using Next.js, TypeScript, Node.js, and Express.js, accelerating frontend UI delivery with Tailwind CSS.',
      'Designed relational database schemas and automated migrations using PostgreSQL and Prisma ORM, implementing secure JWT authentication.',
      'Integrated OpenAI API pipelines to automate content-generation workflows and containerized backend microservices using Docker for streamlined CI/CD deployments.',
    ],
  },
];

export type Metric = {
  value: string;
  label: string;
};

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'bike-resale-price-prediction',
    title: 'Bike Resale Price Prediction System',
    year: '2026',
    genre: 'AI/ML • Predictive Modeling • Full-Stack',
    logline:
      'A machine-learning pricing engine that estimates used-bike resale values for the Indian market.',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'FastAPI', 'HTML', 'CSS'],
    build: [
      'Engineered a machine-learning pricing engine trained on seven vehicle parameters to predict used-bike market valuations.',
      'Built a FastAPI REST backend connected to an interactive web dashboard for automated resale estimates.',
      'Implemented launch-price lookups and model-driven estimation pipelines, achieving an R² score of 0.9956 on the dataset.',
    ],
    features: [
      'Machine-learning model using seven vehicle parameters',
      'FastAPI REST backend',
      'Interactive web dashboard',
      'Automated launch-price lookups',
      'Used-bike resale estimates',
    ],
    metrics: [
      { value: '0.9956', label: 'R² score' },
      { value: '7', label: 'vehicle parameters' },
      { value: 'Real-time', label: 'price estimates' },
    ],
    github: 'https://github.com/AyanangshuGoswami/bike-resale-project',
    palette: {
      from: '#04121f',
      via: '#0f4c6e',
      to: '#05080d',
      accent: '#4cc9ff',
    },
    motif: 'flow',
  },
  {
    id: 'careercraft-ai',
    title: 'CareerCraft AI',
    year: '2026',
    genre: 'Generative AI • Career Tech • Full-Stack',
    logline:
      'An AI-powered career assistant for resume analysis, ATS scoring, job-description matching, and interview preparation.',
    stack: [
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'Gemini API',
      'Groq API',
    ],
    build: [
      'Developed a full-stack AI career assistant for resume analysis, ATS scoring, and job-description matching.',
      'Implemented AI-powered resume analysis to identify skills, evaluate strengths, optimize keywords, and generate personalized suggestions.',
      'Built resume-management and AI interview-preparation features using React, TypeScript, Node.js, Express.js, MongoDB, Gemini, and Groq AI.',
    ],
    features: [
      'AI resume analysis',
      'ATS scoring',
      'Job-description matching',
      'Skill identification and keyword suggestions',
      'Resume management',
      'AI interview preparation',
    ],
    metrics: [
      { value: 'ATS', label: 'resume scoring' },
      { value: 'AI', label: 'personalized suggestions' },
      { value: 'Full-stack', label: 'career assistant' },
    ],
    github: 'https://github.com/AyanangshuGoswami/CareerCraft-AI',
    palette: {
      from: '#2a0610',
      via: '#7a0f24',
      to: '#0b0710',
      accent: '#ff3d5a',
    },
    motif: 'shield',
  },
  {
    id: 'library-management-system',
    title: 'Library Management System',
    year: '2026',
    genre: 'Full-Stack • MERN • Dashboard',
    logline:
      'A full-stack library system that automates inventory and borrowing workflows with secure role-based APIs.',
    stack: [
      'React.js',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'Cloudinary',
      'Swagger',
    ],
    build: [
      'Built a full-stack Library Management System using the MERN stack to automate inventory and borrowing workflows.',
      'Engineered secure role-based REST APIs with JWT authentication, bcrypt password hashing, and Swagger documentation.',
      'Developed a responsive Tailwind CSS dashboard with Cloudinary media integration, QR-code generation, and analytics visualization.',
    ],
    features: [
      'Library inventory and borrowing workflows',
      'Role-based REST APIs',
      'JWT authentication and bcrypt hashing',
      'Swagger API documentation',
      'Cloudinary media integration',
      'QR-code generation and analytics visualization',
    ],
    metrics: [
      { value: 'MERN', label: 'full-stack architecture' },
      { value: 'JWT', label: 'authentication' },
      { value: 'QR', label: 'code generation' },
    ],
    github:
      'https://github.com/AyanangshuGoswami/library-management-system',
    palette: {
      from: '#03150f',
      via: '#0d5a40',
      to: '#050a08',
      accent: '#46e3a8',
    },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [];

export type Certification = {
  issuer: string;
  name: string;
  link: string;
};

export const certifications: Certification[] = [
  {
    issuer: 'AWS',
    name: 'AWS Cloud Foundations (2025)',
    link: '',
  },
  {
    issuer: 'Deloitte Australia',
    name: 'Technology Job Simulation (2025)',
    link: '',
  },
];

export type Skill = {
  name: string;
  mono: string;
  note?: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  subtitle: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Programming languages and web development',
    skills: [
      { name: 'Python', mono: 'Py' },
      { name: 'C', mono: 'C' },
      { name: 'C++', mono: 'C+' },
      { name: 'Java', mono: 'Jv' },
      { name: 'JavaScript (ES6+)', mono: 'Js' },
      { name: 'TypeScript', mono: 'Ts' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interactive web interfaces',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'Next.js', mono: 'Nx' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'Tailwind CSS', mono: 'Tw' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    subtitle: 'Application logic and integrations',
    skills: [
      { name: 'FastAPI', mono: 'Fa' },
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'OpenAI API', mono: 'Ai' },
      { name: 'Gemini API', mono: 'Ge' },
      { name: 'Groq API', mono: 'Gr' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI/ML & Data Science',
    subtitle: 'Models, data processing and generative AI',
    skills: [
      { name: 'Scikit-learn', mono: 'Sk' },
      { name: 'Pandas', mono: 'Pd' },
      { name: 'NumPy', mono: 'Np' },
      { name: 'TensorFlow', mono: 'Tf' },
      { name: 'PyTorch', mono: 'Pt' },
      { name: 'Large Language Models', mono: 'LL' },
      { name: 'Agentic AI', mono: 'Ag' },
      { name: 'LangGraph', mono: 'Lg' },
      { name: 'Predictive Modeling', mono: 'Pm' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & ORM',
    subtitle: 'Schema design and query optimization',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg', note: 'Query optimization' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'MySQL', mono: 'My' },
      { name: 'Prisma ORM', mono: 'Pr' },
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud, DevOps & Tools',
    subtitle: 'Deployment and developer workflows',
    skills: [
      { name: 'AWS EC2', mono: 'Ec' },
      { name: 'AWS S3', mono: 'S3' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'CI/CD Pipelines', mono: 'Ci' },
      { name: 'Vercel', mono: 'Ve' },
      { name: 'Render', mono: 'Rd' },
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'Postman', mono: 'Pm' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'Core Concepts',
    subtitle: 'Engineering fundamentals',
    skills: [
      { name: 'System Design', mono: 'Sd' },
      { name: 'Object-Oriented Programming', mono: 'Oo' },
      { name: 'Predictive Modeling', mono: 'Pr' },
      { name: 'JWT Authentication', mono: 'Jw' },
      { name: 'Database Schema Design', mono: 'Db' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Python: ['Bike Resale Price Prediction System'],
  'Scikit-learn': ['Bike Resale Price Prediction System'],
  Pandas: ['Bike Resale Price Prediction System'],
  FastAPI: ['Bike Resale Price Prediction System'],
  React: ['CareerCraft AI', 'Library Management System'],
  TypeScript: ['CareerCraft AI', 'VeritasCo. internship'],
  'Node.js': [
    'CareerCraft AI',
    'Library Management System',
    'VeritasCo. internship',
  ],
  'Express.js': [
    'CareerCraft AI',
    'Library Management System',
    'VeritasCo. internship',
  ],
  MongoDB: ['CareerCraft AI', 'Library Management System'],
  PostgreSQL: ['VeritasCo. internship'],
  'Prisma ORM': ['VeritasCo. internship'],
  'OpenAI API': ['VeritasCo. internship'],
  'Gemini API': ['CareerCraft AI'],
  'Groq API': ['CareerCraft AI'],
  Docker: ['VeritasCo. internship'],
  'Tailwind CSS': [
    'VeritasCo. internship',
    'Library Management System',
  ],
  'REST APIs': [
    'Bike Resale Price Prediction System',
    'Library Management System',
  ],
  'JWT Authentication': [
    'VeritasCo. internship',
    'CareerCraft AI',
    'Library Management System',
  ],
  GitHub: ['Listed in technical skills on resume'],
  'AWS EC2': ['Listed in technical skills on resume'],
  'AWS S3': ['Listed in technical skills on resume'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = {
  from: '#24060b',
  via: '#6e0d1d',
  to: '#09070a',
  accent: '#ff3d5a',
};

const amber: Palette = {
  from: '#1c1003',
  via: '#6b3c06',
  to: '#0a0806',
  accent: '#ffb547',
};

const ocean: Palette = {
  from: '#04121f',
  via: '#0f4c6e',
  to: '#05080d',
  accent: '#4cc9ff',
};

const violet: Palette = {
  from: '#120822',
  via: '#3d1a6e',
  to: '#07060c',
  accent: '#b98bff',
};

const jade: Palette = {
  from: '#03150f',
  via: '#0d5a40',
  to: '#050a08',
  accent: '#46e3a8',
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Academic Foundation',
    period: '2020 – 2023',
    synopsis:
      'School education followed by the beginning of an Information Technology degree.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The School Years',
        description:
          'Class X at St. Xavier’s Institution (ICSE, 2020) and Class XII at Sudhir Memorial Institute (CBSE, 2022).',
        tags: ['ICSE', 'CBSE', 'School Education'],
        runtime: '2020 – 2022',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The IT Student',
        description:
          'B.Tech in Information Technology at Kalinga Institute of Industrial Technology (KIIT).',
        tags: ['B.Tech', 'Information Technology', 'KIIT'],
        runtime: '2023 – 2027',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Building Full-Stack Systems',
    period: '2026',
    synopsis:
      'Professional internship experience building application features, databases, authentication, and deployments.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Intern',
        description:
          'Full Stack Development Intern at VeritasCo., July 2026 – August 2026.',
        tags: ['Next.js', 'TypeScript', 'Node.js'],
        runtime: 'Jul 2026 – Aug 2026',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'The Backend Builder',
        description:
          'Worked with Express.js, PostgreSQL, Prisma ORM, JWT authentication, Docker, and CI/CD deployments.',
        tags: ['Express.js', 'PostgreSQL', 'Prisma', 'Docker'],
        runtime: 'VeritasCo.',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Applied AI & Machine Learning',
    period: '2026',
    synopsis:
      'Machine-learning projects and generative AI features designed for practical use cases.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Price Predictor',
        description:
          'Built a used-bike resale pricing system using seven vehicle parameters and achieved an R² score of 0.9956 on the dataset.',
        tags: ['Python', 'Scikit-learn', 'Pandas', 'FastAPI'],
        runtime: 'Bike Resale Price Prediction System',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'The AI Career Assistant',
        description:
          'Created CareerCraft AI for resume analysis, ATS scoring, job-description matching, and AI interview preparation.',
        tags: ['React', 'TypeScript', 'Gemini', 'Groq'],
        runtime: 'CareerCraft AI',
        palette: violet,
      },
    ],
  },
  {
    number: 4,
    title: 'Shipping Useful Applications',
    period: '2026',
    synopsis:
      'Full-stack application development across career technology and library workflows.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Library System',
        description:
          'Built a MERN-based library management system with role-based APIs, JWT, bcrypt, Swagger, Cloudinary, QR codes, and analytics.',
        tags: ['React', 'Node.js', 'MongoDB', 'JWT'],
        runtime: 'Library Management System',
        palette: ocean,
      },
      {
        code: 'S04 E02',
        title: 'The Cloud Foundations',
        description:
          'AWS Cloud Foundations and Deloitte Australia Technology Job Simulation, both listed for 2025.',
        tags: ['AWS', 'Cloud Foundations', 'Job Simulation'],
        runtime: '2025',
        palette: amber,
      },
    ],
  },
  {
    number: 5,
    title: 'What’s Next',
    period: 'Ongoing',
    synopsis:
      'Continuing to explore intelligent systems, generative AI, system design, and full-stack engineering.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description:
          'Applying predictive modeling, large language models, Agentic AI, and system design to end-to-end software.',
        tags: ['Predictive Modeling', 'LLMs', 'Agentic AI', 'System Design'],
        runtime: 'In progress',
        palette: jade,
      },
    ],
  },
];

export type TopPick = {
  label: string;
  title: string;
  detail: string;
  palette: Palette;
};

export const topPicks: TopPick[] = [
  {
    label: 'AI/ML project',
    title: 'Bike Resale Prediction',
    detail: 'R² score of 0.9956',
    palette: ocean,
  },
  {
    label: 'AI career tool',
    title: 'CareerCraft AI',
    detail: 'Resume analysis and ATS scoring',
    palette: crimson,
  },
  {
    label: 'Full-stack project',
    title: 'Library Management',
    detail: 'Role-based APIs and library workflows',
    palette: jade,
  },
  {
    label: 'Internship',
    title: 'VeritasCo.',
    detail: 'Full Stack Development Intern',
    palette: amber,
  },
  {
    label: 'Backend',
    title: 'REST APIs',
    detail: 'FastAPI, Node.js and Express.js',
    palette: violet,
  },
  {
    label: 'AI integration',
    title: 'Generative AI',
    detail: 'OpenAI, Gemini and Groq APIs',
    palette: crimson,
  },
  {
    label: 'Databases',
    title: 'PostgreSQL & MongoDB',
    detail: 'Schema design and application data',
    palette: ocean,
  },
  {
    label: 'DevOps',
    title: 'Docker & CI/CD',
    detail: 'Containerized services and deployment workflows',
    palette: jade,
  },
  {
    label: 'Cloud credential',
    title: 'AWS Cloud Foundations',
    detail: 'Certification listed for 2025',
    palette: amber,
  },
  {
    label: 'Core focus',
    title: 'Intelligent Systems',
    detail: 'AI/ML with full-stack engineering',
    palette: violet,
  },
];

export type IntroSlide = {
  kicker: string;
  title: string;
  lines: string[];
  chips?: string[];
};

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · Information Technology',
    lines: [
      'Kalinga Institute of Industrial Technology (KIIT)',
      '2023 – 2027',
    ],
    chips: ['Final-year student'],
  },
  {
    kicker: 'Skills',
    title: 'AI meets full-stack.',
    lines: [
      'Python, C, C++, Java, JavaScript, TypeScript',
      'React, Next.js, FastAPI, Node.js, Express.js',
      'PostgreSQL, MongoDB, Docker, AWS',
    ],
    chips: ['Python', 'TypeScript', 'FastAPI', 'React', 'Docker'],
  },
  {
    kicker: 'Experience',
    title: 'The Internship',
    lines: [
      'Full Stack Development Intern · VeritasCo.',
      'July 2026 – August 2026',
      'Application features, databases, JWT, AI APIs and CI/CD',
    ],
  },
  {
    kicker: 'Projects',
    title: 'Three Builds',
    lines: [
      'Bike Resale Price Prediction — R² 0.9956',
      'CareerCraft AI — resume analysis and ATS scoring',
      'Library Management System — role-based APIs and analytics',
    ],
  },
  {
    kicker: 'Certified',
    title: 'Learning in Practice',
    lines: [
      'AWS Cloud Foundations (2025)',
      'Technology Job Simulation — Deloitte Australia (2025)',
    ],
  },
  {
    kicker: 'Current mission',
    title: 'Building intelligent systems',
    lines: ['Predictive Modeling · Generative AI · System Design'],
  },
];

export type ProfileId =
  | 'ayanangshu'
  | 'recruiter'
  | 'developer'
  | 'creative';

export type SectionId =
  | 'about'
  | 'experience'
  | 'originals'
  | 'picks'
  | 'skills'
  | 'moments'
  | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'ayanangshu',
    name: 'Ayanangshu',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: [
      'about',
      'experience',
      'originals',
      'picks',
      'skills',
      'moments',
      'story',
    ],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Education, experience & skills first',
    color: '#4cc9ff',
    order: [
      'story',
      'moments',
      'skills',
      'originals',
      'about',
      'experience',
      'picks',
    ],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & engineering first',
    color: '#46e3a8',
    order: [
      'originals',
      'skills',
      'experience',
      'moments',
      'about',
      'picks',
      'story',
    ],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: [
      'experience',
      'picks',
      'originals',
      'moments',
      'about',
      'skills',
      'story',
    ],
  },
];

export const sectionMeta: Record<
  SectionId,
  { nav: string; card: string; meta: string; palette: Palette }
> = {
  about: {
    nav: 'About',
    card: 'About Me',
    meta: 'The Pilot • Education & experience',
    palette: violet,
  },
  experience: {
    nav: 'Experience',
    card: 'My Experience',
    meta: `${experience.length} Professional Role${experience.length === 1 ? '' : 's'}`,
    palette: ocean,
  },
  originals: {
    nav: 'Originals',
    card: 'My Projects',
    meta: `${projects.length} Projects`,
    palette: crimson,
  },
  picks: {
    nav: 'Top Picks',
    card: 'Top Picks',
    meta: 'Highlights from the resume',
    palette: jade,
  },
  skills: {
    nav: 'Skills',
    card: 'My Skills',
    meta: `${skillCategories.length} Categories`,
    palette: ocean,
  },
  moments: {
    nav: 'Moments',
    card: 'Credentials',
    meta: `${achievements.length} Achievements • ${certifications.length} Certifications`,
    palette: crimson,
  },
  story: {
    nav: 'Resume',
    card: 'The Full Story',
    meta: 'Resume • View & download',
    palette: violet,
  },
};
