import { WEATHER_DATA_RECEIVED } from './weather.actions';

const initialState = {
  weatherData: null
};

const weathersReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_DATA_RECEIVED: {
      return {
        ...state,
        weatherData: action.payload.weatherData
      };
    }
    default:
      return state;
  }
};

export default weathersReducer;
