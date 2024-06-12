import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';
import '@testing-library/jest-dom';

const mockSubmit = jest.fn();

describe('ContactForm Component', () => {
  test('renders contact form inputs', () => {
    render(<ContactForm onSubmit={mockSubmit} />);
    const nameInput = screen.getByPlaceholderText(/Your Name/i);
    const emailInput = screen.getByPlaceholderText(/Your Email/i);
    const messageInput = screen.getByPlaceholderText(/Your Message/i);
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
  });

  test('submits the form with correct data', () => {
    render(<ContactForm onSubmit={mockSubmit} />);
    const nameInput = screen.getByPlaceholderText(/Your Name/i);
    const emailInput = screen.getByPlaceholderText(/Your Email/i);
    const messageInput = screen.getByPlaceholderText(/Your Message/i);
    const submitButton = screen.getByText(/Send Message/i);

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, {
      target: { value: 'Hello, this is a test message.' },
    });
    fireEvent.click(submitButton);

    expect(mockSubmit).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello, this is a test message.',
    });

    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(messageInput).toHaveValue('');
  });
});
