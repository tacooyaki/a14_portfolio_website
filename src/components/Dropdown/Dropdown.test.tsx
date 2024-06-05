import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dropdown from './Dropdown';

describe('Dropdown Component', () => {
  test('it should be visible', () => {
    render(
      <Dropdown
        options={[{ value: '1', label: 'Option 1' }]}
        onChange={() => {}}
      />
    );
    const dropdownElement = screen.getByRole('combobox');
    expect(dropdownElement).toBeVisible();
  });

  test('it should have grey background when disabled', () => {
    render(
      <Dropdown
        options={[{ value: '1', label: 'Option 1' }]}
        onChange={() => {}}
        disabled
      />
    );
    const dropdownElement = screen.getByRole('combobox');
    expect(dropdownElement).toHaveStyle('background-color: #f0f0f0');
  });
});
