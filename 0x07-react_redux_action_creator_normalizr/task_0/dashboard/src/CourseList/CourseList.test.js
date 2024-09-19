import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CourseList from './CourseList';

describe('CourseList Component', () => {
  test('renders CourseList component without crashing', () => {
    render(<CourseList />);
    const table = screen.getByRole('table');  // Look for the table by its role only
    expect(table).toBeInTheDocument();
  });

  test('renders the 5 different rows', () => {
    render(<CourseList />);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(5);
  });
});
