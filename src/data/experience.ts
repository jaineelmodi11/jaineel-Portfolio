import { Experience } from "@/types"

export const experience: Experience[] = [
  {
    id: "rbc",
    role: "Developer Co-op, Retail Credit Engineering & Innovation",
    company: "Royal Bank of Canada (RBC)",
    period: "May 2026 – Present",
    descriptions: [
      "Building RESTful APIs in Java and Spring Boot for RBC's credit card and personal financing platforms.",
      "Automated CI/CD steps to speed up delivery and keep deployments consistent across banking services.",
    ],
    tags: ["Java", "Spring Boot", "REST APIs", "CI/CD"],
  },
  {
    id: "rise-lab",
    role: "Undergraduate Research Assistant",
    company: "RISE Lab, Queen's University",
    period: "Sept 2025 – Jan 2026",
    descriptions: [
      "Researched LLM-driven automated program repair under Prof. Yuan Tian, focused on making AI developer tools more reliable.",
      "Built an eval pipeline that traces multi-agent repair runs and flags exactly where failures happen.",
    ],
    tags: ["Python", "LLMs", "Program Repair", "Research"],
  },
  {
    id: "mulvey",
    role: "AI Development Intern",
    company: "Mulvey & Banani International",
    period: "June 2024 – Aug 2024 & May 2025 – Aug 2025",
    descriptions: [
      "Shipped a GPT-4 Revit Copilot automating 20+ BIM tasks for 80+ engineers, and automated blueprint generation with C# and .NET, saving 26 hours per project.",
      "Built a FastAPI file-management tool used by 200+ engineers daily, plus an agent routing layer and metadata service for multi-step Revit workflows.",
    ],
    tags: ["GPT-4", "OpenAI API", "Python", "Revit API", "C#", ".NET", "FastAPI", "Azure"],
  },
  {
    id: "convosearch",
    role: "AI Development Intern",
    company: "ConvoSearch",
    period: "Jan 2024 – May 2024",
    descriptions: [
      "Integrated GPT-4 with LangChain into an ETL pipeline, hitting 98.3% ingestion accuracy.",
      "Built a reranking layer that lifted CVR by 18% and AOV by 25%, plus optimized MongoDB APIs to handle 50k+ records 30% faster.",
    ],
    tags: ["Python", "GPT-4", "LangChain", "MongoDB", "ETL", "API Dev"],
  },
  {
    id: "geotab",
    role: "Junior Summer Program Intern",
    company: "Geotab",
    period: "Summers 2021 & 2022",
    descriptions: [
      "Built Python crash simulation software with the Automotive team to track and model driver safety scenarios.",
      "Created a talent dashboard for HR that managed 30+ open roles at once.",
    ],
    tags: ["Python", "Data Visualization", "Dashboards"],
  },
]
