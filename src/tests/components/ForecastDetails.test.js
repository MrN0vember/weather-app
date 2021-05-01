import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  it("renders correctly", () => {
    const validProps = {
      date: 1111111,
      temperature: {
        min: 8,
        max: 17,
      },
      wind: {
        speed: 3,
        direction: "e",
      },
      humidity: 50,
    };
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
