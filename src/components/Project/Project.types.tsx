export interface ProjectProps {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  link: string;
  techList: string[];
  onClick?: () => void;
}
