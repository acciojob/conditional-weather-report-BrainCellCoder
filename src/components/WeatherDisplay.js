import React from "react";

const WeatherDisplay = ({ temperature, conditions }) => {
  return (
    <>
      <p>
        Temperature:{" "}
        <span style={{ color: temperature > 20 ? "red" : "blue" }}>
          {temperature}
        </span>
      </p>
    </>
  );
};

export default WeatherDisplay;
