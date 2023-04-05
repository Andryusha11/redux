import React from 'react';
import WeathersList from './WeathersList';

const Weather = () => {
  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <WeathersList />
    </main>
  );
};

export default Weather;
