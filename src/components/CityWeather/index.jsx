import React from "react";
import { CityWeatherItem } from "../CityWeatherItem";
import "./styles.css";
export const CityWeather = ({ city }) => {
  return (
    <div className="city_wrapper">
      <CityWeatherItem city={city} />
    </div>
  );
};
