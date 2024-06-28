import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Work from './Work';
import { ProjectProps } from '../Project';

const mockProjects: ProjectProps[] = [
  {
    title: 'Project 1',
    description: 'Description of project 1',
    images: ['/path-to-image1.jpg', '/path-to-image2.jpg'], // Updated to an array of images
    link: 'https://project1.com',
    techList: ['React', 'TypeScript', 'Styled-Components'],
  },
  {
    title: 'Project 2',
    description: 'Description of project 2',
    images: ['/another-path-to-image1.jpg', '/another-path-to-image2.jpg'], // Updated to an array of images
    link: 'https://project2.com',
    techList: ['JavaScript', 'CSS', 'HTML'],
  },
];

describe('Work Component', () => {
  test('renders work section title', () => {
    render(<Work projects={mockProjects} />);
    const titleElement = screen.getByText(/Work/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders project components', () => {
    render(<Work projects={mockProjects} />);
    const project1TitleElement = screen.getByRole('heading', {
      name: /Project 1/i,
    });
    const project2TitleElement = screen.getByRole('heading', {
      name: /Project 2/i,
    });

    expect(project1TitleElement).toBeInTheDocument();
    expect(project2TitleElement).toBeInTheDocument();
  });

  test('renders project descriptions', () => {
    render(<Work projects={mockProjects} />);
    const project1DescriptionElement = screen.getByText(
      /Description of project 1/i,
    );
    const project2DescriptionElement = screen.getByText(
      /Description of project 2/i,
    );

    expect(project1DescriptionElement).toBeInTheDocument();
    expect(project2DescriptionElement).toBeInTheDocument();
  });

  test('renders project links', () => {
    render(<Work projects={mockProjects} />);
    const linkElements = screen.getAllByText(/View Project/i);
    const project1LinkElement = linkElements[0].closest('a');
    const project2LinkElement = linkElements[1].closest('a');

    expect(project1LinkElement).toHaveAttribute('href', 'https://project1.com');
    expect(project2LinkElement).toHaveAttribute('href', 'https://project2.com');
  });
});
