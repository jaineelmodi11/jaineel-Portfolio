import { Experience } from "@/types"

export const experience: Experience[] = [
  {
    id: "rise-lab",
    role: "Undergraduate Research Assistant",
    company: "RISE Lab",
    period: "Fall 2025",
    descriptions: [
      "Researching LLM-driven automated program repair techniques.",
      "Investigating large language models for code understanding and fault localization.",
    ],
    tags: ["Python", "LLMs", "Program Repair", "Research"],
  },
  {
    id: "mulvey",
    role: "AI Development Intern",
    company: "Mulvey & Banani International",
    period: "Summer 2024 & 2025",
    descriptions: [
      "Shipped Revit Copilot processing 150k+ tokens daily for electrical engineers.",
      "Architected CI/CD workflows saving $20K/month in operational costs.",
      "Built C#/.NET Revit plugin automating electrical component placement.",
    ],
    tags: ["C#", ".NET Core", "Revit API", "Python", "FastAPI", "Azure", "CI/CD"],
  },
  {
    id: "conversecart",
    role: "AI Development Intern",
    company: "ConverseCart",
    period: "Jan – May 2024",
    descriptions: [
      "Developed AI-driven shopping interface using KNN & deep learning models.",
      "Boosted conversion rate by 18% and average order value by 25%.",
    ],
    tags: ["Python", "KNN", "Deep Learning", "GPT-4", "MongoDB", "API Dev"],
  },
  {
    id: "geotab",
    role: "Junior Summer Intern",
    company: "Geotab",
    period: "Summers 2021 & 2022",
    descriptions: [
      "Built Python crash simulation software for driver safety analysis.",
      "Developed HR talent-tracking dashboard for 30+ concurrent roles.",
      "Created Excel macro automation tools used by 3,000+ employees.",
    ],
    tags: ["Python", "Data Visualization", "Excel Automation", "Dashboards"],
  },
  {
    id: "nstem",
    role: "Web Developer Intern",
    company: "NSTEM",
    period: "Summer 2022",
    descriptions: [
      "Designed and developed an e-commerce website from Figma to deployment.",
    ],
    tags: ["Figma", "WordPress", "HTML", "CSS", "UI/UX"],
  },
]
