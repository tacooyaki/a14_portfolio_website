import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import '@testing-library/jest-dom';

const mockLinks = [
  { name: 'Home', url: '#' },
  { name: 'About', url: '#about' },
  { name: 'Work', url: '#work' },
  { name: 'Skills', url: '#skills' },
  { name: 'Resources', url: '#resources' },
  { name: 'Contact', url: '#contact' },
];

describe('Navbar Component', () => {
  test('renders all links', () => {
    render(<Navbar links={mockLinks} />);
    mockLinks.forEach((link) => {
      const linkElement = screen.getByText(link.name);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
