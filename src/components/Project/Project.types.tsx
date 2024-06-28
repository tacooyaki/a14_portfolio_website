import { IconType } from 'react-icons';

export interface ProjectProps {
  title: string;
  subtitle?: string;
  description: string;
  images: string[];
  link: string;
  techList: string[];
  techIcons?: IconType[];
  onClick?: () => void;
}
