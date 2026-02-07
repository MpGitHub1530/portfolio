// src/data/services.data.ts

export type ExperienceItem = {
  id: string
  company: string
  role: string
  duration: string
  location?: string
  highlights: string[]
  details: string[]
  tech: string[]
  coverImage?: string
}

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "FOXON",
    role: "IT Project Engineer",
    duration: "09.2023 to Present",
    location: "Germany",
    coverImage: "/Exp/Trade.jpg",
    highlights: [
      "Built AI driven workflows for geodata processing",
      "Developed automation pipelines for training evaluation deployment",
      "Designed full stack platform features for job workspace results",
    ],
    details: [
      "Implemented job based processing with clear separation between API executor and results handling",
      "Integrated CLI based tooling into backend services with safe validation logging and error handling",
      "Worked on data preparation augmentation and model training workflows",
    ],
    tech: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Python"],
  },
  {
    id: "exp-2",
    company: "Tech Innovations Ltd",
    role: "Student research intern",
    duration: "01.2022 to 08.2023",
    location: "Germany",
    coverImage: "/Exp/sensor.png",
    highlights: [
      "Developed scalable web applications using modern frameworks",
      "Led migration from monolith to microservices architecture",
      "Improved application performance by 40% through optimization",
    ],
    details: [
      "Built RESTful APIs and GraphQL endpoints for frontend consumption",
      "Implemented CI/CD pipelines with automated testing and deployment",
      "Collaborated with UX designers to create intuitive user interfaces",
    ],
    tech: ["React", "Node.js", "MongoDB", "Docker", "AWS"],
  },
  {
    id: "exp-3",
    company: "DataTech Solutions",
    role: "Full Stack Developer",
    duration: "06.2020 to 12.2021",
    location: "Remote",
    coverImage: "/Exp/Fire.jpg",
    highlights: [
      "Designed and maintained high-performance backend systems",
      "Implemented data pipelines processing millions of records daily",
      "Optimized database queries reducing response time by 60%",
    ],
    details: [
      "Built microservices handling real-time data processing",
      "Integrated third-party APIs and payment gateways",
      "Mentored junior developers on best practices and code reviews",
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "Kubernetes"],
  },
 {
  id: "exp-4",
  company: "StartupX",
  role: "AI Engineer ",
  duration: "03.2019 to 05.2020",
  location: "Berlin",
  coverImage: "/Exp/Gen.png",
  highlights: [
    "Contributed to MVP development from concept to launch",
    "Implemented responsive frontend with modern UI frameworks",
    "Worked closely with product and design teams",
  ],
  details: [
    "Built customer-facing features with focus on UX",
    "Created automated tests ensuring code quality",
    "Participated in agile development and sprint planning",
  ],
  tech: ["Vue.js", "Django", "MySQL", "Git"],
},
  
]
