//import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DeveloperSetup, { DeveloperSetupProps } from './index';

export default {
  title: 'Components/DeveloperSetup',
  component: DeveloperSetup,
} as Meta<typeof DeveloperSetup>;

const Template: StoryObj<DeveloperSetupProps> = {
  args: {
    webstormSetup: 'My custom WebStorm settings and extensions.',
    terminalSetup: 'My terminal setup with custom themes and plugins.',
    preferredFont: 'JetBrains Mono',
  },
};

export const Default = Template;
