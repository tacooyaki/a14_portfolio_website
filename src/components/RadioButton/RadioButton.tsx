import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const StyledLabel = styled.label`
  margin: 5px;
  font-size: 16px;
`;

const StyledRadio = styled.input.attrs({ type: 'radio' })`
  margin-right: 5px;
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  checked,
  onChange,
  value,
  disabled,
}) => (
  <StyledLabel>
    <StyledRadio
      name={name}
      checked={checked}
      onChange={onChange}
      value={value}
      disabled={disabled}
    />
    {label}
  </StyledLabel>
);

export default RadioButton;
