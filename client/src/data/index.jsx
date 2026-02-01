import { Briefcase, Calendar, Target, User, Github, Linkedin, Twitter, Mail, Shield, TrendingUp, Award, Zap, Instagram, Youtube, Phone, MapPin } from 'lucide-react';
import React from 'react';

// Skill Icons
import htmlIcon from "@/assets/icons/html.png";
import cssIcon from "@/assets/icons/css.png";
import sassIcon from "@/assets/icons/saas.png";
import jsIcon from "@/assets/icons/javascript.png";
import tsIcon from "@/assets/icons/typescript.png";
import reactIcon from "@/assets/icons/react.png";
import nextjsIcon from "@/assets/icons/nextjs.png";
import nodejsIcon from "@/assets/icons/nodejs.png";
import expressIcon from "@/assets/icons/express.png";
import mongodbIcon from "@/assets/icons/mongodb.png";
import postgresqlIcon from "@/assets/icons/postgresql.png";
import graphqlIcon from "@/assets/icons/graphql.png";
import javaIcon from "@/assets/icons/java.png";
import pythonIcon from "@/assets/icons/python.png";
import gitIcon from "@/assets/icons/git.png";
import githubIcon from "@/assets/icons/github.png";
import dockerIcon from "@/assets/icons/docker.png";
import firebaseIcon from "@/assets/icons/firebase.png";
import vscodeIcon from "@/assets/icons/vscode.png";
import clearkIcon from "@/assets/icons/cleark.png";
import SQLIcon from "@/assets/icons/sql.png";
import MySQLIcon from "@/assets/icons/mysql.png";

// Hero Data
export const heroData = {
  title: "I'm Sahil",
  subtitle: "Full-Stack Engineer",
  description: "I build high-performance web applications that drive business growth. Specializing in React, Node.js, and scalable architecture for startups and enterprises.",
  status: "Available Immediately",
  codeSnippets: [
    "import { FullStackDeveloper } from 'sahil.dev';",
    "",
    "const developer = new FullStackDeveloper({",
    "  name: 'Sahil',",
    "  stack: ['React', 'Next.js', 'Node.js', 'TypeScript'],",
    "  focus: 'Building scalable web applications',",
    "  status: 'Open to new opportunities'",
    "});",
    "",
    "await developer.launchPortfolio();",
    "// Featured: E-commerce, SaaS, Enterprise, Startup MVPs",
    "",
    "developer.connect();",
    "console.log('🚀 Let's build something exceptional together!');"
  ]
};

