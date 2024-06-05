import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroImage from './HeroImage';

describe('HeroImage Component', () => {
  test('it should be visible', () => {
    render(<HeroImage bgImage="url-to-some-image" text="Hero Text" />);
    const heroText = screen.getByText('Hero Text');
    expect(heroText).toBeVisible();
  });

  test('it should have a darker overlay when disabled', () => {
    render(<HeroImage bgImage="url-to-some-image" text="Hero Text" disabled />);
    const heroImage = screen.getByTestId('hero-image');
    expect(heroImage).toHaveStyle('opacity: 0.5');
    expect(heroImage).toHaveStyle('background-blend-mode: darken');
  });
});
