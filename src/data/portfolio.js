export const personalData = {
  name: "Himanshu Mehta",
  logoText: "HM.",
  title: "Full-Stack Developer & Automation Builder",
  subtitles: ["AI Automation", "n8n", "Full-Stack Development"],
  heroTag: "Hi, I'm",
  heroDescription: "I build full-stack applications, automation systems, and AI-powered workflows that turn complex problems into simple, practical solutions.",
  resumeUrl: "/resume/Himanshu-Mehta-Resume.pdf",
  aboutHeading: "About Me",
  aboutDescription: "I'm a developer focused on building full-stack applications and automation systems. I enjoy turning ideas into functional products — from frontend interfaces and REST APIs to AI-powered workflows and business automation.",
  aboutHighlights: [
    {
      id: "problem-solver",
      title: "Problem Solver",
      description: "Analytical approach to solving complex engineering & workflow challenges.",
      icon: "Lightbulb"
    },
    {
      id: "fullstack-builder",
      title: "Full-Stack Builder",
      description: "End-to-end web apps from scalable backends to responsive UI.",
      icon: "Code"
    },
    {
      id: "automation-enthusiast",
      title: "Automation Enthusiast",
      description: "Streamlining business processes with n8n, webhooks, and AI logic.",
      icon: "Workflow"
    },
    {
      id: "always-learning",
      title: "Always Learning",
      description: "Continuously adopting modern frameworks, tools, and best practices.",
      icon: "BookOpen"
    },
    {
      id: "product-mindset",
      title: "Product Mindset",
      description: "Focused on user impact, practical features, and clean aesthetics.",
      icon: "Compass"
    },
    {
      id: "ai-curious",
      title: "AI Curious",
      description: "Integrating LLMs, prompt engineering, and intelligent agents.",
      icon: "Sparkles"
    }
  ]
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export const skillsData = [
  { name: "JavaScript", category: "Languages", icon: "FileCode" },
  { name: "React", category: "Frontend", icon: "Atom" },
  { name: "Spring Boot", category: "Backend", icon: "Server" },
  { name: "Node.js", category: "Backend", icon: "Cpu" },
  { name: "Express", category: "Backend", icon: "Layers" },
  { name: "MongoDB", category: "Database", icon: "Database" },
  { name: "MySQL", category: "Database", icon: "Database" },
  { name: "REST APIs", category: "Architecture", icon: "Globe" },
  { name: "n8n", category: "Automation", icon: "Zap" },
  { name: "Docker", category: "DevOps", icon: "Box" },
  { name: "Git & GitHub", category: "Tools", icon: "GitBranch" },
  { name: "AI Automation", category: "AI & ML", icon: "Bot" }
];

export const projectsData = [
  {
    id: "smartbuild",
    title: "SmartBuild",
    subTitle: "Smart Construction Equipment Management System",
    description: "A mobile-friendly construction equipment management platform for tracking machine working hours, diesel expenses, invoices and operational reports.",
    technologies: ["React", "Spring Boot", "MySQL", "MUI"],
    githubUrl: "https://github.com/Himanshu-tech-web/SmartBuild-SaaS",
    liveUrl: "",
    visualType: "smartbuild",
    featured: true,
    tag: "Featured App"
  },
  {
    id: "salespilot-ai",
    title: "SalesPilot AI",
    subTitle: "AI Sales & Outreach Automation",
    description: "An AI-powered sales automation system combining lead discovery, website research, opportunity analysis, proposal generation, CRM synchronization and follow-ups.",
    technologies: ["React", "Spring Boot", "n8n", "Gemini", "SerpAPI"],
    githubUrl: "https://github.com/YOUR_GITHUB_USERNAME/salespilot-ai-placeholder",
    liveUrl: "https://salespilot.placeholder.com",
    visualType: "salespilot",
    featured: true,
    tag: "AI & Workflow"
  },
  {
    id: "echotune",
    title: "EchoTune",
    subTitle: "Full-Stack Music Platform",
    description: "A full-stack music application with song uploads, playlists and backend storage using MongoDB.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/YOUR_GITHUB_USERNAME/echotune-placeholder",
    liveUrl: "https://echotune.placeholder.com",
    visualType: "echotune",
    featured: true,
    tag: "Full-Stack Web"
  },
  {
    id: "linkedin-agent",
    title: "LinkedIn Content Agent",
    subTitle: "AI LinkedIn Content Automation",
    description: "An automated content workflow that researches technology news, generates content and prepares scheduled LinkedIn posts using n8n and AI.",
    technologies: ["n8n", "RSS", "Google Sheets", "AI"],
    githubUrl: "https://github.com/Himanshu-tech-web/linkedin-content-automation-agent",
    liveUrl: "https://n8n-workflow-demo.placeholder.com",
    visualType: "linkedin-agent",
    featured: false,
    tag: "n8n Automation"
  },
  {
    id: "business-solutions",
    title: "Client / Business Websites",
    subTitle: "Business Web Solutions",
    description: "Websites and digital solutions created for real-world businesses, focused on practical requirements, responsive design and business visibility.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/YOUR_GITHUB_USERNAME/business-sites-placeholder",
    liveUrl: "https://bhandarecraneservice.com/",
    visualType: "business-solutions",
    featured: false,
    tag: "Web Solutions"
  }
];

export const experienceData = [
  {
    id: "mca",
    period: "Higher Education",
    role: "MCA — Master of Computer Applications",
    institution: "Postgraduate Degree",
    description: "Advanced study in computer science, enterprise application architecture, database management systems, and software engineering methodologies.",
    icon: "GraduationCap",
    highlight: "Master's Degree"
  },
  {
    id: "fullstack-builder-exp",
    period: "Current Focus",
    role: "Full-Stack Developer & Automation Builder",
    institution: "Independent / Project Engineering",
    description: "Building production-ready full-stack applications, AI workflows, RESTful backend services, and n8n business automation systems.",
    icon: "Code2",
    highlight: "Full-Stack & AI"
  },
  {
    id: "bca",
    period: "Undergraduate Education",
    role: "BCA — Bachelor of Computer Applications",
    institution: "Undergraduate Degree",
    description: "Foundational education in programming, algorithms, web development, data structures, and computer networking principles.",
    icon: "Award",
    highlight: "Bachelor's Degree"
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Understand",
    subTitle: "Discover & Analyze",
    description: "Understand the problem and requirements.",
    icon: "Search"
  },
  {
    step: "02",
    title: "Plan",
    subTitle: "Architect & Model",
    description: "Choose the architecture, technologies and workflow.",
    icon: "PenTool"
  },
  {
    step: "03",
    title: "Build",
    subTitle: "Develop & Craft",
    description: "Develop the product and integrate APIs and services.",
    icon: "Code2"
  },
  {
    step: "04",
    title: "Automate",
    subTitle: "Integrate & Connect",
    description: "Connect workflows, AI and business processes.",
    icon: "Zap"
  },
  {
    step: "05",
    title: "Improve",
    subTitle: "Test & Optimize",
    description: "Test, monitor and continuously improve.",
    icon: "TrendingUp"
  }
];

export const contactData = {
  heading: "Let's build something meaningful together.",
  highlightWord: "together.",
  subtext: "Have an idea, project, or automation problem? Let's turn it into something useful.",
  email: "himanshuu6375@gmail.com",
  emailLink: "mailto:himanshuu6375@gmail.com",
  gmailLink: "https://mail.google.com/mail/?view=cm&fs=1&to=himanshuu6375@gmail.com",
  phone: "6375326587",
  location: "India",
  socials: {
    github: "https://github.com/Himanshu-tech-web/",
    linkedin: "https://www.linkedin.com/in/himanshu-mehta-05a447326/",
    emailLink: "mailto:himanshuu6375@gmail.com"
  }
};
