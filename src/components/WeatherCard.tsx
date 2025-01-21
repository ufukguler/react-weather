import {WeatherData} from "../types";

interface Props {
  city: string;
  data: WeatherData;
}

const WeatherCard = ({city, data}: Props) => {
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
      <h2>{city}</h2>
      <p>🌡️ Temperature: {data.temperature}°C</p>
      <p>💨 Wind Speed: {data.windspeed} km/h</p>
      <p>{getWindDirectionEmoji(data.winddirection)} Wind Direction: {data.winddirection}°</p>
    </div>
  );
};

export default WeatherCard;
