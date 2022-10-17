import React from "react";
import "./styles.css";

export const CurrentTemp = ({ current }) => {
  return (
    <div className="current_temp_wrapper">
      <div className="temp_img">
        <img src={current.condition.icon} alt={current.condition.text} />
      </div>
      <div className="current_temp">
        <h2 className="current_temp_text">
          {`${current.temp_c.toFixed(0)}`}&deg;
        </h2>
        <p className="current_weather_type">{current.condition.text}</p>
      </div>
    </div>
  );
};
