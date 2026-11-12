import { Education, Experience } from "@/types"

// Kept in step with the résumé at public/SWE_Jaineel_Modi_Resume.pdf. When a
// number changes there, change it here in the same commit.

export const experience: Experience[] = [
  {
    id: "shopify",
    role: "Software Developer Intern",
    company: "Shopify",
    period: "Incoming Winter 2027",
    location: "Toronto, ON",
    descriptions: [
      "Joining the engineering team to build production e-commerce software for millions of merchants.",
    ],
    tags: [],
  },
  {
    id: "rbc",
    role: "Software Developer Intern",
    company: "Royal Bank of Canada (RBC)",
    period: "May 2026 – Dec 2026",
    location: "Toronto, ON",
    descriptions: [
      "Architected the persistence service and REST API for the mortgage Application Lifecycle Management system, with one-fetch reads, indexed and capped queries, optimistic locking and safe write ordering at 15K+ requests a week.",
      "Delivered a Spring Boot microservice on Kafka that validates mortgage documents against 581 business rules with exact and fuzzy matching, cutting manual review by 95%.",
      "Modernized the configuration system used by 50+ mortgage teams across RBC on MongoDB, storing 10K+ records.",
    ],
    tags: ["Java", "Spring Boot", "Kafka", "MongoDB", "REST APIs"],
  },
  {
    id: "mulvey",
    role: "Software Developer Intern",
    company: "Mulvey & Banani International",
    period: "Jun – Aug 2024 & May – Aug 2025",
    location: "Toronto, ON",
    descriptions: [
      "Launched a GPT-4 Revit copilot that automates 20+ building-design (BIM) tasks from natural-language prompts with multi-step tool execution, serving 80+ users and 5K+ prompts a month.",
      "Built a Revit plugin in C# and .NET that auto-places 250+ electrical parts, saving 26 hours per project.",
      "Implemented a WPF tool with Python and FastAPI to manage files across projects, used daily by 200+ employees.",
    ],
    tags: ["GPT-4", "C# / .NET", "Revit API", "Python", "FastAPI"],
  },
  {
    id: "convosearch",
    role: "Software Developer Intern",
    company: "ConvoSearch",
    period: "Jan 2024 – May 2024",
    location: "San Francisco, CA",
    descriptions: [
      "Engineered an AI shopping interface with GPT-4 and LangChain that validates client data in an ETL pipeline at 98.3% accuracy, with reranking that lifted conversion 18% and order value 25%.",
      "Created Python and MongoDB CRUD APIs with indexing and pagination for 50K+ records, cutting runtime 30%.",
    ],
    tags: ["GPT-4", "LangChain", "Python", "MongoDB", "ETL"],
  },
  {
    // Not on the one-page résumé, which has no room for it. Kept here.
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

export const research: Experience[] = [
  {
    id: "borealis",
    role: "Student Researcher",
    company: "RBC Borealis (Let's SOLVE it)",
    period: "Oct 2026 – Dec 2026",
    location: "Toronto, ON",
    descriptions: [
      "Applied computer vision and tabular ML models to anemia detection across 4 countries.",
      "Reached 0.92 AUROC detecting anemia in Ghanaian children with TabPFN on 29+ colour features.",
    ],
    tags: ["Python", "PyTorch", "TabPFN", "Computer Vision"],
  },
  {
    id: "rise-lab",
    role: "Student Researcher",
    company: "Queen's University (RISE Lab)",
    period: "Sep 2025 – Jan 2026",
    location: "Kingston, ON",
    descriptions: [
      "Researched failure tracing in multi-agent LLM systems, pinpointing the faulty agent and step.",
      "Lifted Qwen2.5-Coder pass@1 on HumanEval by 12.8 points with a PyTorch pipeline that logs multi-agent trajectories and trains a tracer with counterfactual replay and fault injection.",
    ],
    tags: ["Python", "PyTorch", "LLM Agents"],
  },
]

export const education: Education = {
  school: "Queen's University",
  degree: "Bachelor of Computing (Honours), Specialization in AI",
  period: "Expected May 2028",
  location: "Kingston, ON",
  notes: ["GPA 3.75 / 4.3", "Dean's Honour List ×3"],
  courses: [
    "Data Structures & Algorithms",
    "Software Architecture",
    "Database Management Systems",
    "Artificial Intelligence",
  ],
  activities: [
    "Hack the North",
    "KingsHacks",
    "AI Society",
    "Competitive Programming Club",
  ],
}
