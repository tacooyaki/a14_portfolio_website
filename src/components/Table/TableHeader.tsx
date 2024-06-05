import React from 'react';
import styled from 'styled-components';
import { TableHeaderProps } from './Table.types';

const StyledHeader = styled.thead<{ disabled?: boolean }>`
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
`;

const TableHeader: React.FC<TableHeaderProps> = ({ children, disabled }) => (
  <StyledHeader disabled={disabled}>{children}</StyledHeader>
);

export default TableHeader;
