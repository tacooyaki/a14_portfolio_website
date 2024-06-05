import React from 'react';
import Button from './Button';
import { ButtonProps } from './Button.types';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args: ButtonProps) => <Button {...args} />;

export const Primary = Object.assign(Template.bind({}), {
  args: {
    label: 'Click me',
  },
});
