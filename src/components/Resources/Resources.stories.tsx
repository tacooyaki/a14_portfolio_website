//import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Resources, { ResourcesProps } from './index';

export default {
  title: 'Components/Resources',
  component: Resources,
} as Meta<typeof Resources>;

const Template: StoryObj<ResourcesProps> = {
  args: {
    resources: [
      {
        title: 'Resource 1',
        image: '/images/resource1.jpg',
        summary: 'Summary of resource 1',
        link: 'https://resource1.com',
      },
      {
        title: 'Resource 2',
        image: '/images/resource2.jpg',
        summary: 'Summary of resource 2',
        link: 'https://resource2.com',
      },
    ],
  },
};

export const Default = Template;
