import React from "react";
import "./styles.css";

export const WeatherMoreDetails = ({ current, details }) => {
  return (
    <div className="weather_more_details_wrapper">
      <div className="first_line">
        <div className="current-stats__value ">
          {details.maxtemp_c.toFixed(0)}&deg;
        </div>
        <div className="current-stats__label">High</div>
        <div className="current-stats__value">
          {" "}
          {details.mintemp_c.toFixed(0)}&deg;
        </div>
        <div className="current-stats__label">Low</div>
      </div>
      <div>
        <div className="current-stats__value">
          {current.wind_mph.toFixed(0)}mph
        </div>
        <div className="current-stats__label">Wind</div>
        <div className="current-stats__value">{current.humidity}%</div>
        <div className="current-stats__label">Humidity</div>
      </div>
      <div>
        <div className="current-stats__value">
          {current.feelslike_c.toFixed(0)}&deg;
        </div>
        <div className="current-stats__label">Feels Like</div>
        <div className="current-stats__value">
          {details.daily_chance_of_rain}%
        </div>
        <div className="current-stats__label">Chance of rain</div>
      </div>
    </div>
  );
};
