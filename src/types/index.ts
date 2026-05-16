export interface Skill {
  type: string;
  level: number;
}

export interface Experience {
  job: string;
  image: string;
  content: string;
  company: string;
  date: string;
  web: string;
}

export interface Project {
  description: string;
  technology: string;
  domain: string;
  state: string;
  color: string;
  branch: string;
  type?: string;
  date?: string;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
}

export interface Developer {
  name: string;
  job: string;
  image: string;
  type: string;
  website: string;
}

export interface CV {
  spanish: string;
  english: string;
}
