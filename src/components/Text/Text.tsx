import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<{ disabled?: boolean }>`
  color: black;
  font-size: 14px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'text')};
`;

const Text: React.FC<TextProps> = ({ content, disabled }) => (
  <StyledText disabled={disabled}>{content}</StyledText>
);

export default Text;
