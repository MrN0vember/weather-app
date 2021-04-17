import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('Weather App', () => {
  render(<App location={location}/>);
  const linkElement = screen.getByText('Weather App');
  expect(linkElement).toBeInTheDocument();
});
