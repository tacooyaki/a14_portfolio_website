import React from 'react';
import Img from './Img';
import { ImgProps } from './Img.types';

export default {
  title: 'Img',
  component: Img,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

const Template = (args: ImgProps) => <Img {...args} />;

export const Default = Object.assign(Template.bind({}), {
  args: {
    src: 'https://placehold.jp/20/20451c/ffffff/150x150.png',
    alt: 'Placeholder Image',
    disabled: false, // Default state
  },
});
