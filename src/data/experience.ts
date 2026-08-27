import { Experience } from "@/types"

export const experience: Experience[] = [
  {
    id: "rbc",
    role: "Developer Co-op, Retail Credit Engineering & Innovation",
    company: "Royal Bank of Canada (RBC)",
    period: "May 2026 – Present",
    descriptions: [
      "REST APIs in Java and Spring Boot for credit card and personal financing platforms.",
      "Automated CI/CD steps so deployments stay consistent across banking services.",
    ],
    tags: ["Java", "Spring Boot", "REST APIs", "CI/CD"],
  },
  {
    id: "rise-lab",
    role: "Undergraduate Research Assistant",
    company: "RISE Lab, Queen's University",
    period: "Sept 2025 – Jan 2026",
    descriptions: [
      "Researched LLM-driven automated program repair under Prof. Yuan Tian.",
      "Built an eval pipeline that traces multi-agent repair runs and flags where they fail.",
    ],
    tags: ["Python", "LLMs", "Program Repair", "Research"],
  },
  {
    id: "mulvey",
    role: "AI Development Intern",
    company: "Mulvey & Banani International",
    period: "Summers 2024 & 2025",
    descriptions: [
      "Shipped a GPT-4 Revit copilot automating 20+ BIM tasks, saving 26 hours per project.",
      "Built a FastAPI file-management tool used by 200+ engineers daily.",
    ],
    tags: ["GPT-4", "Python", "C# / .NET", "FastAPI"],
  },
  {
    id: "convosearch",
    role: "AI Development Intern",
    company: "ConvoSearch",
    period: "Jan 2024 – May 2024",
    descriptions: [
      "Integrated GPT-4 with LangChain into an ETL pipeline, hitting 98.3% ingestion accuracy.",
      "Built a reranking layer that lifted CVR by 18% and AOV by 25%.",
    ],
    tags: ["GPT-4", "LangChain", "MongoDB", "ETL"],
  },
  {
    id: "geotab",
    role: "Junior Summer Program Intern",
    company: "Geotab",
    period: "Summers 2021 & 2022",
    descriptions: [
      "Built Python crash simulation software to model driver safety scenarios.",
      "Created a talent dashboard for HR tracking 30+ open roles at once.",
    ],
    tags: ["Python", "Data Visualization", "Dashboards"],
  },
]
