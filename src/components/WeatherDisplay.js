import React from "react";

const WeatherDisplay = ({ temp, cond }) => {
  return (
    <>
      <p>
        Temperature:{" "}
        <span style={{ color: temp > 20 ? "red" : "blue" }}>{temp}</span>
      </p>
    </>
  );
};

export default WeatherDisplay;
