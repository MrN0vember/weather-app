import { render, screen } from '@testing-library/react';
import App from '../components/App';

describe("App", () => {
  it("renders city and country", () => {
    const validProps = {
      location: {
        city: "Manchester",
        country: "United Kingdom",
      },
      forecasts: [
        {
          date: 1111111,
          description: "Mock description",
          humidity: 50,
          icon: "800",
          temperature: {
            min: 9,
            max: 17,
          },
          wind: {
            speed: 7,
            direction: "e",
          },
        },
      ],
    };

    render(
      <App forecasts={validProps.forecasts} location={validProps.location} />
    );
    const copy = screen.getByText(/Manchester, United Kingdom/i);
    expect(copy).toBeInTheDocument();
  });
});