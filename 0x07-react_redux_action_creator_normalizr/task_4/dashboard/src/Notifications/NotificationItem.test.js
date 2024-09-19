import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';  // Import additional matchers
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  it('renders without crashing with value prop', () => {
    render(<NotificationItem type="default" value="Test notification" />);
    const listItem = screen.getByText(/Test notification/i);
    expect(listItem).toBeInTheDocument();
    expect(listItem).toHaveAttribute('data-notification-type', 'default');
  });

  it('renders without crashing with html prop', () => {
    const html = { __html: "<strong>Urgent requirement</strong> - complete by EOD" };
    render(<NotificationItem type="urgent" html={html} />);
    const listItem = screen.getByRole('listitem');
    expect(listItem).toBeInTheDocument();
    expect(listItem).toHaveAttribute('data-notification-type', 'urgent');
  });

  it('renders the correct data-notification-type attribute', () => {
    render(<NotificationItem type="info" value="Information notification" />);
    const listItem = screen.getByText(/Information notification/i);
    expect(listItem).toHaveAttribute('data-notification-type', 'info');
  });

  it('does not render text when html prop is provided', () => {
    const html = { __html: "<strong>Urgent requirement</strong> - complete by EOD" };
    render(<NotificationItem type="urgent" html={html} />);
    const listItem = screen.getByRole('listitem');
    expect(listItem).not.toHaveTextContent('Test notification');
  });
});
