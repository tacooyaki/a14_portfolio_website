//import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Navbar, { NavbarProps } from './index';

export default {
  title: 'Components/Navbar',
  component: Navbar,
} as Meta<typeof Navbar>;

const Template: StoryObj<NavbarProps> = {
  args: {
    links: [
      { name: 'Home', url: '#' },
      { name: 'About', url: '#about' },
      { name: 'Work', url: '#work' },
      { name: 'Skills', url: '#skills' },
      { name: 'Resources', url: '#resources' },
      { name: 'Contact', url: '#contact' },
    ],
  },
};

export const Default = Template;
