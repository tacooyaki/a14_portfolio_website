import React, { useState } from 'react';
import RadioButton from './RadioButton';
import { RadioButtonProps } from './RadioButton.types';

export default {
  title: 'Radio Button',
  component: RadioButton,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

const Template = (args: RadioButtonProps) => {
  const [selectedValue, setSelectedValue] = useState<string>('option1');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <RadioButton
        {...args}
        label="Option 1"
        checked={selectedValue === 'option1'}
        onChange={handleChange}
        name="example"
        value="option1"
      />
      <RadioButton
        {...args}
        label="Option 2"
        checked={selectedValue === 'option2'}
        onChange={handleChange}
        name="example"
        value="option2"
      />
      <RadioButton // Example of a disabled button
        {...args}
        label="Disabled Option"
        checked={selectedValue === 'option3'}
        onChange={handleChange}
        name="example"
        value="option3"
        disabled
      />
    </div>
  );
};

export const Default = Object.assign(Template.bind({}), {
  args: {
    label: 'Choose Option',
    name: 'example',
    checked: false,
    onChange: () => {},
    value: '',
    disabled: false,
  },
});
