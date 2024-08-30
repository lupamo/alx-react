import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';
import Login from '../Login/Login.js';
import CourseList from '../CourseList/CourseList.js';

describe('App component', () => {
  // Existing tests
  test('render a div with class App-header', () => {
    render(<App />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveClass('App-header');
  });

  test('render a div with class App-body', () => {
    render(<App />);
    const bodyElement = screen.getByText(/Login to access the full dashboard/i).parentElement;
    expect(bodyElement).toHaveClass('App-body');
  });

  test('renders a div with the class App-footer', () => {
    render(<App />);
    const footerElement = screen.getByText(/Copyright/i).parentElement;
    expect(footerElement).toHaveClass('App-footer');
  });

  // New tests
  test('displays Login component when isLoggedIn is false', () => {
    render(<App isLoggedIn={false} />);
    expect(screen.getByText(/Login to access the full dashboard/i)).toBeInTheDocument(); // Adjust based on actual text in Login component
    expect(screen.queryByRole('table')).toBeNull(); // Adjust if CourseList is not a table
  });

  test('displays CourseList component when isLoggedIn is true', () => {
    render(<App isLoggedIn={true} />);
    expect(screen.queryByText(/Login to access the full dashboard/i)).toBeNull(); // Adjust based on actual text in Login component
    expect(screen.getByRole('table')).toBeInTheDocument(); // Adjust if CourseList is not a table
  });
});
