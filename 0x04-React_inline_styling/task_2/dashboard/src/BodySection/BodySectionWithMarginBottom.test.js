import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection'; // Make sure to import BodySection

describe('BodySectionWithMarginBottom', () => {
  test('renders BodySection with margin bottom', () => {
    const title = 'Test Title';
    const children = <div>Test Content</div>;

    render(
      <BodySectionWithMarginBottom title={title}>{children}</BodySectionWithMarginBottom>
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
    expect(screen.getByTestId('body-section')).toHaveStyle('margin-bottom: 40px;');
  });

  test('renders BodySection without children', () => {
    const title = 'Test Title';

    render(<BodySectionWithMarginBottom title={title} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByTestId('body-section')).toHaveStyle('margin-bottom: 40px;');
  });

  test('applies styles correctly', () => {
    const title = 'Test Title';
    const children = <div>Test Content</div>;

    render(
      <BodySectionWithMarginBottom title={title}>{children}</BodySectionWithMarginBottom>
    );

    const bodySectionElement = screen.getByTestId('body-section');
    expect(bodySectionElement).toHaveStyle('margin-bottom: 40px;');
  });
});
