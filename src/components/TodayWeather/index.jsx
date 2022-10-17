import React from "react";
import { HourWeather } from "../HourWeather";
import "./styles.css";

export const TodayWeather = ({ details, current }) => {
  const { last_updated_epoch } = current;
  const weatherForDay = details.filter(
    (detail) => detail.time_epoch >= last_updated_epoch
  );

  return (
    <div className="todays_weather_wrapper">
      <h6 className="todays_waether_text">Today's weather</h6>
      <div className="weather_box_wrapper">
        {weatherForDay.map((weather, index) => (
          <HourWeather key={index} weather={weather} />
        ))}
      </div>
    </div>
  );
};
