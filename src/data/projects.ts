import { Project } from "@/types"

export const projects: Project[] = [
  {
    id: "moviematch",
    title: "MovieMatchApp",
    description:
      "iOS swipe-based movie recommendation app powered by machine learning. Matches users to films based on taste profiles built from swipe history, with social watchlists and real-time syncing.",
    tech: ["Swift", "SwiftUI", "Firebase", "Flask", "PostgreSQL", "ML"],
    github: "https://github.com/jaineelmodi11",
    live: "https://jaineelmodi.com",
  },
  {
    id: "recsend",
    title: "RecSend CLI",
    description:
      "Command-line API testing and automation tool with YAML-based configuration. Supports chained requests, environment variables, response assertions, and CI/CD pipeline integration.",
    tech: ["Python", "Click", "YAML", "REST APIs", "CI/CD"],
    github: "https://github.com/jaineelmodi11",
  },
  {
    id: "tossit",
    title: "TOSSIT",
    description:
      "Cross-platform ML waste identification app that uses computer vision to classify items into the correct recycling bin. Promotes sustainable habits through gamification.",
    tech: ["React Native", "Expo", "TensorFlow", "Node.js", "Express", "React"],
    github: "https://github.com/jaineelmodi11",
  },
]
