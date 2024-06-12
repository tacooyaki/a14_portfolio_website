//import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ContactForm, { ContactFormProps } from './index';

export default {
  title: 'Components/ContactForm',
  component: ContactForm,
} as Meta<typeof ContactForm>;

const Template: StoryObj<ContactFormProps> = {
  args: {
    onSubmit: (data) => alert(`Message sent: ${JSON.stringify(data, null, 2)}`),
  },
};

export const Default = Template;
