import React from 'react';
import './WeatherCard.css';
import { weatherOptions } from '../../utils/constants.js';
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext';

function WeatherCard ({day, type, temperature}) {
  const {currentTemperatureUnit} = React.useContext(CurrentTemperatureUnitContext);
  const weatherObj = weatherOptions.filter((obj) => {
    return obj.day === day && obj.type === type;
  });

  let weatherSrc = weatherObj[0].url || "";

  return (
    <div className='weather'>
      <img className='weather__image' src={weatherSrc} alt="current weather"/>
      <p className='weather__temperature'>{temperature[currentTemperatureUnit]}&#176;{currentTemperatureUnit}</p>
    </div>
  );
}

export default WeatherCard;
