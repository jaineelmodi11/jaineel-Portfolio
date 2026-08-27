import { Project } from "@/types"

export const projects: Project[] = [
  {
    id: "audiomark",
    title: "AudioMark",
    description:
      "Practice player for dancers. Loop a section of a song, slow it down, and save both settings per track so they come back next time. Around 5,000 users on Google Play.",
    tech: ["Flutter", "Dart", "just_audio", "Android", "iOS"],
    github: "https://github.com/jaineelmodi11/audiomark",
    live: "https://play.google.com/store/apps/details?id=com.ayushshah.audiomark",
  },
  {
    id: "section-loop",
    title: "section_loop",
    description:
      "Dart package for A–B section looping, extracted from AudioMark. Works with any audio player and handles the two bugs that make looping hard to get right: seek storms, and whole-track ranges that stall queue auto-advance.",
    tech: ["Dart", "Flutter", "pub.dev"],
    github: "https://github.com/jaineelmodi11/section_loop",
  },
  {
    id: "tossit",
    title: "Tossit 2.0",
    description:
      "Waste classification web app. Photograph an item and an ONNX model sorts it into the right recycling bin, with per-user history in Firebase.",
    tech: ["Next.js 16", "React 19", "TypeScript", "ONNX", "Firebase", "Tailwind"],
    github: "https://github.com/jaineelmodi11/Tossit-2.0",
  },
  {
    id: "moviematch",
    title: "MovieMatchApp",
    description:
      "iOS app that learns your taste from swipes and recommends films from it. Social watchlists sync in real time.",
    tech: ["Swift", "SwiftUI", "Firebase", "Flask", "PostgreSQL"],
    github: "https://github.com/jaineelmodi11/MovieMatchApp",
  },
  {
    id: "recsend",
    title: "RecSend CLI",
    description:
      "API testing from one config file. Declare a request and what a correct response looks like in YAML, run one command, get a pass/fail that exits non-zero for CI.",
    tech: ["Python", "Click", "YAML", "REST APIs", "CI/CD"],
    github: "https://github.com/jaineelmodi11/recsend-developer-focused-CLI",
  },
  {
    id: "minilm",
    title: "MiniLM Fine-Tuned",
    description:
      "Fine-tuned all-MiniLM-L6-v2 on SNLI and MNLI for stronger natural-language-inference embeddings.",
    tech: ["Python", "PyTorch", "Transformers", "SNLI/MNLI"],
    github: "https://github.com/jaineelmodi11/MiniLM-FineTuned-SNLI-MNLI",
  },
]
