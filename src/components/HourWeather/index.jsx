import React from "react";
import moment from "moment/moment";

import "./styles.css";

export const HourWeather = ({ weather }) => {
  const time = moment(weather.time).format("ha");
  const date = moment(weather.time).format("ddd");
  return (
    <div className="weather_box">
      <div className="box_item">
        <p>{date}</p>
        <p>{time}</p>
      </div>
      <div className="box_item">
        <img src={weather.condition.icon} alt="weather" />
      </div>
      <div className="box_item">
        <p>{weather.temp_c.toFixed(0)}&deg;</p>
        <p>{weather.condition.text}</p>
      </div>
      <div className="box_item">
        <p>{weather.wind_mph.toFixed(0)}mph</p>
        <p>Wind</p>
      </div>
    </div>
  );
};
