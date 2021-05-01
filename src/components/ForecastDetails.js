import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const ForecastDetails = ({ forecast }) => {
  const { date, temperature, wind, humidity } = forecast;
  return (
    <div className="forecast-details">
      <p className="forecast-details_date">
        {moment(date).format("ddd Do MMM")}
      </p>
      <p className="forecast-details_tempreature">
        <b> Max Tempreature:</b>
        {temperature.max}
        &deg;C
      </p>
      <p className="forecast-details_tempreature">
        <b> Min Tempreature:</b>
        {temperature.min}
        &deg;C
      </p>
      <p className="forecast-details_humidity">
        <b>Humidity:</b>
        {`${humidity}%`}
      </p>
      <p className="forecast-details_wind">
        <b>Wind:</b>
        {`${wind.speed}mph`}
      </p>
    </div>
  );
};

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    humidity: PropTypes.number,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }),
  }).isRequired,
};

export default ForecastDetails;
