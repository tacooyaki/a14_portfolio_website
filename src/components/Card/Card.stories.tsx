import React from 'react';
import Card from './Card';
import { CardProps } from './Card.types';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

const Template = (args: CardProps) => (
  <Card {...args}>
    <p>This is a card</p>
  </Card>
);

export const Default = Object.assign(Template.bind({}), {
  args: {
    disabled: false,
  },
});
