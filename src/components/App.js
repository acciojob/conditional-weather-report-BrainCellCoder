import React, { useEffect, useState } from "react";
import "./../styles/App.css";
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [temp, setTemp] = useState(0);
  const [cond, setCond] = useState("");

  useEffect(() => {
    setTemp(25);
    setCond("Sunny");
  }, []);
  return (
    <div>
      {/* Do not remove the main div */}
      <WeatherDisplay temp={temp} cond={cond} />
    </div>
  );
};

export default App;
