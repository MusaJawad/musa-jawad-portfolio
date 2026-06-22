export type Profile = {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  resume: string;
  availability: string;
  intro: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  id: number;
  title: string;
  slug: string;
  tagline: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string;
  stack: string;
  stack_list: string[];
  github_url: string;
  demo_url: string;
  image_url: string;
  image_alt: string;
  video_url?: string;
  video_poster?: string;
  gallery?: string[];
  links?: ProjectLink[];
  evidence?: string[];
  featured: boolean;
  order: number;
  year: string;
};

export type Experience = {
  id: number;
  role: string;
  organization: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  highlight_list: string[];
  order: number;
};

export type Skill = {
  id: number;
  name: string;
  category: 'backend' | 'frontend' | 'data_ai' | 'tools';
  order: number;
};


export type Testimonial = {
  id: number;
  rating: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  project: string;
  date: string;
};
