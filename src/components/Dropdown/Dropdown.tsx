import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<{ disabled?: boolean }>`
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${(props) => (props.disabled ? '#f0f0f0' : 'white')};
`;

const Dropdown: React.FC<DropdownProps> = ({ options, onChange, disabled }) => (
  <StyledSelect
    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
      onChange(e.target.value)
    }
    disabled={disabled}
  >
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </StyledSelect>
);

export default Dropdown;
