import React from 'react';
import { render, screen } from '@testing-library/react';
import Skills from './Skills';
import '@testing-library/jest-dom';

const mockSkills = {
  description: 'These are my skills.',
  languages: ['JavaScript', 'TypeScript', 'Python'],
  frameworks: ['React', 'Next.js', 'Express'],
  tools: ['Git', 'Docker', 'Jenkins'],
};

describe('Skills Component', () => {
  test('renders skills description', () => {
    render(<Skills {...mockSkills} />);
    const descriptionElement = screen.getByText(/These are my skills./i);
    expect(descriptionElement).toBeInTheDocument();
  });

  test('renders languages', () => {
    render(<Skills {...mockSkills} />);
    const languageElement = screen.getByText(/JavaScript/i);
    expect(languageElement).toBeInTheDocument();
  });

  test('renders frameworks', () => {
    render(<Skills {...mockSkills} />);
    const frameworkElement = screen.getByText(/React/i);
    expect(frameworkElement).toBeInTheDocument();
  });

  test('renders tools', () => {
    render(<Skills {...mockSkills} />);
    const toolElement = screen.getByText(/Git/i);
    expect(toolElement).toBeInTheDocument();
  });
});
