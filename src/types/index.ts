export interface Experience {
  id: string
  role: string
  company: string
  period: string
  descriptions: string[]
  tags: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  github?: string
  live?: string
}

export interface SkillCategory {
  label: string
  skills: string[]
}
