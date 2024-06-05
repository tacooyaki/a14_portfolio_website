import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Img from './Img';

describe('Img Component', () => {
  test('it should be visible', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Placeholder" />);
    const image = screen.getByAltText('Placeholder');
    expect(image).toBeVisible();
  });

  test('it should have lower opacity when disabled', () => {
    render(
      <Img src="https://via.placeholder.com/150" alt="Placeholder" disabled />
    );
    const image = screen.getByAltText('Placeholder');
    expect(image).toHaveStyle('opacity: 0.5');
  });
});
