import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Label from './Label';

describe('Label Component', () => {
  test('it should be visible', () => {
    render(<Label>Sample Label</Label>);
    const labelElement = screen.getByText('Sample Label');
    expect(labelElement).toBeVisible();
  });

  test('it should have lower opacity when disabled', () => {
    render(<Label disabled>Sample Label</Label>);
    const labelElement = screen.getByText('Sample Label');
    expect(labelElement).toHaveStyle('opacity: 0.5');
  });
});
