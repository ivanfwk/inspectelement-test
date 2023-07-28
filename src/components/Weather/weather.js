import React from "react";

import "./weather.css";

const weather = ({day, weather, temperature, humidity}) => {
  let backgroundStyle = {};

  // Set the background of the div based on its weather
  if (weather === "Sunny") {
    backgroundStyle = {
      backgroundImage: 'url("https://images.unsplash.com/photo-1511836536898-6d6f1b8f6948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VubnklMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&w=1000&q=80")'
    }
  } else if (weather === "Rainy") {
    backgroundStyle = {
      backgroundImage: 'url("https://static.vecteezy.com/system/resources/thumbnails/007/669/074/small/rainy-season-background-with-umbrellas-free-vector.jpg")'
    }
  } else if (weather === "Windy") {
    backgroundStyle = {
      backgroundImage: 'url("https://media.istockphoto.com/id/821018644/video/hurricane-storm-satellite-view.jpg?s=640x640&k=20&c=890nxUc8YinjALFAz8Kv-PlSMEKsBksjatxFp4FK0Ig=")'
    }
  }

  return (
    <div className="weatherDiv" style={backgroundStyle}>
      {/* These data will be inputted in its parent component */}
      <h2>{day}</h2>
      <h3>{weather}</h3>
      <h3>{temperature}°C</h3>
      <h3>Humidity: {humidity}%</h3>
    </div>
  )
}

export default weather;