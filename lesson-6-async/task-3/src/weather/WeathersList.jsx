import React from 'react';
import { connect } from 'react-redux';
import { weatherDataSelector } from './weather.selectors';
import * as weatherActions from './weather.actions';
import { useEffect } from 'react';
import WeathersLIstItem from './WeathersLIstItem';

const WeathersList = ({ weatherData, fetchWeatherData }) => {
  useEffect(() => {
    fetchWeatherData();
  }, []);

  if (!weatherData) {
    return null;
  }
  return (
    <ul className="cities-list">
      {weatherData.map(citiesWeather => {
        return (
          <WeathersLIstItem
            key={citiesWeather.id}
            citiesWeather={citiesWeather}
          />
        );
      })}
    </ul>
  );
};

const mapState = state => {
  return {
    weatherData: weatherDataSelector(state)
  };
};

const mapDispatch = {
  fetchWeatherData: weatherActions.fetchWeatherData
};

export default connect(mapState, mapDispatch)(WeathersList);
