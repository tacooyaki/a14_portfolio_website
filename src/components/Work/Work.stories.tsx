// import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Work from './Work';
import { WorkProps } from './Work.types';

export default {
  title: 'Components/Work',
  component: Work,
} as Meta<typeof Work>;

export const Default: StoryObj<WorkProps> = {
  args: {
    projects: [
      {
        title: 'Project 1',
        description: 'Description of project 1',
        image: '/path-to-image.jpg',
        link: 'https://project1.com',
        techList: ['React', 'TypeScript', 'Styled-Components'],
      },
      {
        title: 'Project 2',
        description: 'Description of project 2',
        image: '/path-to-image-2.jpg',
        link: 'https://project2.com',
        techList: ['JavaScript', 'CSS', 'HTML'],
      },
    ],
  },
};
