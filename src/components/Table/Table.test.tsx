import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Table from './Table';

describe('Table Component', () => {
  test('it should be visible', () => {
    render(
      <Table>
        <tbody>
          <tr>
            <td>Test Data</td>
          </tr>
        </tbody>
      </Table>,
    );
    const tableCell = screen.getByText('Test Data');
    expect(tableCell).toBeVisible();
  });

  test('it should appear disabled when specified', () => {
    render(
      <Table disabled>
        <tbody>
          <tr>
            <td>Test Data</td>
          </tr>
        </tbody>
      </Table>,
    );
    const table = screen.getByRole('table');
    expect(table).toHaveStyle('opacity: 0.5');
  });

  test('renders multiple rows', () => {
    render(
      <Table>
        <tbody>
          <tr>
            <td>Row 1, Cell 1</td>
            <td>Row 1, Cell 2</td>
          </tr>
          <tr>
            <td>Row 2, Cell 1</td>
            <td>Row 2, Cell 2</td>
          </tr>
        </tbody>
      </Table>,
    );
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(2);
  });
});
