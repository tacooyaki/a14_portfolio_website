import React from 'react';
import { render, screen } from '@testing-library/react';
import DeveloperSetup from './DeveloperSetup';
import '@testing-library/jest-dom';

const mockSetup = {
  webstormSetup: 'My custom WebStorm settings and extensions.',
  terminalSetup: 'My terminal setup with custom themes and plugins.',
  preferredFont: 'Fira Code',
};

describe('DeveloperSetup Component', () => {
  test('renders WebStorm setup', () => {
    render(<DeveloperSetup {...mockSetup} />);
    const webstormElement = screen.getByText(
      /My custom WebStorm settings and extensions./i,
    );
    expect(webstormElement).toBeInTheDocument();
  });

  test('renders terminal setup', () => {
    render(<DeveloperSetup {...mockSetup} />);
    const terminalElement = screen.getByText(
      /My terminal setup with custom themes and plugins./i,
    );
    expect(terminalElement).toBeInTheDocument();
  });

  test('renders preferred font', () => {
    render(<DeveloperSetup {...mockSetup} />);
    const fontElement = screen.getByText(/Fira Code/i);
    expect(fontElement).toBeInTheDocument();
  });
});
