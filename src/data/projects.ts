import { Project } from "@/types"

export const projects: Project[] = [
  {
    id: "anemia",
    title: "Anemia from Eyelid Photos",
    description:
      "Research with RBC Borealis's Let's SOLVE it program, screening for anemia across 4 countries. Reached 0.92 AUROC on Ghanaian children with TabPFN over 29+ colour features.",
    tech: ["Python", "PyTorch", "TabPFN", "Computer Vision"],
    github: "https://github.com/Mariaakhtar0035/iris-anemia-screening/tree/jaineel",
  },
  {
    id: "vision",
    title: "Vision",
    description:
      "Final round at Hack the North 2026. A simulated market of 326 personas finds the problem you actually solve, then a committee modelled on 25 VC firms cross-examines your pitch by voice and votes on funding it. 11 LLM agents deliberate in all.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Three.js", "Gemini API", "ElevenLabs"],
    github: "https://github.com/jaineelmodi11/vision",
    live: "https://vision-phi-lovat.vercel.app",
  },
  {
    id: "audiomark",
    title: "AudioMark",
    description:
      "Co-built a practice player for dancers. Loop a section, slow it down, and both settings save per track. Live on Google Play with 5,000+ installs, released with automated unit and end-to-end tests.",
    tech: ["Flutter", "Dart", "just_audio", "Provider"],
    github: "https://github.com/jaineelmodi11/audiomark",
    live: "https://play.google.com/store/apps/details?id=com.ayushshah.audiomark",
  },
  {
    id: "section-loop",
    title: "section_loop",
    description:
      "A-B section looping for any Dart audio player, published on pub.dev and extracted from AudioMark. Handles the seek storms that make looping hard to get right.",
    tech: ["Dart", "Flutter", "pub.dev"],
    github: "https://github.com/jaineelmodi11/section_loop",
    live: "https://jaineelmodi11.github.io/section_loop/",
  },
  {
    id: "tossit",
    title: "Tossit 2.0",
    description:
      "First place at SatecHack. Photograph an item and a VGG16 classifier sorts it into the right recycling bin, served through ONNX and FastAPI.",
    tech: ["Next.js", "TypeScript", "FastAPI", "ONNX", "VGG16"],
    github: "https://github.com/jaineelmodi11/Tossit-2.0",
    demo: "https://raw.githubusercontent.com/jaineelmodi11/Tossit-2.0/main/docs/benchmark.svg",
  },
  {
    id: "moviematch",
    title: "MovieMatchApp",
    description:
      "Swipe-based recommendation engine that learns taste from like and dislike signals. Watchlists sync in real time.",
    tech: ["SwiftUI", "Firebase", "Flask", "PostgreSQL"],
    github: "https://github.com/jaineelmodi11/MovieMatchApp",
    demo: "https://raw.githubusercontent.com/jaineelmodi11/MovieMatchApp/main/docs/demo.gif",
  },
  {
    id: "recsend",
    title: "RecSend CLI",
    description:
      "API testing from one YAML file. Declare a request and the response you expect, get a pass/fail that exits non-zero for CI.",
    tech: ["Python", "Click", "YAML", "CI/CD"],
    github: "https://github.com/jaineelmodi11/recsend-developer-focused-CLI",
    demo: "https://raw.githubusercontent.com/jaineelmodi11/recsend-developer-focused-CLI/main/docs/demo.svg",
  },
  {
    id: "minilm",
    title: "MiniLM Fine-Tuned",
    description:
      "Fine-tuned all-MiniLM-L6-v2 on SNLI and MNLI, then measured whether it helped. With a softmax loss it did not: 0.70 triplet accuracy against the base model's 0.94. Retrained with a ranking loss, it reached 0.95.",
    tech: ["Python", "PyTorch", "Transformers"],
    github: "https://github.com/jaineelmodi11/MiniLM-FineTuned-SNLI-MNLI",
    demo: "https://raw.githubusercontent.com/jaineelmodi11/MiniLM-FineTuned-SNLI-MNLI/main/docs/benchmark.svg",
  },
]
