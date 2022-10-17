import React from "react";
import { CurrentTemp } from "../CurrentTemp";
import { LocationAndDate } from "../LocationAndDate";
import { TodayWeather } from "../TodayWeather";
import { WeatherMoreDetails } from "../WeatherMoreDetails";
import "./styles.css";

export const CityWeatherItem = ({ city }) => {
  const { location, current, forecast } = city;

  return (
    <div className="city_weather_item">
      <div className="weathr_main_info">
        <LocationAndDate location={location} />
        <CurrentTemp current={current} />
        <WeatherMoreDetails
          current={current}
          details={forecast.forecastday[0].day}
        />
      </div>

      <TodayWeather details={forecast.forecastday[0].hour} current={current} />
    </div>
  );
};
