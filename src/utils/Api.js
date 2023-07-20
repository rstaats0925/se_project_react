import React from 'react';
// https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}

const latitude = 41.978050;
const longitude = -91.669861;
const APIkey = "aec2c819324155eb39246a231740e274";

export function getForcastWeather () {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.status}`);
      }
    })

    return weatherApi;
}

export function parseWeatherData(data) {
  return Math.round(data.main.temp);
}
