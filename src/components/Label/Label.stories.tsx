import React from 'react';
import Label from './Label';
import { LabelProps } from './Label.types';

export default {
  title: 'Label',
  component: Label,
  argTypes: {
    children: { control: 'text' },
    color: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args: LabelProps) => <Label {...args} />;

export const Default = Object.assign(Template.bind({}), {
  args: {
    children: 'Label Text',
    color: 'rgba(16,163,107,0.92)',
    disabled: false,
  },
});
