export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'software-engineer' | 'ai-ml' | 'data-analyst';
  tags: string[];
  techStack: string[];
  image: string;
  github?: string | null;
  demo?: string | null;
  featured: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  icon?: string | null;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Profile {
  id: string;
  name: string;
  title: string;
  bio: string;
  email: string;
  phone?: string | null;
  github?: string | null;
  linkedin?: string | null;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Stats {
  id: string;
  projectsCompleted: number;
  organizations: number;
  certificationsEarned: number;
  worksExperienced: number;
  updatedAt: Date;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  description: string;
  startDate: Date;
  endDate?: Date | null;
  current: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Organization {
  id: string;
  name: string;
  role?: string | null;
  logo?: string | null;
  url?: string | null;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export type ProjectCategory = 'all' | 'software-engineer' | 'ai-ml' | 'data-analyst';