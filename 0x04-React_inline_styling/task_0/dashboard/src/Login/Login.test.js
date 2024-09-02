import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './Login';

describe('Login component', () => {
  it('renders without crashing', () => {
    render(<Login />);
  });

  it('renders two input tags and two label tags', () => {
    render(<Login />);
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const passwordInput = screen.getByLabelText(/password/i);
    
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    const emailLabel = screen.getByText(/email/i);
    const passwordLabel = screen.getByText(/password/i);

    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
  });
});
