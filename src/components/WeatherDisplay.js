import React from "react";

const WeatherDisplay = ({ temperature, conditions }) => {
  return (
    <>
      <p style={{ color: temperature > 20 ? "red" : "blue" }}>
        Temperature: {temperature}
      </p>
    </>
  );
};

export default WeatherDisplay;
