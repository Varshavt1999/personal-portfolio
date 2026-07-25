export const siteConfig = {
  name: "Varsha VT",
  title: "Frontend Developer",
  email: "varshavt7399@gmail.com",
  location: "Kochi, Kerala, India",
  github: "https://github.com/Varshavt1999",
  linkedin: "https://www.linkedin.com/in/varsha-v-t/",
  tagline: "Building fast, accessible, and beautiful web experiences.",
  bio: "I'm a frontend developer with 4+ years of experience crafting performant, user-centric applications. I specialize in React, TypeScript, and Next.js — turning complex ideas into polished, production-ready interfaces.",
  yearsOfExperience: 4,
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  {
    category: "Core",
    items: ["React", "TypeScript", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    category: "Styling & UI",
    items: ["Tailwind CSS", "Framer Motion", "CSS Modules", "Responsive Design", "Design Systems"],
  },
  {
    category: "Tools & Workflow",
    items: ["Git", "Vite", "Intellij IDEA", "Jest", "React Testing Library", "Figma"],
  },
  {
    category: "Backend & Other",
    items: ["REST APIs","mongoDB" , "Next js"],
  },
];

export const experience = [
  {
    role: "Senior Software Engineer",
    company: "Citrus Informatics",
    period: "Oct 2024 — present",
    description:
      "Developed and maintained scalable React and Next.js applications for enterprise clients. Built responsive user interfaces, resolved complex production issues, integrated authentication solutions, and collaborated with cross-functional teams to deliver high-quality software.",
    highlights: [
      "React.js & React Admin",
      "TypeScript",
      "Keycloak Authentication",
      "Unit testing",
    ],
  },
  {
    role: "Software Engineer",
    company: "Citrus Informatics",
    period: "Jun 2023 — Sept 2024",
    description:
      "Developed and maintained scalable React and Next.js applications for enterprise clients. Built responsive user interfaces, resolved complex production issues, integrated authentication solutions, and collaborated with cross-functional teams to deliver high-quality software.",
    highlights: [
      "React.js", 
      "Unit testing",
      "REST APIs",
      "Javascript",
    ],
  },
  {
    role: "Software Engineer",
    company: "Talrop",
    period: "Mar 2022 — Jun 2023",
    description:
      "Developed responsive web applications by consuming REST APIs and building reusable React components. Worked on multiple client projects, optimized website performance, and collaborated with designers and backend developers to deliver production-ready applications.",
    highlights: [
      "React.js",
      "Redux Toolkit",
      "REST APIs",
    ],
  },
  {
    role: "Software Intern",
    company: "Steyp Private Limited",
    period: "Aug 2021 — Mar 2022",
    description:
      "Implemented responsive websites using HTML, CSS, JavaScript, React.js, Python, and Django. Supported students on the Steyp EdTech platform by resolving technical queries and assisting with programming concepts.",
    highlights: [
      "HTML/CSS/JavaScript",
      "React.js",
      "Bootstrap",
      "Python & Django",
    ],
  },
];



export const projects = [
  {
    title: "DevBoard",
    description:
      "A real-time project management dashboard with drag-and-drop kanban boards, team analytics, and dark mode support.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    tone: "project-tone-a",
  },
  {
    title: "ShopStream",
    description:
      "Modern e-commerce storefront with server-side rendering, optimized product filtering, and seamless checkout experience.",
    tech: ["React", "Next.js", "Stripe", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    tone: "project-tone-b",
  },
  {
    title: "WeatherLens",
    description:
      "Beautiful weather application with animated forecasts, location search, and interactive data visualizations.",
    tech: ["React", "TypeScript", "Framer Motion", "OpenWeather API"],
    liveUrl: "#",
    githubUrl: "#",
    tone: "project-tone-c",
  },
  {
    title: "CodeSnap",
    description:
      "Developer tool for creating and sharing syntax-highlighted code snippets with customizable themes and export options.",
    tech: ["Next.js", "TypeScript", "Prism.js", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    tone: "project-tone-d",
  },
];

export const stats = [
  { value: "4+", label: "Years in frontend" },
  { value: "React", label: "Main stack" },
  { value: "TS", label: "Preferred language" },
  { value: "Next.js", label: "For production apps" },
];
