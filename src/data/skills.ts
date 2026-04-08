import { SkillCategory } from "@/types"

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C++", "C#", "SQL", "Swift"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Flutter", "Material-UI", "Expo"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js", "Flask", "FastAPI", ".NET Core"],
  },
  {
    label: "AI / ML",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Vision Models", "KNN"],
  },
  {
    label: "DevOps & DB",
    skills: ["Docker", "Kubernetes", "Azure", "AWS", "MySQL", "PostgreSQL", "MongoDB", "GitHub"],
  },
]

// Flat list for marquee — row 1 and row 2 split
export const marqueeRow1 = [
  "Python", "TypeScript", "React", "Next.js", "Node.js", "Swift",
  "TensorFlow", "PyTorch", "Flask", "FastAPI", "Tailwind CSS", "Docker",
]

export const marqueeRow2 = [
  "Azure", "AWS", "PostgreSQL", "MongoDB", "Scikit-learn", "Pandas",
  ".NET Core", "Kubernetes", "Express.js", "Flutter", "C#", "NumPy",
]
