export interface ProjectItem {
  id: string;
  title: string;
  category: 'web' | 'python' | 'ai' | 'creative';
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  status: 'planning' | 'in-progress' | 'completed';
  createdAt: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  location?: string;
  description: string;
  highlights: string[];
  status: 'current' | 'completed';
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'tech' | 'creative';
  description: string;
  features: string[];
  iconName: string;
}

export interface SkillItem {
  name: string;
  category: 'technical' | 'creative' | 'languages';
  level: string; // 'Foundational', 'Active Learning', 'Fluent', etc.
  description: string;
  iconName: string;
}
