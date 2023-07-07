import React from 'react';
import './Weather.css';
// import sunnyWeather from '../../images/day/day-sunny.svg';
// import rainyWeather from '../../images/day/day-rain.svg';
// import stormyWeather from '../../images/night/night-storm.svg';
// import snowyWeather from '../../images/night/night-snow.svg';


const weatherOptions = [
  {url: require('../../images/day/day-rain.svg').default, day: true, type: 'rain'},
  {url: require('../../images/day/day-sunny.svg').default, day: true, type: 'sunny'},
  {url: require('../../images/night/night-storm.svg').default, day: false, type: 'storm'},
  {url: require('../../images/night/night-snow.svg').default, day: false, type: 'snow'}
];

function Weather ({day, type}) {
  const weatherObj = weatherOptions.filter((obj) => {
    return obj.day === day && obj.type === type;
  });

  let weatherSrc = weatherObj[0].url || "";

  return (
    <div className='weather'>
      <img className='weather__image' src={weatherSrc} alt="current weather"/>
      <p className='weather__temperature'>74&#176;F</p>
    </div>
  );
}

export default Weather;
