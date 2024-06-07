import React from 'react';
import { render, screen } from '@testing-library/react';
import Project from './Project';
import '@testing-library/jest-dom';

describe('Project Component', () => {
  const projectProps = {
    title: 'Project Title',
    description: 'This is a description of the project.',
    image: '/path-to-image.jpg',
    link: 'https://project.com',
    techList: ['React', 'TypeScript', 'Styled-Components'],
  };

  test('renders project title', () => {
    render(<Project {...projectProps} />);
    const titleElement = screen.getByText(/Project Title/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders project description', () => {
    render(<Project {...projectProps} />);
    const descriptionElement = screen.getByText(
      /This is a description of the project./i
    );
    expect(descriptionElement).toBeInTheDocument();
  });

  test('renders project image', () => {
    render(<Project {...projectProps} />);
    const imageElement = screen.getByAltText(/Project Title/i);
    expect(imageElement).toBeInTheDocument();
  });

  test('renders project link', () => {
    render(<Project {...projectProps} />);
    const linkElement = screen.getByText(/View Project/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders project tech list', () => {
    render(<Project {...projectProps} />);
    const techElement = screen.getByText(/React/i);
    expect(techElement).toBeInTheDocument();
  });
});
