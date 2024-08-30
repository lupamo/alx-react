import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
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
});