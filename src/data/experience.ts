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
    company: "RISE Lab — Queen's University",
    period: "Sept 2025 – Jan 2026",
    descriptions: [
      "Researched LLM-driven automated program repair under Prof. Yuan Tian, focused on making AI developer tools more reliable.",
      "Built an eval pipeline that traces multi-agent repair runs and flags exactly where failures happen.",
    ],
    tags: ["Python", "LLMs", "Program Repair", "Research"],
  },
  {
    id: "mulvey-2025",
    role: "AI Development Intern",
    company: "Mulvey & Banani International",
    period: "May 2025 – Aug 2025",
    descriptions: [
      "Shipped a GPT-4 Revit Copilot that automates 20+ BIM tasks for 80+ engineers, processing 150k+ tokens a day.",
      "Built the agent routing layer and a Python metadata service to power multi-step Revit workflows.",
    ],
    tags: ["GPT-4", "OpenAI API", "Python", "Revit API", "C#", ".NET"],
  },
  {
    id: "mulvey-2024",
    role: "AI Development Intern",
    company: "Mulvey & Banani International",
    period: "June 2024 – Aug 2024",
    descriptions: [
      "Automated electrical blueprint generation in Revit using C# and .NET, placing 250+ components and cutting 26 hours per project.",
      "Shipped a FastAPI file-management tool used by 200+ engineers daily and used Azure Computer Vision to organize 10k+ images.",
    ],
    tags: ["C#", ".NET Core", "Revit API", "Python", "FastAPI", "Azure"],
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
