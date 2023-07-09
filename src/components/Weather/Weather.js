import React from 'react';
import './Weather.css';

const weatherOptions = [
  {url: require('../../images/day/day-rain.svg').default, day: true, type: 'rain'},
  {url: require('../../images/day/day-sunny.svg').default, day: true, type: 'sunny'},
  {url: require('../../images/night/night-storm.svg').default, day: false, type: 'storm'},
  {url: require('../../images/night/night-snow.svg').default, day: false, type: 'snow'}
];

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
