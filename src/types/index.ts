
export interface Contact {
  email?: string;
  phone?: string;
  linkedin?: string;
  github?: string;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  bullets?: string[];
  technologies?: string[];
}

export interface Project {
  id: number;
  name: string;
  description: string;
  tech?: string[];
  repo?: string;
  link?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  period: string;
  notes?: string[];
}

export interface ResumeData {
  name: string;
  title?: string;
  summary?: string;
  contact?: Contact;
  experience?: ExperienceItem[];
}

export interface ProjectsData {
  projects: Project[];
}

export interface EducationData {
  education: EducationItem[];
}

export interface TechnicalSkillsData {
  technicalSkills: string[];
}

// Animation types
export interface MatrixConfig {
  chars: string[];
  columnCount: number;
  fallDuration: [number, number]; // min, max
  updateInterval: [number, number]; // min, max
  opacity: [number, number]; // min, max
  fontSize: [number, number]; // min, max
}

export interface AnimationVariants {
  hidden: object;
  visible: object;
}