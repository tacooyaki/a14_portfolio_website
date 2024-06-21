import { IconType } from 'react-icons';

export interface ProjectProps {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  link: string;
  techList: string[];
  techIcons?: IconType[];
  onClick?: () => void;
}
