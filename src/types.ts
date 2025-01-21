export interface Location {
    name: string;
    latitude: number;
    longitude: number;
    country: string;
}

export interface WeatherData {
    temperature: number;
    windspeed: number;
    winddirection: number;
}
