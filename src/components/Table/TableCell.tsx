import React from 'react';
import styled from 'styled-components';
import { TableCellProps } from './Table.types';

const StyledCell = styled.td<{ disabled?: boolean }>`
  padding: 8px;
  border: 1px solid #ccc;
  text-align: ${(props) => props.align || 'left'};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
`;

const TableCell: React.FC<TableCellProps> = ({ children, align, disabled }) => (
  <StyledCell align={align} disabled={disabled}>
    {children}
  </StyledCell>
);

export default TableCell;
