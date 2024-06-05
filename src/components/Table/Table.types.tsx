import React from 'react';

export interface TableProps {
  children: React.ReactNode;
  disabled?: boolean;
}

export interface TableRowProps {
  children: React.ReactNode;
  disabled?: boolean;
}

export interface TableCellProps {
  children: React.ReactNode;
  align?: 'left' | 'right' | 'center';
  disabled?: boolean;
}

export interface TableHeaderProps {
  children: React.ReactNode;
  disabled?: boolean;
}

export interface TableFooterProps {
  children: React.ReactNode;
  disabled?: boolean;
}