// Projects Data
export const projects = [
  {
    id: 8,
    title: "GenAxis",
    category: "AI SaaS ",
    description: "AI saas webapp build with PERN stack and Intigrated Gemini . OPEN SOURCE ",
    image: "/projects/project8.png",
    video: "/projects/videos/genaxix-demo.mp4",
    tags: ["PERN Stack", "Clerk Auth", "Google Gemini", "Clerk Billing", "OPEN SOURCE"],
    demoUrl: "https://genaxis.vercel.app",
    githubUrl: "https://github.com/Sahilmd01/genaxis",
    featured: true,
    accentColor: "from-emerald-500 to-teal-600",
    status: "Live",
    highlights: ["Image Generation", "Article writer", "Blog Writter", "Resume Reviewer"]
  },
  {
    id: 7,
    title: "NauraCare",
    category: "Healthcare SaaS",
    description: "Hospital management platform with multi-role access, patient tracking, and billing systems.",
    image: "/projects/project7.png",
    video: "/projects/videos/nauracare-demo.mp4",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "JWT Auth"],
    demoUrl: "https://nauracare.vercel.app",
    githubUrl: "https://github.com/Sahilmd01/neuracare",
    featured: true,
    accentColor: "from-emerald-500 to-teal-600",
    status: "Live",
    highlights: ["Multi-role system", "Patient management", "Payment integration"]
  },
  {
    id: 1,
    title: "Vante & Co.",
    category: "E-commerce",
    description: "Fashion marketplace with product recommendations and seamless checkout experience.",
    image: "/projects/project1.png",
    video: "/projects/videos/vante-demo.mp4",
    tags: ["React", "Node.js", "Stripe", "Redis"],
    demoUrl: "https://e-commerce-website-4w6a.vercel.app",
    githubUrl: "https://github.com/Sahilmd01/E-commerce-website",
    featured: true,
    accentColor: "from-purple-500 to-indigo-600",
    status: "Live",
    highlights: ["Product catalog", "Shopping cart", "Payment processing"]
  },
  {
    id: 2,
    title: "Converse Pro",
    category: "Real-time Communication",
    description: "Chat platform with real-time messaging, media sharing, and user authentication.",
    image: "/projects/project2.png",
    video: "/projects/videos/converse-demo.mp4",
    tags: ["Socket.IO", "MongoDB", "React", "WebRTC"],
    demoUrl: "https://converse-pro-frontend.vercel.app",
    githubUrl: "https://github.com/Sahilmd01/converse-pro",
    featured: true,
    accentColor: "from-blue-500 to-cyan-600",
    status: "Live",
    highlights: ["Real-time chat", "Media sharing", "User authentication"]
  },
  {
    id: 3,
    title: "Blogni AI",
    category: "Artificial Intelligence",
    description: "AI-powered content generation platform with multi-language support.",
    image: "/projects/project3.png",
    video: "/projects/videos/blogni-demo.mp4",
    tags: ["Next.js", "Gemini AI", "Clerk Auth", "Redis"],
    demoUrl: "https://blogni.vercel.app",
    githubUrl: "https://github.com/Sahilmd01/Blogni",
    accentColor: "from-amber-500 to-orange-600",
    status: "Live",
    highlights: ["AI content generation", "Multi-language", "User accounts"]
  },
  {
    id: 4,
    title: "Spendlix",
    category: "FinTech",
    description: "Financial tracking platform with expense management and budgeting features.",
    image: "/projects/project4.png",
    video: "/projects/videos/spendlix-demo.mp4",
    tags: ["React", "Chart.js", "Node.js", "Firebase"],
    demoUrl: "https://spendlix.vercel.app/login",
    githubUrl: "https://github.com/Sahilmd01/Spendlix",
    accentColor: "from-rose-500 to-pink-600",
    status: "Live",
    highlights: ["Expense tracking", "Data visualization", "Budget planning"]
  },
  {
    id: 5,
    title: "Eattoo",
    category: "Food Tech",
    description: "Food delivery platform with restaurant listings and order management.",
    image: "/projects/project5.png",
    video: "/projects/videos/eattoo-demo.mp4",
    tags: ["React", "Redux", "Mapbox", "Stripe"],
    demoUrl: "https://eattoo-food-delivery-website-frontend.onrender.com/",
    githubUrl: "https://github.com/Sahilmd01/Eattoo-food-delivery-website",
    accentColor: "from-violet-500 to-purple-600",
    status: "Live",
    highlights: ["Restaurant listings", "Order system", "Location services"]
  },
  {
    id: 6,
    title: "JobQue",
    category: "HR Tech",
    description: "Job matching platform with candidate tracking and application management.",
    image: "/projects/project6.png",
    video: "/projects/videos/jobque-demo.mp4",
    tags: ["Next.js", "PostgreSQL", "Redis", "AI Integration"],
    demoUrl: "#",
    githubUrl: "#",
    accentColor: "from-orange-500 to-red-600",
    status: "Development",
    highlights: ["Job matching", "Candidate tracking", "Application system"]
  }
];

export const categoryColors = {
  "Healthcare SaaS": "from-emerald-500/20 to-teal-600/20 text-emerald-600 border-emerald-500/30",
  "E-commerce": "from-purple-500/20 to-indigo-600/20 text-purple-600 border-purple-500/30",
  "Real-time Communication": "from-blue-500/20 to-cyan-600/20 text-blue-600 border-blue-500/30",
  "Artificial Intelligence": "from-amber-500/20 to-orange-600/20 text-amber-600 border-amber-500/30",
  "FinTech": "from-rose-500/20 to-pink-600/20 text-rose-600 border-rose-500/30",
  "Food Tech": "from-violet-500/20 to-purple-600/20 text-violet-600 border-violet-500/30",
  "HR Tech": "from-orange-500/20 to-red-600/20 text-orange-600 border-orange-500/30"
};

