//import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Skills, { SkillsProps } from './index';

export default {
  title: 'Components/Skills',
  component: Skills,
} as Meta<typeof Skills>;

const Template: StoryObj<SkillsProps> = {
  args: {
    description: 'These are my skills.',
    languages: ['JavaScript', 'TypeScript', 'Python'],
    frameworks: ['React', 'Next.js', 'Express'],
    tools: ['Git', 'Docker', 'Jenkins'],
  },
};

export const Default = Template;
