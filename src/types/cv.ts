export interface Project {
  name: string;
  description: string;
  impact: string;
  image: string;
  link: string;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  pdf: string;
  image?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  feedback: string;
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
  experience: Experience[];
  certifications: Certification[];
} 