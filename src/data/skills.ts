import { SkillCategory } from "@/types"

// The four lists on the résumé, plus Swift, Flutter and FastAPI, which the
// work on this page is built with.
export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    skills: ["Python", "Java", "C", "C++", "C#", "TypeScript", "JavaScript", "Dart", "Swift", "Ruby", "SQL", "Bash"],
  },
  {
    label: "Frameworks & DB",
    skills: ["Spring Boot", "React", "Next.js", "Node.js", "Flask", "FastAPI", ".NET Core", "Flutter", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    label: "AI & ML",
    skills: ["Claude Code", "OpenAI API", "LangChain", "scikit-learn", "Pandas", "Hugging Face", "PyTorch", "TensorFlow", "ONNX"],
  },
  {
    label: "Tools",
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "Git", "Kafka", "REST APIs", "CI/CD", "Microservices", "ETL", "LLM Agents"],
  },
]
