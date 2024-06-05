import React from 'react';
import HeroImage from './HeroImage';
import { HeroImageProps } from './HeroImage.types';

export default {
  title: 'HeroImage',
  component: HeroImage,
  argTypes: {
    bgImage: { control: 'text' },
    text: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args: HeroImageProps) => <HeroImage {...args} />;

export const Default = Object.assign(Template.bind({}), {
  args: {
    bgImage: 'https://placehold.jp/50/20451c/ffffff/500x500.png',
    text: 'Hero Text Here',
    disabled: false,
  },
});
