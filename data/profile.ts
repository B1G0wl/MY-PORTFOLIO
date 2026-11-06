export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" }
];

export const contact = {
  email: "kaduaadesh11@gmail.com",
  phone: "+91 7208541846",
  github: "https://github.com/B1G0wl",
  linkedin: "https://www.linkedin.com/in/adesh-kadu-7b99a6286/?skipRedirect=true",
  location: "Juinagar, Navi Mumbai, Maharashtra"
};

export const stats = [
  { value: "Final", label: "Year B.E." },
  { value: "2", label: "Internships" },
  { value: "2", label: "Resume Projects" },
  { value: "83%", label: "Diploma Merit" }
];

export const skillGroups = [
  { title: "UI/UX & Design", items: ["Figma", "UI Design", "UX Design", "Wireframing", "Prototyping", "Design Thinking", "Visual Design", "Layout & Typography", "Responsive Design"] },
  { title: "Programming", items: ["Java", "Python", "C", "C++", "JavaScript"] },
  { title: "Frontend Development", items: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"] },
  { title: "Backend Development", items: ["Java Backend Development", "Express.js", "Maven"] },
  { title: "Databases & Data", items: ["MySQL", "MySQL Workbench", "Power BI"] },
  { title: "Development Tools", items: ["VS Code", "Eclipse IDE", "Code::Blocks"] },
  { title: "Cybersecurity & AI", items: ["Network Security", "Threat Detection", "Ethical Hacking", "Intrusion Detection", "Artificial Intelligence"] }
];

export const projects = [
  {
    title: "Intrusion Detection System",
    featured: true,
    overview: "An academic cybersecurity project focused on identifying suspicious network activity and exploring how intelligent analysis can support intrusion detection.",
    problem: "Network activity can be difficult to review manually, and suspicious patterns may be overlooked when monitoring relies only on human inspection.",
    solution: "Explored a data-driven intrusion detection workflow, combining network-security concepts with analysis of traffic-related features.",
    technologies: ["Cybersecurity", "Python", "AI & Data Science"],
    features: ["Network security concepts", "Threat detection focus", "Traffic feature analysis", "Intrusion detection workflow"],
    learned: "Developed a stronger understanding of network security, threat detection, and applying AI and data-analysis concepts to cybersecurity problems."
  },
  {
    title: "Staff Availability with Face Detection System",
    featured: false,
    overview: "A computer-vision academic project intended to support staff availability tracking using face detection.",
    problem: "Manually checking and recording availability can take time and introduce repetitive administrative work.",
    solution: "Used face-detection concepts to support an automated camera-based identification and availability workflow.",
    technologies: ["Python", "OpenCV", "Computer Vision"],
    features: ["Camera-based face detection", "Visual identification workflow", "Availability-oriented use case"],
    learned: "Practiced computer-vision fundamentals and learned how camera input and image conditions affect detection workflows."
  },
  {
    title: "Build with Adesh – Developer Portfolio",
    featured: false,
    overview: "A responsive personal portfolio built to present my web-development interests, technical skills, internships, education, and academic projects.",
    problem: "A traditional resume alone offers limited space to demonstrate presentation, interface-building, and responsive web-development skills.",
    solution: "Created a responsive portfolio experience with interactive navigation, theme switching, animated sections, and a dedicated resume/contact experience.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    features: ["Responsive layouts", "Dark and light themes", "Interactive navigation", "Animated sections", "Resume and contact links"],
    learned: "Practiced component-based frontend development, responsive UI implementation, theming, and presenting technical work for recruiters."
  }
];

export const experiences = [
  {
    company: "CrossAsyst Pvt. Ltd.",
    role: "Student Intern",
    duration: "45 Days",
    badge: "Java Backend Development",
    points: [
      "Gained hands-on experience working with Java for backend development.",
      "Learned database management concepts, including queries and integration with Java applications.",
      "Worked with Maven to manage project builds and dependencies.",
      "Strengthened problem-solving, debugging, and team collaboration skills."
    ]
  },
  {
    company: "Imarticus Learning",
    role: "Intern",
    duration: "120 Hours",
    badge: "A Grade Certification",
    points: [
      "Worked on advanced Python programming concepts and practical programs.",
      "Explored MySQL features and database-related concepts through hands-on tasks.",
      "Worked with Power BI for data visualization and analysis."
    ]
  }
];

export const education = [
  {
    degree: "B.E. in Artificial Intelligence & Data Science",
    institution: "A.C. Patil College of Engineering, Kharghar, Navi Mumbai",
    period: "2024 – 2027 | Pursuing",
    note: "Final-year undergraduate student."
  },
  {
    degree: "Diploma in Information Technology",
    institution: "Vidyalankar Polytechnic, Wadala",
    period: "2021 – 2024",
    note: "Merit: 83%."
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "St. Xavier’s High School & Jr. College, Nerul",
    period: "June 2021",
    note: "Merit: 80.80%."
  }
];
