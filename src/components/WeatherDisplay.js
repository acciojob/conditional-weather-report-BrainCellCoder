import React from "react";

const WeatherDisplay = ({ temperature, conditions }) => {
  return (
    <>
      <span style={{ color: temperature > 20 ? "red" : "blue" }}>
        Temperature: {temperature}
      </span>
      <span>Conditions: {conditions}</span>
    </>
  );
};

export default WeatherDisplay;
