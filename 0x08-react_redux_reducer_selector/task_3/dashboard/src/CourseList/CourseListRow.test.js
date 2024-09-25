import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
  test('renders one cell with colspan = 2 when isHeader is true and textSecondCell does not exist', () => {
    render(
      <table>
        <tbody>
          <CourseListRow isHeader={true} textFirstCell="Course Name" />
        </tbody>
      </table>
    );
    
    const cell = screen.getByText('Course Name');
    expect(cell).toBeInTheDocument();
    expect(cell.tagName).toBe('TH');
    expect(cell).toHaveAttribute('colspan', '2');
  });

  test('renders two cells when isHeader is true and textSecondCell is present', () => {
    render(
      <table>
        <tbody>
          <CourseListRow isHeader={true} textFirstCell="Course Name" textSecondCell="Credits" />
        </tbody>
      </table>
    );
    
    const firstCell = screen.getByText('Course Name');
    const secondCell = screen.getByText('Credits');
    
    expect(firstCell).toBeInTheDocument();
    expect(firstCell.tagName).toBe('TH');
    expect(secondCell).toBeInTheDocument();
    expect(secondCell.tagName).toBe('TH');
  });

  test('renders correctly two td elements within a tr element when isHeader is false', () => {
    render(
      <table>
        <tbody>
          <CourseListRow isHeader={false} textFirstCell="Math" textSecondCell="3" />
        </tbody>
      </table>
    );
    
    const row = screen.getByRole('row');
    const cells = screen.getAllByRole('cell');
    
    expect(row).toBeInTheDocument();
    expect(cells).toHaveLength(2);
    expect(cells[0].textContent).toBe('Math');
    expect(cells[1].textContent).toBe('3');
  });
});
