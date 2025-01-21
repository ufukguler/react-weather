export const searchLocations = async (query: string) => {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=5&language=en`
  );
  const data = await response.json();
  return data.results || [];
};

export const fetchWeather = async (lat: number, lon: number) => {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
  );
  const data = await response.json();
  return data.current_weather;
};
