export interface Experience {
  id: string
  role: string
  company: string
  period: string
  location?: string
  descriptions: string[]
  tags: string[]
}

export interface Education {
  school: string
  degree: string
  period: string
  location: string
  /** Short facts set on one line: GPA, honours. */
  notes: string[]
  courses: string[]
  activities: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  github?: string
  live?: string
  demo?: string
}

export interface SkillCategory {
  label: string
  skills: string[]
}
