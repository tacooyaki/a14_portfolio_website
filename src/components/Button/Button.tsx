import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
  font-size: calc(10px + 0.5vw);
  transition:
    background-color 0.3s,
    transform 0.2s;

  &:hover {
    background-color: lightblue;
  }

  &:active {
    background-color: darkblue;
    transform: scale(0.98);
  }

  &:disabled {
    background-color: grey;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 8px 15px;
  }
`;

const Button: React.FC<ButtonProps> = ({ disabled, label, onClick }) => (
  <StyledButton disabled={disabled} onClick={onClick}>
    {label}
  </StyledButton>
);

export default Button;

// Doing a pre-commit hook test commit
