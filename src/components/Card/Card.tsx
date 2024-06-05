import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<{ disabled?: boolean }>`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  padding: 16px;
  border-radius: 10px;
  background-color: #20451c;
  margin: 10px;
  width: 50%;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  @media (max-width: 600px) {
    padding: 12px;
    margin: 5px;
  }
`;

const Card: React.FC<CardProps> = ({ children, disabled }) => (
  <StyledCard disabled={disabled}>{children}</StyledCard>
);

export default Card;
