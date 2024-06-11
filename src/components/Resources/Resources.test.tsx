import React from 'react';
import { render, screen } from '@testing-library/react';
import Resources from './Resources';
import '@testing-library/jest-dom';

const mockResources = [
  {
    title: 'Resource 1',
    image: '/path-to-image.jpg',
    summary: 'Summary of resource 1',
    link: 'https://resource1.com',
  },
  {
    title: 'Resource 2',
    image: '/path-to-image-2.jpg',
    summary: 'Summary of resource 2',
    link: 'https://resource2.com',
  },
];

describe('Resources Component', () => {
  test('renders resource titles', () => {
    render(<Resources resources={mockResources} />);
    const titleElements = screen.getAllByRole('heading', {
      name: /Resource 1/i,
    });
    expect(titleElements).toHaveLength(1);
  });

  test('renders resource images', () => {
    render(<Resources resources={mockResources} />);
    const imageElement = screen.getByAltText(/Resource 1/i);
    expect(imageElement).toBeInTheDocument();
  });

  test('renders resource summaries', () => {
    render(<Resources resources={mockResources} />);
    const summaryElement = screen.getByText(/Summary of resource 1/i);
    expect(summaryElement).toBeInTheDocument();
  });

  test('renders resource links', () => {
    render(<Resources resources={mockResources} />);
    const linkElements = screen.getAllByText(/View Resource/i);
    const project1LinkElement = linkElements[0].closest('a');
    const project2LinkElement = linkElements[1].closest('a');

    expect(project1LinkElement).toHaveAttribute(
      'href',
      'https://resource1.com',
    );
    expect(project2LinkElement).toHaveAttribute(
      'href',
      'https://resource2.com',
    );
  });
});
