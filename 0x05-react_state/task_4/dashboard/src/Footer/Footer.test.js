import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

describe('Footer component', () => {
  it('renders without crashing', () => {
    render(<Footer />);
  });

  it('renders the text "Copyright"', () => {
    render(<Footer />);
    const copyrightText = screen.getByText(/Copyright/i);
    expect(copyrightText).toBeInTheDocument();
  });
});
