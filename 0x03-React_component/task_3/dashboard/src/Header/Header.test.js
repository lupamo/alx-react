import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header component', () => {
  it('renders without crashing', () => {
    render(<Header />);
  });

  it('renders img and h1 tags', () => {
    render(<Header />);
    const imgElement = screen.getByRole('img');
    const h1Element = screen.getByRole('heading', { level: 1 });

    expect(imgElement).toBeInTheDocument();
    expect(h1Element).toBeInTheDocument();
  });
});
