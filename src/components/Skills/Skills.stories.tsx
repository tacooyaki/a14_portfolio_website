import { Meta, StoryObj } from '@storybook/react';
import Skills from './Skills';
import { SkillsProps } from './Skills.types';
import { FaReact, FaPython } from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiGit,
  SiDocker,
  SiJenkins,
} from 'react-icons/si';

export default {
  title: 'Components/Skills',
  component: Skills,
} as Meta<typeof Skills>;

const Template: StoryObj<SkillsProps> = {
  args: {
    description: 'These are my skills.',
    languages: [
      { name: 'JavaScript', icon: FaReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Python', icon: FaPython },
    ],
    frameworks: [
      { name: 'React', icon: FaReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Express', icon: SiExpress },
    ],
    tools: [
      { name: 'Git', icon: SiGit },
      { name: 'Docker', icon: SiDocker },
      { name: 'Jenkins', icon: SiJenkins },
    ],
  },
};

export const Default = Template;
