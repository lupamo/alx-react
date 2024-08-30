import React from 'react';
import { render, screen } from '@testing-library/react';
import Notification from './Notifications';

describe('Notification component', () => {
	test('renders without crashing', () => {
		render(<Notification />);
	});

	test('renders three list items', () => {
		render(<Notification />);
		const listItems = screen.getAllByRole('listitem');
		expect(listItems.length).toBe(3);
	});
	test('renders the text "Here is the list of Notifications"', () => {
		render(<Notification />);
		const notificationText = screen.getByText(/Here is the list of notifications/i);
		expect(notificationText).toBeInTheDocument();
	});
});