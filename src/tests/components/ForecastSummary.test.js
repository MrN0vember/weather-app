import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
    const validProps ={
        date: 1111111,
        description: "Stub Description",
        icon: "stubIcon",
        temperature: {
            max: 14,
            min: 7,
        },
    };
    it("renders correctly", () => {
        const { asFragment } = render(
          <ForecastSummary
            date={validProps.date}
            description={validProps.description}
            icon={validProps.icon}
            temperature={validProps.temperature}
          />
        );
        expect(asFragment()).toMatchSnapshot();
      });
      it("renders the correct vaules", () => {
        const { getByText, getByTestId } = render(
          <ForecastSummary
          date={validProps.date}
          description={validProps.description}
          icon={validProps.icon}
          temperature={validProps.temperature}
        />
      );
          expect(getByText("1111111")).toHaveClass("forecast-summary_date");
          expect(getByText("Stub Description")).toHaveClass("forecast-summary_description");
          expect(getByTestId("forecast-icon")).toHaveClass("forecast-summary_icon");
          expect(getByText("14°C")).toHaveClass("forecast-summary_temperature");
      });
    });
