import {useState} from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import {fetchWeather} from "./services/weatherService";
import {WeatherData, Location} from "./types";

const App = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [city, setCity] = useState<string>("");

  const handleSelect = async (location: Location) => {
    setCity(location.name);
    const weatherData = await fetchWeather(location.latitude, location.longitude);
    setWeather(weatherData);
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <SearchBar onSelect={handleSelect}/>
      {weather && <WeatherCard city={city} data={weather}/>}
    </div>
  );
};

export default App;
