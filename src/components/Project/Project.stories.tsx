// import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Project, { ProjectProps } from './index';

export default {
  title: 'Components/Project',
  component: Project,
} as Meta<typeof Project>;

export const Default: StoryObj<ProjectProps> = {
  args: {
    title: 'Project Title',
    description: 'This is a description of the project.',
    images: ['/path-to-image1.jpg', '/path-to-image2.jpg'],
    link: 'https://project.com',
    techList: ['React', 'TypeScript', 'Styled-Components'],
  },
};

export const AnotherProject: StoryObj<ProjectProps> = {
  args: {
    title: 'Another Project',
    description: 'This is another description of the project.',
    images: ['/another-path-to-image1.jpg', '/another-path-to-image2.jpg'],
    link: 'https://another-project.com',
    techList: ['JavaScript', 'CSS', 'HTML'],
  },
};
