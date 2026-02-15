

export type ExperienceItem = {
  id: string
  company: string
  role: string
  duration: string
  location?: string
  highlights: string[]
  tech: string[]
  coverImage?: string
}

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "Deggendorf Institute of Technology",
    role: "Research Engineer",
    duration: "09.2023 to Present",
    location: "Germany",
    coverImage: "/Exp/Gen.png",
    highlights: [
      "A Multimodal landmine detection system combining sensors data with YOLOv9 based object detection.",
      "Structured data of detection with terrain, spectral, geometric, and radar features.",
      "Built a LLM and RAG based Mine Detection Report Generator.",
    ],
    tech: ["Python", "PyTorch", "YOLOv9", "LLM", "RAG"],
  },
  {
    id: "exp-2",
    company: "",
    role: "Student research intern",
    duration: "03.2022 to 08.2022",
    location: "Germany",
    coverImage: "/Exp/sensor.png",
    highlights: [
      "Temperature sensor data processing from heterogeneous systems for data driven analysis and decision support.",
      "Developed a web-based dashboard to visualize and analyze sensor data.",
      "Structured dataset creation aggregation statistical analysis and exploratory data analysis for trends.",
    ],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    id: "exp-3",
    company: "Deggendorf Institute of Technology",
    role: "Research Engineer",
    duration: "09.2023 to Present",
    location: "Germany",
    coverImage: "/Exp/Fire.jpg",
    highlights: [
      "Processing pipelines for remote sensing images to analyze forest early forest fire risk assessment.",
      "Combined classical image processing methods with machine learning-based approaches.",
      "Full-stack Web Based solution to process the fire images and generate vector file.",
    ],
    tech: ["Angular",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Trimble eCognition CLI"],
  },
  {
    id: "exp-4",
    company: "Physens",
    role: "AI Engineer ",
    duration: "03.2022 to 08.2022",
    location: "Germany",
    coverImage: "/Exp/Trade.jpg",
    highlights: [
      "MATLAB to analyze magnetic sensor data.",
      "Finding signature patterns of magnetic sensors by analyzing Google Earth data.",
      "Identifying error analyses.",
    ],
    tech: ["MATLAB", "Google Earth", "Python"]
  },

]
