import React from 'react';
import styled from 'styled-components';
import { TableRowProps } from './Table.types';

const StyledRow = styled.tr<{ disabled?: boolean }>`
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
`;

const TableRow: React.FC<TableRowProps> = ({ children, disabled }) => (
  <StyledRow disabled={disabled}>{children}</StyledRow>
);

export default TableRow;
