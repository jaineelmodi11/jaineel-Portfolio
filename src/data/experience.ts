import { Experience } from "@/types"

export const experience: Experience[] = [
  {
    id: "rise-lab",
    role: "Undergraduate Research Assistant",
    company: "RISE Lab — Queen's University",
    period: "Sept 2025 – Present",
    descriptions: [
      "Researching LLM-driven automated program repair to advance reliable AI developer tools, led by Prof. Yuan Tian.",
      "Built an agentic program-repair evaluation pipeline to log multi-agent trajectories and track failure points across runs.",
    ],
    tags: ["Python", "LLMs", "Program Repair", "Research"],
  },
  {
    id: "mulvey-2025",
    role: "AI Development Intern",
    company: "Mulvey & Banani International",
    period: "May 2025 – Aug 2025",
    descriptions: [
      "Shipped a Revit Copilot powered by GPT-4 via the OpenAI API, automating 20+ BIM tasks, serving 80+ users, and processing 150k+ tokens daily.",
      "Built a routing layer for multi-step tool execution inside Revit, including clash detection and model device overrides.",
      "Created a Python service that extracts Revit metadata into a pipeline for on-demand standardized engineering reports.",
    ],
    tags: ["GPT-4", "OpenAI API", "Python", "Revit API", "C#", ".NET"],
  },
  {
    id: "mulvey-2024",
    role: "AI Development Intern",
    company: "Mulvey & Banani International",
    period: "June 2024 – Aug 2024",
    descriptions: [
      "Automated blueprint generation in Revit by placing 250+ electrical components using the Revit API, C#, and .NET, boosting productivity by 20% and saving 26 hours per project.",
      "Built a WPF tool using Python and FastAPI for multi-project file/folder handling, used daily by 200+ engineers.",
      "Used Azure Computer Vision to automate image tagging, accelerating search and retrieval for 10k+ images.",
    ],
    tags: ["C#", ".NET Core", "Revit API", "Python", "FastAPI", "Azure"],
  },
  {
    id: "convosearch",
    role: "AI Development Intern",
    company: "ConvoSearch",
    period: "Jan 2024 – May 2024",
    descriptions: [
      "Built data validation checks for an ETL ingestion pipeline using LangChain, achieving 98.3% ingestion accuracy.",
      "Implemented a profit-driven reranking layer that boosted CVR by 18% and increased average order value by 25%.",
      "Developed scalable CRUD APIs in Python for MongoDB with query indexing and pagination, handling 50k+ records and reducing execution time by 30%.",
    ],
    tags: ["Python", "GPT-4", "LangChain", "MongoDB", "ETL", "API Dev"],
  },
  {
    id: "geotab",
    role: "Junior Summer Program Intern",
    company: "Geotab",
    period: "Summers 2021 & 2022",
    descriptions: [
      "Developed Python crash simulation software with the Automotive team to track and analyze driver safety.",
      "Created a talent-tracking dashboard, streamlining position management for 30+ roles for the HR team.",
    ],
    tags: ["Python", "Data Visualization", "Dashboards"],
  },
]
