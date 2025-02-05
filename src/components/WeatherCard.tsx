import React from "react";
import {Location, WeatherData} from "../types";

interface Props {
  location: Location;
  data: WeatherData;
}

const WeatherCard = ({location, data}: Props) => {
  const getWindDirectionEmoji = (direction: number) => {
    if (direction >= 337.5 || direction < 22.5) return '⬆️';
    if (direction >= 22.5 && direction < 67.5) return '↗️';
    if (direction >= 67.5 && direction < 112.5) return '➡️';
    if (direction >= 112.5 && direction < 157.5) return '↘️';
    if (direction >= 157.5 && direction < 202.5) return '⬇️';
    if (direction >= 202.5 && direction < 247.5) return '↙️';
    if (direction >= 247.5 && direction < 292.5) return '⬅️';
    if (direction >= 292.5 && direction < 337.5) return '↖️';
    return '❓';
  };

  return (
    <div className="weather-card">
      <h2>{location.name}, {location.country}</h2>
      <p>🌡️ Temperature: <b>{data.temperature}°C</b></p>
      <p>💨 Wind Speed: <b>{data.windspeed} km/h</b></p>
      <p>{getWindDirectionEmoji(data.winddirection)} Wind Direction: <b>{data.winddirection}°</b></p>
    </div>
  );
};

export default WeatherCard;
