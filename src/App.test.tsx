/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home text', () => {
  render(<App />);
  const textElement = screen.getByText('Page not found');
  expect(textElement).toBeInTheDocument();
});
