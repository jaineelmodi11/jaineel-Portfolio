import { Experience } from "@/types"

export const experience: Experience[] = [
  {
    id: "rbc",
    role: "Software Developer Intern",
    company: "Royal Bank of Canada (RBC)",
    period: "May 2026 – Present",
    descriptions: [
      "Client-facing REST APIs for the mortgage approval platform, spanning 10,000 applications.",
      "A Spring Boot service that validates mortgage documents against business rules, cutting manual effort 95%.",
    ],
    tags: ["Java", "Spring Boot", "REST APIs", "MongoDB"],
  },
  {
    id: "rise-lab",
    role: "Student Researcher",
    company: "Queen's University (RISE Lab)",
    period: "Sept 2025 – Jan 2026",
    descriptions: [
      "Traced failures in multi-agent LLM coding systems to the agent and step that break a repair.",
      "Built the repair pipeline in PyTorch, lifting Qwen2.5-Coder pass@1 on HumanEval by 12.8 points.",
    ],
    tags: ["Python", "PyTorch", "LLMs", "Research"],
  },
  {
    id: "mulvey",
    role: "Software Developer Intern",
    company: "Mulvey & Banani International",
    period: "Summers 2024 & 2025",
    descriptions: [
      "Shipped a GPT-4 Revit copilot automating 20+ BIM tasks for 80+ users.",
      "Automated blueprint generation with the Revit API and C#, saving 26 hours per project.",
    ],
    tags: ["GPT-4", "Python", "C# / .NET", "Revit API"],
  },
  {
    id: "convosearch",
    role: "Software Developer Intern",
    company: "ConvoSearch",
    period: "Jan 2024 – May 2024",
    descriptions: [
      "Integrated GPT-4 with LangChain into an ETL pipeline, hitting 98.3% ingestion accuracy.",
      "Built a profit-driven reranking layer that lifted CVR by 18% and order value by 25%.",
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
