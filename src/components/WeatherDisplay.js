import React from "react";

const WeatherDisplay = ({ temperature, conditions }) => {
  return (
    <p>
      <span style={{ color: temperature > 20 ? "red" : "blue" }}>
        Temperature: {temperature}
      </span>
      <span>Conditions: {conditions}</span>
    </p>
  );
};

export default WeatherDisplay;
