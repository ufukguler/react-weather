import React, {useState} from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import {fetchWeather} from "./services/weatherService";
import {WeatherData, Location} from "./types";

const App = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState<Location | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSelect = async (location: Location) => {
    try {
      setIsLoading(true);
      setWeather(null);
      setLocation(location);
      const weatherData = await fetchWeather(location.latitude, location.longitude);
      setTimeout(() => {
        setWeather(weatherData);
        setIsLoading(false);
      }, 250);
    } catch (error) {
      setWeather(null);
      setIsLoading(false);
      // todo show error
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <SearchBar onSelect={handleSelect}/>
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        (weather && location) && <WeatherCard location={location} data={weather}/>
      )}
    </div>
  );
};

export default App;
