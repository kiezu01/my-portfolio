export interface Project {
  name: string;
  description: string;
  impact: string;
  image: string;
  link: string;
}

export interface CVData {
  name: string;
  title: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
  about: string;
  skills: string[];
  projects: Project[];
} 