import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.span<LabelProps>`
  color: ${(props) => props.color || 'black'};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const Label: React.FC<LabelProps> = ({ children, disabled, color }) => (
  <StyledLabel disabled={disabled} color={color}>
    {children}
  </StyledLabel>
);

export default Label;
