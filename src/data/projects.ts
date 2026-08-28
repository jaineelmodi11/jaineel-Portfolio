import { Project } from "@/types"

export const projects: Project[] = [
  {
    id: "audiomark",
    title: "AudioMark",
    description:
      "Co-built a practice player for dancers. Loop a section, slow it down, and both settings save per track. 5,000+ active users on Google Play.",
    tech: ["Flutter", "Dart", "just_audio", "iOS / Android"],
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
      "First place at SatecHack. Photograph an item and a VGG16 classifier sorts it into the right recycling bin, served through ONNX and FastAPI.",
    tech: ["Next.js", "TypeScript", "FastAPI", "ONNX", "VGG16"],
    github: "https://github.com/jaineelmodi11/Tossit-2.0",
  },
  {
    id: "moviematch",
    title: "MovieMatchApp",
    description:
      "Swipe-based recommendation engine that learns taste from like and dislike signals. Watchlists sync in real time.",
    tech: ["SwiftUI", "Firebase", "Flask", "PostgreSQL"],
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
      "Fine-tuned all-MiniLM-L6-v2 on SNLI and MNLI with an NLI softmax loss, reaching 91.2% validation accuracy.",
    tech: ["Python", "PyTorch", "Transformers"],
    github: "https://github.com/jaineelmodi11/MiniLM-FineTuned-SNLI-MNLI",
  },
]
