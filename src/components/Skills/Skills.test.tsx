import React from 'react';
import { render, screen } from '@testing-library/react';
import Skills from './Skills';
import '@testing-library/jest-dom';
import { FaReact, FaPython } from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiGit,
  SiDocker,
  SiJenkins,
} from 'react-icons/si';

const mockSkills = {
  description: 'These are my skills.',
  languages: [
    { name: 'JavaScript', icon: FaReact },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Python', icon: FaPython },
  ],
  frameworks: [
    { name: 'React', icon: FaReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Express', icon: SiExpress },
  ],
  tools: [
    { name: 'Git', icon: SiGit },
    { name: 'Docker', icon: SiDocker },
    { name: 'Jenkins', icon: SiJenkins },
  ],
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
