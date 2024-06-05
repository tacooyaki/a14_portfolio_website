import React from 'react';
import { TextProps } from './Text.types';
import Text from './Text';

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

const Template = (args: TextProps) => <Text {...args} />;

export const Default = Object.assign(Template.bind({}), {
  args: {
    content: 'Sample text content',
    disabled: false,
  },
});
