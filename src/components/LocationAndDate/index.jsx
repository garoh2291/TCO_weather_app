import React from "react";
import "./styles.css";
import * as moment from "moment";

export const LocationAndDate = ({ location }) => {
  const dateNow = moment(location.localtime).format("dddd MM YYYY");
  return (
    <div className="loacation_date_wrapper">
      <h1 className="location_name">{`${location.name}, ${location.country}`}</h1>
      <p className="location_date">{dateNow}</p>
    </div>
  );
};
