import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Table from './Table';

describe('Table Component', () => {
  test('it should be visible', () => {
    render(
      <Table>
        <tr>
          <td>Test Data</td>
        </tr>
      </Table>
    );
    const tableCell = screen.getByText('Test Data');
    expect(tableCell).toBeVisible();
  });

  test('it should appear disabled when specified', () => {
    render(
      <Table disabled>
        <tr>
          <td>Test Data</td>
        </tr>
      </Table>
    );
    const table = screen.getByRole('table');
    expect(table).toHaveStyle('opacity: 0.5');
  });
});
