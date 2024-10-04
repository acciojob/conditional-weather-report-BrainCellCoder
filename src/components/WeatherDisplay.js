import React from "react";

const WeatherDisplay = ({ temperature, conditions }) => {
  return (
    <>
      <p style={{ color: temperature > 20 ? "red" : "blue" }}>
        Temperature: {temperature}
      </p>
      <p>Conditions: {conditions}</p>
    </>
  );
};

export default WeatherDisplay;
