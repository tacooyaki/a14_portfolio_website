import React from 'react';
import Table from './Table';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableCell from './TableCell';
import TableFooter from './TableFooter';
import { TableProps } from './Table.types';

export default {
  title: 'Table',
  component: Table,
  subcomponents: { TableHeader, TableRow, TableCell, TableFooter },
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

const Template = (args: TableProps) => (
  <Table {...args}>
    <TableHeader disabled={args.disabled}>
      <TableRow disabled={args.disabled}>
        <TableCell disabled={args.disabled}>Header 1</TableCell>
        <TableCell disabled={args.disabled}>Header 2</TableCell>
        <TableCell disabled={args.disabled}>Header 3</TableCell>
      </TableRow>
    </TableHeader>
    <tbody>
      <TableRow disabled={args.disabled}>
        <TableCell disabled={args.disabled}>Data 1</TableCell>
        <TableCell disabled={args.disabled}>Data 2</TableCell>
        <TableCell disabled={args.disabled}>Data 3</TableCell>
      </TableRow>
      <TableRow disabled={args.disabled}>
        <TableCell disabled={args.disabled}>Data 4</TableCell>
        <TableCell disabled={args.disabled}>Data 5</TableCell>
        <TableCell disabled={args.disabled}>Data 6</TableCell>
      </TableRow>
    </tbody>
    <TableFooter disabled={args.disabled}>
      <TableRow disabled={args.disabled}>
        <TableCell disabled={args.disabled}>Footer 1</TableCell>
        <TableCell disabled={args.disabled}>Footer 2</TableCell>
        <TableCell disabled={args.disabled}>Footer 3</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);

export const Default = Object.assign(Template.bind({}), {
  args: {
    disabled: false,
  },
});
