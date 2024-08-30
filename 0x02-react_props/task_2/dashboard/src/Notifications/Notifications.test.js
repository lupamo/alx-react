import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notification from './Notifications';

describe('Notification component', () => {
  test('renders without crashing', () => {
    render(<Notification />);
  });

  test('renders three NotificationItem elements', () => {
    render(<Notification />);
    const notificationItems = screen.getAllByRole('listitem');
    expect(notificationItems.length).toBe(3);
  });

  test('renders the text "Here is the list of Notifications"', () => {
    render(<Notification />);
    const notificationText = screen.getByText(/Here is the list of notifications/i);
    expect(notificationText).toBeInTheDocument();
  });

  test('first NotificationItem renders correct HTML', () => {
    render(<Notification />);
    const notificationItems = screen.getAllByRole('listitem'); 
    const firstItem = notificationItems[0];
    expect(firstItem).toHaveTextContent('New course available');
  });
});