import { Project } from "@/types"

export const projects: Project[] = [
  {
    id: "audiomark",
    title: "AudioMark",
    description:
      "Practice player for dancers. Loop a section, slow it down, and both settings save per track. Around 5,000 users on Google Play.",
    tech: ["Flutter", "Dart", "Android", "iOS"],
    github: "https://github.com/jaineelmodi11/audiomark",
    live: "https://play.google.com/store/apps/details?id=com.ayushshah.audiomark",
  },
  {
    id: "section-loop",
    title: "section_loop",
    description:
      "A–B section looping for any Dart audio player, extracted from AudioMark. Handles the seek storms that make looping hard to get right.",
    tech: ["Dart", "Flutter"],
    github: "https://github.com/jaineelmodi11/section_loop",
  },
  {
    id: "tossit",
    title: "Tossit 2.0",
    description:
      "Photograph an item and an ONNX model sorts it into the right recycling bin. History kept per user.",
    tech: ["Next.js 16", "React 19", "ONNX", "Firebase"],
    github: "https://github.com/jaineelmodi11/Tossit-2.0",
  },
  {
    id: "moviematch",
    title: "MovieMatchApp",
    description:
      "Learns your taste from swipes and recommends films. Social watchlists sync in real time.",
    tech: ["Swift", "SwiftUI", "Firebase", "Flask"],
    github: "https://github.com/jaineelmodi11/MovieMatchApp",
  },
  {
    id: "recsend",
    title: "RecSend CLI",
    description:
      "API testing from one YAML file. Declare a request and the response you expect, get a pass/fail that exits non-zero for CI.",
    tech: ["Python", "Click", "YAML", "CI/CD"],
    github: "https://github.com/jaineelmodi11/recsend-developer-focused-CLI",
  },
  {
    id: "minilm",
    title: "MiniLM Fine-Tuned",
    description:
      "Fine-tuned all-MiniLM-L6-v2 on SNLI and MNLI for stronger natural-language-inference embeddings.",
    tech: ["Python", "PyTorch", "Transformers"],
    github: "https://github.com/jaineelmodi11/MiniLM-FineTuned-SNLI-MNLI",
  },
]
