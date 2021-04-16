import { render, screen } from '@testing-library/react';
import App from './App';

test('Weather App', () => {
  render(<App />);
  const linkElement = screen.getByText(/Weather App/i);
  expect(linkElement).toBeInTheDocument();
});