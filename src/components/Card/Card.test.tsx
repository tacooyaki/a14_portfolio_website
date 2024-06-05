import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

describe('Card Component', () => {
  test('it should be visible', () => {
    render(<Card>Test Content</Card>);
    const cardElement = screen.getByText('Test Content');
    expect(cardElement).toBeVisible();
  });

  test('it should have changed opacity when disabled', () => {
    render(<Card disabled>Test Content</Card>);
    const cardElement = screen.getByText('Test Content');
    expect(cardElement).toHaveStyle('opacity: 0.5');
  });
});
