import React from "react";

import "./informationDiv.css";
import Weather from "../Weather/weather.js";

const mobileDiv = () => {
  return (
    <div className="infoDiv">
      <Weather
        day="Thursday"
        weather="Sunny"
        temperature="25"
        humidity="30"
      ></Weather>
      <Weather
        day="Friday"
        weather="Rainy"
        temperature="18"
        humidity="70"
      ></Weather>
      <Weather
        day="Saturday"
        weather="Windy"
        temperature="17"
        humidity="50"
      ></Weather>
    </div>
  )
}

export default mobileDiv;