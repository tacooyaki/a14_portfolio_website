import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Resources from './Resources';
import { ResourcesProps } from './Resources.types';

const mockResources: ResourcesProps['resources'] = [
  {
    title: 'Resource 1',
    image: '/images/resource1.jpg',
    summary: 'Summary of this resource.',
    link: 'https://resource1.com',
  },
  {
    title: 'Resource 2',
    image: '/images/resource2.jpg',
    summary: 'Summary of this resource here.',
    link: 'https://resource2.com',
  },
];

describe('Resources Component', () => {
  test('renders resource titles', () => {
    render(<Resources resources={mockResources} />);
    const titleElements = screen.getAllByText(/Resource 1/i);
    expect(titleElements).toHaveLength(1);
  });

  test('renders resource images', () => {
    render(<Resources resources={mockResources} />);
    const imageElement = screen.getByAltText(/Resource 1/i);
    expect(imageElement).toBeInTheDocument();
  });

  test('renders resource links', () => {
    render(<Resources resources={mockResources} />);
    const linkElements = screen.getAllByText(/View Resource/i);
    expect(linkElements).toHaveLength(2);
    expect(linkElements[0].closest('a')).toHaveAttribute(
      'href',
      'https://resource1.com',
    );
    expect(linkElements[1].closest('a')).toHaveAttribute(
      'href',
      'https://resource2.com',
    );
  });
});
