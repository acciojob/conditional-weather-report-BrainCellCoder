import React, { useEffect, useState } from "react";
import "./../styles/App.css";
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [temperature, setTemperature] = useState(0);
  const [conditions, setConditions] = useState("");

  useEffect(() => {
    setTemperature(25);
    setConditions("Sunny");
  }, []);
  return (
    <div>
      {/* Do not remove the main div */}
      <WeatherDisplay temperature={temperature} conditions={conditions} />
    </div>
  );
};

export default App;
