import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Text from './Text';

describe('Text Component', () => {
  test('it should be visible', () => {
    render(<Text content="Hello World" />);
    const text = screen.getByText('Hello World');
    expect(text).toBeVisible();
  });

  test('it should have lower opacity when disabled', () => {
    render(<Text content="Hello World" disabled />);
    const text = screen.getByText('Hello World');
    expect(text).toHaveStyle('opacity: 0.5');
  });
});
