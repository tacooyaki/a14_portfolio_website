export interface Resource {
  title: string;
  image: string;
  summary: string;
  link: string;
}

export interface ResourcesProps {
  resources: Resource[];
}