// Achievements
export const achievements = [
  { number: "15+", label: "Projects", icon: <Briefcase className="h-5 w-5" />, heroIcon: <TrendingUp className="h-3 w-3" />, suffix: "" },
  { number: "1", label: "Years Exp", icon: <Calendar className="h-5 w-5" />, heroIcon: <Shield className="h-3 w-3" />, suffix: "+" },
  { number: "99", label: "Success", icon: <Target className="h-5 w-5" />, heroIcon: <Award className="h-3 w-3" />, suffix: "%" },
  { number: "10", label: "Clients", icon: <User className="h-5 w-5" />, heroIcon: <Zap className="h-3 w-3" />, suffix: "+" }
];

export const heroAchievements = [
  { number: "1+", label: "Years in Production", icon: <Shield className="h-3 w-3" /> },
  { number: "15+", label: "Projects Delivered", icon: <TrendingUp className="h-3 w-3" /> },
  { number: "100%", label: "Client Satisfaction", icon: <Award className="h-3 w-3" /> },
  { number: "15+", label: "Projects completed", icon: <Zap className="h-3 w-3" /> }
];

// Tech Stack
export const techStack = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "Tailwind"] },
  { category: "Backend", items: ["Node.js", "Express", "Java", "Python"] },
  { category: "Cloud", items: ["AWS", "Docker", "Vercel", "MongoDB"] }
];

export const features = ["Full-stack expertise", "Clean, maintainable code", "Performance optimization", "Agile methodology", "24/7 support", "Timely delivery"];

// Contact Info
export const contactInfo = [
  { icon: <Mail size={16} />, text: "codewithkinu@gmail.com", href: "mailto:codewithkinu@gmail.com", label: "Email" },
  { icon: <Phone size={16} />, text: "+91 9315145594", href: "tel:+919315145594", label: "Phone" },
  { icon: <MapPin size={16} />, text: "Bengaluru, Karnataka India", href: null, label: "Location" }
];

