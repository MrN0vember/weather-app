import React from "react";
import PropTypes from "prop-types";

const ForecastSummary = (props) => {
    const {
        date,
        description,
        icon,
        tempreature
    } = props;
    
  return <div class="forecast-summary">
      <div className="forecast-summary_date">
          {date}
          </div>
          <div className="forecast-summary_icon">
              {icon}
          </div>
          <div className="forecast-summary_tempreature">
              {tempreature.max}
              &deg;C
          </div>
          <div className="forecast-summary__description">
        {description}
      </div>
  </div>;
};

ForecastSummary.PropTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  tempreature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};

export default ForecastSummary;
