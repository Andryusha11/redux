import { getWeatherData } from './weather.gateway';

export const GET_WEATHER_DATA = 'GET_WEATHER_DATA';
export const WEATHER_DATA_RECEIVED = 'WEATHER_DATA_RECEIVED';

export const weatherDataReceived = weatherData => {
  return {
    type: WEATHER_DATA_RECEIVED,
    payload: {
      weatherData
    }
  };
};
export const fetchWeatherData = () => {
  return dispatch => {
    getWeatherData().then(weatherData => {
      return dispatch(weatherDataReceived(weatherData));
    });
  };
};
