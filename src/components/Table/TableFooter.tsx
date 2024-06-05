import React from 'react';
import styled from 'styled-components';
import { TableFooterProps } from './Table.types';

const StyledFooter = styled.tfoot<{ disabled?: boolean }>`
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'default')};
`;

const TableFooter: React.FC<TableFooterProps> = ({ children, disabled }) => (
  <StyledFooter disabled={disabled}>{children}</StyledFooter>
);

export default TableFooter;
