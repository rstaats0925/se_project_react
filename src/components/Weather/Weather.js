import React from 'react';
import './Weather.css';
import weatherCard from '../../images/day/day-sunny.svg';

function Weather () {
  return (
    <div className='weather'>
      <img className='weather__image' src={weatherCard} alt="current weather"/>
      <p className='weather__temperature'>74&#176;F</p>
    </div>
  );
}

export default Weather;