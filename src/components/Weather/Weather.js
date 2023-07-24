import React from 'react';
import './Weather.css';
import { weatherOptions } from '../../utils/constants.js';

function Weather ({day, type, temperature}) {
  const weatherObj = weatherOptions.filter((obj) => {
    return obj.day === day && obj.type === type;
  });

  let weatherSrc = weatherObj[0].url || "";

  return (
    <div className='weather'>
      <img className='weather__image' src={weatherSrc} alt="current weather"/>
      <p className='weather__temperature'>{temperature}&#176;F</p>
    </div>
  );
}

export default Weather;
