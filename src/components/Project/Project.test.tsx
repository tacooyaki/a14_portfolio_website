import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Project from './Project';
import { ProjectProps } from './Project.types';

const projectProps: ProjectProps = {
  title: 'Project Title',
  description: 'This is a description of the project.',
  images: ['/path-to-image1.jpg', '/path-to-image2.jpg'],
  link: 'https://project.com',
  techList: ['React', 'TypeScript', 'Styled-Components'],
};

describe('Project Component', () => {
  test('renders project title', () => {
    render(<Project {...projectProps} />);
    const titleElement = screen.getByText(/Project Title/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders project image', () => {
    render(<Project {...projectProps} />);
    const imageElement = screen.getByAltText(/Project Title/i);
    expect(imageElement).toBeInTheDocument();
  });

  test('renders project link', () => {
    render(<Project {...projectProps} />);
    const linkElement = screen.getByText(/View Project/i);
    expect(linkElement.closest('a')).toHaveAttribute(
      'href',
      'https://project.com',
    );
  });
});
