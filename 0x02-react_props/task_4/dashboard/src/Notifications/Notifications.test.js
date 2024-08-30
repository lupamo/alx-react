import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications';

describe('Notifications component', () => {
  test('renders without crashing', () => {
    render(<Notifications />);
  });

  test('renders the menu item when displayDrawer is false', () => {
    render(<Notifications displayDrawer={false} />);
    const menuItem = screen.getByText(/Your notifications/i);
    expect(menuItem).toBeInTheDocument();
  });

  test('does not render div.Notifications when displayDrawer is false', () => {
    render(<Notifications displayDrawer={false} />);
    const notificationsDiv = screen.queryByRole('list');
    expect(notificationsDiv).toBeNull();
  });

  test('renders the menu item when displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} />);
    const menuItem = screen.getByText(/Your notifications/i);
    expect(menuItem).toBeInTheDocument();
  });

  test('renders div.Notifications when displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} />);
    const notificationsDiv = screen.getByRole('list');
    expect(notificationsDiv).toBeInTheDocument();
  });

  test('renders three NotificationItem elements', () => {
    render(<Notifications displayDrawer={true} />);
    const notificationItems = screen.getAllByRole('listitem');
    expect(notificationItems.length).toBe(3);
  });

  test('renders the text "Here is the list of notifications"', () => {
    render(<Notifications displayDrawer={true} />);
    const notificationText = screen.getByText(/Here is the list of notifications/i);
    expect(notificationText).toBeInTheDocument();
  });

  test('first NotificationItem renders correct HTML', () => {
    render(<Notifications displayDrawer={true} />);
    const notificationItems = screen.getAllByRole('listitem');
    const firstItem = notificationItems[0];
    expect(firstItem).toHaveTextContent('New course available');
  });
});
