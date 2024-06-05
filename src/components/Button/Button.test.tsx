import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';
import { act } from 'react';

describe('Button Component', () => {
  test('it should be visible', () => {
    act(() => {
      render(<Button label="Click me" />);
    });
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeVisible();
  });

  test('it should have grey background when disabled', () => {
    act(() => {
      render(<Button label="Click me" disabled />);
    });
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toHaveStyle('background-color: grey');
  });
});
