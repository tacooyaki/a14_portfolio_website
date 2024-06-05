import React from 'react';
import Dropdown from './Dropdown';
import { DropdownProps } from './Dropdown.types';

export default {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {
    disabled: { control: 'boolean' },
    options: {
      control: 'object',
      defaultValue: [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
      ],
    },
    onChange: { action: 'changed' },
  },
};

const Template = (args: DropdownProps) => <Dropdown {...args} />;

export const Default = Object.assign(Template.bind({}), {
  args: {
    disabled: false,
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
    ],
    onChange: (value: string) => console.log(value),
  },
});
