import { IconType } from 'react-icons';

interface Skill {
  name: string;
  icon: IconType;
}

export interface SkillsProps {
  description: string;
  languages: Skill[];
  frameworks: Skill[];
  tools: Skill[];
}
