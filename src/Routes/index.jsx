import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { CityWeather } from "../components/CityWeather";
import { NewCity } from "../components/NewCity";

export const RoutesComponents = () => {
  const { cities } = useSelector((state) => state.cities);
  return (
    <Routes>
      {cities.map((city, index) => {
        if (index === 0) {
          return (
            <Route path="/" key={index} element={<CityWeather city={city} />} />
          );
        }
        return (
          <Route
            path={city.location.name}
            key={index}
            element={<CityWeather city={city} />}
          />
        );
      })}
      <Route path="new" element={<NewCity />} />
    </Routes>
  );
};