export const socialLinks = [
  { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/codewithkinu", label: "LinkedIn" },
  { icon: <Instagram size={18} />, href: "https://instagram.com/dubbinut", label: "Instagram" },
  { icon: <Youtube size={18} />, href: "https://youtube.com/@codewithkinu", label: "YouTube" },
  { icon: <Github size={18} />, href: "https://github.com/sahilmd01", label: "GitHub" },
  { icon: <Twitter size={18} />, href: "#", label: "Twitter" }
];

export const quickLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const tabContent = {
  personal: "Passionate about creating digital solutions that make a difference. When I'm not coding, I'm exploring new technologies, contributing to open-source, and mentoring aspiring developers.",
  professional: "With 1+ years in full-stack development, I've delivered 15+ successful projects using modern technologies. I specialize in scalable architecture and performance optimization.",
  approach: "I believe in clean code, thorough testing, and user-centered design. My process emphasizes collaboration, agile methodologies, and continuous improvement."
};

// Skills Data
export const skillCategories = [
  { id: "all", label: "All Skills", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
  { id: "frontend", label: "Frontend", color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
  { id: "backend", label: "Backend", color: "bg-gradient-to-r from-green-500 to-emerald-500" },
  { id: "tools", label: "Tools", color: "bg-gradient-to-r from-orange-500 to-yellow-500" },
];

export const iconImages = {
  html: htmlIcon,
  css: cssIcon,
  sass: sassIcon,
  javascript: jsIcon,
  typescript: tsIcon,
  react: reactIcon,
  nextjs: nextjsIcon,
  nodejs: nodejsIcon,
  express: expressIcon,
  mongodb: mongodbIcon,
  postgresql: postgresqlIcon,
  graphql: graphqlIcon,
  java: javaIcon,
  python: pythonIcon,
  git: gitIcon,
  github: githubIcon,
  docker: dockerIcon,
  firebase: firebaseIcon,
  vscode: vscodeIcon,
  cleark: clearkIcon,
  sql: SQLIcon,
  mysql: MySQLIcon,
};

export const skillsData = [
  // Frontend
  { name: "HTML5", level: 95, category: "frontend", icon: "html" },
  { name: "CSS3", level: 90, category: "frontend", icon: "css" },
  { name: "SASS", level: 85, category: "frontend", icon: "sass" },
  { name: "JavaScript", level: 90, category: "frontend", icon: "javascript" },
  { name: "TypeScript", level: 75, category: "frontend", icon: "typescript" },
  { name: "React", level: 90, category: "frontend", icon: "react" },
  { name: "Next.js", level: 75, category: "frontend", icon: "nextjs" },

  // Backend
  { name: "Node.js", level: 90, category: "backend", icon: "nodejs" },
  { name: "Express", level: 85, category: "backend", icon: "express" },
  { name: "MongoDB", level: 90, category: "backend", icon: "mongodb" },
  { name: "PostgreSQL", level: 65, category: "backend", icon: "postgresql" },
  { name: "GraphQL", level: 60, category: "backend", icon: "graphql" },
  { name: "Java", level: 60, category: "backend", icon: "java" },
  { name: "Python", level: 60, category: "backend", icon: "python" },

  // Tools
  { name: "Git", level: 90, category: "tools", icon: "git" },
  { name: "GitHub", level: 90, category: "tools", icon: "github" },
  { name: "Docker", level: 70, category: "tools", icon: "docker" },
  { name: "Firebase", level: 80, category: "tools", icon: "firebase" },
  { name: "VS Code", level: 95, category: "tools", icon: "vscode" },
  { name: "Cleark", level: 90, category: "tools", icon: "cleark" },
  { name: "SQL", level: 90, category: "tools", icon: "sql" },
  { name: "MySQL", level: 90, category: "tools", icon: "mysql" },
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Product Director at TechCorp",
    content: "Working with Sahil was seamless from day one. Not only did they deliver a full-stack solution ahead of schedule, but they also communicated clearly throughout the project. It's rare to find a developer who understands both the tech and the business side so well",
    rating: 5,
    image: "/testimonials/alex-johnson.png"
  },
  {
    id: 2,
    name: "Maria Chen",
    role: "Senior UX Designer at DesignHub",
    content: "I've reviewed hundreds of portfolios, and his work is truly exceptional. Tway the animations guide attention while maintaining performance is masterful. The gradient elements add depth without overwhelming.",
    rating: 5,
    image: "/testimonials/maria-chen.png"
  },
  {
    id: 3,
    name: "David Wilson",
    role: "CTO at Startup Ventures",
    content: "From wireframes to deployment, Sahil owned the entire stack with confidence and creativity. The final product is fast, reliable, and looks incredible. I wouldn't hesitate to work with them again.",
    rating: 5,
    image: "/testimonials/David Wilson.png"
  },
];

export const journeyData = [
  {
    year: "2024",
    role: "Senior Frontend Engineer",
    company: "Tech Solutions Inc.",
    description: "Leading the frontend team in rebuilding the legacy platform using Next.js and Micro-frontends.",
    skills: ["Next.js", "Module Federation", "Team Leadership"]
  },
  {
    year: "2023",
    role: "Full Stack Developer",
    company: "Creative Agency",
    description: "Developed and deployed 15+ client websites and web applications. Optimized performance by 40%.",
    skills: ["React", "Node.js", "AWS", "Framer Motion"]
  },
  {
    year: "2022",
    role: "Frontend Developer",
    company: "Startup Hub",
    description: "Collaborated with UX/UI designers to implement pixel-perfect responsive interfaces.",
    skills: ["React", "Redux", "SASS", "Firebase"]
  },
  {
    year: "2021",
    role: "Web Development Intern",
    company: "Digital Academy",
    description: "Assisted in building internal tools and learned modern web development practices.",
    skills: ["HTML/CSS", "JavaScript", "React Basics"]
  }
];
