import React from 'react';

const WeathersLIstItem = ({ citiesWeather }) => {
  const { temperature, name } = citiesWeather;
  return (
    <li className="city">
      <span className="city__name">{name}</span>
      <span className="city__temperature">{`${temperature} F`}</span>
    </li>
  );
};

export default WeathersLIstItem;
